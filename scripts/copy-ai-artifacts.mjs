// Puts the AI-context artifacts into the Storybook build so they publish
// alongside it (AGENTS.md: build-storybook publishes the guide, metadata and
// manifest TOGETHER). This used to exist twice - as three copy-* npm scripts
// behind predeploy:storybook and as three inline cp steps in ci.yml - and
// the two copies could drift. build-storybook now runs this itself, so every
// path that produces storybook-build/ gets the artifacts, and the manifest's
// advertised URL under /storybook/ never 404s.
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'storybook-build';
if (!existsSync(outDir)) {
  console.error(`${outDir}/ finnes ikke - kjør storybook build først.`);
  process.exit(1);
}
// CHANGELOG.md rides along so the docs platform (designportal) can render
// "Hva er nytt" from the published release notes instead of keeping a copy.
for (const file of ['metadata.json', 'AI_DESIGN_SYSTEM_GUIDE.md', 'ai-context.manifest.json', 'CHANGELOG.md']) {
  copyFileSync(file, join(outDir, file));
  console.log(`✅ ${file} -> ${outDir}/`);
}
