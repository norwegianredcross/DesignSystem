import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState } from 'react'; 
import { Radio, RadioProps, Fieldset, useRadioGroup } from './index'; 
import { ValidationMessage } from '@digdir/designsystemet-react'; 

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
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio label',
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
      description: 'Error message for field (often used with Fieldset/hook)',
    },
    'aria-label': { control: 'text' },
    'aria-labelledby': { control: 'text' },
    checked: { control: false },
    defaultChecked: { control: false },
    name: { control: false }, 
  } as ArgTypes<RadioProps>,
};

export default meta;

type Story = StoryObj<typeof Radio>;

// --- Single Radio  ---
export const Single: Story = {
  render: (args) => (
    <Fieldset>
      <Radio {...args} />
    </Fieldset>
  ),
  args: {
    label: 'Enkeltvalg',
    value: 'single_option',
    name: 'single-radio-group', 
  },
};

// --- Radio Group Example ---
export const RadioGroup: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>('jordbaer');
    const { getRadioProps } = useRadioGroup({
      name: 'ice-cream-flavor',
      value: selectedValue,
      onChange: (nextValue) => setSelectedValue(nextValue),
      disabled: args.disabled,
      readOnly: args.readOnly,
    });

    return (
      <Fieldset>
        <Fieldset.Description>
          Velg din favorittsmak blant alternativene.
        </Fieldset.Description>
        <Radio
          label="Vanilje"
          {...getRadioProps('vanilje')}
          data-size={args['data-size']} 
          data-color={args['data-color']}
        />
        <Radio
          label="Jordbær"
          description="Jordbær er best" 
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
    label: { control: false },
    description: { control: false },
    value: { control: false },
    checked: { control: false },
    defaultChecked: { control: false },
    error: { control: false }, 
    disabled: { control: 'boolean', defaultValue: false },
    readOnly: { control: 'boolean', defaultValue: false },
    'data-size': { control: 'select', options: ['sm', 'md', 'lg'] },
    'data-color': { control: 'select', options: ['accent', 'neutral'] }, 
  },
  args: {
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'accent',
  },
};

// --- Radio Group with Error ---
export const WithError: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>(''); 
    const errorMessage = args.error || 'Du må velge en smak!';
    const { getRadioProps, validationMessageProps } = useRadioGroup({
      name: 'ice-cream-error',
      value: selectedValue,
      onChange: setSelectedValue,
      error: errorMessage, 
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
    error: { control: 'text', defaultValue: 'Du må velge en smak!' }, 
  },
  args: {
    'data-size': 'md',
    'data-color': 'accent',
    error: 'Du må velge en smak!', 
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
