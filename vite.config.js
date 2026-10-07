import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: caminho do repositório no GitHub Pages (https://<usuario>.github.io/politica/)
export default defineConfig({
  plugins: [react()],
  base: '/politica/',
});
