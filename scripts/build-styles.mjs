/**
 * Genererer dist/styles.css — den ene stilfilen konsumenter importerer via
 * `import 'rk-designsystem/styles'` — og kopierer fontfilene den peker på.
 *
 * Rekkefølgen i utdataen er ikke tilfeldig. CSS krever at alle @import står
 * før enhver annen regel, ellers er filen ugyldig (Vite godtar det stille,
 * Next/Turbopack nekter å bygge). Derfor:
 *   1. src/styles.css      – kun @import: Digdir-base + Røde Kors-tema
 *   2. @import av komponentstilene Vite bygger til dist/rk-designsystem.css
 *      (kan ikke ligge i src/styles.css, filen finnes bare i dist)
 *   3. src/fonts.css       – @font-face for Source Sans 3 (pakkens egne filer)
 *   4. font-family-standardene under
 *
 * @font-face-reglene bruker relative URL-er (./fonts/…). CSS-URL-er løses
 * relativt til stilfilen, så konsumentens bundler finner filene i dist/fonts
 * og kopierer dem inn i sin egen build med hashede navn.
 *
 * Før 1.5 lastet styles.css fonten fra Google Fonts. Det ga en tredjeparts-
 * forespørsel i hver app, og README-en anbefalte derfor `next/font` for Next
 * — med delimporter som manglet komponentstilene. Én pakket font fjerner
 * hele det valget for konsumenten.
 */
import fs from 'node:fs';
import path from 'node:path';

const SOURCE = 'src/styles.css';
const FONTS_SOURCE = 'src/fonts.css';
const COMPONENT_CSS = 'dist/rk-designsystem.css';
const OUTPUT = 'dist/styles.css';
const FONT_SOURCE_DIR = 'public/fonts';
const FONT_OUTPUT_DIR = 'dist/fonts';

if (!fs.existsSync(COMPONENT_CSS)) {
  console.error(`❌ ${COMPONENT_CSS} finnes ikke — kjør vite-bygget først (npm run build).`);
  process.exit(1);
}

const base = fs.readFileSync(SOURCE, 'utf8').trimEnd();
const fonts = fs.readFileSync(FONTS_SOURCE, 'utf8').trimEnd();
if (/^@font-face/m.test(base)) {
  console.error(`❌ ${SOURCE} inneholder @font-face — de hører hjemme i ${FONTS_SOURCE} (etter alle @import).`);
  process.exit(1);
}

// Hver fontfil basen refererer til må finnes i public/fonts og kopieres —
// en URL uten fil bak gir stille fallback-font hos konsumenten, ikke en
// byggfeil, så det sjekkes her.
const fontFiles = [...fonts.matchAll(/url\('\.\/fonts\/([^']+)'\)/g)].map((m) => m[1]);
if (fontFiles.length === 0) {
  console.error(`❌ Fant ingen ./fonts/-referanser i ${FONTS_SOURCE} — build-styles må oppdateres.`);
  process.exit(1);
}
fs.mkdirSync(FONT_OUTPUT_DIR, { recursive: true });
// OFL-lisensen krever at lisensteksten følger med når fonten distribueres
// (vilkår 2); pakkens egen LICENSE er MIT og dekker ikke fontfilene.
fs.copyFileSync(path.join(FONT_SOURCE_DIR, 'LICENSE.txt'), path.join(FONT_OUTPUT_DIR, 'LICENSE.txt'));
for (const file of fontFiles) {
  const from = path.join(FONT_SOURCE_DIR, file);
  if (!fs.existsSync(from)) {
    console.error(`❌ ${FONTS_SOURCE} refererer til ${from}, som ikke finnes.`);
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(FONT_OUTPUT_DIR, file));
}

const output = `${base}

/* Komponentstiler bygget fra biblioteket (må ligge etter base og tema) */
@import './rk-designsystem.css';

${fonts}

/* Røde Kors bruker Source Sans 3 — temaet fra rk-design-tokens setter Inter
   som standard, og Digdir-komponentene arver font fra siden (font-family:
   inherit) uten selv å style body. Uten disse to reglene ender konsumenter
   med nettleserens standardfont selv om fonten er lastet. */
:root {
  --ds-font-family: 'Source Sans 3', sans-serif;
}

body {
  font-family: var(--ds-font-family);
}
`;

fs.writeFileSync(OUTPUT, output, 'utf8');
console.log(`✅ Skrev ${OUTPUT} og kopierte ${fontFiles.length} fontfil(er) til ${FONT_OUTPUT_DIR}.`);
