import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState } from 'react'; 
import { Dropdown, DropdownProps } from './index'; 
import { Button } from '../Button'; 
import { Paragraph } from '@digdir/designsystemet-react'; 

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      description: 'The placement of the dropdown',
      defaultValue: 'bottom-start',
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
    id: {
      control: 'text',
      description:
        'id to connect the trigger with the popover - required when not using Popover.Context.',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    open: {
      control: 'boolean',
      description: 'When a boolean is provided, the popover will be controlled.',
      table: { disable: true },
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the popover wants to close.',
      table: { disable: true },
    },
    onOpen: {
      action: 'opened',
      description: 'Callback when the popover wants to open.',
      table: { disable: true },
    },
    autoPlacement: {
      control: 'boolean',
      description: 'Whether to enable auto placement.',
      defaultValue: true,
    },
    children: {
      control: false,
      description:
        'Dropdown content, typically Dropdown.Heading, Dropdown.List, etc.',
    },
  } as ArgTypes<DropdownProps>,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// --- Basic Example with TriggerContext ---
export const Default: Story = {
  render: (args) => (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.Heading>Options</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => alert('Edit clicked')}>
              Edit
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => alert('Copy clicked')}>
              Copy
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => alert('Delete clicked')} data-color="danger">
              Delete
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  ),
  args: {
    placement: 'bottom-start',
    'data-color': 'neutral',
  },
};

// --- Example without TriggerContext ---
export const WithoutContext: Story = {
  render: (args) => (
    <>
      <Button popovertarget="my-dropdown-example">Open Dropdown (No Context)</Button>
      <Dropdown {...args}>
        <Dropdown.Heading>Menu</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Action 1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Action 2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  ),
  args: {
    id: 'my-dropdown-example', 
    'data-color': 'brand1',
  },
};

// --- Example showing different placement ---
export const TopPlacement: Story = {
  render: (args) => (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>Open (Top)</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item A</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Item B</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  ),
  args: {
    placement: 'top-start',
    'data-color': 'brand2',
  },
};

// --- Example showing controlled state ---
export const Controlled: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? 'Close Controlled' : 'Open Controlled'}
        </Button>
        <Dropdown
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)} 
        >
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button onClick={() => setIsOpen(false)}>
                Close Me
              </Dropdown.Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Paragraph data-size="sm">State is controlled externally.</Paragraph>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </>
    );
  },
  args: {
    placement: 'bottom',
    'data-color': 'accent',
  },
};
