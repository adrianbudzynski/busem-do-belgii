import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class OfferGermanyController {
    constructor() {
    }

    @Get('przewozy-do-niemiec')
    @Render('offer/offer-germany')
    index() {
        return {
            title: 'Busy do Niemiec | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.',
        };
    }

    @Get('busy-do-niemiec')
    @Render('offer/offer-germany')
    index2() {
        return {
            title: 'Busy do Niemiec | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.',
        };
    }

}
