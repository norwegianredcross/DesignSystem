// src/design-system/Theme.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

// Helper component for displaying a color swatch
const ColorSwatch: React.FC<{
  varName: string;
  label: string;
  isText?: boolean;
}> = ({ varName, label, isText = false }) => {
  const swatchStyle: React.CSSProperties = isText
    ? {
        color: `var(${varName})`,
        padding: '10px',
        border: '1px dashed #ccc',
        minHeight: '40px',
        fontWeight: 'bold',
      }
    : {
        backgroundColor: `var(${varName})`,
        height: '50px',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #eee',
      };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.8em',
    marginBottom: '4px',
    color: 'var(--ds-color-neutral-text-default)',
    display: 'block',
    fontWeight: 500,
  };

  const codeStyle: React.CSSProperties = {
    fontSize: '0.75em',
    color: 'var(--ds-color-neutral-text-subtle)',
    display: 'block',
    marginTop: '4px',
    wordBreak: 'break-all',
  };

  return (
    <div style={{ marginBottom: '12px' }}>
      <span style={labelStyle}>{label}</span>
      <div style={swatchStyle}>
        {isText ? 'Sample Text' : ''}
      </div>
      <code style={codeStyle}>{varName}</code>
    </div>
  );
};

// Helper component for a color category
const ColorCategory: React.FC<{ title: string; prefix: string }> = ({
  title,
  prefix,
}) => {
  const colors = [
    { suffix: 'background-default', label: 'Background Default' },
    { suffix: 'background-tinted', label: 'Background Tinted' },
    { suffix: 'surface-default', label: 'Surface Default' },
    { suffix: 'surface-tinted', label: 'Surface Tinted' },
    { suffix: 'surface-hover', label: 'Surface Hover' },
    { suffix: 'surface-active', label: 'Surface Active' },
    { suffix: 'border-subtle', label: 'Border Subtle' },
    { suffix: 'border-default', label: 'Border Default' },
    { suffix: 'border-strong', label: 'Border Strong' },
    { suffix: 'text-subtle', label: 'Text Subtle', isText: true },
    { suffix: 'text-default', label: 'Text Default', isText: true },
    { suffix: 'base-default', label: 'Base Default' },
    { suffix: 'base-hover', label: 'Base Hover' },
    { suffix: 'base-active', label: 'Base Active' },
    { suffix: 'base-contrast-subtle', label: 'Base Contrast Subtle', isText: true },
    { suffix: 'base-contrast-default', label: 'Base Contrast Default', isText: true },
  ];

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        {title}
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '1rem',
        }}
      >
        {colors.map((color) => (
          <ColorSwatch
            key={color.suffix}
            varName={`--ds-color-${prefix}-${color.suffix}`}
            label={color.label}
            isText={color.isText}
          />
        ))}
      </div>
    </section>
  );
// --- FIX: Add missing closing brace ---
};
// --- END FIX ---

// Main component to render all categories
const ThemeShowcase = () => {
  return (
    <div>
      <h1>Color Token Showcase</h1>
      <p>
        Displays colors defined by CSS variables. Use Storybook controls to
        switch themes (Brand/Mode).
      </p>
      <ColorCategory title="Primary Brand" prefix="primary-brand" />
      <ColorCategory title="Secondary Hav" prefix="secondary-hav" />
      <ColorCategory title="Secondary Jungel" prefix="secondary-jungel" />
      <ColorCategory title="Neutral" prefix="neutral" />
      <ColorCategory title="Success" prefix="success" />
      <ColorCategory title="Danger" prefix="danger" />
      <ColorCategory title="Info" prefix="info" />
      <ColorCategory title="Warning" prefix="warning" />

       <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
          Focus & Link
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
           <ColorSwatch varName="--ds-color-focus-inner" label="Focus Inner" />
           <ColorSwatch varName="--ds-color-focus-outer" label="Focus Outer" />
           <ColorSwatch varName="--ds-link-color-visited" label="Link Visited" isText={true} />
        </div>
       </section>
    </div>
  );
};

// Storybook Meta Configuration
const meta: Meta = {
  title: 'Design System/Color Theme',
  component: ThemeShowcase,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Define the story object
type Story = StoryObj<typeof ThemeShowcase>;

export const Showcase: Story = {};
