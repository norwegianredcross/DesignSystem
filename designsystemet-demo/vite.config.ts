import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/DesignSystem/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  publicDir: "public",
  server: {
    fs: {
      allow: [
        "public",
        process.cwd()
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), "index.html")
      }
    }
  }
})
