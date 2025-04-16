import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import global reset/base styles first (if any)
import './index.css';

// 1. Import the OFFICIAL library COMPONENT CSS (Correct path from docs)
import '@digdir/designsystemet-css/index.css'; // <--- CORRECT LIBRARY COMPONENT STYLES

// 2. Import YOUR custom theme file (INSTEAD of @digdir/designsystemet-theme)
import '../design-tokens-build/brand-1.css'; // <--- YOUR MERGED THEME OVERRIDES

// Import your App component
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
