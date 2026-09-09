import { createInstance } from '@module-federation/enhanced/runtime';

export const mf = createInstance({
  name: 'shell',
  remotes: [
    {
      name: 'users_mfe',
      entry: 'http://localhost:3002/mf-manifest.json',
    },
  ],
});
