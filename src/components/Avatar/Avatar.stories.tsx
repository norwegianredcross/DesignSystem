import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Avatar, AvatarProps } from './index';

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

export const Default: Story = {
  args: {
    'aria-label': 'Ola Nordmann',
  },
};

export const WithInitials: Story = {
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON',
  },
};

export const WithImage: Story = {
  args: {
    'aria-label': 'Ola Nordmann',
    children: (
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
};

export const Square: Story = {
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON',
  },
};

export const Brand2Large: Story = {
  args: {
    'aria-label': 'Ola Nordmann',
    'data-color': 'brand2',
    'data-size': 'lg',
    children: 'ON',
  },
};
