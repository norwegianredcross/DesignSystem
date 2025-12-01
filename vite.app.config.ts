import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/DesignSystem/',
  build: {
    outDir: 'dist-app',
    emptyOutDir: true,
  },
});

