import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '../Link';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { Paragraph } from '../Paragraph';
import { Search } from '../Search';
import styles from './styles.module.css';
import { MenuHamburgerIcon, XMarkIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { searchIndex } from '../../utils/search-index';

interface HeaderProps {
  activePage?: string;
  setPage?: (pageName: string) => void;
  children?: React.ReactNode;
  showUser?: boolean;
  showSearch?: boolean;
  showLogin?: boolean;
  secondaryLogo?: boolean;
  secondaryLogoSrc?: string;
  secondaryLogoAlt?: string;
}

export const Header = ({ 
  activePage, 
  setPage, 
  children,
  showUser = true,
  showSearch = true,
  showLogin = true,
  secondaryLogo = false,
  secondaryLogoSrc,
  secondaryLogoAlt = "Secondary Logo"
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Close menu when active page changes
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [activePage]);

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
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description?.toLowerCase().includes(lowerQuery)
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
          <div className={styles.divider} />
          <img src={`${import.meta.env.BASE_URL}designsystemlogofinal.svg`} alt="Designsystem Logo" className={styles.secondaryLogo} />

          {secondaryLogo && secondaryLogoSrc && (
            <>
              <div className={styles.divider} />
              <img src={secondaryLogoSrc} alt={secondaryLogoAlt} className={styles.secondaryLogo} />
            </>
          )}
        </div>

        {/* Actions Section */}
        <div className={styles.actions}>
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
        </div>
      </div>

      {/* Slottable Menu Area */}
      {isOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            {children}
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
                  <ul className={styles.resultList}>
                    {filteredResults.map((result) => (
                      <li key={result.id} className={styles.resultItem}>
                        <button 
                          className={styles.resultLink}
                          onClick={() => handleSearchResultClick(result.path)}
                        >
                          <span className={styles.resultTitle}>{result.title}</span>
                          <span className={styles.resultCategory}>{result.category}</span>
                          {result.description && (
                            <span className={styles.resultDescription}>{result.description}</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
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
