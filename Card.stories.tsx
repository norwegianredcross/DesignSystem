import React from 'react';
import { Card } from './Card'; // Adjust the import path to your Card component
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Komponenter/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
} as Meta;

const Template: Story<{ title: string; content: string }> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the card content.',
};
