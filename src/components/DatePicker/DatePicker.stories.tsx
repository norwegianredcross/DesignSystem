import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// --- CORRECTED IMPORT ---
import { format, parse, isValid, subDays, isSameDay } from 'date-fns'; // Added isSameDay
import { nb } from 'date-fns/locale';
import { action } from 'storybook/actions';

import { DatePicker, DatePickerProps } from './index'; // Assuming index exports DatePicker
import { DateInput } from '../DateInput';
import { CalendarIcon } from '../../assets/images/CalendarIcon'; // Adjust path if needed

// Storybook Meta Configuration
const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker (Calendar)',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    // Optional parameters like layout
    layout: 'centered',
  },
  argTypes: {
    // ArgTypes for the DatePicker component itself
    initialDate: {
      control: { type: 'date' },
      description: 'Initial month to display in the calendar.',
    },
    selectedDate: {
      control: { type: 'date' },
      description: 'The currently selected date (primarily for standalone calendar stories).',
    },
    onDateSelect: {
      action: 'dateSelected',
      description: 'Callback function when a date is selected in the calendar.',
    },
    // --- ADDED ---
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Component size',
      defaultValue: 'md',
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
      description: 'Color scheme',
      defaultValue: 'neutral',
    },
    // --- END ADDED ---
  } as ArgTypes<DatePickerProps>,
};

export default meta;

// Type for standalone calendar stories
type CalendarStory = StoryObj<typeof DatePicker>;

// --- Stories for the standalone Calendar ---
// These use a render function with local state for interactivity within Storybook

export const DefaultCalendar: CalendarStory = {
  name: 'Calendar Only (Default)',
  render: (args) => {
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(
      args.selectedDate || null,
    );

    const handleSelect = (date: Date) => {
      setStorySelectedDate(date);
      args.onDateSelect?.(date); // Call the Storybook action logger
    };

    return (
      <DatePicker
        {...args} // Pass through initialDate etc.
        selectedDate={storySelectedDate} // Use story's local state for highlighting
        onDateSelect={handleSelect} // Use story's local handler
      />
    );
  },
  args: {
    // Default args for this story
    initialDate: new Date(),
    selectedDate: null,
    onDateSelect: action('dateSelected'), // Log actions in Storybook panel
  },
};

export const CalendarWithSelectedDate: CalendarStory = {
  name: 'Calendar Only (Selected)',
  render: (args) => {
    // Initialize state from args.selectedDate if provided
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(
      args.selectedDate || new Date(), // Default to today if args.selectedDate is not set
    );

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
    selectedDate: new Date(), // Set the initial selected date via args
    onDateSelect: action('dateSelected'),
  },
};

export const CalendarStartingInPreviousMonth: CalendarStory = {
  name: 'Calendar Only (Previous Month)',
  render: (args) => {
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(
      args.selectedDate || null,
    );

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
    initialDate: subDays(new Date(), 40), // Start calendar view ~40 days ago
    selectedDate: null,
    onDateSelect: action('dateSelected'),
  },
};

// --- ADDED NEW STORY ---
export const CalendarWithCustomSizeAndColor: CalendarStory = {
  name: 'Calendar Only (Custom Size/Color)',
  render: (args) => {
    // Same render as DefaultCalendar
    const [storySelectedDate, setStorySelectedDate] = useState<Date | null>(
      args.selectedDate || new Date(), // Default to selecting today
    );
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
    selectedDate: new Date(),
    'data-size': 'lg',
    'data-color': 'brand2',
    onDateSelect: action('dateSelected'),
  },
};
// --- END ADDED NEW STORY ---


// --- Story for Combined DateInput + DatePicker ---

