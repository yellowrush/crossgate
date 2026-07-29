import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tasksDir = path.resolve(__dirname, '../docs/tasks');
const outDir = path.resolve(__dirname, '../src/pages/tasks');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(tasksDir).filter((f) => f.endsWith('.md'));

for (const file of files) {
  const content = fs.readFileSync(path.join(tasksDir, file), 'utf-8');

  const mdxContent = `---
layout: ../../layouts/DocLayout.astro
${content.slice(4)}`;

  let outContent = mdxContent;

  // Build imports - RouterBack is always used
  const imports = ["import RouterBack from '../../components/astro/RouterBack.astro';"];

  // If it's a videos page, add Video import
  if (file.includes('_videos')) {
    imports.push("import Video from '../../components/astro/Video.astro';");
  }

  const importBlock = imports.join('\n') + '\n\n';

  // Insert imports after frontmatter
  const fmEnd = outContent.indexOf('---', 4) + 3;
  outContent = outContent.slice(0, fmEnd) + '\n' + importBlock + outContent.slice(fmEnd).trimStart();

  const outFile = file.replace('.md', '.mdx');
  fs.writeFileSync(path.join(outDir, outFile), outContent, 'utf-8');
  console.log(`Converted: ${file} -> ${outFile}`);
}

console.log(`Done! Converted ${files.length} task pages.`);
