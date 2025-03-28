import React from 'react';
import { Card } from '@digdir/designsystemet-react'; // Correct import
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Komponenter/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
} as Meta;

const Template: Story<{ title: string; content: string }> = (args) => (
  <Card>
    <Card.Block>{args.title}</Card.Block>
    <Card.Block>{args.content}</Card.Block>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the card content.',
};