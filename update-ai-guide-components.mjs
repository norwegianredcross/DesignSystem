import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const METADATA_FILE = path.join(ROOT_DIR, 'metadata.json');
const GUIDE_FILE = path.join(ROOT_DIR, 'AI_DESIGN_SYSTEM_GUIDE.md');

// Component categories mapping
const COMPONENT_CATEGORIES = {
  // Form Components
  Form: ['Button', 'Input', 'Textfield', 'Textarea', 'Select', 'Checkbox', 'Radio', 'Switch', 'DateInput', 'DatePicker'],
  // Layout Components
  Layout: ['Card', 'Divider', 'Fieldset', 'Field'],
  // Navigation Components
  Navigation: ['Breadcrumbs', 'Tabs', 'Pagination'],
  // Feedback Components
  Feedback: ['Alert', 'ErrorSummary', 'Tooltip', 'Popover', 'Dialog'],
  // Display Components
  Display: ['Avatar', 'Badge', 'Tag', 'Chip', 'SkeletonLoader', 'Spinner'],
  // Data Display Components
  DataDisplay: ['Table', 'List'],
  // Other Components
  Other: ['Link', 'Heading', 'Paragraph', 'Label', 'Details', 'Dropdown', 'Search', 'Suggestion', 'ToggleGroup', 'SkipLink', 'ValidationMessage'],
  // Custom Components (RK-specific — HeroSection/ArticleLayout were removed
  // from the library and must not be advertised to AI agents)
  Custom: ['Carousel', 'Header', 'Footer', 'Donor', 'GraphicElement'],
};

