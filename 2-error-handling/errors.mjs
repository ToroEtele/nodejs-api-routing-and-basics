import { readFile, writeFile } from 'fs/promises';

/*
process.on('uncaughtExceptions', (e) => {
  console.log(e);
})
*/


try {
  const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
} catch(e) {
  console.error(e);
  console.log('Moving to the next line..');
}