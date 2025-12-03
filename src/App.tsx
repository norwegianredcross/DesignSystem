import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ComponentsPage } from './pages/Components';
import { DesignPage } from './pages/Design';
import { CodePage } from './pages/Code';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <Header activePage={page} setPage={setPage} showBadge={false} showLogin={false}>
        <nav className="header-menu-nav" aria-label="Hovedmeny">
          <button 
            type="button"
            className={`header-menu-link ${page === 'design' ? 'header-menu-link-active' : ''}`}
            onClick={() => setPage('design')}
          >
            Design
          </button>
          <button 
            type="button"
            className={`header-menu-link ${page === 'components' ? 'header-menu-link-active' : ''}`}
            onClick={() => setPage('components')}
          >
            Komponenter
          </button>
          <button 
            type="button"
            className={`header-menu-link ${page === 'code' ? 'header-menu-link-active' : ''}`}
            onClick={() => setPage('code')}
          >
            Kode
          </button>
        </nav>
      </Header>
      
      <div className="main-content">
        {page === 'home' ? (
          <HomePage setPage={setPage} />
        ) : page === 'components' ? (
          <ComponentsPage />
        ) : page === 'code' ? (
          <CodePage setPage={setPage} />
        ) : (
          <DesignPage />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;