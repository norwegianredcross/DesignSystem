import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { parse as docgenParse } from 'react-docgen-typescript';

// --- CONFIGURATION ---
const ROOT_DIR = process.cwd();
const COMPONENTS_DIR = path.join(ROOT_DIR, 'src/components');
const ENTRY_FILE = path.join(ROOT_DIR, 'src/index.ts'); // Source of truth for exports
const OUTPUT_FILE = path.join(ROOT_DIR, 'metadata.json');
const PACKAGE_NAME = 'rk-designsystem'; // The name of your package

console.log('Starting metadata generation...');

// 1. Get the list of publicly exported components from the main index.ts
let entryContent;
try {
  entryContent = fs.readFileSync(ENTRY_FILE, 'utf8');
} catch (e) {
  console.error(`❌ Could not read the main entry file at ${ENTRY_FILE}.`);
  process.exit(1);
}

const publicExports = new Set();
const exportRegex = /export\s*{\s*([^}]+)\s*}/g;
let match;
while ((match = exportRegex.exec(entryContent)) !== null) {
  match[1].split(',').forEach(name => {
    const cleanName = name.trim().split(' ')[0]; // Handle "Button as Buttons" syntax
    if (cleanName) publicExports.add(cleanName);
  });
}

console.log(`Found ${publicExports.size} publicly exported components.`);

// 2. Find all possible component definition files
const componentFiles = glob.sync(`${COMPONENTS_DIR}/*/index.tsx`);
if (componentFiles.length === 0) {
  console.error('No component files found in src/components/*/index.tsx');
  process.exit(1);
}

// 3. Parse all found files
const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => !prop.parent || !prop.parent.fileName.includes('node_modules'),
};

const allComponentsInfo = docgenParse(componentFiles, options);

// 4. Filter and format the parsed data
const metadata = allComponentsInfo
  .filter(component => publicExports.has(component.displayName)) // Only include public exports
  .map((component) => {
    console.log(`Processing: ${component.displayName}`);

    const props = Object.values(component.props).map((prop) => ({
      name: prop.name,
      type: prop.type.name.replace(/"/g, "'"),
      description: prop.description,
      defaultValue: prop.defaultValue?.value ?? null,
      required: prop.required,
    }));

    return {
      componentName: component.displayName,
      importPath: PACKAGE_NAME,
      description: component.description,
      props: props,
    };
  });

// --- WRITE FILE ---
try {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadata, null, 2), 'utf8');
  console.log(`✅ Successfully generated metadata.json with ${metadata.length} components!`);
} catch (error) {
  console.error('❌ Failed to write metadata.json file:', error);
  process.exit(1);
}