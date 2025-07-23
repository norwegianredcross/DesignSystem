// src/components/Buttons/Buttons.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { Buttons, ButtonsProps } from './index';
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

const meta: Meta<typeof Buttons> = {
  title: 'Components/Buttons',
  component: Buttons,
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
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Button variant',
      defaultValue: 'primary',
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
  } as ArgTypes<ButtonsProps>,
};

export default meta;

type Story = StoryObj<typeof Buttons>;

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

// --- Example as Link ---
export const AsLink: Story = {
  render: (args) => (
    <Buttons asChild {...(args as any)}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Buttons>
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
      <Buttons {...args} variant="primary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Buttons>
      <Buttons {...args} variant="secondary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Buttons>
      <Buttons {...args} variant="tertiary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Buttons>
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
    <Buttons asChild {...(args as any)}>
      <a target="_blank" rel="noreferrer" href="https://www.designsystemet.no">
        Gå til Designsystemet
        <ExternalLinkIcon title="Ekstern lenke" style={{ marginLeft: 'var(--ds-spacing-1, 4px)', verticalAlign: 'middle' }}/>
      </a>
    </Buttons>
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
        <Buttons {...args} variant='primary' data-color='neutral'>
          Start utfylling
          <ArrowRightIcon aria-hidden style={{ marginLeft: 'var(--ds-spacing-1, 4px)' }}/>
        </Buttons>
        <Buttons {...args} variant='secondary' data-color='neutral'>
          <ArrowUndoIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }}/>
          Angre
        </Buttons>
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
        <Buttons {...args} icon aria-label='Legg til ny'>
          <PlusCircleIcon aria-hidden />
        </Buttons>
      </Tooltip>
      <Tooltip content='Varslinger'>
        <Buttons {...args} icon aria-label='Varslinger'>
          <BellIcon aria-hidden />
        </Buttons>
      </Tooltip>
      <Tooltip content='Instillinger'>
        <Buttons {...args} icon aria-label='Innstillinger'>
          <CogIcon aria-hidden />
        </Buttons>
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
