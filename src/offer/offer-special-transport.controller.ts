import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class OfferSpecialTransportController {
    constructor() {
    }

    @Get('wyjazdy-okolicznosciowe')
    @Render('offer/offer-special-transport')
    index() {
        return {
            title: 'Wyjazdy okolicznościowe | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.'
        };
    }

}
