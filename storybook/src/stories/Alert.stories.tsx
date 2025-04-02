import React from 'react';
import { Alert } from '@digdir/designsystemet-react';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Komponenter/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'], // Variants available in the library
    },
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<{ variant: string; children: string }> = (args) => (
  <Alert data-color={args.variant}>
    {args.children}
  </Alert>
);

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'This is an informational alert.',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'This is a success alert.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'This is a warning alert.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'This is an error alert.',
};
