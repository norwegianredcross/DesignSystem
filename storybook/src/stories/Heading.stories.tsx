import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@digdir/designsystemet-react';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Heading Text',
    level: 1,
    'data-size': 'lg',
  },
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    'data-size': 'lg',
  },
};

export const Medium: Story = {
  args: {
    'data-size': 'md',
  },
};

export const Small: Story = {
  args: {
    'data-size': 'sm',
  },
};

export const Level1: Story = {
  args: {
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    level: 3,
  },
};
