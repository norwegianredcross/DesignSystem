import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { withCustomConfig } from 'react-docgen-typescript';

// --- CONFIGURATION ---
const ROOT_DIR = process.cwd();
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src/components');
const ENTRY_FILE = path.join(ROOT_DIR, 'src/index.ts'); // Source of truth for exports
const INVENTORY_FILE = path.join(ROOT_DIR, 'src/component-inventory.json');
const OUTPUT_FILE = path.join(ROOT_DIR, 'metadata.json');
const PACKAGE_NAME = 'rk-designsystem'; // The name of your package

console.log('Starting metadata generation...');

// 1. Load the canonical inventory and validate it against the actual exports
//    in src/index.ts. The inventory classifies every public export
//    (primary / part / hook / provider); index.ts stays the source of truth
//    for WHAT is exported, the inventory for WHAT KIND it is. Any drift
//    between the two fails the build.
const inventory = JSON.parse(fs.readFileSync(INVENTORY_FILE, 'utf8'));
const inventoryNames = new Set(inventory.exports.map((e) => e.name));

let entryContent;
try {
  entryContent = fs.readFileSync(ENTRY_FILE, 'utf8');
} catch (e) {
  console.error(`❌ Could not read the main entry file at ${ENTRY_FILE}.`);
  process.exit(1);
}

const actualExports = new Set();
const exportRegex = /export\s*{\s*([^}]+)\s*}/g;
let match;
while ((match = exportRegex.exec(entryContent)) !== null) {
  match[1].split(',').forEach(name => {
    const cleanName = name.trim().split(' ')[0]; // Handle "Button as Buttons" syntax
    if (cleanName) actualExports.add(cleanName);
  });
}

const missingFromInventory = [...actualExports].filter((n) => !inventoryNames.has(n));
const missingFromEntry = [...inventoryNames].filter((n) => !actualExports.has(n));
if (missingFromInventory.length > 0 || missingFromEntry.length > 0) {
  if (missingFromInventory.length > 0) {
    console.error(`❌ Exported from src/index.ts but missing in src/component-inventory.json: ${missingFromInventory.join(', ')}`);
  }
  if (missingFromEntry.length > 0) {
    console.error(`❌ Listed in src/component-inventory.json but not exported from src/index.ts: ${missingFromEntry.join(', ')}`);
  }
  console.error('   Update src/component-inventory.json so it matches the public API.');
  process.exit(1);
}

const componentEntries = inventory.exports.filter((e) => e.kind === 'primary' || e.kind === 'part');
const publicExports = new Set(componentEntries.map((e) => e.name));
console.log(`Inventory OK: ${inventory.exports.length} public exports (${componentEntries.length} component names).`);

// 2. Find all possible component definition files
const componentFiles = glob.sync(`${COMPONENTS_DIR}/*/index.tsx`);
if (componentFiles.length === 0) {
  console.error('No component files found in src/components/*/index.tsx');
  process.exit(1);
}

// 3. Parse all found files.
// withCustomConfig makes docgen compile with the repo's real tsconfig — that
// loads the ColorDefinitions augmentation from rk-design-tokens, so types
// like `Color` resolve to the actual scope union instead of `string`/`any`.
const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => !prop.parent || !prop.parent.fileName.includes('node_modules'),
};

const parser = withCustomConfig(path.join(ROOT_DIR, 'tsconfig.app.json'), options);
const allComponentsInfo = parser.parse(componentFiles);

// 4. Filter and format the parsed data
const parsedMetadata = allComponentsInfo
  .filter(component => publicExports.has(component.displayName)) // Only include public exports
  .map((component) => {
    console.log(`Processing: ${component.displayName}`);

    const props = Object.values(component.props).map((prop) => {
      // docgen reports literal unions as type name "enum" with the actual
      // members in type.value — dropping them left 48 props documented as
      // just "enum", useless to consumers and AI agents. Emit the real union.
      const isLiteralUnion = prop.type.name === 'enum' && Array.isArray(prop.type.value);
      const type = isLiteralUnion
        ? prop.type.value.map((v) => String(v.value).replace(/"/g, "'")).join(' | ')
        : prop.type.name.replace(/"/g, "'");
      return {
        name: prop.name,
        type,
        description: prop.description,
        defaultValue: prop.defaultValue?.value ?? null,
        required: prop.required,
      };
    });

    return {
      componentName: component.displayName,
      importPath: PACKAGE_NAME,
      description: component.description,
      props: props,
    };
  });

// 5. Collapse duplicate records.
// `react-docgen-typescript` emits one record per file that declares a component,
// so types re-exported from several folders (e.g. `Fieldset` lives in
// Fieldset/Checkbox/Radio/Switch) show up multiple times under the same name.
// Keep the richest record per name (most props, then the one with a description)
// so the count and the per-component entry stay accurate.
function deduplicateComponents(metadata) {
  const componentMap = new Map();

  metadata.forEach((component) => {
    const name = component.componentName;
    const existing = componentMap.get(name);

    if (!existing) {
      componentMap.set(name, component);
      return;
    }

    const existingPropsCount = existing.props?.length || 0;
    const currentPropsCount = component.props?.length || 0;

    if (currentPropsCount > existingPropsCount) {
      componentMap.set(name, component);
    } else if (
      currentPropsCount === existingPropsCount &&
      component.description &&
      !existing.description
    ) {
      componentMap.set(name, component);
    }
  });

  return Array.from(componentMap.values());
}

const duplicateCount = parsedMetadata.length;
const metadata = deduplicateComponents(parsedMetadata);
if (metadata.length < duplicateCount) {
  console.log(
    `Collapsed ${duplicateCount - metadata.length} duplicate component record(s) ` +
      `(${duplicateCount} parsed → ${metadata.length} unique).`,
  );
}

// 6. No silent drops: every component name in the inventory must either have a
//    metadata record or be listed here with the reason it could not be documented.
const documented = new Set(metadata.map((c) => c.componentName));
const undocumented = componentEntries.filter((e) => !documented.has(e.name));
if (undocumented.length > 0) {
  console.warn(`⚠️  ${undocumented.length} public component export(s) have no extractable react-docgen record and are NOT in metadata.json:`);
  undocumented.forEach((e) => {
    const context = e.parent ? ` (del av ${e.parent})` : '';
    console.warn(`   - ${e.name}${context}: re-eksport uten egen dokumenterbar deklarasjon`);
  });
}
try {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadata, null, 2), 'utf8');
  console.log(`✅ Successfully generated metadata.json with ${metadata.length} components!`);
} catch (error) {
  console.error('❌ Failed to write metadata.json file:', error);
  process.exit(1);
}