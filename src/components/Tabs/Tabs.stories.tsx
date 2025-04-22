import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState } from 'react'; // Import useState for controlled example
import { Tabs, TabsProps } from './index'; // Import the main Tabs component
// Import components for context/examples
import { Button } from '@digdir/designsystemet-react';
// Import icons (assuming they are exported from the main package)


const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabs allow users to navigate between related sections of content, displaying one section at a time.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    // Props directly available on DigDirTabsProps
    defaultValue: {
      control: 'text',
      description: 'Default selected tab value (uncontrolled mode).',
    },
    value: {
      control: 'text',
      description: 'Selected tab value (controlled mode).',
      table: { disable: true }, // Disable control, managed by state/defaultValue
    },
    onChange: {
      action: 'changed',
      description: 'Callback with selected Tab value.',
      table: { disable: true }, // Disable control
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
    children: { control: false },
  } as ArgTypes<TabsProps>,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

// --- Basic Uncontrolled Example ---
export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Tab 1</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Tab 2</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Tab 3</Tabs.Panel>
    </Tabs>
  ),
  args: {
    defaultValue: 'value1', // Start with the first tab selected
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Icons Only Example ---
export const IconsOnly: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">
          
        </Tabs.Tab>
        <Tabs.Tab value="value2">
          
        </Tabs.Tab>
        <Tabs.Tab value="value3">
          
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Airplane</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Newspaper</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Dog</Tabs.Panel>
    </Tabs>
  ),
  args: {
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'accent',
  },
  name: 'Icons Only',
};

// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('value1');
    return (
      <>
        <Button data-size="sm" onClick={() => setValue('value3')} style={{ marginBottom: '1rem' }}>
          Choose Tab 3
        </Button>
        <Tabs
          {...args} // Spread common args like size/color
          value={value} // Pass controlled value
          onChange={setValue} // Pass state setter
        >
          <Tabs.List>
            <Tabs.Tab value="value1">
              
              Tab 1
            </Tabs.Tab>
            <Tabs.Tab value="value2">
              
              Tab 2
            </Tabs.Tab>
            <Tabs.Tab value="value3">
              
              Tab 3
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="value1">Content for Tab 1 (Controlled)</Tabs.Panel>
          <Tabs.Panel value="value2">Content for Tab 2 (Controlled)</Tabs.Panel>
          <Tabs.Panel value="value3">Content for Tab 3 (Controlled)</Tabs.Panel>
        </Tabs>
      </>
    );
  },
  args: {
    // Don't set value/defaultValue here, it's controlled by state
    'data-size': 'md',
    'data-color': 'brand1',
  },
};

// --- Example with Different Size ---
export const LargeSize: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">Large Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Large Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Large Tab 1</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Large Tab 2</Tabs.Panel>
    </Tabs>
  ),
  args: {
    defaultValue: 'value1',
    'data-size': 'lg', // Set size
    'data-color': 'neutral',
  },
  name: 'Large Size',
};
