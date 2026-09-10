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
      version: reactVersion,
      shareConfig: {
        singleton: true,
        eager: true,
        requiredVersion: reactVersion,
      },
    },
    'react-dom': {
      version: reactVersion,
      shareConfig: {
        singleton: true,
        eager: true,
        requiredVersion: reactVersion,
      },
    },
    'react-dom/client': {
      version: reactVersion,
      shareConfig: {
        singleton: true,
        eager: true,
        requiredVersion: reactVersion,
      },
    },
  },
});
