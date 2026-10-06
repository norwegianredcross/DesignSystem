import { renderToString } from 'react-dom/server';
import { chromium, firefox, webkit, expect, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest';

describe.each([chromium, firefox, webkit].map(engine => ({ engine, name: engine.name() })))('Date entry baseline: $name', { timeout: 30000 }, ({ engine }) => {
  let browser: Browser;
  let server: ViteDevServer;
  let context: BrowserContext;
  let page: Page;
  let html: string;
  let css: boolean;
  let renderDates: typeof import('../../../tests/fixtures/date-hydration').renderDates;

  beforeAll(async () => {
    server = await createServer({ configFile: false, appType: 'custom', cacheDir: `node_modules/.vite-dates-${engine.name()}`,
      optimizeDeps: { include: ['react', 'react-dom/client', 'react/jsx-dev-runtime', '@digdir/designsystemet-react', '@navikt/aksel-icons', 'date-fns', 'date-fns/locale'] },
      server: { host: '127.0.0.1', port: 0 },
    });
    server.middlewares.use((request, response, next) => {
      if (!['/dates.html', '/submit'].includes(request.url?.split('?')[0] ?? '')) return next();
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      if (!css) response.setHeader('Content-Security-Policy', "style-src 'none'");
      response.end(request.url === '/dates.html' ? html : '<!doctype html><title>Submitted</title><h1>Submitted</h1>');
    });
    await server.listen();
    ({ renderDates } = await server.ssrLoadModule('/tests/fixtures/date-hydration.tsx'));
    browser = await engine.launch();
  }, 30000);
  afterEach(async () => { await context?.close(); });
  afterAll(async () => { await browser?.close(); await server?.close(); });

  async function render(options: { js?: boolean; styled?: boolean; zone?: string; width?: number; forcedColors?: 'active' | 'none' } = {}) {
    css = options.styled ?? true;
    html = `<!doctype html><html lang="nb"><head><title>Date baseline</title>${css ? '<link rel="stylesheet" href="/src/styles.css"><link rel="stylesheet" href="/src/components/DateInput/styles.module.css?direct"><link rel="stylesheet" href="/src/components/DatePicker/styles.module.css?direct">' : ''}</head><body><div id="root">${renderToString(renderDates())}</div></body></html>`;
    context = await browser.newContext({ javaScriptEnabled: options.js ?? false, timezoneId: options.zone ?? 'UTC', viewport: { width: options.width ?? 1280, height: 900 }, reducedMotion: 'reduce', forcedColors: options.forcedColors ?? 'none' });
    page = await context.newPage();
    await page.goto(`${server.resolvedUrls!.local[0]}dates.html`);
  }
  async function hydrate() {
    await page.evaluate(() => {
      const script = document.createElement('script');
      script.type = 'module';
      script.textContent = "import { hydrateDates } from '/tests/fixtures/date-hydration.tsx'; hydrateDates();";
      document.head.append(script);
    });
    await expect(page.locator('body')).toHaveAttribute('data-hydrated', 'true');
    await expect(page.locator('form').getByRole('grid')).toBeVisible();
  }

  for (const styled of [true, false]) {
    it(`submits manual input without JS and exposes no dead calendar controls (CSS ${styled})`, async () => {
      await render({ styled });
      await expect(page.getByRole('grid')).toHaveCount(0);
      await expect(page.getByRole('button', { name: /måned|datovelger/i })).toHaveCount(0);
      const field = page.getByRole('textbox', { name: 'Date', exact: true });
      await field.fill('06.10.2026');
      await page.getByRole('button', { name: 'Submit date' }).click();
      await expect(page).toHaveURL(/\/submit\?date=06\.10\.2026$/);
    });
    it(`selects using mouse and keyboard and submits with JS (CSS ${styled})`, async () => {
      await render({ js: true, styled }); await hydrate();
      const form = page.locator('form');
      await form.getByRole('gridcell', { name: '15. februar 2024', exact: true }).click();
      await expect(form.getByRole('textbox')).toHaveValue('15.02.2024');
      await form.getByRole('gridcell', { name: '15. februar 2024', exact: true }).press('ArrowRight');
      await page.keyboard.press('Enter');
      await expect(form.getByRole('textbox')).toHaveValue('16.02.2024');
      await form.getByRole('button', { name: /neste/i }).click();
      await expect(form.getByRole('grid')).toHaveAccessibleName(/mars 2024/i);
      await expect(page.locator('#rk-datepicker-inline-styles, #rk-dateinput-inline-styles')).toHaveCount(0);
      await form.getByRole('button', { name: 'Submit date' }).click();
      await expect(page).toHaveURL(/\/submit\?date=16\.02\.2024$/);
    });
  }

  it.each([320, 1280])('keeps all seven columns visible in a narrow container at viewport %i', async (width) => {
    await render({ js: true, width }); await hydrate();
    const grid = page.locator('form').getByRole('grid');
    const box = (await grid.boundingBox())!;
    for (const cell of await grid.getByRole('columnheader').all()) {
      const bounds = (await cell.boundingBox())!;
      expect(bounds.x).toBeGreaterThanOrEqual(box.x - 1);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(box.x + box.width + 1);
    }
    const sunday = grid.getByRole('gridcell', { name: '18. februar 2024', exact: true });
    await sunday.click();
    await expect(page.locator('form').getByRole('textbox')).toHaveValue('18.02.2024');
  });

  it.each(['Date', 'With calendar action'])('preserves pre-hydration text/focus and avoids a timezone hydration mismatch: %s', async (name) => {
    await render({ js: true, zone: 'America/Los_Angeles' });
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    const field = page.getByRole('textbox', { name, exact: true });
    await field.fill('07.10.2026'); await field.focus(); await hydrate();
    await expect(field).toHaveValue('07.10.2026'); await expect(field).toBeFocused();
    await expect(page.getByRole('region', { name: 'Month boundary' }).getByRole('grid')).toHaveAccessibleName(/september 2026/i);
    await expect(page.getByRole('region', { name: 'Invalid dates' }).getByRole('grid')).toBeVisible();
    expect(errors).toEqual([]);
  });

  it('preserves selected colors when a pointer hovers the chosen date', async () => {
    await render({ js: true }); await hydrate();
    const day = page.locator('form').getByRole('gridcell', { name: '15. februar 2024', exact: true });
    await day.focus(); await day.press('Enter');
    const background = await day.evaluate(e => getComputedStyle(e).backgroundColor);
    await day.hover();
    expect(await day.evaluate(e => getComputedStyle(e).backgroundColor)).toBe(background);
  });

  it('distinguishes selection in forced colors and disables motion when requested', async () => {
    await render({ js: true, forcedColors: 'active' }); await hydrate();
    const day = page.locator('form').getByRole('gridcell', { name: '15. februar 2024', exact: true });
    await day.click();
    expect(await day.evaluate(e => getComputedStyle(e).transitionDuration)).toBe('0s');
    expect(await day.evaluate(e => getComputedStyle(e).outlineStyle)).not.toBe('none');
  });
});
