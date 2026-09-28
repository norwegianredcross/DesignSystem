import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { chromium, firefox, webkit, expect as browserExpect, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import type { HeaderProps } from './index';

// Browser startup and cold Vite transforms need the same budget as the
// Storybook browser projects. Readiness is asserted separately below.
describe.each([chromium, firefox, webkit].map((engine) => ({ engine, name: engine.name() })))('Header baseline: $name', { timeout: 30000 }, ({ engine }) => {
  let browser: Browser;
  let server: ViteDevServer;
  let context: BrowserContext;
  let page: Page;
  let html: string;
  let renderHeader: typeof import('../../../tests/fixtures/header-hydration').renderHeader;

  beforeAll(async () => {
    server = await createServer({ configFile: false, appType: 'custom',
      cacheDir: `node_modules/.vite-header-${engine.name()}`,
      server: { host: '127.0.0.1', port: 0 },
    });
    server.middlewares.use('/header-test.html', (_request, response) => {
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(html);
    });
    await server.listen();
    ({ renderHeader } = await server.ssrLoadModule('/tests/fixtures/header-hydration.ts'));
    browser = await engine.launch();
  }, 30000);
  afterEach(async () => { await context?.close(); });
  afterAll(async () => { await browser?.close(); await server?.close(); });

  async function render({ width = 375, styled = true, javaScriptEnabled = false, props = {} as HeaderProps, multiple = false, height = 800, offset = 0 } = {}) {
    html = `<!doctype html><html lang="en" data-color-scheme="dark"><head>${styled ? '<link rel="stylesheet" href="/src/styles.css"><link rel="stylesheet" href="/src/components/Header/styles.module.css?direct">' : ''}</head><body><div style="height:${offset}px"></div><div id="root">${renderToString(multiple ? createElement('div', null, renderHeader(props), renderHeader(props)) : renderHeader(props))}</div><main><h1 id="volunteer">Volunteer page</h1><a href="#after">After header</a></main></body></html>`;
    context = await browser.newContext({ javaScriptEnabled, viewport: { width, height } });
    page = await context.newPage();
    await page.goto(`${server.resolvedUrls!.local[0]}header-test.html`);
  }

  it.each([375, 1280])('opens menu links and follows their destinations without JS at %ipx', async (width) => {
    await render({ width });
    await page.getByRole('button', { name: /meny/i }).click();
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    if (width === 375) {
      await page.getByRole('link', { name: 'Volunteer', exact: true }).click();
      await browserExpect(page).toHaveURL(/#volunteer$/);
    }
  });

  it.each([
    { width: 1280, height: 800, offset: 620 },
    { width: 375, height: 320, offset: 160 },
  ])('keeps an offset menu reachable in a $width × $height viewport', async (viewport) => {
    await render(viewport);
    await page.getByRole('button', { name: 'Meny', exact: true }).click();
    const menu = page.getByRole('region', { name: 'Meny', exact: true });
    await browserExpect(menu).toBeInViewport({ ratio: 1 });
    const contact = page.getByRole('link', { name: 'Contact', exact: true });
    await contact.click();
    await browserExpect(page).toHaveURL(/#contact$/);
    await page.getByRole('button', { name: /lukk meny/i }).click();
    await browserExpect(menu).toBeHidden();
  });

  it('lets users reach the last link in a long mobile menu without JS', async () => {
    await render({ height: 320, props: {
      navItems: Array.from({ length: 25 }, (_, index) => ({ label: `Destination ${index}`, href: `#destination-${index}` })),
    } });
    await page.getByRole('button', { name: 'Meny', exact: true }).focus();
    await page.keyboard.press('Enter');
    await browserExpect(page.getByRole('region', { name: 'Meny', exact: true })).toBeInViewport({ ratio: 1 });
    const last = page.getByRole('link', { name: 'Destination 24', exact: true });
    await last.focus();
    await browserExpect(last).toBeInViewport({ ratio: 1, timeout: 2000 });
    await page.keyboard.press('Enter');
    await browserExpect(page).toHaveURL(/#destination-24$/);
    await page.keyboard.press('Escape');
    await browserExpect(page.getByRole('button', { name: 'Meny', exact: true })).toBeFocused({ timeout: 2000 });
  });

  it.each([false, true])('keeps named navigation usable without CSS (hydrated: %s)', async (javaScriptEnabled) => {
    await render({ styled: false, javaScriptEnabled });
    if (javaScriptEnabled) {
      await page.addScriptTag({ type: 'module', content: `import { hydrateHeader } from '/tests/fixtures/header-hydration.ts'; hydrateHeader();` });
      await browserExpect(page.locator('header')).toHaveAttribute('data-enhanced', 'true', { timeout: 10000 });
      // Vite injects CSS-module styles while loading source modules. Disable
      // these too so the hydrated case really represents failed styles.
      await page.evaluate(() => { for (const sheet of document.styleSheets) sheet.disabled = true; });
    }
    await page.getByRole('button', { name: 'Meny', exact: true }).click();
    await browserExpect(page.getByRole('navigation', { name: 'Hovednavigasjon', exact: true })).toBeVisible();
    await browserExpect(page.getByRole('navigation', { name: 'Menynavigasjon', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await browserExpect(page).toHaveURL(/#contact$/);
  });

  it('keeps mobile navigation available when showMenuButton is false', async () => {
    await render({ props: { showMenuButton: false } });
    await page.getByRole('button', { name: /meny/i }).click();
    await browserExpect(page.getByRole('link', { name: 'Volunteer', exact: true })).toBeVisible();
  });

  it('opens and closes by keyboard without JavaScript', async () => {
    await render();
    const toggle = page.getByRole('button', { name: /meny/i });
    await toggle.focus();
    await page.keyboard.press('Enter');
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    // macOS WebKit uses Option+Tab to include links and buttons in navigation.
    const tab = engine === webkit && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab';
    await page.keyboard.press(tab);
    await browserExpect(page.getByRole('button', { name: /lukk meny/i })).toBeFocused();
    await page.keyboard.press(tab);
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeFocused();
    await page.keyboard.press('Escape');
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeHidden();
    await browserExpect(toggle).toBeFocused();
  });

  it('keeps navigation usable when both CSS and JavaScript are missing', async () => {
    await render({ styled: false });
    await page.getByRole('button', { name: /meny/i }).click();
    await page.getByRole('link', { name: 'Contact' }).click();
    await browserExpect(page).toHaveURL(/#contact$/);
  });

  it('closes through the native close button and light dismissal', async () => {
    await render();
    const toggle = page.getByRole('button', { name: 'Meny', exact: true });
    await toggle.click();
    await page.getByRole('button', { name: /lukk meny/i }).click();
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeHidden();
    await toggle.click();
    await page.mouse.click(10, 790);
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeHidden();
  });

  it('keeps independent menu targets and positions for multiple Headers', async () => {
    await render({ multiple: true });
    const headers = page.getByRole('banner');
    for (const index of [0, 1]) {
      const header = headers.nth(index);
      await header.getByRole('button', { name: 'Meny', exact: true }).click();
      await browserExpect(header.getByRole('link', { name: 'Contact' })).toBeVisible();
      await browserExpect(headers.nth(1 - index).getByRole('link', { name: 'Contact' })).toBeHidden();
      const headerBounds = await header.boundingBox();
      const menuBounds = await header.locator('[popover]').boundingBox();
      expect(menuBounds!.y).toBeGreaterThan(headerBounds!.y);
      expect(menuBounds!.y).toBeLessThanOrEqual(headerBounds!.y + headerBounds!.height);
      await browserExpect(header.getByRole('region', { name: 'Meny', exact: true })).toBeInViewport({ ratio: 1 });
      await header.getByRole('button', { name: /lukk meny/i }).click();
    }
  });

  it('adapts navigation to viewport changes without JavaScript', async () => {
    await render({ width: 1280, props: { showMenuButton: false } });
    await browserExpect(page.getByRole('link', { name: 'Volunteer', exact: true })).toBeVisible();
    await browserExpect(page.getByRole('button', { name: 'Meny', exact: true })).toBeHidden();
    await page.setViewportSize({ width: 375, height: 800 });
    await page.getByRole('button', { name: 'Meny', exact: true }).click();
    await browserExpect(page.getByRole('link', { name: 'Volunteer', exact: true })).toBeVisible();
  });

  it('provides working login links and defers callback-only controls', async () => {
    await render({ props: { showSearch: true, showCta: true, showThemeToggle: true,
      showHeaderExtension: true, showLanguageSwitch: true, showLogin: true, loginHref: '#login' } });
    await browserExpect(page.getByRole('button', { name: /søk|støtt/i })).toHaveCount(0);
    await browserExpect(page.getByRole('switch')).toHaveCount(0);
    await page.getByRole('link', { name: /logg inn/i }).click();
    await browserExpect(page).toHaveURL(/#login$/);
  });

  it.each([undefined, 'dark'] as const)('preserves a pre-opened menu when hydrating a dark page (scheme: %s)', async (colorScheme) => {
    const picture = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20"/%3E';
    const props: HeaderProps = { colorScheme, secondaryLogo: true, secondaryLogoSrc: `${picture}#light`,
      secondaryLogoSrcDark: `${picture}#dark`, secondaryLogoAlt: 'Partner',
      showHeaderExtension: true, showModeToggle: true };
    await render({ javaScriptEnabled: true, props });
    await browserExpect(page.getByRole('img', { name: 'Partner' })).toHaveAttribute('src', `${picture}#${colorScheme ?? 'light'}`);
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    await page.getByRole('button', { name: /meny/i }).click();
    await page.getByRole('link', { name: 'Contact' }).focus();
    await page.addScriptTag({ type: 'module', content: `import { hydrateHeader } from '/tests/fixtures/header-hydration.ts'; hydrateHeader(${JSON.stringify(props)});` });
    await browserExpect(page.locator('header')).toHaveAttribute('data-enhanced', 'true', { timeout: 10000 });
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await browserExpect(page.getByRole('link', { name: 'Contact' })).toBeFocused();
    await browserExpect(page.getByRole('img', { name: 'Partner' })).toHaveAttribute('src', `${picture}#dark`);
    expect(errors).toEqual([]);
  });
});
