import React from 'react';
import { Card } from '@designsystemet.no/react'; // Import from designsystemet.no
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