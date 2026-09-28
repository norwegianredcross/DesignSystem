import 'server-only';
import 'rk-designsystem/styles';
import { Footer } from 'rk-designsystem';
import ServerMenu from './server-menu';

export default async function Layout({ children }) {
  return (
    <html lang="no" data-color-scheme="dark">
      <body>
        {children}
        <Footer
          aria-label="Layout footer"
          colorScheme="dark"
          newsletterAction="/newsletter/"
          newsletterDescription="Receive updates"
          shortcutsLinks={[{ label: 'About', href: '/about/' }]}
          linksLinks={[]}
          whiteSectionSlot={<ServerMenu />}
        />
      </body>
    </html>
  );
}
