import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Spinner, SpinnerProps } from './index'; 

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Spinner indicates that an action is in progress, like submitting a form.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'Accessible label describing the loading state.',
      defaultValue: 'Henter kaffi',
    },
    'data-size': {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spinner size',
      defaultValue: 'md',
    },
    'aria-hidden': { table: { disable: true } },
  } as ArgTypes<SpinnerProps>, 
};

export default meta;

type Story = StoryObj<typeof Spinner>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true, 
  },
};

// --- Size Variants ---
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {/* FIX: Add aria-hidden={true} to all instances */}
      <Spinner aria-label={args['aria-label']} data-size="2xs" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="xs" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="sm" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="md" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="lg" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="xl" aria-hidden={true} />
      {/* --- END FIX --- */}
    </div>
  ),
  args: {
    'aria-label': 'Laster...',
  },
  argTypes: {
    'data-size': { control: false },
    'aria-label': { control: 'text' }, 
  },
};

// --- In Button (Best Practices) ---
export const InButton: Story = {
  render: () => (
    <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px' }} aria-live="polite">
      <Spinner aria-hidden={true} data-size="sm" />
      Lagrer...
    </button>
  ),
  args: {
    'aria-label': 'Laster...',
  },
  name: 'In Button',
};

export const TestAccessibleAndDecorativeContracts: Story = {
  name: 'Test: Accessible And Decorative Contracts',
  tags: ['!autodocs'],
  render: () => (
    <div>
      <Spinner aria-label="Henter aktivitetsdata" data-size="lg" />
      <button type="button">
        <Spinner aria-hidden="true" data-size="sm" />
        Lagrer
      </button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelledSpinner = canvas.getByRole('img', {
      name: 'Henter aktivitetsdata',
    });
    const button = canvas.getByRole('button', { name: 'Lagrer' });
    const decorativeSpinner = button.querySelector('svg');

    await expect(labelledSpinner).toHaveAttribute('viewBox', '0 0 50 50');
    await expect(labelledSpinner).toHaveAttribute('data-size', 'lg');
    await expect(labelledSpinner.querySelectorAll('circle')).toHaveLength(2);
    await expect(decorativeSpinner).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toHaveAccessibleName('Lagrer');
  },
};
