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

/**
 * One entry in the header's search suggestions. The header owns no data
 * of its own: it used to import the documentation site's search index,
 * which shipped that site's pages to every consumer and searched THEM.
 * Consumers pass their own items; `path` is what `setPage` receives when
 * a suggestion is chosen.
 */
export interface HeaderSearchItem {
  id: string;
  title: string;
  path: string;
}

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
  /** Show the signed-in user block. Renders only when `userName` is also given — there is no placeholder user. Off by default. */
  showUser?: boolean;
  /** Show the search toggle after hydration. Suggestions come from `searchItems`; submit navigates via `setPage('search/<query>')`. Provide a normal link to a search page when search is essential without JavaScript. Off by default. */
  showSearch?: boolean;
  /** Show the login link. Give it a destination with `loginHref` and/or `onLoginClick`. Off by default. */
  showLogin?: boolean;
  /** Where the login link goes. Without it (and without `onLoginClick`) the link is inert. */
  loginHref?: string;
  /** Called when the login link is activated; with no `loginHref`, the default navigation is suppressed. */
  onLoginClick?: () => void;
  /** Items the search suggestions are matched against (substring on `title`). Empty by default. */
  searchItems?: HeaderSearchItem[];
  showCta?: boolean;
  ctaLabel?: string;
  ctaIcon?: React.ReactNode;
  onCtaClick?: () => void;
  showThemeToggle?: boolean;
  /**
   * Controlled colour scheme. When set, the Header renders the theme switch
   * from this value and never touches the document itself: the consumer owns
   * the scheme, applies `data-color-scheme` where it wants (a server-rendered
   * page can do so from a cookie, so the switch starts in the right position
   * instead of animating after mount) and hears about changes through
   * `onColorSchemeChange`. When absent, the Header is self-contained as
   * before: after hydration it reads `data-color-scheme` (falling back to the OS preference)
   * and sets it on `<html>` when toggled.
   */
  colorScheme?: 'light' | 'dark';
  /** The toggle's request to change the scheme. Required to make a controlled Header interactive; optional otherwise. */
  onColorSchemeChange?: (scheme: 'light' | 'dark') => void;
  secondaryLogo?: boolean;
  secondaryLogoSrc?: string;
  secondaryLogoSrcDark?: string;
  secondaryLogoAlt?: string;
  /** Navigation destinations must be real URLs. Rendered on the server; CSS selects the desktop row or native mobile menu. `setPage` is an optional client enhancement. */
  navItems?: { label: string; href: string }[];
  showNavItems?: boolean;
  /** Show the menu toggle on desktop. Always available on mobile, where the desktop navigation is hidden. */
  showMenuButton?: boolean;
  showHeaderExtension?: boolean;
  showModeToggle?: boolean;
  showLanguageSwitch?: boolean;
  /** Background color variant for the header extension (top bar). 'tinted' uses a soft pink/red tinted background. */
  extensionColor?: 'primary' | 'neutral' | 'tinted';
  /** Display name shown next to the avatar. Required for the user block to render at all. */
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

const EMPTY_SEARCH_ITEMS: HeaderSearchItem[] = [];

