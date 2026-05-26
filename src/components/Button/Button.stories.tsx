// src/components/Buttons/Buttons.stories.tsx
import { Fragment } from 'react';
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { Button, ButtonProps } from './index';
import {
  PencilWritingIcon,
  TrashIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  ArrowUndoIcon,
  PlusCircleIcon,
  BellIcon,
  CogIcon,
} from '@navikt/aksel-icons';
import { Tooltip } from '../Tooltip'; // Adjust path if necessary

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label',
      defaultValue: 'Knapp',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'soft'],
      description: 'Color treatment. "soft" is an rk-designsystem extension: tinted surface, no border; color follows the active data-color cascade.',
      defaultValue: 'primary',
    },
    shape: {
      control: 'radio',
      options: ['squared', 'pill'],
      description: 'Geometry. "pill" fully rounds both ends. Orthogonal to variant.',
      defaultValue: 'squared',
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: [
        'accent',
        'brand1',
        'brand2',
        'brand3',
        'neutral',
        'danger',
      ],
      description: 'Button color scheme',
      defaultValue: 'accent',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      defaultValue: false,
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type',
      defaultValue: 'button',
    },
    'aria-label': {
      control: 'text',
      description: 'Aria label (especially if children is empty/icon)',
    },
  } as ArgTypes<ButtonProps>,
};

export default meta;

type Story = StoryObj<typeof Button>;

// --- Example Primary ---
export const Primary: Story = {
  args: {
    children: 'Lagre',
    variant: 'primary',
  },
};

// --- Example Secondary ---
export const Secondary: Story = {
  args: {
    children: 'Avbryt',
    variant: 'secondary',
  },
};

// --- Example Tertiary ---
export const Tertiary: Story = {
  args: {
    children: 'Rediger',
    variant: 'tertiary',
  },
};

// --- Example Danger ---
export const Danger: Story = {
  args: {
    children: 'Slett',
    variant: 'primary',
    'data-color': 'danger',
  },
};

// --- Example Loading ---
export const Loading: Story = {
  args: {
    children: 'Laster...',
    loading: true,
  },
};

// --- Example Large Neutral ---
export const LargeNeutral: Story = {
  args: {
    children: 'Videresend',
    'data-size': 'lg',
    'data-color': 'neutral',
    variant: 'secondary',
  },
};

// --- Soft variant ---
export const Soft: Story = {
  args: {
    children: 'Meny',
    variant: 'soft',
    'data-color': 'neutral',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tinted surface, no border. The active `data-color` cascade picks the ramp (here: neutral).',
      },
    },
  },
};

// --- Pill shape ---
export const Pill: Story = {
  args: {
    children: 'Søk',
    variant: 'secondary',
    shape: 'pill',
  },
  parameters: {
    docs: {
      description: {
        story: '`shape="pill"` fully rounds the button. Orthogonal to `variant`.',
      },
    },
  },
};

// --- Soft + pill (header-style) ---
export const SoftPill: Story = {
  args: {
    children: 'Meny',
    variant: 'soft',
    shape: 'pill',
    'data-color': 'main',
  },
  parameters: {
    docs: {
      description: {
        story: 'Combine the two axes. With `data-color="main"` the soft tint resolves to the brand-red surface ramp — same look as the Header soft variant.',
      },
    },
  },
};

// --- Variant × shape matrix ---
export const VariantShapeMatrix: Story = {
  name: 'Matrix: variant × shape',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(2, 1fr)', gap: '1rem', alignItems: 'center' }}>
      <span />
      <strong>squared</strong>
      <strong>pill</strong>
      {(['primary', 'secondary', 'tertiary', 'soft'] as const).map((v) => (
        <Fragment key={v}>
          <strong>{v}</strong>
          <Button variant={v}>Knapp</Button>
          <Button variant={v} shape="pill">Knapp</Button>
        </Fragment>
      ))}
    </div>
  ),
  argTypes: {
    variant: { control: false },
    shape: { control: false },
    children: { control: false },
    'data-color': { control: false },
  },
};

