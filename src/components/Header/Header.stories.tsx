import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Header } from './index';
import avatarPlaceholder from '../../assets/images/person2.jpg';

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
    extensionColor: {
      control: 'select',
      options: ['primary', 'neutral', 'tinted'],
      description: 'Background color variant for the top bar. "tinted" uses a soft pink background.',
    },
    userName: {
      control: 'text',
      description: 'Display name shown next to the avatar. Falls back to "Frodo Baggins" if omitted.',
    },
    userInitials: {
      control: 'text',
      description: 'Initials rendered inside the avatar. Auto-derived from userName if omitted.',
    },
    userAvatarSrc: {
      control: 'text',
      description: 'Avatar image URL. Takes precedence over initials when provided.',
    },
    onUserClick: {
      action: 'user-clicked',
      description: 'Click handler on the user block. When set, the block becomes a keyboard-accessible button.',
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

export const WithRealUser: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Daniel Barlag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass `userName` and the avatar initials are auto-derived (here: "DB").',
      },
    },
  },
};

export const WithExplicitInitials: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Ola',
    userInitials: 'ON',
  },
  parameters: {
    docs: {
      description: {
        story: 'Override auto-derivation by supplying `userInitials` explicitly.',
      },
    },
  },
};

export const WithAvatarImage: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Kari Hansen',
    userAvatarSrc: avatarPlaceholder,
  },
  parameters: {
    docs: {
      description: {
        story: 'When `userAvatarSrc` is provided, the avatar renders the image instead of initials.',
      },
    },
  },
};

export const ClickableUser: Story = {
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
    userName: 'Daniel Barlag',
    onUserClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'When `onUserClick` is provided, the user block becomes a keyboard-accessible button (role="button", tabIndex=0, Enter/Space activation).',
      },
    },
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

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  args: {
    showUser: true,
    showSearch: true,
    showLogin: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Logo link should be present
    const logoLink = canvas.getByRole('link', { name: /hjem/i });
    expect(logoLink).toBeInTheDocument();

    // Menu button should be present and toggle
    const menuButton = canvas.getByRole('button', { name: /meny/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(menuButton);

    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    // Close menu
    await userEvent.click(menuButton);

    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    // Search button should be present and toggle
    const searchButton = canvas.getByRole('button', { name: /søk/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(searchButton);

    await waitFor(() => {
      expect(searchButton).toHaveAttribute('aria-expanded', 'true');
    });
  },
};

export const TestUserClick: Story = {
  name: 'Test: User block click',
  args: {
    showUser: true,
    showSearch: false,
    showLogin: false,
    userName: 'Ola Nordmann',
    onUserClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Name renders and initials derive to "ON"
    // DigDir Avatar exposes initials via data-initials (CSS pseudo-element), not text content.
    expect(canvas.getByText('Ola Nordmann')).toBeInTheDocument();
    expect(canvas.getByLabelText('Ola Nordmann')).toHaveAttribute('data-initials', 'ON');

    // Block is a keyboard-accessible button
    const userBlock = canvas.getByRole('button', { name: /Ola Nordmann/i });
    expect(userBlock).toHaveAttribute('tabIndex', '0');

    await userEvent.click(userBlock);
    await waitFor(() => {
      expect(args.onUserClick).toHaveBeenCalledTimes(1);
    });
  },
};
