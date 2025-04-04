import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@digdir/designsystemet-react';

type CardProps = React.ComponentProps<typeof Card>;

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'This is a card component.',
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <h3>Card Header</h3>
        <p>This is a card with a header.</p>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <p>This is a card with a footer.</p>
        <footer>Footer Content</footer>
      </>
    ),
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <p>This is a card with an image.</p>
      </>
    ),
  },
};