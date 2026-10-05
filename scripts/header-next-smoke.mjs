import assert from 'node:assert/strict';
import { consumerOverrides } from './consumer-overrides.mjs';
import { execFileSync } from 'node:child_process';
import { cp, readFile, writeFile } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { chromium, expect } from '@playwright/test';

// Uses the same Next version as the portal, without adding Next to the library.
// The server-only fixture imports make an accidental client page/layout fail
// the production build, rather than merely checking rendered HTML.
export async function verifyNextHeader(tarball, appDir, dependencies) {
  await cp(new URL('../tests/fixtures/next-header/', import.meta.url), appDir, { recursive: true });
  await writeFile(path.join(appDir, 'package.json'), JSON.stringify({
    name: 'rk-header-next-smoke', private: true, type: 'module',
    overrides: consumerOverrides,
    dependencies: {
      next: '16.2.6', 'server-only': '0.0.1',
      react: dependencies.react, 'react-dom': dependencies['react-dom'],
      '@digdir/designsystemet-react': dependencies['@digdir/designsystemet-react'],
      '@digdir/designsystemet-css': dependencies['@digdir/designsystemet-css'],
      'rk-designsystem': `file:${tarball}`,
    },
  }, null, 2));
  const options = { cwd: appDir, stdio: 'inherit', timeout: 240_000,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' } };
  execFileSync('npm', ['install', '--no-audit', '--no-fund', '--loglevel=error'], options);
  execFileSync('npm', ['exec', '--', 'next', 'build'], options);

  const output = path.join(appDir, 'out');
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript',
    '.css': 'text/css', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
  const server = http.createServer(async (request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const file = path.resolve(output, `.${pathname}${pathname.endsWith('/') ? 'index.html' : ''}`);
    if (!file.startsWith(`${output}${path.sep}`)) {
      response.writeHead(403).end();
      return;
    }
    try {
      const contents = await readFile(file);
      response.setHeader('Content-Type', types[path.extname(file)] ?? 'application/octet-stream');
      response.end(contents);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  let browser;
  try {
    browser = await chromium.launch();
    const origin = `http://127.0.0.1:${server.address().port}`;
    for (const javaScriptEnabled of [false, true]) {
      const context = await browser.newContext({ javaScriptEnabled, viewport: { width: 375, height: 800 } });
      try {
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
        for (const name of ['Layout header', 'Page header']) {
          await page.goto(origin);
          const section = page.getByRole('region', { name, exact: true });
          if (javaScriptEnabled) {
            await expect(section.locator('header')).toHaveAttribute('data-enhanced', 'true');
            if (name === 'Layout header') await expect(section.getByRole('switch')).toBeChecked();
          }
          await section.getByRole('button', { name: 'Meny', exact: true }).click();
          await section.getByRole('link', { name: 'Server-rendered menu link' }).click();
          await expect(page.getByRole('heading', { name: 'About page' })).toBeVisible();
        }
        // Reuse this packed consumer for Carousel's server-page contract.
        for (const styled of [true, false]) {
          if (!styled) await page.route('**/*.css*', (route) => route.fulfill({ contentType: 'text/css', body: '' }));
          await page.goto(`${origin}/carousel/`);
          if (javaScriptEnabled) {
            // The layout's existing Header confirms React has hydrated even
            // when Carousel correctly stays at its unstyled HTML baseline.
            await expect(page.locator('header')).toHaveAttribute('data-enhanced', 'true');
          }
          const gallery = page.getByRole('region', { name: 'Server gallery' });
          if (javaScriptEnabled && styled) {
            const next = gallery.getByRole('button', { name: 'Neste bilde' });
            await next.click();
            await expect(gallery.getByRole('status')).toContainText('Second image');
            await expect(gallery.getByRole('img', { name: 'Second image' })).toBeInViewport({ ratio: 0.9 });
            await expect(next).toBeFocused();
          } else {
            await expect(gallery.getByRole('button')).toHaveCount(0);
            await expect(gallery.getByRole('img')).toHaveCount(3);
            for (const name of ['First image', 'Second image', 'Third image']) {
              const image = gallery.getByRole('img', { name });
              await image.scrollIntoViewIfNeeded();
              await expect(image).toHaveJSProperty('complete', true);
              await expect(image).not.toHaveJSProperty('naturalWidth', 0);
              await expect(image).toHaveCSS('opacity', '1');
              // Unstyled images may exceed a narrow viewport, but must remain
              // reachable rather than hidden behind carousel clipping.
              await expect(image).toBeInViewport();
            }
          }
          await expect(gallery.getByLabel('Laster bilde', { exact: true })).toHaveCount(0);
        }
        assert.deepEqual(errors, [], 'Next consumer must hydrate without runtime/console errors');
      } finally {
        await context.close();
      }
    }
    console.log('✅ Next server page/layout: packed Header, server-rendered children, hydration and no-JS navigation passed.');
    console.log('✅ Next server page: packed Carousel baseline with missing JS/CSS and navigation after hydration passed.');
  } finally {
    await browser?.close();
    await new Promise((resolve) => server.close(resolve));
  }
}
