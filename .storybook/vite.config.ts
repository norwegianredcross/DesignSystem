import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The component workbench and its browser tests share only React tooling.
// Package declarations, externals and client-module output belong to the
// library's root vite.config.ts and must not run when building Storybook.
export default defineConfig({
  plugins: [react()],
  // Storybook serves/copies its assets through staticDirs in main.ts.
  publicDir: false,
});
