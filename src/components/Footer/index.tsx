import React from 'react';
import styles from './styles.module.css';
import { Link } from '../Link'; // Assuming this path is correct based on your snippet

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img 
            src="/logo-red-cross.svg" 
            alt="Røde Kors Logo" 
            className={styles.logo} 
            loading="lazy"
          />
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          
          {/* Column 1 */}
          <nav className={styles.column} aria-label="Om oss">
            <h3 className={styles.columnTitle}>Om oss</h3>
            <ul className={styles.linkList}>
              <li><Link href="#">Kontakt oss</Link></li>
              <li><Link href="#">Personvern</Link></li>
              <li><Link href="#">Cookies</Link></li>
            </ul>
          </nav>

          {/* Column 2 */}
          <nav className={styles.column} aria-label="Ressurser">
            <h3 className={styles.columnTitle}>Ressurser</h3>
            <ul className={styles.linkList}>
              <li><Link href="https://zeroheight.com/">Designsystem (Zeroheight)</Link></li>
              <li><Link href="https://github.com/norwegianredcross/DesignSystem">GitHub</Link></li>
              <li><Link href="/storybook">Storybook</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p className={styles.text}>
          © {currentYear} Norges Røde Kors. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
};