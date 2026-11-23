import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  compressHTML: true,
  site: 'https://avalanche.openie.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});
