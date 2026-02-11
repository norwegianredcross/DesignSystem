import type { Meta, StoryObj } from '@storybook/react';
import { Donor } from './index';

const meta: Meta<typeof Donor> = {
  title: 'Components/Donor',
  component: Donor,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    'data-color': {
      control: 'select',
      options: ['primary', 'neutral'],
      description: 'Color theme variant',
    },
    amounts: {
      control: 'object',
      description: 'Preset donation amounts',
    },
    defaultAmount: {
      control: 'number',
      description: 'Default selected amount',
    },
    oneTimeLabel: {
      control: 'text',
      description: 'Label for one-time tab',
    },
    monthlyLabel: {
      control: 'text',
      description: 'Label for monthly tab',
    },
    customAmountPlaceholder: {
      control: 'text',
      description: 'Placeholder for custom amount input',
    },
    amountLabel: {
      control: 'text',
      description: 'Label above amount buttons',
    },
    impactMessage: {
      control: 'text',
      description: 'Impact message template (use {amount} as placeholder)',
    },
    vippsButtonLabel: {
      control: 'text',
      description: 'Text before Vipps logo on payment button',
    },
    avtalegiroLabel: {
      control: 'text',
      description: 'Avtalegiro link text',
    },
    avtalegiroHref: {
      control: 'text',
      description: 'Avtalegiro link URL',
    },
    currencySuffix: {
      control: 'text',
      description: 'Currency suffix (e.g. "kr")',
    },
    showVippsButton: {
      control: 'boolean',
      description: 'Show/hide Vipps button',
    },
    showAvtalegiroLink: {
      control: 'boolean',
      description: 'Show/hide avtalegiro link',
    },
    showImpactMessage: {
      control: 'boolean',
      description: 'Show/hide impact message',
    },
    heartVariant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Heart icon variant for the impact message',
    },
    onVippsClick: {
      action: 'vippsClick',
      description: 'Callback when Vipps button is clicked',
    },
    onAvtalegiroClick: {
      action: 'avtalegiroClick',
      description: 'Callback when avtalegiro link is clicked',
    },
    onAmountChange: {
      action: 'amountChange',
      description: 'Callback when amount changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Donor>;

export const Default: Story = {
  args: {
    impactMessage: 'En gave på {amount} bidrar til at Røde Kors kan hjelpe mennesker i nød',
  },
};

export const OneTime: Story = {
  args: {
    oneTimeLabel: 'En gang',
    monthlyLabel: 'Hver måned',
    impactMessage: 'En gave på {amount} bidrar til at Røde Kors kan hjelpe mennesker i nød',
  },
};

export const Monthly: Story = {
  args: {
    defaultAmount: 660,
    impactMessage: 'En gave på {amount} gir mat til en familie i en uke',
  },
};

export const CustomAmounts: Story = {
  args: {
    amounts: [
      { value: 100, label: '100 kr' },
      { value: 250, label: '250 kr' },
      { value: 500, label: '500 kr' },
    ],
    defaultAmount: 250,
    impactMessage: 'Med {amount} kan vi hjelpe enda flere',
  },
};

export const WithoutVipps: Story = {
  args: {
    showVippsButton: false,
    showAvtalegiroLink: true,
  },
};
