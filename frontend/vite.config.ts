import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This is important for proper routing
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure assets are properly handled
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})