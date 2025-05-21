import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    host: true,
    strictPort: true,
    allowedHosts: [
      'wap-project-react.onrender.com',
      'localhost',
      '127.0.0.1'
    ]
  },
  server: {
    port: 5173,
    host: true,
    strictPort: true
  }
})
