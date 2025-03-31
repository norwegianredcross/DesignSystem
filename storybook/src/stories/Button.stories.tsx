import React from 'react';
import { Meta, Story } from '@storybook/react';
// Ensure the Button component exists in the package
import { Button } from '@digdir/designsystemet-react'; // Replace with the correct path if necessary

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'], // Ensure these variants exist
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'], // Ensure these sizes exist
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  label: 'Primary Button - Click Me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  label: 'Secondary Button - Learn More',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'md',
  label: 'Tertiary Button - Explore',
};
