// Copies the Handlebars views from src/ into dist/, which tsc does not do.
const fs = require('fs');
const path = require('path');

const srcRoot = path.join(__dirname, '..', 'src');
const distRoot = path.join(__dirname, '..', 'dist');

function copyViews(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const from = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            copyViews(from);
        } else if (entry.name.endsWith('.handlebars')) {
            const to = path.join(distRoot, path.relative(srcRoot, from));
            fs.mkdirSync(path.dirname(to), { recursive: true });
            fs.copyFileSync(from, to);
        }
    }
}

copyViews(srcRoot);
