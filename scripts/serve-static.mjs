/**
 * Minimal statisk filserver for testformål (ingen ekstra avhengigheter).
 * Brukes av den visuelle regresjonstesten til å servere storybook-build/.
 * Bruk: node scripts/serve-static.mjs <katalog> <port>
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const [, , dir = 'storybook-build', portArg = '6106'] = process.argv;
const root = path.resolve(process.cwd(), dir);
const port = Number(portArg);

if (!fs.existsSync(path.join(root, 'iframe.html'))) {
  console.error(`❌ ${dir}/iframe.html finnes ikke — kjør \`npm run build-storybook\` først.`);
  process.exit(1);
}

const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
};

http
  .createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    // Production Storybook builds hardcode the GitHub Pages base path into
    // asset URLs (see .storybook/main.ts). Strip it so the same build can be
    // served from the test server's root.
    if (reqPath.startsWith('/DesignSystem/storybook/')) {
      reqPath = reqPath.slice('/DesignSystem/storybook'.length);
    }
    const filePath = path.join(root, path.normalize(reqPath === '/' ? '/index.html' : reqPath));
    if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { 'content-type': types[path.extname(filePath)] ?? 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  })
  .listen(port, () => console.log(`Serverer ${dir} på http://127.0.0.1:${port}`));
