import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow access to all necessary directories
        '/Users/riccardomarini/Dropbox/Lavori/RedCross/DesignSystem',
        // Node modules required by Storybook
        '/Users/riccardomarini/Dropbox/Lavori/RedCross/DesignSystem/storybook/node_modules'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
