import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState } from 'react'; // Import useState for controlled example
import { Switch, SwitchProps, Fieldset } from './index'; // Import Switch and Fieldset

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
    // layout: 'centered', // Might not be ideal for groups
  },
  argTypes: {
    // Props directly available on DigDirSwitchProps
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
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Changes color for descendant Designsystemet components.',
      defaultValue: 'accent',
    },
    value: {
      control: 'text',
      description: 'Value of the input element',
    },
    // aria-label and aria-labelledby removed from global argTypes
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    name: { control: 'text' },
  } as ArgTypes<SwitchProps>, // Use base SwitchProps
};

export default meta;

type Story = StoryObj<typeof Switch>;

// --- Basic Example ---
// (This story remains unchanged)
export const Default: Story = {
  args: {
    label: 'Mørk modus', // Uses label
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false,
  },
};

// --- Grouped Example ---
export const Grouped: Story = {
  render: (args) => {
    // FIX: Destructure relevant props from args instead of spreading
    const { 'data-size': dataSize, 'data-color': dataColor, position } = args;
    return (
      <Fieldset >
        {/* Pass props explicitly */}
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
          disabled // Keep disabled prop directly
        />
      </Fieldset>
    );
    // --- END FIX ---
  },
  args: {
    // Common args for the group remain
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'start',
  },
};

// --- Right Positioned Example ---
export const RightPositioned: Story = {
  render: (args) => {
    // FIX: Destructure relevant props from args instead of spreading
    const { 'data-size': dataSize, 'data-color': dataColor, position } = args;
    return (
      <Fieldset>
        {/* Pass props explicitly */}
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
          disabled // Keep disabled prop directly
        />
      </Fieldset>
    );
    // --- END FIX ---
  },
  args: {
    // Common args for the group remain
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'end',
  },
  name: 'Right Positioned',
};

// --- Disabled Example ---
// (This story remains unchanged)
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
// (This story remains unchanged)
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
// (This story remains unchanged)
export const Controlled: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div>
        {/* Spread args is safe here because 'label' is in args, not explicit */}
        <Switch
          {...args}
          // label="Kontrollert Switch" // Label comes from args if defined
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
    label: 'Kontrollert Switch', // Provide label via args
    value: 'controlled_toggle',
    name: 'controlled-switch',
    // checked and onChange are handled by state
  },
};