export const Header = ({
  variant = 'default',
  'data-color': dataColor = 'primary-color-red',
  activePage,
  setPage, 
  children,
  // All three OFF by default: the old defaults showed a placeholder user,
  // a dead login link and a search box over data the consumer never
  // provided, on every page that dropped in a bare <Header />.
  showUser = false,
  showSearch = false,
  showLogin = false,
  loginHref,
  onLoginClick,
  searchItems = EMPTY_SEARCH_ITEMS,
  showCta = false,
  ctaLabel,
  ctaIcon = <HeartIcon aria-hidden />,
  onCtaClick,
  showThemeToggle = false,
  colorScheme,
  onColorSchemeChange,
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuOverlayRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const menuId = React.useId();
  const anchorName = `--rk-header-${menuId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const [isEnhanced, setIsEnhanced] = useState(false);
  const isColorSchemeControlled = colorScheme !== undefined;
  // Identical initial HTML on server and client. Consumers can provide the
  // initial scheme from a cookie; browser preferences are read after hydration.
  const [uncontrolledTheme, setUncontrolledTheme] = useState<'light' | 'dark'>('light');
  const theme = colorScheme ?? uncontrolledTheme;
  const { language, setLanguage, t } = useLanguageOptional();

  useEffect(() => {
    setIsEnhanced(true);
    const current = document.documentElement.getAttribute('data-color-scheme');
    setUncontrolledTheme(current === 'light' || current === 'dark'
      ? current
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  const closeMenu = () => menuOverlayRef.current?.hidePopover?.();
  const previousPage = React.useRef(activePage);
  useEffect(() => {
    if (previousPage.current === activePage) return;
    previousPage.current = activePage;
    menuOverlayRef.current?.hidePopover?.();
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [activePage]);

  // Search is a client enhancement; menu keyboard behaviour is native.
  useEffect(() => {
    if (!isSearchOpen) return;
    searchInputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsSearchOpen(false);
      searchButtonRef.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isSearchOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    // Controlled: only report; the consumer decides what happens to the
    // document. Uncontrolled: apply it here, the consumer may not even know.
    if (!isColorSchemeControlled) {
      setUncontrolledTheme(newTheme);
      document.documentElement.setAttribute('data-color-scheme', newTheme);
    }
    onColorSchemeChange?.(newTheme);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (setPage) {
      e.preventDefault();
      setPage('home');
    }
    closeMenu();
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    closeMenu();
  };

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (setPage) {
      event.preventDefault();
      setPage(href);
    }
    closeMenu();
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return searchItems
      .filter((item) => item.title.toLowerCase().includes(lowerQuery))
      .sort((a, b) => {
        const aPrefix = a.title.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
        const bPrefix = b.title.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
        return aPrefix - bPrefix;
      });
  }, [searchQuery, searchItems]);

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
    <header
      className={styles.header}
      data-enhanced={isEnhanced}
      style={{ '--rk-header-anchor': anchorName } as React.CSSProperties}
      data-color={dataColor === 'primary' ? 'primary-color-red' : dataColor}
      data-variant={variant}
      data-header-extension={showHeaderExtension ? 'true' : 'false'}
    >
      {showHeaderExtension && (
        <div className={`${styles.headerExtension}${extensionColor === 'tinted' ? ` ${styles.headerExtensionTinted}` : ''}`} data-color-scheme="light" data-extension-color={extensionColor}>
          <div className={styles.extensionContentWrapper}>
            {showModeToggle && isEnhanced && (
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
            
            {showModeToggle && showLanguageSwitch && isEnhanced && (
              <div className={styles.extensionDivider} />
            )}

            {showLanguageSwitch && isEnhanced && (
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
        {showNavItems && navItems && navItems.length > 0 && (
          <nav className={styles.navItems} aria-label={t('header.navigation')}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles.navLink}
                onClick={(event) => handleNavigation(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Actions Section */}
        <div className={styles.actions}>
          {/* CTA Button */}
          {showCta && isEnhanced && (
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
          {showThemeToggle && isEnhanced && !(showModeToggle && showHeaderExtension) && (
            <div className={`${styles.themeToggle} ${showModeToggle ? styles.desktopOnly : ''}`}>
               <Switch 
                 checked={theme === 'dark'} 
                 onChange={toggleTheme}
                 aria-label={t('header.toggleTheme')}
               />
            </div>
          )}

          {/* User Info - Desktop shows Name + Avatar, Mobile shows Avatar */}
          {/* No placeholder identity: without a real userName there is
              nothing truthful to show, so the block stays out entirely. */}
          {showUser && userName && (() => {
            const displayName = userName;
            const displayInitials = userInitials ?? deriveInitials(userName);
            const isClickable = isEnhanced && Boolean(onUserClick);
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
          {showLogin && (loginHref || isEnhanced) && (
            <a
              href={loginHref ?? '#'}
              className={styles.loginLink}
              onClick={
                onLoginClick
                  ? (event) => {
                      // A handler without a destination is the whole
                      // navigation; with one, both run (handler first).
                      if (!loginHref) event.preventDefault();
                      onLoginClick();
                    }
                  : undefined
              }
            >
              <Paragraph data-size="md" className={styles.loginText}>{t('header.login')}</Paragraph>
              <div className={styles.underline}></div>
            </a>
          )}

          {/* Search Button */}
          {showSearch && isEnhanced && (
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
          <Button
            variant="primary"
            data-size="md"
            popovertarget={menuId}
            onClick={() => setIsSearchOpen(false)}
            aria-label={t('header.menu')}
            className={`${styles.menuButton} ${showMenuButton ? '' : styles.mobileOnly}`}
          >
            <MenuHamburgerIcon aria-hidden />
            <span className={styles.buttonText}>{t('header.menu')}</span>
          </Button>
        </div>
      </div>

      {/* Slottable Menu Area */}
      <div
        id={menuId}
        popover="auto"
        role="region"
        aria-label={t('header.menu')}
        tabIndex={-1}
        autoFocus
        className={styles.menuOverlay}
        ref={menuOverlayRef}
      >
          <Button variant="tertiary" popovertarget={menuId} className={styles.menuClose}>
            <XMarkIcon aria-hidden /> {t('header.closeMenu')}
          </Button>
          <div className={styles.menuContent}>
            <div className={styles.menuLeftColumn} />
            <div className={styles.menuRightColumn}>
              {/* Language and Mode Toggle - Above slot component on mobile */}
              {isEnhanced && (showLanguageSwitch || showModeToggle) && (
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
              <div className={styles.slotContent}>
                {children}
                {showNavItems && navItems && navItems.length > 0 && (
                  <nav className={`${styles.navList} ${styles.mobileOnly}`} aria-label={t('header.menuNavigation')}>
                    {navItems.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.href} 
                        className={styles.navLink}
                        onClick={(event) => handleNavigation(event, item.href)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                )}
              </div>
              <div className={styles.menuBrand}>
                  <RedCrossLogo className={styles.redCrossLogo} />
              </div>
            </div>
          </div>
      </div>

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
