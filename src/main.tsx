import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'rk-design-tokens/design-tokens-build/theme.css';
import '@digdir/designsystemet-css/index.css';


// Apply the default theme attributes to the root element to match Storybook environment
// This ensures that the correct design tokens are applied, especially overriding the base defaults.
document.documentElement.setAttribute('data-color-scheme', 'light');
document.documentElement.setAttribute('data-color', 'primary-color-red');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
