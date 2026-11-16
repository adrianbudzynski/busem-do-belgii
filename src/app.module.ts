import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {HomeController} from './home/home.controller';
import {FaqController} from './faq/faq.controller';
import {ContactController} from './contact/contact.controller';
import {OfferBelgiumController} from './offer/offer-belgium.controller';
import {OfferNetherlandController} from './offer/offer-netherland.controller';
import {OfferGermanyController} from './offer/offer-germany.controller';
import {OfferPackagesController} from './offer/offer-packages.controller';
import {OfferSpecialTransportController} from './offer/offer-special-transport.controller';
import {PricingController} from './pricing/pricing.controller';
import {AboutController} from './about/about.controller';
import {CarsPreviewController} from './cars-preview/cars-preview.controller';
import {ReservationsController} from './reservations/reservations';
import {MapController} from './map/map.controller';
import {TermsController} from './terms/terms.controller';
import {MailService} from './core/MailService';

@Module({
    imports: [],
    controllers: [
        HomeController,
        FaqController,
        ContactController,
        OfferBelgiumController,
        OfferNetherlandController,
        OfferGermanyController,
        OfferPackagesController,
        OfferSpecialTransportController,
        PricingController,
        AboutController,
        CarsPreviewController,
        ReservationsController,
        MapController,
        TermsController
    ],
    providers: [AppService, MailService],
})
export class AppModule {
}
