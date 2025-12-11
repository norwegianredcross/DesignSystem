import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../Link';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { Paragraph } from '../Paragraph';
import { Search } from '../Search';
import { Switch } from '../Switch';
import { Dropdown } from '../Dropdown';
import styles from './styles.module.css';
import { MenuHamburgerIcon, XMarkIcon, MagnifyingGlassIcon, HeartIcon, ChevronDownIcon } from '@navikt/aksel-icons';
import { searchIndex } from '../../utils/search-index';

export interface HeaderProps {
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
  secondaryLogoSrcDark?: string;
  secondaryLogoAlt?: string;
  navItems?: { label: string; href: string }[];
  showNavItems?: boolean;
  showMenuButton?: boolean;
  showHeaderExtension?: boolean;
  showModeToggle?: boolean;
  showLanguageSwitch?: boolean;
}

export const Header = ({ 
  activePage, 
  setPage, 
  children,
  showUser = true,
  showSearch = true,
  showLogin = true,
  showCta = false,
  ctaLabel,
  ctaIcon = <HeartIcon aria-hidden />,
  onCtaClick,
  showThemeToggle = false,
  secondaryLogo = false,
  secondaryLogoSrc,
  secondaryLogoSrcDark,
  secondaryLogoAlt = "Secondary Logo",
  navItems,
  showNavItems = true,
  showMenuButton = true,
  showHeaderExtension = false,
  showModeToggle = false,
  showLanguageSwitch = false
}: HeaderProps) => {
  // Ensure header styles are present even if consumer forgets to import the CSS bundle
  useEffect(() => {
    import('rk-designsystem/dist/rk-designsystem.css').catch(() => {});
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { language, setLanguage, t } = useLanguage();

  const RedCrossLogo = () => (
    <svg
      width="170"
      height="119"
      viewBox="24 0 170 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      className={styles.redCrossLogo}
    >
      <path d="M76.1036 48.1397C77.8925 47.8781 79.6984 47.7525 81.5061 47.7639C84.1713 47.7639 86.0396 48.1669 87.3182 49.1857C87.8735 49.639 88.3149 50.2176 88.6067 50.8744C88.8984 51.5312 89.0323 52.2479 88.9974 52.9665C88.9839 53.9451 88.6724 54.896 88.1049 55.691C87.5373 56.4861 86.7411 57.087 85.8235 57.4129V57.4944C87.0796 58.006 87.7684 59.2104 88.2231 60.8722C88.7813 62.9097 89.3441 65.2688 89.6907 65.9661H85.5309C85.2382 65.4544 84.7835 63.9829 84.2793 61.7597C83.7751 59.5365 83.0097 58.8527 81.344 58.8527H80.1284V65.9661H76.1036V48.1397ZM80.1284 55.9141H81.7312C83.7526 55.9141 84.9546 54.8954 84.9546 53.3151C84.9546 51.6534 83.8336 50.8202 81.9698 50.7931C81.3532 50.7814 80.7368 50.8268 80.1284 50.9289V55.9141Z" fill="#1E1E1E"/>
      <path d="M97.8528 52.5633C98.9439 52.5351 100.026 52.7744 101.004 53.2606L102.256 51.4087L103.669 52.4003L102.467 54.2115C103.188 54.8589 103.758 55.6585 104.137 56.5531C104.515 57.4478 104.692 58.4154 104.655 59.3869C104.655 64.0506 101.243 66.2738 97.8573 66.2738C96.7852 66.2984 95.7234 66.059 94.7644 65.5765L93.4543 67.4556L92.1037 66.387L93.2787 64.6438C91.8651 63.4892 91.0277 61.7233 91.0277 59.414C91.0277 55.2891 93.7965 52.5543 97.8213 52.5543L97.8528 52.5633ZM99.2934 55.9411C98.8798 55.6237 98.3731 55.4533 97.8528 55.4566C95.7458 55.4566 94.949 57.5757 94.949 59.4005C94.9265 60.126 95.0909 60.845 95.4262 61.4878L95.4802 61.515L99.2934 55.9411ZM96.4932 62.8552C96.8653 63.1843 97.3486 63.3576 97.8438 63.3397C99.6446 63.3397 100.748 61.7821 100.748 59.4774C100.76 58.7777 100.625 58.0833 100.351 57.4399L100.27 57.4127L96.4932 62.8552Z" fill="#1E1E1E"/>
      <path d="M119.76 46.9351V62.0537C119.76 63.5253 119.814 65.0829 119.868 65.9659H116.266L116.077 64.037H116.01C115.593 64.7375 114.998 65.3131 114.285 65.7041C113.573 66.095 112.769 66.287 111.958 66.2602C108.865 66.2602 106.384 63.6068 106.384 59.5317C106.384 55.1079 109.085 52.5632 112.237 52.5632C113.835 52.5632 115.087 53.1247 115.676 54.0393H115.726V46.9351H119.76ZM115.708 58.4088C115.708 58.1914 115.681 57.8971 115.658 57.6843C115.556 57.1295 115.266 56.6274 114.838 56.2627C114.41 55.8981 113.869 55.6933 113.308 55.683C111.467 55.683 110.508 57.3447 110.508 59.4094C110.508 61.6327 111.602 63.0318 113.281 63.0318C113.838 63.0337 114.378 62.8389 114.807 62.4814C115.235 62.1239 115.526 61.6264 115.627 61.0757C115.702 60.7676 115.737 60.451 115.73 60.1339L115.708 58.4088Z" fill="#1E1E1E"/>
      <path d="M126.13 60.6869C126.265 62.3758 127.931 63.1772 129.808 63.1772C131.029 63.1934 132.245 63.013 133.41 62.6429L133.946 65.4049C132.438 65.9752 130.838 66.2562 129.227 66.2335C124.802 66.2335 122.272 63.6345 122.272 59.5322C122.272 56.2088 124.325 52.5366 128.854 52.5366C133.063 52.5366 134.666 55.8329 134.666 59.0794C134.666 59.6271 134.62 60.1738 134.531 60.714L126.13 60.6869ZM130.902 57.8977C130.902 56.9061 130.475 55.2443 128.611 55.2443C126.904 55.2443 126.211 56.8246 126.103 57.8977H130.902Z" fill="#1E1E1E"/>
      <path d="M142.603 47.8994H146.623V55.8866H146.7C147.1 55.1893 147.501 54.5283 147.929 53.9034L151.981 47.8994H156.978L151.035 55.5969L157.297 65.9703H152.57L148.172 58.1687L146.623 60.0704V65.9567H142.598L142.603 47.8994Z" fill="#1E1E1E"/>
      <path d="M164.294 66.2599C160.485 66.2599 157.541 63.7424 157.541 59.5043C157.541 55.2662 160.309 52.563 164.496 52.563C168.494 52.563 171.159 55.325 171.159 59.2643C171.159 64.0639 167.774 66.2599 164.307 66.2599H164.294ZM164.375 63.3394C165.946 63.3394 166.959 61.7592 166.959 59.4001C166.959 57.4395 166.216 55.4563 164.375 55.4563C162.43 55.4563 161.709 57.4667 161.709 59.4001C161.709 61.6641 162.641 63.3394 164.348 63.3394H164.375Z" fill="#1E1E1E"/>
      <path d="M173.676 57.1727C173.676 55.2438 173.622 54.0031 173.568 52.8576H177.062L177.197 55.271H177.3C177.535 54.507 178 53.8353 178.63 53.3486C179.261 52.8619 180.026 52.5843 180.821 52.5542C181.105 52.5425 181.391 52.5607 181.672 52.6086V56.4392C181.303 56.3736 180.93 56.3387 180.555 56.335C179.06 56.335 178.048 57.1365 177.782 58.3997C177.726 58.6983 177.699 59.0015 177.701 59.3053V65.9659H173.649L173.676 57.1727Z" fill="#1E1E1E"/>
      <path d="M183.752 62.4023C184.824 62.9936 186.018 63.3283 187.241 63.3803C188.47 63.3803 188.974 62.9275 188.974 62.28C188.974 61.6325 188.573 61.2613 187.056 60.7768C184.355 59.8712 183.351 58.3951 183.351 56.8375C183.351 54.3969 185.404 52.5496 188.654 52.5496C189.92 52.5283 191.175 52.7848 192.332 53.3012L191.612 56.1357C190.741 55.6712 189.775 55.4155 188.789 55.3886C187.803 55.3886 187.241 55.787 187.241 56.4571C187.241 57.1273 187.749 57.4216 189.348 57.9604C191.828 58.8162 192.868 60.0795 192.891 62.0084C192.891 64.4444 190.973 66.2691 187.241 66.2691C185.784 66.2951 184.341 65.974 183.031 65.3318L183.752 62.4023Z" fill="#1E1E1E"/>
      <path d="M50.1985 39.8037H37.1426V79.1965H50.1985V39.8037Z" fill="#D52B1E"/>
      <path d="M63.2545 52.9331H24.0869V66.0625H63.2545V52.9331Z" fill="#D52B1E"/>
    </svg>
  );

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
      {showHeaderExtension && (
        <div className={styles.headerExtension} data-color-scheme="light">
          <div className={styles.extensionContentWrapper}>
            {showModeToggle && (
              <div className={styles.extensionContent}>
                <Switch 
                  data-size="sm" 
                  checked={theme === 'dark'} 
                  onChange={toggleTheme}
                  label={t('header.darkMode')}
                  color="neutral" // Ensure switch stays neutral/light in appearance if possible, or we need to override CSS
                  data-color-scheme="light" // Explicitly force light theme on the switch itself
                />
              </div>
            )}
            
            {showModeToggle && showLanguageSwitch && (
              <div className={styles.extensionDivider} />
            )}

            {showLanguageSwitch && (
              <div className={styles.languageSwitch}>
                <span className={styles.languageLabel}>{t('header.language')}</span>
                <Dropdown.TriggerContext>
                  <Dropdown.Trigger 
                    className={styles.languageLink}
                    aria-label={t('header.selectLanguage')}
                    style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
                  >
                    {language} <ChevronDownIcon aria-hidden />
                  </Dropdown.Trigger>
                  <Dropdown 
                    data-color-scheme={theme}
                    placement="bottom-end"
                  >
                    <Dropdown.List>
                      <Dropdown.Item>
                        <Dropdown.Button onClick={() => setLanguage('NO')}>
                          Norsk (NO)
                        </Dropdown.Button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Dropdown.Button onClick={() => setLanguage('EN')}>
                          English (EN)
                        </Dropdown.Button>
                      </Dropdown.Item>
                    </Dropdown.List>
                  </Dropdown>
                </Dropdown.TriggerContext>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.headerInner}>
        {/* Logo Section */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo} aria-label={t('header.homeAriaLabel')} onClick={handleLogoClick}>
            <RedCrossLogo />
          </Link>
          
          {/* Added Design System Logo - Now via Props */}
          <div className={styles.secondaryLogoWrapper}>
            {secondaryLogo && secondaryLogoSrc ? (
              <img 
                src={theme === 'dark' && secondaryLogoSrcDark ? secondaryLogoSrcDark : secondaryLogoSrc} 
                alt={secondaryLogoAlt} 
                className={styles.secondaryLogo} 
              />
            ) : secondaryLogo ? (
              <div className={styles.slotComponent}>
                <div className={styles.slotContainer}>
                  <p className={styles.slotText}>SLOT</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {showNavItems && navItems && navItems.length > 0 && (
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
              <span className={styles.buttonText}>{ctaLabel || t('header.supportUs')}</span>
            </Button>
          )}

          {/* Theme Toggle - Only show if extension is NOT shown, or if specifically requested via old prop and extension is hidden */}
          {!showHeaderExtension && showThemeToggle && (
            <div className={styles.themeToggle}>
               <Switch 
                 checked={theme === 'dark'} 
                 onChange={toggleTheme}
                 aria-label={t('header.toggleTheme')}
               />
            </div>
          )}

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
              <span className={styles.loginText}>{t('header.login')}</span>
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
                aria-label={isSearchOpen ? t('header.closeSearch') : t('header.openSearch')}
              >
                {isSearchOpen ? (
                  <XMarkIcon aria-hidden />
                ) : (
                  <MagnifyingGlassIcon aria-hidden />
                )}
                <span className={styles.buttonText}>{isSearchOpen ? t('header.close') : t('header.search')}</span>
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
              aria-label={isOpen ? t('header.closeMenu') : t('header.openMenu')}
              className={styles.menuButton}
            >
              {isOpen ? (
                <XMarkIcon aria-hidden />
              ) : (
                <MenuHamburgerIcon aria-hidden />
              )}
              <span className={styles.buttonText}>{isOpen ? t('header.close') : t('header.menu')}</span>
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
              {/* REMOVED THEME TOGGLE FROM HERE AS REQUESTED */}
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
                  aria-label={t('header.search')} 
                  placeholder={t('header.searchPlaceholder')} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              <Search.Button aria-label={t('header.search')} />
              <Search.ClearButton onClick={() => setSearchQuery('')} aria-label={t('header.clearSearch')} />
            </Search>

            {searchQuery && (
              <div className={styles.searchResults}>
                {filteredResults.length > 0 ? (
                  <div className={styles.suggestionsSection}>
                    <h3 className={styles.suggestionsTitle}>{t('header.suggestions')}</h3>
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
                        {t('header.viewAll')} ({filteredResults.length})
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className={styles.noResults}>
                    <Paragraph>{t('header.noResults')} "{searchQuery}"</Paragraph>
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
