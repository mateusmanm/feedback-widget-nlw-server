import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a92dd233983c7c",
        pass: "9456b4b65dfcc5",
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mateus Martins <mateus.martins@gmail.com>',
            subject: subject,
            html: body
        })
    }
}