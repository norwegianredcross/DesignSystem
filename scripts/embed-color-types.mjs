/**
 * Embedder fargeskopene i publiserte typer.
 *
 * rk-design-tokens shipper en ColorDefinitions-augmentering som gjør Digdirs
 * `Color`-type om til en lukket union av ekte Røde Kors-temaskop. I repoet
 * lastes den via en type-import i src/types.ts, men den importen overlever
 * ikke type-rollupen — og konsumenter kan uansett ikke resolve en dyp sti
 * inn i rk-design-tokens under NodeNext (pakken mangler exports-map).
 *
 * Derfor kopieres augmenteringsblokken VERBATIM fra den installerte
 * tokens-pakken inn i dist/index.d.ts etter bygget: null drift (kilden er
 * alltid tokens-versjonen i lockfilen), og konsumenter får kompilsjekket
 * data-color uten ekstra oppsett.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'node_modules/rk-design-tokens/design-tokens-build/types.d.ts');
const TARGET = path.join(ROOT, 'dist/index.d.ts');
const MARKER = '// --- Embedded from rk-design-tokens/design-tokens-build/types.d.ts ---';

const source = fs.readFileSync(SOURCE, 'utf8');
// Only the `declare module … { … }` augmentation is embedded — the file's own
// header import would be a duplicate of one index.d.ts already has.
const match = source.match(/declare module '@digdir\/designsystemet-types' \{[\s\S]*?\n\}/);
if (!match) {
  console.error('❌ Fant ikke declare module-blokken i rk-design-tokens/design-tokens-build/types.d.ts');
  process.exit(1);
}

let target = fs.readFileSync(TARGET, 'utf8');
if (target.includes(MARKER)) {
  target = target.slice(0, target.indexOf(MARKER)).trimEnd() + '\n';
}
fs.writeFileSync(TARGET, `${target}\n${MARKER}\n${match[0]}\n`);
console.log('✅ ColorDefinitions-augmenteringen er embeddet i dist/index.d.ts.');
