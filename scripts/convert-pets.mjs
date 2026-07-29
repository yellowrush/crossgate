import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const petsDir = path.resolve(__dirname, '../docs/pets');
const outDir = path.resolve(__dirname, '../src/pages/pets');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(petsDir).filter((f) => f.endsWith('.md'));

for (const file of files) {
  const content = fs.readFileSync(path.join(petsDir, file), 'utf-8');

  const mdxContent = `---
layout: ../../layouts/DocLayout.astro
${content.slice(4)}`;

  let outContent = mdxContent;

  // Replace Vue 2 style props with Astro/MDX compatible syntax
  // <Stars :number="1" /> → <Stars number={1} />
  outContent = outContent.replace(
    /<Stars\s+:number="([^"]+)"\s*\/>/g,
    (match, num) => `<Stars number={${num}} />`
  );

  // <Progress earth :number="3" /> → <Progress earth={3} />
  outContent = outContent.replace(
    /<Progress\s+(\w+)\s+:number="([^"]+)"\s*\/>/g,
    (match, attr, num) => `<Progress ${attr}={${num}} />`
  );

  // <Card :type="1" /> → <CardIcon type={1} />
  // <Card /> → <CardIcon />
  outContent = outContent.replace(
    /<Card\s+:type="([^"]+)"\s*\/>/g,
    (match, t) => `<CardIcon type={${t}} />`
  );
  outContent = outContent.replace(/<Card\s*\/>/g, '<CardIcon />');

  // <Video src="..." /> → <Video src="..." /> (keep as-is, will need import)

  // Prepend component imports
  const importBlock = `import RouterBack from '../../components/astro/RouterBack.astro';
import Stars from '../../components/astro/Stars.astro';
import Progress from '../../components/astro/Progress.astro';
import Strong from '../../components/astro/Strong.astro';
import CardIcon from '../../components/astro/CardIcon.astro';

`;

  // Insert imports after frontmatter
  const fmEnd = outContent.indexOf('---', 4) + 3;
  outContent = outContent.slice(0, fmEnd) + '\n' + importBlock + outContent.slice(fmEnd).trimStart();

  const outFile = file.replace('.md', '.mdx');
  fs.writeFileSync(path.join(outDir, outFile), outContent, 'utf-8');
  console.log(`Converted: ${file} -> ${outFile}`);
}

console.log(`Done! Converted ${files.length} pet pages.`);
