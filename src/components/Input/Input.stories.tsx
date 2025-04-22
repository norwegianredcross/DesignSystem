import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React, { useState } from 'react'; // Import useState for controlled example
import { Input, InputProps } from './index'; // Import the main Input component
import { Label } from '@digdir/designsystemet-react'; // Import Label for accessibility

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
  },
  argTypes: {
    // Props directly available on DigDirInputProps
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
      options: [ // Common input types
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
      description: 'Defines the width of Input in count of characters (HTML size attribute).',
    },
    // Standard input attributes are usually passed via {...props}
    value: { control: 'text' }, // For controlled example
    placeholder: { control: 'text' },
    id: { control: 'text' },
    // aria-labelledby is needed if label text is not passed via label prop
    'aria-labelledby': { control: 'text' },
  } as ArgTypes<InputProps>,
};

export default meta;

type Story = StoryObj<typeof Input>;

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    <div>
      <Label id="input-default-label" htmlFor="input-default">Input Label</Label>
      <Input
        id="input-default"
        aria-labelledby="input-default-label"
        placeholder="Type something..."
        {...args}
      />
    </div>
  ),
  args: {
    type: 'text',
    name: 'default-input',
    'data-size': 'md',
  },
};

// --- Different Type Example ---
export const EmailType: Story = {
  render: (args) => (
    <div>
      <Label id="input-email-label" htmlFor="input-email">Email Address</Label>
      <Input
        id="input-email"
        aria-labelledby="input-email-label"
        placeholder="your.email@example.com"
        {...args}
      />
    </div>
  ),
  args: {
    type: 'email',
    name: 'email-input',
    'data-size': 'md',
  },
};

// --- HTML Size Attribute Example ---
export const HtmlSize: Story = {
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
    size: 10, // HTML size attribute
    'data-size': 'md', // Component size
  },
  name: 'HTML Size Attribute',
};

// --- Disabled Example ---
export const Disabled: Story = {
  render: (args) => (
    <div>
      <Label id="input-disabled-label" htmlFor="input-disabled">Disabled Input</Label>
      <Input
        id="input-disabled"
        aria-labelledby="input-disabled-label"
        value="Cannot edit"
        {...args}
      />
    </div>
  ),
  args: {
    type: 'text',
    name: 'disabled-input',
    disabled: true,
    'data-size': 'md',
  },
};

// --- ReadOnly Example ---
export const ReadOnly: Story = {
  render: (args) => (
    <div>
      <Label id="input-readonly-label" htmlFor="input-readonly">Read Only Input</Label>
      <Input
        id="input-readonly"
        aria-labelledby="input-readonly-label"
        value="Cannot change, but can copy"
        {...args}
      />
    </div>
  ),
  args: {
    type: 'text',
    name: 'readonly-input',
    readOnly: true,
    'data-size': 'md',
  },
};

// --- Invalid State Example ---
export const Invalid: Story = {
  render: (args) => (
    <div>
      <Label id="input-invalid-label" htmlFor="input-invalid">Invalid Input</Label>
      <Input
        id="input-invalid"
        aria-labelledby="input-invalid-label"
        value="Incorrect value"
        {...args}
      />
      {/* Typically paired with ValidationMessage */}
      {/* <ValidationMessage error>Error details</ValidationMessage> */}
    </div>
  ),
  args: {
    type: 'text',
    name: 'invalid-input',
    'aria-invalid': true, // Set invalid state
    'data-size': 'md',
  },
  name: 'Invalid State (aria-invalid)',
};


// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [inputValue, setInputValue] = useState('Initial Value');
    return (
      <div>
        <Label id="input-controlled-label" htmlFor="input-controlled">Kontroller meg!</Label>
        <Input
          id="input-controlled"
          aria-labelledby="input-controlled-label"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...args} // Spread other args like data-size etc.
        />
        <p style={{ marginTop: '8px' }}>Du har skrevet inn: {inputValue}</p>
      </div>
    );
  },
  args: {
    type: 'text',
    name: 'controlled-input',
    'data-size': 'md',
    // value and onChange are handled by the render function's state
  },
};
 