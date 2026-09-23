import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const optionalFrameworks = new Set([
  'preact',
  'svelte/elements',
  '@vue/runtime-dom',
  '@builder.io/qwik/jsx-runtime',
  'solid-js',
]);
const frameworkNamespaces = new Set(['PreactTypes', 'ReactTypes', 'QwikJSX', 'VueJSX', 'SvelteTypes', 'SolidJSX']);

// Match known upstream defects by file, code and complete message; everything else is fatal.
function isKnownUpstreamDiagnostic(line, dir) {
  const diagnostic = /^(.+)\(\d+,\d+\): error TS(\d+): (.+)$/.exec(line);
  if (!diagnostic) return false;
  const [, source, code, message] = diagnostic;
  const file = path.relative(dir, path.resolve(dir, source.replaceAll('\\', '/'))).replaceAll('\\', '/');
  if (code === '2503' && file === 'node_modules/@digdir/designsystemet-web/dist/index.d.ts') {
    const missingNamespace = /^Cannot find namespace '([^']+)'\.$/.exec(message);
    return Boolean(missingNamespace && frameworkNamespaces.has(missingNamespace[1]));
  }
  if (code === '2669' && file === 'node_modules/@u-elements/u-details/dist/polyfill.d.ts') {
    return (
      message ===
      'Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.'
    );
  }
  const missingModule = /^Cannot find module '([^']+)' or its corresponding type declarations\.$/.exec(message);
  return (
    code === '2307' &&
    (file === 'node_modules/@digdir/designsystemet-web/dist/index.d.ts' ||
      /^node_modules\/@u-elements\/(u-combobox|u-datalist|u-tabs)\/dist\/\1\.d\.ts$/.test(file)) &&
    Boolean(missingModule && optionalFrameworks.has(missingModule[1]))
  );
}

export function typecheckPublishedTypes(dir, modes) {
  for (const mode of modes) {
    const configPath = path.join(dir, `tsconfig.${mode}.json`);
    fs.writeFileSync(
      configPath,
      JSON.stringify({
        compilerOptions: {
          target: 'ES2020',
          lib: ['ES2020', 'DOM', 'DOM.Iterable'],
          jsx: 'react-jsx',
          strict: true,
          noEmit: true,
          skipLibCheck: false,
          types: [],
          noUncheckedSideEffectImports: true,
          module: mode === 'NodeNext' ? 'NodeNext' : 'ESNext',
          moduleResolution: mode,
        },
        include: ['src/typecheck.tsx'],
      })
    );
    console.log(`Type-sjekker publiserte deklarasjoner (moduleResolution: ${mode}) …`);
    // Use the consumer's installed compiler, without npx downloads or shell resolution.
    const result = spawnSync(
      process.execPath,
      [path.join(dir, 'node_modules/typescript/bin/tsc'), '--pretty', 'false', '--noErrorTruncation', '-p', configPath],
      { cwd: dir, encoding: 'utf8' }
    );
    const output = result.stdout ?? '';
    const stderr = result.stderr ?? '';
    if (
      result.error ||
      result.signal ||
      ![0, 1, 2].includes(result.status) ||
      stderr.trim() ||
      (result.status !== 0 && !output.trim()) ||
      (result.status === 0 && output.trim())
    ) {
      throw new Error(
        `TypeScript could not complete (${mode}; exit ${result.status ?? 'none'}, signal ${result.signal ?? 'none'}).\n${output}${stderr}`,
        { cause: result.error }
      );
    }
    const errors = output.split(/\r?\n/).filter((line) => line.trim());
    const unexpected = errors.filter((line) => !isKnownUpstreamDiagnostic(line, dir));
    if (unexpected.length > 0) {
      throw new Error(`Publiserte typer feiler tsc under moduleResolution: ${mode}.\n${unexpected.join('\n')}`);
    }
    if (errors.length > 0) {
      console.warn(`⚠️ ${errors.length} kjente deklarasjonsfeil hos Digdir/u-elements tolerert (${mode}).`);
    }
    console.log(`✅ Publiserte typer kontrollert under moduleResolution: ${mode}.`);
  }
}
