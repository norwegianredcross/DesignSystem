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
