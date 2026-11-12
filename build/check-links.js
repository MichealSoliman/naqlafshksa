/**
 * build/check-links.js
 * Comprehensive automated quality audit for naqlafshksa.com (Zero external dependencies).
 * 
 * Checks:
 * 1. Broken local links (404 targets).
 * 2. Misleading anchor text (e.g. neighborhood name linking to generic directory instead of dedicated page).
 * 3. Orphan pages (pages with fewer than 3 inbound internal links).
 * 4. Company name audit (checking for forbidden "أصول" or incorrect brand mentions).
 * 5. Asset references audit (flagging logo.png, og-home.jpg in favor of .webp).
 * 6. Inline tailwind.config check.
 * 7. Phone protocol format (ensuring tel:+966539877874).
 * 8. FAQ.js presence check on pages with FAQ accordion items.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Helper to recursively find all .html files
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
console.log(`Auditing ${htmlFiles.length} HTML files...\n`);

const brokenLinks = [];
const misleadingAnchors = [];
const inboundCounts = {};
const brandIssues = [];
const assetIssues = [];
const inlineTailwindIssues = [];
const telProtocolIssues = [];
const missingFaqScript = [];

// Initialize inbound map
htmlFiles.forEach(file => {
    const rel = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    inboundCounts[rel] = 0;
});

// Dedicated neighborhoods map
const DEDICATED_AREAS = [
    { name: 'النرجس', slug: 'areas/furniture-moving-hayu-alnarjis-riyadh/' },
    { name: 'الملقا', slug: 'areas/furniture-moving-hayu-almalqa-riyadh/' },
    { name: 'الياسمين', slug: 'areas/hayu-alyasmeen/' },
    { name: 'الصحافة', slug: 'areas/furniture-moving-hayu-alsahafa-riyadh/' },
    { name: 'حطين', slug: 'areas/furniture-moving-hayu-hittin-riyadh/' },
    { name: 'العليا', slug: 'areas/furniture-moving-hayu-alolaya-riyadh/' },
    { name: 'الروضة', slug: 'areas/furniture-moving-hayu-alrawdah-riyadh/' },
    { name: 'المونسية', slug: 'areas/furniture-moving-hayu-almonsiyah-riyadh/' }
];

htmlFiles.forEach(filePath => {
    const fileRel = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');
    const fileDir = path.dirname(filePath);

    // 1. Audit Brand ("أصول")
    if (content.includes('أصول') || content.includes('اصول')) {
        // filter out legitimate words like "أصول العمل" if any, but in company context flag it
        const matches = content.match(/.{0,30}(أصول|اصول).{0,30}/g) || [];
        matches.forEach(m => {
            brandIssues.push({ file: fileRel, snippet: m.trim() });
        });
    }

    // 2. Audit Assets
    if (content.includes('logo.png')) {
        assetIssues.push({ file: fileRel, asset: 'logo.png' });
    }
    if (content.includes('og-home.jpg')) {
        assetIssues.push({ file: fileRel, asset: 'og-home.jpg' });
    }

    // 3. Inline tailwind.config
    if (/tailwind\.config\s*=/i.test(content)) {
        inlineTailwindIssues.push({ file: fileRel });
    }

    // 4. tel: protocol issues (e.g. tel:0539877874 without +966)
    const telMatches = content.match(/href=["']tel:05[0-9]+["']/g);
    if (telMatches) {
        telMatches.forEach(t => {
            telProtocolIssues.push({ file: fileRel, href: t });
        });
    }

    // 5. FAQ script check
    const hasFaqSection = content.includes('faq-item') || content.includes('accordion') || /id=["']faq["']/i.test(content);
    const loadsFaqJs = content.includes('faq.js');
    if (hasFaqSection && !loadsFaqJs) {
        missingFaqScript.push({ file: fileRel });
    }

    // 6. Audit <a> Links & Anchors (only in HTML body, not inside script tags)
    const contentWithoutScripts = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const linkRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    while ((match = linkRegex.exec(contentWithoutScripts)) !== null) {
        const rawHref = match[1].trim();
        const rawText = match[2].replace(/<[^>]+>/g, '').trim();

        // Skip non-local or hash-only
        if (!rawHref || rawHref.startsWith('http://') || rawHref.startsWith('https://') ||
            rawHref.startsWith('tel:') || rawHref.startsWith('mailto:') || rawHref.startsWith('javascript:') ||
            rawHref.startsWith('#')) {
            continue;
        }

        // Clean query and hash
        const cleanHref = rawHref.split('#')[0].split('?')[0];
        if (!cleanHref) continue;

        // Resolve local target path
        let resolvedPath;
        if (cleanHref.startsWith('/')) {
            resolvedPath = path.join(ROOT_DIR, cleanHref);
        } else {
            resolvedPath = path.resolve(fileDir, cleanHref);
        }

        // Check if directory target points to index.html
        let targetExists = false;
        let canonicalTargetRel = null;

        if (fs.existsSync(resolvedPath)) {
            const stat = fs.statSync(resolvedPath);
            if (stat.isDirectory()) {
                const indexCandidate = path.join(resolvedPath, 'index.html');
                if (fs.existsSync(indexCandidate)) {
                    targetExists = true;
                    canonicalTargetRel = path.relative(ROOT_DIR, indexCandidate).replace(/\\/g, '/');
                }
            } else {
                targetExists = true;
                canonicalTargetRel = path.relative(ROOT_DIR, resolvedPath).replace(/\\/g, '/');
            }
        }

        if (!targetExists) {
            brokenLinks.push({ file: fileRel, href: rawHref, text: rawText });
        } else if (canonicalTargetRel && inboundCounts[canonicalTargetRel] !== undefined) {
            inboundCounts[canonicalTargetRel]++;
        }

        // Check Misleading Anchor
        DEDICATED_AREAS.forEach(area => {
            if (rawText.includes(area.name)) {
                // Should link to dedicated page, not generic areas/ or services
                if (cleanHref.endsWith('areas/') || cleanHref.endsWith('areas/index.html') || cleanHref.endsWith('services.html')) {
                    misleadingAnchors.push({
                        file: fileRel,
                        text: rawText,
                        href: rawHref,
                        expectedSlug: area.slug
                    });
                }
            }
        });
    }
});

// Output Results
console.log('=== 1. BROKEN LOCAL LINKS ===');
if (brokenLinks.length === 0) {
    console.log('✅ 0 broken local links found.');
} else {
    console.log(`❌ Found ${brokenLinks.length} broken links:`);
    brokenLinks.forEach(b => console.log(`  - [${b.file}] href="${b.href}" (anchor: "${b.text}")`));
}

console.log('\n=== 2. MISLEADING ANCHOR TEXT ===');
if (misleadingAnchors.length === 0) {
    console.log('✅ 0 misleading anchor links found.');
} else {
    console.log(`❌ Found ${misleadingAnchors.length} misleading anchors:`);
    misleadingAnchors.forEach(m => console.log(`  - [${m.file}] text: "${m.text}" -> href: "${m.href}" (should be: "${m.expectedSlug}")`));
}

console.log('\n=== 3. ORPHAN PAGES (< 3 INBOUND LINKS) ===');
const orphans = Object.entries(inboundCounts).filter(([page, count]) => {
    // 404 and verification files can be excluded
    if (page === '404.html' || page.startsWith('yandex_')) return false;
    return count < 3;
});
if (orphans.length === 0) {
    console.log('✅ All pages have at least 3 inbound links.');
} else {
    console.log(`⚠️ ${orphans.length} pages have fewer than 3 inbound links:`);
    orphans.forEach(([p, c]) => console.log(`  - ${p}: ${c} inbound links`));
}

console.log('\n=== 4. FORBIDDEN BRAND NAME AUDIT ("أصول") ===');
if (brandIssues.length === 0) {
    console.log('✅ 0 mentions of forbidden brand name.');
} else {
    console.log(`❌ Found ${brandIssues.length} brand name issues:`);
    brandIssues.forEach(b => console.log(`  - [${b.file}] "${b.snippet}"`));
}

console.log('\n=== 5. OLD ASSET AUDIT (logo.png / og-home.jpg) ===');
if (assetIssues.length === 0) {
    console.log('✅ 0 references to old image formats.');
} else {
    console.log(`❌ Found ${assetIssues.length} outdated asset references:`);
    assetIssues.forEach(a => console.log(`  - [${a.file}] refers to ${a.asset}`));
}

console.log('\n=== 6. INLINE TAILWIND.CONFIG AUDIT ===');
if (inlineTailwindIssues.length === 0) {
    console.log('✅ 0 inline tailwind.config blocks found.');
} else {
    console.log(`❌ Found ${inlineTailwindIssues.length} inline tailwind.config blocks:`);
    inlineTailwindIssues.forEach(t => console.log(`  - [${t.file}]`));
}

console.log('\n=== 7. TEL PROTOCOL AUDIT (tel:05 vs tel:+9665) ===');
if (telProtocolIssues.length === 0) {
    console.log('✅ All tel: links use full international format (+966...).');
} else {
    console.log(`❌ Found ${telProtocolIssues.length} non-standard tel: links:`);
    telProtocolIssues.forEach(t => console.log(`  - [${t.file}] ${t.href}`));
}

console.log('\n=== 8. FAQ.JS SCRIPT AUDIT ===');
if (missingFaqScript.length === 0) {
    console.log('✅ All pages with FAQ sections load faq.js.');
} else {
    console.log(`❌ Found ${missingFaqScript.length} pages missing faq.js:`);
    missingFaqScript.forEach(f => console.log(`  - [${f.file}]`));
}
