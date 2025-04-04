import { getEmailFormat } from '@/utils/getEmailFormat';
import {createTransport} from 'nodemailer';

export const sendMail = async (email:string, name:string, otp:number) => {
    try {
        const transporter = createTransport({
            service: "gmail",
            pool: true,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            cc: [],
            subject: 'Reset password code',
            html: getEmailFormat(name, otp),
        };

        const info = await transporter.sendMail(mailOptions);
        transporter.close();
        if(info){
            console.log('Email sent: ' + info.response);
            return true;
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};