import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class OfferPackagesController {
    constructor() {
    }

    @Get('przewoz-przesylek')
    @Render('offer/offer-packages')
    index() {
        return {
            title: 'Transport przesyłek Trans-Speed | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.'
        };
    }

}
