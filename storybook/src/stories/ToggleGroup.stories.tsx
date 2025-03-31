import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
// Replace with the actual path to your ToggleGroup component
import { ToggleGroup } from '@digdir/designsystemet-react';

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neutral', 'primary'], // Ensure these variants exist
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'], // Ensure these sizes exist
    },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story = (args) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelected(value);
    args.onChange(value);
  };

  return (
    <ToggleGroup {...args} value={selected} onChange={handleChange}>
      <ToggleGroup.Item value="option1">Option 1 - Sample Text</ToggleGroup.Item>
      <ToggleGroup.Item value="option2">Option 2 - Sample Text</ToggleGroup.Item>
      <ToggleGroup.Item value="option3">Option 3 - Sample Text</ToggleGroup.Item>
    </ToggleGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'md',
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  size: 'md',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
};
