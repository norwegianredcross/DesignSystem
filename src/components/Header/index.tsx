import React, { useState, useEffect } from 'react';
import { Link } from '../Link';
import styles from './styles.module.css';
import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';

interface HeaderProps {
  activePage?: string;
  setPage?: (pageName: string) => void;
  children?: React.ReactNode;
}

export const Header = ({ activePage, setPage, children }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when active page changes
  useEffect(() => {
    setIsOpen(false);
  }, [activePage]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (setPage) {
      e.preventDefault();
      setPage('home');
    }
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo} aria-label="Norges Røde Kors Hjem" onClick={handleLogoClick}>
          <img src="/logo-red-cross.svg" alt="" /> 
        </Link>

        {/* Menu Button */}
        <button 
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
        >
          <span className={styles.menuText}>{isOpen ? 'Lukk' : 'Meny'}</span>
          {isOpen ? (
            <XMarkIcon style={{ fontSize: '1.5rem' }} aria-hidden />
          ) : (
            <MenuHamburgerIcon style={{ fontSize: '1.5rem' }} aria-hidden />
          )}
        </button>
      </div>

      {/* Slottable Menu Area */}
      {isOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            {children}
          </div>
        </div>
      )}
    </header>
  );
};