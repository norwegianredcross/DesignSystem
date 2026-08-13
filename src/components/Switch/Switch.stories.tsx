import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { useState } from 'react';
import { Switch, SwitchProps, Fieldset } from './index'; 
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Switch allows users to toggle between two states, typically on or off.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label (use this OR aria-label, not both)',
      defaultValue: 'Switch Label',
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
    position: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of switch relative to label',
      defaultValue: 'start',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['primary-color-red', 'secondary-color-orange', 'secondary-color-rust', 'secondary-color-pink', 'additional-color-ocean', 'additional-color-jungle', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'primary-color-red',
    },
    value: {
      control: 'text',
      description: 'Value of the input element',
    },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    name: { control: 'text' },
  } as ArgTypes<SwitchProps>, 
};

export default meta;

type Story = StoryObj<typeof Switch>;

// --- Basic Example ---
export const Default: Story = {
  args: {
    label: 'Mørk modus', 
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false,
  },
};

// --- Grouped Example ---
export const Grouped: Story = {
  // The gate is ON with two rule-precise exemptions for upstream Digdir
  // markup/styling (see TESTING.md):
  // 1. aria-allowed-role: Digdir's Fieldset sets a redundant role="group"
  //    on <fieldset> (a fieldset already IS a group).
  // 2. color-contrast, ONLY on [data-field="description"]: the disabled
  //    switch's description is styled faded by Digdir (#cecece, 1.57:1).
  //    WCAG 1.4.3 exempts text in inactive controls, but axe cannot
  //    associate the description div with the disabled input, so it
  //    flags it anyway. Everything else is still contrast-checked.
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'aria-allowed-role', enabled: false },
          { id: 'color-contrast', selector: '*:not([data-field="description"])' },
        ],
      },
    },
  },
  render: (args) => {
    const { 'data-size': dataSize, 'data-color': dataColor, position } = args;
    return (
      <Fieldset >
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 1"
          description="Beskrivelse av innstilling"
          value="setting1"
          name="settings-group"
          defaultChecked
        />
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 2"
          value="setting2"
          name="settings-group"
        />
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 3"
          value="setting3"
          name="settings-group"
          defaultChecked
        />
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 4"
          description="Du mangler rettigheter for denne instillingen"
          value="setting4"
          name="settings-group"
          disabled
        />
      </Fieldset>
    );
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'start',
  },
};

// --- Right Positioned Example ---
export const RightPositioned: Story = {
  // The gate is ON with two rule-precise exemptions for upstream Digdir
  // markup/styling (see TESTING.md):
  // 1. aria-allowed-role: Digdir's Fieldset sets a redundant role="group"
  //    on <fieldset> (a fieldset already IS a group).
  // 2. color-contrast, ONLY on [data-field="description"]: the disabled
  //    switch's description is styled faded by Digdir (#cecece, 1.57:1).
  //    WCAG 1.4.3 exempts text in inactive controls, but axe cannot
  //    associate the description div with the disabled input, so it
  //    flags it anyway. Everything else is still contrast-checked.
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'aria-allowed-role', enabled: false },
          { id: 'color-contrast', selector: '*:not([data-field="description"])' },
        ],
      },
    },
  },
  render: (args) => {
    const { 'data-size': dataSize, 'data-color': dataColor, position } = args;
    return (
      <Fieldset>
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 1"
          description="Beskrivelse av innstilling"
          value="setting1-right"
          name="settings-group-right"
          defaultChecked
        />
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 2"
          value="setting2-right"
          name="settings-group-right"
        />
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 3"
          value="setting3-right"
          name="settings-group-right"
          defaultChecked
        />
        <Switch
          data-size={dataSize}
          data-color={dataColor}
          position={position}
          label="Innstilling 4"
          description="Du mangler rettigheter for denne instillingen"
          value="setting4-right"
          name="settings-group-right"
          disabled 
        />
      </Fieldset>
    );
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'end',
  },
  name: 'Right Positioned',
};

// --- Disabled Example ---
export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true,
  },
};

// --- ReadOnly Example ---
export const ReadOnly: Story = {
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true,
  },
};

// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div>
        <Switch
          {...args}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <p style={{ marginTop: '8px', fontSize: '0.9em' }}>
          Current state: {isChecked ? 'Checked (On)' : 'Unchecked (Off)'}
        </p>
      </div>
    );
  },
  args: {
    label: 'Kontrollert Switch', 
    value: 'controlled_toggle',
    name: 'controlled-switch',
  },
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  args: {
    label: 'Test Switch',
    value: 'test_toggle',
    name: 'test-switch',
    defaultChecked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Switch renders with role="switch"
    const switchInput = canvas.getByRole('switch', { name: /test switch/i });
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).not.toBeChecked();

    // Click should toggle state
    await userEvent.click(switchInput);
    expect(switchInput).toBeChecked();

    // Click again should uncheck
    await userEvent.click(switchInput);
    expect(switchInput).not.toBeChecked();
  },
};
