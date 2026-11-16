import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class MapController {
    constructor() {
    }

    @Get('mapa')
    @Render('map/map')
    index() {
        return {
            title: 'Mapa zasięgu | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.'
        };
    }

}
