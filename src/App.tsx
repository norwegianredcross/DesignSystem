import { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ComponentsPage } from './pages/Components';
import { DesignPage } from './pages/Design';
import { CodePage } from './pages/Code';
import { SearchResultsPage } from './pages/SearchResults';
import { TokensPage } from './pages/Tokens';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const { t } = useLanguage();
  
  const [mainPage, subPage] = page.split('/');

  return (
    <div className="app-container">
      <Header 
        activePage={mainPage} 
        setPage={setPage} 
        showUser={false} 
        showLogin={false} 
        showThemeToggle={false}
        showHeaderExtension={true}
        showModeToggle={true}
        showLanguageSwitch={true}
        showCta={false}
        secondaryLogo={true}
        secondaryLogoSrc={`${import.meta.env.BASE_URL}designsystemlogofinallight.svg`}
        secondaryLogoSrcDark={`${import.meta.env.BASE_URL}designsystemlogofinaldark.svg`}
        secondaryLogoAlt="Designsystem Logo"
        showMenuButton={false}
        showNavItems={true}
        navItems={[
          { label: t('header.nav.design'), href: "design" },
          { label: t('header.nav.components'), href: "components" },
          { label: t('header.nav.code'), href: "code" },
          { label: t('header.nav.tokens'), href: "tokens" }
        ]}
      />
      
      <div className="main-content">
        {mainPage === 'home' ? (
          <HomePage setPage={setPage} />
        ) : mainPage === 'components' ? (
          <ComponentsPage />
        ) : mainPage === 'code' ? (
          <CodePage setPage={setPage} section={subPage} />
        ) : mainPage === 'search' ? (
          <SearchResultsPage query={subPage} setPage={setPage} />
        ) : mainPage === 'tokens' ? (
          <TokensPage />
        ) : (
          <DesignPage section={subPage} />
        )}
      </div>

      <Footer 
        data-color="primary"
        secondaryLogo={true}
        secondaryLogoSrc={`${import.meta.env.BASE_URL}designsystemlogofinallight.svg`}
        secondaryLogoSrcDark={`${import.meta.env.BASE_URL}designsystemlogofinaldark.svg`}
        secondaryLogoAlt="Designsystem Logo"
      />
    </div>
  );
}

export default App;