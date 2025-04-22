import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React, { useState } from 'react'; // Import useState for controlled example
import { Radio, RadioProps, Fieldset, useRadioGroup } from './index'; // Import component, hook, Fieldset
import { ValidationMessage } from '@digdir/designsystemet-react'; // Import for group example

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Radio buttons allow users to select one option from a set. Use Fieldset for grouping.',
      },
    },
    // layout: 'centered', // Might not be ideal for groups
  },
  argTypes: {
    // Props directly available on DigDirRadioProps
    label: {
      control: 'text',
      description: 'Radio label',
      // defaultValue: 'Radio', // Default shown in story instead
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
      control: 'text', // Simple control, actual value depends on usage
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
      control: 'text', // Control for error message text
      description: 'Error message for field (often used with Fieldset/hook)',
    },
    // Aria attributes are passed directly if needed, or handled by hook
    'aria-label': { control: 'text' },
    'aria-labelledby': { control: 'text' },
    // Props like 'checked', 'defaultChecked' are controlled by state/hook
    checked: { control: false },
    defaultChecked: { control: false },
    name: { control: false }, // Usually handled by hook
  } as ArgTypes<RadioProps>,
};

export default meta;

type Story = StoryObj<typeof Radio>;

// --- Single Radio (less common, needs context) ---
export const Single: Story = {
  render: (args) => (
    // Needs a Fieldset/Label for proper context usually
    <Fieldset>
      <Radio {...args} />
    </Fieldset>
  ),
  args: {
    label: 'Enkeltvalg',
    value: 'single_option',
    name: 'single-radio-group', // Need name even for one
  },
};

// --- Radio Group Example ---
export const RadioGroup: Story = {
  render: (args) => {
    // Note: Hook usage requires this to be a functional component
    const [selectedValue, setSelectedValue] = useState<string>('jordbaer');
    const { getRadioProps } = useRadioGroup({
      name: 'ice-cream-flavor',
      value: selectedValue,
      onChange: (nextValue) => setSelectedValue(nextValue),
      // Pass other group props from args if needed (disabled, readOnly)
      disabled: args.disabled,
      readOnly: args.readOnly,
    });

    return (
      // Use Fieldset for grouping and accessibility
      <Fieldset>
        <Fieldset.Description>
          Velg din favorittsmak blant alternativene.
        </Fieldset.Description>
        <Radio
          label="Vanilje"
          {...getRadioProps('vanilje')}
          data-size={args['data-size']} // Apply size/color from args if needed
          data-color={args['data-color']}
        />
        <Radio
          label="Jordbær"
          description="Jordbær er best" // Example with description
          {...getRadioProps('jordbaer')}
          data-size={args['data-size']}
          data-color={args['data-color']}
        />
        <Radio
          label="Sjokolade"
          {...getRadioProps('sjokolade')}
          data-size={args['data-size']}
          data-color={args['data-color']}
        />
        <Radio
          label="Jeg spiser ikke iskrem"
          {...getRadioProps('ingen')}
          data-size={args['data-size']}
          data-color={args['data-color']}
        />
      </Fieldset>
    );
  },
  argTypes: {
    // Disable individual radio controls when showing group
    label: { control: false },
    description: { control: false },
    value: { control: false },
    checked: { control: false },
    defaultChecked: { control: false },
    error: { control: false }, // Error handled in separate story
    // Keep controls relevant to the group
    disabled: { control: 'boolean', defaultValue: false },
    readOnly: { control: 'boolean', defaultValue: false },
    'data-size': { control: 'select', options: ['sm', 'md', 'lg'] },
    'data-color': { control: 'select', options: ['accent', 'neutral'] }, // Limit colors for group example clarity
  },
  args: {
    // Default args for the group story
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'accent',
  },
};

// --- Radio Group with Error ---
export const WithError: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>(''); // Start empty to show error
    const errorMessage = args.error || 'Du må velge en smak!'; // Use error from args
    const { getRadioProps, validationMessageProps } = useRadioGroup({
      name: 'ice-cream-error',
      value: selectedValue,
      onChange: setSelectedValue,
      error: errorMessage, // Pass error message to hook
    });

    return (
      <Fieldset>
        <Fieldset.Description>
          Velg din favorittsmak blant alternativene.
        </Fieldset.Description>
        <Radio label="Vanilje" {...getRadioProps('vanilje')} />
        <Radio label="Jordbær" {...getRadioProps('jordbaer')} />
        <Radio label="Sjokolade" {...getRadioProps('sjokolade')} />
        {/* Spread props onto ValidationMessage */}
        <ValidationMessage {...validationMessageProps}>
          {errorMessage}
        </ValidationMessage>
      </Fieldset>
    );
  },
  argTypes: {
    label: { control: false },
    description: { control: false },
    value: { control: false },
    checked: { control: false },
    defaultChecked: { control: false },
    disabled: { control: false },
    readOnly: { control: false },
    error: { control: 'text', defaultValue: 'Du må velge en smak!' }, // Control error text
  },
  args: {
    'data-size': 'md',
    'data-color': 'accent',
    error: 'Du må velge en smak!', // Default error message for the story
  },
  name: 'Group with Error',
};

// --- Inline Example ---
export const Inline: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>('ja');
    const { getRadioProps } = useRadioGroup({
      name: 'contact-inline',
      value: selectedValue,
      onChange: setSelectedValue,
    });

    return (
      <Fieldset>
        <Fieldset.Description>
          Bekreft om du ønsker å bli kontaktet per e-post.
        </Fieldset.Description>
        {/* Add inline style or class for layout */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Radio label="Ja" {...getRadioProps('ja')} data-size={args['data-size']} />
          <Radio label="Nei" {...getRadioProps('nei')} data-size={args['data-size']} />
        </div>
      </Fieldset>
    );
  },
  args: {
    'data-size': 'md',
  },
};
