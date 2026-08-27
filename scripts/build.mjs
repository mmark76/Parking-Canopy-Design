import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = join(rootDirectory, 'dist');

const publishedFiles = [
  'index.html',
  'dashboard.css',
  'dashboard.js',
  '_headers',
  'README.md',
  'PROJECT_STATUS.md',
  'SITE_DATA.md',
  'DESIGN_REQUIREMENTS.md',
  'DESIGN_BASIS.md',
  'ASSUMPTIONS.md',
  'DECISIONS.md',
  'PROCUREMENT_STRATEGY.md'
];

const resolveCommit = () => {
  const environmentCommit = process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA;
  if (environmentCommit && /^[0-9a-f]{7,40}$/i.test(environmentCommit)) return environmentCommit;

  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: rootDirectory,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch {
    return '';
  }
};

const buildDate = new Date().toISOString().slice(0, 10);
const commit = resolveCommit();

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const relativePath of publishedFiles) {
  cpSync(join(rootDirectory, relativePath), join(outputDirectory, relativePath));
}

const sourceHtml = readFileSync(join(outputDirectory, 'index.html'), 'utf8');
const builtHtml = sourceHtml
  .replace(/<meta name="build-date" content="[^"]*">/, `<meta name="build-date" content="${buildDate}">`)
  .replace(/<meta name="build-commit" content="[^"]*">/, `<meta name="build-commit" content="${commit}">`);

writeFileSync(join(outputDirectory, 'index.html'), builtHtml);

console.log(`Built Parking Projects dashboard (${publishedFiles.length} files) in dist/`);
console.log(`Build identity: v0.1.0_${buildDate.replaceAll('-', '')}${commit ? `_${commit.slice(0, 7)}` : ''}`);
