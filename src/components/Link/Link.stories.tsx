import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React from 'react';
import { Link, LinkProps } from './index'; // Import the main Link component
// Import components for context/examples
import { Paragraph } from '@digdir/designsystemet-react';
// Import an icon if needed for the icon example


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
    // Props directly available on DigDirLinkProps
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
      defaultValue: 'accent', // Default link color is often accent
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    // Standard anchor attributes like target, rel are passed via {...props}
    target: { control: 'text' },
    rel: { control: 'text' },
  } as ArgTypes<LinkProps>,
};

export default meta;

type Story = StoryObj<typeof Link>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    children: 'Gå til designsystemet',
    href: 'https://designsystemet.no/',
  },
};

// --- Link within Text ---
export const InText: Story = {
  render: (args) => (
    <Paragraph data-size={args['data-size']} data-color={args['data-color']}>
      Vi bruker komponenter fra et{' '}
      <Link {...args}>fantastisk designsystem</Link>.
    </Paragraph>
  ),
  args: {
    children: 'fantastisk designsystem', // Override default children for this story
    href: 'https://designsystemet.no/',
    'data-size': 'md',
    'data-color': 'neutral', // Example using neutral context
  },
  name: 'Link within Text',
};

// --- Link with Icon ---
export const WithIcon: Story = {
  render: (args) => (
    <Link {...args}>
      Kontakt oss
    </Link>
  ),
  args: {
    children: 'Kontakt oss', // Default children overridden by render content
    href: '#kontakt', // Example internal link
    'data-size': 'md',
    'data-color': 'accent',
  },
  name: 'Link with Icon',
};

// --- Different Color and Size ---
export const LargeNeutral: Story = {
  args: {
    children: 'Stor nøytral lenke',
    href: '#',
    'data-size': 'lg',
    'data-color': 'neutral',
  },
  name: 'Large Neutral',
};

// --- External Link Example (Optional: Add target/rel) ---
export const External: Story = {
  args: {
    children: 'Ekstern Lenke (Ny Fane)',
    href: 'https://www.digdir.no/',
    target: '_blank', // Open in new tab
    rel: 'noopener noreferrer', // Security measure for target="_blank"
  },
};
