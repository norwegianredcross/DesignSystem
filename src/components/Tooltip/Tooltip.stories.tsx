import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Tooltip, TooltipProps } from './index'; // Import the main Tooltip component
// Import components for context/examples
import { Button } from '@digdir/designsystemet-react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip displays brief information on hover or focus, often explaining icons or providing secondary details.',
      },
    },
    layout: 'centered', // Center for better viewing
  },
  argTypes: {
    // Props directly available on DigDirTooltipProps
    content: {
      control: 'text',
      description: 'Content displayed inside the tooltip.',
      defaultValue: 'Tooltip text',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Placement of the tooltip relative to the trigger.',
      defaultValue: 'top',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    children: {
      control: 'text', // Simple control for string trigger
      description: 'The trigger element (string or React element).',
      defaultValue: 'My trigger (string)',
    },
    open: {
      control: 'boolean',
      description: 'Manually controls the open state (overrides internal state).',
      table: { disable: true },
    },
  } as ArgTypes<TooltipProps>,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

// --- Basic Example with String Trigger ---
export const DefaultStringTrigger: Story = {
  render: (args) => (
    <Tooltip {...args}>{args.children}</Tooltip>
  ),
  args: {
    content: 'This tooltip explains the trigger text.',
    children: 'Hover or focus me (string)', // Children provided via args
    placement: 'top',
  },
  name: 'String Trigger',
};

// --- Example with Button Trigger ---
export const ButtonTrigger: Story = {
  render: (args) => (
    // Spread args onto Tooltip
    <Tooltip {...args}>
      {/* Children defined directly in render */}
      <Button>My trigger (button)</Button>
    </Tooltip>
  ),
  args: {
    content: 'This tooltip is triggered by the button.',
    // FIX: Omit children from args when defined in render
    // children: null,
    placement: 'bottom',
  },
  name: 'Button Trigger',
};

// --- Different Placements ---
export const Placements: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      {/* Spread args onto each Tooltip */}
      <Tooltip {...args} placement="top" content="Top Tooltip">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip {...args} placement="bottom" content="Bottom Tooltip">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip {...args} placement="left" content="Left Tooltip">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip {...args} placement="right" content="Right Tooltip">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
  args: {
    // Common args for this story group
    // FIX: Omit children from args when defined in render
    // children: null,
    // You could set a default content here if desired
    content: 'Tooltip content',
  },
  // Disable placement control for this story as it shows all placements
  argTypes: {
    placement: { control: false },
    children: { control: false }, // Keep children control disabled for this story
  },
};
