import React from 'react';
import type { Color } from '@digdir/designsystemet-types';
import styles from './styles.module.css';
import { Link } from '../Link';
import { Button } from '../Button';
import { Input } from '../Input';
import { GraphicElement } from '../GraphicElement';
import { RedCrossLogo } from '../../assets/logos/RedCrossLogo';
import { useLanguageOptional } from '../../context/LanguageContext';

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Icon element from @navikt/aksel-icons or custom SVG */
  icon: React.ReactNode;
  /** Visible text (e.g., "Facebook") */
  label: string;
  /** URL for the social link */
  href: string;
}

export interface ContactPerson {
  /** Contact person's name */
  name: string;
  /** Role or title */
  role: string;
  /** Email address */
  email: string;
  /** Phone number (optional) */
  phone?: string;
  /** Address (optional) */
  address?: string;
}

export interface LegalLink {
  /** Link text */
  label: string;
  /** URL for the link */
  href: string;
}

/**
 * @deprecated `'primary'` and `'additional'` were bespoke values; they now map
 * to `'primary-color-red'` and `'additional-color-ocean'` and the aliases will
 * be removed in a later minor — pass the real scope name instead.
 */
export type FooterLegacyColor = 'primary' | 'additional';

export interface FooterProps {
  /**
   * Theme scope for the main section — any real `data-color` scope from the
   * design tokens. The background uses the scope's tinted background token.
   */
  'data-color'?: Color | FooterLegacyColor;
  /** Footer layout variant. 'columns' renders N navigation columns (from `columns`) + an organisation meta row + a legal/copyright row. */
  variant?: 'default' | 'contact' | 'columns';
  /** Force a colour scheme on the footer (applies `data-color-scheme`). Lets any project render a light or dark footer from the same tokens. */
  colorScheme?: 'light' | 'dark';
  /** Navigation columns for the `columns` variant. */
  columns?: { title: string; links: FooterLink[] }[];
  /** Show decorative GraphicElement shapes in the corners */
  showGraphicElements?: boolean;
  /** Newsletter section description text */
  newsletterDescription?: string;
  /** Newsletter input placeholder text */
  newsletterPlaceholder?: string;
  /** Newsletter button text */
  newsletterButtonText?: string;
  /** Newsletter consent text */
  newsletterConsentText?: React.ReactNode;
  /** Callback when newsletter form is submitted */
  onNewsletterSubmit?: (email: string) => void;
  /** Hide the newsletter section */
  hideNewsletter?: boolean;
  /** Shortcut links for the "Snarveier" column */
  shortcutsLinks?: FooterLink[];
  /** Links for the "Lenker" column */
  linksLinks?: FooterLink[];
  /** Title for shortcuts column */
  shortcutsTitle?: string;
  /** Title for links column */
  linksTitle?: string;
  /** Visiting address lines */
  visitingAddress?: string[];
  /** Organization number */
  organizationNumber?: string;
  /** Email address */
  email?: string;
  /** Show primary (Red Cross) logo in white section */
  showPrimaryLogo?: boolean;
  /** Primary logo source (if custom logo is needed instead of default Red Cross SVG) */
  primaryLogoSrc?: string;
  /** Primary logo alt text */
  primaryLogoAlt?: string;
  /** Slot content for the white section */
  whiteSectionSlot?: React.ReactNode;
  /** Social media links with icons (contact variant) */
  socialLinks?: SocialLink[];
  /** Contact person cards (contact variant) */
  contactPersons?: ContactPerson[];
  /** Bottom legal links row (contact variant) */
  legalLinks?: LegalLink[];
  /** Title for social links section (contact variant) */
  socialLinksTitle?: string;
  /** Title for contact persons section (contact variant) */
  contactPersonsTitle?: string;
}

