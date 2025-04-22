import React, { useState, useRef, useEffect } from 'react';
import {
  Button as DigDirButton,
  // Textfield,
} from '@digdir/designsystemet-react';
import { DateInput } from './components/DateInput'; // Adjust path if needed
import { DatePicker } from './components/DatePicker';
import { CalendarIcon } from './assets/images/CalendarIcon'; // Adjust path if needed
import { format, parse, isValid } from 'date-fns';
import { nb } from 'date-fns/locale';

type Brand = 'brand-1' | 'brand-2';
type Mode = 'light' | 'dark';

function App() {
  const [currentBrand, setCurrentBrand] = useState<Brand>('brand-1');
  const [currentMode, setCurrentMode] = useState<Mode>('light');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  // We no longer need to track if the date picker is open
  // const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const toggleBrand = () => {
    setCurrentBrand((prevBrand) =>
      prevBrand === 'brand-1' ? 'brand-2' : 'brand-1',
    );
  };

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // No need to close the date picker anymore
    // setIsDatePickerOpen(false);
  };

  // Remove the toggleDatePicker function as the date picker is always visible
  // const toggleDatePicker = () => {
  //   setIsDatePickerOpen((prev) => !prev);
  // };

  const [inputValue, setInputValue] = useState<string>(
    selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    const parsedDate = parse(value, 'dd.MM.yyyy', new Date(), { locale: nb });
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
    } else {
      // Optionally handle invalid input, e.g., set selectedDate to null
      // setSelectedDate(null);
    }
  };

  useEffect(() => {
    // Update input value when selectedDate changes
    setInputValue(
      selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: nb }) : '',
    );
  }, [selectedDate]);

  // Remove the click outside logic as the date picker is always visible
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       datePickerRef.current &&
  //       !datePickerRef.current.contains(event.target as Node)
  //     ) {
  //       setIsDatePickerOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [datePickerRef]);

  const formattedDate = selectedDate
    ? format(selectedDate, 'dd.MM.yyyy', { locale: nb })
    : '';

  return (
    <div
      data-color={currentBrand}
      data-color-scheme={currentMode}
      className="app-container"
      style={{ padding: '20px' }}
    >
      <h1>Component Library Theme Test</h1>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button type="button" onClick={toggleBrand}>
          Toggle Brand (Switch to {currentBrand === 'brand-1' ? 'brand-2' : 'brand-1'})
        </button>
        <button type="button" onClick={toggleMode}>
          Toggle Mode (Switch to {currentMode === 'light' ? 'dark' : 'light'})
        </button>
      </div>

      <hr />

      {/* --- DatePicker Input Section --- */}
      <div
        ref={datePickerRef}
        style={{
          marginBottom: '20px', // Add some space below the date picker
          display: 'inline-block', // Or block
        }}
      >
        <p style={{ marginBottom: '10px' }}>Selected Date: {formattedDate}</p>
        {/* The DateInput remains */}
        <div style={{ marginBottom: '10px' }}>
          <DateInput
            aria-label="Velg dato"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="dd.mm.åååå"
            suffixIcon={<CalendarIcon />}
            // The suffix icon can remain, but it won't toggle the date picker
            // onSuffixClick={toggleDatePicker}
          />
        </div>

        {/* The DatePicker is always visible */}
        <DatePicker
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          initialDate={selectedDate || new Date()}
        />
      </div>
    </div>
  );
}

export default App;
