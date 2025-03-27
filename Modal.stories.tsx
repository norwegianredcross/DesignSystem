import React from 'react';
import { Modal } from './Modal'; // Adjust the import path to your Modal component
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Komponenter/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: Story<{ isOpen: boolean; title: string; content: string }> = (args) => (
  <Modal {...args} />
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  title: 'Modal Title',
  content: 'This is the modal content.',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  title: 'Modal Title',
  content: 'This is the modal content.',
};
