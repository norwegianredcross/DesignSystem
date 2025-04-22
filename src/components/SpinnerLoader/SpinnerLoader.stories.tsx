import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Spinner, SpinnerProps } from './index'; // Import the main Spinner component

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
    // Props directly available on DigDirSpinnerProps
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
    // aria-hidden is required by the type, but likely always true, so no control needed.
    'aria-hidden': { table: { disable: true } },
  } as ArgTypes<SpinnerProps>, // Use base SpinnerProps
};

export default meta;

type Story = StoryObj<typeof Spinner>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true, // FIX: Add required aria-hidden
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
    // aria-hidden is added directly in render
  },
  argTypes: {
    'data-size': { control: false },
    'aria-label': { control: 'text' }, // Keep label control for this story
  },
};

// --- Color Variants Story Removed ---
// (As data-color is not a valid prop)