// Helper function to format prop type
function formatPropType(type) {
  if (!type) return 'any';
  
  // Clean up common type patterns
  let formatted = type
    .replace(/"/g, "'")
    .replace(/\|/g, ' | ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Handle enum types
  if (formatted.includes('enum')) {
    return formatted.replace(/enum\s*/, '');
  }
  
  // Handle union types with quotes
  if (formatted.includes("'")) {
    return formatted;
  }
  
  // Handle function types
  if (formatted.includes('=>')) {
    return formatted;
  }
  
  // Handle React types
  if (formatted.includes('ReactNode') || formatted.includes('ReactElement')) {
    return 'ReactNode';
  }
  
  return formatted;
}

// Renders ONE prop as a line inside the JSX example. Every emitted line must
// be VALID JSX an agent can copy verbatim: the old format produced attributes
// like `data-color?="accent" | "neutral"` (invalid `?`, invalid union value,
// dead scope names) which downstream AI agents copied into real code.
// Strategy: give the attribute a real example value; put optionality, the
// full type and the default in a trailing `//` comment (line comments between
// JSX attributes are valid). Props with no sensible literal become pure
// comment lines instead of fake attributes.
function formatPropLine(prop) {
  const type = formatPropType(prop.type);
  const optional = prop.required ? 'PÅKREVD' : 'valgfri';
  // Defaults can be multi-line object literals — collapsed and truncated so
  // they can never break out of the single-line comment.
  let defaultNote = '';
  if (prop.defaultValue !== null && prop.defaultValue !== undefined) {
    let d = String(prop.defaultValue).replace(/\s+/g, ' ').trim();
    if (d.length > 40) d = `${d.slice(0, 37)}…`;
    defaultNote = `, default ${d}`;
  }
  const note = `// ${optional}${defaultNote}: ${type}`;

  const value = examplePropValue(prop, type);
  if (value === null) {
    // No honest literal exists (ReactNode, objects, arrays, complex types) —
    // document the prop as a comment instead of inventing invalid JSX.
    return `  // ${prop.name} — ${optional}${defaultNote}: ${type}`;
  }
  return `  ${prop.name}=${value} ${note}`;
}

// Picks a real, valid example value for a prop, or null if none exists.
function examplePropValue(prop, type) {
  const def = prop.defaultValue;

  // Functions FIRST: a callback signature can itself contain string literals
  // (e.g. `(f: 'one-time' | 'monthly') => void`) and must not be mistaken
  // for a literal union.
  if (type.includes('=>')) {
    const funcMatch = type.match(/\(([^()]*)\)\s*=>/);
    const params = funcMatch ? funcMatch[1].replace(/:\s*[^,)]+/g, '').trim() : '';
    return `{(${params}) => {}}`;
  }

  // Literal unions ('a' | 'b' | …): use the default if it is one of the
  // members, otherwise the first member.
  const literals = [...type.matchAll(/'([^']*)'/g)].map((m) => m[1]);
  if (literals.length > 0) {
    const pick = def && literals.includes(String(def).replace(/['"]/g, '')) ? String(def).replace(/['"]/g, '') : literals[0];
    return `"${pick}"`;
  }
  if (type === 'boolean') return `{${def === 'true' ? 'true' : 'false'}}`;
  if (type === 'number') return `{${def !== null && def !== undefined && !isNaN(Number(def)) ? Number(def) : 0}}`;
  if (type === 'string') {
    if (def !== null && def !== undefined) return `"${String(def).replace(/^['"]|['"]$/g, '')}"`;
    return '"…"';
  }
  return null;
}

// Special notes for specific components
function getComponentNotes(componentName) {
  const notes = {
    'Heading': `**Important:** The \`level\` prop is **required** and determines the semantic HTML heading level (\`<h1>\` through \`<h6>\`). Use \`data-size\` to control visual appearance independently of semantic level.`,
    'Card': `Use \`<CardBlock>\` for content sections inside \`<Card>\`.`,
    'Breadcrumbs': `Use \`<BreadcrumbsList>\`, \`<BreadcrumbsItem>\`, and \`<BreadcrumbsLink>\` for structure.`,
    'List': `Use \`<List.Unordered>\` or \`<List.Ordered>\` with \`<List.Item>\` for items.`,
    'Details': `Use \`<Details.Summary>\` and \`<Details.Content>\` for accordion structure.`,
    'Chip': `Use \`<Chip.Button>\`, \`<Chip.Checkbox>\`, or \`<Chip.Radio>\` for different variants.`,
    'Suggestion': `Use \`<Suggestion.Input>\`, \`<Suggestion.List>\`, \`<Suggestion.Option>\`, \`<Suggestion.Empty>\`, and \`<Suggestion.Clear>\` for autocomplete structure.`,
    'Field': `Use \`<FieldDescription>\` and \`<FieldCounter>\` as children.`,
  };
  
  return notes[componentName] || null;
}

// Generate component documentation
function generateComponentDoc(component) {
  const props = component.props || [];
  
  // Filter out common internal props that shouldn't be documented
  const filteredProps = props.filter(prop => 
    !prop.name.startsWith('_') && 
    prop.name !== 'ref' &&
    prop.name !== 'key'
  );
  
  // Sort props: required first, then alphabetically
  const sortedProps = filteredProps.sort((a, b) => {
    if (a.required !== b.required) {
      return b.required - a.required;
    }
    return a.name.localeCompare(b.name);
  });
  
  // Generate props documentation — every line is valid JSX or a comment.
  const propsLines = sortedProps.map((prop) => formatPropLine(prop));
  
  // Check for sub-components (like CardBlock, BreadcrumbsList, etc.)
  const subComponents = [];
  if (component.componentName === 'Card') {
    subComponents.push('CardBlock');
  }
  if (component.componentName === 'Breadcrumbs') {
    subComponents.push('BreadcrumbsList', 'BreadcrumbsItem', 'BreadcrumbsLink');
  }
  if (component.componentName === 'List') {
    subComponents.push('List.Unordered', 'List.Ordered', 'List.Item');
  }
  if (component.componentName === 'Details') {
    subComponents.push('Details.Summary', 'Details.Content');
  }
  if (component.componentName === 'Chip') {
    subComponents.push('Chip.Button', 'Chip.Checkbox', 'Chip.Radio');
  }
  if (component.componentName === 'Suggestion') {
    subComponents.push('Suggestion.Input', 'Suggestion.List', 'Suggestion.Option', 'Suggestion.Empty', 'Suggestion.Clear');
  }
  if (component.componentName === 'Field') {
    subComponents.push('FieldDescription', 'FieldCounter');
  }
  
  // Generate import statement
  const imports = subComponents.length > 0
    ? `import { ${component.componentName}${subComponents.map(sc => `, ${sc}`).join('')} } from 'rk-designsystem';`
    : `import { ${component.componentName} } from 'rk-designsystem';`;
  
  // Generate component usage example
  const componentExample = subComponents.length > 0
    ? `<${component.componentName}${propsLines.length > 0 ? '\n' + propsLines.join('\n') + '\n' : ''}>\n  {/* Content */}\n</${component.componentName}>`
    : `<${component.componentName}${propsLines.length > 0 ? '\n' + propsLines.join('\n') + '\n' : ''} />`;
  
  // Get special notes
  const notes = getComponentNotes(component.componentName);
  const notesSection = notes ? `\n\n${notes}` : '';
  
  return `#### ${component.componentName}
\`\`\`tsx
${imports}

${componentExample}
\`\`\`${notesSection}
`;
}

// Categorize components
function categorizeComponent(componentName) {
  for (const [category, components] of Object.entries(COMPONENT_CATEGORIES)) {
    if (components.includes(componentName)) {
      return category;
    }
  }
  return 'Other';
}

// Deduplicate components - keep the one with most props or better description
function deduplicateComponents(metadata) {
  const componentMap = new Map();
  
  metadata.forEach(component => {
    const name = component.componentName;
    const existing = componentMap.get(name);
    
    if (!existing) {
      componentMap.set(name, component);
    } else {
      // Keep the one with more props, or if equal, the one with description
      const existingPropsCount = existing.props?.length || 0;
      const currentPropsCount = component.props?.length || 0;
      
      if (currentPropsCount > existingPropsCount) {
        componentMap.set(name, component);
      } else if (currentPropsCount === existingPropsCount) {
        // If same props count, prefer the one with description
        if (component.description && !existing.description) {
          componentMap.set(name, component);
        }
      }
    }
  });
  
  return Array.from(componentMap.values());
}

// Generate all component documentation
function generateComponentsSection(metadata) {
  // Deduplicate components first
  const deduplicated = deduplicateComponents(metadata);
  
  // Group components by category
  const categorized = {};
  
  deduplicated.forEach(component => {
    const category = categorizeComponent(component.componentName);
    if (!categorized[category]) {
      categorized[category] = [];
    }
    categorized[category].push(component);
  });
  
  // Sort components within each category
  Object.keys(categorized).forEach(category => {
    categorized[category].sort((a, b) => 
      a.componentName.localeCompare(b.componentName)
    );
  });
  
  // Generate markdown
  const sections = [];
  
  // Form Components
  if (categorized.Form && categorized.Form.length > 0) {
    sections.push('### Form Components\n');
    categorized.Form.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Layout Components
  if (categorized.Layout && categorized.Layout.length > 0) {
    sections.push('### Layout Components\n');
    categorized.Layout.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Navigation Components
  if (categorized.Navigation && categorized.Navigation.length > 0) {
    sections.push('### Navigation Components\n');
    categorized.Navigation.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Feedback Components
  if (categorized.Feedback && categorized.Feedback.length > 0) {
    sections.push('### Feedback Components\n');
    categorized.Feedback.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Display Components
  if (categorized.Display && categorized.Display.length > 0) {
    sections.push('### Display Components\n');
    categorized.Display.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Data Display Components
  if (categorized.DataDisplay && categorized.DataDisplay.length > 0) {
    sections.push('### Data Display Components\n');
    categorized.DataDisplay.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Other Components
  if (categorized.Other && categorized.Other.length > 0) {
    sections.push('### Other Components\n');
    categorized.Other.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  // Custom Components
  if (categorized.Custom && categorized.Custom.length > 0) {
    sections.push('### Custom Components\n');
    categorized.Custom.forEach(component => {
      sections.push(generateComponentDoc(component));
    });
  }
  
  return sections.join('\n');
}

// Main function
function main() {
  console.log('🔄 Updating AI Design System Guide with component documentation...\n');
  
  // Read metadata.json
  let metadata;
  try {
    const metadataContent = fs.readFileSync(METADATA_FILE, 'utf8');
    metadata = JSON.parse(metadataContent);
    console.log(`✅ Loaded ${metadata.length} components from metadata.json`);
  } catch (error) {
    console.error(`❌ Failed to read metadata.json: ${error.message}`);
    process.exit(1);
  }
  
  // Read AI guide
  let guideContent;
  try {
    guideContent = fs.readFileSync(GUIDE_FILE, 'utf8');
    console.log('✅ Loaded AI_DESIGN_SYSTEM_GUIDE.md');
  } catch (error) {
    console.error(`❌ Failed to read AI_DESIGN_SYSTEM_GUIDE.md: ${error.message}`);
    process.exit(1);
  }
  
  // Find the Available Components section
  const startMarker = '## Available Components';
  const endMarker = '## Design Tokens';
  
  const startIndex = guideContent.indexOf(startMarker);
  const endIndex = guideContent.indexOf(endMarker);
  
  if (startIndex === -1 || endIndex === -1) {
    console.error('❌ Could not find Available Components section markers in guide');
    process.exit(1);
  }
  
  // Generate new components section
  const header = `## Available Components

All components are exported from \`rk-designsystem\`. Below is a comprehensive list with all props:

`;
  
  const newComponentsSection = header + generateComponentsSection(metadata);
  
  // Replace the section
  const beforeSection = guideContent.substring(0, startIndex);
  const afterSection = guideContent.substring(endIndex);
  const updatedContent = beforeSection + newComponentsSection + '\n\n' + afterSection;
  
  // Write updated guide
  try {
    fs.writeFileSync(GUIDE_FILE, updatedContent, 'utf8');
    console.log('✅ Successfully updated AI_DESIGN_SYSTEM_GUIDE.md');
    console.log(`   Updated ${metadata.length} components`);
  } catch (error) {
    console.error(`❌ Failed to write updated guide: ${error.message}`);
    process.exit(1);
  }
  
  console.log('\n✨ Component documentation update complete!');
}

main();
