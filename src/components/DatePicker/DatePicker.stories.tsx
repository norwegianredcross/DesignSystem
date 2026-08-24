import type { Meta, StoryObj, ArgTypes } from '@storybook/react-vite';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// --- CORRECTED IMPORT ---
import { format, parse, isValid, subDays, isSameDay } from 'date-fns';
import { nb } from 'date-fns/locale';
import { action } from 'storybook/actions';
import { expect, within, userEvent, fn } from 'storybook/test';

import { DatePicker, DatePickerProps } from './index'; // Assuming index exports DatePicker
import { DateInput } from '../DateInput';
import { CalendarIcon } from '../../assets/images/CalendarIcon'; // Adjust path if needed

// Storybook Meta Configuration
const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
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
      options: ['primary-color-red', 'secondary-color-orange', 'secondary-color-rust', 'secondary-color-pink', 'additional-color-ocean', 'additional-color-jungle', 'neutral'],
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
    // Pinned to a fixed PAST date, not new Date(): this story is a visual
    // regression target, and a today-based date moved the selected/today
    // markers every day — the baseline broke three days after it was taken.
    // A past month stays identical forever (today never re-enters it).
    initialDate: new Date(2026, 5, 15),
    selectedDate: new Date(2026, 5, 15),
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
    'data-color': 'additional-color-ocean',
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
      options: [
        'primary-color-red',
        'secondary-color-orange',
        'secondary-color-rust',
        'secondary-color-pink',
        'additional-color-ocean',
        'additional-color-jungle',
        'neutral',
      ],
    },
  },
};

// --- INTERACTION TESTS ---

/**
 * Tests that clicking a date cell triggers the onDateSelect callback
 * and visually marks the date as selected.
 */
export const TestDateSelection: CalendarStory = {
  name: 'Test: Date Selection',
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleSelect = (date: Date) => {
      setSelectedDate(date);
      args.onDateSelect?.(date);
    };
    return (
      <DatePicker
        {...args}
        selectedDate={selectedDate}
        onDateSelect={handleSelect}
      />
    );
  },
  args: {
    initialDate: new Date(2025, 0, 15), // January 2025
    onDateSelect: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const day15Cell = canvas.getByRole('gridcell', { name: '15. januar 2025' });
    await userEvent.click(day15Cell);

    expect(args.onDateSelect).toHaveBeenCalled();
    expect(day15Cell).toHaveAttribute('aria-selected', 'true');
  },
};

/**
 * The calendar follows the ARIA grid pattern: one grid labelled by the
 * month header, 7 column headers, a single tab stop (roving tabindex),
 * and out-of-month cells disabled in every modality.
 */
export const TestGridSemantics: CalendarStory = {
  name: 'Test: Grid Semantics',
  render: (args) => <DatePicker {...args} />,
  args: {
    initialDate: new Date(2025, 0, 15),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const grid = canvas.getByRole('grid', { name: /januar 2025/i });
    expect(grid).toBeInTheDocument();
    expect(canvas.getAllByRole('columnheader').length).toBe(7);
    // 1 header + 5 uker: januar 2025 (on 1. jan – fre 31. jan) fyller
    // nøyaktig fem rader — gridet slutter nå ved månedens siste uke i
    // stedet for å alltid rendre 42 celler.
    expect(canvas.getAllByRole('row').length).toBe(6);

    // Nøyaktig ett tabstopp i hele gridet
    const tabStops = grid.querySelectorAll('[tabindex="0"]');
    expect(tabStops.length).toBe(1);
    expect(tabStops[0]).toHaveAccessibleName('15. januar 2025');

    // Celler utenfor måneden: deaktivert og ikke fokuserbare
    const outside = grid.querySelectorAll('[aria-disabled="true"]');
    expect(outside.length).toBeGreaterThan(0);
    outside.forEach((cell) => {
      expect(cell).not.toHaveAttribute('tabindex');
    });
  },
};

/**
 * Arrow keys move focus between days, End jumps to the end of the week,
 * PageDown moves a month ahead (the view follows), and Enter selects the
 * focused day.
 */
