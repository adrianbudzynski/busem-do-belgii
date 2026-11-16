import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class OfferNetherlandController {
    constructor() {
    }

    @Get('przewozy-do-holandii')
    @Render('offer/offer-netherland')
    index() {
        return {
            title: 'Busy do Holandii | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.'
        };
    }

    @Get('busy-do-holandii')
    @Render('offer/offer-netherland')
    index2() {
        return {
            title: 'Busy do Holandii | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.',
        };
    }

}
