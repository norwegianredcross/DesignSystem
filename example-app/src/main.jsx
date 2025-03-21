import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import Designsystemet CSS and theme
import '@digdir/designsystemet-css'
import '@digdir/designsystemet-theme'

// Import application styles
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
