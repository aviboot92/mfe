import Navigation from './components/Navigation';
import RemoteUser from './RemoteUser';

export default function Home() {
  return (
    <main>
      <h1>MFE SaaS</h1>
      <Navigation />
      <p>Welcome to MFE SaaS</p>
      <RemoteUser />
    </main>
  );
}
