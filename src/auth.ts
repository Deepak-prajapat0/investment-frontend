import NextAuth from "next-auth";
import authOptions from "./authOptions"; // Ensure this path is correct

export const {auth,handlers} = NextAuth(authOptions);
