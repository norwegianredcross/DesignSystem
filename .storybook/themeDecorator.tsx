import React from 'react';
import '@digdir/designsystemet-css/index.css'; // Digdir's base styles
import '../design-tokens-build/brand-1.css';   
import './storybook-font-override.css';

export const themeDecorator = (Story, context) => {
    // Defensive: fallback to string if object
    const brand = typeof context.globals.brand === 'string'
      ? context.globals.brand
      : (context.globals.brand?.value || 'primary-brand');
    const mode = typeof context.globals.mode === 'string'
      ? context.globals.mode
      : (context.globals.mode?.value || 'light');
      
      console.log(context.globals.brand, context.globals.mode)
      
      return (
      <div data-color={brand} data-color-scheme={mode}>
        {Story(context.args, context)}
      </div>
    );
  };