export const TestArrowKeyNavigation: CalendarStory = {
  name: 'Test: Arrow Key Navigation',
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleSelect = (date: Date) => {
      setSelectedDate(date);
      args.onDateSelect?.(date);
    };
    return (
      <DatePicker
        {...args}
        selectedDate={selectedDate}
        onDateSelect={handleSelect}
      />
    );
  },
  args: {
    initialDate: new Date(2025, 0, 15),
    onDateSelect: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    const activeDate = () => doc.activeElement?.getAttribute('data-date');

    canvas.getByRole('gridcell', { name: '15. januar 2025' }).focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(activeDate()).toBe('2025-01-16');

    await userEvent.keyboard('{ArrowDown}');
    expect(activeDate()).toBe('2025-01-23');

    await userEvent.keyboard('{ArrowLeft}');
    expect(activeDate()).toBe('2025-01-22');

    await userEvent.keyboard('{ArrowUp}');
    expect(activeDate()).toBe('2025-01-15');

    // Piltast over månedsgrensen: visningen følger fokus
    canvas.getByRole('gridcell', { name: '31. januar 2025' }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(activeDate()).toBe('2025-02-01');
    expect(canvas.getByRole('grid', { name: /februar 2025/i })).toBeInTheDocument();

    // PageDown hopper en måned frem
    await userEvent.keyboard('{PageDown}');
    expect(activeDate()).toBe('2025-03-01');

    // Enter velger fokusert dag
    await userEvent.keyboard('{Enter}');
    expect(args.onDateSelect).toHaveBeenCalled();
    const selected = (args.onDateSelect as ReturnType<typeof fn>).mock.lastCall![0] as Date;
    expect(selected.getFullYear()).toBe(2025);
    expect(selected.getMonth()).toBe(2);
    expect(selected.getDate()).toBe(1);
  },
};

/**
 * Tests month navigation using the previous/next buttons.
 */
export const TestMonthNavigation: CalendarStory = {
  name: 'Test: Month Navigation',
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
      <DatePicker
        {...args}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    );
  },
  args: {
    initialDate: new Date(2025, 5, 15), // June 2025
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Get the month/year header text
    const getMonthYearText = () => {
      // The month-year header contains the capitalized month name and year
      const header = canvasElement.querySelector('[class*="monthYear"]');
      return header?.textContent || '';
    };

    // Verify initial month is June 2025
    expect(getMonthYearText()).toContain('2025');
    expect(getMonthYearText().toLowerCase()).toContain('juni');

    // Find and click the next month button
    const nextButton = canvas.getByRole('button', { name: /neste/i });
    await userEvent.click(nextButton);

    // Verify we're now in July 2025
    expect(getMonthYearText().toLowerCase()).toContain('juli');

    // Find and click the previous month button twice to go back to May
    const prevButton = canvas.getByRole('button', { name: /forrige/i });
    await userEvent.click(prevButton);
    await userEvent.click(prevButton);

    // Verify we're now in May 2025
    expect(getMonthYearText().toLowerCase()).toContain('mai');
  },
};

/**
 * Space selects the focused date, like Enter.
 */
export const TestSpaceSelection: CalendarStory = {
  name: 'Test: Space Selection',
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleSelect = (date: Date) => {
      setSelectedDate(date);
      args.onDateSelect?.(date);
    };
    return (
      <DatePicker
        {...args}
        selectedDate={selectedDate}
        onDateSelect={handleSelect}
      />
    );
  },
  args: {
    initialDate: new Date(2025, 0, 15),
    onDateSelect: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const day10Cell = canvas.getByRole('gridcell', { name: '10. januar 2025' });
    day10Cell.focus();
    await userEvent.keyboard(' ');

    expect(args.onDateSelect).toHaveBeenCalled();
    expect(day10Cell).toHaveAttribute('aria-selected', 'true');
  },
};

/**
 * Today's date is marked with aria-current="date".
 */
export const TestTodayHighlight: CalendarStory = {
  name: 'Test: Today Highlight',
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
      <DatePicker
        {...args}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
    );
  },
  args: {
    initialDate: new Date(), // Current month
  },
  play: async ({ canvasElement }) => {
    const todayCells = canvasElement.querySelectorAll('[aria-current="date"]');
    expect(todayCells.length).toBe(1);

    const todayCell = todayCells[0];
    expect(todayCell.textContent?.trim()).toBe(new Date().getDate().toString());
    expect(todayCell).not.toHaveAttribute('aria-disabled');
  },
};