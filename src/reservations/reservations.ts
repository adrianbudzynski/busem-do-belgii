import {Get, Controller, Render, Post, Body} from '@nestjs/common';
import {ReservationDto} from './reservation.dto';
import {MailService} from '../core/MailService';
import {Config} from '../app.config';

@Controller()
export class ReservationsController {

    constructor(private mailService: MailService) {
    }

    @Get('rezerwacja')
    @Render('reservations/reservations')
    index() {
        return {
            title: 'System rezerwacji online | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
        };
    }

    @Post('rezerwacja')
    @Render('reservations/confirmation')
    createReservation(@Body() body: ReservationDto) {

        const replyTo = body.email;
        const contactData = `${body.name} ${body.surname} ${body.email} ${body.phone}`;
        const title = `Nowa rezerwacja od ${contactData}`;
        const message = `
        <h3>${title}</h3>
        <p>WYJAZD Z: <strong>${body.fromAddress} ${body.fromZipCode} ${body.fromCity} ${body.fromCountry}<strong></p>
        <p>MIEJSCE DOCELOWE: <strong>${body.toAddress} ${body.toZipCode} ${body.toCity} ${body.toCountry}<strong></p>
        <h4>DATA WYJAZDU: ${body.date}</h4>`;

        this.mailService.sendMessage(Config.DEFAULT_MAIL_RECIPIENT, replyTo, title, message);

        return {
            title: 'Trans-Speed | Busy do Belgii, Holandii i Niemiec',
        };
    }

}
