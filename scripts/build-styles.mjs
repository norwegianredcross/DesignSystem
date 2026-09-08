/**
 * Genererer de to stilfilene konsumenter importerer:
 *
 *   dist/styles.css          `import 'rk-designsystem/styles'`
 *   dist/styles-no-font.css  `import 'rk-designsystem/styles/no-font'`
 *
 * Begge inneholder alt en app trenger for stylede komponenter: Digdir-basen,
 * Røde Kors-temaet, komponentstilene Vite bygger til dist/rk-designsystem.css
 * og fontreglene under. Forskjellen er én linje: styles.css laster Source
 * Sans 3 fra Google Fonts, styles-no-font.css gjør det ikke.
 *
 * no-font-varianten finnes for Next.js (og andre som hoster fonten selv):
 * `next/font` self-hoster fonten og setter den via className, så Google-
 * importen ville bare gitt en ekstra tredjepartsforespørsel og en dobbel
 * nedlasting. Før 1.5 dokumenterte README-en to delimporter (Digdir + tokens)
 * for Next — de manglet komponentstilene, så Header, Footer, DateInput m.fl.
 * ble kun stylet av runtime-fallbacken etter mount, aldri på server-render.
 *
 * Basen er src/styles.css. Komponent-importen kan ikke ligge der, siden
 * rk-designsystem.css bare finnes i dist.
 */
import fs from 'node:fs';

const SOURCE = 'src/styles.css';
const COMPONENT_CSS = 'dist/rk-designsystem.css';
const OUTPUT = 'dist/styles.css';
const OUTPUT_NO_FONT = 'dist/styles-no-font.css';

if (!fs.existsSync(COMPONENT_CSS)) {
  console.error(`❌ ${COMPONENT_CSS} finnes ikke — kjør vite-bygget først (npm run build).`);
  process.exit(1);
}

const base = fs.readFileSync(SOURCE, 'utf8').trimEnd();

// Google Fonts-linjen skilles ut av basen; den er det eneste som skiller de
// to filene. Stopp heller enn å skrive en no-font-fil som likevel har fonten.
const fontBlock = base.match(/^\/\* Source Sans 3 font from Google Fonts \*\/\n@import url\('https:\/\/fonts\.googleapis\.com[^\n]*\n/m)?.[0];
if (!fontBlock) {
  console.error(`❌ Fant ikke Google Fonts-importen (med kommentarlinjen over) i ${SOURCE} — build-styles må oppdateres.`);
  process.exit(1);
}
const fontImport = fontBlock.split('\n')[1];
const baseWithoutFont = base.replace(fontBlock, '').replace(/\n{3,}/g, '\n\n');

const noFont = `${baseWithoutFont}

/* Komponentstiler bygget fra biblioteket (må ligge etter base og tema) */
@import './rk-designsystem.css';

/* Røde Kors bruker Source Sans 3 — temaet fra rk-design-tokens setter Inter
   som standard, og Digdir-komponentene arver font fra siden (font-family:
   inherit) uten selv å style body. Uten disse to reglene ender konsumenter
   med nettleserens standardfont selv om fonten er lastet. Apper som setter
   fonten selv (next/font sin className på <body>) vinner over body-regelen
   her, siden en klasse har høyere spesifisitet enn et elementnavn. */
:root {
  --ds-font-family: 'Source Sans 3', sans-serif;
}

body {
  font-family: var(--ds-font-family);
}
`;

// styles.css = fonten + alt det andre. @import må stå først i en CSS-fil,
// så fontlinjen kan ikke legges til etterpå; den går foran, og resten
// hentes fra no-font-filen i stedet for å dupliseres.
const withFont = `/* Source Sans 3 fra Google Fonts — bruk 'rk-designsystem/styles/no-font'
   når appen laster fonten selv (f.eks. next/font). */
${fontImport}
@import './styles-no-font.css';
`;

fs.writeFileSync(OUTPUT_NO_FONT, noFont, 'utf8');
fs.writeFileSync(OUTPUT, withFont, 'utf8');
console.log(`✅ Skrev ${OUTPUT} og ${OUTPUT_NO_FONT} (base + komponentstiler).`);
