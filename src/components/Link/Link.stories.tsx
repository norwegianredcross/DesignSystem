// src/components/Link/Link.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Link, LinkProps } from './index';
import { Paragraph } from '@digdir/designsystemet-react';
// --- Import Icon ---
import { EnvelopeClosedIcon } from '@navikt/aksel-icons'; // Example icon for contact

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Link is a clickable text or graphic for navigation, based on the anchor tag.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to display inside the link.',
      defaultValue: 'Gå til designsystemet',
    },
    href: {
      control: 'text',
      description: 'The URL the link points to.',
      defaultValue: 'https://designsystemet.no/',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'accent',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    target: { control: 'text' },
    rel: { control: 'text' },
  } as ArgTypes<LinkProps>,
};

export default meta;

type Story = StoryObj<typeof Link>;

// --- Example Default ---
export const Default: Story = {
  name: 'Example Default',
  args: {
    children: 'Gå til designsystemet',
    href: 'https://designsystemet.no/',
  },
};

// --- Example Link within Text ---
export const InText: Story = {
  name: 'Example Link within Text',
  render: (args) => (
    <Paragraph data-size={args['data-size']} data-color={args['data-color']}>
      Vi bruker komponenter fra et{' '}
      <Link {...args}>fantastisk designsystem</Link>.
    </Paragraph>
  ),
  args: {
    children: 'fantastisk designsystem',
    href: 'https://designsystemet.no/',
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Example Link with Icon ---
export const WithIcon: Story = {
  name: 'Example Link with Icon',
  render: (args) => (
    <Link {...args}>
      {/* Add icon before text */}
      <EnvelopeClosedIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)', verticalAlign: 'middle' }} />
      {args.children} {/* Use children from args */}
    </Link>
  ),
  args: {
    children: 'Kontakt oss',
    href: 'mailto:designsystem@digdir.no', // Use mailto link
    'data-size': 'md',
    'data-color': 'accent',
  },
};

// --- Example Different Color and Size ---
export const LargeNeutral: Story = {
  name: 'Example Large Neutral',
  args: {
    children: 'Stor nøytral lenke',
    href: '#',
    'data-size': 'lg',
    'data-color': 'neutral',
  },
};

// --- Example External Link ---
export const External: Story = {
  name: 'Example External Link',
  args: {
    children: 'Ekstern Lenke (Ny Fane)',
    href: 'https://www.digdir.no/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
