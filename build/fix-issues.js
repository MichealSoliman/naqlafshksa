/**
 * build/fix-issues.js
 * Automatically fixes technical audit items across all HTML files:
 * 1. Replaces logo.png with logo.webp.
 * 2. Replaces og-home.jpg with og-home.webp.
 * 3. Removes inline tailwind.config blocks.
 * 4. Normalizes tel:0539877874 to tel:+966539877874.
 * 5. Removes emojis in HTML text/buttons.
 * 6. Adds faq.js to pages that have FAQ sections but lack faq.js.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getHtmlFiles(dir) {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist' || entry.name === '_removed_backup' || entry.name === 'asstes') {
                continue;
            }
            results = results.concat(getHtmlFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

const htmlFiles = getHtmlFiles(ROOT_DIR);
console.log(`Processing ${htmlFiles.length} HTML files...`);

// Emoji regex covering general unicode emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu;

let totalFixed = 0;

htmlFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');

    // Determine relative depth for scripts
    const depth = relPath.split('/').length - 1;
    let basePath = './';
    if (depth === 1) basePath = '../';
    else if (depth === 2) basePath = '../../';

    // 1. logo.png -> logo.webp
    content = content.replace(/logo\.png/g, 'logo.webp');

    // 2. og-home.jpg -> og-home.webp
    content = content.replace(/og-home\.jpg/g, 'og-home.webp');

    // 3. Remove inline tailwind.config script tags
    // e.g. <script> tailwind.config = { ... } </script>
    content = content.replace(/<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*<\/script>\s*/gi, '');

    // 4. tel:0539877874 -> tel:+966539877874
    content = content.replace(/href=["']tel:05([0-9]{8})["']/g, 'href="tel:+9665$1"');

    // 5. Remove emojis from HTML content (excluding technical script tags if any)
    content = content.replace(emojiRegex, '');

    // 6. Add faq.js if page has FAQ and is missing faq.js
    const hasFaq = content.includes('faq-item') || content.includes('id="faq"') || content.includes('id="faqSection"');
    if (hasFaq && !content.includes('faq.js')) {
        const faqScriptTag = `<script src="${basePath}asstes/js/faq.js" defer></script>`;
        if (content.includes('</body>')) {
            content = content.replace('</body>', `    ${faqScriptTag}\n</body>`);
        }
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        totalFixed++;
        console.log(`Updated: ${relPath}`);
    }
});

console.log(`\nFixed issues in ${totalFixed} files.`);

