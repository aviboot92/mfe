'use client';

import { useEffect, useState } from 'react';

type RemoteDashboardComponent = React.ComponentType;

export default function RemoteDashboard() {
  const [Dashboard, setDashboard] = useState<RemoteDashboardComponent | null>(
    null,
  );

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      try {
        const { mf } = (await import('../lib/federation')) as {
          default?: RemoteDashboardComponent;
        };

        const dashboardModule = await mf.loadRemote('dashboard_mfe/Dashboard');

        const DashboardComponent =
          dashboardModule.default ??
          (dashboardModule as unknown as RemoteDashboardComponent);
        if (mounted) {
          setDashboard(() => DashboardComponent);
        }
      } catch (err) {
        console.error('Failed to load Dashboard MFE:', err);

        if (mounted) {
          setError('Failed to load Dashboard MFE');
        }
      }
    }

    loadDashboard();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!Dashboard) {
    return <p>Loading Dashboard MFE...</p>;
  }

  return <Dashboard />;
}
