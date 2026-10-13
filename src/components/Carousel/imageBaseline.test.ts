import { renderToString } from 'react-dom/server';
import { chromium, firefox, webkit, expect as browserExpect, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import type { CarouselProps } from './index';

describe.each([chromium, firefox, webkit].map((engine) => ({ engine, name: engine.name() })))('Carousel image baseline: $name', { timeout: 30000 }, ({ engine }) => {
  let browser: Browser;
  let server: ViteDevServer;
  let context: BrowserContext;
  let page: Page;
  let html: string;
  let renderCarousel: typeof import('../../../tests/fixtures/carousel-hydration').renderCarousel;

  beforeAll(async () => {
    server = await createServer({
      configFile: false, appType: 'custom',
      cacheDir: `node_modules/.vite-carousel-${engine.name()}`,
      // Match the Header/Footer fixtures: discover dependencies before a
      // hydration test, so Vite cannot reload the page mid-assertion.
      optimizeDeps: {
        include: ['react', 'react-dom/client', 'react/jsx-dev-runtime', 'embla-carousel-react', '@digdir/designsystemet-react', '@navikt/aksel-icons'],
      },
      server: { host: '127.0.0.1', port: 0 },
    });
    server.middlewares.use('/carousel-test.html', (_request, response) => {
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(html);
    });
    await server.listen();
    ({ renderCarousel } = await server.ssrLoadModule('/tests/fixtures/carousel-hydration.ts'));
    browser = await engine.launch();
  }, 30000);
  afterEach(async () => { await context?.close(); });
  afterAll(async () => { await browser?.close(); await server?.close(); });

  async function render({ width = 1280, styled = true, javaScriptEnabled = false, props = {} as Partial<CarouselProps> } = {}) {
    html = `<!doctype html><html lang="no"><head>${styled ? '<link rel="stylesheet" href="/src/styles.css"><link rel="stylesheet" href="/src/components/Carousel/styles.module.css?direct">' : ''}</head><body><div id="root">${renderToString(renderCarousel(props))}</div></body></html>`;
    context = await browser.newContext({ javaScriptEnabled, viewport: { width, height: 800 } });
    page = await context.newPage();
    await page.goto(`${server.resolvedUrls!.local[0]}carousel-test.html`, { waitUntil: 'domcontentloaded' });
  }

  async function expectLoadedImage(name = 'First image') {
    const image = page.getByRole('img', { name });
    await expect.poll(() => image.evaluate((element) => ({
      complete: (element as HTMLImageElement).complete,
      loaded: (element as HTMLImageElement).naturalWidth > 0,
    }))).toEqual({ complete: true, loaded: true });
    await browserExpect(image).toHaveCSS('opacity', '1');
    await browserExpect(image).toBeInViewport({ ratio: 0.9 });
    await browserExpect(page.getByRole('img', { name: /laster/i })).toHaveCount(0);
  }

  it.each([375, 1280])('shows loaded images without JavaScript at %ipx', async (width) => {
    await render({ width });
    await expectLoadedImage();
  });

  it('shows the image when CSS and JavaScript are missing', async () => {
    await render({ styled: false });
    await expectLoadedImage();
  });

  it('keeps native alternative text available when an image cannot load', async () => {
    await render({ props: { images: [{ src: 'data:image/png;base64,broken', alt: 'Unavailable image' }] } });
    const image = page.getByRole('img', { name: 'Unavailable image' });
    await expect.poll(() => image.evaluate((element) => ({
      complete: (element as HTMLImageElement).complete,
      width: (element as HTMLImageElement).naturalWidth,
    }))).toEqual({ complete: true, width: 0 });
    await browserExpect(image).toBeVisible();
    await browserExpect(image).toHaveCSS('opacity', '1');
    await browserExpect(page.getByLabel('Laster bilde', { exact: true })).toHaveCount(0);
  });

  it('preserves an already loaded image through hydration and enables navigation', async () => {
    await render({ javaScriptEnabled: true });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    await expectLoadedImage();
    await page.addScriptTag({ type: 'module', content: "import { hydrateCarousel } from '/tests/fixtures/carousel-hydration.ts'; hydrateCarousel();" });
    await browserExpect(page.getByRole('button', { name: /gå til bilde 2/i })).toBeVisible();
    await page.getByRole('button', { name: /neste bilde/i }).click();
    await browserExpect(page.getByRole('status')).toContainText('Second image');
    await expectLoadedImage('Second image');
    expect(errors).toEqual([]);
  });
});
