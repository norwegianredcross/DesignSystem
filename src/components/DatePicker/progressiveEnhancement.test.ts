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
  let fixtureMonth: string | undefined;
  let fixtureAppointment: string | undefined;
  let renderDates: typeof import('../../../tests/fixtures/date-hydration').renderDates;

  beforeAll(async () => {
    server = await createServer({ configFile: false, appType: 'custom', cacheDir: `node_modules/.vite-dates-${engine.name()}`,
      optimizeDeps: { include: ['react', 'react-dom/client', 'react/jsx-dev-runtime', '@digdir/designsystemet-react', '@navikt/aksel-icons', 'date-fns', 'date-fns/locale'] },
      server: { host: '127.0.0.1', port: 0 },
    });
    server.middlewares.use((request, response, next) => {
      if (!['/dates.html', '/calendar.html', '/submit'].includes(request.url?.split('?')[0] ?? '')) return next();
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      if (!css) response.setHeader('Content-Security-Policy', "style-src 'none'");
      if (request.url?.startsWith('/calendar.html')) {
        const params = new URL(request.url, 'http://localhost').searchParams;
        const month = params.get('month') ?? '2024-02';
        response.end('<!doctype html><html lang="nb"><title>Calendar</title><body>' + renderToString(renderDates(month, params.get('appointment') ?? undefined)) + '</body></html>');
        return;
      }
      response.end(request.url === '/dates.html' ? html : '<!doctype html><title>Submitted</title><h1>Submitted</h1>');
    });
    await server.listen();
    ({ renderDates } = await server.ssrLoadModule('/tests/fixtures/date-hydration.tsx'));
    browser = await engine.launch();
  }, 30000);
  afterEach(async () => { await context?.close(); });
  afterAll(async () => { await browser?.close(); await server?.close(); });

  async function render(options: { js?: boolean; styled?: boolean; zone?: string; width?: number; forcedColors?: 'active' | 'none'; month?: string; appointment?: string } = {}) {
    css = options.styled ?? true;
    fixtureMonth = options.month; fixtureAppointment = options.appointment;
    html = `<!doctype html><html lang="nb"><head><title>Date baseline</title>${css ? '<link rel="stylesheet" href="/src/styles.css"><link rel="stylesheet" href="/src/components/DateInput/styles.module.css?direct"><link rel="stylesheet" href="/src/components/DatePicker/styles.module.css?direct">' : ''}</head><body><div id="root">${renderToString(renderDates(fixtureMonth, fixtureAppointment))}</div></body></html>`;
    context = await browser.newContext({ javaScriptEnabled: options.js ?? false, timezoneId: options.zone ?? 'UTC', viewport: { width: options.width ?? 1280, height: 900 }, reducedMotion: 'reduce', forcedColors: options.forcedColors ?? 'none' });
    page = await context.newPage();
    await page.goto(`${server.resolvedUrls!.local[0]}dates.html`);
  }
  async function hydrate() {
    await page.evaluate(({month, appointment}) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.textContent = `import { hydrateDates } from '/tests/fixtures/date-hydration.tsx'; hydrateDates(${JSON.stringify(month)}, ${JSON.stringify(appointment)});`;
      document.head.append(script);
    }, {month: fixtureMonth, appointment: fixtureAppointment});
    await expect(page.locator('body')).toHaveAttribute('data-hydrated', 'true');
    await expect(page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) }).getByRole('grid')).toBeVisible();
  }

  for (const styled of [true, false]) {
    it(`submits manual input without JS and exposes no dead calendar controls (CSS ${styled})`, async () => {
      await render({ styled });
      await expect(page.getByRole('grid')).toHaveCount(0);
      await expect(page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) }).getByRole('button', { name: /måned|datovelger/i })).toHaveCount(0);
      const field = page.getByRole('textbox', { name: 'Date', exact: true });
      await field.fill('06.10.2026');
      await page.getByRole('button', { name: 'Submit date', exact: true }).click();
      await expect(page).toHaveURL(/\/submit\?date=06\.10\.2026$/);
    });
    it(`selects using mouse and keyboard and submits with JS (CSS ${styled})`, async () => {
      await render({ js: true, styled }); await hydrate();
      const form = page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) });
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

  for (const js of [false, true]) for (const styled of [false, true]) {
    it(`server calendar keeps table relationships, selection and navigation (JS ${js}, CSS ${styled})`, async () => {
      await render({ js, styled, zone: 'America/Los_Angeles' });
      const region = page.getByRole('region', { name: 'Server calendar' });
      const table = region.getByRole('table', { name: /februar 2024/i });
      await expect(table).toBeVisible();
      const headers = table.getByRole('columnheader');
      await expect(headers).toHaveCount(7);
      const monday = (await headers.nth(0).boundingBox())!;
      const sunday = (await headers.nth(6).boundingBox())!;
      expect(Math.abs(monday.y - sunday.y)).toBeLessThan(2);
      expect(sunday.x).toBeGreaterThan(monday.x);
      const reference = region.getByRole('textbox', { name: 'Required reference' });
      await reference.fill('');
      await reference.press('Enter');
      await expect(page).toHaveURL(/dates.html$/);
      expect(await reference.evaluate((field: HTMLInputElement) => field.validity.valueMissing)).toBe(true);
      await reference.fill('reference');
      const selected = region.getByRole('radio', { name: '16. februar 2024', exact: true });
      await selected.check();
      if (js) { await selected.focus(); await hydrate(); await expect(selected).toBeFocused(); }
      await expect(selected).toBeChecked();
      await region.getByRole('button', { name: 'Reset appointment' }).click();
      await expect(region.getByRole('radio', { name: '15. februar 2024', exact: true })).toBeChecked();
      await selected.check();
      await reference.press('Enter');
      await expect(page).toHaveURL(/\/submit\?appointment=2024-02-16$/);
      await page.goBack();
      await region.getByRole('button', { name: /neste/i }).click();
      await expect(region.getByRole('table')).toHaveAccessibleName(/mars 2024/i);
      await expect(region.getByRole('radio', { name: '16. februar 2024', exact: true })).toBeChecked();
      await region.getByRole('button', { name: /forrige/i }).click();
      await expect(region.getByRole('radio', { name: '16. februar 2024', exact: true })).toBeChecked();
      await region.getByRole('button', { name: /neste/i }).click();
      await region.getByRole('radio', { name: '31. mars 2024', exact: true }).check();
      await region.getByRole('button', { name: 'Confirm appointment' }).click();
      await expect(page).toHaveURL(/\/submit\?appointment=2024-03-31$/);
    });
  }

  it.each(['Pacific/Apia', 'Europe/Oslo', 'Pacific/Kiritimati'])('keeps civil dates and selection stable through hydration in %s', async zone => {
    await render({js: true, zone, month: '2011-12', appointment: '2011-12-30'});
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    const region = page.getByRole('region', {name: 'Server calendar'});
    const chosen = region.getByRole('radio', {name: '30. desember 2011', exact: true});
    await expect(chosen).toBeChecked();
    await hydrate();
    await expect(chosen).toBeChecked();
    await expect(region.getByRole('radio')).toHaveCount(31);
    expect(errors).toEqual([]);
    await region.getByRole('button', {name: 'Confirm appointment'}).click();
    await expect(page).toHaveURL(/appointment=2011-12-30$/);
  });

  for (const js of [false, true]) for (const styled of [false, true]) {
    it(`validates the required date and associates server errors in an external form (JS ${js}, CSS ${styled})`, async () => {
      await render({js, styled});
      if (js) await hydrate();
      const region = page.getByRole('region', {name: 'Required calendar'});
      const radio = region.getByRole('radio', {name: '16. februar 2024', exact: true});
      await expect(region.getByTestId('required-calendar')).toHaveAttribute('id', 'required-calendar');
      await expect(radio).toHaveAccessibleDescription('Choose an available date (required). Choose a different appointment date.');
      await expect(radio).toHaveAttribute('aria-invalid', 'true');
      await region.getByRole('button', {name: 'Submit required date'}).click();
      await expect(page).toHaveURL(/dates.html$/);
      expect(await radio.evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);
      await radio.check();
      await region.getByRole('button', {name: 'Reset required date'}).click();
      await expect(radio).not.toBeChecked();
      await radio.check();
      await region.getByRole('button', {name: 'Submit required date'}).click();
      await expect(page).toHaveURL(/requiredDate=2024-02-16$/);
    });
  }

  it.each([320, 1280])('keeps all seven columns visible in a narrow container at viewport %i', async (width) => {
    await render({ js: true, width }); await hydrate();
    const grid = page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) }).getByRole('grid');
    const box = (await grid.boundingBox())!;
    for (const cell of await grid.getByRole('columnheader').all()) {
      const bounds = (await cell.boundingBox())!;
      expect(bounds.x).toBeGreaterThanOrEqual(box.x - 1);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(box.x + box.width + 1);
    }
    const sunday = grid.getByRole('gridcell', { name: '18. februar 2024', exact: true });
    await sunday.click();
    await expect(page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) }).getByRole('textbox')).toHaveValue('18.02.2024');
  });

  it.each([240, 320].flatMap(containerWidth => [320, 1280].map(viewport => ({ containerWidth, viewport }))))('keeps enlarged calendar text legible in a $containerWidth px container at viewport $viewport', async ({ containerWidth, viewport }) => {
    await render({ js: true, width: viewport }); await hydrate();
    await page.evaluate(width => {
      document.documentElement.style.fontSize = '200%';
      const native = document.querySelector<HTMLElement>('[data-testid="native-calendar-resize"]')!;
      const enhanced = document.querySelector<HTMLElement>('[data-testid="enhanced-calendar-resize"]')!;
      for (const calendar of [native, enhanced]) {
        calendar.parentElement!.style.width = `${width}px`;
        calendar.style.width = '100%';
        calendar.setAttribute('data-calendar-resize-test', '');
      }
    }, containerWidth);
    await page.evaluate(() => document.fonts.ready);
    for (const calendar of await page.locator('[data-calendar-resize-test]').all()) {
      const overlaps = await calendar.locator('table').evaluate(table => {
        const failures: string[] = [];
        for (const row of table.rows) {
          let previousRight = -Infinity;
          for (const cell of row.cells) {
            const walker = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              const node = walker.currentNode;
              if (!node.textContent?.trim()) continue;
              const range = document.createRange(); range.selectNodeContents(node);
              const text = range.getBoundingClientRect();
              if (!text.width) continue;
              if (text.left < previousRight) failures.push(`Overlapping text: ${row.textContent}`);
              previousRight = text.right;
              const bounds = cell.getBoundingClientRect();
              if (text.left < bounds.left - 1 || text.right > bounds.right + 1) failures.push(`Text outside cell: ${node.textContent}`);
            }
          }
        }
        return failures;
      });
      expect(overlaps).toEqual([]);
      // A narrow calendar may scroll internally, but must not widen its consumer.
      expect((await calendar.boundingBox())!.width).toBeLessThanOrEqual(containerWidth + 1);
    }
    const region = page.getByRole('region', { name: 'Server calendar' });
    await region.getByRole('radio', { name: '18. februar 2024', exact: true }).check();
    await expect(region.getByRole('radio', { name: '18. februar 2024', exact: true })).toBeChecked();
    const form = page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) });
    await form.getByRole('gridcell', { name: '18. februar 2024', exact: true }).click();
    await expect(form.getByRole('textbox')).toHaveValue('18.02.2024');
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
    const day = page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) }).getByRole('gridcell', { name: '15. februar 2024', exact: true });
    await day.focus(); await day.press('Enter');
    const background = await day.evaluate(e => getComputedStyle(e).backgroundColor);
    await day.hover();
    expect(await day.evaluate(e => getComputedStyle(e).backgroundColor)).toBe(background);
  });

  it('distinguishes selection in forced colors and disables motion when requested', async () => {
    await render({ js: true, forcedColors: 'active' }); await hydrate();
    const day = page.locator('form').filter({ has: page.getByRole('textbox', { name: 'Date', exact: true }) }).getByRole('gridcell', { name: '15. februar 2024', exact: true });
    await day.click();
    expect(await day.evaluate(e => getComputedStyle(e).transitionDuration)).toBe('0s');
    expect(await day.evaluate(e => getComputedStyle(e).outlineStyle)).not.toBe('none');
  });
});
