const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const indexPath = path.join(outDir, 'index.html');
const filePath = path.join(outDir, '404.html');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found. Make sure to run "next build" first.');
  process.exit(1);
}

// For GitHub Pages, we need to create a 404.html that loads the Next.js app.
// When GitHub Pages serves 404.html for any route, it will load the app
// and Next.js router will handle the routing on the client side.
// The simplest approach is to copy index.html to 404.html.

// Read and copy index.html to 404.html
const indexContent = fs.readFileSync(indexPath, 'utf8');
fs.writeFileSync(filePath, indexContent, 'utf8');
console.log('✓ Generated 404.html for GitHub Pages (copied from index.html)');

