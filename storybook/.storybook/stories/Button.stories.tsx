import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from "@digdir/designsystemet-react";

export default {
  title: 'Komponenter/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'], // Adjust based on your component's variants
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'], // Adjust based on your component's sizes
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<{ variant: string; size: string; disabled: boolean; children: string }> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  disabled: false,
  children: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'medium',
  disabled: true,
  children: 'Disabled Button',
};
