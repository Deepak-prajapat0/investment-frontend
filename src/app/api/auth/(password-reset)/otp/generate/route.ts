import connectDB from "@/config/db";
import { MESSAGE } from "@/constants/message";
import { sendMail } from "@/helpers/sendMail";
import { validateRequestBody } from "@/helpers/validationHelper";
import Otp from "@/models/Otp";
import User from "@/models/User";
import { generateOtp } from "@/utils/generateOtp";
import { generateOtpValidation } from "@/utils/validation";
import { differenceInSeconds, isBefore } from "date-fns";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        await connectDB()
        // const body = await req.json();

        const validatedData = validateRequestBody(generateOtpValidation, await req.json());

        if (validatedData instanceof NextResponse) {
            return validatedData; // Return validation error response
        }
        const { email } = validatedData;


        if (!email) {
            return NextResponse.json({ success: false, message: MESSAGE.EMAIL_REQUIRED }, { status: 400 });
        }

        const user = await User.findOne({ email, isDeleted: false, isAdmin: false });

        if (!user) {
            return NextResponse.json({ success: false, message: MESSAGE.USER_NOT_FOUND }, { status: 404 });
        }


        const existingOtp = await Otp.findOne({ userId: user._id, isVerified: false });

        if (existingOtp) {
            const now = new Date();

            // check if the existing OTP is still valid
            if (isBefore(now, existingOtp.expiresAt)) {
                // if OTP is still valid, return the remaining time
                const remainingTime = differenceInSeconds(existingOtp.expiresAt, now);
                if (remainingTime > 0) {
                    return NextResponse.json({
                        success: true,
                        message: MESSAGE.OTP_SEND_SUCCESS,
                        data: { email, time: remainingTime },
                    }, { status: 200 });
                }
            }
            // If OTP is expired, mark it as verified
            existingOtp.isVerified = true;
            await existingOtp.save();
        }

        const emailOtp = generateOtp(4);

        const isEmailSent = await sendMail(user.email, user.name, emailOtp);

        if (!isEmailSent) {
            return NextResponse.json({ success: false, message: MESSAGE.INTERNAL_ERROR }, { status: 500 });
        }

        await Otp.create({
            userId: user._id,
            otp: emailOtp,
            expiresAt: new Date(Date.now() + 2 * 60 * 1000), // OTP expires in 2 minutes
        });
        return NextResponse.json({ success: true, message: MESSAGE.OTP_SEND_SUCCESS, data: { email: email, time: 120 } }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, message: MESSAGE.INTERNAL_ERROR }, { status: 500 });
        
    }
}