import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { ValidationMessage } from './index';

const meta: Meta<typeof ValidationMessage> = {
  title: 'Components/ValidationMessage',
  component: ValidationMessage,
  tags: ['autodocs'],
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Text size',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ValidationMessage>;

export const Default: Story = {
  args: {
    children: 'Feltet er påkrevd.',
  },
};

export const LongMessage: Story = {
  args: {
    children: 'E-postadressen er ikke gyldig. Kontroller at adressen er skrevet riktig, for eksempel navn@example.com.',
  },
};

// --- INTERACTION TESTS ---

export const TestRendersMessage: Story = {
  name: 'Test: Renders Message',
  args: {
    children: 'Passordet må være minst 8 tegn.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const message = canvas.getByText('Passordet må være minst 8 tegn.');
    expect(message).toBeInTheDocument();
  },
};
