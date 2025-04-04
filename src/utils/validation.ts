import { MESSAGE } from "@/constants/message";
import { z } from "zod";


// login validation
export const loginValidation = z
    .object({
        email: z.string().email(MESSAGE.EMAIL_FORMAT).nonempty(MESSAGE.EMAIL_REQUIRED),
        password: z.string().min(8, MESSAGE.PASSWORD_MIN_LENGTH).nonempty(MESSAGE.PASSWORD_REQUIRED),
    }).required({ email: true, password: true }).strict()


// user validation
export const userAddValidation = z
    .object({
        name: z.string().min(3, MESSAGE.NAME_MIN_LENGTH),
        email: z.string().email(MESSAGE.EMAIL_FORMAT),
        phone: z.string().regex(/^\d{0,15}$/, MESSAGE.PHONE_MAX_LENGTH),
        amount: z.string().regex(/^\d{0,}$/, MESSAGE.AMOUNT_SHOULD_BE_NUMBER),
        date: z.string(),
    }).required({ name: true, email: true, phone: true }).strict()


// user update validation

export const userUpdateValidation = z
    .object({
        name: z.string().min(3, MESSAGE.NAME_MIN_LENGTH),
        email: z.string().email(MESSAGE.EMAIL_FORMAT),
        phone: z.string().regex(/^\d{0,15}$/, MESSAGE.PHONE_MAX_LENGTH),
    }).strict()

// transaction validation

export const transactionValidation = z
    .object({
        userId: z.string(),
        amount: z.string().regex(/^\d{0,}$/, MESSAGE.AMOUNT_SHOULD_BE_NUMBER),
        date: z.string(),
        type: z.enum(["credit", 'debit']),
    }).required({ userId: true, amount: true, date: true, type: true }).strict()


// otp validation

export const generateOtpValidation = z
    .object({
        email: z.string().min(8, MESSAGE.EMAIL_REQUIRED).email(MESSAGE.EMAIL_FORMAT),
    })
    .strict() // Ensure no extra keys are present

// update password validation

export const resetPasswordValidation = z
    .object({
        password: z.string().min(8, MESSAGE.PASSWORD_MIN_LENGTH),
    }).required({ password: true }).strict()


// verify otp validation
export const verifyOtpValidation = z
    .object({
        email: z.string().email(MESSAGE.EMAIL_FORMAT),
        otp: z.string().regex(/^\d{4}$/, MESSAGE.OTP_REQUIRED),
    }).required({ email: true, otp: true }).strict()

