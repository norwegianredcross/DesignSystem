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
      bundledPackages: ['@digdir/designsystemet-react'],
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
      formats: ['es', 'umd'],
      fileName: (format) => `componentlibrary.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@digdir/designsystemet',
        '@digdir/designsystemet-css',
        '@digdir/designsystemet-react',
        '@navikt/aksel-icons',
        'date-fns',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@digdir/designsystemet-react': 'designsystemetReact',
          'date-fns': 'dateFns',
        },
      },
    },
  },
});