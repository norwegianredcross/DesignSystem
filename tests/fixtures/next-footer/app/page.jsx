import 'server-only';
import { Footer } from 'rk-designsystem';

export default async function Page() {
  return (
    <main>
      <h1>Server page</h1>
      <Footer
        aria-label="Page footer"
        variant="columns"
        columns={[{ title: 'Resources', links: [{ label: 'About', href: '/about/' }] }]}
        legalLinks={[]}
      />
    </main>
  );
}
