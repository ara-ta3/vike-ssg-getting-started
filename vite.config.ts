import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vike/plugin';

export default defineConfig({
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
