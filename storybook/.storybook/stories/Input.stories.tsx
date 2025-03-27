import React from 'react';
import { Input } from '@designsystemet.no/react'; // Import from designsystemet.no
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Komponenter/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<{ placeholder: string; disabled: boolean }> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
};