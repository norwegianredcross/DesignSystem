import { renderToString } from 'react-dom/server';
import {
  chromium,
  firefox,
  webkit,
  expect,
  type Browser,
  type BrowserContext,
  type Page,
} from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest';

describe.each([chromium, firefox, webkit].map((engine) => ({ engine, name: engine.name() })))(
  'FileUpload baseline: $name',
  { timeout: 30000 },
  ({ engine }) => {
    let server: ViteDevServer;
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let markup: string;
    let multipleMarkup: string;
    let disabledMarkup: string;
    let exampleMarkup: string;
    let multipleExampleMarkup: string;
    let received: { name: string; contents: string }[] | undefined;

    beforeAll(async () => {
      server = await createServer({
        configFile: false,
        appType: 'custom',
        esbuild: { jsx: 'automatic' },
        cacheDir: `node_modules/.vite-file-upload-${engine.name()}`,
        optimizeDeps: {
          include: [
            'react',
            'react-dom/client',
            'react/jsx-runtime',
            'react/jsx-dev-runtime',
            '@digdir/designsystemet-react',
          ],
        },
        server: { host: '127.0.0.1', port: 0 },
      });
      server.middlewares.use(async (request, response, next) => {
        if (request.url?.startsWith('/baseline')) {
          const styled = !request.url.includes('unstyled');
          response.setHeader('Content-Type', 'text/html');
          response.end(
            `<!doctype html><html lang="en"><head><title>FileUpload baseline</title>${styled ? '<link rel="stylesheet" href="/src/styles.css">' : ''}</head><body>${request.url.includes('multiple') ? multipleMarkup : request.url.includes('disabled') ? disabledMarkup : markup}</body></html>`
          );
        } else if (request.url?.startsWith('/example')) {
          response.setHeader('Content-Type', 'text/html');
          response.end(
            `<!doctype html><html lang="nb"><head><title>FileUpload example</title><link rel="stylesheet" href="/src/styles.css"></head><body><div id="example">${request.url.includes('multiple') ? multipleExampleMarkup : exampleMarkup}</div><script type="module" src="/tests/fixtures/file-upload-example.ts"></script></body></html>`
          );
        } else if (request.url === '/upload') {
          const chunks: Buffer[] = [];
          for await (const chunk of request) chunks.push(Buffer.from(chunk));
          const data = await new Response(Buffer.concat(chunks), {
            headers: { 'Content-Type': request.headers['content-type']! },
          }).formData();
          received = await Promise.all(
            data.getAll('attachment').map(async (entry) => {
              const file = entry as File;
              return { name: file.name, contents: await file.text() };
            })
          );
          response.setHeader('Content-Type', 'text/html');
          response.end(
            '<!doctype html><html lang="en"><title>Uploaded</title><h1>Upload received</h1></html>'
          );
        } else next();
      });
      await server.listen();
      const fixture = await server.ssrLoadModule('/tests/fixtures/file-upload.ts');
      markup = renderToString(fixture.renderFileUpload());
      multipleMarkup = renderToString(fixture.renderFileUpload(true));
      disabledMarkup = renderToString(fixture.renderFileUpload(false, true));
      const example = await server.ssrLoadModule('/tests/fixtures/file-upload-example.ts');
      exampleMarkup = renderToString(example.renderUploadExample());
      multipleExampleMarkup = renderToString(example.renderUploadExample(true));
      browser = await engine.launch();
    });

    afterEach(async () => {
      await context?.close();
    });
    afterAll(async () => {
      await browser?.close();
      await server?.close();
    });

    async function open(styled = true, variant = '') {
      received = undefined;
      context = await browser.newContext({
        javaScriptEnabled: false,
        viewport: { width: 320, height: 800 },
        reducedMotion: 'reduce',
      });
      page = await context.newPage();
      page.setDefaultTimeout(5000);
      await page.goto(
        `${server.resolvedUrls!.local[0]}baseline?${styled ? '' : 'unstyled&'}${variant}`
      );
    }

    for (const styled of [true, false]) {
      it(`keeps labels, reset and real multipart submission without JS (${styled ? 'with' : 'without'} CSS)`, async () => {
        await open(styled);
        const input = page.getByLabel('Attachment', { exact: true });
        await expect(input).toHaveAccessibleName('Attachment');
        await expect(page.getByText('Choose a PDF file.', { exact: true })).toBeVisible();
        await expect(input).toBeVisible();
        await expect(input).toHaveAttribute('required', '');
        await page.getByRole('button', { name: 'Upload', exact: true }).click();
        expect(received).toBeUndefined();
        expect(page.url()).toContain('/baseline');
        const file = {
          name: 'attachment.pdf',
          mimeType: 'application/pdf',
          buffer: Buffer.from('PDF fixture'),
        };
        await input.setInputFiles(file);
        await page.getByRole('button', { name: 'Reset', exact: true }).click();
        await expect(input).toHaveValue('');
        await input.setInputFiles(file);
        await page.getByRole('button', { name: 'Upload', exact: true }).click();
        await expect(page.getByRole('heading', { name: 'Upload received' })).toBeVisible();
        expect(received).toEqual([{ name: 'attachment.pdf', contents: 'PDF fixture' }]);
      });
    }

    it('selects files and resets the upstream Field example in a narrow viewport', async () => {
      context = await browser.newContext({ viewport: { width: 320, height: 800 } });
      page = await context.newPage();
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      for (const multiple of [false, true]) {
        await page.goto(`${server.resolvedUrls!.local[0]}example${multiple ? '?multiple' : ''}`);
        await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true');
        const input = page.getByLabel('Vedlegg', { exact: true });
        await expect(input).toHaveAccessibleDescription(
          multiple
            ? 'Velg eller slipp filer her PDF, maks 5 MB per fil.'
            : 'Velg eller slipp en fil her PDF, maks 5 MB per fil.'
        );
        await expect(page.getByRole('status')).toHaveCount(0);
        const names = multiple
          ? ['første.pdf', 'andre.pdf']
          : ['et-veldig-langt-filnavn-som-fortsatt-skal-være-lesbart-på-en-smal-skjerm.pdf'];
        await input.setInputFiles(
          names.map((name) => ({ name, mimeType: 'application/pdf', buffer: Buffer.from(name) }))
        );
        expect(
          await input.evaluate((element: HTMLInputElement) =>
            Array.from(element.files ?? [], (file) => file.name)
          )
        ).toEqual(names);
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
        ).toBe(true);
        await page.getByRole('button', { name: 'Tilbakestill', exact: true }).click();
        await expect(input).toHaveValue('');
        await expect(page.getByText('Ingen filer valgt', { exact: true })).toHaveCount(0);
      }
      expect(errors).toEqual([]);
    });

    it('opens the native chooser by keyboard and pointer without JS', async () => {
      await open();
      const input = page.getByLabel('Attachment', { exact: true });
      await input.focus();
      const keyboardChooser = page.waitForEvent('filechooser');
      await page.keyboard.press('Space');
      expect((await keyboardChooser).isMultiple()).toBe(false);
      const pointerChooser = page.waitForEvent('filechooser');
      await input.click();
      await (
        await pointerChooser
      ).setFiles({
        name: 'chosen.pdf',
        mimeType: 'application/pdf',
        buffer: Buffer.from('Chosen file'),
      });
      await page.getByRole('button', { name: 'Upload', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Upload received' })).toBeVisible();
      expect(received).toEqual([{ name: 'chosen.pdf', contents: 'Chosen file' }]);
    });

    it('submits every selected file in the multiple example without JS', async () => {
      await open(true, 'multiple');
      const chooser = page.waitForEvent('filechooser');
      await page.getByLabel('Attachment', { exact: true }).click();
      const dialog = await chooser;
      expect(dialog.isMultiple()).toBe(true);
      await dialog.setFiles(
        ['first.pdf', 'second.pdf'].map((name) => ({
          name,
          mimeType: 'application/pdf',
          buffer: Buffer.from(name),
        }))
      );
      await page.getByRole('button', { name: 'Upload', exact: true }).click();
      await expect(page.getByRole('heading', { name: 'Upload received' })).toBeVisible();
      expect(received).toEqual([
        { name: 'first.pdf', contents: 'first.pdf' },
        { name: 'second.pdf', contents: 'second.pdf' },
      ]);
    });

    it('skips disabled selection in keyboard navigation and form submission', async () => {
      await open(true, 'disabled');
      const input = page.getByLabel('Attachment', { exact: true });
      await expect(input).toBeDisabled();
      const previous = page.getByRole('button', { name: 'Reset', exact: true });
      await previous.focus();
      await input.focus();
      await expect(previous).toBeFocused();
      await page.keyboard.press('Tab');
      await expect(input).not.toBeFocused();
      const submit = page.getByRole('button', { name: 'Upload', exact: true });
      await submit.click();
      await expect(page.getByRole('heading', { name: 'Upload received' })).toBeVisible();
      expect(received).toEqual([]);
    });
  }
);
