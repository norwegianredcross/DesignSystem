// src/components/Details/Details.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Details, DetailsProps } from './index';

const meta: Meta<typeof Details> = {
  title: 'Components/Details',
  component: Details,
  tags: ['autodocs'],
  argTypes: {
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
    open: {
      control: 'boolean',
      description: 'Controls the open/closed state.',
      defaultValue: false,
    },
    children: {
      control: false,
      description: 'Must contain Details.Summary and Details.Content',
    },
  } as ArgTypes<DetailsProps>,
};

export default meta;

type Story = StoryObj<typeof Details>;

// --- Basic Example (Closed) ---
export const DefaultClosed: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hva er Altinn?</Details.Summary>
      <Details.Content>
        Altinn er en internettportal for digital dialog mellom næringslivet,
        privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er
        utviklet og driftet av Altinn-samarbeidet, som består av flere
        offentlige etater.
      </Details.Content>
    </Details>
  ),
  args: {
  },
  name: 'Default (Closed)',
};

// --- Basic Example (Open) ---
export const DefaultOpen: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hva er formålet med Altinn?</Details.Summary>
      <Details.Content>
        Formålet med Altinn er å effektivisere og forenkle rapportering fra
        næringslivet til det offentlige, samt å gi enklere tilgang til
        offentlig informasjon og tjenester for både bedrifter og privatpersoner.
      </Details.Content>
    </Details>
  ),
  args: {
    open: true,
  },
  name: 'Default (Open)',
};

// --- Example with Size and Color ---
export const LargeBrand1: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hvilke tjenester tilbyr Altinn?</Details.Summary>
      <Details.Content>
        Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer
        (som MVA-melding, A-melding), tilgang til meldingsboks fra det
        offentlige, registertjenester, samtykketjenester og veiledning.
      </Details.Content>
    </Details>
  ),
  args: {
    'data-size': 'lg',
    'data-color': 'brand1',
    open: false,
  },
  name: 'Large Size, Brand1 Color',
};

// --- INTERACTION TESTS ---

/**
 * Tests the core disclosure behavior with the mouse: clicking the summary
 * opens the details (open attribute set, content visible) and clicking it
 * again closes it. The onToggle callback fires for each state change.
 */
export const TestToggleWithMouse: Story = {
  name: 'Test: Toggle With Mouse',
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hva gjør Røde Kors i Norge?</Details.Summary>
      <Details.Content>
        Røde Kors i Norge driver blant annet besøkstjeneste, leksehjelp,
        hjelpekorps og aktiviteter for barn og unge over hele landet.
      </Details.Content>
    </Details>
  ),
  args: {
    'data-size': 'md',
    onToggle: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Hva gjør Røde Kors i Norge?');
    const details = summary.closest('details') as HTMLDetailsElement;
    const content = canvas.getByText(/besøkstjeneste, leksehjelp/);

    // Starts closed: no open attribute, content hidden
    expect(details).not.toHaveAttribute('open');
    expect(content).not.toBeVisible();

    // Click summary -> opens
    await userEvent.click(summary);
    await waitFor(() => expect(details).toHaveAttribute('open'));
    expect(content).toBeVisible();
    // The native toggle event is dispatched asynchronously
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(1));

    // Click summary again -> closes
    await userEvent.click(summary);
    await waitFor(() => expect(details).not.toHaveAttribute('open'));
    expect(content).not.toBeVisible();
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(2));
  },
};

/**
 * Tests keyboard operability of the disclosure: the summary sits in the tab
 * order (native tabIndex 0), takes focus, and toggles via its activation
 * behavior while focused.
 *
 * Note: user-event cannot synthesize trusted Enter/Space key activation for
 * <summary> (untrusted key events have no default action, and user-event has
 * no summary behavior), so activation is exercised through the activation
 * click that a real Enter/Space press produces on a focused summary.
 */
export const TestKeyboardToggle: Story = {
  name: 'Test: Keyboard Focus And Activation',
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Hvordan blir jeg frivillig?</Details.Summary>
      <Details.Content>
        Meld deg som frivillig i din lokalforening, så tar vi kontakt om
        aktuelle aktiviteter i ditt nærmiljø.
      </Details.Content>
    </Details>
  ),
  args: {
    'data-size': 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Hvordan blir jeg frivillig?');
    const details = summary.closest('details') as HTMLDetailsElement;
    const content = canvas.getByText(/Meld deg som frivillig/);

    // The summary participates in the tab order and is focusable
    expect(summary.tabIndex).toBe(0);
    summary.focus();
    expect(summary).toHaveFocus();
    expect(details).not.toHaveAttribute('open');

    // Activation while focused (what Enter produces) opens the disclosure
    await userEvent.keyboard('{Enter}');
    summary.click();
    await waitFor(() => expect(details).toHaveAttribute('open'));
    expect(content).toBeVisible();

    // Activating again (what Space produces) closes it; focus stays put
    await userEvent.keyboard(' ');
    summary.click();
    await waitFor(() => expect(details).not.toHaveAttribute('open'));
    expect(content).not.toBeVisible();
    expect(summary).toHaveFocus();
  },
};

/**
 * Tests the controlled `open` prop: the component mirrors external state in
 * both directions. A click requests a toggle via onToggle, state updates, and
 * the DOM follows; without a state update the details would stay put.
 */
export const TestControlledOpen: Story = {
  name: 'Test: Controlled Open Prop',
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <Details
        {...args}
        open={open}
        onToggle={(event) => {
          args.onToggle?.(event);
          setOpen((prev) => !prev);
        }}
      >
        <Details.Summary>Hvor går pengene?</Details.Summary>
        <Details.Content>
          Gaver går til beredskap, omsorgsaktiviteter og internasjonalt
          hjelpearbeid i regi av Røde Kors.
        </Details.Content>
      </Details>
    );
  },
  args: {
    'data-size': 'md',
    onToggle: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Hvor går pengene?');
    const details = summary.closest('details') as HTMLDetailsElement;
    const content = canvas.getByText(/beredskap, omsorgsaktiviteter/);

    // Controlled initial state open=true is reflected in the DOM
    expect(details).toHaveAttribute('open');
    expect(content).toBeVisible();

    // Click -> onToggle fires, external state flips to closed, DOM follows
    await userEvent.click(summary);
    await waitFor(() => expect(details).not.toHaveAttribute('open'));
    expect(content).not.toBeVisible();
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(1));

    // Click -> state flips back to open
    await userEvent.click(summary);
    await waitFor(() => expect(details).toHaveAttribute('open'));
    expect(content).toBeVisible();
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(2));
  },
};
