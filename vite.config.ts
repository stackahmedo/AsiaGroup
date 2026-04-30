import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // GitHub Pages serves this repo at https://<user>.github.io/<repo>/.
  // Allow override via `VITE_BASE`, otherwise default to "/AsiaGroup/" in prod.
  const base = env.VITE_BASE || (mode === 'production' ? '/AsiaGroup/' : '/');
  return {
    base,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {

      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
