import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from './index';
import { CalendarIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { expect, within, userEvent, fn, waitFor } from 'storybook/test';

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    value: { control: 'text' },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Component size',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: [
        'primary-color-red',
        'secondary-color-orange',
        'secondary-color-rust',
        'secondary-color-pink',
        'additional-color-ocean',
        'additional-color-jungle',
        'neutral',
      ],
      description: 'Fargepalett',
    },
    suffixIcon: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: 'Dato',
    id: 'default-date',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />,
  },
};

export const CustomSizeAndColor: Story = {
  args: {
    label: 'Stor dato i rust',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'secondary-color-rust',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!'),
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>('12.05.2023');
    return (
      <div>
        <DateInput
          {...args}
          value={value}
          onChange={(_e, formattedValue) => setValue(formattedValue)}
        />
        <button
          onClick={() => setValue('01.01.2030')}
          style={{ marginTop: '10px' }}
        >
          Sett til 2030
        </button>
        <button onClick={() => setValue('')} style={{ marginLeft: '10px' }}>
          Tøm
        </button>
        <p>Gjeldende verdi: {value}</p>
      </div>
    );
  },
  args: {
    label: 'Kontrollert Dato',
    id: 'controlled-date',
  },
};

// --- INTERACTION TESTS ---

/**
 * Tests that input is automatically formatted with dots (dd.mm.yyyy).
 */
export const TestAutoFormatting: Story = {
  name: 'Test: Auto Formatting',
  args: {
    label: 'Test dato',
    id: 'test-format',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);
    await userEvent.type(input, '15062025');

    await waitFor(() => {
      expect(input).toHaveValue('15.06.2025');
    });
  },
};

/**
 * Typed input is preserved as-is (no silent clamping); validity is reported
 * through onValidationChange instead.
 */
export const TestPreservesInput: Story = {
  name: 'Test: Preserves Input, Reports Validity',
  args: {
    label: 'Test bevaring',
    id: 'test-preserve',
    onValidationChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Day 45 is kept, not rewritten to 31
    await userEvent.clear(input);
    await userEvent.type(input, '45');
    expect(input).toHaveValue('45');

    // Month 99 is kept, not rewritten to 12
    await userEvent.clear(input);
    await userEvent.type(input, '1599');
    expect(input).toHaveValue('15.99');

    // Incomplete date on blur reports invalid
    await userEvent.tab();
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '15.99');
    });
  },
};

/**
 * Complete dates are validated against the real calendar: impossible dates
 * (31.02) and non-leap-year 29.02 are invalid; leap-day 29.02.2024 is valid.
 */
export const TestCalendarValidation: Story = {
  name: 'Test: Calendar Validation',
  args: {
    label: 'Test kalender',
    id: 'test-calendar',
    onValidationChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);
    await userEvent.type(input, '31022024');
    expect(input).toHaveValue('31.02.2024');
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '31.02.2024');
    });

    await userEvent.clear(input);
    await userEvent.type(input, '29022024');
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(true, '29.02.2024');
    });

    await userEvent.clear(input);
    await userEvent.type(input, '29022023');
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '29.02.2023');
    });
  },
};

/**
 * Leaving the field with an invalid, incomplete or out-of-range date shows
 * the built-in inline error (no consumer wiring needed); editing clears it,
 * and an explicit error prop overrides it.
 */
export const TestBuiltInValidationMessage: Story = {
  name: 'Test: Built-in Validation Message',
  args: {
    label: 'Dato',
    id: 'test-builtin-validation',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Year 4242 is a real calendar date but outside the default 1900-2100 range
    await userEvent.clear(input);
    await userEvent.type(input, '13124242');
    await userEvent.tab();
    const rangeError = await canvas.findByRole('alert');
    expect(rangeError).toHaveTextContent('Datoen må være mellom 01.01.1900 og 31.12.2100.');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription(/mellom 01\.01\.1900/);

    // Editing clears the message immediately
    await userEvent.type(input, '{backspace}');
    expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'false');

    // Impossible date -> invalid message on blur
    await userEvent.clear(input);
    await userEvent.type(input, '31022024');
    await userEvent.tab();
    expect(await canvas.findByRole('alert')).toHaveTextContent(
      'Ugyldig dato. Kontroller dag og måned.',
    );

    // Incomplete date -> incomplete message on blur
    await userEvent.clear(input);
    await userEvent.type(input, '1312');
    await userEvent.tab();
    expect(await canvas.findByRole('alert')).toHaveTextContent(
      'Ufullstendig dato. Bruk formatet dd.mm.åååå.',
    );

    // A valid date leaves no error behind
    await userEvent.clear(input);
    await userEvent.type(input, '13122024');
    await userEvent.tab();
    expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
  },
};

/**
 * The event passed to onChange keeps the real input element as target, so
 * standard form patterns (e.target.name, .id, .focus()) work.
 */
export const TestEventTargetIntegrity: Story = {
  name: 'Test: Event Target Integrity',
  args: {
    label: 'Test hendelse',
    id: 'test-event-target',
    name: 'fodselsdato',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);
    await userEvent.type(input, '01');

    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalled();
    });
    const mock = args.onChange as ReturnType<typeof fn>;
    const [event, formatted] = mock.mock.lastCall!;
    expect(formatted).toBe('01');
    expect(event.target).toBeInstanceOf(HTMLInputElement);
    expect(event.target.name).toBe('fodselsdato');
    expect(event.target.id).toBe('test-event-target');
    expect(event.target.value).toBe('01');
  },
};

