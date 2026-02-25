// src/components/Textfield/Textfield.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React, { useState } from 'react'; // Import useState for controlled example
import { Textfield, TextfieldProps } from './index'; // Import the main Textfield component
// Import components for context/examples
import { Button, Divider, Paragraph } from '@digdir/designsystemet-react';

const meta: Meta<typeof Textfield> = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Textfield is a composed component for text input or textarea, including label, description, validation, affixes, and counter.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    // Props directly available on DigDirTextfieldProps
    label: {
      control: 'text',
      description: 'Label for the textfield (use this OR aria-label)',
      defaultValue: 'Label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textfield',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the textfield read-only',
      defaultValue: false,
    },
    multiline: {
      control: 'boolean',
      description: 'Renders a Textarea instead of Input',
      defaultValue: false,
    },
    description: {
      control: 'text',
      description: 'Description displayed below the label',
    },
    error: {
      control: 'text',
      description: 'Error message displayed below the input',
    },
    counter: {
      control: 'number', // Simple control for maxLength limit
      description: 'Enables character counter with optional limit',
    },
    prefix: {
      control: 'text',
      description: 'Prefix displayed before the input',
    },
    suffix: {
      control: 'text',
      description: 'Suffix displayed after the input',
    },
    // aria-label should only be used if label prop is NOT provided
    'aria-label': { control: 'text', if: { arg: 'label', exists: false } },
    'aria-labelledby': { control: 'text' },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    type: {
      control: 'select',
      options: [
        'text', 'number', 'email', 'password', 'search', 'tel', 'url', 'date',
        'datetime-local', 'month', 'week', 'time', 'color', 'file', 'hidden',
      ],
      description: 'Input type (ignored if multiline is true)',
      defaultValue: 'text',
      if: { arg: 'multiline', eq: false },
    },
    size: {
      control: 'number',
      description: 'HTML size attribute (input width in characters)',
      if: { arg: 'multiline', eq: false },
    },
    rows: {
      control: 'number',
      description: 'HTML rows attribute (textarea height in lines)',
      if: { arg: 'multiline', eq: true },
    },
    value: { control: 'text', table: { disable: true } },
    defaultValue: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    maxLength: { control: 'number' },
    id: { control: 'text' },
    'aria-invalid': { control: 'boolean' },
    'aria-describedby': { control: 'text' },
  } as ArgTypes<TextfieldProps>,
};

export default meta;

type Story = StoryObj<typeof Textfield>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    label: 'Navn',
    name: 'name-default',
    placeholder: 'Skriv inn navnet ditt',
  },
};

// --- Multiline (Textarea) Example ---
export const Multiline: Story = {
  args: {
    label: 'Beskrivelse',
    name: 'description-multiline',
    multiline: true,
    rows: 4,
    placeholder: 'Skriv en lengre beskrivelse...',
  },
};

// --- With Prefix/Suffix ---
export const WithAffixes: Story = {
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'cost-affix',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    type: 'number',
  },
  name: 'With Prefix/Suffix',
};

// --- With Character Counter ---
export const WithCounter: Story = {
  args: {
    label: 'Melding (maks 100 tegn)',
    name: 'message-counter',
    multiline: true,
    rows: 3,
    counter: 100,
    maxLength: 100,
  },
  name: 'With Character Counter',
};

// --- With Description ---
export const WithDescription: Story = {
  args: {
    label: 'E-post',
    name: 'email-desc',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email',
  },
};

// --- With Error Message ---
export const WithError: Story = {
  args: {
    label: 'Telefonnummer *',
    name: 'phone-error',
    error: 'Telefonnummer kan kun inneholde siffer.',
    required: true,
    type: 'tel',
    'aria-invalid': true,
  },
  name: 'With Error',
};

// --- Disabled Example ---
export const Disabled: Story = {
  args: {
    label: 'Deaktivert felt',
    name: 'disabled-field',
    disabled: true,
    defaultValue: 'Kan ikke endres',
  },
};

// --- ReadOnly Example ---
export const ReadOnly: Story = {
  args: {
    label: 'Kun lesbart felt',
    name: 'readonly-field',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.',
  },
};

// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    // Destructure relevant props from args instead of spreading all
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { label: _label, value: _value, onChange: _onChange, ...rest } = args;

    return (
      <>
        <Textfield
          label="Kontroller meg!"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
          {...(rest as Record<string, unknown>)}
        />
        <Divider style={{ margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0' }} />
        <Paragraph style={{ margin: '0' }}>
          Du har skrevet inn: {value || '(ingenting)'}
        </Paragraph>
        <Button onClick={() => setValue('Kake')} style={{ marginTop: 'var(--ds-size-2)' }}>
          Jeg vil ha Kake
        </Button>
      </>
    );
  },
  args: {
    name: 'controlled-field',
    placeholder: 'Skriv noe...',
    // label, value, onChange are handled in render
    // Set other defaults for controllable props if desired
    'data-size': 'md',
  },
};
