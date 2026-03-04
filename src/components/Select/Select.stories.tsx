// src/components/Select/Select.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { Select, SelectProps } from './index';
import { Field, Label, ValidationMessage } from '@digdir/designsystemet-react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select (dropdown list) allows users to choose one option from a static list.',
      },
    },
  },
  argTypes: {
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates an error state for accessibility',
      defaultValue: false,
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Defines the width of Select',
      defaultValue: 'full',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables element',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      description: 'Defines if the select is readOnly',
      defaultValue: false,
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    id: { control: 'text' },
    'aria-labelledby': { control: 'text' },
    children: {
      control: false,
      description: 'Must contain Select.Option or Select.OptGroup elements',
    },
  } as ArgTypes<SelectProps>,
};

export default meta;

type Story = StoryObj<typeof Select>;

const mountainOptions = [
  { value: '', label: 'Velg et fjell …' },
  { value: 'galdhopiggen', label: 'Galdhøpiggen' },
  { value: 'glittertind', label: 'Glittertind' },
  { value: 'store_skagastolstind', label: 'Store Skagastølstind' },
  { value: 'gaustatoppen', label: 'Gaustatoppen' },
];

const groupedMountainOptions = [
  {
    label: 'Norske fjell',
    options: [
      { value: 'galdhopiggen', label: 'Galdhøpiggen' },
      { value: 'glittertind', label: 'Glittertind' },
      { value: 'gaustatoppen', label: 'Gaustatoppen' },
    ],
  },
  {
    label: 'Utenlandske fjell',
    options: [
      { value: 'everest', label: 'Mount Everest' },
      { value: 'k2', label: 'K2' },
      { value: 'kilimanjaro', label: 'Kilimanjaro' },
    ],
  },
];

// --- Example Basic ---
export const Default: Story = {
  name: 'Example Basic',
  render: (args) => (
    // Label outside Field
    <>
      <Label>Velg et fjell</Label>
      <Field data-size={args['data-size']}>
        <Select {...args}>
          {mountainOptions.map((opt) => (
            <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      </Field>
    </>
  ),
  args: {
    name: 'default-select',
    'data-size': 'md',
    width: 'auto',
  },
};

// --- Example with Error ---
export const WithError: Story = {
  name: 'Example with Error',
  render: (args) => (
    // Label outside Field
    <>
      <Label>Velg et fjell *</Label>
      <Field data-size={args['data-size']}>
        <Select
          required
          aria-describedby={args['aria-invalid'] ? 'select-error-message-story' : undefined}
          {...args}
        >
          {mountainOptions.map((opt) => (
            <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
        {args['aria-invalid'] && (
          <ValidationMessage id="select-error-message-story">
            Du må velge et fjell fra listen.
          </ValidationMessage>
        )}
      </Field>
    </>
  ),
  args: {
    name: 'error-select',
    'data-size': 'md',
    'aria-invalid': true,
    width: 'full',
  },
};

// --- Example with Grouping ---
export const WithGrouping: Story = {
    name: 'Example with Grouping (Optgroup)',
    render: (args) => (
      // Label outside Field
      <>
        <Label>Velg et fjell</Label>
        <Field data-size={args['data-size']}>
          <Select {...args}>
            <Select.Option value="" disabled>Velg et fjell …</Select.Option>
            {groupedMountainOptions.map((group) => (
              <Select.Optgroup key={group.label} label={group.label}>
                {group.options.map((opt) => (
                  <Select.Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Option>
                ))}
              </Select.Optgroup>
            ))}
          </Select>
        </Field>
      </>
    ),
    args: {
      name: 'grouped-select',
      'data-size': 'md',
      width: 'auto',
      defaultValue: 'everest',
    },
  };

// --- Example Disabled ---
export const Disabled: Story = {
 name: 'Example Disabled',
 render: (args) => (
    // Label outside Field
    <>
      <Label>Utilgjengelig valg</Label>
      <Field data-size={args['data-size']}>
        <Select {...args}>
           <Select.Option value="1">Valgt (Deaktivert)</Select.Option>
        </Select>
      </Field>
    </>
  ),
  args: {
    name: 'disabled-select',
    'data-size': 'md',
    disabled: true,
    value: '1',
  },
};

// --- Example ReadOnly ---
export const ReadOnly: Story = {
 name: 'Example ReadOnly',
 render: (args) => (
    // Label outside Field
    <>
      <Label>Kun lesbart valg</Label>
      <Field data-size={args['data-size']}>
        <Select {...args}>
           <Select.Option value="galdhopiggen">Galdhøpiggen</Select.Option>
        </Select>
      </Field>
    </>
  ),
  args: {
    name: 'readonly-select',
    'data-size': 'md',
    readOnly: true,
    value: 'galdhopiggen',
  },
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  render: () => (
    <>
      <Label htmlFor="test-select">Velg et fjell</Label>
      <Select id="test-select" name="test-select" defaultValue="">
        <Select.Option value="" disabled>Velg et fjell …</Select.Option>
        <Select.Option value="galdhopiggen">Galdhøpiggen</Select.Option>
        <Select.Option value="glittertind">Glittertind</Select.Option>
      </Select>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select should render with options
    const select = canvas.getByRole('combobox', { name: /velg et fjell/i });
    expect(select).toBeInTheDocument();

    // Change selection
    await userEvent.selectOptions(select, 'galdhopiggen');
    expect(select).toHaveValue('galdhopiggen');

    // Change again
    await userEvent.selectOptions(select, 'glittertind');
    expect(select).toHaveValue('glittertind');
  },
};

export const TestDisabledState: Story = {
  name: 'Test: Disabled State',
  render: () => (
    <>
      <Label htmlFor="test-select-disabled">Utilgjengelig valg</Label>
      <Select id="test-select-disabled" name="test-select-disabled" disabled value="1">
        <Select.Option value="1">Valgt (Deaktivert)</Select.Option>
      </Select>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = canvas.getByRole('combobox', { name: /utilgjengelig/i });
    expect(select).toBeDisabled();
  },
};
