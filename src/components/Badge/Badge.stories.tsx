// src/components/Badge/Badge.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { Badge, BadgeProps, BadgePosition } from './index';
import { Button } from '@digdir/designsystemet-react'; // Keep for icon button example if needed
import {
  InboxIcon,
  ChatIcon,
  VideoIcon,
  EnvelopeClosedFillIcon,
} from '@navikt/aksel-icons'; // Keep for icon examples
import { Tooltip } from '../Tooltip'; // Keep for icon examples

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'The number to display in the badge',
    },
    maxCount: {
      control: 'number',
      description: 'Maximum count before showing "+"',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Component size',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['base', 'tinted'],
      description: 'Background color style',
      defaultValue: 'base',
    },
    'data-color': {
      control: 'select',
      options: [
        'accent', 'brand1', 'brand2', 'brand3', 'neutral',
        'danger', 'info', 'success', 'warning',
      ],
      description: 'Color scheme',
      defaultValue: 'accent',
    },
    // Removed placement and overlap from here
  } as ArgTypes<BadgeProps>, // Use only BadgeProps
};

export default meta;

type Story = StoryObj<typeof Badge>;

// --- Example Default ---
export const Default: Story = {
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger',
  },
};

// --- Example with Count ---
export const WithCount: Story = {
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'accent',
  },
};

// --- Example with Max Count ---
export const WithMaxCount: Story = {
  name: 'Example with Max Count',
  args: {
    count: 150,
    maxCount: 99,
    'data-color': 'neutral',
  },
};

// --- Example Large Danger Tinted ---
export const LargeDangerTinted: Story = {
  name: 'Example Large Danger Tinted',
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted',
  },
};

// --- Example Status Only ---
export const StatusOnly: Story = {
  name: 'Example Status Only',
  args: {
    'data-color': 'success',
  },
};

// --- Example Floating Over Element ---
export const FloatingOverElement: Story = {
  name: 'Example Floating Over Element',
  render: (args) => (
    <BadgePosition placement="top-right">
      <Badge
        count={args.count}
        maxCount={args.maxCount}
        data-size={args['data-size']}
        variant={args.variant}
        data-color={args['data-color']}
      />
      <span
        style={{
          display: 'inline-block',
          width: 40,
          height: 40,
          background: '#eee',
          borderRadius: '50%',
          marginLeft: 16,
          marginRight: 16,
          marginTop: 16,
          marginBottom: 16,
        }}
      />
    </BadgePosition>
  ),
  args: {
    count: 3,
    'data-color': 'info',
    'data-size': 'md',
  },
};

// --- Example On Icon Buttons ---
export const OnIconButtons: Story = {
  name: 'Example On Icon Buttons',
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
          <Badge {...args} count={1000} maxCount={99} data-color="danger" />
          <InboxIcon title="Innboks" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
           <Badge {...args} count={10} data-color="danger" />
          <ChatIcon title="Meldinger" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
           <Badge {...args} data-color="danger" />
          <VideoIcon title="Skru på video" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
    </div>
  ),
  args: {
    'data-size': 'md',
    variant: 'base',
  },
  argTypes: {
     count: { control: false },
     maxCount: { control: false },
     'data-color': { control: false },
     // placement and overlap removed from meta, so no need to disable here
  }
};

// --- Example Placements ---
export const Placements: Story = {
  name: 'Example Placements',
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
      <BadgePosition placement="top-right">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="top-left">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="bottom-right">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="bottom-left">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>

      <div style={{ width: '100%', height: '1rem' }}></div>

      <BadgePosition placement="top-right" overlap="circle">
        <Badge {...args} />
        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--ds-color-brand2-base-default)' }} />
      </BadgePosition>
      <BadgePosition placement="top-left" overlap="circle">
        <Badge {...args} />
        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--ds-color-brand2-base-default)' }} />
      </BadgePosition>
      <BadgePosition placement="bottom-right" overlap="circle">
        <Badge {...args} />
        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--ds-color-brand2-base-default)' }} />
      </BadgePosition>
      <BadgePosition placement="bottom-left" overlap="circle">
        <Badge {...args} />
        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--ds-color-brand2-base-default)' }} />
      </BadgePosition>
    </div>
  ),
  args: {
    'data-color': 'accent',
    'data-size': 'md',
  },
  argTypes: {
     count: { control: false },
     maxCount: { control: false },   
  }
};
