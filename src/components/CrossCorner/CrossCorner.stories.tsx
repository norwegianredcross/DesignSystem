import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { CrossCorner } from './index';

const meta = {
  title: 'Components/CrossCorner (Deprecated)',
  component: CrossCorner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Deprecated alias for GraphicElement. Use GraphicElement for new work.',
      },
    },
  },
} satisfies Meta<typeof CrossCorner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LegacyAngle: Story = {
  args: {
    shape: 'angle',
    position: 'top-right',
    size: 'sm',
    'data-color': 'secondary-color-rust',
    'aria-hidden': false,
    'aria-label': 'Dekorativ vinkel',
  },
};

export const TestAliasContract: Story = {
  name: 'Test: Deprecated Alias Contract',
  tags: ['!autodocs'],
  args: {
    shape: 'angle',
    variant: 'outline',
    position: 'bottom-right',
    size: 'sm',
    'aria-hidden': false,
    'aria-label': 'Røde Kors-vinkel',
  },
  play: async ({ canvasElement }) => {
    const graphic = within(canvasElement).getByRole('img', {
      name: 'Røde Kors-vinkel',
    });

    await expect(graphic.tagName).toBe('svg');
    await expect(graphic).toHaveAttribute('data-shape', 'angle');
    await expect(graphic).toHaveAttribute('data-variant', 'outline');
    await expect(graphic).toHaveAttribute('viewBox', '0 0 68 68');
    await expect(graphic).toHaveAttribute('width', '48');
    await expect(graphic).toHaveAttribute('height', '48');
    await expect(graphic.querySelector('path')).toHaveAttribute('d', 'M0 0H68V68');
  },
};
