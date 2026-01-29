import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/asapautohoulto/',
  server: {
    middlewareMode: true,
    hmr: {
      protocol: 'ws',
      timeout: 60000,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  logLevel: 'warn',
})
