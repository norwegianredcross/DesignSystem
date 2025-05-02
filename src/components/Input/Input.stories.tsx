// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState } from 'react';
import { Input, InputProps } from './index';
import { Label, Paragraph } from '@digdir/designsystemet-react'; // Import Label

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Input is a basic form element for collecting user data. Use Label for accessibility.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates an error state for accessibility',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disables element',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      description: 'Toggle readOnly',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: [
        'text', 'number', 'email', 'password', 'search', 'tel', 'url', 'date',
        'datetime-local', 'month', 'week', 'time', 'color', 'file', 'hidden',
      ],
      description: 'Supported input types',
      defaultValue: 'text',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'neutral',
    },
    size: {
      control: 'number',
      description: 'HTML size attribute (input width in characters).',
    },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    id: { control: 'text' },
    'aria-labelledby': { control: 'text' },
  } as ArgTypes<InputProps>,
};

export default meta;

type Story = StoryObj<typeof Input>;

// --- Example Basic ---
export const Default: Story = {
  name: 'Example Basic',
  render: (args) => (
    <>
      <Label id="input-default-label" htmlFor="input-default">Input Label</Label>
      <Input
        id="input-default"
        aria-labelledby="input-default-label"
        placeholder="Type something..."
        {...args}
      />
    </>
  ),
  args: {
    type: 'text',
    name: 'default-input',
    'data-size': 'md',
  },
};

// --- Example Email Type ---
export const EmailType: Story = {
  name: 'Example Email Type',
  render: (args) => (
    <>
      <Label id="input-email-label" htmlFor="input-email">Email Address</Label>
      <Input
        id="input-email"
        aria-labelledby="input-email-label"
        placeholder="your.email@example.com"
        {...args}
      />
    </>
  ),
  args: {
    type: 'email',
    name: 'email-input',
    'data-size': 'md',
  },
};

// --- Example HTML Size Attribute ---
export const HtmlSize: Story = {
    name: 'Example HTML Size Attribute',
    render: (args) => (
      <div>
        <Label id="input-size-label" htmlFor="input-size">Input with size=10</Label>
        <Input
          id="input-size"
          aria-labelledby="input-size-label"
          {...args}
        />
      </div>
    ),
    args: {
      type: 'text',
      name: 'size-input',
      size: 10, 
      'data-size': 'md', 
    },
  };
  
// --- Example Disabled ---
export const Disabled: Story = {
  name: 'Example Disabled',
  render: (args) => (
    <>
      <Label id="input-disabled-label" htmlFor="input-disabled">Disabled Input</Label>
      <Input
        id="input-disabled"
        aria-labelledby="input-disabled-label"
        value="Cannot edit"
        {...args}
      />
    </>
  ),
  args: {
    type: 'text',
    name: 'disabled-input',
    disabled: true,
    'data-size': 'md',
  },
};

// --- Example ReadOnly ---
export const ReadOnly: Story = {
  name: 'Example ReadOnly',
  render: (args) => (
    <>
      <Label id="input-readonly-label" htmlFor="input-readonly">Read Only Input</Label>
      <Input
        id="input-readonly"
        aria-labelledby="input-readonly-label"
        value="Cannot change, but can copy"
        {...args}
      />
    </>
  ),
  args: {
    type: 'text',
    name: 'readonly-input',
    readOnly: true,
    'data-size': 'md',
  },
};

// --- Example Invalid State ---
export const Invalid: Story = {
  name: 'Example Invalid State',
  render: (args) => (
    <>
      <Label id="input-invalid-label" htmlFor="input-invalid">Invalid Input</Label>
      <Input
        id="input-invalid"
        aria-labelledby="input-invalid-label"
        value="Incorrect value"
        {...args}
      />
    </>
  ),
  args: {
    type: 'text',
    name: 'invalid-input',
    'aria-invalid': true,
    'data-size': 'md',
  },
};


// --- Example Controlled ---
export const Controlled: Story = {
  name: 'Example Controlled',
  render: (args) => {
    const [inputValue, setInputValue] = useState('Initial Value');
    return (
      <>
        <Label id="input-controlled-label" htmlFor="input-controlled">Kontroller meg!</Label>
        <Input
          id="input-controlled"
          aria-labelledby="input-controlled-label"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...args}
        />
        <Paragraph style={{ marginTop: '8px' }}>Du har skrevet inn: {inputValue}</Paragraph>
      </>
    );
  },
  args: {
    type: 'text',
    name: 'controlled-input',
    'data-size': 'md',
  },
};
