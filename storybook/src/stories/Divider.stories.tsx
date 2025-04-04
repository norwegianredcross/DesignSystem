import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@digdir/designsystemet-react';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSpacing: Story = {
  args: {
    style: { margin: '20px 0' },
  },
};

export const ThickDivider: Story = {
  args: {
    style: { borderWidth: '3px' },
  },
};
