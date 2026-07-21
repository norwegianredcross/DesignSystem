import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Donor } from './index';

const meta: Meta<typeof Donor> = {
  title: 'Components/Donor',
  component: Donor,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { test: 'todo' }, // color-contrast: Donor component styling needs a11y review
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

// --- INTERACTION TESTS ---

/**
 * Helper: the impact message paragraph. The text is split across text nodes
 * (template text + bold amount), so we match on a stable fragment of the
 * template and assert on the combined text content.
 */
const IMPACT_MESSAGE = 'En gave på {amount} bidrar til at Røde Kors kan hjelpe mennesker i nød';

/**
 * Tests that clicking a preset amount fires onAmountChange with the amount and
 * current frequency, and that the impact message interpolates the new amount.
 */
export const TestPresetSelection: Story = {
  name: 'Test: Preset Amount Selection',
  args: {
    impactMessage: IMPACT_MESSAGE,
    onAmountChange: fn(),
    onVippsClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const impact = canvas.getByText(/bidrar til at Røde Kors/);

    // Default selected amount (345) is interpolated into the impact message
    expect(impact).toHaveTextContent('En gave på 345 kr bidrar til at Røde Kors kan hjelpe mennesker i nød');

    // Select the 220 kr preset
    await userEvent.click(canvas.getByRole('button', { name: '220 kr' }));
    // Default frequency is 'monthly' (Tabs defaultValue="monthly")
    expect(args.onAmountChange).toHaveBeenLastCalledWith(220, 'monthly');
    await waitFor(() => {
      expect(impact).toHaveTextContent('En gave på 220 kr bidrar til');
    });

    // Select the 660 kr preset
    await userEvent.click(canvas.getByRole('button', { name: '660 kr' }));
    expect(args.onAmountChange).toHaveBeenLastCalledWith(660, 'monthly');
    await waitFor(() => {
      expect(impact).toHaveTextContent('En gave på 660 kr bidrar til');
    });
    expect(args.onAmountChange).toHaveBeenCalledTimes(2);

    // Vipps submits the currently selected preset
    await userEvent.click(canvas.getByRole('button', { name: 'Gi med Vipps' }));
    expect(args.onVippsClick).toHaveBeenCalledTimes(1);
    expect(args.onVippsClick).toHaveBeenCalledWith(660, 'monthly');
  },
};

/**
 * Tests that typing a custom amount fires onAmountChange per valid keystroke,
 * overrides the preset in the impact message, and that clearing the custom
 * field falls back to the previously selected preset amount.
 */
export const TestCustomAmount: Story = {
  name: 'Test: Custom Amount Input',
  args: {
    impactMessage: IMPACT_MESSAGE,
    onAmountChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const impact = canvas.getByText(/bidrar til at Røde Kors/);
    // type="number" input exposes the spinbutton role
    const customInput = canvas.getByRole('spinbutton', { name: 'Valgfritt beløp' });

    await userEvent.type(customInput, '500');
    expect(customInput).toHaveValue(500);

    // onAmountChange fires for every valid intermediate value: 5, 50, 500
    expect(args.onAmountChange).toHaveBeenNthCalledWith(1, 5, 'monthly');
    expect(args.onAmountChange).toHaveBeenNthCalledWith(2, 50, 'monthly');
    expect(args.onAmountChange).toHaveBeenNthCalledWith(3, 500, 'monthly');
    await waitFor(() => {
      expect(impact).toHaveTextContent('En gave på 500 kr bidrar til');
    });

    // Clearing the custom amount falls back to the default preset (345)
    // without firing onAmountChange (empty string parses to NaN and is skipped)
    await userEvent.clear(customInput);
    await waitFor(() => {
      expect(impact).toHaveTextContent('En gave på 345 kr bidrar til');
    });
    expect(args.onAmountChange).toHaveBeenCalledTimes(3);
  },
};

/**
 * Negative test: zero is not a valid donation amount.
 * Documents current behavior for invalid custom input.
 */
export const TestInvalidCustomAmount: Story = {
  name: 'Test: Invalid Custom Amount',
  args: {
    impactMessage: IMPACT_MESSAGE,
    onAmountChange: fn(),
    onVippsClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const impact = canvas.getByText(/bidrar til at Røde Kors/);
    const customInput = canvas.getByRole('spinbutton', { name: 'Valgfritt beløp' });

    await userEvent.type(customInput, '0');

    // onAmountChange is silently skipped for values <= 0 (documented behavior)
    expect(args.onAmountChange).not.toHaveBeenCalled();

    // KNOWN: the impact message still interpolates "0 kr" even though the
    // amount is invalid — the fallback to the selected preset only happens
    // for an empty custom field, not for a zero/invalid value.
    await waitFor(() => {
      expect(impact).toHaveTextContent('En gave på 0 kr bidrar til');
    });

    // KNOWN: the Vipps submit callback is NOT guarded against invalid
    // amounts — clicking Vipps with a custom value of 0 fires
    // onVippsClick(0, 'monthly'). Consumers must validate the amount.
    await userEvent.click(canvas.getByRole('button', { name: 'Gi med Vipps' }));
    expect(args.onVippsClick).toHaveBeenCalledTimes(1);
    expect(args.onVippsClick).toHaveBeenCalledWith(0, 'monthly');
  },
};

/**
 * Tests switching between the one-time and monthly tabs: tab selection state,
 * onAmountChange re-firing with the new frequency, and that the Vipps callback
 * receives the active frequency.
 */
export const TestFrequencySwitch: Story = {
  name: 'Test: Frequency Tab Switch',
  args: {
    impactMessage: IMPACT_MESSAGE,
    onAmountChange: fn(),
    onVippsClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const oneTimeTab = canvas.getByRole('tab', { name: 'En gang' });
    const monthlyTab = canvas.getByRole('tab', { name: 'Hver måned' });

    // Monthly is the default frequency
    expect(monthlyTab).toHaveAttribute('aria-selected', 'true');
    expect(oneTimeTab).toHaveAttribute('aria-selected', 'false');

    // Switch to one-time giving
    await userEvent.click(oneTimeTab);
    await waitFor(() => {
      expect(oneTimeTab).toHaveAttribute('aria-selected', 'true');
    });
    expect(args.onAmountChange).toHaveBeenLastCalledWith(345, 'one-time');

    // Vipps submits with the newly selected frequency
    await userEvent.click(canvas.getByRole('button', { name: 'Gi med Vipps' }));
    expect(args.onVippsClick).toHaveBeenLastCalledWith(345, 'one-time');

    // Amount selection is preserved when switching back to monthly
    await userEvent.click(canvas.getByRole('button', { name: '220 kr' }));
    await userEvent.click(monthlyTab);
    await waitFor(() => {
      expect(monthlyTab).toHaveAttribute('aria-selected', 'true');
    });
    expect(args.onAmountChange).toHaveBeenLastCalledWith(220, 'monthly');
  },
};

/**
 * Tests the two payment entry points: the Vipps button submits the selected
 * amount + frequency, and the avtalegiro link fires its callback instead of
 * navigating when a handler is provided.
 */
export const TestPaymentCallbacks: Story = {
  name: 'Test: Vipps And Avtalegiro Callbacks',
  args: {
    impactMessage: IMPACT_MESSAGE,
    onVippsClick: fn(),
    onAvtalegiroClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Vipps button exposes an accessible name combining label + logo
    await userEvent.click(canvas.getByRole('button', { name: 'Gi med Vipps' }));
    expect(args.onVippsClick).toHaveBeenCalledTimes(1);
    expect(args.onVippsClick).toHaveBeenCalledWith(345, 'monthly');

    // Avtalegiro link fires its callback (navigation is prevented when a
    // callback is provided, so the test stays on the page)
    await userEvent.click(canvas.getByRole('link', { name: 'Gi med avtalegiro' }));
    expect(args.onAvtalegiroClick).toHaveBeenCalledTimes(1);
  },
};

/**
 * Tests that the whole donation flow is keyboard-operable:
 * preset selection with Enter, tabbing into the custom amount field,
 * typing, and submitting via the Vipps button with the keyboard.
 */
export const TestKeyboardOperability: Story = {
  name: 'Test: Keyboard Operability',
  args: {
    impactMessage: IMPACT_MESSAGE,
    onAmountChange: fn(),
    onVippsClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Activate a preset with the keyboard
    const preset660 = canvas.getByRole('button', { name: '660 kr' });
    preset660.focus();
    expect(preset660).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(args.onAmountChange).toHaveBeenLastCalledWith(660, 'monthly');

    // Tab moves from the last preset into the custom amount field
    await userEvent.tab();
    const customInput = canvas.getByRole('spinbutton', { name: 'Valgfritt beløp' });
    expect(customInput).toHaveFocus();

    // Type a custom amount with the keyboard
    await userEvent.keyboard('250');
    expect(args.onAmountChange).toHaveBeenLastCalledWith(250, 'monthly');

    // Tab reaches the Vipps button; Enter submits the typed amount
    await userEvent.tab();
    const vippsButton = canvas.getByRole('button', { name: 'Gi med Vipps' });
    expect(vippsButton).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(args.onVippsClick).toHaveBeenCalledTimes(1);
    expect(args.onVippsClick).toHaveBeenCalledWith(250, 'monthly');
  },
};
