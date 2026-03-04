import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
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
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="ja" label="Ja" name="alternativ" />
      {/* @ts-expect-error Storybook args spread */}
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
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="a" aria-label="Alternativ A" name="aria-group" />
      {/* @ts-expect-error Storybook args spread */}
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
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="apple" label="Eple" name="frukt" />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="banana" label="Banan" name="frukt" />
      {/* @ts-expect-error Storybook args spread */}
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
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="red" label="Rød" name="farge" aria-describedby="radio-error-note" />
      {/* @ts-expect-error Storybook args spread */}
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
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="on" label="På" name="status-ro" readOnly checked />
      {/* @ts-expect-error Storybook args spread */}
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
        {/* @ts-expect-error Storybook args spread */}
        <Radio {...args} value="ja" label="Ja" name="inline" />
        {/* @ts-expect-error Storybook args spread */}
        <Radio {...args} value="nei" label="Nei" name="inline" />
      </div>
    </Fieldset>
  ),
  args: {
    'data-size': 'md',
  },
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Velg et alternativ</Fieldset.Legend>
      <Radio value="yes" label="Ja" name="test-radio" />
      <Radio value="no" label="Nei" name="test-radio" />
      <Radio value="maybe" label="Kanskje" name="test-radio" />
    </Fieldset>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const radioYes = canvas.getByRole('radio', { name: /ja/i });
    const radioNo = canvas.getByRole('radio', { name: /nei/i });
    const radioMaybe = canvas.getByRole('radio', { name: /kanskje/i });

    // None selected initially
    expect(radioYes).not.toBeChecked();
    expect(radioNo).not.toBeChecked();

    // Click selects radio
    await userEvent.click(radioYes);
    expect(radioYes).toBeChecked();

    // Only one selected at a time
    await userEvent.click(radioNo);
    expect(radioNo).toBeChecked();
    expect(radioYes).not.toBeChecked();

    // Switching to third option
    await userEvent.click(radioMaybe);
    expect(radioMaybe).toBeChecked();
    expect(radioNo).not.toBeChecked();
  },
};

