import { createElement as h } from 'react';
import { Avatar } from '../../src/components/Avatar';
import { EXPERIMENTAL_AvatarStack } from '../../src/components/AvatarStack';

export function renderAvatarStack() {
  return h(
    EXPERIMENTAL_AvatarStack,
    { 'aria-label': 'Participants' },
    h(
      'li',
      null,
      h(
        Avatar,
        { asChild: true, 'aria-label': 'Ola Nordmann' },
        h('a', { href: '/person/ola' }, 'ON')
      )
    ),
    h(
      'li',
      null,
      h(
        Avatar,
        { asChild: true, 'aria-label': 'Kari Hansen' },
        h('a', { href: '/person/kari' }, 'KH')
      )
    ),
    h('li', null, '+5 participants')
  );
}
