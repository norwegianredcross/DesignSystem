import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.dts.json',
      outDir: 'dist',
      insertTypesEntry: true,
      rollupTypes: true,
      bundledPackages: [],
      copyDtsFiles: false,
      strictOutput: false,
      compilerOptions: {
        skipLibCheck: true,
        noEmit: true,
      },
    }),
  ],
  // The docs app's public/ images have no place in the library dist — with
  // files: ["dist/**"] they would otherwise ship to npm.
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      // ESM-only: the UMD build advertised a require() path that never worked —
      // the file sat in a "type": "module" package (Node parsed it as ESM), and
      // Digdir's own CJS entry is broken too, so no CJS consumer could get
      // through even with a correct file here.
      formats: ['es'],
    },
    rollupOptions: {
      // Prefix match, not exact match: subpath imports (date-fns/locale,
      // @navikt/aksel-icons/…) must stay external too — an exact-string list
      // silently bundled them, which preserveModules would surface as a
      // dist/node_modules directory.
      external: (id: string) =>
        [
          'react',
          'react-dom',
          '@digdir/designsystemet',
          '@digdir/designsystemet-css',
          '@digdir/designsystemet-react',
          '@navikt/aksel-icons',
          'date-fns',
          'classnames',
          'embla-carousel-react',
        ].some((pkg) => id === pkg || id.startsWith(`${pkg}/`)),
      output: {
        // Unbundled dist (one file per source module), mirroring upstream
        // Digdir's `unbundle: true`: consumers' bundlers tree-shake on the
        // module graph, so a Button-only app never pays for Donor, Carousel,
        // the translations, or the Header/Footer CSS fallbacks.
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        // Every emitted file is declared a client module, exactly like
        // upstream Digdir. Next.js App Router then draws the server/client
        // boundary itself — consumers import components directly in server
        // components without writing 'use client' wrappers. (The flat bundle
        // stripped directives, which made every import fail under the
        // react-server condition.)
        banner: "'use client';",
      },
    },
  },
});