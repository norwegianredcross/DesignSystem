import 'server-only';
import '@norwegianredcross/designsystem/styles';
import { Header } from '@norwegianredcross/designsystem';
import ServerMenu from './server-menu';

export default async function Layout({ children }) {
  return (
    <html lang="no" data-color-scheme="dark">
      <body>
        <section aria-label="Layout header">
          <Header
            colorScheme="dark"
            showThemeToggle
            navItems={[{ label: 'About', href: '/about/' }]}
          >
            <ServerMenu />
          </Header>
        </section>
        {children}
      </body>
    </html>
  );
}
