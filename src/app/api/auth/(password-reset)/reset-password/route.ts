import connectDB from "@/config/db";
import { MESSAGE } from "@/constants/message";
import { sendMail } from "@/helpers/sendMail";
import Otp from "@/models/Otp";
import User from "@/models/User";
import { generateOtp } from "@/utils/generateOtp";
import { resetPasswordValidation } from "@/utils/validation";
import { differenceInSeconds, isBefore } from "date-fns";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
   try {
       await connectDB()

       const validBody = resetPasswordValidation.safeParse(await req.json());
       if (!validBody.success) {
           return NextResponse.json(
               { success: false, message: MESSAGE.VALIDATION_ERROR, errors: validBody.error.errors },
               { status: 400 }
           );
       }

       const { password } = validBody.data;



       if (!password) {
           return NextResponse.json({ success: false, message: MESSAGE.EMAIL_REQUIRED }, { status: 400 });
       }

       const user = await User.findOne({ email, isDeleted: false })

       if (!user) {
           return NextResponse.json({ success: false, message: MESSAGE.USER_NOT_FOUND }, { status: 404 });
       }


       const existingOtp = await Otp.findOne({ userId: user._id, isVerified: false });

       if (existingOtp) {
           const isExpired = isBefore(existingOtp.expiresAt, new Date());
           if (!isExpired) {
               const time = differenceInSeconds(new Date(), new Date(existingOtp?.expiresAt));
               if (time < 120) {
                   return NextResponse.json({ success: true, message: MESSAGE.OTP_SEND_SUCCESS, data: { email: email, time } }, { status: 200 });
               }
           }
           // If OTP is expired, delete it
           existingOtp.isVerified = true;
           await existingOtp.save();
       }

       // generate new OTP
       const emailOtp = generateOtp(4);

       await Otp.create({
           userId: user._id,
           otp: emailOtp,
           expiresAt: new Date(Date.now() + 2 * 60 * 1000), // otp expire after 2 minutes
       });

       // send email
       const isEmailSent = await sendMail(user.email, user.name, emailOtp);

       if (!isEmailSent) {
           return NextResponse.json({ success: false, message: MESSAGE.INTERNAL_ERROR }, { status: 500 });
       }

       return NextResponse.json({ success: true, message: MESSAGE.OTP_SEND_SUCCESS, data: { email: email, time: 120 } }, { status: 200 });
   } catch (error) {
         console.error("Error", error);
         return NextResponse.json({ success: false, message: MESSAGE.INTERNAL_ERROR }, { status: 500 });
   }
}