// Writes the Firefox update manifest (updates.json) for a signed xpi.
// Usage: node scripts/make-update-manifest.mjs <xpi> <repo owner/name> <tag> [out]
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';

const [xpi, repo, tag, out = 'updates.json'] = process.argv.slice(2);
if (!xpi || !repo || !tag) {
  console.error('usage: make-update-manifest.mjs <xpi> <owner/repo> <tag> [out]');
  process.exit(1);
}

const manifest = JSON.parse(readFileSync('manifest.json', 'utf8'));
const id = manifest.browser_specific_settings.gecko.id;
if (`v${manifest.version}` !== tag) {
  console.error(`tag ${tag} does not match manifest version v${manifest.version}`);
  process.exit(1);
}

const hash = createHash('sha256').update(readFileSync(xpi)).digest('hex');
const feed = {
  addons: {
    [id]: {
      updates: [
        {
          version: manifest.version,
          update_link: `https://github.com/${repo}/releases/download/${tag}/${basename(xpi)}`,
          update_hash: `sha256:${hash}`,
        },
      ],
    },
  },
};

writeFileSync(out, `${JSON.stringify(feed, null, 2)}\n`);
console.log(`wrote ${out} for ${id} ${manifest.version}`);