// This component wraps DateInput and DatePicker, managing their shared state
const DatePickerInputCombo: React.FC<DatePickerProps> = (args) => {
  // State for the actual Date object (null if none selected/invalid)
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    // Initialize from args if provided and valid, otherwise null or default
    args.selectedDate && isValid(args.selectedDate) ? args.selectedDate : null
  );
  // State for the string value displayed in the DateInput (dd.MM.yyyy format)
  const [inputValue, setInputValue] = useState<string>(
    selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
  );

  // Handler for when a date is selected IN THE CALENDAR (DatePicker)
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date); // Update the Date object state
    action('dateSelected (Calendar)')(date); // Log action in Storybook
    // The useEffect below handles updating the input field's text
  };

  // Handler for when the text input changes
  const handleInputChange = (
    _event: React.ChangeEvent<HTMLInputElement>, // Prefixed with underscore to indicate intentionally unused
    formattedValue: string, // Use the formatted value from DateInput's onChange
  ) => {
    setInputValue(formattedValue); // Update the string state immediately

    // Try to parse the formatted string back to a Date object
    const parsedDate = parse(formattedValue, 'dd.MM.yyyy', new Date(), {
      locale: nb,
    });

    // If parsing is successful and results in a valid date (and full length)
    if (isValid(parsedDate) && formattedValue.length === 10) {
      // Only update selectedDate if it's different to avoid unnecessary changes
      // *** isSameDay is used here ***
      if (!selectedDate || !isSameDay(parsedDate, selectedDate)) {
        setSelectedDate(parsedDate); // Update the Date state
        action('inputParsedAndDateSelected (Input)')(parsedDate); // Log action
      }
    } else if (formattedValue === '') {
      // Handle clearing the input
      if (selectedDate !== null) {
        setSelectedDate(null); // Clear the Date state
        action('inputCleared (Input)')();
      }
    }
    // If input is invalid or incomplete, only inputValue changes.
    // selectedDate remains as it was, keeping calendar highlight consistent.
  };

  // Effect to update the input field string when the Date object state changes
  // This handles the Calendar -> Input update.
  useEffect(() => {
    const formattedString = selectedDate
      ? format(selectedDate, 'dd.MM.yyyy', { locale: nb })
      : '';
    // Only update input value if it differs from the formatted date string
    // Prevents potential cursor jumps if formatting doesn't change the string
    if (formattedString !== inputValue) {
      setInputValue(formattedString);
    }
    // This effect runs whenever 'selectedDate' changes.
    // We also include inputValue here to re-sync if external changes occur, though less common.
  }, [selectedDate, inputValue]);

  // Display text showing the currently selected date (for demonstration)
  const formattedDateDisplay = selectedDate
    ? format(selectedDate, 'PPP', { locale: nb }) // Use a more readable format
    : 'Ingen dato valgt';

  return (
    // Container div for layout
    <div style={{ display: 'inline-block', fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: '10px', fontSize: '14px', minHeight: '20px' }}>
        Valgt dato: <strong>{formattedDateDisplay}</strong>
      </p>
      <div style={{ marginBottom: '10px' }}>
        {/* The Date Input Component */}
        <DateInput
          aria-label="Velg dato (dd.mm.åååå)"
          value={inputValue} // Controlled by inputValue state
          onChange={handleInputChange} // Use the input change handler
          placeholder="dd.mm.åååå"
          suffixIcon={<CalendarIcon />}
          // Optional: Add onSuffixClick to toggle calendar visibility if needed
          // Pass down data-size and data-color to DateInput as well
          data-size={args['data-size']}
          data-color={args['data-color']}
        />
      </div>
      {/* The Date Picker (Calendar) Component */}
      <DatePicker
        {...args} // Pass through story args like initialDate, data-size, data-color
        selectedDate={selectedDate} // Calendar highlighting controlled by selectedDate state
        onDateSelect={handleDateSelect} // Connect calendar clicks to the handler
        // Ensure calendar navigates to the selected date's month if input changes it
        initialDate={selectedDate || args.initialDate || new Date()}
      />
    </div>
  );
};

// Export the combined story
export const CombinedInputAndCalendar: StoryObj<typeof DatePickerInputCombo> = {
  name: 'Example Combined Input + Calendar',
  render: (args) => <DatePickerInputCombo {...args} />,
  args: {
    // Default args for the combined story
    // Set initialDate for the calendar's starting month view
    initialDate: new Date(),
    // selectedDate can be set here to provide an initial value for the combo
    // selectedDate: new Date(), // Example: Start with today selected
  },
  argTypes: {
    // Allow controlling the initial calendar month for the combo story
    initialDate: { control: { type: 'date' } },
    // Disable controls for props managed internally by DatePickerInputCombo
    selectedDate: { table: { disable: true } }, // Managed by state
    onDateSelect: { table: { disable: true } }, // Handled internally
    // Re-enable data-size and data-color controls for this story
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    'data-color': {
      control: 'select',
      options: ['accent', 'brand1', 'brand2', 'brand3', 'neutral'],
    },
  },
};