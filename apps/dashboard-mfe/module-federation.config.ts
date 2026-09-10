import { createModuleFederationConfig } from '@module-federation/vite';

const reactVersion = '^19.3.0';

export default createModuleFederationConfig({
  name: 'dashboard_mfe',

  filename: 'remoteEntry.js',

  exposes: {
    './Dashboard': './src/App.tsx',
  },

  shared: {
    react: {
      singleton: true,
      requiredVersion: reactVersion,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: reactVersion,
      eager: true,
    },
    'react-dom/client': {
      singleton: true,
      requiredVersion: reactVersion,
      eager: true,
    },
  },
});
