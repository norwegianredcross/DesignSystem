import React, { useState, useEffect, useMemo } from 'react';
import type { Color } from '@digdir/designsystemet-types';
import { RedCrossLogo } from '../../assets/logos/RedCrossLogo';
import { useLanguageOptional } from '../../context/LanguageContext';
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

/**
 * @deprecated `'primary'` was a bespoke value; it now maps to
 * `'primary-color-red'` and the alias will be removed in a later minor —
 * pass the real scope name instead.
 */
export type HeaderLegacyColor = 'primary';

export interface HeaderProps {
  /** Layout density. 'compact' renders a slimmer header with a transparent (non-boxed) logo area and reduced height — useful for documentation sites, dashboards or any app that wants a lighter top bar. Defaults to 'default'. */
  variant?: 'default' | 'compact';
  /**
   * Theme scope for the header extension (top bar) — any real `data-color`
   * scope from the design tokens. The extension background uses the scope's
   * base color with matching contrast text.
   */
  'data-color'?: Color | HeaderLegacyColor;
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
  /** Background color variant for the header extension (top bar). 'tinted' uses a soft pink/red tinted background. */
  extensionColor?: 'primary' | 'neutral' | 'tinted';
  /** Display name shown next to the avatar. Falls back to current placeholder if omitted. */
  userName?: string;
  /** Initials rendered inside the avatar circle. Auto-derived from userName if omitted. */
  userInitials?: string;
  /** Avatar image URL. Takes precedence over initials when provided. */
  userAvatarSrc?: string;
  /** Optional click handler on the user block — enables future dropdown/menu integration. */
  onUserClick?: () => void;
}

function deriveInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export const Header = ({
  variant = 'default',
  'data-color': dataColor = 'primary-color-red',
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
  showLanguageSwitch = false,
  extensionColor,
  userName,
  userInitials,
  userAvatarSrc,
  onUserClick,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const searchButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuOverlayRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  // The switch must reflect the page's REAL color scheme on mount.
  // Hardcoding 'light' desynced it whenever the page was already dark:
  // the first toggle then set 'dark' on an already-dark page - a no-op
  // from the user's point of view. Lazy init reads the actual attribute,
  // falling back to the OS preference.
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      const current = document.documentElement.getAttribute('data-color-scheme');
      if (current === 'dark' || current === 'light') return current;
      if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });
  const { language, setLanguage, t } = useLanguageOptional();
  const [isMobile, setIsMobile] = useState(false);

  // showModeToggle puts a switch in the extension bar (desktop) and in the
  // mobile menu's utilities row. Anywhere else, the main row has to carry it.
  const themeToggleRendersElsewhere =
    showModeToggle && ((showHeaderExtension && !isMobile) || isMobile);

  // Fallback: inject minimal header styles if consumer did not import the CSS bundle.
  useEffect(() => {
    const styleId = 'rk-header-inline-styles';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const css = buildInlineCss(styles);
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = css;
    // prepend, NOT appendChild: this copy is a FALLBACK for consumers who never
    // import 'rk-designsystem/styles', and it must lose to the real stylesheet
    // whenever that is present. Appending put it last in <head>, so at equal
    // specificity it beat the bundled sheet for EVERY consumer — silently
    // replacing responsive @media values it does not reproduce with its own
    // desktop base values. Placing it first keeps it a safety net instead.
    document.head.prepend(tag);
  }, []);


  // Close menu when active page changes
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [activePage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    if (isOpen && isMobile) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      // Prevent scrolling
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore original overflow when menu closes
        document.body.style.overflow = originalOverflow;
      };
    }
    return undefined;
  }, [isOpen, isMobile]);

  // Track viewport to force menu button on mobile (<850px)
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return;
    const mq = window.matchMedia('(max-width: 850px)');
    const handler = (e: MediaQueryList | MediaQueryListEvent) => setIsMobile('matches' in e ? e.matches : mq.matches);
    handler(mq);
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
    } else {
      mq.addListener(handler);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', handler);
      } else {
        mq.removeListener(handler);
      }
    };
  }, []);

  // Measure header height and set as CSS variable for menu positioning
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const header = document.querySelector(`.${styles.header}`) as HTMLElement;
    if (!header) return;
    
    const updateHeaderHeight = () => {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height-mobile', `${height}px`);
    };
    
    updateHeaderHeight();
    
    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    // Use ResizeObserver to detect header size changes (e.g., when content changes)
    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });
    resizeObserver.observe(header);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  // Measure logo width to drive left-side white background width (desktop overlays)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const logoWrapper = document.querySelector(`.${styles.logoWrapper}`) as HTMLElement;
    if (!logoWrapper) return;
    const setLogoWidth = () => {
      const width = logoWrapper.offsetWidth;
      document.documentElement.style.setProperty('--rk-logo-width', `${width}px`);
    };
    setLogoWidth();
    window.addEventListener('resize', setLogoWidth);
    return () => window.removeEventListener('resize', setLogoWidth);
  }, [isMobile]);

  // Measure search overlay height when open to constrain white background height
  useEffect(() => {
    if (typeof document === 'undefined' || !isSearchOpen) {
      document.documentElement.style.setProperty('--rk-search-overlay-height', '0px');
      return;
    }
    const searchOverlay = document.querySelector(`.${styles.searchOverlay}`) as HTMLElement;
    if (!searchOverlay) return;
    
    const updateSearchHeight = () => {
      const height = searchOverlay.offsetHeight;
      document.documentElement.style.setProperty('--rk-search-overlay-height', `${height}px`);
    };
    
    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(updateSearchHeight);
    
    // Update on resize
    window.addEventListener('resize', updateSearchHeight);
    const resizeObserver = new ResizeObserver(updateSearchHeight);
    resizeObserver.observe(searchOverlay);
    
    return () => {
      window.removeEventListener('resize', updateSearchHeight);
      resizeObserver.disconnect();
    };
  }, [isSearchOpen]);

  // Escape closes an open overlay and returns focus to the button that
  // opened it. Without the focus return, keyboard focus would be left on
  // an element that just disappeared, and the browser silently drops it
  // to <body> - a keyboard user loses their place on the page.
  useEffect(() => {
    if (!isOpen && !isSearchOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
      if (isSearchOpen) {
        setIsSearchOpen(false);
        searchButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isSearchOpen]);

  // When an overlay opens, move focus into it: the search field for the
  // search overlay, the first focusable element for the menu. Screen
  // readers then announce the overlay content instead of staying on the
  // toggle button as if nothing happened.
  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    } else if (isOpen) {
      menuOverlayRef.current
        ?.querySelector<HTMLElement>('a[href], button, input, select, [tabindex]:not([tabindex="-1"])')
        ?.focus();
    }
  }, [isOpen, isSearchOpen]);

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
    
    // Force recalculation of header height when menu opens
    if (!isOpen && typeof document !== 'undefined') {
      requestAnimationFrame(() => {
        const header = document.querySelector(`.${styles.header}`) as HTMLElement;
        if (header) {
          const height = header.offsetHeight;
          document.documentElement.style.setProperty('--header-height-mobile', `${height}px`);
        }
      });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) setIsOpen(false);
    // Focus input logic could go here if we had a ref
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return searchIndex
      .filter((item) => item.title.toLowerCase().includes(lowerQuery))
      .sort((a, b) => {
        const aPrefix = a.title.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
        const bPrefix = b.title.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
        return aPrefix - bPrefix;
      });
  }, [searchQuery]);

  // Enter in the field or clicking the search button runs the full search.
  // Neither had a handler before: typing a query and pressing Enter did
  // nothing unless the user happened to click a suggestion.
  const submitSearch = () => {
    if (!setPage || !searchQuery.trim()) return;
    setPage(`search/${encodeURIComponent(searchQuery.trim())}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchResultClick = (path: string) => {
    if (setPage) {
      setPage(path);
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    // The attribute sets a real Digdir theme scope, so the extension CSS can
    // use scope-relative variables (--ds-color-base-default etc.) and any
    // scope themes it correctly. Legacy 'primary' aliases to the scope it
    // always meant.
    <header className={styles.header} data-open={isOpen ? 'true' : 'false'} data-color={dataColor === 'primary' ? 'primary-color-red' : dataColor} data-variant={variant} data-header-extension={showHeaderExtension ? 'true' : 'false'}>
      {showHeaderExtension && (
        <div className={`${styles.headerExtension}${extensionColor === 'tinted' ? ` ${styles.headerExtensionTinted}` : ''}`} data-color-scheme="light" data-extension-color={extensionColor}>
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
          <Link
            href="/"
            className={`${styles.logo} ${styles.primaryLogo}`}
            aria-label={t('header.homeAriaLabel')}
            onClick={handleLogoClick}
          >
            <RedCrossLogo className={styles.redCrossLogo} />
          </Link>
          
          {/* Added Design System Logo - Now via Props */}
          {/* Rendered only when there IS a secondary logo: the wrapper carries
              horizontal padding, so an empty one still reserved 48px and pushed
              the nav and actions right for every consumer using the default
              secondaryLogo={false}. */}
          {secondaryLogo && (
          <div className={styles.secondaryLogoWrapper}>
            {secondaryLogoSrc ? (
              <img 
                src={theme === 'dark' && secondaryLogoSrcDark ? secondaryLogoSrcDark : secondaryLogoSrc} 
                alt={secondaryLogoAlt} 
                className={styles.secondaryLogo} 
              />
            ) : (
              <div className={styles.slotComponent}>
                <div className={styles.slotContainer}>
                  <p className={styles.slotText}>SLOT</p>
                </div>
              </div>
            )}
          </div>
          )}
        </div>

        {/* Nav (desktop only) */}
        {showNavItems && navItems && navItems.length > 0 && !isMobile && (
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
    // data-color="main" was removed here and on the search/menu buttons below:
    // "main" matches no theme scope, so the buttons always inherited the
    // ancestor scope — now they do so explicitly. data-color is
    // compile-checked against the real scopes since 1.4.0.
    <Button variant="primary" data-size="md"
  className={styles.ctaButton} onClick={onCtaClick}>
      {ctaIcon}
      <span className={ctaIcon ? styles.buttonText :
  undefined}>{ctaLabel || t('header.supportUs')}</span>
    </Button>
  )}

          {/* Theme Toggle - Only show if extension is NOT shown, or if specifically requested via old prop and extension is hidden */}
          {/* Render the main-row toggle unless one actually appears elsewhere.
              Gating on showHeaderExtension alone was wrong twice over: the
              extension only contains a switch when showModeToggle is set, and
              CSS hides the extension below 850px. So asking for the extension
              and a theme toggle, without showModeToggle, produced no toggle at
              all — at any width. */}
          {showThemeToggle && !themeToggleRendersElsewhere && (
            <div className={styles.themeToggle}>
               <Switch 
                 checked={theme === 'dark'} 
                 onChange={toggleTheme}
                 aria-label={t('header.toggleTheme')}
               />
            </div>
          )}

          {/* User Info - Desktop shows Name + Avatar, Mobile shows Avatar */}
          {showUser && (() => {
            const displayName = userName ?? 'Frodo Baggins';
            const displayInitials = userInitials ?? (userName ? deriveInitials(userName) : 'FB');
            const isClickable = Boolean(onUserClick);
            return (
              <div
                className={styles.userInfo}
                onClick={onUserClick}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={isClickable ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onUserClick?.();
                  }
                } : undefined}
                style={isClickable ? { cursor: 'pointer' } : undefined}
              >
                <Paragraph data-size="md" className={styles.userName}>{displayName}</Paragraph>
                <Avatar
                  aria-label={displayName}
                  variant="circle"
                  initials={userAvatarSrc ? undefined : displayInitials}
                >
                  {userAvatarSrc ? (
                    <img
                      src={userAvatarSrc}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : undefined}
                </Avatar>
              </div>
            );
          })()}

          {/* Login Link */}
          {showLogin && (
            <a href="#" className={styles.loginLink}>
              <Paragraph data-size="md" className={styles.loginText}>{t('header.login')}</Paragraph>
              <div className={styles.underline}></div>
            </a>
          )}

          {/* Search Button */}
          {showSearch && (
            <div className={styles.searchButtonWrapper}>
               <Button
                ref={searchButtonRef}
                variant="secondary"
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
          {/* Deliberate: below 850px the nav links are hidden, so the menu
              button is forced on regardless of showMenuButton — without it a
              mobile visitor would have no navigation at all. Locked by
              TestMobileMenuFlow. */}
          {(showMenuButton || isMobile) && (
            <Button
              ref={menuButtonRef}
              variant="primary"
              data-size="md"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? t('header.closeMenu') : t('header.openMenu')}
              className={styles.menuButton}
            >
              {isOpen ? <XMarkIcon aria-hidden /> : <MenuHamburgerIcon aria-hidden />}
              <span className={styles.buttonText}>{isOpen ? t('header.close') : t('header.menu')}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Slottable Menu Area */}
      {isOpen && (
        <div className={styles.menuOverlay} ref={menuOverlayRef}>
          <div className={styles.menuContent}>
            <div className={styles.menuLeftColumn} />
            <div className={styles.menuRightColumn}>
              {/* Language and Mode Toggle - Above slot component on mobile */}
              {isMobile && (showLanguageSwitch || showModeToggle) && (
                <div className={styles.menuUtilities}>
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
                          placement="bottom-start"
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
                  {showModeToggle && (
                    <div className={styles.extensionContent}>
                      <Switch 
                        data-size="sm" 
                        checked={theme === 'dark'} 
                        onChange={toggleTheme}
                        label={t('header.darkMode')}
                        color="neutral"
                        data-color-scheme="light"
                      />
                    </div>
                  )}
                </div>
              )}
              {/* REMOVED THEME TOGGLE FROM HERE AS REQUESTED */}
              <div className={styles.slotContent}>
                {children}
                {isMobile && showNavItems && navItems && navItems.length > 0 && (
                  <nav className={styles.navList}>
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
              </div>
              {isMobile && (
                <div className={styles.menuBrand}>
                  <RedCrossLogo className={styles.redCrossLogo} />
                </div>
              )}
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
                  ref={searchInputRef}
                  aria-label={t('header.search')} 
                  placeholder={t('header.searchPlaceholder')} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') submitSearch();
                  }}
                />
              <Search.Button aria-label={t('header.search')} onClick={submitSearch} />
              <Search.ClearButton onClick={() => setSearchQuery('')} aria-label={t('header.clearSearch')} />
            </Search>

            {/* Live announcement for screen readers: the suggestion list
                appears and changes purely visually below the input, so a
                screen-reader user typing hears nothing. role="status" is a
                polite live region - the browser announces its text content
                whenever it changes, without stealing focus. ds-sr-only
                keeps it visually hidden but present for AT. */}
            {searchQuery && (
              <div role="status" className="ds-sr-only">
                {filteredResults.length > 0
                  ? t('header.suggestionCount').replace('{count}', String(Math.min(filteredResults.length, 5)))
                  : `${t('header.noResults')} ${searchQuery}`}
              </div>
            )}
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
                            setPage(`search/${encodeURIComponent(searchQuery)}`);
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

// Build a minimal CSS fallback using the hashed class names from the CSS module.
// This is not a full replacement for the emitted CSS bundle, but it ensures sane
// layout and spacing if the consumer forgets to import the library CSS.
function buildInlineCss(styles: Record<string, string>): string {
  const s = styles;
  return `
.${s.header} {
  --rk-header-extension-height: 44px;
  width: 100%;
  background-color: var(--ds-color-neutral-background-default);
  border-bottom: none;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans 3', sans-serif;
}
.${s.header}::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: max(241px, calc((100vw - 1364px) / 2 + 242px));
  background-color: white;
  z-index: 0;
  pointer-events: none;
}
.${s.header}[data-header-extension="true"]::before { top: var(--rk-header-extension-height); }
.${s.header}[data-variant="compact"]::before { display: none; }
.${s.header}[data-variant="compact"] .${s.headerInner} { min-height: var(--ds-size-18, 72px); }
.${s.header}[data-variant="compact"] .${s.logoWrapper} { background-color: transparent; margin-left: 0; padding-left: 0; height: auto; }
.${s.header}[data-variant="compact"] .${s.logo} { width: auto; height: auto; }
.${s.header}[data-variant="compact"] .${s.redCrossLogo} { width: auto; height: 44px; }
.${s.headerExtension} {
  background-color: var(--ds-color-primary-color-red-base-default, #D52B1E);
  width: 100%;
  height: var(--rk-header-extension-height);
  padding: 0 var(--ds-size-6);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: white;
}
.${s.header}[data-color] .${s.headerExtension} {
  background-color: var(--ds-color-base-default);
  color: var(--ds-color-base-contrast-default);
}
.${s.headerExtensionTinted},
.${s.headerExtension}[data-extension-color="tinted"] {
  background: var(--ds-color-primary-color-red-surface-tinted, #FAE4E2) !important;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
}
.${s.header} .${s.headerExtensionTinted} .${s.languageLabel},
.${s.header} .${s.headerExtension}[data-extension-color="tinted"] .${s.languageLabel} {
  color: var(--ds-color-neutral-text-default, #2B2B2B) !important;
}
.${s.header} .${s.headerExtensionTinted} .${s.languageLink},
.${s.header} .${s.headerExtension}[data-extension-color="tinted"] .${s.languageLink} {
  color: var(--ds-color-neutral-text-default, #2B2B2B) !important;
}
.${s.header} .${s.headerExtensionTinted} .${s.extensionContent} .ds-label,
.${s.header} .${s.headerExtension}[data-extension-color="tinted"] .${s.extensionContent} .ds-label {
  color: var(--ds-color-neutral-text-default, #2B2B2B) !important;
}
.${s.header} .${s.headerExtensionTinted} .${s.extensionDivider},
.${s.header} .${s.headerExtension}[data-extension-color="tinted"] .${s.extensionDivider} {
  background-color: var(--ds-color-neutral-border-subtle, #bcbcbc);
}
.${s.extensionContentWrapper} {
  width: 100%;
  max-width: 1364px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--ds-size-4);
}
.${s.extensionContent} .ds-label { font-size: var(--ds-font-size-3) !important; }
.${s.extensionDivider} { width: 1px; height: 18px; background-color: rgba(247,233,232,1); }
.${s.languageSwitch} { display: flex; align-items: center; gap: var(--ds-size-2); }
.${s.languageLabel} { font-size: var(--ds-font-size-3); color: #ECECEC; }
.${s.languageLink} { color: white !important; text-decoration: none; display: flex; align-items: center; gap: 4px; }
.${s.header}[data-color] .${s.languageLabel} { color: var(--ds-color-base-contrast-subtle); }
.${s.header}[data-color] .${s.languageLink} { color: var(--ds-color-base-contrast-default) !important; }
.${s.languageSwitch} [popover] { margin-top: 0 !important; background-color: var(--ds-color-neutral-background-default) !important; position: fixed !important; overflow: visible; z-index: 20000 !important; }
.${s.headerInner} {
  display: flex; align-items: center; justify-content: space-between;
  min-height: 119px; width: 100%; max-width: 1364px;
  margin: 0 auto; padding: 0 var(--ds-size-6); box-sizing: border-box; gap: var(--ds-size-6);
  /* Load-bearing for the slab above, not decoration. The slab is an absolutely
     positioned ::before with z-index: 0, and a positioned box paints AFTER
     ordinary in-flow content — so without lifting this row into its own stack
     level the opaque white slab covers the logo. The bundled stylesheet pairs
     the two rules; a consumer relying only on this fallback needs them both. */
  position: relative; z-index: 10;
}
.${s.logoWrapper} { display: flex; align-items: center; height: 119px; flex-shrink: 0; background-color: white; }
.${s.logo} { display: flex; align-items: center; justify-content: center; width: 217px; height: 100%; text-decoration: none; color: inherit; flex-shrink: 0; }
.${s.redCrossLogo} { width: 169px; height: auto; display: block; color: #1e1e1e; }
.${s.header}[data-variant="compact"] .${s.redCrossLogo} { color: var(--ds-color-neutral-text-default); }
.${s.secondaryLogoWrapper} { display: flex; align-items: center; justify-content: center; height: 100%; padding: 0 var(--ds-size-6); background-color: var(--ds-color-neutral-background-default); }
.${s.secondaryLogo} { height: 24px; width: auto; display: block; }
.${s.navItems} { display: flex; gap: 40px; align-items: center; margin-left: 24px; flex-grow: 1; justify-content: center; }
.${s.navLink} { color: var(--ds-color-primary-color-red-text-default); font-family: inherit; font-size: var(--ds-font-size-3); text-decoration: none; font-weight: var(--ds-font-weight-regular); letter-spacing: 0.09px; }
.${s.navLink}:hover { text-decoration: underline; }
.${s.actions} { display: flex; align-items: center; gap: var(--ds-size-6); flex-shrink: 0; margin-left: auto; }
.${s.ctaButton} { display: flex; align-items: center; }
.${s.themeToggle} { display: flex; align-items: center; }
.${s.userInfo} { display: flex; align-items: center; gap: var(--ds-size-3); }
.${s.userName} { display: block; font-family: inherit; font-size: var(--ds-font-size-3); color: var(--ds-color-neutral-text-default); }
.${s.loginLink} { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: var(--ds-color-primary-color-red-text-subtle); gap: 2px; }
.${s.loginText} { font-family: inherit; font-size: var(--ds-font-size-3); font-weight: var(--ds-font-weight-regular); line-height: 1.5; }
.${s.underline} { width: 100%; height: 1px; background-color: var(--ds-color-primary-color-red-border-strong); }
.${s.searchButtonWrapper} { display: flex; }
.${s.buttonText} { display: inline-block; margin-left: var(--ds-size-2); }
.${s.menuButton} { display: flex; align-items: center; }
.${s.menuOverlay}, .${s.searchOverlay} {
  position: absolute; top: 100%; left: 0; width: 100%;
  background-color: var(--ds-color-neutral-background-default);
  z-index: 999;
}
.${s.menuOverlay} { border-bottom: none; box-shadow: none; }
.${s.searchOverlay} {
  padding: var(--ds-size-10) 0;
  border-bottom: 1px solid var(--ds-color-neutral-border-subtle);
  box-shadow: var(--ds-shadow-lg);
}
.${s.searchOverlay}::before { display: none; }
.${s.searchContent} {
  max-width: 1364px; margin: 0 auto;
  padding: var(--ds-size-6) var(--ds-size-6) var(--ds-size-6) calc(217px + var(--ds-size-6) + var(--ds-size-4));
  display: flex; flex-direction: column; align-items: stretch; box-sizing: border-box;
}
.${s.menuContent} { max-width: 1364px; margin: 0 auto; display: flex; flex-direction: row; align-items: stretch; box-sizing: border-box; }
.${s.menuLeftColumn} { width: calc(217px + var(--ds-size-6)); flex-shrink: 0; display: flex; }
.${s.menuRightColumn} { flex: 1; display: flex; flex-direction: column; padding: 48px 24px 80px 24px; gap: 24px; }
.${s.slotContent} { width: 100%; padding: var(--ds-size-10) 0; text-align: left; color: var(--ds-color-neutral-text-subtle); font-size: var(--ds-font-size-3); border-radius: var(--ds-border-radius-md); display: flex; flex-direction: column; gap: var(--ds-size-4); align-items: flex-start; }
.${s.navList} { display: flex; flex-direction: column; gap: var(--ds-size-3); align-items: flex-start; }
.${s.menuBrand} { display: none; }
.${s.menuUtilities} { display: flex; justify-content: space-between; align-items: center; width: 100%; }
.${s.suggestionsSection} { display: flex; flex-direction: column; gap: var(--ds-size-4); }
.${s.suggestionsTitle} { font-family: inherit; font-size: var(--ds-font-size-3); color: var(--ds-color-neutral-text-subtle); font-weight: var(--ds-font-weight-regular); margin: 0; letter-spacing: 0.09px; }
.${s.searchResults} { margin-top: var(--ds-size-4); max-height: 400px; overflow-y: auto; }
.${s.resultList} { list-style: none; padding: 0; margin: 0; }
.${s.resultItem} { border-bottom: none; }
.${s.resultLink} {
  display: flex; flex-direction: row; align-items: center; width: 100%;
  padding: var(--ds-size-2) 0; background: none; border: none;
  text-align: left; cursor: pointer; gap: var(--ds-size-4); text-decoration: none;
}
.${s.suggestionIcon} { font-size: 20px; color: var(--ds-color-neutral-text-subtle); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.${s.suggestionText} { font-family: inherit; font-size: var(--ds-font-size-3); color: var(--ds-color-neutral-text-default); line-height: 1.5; }
.${s.highlightedText} { color: var(--ds-color-primary-color-red-text-default); font-weight: var(--ds-font-weight-medium); }
.${s.remainingText} { color: var(--ds-color-neutral-border-subtle); }
.${s.viewAllLink} { display: block; padding: var(--ds-size-3); text-align: left; font-size: var(--ds-font-size-2); font-weight: var(--ds-font-weight-medium); color: var(--ds-color-neutral-text-default); text-decoration: none; }
.${s.noResults} { padding: var(--ds-size-4); text-align: center; color: var(--ds-color-neutral-text-subtle); }
@media (max-width: 850px) {
  .${s.header} { z-index: 10000; position: relative; }
  .${s.header}::before { display: none; }
  .${s.headerExtension} { display: none; }
  .${s.headerInner} { padding: var(--ds-size-5) var(--ds-size-6); min-height: auto; }
  .${s.navItems} { display: none; }
  .${s.logoWrapper} { gap: var(--ds-size-2); background-color: transparent; height: auto; }
  .${s.logo} { height: 40px; }
  /* Mobile: always hide primary logo in header */
  .${s.primaryLogo} { display: none; }
  .${s.secondaryLogo} { height: 28px; }
  .${s.secondaryLogoWrapper} { padding: 0; }
  .${s.actions} { gap: var(--ds-size-4); }
  .${s.userName} { display: none; }
  .${s.menuButton} .${s.buttonText} { display: none; }
  .${s.menuOverlay} { position: fixed; top: var(--header-height-mobile, 70px); left: 0; right: 0; bottom: 0; width: 100vw; height: calc(100vh - var(--header-height-mobile, 70px)); z-index: 9999; border-radius: 0; border: none; overflow-y: auto; }
  .${s.searchOverlay} { width: 100%; right: 0; left: 0; border-radius: 0; border: none; }
  .${s.searchContent} { padding: var(--ds-size-6); }
  .${s.menuContent} { flex-direction: column; padding: 0; min-height: 100%; }
  .${s.menuRightColumn} { padding: var(--ds-size-4) var(--ds-size-6) var(--ds-size-6) var(--ds-size-6); gap: var(--ds-size-4); flex: 1; display: flex; flex-direction: column; min-height: 0; }
  .${s.slotContent} { padding: 0; }
  .${s.menuBrand} { display: flex; justify-content: flex-start; margin-top: auto; padding: var(--ds-size-6); margin-left: calc(-1 * var(--ds-size-6)); margin-right: calc(-1 * var(--ds-size-6)); margin-bottom: calc(-1 * var(--ds-size-6)); background-color: white; }
  .${s.menuUtilities} .${s.languageSwitch} [popover] { background-color: var(--ds-color-neutral-background-default) !important; margin-top: 0 !important; position: fixed !important; overflow: visible; z-index: 20000 !important; }
  @media (prefers-color-scheme: light) {
    .${s.menuUtilities} .${s.languageLabel} { color: var(--ds-color-neutral-text-default, #2B2B2B); }
    .${s.menuUtilities} .${s.languageLink} { color: var(--ds-color-neutral-text-default, #2B2B2B) !important; }
  }
  [data-color-scheme="light"] .${s.menuUtilities} .${s.languageLabel} { color: var(--ds-color-neutral-text-default, #2B2B2B); }
  [data-color-scheme="light"] .${s.menuUtilities} .${s.languageLink} { color: var(--ds-color-neutral-text-default, #2B2B2B) !important; }
  .${s.searchOverlay}::before { display: none; }
}
`;
}
