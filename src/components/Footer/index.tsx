import React from 'react';
import styles from './styles.module.css';
import { Link } from '../Link';
import { useLanguageOptional } from '../../context/LanguageContext';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  /** Background color for the top section: 'primary' uses primary-color-red-background-tinted, 'additional' uses additional-color-ocean-background-tinted, 'neutral' uses neutral-background-tinted */
  'data-color'?: 'primary' | 'additional' | 'neutral';
  /** Slot content for the red section (after Snarveier columns) */
  redSectionSlot?: React.ReactNode;
  /** Slot content for the small slot in white section (after logos) */
  whiteSectionSlotSmall?: React.ReactNode;
  /** Slot content for the large slot in white section (rightmost) */
  whiteSectionSlotLarge?: React.ReactNode;
  /** Show design system logo in white section */
  showDesignSystemLogo?: boolean;
  /** Design system logo source (light mode) */
  designSystemLogoSrc?: string;
  /** Design system logo source (dark mode) */
  designSystemLogoSrcDark?: string;
  /** Design system logo alt text */
  designSystemLogoAlt?: string;
  /** Shortcut links for the left column */
  shortcutsLinksLeft?: FooterLink[];
  /** Shortcut links for the right column */
  shortcutsLinksRight?: FooterLink[];
}

export const Footer = ({ 
  'data-color': dataColor = 'additional',
  redSectionSlot,
  whiteSectionSlotSmall,
  whiteSectionSlotLarge,
  showDesignSystemLogo = true,
  designSystemLogoSrc = `${import.meta.env.BASE_URL}designsystemlogofinallight.svg`,
  designSystemLogoSrcDark = `${import.meta.env.BASE_URL}designsystemlogofinaldark.svg`,
  designSystemLogoAlt = "Designsystem Logo",
  shortcutsLinksLeft,
  shortcutsLinksRight
}: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguageOptional();

  // Detect color scheme for logo selection
  const [colorScheme, setColorScheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    
    // Check initial color scheme
    const rootElement = document.documentElement;
    const scheme = rootElement.getAttribute('data-color-scheme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setColorScheme(scheme as 'light' | 'dark');

    // Watch for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const scheme = rootElement.getAttribute('data-color-scheme') || 
                     (mediaQuery.matches ? 'dark' : 'light');
      setColorScheme(scheme as 'light' | 'dark');
    };

    // Watch for data-color-scheme attribute changes
    const observer = new MutationObserver(handleChange);
    observer.observe(rootElement, { attributes: true, attributeFilter: ['data-color-scheme'] });

    // Watch for system preference changes
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Select logo based on color scheme
  const logoSrc = colorScheme === 'dark' && designSystemLogoSrcDark 
    ? designSystemLogoSrcDark 
    : designSystemLogoSrc;

  // Default shortcut links if not provided
  const defaultShortcutLinks: FooterLink[] = [
    { label: t('footer.shortcutsLinks.services'), href: '#' },
    { label: t('footer.shortcutsLinks.volunteer'), href: '#' },
    { label: t('footer.shortcutsLinks.ourWork'), href: '#' },
    { label: t('footer.shortcutsLinks.about'), href: '#' },
    { label: t('footer.shortcutsLinks.support'), href: '#' },
    { label: t('footer.shortcutsLinks.contact'), href: '#' }
  ];

  const leftLinks = shortcutsLinksLeft || defaultShortcutLinks;
  const rightLinks = shortcutsLinksRight || defaultShortcutLinks;

  return (
    <footer className={styles.footer} data-color={dataColor}>
      {/* Red Background Section */}
      <div className={styles.redSection}>
        <div className={styles.redContainer}>
          {/* Snarveier Links Section */}
          <div className={styles.shortcutsSection}>
            {/* Left Column */}
            <nav className={styles.shortcutsColumn} aria-label={t('footer.shortcuts')}>
              <h3 className={styles.shortcutsTitle}>{t('footer.shortcuts')}</h3>
              <ul className={styles.shortcutsList}>
                {leftLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.shortcutLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Column */}
            <nav className={styles.shortcutsColumn} aria-label={t('footer.shortcuts')}>
              <h3 className={styles.shortcutsTitle}>{t('footer.shortcuts')}</h3>
              <ul className={styles.shortcutsList}>
                {rightLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.shortcutLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Slot Component */}
            {redSectionSlot && (
              <div className={styles.slotComponent}>
                {redSectionSlot}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Contact Information Section */}
          <div className={styles.contactSection}>
            <div className={styles.contactColumn}>
              <h4 className={styles.contactTitle}>{t('footer.contact.visitingAddress')}</h4>
              <div className={styles.contactContent}>
                <p>Hausmannsgate 7 (Korsegården)</p>
                <p>0186 Oslo</p>
              </div>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.contactTitle}>{t('footer.contact.organizationNumber')}</h4>
              <p className={styles.contactContent}>XXX XXX XXX</p>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.contactTitle}>{t('footer.contact.email')}</h4>
              <p className={styles.contactContent}>post@redcross.no</p>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Copyright and Legal Links */}
          <div className={styles.legalSection}>
            <p className={styles.copyrightText}>
              © {currentYear} {t('footer.copyright')}
            </p>
            <div className={styles.legalLinks}>
              <Link href="#" className={styles.legalLink}>{t('footer.legal.privacy')}</Link>
              <Link href="#" className={styles.legalLink}>{t('footer.legal.press')}</Link>
              <Link href="#" className={styles.legalLink}>{t('footer.legal.procurement')}</Link>
              <Link href="#" className={styles.legalLink}>{t('footer.legal.whistleblowing')}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Section */}
      <div className={styles.whiteSection}>
        <div className={styles.whiteContainer}>
          <div className={styles.whiteContent}>
            <img 
              src={`${import.meta.env.BASE_URL}logo-red-cross.svg`}
              alt="Røde Kors Logo" 
              className={styles.logo} 
              loading="lazy"
            />
            {showDesignSystemLogo && (
              <img 
                src={logoSrc}
                alt={designSystemLogoAlt} 
                className={styles.designSystemLogo} 
                loading="lazy"
              />
            )}
            {whiteSectionSlotSmall && (
              <div className={styles.slotSmall}>
                {whiteSectionSlotSmall}
              </div>
            )}
            {whiteSectionSlotLarge && (
              <div className={styles.slotLarge}>
                {whiteSectionSlotLarge}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};