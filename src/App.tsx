import React, { useState, useEffect } from 'react';
import { DateInput } from './components/DateInput';
import { CalendarIcon } from './assets/images/CalendarIcon';
import { format, parse, isValid } from 'date-fns';
import { nb } from 'date-fns/locale';

type Brand = 'brand-1' | 'brand-2';
type Mode = 'light' | 'dark';

function App() {
  const [currentBrand, setCurrentBrand] = useState<Brand>('brand-1');
  const [currentMode, setCurrentMode] = useState<Mode>('light');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const toggleBrand = () => {
    setCurrentBrand((prevBrand) =>
      prevBrand === 'brand-1' ? 'brand-2' : 'brand-1',
    );
  };

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };



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
       // setSelectedDate(null);
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
    <div
      data-color={currentBrand === 'brand-1' ? 'primary-brand' : 'secondary-hav'}
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

      <div
        style={{
          marginBottom: '20px',
          display: 'inline-block',
        }}
      >
        <p style={{ marginBottom: '10px' }}>Selected Date: {formattedDate}</p>
        <div style={{ marginBottom: '10px' }}>
          <DateInput
            aria-label="Velg dato"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="dd.mm.åååå"
            suffixIcon={<CalendarIcon />}
          />
        </div>

     
      </div>
    </div>
  );
}

export default App;
