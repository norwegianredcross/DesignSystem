// src/components/Field/Field.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React from 'react';
// --- Import YOUR exported components from index.tsx ---
import { Field as DocumentedField, FieldProps, FieldDescription, FieldCounter } from './index';
// --- Import the ORIGINAL Field and necessary inputs DIRECTLY from the library ---
import {
  Field as DigDirField, // Use an alias to distinguish from your export
  Textfield,
  Textarea,
  Checkbox,
  Radio,
  // We don't need to import sub-components individually here
  // as we will use DigDirField.* notation in render
} from '@digdir/designsystemet-react';

const meta: Meta<typeof DocumentedField> = { // Point meta to YOUR Field for docs
  title: 'Components/Field',
  component: DocumentedField, // Document YOUR component
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
        'Field content, typically Field.Label, Field.Input, Field.Description, etc.',
    },
  } as ArgTypes<FieldProps>, // Use your FieldProps type here
};

export default meta;

// Use StoryObj<typeof DocumentedField> to link args to your documented component
type Story = StoryObj<typeof DocumentedField>;

// --- Basic Example with Textfield ---
export const DefaultTextfield: Story = {
  render: (args) => (
    // --- Use the ORIGINAL DigDirField in render for dot notation ---
    <DigDirField {...args}>
      <DigDirField.Label id="textfield-default-label" htmlFor="textfield-default">
        Label
      </DigDirField.Label>
      <FieldDescription>Short description for the field</FieldDescription> {/* Use exported one */}
      <DigDirField.Input>
        <Textfield
          id="textfield-default"
          placeholder="Enter text..."
          aria-labelledby="textfield-default-label"
        />
      </DigDirField.Input>
      <DigDirField.ValidationMessage error>Error message</DigDirField.ValidationMessage>
    </DigDirField>
    // --- END FIX ---
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Basic (Textfield)',
};

// --- Example with Prefix and Suffix (Matching Digdir Example Structure) ---
export const WithAffixes: Story = {
  render: (args) => (
    // --- Use the ORIGINAL DigDirField in render ---
    <DigDirField {...args}>
      <DigDirField.Label id="textfield-affix-label" htmlFor="textfield-affix">
        Hvor mange kroner koster det per måned?
      </DigDirField.Label>
      {/* Use the Affixes wrapper */}
      <DigDirField.Affixes>
        {/* Use Affix for the prefix */}
        <DigDirField.Affix>NOK</DigDirField.Affix>
        {/* Place the input directly inside Affixes */}
        <Textfield
          id="textfield-affix"
          type="number"
          aria-labelledby="textfield-affix-label"
        />
        {/* Use Affix for the suffix */}
        <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
      </DigDirField.Affixes>
    </DigDirField>
    // --- END FIX ---
  ),
  args: {
    'data-size': 'md',
  },
  name: 'With Prefix/Suffix',
};

// --- Example with Counter ---
export const WithCounter: Story = {
  render: (args) => (
    // --- Use the ORIGINAL DigDirField in render ---
    <DigDirField {...args}>
      <DigDirField.Label id="textarea-counter-label" htmlFor="textarea-counter">
        Legg til en beskrivelse
      </DigDirField.Label>
      <DigDirField.Input>
        <Textarea
          id="textarea-counter"
          maxLength={50}
          rows={3}
          aria-labelledby="textarea-counter-label"
        />
      </DigDirField.Input>
      <FieldCounter limit={50} /> {/* Use exported one */}
    </DigDirField>
    // --- END FIX ---
  ),
  args: {
    'data-size': 'md',
  },
  name: 'With Counter (Textarea)',
};

// --- Example with Checkbox ---
export const WithCheckbox: Story = {
  render: (args) => (
    // --- Use the ORIGINAL DigDirField in render ---
    <DigDirField {...args}>
      <DigDirField.Label id="checkbox-agree-label" htmlFor="checkbox-agree">
        <DigDirField.Input>
          <Checkbox
            id="checkbox-agree"
            value="agree"
            aria-labelledby="checkbox-agree-label"
          >
            Jeg godtar vilkårene
          </Checkbox>
        </DigDirField.Input>
      </DigDirField.Label>
      <FieldDescription>Les vilkårene nøye før du godtar.</FieldDescription> {/* Use exported one */}
    </DigDirField>
    // --- END FIX ---
  ),
  args: {
    'data-size': 'md',
    position: 'start',
  },
  name: 'With Checkbox',
};

// --- Example with Radio and End Position ---
export const WithRadioEnd: Story = {
  render: (args) => (
    // --- Use the ORIGINAL DigDirField in render ---
    <DigDirField {...args}>
      {/* Option 1 */}
      <DigDirField.Label id="radio-option1-label" htmlFor="radio-option1">
        <DigDirField.Input>
          <Radio
            id="radio-option1"
            name="radio-position"
            value="option1"
            aria-labelledby="radio-option1-label"
          >
            Option 1
          </Radio>
        </DigDirField.Input>
      </DigDirField.Label>
      {/* Option 2 */}
      <DigDirField.Label id="radio-option2-label" htmlFor="radio-option2">
        <DigDirField.Input>
          <Radio
            id="radio-option2"
            name="radio-position"
            value="option2"
            aria-labelledby="radio-option2-label"
          >
            Option 2
          </Radio>
        </DigDirField.Input>
      </DigDirField.Label>
    </DigDirField>
    // --- END FIX ---
  ),
  args: {
    'data-size': 'md',
    position: 'end',
  },
  name: 'With Radio (End Position)',
};
