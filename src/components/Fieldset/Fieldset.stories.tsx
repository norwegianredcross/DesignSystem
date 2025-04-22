// src/components/Fieldset/Fieldset.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React from 'react';
import { Fieldset, FieldsetProps } from './index'; // Import the main Fieldset component
// Import components commonly used inside Fieldset
import { Textfield, Textarea, Label } from '@digdir/designsystemet-react';
// Import the Field component
import { Field } from '../Field'; // Adjust path if necessary

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Fieldset groups related form controls, often with a legend.',
      },
    },
  },
  argTypes: {
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
        'Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls.',
    },
    legend: { table: { disable: true } },
    description: { table: { disable: true } },
    error: { table: { disable: true } },
  } as ArgTypes<FieldsetProps>,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

// --- Example with Textfields using Field component inside ---
export const WithTextfields: Story = {
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Skriv inn dine svar</Fieldset.Legend>
        <Fieldset.Description>
          Gi en kort beskrivelse i begge feltene
        </Fieldset.Description>

        <Field>
          {/* Add id to Label */}
          <Label id="short-desc-label" htmlFor="short-desc">
            Kort beskrivelse
          </Label>
          {/* Add aria-labelledby to Textfield */}
          <Textfield id="short-desc" aria-labelledby="short-desc-label" />
        </Field>

        <Field>
          {/* Add id to Label */}
          <Label id="long-desc-label" htmlFor="long-desc">
            Lang beskrivelse
          </Label>
          {/* Add aria-labelledby to Textarea */}
          <Textarea id="long-desc" aria-labelledby="long-desc-label" />
        </Field>
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'brand1',
  },
  name: 'With Textfields',
};
