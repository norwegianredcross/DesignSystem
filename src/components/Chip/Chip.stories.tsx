// src/components/Chip/Chip.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, within, userEvent, waitFor, fn } from 'storybook/test';
import { Chip } from './index';

const meta: Meta = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button.',
      },
    },
  },
};

export default meta;

// --- Example Radio Variant ---
export const Radio: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip.Radio name="language-radio" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="bokmaal">
        Bokmål
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="engelsk" data-size="lg">
        Engelsk (Large)
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="disabled" disabled>
        Disabled
      </Chip.Radio>
    </div>
  ),
  name: 'Example Radio Variant', // Renamed
};

// --- Example Checkbox Variant ---
export const Checkbox: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip.Checkbox name="filter-checkbox" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="bokmaal" data-color="brand1">
        Bokmål (Brand1)
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="engelsk" data-size="sm">
        Engelsk (Small)
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="disabled" disabled>
        Disabled
      </Chip.Checkbox>
    </div>
  ),
  name: 'Example Checkbox Variant', // Renamed
};

// --- Example Removable Variant ---
export const Removable: StoryObj = {
  render: () => {
    const [visibleChips, setVisibleChips] = useState([
      'Norge',
      'Sverige',
      'Danmark',
    ]);

    const handleRemove = (chipToRemove: string) => {
      setVisibleChips((prev) => prev.filter((chip) => chip !== chipToRemove));
    };

    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        {visibleChips.map((chip) => (
          <Chip.Removable
            key={chip}
            aria-label={`Fjern ${chip}`}
            onClick={() => handleRemove(chip)}
            data-color="neutral"
            data-size="md"
          >
            {chip}
          </Chip.Removable>
        ))}
        {visibleChips.length === 0 && <p>All chips removed.</p>}
      </div>
    );
  },
  name: 'Example Removable Variant', // Renamed
};

// --- Example Button Variant ---
export const Button: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip.Button onClick={() => alert('Nynorsk clicked')}>
        Søk etter nynorsk
      </Chip.Button>
      <Chip.Button onClick={() => alert('Bokmål clicked')} data-color="brand2">
        Søk etter bokmål (Brand2)
      </Chip.Button>
      <Chip.Button onClick={() => alert('Engelsk clicked')} data-size="lg">
        Søk etter engelsk (Large)
      </Chip.Button>
      <Chip.Button disabled>Disabled</Chip.Button>
    </div>
  ),
  name: 'Example Button Variant', // Renamed
};

// --- INTERACTION TESTS ---

type RemoveArgs = { onRemove: (chip: string) => void };
type ChangeArgs = { onChange: (value: string) => void };
type SearchArgs = { onSearch: (value: string) => void };

/**
 * Tests Chip.Removable: each chip is a button whose accessible name comes from
 * its aria-label ("Fjern <navn>"), it carries the data-removable marker, and
 * activating it (mouse or keyboard) fires the removal callback and removes the
 * chip from the list.
 */
export const TestRemovableChip: StoryObj<RemoveArgs> = {
  name: 'Test: Removable Chip',
  render: (args) => {
    const [visibleChips, setVisibleChips] = useState([
      'Norge',
      'Sverige',
      'Danmark',
    ]);

    const handleRemove = (chipToRemove: string) => {
      args.onRemove?.(chipToRemove);
      setVisibleChips((prev) => prev.filter((chip) => chip !== chipToRemove));
    };

    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        {visibleChips.map((chip) => (
          <Chip.Removable
            key={chip}
            aria-label={`Fjern ${chip}`}
            onClick={() => handleRemove(chip)}
          >
            {chip}
          </Chip.Removable>
        ))}
        {visibleChips.length === 0 && <p>Alle valg er fjernet.</p>}
      </div>
    );
  },
  args: {
    onRemove: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // The aria-label wins over the visible text as accessible name
    const removeSverige = canvas.getByRole('button', { name: 'Fjern Sverige' });
    expect(removeSverige).toHaveAttribute('data-removable');
    expect(removeSverige).toHaveTextContent('Sverige');

    // Mouse: clicking fires the removal callback with the right chip,
    // and the chip disappears from the DOM
    await userEvent.click(removeSverige);
    expect(args.onRemove).toHaveBeenCalledTimes(1);
    expect(args.onRemove).toHaveBeenLastCalledWith('Sverige');
    await waitFor(() =>
      expect(
        canvas.queryByRole('button', { name: 'Fjern Sverige' }),
      ).not.toBeInTheDocument(),
    );

    // The other chips are unaffected
    expect(canvas.getByRole('button', { name: 'Fjern Norge' })).toBeInTheDocument();
    expect(canvas.getByRole('button', { name: 'Fjern Danmark' })).toBeInTheDocument();

    // Keyboard: focus + Enter removes a chip too
    const removeNorge = canvas.getByRole('button', { name: 'Fjern Norge' });
    removeNorge.focus();
    await userEvent.keyboard('{Enter}');
    expect(args.onRemove).toHaveBeenLastCalledWith('Norge');
    await waitFor(() =>
      expect(
        canvas.queryByRole('button', { name: 'Fjern Norge' }),
      ).not.toBeInTheDocument(),
    );
    expect(args.onRemove).toHaveBeenCalledTimes(2);
  },
};

/**
 * Tests Chip.Radio: chips in the same name-group behave as radios with
 * single-selection semantics. Clicking moves the selection, and arrow keys
 * move both focus and selection within the group.
 */
