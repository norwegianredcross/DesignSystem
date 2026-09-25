import { createElement, useEffect, useRef } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Footer, type FooterProps } from '../../src/components/Footer';

function Consumer({ props, callback }: { props: FooterProps; callback: boolean }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => { document.body.dataset.hydrated = String(ref.current?.tagName === 'FOOTER'); }, []);
  return createElement(Footer, {
    ...props,
    ref,
    ...(callback ? { onNewsletterSubmit: (email: string) => {
      document.getElementById('result')!.textContent = email;
    } } : {}),
  });
}

export function renderFooter(props: FooterProps = {}, callback = false) {
  return createElement(Consumer, { props: {
    shortcutsLinks: [{ label: 'Volunteer', href: '/destination' }],
    linksLinks: [{ label: 'Privacy', href: '/destination' }],
    columns: [{ title: 'Resources', links: [{ label: 'Volunteer', href: '/destination' }] }],
    socialLinks: [{ label: 'Community', href: '/destination', icon: null }],
    contactPersons: [{ name: 'Example Person', role: 'Contact', email: 'person@example.test' }],
    legalLinks: [{ label: 'Privacy', href: '/destination' }],
    organizationNumber: '123 456 789',
    newsletterDescription: 'Receive our updates',
    ...props,
  }, callback });
}

export function hydrateFooter(props: FooterProps = {}, callback = false) {
  const root = hydrateRoot(document.getElementById('root')!, renderFooter(props, callback));
  return () => root.render(renderFooter(props, callback));
}
