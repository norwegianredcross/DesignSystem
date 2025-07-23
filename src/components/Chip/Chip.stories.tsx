// src/components/Chip/Chip.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
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
