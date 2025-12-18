import React from 'react';
import styles from './styles.module.css';
import { Link } from '../Link';
import { useLanguage } from '../../context/LanguageContext';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
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
  const { t } = useLanguage();

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
    <footer className={styles.footer}>
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
                src={designSystemLogoSrc}
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