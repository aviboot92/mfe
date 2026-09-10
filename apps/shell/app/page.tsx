import Navigation from './components/Navigation';
import RemoteDashboard from './Remotedashboard';
import RemoteUser from './RemoteUser';

export default function Home() {
  return (
    <main>
      <h1>MFE SaaS</h1>
      <p>Welcome to MFE SaaS</p>
      <Navigation />
      <RemoteUser />
      <RemoteDashboard />
    </main>
  );
}
