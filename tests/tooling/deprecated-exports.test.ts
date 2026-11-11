import path from 'node:path';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';
import * as rk from '../../src';

const DEPRECATED = [
  'Search',
  'SearchButton',
  'SearchClear',
  'SearchInput',
  'DialogTrigger',
  'DialogTriggerContext',
  'DropdownTrigger',
  'DropdownTriggerContext',
  'PopoverTrigger',
  'PopoverTriggerContext',
];

const DEPRECATED_TYPES = [
  'SearchProps',
  'SearchButtonProps',
  'SearchClearProps',
  'SearchInputProps',
  'DialogTriggerProps',
  'DialogTriggerContextProps',
  'DropdownTriggerContextProps',
  'PopoverTriggerProps',
  'PopoverTriggerContextProps',
];

function deprecatedNames(names: string[], typeNames: string[]) {
  const root = path.resolve(__dirname, '../..');
  const file = path.join(root, 'tests/tooling/__deprecated-fixture.ts');
  const source =
    `import { ${names.join(', ')} } from '../../src';\n` +
    `import type { ${typeNames.join(', ')} } from '../../src';\n` +
    names.map((name) => `void ${name};`).join('\n') +
    '\n' +
    typeNames.map((name, i) => `export type T${i} = ${name};`).join('\n');
  const options: ts.CompilerOptions = {
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ES2022,
    skipLibCheck: true,
    noEmit: true,
    types: ['vite/client'],
  };
  const service = ts.createLanguageService({
    getCompilationSettings: () => options,
    getScriptFileNames: () => [file],
    getScriptVersion: () => '1',
    getScriptSnapshot: (name) => {
      if (name === file) return ts.ScriptSnapshot.fromString(source);
      return ts.sys.fileExists(name) ? ts.ScriptSnapshot.fromString(ts.sys.readFile(name)!) : undefined;
    },
    getCurrentDirectory: () => root,
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    fileExists: (name) => name === file || ts.sys.fileExists(name),
    readFile: (name) => (name === file ? source : ts.sys.readFile(name)),
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  });
  const flagged = new Set<string>();
  for (const diagnostic of service.getSuggestionDiagnostics(file)) {
    if (diagnostic.reportsDeprecated && diagnostic.start !== undefined) {
      flagged.add(source.slice(diagnostic.start, diagnostic.start + diagnostic.length!));
    }
  }
  return flagged;
}

describe('deprecated re-exports', () => {
  it('marks the APIs Digdir deprecated in 1.24, whichever Digdir version is installed', () => {
    const flagged = deprecatedNames(DEPRECATED, DEPRECATED_TYPES);
    expect([...DEPRECATED, ...DEPRECATED_TYPES].filter((name) => !flagged.has(name))).toEqual([]);
  });

  it('does not mark the compounds that stay', () => {
    const kept = ['Dialog', 'Dropdown', 'Popover', 'DialogBlock', 'DropdownList', 'DropdownItem'];
    expect([...deprecatedNames(kept, ['DialogProps', 'DropdownProps', 'PopoverProps'])]).toEqual([]);
  });

  it('keeps the deprecated APIs working', () => {
    for (const name of DEPRECATED) expect(rk[name as keyof typeof rk], name).toBeDefined();
  });
});
