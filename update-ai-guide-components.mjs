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
  // Custom Components
  Custom: ['Carousel', 'Header', 'HeroSection', 'ArticleLayout', 'Footer'],
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

// Helper function to format prop value for display
function formatPropValue(prop) {
  const type = formatPropType(prop.type);
  const required = prop.required ? '' : '?';
  
  // Handle defaultValue
  if (prop.defaultValue !== null && prop.defaultValue !== undefined) {
    const defaultValue = prop.defaultValue.replace(/'/g, '"');
    return `${prop.name}${required}={${defaultValue}}`;
  }
  
  // Format based on type
  if (type === 'boolean') {
    return `${prop.name}${required}={boolean}`;
  } else if (type === 'string') {
    return `${prop.name}${required}={string}`;
  } else if (type === 'number') {
    return `${prop.name}${required}={number}`;
  } else if (type.includes('ReactNode') || type.includes('ReactElement')) {
    return `${prop.name}${required}={ReactNode}`;
  } else if (type.includes('=>')) {
    // Function type - simplify
    const funcMatch = type.match(/\(([^)]*)\)\s*=>/);
    if (funcMatch) {
      const params = funcMatch[1] || '';
      return `${prop.name}${required}={(${params}) => void}`;
    }
    return `${prop.name}${required}={(${type}) => void}`;
  } else if (type.includes('|')) {
    // Union type - show as options, clean up quotes
    const options = type
      .split('|')
      .map(t => t.trim())
      .filter(t => t && t !== 'null' && t !== 'undefined')
      .map(t => {
        // Remove ALL quotes (handles cases like ""readonly string[]"")
        t = t.replace(/["']+/g, '');
        // If it's a number or boolean, keep as is
        if (t === 'true' || t === 'false' || !isNaN(parseFloat(t))) {
          return t;
        }
        // If it's a type name (like "string", "number"), don't quote
        if (['string', 'number', 'boolean', 'object', 'any'].includes(t)) {
          return t;
        }
        // Check if it's a complex type (contains spaces or special chars)
        if (t.includes(' ') || t.includes('<') || t.includes('[]')) {
          // Complex type - use as is in curly braces
          return null; // Signal to use full type
        }
        // Otherwise quote it
        return `"${t}"`;
      })
      .filter(t => t !== null);
    
    if (options.length === 0) {
      // All were complex types, use full type
      return `${prop.name}${required}={${type}}`;
    }
    
    // If all options are type names, use union syntax
    const allTypeNames = options.every(opt => ['string', 'number', 'boolean', 'object', 'any'].includes(opt));
    if (allTypeNames) {
      return `${prop.name}${required}={${options.join(' | ')}}`;
    }
    
    // Check if we have a mix - if so, use full type
    const hasComplexType = type.includes('<') || type.includes('[]') || type.includes('readonly');
    if (hasComplexType) {
      return `${prop.name}${required}={${type}}`;
    }
    
    return `${prop.name}${required}="${options.join('" | "')}"`;
  } else if (type === 'Size' || type === 'Color') {
    // Common design system types
    if (prop.name === 'data-size') {
      return `${prop.name}${required}="sm" | "md" | "lg"`;
    } else if (prop.name === 'data-color') {
      return `${prop.name}${required}="accent" | "neutral" | "danger" | etc.`;
    }
    return `${prop.name}${required}={${type}}`;
  } else {
    return `${prop.name}${required}={${type}}`;
  }
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
  
  // Generate props documentation
  const propsLines = sortedProps.map(prop => {
    const indent = '  ';
    const formatted = formatPropValue(prop);
    // Add comment for required props
    const comment = prop.required && prop.description ? `  // Required: ${prop.description.split('\n')[0]}` : '';
    return `${indent}${formatted}${comment}`;
  });
  
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
