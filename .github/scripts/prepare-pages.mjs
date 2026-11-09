// Publish only the runtime website; keep masters and project notes in GitHub.
import { readdir, mkdir, cp, rm } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const target = path.join(root, '_site');
await rm(target, { recursive: true, force: true });
await mkdir(target);
for (const file of await readdir(root)) {
  if (/\.(html|xml|txt)$/.test(file) || file === '.nojekyll') {
    await cp(path.join(root, file), path.join(target, file));
  }
}
for (const folder of ['en', 'es', 'assets', 'links']) {
  await cp(path.join(root, folder), path.join(target, folder), {
    recursive: true,
    filter: source => !source.includes(`${path.sep}originals`) && !source.endsWith('.md'),
  });
}
console.log('Prepared _site with optimized runtime assets; source masters remain in GitHub.');
