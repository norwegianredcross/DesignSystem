import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput, DateInputProps } from './index';
import { CalendarIcon } from '@navikt/aksel-icons';
import { useState } from 'react';

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