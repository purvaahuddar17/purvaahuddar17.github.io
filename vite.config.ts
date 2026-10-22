import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Required for GitHub Pages: set to '/' for username.github.io repo,
  // or '/<repo-name>/' if deploying to a project repo
  base: './',
})
