import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class HomeController {
    constructor() {
    }

    @Get()
    @Render('home/home')
    index() {
        return {
            title: 'Trans-Speed | Busy do Belgii, Holandii i Niemiec | Przewozy międzynarodowe osób oraz przesyłek',
            description: 'Oferujemy Państwu transport osób oraz przesyłek busem do Belgii, Holandii i Niemiec.'
        };
    }

    @Get('index.html')
    @Render('home/home')
    indexHtml() {
        return this.index();
    }

}
