// src/components/Field/Field.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor } from 'storybook/test';
import { Field, FieldProps, FieldDescription, FieldCounter } from './index';
import {
  Field as DigDirField,
  Input,
  Label,
  Textfield,
  Textarea,
  Select,
  ValidationMessage,
} from '@digdir/designsystemet-react';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
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

// --- Example Basic ---
export const DefaultTextfield: Story = {
  name: 'Example Basic',
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
};

// --- Example with Counter ---
export const WithCounter: Story = {
  name: 'Example with Counter',
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
};


// --- Example Affixes ---
export const AffixExamples: Story = {
  name: 'Example Affixes',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} data-color={args['data-color']}>
      <>
        <Label id="affix-example1-label" htmlFor="affix-example1">
          Hvor mange kroner koster det per måned?
        </Label>
        <Field data-size={args['data-size']} style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield
              id="affix-example1"
              type="number"
              aria-labelledby="affix-example1-label"
            />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example2-label" htmlFor="affix-example2">
          Hvor mange kilo veier eplene du har valgt?
        </Label>
        <Field data-size={args['data-size']} style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <Textarea
              id="affix-example2"
              rows={2}
              aria-labelledby="affix-example2-label"
            />
            <DigDirField.Affix>KG</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example3-label" htmlFor="affix-example3">
          Hvor mange kroner koster det?
        </Label>
        <Field data-size={args['data-size']} style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Select id="affix-example3" aria-labelledby="affix-example3-label">
              <Select.Option value="-1">Velg &hellip;</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="20">20</Select.Option>
              <Select.Option value="30">30</Select.Option>
            </Select>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example4-label" htmlFor="affix-example4">
          No affix
        </Label>
        <Field data-size={args['data-size']}>
          <Textfield id="affix-example4" aria-labelledby="affix-example4-label" />
        </Field>
      </>

      <>
        <Label id="affix-example5-label" htmlFor="affix-example5">
          No affix and small size
        </Label>
        <Field data-size="sm">
          <Textfield id="affix-example5" aria-labelledby="affix-example5-label" />
        </Field>
      </>

      <>
        <Label id="affix-example6-label" htmlFor="affix-example6">
          No affix and large size
        </Label>
        <Field data-size="lg">
          <Textfield id="affix-example6" aria-labelledby="affix-example6-label" />
        </Field>
      </>

      <>
        <Label id="affix-example7-label" htmlFor="affix-example7">
          Affix and small size
        </Label>
        <Field data-size="sm" style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example7" aria-labelledby="affix-example7-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example8-label" htmlFor="affix-example8">
          Affix and large size
        </Label>
        <Field data-size="lg" style={{ display: 'inline-block', width: 'max-content' }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example8" aria-labelledby="affix-example8-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>
    </div>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
  argTypes: {
    position: { control: false },
  },
};

// --- INTERACTION TESTS ---

/**
 * Tests the core composition wiring of Field: without any explicit ids,
 * the underlying ds-field element associates the Label (for/id), the
 * FieldDescription and the ValidationMessage (aria-describedby) with the
 * input, and sets aria-invalid when a validation message is present.
 */
export const TestCompositionWiring: Story = {
  name: 'Test: Label, Description And Validation Wiring',
  render: (args) => (
    <Field {...args}>
      <Label>Fullt navn</Label>
      <FieldDescription>Skriv både fornavn og etternavn</FieldDescription>
      <Input />
      <ValidationMessage>Du må fylle ut navn</ValidationMessage>
    </Field>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ds-field wires the (id-less) label to the input asynchronously
    const input = await waitFor(() => canvas.getByLabelText('Fullt navn'));
    const label = canvas.getByText('Fullt navn');
    expect(input).toHaveAttribute('id');
    expect(label).toHaveAttribute('for', input.id);

    // Description and validation message are both announced via aria-describedby
    const description = canvas.getByText('Skriv både fornavn og etternavn');
    const validation = canvas.getByText('Du må fylle ut navn');
    await waitFor(() => {
      expect(description).toHaveAttribute('id');
      expect(validation).toHaveAttribute('id');
      const describedBy = input.getAttribute('aria-describedby') ?? '';
      expect(describedBy).toContain(description.id);
      expect(describedBy).toContain(validation.id);
    });

    // The presence of a ValidationMessage marks the input as invalid
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    // Native label/id association: clicking the label focuses the input
    await userEvent.click(label);
    expect(input).toHaveFocus();

    // The field remains editable
    await userEvent.type(input, 'Frodo Baggins');
    expect(input).toHaveValue('Frodo Baggins');
  },
};

/**
 * Tests that FieldCounter counts down as the user types, and flips to an
 * "over the limit" message when the text gets too long (negative case —
 * no maxLength is set, so overtyping is possible).
 */
export const TestCounterCountsDown: Story = {
  name: 'Test: Counter Counts Down While Typing',
  render: (args) => (
    <Field {...args}>
      <Label>Kort melding</Label>
      <Textarea rows={3} />
      <FieldCounter limit={25} />
    </Field>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = await waitFor(() => canvas.getByLabelText('Kort melding'));

    // The ds-field element renders the counter text via the data-label
    // attribute (displayed with CSS), so we assert on that attribute
    const counter = canvasElement.querySelector('[data-field="counter"]');
    expect(counter).not.toBeNull();

    // Initial state announces the full limit
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '25 tegn igjen');
      expect(counter).toHaveAttribute('data-state', 'under');
    });

    // Counter counts down as the user types ("Røde Kors" = 9 characters)
    await userEvent.type(textarea, 'Røde Kors');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '16 tegn igjen');
    });

    // Negative case: exceeding the limit switches to the "for mye" message
    await userEvent.type(textarea, ' i hele Norge, hver eneste dag');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '14 tegn for mye');
      expect(counter).toHaveAttribute('data-state', 'over');
    });
  },
};
