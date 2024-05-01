// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shiruten-portfolio/',
  server: {
    open: true,
  },
  plugins: [react()],
});
