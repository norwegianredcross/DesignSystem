// src/components/Alert/Alert.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Alert, AlertProps } from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    'data-color': {
      control: 'select',
      options: ['info', 'warning', 'success', 'danger'],
      description: 'The visual style of the alert.',
      table: {
        category: 'Appearance',
      },
    },
    children: {
      control: 'text',
      description: 'The content of the alert.',
    },
    title: {
      control: 'text',
      description: 'The title of the alert.',
    },
  } as ArgTypes<AlertProps>,
};

export default meta;

type Story = StoryObj<typeof Alert>;

// --- Example Info ---
export const Info: Story = {
  name: 'Example Info',
  args: {
    'data-color': 'info',
    children: 'This is an informational alert.',
    title: 'Information',
  } as AlertProps,
};

// --- Example Warning ---
export const Warning: Story = {
  name: 'Example Warning',
  args: {
    'data-color': 'warning',
    children: 'Proceed with caution.',
    title: 'Warning',
  } as AlertProps,
};

// --- Example Success ---
export const Success: Story = {
  name: 'Example Success',
  args: {
    'data-color': 'success',
    children: 'Operation completed successfully.',
    title: 'Success',
  } as AlertProps,
};

// --- Example Danger ---
export const Danger: Story = {
  name: 'Example Danger',
  args: {
    'data-color': 'danger',
    children: 'An error occurred.',
    title: 'Error',
  } as AlertProps,
};

// --- Example No Title ---
export const NoTitle: Story = {
  name: 'Example No Title',
  args: {
    'data-color': 'info',
    children: 'This alert has no title.',
  } as AlertProps,
};
