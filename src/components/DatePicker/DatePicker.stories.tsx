// src/components/DatePicker/DatePicker.stories.tsx
import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { format, parse, isValid } from 'date-fns';
import { nb } from 'date-fns/locale';

import { DatePicker, DatePickerProps } from './index'; // Your DatePicker
// Assuming DateInput and CalendarIcon are structured similarly or exported correctly
// Adjust paths as needed
import { DateInput } from '../DateInput/index'; // Assuming path
import { CalendarIcon } from '../../assets/images/CalendarIcon'; // Assuming path

// Define a wrapper component for the story render function
const DatePickerWithInputDemo: React.FC<DatePickerProps> = (args) => {
  // State for the selected date, initialized from args or default
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    args.selectedDate || new Date(),
  );
  // State for the input field value
  const [inputValue, setInputValue] = useState<string>(
    selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
  );

  // Handler for when a date is selected in the DatePicker
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Call the action from args if provided (for Storybook logging)
    args.onDateSelect?.(date);
  };

  // Handler for when the text input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    // Try to parse the input value
    const parsedDate = parse(value, 'dd.MM.yyyy', new Date(), { locale: nb });
    if (isValid(parsedDate)) {
      // If valid, update the selectedDate state
      setSelectedDate(parsedDate);
      args.onDateSelect?.(parsedDate); // Also notify Storybook action
    }
    // Optionally handle invalid input (e.g., clear selectedDate if input is invalid)
    // else {
    //   setSelectedDate(null);
    // }
  };

  // Effect to update the input field if the selectedDate prop changes
  // (e.g., via Storybook controls, though direct control might be complex here)
  useEffect(() => {
    setInputValue(
      selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
    );
  }, [selectedDate]);

  // Format date for display
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
          // The input doesn't directly control the DatePicker visibility here
        />
      </div>
      {/* Render the DatePicker, passing state and handlers */}
      <DatePicker
        {...args} // Pass through other args like initialDate
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        // Ensure initialDate reflects the current state if needed,
        // or use the one from args for the initial month view
        initialDate={args.initialDate || selectedDate || new Date()}
      />
    </div>
  );
};

// Storybook Meta Configuration
const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker Combined', // Changed title slightly
  component: DatePickerWithInputDemo, // Render the demo component
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates DatePicker used with a DateInput field.',
      },
    },
  },
  argTypes: {
    // Define argTypes based on DatePickerProps, but disable direct control
    // for props managed by the demo component's state.
    initialDate: {
      control: { type: 'date' },
      description: 'Initial month to display in the picker.',
    },
    selectedDate: {
      control: { type: 'date' },
      description: 'The currently selected date (managed by state in demo).',
      table: { disable: true }, // Disable direct control
    },
    onDateSelect: {
      action: 'dateSelected',
      description: 'Callback when a date is selected.',
      table: { disable: true }, // Disable direct control
    },
  } as ArgTypes<DatePickerProps>,
};

export default meta;

// Define Story type based on the demo component
type Story = StoryObj<typeof DatePickerWithInputDemo>;

// --- Default Story ---
export const Default: Story = {
  args: {
    // Initial args for the demo
    initialDate: new Date(),
    // selectedDate is managed by state, start with today
  },
};

// --- Story starting with no date selected ---
export const NoInitialDate: Story = {
  args: {
    initialDate: new Date(), // Still show current month initially
    selectedDate: null, // Start with no date selected
  },
};
