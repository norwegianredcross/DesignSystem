// src/components/Card/Card.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Card, CardProps, CardBlock } from './index';
import { Buttons } from '../Buttons';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'tinted'],
      description: 'Change the background color of the card.',
      defaultValue: 'default',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'neutral',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element (e.g., <a> or <button>)',
      defaultValue: false,
    },
    children: {
      control: false,
      description: 'Card content (ReactNode)',
    },
  } as ArgTypes<CardProps>,
};

export default meta;

type Story = StoryObj<typeof Card>;

// --- Default, Tinted, WithImage stories remain the same ---
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardBlock>
        <h3>Card Title</h3>
        <p>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this.
        </p>
      </CardBlock>
      <CardBlock>
        <p>Another block of content.</p>
      </CardBlock>
      <CardBlock>
        <small>Footer text</small>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'neutral',
    variant: 'default',
  },
};

export const Tinted: Story = {
  render: (args) => (
    <Card {...args}>
      <CardBlock>
        <h3>Tinted Card</h3>
        <p>This card uses the tinted variant.</p>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'accent',
    variant: 'tinted',
  },
};

export const WithImage: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: '300px' }}>
      <CardBlock>
        <img
          src="https://www.altinn.no/images/skd.svg"
          alt="Skatteetaten logo"
          style={{ width: '100%', display: 'block' }}
        />
      </CardBlock>
      <CardBlock>
        <h3>Card with Image</h3>
        <p>The image is in a block with no padding.</p>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'neutral',
  },
};
// --- End unchanged stories ---

export const AsLink: Story = {
  // The render function now just renders the Card with its args.
  // The magic happens in args.children below.
  render: (args) => <Card {...args} style={{ maxWidth: '300px' }} />,
  args: {
    asChild: true,
    // The SINGLE child passed to Card is the <a> tag.
    // The visual content goes INSIDE the <a> tag.
    children: (
      <a href="https://designsystemet.no/">
        <h3>Link Card</h3>
        <p>This entire card is a link.</p>
      </a>
    ),
    'data-color': 'brand1',
    variant: 'tinted',
  },
};

export const AsButton: Story = {
  // The render function now just renders the Card with its args.
  render: (args) => <Card {...args} style={{ maxWidth: '300px' }} />,
  args: {
    asChild: true,
    // The SINGLE child passed to Card is the <button> tag.
    // The visual content goes INSIDE the <button> tag.
    children: (
      <button type="button" onClick={() => alert('Card clicked!')}>
        <h3>Button Card</h3>
        <p>This entire card is a button.</p>
      </button>
    ),
    'data-color': 'brand2',
  },
};

// --- ComposedContent story remains the same ---
export const ComposedContent: Story = {
  render: (args) => (
    <Card {...args}>
      <CardBlock>
        <h3>Composed Card</h3>
        <p>This card contains other components.</p>
        <div style={{ marginTop: 'var(--ds-spacing-4)' }}>
          <Buttons variant="primary" data-size="sm">
            Action
          </Buttons>
        </div>
      </CardBlock>
      <CardBlock>
        <small>Footer with more info</small>
      </CardBlock>
    </Card>
  ),
  args: {
    'data-color': 'neutral',
    variant: 'tinted',
  },
};
