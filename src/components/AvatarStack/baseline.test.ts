import { renderToString } from 'react-dom/server';
import {
  chromium,
  firefox,
  webkit,
  expect,
  type Browser,
  type BrowserContext,
} from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest';

describe.each([chromium, firefox, webkit].map((engine) => ({ engine, name: engine.name() })))(
  'AvatarStack baseline: $name',
  ({ engine }) => {
    let server: ViteDevServer;
    let browser: Browser;
    let context: BrowserContext;
    let markup: string;

    beforeAll(async () => {
      server = await createServer({
        configFile: false,
        appType: 'custom',
        server: { host: '127.0.0.1', port: 0 },
      });
      server.middlewares.use((request, response, next) => {
        if (request.url?.startsWith('/baseline')) {
          const styles = request.url.includes('unstyled')
            ? ''
            : '<link rel="stylesheet" href="/src/styles.css">';
          response.setHeader('Content-Type', 'text/html');
          response.end(
            `<!doctype html><html lang="en"><head><title>Participants</title>${styles}</head><body><main>${markup}</main></body></html>`
          );
        } else if (request.url === '/person/kari') {
          response.setHeader('Content-Type', 'text/html');
          response.end(
            '<!doctype html><html lang="en"><title>Kari Hansen</title><h1>Kari Hansen</h1></html>'
          );
        } else next();
      });
      await server.listen();
      const fixture = await server.ssrLoadModule('/tests/fixtures/avatar-stack.ts');
      markup = renderToString(fixture.renderAvatarStack());
      browser = await engine.launch();
    }, 30000);

    afterEach(async () => {
      await context?.close();
    });
    afterAll(async () => {
      await browser?.close();
      await server?.close();
    });

    it.each([true, false])(
      'keeps named people and keyboard navigation usable without JS (CSS: %s)',
      async (styled) => {
        context = await browser.newContext({
          javaScriptEnabled: false,
          viewport: { width: 375, height: 800 },
        });
        const page = await context.newPage();
        await page.goto(`${server.resolvedUrls!.local[0]}baseline?${styled ? '' : 'unstyled'}`);
        const list = page.getByRole('list', { name: 'Participants' });
        await expect(list.getByRole('listitem')).toHaveCount(3);
        await expect(list.getByText('+5 participants')).toBeVisible();
        const first = list.getByRole('link', { name: 'Ola Nordmann' });
        const second = list.getByRole('link', { name: 'Kari Hansen' });
        await expect(first).toBeVisible();
        await expect(second).toBeVisible();
        await first.focus();
        // WebKit on macOS uses Option+Tab to include links in keyboard navigation.
        await page.keyboard.press(engine === webkit ? 'Alt+Tab' : 'Tab');
        await expect(second).toBeFocused();
        await page.keyboard.press('Enter');
        await expect(page.getByRole('heading', { name: 'Kari Hansen' })).toBeVisible();
      }
    );
  }
);
