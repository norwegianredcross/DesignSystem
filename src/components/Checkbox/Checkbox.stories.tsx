// src/components/Checkbox/Checkbox.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState } from 'react';
import {
  Checkbox,
  CheckboxProps,
  Fieldset,
  useCheckboxGroup,
} from './index';
import { ValidationMessage } from '@digdir/designsystemet-react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label',
      defaultValue: 'Checkbox label',
    },
    description: {
      control: 'text',
      description: 'Description for field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables element',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      description: 'Toggle readOnly',
      defaultValue: false,
    },
    value: {
      control: 'text',
      description: 'Value of the input element',
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
      defaultValue: 'accent',
    },
    error: {
      control: 'text',
      description: 'Error message for field (often used with Fieldset)',
    },
    'aria-label': { control: 'text' },
    'aria-labelledby': { control: 'text' },
    checked: { control: false },
    defaultChecked: { control: false },
  } as ArgTypes<CheckboxProps>,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// --- Example Default ---
export const Default: Story = {
  name: 'Example Default', // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default',
  },
};

// --- Example with Description ---
export const WithDescription: Story = {
  name: 'Example with Description', // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description',
  },
};

// --- Example Disabled ---
export const Disabled: Story = {
  name: 'Example Disabled', // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true,
  },
};

// --- Example ReadOnly ---
export const ReadOnly: Story = {
  name: 'Example ReadOnly', // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true,
  },
};

// --- Example Group ---
export const CheckboxGroup: Story = {
  name: 'Example Group', // Renamed
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['email']);
    const errorMessage = args.error ? 'Du må velge minst ett alternativ' : undefined;
    const { getCheckboxProps, validationMessageProps } = useCheckboxGroup({
      name: 'contact-preference',
      value: selectedValues,
      onChange: setSelectedValues,
      error: errorMessage,
    });

    return (
      <Fieldset>
        <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
        <Fieldset.Description>
          Velg alle alternativene som er relevante for deg.
        </Fieldset.Description>
        <Checkbox
          label="E-post"
          {...getCheckboxProps('email')}
          data-size={args['data-size']}
          data-color={args['data-color']}
          disabled={args.disabled}
          readOnly={args.readOnly}
        />
        <Checkbox
          label="Telefon"
          {...getCheckboxProps('phone')}
          data-size={args['data-size']}
          data-color={args['data-color']}
          disabled={args.disabled}
          readOnly={args.readOnly}
        />
        <Checkbox
          label="SMS"
          {...getCheckboxProps('sms')}
          data-size={args['data-size']}
          data-color={args['data-color']}
          disabled={args.disabled}
          readOnly={args.readOnly}
        />
        {errorMessage && (
          <ValidationMessage {...validationMessageProps}>
            {errorMessage}
          </ValidationMessage>
        )}
      </Fieldset>
    );
  },
  argTypes: {
    label: { control: false },
    description: { control: false },
    value: { control: false },
    checked: { control: false },
    defaultChecked: { control: false },
    error: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    readOnly: { control: 'boolean', defaultValue: false },
    'data-size': { control: 'select', options: ['sm', 'md', 'lg'] },
    'data-color': { control: 'select', options: ['accent', 'neutral'] },
  },
  args: {
    error: false,
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'accent',
  },
};

// --- Example Indeterminate ---
export const Indeterminate: Story = {
  name: 'Example Indeterminate', // Renamed
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([
      'content1',
      'content3',
    ]);
    const allValues = ['content1', 'content2', 'content3', 'content4'];
    const { getCheckboxProps } = useCheckboxGroup({
      name: 'indeterminate-group',
      value: selectedValues,
      onChange: setSelectedValues,
    });

    return (
      <Fieldset>
        <Fieldset.Legend>Select Items</Fieldset.Legend>
        <Checkbox
          label="Select All"
          {...getCheckboxProps({ allowIndeterminate: true })}
          data-size={args['data-size']}
          data-color={args['data-color']}
        />
        <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
          {allValues.map((val) => (
            <Checkbox
              key={val}
              label={val.charAt(0).toUpperCase() + val.slice(1)}
              {...getCheckboxProps(val)}
              data-size={args['data-size']}
              data-color={args['data-color']}
            />
          ))}
        </div>
      </Fieldset>
    );
  },
  argTypes: {
    label: { control: false },
    description: { control: false },
    value: { control: false },
    checked: { control: false },
    defaultChecked: { control: false },
    error: { control: false },
    disabled: { control: false },
    readOnly: { control: false },
  },
  args: {
    'data-size': 'md',
    'data-color': 'accent',
  },
};
