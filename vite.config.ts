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
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      // ESM-only: the UMD build advertised a require() path that never worked —
      // the file sat in a "type": "module" package (Node parsed it as ESM), and
      // Digdir's own CJS entry is broken too, so no CJS consumer could get
      // through even with a correct file here.
      formats: ['es'],
      fileName: (format) => `componentlibrary.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        '@digdir/designsystemet',
        '@digdir/designsystemet-css',
        '@digdir/designsystemet-react',
        '@navikt/aksel-icons',
        'date-fns',
        'classnames',
        'embla-carousel-react',
      ],
    },
  },
});