'use client';

import { useEffect, useState } from 'react';

type RemoteUsersComponent = React.ComponentType;

export default function RemoteUsers() {
  const [Users, setUsers] = useState<RemoteUsersComponent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadUsers() {
      try {
        const { mf } = await import('../lib/federation');

        const usersModule = (await mf.loadRemote('users_mfe/Users')) as {
          default?: RemoteUsersComponent;
        };

        const UsersComponent =
          usersModule.default ??
          (usersModule as unknown as RemoteUsersComponent);

        if (mounted) {
          setUsers(() => UsersComponent);
        }
      } catch (err) {
        console.error('Failed to load Users MFE:', err);

        if (mounted) {
          setError('Failed to load Users MFE');
        }
      }
    }

    loadUsers();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!Users) {
    return <p>Loading Users MFE...</p>;
  }

  return <Users />;
}
