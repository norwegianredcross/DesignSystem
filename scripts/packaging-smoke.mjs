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

  // Konsumenter installerer selv peers (react + Digdir) og byggverktøy;
  // pakkens egne dependencies (ikoner, date-fns, tokens) skal npm dra inn.
  const deps = [
    JSON.stringify(tarball),
    `react@${dev.react}`,
    `react-dom@${dev['react-dom']}`,
    `@digdir/designsystemet-react@${dev['@digdir/designsystemet-react']}`,
    `@digdir/designsystemet-css@${dev['@digdir/designsystemet-css']}`,
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
    `import type { ComponentProps } from 'react';
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
  // Two resolution modes cover the two consumer families: 'bundler'
  // (Vite/webpack/Next) and 'NodeNext' (strict Node ESM, the pickiest mode —
  // it rejects extensionless relative imports in d.ts files).
  const tscBase = {
    target: 'ES2020',
    lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    jsx: 'react-jsx',
    strict: true,
    noEmit: true,
    skipLibCheck: false,
    types: [],
  };
  for (const mode of ['bundler', 'NodeNext']) {
    const configPath = path.join(appDir, `tsconfig.${mode}.json`);
    fs.writeFileSync(
      configPath,
      JSON.stringify(
        {
          compilerOptions: {
            ...tscBase,
            // 'NodeNext' requires module=NodeNext; the bundler leg uses ESNext.
            module: mode === 'NodeNext' ? 'NodeNext' : 'ESNext',
            moduleResolution: mode,
          },
          include: ['src/typecheck.tsx'],
        },
        null,
        2,
      ),
    );
    console.log(`Type-sjekker publiserte deklarasjoner (moduleResolution: ${mode}) …`);
    // skipLibCheck:false checks EVERY d.ts in the program, including upstream
    // ones we can't fix (designsystemet-web and @u-elements reference optional
    // framework types like 'preact' and 'solid-js' that aren't installed).
    // Real consumers never see those — the tsc default skipLibCheck:true hides
    // them — so the gate is: zero errors in OUR package and the fixture;
    // upstream-only noise is logged but tolerated.
    let tscOutput = '';
    try {
      execSync(`npx tsc -p ${JSON.stringify(configPath)}`, { cwd: appDir, stdio: 'pipe' });
    } catch (err) {
      tscOutput = err.stdout?.toString() ?? '';
    }
    const ownErrors = tscOutput
      .split('\n')
      .filter((line) => /error TS/.test(line))
      .filter((line) => line.includes('rk-designsystem/dist/') || line.includes('typecheck.tsx'))
      // Upstream limitation, not ours: @digdir/designsystemet-react's d.ts
      // tree uses extensionless relative imports (export * from './components'),
      // which NodeNext resolution rejects — so under NodeNext EVERY member of
      // their package looks unexported (TS2305). No packaging choice on our
      // side can fix that short of inlining their types (which is what
      // produced the broken 1.3.0 d.ts). Tolerate exactly that error shape
      // (TS2305, and its TS2724 variant with a "did you mean" suggestion);
      // anything else in our file stays fatal.
      .filter(
        (line) =>
          !(mode === 'NodeNext' && /error TS2(305|724): .*'"@digdir\/designsystemet-react"' has no exported member/.test(line)),
      );
    if (ownErrors.length > 0) {
      console.error(ownErrors.join('\n'));
      fail(`Publiserte typer feiler tsc under moduleResolution: ${mode}.`);
    }
    console.log(`✅ Publiserte typer kompilerer under moduleResolution: ${mode}.`);
  }

  // 3c. attw ("are the types wrong") cross-checks every resolution mode npm
  // supports. The esm-only profile matches the package's intended contract;
  // the legacy require/UMD entry is being removed separately.
  console.log('Kjører attw mot tarballen …');
  // attw exits non-zero when ANY problem exists — even ones its --profile
  // marks as ignored — so the gate reads the JSON report instead of the exit
  // code. The two allowed kinds only occur on the legacy require/UMD path,
  // which the ESM-only change removes; the allowlist shrinks to [] with it.
  // CJSResolvesToESM is reported per resolution mode; UnexpectedModuleSyntax
  // is reported per file (the UMD bundle sits in a "type": "module" package,
  // so Node would parse it as ESM).
  const allowedAttwProblem = (p) =>
    (p.kind === 'CJSResolvesToESM' && p.resolutionKind === 'node16-cjs') ||
    (p.kind === 'UnexpectedModuleSyntax' && (p.fileName ?? '').endsWith('componentlibrary.umd.js'));
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
  console.log('✅ attw: ingen problemer utenfor den kjente require/UMD-stien.');

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

  // 5. Negativ test: en fersk app på React 17 som legger til pakken skal få
  //    ERESOLVE-konflikt mot peer-kontrakten (>=18.3.1 || ^19), ikke en
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

  console.log('✅ Pakke-røyktest bestått.');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