export const Footer = ({
  'data-color': dataColor = 'neutral',
  variant = 'default',
  colorScheme,
  columns,
  showGraphicElements = false,
  newsletterDescription = 'Tekst om rødekors som kan være rundt 2 linjebrudd i lengde.',
  newsletterPlaceholder = 'Input tekst',
  newsletterButtonText = 'Meld deg på',
  newsletterConsentText,
  onNewsletterSubmit,
  hideNewsletter = false,
  shortcutsLinks,
  linksLinks,
  shortcutsTitle,
  linksTitle,
  visitingAddress = ['Hausmannsgate 7 (Korsegården)', '0186 Oslo'],
  organizationNumber = 'XXX XXX XXX',
  email = 'post@redcross.no',
  showPrimaryLogo = true,
  primaryLogoSrc,
  primaryLogoAlt = 'Røde Kors Logo',
  whiteSectionSlot,
  socialLinks = [],
  contactPersons = [],
  legalLinks = [],
  socialLinksTitle,
  contactPersonsTitle,
}: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguageOptional();
  // Legacy aliases map to the scopes their CSS always rendered as (the old
  // rules used the red and ocean tinted backgrounds). With a real scope on
  // the DOM, one scope-generic CSS rule covers every theme.
  const colorScope =
    dataColor === 'primary'
      ? 'primary-color-red'
      : dataColor === 'additional'
        ? 'additional-color-ocean'
        : dataColor;
  const [emailValue, setEmailValue] = React.useState('');

  // Helper to get translation with proper fallback (avoids showing raw keys like "footer.contact.phone")
  const tWithFallback = (key: string, fallback: string): string => {
    const result = t(key);
    return result === key ? fallback : result;
  };

  // Fallback: inject minimal footer styles if consumer did not import the CSS bundle.
  React.useEffect(() => {
    const styleId = 'rk-footer-inline-styles';
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewsletterSubmit?.(emailValue);
  };


  // Default shortcut links
  const defaultShortcutsLinks: FooterLink[] = [
    { label: tWithFallback('footer.shortcutsLinks.services', 'Tilbudene'), href: '#' },
    { label: tWithFallback('footer.shortcutsLinks.volunteer', 'Bli frivillig'), href: '#' },
    { label: tWithFallback('footer.shortcutsLinks.ourWork', 'Vårt arbeid'), href: '#' },
    { label: tWithFallback('footer.shortcutsLinks.about', 'Om Røde Kors'), href: '#' },
    { label: tWithFallback('footer.shortcutsLinks.support', 'Støtt arbeidet'), href: '#' },
    { label: tWithFallback('footer.shortcutsLinks.contact', 'Kontakt oss'), href: '#' },
  ];

  // Default links for "Lenker" column
  const defaultLinksLinks: FooterLink[] = [
    { label: tWithFallback('footer.legal.privacy', 'Personvern'), href: '#' },
    { label: tWithFallback('footer.legal.press', 'For presse'), href: '#' },
    { label: tWithFallback('footer.legal.procurement', 'Regler for innkjøp'), href: '#' },
    { label: tWithFallback('footer.legal.whistleblowing', 'Varsling/Misconduct'), href: '#' },
  ];

  const defaultConsentText = (
    <>
      Ved å trykke "{newsletterButtonText}" samtykker du til å motta nyhetsbrev.
      <br />
      Du kan når som helst <Link href="#">melde deg av</Link> nyhetsbrevet uten kostnad.
    </>
  );

  const shortcuts = shortcutsLinks || defaultShortcutsLinks;
  const links = linksLinks || defaultLinksLinks;

  // Internal component: Social Links Section
  const SocialLinksSection = () => (
    <div className={styles.socialLinksSection}>
      {socialLinksTitle && (
        <h3 className={styles.socialLinksTitle}>
          {socialLinksTitle}
        </h3>
      )}
      <ul className={styles.socialLinksList}>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={styles.socialLink}>
              <span className={styles.socialLinkIcon}>{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // Internal component: Contact Person Card
  const ContactPersonCard = ({ person }: { person: ContactPerson }) => (
    <div className={styles.contactPersonCard}>
      <p className={styles.contactPersonName}>{person.name}</p>
      <p className={styles.contactPersonRole}>{person.role}</p>
      <div className={styles.contactPersonDetails}>
        <p className={styles.contactPersonEmail}>
          <span className={styles.contactPersonLabel}>{tWithFallback('footer.contact.email', 'E-post')}:</span>{' '}
          <Link href={`mailto:${person.email}`}>{person.email}</Link>
        </p>
        {person.phone && (
          <p className={styles.contactPersonPhone}>
            <span className={styles.contactPersonLabel}>{tWithFallback('footer.contact.phone', 'Telefon')}:</span>{' '}
            {person.phone}
          </p>
        )}
        {person.address && (
          <p className={styles.contactPersonAddress}>{person.address}</p>
        )}
      </div>
    </div>
  );

  // Internal component: Contact Persons Section
  const ContactPersonsSection = () => (
    <div className={styles.contactPersonsSection}>
      {contactPersonsTitle && (
        <h3 className={styles.contactPersonsTitle}>
          {contactPersonsTitle}
        </h3>
      )}
      <div className={styles.contactPersonsGrid}>
        {contactPersons.map((person, index) => (
          <ContactPersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );

  // Internal component: Legal Links Row
  const LegalLinksRow = () => (
    <ul className={styles.legalLinksRow}>
      {legalLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className={styles.legalLink}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  // Render columns variant (N nav columns + meta row + legal/copyright row)
  if (variant === 'columns') {
    const defaultColumns: { title: string; links: FooterLink[] }[] = [
      {
        title: tWithFallback('footer.contact.title', 'Kontakt'),
        links: defaultShortcutsLinks,
      },
      {
        title: tWithFallback('footer.bidra', 'Bidra'),
        links: defaultShortcutsLinks,
      },
      {
        title: tWithFallback('footer.shortcuts', 'Snarveier'),
        links: defaultShortcutsLinks,
      },
    ];
    const dpColumns = columns && columns.length > 0 ? columns : defaultColumns;
    const dpLegal = legalLinks.length > 0 ? legalLinks : defaultLinksLinks;

    return (
      <footer className={styles.footer} data-color={colorScope} data-color-scheme={colorScheme}>
        <div className={styles.dpMain}>
          <div className={styles.dpContainer}>
            {/* Navigation columns */}
            <div className={styles.dpColumns}>
              {dpColumns.map((col, i) => (
                <nav key={i} className={styles.dpColumn} aria-label={col.title}>
                  <h3 className={styles.dpColTitle}>{col.title}</h3>
                  <ul className={styles.dpList}>
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <Link href={link.href} className={styles.dpLink}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <hr className={styles.dpDivider} />

            {/* Meta row: address / org number / email */}
            <div className={styles.dpMeta}>
              <div className={styles.dpMetaCol}>
                <h4 className={styles.dpMetaTitle}>
                  {tWithFallback('footer.contact.visitingAddress', 'Besøksadresse')}
                </h4>
                {visitingAddress.map((line, index) => (
                  <p key={index} className={styles.dpMetaText}>{line}</p>
                ))}
              </div>
              <div className={styles.dpMetaCol}>
                <h4 className={styles.dpMetaTitle}>
                  {tWithFallback('footer.contact.organizationNumber', 'Organisasjonsnummer')}
                </h4>
                <p className={styles.dpMetaText}>{organizationNumber}</p>
              </div>
              <div className={styles.dpMetaCol}>
                <h4 className={styles.dpMetaTitle}>
                  {tWithFallback('footer.contact.email', 'E-post')}
                </h4>
                <p className={styles.dpMetaText}>{email}</p>
              </div>
            </div>

            <hr className={styles.dpDivider} />

            {/* Bottom row: legal links + copyright */}
            <div className={styles.dpBottom}>
              <ul className={styles.dpLegal}>
                {dpLegal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.dpLegalLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className={styles.dpCopyright}>
                © {currentYear} {tWithFallback('footer.copyright', 'Røde Kors')}
              </p>
            </div>

          </div>
        </div>

        {/* Full-width white band with the brand logo — shared across all variants. */}
        {showPrimaryLogo && (
          <div className={styles.whiteSection} data-color-scheme="light">
            <div className={styles.whiteContainer}>
              <div className={styles.whiteContent}>
                {primaryLogoSrc ? (
                  <img
                    src={primaryLogoSrc}
                    alt={primaryLogoAlt}
                    className={styles.logo}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.logo}>
                    <RedCrossLogo className={styles.redCrossLogo} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </footer>
    );
  }

  // Render contact variant
  if (variant === 'contact') {
    return (
      <footer className={styles.footer} data-color={colorScope}>
        {/* Main Section */}
        <div className={styles.mainSection}>
          <div className={styles.mainContainer}>
            {/* Top-right GraphicElement */}
            {showGraphicElements && (
              <div className={styles.graphicElementTopRight}>
                <GraphicElement shape="angle" position="top-right" size="md" aria-hidden />
              </div>
            )}

            {/* Content Row: Social Links + Contact Persons */}
            <div className={styles.contentRowContact}>
              {socialLinks.length > 0 && <SocialLinksSection />}
              {contactPersons.length > 0 && <ContactPersonsSection />}
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Contact Information Section */}
            <div className={styles.contactSection}>
              <div className={styles.contactColumn}>
                <h4 className={styles.contactTitle}>{tWithFallback('footer.contact.visitingAddress', 'Besøks adresse')}</h4>
                <div className={styles.contactContent}>
                  {visitingAddress.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>

              <div className={styles.contactColumn}>
                <h4 className={styles.contactTitle}>{tWithFallback('footer.contact.organizationNumber', 'Organisasjonsnummer')}</h4>
                <p className={styles.contactContent}>{organizationNumber}</p>
              </div>

              <div className={styles.contactColumn}>
                <h4 className={styles.contactTitle}>{tWithFallback('footer.contact.email', 'E-post')}</h4>
                <p className={styles.contactContent}>{email}</p>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Bottom Row: Legal Links + Copyright */}
            <div className={styles.bottomRowContact}>
              {legalLinks.length > 0 && <LegalLinksRow />}
              <p className={styles.copyrightText}>
                © {currentYear} {tWithFallback('footer.copyright', 'Rødekors')}
              </p>
            </div>

            {/* Bottom-left GraphicElement */}
            {showGraphicElements && (
              <div className={styles.graphicElementBottomLeft}>
                <GraphicElement shape="angle" position="bottom-left" size="md" aria-hidden />
              </div>
            )}
          </div>
        </div>

        {/* White Background Section */}
        <div className={styles.whiteSection}>
          <div className={styles.whiteContainer}>
            <div className={styles.whiteContent}>
              {showPrimaryLogo && (
                primaryLogoSrc ? (
                  <img
                    src={primaryLogoSrc}
                    alt={primaryLogoAlt}
                    className={styles.logo}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.logo}>
                    <RedCrossLogo className={styles.redCrossLogo} />
                  </div>
                )
              )}
              {whiteSectionSlot && (
                <div className={styles.slotLarge}>
                  {whiteSectionSlot}
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Render default variant
  return (
    <footer className={styles.footer} data-color={colorScope}>
      {/* Main Section */}
      <div className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {/* Top-right GraphicElement */}
          {showGraphicElements && (
            <div className={styles.graphicElementTopRight}>
              <GraphicElement shape="angle" position="top-right" size="md" aria-hidden />
            </div>
          )}

          {/* Content Row: Newsletter + Links */}
          <div className={styles.contentRow}>
            {/* Newsletter Section */}
            {!hideNewsletter && (
              <div className={styles.newsletterSection}>
                <p className={styles.newsletterDescription}>{newsletterDescription}</p>
                <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                  <div className={styles.newsletterInputGroup}>
                    <Input
                      type="email"
                      placeholder={newsletterPlaceholder}
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      className={styles.newsletterInput}
                    />
                    <Button type="submit" variant="primary" data-color="neutral">
                      {newsletterButtonText}
                    </Button>
                  </div>
                </form>
                <p className={styles.consentText}>
                  {newsletterConsentText || defaultConsentText}
                </p>
              </div>
            )}

            {/* Links Columns */}
            <div className={styles.linksSection}>
              {/* Snarveier Column */}
              <nav className={styles.linksColumn} aria-label={shortcutsTitle || tWithFallback('footer.shortcuts', 'Snarveier')}>
                <h3 className={styles.linksTitle}>{shortcutsTitle || tWithFallback('footer.shortcuts', 'Snarveier')}</h3>
                <ul className={styles.linksList}>
                  {shortcuts.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Lenker Column */}
              <nav className={styles.linksColumn} aria-label={linksTitle || tWithFallback('footer.links', 'Lenker')}>
                <h3 className={styles.linksTitle}>{linksTitle || tWithFallback('footer.links', 'Lenker')}</h3>
                <ul className={styles.linksList}>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Contact Information Section */}
          <div className={styles.contactSection}>
            <div className={styles.contactColumn}>
              <h4 className={styles.contactTitle}>{tWithFallback('footer.contact.visitingAddress', 'Besøks adresse')}</h4>
              <div className={styles.contactContent}>
                {visitingAddress.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.contactTitle}>{tWithFallback('footer.contact.organizationNumber', 'Organisasjonsnummer')}</h4>
              <p className={styles.contactContent}>{organizationNumber}</p>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.contactTitle}>{tWithFallback('footer.contact.email', 'E-post')}</h4>
              <p className={styles.contactContent}>{email}</p>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Copyright */}
          <div className={styles.copyrightSection}>
            <p className={styles.copyrightText}>
              © {currentYear} {tWithFallback('footer.copyright', 'Rødekors')}
            </p>
          </div>

          {/* Bottom-left GraphicElement */}
          {showGraphicElements && (
            <div className={styles.graphicElementBottomLeft}>
              <GraphicElement shape="angle" position="bottom-left" size="md" aria-hidden />
            </div>
          )}
        </div>
      </div>

      {/* White Background Section */}
      <div className={styles.whiteSection}>
        <div className={styles.whiteContainer}>
          <div className={styles.whiteContent}>
            {showPrimaryLogo && (
              primaryLogoSrc ? (
                <img
                  src={primaryLogoSrc}
                  alt={primaryLogoAlt}
                  className={styles.logo}
                  loading="lazy"
                />
              ) : (
                <div className={styles.logo}>
                  <RedCrossLogo className={styles.redCrossLogo} />
                </div>
              )
            )}
            {whiteSectionSlot && (
              <div className={styles.slotLarge}>
                {whiteSectionSlot}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Fallback CSS injection function
function buildInlineCss(styles: Record<string, string>): string {
  const s = styles;
  return `
.${s.footer} {
  margin-top: auto;
  width: 100%;
}
.${s.mainSection} {
  background-color: var(--ds-color-neutral-background-default, #ffffff);
  width: 100%;
}
.${s.footer}[data-color] .${s.mainSection} {
  background-color: var(--ds-color-background-tinted, #f5f5f5);
}
.${s.mainContainer} {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--ds-size-30, 120px) 175px;
  box-sizing: border-box;
}
.${s.graphicElementTopRight} {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: var(--ds-size-6, 24px);
}
.${s.graphicElementBottomLeft} {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: var(--ds-size-6, 24px);
}
.${s.contentRow} {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--ds-size-12, 48px);
  padding: var(--ds-size-8, 32px) 0;
  flex-wrap: wrap;
}
.${s.newsletterSection} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-6, 24px);
  max-width: 440px;
}
.${s.newsletterDescription} {
  font-size: var(--ds-font-size-5, 21px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.105px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  margin: 0;
}
.${s.newsletterForm} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-6, 24px);
}
.${s.newsletterInputGroup} {
  display: flex;
  gap: var(--ds-size-2, 8px);
  align-items: flex-end;
}
.${s.newsletterInput} {
  flex: 1;
  min-width: 200px;
}
.${s.consentText} {
  font-size: var(--ds-font-size-3, 16px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  margin: 0;
}
.${s.linksSection} {
  display: flex;
  gap: var(--ds-size-12, 48px);
  flex-wrap: wrap;
}
.${s.linksColumn} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2, 8px);
  min-width: 150px;
}
.${s.linksTitle} {
  font-size: var(--ds-font-size-7, 30px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: -0.075px;
  color: var(--ds-color-primary-color-red-text-subtle, #b42419);
  margin: 0;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.${s.linksList} {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2, 8px);
}
.${s.footerLink} {
  font-size: var(--ds-font-size-4, 18px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.09px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-decoration: underline;
  text-underline-offset: 2px;
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
  font-weight: var(--ds-font-weight-semibold);
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
.${s.copyrightSection} {
  display: flex;
  align-items: center;
}
.${s.copyrightText} {
  font-size: var(--ds-font-size-2, 14px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: 0.021px;
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
  margin: 0;
}
.${s.whiteSection} {
  background-color: white;
  width: 100%;
}
.${s.whiteContainer} {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--ds-size-6, 24px) 175px;
  box-sizing: border-box;
}
.${s.whiteContent} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--ds-size-10, 40px);
  flex-wrap: wrap;
}
.${s.logo} {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  flex-shrink: 0;
}
.${s.redCrossLogo} {
  width: 169px;
  height: auto;
  display: block;
  /* Pinned dark: this logo sits in the hardcoded white band. */
  color: #1e1e1e;
}
.${s.slotLarge} {
  background-color: var(--ds-color-neutral-surface-default, #ffffff);
  border: 2px dashed var(--ds-color-neutral-border-default, #797979);
  border-radius: var(--ds-border-radius-lg, 8px);
  padding: var(--ds-size-6, 24px) var(--ds-size-3, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 596px;
  min-width: 200px;
}
@media (max-width: 1024px) {
  .${s.mainContainer} {
    padding: var(--ds-size-15, 64px) var(--ds-size-8, 32px);
  }
  .${s.whiteContainer} {
    padding: var(--ds-size-6, 24px) var(--ds-size-8, 32px);
  }
}
@media (max-width: 768px) {
  .${s.contentRow} {
    flex-direction: column;
  }
  .${s.newsletterSection} {
    max-width: 100%;
  }
  .${s.linksSection} {
    width: 100%;
  }
  .${s.contactSection} {
    flex-direction: column;
  }
  .${s.whiteContent} {
    flex-direction: column;
    align-items: flex-start;
  }
  .${s.slotLarge} {
    width: 100%;
    max-width: none;
  }
}
/* Contact Variant Styles */
.${s.contentRowContact} {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--ds-size-12, 48px);
  padding: var(--ds-size-8, 32px) 0;
  flex-wrap: wrap;
}
.${s.socialLinksSection} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-4, 16px);
  min-width: 200px;
}
.${s.socialLinksTitle} {
  font-size: var(--ds-font-size-7, 30px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: -0.075px;
  color: var(--ds-color-primary-color-red-text-subtle, #b42419);
  margin: 0;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.${s.socialLinksList} {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2, 8px);
}
.${s.socialLink} {
  display: flex;
  align-items: center;
  gap: var(--ds-size-2, 8px);
  font-size: var(--ds-font-size-4, 18px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.09px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.${s.socialLinkIcon} {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.${s.contactPersonsSection} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-4, 16px);
  flex: 1;
}
.${s.contactPersonsTitle} {
  font-size: var(--ds-font-size-7, 30px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.3;
  letter-spacing: -0.075px;
  color: var(--ds-color-primary-color-red-text-subtle, #b42419);
  margin: 0;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.${s.contactPersonsGrid} {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--ds-size-12, 48px);
}
.${s.contactPersonCard} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1, 4px);
  min-width: 0;
}
.${s.contactPersonName} {
  font-size: var(--ds-font-size-4, 18px);
  font-weight: var(--ds-font-weight-semibold);
  line-height: 1.5;
  letter-spacing: 0.09px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  margin: 0;
}
.${s.contactPersonRole} {
  font-size: var(--ds-font-size-3, 16px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
  margin: 0;
}
.${s.contactPersonDetails} {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1, 4px);
  margin-top: var(--ds-size-2, 8px);
}
.${s.contactPersonLabel} {
  font-weight: var(--ds-font-weight-regular);
}
.${s.contactPersonEmail},
.${s.contactPersonPhone},
.${s.contactPersonAddress} {
  font-size: var(--ds-font-size-3, 16px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  margin: 0;
  word-break: break-word;
}
.${s.contactPersonEmail} a {
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.${s.bottomRowContact} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--ds-size-4, 16px);
}
.${s.legalLinksRow} {
  display: flex;
  gap: var(--ds-size-6, 24px);
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
.${s.legalLink} {
  font-size: var(--ds-font-size-3, 16px);
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.5;
  letter-spacing: 0.04px;
  color: var(--ds-color-neutral-text-default, #2b2b2b);
  text-decoration: underline;
  text-underline-offset: 2px;
}
@media (max-width: 1024px) {
  .${s.contentRowContact} {
    gap: var(--ds-size-8, 32px);
  }
  .${s.contactPersonsGrid} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--ds-size-6, 24px);
  }
}
@media (max-width: 768px) {
  .${s.contentRowContact} {
    flex-direction: column;
  }
  .${s.socialLinksSection} {
    width: 100%;
  }
  .${s.contactPersonsSection} {
    width: 100%;
  }
  .${s.contactPersonsGrid} {
    grid-template-columns: 1fr;
  }
  .${s.contactPersonCard} {
    max-width: none;
  }
  .${s.bottomRowContact} {
    flex-direction: column;
    align-items: flex-start;
  }
  .${s.legalLinksRow} {
    flex-direction: column;
    gap: var(--ds-size-2, 8px);
  }
}

/* Mobil: fallback-kopien hadde 1024- og 768-blokkene, men ikke denne. En
   konsument uten stilarket fikk derfor skrivebordsverdiene på telefon —
   logoen på 169px, overskriftene på 30px. Speiler @media (max-width: 480px)
   i styles.module.css. */
@media (max-width: 480px) {
  .${s.mainContainer} { padding: var(--ds-size-10, 40px) var(--ds-size-4, 16px); }
  .${s.whiteContainer} { padding: var(--ds-size-4) var(--ds-size-4); }
  .${s.linksTitle},
  .${s.socialLinksTitle} { font-size: var(--ds-font-size-5, 21px); }
  .${s.linksColumn},
  .${s.contactColumn} { min-width: 0; }
  .${s.logo} img,
  .${s.redCrossLogo} { width: 130px; }
  .${s.newsletterInputGroup} { flex-direction: column; }
}
`;
}
