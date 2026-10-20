import { createElement } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Header, type HeaderProps } from '../../src/components/Header';

export function renderHeader(props: HeaderProps = {}) {
  return createElement(Header, {
    navItems: [{ label: 'Volunteer', href: '#volunteer' }, { label: 'About us', href: '#about' }],
    ...props,
  }, createElement('a', { href: '#contact' }, 'Contact'));
}

export function hydrateHeader(props: HeaderProps = {}) {
  hydrateRoot(document.getElementById('root')!, renderHeader(props));
}

export function renderHeaderWithLogo(props: HeaderProps = {}) {
  return renderHeader({ ...props, secondaryLogo: createElement('a', { href: '#partner', 'aria-label': 'Partner home' },
    createElement('svg', { width: 112, height: 28, viewBox: '0 0 112 28', 'aria-hidden': true },
      createElement('text', { x: 0, y: 21, fill: 'currentColor', fontSize: 22 }, 'Partner'))),
  });
}

export function hydrateHeaderWithLogo(props: HeaderProps = {}) {
  hydrateRoot(document.getElementById('root')!, renderHeaderWithLogo(props));
}
