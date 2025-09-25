import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,   // Force Vite to check for file changes
      interval: 100,      // Check every 100ms
    },
    strictPort: true,      // Avoid port conflicts
    host: true,            // Allow LAN/devices to connect
  },
  clearScreen: false,      // Keeps logs visible
})
