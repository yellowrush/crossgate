import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.resolve(__dirname, '../src/pages');

const CONTAINER_RE = /^:::\s*(tip|warning|danger|details|error)\s*(.*?)\s*$/;
const CLOSE_RE = /^:::$/;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const result = [];
  let i = 0;
  let changed = false;

  while (i < lines.length) {
    const line = lines[i].replace(/\r$/, '');
    const m = line.match(CONTAINER_RE);
    if (m) {
      changed = true;
      const type = m[1];
      const title = m[2].trim();
      const innerLines = [];
      i++;
      while (i < lines.length) {
        const rawLine = lines[i].replace(/\r$/, '');
        const innerMatch = rawLine.match(CONTAINER_RE);
        if (CLOSE_RE.test(rawLine)) break;
        if (innerMatch) {
          innerLines.push(`<div class="custom-block ${innerMatch[1]}">`);
          if (innerMatch[2].trim()) innerLines.push(`<p class="custom-block-title">${innerMatch[2].trim()}</p>`);
        } else {
          innerLines.push(rawLine);
        }
        i++;
      }
      const innerContent = innerLines.join('\n');
      result.push(`<div class="custom-block ${type}">`);
      if (title) result.push(`<p class="custom-block-title">${title}</p>`);
      result.push(innerContent);
      result.push('</div>');
    } else if (/^:::\s*$/.test(line)) {
      changed = true;
    } else {
      result.push(lines[i].replace(/\r$/, ''));
    }
    i++;
  }

  const newContent = result.join('\n');
  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated: ${path.relative(pagesDir, filePath)}`);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) processFile(fullPath);
  }
}

walk(pagesDir);
console.log('Done converting containers.');
