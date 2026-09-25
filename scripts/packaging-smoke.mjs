/**
 * Pakke-røyktest: verifiserer at en konsument som installerer npm-pakken og
 * følger README-en («import 'rk-designsystem/styles'») faktisk får stylede
 * komponenter — ikke bare at importene lar seg løse.
 *
 * Flyt: npm pack → installer tarball i en midlertidig Vite-app (samme
 * avhengighetsspenn som repoet, uten repoets lockfil) → bygg → åpne i Chromium og les
 * computed styles.
 *
 * Verifiserer tre lag:
 *  1. Tokens: --ds-color-* variabler resolver på :root
 *  2. Digdir base-CSS: Button har reell bakgrunn, radius og Source Sans 3
 *  3. Komponent-CSS: dist/rk-designsystem.css er med i konsumentens bundle
 *     (computed styles for dette laget kan først asserters når runtime-
 *     fallback-injeksjonen i komponentene er fjernet — se FIX_PLAN fase 4)
 *
 * Konsumentmatrise: nyeste React (19, full sjekk inkl. NodeNext-typer og
 * attw), eldste støttede React (18.3, bygg + typer + computed styles), og
 * React 17 som negativ test (peer-kontrakten skal avvise den).
 *
 * Forutsetter at `npm run build` er kjørt (dist/ må finnes).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
import { verifyNextFooter } from './footer-next-smoke.mjs';
import { expect } from '@playwright/test';
import { typecheckPublishedTypes } from './typecheck-published-types.mjs';
import { consumerOverrides } from './consumer-overrides.mjs';

const ROOT = process.cwd();
const repoPkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
// Optional exact versions reproduce regressions without the repository lockfile.
const smokeDigdir = process.env.RK_SMOKE_DIGDIR_VERSION;
const smokeCombobox = process.env.RK_SMOKE_COMBOBOX_VERSION;

function verifySuggestionDependencies(dir) {
  const appRequire = createRequire(path.join(dir, 'package.json'));
  const reactEntry = appRequire.resolve('@digdir/designsystemet-react');
  const webEntry = createRequire(reactEntry).resolve('@digdir/designsystemet-web');
  const comboboxEntry = createRequire(webEntry).resolve('@u-elements/u-combobox');
  // Read the dependency Digdir actually resolves, even with nested installs.
  function versionOf(entry, name) {
    for (let folder = path.dirname(entry); folder !== path.dirname(folder); folder = path.dirname(folder)) {
      const manifest = path.join(folder, 'package.json');
      if (fs.existsSync(manifest)) {
        const pkg = JSON.parse(fs.readFileSync(manifest, 'utf8'));
        if (pkg.name === name) return pkg.version;
      }
    }
    throw new Error(`Cannot locate manifest for ${name}`);
  }
  const digdir = versionOf(reactEntry, '@digdir/designsystemet-react');
  const combobox = versionOf(comboboxEntry, '@u-elements/u-combobox');
  if (smokeDigdir) expect(digdir).toBe(smokeDigdir);
  if (smokeCombobox) expect(combobox).toBe(smokeCombobox);
  console.log(`Suggestion consumer: Digdir ${digdir}, resolved u-combobox ${combobox}`);
}

async function verifySuggestionInteractions(page, label) {
  page.setDefaultTimeout(10000);
  const single = page.locator('#smoke-single');
  await expect(single.getByTestId('suggestion-root')).toHaveAttribute('data-smoke-ref', 'connected');
  // u-datalist assigns the combobox role when this standalone input gains focus.
  const singleInput = single.getByLabel('smoke-single');
  await singleInput.click();
  await singleInput.fill('sogn');
  await expect(singleInput).toHaveAttribute('role', 'combobox');
  await expect(singleInput).toHaveAttribute('aria-expanded', 'true');
  await expect(single.getByTestId('suggestion-options')).toBeVisible();
  await single.getByRole('option', { name: 'Sogndal', exact: true }).click();
  await expect(singleInput).toHaveValue('Sogndal');
  await expect.poll(() => single.evaluate(form => new FormData(form).getAll('destination')))
    .toEqual(['sogndal']);
  await single.getByRole('button', { name: 'Clear selection', exact: true }).click();
  await expect(singleInput).toHaveValue('');
  await expect(singleInput).toBeFocused();
  await singleInput.press('Tab');
  await expect.poll(() => single.evaluate(form => new FormData(form).getAll('destination')))
    .toEqual([]);
  await expect(singleInput).toHaveValue('');
  await singleInput.click();
  await expect(singleInput).toHaveValue('');
  await singleInput.press('Escape');
  await expect(single.getByTestId('suggestion-options')).not.toBeVisible();

  for (const [id, query, nextLabel, nextValue] of [
    ['smoke-multi-empty', '', 'Bergen', 'bergen'],
    ['smoke-multi-query', 'o', 'Trondheim', 'trondheim'],
  ]) {
    const form = page.locator(`#${id}`);
    await expect(form.getByTestId('suggestion-root')).toHaveAttribute('data-smoke-ref', 'connected');
    const input = form.getByLabel(id);
    await input.click();
    await expect(input).toHaveAttribute('role', 'combobox');
    if (query) await input.fill(query);
    await form.getByRole('option', { name: 'Oslo', exact: true }).click();
    await expect(input).toHaveValue(query);
    await expect.poll(() => form.evaluate(el => new FormData(el).getAll('destination')))
      .toEqual(['oslo']);
    await input.click();
    await form.getByRole('option', { name: nextLabel, exact: true }).click();
    await expect(input).toHaveValue(query);
    await expect.poll(() => form.evaluate(el => new FormData(el).getAll('destination')))
      .toEqual(['oslo', nextValue]);
    // Close the list so it doesn't cover the next fixture's input.
    await input.press('Escape');
    await expect(form.getByTestId('suggestion-options')).not.toBeVisible();
  }
  console.log(`✅ [${label}] Packed Suggestion clears selection and preserves empty/typed multi-select queries.`);
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: ['ignore', 'inherit', 'inherit'] });
}

// Serves a consumer app's build output and reads computed styles in Chromium.
// Extracted to a function so both consumer legs run the exact same assertions.
async function verifyRenderedStyles(dir, label) {
  const server = http.createServer((req, res) => {
    const reqPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    const filePath = path.join(dir, 'dist', path.normalize(reqPath));
    if (!filePath.startsWith(path.join(dir, 'dist')) || !fs.existsSync(filePath)) {
      res.writeHead(404).end();
      return;
    }
    const types = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.svg': 'image/svg+xml',
      '.woff2': 'font/woff2',
    };
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

    const result = await page.evaluate(async () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const button = getComputedStyle(document.querySelector('#smoke-button'));
      // Prove the font FILES load, not just that the name is declared:
      // computed font-family reports the declared family even when the
      // file 404s, and document.fonts.check() is true for unknown families
      // too. fonts.load() fetches the matching faces (the italic one is
      // otherwise lazy — nothing on the page is italic), and each face's
      // status must then be 'loaded'.
      await document.fonts.load("400 16px 'Source Sans 3'");
      await document.fonts.load("italic 400 16px 'Source Sans 3'");
      const faces = [...document.fonts]
        .filter((face) => face.family.replace(/["']/g, '') === 'Source Sans 3')
        .map((face) => `${face.style}:${face.status}`);
      return {
        redToken: rootStyles.getPropertyValue('--ds-color-primary-color-red-base-default').trim(),
        buttonBackground: button.backgroundColor,
        buttonRadius: button.borderRadius,
        buttonFont: button.fontFamily,
        faces,
      };
    });

    if (!result.redToken) fail(`[${label}] Token --ds-color-primary-color-red-base-default resolver ikke på :root.`);
    if (!result.buttonBackground || result.buttonBackground === 'rgba(0, 0, 0, 0)') {
      fail(`[${label}] Button har ingen bakgrunnsfarge (fikk: ${result.buttonBackground}) — Digdir-CSS/tema er ikke i effekt.`);
    }
    if (parseFloat(result.buttonRadius) <= 0) {
      fail(`[${label}] Button har ingen border-radius (fikk: ${result.buttonRadius}) — radius-tokens er ikke i effekt.`);
    }
    if (!result.buttonFont.includes('Source Sans 3')) {
      fail(`[${label}] Button bruker ikke Source Sans 3 (fikk: ${result.buttonFont}).`);
    }
    for (const style of ['normal', 'italic']) {
      if (!result.faces.includes(`${style}:loaded`)) {
        fail(`[${label}] Source Sans 3 (${style}) er ikke lastet i nettleseren (faces: ${result.faces.join(', ') || 'ingen'}) — fontfilen fra pakken nås ikke.`);
      }
    }
    console.log(
      `✅ [${label}] Computed styles OK: token=${result.redToken}, bg=${result.buttonBackground}, radius=${result.buttonRadius}`,
    );
    await verifySuggestionInteractions(page, label);
  } finally {
    await browser.close();
    server.close();
  }
}

if (!fs.existsSync(path.join(ROOT, 'dist/index.js'))) {
  fail('dist/ mangler — kjør `npm run build` før røyktesten.');
}
// Unbundlet dist (én fil per modul, som oppstrøms Digdir): hver publisert
// JS-fil skal starte med 'use client', slik at Next.js App Router kan
// importere komponentene direkte i server components uten egne wrappere.
// Den flate bundlen strippet direktivene, og da feilet ALLE importer under
// react-server-betingelsen.
const distJsFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.js')) distJsFiles.push(full);
  }
})(path.join(ROOT, 'dist'));
if (distJsFiles.length < 40) {
  fail(`dist inneholder bare ${distJsFiles.length} JS-filer — preserveModules-bygget er trolig brutt.`);
}
for (const file of distJsFiles) {
  if (!fs.readFileSync(file, 'utf8').trimStart().startsWith('"use client"')) {
    fail(`${path.relative(ROOT, file)} mangler 'use client'-banneret.`);
  }
}
if (fs.existsSync(path.join(ROOT, 'dist/node_modules'))) {
  fail('dist/node_modules finnes — en avhengighet ble bundlet i stedet for å være external (sjekk subpath-imports).');
}
// publicDir-vakt: dokumentasjonsappens bilder skal ikke publiseres til npm.
if (fs.readdirSync(path.join(ROOT, 'dist')).some((f) => /\.(png|svg|jpe?g)$/.test(f))) {
  fail('dist inneholder bilder fra public/ — publicDir er ikke slått av i bibliotekbygget.');
}
// Stilfilen skal levere komponentstilene OG fonten fra pakken selv:
// @font-face med relative URL-er til dist/fonts, ingen Google Fonts-import.
const stylesCss = fs.readFileSync(path.join(ROOT, 'dist/styles.css'), 'utf8');
if (!stylesCss.includes('rk-designsystem.css')) {
  fail('dist/styles.css importerer ikke rk-designsystem.css — komponentstiler leveres ikke.');
}
if (stylesCss.includes('fonts.googleapis.com')) {
  fail('dist/styles.css ber om fonten fra Google — fonten skal leveres fra pakken (dist/fonts).');
}
if (!fs.existsSync(path.join(ROOT, 'dist/fonts/LICENSE.txt'))) {
  fail('dist/fonts/LICENSE.txt mangler — OFL krever at lisensteksten følger fontfilene.');
}
for (const font of ['source-sans-3-latin.woff2', 'source-sans-3-latin-italic.woff2']) {
  if (!stylesCss.includes(`./fonts/${font}`)) fail(`dist/styles.css har ingen @font-face for ./fonts/${font}.`);
  if (!fs.existsSync(path.join(ROOT, 'dist/fonts', font))) fail(`dist/fonts/${font} mangler — build-styles kopierte den ikke.`);
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

  console.warn('Consumer dependency exception: exclude Aksel 8.17.1 (missing compiled icons; see README).');

  // 2. Konsument-app med samme avhengighetsversjoner som repoet
  const dev = repoPkg.devDependencies;
  const appDir = path.join(tmp, 'app');
  fs.mkdirSync(path.join(appDir, 'src'), { recursive: true });
  fs.writeFileSync(
    path.join(appDir, 'package.json'),
    JSON.stringify({ name: 'rk-smoke-app', private: true, type: 'module', overrides: consumerOverrides }, null, 2),
  );
  fs.writeFileSync(
    path.join(appDir, 'index.html'),
    `<!doctype html><html lang="no"><head><meta charset="utf-8"><title>Smoke</title></head>
<body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>`,
  );
  fs.writeFileSync(
    path.join(appDir, 'src/main.jsx'),
    `import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'rk-designsystem/styles';
import { Alert, Button, GraphicElement, Suggestion } from 'rk-designsystem';

const options = [
  { label: 'Sogndal', value: 'sogndal' },
  { label: 'Oslo', value: 'oslo' },
  { label: 'Bergen', value: 'bergen' },
  { label: 'Trondheim', value: 'trondheim' },
];

// Set both clear labels: 1.21 uses aria-label; 1.22 applies data-sr-clear.
function SuggestionFixture({ id, multiple = false }) {
  const [selected, setSelected] = useState(multiple ? [] : null);
  return (
    <form id={id}>
      <Suggestion multiple={multiple} selected={selected} onSelectedChange={setSelected} name="destination"
        data-testid="suggestion-root"
        data-sr-clear="Clear selection"
        ref={node => { if (node) node.dataset.smokeRef = 'connected'; }}>
        <Suggestion.Input aria-label={id} />
        <Suggestion.Clear aria-label="Clear selection" />
        <Suggestion.List data-testid="suggestion-options">
          {options.map(option => (
            <Suggestion.Option key={option.value} value={option.value} label={option.label}>
              {option.label}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <main>
    <Alert data-color="info">Viktig melding</Alert>
    <Button id="smoke-button">Gi 250 kr</Button>
    <GraphicElement shape="cross" aria-hidden />
    <SuggestionFixture id="smoke-single" />
    <SuggestionFixture id="smoke-multi-empty" multiple />
    <SuggestionFixture id="smoke-multi-query" multiple />
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

  // Konsumenter installerer selv peers (react + Digdir) og byggverktøy;
  // pakkens egne dependencies (ikoner, date-fns, tokens) skal npm dra inn.
  const deps = [
    JSON.stringify(tarball),
    `react@${dev.react}`,
    `react-dom@${dev['react-dom']}`,
    JSON.stringify(`@digdir/designsystemet-react@${smokeDigdir ?? dev['@digdir/designsystemet-react']}`),
    JSON.stringify(`@digdir/designsystemet-css@${smokeDigdir ?? dev['@digdir/designsystemet-css']}`),
    ...(smokeCombobox ? [JSON.stringify(`@u-elements/u-combobox@${smokeCombobox}`)] : []),
    `vite@${dev.vite}`,
    `@vitejs/plugin-react@${dev['@vitejs/plugin-react']}`,
    // For the type-check leg: the consumer compiles our published d.ts itself.
    `typescript@${dev.typescript}`,
    `@types/react@${dev['@types/react']}`,
    `@types/react-dom@${dev['@types/react-dom']}`,
    '@arethetypeswrong/cli@0.18.5',
  ].join(' ');
  console.log('Installerer tarball + avhengigheter i konsument-appen …');
  run(`npm install --no-audit --no-fund --loglevel=error ${deps}`, appDir);
  verifySuggestionDependencies(appDir);

  // 2b. README-ens importsti må finnes i den PAKKEDE pakken, ikke bare i
  // repoet: exports-kartet er det som avgjør om `rk-designsystem/styles`
  // resolver hos en konsument. Sjekkes via Node's egen ESM-oppløsning fra
  // konsumentens node_modules, med en fil (spesifikatoren inneholder
  // anførselstegn, og en fil i app-katalogen resolver som appens egne
  // importer).
  fs.writeFileSync(
    path.join(appDir, 'resolve-test.mjs'),
    `import { fileURLToPath } from 'node:url';
console.log(fileURLToPath(import.meta.resolve('rk-designsystem/styles')));
`,
  );
  let resolvedStyles;
  try {
    resolvedStyles = execSync('node resolve-test.mjs', { cwd: appDir, stdio: 'pipe' }).toString().trim();
  } catch (error) {
    console.error(String(error.stderr ?? error));
    fail("'rk-designsystem/styles' resolver ikke fra konsumentens node_modules — sjekk \"exports\" i package.json.");
  }
  if (!fs.existsSync(resolvedStyles)) fail(`'rk-designsystem/styles' peker på ${resolvedStyles}, som ikke finnes i tarballen.`);
  console.log('✅ README-ens stilimport resolver fra den pakkede pakken.');

  // 3. Bygg konsument-appen
  console.log('Bygger konsument-appen …');
  run('npx vite build --logLevel error', appDir);

  // 3b. Type-check the published declarations from the consumer's side.
  // skipLibCheck:false is the teeth here: tsc then fully checks
  // dist/index.d.ts INSIDE the installed tarball, so every import that file
  // contains must resolve from the consumer's node_modules. This is exactly
  // what broke in 1.3.0 — the rolled-up d.ts imported './components/…' paths
  // that only exist in this repo's source tree.
  fs.writeFileSync(
    path.join(appDir, 'src/typecheck.tsx'),
    `import 'rk-designsystem/styles';
import { createRef, type ComponentProps, type ComponentRef } from 'react';
import {
  Alert, Badge, BadgePosition, Button, DatePicker, Donor, Footer,
  GraphicElement, Header, Suggestion, Tag,
  type AlertProps, type ButtonProps, type DatePickerProps, type DonorProps,
  type SuggestionProps, type TagProps,
} from 'rk-designsystem';

// Using the prop types standalone forces tsc to resolve and expand them the
// way a consumer's IDE does.
const button: ButtonProps = { children: 'Gi 250 kr' };
const tag: TagProps = { children: 'Ny' };
const suggestionRef = createRef<ComponentRef<typeof Suggestion>>();
const singleSuggestion = (
  <Suggestion ref={suggestionRef} selected={null} onSelectedChange={item => {
    const label: string | undefined = item?.label;
    void label;
  }}>
    <Suggestion.Input />
    <Suggestion.Clear />
    <Suggestion.Toggle />
    <Suggestion.List>
      <Suggestion.Option value="oslo">Oslo</Suggestion.Option>
      <Suggestion.Empty>No matches</Suggestion.Empty>
    </Suggestion.List>
  </Suggestion>
);
const multipleSuggestion = <Suggestion multiple selected={[]} onSelectedChange={items => {
  const values: string[] = items.map(item => item.value);
  void values;
}} />;
void singleSuggestion;
void multipleSuggestion;

// data-color is compile-checked: the published d.ts embeds rk-design-tokens'
// ColorDefinitions augmentation, so real scopes pass and dead scopes fail.
// The expect-error directive inverts the check — if 'accent' ever compiles
// again (augmentation lost), the unused directive itself becomes the error.
// (NB: a comment line must not BEGIN with the directive name — TypeScript
// treats any leading "@ts-expect-error" comment as a real directive.)
const realScope: ButtonProps = { 'data-color': 'primary-color-red' };
// @ts-expect-error -- 'accent' is not an RK theme scope
const deadScope: ButtonProps = { 'data-color': 'accent' };
void realScope;
void deadScope;

type Fixture = {
  alert: AlertProps;
  donor: DonorProps;
  date: DatePickerProps;
  suggestion: SuggestionProps;
  header: ComponentProps<typeof Header>;
  footer: ComponentProps<typeof Footer>;
  badge: ComponentProps<typeof Badge>;
  badgePosition: ComponentProps<typeof BadgePosition>;
  graphic: ComponentProps<typeof GraphicElement>;
  suggestionComponent: ComponentProps<typeof Suggestion>;
  datePicker: ComponentProps<typeof DatePicker>;
  donorComponent: ComponentProps<typeof Donor>;
};

export function App(props: Fixture) {
  return (
    <main>
      <Alert {...props.alert} />
      <Button {...button} />
      <Tag {...tag} />
    </main>
  );
}
`,
  );
  typecheckPublishedTypes(appDir, ['bundler', 'NodeNext']);

  // 3c. attw ("are the types wrong") cross-checks every resolution mode npm
  // supports. The package is ESM-only, so problems that only exist for CJS
  // consumers (node10 and node16-cjs resolution) are outside the contract —
  // the same rule attw's own esm-only profile applies.
  console.log('Kjører attw mot tarballen …');
  // attw exits non-zero when ANY problem exists — even ones its --profile
  // marks as ignored — so the gate reads the JSON report instead of the exit
  // code.
  const allowedAttwProblem = (p) => p.resolutionKind === 'node10' || p.resolutionKind === 'node16-cjs';
  // The report is written to a file: when attw exits non-zero, Node's
  // execSync only hands back a truncated stdout snapshot, which breaks
  // JSON.parse. `|| true` keeps the shell exit code from throwing.
  const attwReport = path.join(tmp, 'attw.json');
  execSync(
    `npx attw ${JSON.stringify(tarball)} --entrypoints . --format json > ${JSON.stringify(attwReport)} || true`,
    { cwd: appDir, stdio: ['ignore', 'ignore', 'inherit'], shell: '/bin/bash' },
  );
  const attwJson = fs.readFileSync(attwReport, 'utf8');
  if (!attwJson.trim().startsWith('{')) {
    console.error(attwJson);
    fail('attw kunne ikke analysere tarballen.');
  }
  const attwProblems = (JSON.parse(attwJson).analysis?.problems ?? []).filter((p) => !allowedAttwProblem(p));
  if (attwProblems.length > 0) {
    console.error(JSON.stringify(attwProblems, null, 2));
    fail('attw rapporterer problemer med de publiserte typene.');
  }
  console.log('✅ attw: ingen problemer i ESM-oppløsningene.');

  // 3d. The ESM-only contract itself. The tarball must not advertise a
  // require() path (the old UMD entry never worked — Node parsed it as ESM
  // because the package is "type": "module"), and require() from a consumer
  // must fail loudly instead of half-working.
  const installedPkg = JSON.parse(
    fs.readFileSync(path.join(appDir, 'node_modules/rk-designsystem/package.json'), 'utf8'),
  );
  if (installedPkg.main || installedPkg.exports?.['.']?.require) {
    fail('Pakken averterer fortsatt en CJS-inngang (main/exports.require) — kontrakten er ESM-only.');
  }
  let requireRejected = false;
  try {
    // A .cjs script is the realistic CJS consumer: require() must throw
    // ERR_PACKAGE_PATH_NOT_EXPORTED because no "require" condition exists.
    fs.writeFileSync(path.join(appDir, 'require-test.cjs'), "require('rk-designsystem');\n");
    execSync('node require-test.cjs', { cwd: appDir, stdio: 'pipe' });
  } catch {
    requireRejected = true;
  }
  if (!requireRejected) {
    fail("require('rk-designsystem') lyktes — ESM-only-kontrakten håndheves ikke.");
  }
  console.log('✅ ESM-only: ingen CJS-inngang averteres, og require() feiler eksplisitt.');

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
  // Fonten: bundleren skal ha kopiert woff2-filene fra dist/fonts inn i
  // konsumentens build og skrevet om @font-face-URL-ene til dem.
  const fontAssets = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.woff2'));
  if (fontAssets.length < 2) fail(`Forventet to woff2-filer i konsumentens build, fant ${fontAssets.length}.`);
  if (!cssBundle.includes('@font-face') || !fontAssets.every((f) => cssBundle.includes(f))) {
    fail('@font-face i konsumentens CSS-bundle peker ikke på de kopierte fontfilene.');
  }
  if (cssBundle.includes('fonts.googleapis.com')) fail('Konsumentens CSS-bundle ber fortsatt om fonten fra Google.');
  console.log('✅ CSS-bundle inneholder tokens, Digdir base, komponentstiler og pakkens egne fontfiler.');

  // 4b. Computed styles i ekte nettleser
  await verifyRenderedStyles(appDir, 'React 19');

  // 5. Negativ test: en fersk app på React 17 som legger til pakken skal få
  //    ERESOLVE-konflikt mot peer-kontrakten (^18.3.1 || ^19), ikke en
  //    stille installasjon. (I et eksisterende tre nedgraderer npm og merker
  //    bare treet «invalid» — derfor testes fersk oppløsning uten lockfile.)
  const freshDir = path.join(tmp, 'fresh-react17');
  fs.mkdirSync(freshDir);
  fs.writeFileSync(
    path.join(freshDir, 'package.json'),
    JSON.stringify({
      name: 'rk-smoke-react17',
      private: true,
      dependencies: {
        react: '17.0.2',
        'react-dom': '17.0.2',
        'rk-designsystem': `file:${tarball}`,
      },
    }),
  );
  let incompatibleRejected = false;
  try {
    execSync('npm install --dry-run --loglevel=error', { cwd: freshDir, stdio: 'pipe' });
  } catch {
    incompatibleRejected = true;
  }
  if (!incompatibleRejected) {
    fail('npm godtok react@17 uten konflikt — peer-kontrakten fanger ikke inkompatible verter.');
  }
  console.log('✅ Inkompatibel React (17) avvises av peer-kontrakten.');

  // 6. React 18.3-konsument: peer-kontrakten lover `^18.3.1 || ^19`, men
  // alt over testet bare nyeste React. Samme app-kilde installeres med den
  // ELDSTE støttede versjonen: typene må kompilere mot @types/react@18
  // (vår d.ts skal ikke kreve React 19-typer), og appen må bygge og rendre
  // med fulle stiler.
  console.log('React 18.3-konsument …');
  const app18Dir = path.join(tmp, 'app-react18');
  fs.mkdirSync(path.join(app18Dir, 'src'), { recursive: true });
  for (const f of ['index.html', 'vite.config.js', 'src/main.jsx', 'src/typecheck.tsx']) {
    fs.copyFileSync(path.join(appDir, f), path.join(app18Dir, f));
  }
  fs.writeFileSync(
    path.join(app18Dir, 'package.json'),
    JSON.stringify({ name: 'rk-smoke-app-react18', private: true, type: 'module', overrides: consumerOverrides }, null, 2),
  );
  const deps18 = [
    JSON.stringify(tarball),
    'react@18.3.1',
    'react-dom@18.3.1',
    '@types/react@18',
    '@types/react-dom@18',
    JSON.stringify(`@digdir/designsystemet-react@${smokeDigdir ?? dev['@digdir/designsystemet-react']}`),
    JSON.stringify(`@digdir/designsystemet-css@${smokeDigdir ?? dev['@digdir/designsystemet-css']}`),
    ...(smokeCombobox ? [JSON.stringify(`@u-elements/u-combobox@${smokeCombobox}`)] : []),
    `vite@${dev.vite}`,
    `@vitejs/plugin-react@${dev['@vitejs/plugin-react']}`,
    `typescript@${dev.typescript}`,
  ].join(' ');
  run(`npm install --no-audit --no-fund --loglevel=error ${deps18}`, app18Dir);
  verifySuggestionDependencies(app18Dir);
  run('npx vite build --logLevel error', app18Dir);
  // NodeNext-legen er dekket av React 19-appen; typeforskjellen mellom
  // React-versjonene ligger i @types/react, ikke i oppløsningsmodusen.
  typecheckPublishedTypes(app18Dir, ['bundler']);
  await verifyRenderedStyles(app18Dir, 'React 18.3');

  // 7. Tree-shaking: biblioteket shippes som ÉN flat ES-fil, så ubrukte
  // komponenter forsvinner bare hvis bundleren kan fjerne død kode fra den
  // (krever sideEffects-feltet i package.json og sideeffekt-fri modulkode).
  // En app som kun importerer Button skal ikke betale for Donor eller
  // Carousel. Målt ved innføring: Button-only ≈ 431 kB total JS (mest
  // react-dom), full import ≈ 744 kB.
  console.log('Tree-shaking-sjekk (Button-only-app) …');
  // Unbundlet dist: markørene ligger nå i hver sin modulfil, så hele
  // dist-treet leses samlet.
  const libDistDir = path.join(appDir, 'node_modules/rk-designsystem/dist');
  const libFiles = [];
  (function walkLib(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkLib(full);
      else if (entry.name.endsWith('.js')) libFiles.push(full);
    }
  })(libDistDir);
  const libBundle = libFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  // Vaktpost mot tomme assertions: markørene må finnes i selve biblioteket,
  // ellers beviser fraværet deres i konsumentbundlen ingenting.
  if (!/vipps/i.test(libBundle) || !libBundle.includes('embla')) {
    fail('Markørene (vipps/embla) finnes ikke lenger i biblioteksbundlen — oppdater tree-shaking-sjekken.');
  }
  // Egen app-rot inne i konsument-appen: gjenbruker node_modules via Nodes
  // oppslag oppover i katalogtreet, så ingen ny installasjon trengs.
  const shakeDir = path.join(appDir, 'shake');
  fs.mkdirSync(path.join(shakeDir, 'src'), { recursive: true });
  fs.writeFileSync(
    path.join(shakeDir, 'index.html'),
    `<!doctype html><html lang="no"><head><meta charset="utf-8"><title>Shake</title></head>
<body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>`,
  );
  fs.writeFileSync(
    path.join(shakeDir, 'src/main.jsx'),
    `import { createRoot } from 'react-dom/client';
import { Button } from 'rk-designsystem';

createRoot(document.getElementById('root')).render(<Button>Knapp</Button>);
`,
  );
  fs.writeFileSync(
    path.join(shakeDir, 'vite.config.js'),
    `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: './', plugins: [react()] });
`,
  );
  run('npx vite build --logLevel error', shakeDir);
  const shakeJs = fs
    .readdirSync(path.join(shakeDir, 'dist/assets'))
    .filter((f) => f.endsWith('.js'))
    .map((f) => fs.readFileSync(path.join(shakeDir, 'dist/assets', f), 'utf8'))
    .join('\n');
  if (/vipps/i.test(shakeJs)) {
    fail('Button-only-bundlen inneholder Donor-kode (vipps) — tree-shaking er brutt.');
  }
  if (shakeJs.includes('embla')) {
    fail('Button-only-bundlen inneholder Carousel/embla-kode — tree-shaking er brutt.');
  }
  // Romslig tak (~28 % over målt verdi): fanger at hele biblioteket plutselig
  // blir med, uten å knekke på normal vekst i react-dom eller Button.
  const SHAKE_BUDGET = 550_000;
  if (shakeJs.length > SHAKE_BUDGET) {
    fail(`Button-only-bundlen er ${shakeJs.length} bytes (budsjett ${SHAKE_BUDGET}) — tree-shaking er trolig brutt.`);
  }
  console.log(`✅ Tree-shaking OK: Button-only-bundle ${shakeJs.length} bytes, uten Donor/Carousel-markører.`);

  await verifyNextFooter(tarball, path.join(tmp, 'next-footer'), dev);

  console.log('✅ Pakke-røyktest bestått.');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
