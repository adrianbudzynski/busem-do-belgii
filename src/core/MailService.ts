import { Injectable } from '@nestjs/common';
import * as NodeMailer from 'nodemailer';

@Injectable()
export class MailService {

    sendMessage(recipentAddress: string, replyToAddress: string, subject: string, messageHTML: string) {
        console.log('Mail sending');

        const transporter = NodeMailer.createTransport({
            host: 'mail13.mydevil.net',
            port: 587,
            secure: false,
            auth: {
                user: 'mailer@busemdobelgii.pl',
                pass: 'IgPkXguiQ3YZWCpgKAb3',
            },
        });

        const mailOptions = {
            from: '"BusemDoBelgii.pl" <mailer@busemdobelgii.pl>',
            to: recipentAddress,
            replyTo: replyToAddress,
            subject,
            html: messageHTML,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    }


}