/**
 * External aria-labelledby is honored: the input gets its accessible name
 * from the referenced element, and that element keeps its own id.
 */
export const TestExternalAriaLabelledby: Story = {
  name: 'Test: External aria-labelledby',
  render: (args) => (
    <div>
      <h3 id="ekstern-overskrift">Når reiser du?</h3>
      <DateInput {...args} />
    </div>
  ),
  args: {
    'aria-labelledby': 'ekstern-overskrift',
    id: 'test-external-label',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Når reiser du?' });
    expect(input).toHaveAttribute('aria-labelledby', 'ekstern-overskrift');

    const heading = canvasElement.querySelector('#ekstern-overskrift');
    expect(heading?.tagName).toBe('H3');
  },
};

/**
 * Without an id prop the component generates stable ids — never the literal
 * "undefined-label"/"undefined-desc" — and label/description stay linked.
 */
export const TestAutoGeneratedIds: Story = {
  name: 'Test: Auto-generated Ids',
  args: {
    label: 'Uten id',
    description: 'Ingen id-prop er satt.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Uten id' });

    expect(input.id).toBeTruthy();
    expect(input.id).not.toContain('undefined');

    const label = canvasElement.querySelector('label');
    expect(label).toHaveAttribute('for', input.id);

    const describedBy = input.getAttribute('aria-describedby') ?? '';
    expect(describedBy).not.toContain('undefined');
    expect(canvas.getByText('Ingen id-prop er satt.').id).toBe(describedBy);
  },
};

/**
 * Tests that onChange is called with the formatted value.
 */
export const TestOnChangeCallback: Story = {
  name: 'Test: onChange Callback',
  render: (args) => {
    const [lastValue, setLastValue] = useState<string>('');
    return (
      <div>
        <DateInput
          {...args}
          onChange={(e, formattedValue) => {
            setLastValue(formattedValue);
            args.onChange?.(e, formattedValue);
          }}
        />
        <p data-testid="last-value">Siste verdi: {lastValue}</p>
      </div>
    );
  },
  args: {
    label: 'Test callback',
    id: 'test-callback',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);
    await userEvent.type(input, '01012025');

    // Verify onChange was called
    expect(args.onChange).toHaveBeenCalled();

    // Verify the displayed value shows the formatted date
    await waitFor(() => {
      const lastValueDisplay = canvas.getByTestId('last-value');
      expect(lastValueDisplay).toHaveTextContent('01.01.2025');
    });
  },
};

/**
 * Tests that error state is properly displayed and aria-invalid is set.
 */
export const TestErrorState: Story = {
  name: 'Test: Error State',
  args: {
    label: 'Test feil',
    id: 'test-error',
    error: 'Ugyldig dato',
    defaultValue: '99.99.9999',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify aria-invalid is set
    expect(input).toHaveAttribute('aria-invalid', 'true');

    // Verify error message is displayed
    const errorMessage = canvas.getByRole('alert');
    expect(errorMessage).toHaveTextContent('Ugyldig dato');
  },
};

/**
 * Tests that disabled state prevents interaction.
 */
export const TestDisabledState: Story = {
  name: 'Test: Disabled State',
  args: {
    label: 'Test deaktivert',
    id: 'test-disabled',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify input is disabled
    expect(input).toBeDisabled();

    // Verify value is preserved
    expect(input).toHaveValue('24.12.2024');

    // Try to find and click the suffix button - it should be disabled
    const suffixButton = canvas.getByRole('button');
    expect(suffixButton).toBeDisabled();
  },
};

/**
 * Tests suffix button click functionality.
 */
export const TestSuffixClick: Story = {
  name: 'Test: Suffix Button Click',
  args: {
    label: 'Test knapp',
    id: 'test-suffix',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const suffixButton = canvas.getByRole('button');

    await userEvent.click(suffixButton);

    // Verify the callback was called
    expect(args.onSuffixClick).toHaveBeenCalled();
  },
};

/**
 * Tests that controlled value updates correctly from external changes.
 */
export const TestControlledMode: Story = {
  name: 'Test: Controlled Mode',
  render: (args) => {
    const [value, setValue] = useState<string>('01.01.2020');
    return (
      <div>
        <DateInput
          {...args}
          value={value}
          onChange={(_e, formattedValue) => setValue(formattedValue)}
        />
        <button
          data-testid="set-date-btn"
          onClick={() => setValue('25.12.2025')}
          style={{ marginTop: '10px' }}
        >
          Sett til jul 2025
        </button>
      </div>
    );
  },
  args: {
    label: 'Kontrollert test',
    id: 'test-controlled',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify initial value
    expect(input).toHaveValue('01.01.2020');

    // Click the button to change value externally
    const setDateBtn = canvas.getByTestId('set-date-btn');
    await userEvent.click(setDateBtn);

    // Verify the input updated to the new value
    expect(input).toHaveValue('25.12.2025');
  },
};