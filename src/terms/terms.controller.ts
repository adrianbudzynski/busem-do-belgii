import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class TermsController {
    constructor() {
    }

    @Get('regulamin')
    @Render('terms/terms')
    index() {
        return {
            title: 'Regulamin usług | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.'
        };
    }

}
