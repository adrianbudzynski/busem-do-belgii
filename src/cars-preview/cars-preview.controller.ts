import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class CarsPreviewController {
    constructor() {
    }

    @Get('nasze-auta')
    @Render('cars-preview/cars-preview')
    index() {

        const filter = [
            {name: 'Samochody', code: 'car'},
            {name: 'Wnętrze', code: 'interior'},
            {name: 'Miejsce bagażowe', code: 'bagage'},
            {name: 'Mercedes', code: 'mercedes'},
            {name: 'Renault', code: 'renault'},
        ];

        const gallery = [

            // SPRINTER

            {
                description: '',
                url: 'Sprinter/DSC_0038.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0049.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0087.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0025_2.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0028.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0029.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0030.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0031.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0032.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0033.jpg',
                filters: 'car mercedes bagage',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0035.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0036.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0037.jpg',
                filters: 'car mercedes interior',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0059.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0090.jpg',
                filters: 'car mercedes',
            },
            {
                description: '',
                url: 'Sprinter/DSC_0006.jpg',
                filters: 'car mercedes',
            },

            // RENAULT

            {
                description: '',
                url: 'Renault/DSC_0107.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0109.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0119.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0128.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0129.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0136.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0139.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0140.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0144.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0145.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0148.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0150.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0152.jpg',
                filters: 'car renault bagage',
            },
            {
                description: '',
                url: 'Renault/DSC_0154.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0186.jpg',
                filters: 'car renault',
            },
            {
                description: '',
                url: 'Renault/DSC_0196.jpg',
                filters: 'car renault interior',
            },
            {
                description: '',
                url: 'Renault/DSC_0207.jpg',
                filters: 'car renault interior',
            },
        ];

        return {
            title: 'Galeria - Poznaj nasze auta | Trans-Speed | Busy do Belgii, Holandii i Niemiec',
            description: 'Trans-Speed oferuje przewóz osób busem z Polski do Holandii, Belgii oraz Niemiec jak również z Holandii, Belgii oraz Niemiec do Polski.',
            gallery,
            filter,
        };
    }

}
