// src/components/DateInput/DateInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './index';
import { CalendarIcon } from '../../assets/images/CalendarIcon'; // Adjust path as needed

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  tags: ['autodocs'], // Optional: Generates documentation
  parameters: {
    // Optional: Add any parameters specific to this component's stories
  },
  argTypes: {
    // Optional: Configure how controls appear in Storybook
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    description: { control: 'text' },
    // You can add controls for other props here
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

// Default state story
export const Default: Story = {
  args: {
    label: 'Select a date',
    placeholder: 'dd.mm.åååå',
    suffixIcon: <CalendarIcon />,
    // You can add value or other initial state here
  },
};

// Story with a pre-filled value
export const WithValue: Story = {
  args: {
    ...Default.args, // Inherit default args
    value: '24.12.2023',
  },
};

// Story with error state
export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Invalid date format',
    // You might also add an invalid value here
    value: 'Invalid Date',
  },
};

// Story with disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: '01.01.2024', // Still can show value when disabled
  },
};

// Story without suffix icon
export const NoSuffixIcon: Story = {
    args: {
        label: 'Enter your birthday',
        placeholder: 'dd.mm.åååå',
        // No suffixIcon provided
    }
}
