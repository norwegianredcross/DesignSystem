// src/components/Fieldset/Fieldset.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { Fieldset, FieldsetProps } from './index'; 
import { Textfield, Textarea, Label } from '@digdir/designsystemet-react';
import { Field } from '../Field'; 

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
          <Label id="short-desc-label" htmlFor="short-desc">
            Kort beskrivelse
          </Label>
          <Textfield id="short-desc" aria-labelledby="short-desc-label" />
        </Field>

        <Field>
          <Label id="long-desc-label" htmlFor="long-desc">
            Lang beskrivelse
          </Label>
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

// --- Example with Checkboxes ---
export const WithCheckbox: Story = {
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="checkbox" /> Produktnyheter
        </label>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="checkbox" /> Blogginnlegg
        </label>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="checkbox" /> Invitasjoner til webinar
        </label>
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'With Checkbox',
};

// --- Legend as Heading Example ---
export const LegendAsHeading: Story = {
  render: (args) => (
    <form>
      <Fieldset {...args}>
        <Fieldset.Legend asChild>
          <h3 style={{ margin: 0 }}>Hvor bor du nå?</h3>
        </Fieldset.Legend>
        <Field>
          <Label id="address-line1-label" htmlFor="address-line1">Adresse</Label>
          <Textfield id="address-line1" aria-labelledby="address-line1-label" />
        </Field>
        <Field>
          <Label id="zip-label" htmlFor="zip">Postnummer</Label>
          <Textfield id="zip" aria-labelledby="zip-label" size={6} />
        </Field>
      </Fieldset>
    </form>
  ),
  args: {
    'data-size': 'md',
  },
  name: 'Legend as Heading',
};