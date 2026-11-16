import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class AboutController {
    constructor() {
    }

    @Get('o-firmie')
    @Render('about/about')
    index() {
        return {
            title: 'Poznaj naszą firmę Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed Goluch Sławomir. Przewozy międzynarodowe - Belgia, Holandia, Niemcy. Powstaliśmy w oparciu o wieloletnie doświadczenie w dziedzinie przewozów międzynarodowych. Nasi kierowcy dołożą wszelkich starań by podróż z nami była miła, przyjemna i bezpieczna, a czas w podróży był jak najkrótszy. Naszymi priorytetami są bezpieczństwo i jak najkrótszy czas przejazdu.'
        };
    }

}
