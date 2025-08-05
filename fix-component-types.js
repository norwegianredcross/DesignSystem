const fs = require('fs');
const path = require('path');
const glob = require('glob'); // npm install glob if you don't have it

// Find all component index files
const componentFiles = glob.sync('src/components/*/index.tsx');

componentFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix re-exported constants with explicit typing
  content = content.replace(
    /^export const (\w+) = (DigDir\w+);$/gm,
    'export const $1: typeof $2 = $2;'
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${filePath}`);
});