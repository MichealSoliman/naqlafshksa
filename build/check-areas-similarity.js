/**
 * build/check-areas-similarity.js
 * Analyzes sentence-level similarity across all 8 dedicated neighborhood pages in /areas/.
 * Strips common header, navigation, footer, scripts, and JSON-LD to measure pure unique content overlap.
 */

const fs = require('fs');
const path = require('path');

const AREAS_DIR = path.resolve(__dirname, '../areas');

const areaPages = [
    'furniture-moving-hayu-almalqa-riyadh/index.html',
    'hayu-alyasmeen/index.html',
    'furniture-moving-hayu-alnarjis-riyadh/index.html',
    'furniture-moving-hayu-alsahafa-riyadh/index.html',
    'furniture-moving-hayu-hittin-riyadh/index.html',
    'furniture-moving-hayu-alolaya-riyadh/index.html',
    'furniture-moving-hayu-alrawdah-riyadh/index.html',
    'furniture-moving-hayu-almonsiyah-riyadh/index.html'
];

function extractCleanSentences(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove head, script, style, header, footer, modal
    html = html.replace(/<head[\s\S]*?<\/head>/gi, '');
    html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
    html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
    html = html.replace(/<!-- FOOTER:START -->[\s\S]*?<!-- FOOTER:END -->/gi, '');
    html = html.replace(/<footer[\s\S]*?<\/footer>/gi, '');
    html = html.replace(/<header[\s\S]*?<\/header>/gi, '');
    html = html.replace(/<div id="lightbox"[\s\S]*?<\/div>/gi, '');
    html = html.replace(/<div class="mobile-cta"[\s\S]*?<\/div>/gi, '');

    // Strip HTML tags to get pure text
    const text = html.replace(/<[^>]+>/g, ' ');

    // Normalize and split into sentences
    const rawSentences = text
        .split(/[.\n؛!؟?]/)
        .map(s => s.trim().replace(/\s+/g, ' '))
        .filter(s => s.length > 25); // Ignore very short fragments

    return new Set(rawSentences);
}

const pageSentences = {};
areaPages.forEach(p => {
    const fullPath = path.join(AREAS_DIR, p);
    pageSentences[p] = extractCleanSentences(fullPath);
});

console.log('=== Sentence Similarity Matrix Across Areas (Pure Content) ===\n');

let maxSimilarity = 0;
let maxPair = null;
const results = [];

for (let i = 0; i < areaPages.length; i++) {
    for (let j = i + 1; j < areaPages.length; j++) {
        const p1 = areaPages[i];
        const p2 = areaPages[j];

        const set1 = pageSentences[p1];
        const set2 = pageSentences[p2];

        // Count intersection
        let intersection = 0;
        set1.forEach(s => {
            if (set2.has(s)) intersection++;
        });

        // Similarity relative to the smaller set (Containment / Overlap coefficient)
        const minSize = Math.min(set1.size, set2.size);
        const similarityPct = minSize > 0 ? (intersection / minSize) * 100 : 0;

        results.push({
            p1: p1.split('/')[0],
            p2: p2.split('/')[0],
            intersection,
            set1Size: set1.size,
            set2Size: set2.size,
            similarityPct: parseFloat(similarityPct.toFixed(1))
        });

        if (similarityPct > maxSimilarity) {
            maxSimilarity = similarityPct;
            maxPair = { p1: p1.split('/')[0], p2: p2.split('/')[0], similarityPct };
        }
    }
}

// Sort results descending by similarity
results.sort((a, b) => b.similarityPct - a.similarityPct);

console.log('Top 5 Pairs with Highest Sentence Overlap:');
results.slice(0, 5).forEach(r => {
    console.log(`- [${r.p1}] vs [${r.p2}]: ${r.similarityPct}% (${r.intersection} identical sentences out of ~${Math.min(r.set1Size, r.set2Size)})`);
});

console.log(`\nOverall Highest Pair: [${maxPair.p1}] vs [${maxPair.p2}] at ${maxPair.similarityPct.toFixed(1)}%`);
if (maxSimilarity <= 30) {
    console.log(`✅ Passed! Highest similarity (${maxPair.similarityPct.toFixed(1)}%) is well below the 30% threshold.`);
} else {
    console.log(`⚠️ Alert: Highest similarity (${maxPair.similarityPct.toFixed(1)}%) exceeds 30%.`);
}

