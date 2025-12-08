import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ComponentsPage } from './pages/Components';
import { DesignPage } from './pages/Design';
import { CodePage } from './pages/Code';
import { SearchResultsPage } from './pages/SearchResults';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  
  const [mainPage, subPage] = page.split('/');

  return (
    <div className="app-container">
      <Header 
        activePage={mainPage} 
        setPage={setPage} 
        showUser={false} 
        showLogin={false} 
        showThemeToggle={true}
        showCta={false}
      >
        <nav className="header-menu-nav" aria-label="Hovedmeny">
          <button 
            type="button"
            className={`header-menu-link ${mainPage === 'design' ? 'header-menu-link-active' : ''}`}
            onClick={() => setPage('design')}
          >
            Design
          </button>
          <button 
            type="button"
            className={`header-menu-link ${mainPage === 'components' ? 'header-menu-link-active' : ''}`}
            onClick={() => setPage('components')}
          >
            Komponenter
          </button>
          <button 
            type="button"
            className={`header-menu-link ${mainPage === 'code' ? 'header-menu-link-active' : ''}`}
            onClick={() => setPage('code')}
          >
            Kode
          </button>
        </nav>
      </Header>
      
      <div className="main-content">
        {mainPage === 'home' ? (
          <HomePage setPage={setPage} />
        ) : mainPage === 'components' ? (
          <ComponentsPage />
        ) : mainPage === 'code' ? (
          <CodePage setPage={setPage} section={subPage} />
        ) : mainPage === 'search' ? (
          <SearchResultsPage query={subPage} setPage={setPage} />
        ) : (
          <DesignPage section={subPage} />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;