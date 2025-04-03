import React, { useState } from 'react';

export const ToggleSwitch = ({
  label,
  icon,
  onChange,
  isThemeSwitch = false,
}: {
  label?: string;
  icon?: React.ReactNode;
  onChange: (checked: boolean) => void;
  isThemeSwitch?: boolean;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        cursor: 'pointer'
      }}
      onClick={handleChange}
    >
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: isThemeSwitch 
          ? (checked ? '#ffffff' : '#1E1E1E')  // Dark mode: white, Light mode: dark gray
          : (checked ? '#D52B1E' : '#1E1E1E'), // Theme 1: red, Theme 2: black
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.2s',
      }}>
        {isThemeSwitch ? (
          <div style={{
            color: checked ? 'black' : 'white',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {icon}
          </div>
        ) : (
          <span style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
};
