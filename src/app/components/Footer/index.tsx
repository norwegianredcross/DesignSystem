// src/components/Footer/index.tsx
import React from "react";
import styles from "./styles.module.css";

import { List, Link, Search, Divider } from "@digdir/designsystemet-react";
import { HexagonGridIcon } from "@navikt/aksel-icons";

export interface FooterProps {
  logo: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ logo, className }) => {
  const leftLinks = [
    { href: "/Tilbudene", label: "Tilbudene" },
    { href: "/Bli-frivillig", label: "Bli frivillig" },
    { href: "/Vårt-arbeid", label: "Vårt arbeid" },
    { href: "/Om-Røde-Kors", label: "Om Røde Kors" },
    { href: "/Støtt-arbeidet", label: "Støtt arbeidet" },
    { href: "/Kontakt-oss", label: "Kontakt oss" },
  ];

  const rightLinks = [
    {
      href: "/X", // Assuming X is a platform name like Twitter
      label: "X",
      Icon: HexagonGridIcon,
    },
    { href: "/Facebook", label: "Facebook", Icon: HexagonGridIcon },
    { href: "/Linkedin", label: "Linkedin", Icon: HexagonGridIcon },
    { href: "/Instagram", label: "Instagram", Icon: HexagonGridIcon },
    { href: "/YouTube", label: "YouTube", Icon: HexagonGridIcon },
  ];

  const middleLinksCol1 = [
    { href: "/English-pages", label: "English pages" },
    {
      href: "/Jobb-i-Røde-Kors-Oppurtunities", // Combined path
      label: "Jobb i Røde Kors / Oppurtunities",
    },
    { href: "/Korsveien", label: "Korsveien" },
  ];

  const middleLinksCol2 = [
    { href: "/Presse-Press", label: "Presse / Press" },
    { href: "/Varsling-Misconduct", label: "Varsling / Misconduct" },
    { href: "/Regler-for-innkjøp", label: "Regler for innkjøp" },
  ];

  return (
    <footer className={`${styles.footerContainer} ${className || ""}`}>
      <div className={styles.footerContentWrapper}>
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            {logo}
            <List.Unordered className={styles.footerList}>
              {leftLinks.map((link) => (
                <List.Item key={link.label} className={styles.footerListItem}>
                  <Link data-color="neutral" href={link.href}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List.Unordered>
          </div>

          <div className={styles.rightColumn}>
            <Search aria-label="Søk på siden">
              <Search.Input placeholder="Søk..." />
            </Search>
            <List.Unordered className={styles.footerList}>
              {rightLinks.map((link) => (
                <List.Item key={link.label} className={styles.footerListItem}>
                  <Link
                    data-color="neutral"
                    href={link.href}
                    className={styles.linkWithIcon}
                  >
                    <link.Icon aria-hidden fontSize="1.2em" />
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List.Unordered>
          </div>
        </div>

        <div className={styles.middleSection}>
          <div className={styles.middleLinkColumns}>
            <div className={styles.listColumn}>
              <List.Unordered className={styles.footerList}>
                {middleLinksCol1.map((link) => (
                  <List.Item key={link.label} className={styles.footerListItem}>
                    <Link data-color="neutral" href={link.href}>
                      {link.label}
                    </Link>
                  </List.Item>
                ))}
              </List.Unordered>
            </div>
            <div className={styles.listColumn}>
              <List.Unordered className={styles.footerList}>
                {middleLinksCol2.map((link) => (
                  <List.Item key={link.label} className={styles.footerListItem}>
                    <Link data-color="neutral" href={link.href}>
                      {link.label}
                    </Link>
                  </List.Item>
                ))}
              </List.Unordered>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <p className={styles.infoLine}>
              <span className={styles.infoLabel}>Sentralbord:</span>
              +47 22 05 40 00
            </p>
            <p className={styles.infoLine}>
              <span className={styles.infoLabel}>E-post:</span>
              post@redcross.no
            </p>
            <p className={styles.infoLine}>
              <span className={styles.infoLabel}>Org.nummer / VAT-nummer:</span>
              864 139 442
            </p>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <Link
            data-color="neutral"
            href="/eu-humanitarian-partnership-certificate"
          >
            EU HUMANITARIAN PARTNERSHIP CERTIFICATE 2021 - 2027
          </Link>
          <Divider />
        </div>

        <div className={styles.copyrightSection}>
          <div className={styles.membershipInfo}>
            <span className={styles.copyrightText}>Medlem av:</span>
            <Link data-color="neutral" href="/innsamlingskontrollen">
              Innsamlingskontrollen
            </Link>
          </div>
          <Link data-color="neutral" href="/personvern">
            Personvern
          </Link>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
