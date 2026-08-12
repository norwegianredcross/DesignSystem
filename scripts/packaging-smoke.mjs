/**
 * Pakke-røyktest: verifiserer at en konsument som installerer npm-pakken og
 * følger README-en («import 'rk-designsystem/styles'») faktisk får stylede
 * komponenter — ikke bare at importene lar seg løse.
 *
 * Flyt: npm pack → installer tarball i en midlertidig Vite-app (samme
 * avhengighetsversjoner som repoet) → bygg → åpne i Chromium og les
 * computed styles.
 *
 * Verifiserer tre lag:
 *  1. Tokens: --ds-color-* variabler resolver på :root
 *  2. Digdir base-CSS: Button har reell bakgrunn, radius og Source Sans 3
 *  3. Komponent-CSS: dist/rk-designsystem.css er med i konsumentens bundle
 *     (computed styles for dette laget kan først asserters når runtime-
 *     fallback-injeksjonen i komponentene er fjernet — se FIX_PLAN fase 4)
 *
 * Forutsetter at `npm run build` er kjørt (dist/ må finnes).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const repoPkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: ['ignore', 'inherit', 'inherit'] });
}

if (!fs.existsSync(path.join(ROOT, 'dist/componentlibrary.es.js'))) {
  fail('dist/ mangler — kjør `npm run build` før røyktesten.');
}
if (!fs.readFileSync(path.join(ROOT, 'dist/styles.css'), 'utf8').includes('rk-designsystem.css')) {
  fail('dist/styles.css importerer ikke rk-designsystem.css — komponentstiler leveres ikke.');
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rk-pack-smoke-'));
console.log(`Arbeidskatalog: ${tmp}`);

try {
  // 1. Pakk biblioteket slik npm publish ville gjort
  const packOutput = execSync(`npm pack --pack-destination ${JSON.stringify(tmp)}`, { cwd: ROOT })
    .toString()
    .trim()
    .split('\n')
    .pop();
  const tarball = path.join(tmp, packOutput);
  console.log(`Pakket: ${packOutput}`);

  // 2. Konsument-app med samme avhengighetsversjoner som repoet
  const dev = repoPkg.devDependencies;
  const appDir = path.join(tmp, 'app');
  fs.mkdirSync(path.join(appDir, 'src'), { recursive: true });
  fs.writeFileSync(
    path.join(appDir, 'package.json'),
    JSON.stringify({ name: 'rk-smoke-app', private: true, type: 'module' }, null, 2),
  );
  fs.writeFileSync(
    path.join(appDir, 'index.html'),
    `<!doctype html><html lang="no"><head><meta charset="utf-8"><title>Smoke</title></head>
<body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>`,
  );
  fs.writeFileSync(
    path.join(appDir, 'src/main.jsx'),
    `import { createRoot } from 'react-dom/client';
import 'rk-designsystem/styles';
import { Alert, Button, GraphicElement } from 'rk-designsystem';

createRoot(document.getElementById('root')).render(
  <main>
    <Alert data-color="info">Viktig melding</Alert>
    <Button id="smoke-button">Gi 250 kr</Button>
    <GraphicElement shape="cross" aria-hidden />
  </main>,
);
`,
  );
  fs.writeFileSync(
    path.join(appDir, 'vite.config.js'),
    `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: './', plugins: [react()] });
`,
  );

  const deps = [
    JSON.stringify(tarball),
    `react@${dev.react}`,
    `react-dom@${dev['react-dom']}`,
    `@digdir/designsystemet-react@${dev['@digdir/designsystemet-react']}`,
    `@digdir/designsystemet-css@${dev['@digdir/designsystemet-css']}`,
    `@navikt/aksel-icons@${dev['@navikt/aksel-icons']}`,
    `rk-design-tokens@${repoPkg.dependencies?.['rk-design-tokens'] ?? dev['rk-design-tokens']}`,
    `vite@${dev.vite}`,
    `@vitejs/plugin-react@${dev['@vitejs/plugin-react']}`,
  ].join(' ');
  console.log('Installerer tarball + avhengigheter i konsument-appen …');
  run(`npm install --no-audit --no-fund --loglevel=error ${deps}`, appDir);

  // 3. Bygg konsument-appen
  console.log('Bygger konsument-appen …');
  run('npx vite build --logLevel error', appDir);

  // 4a. Bundle-innhold: alle tre CSS-lag skal være med
  const assetsDir = path.join(appDir, 'dist/assets');
  const cssBundle = fs
    .readdirSync(assetsDir)
    .filter((f) => f.endsWith('.css'))
    .map((f) => fs.readFileSync(path.join(assetsDir, f), 'utf8'))
    .join('\n');
  if (!cssBundle.includes('--ds-color-')) fail('Tokens (--ds-color-*) mangler i konsumentens CSS-bundle.');
  if (!cssBundle.includes('.ds-button')) fail('Digdir base-CSS (.ds-button) mangler i konsumentens CSS-bundle.');
  if (!cssBundle.includes('--graphic-element-color')) {
    fail('Komponentstilene fra rk-designsystem.css mangler i konsumentens CSS-bundle.');
  }
  console.log('✅ CSS-bundle inneholder tokens, Digdir base og komponentstiler.');

  // 4b. Computed styles i ekte nettleser
  const server = http.createServer((req, res) => {
    const reqPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    const filePath = path.join(appDir, 'dist', path.normalize(reqPath));
    if (!filePath.startsWith(path.join(appDir, 'dist')) || !fs.existsSync(filePath)) {
      res.writeHead(404).end();
      return;
    }
    const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml' };
    res.writeHead(200, { 'content-type': types[path.extname(filePath)] ?? 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  });
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'load' });
    await page.waitForSelector('#smoke-button');

    const result = await page.evaluate(() => {
      const rootStyles = getComputedStyle(document.documentElement);
      const button = getComputedStyle(document.querySelector('#smoke-button'));
      return {
        redToken: rootStyles.getPropertyValue('--ds-color-primary-color-red-base-default').trim(),
        buttonBackground: button.backgroundColor,
        buttonRadius: button.borderRadius,
        buttonFont: button.fontFamily,
      };
    });

    if (!result.redToken) fail('Token --ds-color-primary-color-red-base-default resolver ikke på :root.');
    if (!result.buttonBackground || result.buttonBackground === 'rgba(0, 0, 0, 0)') {
      fail(`Button har ingen bakgrunnsfarge (fikk: ${result.buttonBackground}) — Digdir-CSS/tema er ikke i effekt.`);
    }
    if (parseFloat(result.buttonRadius) <= 0) {
      fail(`Button har ingen border-radius (fikk: ${result.buttonRadius}) — radius-tokens er ikke i effekt.`);
    }
    if (!result.buttonFont.includes('Source Sans 3')) {
      fail(`Button bruker ikke Source Sans 3 (fikk: ${result.buttonFont}).`);
    }
    console.log(
      `✅ Computed styles OK: token=${result.redToken}, bg=${result.buttonBackground}, radius=${result.buttonRadius}`,
    );
  } finally {
    await browser.close();
    server.close();
  }

  console.log('✅ Pakke-røyktest bestått.');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
