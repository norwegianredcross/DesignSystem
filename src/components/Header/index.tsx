import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '../Link';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { Paragraph } from '../Paragraph';
import { Search } from '../Search';
import { Switch } from '../Switch';
import styles from './styles.module.css';
import { MenuHamburgerIcon, XMarkIcon, MagnifyingGlassIcon, HeartIcon } from '@navikt/aksel-icons';
import { searchIndex } from '../../utils/search-index';

interface HeaderProps {
  activePage?: string;
  setPage?: (pageName: string) => void;
  children?: React.ReactNode;
  showUser?: boolean;
  showSearch?: boolean;
  showLogin?: boolean;
  showCta?: boolean;
  ctaLabel?: string;
  ctaIcon?: React.ReactNode;
  onCtaClick?: () => void;
  showThemeToggle?: boolean;
  secondaryLogo?: boolean;
  secondaryLogoSrc?: string;
  secondaryLogoAlt?: string;
  navItems?: { label: string; href: string }[];
  showMenuButton?: boolean;
}

export const Header = ({ 
  activePage, 
  setPage, 
  children,
  showUser = true,
  showSearch = true,
  showLogin = true,
  showCta = false,
  ctaLabel = "Støtt oss",
  ctaIcon = <HeartIcon aria-hidden />,
  onCtaClick,
  showThemeToggle = false,
  secondaryLogo = false,
  secondaryLogoSrc,
  secondaryLogoAlt = "Secondary Logo",
  navItems,
  showMenuButton = true
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Close menu when active page changes
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [activePage]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-color-scheme', newTheme);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (setPage) {
      e.preventDefault();
      setPage('home');
    }
    setIsOpen(false);
    setIsSearchOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) setIsOpen(false);
    // Focus input logic could go here if we had a ref
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().startsWith(lowerQuery)
    );
  }, [searchQuery]);

  const handleSearchResultClick = (path: string) => {
    if (setPage) {
      setPage(path);
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo Section */}
        <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo} aria-label="Norges Røde Kors Hjem" onClick={handleLogoClick}>
          <img src={`${import.meta.env.BASE_URL}logo-red-cross.svg`} alt="" /> 
        </Link>
          
          {/* Added Design System Logo */}
          <img 
            src={`${import.meta.env.BASE_URL}${theme === 'dark' ? 'designsystemlogofinaldark.svg' : 'designsystemlogofinallight.svg'}`} 
            alt="Designsystem Logo" 
            className={styles.secondaryLogo} 
          />

          {secondaryLogo && secondaryLogoSrc && (
            <>
              <div className={styles.divider} />
              <img src={secondaryLogoSrc} alt={secondaryLogoAlt} className={styles.secondaryLogo} />
            </>
          )}
        </div>

        {navItems && navItems.length > 0 && (
          <nav className={styles.navItems}>
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className={styles.navLink}
                onClick={(e) => {
                  if (setPage) {
                    e.preventDefault();
                    setPage(item.href);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Actions Section */}
        <div className={styles.actions}>
          {/* CTA Button */}
          {showCta && (
            <Button 
              variant="primary" 
              data-color="main" 
              data-size="md"
              className={styles.ctaButton}
              onClick={onCtaClick}
            >
              {ctaIcon}
              <span className={styles.buttonText}>{ctaLabel}</span>
            </Button>
          )}

          {/* Theme Toggle - Moved to Menu */}
          {/* User Info - Desktop shows Name + Avatar, Mobile shows Avatar */}
          {showUser && (
            <div className={styles.userInfo}>
              <Paragraph data-size="md" className={styles.userName}>Frodo Baggins</Paragraph>
              <Avatar aria-label="Frodo Baggins" data-color="main" variant="circle" initials="FB" />
            </div>
          )}

          {/* Login Link */}
          {showLogin && (
            <a href="#" className={styles.loginLink}>
              <span className={styles.loginText}>Logg inn</span>
              <div className={styles.underline}></div>
            </a>
          )}

          {/* Search Button */}
          {showSearch && (
            <div className={styles.searchButtonWrapper}>
               <Button 
                variant="secondary" 
                data-color="main"
                data-size="md"
                onClick={toggleSearch}
                aria-expanded={isSearchOpen}
                aria-label={isSearchOpen ? "Lukk søk" : "Åpne søk"}
              >
                {isSearchOpen ? (
                  <XMarkIcon aria-hidden />
                ) : (
                  <MagnifyingGlassIcon aria-hidden />
                )}
                <span className={styles.buttonText}>{isSearchOpen ? 'Lukk' : 'Søk'}</span>
              </Button>
            </div>
          )}

        {/* Menu Button */}
          {showMenuButton && (
            <Button 
              variant="primary" 
              data-color="main"
              data-size="md"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
              className={styles.menuButton}
            >
              {isOpen ? (
                <XMarkIcon aria-hidden />
              ) : (
                <MenuHamburgerIcon aria-hidden />
              )}
              <span className={styles.buttonText}>{isOpen ? 'Lukk' : 'Meny'}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Slottable Menu Area */}
      {isOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            <div className={styles.menuLeftColumn} aria-hidden="true" />
            <div className={styles.menuRightColumn}>
              {showThemeToggle && (
                <div className={styles.menuThemeToggleWrapper}>
                  <Switch
                    position="end"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    label="Nattmodus"
                    data-size="sm"
                  />
                </div>
              )}
              <div className={styles.slotContent}>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className={styles.searchOverlay}>
            <div className={styles.searchContent}>
              <Search>
                <Search.Input 
                  aria-label="Søk" 
                  placeholder="Søk etter innhold..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              <Search.Button aria-label="Søk" />
              <Search.ClearButton onClick={() => setSearchQuery('')} aria-label="Tøm søk" />
            </Search>

            {searchQuery && (
              <div className={styles.searchResults}>
                {filteredResults.length > 0 ? (
                  <div className={styles.suggestionsSection}>
                    <h3 className={styles.suggestionsTitle}>Forslag til søk</h3>
                    <ul className={styles.resultList}>
                      {filteredResults.slice(0, 5).map((result) => (
                        <li key={result.id} className={styles.resultItem}>
                          <button 
                            className={styles.resultLink}
                            onClick={() => handleSearchResultClick(result.path)}
                          >
                            <span className={styles.suggestionIcon}>
                              <MagnifyingGlassIcon aria-hidden />
                            </span>
                            <span className={styles.suggestionText}>
                              {/* Simple highlighting: Split by query and color match */}
                              {(() => {
                                const matchIndex = result.title.toLowerCase().indexOf(searchQuery.toLowerCase());
                                if (matchIndex === -1) return <span className={styles.remainingText}>{result.title}</span>;
                                
                                const before = result.title.slice(0, matchIndex);
                                const match = result.title.slice(matchIndex, matchIndex + searchQuery.length);
                                const after = result.title.slice(matchIndex + searchQuery.length);
                                
                                return (
                                  <>
                                    <span className={styles.remainingText}>{before}</span>
                                    <span className={styles.highlightedText}>{match}</span>
                                    <span className={styles.remainingText}>{after}</span>
                                  </>
                                );
                              })()}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    {filteredResults.length > 5 && (
                      <Link 
                        href="#" 
                        data-color="neutral"
                        className={styles.viewAllLink} 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          if (setPage) {
                            setPage(`search/${searchQuery}`);
                          }
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                      >
                        Vis alle resultater ({filteredResults.length})
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className={styles.noResults}>
                    <Paragraph>Ingen treff funnet for "{searchQuery}"</Paragraph>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
