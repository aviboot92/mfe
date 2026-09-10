import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'dashboard_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port: 3003,
  },

  build: {
    target: 'esnext',
  },
});
