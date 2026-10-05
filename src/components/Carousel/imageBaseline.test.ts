import { renderToString } from 'react-dom/server';
import { chromium, firefox, webkit, expect as browserExpect, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import type { CarouselProps } from './index';

describe.each([chromium, firefox, webkit].map((engine) => ({ engine, name: engine.name() })))('Carousel progressive enhancement: $name', { timeout: 30000 }, ({ engine }) => {
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

  async function render({ width = 1280, styled = true, javaScriptEnabled = false, props = {} as Partial<CarouselProps>, reducedMotion = 'no-preference' as 'reduce' | 'no-preference' } = {}) {
    html = `<!doctype html><html lang="no"><head>${styled ? '<link rel="stylesheet" href="/src/styles.css"><link rel="stylesheet" href="/src/components/Carousel/styles.module.css?direct">' : ''}</head><body><div id="root">${renderToString(renderCarousel(props))}</div></body></html>`;
    context = await browser.newContext({ javaScriptEnabled, reducedMotion, viewport: { width, height: 800 } });
    if (!styled && javaScriptEnabled) {
      // Source-module hydration normally injects CSS through Vite. Remove
      // those sheets too, so this really models a missing stylesheet.
      await context.addInitScript(() => {
        const observer = new MutationObserver(() => {
          document.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => node.remove());
        });
        observer.observe(document, { childList: true, subtree: true });
        window.addEventListener('allow-test-styles', () => observer.disconnect(), { once: true });
      });
    }
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

  async function hydrate(props: Partial<CarouselProps> = {}) {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    await page.addScriptTag({ type: 'module', content: `import { hydrateCarousel } from '/tests/fixtures/carousel-hydration.ts'; hydrateCarousel(${JSON.stringify(props)});` });
    return errors;
  }

  async function expectAllImagesReachable() {
    await browserExpect(page.getByRole('img')).toHaveCount(3);
    for (const name of ['First image', 'Second image', 'Third image']) {
      await page.getByRole('img', { name }).scrollIntoViewIfNeeded();
      await expectLoadedImage(name);
    }
  }

  it.each([375, 1280])('keeps every image reachable without JavaScript at %ipx', async (width) => {
    await render({ width });
    await browserExpect(page.getByRole('button')).toHaveCount(0);
    await expectAllImagesReachable();
  });

  it('makes every image reachable with Tab without JavaScript', async () => {
    await render();
    await expectLoadedImage();
    await page.bringToFront();
    for (const name of ['First image', 'Second image', 'Third image']) {
      await page.keyboard.press('Tab');
      await expectLoadedImage(name);
      await expect.poll(() => page.getByRole('img', { name }).evaluate((image) => document.activeElement?.contains(image))).toBe(true);
    }
  });

  it.each([false, true])('keeps all images accessible without CSS (JS: %s)', async (javaScriptEnabled) => {
    await render({ styled: false, javaScriptEnabled });
    const errors = javaScriptEnabled ? await hydrate() : [];
    await expectAllImagesReachable();
    await browserExpect(page.getByRole('button')).toHaveCount(0);
    expect(errors).toEqual([]);
  });

  it('returns to the native baseline if CSS is removed after hydration', async () => {
    await render({ javaScriptEnabled: true });
    const errors = await hydrate();
    await page.getByRole('button', { name: /neste bilde/i }).click();
    await browserExpect(page.getByRole('status')).toContainText('Second image');
    await page.evaluate(() => document.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => node.remove()));
    await browserExpect(page.getByRole('button')).toHaveCount(0);
    await expectAllImagesReachable();
    expect(errors).toEqual([]);
  });

  it('enhances when CSS arrives after hydration', async () => {
    await render({ styled: false, javaScriptEnabled: true });
    const errors = await hydrate();
    await expectAllImagesReachable();
    await page.evaluate(() => window.dispatchEvent(new Event('allow-test-styles')));
    await page.addStyleTag({ url: '/src/components/Carousel/styles.module.css?direct' });
    await page.getByRole('button', { name: /neste bilde/i }).click();
    await browserExpect(page.getByRole('status')).toContainText('Second image');
    await expectLoadedImage('Second image');
    expect(errors).toEqual([]);
  });

  it('preserves native scroll position and focus through hydration', async () => {
    await render({ javaScriptEnabled: true });
    await expectLoadedImage();
    await page.bringToFront();
    for (let step = 0; step < 3; step++) await page.keyboard.press('Tab');
    const focusedHandle = await page.locator(':focus').elementHandle();
    await expectLoadedImage('Third image');
    const errors = await hydrate();
    await browserExpect(page.getByRole('status')).toContainText('Third image');
    await expectLoadedImage('Third image');
    expect(await focusedHandle!.evaluate((element) => element === document.activeElement)).toBe(true);
    expect(errors).toEqual([]);
  });

  it('keeps native navigation when both sets of navigation controls are disabled', async () => {
    const props = { showArrows: false, showDots: false, autoPlay: true };
    await render({ javaScriptEnabled: true, props });
    const errors = await hydrate(props);
    await browserExpect(page.getByRole('button')).toHaveCount(0);
    await expectAllImagesReachable();
    expect(errors).toEqual([]);
  });

  it('respects reduced motion at startup and when the preference changes', async () => {
    const props = { autoPlay: true, autoDelay: 0.15 };
    await render({ javaScriptEnabled: true, reducedMotion: 'reduce', props });
    const errors = await hydrate(props);
    await browserExpect(page.getByRole('button', { name: /start automatisk/i })).toBeDisabled();
    await page.waitForTimeout(500); // Longer than three autoplay intervals.
    await browserExpect(page.getByRole('status')).toContainText('First image');
    await page.getByRole('button', { name: /neste bilde/i }).click();
    await expectLoadedImage('Second image');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await browserExpect(page.getByRole('button', { name: /start automatisk/i })).toBeEnabled();
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await browserExpect(page.getByRole('button', { name: /start automatisk/i })).toBeDisabled();
    await page.waitForTimeout(500);
    await browserExpect(page.getByRole('status')).toContainText('Second image');
    expect(errors).toEqual([]);
  });

  it('stops autoplay on keyboard focus until explicitly restarted', async () => {
    const props = { autoPlay: true, autoDelay: 0.3 };
    await render({ javaScriptEnabled: true, props });
    const errors = await hydrate(props);
    await browserExpect(page.getByRole('button', { name: /pause automatisk/i })).toBeVisible();
    await page.bringToFront();
    // Safari's default keyboard mode uses Option+Tab to include buttons.
    await page.keyboard.press(engine.name() === 'webkit' ? 'Alt+Tab' : 'Tab');
    await browserExpect(page.getByRole('button', { name: /start automatisk/i })).toBeFocused();
    const stoppedAt = await page.getByRole('status').textContent();
    await page.locator(':focus').evaluate((element) => (element as HTMLElement).blur());
    await page.waitForTimeout(700);
    await browserExpect(page.getByRole('status')).toHaveText(stoppedAt!);
    await page.getByRole('button', { name: /start automatisk/i }).focus();
    await page.keyboard.press('Enter');
    await page.mouse.move(1200, 700);
    await browserExpect(page.getByRole('status')).not.toHaveText(stoppedAt!);
    expect(errors).toEqual([]);
  });

  it('keeps the native gallery if the enhancement observer is unavailable', async () => {
    await render({ javaScriptEnabled: true });
    await page.evaluate(() => { Reflect.deleteProperty(window, 'ResizeObserver'); });
    const errors = await hydrate();
    await expectAllImagesReachable();
    await browserExpect(page.getByRole('button')).toHaveCount(0);
    expect(errors).toEqual([]);
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
