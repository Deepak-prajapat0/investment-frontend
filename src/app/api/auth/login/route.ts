import connectDB from "@/config/db";
import { COOKIE_TOKEN } from "@/constants/constant";
import { MESSAGE } from "@/constants/message";
import { validateRequestBody } from "@/helpers/validationHelper";
import User from "@/models/User";
import { generateToken } from "@/utils/generateToken";
import { loginValidation } from "@/utils/validation";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        await connectDB()
        const body = await req.json();

        const validatedData = validateRequestBody(loginValidation, body);

        if (validatedData instanceof NextResponse) {
            return validatedData; // Return validation error response
        }

        const { email, password } = await validatedData;

        const user = await User.findOne({ email, isDeleted: false })

        if (!user?._id) {
            return NextResponse.json({ success: false, message: MESSAGE.USER_NOT_FOUND }, { status: 404 });
        }

        if (user.password !== password) {
            return NextResponse.json({ success: false, message: MESSAGE.INVALID_CREDENTIALS }, { status: 404 });
        }

        const token = generateToken(user._id.toString(), email, user?.isAdmin)

        const response = NextResponse.json(
            { success: true, message: MESSAGE.LOGIN_SUCCESS, data: { name: user?.name, email: user?.email, isAdmin: user?.isAdmin, token } },
            { status: 200 }
        );

        response.cookies.set(COOKIE_TOKEN, token, {
            httpOnly: process.env.NODE_ENV === "production",  // Prevents JavaScript access (XSS protection)
            secure: process.env.NODE_ENV === "production", // Secure flag in production
            sameSite: "strict",  // Prevents CSRF attacks
            maxAge: 7 * 24 * 60 * 60, // 7 days
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ success: false, message: MESSAGE.INTERNAL_ERROR }, { status: 500 });
    }
}