import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { typecheckPublishedTypes } from './typecheck-published-types.mjs';

function consumer(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'rk typecheck test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.mkdirSync(path.join(dir, 'src'));
  fs.writeFileSync(path.join(dir, 'src/typecheck.tsx'), 'export {};\n');
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ type: 'module' }));
  return dir;
}

function compiler(dir, source) {
  const bin = path.join(dir, 'node_modules/typescript/bin');
  fs.mkdirSync(bin, { recursive: true });
  fs.writeFileSync(path.join(bin, 'tsc'), source);
}

test('rejects a consumer whose TypeScript compiler is missing', (t) => {
  assert.throws(() => typecheckPublishedTypes(consumer(t), ['bundler']), /Cannot find module/);
});

test('rejects compiler configuration errors without a source-file path', (t) => {
  const dir = consumer(t);
  compiler(dir, `console.log("error TS5023: Unknown compiler option 'invalidOption'."); process.exit(1);`);
  assert.throws(() => typecheckPublishedTypes(dir, ['bundler']), /TS5023/);
});

test('tolerates the known missing optional framework types in upstream declarations', (t) => {
  const dir = consumer(t);
  const diagnostic =
    "node_modules/@u-elements/u-combobox/dist/u-combobox.d.ts(4,19): error TS2307: Cannot find module 'preact' or its corresponding type declarations.";
  compiler(dir, `console.log(${JSON.stringify(diagnostic)}); process.exit(2);`);
  assert.doesNotThrow(() => typecheckPublishedTypes(dir, ['bundler', 'NodeNext']));
});

test('tolerates supported Digdir namespace and u-details augmentation defects', (t) => {
  const dir = consumer(t);
  const diagnostics = [
    "node_modules/@digdir/designsystemet-web/dist/index.d.ts(1,27): error TS2503: Cannot find namespace 'PreactTypes'.",
    'node_modules/@u-elements/u-details/dist/polyfill.d.ts(26,9): error TS2669: Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.',
  ];
  compiler(dir, `console.log(${JSON.stringify(diagnostics.join('\n'))}); process.exit(2);`);
  assert.doesNotThrow(() => typecheckPublishedTypes(dir, ['bundler', 'NodeNext']));
});

test('rejects unexpected output even when the compiler exits successfully', (t) => {
  const dir = consumer(t);
  compiler(dir, "console.log('TypeScript compilation was skipped');");
  assert.throws(() => typecheckPublishedTypes(dir, ['bundler']), /compilation was skipped/);
});

test('rejects stderr output even when the compiler exits successfully', (t) => {
  const dir = consumer(t);
  compiler(dir, "console.error('Compiler bootstrap failed');");
  assert.throws(() => typecheckPublishedTypes(dir, ['bundler']), /Compiler bootstrap failed/);
});

test('tolerates Digdir 1.21.1 optional framework imports', (t) => {
  const dir = consumer(t);
  const diagnostic =
    "node_modules/@digdir/designsystemet-web/dist/index.d.ts(1,35): error TS2307: Cannot find module 'preact' or its corresponding type declarations.";
  compiler(dir, `console.log(${JSON.stringify(diagnostic)}); process.exit(2);`);
  assert.doesNotThrow(() => typecheckPublishedTypes(dir, ['bundler', 'NodeNext']));
});

const knownDiagnostic =
  "node_modules/@u-elements/u-combobox/dist/u-combobox.d.ts(4,19): error TS2307: Cannot find module 'preact' or its corresponding type declarations.";

for (const [name, source, expected] of [
  ['empty failed output', 'process.exit(1);', /exit 1/],
  ['stderr-only failure', "console.error('compiler crashed'); process.exit(1);", /compiler crashed/],
  ['terminated compiler', "process.kill(process.pid, 'SIGTERM');", /SIGTERM/],
  ['unexpected exit status', `console.log(${JSON.stringify(knownDiagnostic)}); process.exit(42);`, /exit 42/],
  ['unrecognized compiler output', "console.log('compiler did not run'); process.exit(2);", /compiler did not run/],
  [
    'known diagnostics with stderr',
    `console.log(${JSON.stringify(knownDiagnostic)}); console.error('fatal error'); process.exit(2);`,
    /fatal error/,
  ],
]) {
  test(`rejects ${name}`, (t) => {
    const dir = consumer(t);
    compiler(dir, source);
    assert.throws(() => typecheckPublishedTypes(dir, ['bundler']), expected);
  });
}

