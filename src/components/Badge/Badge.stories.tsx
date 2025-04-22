import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Badge, BadgeProps, BadgePosition } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'The number to display in the badge',
    },
    maxCount: {
      control: 'number',
      description: 'The maximum number to display in the badge, when the count exceeds this number, the badge will display {max}+',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['base', 'tinted'],
      description: 'Change the background color of the badge.',
      defaultValue: 'base',
    },
    'data-color': {
      control: 'select',
      options: [
        'accent',
        'brand1',
        'brand2',
        'brand3',
        'neutral',
        'danger',
        'info',
        'success',
      ],
      description: 'Change the color scheme of the badge',
      defaultValue: 'accent',
    },
  } as ArgTypes<BadgeProps>,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};

export const WithCount: Story = {
  args: {
    count: 7,
  },
};

export const WithMaxCount: Story = {
  args: {
    count: 15,
    maxCount: 9,
  },
};

export const LargeDangerTinted: Story = {
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted',
  },
};

export const StatusOnly: Story = {
  args: {
    // No count: just a status dot
    'data-color': 'success',
  },
};

export const FloatingOverElement: Story = {
  render: (args) => (
    <BadgePosition>
      <Badge {...args} />
      <span
        style={{
          display: 'inline-block',
          width: 40,
          height: 40,
          background: '#eee',
          borderRadius: '50%',
          marginLeft: 16,
        }}
      />
    </BadgePosition>
  ),
  args: {
    count: 3,
    'data-color': 'info',
  },
};
