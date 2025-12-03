import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showBadge: {
      control: 'boolean',
      description: 'Toggle the notification badge on the avatar',
    },
    showSearch: {
      control: 'boolean',
      description: 'Toggle the search button visibility',
    },
    showLogin: {
      control: 'boolean',
      description: 'Toggle the login link visibility',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    showBadge: true,
    showSearch: true,
    showLogin: true,
  },
};

export const NoBadge: Story = {
  args: {
    showBadge: false,
    showSearch: true,
    showLogin: true,
  },
};

export const Minimal: Story = {
  args: {
    showBadge: false,
    showSearch: false,
    showLogin: false,
  },
};

export const WithMenuContent: Story = {
  args: {
    showBadge: true,
    showSearch: true,
    showLogin: true,
    children: (
      <div style={{ padding: '2rem', background: 'var(--ds-color-neutral-background-subtle)' }}>
        <h2>Menu Content Area</h2>
        <p>This is where navigation links or other menu items would go.</p>
      </div>
    ),
  },
};

