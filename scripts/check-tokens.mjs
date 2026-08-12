/**
 * Token-vakt: alle `--ds-*`-referanser i kildekoden må finnes blant tokens
 * definert av rk-design-tokens eller Digdir Designsystemet. Døde referanser
 * faller stille tilbake til nettleser-standarder (eller fallback-verdien) og
 * er derfor nesten usynlige feil — denne sjekken gjør dem til byggfeil.
 *
 * Skannes: src/**\/*.{css,ts,tsx} — CSS-moduler, inline-CSS-strenger i
 * komponenter, JSX-style og stories.
 * Unntak: scripts/token-allowlist.json (navn → begrunnelse). Ubrukte
 * unntak rapporteres slik at listen krymper over tid.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TOKEN_PATTERN = /--ds-[a-zA-Z0-9-]+/g;

const DEFINITION_SOURCES = [
  'node_modules/rk-design-tokens/design-tokens-build/theme.css',
  'node_modules/rk-design-tokens/design-tokens-build/konferansesenter.css',
  'node_modules/@digdir/designsystemet-css/dist/src/index.css',
  'node_modules/@digdir/designsystemet-css/dist/theme/designsystemet.css',
];

const walk = (dir, extensions) => {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full, extensions));
    else if (extensions.some((ext) => entry.name.endsWith(ext))) files.push(full);
  }
  return files;
};

// 1. Definerte tokens: alt som deklareres (--ds-x:) i token-/Digdir-CSS
const defined = new Set();
for (const source of DEFINITION_SOURCES) {
  const file = path.join(ROOT, source);
  if (!fs.existsSync(file)) {
    console.error(`❌ Finner ikke definisjonskilden ${source} — kjør npm install.`);
    process.exit(1);
  }
  const css = fs.readFileSync(file, 'utf8');
  for (const match of css.matchAll(/(--ds-[a-zA-Z0-9-]+)\s*:/g)) {
    defined.add(match[1]);
  }
}

// 2. Unntaksliste
const allowlistFile = path.join(ROOT, 'scripts/token-allowlist.json');
const allowlist = fs.existsSync(allowlistFile)
  ? JSON.parse(fs.readFileSync(allowlistFile, 'utf8'))
  : {};
const usedAllowlistEntries = new Set();

// 3. Referanser og lokale definisjoner i kildekoden
const violations = [];
const sourceFiles = walk(path.join(ROOT, 'src'), ['.css', '.ts', '.tsx']);
for (const file of sourceFiles) {
  const relative = path.relative(ROOT, file);
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    for (const match of line.matchAll(TOKEN_PATTERN)) {
      const name = match[0];
      if (name.endsWith('-')) continue; // prefiks (kommentar/dynamisk navn), ikke et token
      if (defined.has(name)) continue;
      if (name in allowlist) {
        usedAllowlistEntries.add(name);
        continue;
      }
      const isDefinition = new RegExp(`${name}\\s*:`).test(line) && relative.endsWith('.css');
      violations.push({
        file: relative,
        line: index + 1,
        name,
        kind: isDefinition ? 'egendefinert token i reservert --ds-navnerom' : 'referanse til token som ikke finnes',
      });
    }
  });
}

// 4. Rapport
if (violations.length > 0) {
  console.error(`❌ ${violations.length} token-brudd (tokens som ikke finnes i rk-design-tokens/Digdir):\n`);
  const byFile = new Map();
  for (const v of violations) {
    if (!byFile.has(v.file)) byFile.set(v.file, []);
    byFile.get(v.file).push(v);
  }
  for (const [file, list] of byFile) {
    console.error(`  ${file}`);
    for (const v of list) console.error(`    :${v.line}  ${v.name}  (${v.kind})`);
  }
  console.error('\nRett navnet til et eksisterende token, eller legg inn et begrunnet unntak i scripts/token-allowlist.json.');
  process.exit(1);
}

const unused = Object.keys(allowlist).filter((name) => !usedAllowlistEntries.has(name));
if (unused.length > 0) {
  console.warn(`⚠️  ${unused.length} ubrukte unntak i token-allowlist.json (kan fjernes): ${unused.join(', ')}`);
}

console.log(`✅ Token-sjekk OK: ${sourceFiles.length} filer, ${defined.size} definerte tokens, ${Object.keys(allowlist).length} unntak.`);
