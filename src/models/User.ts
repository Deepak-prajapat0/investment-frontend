import { Schema, model, models, Document } from "mongoose";


// interface for TypeScript
export interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
    isAdmin?: boolean; 
}

//  schema
const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = models.users || model<IUser>("users", UserSchema);

export default User;
