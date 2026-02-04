import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React from 'react';
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
    variant: {
      control: 'select',
      options: ['default', 'contact'],
      description: 'Footer layout variant.',
      table: {
        defaultValue: { summary: 'default' },
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

// --- Contact Variant ---
// Example social media icons (inline SVGs for demonstration)
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const ContactVariant: Story = {
  name: 'Contact Variant',
  args: {
    variant: 'contact',
    'data-color': 'neutral',
    showCrossCorners: false,
    socialLinks: [
      { icon: <XIcon />, label: 'X', href: 'https://x.com/rodekors' },
      { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com/rodekors' },
      { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/company/rodekors' },
      { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com/rodekors' },
      { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://youtube.com/rodekors' },
    ],
    contactPersons: [
      {
        name: 'Eline Garberg',
        role: 'Prosjektleder',
        email: 'eline.garberg@redcross.no',
        phone: '453 55 776',
      },
      {
        name: 'Elise Kaurin',
        role: 'Leder',
        email: 'elise.kaurin@redcross.no',
        phone: '911 08 838',
      },
    ],
    legalLinks: [
      { label: 'Personvern', href: '/personvern' },
      { label: 'For presse', href: '/presse' },
      { label: 'Regler for innkjøp', href: '/innkjop' },
      { label: 'Varsling/Misconduct', href: '/varsling' },
    ],
    visitingAddress: ['Hausmannsgate 7 (Korsegården)', '0186 Oslo'],
    organizationNumber: '864 139 442',
    email: 'post@redcross.no',
  },
};

// --- Contact Variant with Primary Color ---
export const ContactVariantPrimary: Story = {
  name: 'Contact Variant (Primary)',
  args: {
    ...ContactVariant.args,
    'data-color': 'primary',
  },
};

// --- Contact Variant with Additional Color ---
export const ContactVariantAdditional: Story = {
  name: 'Contact Variant (Additional)',
  args: {
    ...ContactVariant.args,
    'data-color': 'additional',
  },
};

// --- Contact Variant with Titles ---
export const ContactVariantWithTitles: Story = {
  name: 'Contact Variant (With Titles)',
  args: {
    ...ContactVariant.args,
    socialLinksTitle: 'Følg oss',
    contactPersonsTitle: 'Kontakt',
  },
};

// --- Contact Variant with CrossCorners ---
export const ContactVariantWithCrossCorners: Story = {
  name: 'Contact Variant (With CrossCorners)',
  args: {
    ...ContactVariant.args,
    'data-color': 'additional',
    showCrossCorners: true,
  },
};
