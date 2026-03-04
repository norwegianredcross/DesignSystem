import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent, waitFor } from 'storybook/test';
import { useState } from 'react';
import { Tabs, TabsProps } from './index';
// Import components for context/examples
import { Button } from '@digdir/designsystemet-react';
// Import icons (assuming they are exported from the main package)

import { AirplaneIcon, NewspaperIcon, DogIcon } from '@navikt/aksel-icons';

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
    defaultValue: {
      control: 'text',
      description: 'Default selected tab value (uncontrolled mode).',
    },
    value: {
      control: 'text',
      description: 'Selected tab value (controlled mode).',
      table: { disable: true },
    },
    onChange: {
      action: 'changed',
      description: 'Callback with selected Tab value.',
      table: { disable: true }, 
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
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'neutral',
  },
};

// --- Icons Only Example ---
export const IconsOnly: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1" aria-label="Airplane">
          <AirplaneIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value2" aria-label="Newspaper">
          <NewspaperIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value3" aria-label="Dog">
          <DogIcon aria-hidden />
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
          {...args} 
          value={value} 
          onChange={setValue} 
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
    'data-size': 'lg', 
    'data-color': 'neutral',
  },
  name: 'Large Size',
};

// --- Icons with Text ---
export const IconsWithText: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">
          <AirplaneIcon aria-hidden style={{ marginRight: 6 }} />
          Fly
        </Tabs.Tab>
        <Tabs.Tab value="value2">
          <NewspaperIcon aria-hidden style={{ marginRight: 6 }} />
          Nyheter
        </Tabs.Tab>
        <Tabs.Tab value="value3">
          <DogIcon aria-hidden style={{ marginRight: 6 }} />
          Hund
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Fly</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Nyheter</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Hund</Tabs.Panel>
    </Tabs>
  ),
  args: {
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'neutral',
  },
  name: 'Icons with Text',
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  render: () => (
    <Tabs defaultValue="value1">
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Default tab content should be visible
    expect(canvas.getByText('Content for Tab 1')).toBeVisible();

    // First tab should be selected
    const tab1 = canvas.getByRole('tab', { name: /tab 1/i });
    expect(tab1).toHaveAttribute('aria-selected', 'true');

    // Click second tab
    const tab2 = canvas.getByRole('tab', { name: /tab 2/i });
    await userEvent.click(tab2);

    // Second tab should now be selected
    await waitFor(() => {
      expect(tab2).toHaveAttribute('aria-selected', 'true');
    });
    expect(tab1).toHaveAttribute('aria-selected', 'false');

    // Second panel content should be visible
    expect(canvas.getByText('Content for Tab 2')).toBeVisible();
  },
};
