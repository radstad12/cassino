import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://radstad12.github.io/cassino/
export default defineConfig({
  base: '/cassino/',
  plugins: [react()],
});