export const TestRadioChips: StoryObj<ChangeArgs> = {
  name: 'Test: Radio Chips Selection',
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip.Radio
        name="test-language"
        value="nynorsk"
        defaultChecked
        onChange={() => args.onChange?.('nynorsk')}
      >
        Nynorsk
      </Chip.Radio>
      <Chip.Radio
        name="test-language"
        value="bokmaal"
        onChange={() => args.onChange?.('bokmaal')}
      >
        Bokmål
      </Chip.Radio>
      <Chip.Radio
        name="test-language"
        value="engelsk"
        onChange={() => args.onChange?.('engelsk')}
      >
        Engelsk
      </Chip.Radio>
    </div>
  ),
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // The chips are exposed as radios named by their visible label
    const nynorsk = canvas.getByRole('radio', { name: 'Nynorsk' });
    const bokmaal = canvas.getByRole('radio', { name: 'Bokmål' });
    const engelsk = canvas.getByRole('radio', { name: 'Engelsk' });

    // Initial state from defaultChecked
    expect(nynorsk).toBeChecked();
    expect(bokmaal).not.toBeChecked();

    // Clicking the chip label moves the selection (single-selection semantics)
    await userEvent.click(canvas.getByText('Bokmål'));
    expect(bokmaal).toBeChecked();
    expect(nynorsk).not.toBeChecked();
    expect(engelsk).not.toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(1);
    expect(args.onChange).toHaveBeenLastCalledWith('bokmaal');

    // Arrow keys move selection within the radio group
    expect(bokmaal).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(engelsk).toHaveFocus();
    expect(engelsk).toBeChecked();
    expect(bokmaal).not.toBeChecked();
    expect(args.onChange).toHaveBeenLastCalledWith('engelsk');

    await userEvent.keyboard('{ArrowLeft}');
    expect(bokmaal).toHaveFocus();
    expect(bokmaal).toBeChecked();
    expect(engelsk).not.toBeChecked();

    // Exactly one radio is checked at all times
    const checked = [nynorsk, bokmaal, engelsk].filter(
      (radio) => (radio as HTMLInputElement).checked,
    );
    expect(checked).toHaveLength(1);
  },
};

/**
 * Tests Chip.Checkbox: chips toggle independently (multi-selection), can be
 * unchecked again, and are operable with the keyboard (Space). A disabled
 * chip cannot be toggled.
 */
export const TestCheckboxChips: StoryObj<ChangeArgs> = {
  name: 'Test: Checkbox Chips Multi-Selection',
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip.Checkbox
        name="test-filter"
        value="norge"
        onChange={() => args.onChange?.('norge')}
      >
        Norge
      </Chip.Checkbox>
      <Chip.Checkbox
        name="test-filter"
        value="sverige"
        onChange={() => args.onChange?.('sverige')}
      >
        Sverige
      </Chip.Checkbox>
      <Chip.Checkbox
        name="test-filter"
        value="danmark"
        disabled
        onChange={() => args.onChange?.('danmark')}
      >
        Danmark
      </Chip.Checkbox>
    </div>
  ),
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const norge = canvas.getByRole('checkbox', { name: 'Norge' });
    const sverige = canvas.getByRole('checkbox', { name: 'Sverige' });
    const danmark = canvas.getByRole('checkbox', { name: 'Danmark' });

    // Mouse: toggling one chip does not affect the others (multi-selection)
    await userEvent.click(canvas.getByText('Norge'));
    expect(norge).toBeChecked();
    expect(sverige).not.toBeChecked();

    await userEvent.click(canvas.getByText('Sverige'));
    expect(sverige).toBeChecked();
    expect(norge).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(2);

    // Keyboard: Space unchecks the focused chip again
    norge.focus();
    await userEvent.keyboard(' ');
    expect(norge).not.toBeChecked();
    expect(sverige).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(3);

    // Disabled chip cannot be toggled
    expect(danmark).toBeDisabled();
    await userEvent.click(canvas.getByText('Danmark'));
    expect(danmark).not.toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(3);
  },
};

/**
 * Tests Chip.Button: it is a real button (type="button"), fires onClick with
 * mouse and keyboard, and a disabled chip button ignores activation.
 */
export const TestButtonChip: StoryObj<SearchArgs> = {
  name: 'Test: Button Chip Activation',
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip.Button onClick={() => args.onSearch?.('nynorsk')}>
        Søk etter nynorsk
      </Chip.Button>
      <Chip.Button disabled onClick={() => args.onSearch?.('deaktivert')}>
        Deaktivert
      </Chip.Button>
    </div>
  ),
  args: {
    onSearch: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const searchChip = canvas.getByRole('button', { name: 'Søk etter nynorsk' });

    // Renders as a non-submitting button
    expect(searchChip).toHaveAttribute('type', 'button');

    // Mouse click fires the callback
    await userEvent.click(searchChip);
    expect(args.onSearch).toHaveBeenCalledTimes(1);
    expect(args.onSearch).toHaveBeenLastCalledWith('nynorsk');

    // Keyboard: Enter and Space both activate the button
    searchChip.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    expect(args.onSearch).toHaveBeenCalledTimes(3);

    // Disabled chip button ignores clicks
    const disabledChip = canvas.getByRole('button', { name: 'Deaktivert' });
    expect(disabledChip).toBeDisabled();
    await userEvent.click(disabledChip);
    expect(args.onSearch).toHaveBeenCalledTimes(3);
  },
};
