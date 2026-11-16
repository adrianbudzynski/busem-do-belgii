import {Get, Controller, Render, Post, Body} from '@nestjs/common';
import {MailService} from '../core/MailService';
import {Config} from '../app.config';

@Controller()
export class ContactController {
    constructor(private mailService: MailService) {
    }

    @Get('kontakt')
    @Render('contact/contact')
    index() {
        return {
            title: 'Formularz kontaktowy | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Masz pytania związane z naszymi usługami. Zadaj je przez nasz formularz kontaktowy. Nasz pracownik odpowie na nie.'
        };
    }

    @Post('kontakt')
    @Render('contact/confirmation')
    confirmation(@Body() body) {

        const replyTo = body.email;
        const contactData = `${body.name} ${body.email} ${body.phone}`;
        const title = `Pytanie od ${contactData}`;
        const message = `
        <h3>Klient ${contactData} właśnie zadał pytanie poprzez stronę</h3>
        <h4>${body.subject}</h4>
        <p>${body.text}</p>`;

        this.mailService.sendMessage(Config.DEFAULT_MAIL_RECIPIENT, replyTo, title, message);

        return {
            title: 'Formularz kontaktowy | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Masz pytania związane z naszymi usługami. Zadaj je przez nasz formularz kontaktowy. Nasz pracownik odpowie na nie.'
        };
    }

}
