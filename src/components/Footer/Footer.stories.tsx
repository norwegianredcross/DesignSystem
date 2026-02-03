import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { Footer, FooterProps } from './index';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer component with newsletter signup, navigation links, contact information, and optional CrossCorner decorations.',
      },
    },
  },
  argTypes: {
    'data-color': {
      control: 'select',
      options: ['primary', 'additional', 'neutral'],
      description: 'Background color for the main section.',
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    showCrossCorners: {
      control: 'boolean',
      description: 'Show CrossCorner decorative elements.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    hideNewsletter: {
      control: 'boolean',
      description: 'Hide the newsletter signup section.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    newsletterDescription: {
      control: 'text',
      description: 'Description text for the newsletter section.',
    },
    newsletterPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the newsletter input.',
    },
    newsletterButtonText: {
      control: 'text',
      description: 'Button text for the newsletter submit button.',
    },
    shortcutsTitle: {
      control: 'text',
      description: 'Title for the shortcuts column.',
    },
    linksTitle: {
      control: 'text',
      description: 'Title for the links column.',
    },
    showPrimaryLogo: {
      control: 'boolean',
      description: 'Show primary (Red Cross) logo in white section.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    shortcutsLinks: {
      control: 'object',
      description: 'Shortcut links for the "Snarveier" column.',
    },
    linksLinks: {
      control: 'object',
      description: 'Links for the "Lenker" column.',
    },
    visitingAddress: {
      control: 'object',
      description: 'Visiting address lines.',
    },
    organizationNumber: {
      control: 'text',
      description: 'Organization number.',
    },
    email: {
      control: 'text',
      description: 'Email address.',
    },
  } as ArgTypes<FooterProps>,
};

export default meta;

type Story = StoryObj<typeof Footer>;

// --- Default (matches Figma design) ---
export const Default: Story = {
  name: 'Default',
  args: {
    'data-color': 'neutral',
    showCrossCorners: true,
  },
};

// --- Without CrossCorners ---
export const WithoutCrossCorners: Story = {
  name: 'Without CrossCorners',
  args: {
    'data-color': 'neutral',
    showCrossCorners: false,
  },
};

// --- With Slot Content ---
export const WithSlotContent: Story = {
  name: 'With Slot Content',
  args: {
    'data-color': 'neutral',
    showCrossCorners: true,
    whiteSectionSlot: (
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>SLOT</p>
        <p style={{ margin: 0, color: '#5d5d5d', fontSize: '14px' }}>Erstatt med eget innhold</p>
      </div>
    ),
  },
};

// --- Primary Color Background ---
export const PrimaryColor: Story = {
  name: 'Primary Color Background',
  args: {
    'data-color': 'primary',
    showCrossCorners: true,
  },
};

// --- Additional Color Background ---
export const AdditionalColor: Story = {
  name: 'Additional Color Background',
  args: {
    'data-color': 'additional',
    showCrossCorners: true,
  },
};

// --- Without Newsletter ---
export const WithoutNewsletter: Story = {
  name: 'Without Newsletter',
  args: {
    'data-color': 'neutral',
    showCrossCorners: true,
    hideNewsletter: true,
  },
};

// --- Custom Links ---
export const CustomLinks: Story = {
  name: 'Custom Links',
  args: {
    'data-color': 'neutral',
    showCrossCorners: true,
    shortcutsLinks: [
      { label: 'Hjem', href: '/' },
      { label: 'Om oss', href: '/om-oss' },
      { label: 'Tjenester', href: '/tjenester' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    linksLinks: [
      { label: 'Personvern', href: '/personvern' },
      { label: 'Vilkår', href: '/vilkar' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
};

// --- Custom Contact Info ---
export const CustomContactInfo: Story = {
  name: 'Custom Contact Info',
  args: {
    'data-color': 'neutral',
    showCrossCorners: true,
    visitingAddress: ['Karl Johans gate 1', '0154 Oslo'],
    organizationNumber: '123 456 789',
    email: 'kontakt@example.no',
  },
};
