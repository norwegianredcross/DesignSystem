// src/components/Buttons/Buttons.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { Buttons, ButtonsProps } from './index';
// --- REMOVED Icon Imports ---

const meta: Meta<typeof Buttons> = {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  argTypes: {
    // --- argTypes remain largely the same, but remove 'icon' if not needed ---
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
      // Keep as boolean for simple toggle, Digdir handles the visual
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
    // 'aria-label' is still useful for accessibility, keep it
    'aria-label': {
      control: 'text',
      description: 'Aria label (especially if children is empty/icon)',
    },
    // --- REMOVED 'icon' argType if you simplified the component ---
    // icon: {
    //   control: 'boolean',
    //   description: 'Icon only button styling (handled by children/aria-label)',
    //   defaultValue: false,
    // },
  } as ArgTypes<ButtonsProps>, // Cast might need adjustment if props changed
};

export default meta;

type Story = StoryObj<typeof Buttons>;

export const Primary: Story = {
  args: {
    children: 'Lagre',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Avbryt',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Rediger',
    variant: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Slett',
    variant: 'primary',
    'data-color': 'danger',
  },
};

// --- REMOVED IconOnly story as it required specific icon import ---
// export const IconOnly: Story = {
//   args: {
//     children: '', // No children
//     'aria-label': 'Rediger', // Important for accessibility
//     variant: 'tertiary',
//     // You might need specific styling or rely on Digdir's default icon handling
//   },
// };

// --- REMOVED WithIconRight story ---
// export const WithIconRight: Story = { ... };

export const Loading: Story = {
  args: {
    children: 'Laster...',
    loading: true, // Use the boolean prop, Digdir shows default spinner
  },
};

// --- REMOVED CustomLoader story ---
// export const CustomLoader: Story = { ... };

export const LargeNeutral: Story = {
  args: {
    children: 'Videresend',
    'data-size': 'lg',
    'data-color': 'neutral',
    variant: 'secondary',
  },
};

export const AsLink: Story = {
  render: (args) => (
    // Ensure ButtonsProps type used by StoryObj includes asChild if needed
    // or cast args if using the simplified direct export
    <Buttons asChild {...(args as any)}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Buttons>
  ),
  args: {
    asChild: true,
    // Add other necessary props for styling the link like a button
    variant: 'primary',
  },
};
