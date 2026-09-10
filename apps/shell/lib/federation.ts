import { createInstance } from '@module-federation/enhanced/runtime';

const reactVersion = '^19.3.0';

export const mf = createInstance({
  name: 'shell',
  remotes: [
    {
      name: 'users_mfe',
      entry: 'http://localhost:3002/mf-manifest.json',
    },
    {
      name: 'dashboard_mfe',
      entry: 'http://localhost:3003/remoteEntry.js',
      type: 'module',
    },
  ],
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: reactVersion,
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: reactVersion,
    },
    'react-dom/client': {
      singleton: true,
      eager: true,
      requiredVersion: reactVersion,
    },
  },
});
