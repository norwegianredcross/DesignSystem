import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        desktop: {
          name: 'Desktop 1366px',
          styles: {
            width: '1366px',
            height: '900px',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
    },
    docs: {
      // Use the MDX file for documentation
      page: null, 
    },
  },
  argTypes: {
    'data-color': {
      control: 'select',
      options: ['primary', 'neutral'],
      description: 'Background color for the header extension (top bar): primary uses primary-color-red-base-default, neutral uses neutral-base-default',
      defaultValue: 'primary',
    },
    showUser: {
      control: 'boolean',
      description: 'Show user profile information (avatar/name)',
      defaultValue: true,
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search toggle button',
      defaultValue: true,
    },
    showLogin: {
      control: 'boolean',
      description: 'Show login link',
      defaultValue: true,
    },
    children: {
      control: 'text',
      description: 'Content to display in the expandable menu',
    },
    secondaryLogo: {
      control: 'boolean',
      description: 'Show a secondary logo next to the main logo',
      defaultValue: false,
    },
    secondaryLogoSrc: {
      control: 'text',
      description: 'Source URL for the secondary logo',
    },
    secondaryLogoAlt: {
      control: 'text',
      description: 'Alt text for the secondary logo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
  },
};

export const Guest: Story = {
  args: {
    showUser: false,
    showSearch: true,
    showLogin: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuration for a non-authenticated user (Guest). Shows login link instead of user profile.',
      },
    },
  },
};

export const NoSearch: Story = {
  args: {
    showUser: true,
    showSearch: false,
    showLogin: false,
  },
};

export const Mobile: Story = {
  args: {
    showUser: true, // On mobile, name is hidden via CSS, only avatar shown
    showSearch: true,
    showLogin: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const WithSecondaryLogo: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    secondaryLogo: true,
    secondaryLogoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Figma-1-logo.png/640px-Figma-1-logo.png',
    secondaryLogoAlt: 'Figma Logo',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a secondary logo displayed next to the main logo, separated by a divider.',
      },
    },
  },
};

export const WithMenuContent: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    children: (
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--ds-color-text-default)' }}>Design</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--ds-color-text-default)' }}>Komponenter</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--ds-color-text-default)' }}>Kode</a>
      </div>
    ),
  },
};

export const NeutralColor: Story = {
  args: {
    'data-color': 'neutral',
    showUser: true,
    showSearch: true,
    showLogin: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with neutral background color for the top bar (neutral-base-default).',
      },
    },
  },
};
