import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { Radio, RadioProps, Fieldset } from './index';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Radio presents a set of mutually exclusive options. Use one Radio per option, grouped by the same name.',
      },
    },
  },
  argTypes: {
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
      defaultValue: 'neutral',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio',
      defaultValue: false,
    },
    name: {
      control: 'text',
      description: 'Name used to group radios',
      defaultValue: 'alternativ',
    },
    value: {
      control: 'text',
      description: 'Value of the option',
    },
    label: {
      control: 'text',
      description: 'Label shown next to the radio',
      defaultValue: 'Ja',
    },
  } as ArgTypes<RadioProps>,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Er du over 18 år?</Fieldset.Legend>
      <Radio {...args} value="ja" label="Ja" name="alternativ" />
      <Radio {...args} value="nei" label="Nei" name="alternativ" />
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Aria Label (without label prop) ---
export const AriaLabel: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Velg et alternativ</Fieldset.Legend>
      <Radio {...args} value="a" aria-label="Alternativ A" name="aria-group" />
      <Radio {...args} value="b" aria-label="Alternativ B" name="aria-group" />
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
  },
  name: 'With aria-label',
};

// --- Grouping Example ---
export const Group: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Velg en frukt</Fieldset.Legend>
      <Radio {...args} value="apple" label="Eple" name="frukt" />
      <Radio {...args} value="banana" label="Banan" name="frukt" />
      <Radio {...args} value="pear" label="Pære" name="frukt" />
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- With Error (visually via legend and note) ---
export const WithError: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Velg en farge *</Fieldset.Legend>
      <p id="radio-error-note" style={{ color: 'var(--ds-color-danger-500)', marginTop: 4, marginBottom: 8 }}>
        Du må velge en farge
      </p>
      <Radio {...args} value="red" label="Rød" name="farge" aria-describedby="radio-error-note" />
      <Radio {...args} value="green" label="Grønn" name="farge" aria-describedby="radio-error-note" />
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- ReadOnly Example ---
export const ReadOnly: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Velg en status</Fieldset.Legend>
      <Radio {...args} value="on" label="På" name="status-ro" readOnly checked />
      <Radio {...args} value="off" label="Av" name="status-ro" readOnly />
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- Inline (two short options horizontally) ---
export const Inline: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Ja / Nei</Fieldset.Legend>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Radio {...args} value="ja" label="Ja" name="inline" />
        <Radio {...args} value="nei" label="Nei" name="inline" />
      </div>
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
  },
};

