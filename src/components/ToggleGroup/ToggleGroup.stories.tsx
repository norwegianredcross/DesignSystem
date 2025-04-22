import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import  { useState } from 'react'; // Import useState for controlled example
import { ToggleGroup, ToggleGroupProps } from './index'; // Import the main ToggleGroup component
// Import components for context/examples
import { Button, Divider, Paragraph } from '@digdir/designsystemet-react';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ToggleGroup allows users to select one option from a set of connected buttons.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    // Props directly available on DigDirToggleGroupProps
    defaultValue: {
      control: 'text',
      description: 'Default selected item value (uncontrolled mode).',
    },
    name: {
      control: 'text',
      description: 'Form element name for the group.',
      defaultValue: 'toggle-group-story', // Default name for story
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
      defaultValue: 'neutral',
    },
    value: {
      control: 'text',
      description: 'Selected item value (controlled mode).',
      table: { disable: true }, // Disable control, managed by state/defaultValue
    },
    onChange: {
      action: 'changed',
      description: 'Callback with selected ToggleGroup.Item value.',
      table: { disable: true }, // Disable control
    },
    children: { control: false },
  } as ArgTypes<ToggleGroupProps>,
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

// --- Basic Uncontrolled Example ---
export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>
    </ToggleGroup>
  ),
  args: {
    defaultValue: 'innboks', // Start with the first item selected
    name: 'folder-toggle',
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Example mimicking Icon Only (using text instead) ---
export const TextInsteadOfIcons: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      {/* Use short text instead of icons */}
      <ToggleGroup.Item value="option-1">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="option-2">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="option-3">Right</ToggleGroup.Item>
    </ToggleGroup>
  ),
  args: {
    defaultValue: 'option-1',
    name: 'alignment-toggle',
    'data-size': 'md',
    'data-color': 'accent',
  },
  name: 'Text Instead of Icons', // Renamed story
};

// --- Controlled Example (No Icons) ---
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('utkast');
    return (
      <>
        <ToggleGroup
          {...args} // Spread common args like size/color
          value={value} // Pass controlled value
          onChange={setValue} // Pass state setter
        >
          {/* Items without icons */}
          <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
          <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
          <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
          <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>
        </ToggleGroup>
        <Divider style={{ margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0' }} />
        <Paragraph>Du har valgt: {value}</Paragraph>
        <Button data-size="sm" onClick={() => setValue('arkiv')} style={{ marginTop: 'var(--ds-size-2)' }}>
          Velg Arkiv
        </Button>
      </>
    );
  },
  args: {
    // Don't set value/defaultValue here, it's controlled by state
    name: 'controlled-folder-toggle',
    'data-size': 'md',
    'data-color': 'brand1',
  },
};

// --- Example with Different Size ---
export const LargeSize: Story = {
  render: (args) => (
     <ToggleGroup {...args}>
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>
    </ToggleGroup>
  ),
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'data-size': 'lg', // Set size
    'data-color': 'neutral',
  },
  name: 'Large Size',
};
