// src/components/DatePicker/DatePicker.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React, { useState, useEffect } from 'react'; // Import useState
import { format, parse, isValid, subDays, addMonths } from 'date-fns';
import { nb } from 'date-fns/locale';
import { action } from '@storybook/addon-actions';

import { DatePicker, DatePickerProps } from './index';
import { DateInput } from '../DateInput';
import { CalendarIcon } from '../../assets/images/CalendarIcon';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker (Calendar)',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    initialDate: {
      control: { type: 'date' },
      description: 'Initial month to display.',
    },
    selectedDate: {
      control: { type: 'date' },
      description: 'The currently selected date.',
      // Keep control enabled for initial state setting if desired
    },
    onDateSelect: {
      action: 'dateSelected',
      description: 'Callback when a date is selected.',
    },
  } as ArgTypes<DatePickerProps>,
};

export default meta;

type CalendarStory = StoryObj<typeof DatePicker>;

// --- Stories for the standalone Calendar ---

// FIX: Use render function with state for interactivity
export const DefaultCalendar: CalendarStory = {
  name: 'Calendar Only (Default)',
  render: (args) => {
    // Add state to manage selection within the story render
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || null);

    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date); // Call the Storybook action
    };

    return (
      <DatePicker
        {...args} // Pass initialDate etc. from args
        selectedDate={storySelectedDate} // Use story's state for selection
        onDateSelect={handleSelect} // Use story's handler
      />
    );
  },
  args: {
    initialDate: new Date(),
    selectedDate: null, // Initial state for the story's state hook
    onDateSelect: action('dateSelected'),
  },
};

// FIX: Use render function with state for interactivity
export const CalendarWithSelectedDate: CalendarStory = {
  name: 'Calendar Only (Selected)',
   render: (args) => {
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || new Date()); // Initialize state from args

    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date);
    };

    return (
      <DatePicker
        {...args}
        selectedDate={storySelectedDate}
        onDateSelect={handleSelect}
      />
    );
  },
  args: {
    initialDate: new Date(),
    selectedDate: new Date(), // Set initial selected date via args
    onDateSelect: action('dateSelected'),
  },
};

// FIX: Use render function with state for interactivity
export const CalendarStartingInPreviousMonth: CalendarStory = {
  name: 'Calendar Only (Previous Month)',
   render: (args) => {
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(args.selectedDate || null);

    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date);
    };

    return (
      <DatePicker
        {...args}
        selectedDate={storySelectedDate}
        onDateSelect={handleSelect}
      />
    );
  },
  args: {
    initialDate: subDays(new Date(), 40), // Set initial month via args
    selectedDate: null,
    onDateSelect: action('dateSelected'),
  },
};

// --- Story for Combined DateInput + DatePicker (like App.tsx) ---
// (This one already works correctly with its own state management)
const DatePickerInputCombo: React.FC<DatePickerProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [inputValue, setInputValue] = useState<string>(
    selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
  );

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    action('dateSelected')(date);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    const parsedDate = parse(value, 'dd.MM.yyyy', new Date(), { locale: nb });
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      action('dateSelected')(parsedDate);
    }
  };

  useEffect(() => {
    setInputValue(
      selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
    );
  }, [selectedDate]);

  const formattedDate = selectedDate
    ? format(selectedDate, 'dd.MM.yyyy', { locale: nb })
    : 'Ingen dato valgt';

  return (
    <div style={{ display: 'inline-block' }}>
      <p style={{ marginBottom: '10px', fontFamily: 'sans-serif', fontSize: '14px' }}>
        Valgt dato: {formattedDate}
      </p>
      <div style={{ marginBottom: '10px' }}>
        <DateInput
          aria-label="Velg dato (dd.mm.åååå)"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="dd.mm.åååå"
          suffixIcon={<CalendarIcon />}
        />
      </div>
      <DatePicker
        {...args}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        initialDate={selectedDate || args.initialDate || new Date()}
      />
    </div>
  );
};

export const CombinedInputAndCalendar: StoryObj<typeof DatePickerInputCombo> = {
  name: 'Example Combined Input + Calendar', // Renamed
  render: (args) => <DatePickerInputCombo {...args} />,
  args: {
    initialDate: new Date(),
  },
  argTypes: {
     initialDate: { control: { type: 'date' } },
     selectedDate: { table: { disable: true } },
     onDateSelect: { table: { disable: true } },
  }
};
