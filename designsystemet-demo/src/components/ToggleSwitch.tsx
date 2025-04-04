import React, { useState } from 'react';

export const ToggleSwitch = ({
  label,
  onChange,
}: {
  label: string;
  onChange: (checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--ds-font-family)',
        color: 'var(--ds-color-neutral-text-default)',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        style={{
          width: '16px',
          height: '16px',
          accentColor: 'var(--ds-color-primary-base-default)',
        }}
      />
      {label}
    </label>
  );
};
