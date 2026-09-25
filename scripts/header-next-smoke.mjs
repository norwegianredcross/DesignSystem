import assert from 'node:assert/strict';
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
        assert.deepEqual(errors, [], 'Next consumer must hydrate without runtime/console errors');
      } finally {
        await context.close();
      }
    }
    console.log('✅ Next server page/layout: packed Header, server-rendered children, hydration and no-JS navigation passed.');
  } finally {
    await browser?.close();
    await new Promise((resolve) => server.close(resolve));
  }
}
