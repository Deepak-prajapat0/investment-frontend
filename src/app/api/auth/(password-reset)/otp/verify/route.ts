import connectDB from "@/config/db";
import { MESSAGE } from "@/constants/message";
import { sendMail } from "@/helpers/sendMail";
import { validateRequestBody } from "@/helpers/validationHelper";
import Otp from "@/models/Otp";
import User from "@/models/User";
import { generateOtp } from "@/utils/generateOtp";
import { verifyOtpValidation } from "@/utils/validation";
import { differenceInSeconds, isBefore } from "date-fns";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
   try {
       await connectDB()
       const body = await req.json();

       const validatedData = validateRequestBody(verifyOtpValidation, body);

       if (validatedData instanceof NextResponse) {
           return validatedData; // Return validation error response
       }
       const { otp, email } = validatedData;


       const user = await User.findOne({ email, isDeleted: false, isAdmin: false })

       if (!user) {
           return NextResponse.json({ success: false, message: MESSAGE.USER_NOT_FOUND }, { status: 404 });
       }

       const verifiedOtp = await Otp.findOne({ otp: otp, userId: user._id, isVerified: false });

       if (!verifiedOtp) {
           return NextResponse.json({ success: false, message: MESSAGE.OTP_EXPIRED }, { status: 400 });
       }

       if (verifiedOtp.expiresAt < new Date()) {

           await Otp.findOneAndUpdate({ otp: otp, userId: user._id }, { $set: { isVerified: true } })

           return NextResponse.json({ success: false, message: MESSAGE.OTP_EXPIRED }, { status: 400 });
       }

       await Otp.findOneAndUpdate({ otp: otp, userId: user._id }, { $set: { isVerified: true } })

       return NextResponse.json({ success: true, message: MESSAGE.OTP_VERIFIED, data: {} }, { status: 200 });
   } catch (error) {
         console.error("Error", error);
         return NextResponse.json({ success: false, message: MESSAGE.INTERNAL_ERROR }, { status: 500 });
   }
}