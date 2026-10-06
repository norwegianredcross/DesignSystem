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
/**
 * A ReactNode label is label CONTENT and gets the same <label>/htmlFor
 * association as a string. It used to render bare, so an input labelled
 * with rich text had no accessible name.
 */
export const TestRichLabelIsAssociated: Story = {
  name: 'Test: Rich Label Is Associated',
  args: {
    label: (
      <span>
        Dato <em>(valgfritt)</em>
      </span>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Dato (valgfritt)' });
    expect(input).toHaveAccessibleName('Dato (valgfritt)');
    // Clicking the label text focuses the field, proving the htmlFor link
    await userEvent.click(canvas.getByText('(valgfritt)'));
    expect(canvasElement.ownerDocument.activeElement).toBe(input);
  },
};


export const TestEditingDateParts: Story = {
  name: 'Test: Edit Date Parts Without Moving The Caret',
  render: () => {
    const [value, setValue] = useState('15.06.2025');
    return <>
      <DateInput label="Ukontrollert" defaultValue="15.06.2025" />
      <DateInput label="Kontrollert" value={value} onChange={(_, next) => setValue(next)} />
    </>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const input of canvas.getAllByRole('textbox')) {
      if (!(input instanceof HTMLInputElement)) throw new Error('Expected a date input');
      await userEvent.click(input);
      input.setSelectionRange(1, 1);
      await userEvent.keyboard('{Delete}');
      expect(input).toHaveValue('1.06.2025');
      expect(input.selectionStart).toBe(1);
      await userEvent.keyboard('5');
      expect(input).toHaveValue('15.06.2025');
      expect(input.selectionStart).toBe(2);
      input.setSelectionRange(3, 5);
      await userEvent.keyboard('12');
      expect(input).toHaveValue('15.12.2025');
      expect(input.selectionStart).toBe(5);
      input.setSelectionRange(6, 10);
      await userEvent.keyboard('20');
      expect(input).toHaveValue('15.12.20');
      await userEvent.tab();
      expect(input).toHaveValue('15.12.20');
    }
  },
};

export const TestPasteAndSeparators: Story = {
  name: 'Test: Paste And Correct Separators',
  args: { label: 'Lim inn dato', defaultValue: '15.06.2025' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    if (!(input instanceof HTMLInputElement)) throw new Error('Expected a date input');
    await userEvent.click(input);
    input.select();
    await userEvent.paste('29022024');
    expect(input).toHaveValue('29.02.2024');
    expect(input.selectionStart).toBe(10);
    input.setSelectionRange(3, 3);
    await userEvent.keyboard('{Backspace}');
    expect(input).toHaveValue('2902.2024');
    expect(input.selectionStart).toBe(2);
    await userEvent.keyboard('.');
    expect(input).toHaveValue('29.02.2024');
    expect(input.selectionStart).toBe(3);
    input.select();
    await userEvent.paste('31.02.2024');
    await userEvent.tab();
    expect(input).toHaveValue('31.02.2024');
  },
};

export const TestMergedDescriptions: Story = {
  name: 'Test: Preserve Internal And External Descriptions',
  render: (args) => <>
    <p id="date-external-hint">Ekstern veiledning.</p>
    <DateInput {...args} />
  </>,
  args: {
    id: 'merged-date', label: 'Dato med beskrivelser',
    description: 'Bruk dd.mm.åååå.', error: 'Datoen finnes ikke.',
    'aria-describedby': 'date-external-hint merged-date-desc date-external-hint',
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox');
    expect(input).toHaveAccessibleDescription('Bruk dd.mm.åååå. Datoen finnes ikke. Ekstern veiledning.');
    const ids = input.getAttribute('aria-describedby')?.split(/\s+/) ?? [];
    expect(new Set(ids).size).toBe(ids.length);
    expect(input).toHaveAttribute('aria-invalid', 'true');
  },
};

export const TestReadonlyCalendarAction: Story = {
  name: 'Test: Readonly Date Cannot Open A Changing Calendar',
  args: {
    label: 'Låst dato', readOnly: true, defaultValue: '15.06.2025',
    suffixIcon: <CalendarIcon aria-hidden />, onSuffixClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    const button = canvas.getByRole('button');
    expect(button).toBeDisabled();
    await userEvent.click(input);
    await userEvent.keyboard('123');
    expect(input).toHaveValue('15.06.2025');
    await userEvent.click(button);
    expect(args.onSuffixClick).not.toHaveBeenCalled();
  },
};

export const TestFormReset: Story = {
  name: 'Test: Reset Defaults And Honor Cancelled Reset',
  render: (args) => {
    const [cancel, setCancel] = useState(false);
    const [resets, setResets] = useState(0);
    const [value, setValue] = useState('01.01.2020');
    return <>
      <form id="date-reset-form" onReset={event => { setResets(count => count + 1); if (cancel) event.preventDefault(); }}>
        <DateInput label="Tom fra start" name="empty" onValidationChange={(...values) => args.onValidationChange?.(...values)} />
        <DateInput label="Forhåndsutfylt" name="prefilled" defaultValue="01022026" />
        <DateInput label="Kontrollert reset" value={value} onChange={(_, next) => setValue(next)} />
        <label><input type="checkbox" checked={cancel} onChange={e => setCancel(e.target.checked)} />Avbryt reset</label>
        <button type="reset">Nullstill skjema</button>
        <output>Antall tilbakestillinger: {resets}</output>
      </form>
      <DateInput label="Eksternt felt" name="external" form="date-reset-form" defaultValue="02.02.2026" />
    </>;
  },
  args: { onValidationChange: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    for (const input of canvas.getAllByRole('textbox')) {
      await userEvent.clear(input);
      await userEvent.type(input, '15062025');
    }
    await userEvent.click(canvas.getByRole('button', { name: 'Nullstill skjema' }));
    await waitFor(() => expect(canvas.getByRole('textbox', { name: 'Tom fra start' })).toHaveValue(''));
    expect(canvas.getByRole('textbox', { name: 'Forhåndsutfylt' })).toHaveValue('01.02.2026');
    expect(canvas.getByRole('textbox', { name: 'Eksternt felt' })).toHaveValue('02.02.2026');
    expect(canvas.getByRole('textbox', { name: 'Kontrollert reset' })).toHaveValue('15.06.2025');
    expect(args.onValidationChange).toHaveBeenLastCalledWith(null, '');
    await userEvent.type(canvas.getByRole('textbox', { name: 'Tom fra start' }), '06102026');
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Avbryt reset' }));
    await userEvent.click(canvas.getByRole('button', { name: 'Nullstill skjema' }));
    expect(canvas.getByRole('textbox', { name: 'Tom fra start' })).toHaveValue('06.10.2026');
  },
};

export const TestValidityWhileEditing: Story = {
  name: 'Test: Partial Edits Clear Previous Validity',
  args: { label: 'Validering under redigering', onValidationChange: fn() },
  play: async ({ canvasElement, args }) => {
    const input = within(canvasElement).getByRole('textbox');
    await userEvent.type(input, '29022024');
    expect(args.onValidationChange).toHaveBeenLastCalledWith(true, '29.02.2024');
    await userEvent.keyboard('{Backspace}');
    expect(args.onValidationChange).toHaveBeenLastCalledWith(null, '29.02.202');
    await userEvent.tab();
    expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '29.02.202');
    expect(input).toHaveValue('29.02.202');
  },
};
