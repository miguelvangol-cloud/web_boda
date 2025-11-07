import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://miguelvangol-cloud.github.io/web_boda/',
  plugins: [react()],
})
