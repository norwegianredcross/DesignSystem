import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput, DateInputProps } from './index';
import { CalendarIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { expect, within, userEvent, fn } from 'storybook/test';

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
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Color scheme',
      defaultValue: 'accent',
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
    label: 'Stor Brand2 Dato',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'brand2',
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
          onChange={(e, formattedValue) => setValue(formattedValue)}
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

    // Clear any existing value
    await userEvent.clear(input);

    // Type digits without dots
    await userEvent.type(input, '15062025');

    // Verify the value is formatted with dots
    expect(input).toHaveValue('15.06.2025');
  },
};

/**
 * Tests that day values are capped at 31.
 */
export const TestDayValidation: Story = {
  name: 'Test: Day Validation (max 31)',
  args: {
    label: 'Test dag',
    id: 'test-day',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);

    // Type a day value greater than 31
    await userEvent.type(input, '45');

    // Verify the day is capped at 31
    expect(input).toHaveValue('31');
  },
};

/**
 * Tests that month values are capped at 12.
 */
export const TestMonthValidation: Story = {
  name: 'Test: Month Validation (max 12)',
  args: {
    label: 'Test måned',
    id: 'test-month',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.clear(input);

    // Type a valid day followed by an invalid month
    await userEvent.type(input, '1599'); // Day 15, month 99

    // Verify the month is capped at 12
    expect(input).toHaveValue('15.12');
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
    const lastValueDisplay = canvas.getByTestId('last-value');
    expect(lastValueDisplay).toHaveTextContent('01.01.2025');
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
  play: async ({ canvasElement, args }) => {
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
          onChange={(e, formattedValue) => setValue(formattedValue)}
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