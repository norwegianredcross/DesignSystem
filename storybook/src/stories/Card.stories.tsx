import React from 'react';
import { Meta, Story } from '@storybook/react';
// Replace with the actual path to your Card component
import { Card } from '@digdir/designsystemet-react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'], // Ensure these variants exist
    },
    clickable: { control: 'boolean' }, // Example: Add clickable prop if supported
  },
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card Title',
  content: 'This is a sample content for the default card.',
  variant: 'default',
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: 'Outlined Card Title',
  content: 'This is a sample content for the outlined card.',
  variant: 'outlined',
};

export const Elevated = Template.bind({});
Elevated.args = {
  title: 'Elevated Card Title',
  content: 'This is a sample content for the elevated card.',
  variant: 'elevated',
};

export const Clickable = Template.bind({});
Clickable.args = {
  title: 'Clickable Card Title',
  content: 'This is a sample content for the clickable card.',
  variant: 'default',
  clickable: true,
};