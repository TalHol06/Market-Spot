import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.VITE_PORT || 10000,
    open: true,
  },
  define: {
    'process.env': process.env
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
