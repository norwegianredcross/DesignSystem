import React from 'react';
import { Button } from '@digdir/designsystemet-react';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons are used to trigger actions or events.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'neutral', 'danger'],
      description: 'The variant of the button.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading state for the button.',
    },
    children: {
      control: 'text',
      description: 'The content of the button.',
    },
  },
} as Meta;

const Template: StoryFn<{
  variant: string;
  size: string;
  disabled: boolean;
  loading: boolean;
  children: string;
}> = (args) => (
  <Button
    {...args}
    style={{
      backgroundColor: `var(--ds-color-${args.variant}-base-default)`,
      color: `var(--ds-color-${args.variant}-base-contrast-default)`,
    }}
  >
    {args.children}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  disabled: false,
  loading: false,
  children: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'md',
  disabled: false,
  loading: false,
  children: 'Tertiary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  disabled: false,
  loading: false,
  children: 'Danger Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'md',
  disabled: true,
  loading: false,
  children: 'Disabled Button',
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: true,
  children: 'Loading...',
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button size="sm" style={{ fontSize: 'var(--ds-font-size-2)' }}>
      Small
    </Button>
    <Button size="md" style={{ fontSize: 'var(--ds-font-size-4)' }}>
      Medium
    </Button>
    <Button size="lg" style={{ fontSize: 'var(--ds-font-size-6)' }}>
      Large
    </Button>
  </div>
);

export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button variant="primary" style={{ backgroundColor: 'var(--ds-color-primary-base-default)' }}>
      Primary
    </Button>
    <Button variant="secondary" style={{ backgroundColor: 'var(--ds-color-secondary-hav-base-default)' }}>
      Secondary
    </Button>
    <Button variant="tertiary" style={{ backgroundColor: 'var(--ds-color-neutral-base-default)' }}>
      Tertiary
    </Button>
    <Button variant="neutral" style={{ backgroundColor: 'var(--ds-color-neutral-base-default)' }}>
      Neutral
    </Button>
    <Button variant="danger" style={{ backgroundColor: 'var(--ds-color-danger-base-default)' }}>
      Danger
    </Button>
  </div>
);

export const FullWidth = () => (
  <Button style={{ width: '100%', backgroundColor: 'var(--ds-color-primary-base-default)' }} variant="primary">
    Full Width Button
  </Button>
);
