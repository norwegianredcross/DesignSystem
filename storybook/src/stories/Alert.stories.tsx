import React from 'react';
import { Meta, Story } from '@storybook/react';
// Replace with the actual path to your Alert component
import { Alert } from '@digdir/designsystemet-react';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'], // Ensure these variants exist
    },
    message: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  message: 'This is an informational alert with sample text.',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: 'This is a success alert with sample text.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  message: 'This is a warning alert with sample text.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  message: 'This is an error alert with sample text.',
};
