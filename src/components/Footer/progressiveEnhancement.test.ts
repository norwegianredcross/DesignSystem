import { renderToString } from 'react-dom/server';
import { chromium, firefox, webkit, expect, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest';
import type { FooterProps } from './index';

// Real browser navigation and Vite startup need the same budget as the
// Storybook browser projects, especially on shared Linux runners.
describe.each([chromium, firefox, webkit].map((engine) => ({ engine, name: engine.name() })))('Footer baseline: $name', { timeout: 30000 }, ({ engine }) => {
  let browser: Browser;
  let server: ViteDevServer;
  let context: BrowserContext;
  let page: Page;
  let html: string;
  let props: FooterProps;
  let callback: boolean;
  let renderFooter: typeof import('../../../tests/fixtures/footer-hydration').renderFooter;

  beforeAll(async () => {
    server = await createServer({ configFile: false, appType: 'custom',
      cacheDir: `node_modules/.vite-footer-${engine.name()}`,
      server: { host: '127.0.0.1', port: 0 },
    });
    server.middlewares.use((request, response, next) => {
      if (!['/footer.html', '/destination', '/newsletter'].includes(request.url?.split('?')[0] ?? '')) return next();
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(request.url === '/footer.html' ? html : '<!doctype html><html lang="en"><title>Destination</title><h1>Destination</h1></html>');
    });
    await server.listen();
    ({ renderFooter } = await server.ssrLoadModule('/tests/fixtures/footer-hydration.ts'));
    browser = await engine.launch();
  }, 30000);
  afterEach(async () => { await context?.close(); });
  afterAll(async () => { await browser?.close(); await server?.close(); });

  async function render(options: { props?: FooterProps; callback?: boolean; styled?: boolean; javaScriptEnabled?: boolean; width?: number; reducedMotion?: 'reduce' | 'no-preference' } = {}) {
    await context?.close();
    props = options.props ?? {};
    callback = options.callback ?? false;
    html = `<!doctype html><html lang="en" data-color-scheme="dark"><title>Footer audit</title><head>${options.styled === false ? '' : '<link rel="stylesheet" href="/src/styles.css"><link rel="stylesheet" href="/src/components/Footer/styles.module.css?direct">'}</head><body><main><h1>Footer audit</h1><output id="result"></output></main><div id="root">${renderToString(renderFooter(props, callback))}</div></body></html>`;
    context = await browser.newContext({ javaScriptEnabled: options.javaScriptEnabled ?? false,
      viewport: { width: options.width ?? 375, height: 900 }, reducedMotion: options.reducedMotion ?? 'reduce' });
    page = await context.newPage();
    await page.goto(`${server.resolvedUrls!.local[0]}footer.html`);
  }

  async function hydrate() {
    await page.addScriptTag({ type: 'module', content: `import { hydrateFooter } from '/tests/fixtures/footer-hydration.ts'; window.rerenderFooter = hydrateFooter(${JSON.stringify(props)}, ${callback});` });
    await expect(page.locator('body')).toHaveAttribute('data-hydrated', 'true');
  }

  for (const variant of ['default', 'contact', 'columns'] as const) {
    for (const styled of [false, true]) {
      it(`keeps ${variant} content and navigation usable without JS (CSS: ${styled})`, async () => {
        await render({ props: { variant, hideNewsletter: true, colorScheme: 'dark', id: 'consumer-footer', className: 'consumer-footer', 'aria-label': 'Organisation' }, styled });
        const footer = page.getByRole('contentinfo', { name: 'Organisation' });
        await expect(footer).toHaveAttribute('id', 'consumer-footer');
        await expect(footer).toHaveClass(/consumer-footer/);
        await expect(footer.getByText('123 456 789')).toBeVisible();
        await expect(footer.getByText('post@redcross.no')).toBeVisible();
        if (variant === 'contact') await expect(footer.getByRole('link', { name: 'person@example.test' })).toHaveAttribute('href', 'mailto:person@example.test');
        await footer.getByRole('link', { name: variant === 'contact' ? 'Community' : 'Volunteer', exact: true }).click();
        await expect(page).toHaveURL(/\/destination$/);
        await expect(page.getByRole('heading', { name: 'Destination' })).toBeVisible();
      });
    }
  }

  it.each(['Community', 'person@example.test', 'Privacy'])('preserves contact link focus through hydration and rerender: %s', async (name) => {
    await render({ javaScriptEnabled: true, props: { variant: 'contact' } });
    const link = page.getByRole('link', { name, exact: true });
    await link.focus();
    await hydrate();
    await expect(link).toBeFocused({ timeout: 2000 });
    await page.evaluate('window.rerenderFooter()');
    await expect(link).toBeFocused({ timeout: 2000 });
  });

  it.each([false, true])('submits a real POST without JS (CSS: %s)', async (styled) => {
    await render({ props: { newsletterAction: '/newsletter' }, styled });
    await page.getByRole('textbox', { name: 'E-postadresse' }).fill('reader@example.test');
    const submitted = page.waitForRequest((request) => request.url().endsWith('/newsletter'));
    await page.getByRole('button', { name: 'Meld deg på' }).click();
    const request = await submitted;
    expect(request.method()).toBe('POST');
    expect(new URLSearchParams(request.postData()!).get('email')).toBe('reader@example.test');
    await expect(page.getByRole('heading', { name: 'Destination' })).toBeVisible();
  });

  it('supports the consumer endpoint method and field name', async () => {
    await render({ props: { newsletterAction: '/newsletter', newsletterMethod: 'get', newsletterInputName: 'subscriber' } });
    await page.getByRole('textbox').fill('reader@example.test');
    await page.getByRole('textbox').press('Enter');
    await expect(page).toHaveURL(/\/newsletter\?subscriber=reader%40example.test$/);
  });

  it('rejects empty or invalid email with native validation', async () => {
    await render({ props: { newsletterAction: '/newsletter' } });
    const input = page.getByRole('textbox');
    await page.getByRole('button', { name: 'Meld deg på' }).click();
    expect(await input.evaluate((node) => (node as HTMLInputElement).validity.valueMissing)).toBe(true);
    await input.fill('invalid');
    await input.press('Enter');
    expect(await input.evaluate((node) => (node as HTMLInputElement).validity.typeMismatch)).toBe(true);
    await expect(page).toHaveURL(/\/footer.html$/);
  });

  it('keeps callback-only and unconfigured forms inactive without JS', async () => {
    await render({ callback: true });
    await expect(page.getByRole('textbox')).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Meld deg på' })).toBeDisabled();
    await render();
    await expect(page.getByRole('button', { name: 'Meld deg på' })).toBeDisabled();
  });

  it('activates the existing callback after hydration', async () => {
    await render({ javaScriptEnabled: true, callback: true });
    await hydrate();
    await page.getByRole('textbox').fill('reader@example.test');
    await page.getByRole('button', { name: 'Meld deg på' }).click();
    await expect(page.locator('#result')).toHaveText('reader@example.test');
    await expect(page).toHaveURL(/\/footer.html$/);
  });

  it.each([false, true])('preserves pre-hydration email and focus (callback: %s)', async (useCallback) => {
    await render({ javaScriptEnabled: true, callback: useCallback, props: { newsletterAction: '/newsletter' } });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    const input = page.getByRole('textbox');
    await input.fill('typed-before-js@example.test');
    await hydrate();
    await page.evaluate('window.rerenderFooter()');
    await expect(input).toHaveValue('typed-before-js@example.test');
    await expect(input).toBeFocused();
    if (useCallback) {
      await input.press('Enter');
      await expect(page.locator('#result')).toHaveText('typed-before-js@example.test');
    } else {
      const submitted = page.waitForRequest((request) => request.url().endsWith('/newsletter'));
      await input.press('Enter');
      expect(new URLSearchParams((await submitted).postData()!).get('email')).toBe('typed-before-js@example.test');
      await expect(page.getByRole('heading', { name: 'Destination' })).toBeVisible();
    }
    expect(errors).toEqual([]);
  });

  it('keeps native submission working when CSS fails after hydration', async () => {
    await render({ javaScriptEnabled: true, props: { newsletterAction: '/newsletter' } });
    await hydrate();
    await page.evaluate(() => { for (const sheet of document.styleSheets) sheet.disabled = true; });
    await expect(page.locator('#rk-footer-inline-styles')).toHaveCount(0);
    await page.getByRole('textbox').fill('reader@example.test');
    const submitted = page.waitForRequest((request) => request.url().endsWith('/newsletter'));
    await page.getByRole('textbox').press('Enter');
    expect(new URLSearchParams((await submitted).postData()!).get('email')).toBe('reader@example.test');
    await expect(page.getByRole('heading', { name: 'Destination' })).toBeVisible();
  });

  it.each([320, 1280])('fits the newsletter and respects reduced motion at %ipx', async (width) => {
    await render({ width, props: { newsletterAction: '/newsletter' } });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(await page.getByRole('link', { name: 'Volunteer' }).evaluate((node) => getComputedStyle(node).transitionDuration)).toBe('0s');
  });
});
