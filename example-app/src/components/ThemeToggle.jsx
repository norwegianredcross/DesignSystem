import React from 'react';
import Button from './Button';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="theme-toggle">
      <Button onClick={onToggle}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </Button>
    </div>
  );
};

export default ThemeToggle;
