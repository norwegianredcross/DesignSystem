import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { useState } from 'react'; 
import { Popover, PopoverProps } from './index'; 
import { Button, Paragraph } from '@digdir/designsystemet-react';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Popover displays information or interactive elements over other content, anchored to a trigger element.',
      },
    },
    layout: 'centered', 
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top', 'right', 'bottom', 'left',
        'top-start', 'top-end', 'right-start', 'right-end',
        'bottom-start', 'bottom-end', 'left-start', 'left-end',
      ],
      description: 'Placement of the popover relative to the trigger.',
      defaultValue: 'top',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Changes size for descendant Designsystemet components.',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral', 'danger', 'info', 'success', 'warning'],
      description: 'Changes color scheme of the popover.',
      defaultValue: 'neutral',
    },
    id: {
      control: 'text',
      description: 'Required ID when not using Popover.TriggerContext.',
    },
    open: {
      control: 'boolean',
      description: 'Controls the open/closed state (controlled mode).',
      table: { disable: true }, 
    },
    variant: {
      control: 'select',
      options: ['default', 'tinted'],
      description: 'Change the background color of the popover.',
      defaultValue: 'default',
    },
    onOpen: {
      action: 'opened',
      description: 'Callback when the popover wants to open.',
      table: { disable: true },
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the popover wants to close.',
      table: { disable: true },
    },
    autoPlacement: {
      control: 'boolean',
      description: 'Whether to enable auto placement.',
      defaultValue: true,
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    children: {
      control: 'text', 
      description: 'Popover content.',
      defaultValue: 'Popover Content',
    },
  } as ArgTypes<PopoverProps>,
};

export default meta;

type Story = StoryObj<typeof Popover>;

// --- Basic Example with TriggerContext ---
export const Default: Story = {
  render: (args) => (
    <Popover.TriggerContext>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover {...args}>{args.children}</Popover>
    </Popover.TriggerContext>
  ),
  args: {
    children: 'This is the default popover content.',
    placement: 'bottom',
    'data-color': 'neutral',
    variant: 'default',
  },
};

// --- Example without TriggerContext ---
export const WithoutContext: Story = {
  render: (args) => (
    <>
      <Button popovertarget="my-popover-example-no-context">
        Open Popover (No Context)
      </Button>
      <Popover {...args}>{args.children}</Popover>
    </>
  ),
  args: {
    id: 'my-popover-example-no-context', 
    children: 'Content for popover without context.',
    placement: 'right',
    'data-color': 'accent',
  },
};

// --- Example with Interactive Content ---
export const InteractiveContent: Story = {
  render: (args) => (
    <Popover.TriggerContext>
      <Popover.Trigger>Confirm Action</Popover.Trigger>
      <Popover {...args}>
        <Paragraph data-size="sm">Are you sure you want to proceed?</Paragraph>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <Button data-size="sm" variant="secondary" onClick={() => alert('Cancelled')}>
            Cancel
          </Button>
          <Button data-size="sm" variant="primary" onClick={() => alert('Confirmed')}>
            Confirm
          </Button>
        </div>
      </Popover>
    </Popover.TriggerContext>
  ),
  args: {
    children: null, 
    placement: 'bottom-end',
    'data-color': 'neutral',
    variant: 'tinted',
  },
  name: 'With Interactive Content',
};

// --- Example with Different Color/Variant ---
export const DangerTinted: Story = {
  render: (args) => (
    <Popover.TriggerContext>
      <Popover.Trigger>Show Danger Info</Popover.Trigger>
      <Popover {...args}>{args.children}</Popover>
    </Popover.TriggerContext>
  ),
  args: {
    children: 'This action cannot be undone.',
    placement: 'top',
    'data-color': 'danger',
    variant: 'tinted',
  },
  name: 'Danger Tinted',
};

// --- Controlled Example ---
export const Controlled: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? 'Close Controlled Popover' : 'Open Controlled Popover'}
        </Button>
        {/* Pass open and onClose */}
        <Popover
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)} 
        >
          <Paragraph data-size="sm">This popover is controlled externally.</Paragraph>
          <Button data-size="sm" onClick={() => setIsOpen(false)} style={{marginTop: '8px'}}>Close Me</Button>
        </Popover>
      </>
    );
  },
  args: {
    children: null,
    placement: 'bottom',
    'data-color': 'info',
  },
};
