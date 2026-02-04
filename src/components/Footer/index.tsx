import React from 'react';
import styles from './styles.module.css';
import { Link } from '../Link';
import { Button } from '../Button';
import { Input } from '../Input';
import { CrossCorner } from '../CrossCorner';
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

export interface FooterProps {
  /** Background color for the main section */
  'data-color'?: 'primary' | 'additional' | 'neutral';
  /** Footer layout variant */
  variant?: 'default' | 'contact';
  /** Show CrossCorner decorative elements */
  showCrossCorners?: boolean;
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
  showCrossCorners = false,
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
    document.head.appendChild(tag);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewsletterSubmit?.(emailValue);
  };

  // Red Cross Logo component (inline SVG)
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

  // Render contact variant
  if (variant === 'contact') {
    return (
      <footer className={styles.footer} data-color={dataColor}>
        {/* Main Section */}
        <div className={styles.mainSection}>
          <div className={styles.mainContainer}>
            {/* Top-right CrossCorner */}
            {showCrossCorners && (
              <div className={styles.crossCornerTopRight}>
                <CrossCorner position="top-right" size="md" aria-hidden />
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

            {/* Bottom-left CrossCorner */}
            {showCrossCorners && (
              <div className={styles.crossCornerBottomLeft}>
                <CrossCorner position="bottom-left" size="md" aria-hidden />
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
                    <RedCrossLogo />
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
    <footer className={styles.footer} data-color={dataColor}>
      {/* Main Section */}
      <div className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {/* Top-right CrossCorner */}
          {showCrossCorners && (
            <div className={styles.crossCornerTopRight}>
              <CrossCorner position="top-right" size="md" aria-hidden />
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

          {/* Bottom-left CrossCorner */}
          {showCrossCorners && (
            <div className={styles.crossCornerBottomLeft}>
              <CrossCorner position="bottom-left" size="md" aria-hidden />
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
                  <RedCrossLogo />
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
.${s.footer}[data-color="primary"] .${s.mainSection} {
  background-color: var(--ds-color-primary-color-red-background-tinted);
}
.${s.footer}[data-color="additional"] .${s.mainSection} {
  background-color: var(--ds-color-additional-color-ocean-background-tinted);
}
.${s.footer}[data-color="neutral"] .${s.mainSection} {
  background-color: var(--ds-color-neutral-background-subtle, #f5f5f5);
}
.${s.mainContainer} {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--ds-size-30, 120px) var(--ds-size-44, 175px);
  box-sizing: border-box;
}
.${s.crossCornerTopRight} {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: var(--ds-size-6, 24px);
}
.${s.crossCornerBottomLeft} {
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
  padding: var(--ds-size-6, 24px) var(--ds-size-44, 175px);
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
    padding: var(--ds-size-16, 64px) var(--ds-size-8, 32px);
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
  font-weight: var(--ds-font-weight-bold);
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
`;
}
