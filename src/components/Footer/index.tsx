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

  // Fallback: inject minimal footer styles if consumer did not import the CSS bundle.
  React.useEffect(() => {
    const styleId = 'rk-footer-inline-styles';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const css = buildInlineCss(styles);
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = css;
    document.head.appendChild(tag);
  }, []);

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

// Fallback CSS injection function - ensures Footer styles work even if CSS Modules aren't loaded
function buildInlineCss(styles: Record<string, string>): string {
  const s = styles;
  return `
.${s.footer} {
  margin-top: auto;
  width: 100%;
}
.${s.redSection} {
  background-color: var(--ds-color-additional-color-ocean-background-tinted, #f2f4f5);
  width: 100%;
}
.${s.footer}[data-color="primary"] .${s.redSection} {
  background-color: var(--ds-color-primary-color-red-background-tinted);
}
.${s.footer}[data-color="additional"] .${s.redSection} {
  background-color: var(--ds-color-additional-color-ocean-background-tinted);
}
.${s.footer}[data-color="neutral"] .${s.redSection} {
  background-color: var(--ds-color-neutral-background-tinted);
}
.${s.redContainer} {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--ds-size-30, 120px) var(--ds-size-44, 175px);
  box-sizing: border-box;
}
.${s.shortcutsSection} {
  display: flex;
  gap: var(--ds-size-12, 48px);
  align-items: flex-start;
  padding: var(--ds-size-8, 32px) 0;
  flex-wrap: wrap;
}
.${s.shortcutsColumn} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-6, 24px);
  width: 257px;
  flex-shrink: 0;
}
.${s.shortcutsTitle} {
  font-size: var(--ds-font-size-7, 30px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: -0.075px;
  color: var(--ds-color-primary-color-red-text-default, #57110c);
  margin: 0;
}
.${s.shortcutsList} {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2, 8px);
}
.${s.shortcutLink} {
  font-size: var(--ds-font-size-4, 18px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.09px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
}
.${s.shortcutLink}:hover {
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  opacity: 0.8;
}
.${s.shortcutLink}:focus {
  outline: 2px solid var(--ds-color-neutral-border-default, #797979);
  outline-offset: 2px;
  border-radius: var(--ds-border-radius-sm);
}
.${s.slotComponent} {
  background-color: var(--ds-color-neutral-surface-default, #ffffff);
  border: 2px dashed var(--ds-color-neutral-border-default, #797979);
  border-radius: var(--ds-border-radius-lg, 8px);
  padding: var(--ds-size-6, 24px) var(--ds-size-3, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;
  min-width: 200px;
}
.${s.divider} {
  width: 100%;
  height: 1px;
  background-color: var(--ds-color-neutral-border-subtle, #bcbcbc);
  margin: var(--ds-size-6, 24px) 0;
}
.${s.contactSection} {
  display: flex;
  gap: var(--ds-size-6, 24px);
  align-items: flex-start;
  flex-wrap: wrap;
}
.${s.contactColumn} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1, 4px);
  flex: 1;
  min-width: 200px;
}
.${s.contactTitle} {
  font-size: var(--ds-font-size-3, 16px);
  font-weight: var(--ds-font-weight-bold);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  margin: 0;
}
.${s.contactContent} {
  font-size: var(--ds-font-size-3, 16px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  margin: 0;
}
.${s.contactContent} p {
  margin: 0;
}
.${s.legalSection} {
  display: flex;
  gap: var(--ds-size-10, 40px);
  align-items: center;
  flex-wrap: wrap;
}
.${s.copyrightText} {
  font-size: var(--ds-font-size-2, 14px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: 0.021px;
  color: var(--ds-color-primary-color-red-text-default, #57110c);
  margin: 0;
}
.${s.legalLinks} {
  display: flex;
  gap: var(--ds-size-10, 40px);
  align-items: center;
  flex-wrap: wrap;
}
.${s.legalLink} {
  font-size: var(--ds-font-size-4, 18px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.09px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
}
.${s.legalLink}:hover {
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  opacity: 0.8;
}
.${s.legalLink}:focus {
  outline: 2px solid var(--ds-color-neutral-border-default, #797979);
  outline-offset: 2px;
  border-radius: var(--ds-border-radius-sm);
}
.${s.whiteSection} {
  background-color: white;
  width: 100%;
}
.${s.whiteContainer} {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--ds-size-6, 24px) var(--ds-size-44, 175px);
  box-sizing: border-box;
}
.${s.whiteContainer} > * {
  max-width: 1090px;
  margin: 0 auto;
}
.${s.whiteContent} {
  display: flex;
  gap: var(--ds-size-20, 80px);
  align-items: center;
  flex-wrap: wrap;
}
.${s.whiteContent} > img:first-of-type + img {
  margin-left: var(--ds-size-10, 40px);
}
.${s.logo} {
  height: 43px;
  width: auto;
  display: block;
  flex-shrink: 0;
}
.${s.designSystemLogo} {
  height: 24px;
  width: auto;
  display: block;
  flex-shrink: 0;
}
.${s.slotSmall} {
  background-color: var(--ds-color-neutral-surface-default, #ffffff);
  border: 2px dashed var(--ds-color-neutral-border-default, #797979);
  border-radius: var(--ds-border-radius-lg, 8px);
  padding: var(--ds-size-6, 24px) var(--ds-size-3, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.${s.slotLarge} {
  background-color: var(--ds-color-neutral-surface-default, #ffffff);
  border: 2px dashed var(--ds-color-neutral-border-default, #797979);
  border-radius: var(--ds-border-radius-lg, 8px);
  padding: var(--ds-size-6, 24px) var(--ds-size-3, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;
  min-width: 200px;
}
@media (max-width: 768px) {
  .${s.shortcutsSection} {
    flex-direction: column;
  }
  .${s.shortcutsColumn} {
    width: 100%;
  }
  .${s.contactSection} {
    flex-direction: column;
  }
  .${s.legalSection} {
    flex-direction: column;
    align-items: flex-start;
  }
  .${s.whiteContent} {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;
}