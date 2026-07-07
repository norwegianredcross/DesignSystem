import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Label } from './index';
import { Input } from '../Input';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Text size',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold'],
      description: 'Font weight',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Fullt navn',
  },
};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-2)' }}>
      <Label htmlFor="label-demo-input">E-postadresse</Label>
      <Input id="label-demo-input" type="email" />
    </div>
  ),
};

// --- INTERACTION TESTS ---

export const TestLabelsInput: Story = {
  name: 'Test: Labels Input',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-2)' }}>
      <Label htmlFor="label-test-input">Telefonnummer</Label>
      <Input id="label-test-input" type="tel" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The label must be programmatically associated with the input
    const input = canvas.getByLabelText('Telefonnummer');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  },
};
