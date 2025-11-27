const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const indexPath = path.join(outDir, 'index.html');
const filePath = path.join(outDir, '404.html');
const nojekyllPath = path.join(outDir, '.nojekyll');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found. Make sure to run "next build" first.');
  process.exit(1);
}

// For GitHub Pages, we need to:
// 1. Create a 404.html that loads the Next.js app
// 2. Create .nojekyll file to prevent Jekyll from ignoring _next folder

// Read and copy index.html to 404.html
const indexContent = fs.readFileSync(indexPath, 'utf8');
fs.writeFileSync(filePath, indexContent, 'utf8');
console.log('✓ Generated 404.html for GitHub Pages (copied from index.html)');

// Create .nojekyll file to prevent GitHub Pages from ignoring _next folder
// This is CRITICAL - without it, GitHub Pages will ignore the _next folder
fs.writeFileSync(nojekyllPath, '', 'utf8');
console.log('✓ Generated .nojekyll file to prevent Jekyll from ignoring _next folder');

// Verify .nojekyll was created
if (fs.existsSync(nojekyllPath)) {
  console.log('✓ Verified .nojekyll file exists');
} else {
  console.error('❌ ERROR: .nojekyll file was not created!');
  process.exit(1);
}

// Check if _next folder exists
const nextDir = path.join(outDir, '_next');
if (fs.existsSync(nextDir)) {
  console.log('✓ Verified _next folder exists');
} else {
  console.warn('⚠ WARNING: _next folder not found in out directory');
}

