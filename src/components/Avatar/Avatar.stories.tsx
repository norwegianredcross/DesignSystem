// src/components/Avatar/Avatar.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Avatar, AvatarProps } from './index';
import avatarPlaceholder from '../../assets/images/person2.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'The name of the person the avatar represents.',
      defaultValue: 'Ola Nordmann',
    },
    variant: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'The shape of the avatar.',
      defaultValue: 'circle',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Color variant.',
      defaultValue: 'accent',
    },
    'data-size': {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the avatar.',
      defaultValue: 'md',
    },
    initials: {
      control: 'text',
      description: 'Initials to display inside the avatar.',
    },
    children: {
      control: 'text',
      description: 'Image, icon or initials to display inside the avatar.',
    },
  } as ArgTypes<AvatarProps>,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// --- Example Default ---
export const Default: Story = {
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann',
  },
};

// --- Example with Initials ---
export const WithInitials: Story = {
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON',
  },
};

// --- Example with Image ---
export const WithImage: Story = {
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: (
      <img
        src={avatarPlaceholder}
        alt="" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
};

// --- Example Square ---
export const Square: Story = {
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON',
  },
};

// --- INTERACTION TESTS ---

/**
 * Tests the text modes of the Avatar: it is exposed as role="img" named via
 * aria-label; the initials prop is carried on data-initials (rendered by
 * CSS), string children render as visible text, and an avatar without
 * children or initials still works as a labelled fallback. Size, color and
 * variant are reflected as data attributes.
 */
export const TestInitialsAndAttributes: Story = {
  name: 'Test: Initials, Fallback And Attributes',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar aria-label="Kari Nordmann" initials="KN" />
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
      <Avatar aria-label="Per Hansen" />
      <Avatar
        aria-label="Anne Larsen"
        initials="AL"
        variant="square"
        data-size="lg"
        data-color="brand1"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Every avatar is an img labelled with the person's name
    const kari = canvas.getByRole('img', { name: 'Kari Nordmann' });
    const ola = canvas.getByRole('img', { name: 'Ola Nordmann' });
    const per = canvas.getByRole('img', { name: 'Per Hansen' });
    const anne = canvas.getByRole('img', { name: 'Anne Larsen' });

    // Initials are exposed on data-initials (visualized by CSS)
    expect(kari).toHaveAttribute('data-initials', 'KN');
    expect(kari).toHaveAttribute('data-variant', 'circle'); // default shape

    // String children render as visible text inside the avatar
    expect(within(ola).getByText('ON')).toBeVisible();
    expect(ola).not.toHaveAttribute('data-initials');

    // Fallback: no children and no initials still yields a labelled avatar
    expect(per).not.toHaveAttribute('data-initials');
    expect(per.textContent).toBe('');

    // Size, color and shape are reflected as attributes
    expect(anne).toHaveAttribute('data-variant', 'square');
    expect(anne).toHaveAttribute('data-size', 'lg');
    expect(anne).toHaveAttribute('data-color', 'brand1');
    expect(anne).toHaveAttribute('data-initials', 'AL');
  },
};

/**
 * Tests image mode: the avatar wrapper keeps the accessible name while the
 * inner img is automatically hidden from assistive technology (aria-hidden)
 * so the name is not announced twice.
 */
export const TestImageMode: Story = {
  name: 'Test: Image Mode Accessibility',
  render: () => (
    <Avatar aria-label="Ola Nordmann">
      <img
        src={avatarPlaceholder}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Avatar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The avatar wrapper is the accessible img, named by aria-label
    const avatar = canvas.getByRole('img', { name: 'Ola Nordmann' });
    expect(avatar.tagName).toBe('SPAN');

    // The actual photo is decorative: hidden from AT by the component
    const photo = avatar.querySelector('img') as HTMLImageElement;
    expect(photo).toHaveAttribute('aria-hidden', 'true');
    expect(photo).toHaveAttribute('alt', '');
    expect(photo.src).toContain('person2');

    // Exactly one accessible img is exposed (no double announcement)
    expect(canvas.getAllByRole('img')).toHaveLength(1);
  },
};

