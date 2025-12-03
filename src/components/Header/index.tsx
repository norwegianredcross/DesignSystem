import React, { useState, useEffect } from 'react';
import { Link } from '../Link';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Paragraph } from '../Paragraph';
import styles from './styles.module.css';
import { MenuHamburgerIcon, XMarkIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';

interface HeaderProps {
  activePage?: string;
  setPage?: (pageName: string) => void;
  children?: React.ReactNode;
  showBadge?: boolean;
  showSearch?: boolean;
  showLogin?: boolean;
}

export const Header = ({ 
  activePage, 
  setPage, 
  children,
  showBadge = true,
  showSearch = true,
  showLogin = true
}: HeaderProps) => {
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
          <img src={`${import.meta.env.BASE_URL}logo-red-cross.svg`} alt="" /> 
        </Link>

        {/* Actions Section */}
        <div className={styles.actions}>
          {/* User Info - Desktop shows Name + Avatar, Mobile shows Avatar */}
          <div className={styles.userInfo}>
            <Paragraph data-size="md" className={styles.userName}>Frodo Baggins</Paragraph>
            <Avatar aria-label="Frodo Baggins" data-color="main" variant="circle" initials="FB">
              {showBadge && <Badge count={19} data-color="danger" variant="base" />}
            </Avatar>
          </div>

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
                aria-label="Søk"
              >
                <MagnifyingGlassIcon aria-hidden />
                <span className={styles.buttonText}>Søk</span>
              </Button>
            </div>
          )}

          {/* Menu Button */}
          <Button 
            variant="primary" 
            data-color="main"
            data-size="md"
            onClick={() => setIsOpen(!isOpen)}
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
    </header>
  );
};
