import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base public path when served from a sub‑directory (e.g. GitHub Pages)
  // replace "new-mac-os" with your repository name if different
  base: '/',
  plugins: [react()],
})
