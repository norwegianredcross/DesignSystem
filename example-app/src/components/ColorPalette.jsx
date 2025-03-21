import React from 'react';
import ColorSwatch from './ColorSwatch';

const ColorPalette = () => {
  // Define the color categories based on your design system
  const colorCategories = [
    {
      name: 'Primary Colors',
      colors: [
        { name: 'Background Default', var: '--ds-color-primary-background-default' },
        { name: 'Background Tinted', var: '--ds-color-primary-background-tinted' },
        { name: 'Surface Default', var: '--ds-color-primary-surface-default' },
        { name: 'Surface Tinted', var: '--ds-color-primary-surface-tinted' },
        { name: 'Surface Hover', var: '--ds-color-primary-surface-hover' },
        { name: 'Surface Active', var: '--ds-color-primary-surface-active' },
        { name: 'Border Subtle', var: '--ds-color-primary-border-subtle' },
        { name: 'Border Default', var: '--ds-color-primary-border-default' },
        { name: 'Border Strong', var: '--ds-color-primary-border-strong' },
        { name: 'Text Subtle', var: '--ds-color-primary-text-subtle' },
        { name: 'Text Default', var: '--ds-color-primary-text-default' },
        { name: 'Base Default', var: '--ds-color-primary-base-default' },
      ]
    },
    {
      name: 'Neutral Colors',
      colors: [
        { name: 'Background Default', var: '--ds-color-neutral-background-default' },
        { name: 'Background Tinted', var: '--ds-color-neutral-background-tinted' },
        { name: 'Surface Default', var: '--ds-color-neutral-surface-default' },
        { name: 'Surface Tinted', var: '--ds-color-neutral-surface-tinted' },
        { name: 'Surface Hover', var: '--ds-color-neutral-surface-hover' },
        { name: 'Surface Active', var: '--ds-color-neutral-surface-active' },
        { name: 'Border Subtle', var: '--ds-color-neutral-border-subtle' },
        { name: 'Border Default', var: '--ds-color-neutral-border-default' },
        { name: 'Border Strong', var: '--ds-color-neutral-border-strong' },
        { name: 'Text Subtle', var: '--ds-color-neutral-text-subtle' },
        { name: 'Text Default', var: '--ds-color-neutral-text-default' },
        { name: 'Base Default', var: '--ds-color-neutral-base-default' },
      ]
    },
    {
      name: 'Accent Colors',
      colors: [
        { name: 'Background Default', var: '--ds-color-accent-background-default' },
        { name: 'Background Tinted', var: '--ds-color-accent-background-tinted' },
        { name: 'Surface Default', var: '--ds-color-accent-surface-default' },
        { name: 'Surface Tinted', var: '--ds-color-accent-surface-tinted' },
        { name: 'Surface Hover', var: '--ds-color-accent-surface-hover' },
        { name: 'Surface Active', var: '--ds-color-accent-surface-active' },
        { name: 'Border Subtle', var: '--ds-color-accent-border-subtle' },
        { name: 'Border Default', var: '--ds-color-accent-border-default' },
        { name: 'Border Strong', var: '--ds-color-accent-border-strong' },
        { name: 'Text Subtle', var: '--ds-color-accent-text-subtle' },
        { name: 'Text Default', var: '--ds-color-accent-text-default' },
        { name: 'Base Default', var: '--ds-color-accent-base-default' },
      ]
    },
    {
      name: 'Success Colors',
      colors: [
        { name: 'Background Default', var: '--ds-color-success-background-default' },
        { name: 'Background Tinted', var: '--ds-color-success-background-tinted' },
        { name: 'Surface Default', var: '--ds-color-success-surface-default' },
        { name: 'Surface Tinted', var: '--ds-color-success-surface-tinted' },
        { name: 'Border Default', var: '--ds-color-success-border-default' },
        { name: 'Text Default', var: '--ds-color-success-text-default' },
      ]
    },
    {
      name: 'Warning Colors',
      colors: [
        { name: 'Background Default', var: '--ds-color-warning-background-default' },
        { name: 'Background Tinted', var: '--ds-color-warning-background-tinted' },
        { name: 'Surface Default', var: '--ds-color-warning-surface-default' },
        { name: 'Surface Tinted', var: '--ds-color-warning-surface-tinted' },
        { name: 'Border Default', var: '--ds-color-warning-border-default' },
        { name: 'Text Default', var: '--ds-color-warning-text-default' },
      ]
    },
    {
      name: 'Danger Colors',
      colors: [
        { name: 'Background Default', var: '--ds-color-danger-background-default' },
        { name: 'Background Tinted', var: '--ds-color-danger-background-tinted' },
        { name: 'Surface Default', var: '--ds-color-danger-surface-default' },
        { name: 'Surface Tinted', var: '--ds-color-danger-surface-tinted' },
        { name: 'Border Default', var: '--ds-color-danger-border-default' },
        { name: 'Text Default', var: '--ds-color-danger-text-default' },
      ]
    },
  ];

  return (
    <div>
      {colorCategories.map((category) => (
        <div key={category.name} className="section">
          <h2>{category.name}</h2>
          <div className="color-grid">
            {category.colors.map((color) => (
              <ColorSwatch
                key={color.var}
                colorName={color.name}
                colorVar={color.var}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
