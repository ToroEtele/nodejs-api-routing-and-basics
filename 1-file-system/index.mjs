import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const template = await readFile(new URL('template.html', import.meta.url), 'utf-8');

const data = {
  title: 'Learn Node.js',
  body: 'This is the final HTML'
}

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val)
}

await writeFile(new URL('./index.html', import.meta.url), template)
