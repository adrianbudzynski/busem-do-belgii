import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class OfferBelgiumController {
    constructor() {
    }

    @Get('przewozy-do-belgii')
    @Render('offer/offer-belgium')
    index() {
        return {
            title: 'Busy do Belgii | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.',
        };
    }

    @Get('busy-do-belgii')
    @Render('offer/offer-belgium')
    index2() {
        return {
            title: 'Busy do Belgii | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.',
        };
    }

}
