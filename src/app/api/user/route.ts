import connectDB from "@/config/db";
import User from "@/models/User";
import generatePassword from "@/utils/generatePassword";
import { NextRequest, NextResponse } from "next/server";
import Transaction from "@/models/Transaction";


import { userAddValidation } from "@/utils/validation";
import { verifyToken } from "@/middleware/verifyToken";
import { MESSAGE } from "@/constants/message";
import { validateRequestBody } from "@/helpers/validationHelper";

export async function POST(req: NextRequest) {
    await connectDB()

    const authResponse: any = await verifyToken(req);

    if (!authResponse.success) return authResponse;

    if (!authResponse?.decoded?.isAdmin) {
        return NextResponse.json({ success: false, message: MESSAGE.ADMIN_ACCESS_REQUIRED }, { status: 401 });
    }

    const body = await req.json();
    const validatedData = validateRequestBody(userAddValidation, body);

    if (validatedData instanceof NextResponse) {
        return validatedData; // Return validation error response
    }

    const { name, email, phone, amount, date } = validatedData;

    const userExist = await User.findOne({ email: email, phone: phone, isDeleted: false });

    if (userExist) {
        return NextResponse.json({ success: false, message: MESSAGE.USER_EMAIL_EXIST }, { status: 400 });
    }

    const password = generatePassword(name, phone)

    const user = await User.create({ name, phone, email, password })

    if (amount) {
        await Transaction.create({ userId: user._id, amount, date, type: "credit" })
    }

    return NextResponse.json({ success: true, message: MESSAGE.USER_CREATED, data: { ...user } }, { status: 200 });

}

export async function GET(req: NextRequest) {

    try {

        await connectDB();

        const authResponse: any = await verifyToken(req);

        if (!authResponse.success) return authResponse;

        if (!authResponse?.decoded?.isAdmin) {
            return NextResponse.json({ success: false, message: MESSAGE.INVALID_TOKEN }, { status: 401 });
        }

        const users = await User.aggregate([
            {
                $match: { isAdmin: false, isDeleted: false } // Get only non-admin users
            },
            {
                $lookup: {
                    from: "transactions", // Match with the transactions collection
                    localField: "_id",
                    foreignField: "userId",
                    as: "transactions"
                }
            },
            {
                $addFields: {
                    totalCredit: {
                        $sum: {
                            $map: {
                                input: "$transactions",
                                as: "transaction",
                                in: {
                                    $cond: [
                                        { $eq: ["$$transaction.type", "credit"] },
                                        { $toDouble: "$$transaction.amount" },
                                        0
                                    ]
                                }
                            }
                        }
                    },
                    totalDebit: {
                        $sum: {
                            $map: {
                                input: "$transactions",
                                as: "transaction",
                                in: {
                                    $cond: [
                                        { $eq: ["$$transaction.type", "debit"] },
                                        { $toDouble: "$$transaction.amount" },
                                        0
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            {
                $addFields: {
                    totalAmount: { $subtract: ["$totalCredit", "$totalDebit"] }
                }
            },
            {
                $project: {
                    name: 1, // Keep only relevant fields
                    email: 1,
                    totalCredit: 1,
                    totalDebit: 1,
                    totalAmount: 1,
                    createdAt: 1
                }
            }
        ]);

        return NextResponse.json({ success: true, data: users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: MESSAGE.INTERNAL_ERROR }, { status: 500 });
    }
}




