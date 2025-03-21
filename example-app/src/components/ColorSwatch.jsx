import React from 'react';

const ColorSwatch = ({ colorName, colorVar, textColor = '#fff' }) => {
  const style = {
    backgroundColor: `var(${colorVar})`,
    color: textColor
  };

  return (
    <div className="color-card">
      <div className="color-swatch" style={style}>
        {colorName}
      </div>
      <div className="color-info">
        <div>{colorVar}</div>
      </div>
    </div>
  );
};

export default ColorSwatch;
