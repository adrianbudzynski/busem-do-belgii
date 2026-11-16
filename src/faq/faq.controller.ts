import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class FaqController {
    constructor() {
    }

    @Get('faq')
    @Render('faq/faq')
    index() {
        return {
            title: 'Najczęściej zadawane pytania przez naszych klientów | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Zapoznaj się z najczęściej zadawanymi pytaniami naszych klientów.'
        };
    }

}
