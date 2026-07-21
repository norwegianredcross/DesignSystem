// src/components/Badge/Badge.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Badge, BadgeProps, BadgePosition } from './index';
import { Button } from '@digdir/designsystemet-react'; // Keep for icon button example if needed
import {
  InboxIcon,
  ChatIcon,
  VideoIcon,
  EnvelopeClosedFillIcon,
} from '@navikt/aksel-icons'; // Keep for icon examples


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

// --- INTERACTION TESTS ---

/**
 * Tests the count display logic: the number is exposed through the data-count
 * attribute (rendered visually via CSS), maxCount caps the display as
 * "<maxCount>+" only when count exceeds it (count === maxCount is NOT
 * capped), and a badge without count is a pure status dot without data-count.
 */
export const TestCountAndMaxCount: Story = {
  name: 'Test: Count And MaxCount Formatting',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <span data-testid="badge-count">
        <Badge count={7} data-color="accent" />
      </span>
      <span data-testid="badge-capped">
        <Badge count={150} maxCount={99} data-color="danger" />
      </span>
      <span data-testid="badge-at-max">
        <Badge count={99} maxCount={99} data-color="neutral" />
      </span>
      <span data-testid="badge-dot">
        <Badge data-color="success" />
      </span>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = (testId: string) =>
      canvas.getByTestId(testId).firstElementChild as HTMLElement;

    // Plain count is shown as-is
    expect(badge('badge-count')).toHaveAttribute('data-count', '7');

    // Count above maxCount is capped as "<maxCount>+"
    expect(badge('badge-capped')).toHaveAttribute('data-count', '99+');

    // Count equal to maxCount is NOT capped
    expect(badge('badge-at-max')).toHaveAttribute('data-count', '99');

    // Dot mode: no count -> no data-count attribute at all
    expect(badge('badge-dot')).not.toHaveAttribute('data-count');

    // The count lives in the attribute (CSS-rendered), not as DOM text
    expect(badge('badge-count').textContent).toBe('');

    // The badge itself is a non-interactive status marker
    expect(badge('badge-count')).not.toHaveAttribute('role');
    expect(badge('badge-count')).not.toHaveAttribute('tabindex');
  },
};

/**
 * Tests that the BadgePosition wrapper positions the badge over a child
 * without breaking the child's accessibility: the icon keeps its accessible
 * name, the host button keeps its label, and neither the wrapper nor the
 * badge injects roles or aria-hidden on the content.
 */
export const TestPositionedBadgeAccessibility: Story = {
  name: 'Test: Positioned Badge Accessibility',
  render: () => (
    <Button icon variant="tertiary" aria-label="Innboks, 12 uleste meldinger">
      <BadgePosition placement="top-right">
        <Badge count={12} maxCount={9} data-color="danger" />
        <InboxIcon title="Innboks" fontSize="1.5rem" />
      </BadgePosition>
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // The host button keeps its explicit accessible name
    const button = canvas.getByRole('button', {
      name: 'Innboks, 12 uleste meldinger',
    });

    // The icon inside the positioning wrapper keeps its own semantics
    expect(within(button).getByRole('img', { name: 'Innboks' })).toBeInTheDocument();

    // The wrapper is purely presentational positioning
    const wrapper = canvasElement.querySelector('.ds-badge--position') as HTMLElement;
    expect(wrapper).toHaveAttribute('data-placement', 'top-right');
    expect(wrapper).not.toHaveAttribute('role');
    expect(wrapper).not.toHaveAttribute('aria-hidden');

    // The badge shows the capped count and stays silent in the DOM
    const badgeElement = canvasElement.querySelector('.ds-badge') as HTMLElement;
    expect(badgeElement).toHaveAttribute('data-count', '9+');
    expect(badgeElement.textContent).toBe('');
    expect(badgeElement).not.toHaveAttribute('aria-hidden');
  },
};
