import { ZodSchema } from "zod";
import { NextResponse } from "next/server";

export function validateRequestBody(schema: ZodSchema, body: any) {
    const parsedData = schema.safeParse(body);

    if (!parsedData.success) {
        return NextResponse.json(
            {
                success: false,
                message: (parsedData.error.errors[0]?.message == 'Required' ? "Missing required fields" : parsedData.error.errors[0]?.message) || "Validation failed",
            },
            { status: 400 }
        );
    }

    return parsedData.data; // Return validated data
}
