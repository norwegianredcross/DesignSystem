// src/components/Textfield/Textfield.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React, { useState } from 'react'; // Import useState for controlled example
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
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

// --- INTERACTION TESTS ---

/**
 * Tests uncontrolled typing: the value updates per keystroke and onChange
 * fires once per character. Also verifies the label is programmatically
 * associated with the input (the underlying ds-field element wires
 * label/input asynchronously, hence the waitFor).
 */
export const TestTypingUpdatesValue: Story = {
  name: 'Test: Typing Updates Value',
  args: {
    label: 'Fornavn',
    name: 'test-typing',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Label association is wired up by the ds-field custom element
    const input = await waitFor(() => canvas.getByLabelText('Fornavn'));

    await userEvent.type(input, 'Frodo Baggins');
    expect(input).toHaveValue('Frodo Baggins');
    expect(args.onChange).toHaveBeenCalledTimes('Frodo Baggins'.length);

    // Clicking the label focuses the input (native for/id association)
    const label = canvas.getByText('Fornavn');
    await waitFor(() => {
      expect(label).toHaveAttribute('for', input.id);
    });
  },
};

/**
 * Tests controlled mode: the input mirrors external state and external
 * updates (button click) are reflected in the input.
 */
export const TestControlledValue: Story = {
  name: 'Test: Controlled Value',
  render: (args) => {
    const [value, setValue] = useState<string>('');
    // Destructure to avoid label/value/onChange arg conflicts (see Controlled)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { label: _label, value: _value, onChange, ...rest } = args;
    return (
      <>
        <Textfield
          label="Kontrollert felt"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValue(e.target.value);
            (onChange as ((event: unknown) => void) | undefined)?.(e);
          }}
          {...(rest as Record<string, unknown>)}
        />
        <Paragraph data-testid="mirror">Verdi: {value || '(ingenting)'}</Paragraph>
        <Button onClick={() => setValue('Kake')}>Sett til Kake</Button>
      </>
    );
  },
  args: {
    name: 'test-controlled',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Kontrollert felt'));

    // Typing round-trips through React state back into the input
    await userEvent.type(input, 'Bergen');
    expect(input).toHaveValue('Bergen');
    expect(canvas.getByTestId('mirror')).toHaveTextContent('Verdi: Bergen');
    expect(args.onChange).toHaveBeenCalled();

    // External state updates are reflected in the controlled input
    await userEvent.click(canvas.getByRole('button', { name: 'Sett til Kake' }));
    expect(input).toHaveValue('Kake');
    expect(canvas.getByTestId('mirror')).toHaveTextContent('Verdi: Kake');
  },
};

/**
 * Tests that the description is linked to the input via aria-describedby.
 */
export const TestDescriptionAssociation: Story = {
  name: 'Test: Description Association',
  args: {
    label: 'E-post',
    name: 'test-description',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('E-post'));
    const description = canvas.getByText('Vi sender en bekreftelse til denne adressen.');

    // ds-field assigns ids and wires aria-describedby asynchronously
    await waitFor(() => {
      expect(description).toHaveAttribute('id');
      expect(input.getAttribute('aria-describedby')).toContain(description.id);
    });
  },
};

/**
 * Tests the error state: aria-invalid is set, the error message renders,
 * and the message is linked to the input via aria-describedby.
 */
export const TestErrorState: Story = {
  name: 'Test: Error State',
  args: {
    label: 'Telefonnummer',
    name: 'test-error',
    type: 'tel',
    required: true,
    error: 'Telefonnummer kan kun inneholde siffer.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText(/Telefonnummer/));

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toBeRequired();

    const errorMessage = canvas.getByText('Telefonnummer kan kun inneholde siffer.');
    expect(errorMessage).toBeVisible();

    // Error message is announced for the field via aria-describedby
    await waitFor(() => {
      expect(errorMessage).toHaveAttribute('id');
      expect(input.getAttribute('aria-describedby')).toContain(errorMessage.id);
    });
  },
};

/**
 * Tests that a disabled field cannot be edited and fires no change events.
 */
export const TestDisabledState: Story = {
  name: 'Test: Disabled State',
  args: {
    label: 'Deaktivert felt',
    name: 'test-disabled',
    disabled: true,
    defaultValue: 'Kan ikke endres',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Deaktivert felt'));

    expect(input).toBeDisabled();
    expect(input).toHaveValue('Kan ikke endres');

    // Typing into a disabled input must be a no-op
    await userEvent.type(input, 'ny tekst');
    expect(input).toHaveValue('Kan ikke endres');
    expect(args.onChange).not.toHaveBeenCalled();
  },
};

/**
 * Tests that a readonly field keeps its value, cannot be edited,
 * but is still focusable (unlike disabled).
 */
export const TestReadOnlyState: Story = {
  name: 'Test: ReadOnly State',
  args: {
    label: 'Kun lesbart felt',
    name: 'test-readonly',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Kun lesbart felt'));

    expect(input).toHaveAttribute('readonly');

    // Readonly fields remain focusable for screen reader users
    await userEvent.click(input);
    expect(input).toHaveFocus();

    // ...but typing must not modify the value
    await userEvent.keyboard('ny tekst');
    expect(input).toHaveValue('Denne verdien er satt.');
    expect(args.onChange).not.toHaveBeenCalled();
  },
};

/**
 * Tests prefix/suffix affixes: both render visibly and the input itself
 * stays fully editable.
 */
export const TestAffixes: Story = {
  name: 'Test: Prefix And Suffix',
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'test-affixes',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    // multiline must be set explicitly: the 'type' argType is conditional on
    // it, and Storybook drops args whose condition is not met
    multiline: false,
    type: 'number',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() =>
      canvas.getByLabelText('Hvor mange kroner koster det per måned?'),
    );

    expect(canvas.getByText('NOK')).toBeVisible();
    expect(canvas.getByText('pr. mnd')).toBeVisible();

    await userEvent.type(input, '150');
    expect(input).toHaveValue(150);
  },
};

/**
 * Tests the character counter: it counts down while typing and switches to
 * an "over the limit" message when the text is too long (negative case).
 */
export const TestCharacterCounter: Story = {
  name: 'Test: Character Counter',
  args: {
    label: 'Melding',
    name: 'test-counter',
    multiline: true,
    rows: 3,
    counter: 40,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = await waitFor(() => canvas.getByLabelText('Melding'));

    // The ds-field element renders the counter text via the data-label
    // attribute (displayed with CSS), so we assert on that attribute
    const counter = canvasElement.querySelector('[data-field="counter"]');
    expect(counter).not.toBeNull();

    // Initial counter shows the full limit
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '40 tegn igjen');
    });

    // Counter counts down as the user types ("Røde Kors" = 9 characters)
    await userEvent.type(textarea, 'Røde Kors');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '31 tegn igjen');
    });

    // Negative case: exceeding the limit flips the counter to "for mye"
    // (no maxLength is set, so typing past the limit is possible)
    await userEvent.type(textarea, ' hjelper mennesker i nød i hele Norge idag');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '11 tegn for mye');
      expect(counter).toHaveAttribute('data-state', 'over');
    });
  },
};
