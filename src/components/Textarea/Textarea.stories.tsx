import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState } from 'react';
import { Textarea, TextareaProps } from './index'; 
// Import components for context/examples
import { Field, Label, Paragraph, Divider } from '@digdir/designsystemet-react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Textarea allows users to input multi-line text. Use Label for accessibility.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
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
    cols: {
      control: 'number',
      description: 'Specifies the visible width of a text area.',
    },
    rows: {
      control: 'number',
      description: 'Specifies the visible number of lines in a text area.',
    },
    maxLength: {
      control: 'number',
      description: 'Specifies the maximum number of characters allowed.',
    },
    id: {
      control: 'text',
      description: 'HTML id attribute, important for label association.',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    value: { control: 'text', table: { disable: true } }, 
    defaultValue: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    'aria-labelledby': { control: 'text' },
    'aria-invalid': { control: 'boolean' },
    'aria-describedby': { control: 'text' },
  } as ArgTypes<TextareaProps>,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

// --- Basic Example ---
export const Default: Story = {
  render: (args) => (
    <Field data-size={args['data-size']}>
      <Label id="textarea-default-label" htmlFor="textarea-default">
        Label
      </Label>
      <Textarea
        id="textarea-default"
        aria-labelledby="textarea-default-label"
        placeholder="Skriv en lengre tekst her..."
        {...args} 
      />
    </Field>
  ),
  args: {
    name: 'default-textarea',
    rows: 4, 
    'data-size': 'md',
  },
};

// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [textValue, setTextValue] = useState('Jeg vil ha Pizza');
    return (
      <Field data-size={args['data-size']}>
        <Label id="textarea-controlled-label" htmlFor="textarea-controlled">
          Kontroller meg!
        </Label>
        <Textarea
          id="textarea-controlled"
          aria-labelledby="textarea-controlled-label"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          rows={3} 
          {...args}
        />
        <Divider style={{ margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0' }} />
        <Paragraph style={{ margin: '0' }}>
          Du har skrevet inn: {textValue}
        </Paragraph>
      </Field>
    );
  },
  args: {
    name: 'controlled-textarea',
    'data-size': 'md',
  },
};

// --- Disabled Example ---
export const Disabled: Story = {
  render: (args) => (
     <Field data-size={args['data-size']}>
      <Label id="textarea-disabled-label" htmlFor="textarea-disabled">
        Deaktivert felt
      </Label>
      <Textarea
        id="textarea-disabled"
        aria-labelledby="textarea-disabled-label"
        {...args}
      />
    </Field>
  ),
  args: {
    name: 'disabled-textarea',
    defaultValue: "Kan ikke redigeres",
    disabled: true,
    rows: 3,
    'data-size': 'md',
  },
};

// --- ReadOnly Example ---
export const ReadOnly: Story = {
 render: (args) => (
     <Field data-size={args['data-size']}>
      <Label id="textarea-readonly-label" htmlFor="textarea-readonly">
        Kun lesbart felt
      </Label>
      <Textarea
        id="textarea-readonly"
        aria-labelledby="textarea-readonly-label"
        {...args}
      />
    </Field>
  ),
  args: {
    name: 'readonly-textarea',
    defaultValue: "Kan ikke endres, men kan kopieres.",
    readOnly: true,
    rows: 3,
    'data-size': 'md',
  },
};

// --- With MaxLength (Combine with FieldCounter if needed) ---
export const WithMaxLength: Story = {
  render: (args) => (
    <Field data-size={args['data-size']}>
      <Label id="textarea-maxlength-label" htmlFor="textarea-maxlength">
        Beskrivelse (maks 100 tegn)
      </Label>
      <Textarea
        id="textarea-maxlength"
        aria-labelledby="textarea-maxlength-label"
        placeholder="Start å skrive..."
        {...args}
      />
    </Field>
  ),
  args: {
    name: 'maxlength-textarea',
    maxLength: 100,
    rows: 4,
    'data-size': 'md',
  },
  name: 'With MaxLength',
};
