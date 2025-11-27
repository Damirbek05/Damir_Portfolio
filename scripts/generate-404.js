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

// Check if _next folder exists (could be in root or in basePath folder)
const nextDir = path.join(outDir, '_next');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/Damir_Portfolio';
const basePathName = basePath.replace(/^\//, '');
const basePathDir = path.join(outDir, basePathName);

// Check structure and move files if needed
if (fs.existsSync(nextDir)) {
  console.log('✓ Verified _next folder exists in root');
} else if (fs.existsSync(path.join(basePathDir, '_next'))) {
  console.log(`⚠ Found _next folder in ${basePathName}/, but GitHub Pages needs it in root`);
  console.log('  Moving _next folder to root...');
  
  // Move _next folder from basePath to root
  const sourceNextDir = path.join(basePathDir, '_next');
  const destNextDir = path.join(outDir, '_next');
  
  // Copy recursively
  function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
  
  copyRecursiveSync(sourceNextDir, destNextDir);
  console.log('✓ Moved _next folder to root');
} else {
  console.warn('⚠ WARNING: _next folder not found');
  console.warn(`   Checked: ${nextDir}`);
  console.warn(`   Checked: ${path.join(basePathDir, '_next')}`);
  
  // List directory structure for debugging
  if (fs.existsSync(outDir)) {
    console.log('\n📁 Contents of out directory:');
    const contents = fs.readdirSync(outDir, { withFileTypes: true });
    contents.forEach(item => {
      console.log(`   ${item.isDirectory() ? '📁' : '📄'} ${item.name}`);
    });
  }
}

