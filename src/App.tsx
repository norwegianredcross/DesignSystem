import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ComponentsPage } from './pages/Components';
import { DesignPage } from './pages/Design';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <Header activePage={page} setPage={setPage}>
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
          <a 
            href="https://github.com/norwegianredcross/DesignSystem" 
            target="_blank" 
            rel="noreferrer" 
            className="header-menu-link"
          >
            Kode
          </a>
        </nav>
      </Header>
      
      <div className="main-content">
        {page === 'home' ? (
          <HomePage setPage={setPage} />
        ) : page === 'components' ? (
          <ComponentsPage />
        ) : (
          <DesignPage />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;