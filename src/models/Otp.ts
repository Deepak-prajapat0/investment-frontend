import { Schema, model, models, Document, Model, Types } from "mongoose";


// interface for TypeScript
export interface IOtp extends Document {
  userId: Types.ObjectId;
  otp: number;
  isVerified: boolean;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

//  schema
const OtpSchema = new Schema<IOtp>(
    {
        otp: {
            type: Number,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Otp: Model<IOtp> = models.otps || model<IOtp>("otps", OtpSchema);

export default Otp;
