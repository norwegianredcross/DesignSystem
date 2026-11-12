import path from 'node:path';
import ts from 'typescript';

const SEARCH = ['Search', 'SearchButton', 'SearchClear', 'SearchInput'];
const TRIGGERS = [
  'DialogTrigger',
  'DialogTriggerContext',
  'DropdownTrigger',
  'DropdownTriggerContext',
  'PopoverTrigger',
  'PopoverTriggerContext',
];
const KEPT = ['Dialog', 'Dropdown', 'Popover', 'DialogBlock', 'DropdownHeading', 'DropdownList', 'DropdownItem', 'DropdownButton'];

export const DEPRECATED = [...SEARCH, ...TRIGGERS];
export const DEPRECATED_TYPES = [
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
const KEPT_TYPES = [
  'DialogProps',
  'DialogBlockProps',
  'DropdownProps',
  'DropdownHeadingProps',
  'DropdownListProps',
  'DropdownItemProps',
  'DropdownButtonProps',
  'PopoverProps',
];

const DEPRECATED_MEMBERS = [
  ['Search', 'Button'],
  ['Search', 'Clear'],
  ['Search', 'ClearButton'],
  ['Search', 'Input'],
  ['Dialog', 'Trigger'],
  ['Dialog', 'TriggerContext'],
  ['Dropdown', 'Trigger'],
  ['Dropdown', 'TriggerContext'],
  ['Popover', 'Trigger'],
  ['Popover', 'TriggerContext'],
];
const KEPT_MEMBERS = [
  ['Dialog', 'Block'],
  ['Dropdown', 'Heading'],
  ['Dropdown', 'List'],
  ['Dropdown', 'Item'],
  ['Dropdown', 'Button'],
];

// Keep each usage on its own line; diagnostic matching depends on it.
function fixture(specifier) {
  const expected = [];
  const kept = [];
  const lines = [
    `import { ${[...DEPRECATED, ...KEPT].join(', ')} } from '${specifier}';`,
    `import type { ${[...DEPRECATED_TYPES, ...KEPT_TYPES].join(', ')} } from '${specifier}';`,
  ];
  const add = (line, name, deprecated) => {
    lines.push(line);
    (deprecated ? expected : kept).push(`${line} → ${name}`);
  };
  for (const name of DEPRECATED) add(`void ${name};`, name, true);
  for (const name of KEPT) add(`void ${name};`, name, false);
  for (const name of DEPRECATED_TYPES) add(`export type T${name} = ${name};`, name, true);
  for (const name of KEPT_TYPES) add(`export type T${name} = ${name};`, name, false);
  for (const [parent, member] of DEPRECATED_MEMBERS) add(`void ${parent}.${member};`, member, true);
  for (const [parent, member] of KEPT_MEMBERS) add(`void ${parent}.${member};`, member, false);
  return { source: lines.join('\n') + '\n', expected, kept };
}

export function checkDeprecatedExports(dir, specifier) {
  const file = path.join(dir, '__deprecated-exports.ts');
  const { source, expected, kept } = fixture(specifier);
  const options = {
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ES2022,
    strict: true,
    skipLibCheck: true,
    noEmit: true,
  };
  const service = ts.createLanguageService({
    getCompilationSettings: () => options,
    getScriptFileNames: () => [file],
    getScriptVersion: () => '1',
    getScriptSnapshot: (name) =>
      name === file
        ? ts.ScriptSnapshot.fromString(source)
        : ts.sys.fileExists(name)
          ? ts.ScriptSnapshot.fromString(ts.sys.readFile(name))
          : undefined,
    getCurrentDirectory: () => dir,
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    fileExists: (name) => name === file || ts.sys.fileExists(name),
    readFile: (name) => (name === file ? source : ts.sys.readFile(name)),
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  });

  const errors = service
    .getSemanticDiagnostics(file)
    .map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, ' '));
  const lines = source.split('\n');
  const sourceFile = service.getProgram().getSourceFile(file);
  const flagged = new Set(
    service
      .getSuggestionDiagnostics(file)
      .filter((diagnostic) => diagnostic.reportsDeprecated)
      .map((diagnostic) => {
        const { line } = sourceFile.getLineAndCharacterOfPosition(diagnostic.start);
        return `${lines[line]} → ${source.slice(diagnostic.start, diagnostic.start + diagnostic.length)}`;
      })
  );
  return {
    errors,
    missing: expected.filter((usage) => !flagged.has(usage)),
    unexpected: kept.filter((usage) => flagged.has(usage)),
  };
}
