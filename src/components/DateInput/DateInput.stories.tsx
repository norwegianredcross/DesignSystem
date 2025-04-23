// src/components/DateInput/DateInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './index';
import { CalendarIcon } from '../../assets/images/CalendarIcon';

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

// --- Default Example ---
export const Default: Story = {
  args: {
    label: 'Select a date',
    placeholder: 'dd.mm.åååå',
    suffixIcon: <CalendarIcon />,
  },
};

// --- Example with Value ---
export const WithValue: Story = {
  name: 'Example with Value',
  args: {
    ...Default.args,
    value: '24.12.2023',
  },
};

// --- Example with Error ---
export const WithError: Story = {
  name: 'Example with Error', 
  args: {
    ...Default.args,
    error: 'Invalid date format',
    value: 'Invalid Date',
  },
};

// --- Example with Disabled State ---
export const Disabled: Story = {
  name: 'Example with Disabled State', 
  args: {
    ...Default.args,
    disabled: true,
    value: '01.01.2024',
  },
};

// --- Example without Suffix Icon ---
export const NoSuffixIcon: Story = {
  name: 'Example without Suffix Icon', 
  args: {
    label: 'Enter your birthday',
    placeholder: 'dd.mm.åååå',
  },
};
