import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    hmr: {
      protocol: 'ws',
      timeout: 60000,
    },
  },
  logLevel: 'warn',
})
