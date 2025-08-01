import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: true // Let Vite auto-detect the config file
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['all']
  }
})
