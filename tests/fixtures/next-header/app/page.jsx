import 'server-only';
import { Header } from 'rk-designsystem';
import ServerMenu from './server-menu';

export default async function Page() {
  return (
    <main>
      <h1>Server page</h1>
      <section aria-label="Page header">
        <Header navItems={[{ label: 'About', href: '/about/' }]}>
          <ServerMenu />
        </Header>
      </section>
    </main>
  );
}
