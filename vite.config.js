import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/digital-marketing-services-in-dallas/',
  plugins: [react()],
});
