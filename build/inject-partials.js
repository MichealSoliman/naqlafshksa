/**
 * build/inject-partials.js
 * Injects unified static HTML footer into all site pages with accurate relative paths.
 * 0 dependencies.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const partialFooterPath = path.join(rootDir, 'asstes', 'partials', 'footer.html');

if (!fs.existsSync(partialFooterPath)) {
    console.error('Partial footer file not found:', partialFooterPath);
    process.exit(1);
}

const footerTemplate = fs.readFileSync(partialFooterPath, 'utf8');

function findHtmlFiles(dir) {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '_removed_backup' || entry.name === 'dist') {
            continue;
        }
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(findHtmlFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'footer.html') {
            results.push(fullPath);
        }
    }
    return results;
}

const htmlFiles = findHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files to inspect/inject.`);

htmlFiles.forEach(filePath => {
    const relFromRoot = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const segments = relFromRoot.split('/');
    let basePath = './';
    if (segments.length === 2) {
        basePath = '../';
    } else if (segments.length >= 3) {
        basePath = '../../';
    }

    const fileFooter = footerTemplate.replace(/\{\{BASE_PATH\}\}/g, basePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace footer
    const footerRegexWithMarkers = /<!-- FOOTER:START -->[\s\S]*?<!-- FOOTER:END -->/i;
    const footerRegexTag = /<footer\b[\s\S]*?<\/footer>/i;

    const wrappedFooter = `<!-- FOOTER:START -->\n${fileFooter.trim()}\n    <!-- FOOTER:END -->`;

    let updated = false;
    if (footerRegexWithMarkers.test(content)) {
        content = content.replace(footerRegexWithMarkers, wrappedFooter);
        updated = true;
    } else if (footerRegexTag.test(content)) {
        content = content.replace(footerRegexTag, wrappedFooter);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated footer in: ${relFromRoot} (basePath: ${basePath})`);
    } else {
        console.warn(`No footer tag found in: ${relFromRoot}`);
    }
});

console.log('Partial injection complete.');

