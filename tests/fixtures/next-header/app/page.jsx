import 'server-only';
import { Header } from '@norwegianredcross/designsystem';
import ServerMenu from './server-menu';
import ServerLogo from './server-logo';

export default async function Page() {
  return (
    <main>
      <h1>Server page</h1>
      <section aria-label="Page header">
        <Header secondaryLogo={<ServerLogo />} navItems={[{ label: 'About', href: '/about/' }]}>
          <ServerMenu />
        </Header>
      </section>
    </main>
  );
}