for (const [name, diagnostic] of [
  [
    'library errors',
    "node_modules/rk-designsystem/dist/index.d.ts(1,1): error TS2307: Cannot find module 'preact' or its corresponding type declarations.",
  ],
  [
    'fixture errors',
    "src/typecheck.tsx(1,1): error TS2307: Cannot find module 'preact' or its corresponding type declarations.",
  ],
  [
    'unrecognized dependency errors',
    "node_modules/another-package/index.d.ts(1,1): error TS2307: Cannot find module 'preact' or its corresponding type declarations.",
  ],
  [
    'new missing upstream imports',
    "node_modules/@u-elements/u-combobox/dist/u-combobox.d.ts(4,19): error TS2307: Cannot find module 'missing-package' or its corresponding type declarations.",
  ],
  [
    'new upstream declaration errors',
    "node_modules/@u-elements/u-combobox/dist/u-combobox.d.ts(4,19): error TS2322: Type 'string' is not assignable to type 'number'.",
  ],
  [
    'new upstream namespaces',
    "node_modules/@digdir/designsystemet-web/dist/index.d.ts(1,27): error TS2503: Cannot find namespace 'UnknownTypes'.",
  ],
  [
    'global augmentation errors elsewhere',
    'node_modules/rk-designsystem/dist/index.d.ts(26,9): error TS2669: Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.',
  ],
  [
    'formerly ignored missing Digdir exports',
    `node_modules/rk-designsystem/dist/index.d.ts(1,10): error TS2305: Module '"@digdir/designsystemet-react"' has no exported member 'Missing'.`,
  ],
  [
    'formerly ignored misspelled Digdir exports',
    `node_modules/rk-designsystem/dist/index.d.ts(1,10): error TS2724: '"@digdir/designsystemet-react"' has no exported member named 'Buton'. Did you mean 'Button'?`,
  ],
]) {
  test(`rejects ${name}, even alongside a known diagnostic`, (t) => {
    const dir = consumer(t);
    compiler(dir, `console.log(${JSON.stringify(`${knownDiagnostic}\n${diagnostic}`)}); process.exit(2);`);
    for (const mode of ['bundler', 'NodeNext']) {
      assert.throws(
        () => typecheckPublishedTypes(dir, [mode]),
        (error) => error.message.includes(diagnostic)
      );
    }
  });
}

test('rejects an error in the second requested resolution mode', (t) => {
  const dir = consumer(t);
  compiler(
    dir,
    `if (process.argv.some((arg) => arg.endsWith('tsconfig.NodeNext.json'))) {
    console.log("src/typecheck.tsx(1,1): error TS2322: Type 'string' is not assignable to type 'number'.");
    process.exit(2);
  }`
  );
  assert.throws(() => typecheckPublishedTypes(dir, ['bundler', 'NodeNext']), /TS2322/);
});

test('recognizes known diagnostics with absolute paths, Windows separators and CRLF', (t) => {
  const dir = consumer(t);
  const diagnostics = [
    knownDiagnostic,
    knownDiagnostic.replace('node_modules/', `${dir}/node_modules/`),
    knownDiagnostic.replaceAll('/', '\\'),
  ];
  compiler(dir, `process.stdout.write(${JSON.stringify(diagnostics.join('\r\n'))}); process.exit(2);`);
  assert.doesNotThrow(() => typecheckPublishedTypes(dir, ['bundler']));
});

test('rejects a known-shaped diagnostic outside the consumer dependency tree', (t) => {
  const dir = consumer(t);
  const diagnostic = knownDiagnostic.replace('node_modules/', '../elsewhere/node_modules/');
  compiler(dir, `console.log(${JSON.stringify(diagnostic)}); process.exit(2);`);
  assert.throws(() => typecheckPublishedTypes(dir, ['bundler']), /elsewhere/);
});

for (const mode of ['bundler', 'NodeNext']) {
  test(`checks a real TypeScript consumer under ${mode}`, (t) => {
    const dir = consumer(t);
    fs.mkdirSync(path.join(dir, 'node_modules'));
    fs.symlinkSync(
      fileURLToPath(new URL('../node_modules/typescript', import.meta.url)),
      path.join(dir, 'node_modules/typescript'),
      'junction'
    );
    assert.doesNotThrow(() => typecheckPublishedTypes(dir, [mode]));
    fs.writeFileSync(path.join(dir, 'src/typecheck.tsx'), 'export const count: number = "invalid";\n');
    assert.throws(() => typecheckPublishedTypes(dir, [mode]), /TS2322/);
    const library = path.join(dir, 'node_modules/rk-designsystem');
    fs.mkdirSync(library);
    fs.writeFileSync(
      path.join(library, 'package.json'),
      JSON.stringify({ name: 'rk-designsystem', types: 'index.d.ts' })
    );
    fs.writeFileSync(path.join(library, 'index.d.ts'), 'export declare const value: MissingType;\n');
    fs.writeFileSync(path.join(dir, 'src/typecheck.tsx'), "export { value } from 'rk-designsystem';\n");
    assert.throws(() => typecheckPublishedTypes(dir, [mode]), /TS2304/);
  });
}
