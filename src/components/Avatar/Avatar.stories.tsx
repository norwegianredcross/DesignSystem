// src/components/Avatar/Avatar.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
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

