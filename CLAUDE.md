# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Server-rendered marketing site for a Polish passenger/parcel bus service (Trans-Speed, busemdobelgii.pl) running routes to Belgium, the Netherlands and Germany. All user-facing content, URLs and page titles are in Polish. It is a NestJS 5 (beta) app on Express that renders Handlebars views; there is no database and no client-side framework.

The toolchain is from 2018 (TypeScript 2.x, Jest 21, Gulp 3, Webpack 4, tslint). The app runs on Node 16 (`/usr/local/bin/node16` on the server), pinned by `.nvmrc` and `engines` in `package.json`. Locally, switch to it with `nvm use` before running npm commands; newer Node versions are untested with this toolchain. Several dependencies are pinned to `latest` in `package.json`.

## Commands

```bash
npm install
npm run start          # ts-node, serves on PORT or 3000
npm run start:dev      # nodemon, watches src/**/*.ts (not .handlebars; templates are read per request anyway)
npm run build          # rm -rf dist && tsc && scripts/copy-views.js (copies .handlebars into dist/)
npm run start:prod     # build, then node dist/main.js
npm run format         # prettier on **/*.ts (singleQuote, trailingComma: all)
npm test               # jest, rootDir src, matches *.spec.ts (there are none yet)
npx jest path/to/file.spec.ts   # single test
npm run test:e2e       # jest with test/jest-e2e.json
```

`tsc` alone does not copy `.handlebars` files into `dist/`, so always build with `npm run build`.

`test/app.e2e-spec.ts` is the stale Nest starter test: it expects `GET /` to return `Hello World!`, but `/` now renders the home page, so the test fails.

## Architecture

- `src/main.ts` is the real entry point. It configures Express by hand on the Nest app: a 301 redirect from any `*.busemdobelgii.pl` subdomain to `https://busemdobelgii.pl` (skipped for hosts containing `dev.`; other hosts are served as they are), `res.locals.url` (used for the canonical/hreflang links in the layout), express-handlebars with `handlebars-helpers` plus `express-handlebars-sections`, body-parser, compression, and static serving of `public/` with a 30-day maxAge. `main.hmr.ts` and `webpack.config.js` are an unused HMR leftover from the starter that skips all of this setup.
- **One feature folder per page**: each `src/<page>/` holds a controller and its `.handlebars` view side by side. The views root is `src/` itself (`app.set('views', __dirname + '/')`), so `@Render('offer/offer-belgium')` resolves to `src/offer/offer-belgium.handlebars`. Controllers return `{ title, description }` for the `<title>` and meta description, and some register several Polish SEO alias routes for one view (for example `przewozy-do-belgii` and `busy-do-belgii`).
- **Adding a page**: create the folder with a controller and view, then register the controller in `src/app.module.ts`, where every controller is listed by hand.
- **Layout**: `src/views/layouts/main.handlebars` with the partials `header`, `footer`, `facebook` and `login-modal`. Views insert page-specific assets with `{{#section 'scripts'}}` / `{{#section 'styles'}}`.
- **Forms**: `POST /kontakt` (contact) and `POST /rezerwacja` (reservations, `ReservationDto`) build an HTML string from the raw body and email it through `core/MailService.ts` (nodemailer, mydevil SMTP) to `Config.DEFAULT_MAIL_RECIPIENT` in `app.config.ts`. Nothing is validated or escaped, and sending is fire-and-forget.
- `error/*.filter.ts` exist, but their registration in `main.ts` is commented out.
- **Frontend**: `public/assets` is a vendored theme (Bootstrap 4, jQuery, the `hs.*` component scripts, SCSS under `include/scss`). There is no frontend build step: edit `public/assets/css/front.css` and `public/assets/js/custom-front.js` directly. The `.min` files are not regenerated automatically.

## Deployment

Container deploys read `PORT` from the environment (default 3000):

- **Dockerfile**: a multi-stage `node:16-alpine` build that runs `npm run build`; the runtime image holds only production dependencies, `dist/` and `public/`.
- **Railpack**: it picks up Node 16 from `engines`, runs `npm ci` and `npm run build`, and starts with `node dist/main.js` (set in `railpack.json`). On Railway, a root `Dockerfile` takes precedence over Railpack unless the service's builder is set to Railpack.

The legacy host is mydevil.net (Phusion Passenger). `app.js` at the repo root just requires `./dist/main`. `deploy-dev.sh` and `deploy-prod.sh` run `tsc`, then `gulp deploy.dev` / `deploy.prod` (copy the views and rsync `dist/`, `public/`, `app.js` and `package.json` over SSH), then run `npm install` remotely and `devil www restart`. The dev domain is `dev.busemdobelgii.pl` and production is `busemdobelgii.pl`. These scripts push to live servers. They depend on Gulp 3, which crashes on Node 16 (`primordials is not defined`), so they need an older Node or a Gulp upgrade.
