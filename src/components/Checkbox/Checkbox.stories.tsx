// src/components/Checkbox/Checkbox.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React, { useState } from 'react';
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
    // Props directly available on DigDirCheckboxProps
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
    // Props like 'checked', 'defaultChecked' are controlled by state/hook
    checked: { control: false },
    defaultChecked: { control: false },
    // --- REMOVE indeterminate FROM argTypes ---
    // indeterminate: {
    //   control: false,
    //   description: 'Sets the indeterminate state of the checkbox',
    // },
    // --- END REMOVAL ---
  } as ArgTypes<CheckboxProps>, // Type assertion should now be valid
};

export default meta;

// ... rest of your stories remain the same ...

type Story = StoryObj<typeof Checkbox>;

// --- Default, WithDescription, Disabled, ReadOnly stories remain the same ---
export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    value: 'default',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true,
  },
};
// --- End unchanged stories ---

// --- Group Example ---
export const CheckboxGroup: Story = {
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

// --- Indeterminate Example ---
export const Indeterminate: Story = {
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
          {...getCheckboxProps({ allowIndeterminate: true })} // Hook handles indeterminate state
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
    // Disable irrelevant controls for this specific story
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
