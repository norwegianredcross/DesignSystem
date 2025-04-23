import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Tooltip, TooltipProps } from './index'; 
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
    layout: 'centered', 
  },
  argTypes: {
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
      control: 'text', 
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
    <Tooltip {...args}>
      <Button>My trigger (button)</Button>
    </Tooltip>
  ),
  args: {
    content: 'This tooltip is triggered by the button.',
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
    content: 'Tooltip content',
  },
  
  argTypes: {
    placement: { control: false },
    children: { control: false },
  },
};
