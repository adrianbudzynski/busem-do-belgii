import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Handlebars, SafeString} from 'handlebars';
import * as HandlebarsHelpers from 'handlebars-helpers';
import * as HandlebarsSectionHelpers from 'express-handlebars-sections';
import * as exphbs from 'express-handlebars';
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compress from 'compression';
import {HttpStatus} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalFilters(new NotFoundExceptionFilter());
    // app.useGlobalFilters(new AnyExceptionFilter());

    // Send subdomains of the site (e.g. www.) to the apex domain. Other hosts, such as a
    // hosting platform's generated domain or localhost, are served as they are.
    const CANONICAL_DOMAIN = 'busemdobelgii.pl';
    app.use('/*', (req, res, next) => {
        const host = (req.headers.host || '').split(':')[0].toLowerCase();
        if (host.endsWith('.' + CANONICAL_DOMAIN) && host.indexOf('dev.') === -1) {
            res.redirect(HttpStatus.MOVED_PERMANENTLY, 'https://' + CANONICAL_DOMAIN + req.originalUrl);
        } else {
            next();
        }
    });

    app.use((req, res, next) => {
        res.locals.url = req.originalUrl;
        next();
    });

    const helpers = HandlebarsHelpers();
    const sectionHelpers = HandlebarsSectionHelpers();

    app.engine('handlebars', exphbs({
        layoutsDir: __dirname + '/views/layouts/',
        defaultLayout: 'main',
        partialsDir: [__dirname + '/views/partials/'],
        helpers: Object.assign(helpers, {
            section: sectionHelpers,
        }),
    }));

    app.set('views', __dirname + '/');
    app.set('view engine', 'handlebars');

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compress());

    app.use(express.static(__dirname + '/../public', {etag: false, maxAge: 86400000 * 30}));

    await app.listen(process.env.PORT || 3000);
}

bootstrap();

process.on('uncaughtException', function (err) {
    console.log('FATAL: Uncaught exception.');
    console.log(err.stack || err);
});