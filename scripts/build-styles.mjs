/**
 * Genererer dist/styles.css — den kombinerte stilfilen konsumenter importerer
 * via `import 'rk-designsystem/styles'`.
 *
 * Basen er src/styles.css (font + Digdir-base + Røde Kors-tema). I tillegg
 * importeres komponentstilene som Vite bygger til dist/rk-designsystem.css,
 * slik at én import faktisk styler komponentene. Importen kan ikke ligge i
 * src/styles.css selv, siden rk-designsystem.css bare finnes i dist.
 */
import fs from 'node:fs';

const SOURCE = 'src/styles.css';
const COMPONENT_CSS = 'dist/rk-designsystem.css';
const OUTPUT = 'dist/styles.css';

if (!fs.existsSync(COMPONENT_CSS)) {
  console.error(`❌ ${COMPONENT_CSS} finnes ikke — kjør vite-bygget først (npm run build).`);
  process.exit(1);
}

const base = fs.readFileSync(SOURCE, 'utf8').trimEnd();

const output = `${base}

/* Komponentstiler bygget fra biblioteket (må ligge etter base og tema) */
@import './rk-designsystem.css';

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
console.log(`✅ Skrev ${OUTPUT} (base + komponentstiler).`);
