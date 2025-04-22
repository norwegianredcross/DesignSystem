// src/components/Field/Field.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React from 'react';
// --- Import YOUR exported components ---
import { Field, FieldProps, FieldDescription, FieldCounter } from './index';
// --- Import the ORIGINAL Field (for Affixes) and other necessary components DIRECTLY from the library ---
import {
  Field as DigDirField, // Use alias for original Field when needing dot notation
  Label,
  Textfield,
  Textarea,
  Select,
  ValidationMessage,
} from '@digdir/designsystemet-react';

// Point meta to YOUR Field for docs, but use original Field in render for sub-components
const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field, // Document YOUR component wrapper
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Field is used to structure form elements with labels, descriptions, errors, prefixes, suffixes, and counters.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of toggle inputs (radio, checkbox, switch)',
      defaultValue: 'start',
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
    children: {
      control: false,
      description:
        'Field content, typically Label, Textfield, FieldDescription, etc.',
    },
  } as ArgTypes<FieldProps>,
};

export default meta;

type Story = StoryObj<typeof Field>;

// --- Basic Example with Textfield ---
// (Keep this story as is)
export const DefaultTextfield: Story = {
  render: (args) => (
    <Field {...args}>
      <Label id="textfield-default-label" htmlFor="textfield-default">
        Label
      </Label>
      <FieldDescription>Short description for the field</FieldDescription>
      <Textfield
        id="textfield-default"
        placeholder="Enter text..."
        aria-labelledby="textfield-default-label"
      />
      <ValidationMessage>Error message</ValidationMessage>
    </Field>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Basic (Textfield)',
};

// --- Example with Counter ---
// (Keep this story as is)
export const WithCounter: Story = {
  render: (args) => (
    <Field {...args}>
      <Label id="textarea-counter-label" htmlFor="textarea-counter">
        Legg til en beskrivelse
      </Label>
      <Textarea
        id="textarea-counter"
        maxLength={50}
        rows={3}
        aria-labelledby="textarea-counter-label"
      />
      <FieldCounter limit={50} />
    </Field>
  ),
  args: {
    'data-size': 'md',
  },
  name: 'With Counter (Textarea)',
};


// --- Affix Examples Story ---
export const AffixExamples: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} data-color={args['data-color']}>
      {/* Example 1: Textfield with Prefix/Suffix */}
      {/* Use Field wrapper */}
      <Label id="affix-example1-label" htmlFor="affix-example1">
          Hvor mange kroner koster det per måned?
        </Label>
      <Field data-size={args['data-size']}>
        
        {/* Wrap Affixes in div to constrain width */}
        <div style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield
              id="affix-example1"
              type="number"
              aria-labelledby="affix-example1-label"
            />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </div>
      </Field>

      {/* Example 2: Textarea with Suffix */}
      {/* Use Field wrapper */}
      <Label id="affix-example2-label" htmlFor="affix-example2">
          Hvor mange kilo veier eplene du har valgt?
        </Label>
      <Field data-size={args['data-size']}>
        
        {/* Wrap Affixes in div to constrain width */}
        <div style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <Textarea
              id="affix-example2"
              rows={2}
              aria-labelledby="affix-example2-label"
            />
            <DigDirField.Affix>KG</DigDirField.Affix>
          </DigDirField.Affixes>
        </div>
      </Field>

      {/* Example 3: Select with Prefix */}
      {/* Use Field wrapper */}
      <Label id="affix-example3-label" htmlFor="affix-example3">
          Hvor mange kroner koster det?
        </Label>
      <Field data-size={args['data-size']}>
        
        {/* Wrap Affixes in div to constrain width */}
        <div style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Select id="affix-example3" aria-labelledby="affix-example3-label">
              <Select.Option value="-1">Velg &hellip;</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="20">20</Select.Option>
              <Select.Option value="30">30</Select.Option>
            </Select>
          </DigDirField.Affixes>
        </div>
      </Field>

      {/* Example 4: No Affix (Keep Field wrapper) */}
      <Field data-size={args['data-size']}>
        <Label id="affix-example4-label" htmlFor="affix-example4">
          No affix
        </Label>
        <Textfield id="affix-example4" aria-labelledby="affix-example4-label" />
      </Field>

      {/* Example 5: No Affix, Small Size (Keep Field wrapper) */}
      <Field data-size="sm">
        <Label id="affix-example5-label" htmlFor="affix-example5">
          No affix and small size
        </Label>
        <Textfield id="affix-example5" aria-labelledby="affix-example5-label" />
      </Field>

      {/* Example 6: No Affix, Large Size (Keep Field wrapper) */}
      <Field data-size="lg">
        <Label id="affix-example6-label" htmlFor="affix-example6">
          No affix and large size
        </Label>
        <Textfield id="affix-example6" aria-labelledby="affix-example6-label" />
      </Field>

      {/* Example 7: Affix, Small Size */}
      {/* Use Field wrapper */}
      <Label id="affix-example7-label" htmlFor="affix-example7">
          Affix and small size
        </Label>
      <Field data-size="sm">
        
        {/* Wrap Affixes in div to constrain width */}
        <div style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example7" aria-labelledby="affix-example7-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </div>
      </Field>

      {/* Example 8: Affix, Large Size */}
      {/* Use Field wrapper */} 
      <Label id="affix-example8-label" htmlFor="affix-example8">
          Affix and large size
        </Label>
      <Field data-size="lg">
       
        {/* Wrap Affixes in div to constrain width */}
        <div style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example8" aria-labelledby="affix-example8-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </div>
      </Field>
    </div>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  argTypes: {
    position: { control: false },
  },
  name: 'Affix Examples',
};
