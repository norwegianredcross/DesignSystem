// src/design-system/Icons.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

// --- Import ALL exports from the package using a wildcard ---
import * as AllIcons from '@navikt/aksel-icons';

// Helper component to display an icon with its name
const IconDisplay: React.FC<{
  IconComponent: React.ElementType;
  name: string;
}> = ({ IconComponent, name }) => {
  const iconSize = '1.5rem'; // Use recommended minimum size
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        border: '1px solid #eee',
        borderRadius: '4px',
        minWidth: '100px', // Adjust minWidth if needed
        textAlign: 'center',
      }}
    >
      {/* Render the icon component */}
      <IconComponent title={name} fontSize={iconSize} />
      <code
        style={{
          fontSize: '0.70em', // Smaller font size for potentially long names
          marginTop: '0.5rem',
          color: '#555',
          wordBreak: 'break-all',
        }}
      >
        {/* Display the component name */}
        {name}
      </code>
    </div>
  );
};

// Main component to render the showcase grid
const IconShowcase = () => {
  // --- Filter the imported object to get only Icon Components ---
  const iconComponents = Object.entries(AllIcons)
    // Filter by name convention (ends with Icon) and type (React component/function)
    .filter(([name, component]) =>
        name.endsWith('Icon') &&
        (typeof component === 'function' || (typeof component === 'object' && component !== null && 'render' in component))
    )
    // Sort alphabetically by name
    .sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

  return (
    <div>
      <h1>Icon Showcase (@navikt/aksel-icons)</h1>
      <p>
        Displaying all available icons ({iconComponents.length}). Use the <code>title</code> prop
        for accessibility. Size is controlled via <code>fontSize</code>.
      </p>
      <div
        style={{
          display: 'grid',
          // Adjust columns for potentially many icons
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        {iconComponents.map(([name, Comp]) => (
          // Pass the component and its name to the display helper
          <IconDisplay key={name} IconComponent={Comp as React.ElementType} name={name} />
        ))}
      </div>
    </div>
  );
};

// Storybook Meta Configuration
const meta: Meta = {
  title: 'Design System/Icons (NAV Aksel)',
  component: IconShowcase,
  parameters: {
    layout: 'padded', // Use padded layout
  },
};

export default meta;

// Define the story object
type Story = StoryObj<typeof IconShowcase>;

export const Showcase: Story = {
  name: "All Icons" // Rename story
};
