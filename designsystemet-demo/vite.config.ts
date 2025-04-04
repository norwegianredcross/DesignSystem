import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },
  base: "/DesignSystem/"
>>>>>>> 666954e (feat: add GitHub Pages deployment workflow)
=======
  },
  base: "/DesignSystem/"
>>>>>>> 666954e (feat: add GitHub Pages deployment workflow)
})
