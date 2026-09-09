import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3002,
  },

  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'users_mfe',

      exposes: {
        './Users': './src/Users.tsx',
      },

      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
});
