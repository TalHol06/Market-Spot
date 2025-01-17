import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    open: true,
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  resolve: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime'
    }
  },
});
