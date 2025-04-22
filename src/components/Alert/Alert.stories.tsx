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

export const Info: Story = {
  args: {
    'data-color': 'info',
    children: 'This is an informational alert.',
    title: 'Information',
  } as AlertProps,
};

export const Warning: Story = {
  args: {
    'data-color': 'warning',
    children: 'Proceed with caution.',
    title: 'Warning',
  } as AlertProps,
};

export const Success: Story = {
  args: {
    'data-color': 'success',
    children: 'Operation completed successfully.',
    title: 'Success',
  } as AlertProps,
};

export const Danger: Story = {
  args: {
    'data-color': 'danger',
    children: 'An error occurred.',
    title: 'Error',
  } as AlertProps,
};

export const NoTitle: Story = {
  args: {
    'data-color': 'info',
    children: 'This alert has no title.',
  } as AlertProps,
};
