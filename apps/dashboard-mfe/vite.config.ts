import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import mfConfig from './module-federation.config.ts';

export default defineConfig({
  server: {
    port: 3003,
    origin: 'http://localhost:3003',
  },

  base: 'http://localhost:3003/',

  plugins: [react(), federation(mfConfig)],

  build: {
    target: 'esnext',
  },
});