// --- Example as Link ---
export const AsLink: Story = {
  render: (args) => (
    <Button asChild {...(args as unknown as ButtonProps)}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Button>
  ),
  args: {
    asChild: true,
    variant: 'primary',
  },
};

// --- Example Tertiary with Left Icon ---
export const TertiaryWithIcon: Story = {
  name: 'Example Tertiary with Icon',
  args: {
    children: (
      <>
        <PencilWritingIcon aria-hidden />
        Rediger
      </>
    ),
    variant: 'tertiary',
    'data-color': 'accent',
  },
};

// --- Example Danger Buttons with Icon ---
export const DangerWithIcon: Story = {
  name: 'Example Danger with Icon',
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...args} variant="primary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Button>
      <Button {...args} variant="secondary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Button>
      <Button {...args} variant="tertiary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Button>
    </div>
  ),
  args: {
    'data-size': 'md',
  },
  argTypes: {
    variant: { control: false },
    'data-color': { control: false },
    children: { control: false },
  },
};

// --- Example As Link with Right Icon ---
export const AsLinkWithIcon: Story = {
  name: 'Example As Link with Icon',
  render: (args) => (
    <Button asChild {...(args as unknown as ButtonProps)}>
      <a target="_blank" rel="noreferrer" href="https://www.designsystemet.no">
        Gå til Designsystemet
        <ExternalLinkIcon title="Ekstern lenke" style={{ marginLeft: 'var(--ds-spacing-1, 4px)', verticalAlign: 'middle' }}/>
      </a>
    </Button>
  ),
  args: {
    asChild: true,
    variant: 'primary',
  },
};

// --- Example Buttons with Icons Left/Right ---
export const WithIcons: Story = {
  name: 'Example With Icons',
  render: (args) => (
     <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...args} variant='primary' data-color='neutral'>
          Start utfylling
          <ArrowRightIcon aria-hidden style={{ marginLeft: 'var(--ds-spacing-1, 4px)' }}/>
        </Button>
        <Button {...args} variant='secondary' data-color='neutral'>
          <ArrowUndoIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }}/>
          Angre
        </Button>
     </div>
  ),
   args: {
    'data-size': 'md',
  },
   argTypes: {
    variant: { control: false },
    'data-color': { control: false },
    children: { control: false },
  },
};

// --- Example Icon Only Buttons with Tooltip ---
export const IconOnlyWithTooltip: Story = {
  name: 'Example Icon Only with Tooltip',
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
       <Tooltip content='Legg til ny'>
        <Button {...args} icon aria-label='Legg til ny'>
          <PlusCircleIcon aria-hidden />
        </Button>
      </Tooltip>
      <Tooltip content='Varslinger'>
        <Button {...args} icon aria-label='Varslinger'>
          <BellIcon aria-hidden />
        </Button>
      </Tooltip>
      <Tooltip content='Instillinger'>
        <Button {...args} icon aria-label='Innstillinger'>
          <CogIcon aria-hidden />
        </Button>
      </Tooltip>
    </div>
  ),
  args: {
    variant: 'tertiary',
    'data-color': 'neutral',
    'data-size': 'md',
  },
   argTypes: {
    variant: { control: false },
    children: { control: false },
    'aria-label': { control: false },
  },
};

// --- INTERACTION TESTS ---

export const TestInteraction: Story = {
  name: 'Test: Interaction',
  args: {
    children: 'Lagre',
    variant: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify button renders with correct text
    const button = canvas.getByRole('button', { name: /lagre/i });
    expect(button).toBeInTheDocument();

    // Button should be clickable (not disabled)
    expect(button).not.toBeDisabled();
    await userEvent.click(button);
  },
};

export const TestDisabledState: Story = {
  name: 'Test: Disabled State',
  args: {
    children: 'Deaktivert',
    variant: 'primary',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: /deaktivert/i });
    expect(button).toBeDisabled();
  },
};

export const TestLoadingState: Story = {
  name: 'Test: Loading State',
  args: {
    children: 'Laster...',
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
  },
};
