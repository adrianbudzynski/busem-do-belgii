import { expect, test } from '@playwright/test';

const pages = [
  '/',
  '/busy-do-belgii',
  '/busy-do-holandii',
  '/busy-do-niemiec',
  '/przewozy-do-belgii',
  '/przewozy-do-holandii',
  '/przewozy-do-niemiec',
  '/przewoz-przesylek',
  '/wyjazdy-okolicznosciowe',
  '/cennik',
  '/faq',
  '/kontakt',
  '/rezerwacja',
  '/o-firmie',
  '/nasze-auta',
  '/mapa',
  '/regulamin',
];

for (const path of pages) {
  test(`${path} renders with layout and no broken local assets`, async ({ page, baseURL }) => {
    const origin = new URL(baseURL!).origin;
    const failedAssets: string[] = [];
    page.on('response', (response) => {
      if (response.url().startsWith(origin) && response.status() >= 400) {
        failedAssets.push(`${response.status()} ${response.url()}`);
      }
    });

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Busy do Belgii/);
    await expect(page.locator('header#header')).toBeAttached();
    await expect(page.locator('footer').last()).toBeAttached();
    await page.waitForLoadState('load');
    expect(failedAssets).toEqual([]);
  });
}

test('main navigation links lead to working pages', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page
    .locator('header#header a[href]')
    .evaluateAll((links) =>
      (links as HTMLAnchorElement[])
        .filter((a) => a.origin === window.location.origin)
        .map((a) => a.pathname),
    );
  const internal = [...new Set(hrefs)];
  expect(internal.length).toBeGreaterThan(5);
  for (const href of internal) {
    const response = await request.get(href);
    expect(response.status(), href).toBe(200);
  }
});

// The forms are only checked for their fields; submitting them would send a real email.
test('contact form has its required fields', async ({ page }) => {
  await page.goto('/kontakt');
  const form = page.locator('form[action="kontakt"]');
  for (const name of ['name', 'email', 'subject', 'phone', 'text']) {
    await expect(form.locator(`[name="${name}"]`)).toBeAttached();
  }
});

test('reservation form has its required fields', async ({ page }) => {
  await page.goto('/rezerwacja');
  for (const name of ['name', 'surname', 'email', 'phone', 'fromCity', 'toCity', 'date']) {
    await expect(page.locator(`form [name="${name}"]`).first()).toBeAttached();
  }
});

test('www subdomain redirects to the apex domain and keeps the path', async ({ request }) => {
  const response = await request.get('/faq?x=1', {
    headers: { Host: 'www.busemdobelgii.pl' },
    maxRedirects: 0,
  });
  expect(response.status()).toBe(301);
  expect(response.headers()['location']).toBe('https://busemdobelgii.pl/faq?x=1');
});

test('unknown pages return 404', async ({ request }) => {
  const response = await request.get('/this-page-does-not-exist');
  expect(response.status()).toBe(404);
});
