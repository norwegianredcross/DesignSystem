import { useState, useEffect } from 'react'
import './styles/design-system.css'
import ColorPalette from './components/ColorPalette'
import ButtonShowcase from './components/ButtonShowcase'
import CardShowcase from './components/CardShowcase'
import ThemeToggle from './components/ThemeToggle'
import LoginPage from './components/LoginPage'
import Navigation from './components/Navigation'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('showcase');

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Navigate between pages
  const handleNavigate = (page) => {
    setActivePage(page);
  };

  // Apply dark mode data attribute to body when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-color-scheme', 'dark');
    } else {
      document.documentElement.setAttribute('data-color-scheme', 'light');
    }
  }, [isDarkMode]);

  // Render the showcase page
  const renderShowcase = () => (
    <div className="container">
      <header className="section">
        <h1>RedCross Design System</h1>
        <p>This example page showcases the RedCross design system components and tokens.</p>
      </header>

      <ButtonShowcase />
      
      <CardShowcase />
      
      <ColorPalette />
    </div>
  );

  return (
    <div>
      {activePage === 'showcase' && (
        <div style={{position: 'absolute', top: '1rem', right: '1rem'}}>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        </div>
      )}
      
      <Navigation activePage={activePage} onNavigate={handleNavigate} />
      
      {activePage === 'showcase' ? renderShowcase() : <LoginPage />}
    </div>
  );
}

export default App
