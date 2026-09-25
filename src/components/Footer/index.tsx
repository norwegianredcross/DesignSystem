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

export interface FooterProps extends React.ComponentPropsWithoutRef<'footer'> {
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
  /** Accessible name of the newsletter e-mail field. A placeholder is not a label: it vanishes on input and is skipped by some assistive technology. Defaults to the translated "E-postadresse". */
  newsletterInputLabel?: string;
  /** Newsletter button text */
  newsletterButtonText?: string;
  /** Newsletter consent text */
  newsletterConsentText?: React.ReactNode;
  /** Native newsletter endpoint. Receives the email field without JavaScript; the consuming application handles validation, subscription and the response. */
  newsletterAction?: string;
  /** Native form method. Defaults to POST so email addresses are not put in the URL. */
  newsletterMethod?: 'get' | 'post';
  /** Field name expected by the newsletter endpoint. Defaults to "email". */
  newsletterInputName?: string;
  /** Optional client enhancement. Overrides native submission after hydration; provide newsletterAction for a working no-JavaScript baseline. */
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

export const Footer = React.forwardRef<HTMLElement, FooterProps>(({
  'data-color': dataColor = 'neutral',
  variant = 'default',
  colorScheme,
  columns,
  showGraphicElements = false,
  newsletterDescription = 'Tekst om rødekors som kan være rundt 2 linjebrudd i lengde.',
  newsletterPlaceholder = 'Input tekst',
  newsletterInputLabel,
  newsletterButtonText = 'Meld deg på',
  newsletterConsentText,
  onNewsletterSubmit,
  newsletterAction,
  newsletterMethod = 'post',
  newsletterInputName = 'email',
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
  className,
  ...rest
}, ref) => {
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
  const [isEnhanced, setIsEnhanced] = React.useState(false);
  React.useEffect(() => setIsEnhanced(true), []);
  const canSubmitNewsletter = Boolean(newsletterAction || (isEnhanced && onNewsletterSubmit));

  // Helper to get translation with proper fallback (avoids showing raw keys like "footer.contact.phone")
  const tWithFallback = (key: string, fallback: string): string => {
    const result = t(key);
    return result === key ? fallback : result;
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (onNewsletterSubmit) {
      event.preventDefault();
      const email = new FormData(event.currentTarget).get(newsletterInputName);
      if (typeof email === 'string') onNewsletterSubmit(email);
    } else if (!newsletterAction) {
      event.preventDefault();
    }
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
      Du kan når som helst melde deg av nyhetsbrevet uten kostnad.
    </>
  );

  const shortcuts = shortcutsLinks || defaultShortcutsLinks;
  const links = linksLinks || defaultLinksLinks;

  // Render helpers keep the same DOM nodes through hydration and rerenders.
  const renderSocialLinks = () => (
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

  const renderContactPerson = (person: ContactPerson, index: number) => (
    <div key={index} className={styles.contactPersonCard}>
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

  const renderContactPersons = () => (
    <div className={styles.contactPersonsSection}>
      {contactPersonsTitle && (
        <h3 className={styles.contactPersonsTitle}>
          {contactPersonsTitle}
        </h3>
      )}
      <div className={styles.contactPersonsGrid}>
        {contactPersons.map(renderContactPerson)}
      </div>
    </div>
  );

  const renderLegalLinks = () => (
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
      <footer {...rest} ref={ref} className={[styles.footer, className].filter(Boolean).join(' ')} data-color={colorScope} data-color-scheme={colorScheme}>
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
      <footer {...rest} ref={ref} className={[styles.footer, className].filter(Boolean).join(' ')} data-color={colorScope} data-color-scheme={colorScheme}>
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
              {socialLinks.length > 0 && renderSocialLinks()}
              {contactPersons.length > 0 && renderContactPersons()}
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
              {legalLinks.length > 0 && renderLegalLinks()}
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
    <footer {...rest} ref={ref} className={[styles.footer, className].filter(Boolean).join(' ')} data-color={colorScope} data-color-scheme={colorScheme}>
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
                <form
                  className={styles.newsletterForm}
                  action={newsletterAction}
                  method={newsletterMethod}
                  onSubmit={handleNewsletterSubmit}
                >
                  <div className={styles.newsletterInputGroup}>
                    <Input
                      type="email"
                      aria-label={newsletterInputLabel ?? tWithFallback('footer.newsletterEmailLabel', 'E-postadresse')}
                      placeholder={newsletterPlaceholder}
                      name={newsletterInputName}
                      autoComplete="email"
                      required
                      disabled={!canSubmitNewsletter}
                      className={styles.newsletterInput}
                    />
                    <Button type="submit" variant="primary" data-color="neutral" disabled={!canSubmitNewsletter}>
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
});

Footer.displayName = 'Footer';
