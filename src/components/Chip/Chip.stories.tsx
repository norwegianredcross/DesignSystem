import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react'; // Needed for Removable example
import { Chip } from './index'; // Import the main Chip namespace

// Meta configuration focuses on the Chip concept rather than a single renderable component
const meta: Meta = {
  title: 'Components/Chip',
  // We don't provide a component here as Chip itself isn't rendered directly
  // component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button.',
      },
    },
  },
  // argTypes can be defined per-story if needed, or omitted for variant showcase
};

export default meta;

// --- Story for Chip.Radio ---
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
  name: 'Radio Variant',
};

// --- Story for Chip.Checkbox ---
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
  name: 'Checkbox Variant',
};

// --- Story for Chip.Removable ---
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
            aria-label={`Fjern ${chip}`} // Important for accessibility
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
  name: 'Removable Variant',
};

// --- Story for Chip.Button ---
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
  name: 'Button Variant',
};
