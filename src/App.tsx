import React, { useState } from 'react';
// Import the original button and alias it
import { Button as DigDirButton } from '@digdir/designsystemet-react';
// Import the DatePicker
import { DatePicker } from './components/DatePicker'; // Adjust path

// Import the icon components (if still needed elsewhere, otherwise remove)
// import { ChevronRightIcon } from './assets/images/ChevronRightIcon';
// import { ChevronLeftIcon } from './assets/images/ChevronLeftIcon';

// Define available brands and modes
type Brand = 'brand-1' | 'brand-2';
type Mode = 'light' | 'dark';

function App() {
  const [currentBrand, setCurrentBrand] = useState<Brand>('brand-1');
  const [currentMode, setCurrentMode] = useState<Mode>('light');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // State for selected date

  const toggleBrand = () => {
    setCurrentBrand((prevBrand) =>
      prevBrand === 'brand-1' ? 'brand-2' : 'brand-1',
    );
  };

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleDateSelect = (date: Date) => {
    console.log('Date selected:', date);
    setSelectedDate(date);
  };


  return (
    // Apply BOTH data-color and data-color-scheme attributes here
    <div
      data-color={currentBrand}
      data-color-scheme={currentMode}
      className="app-container"
      style={{ padding: '20px' }}
    >
      <h1>Component Library Theme Test</h1>
      <div style={{ marginBottom: '20px' }}>
        <p>Current Brand: <strong>{currentBrand}</strong></p>
        <p>Current Mode: <strong>{currentMode}</strong></p>
        <p>Selected Date: <strong>{selectedDate ? selectedDate.toLocaleDateString() : 'None'}</strong></p>
      </div>

      {/* Buttons to toggle theme settings */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
         <button type="button" onClick={toggleBrand}>
          Toggle Brand (Switch to {currentBrand === 'brand-1' ? 'brand-2' : 'brand-1'})
        </button>
        <button type="button" onClick={toggleMode}>
          Toggle Mode (Switch to {currentMode === 'light' ? 'dark' : 'light'})
        </button>
      </div>

      <hr />

      {/* --- DatePicker Component --- */}
      <h2>DatePicker</h2>
      <DatePicker
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
      {/* --- End DatePicker --- */}


      <hr style={{marginTop: '30px'}}/>

      {/* Original DigDir Buttons (Optional for comparison) */}
      <h2>Original @digdir/designsystemet-react Button</h2>
       <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
        <DigDirButton variant="primary"> Primary </DigDirButton>
        <DigDirButton variant="secondary"> Secondary </DigDirButton>
        <DigDirButton variant="tertiary"> Tertiary </DigDirButton>
        <DigDirButton variant="primary" data-color="danger"> Danger Colors </DigDirButton>
        <DigDirButton variant="primary" data-color="secondary-hav"> Hav Colors </DigDirButton>
        <DigDirButton variant="primary" data-color="secondary-jungel"> Jungel Colors </DigDirButton>
        <DigDirButton variant="tertiary" icon aria-label="Previous"> {/* Example Icon Button */}
          {/* <ChevronLeftIcon /> */} {/* Assuming icon exists */}
        </DigDirButton>
      </div>

    </div>
  );
}

export default App;
