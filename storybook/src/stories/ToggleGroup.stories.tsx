import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from '@digdir/designsystemet-react';

type ToggleGroupProps = React.ComponentProps<typeof ToggleGroup>;

const meta: Meta<ToggleGroupProps> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'neutral', 'primary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<ToggleGroupProps>;

const Template = (args: ToggleGroupProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelected(value);
    args.onChange?.(value);
  };

  return (
    <ToggleGroup {...args} value={selected} onChange={handleChange}>
      <ToggleGroup.Item value="option1">Option 1 - Sample Text</ToggleGroup.Item>
      <ToggleGroup.Item value="option2">Option 2 - Sample Text</ToggleGroup.Item>
      <ToggleGroup.Item value="option3">Option 3 - Sample Text</ToggleGroup.Item>
    </ToggleGroup>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    variant: 'default',
    size: 'md',
  },
};

export const Neutral: Story = {
  render: Template,
  args: {
    variant: 'neutral',
    size: 'md',
  },
};

export const Primary: Story = {
  render: Template,
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const Small: Story = {
  render: Template,
  args: {
    variant: 'default',
    size: 'sm',
  },
};

export const Large: Story = {
  render: Template,
  args: {
    variant: 'default',
    size: 'lg',
  },
};
