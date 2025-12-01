import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { Switch } from '../../components/Switch';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Link } from '../../components/Link';
import { Chip } from '../../components/Chip';
import styles from './styles.module.css';

interface HomePageProps {
  setPage: (page: string) => void;
}

export const HomePage = ({ setPage }: HomePageProps) => {
  return (
    <main className={styles.main}>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.splitLayout} ${styles.heroContainer}`}>
          
          {/* Content Side */}
          <div className={styles.splitContent}>
            <div className={styles.heroBadge}>Beta v1.0</div>
            
            <Heading level={1} className={styles.heroTitle}>
              Bygg bedre løsninger. <br />
              <span className={styles.textHighlight}>Raskere.</span>
            </Heading>
            
            <Paragraph className={styles.heroLead} data-size="lg">
              Røde Kors Designsystem er den komplette verktøykassen for å skape helhetlige, universelt utformede og effektive digitale produkter.
            </Paragraph>
            
            <div className={styles.heroActions}>
              <Button onClick={() => setPage('design')} data-size="lg">
                Kom i gang
              </Button>
              <Button 
                variant="secondary" 
                data-size="lg"
                onClick={() => window.open('https://github.com/norwegianredcross/DesignSystem', '_blank')}
              >
                GitHub
              </Button>
            </div>
          </div>
          
          {/* Visual Wall Side */}
          <div className={styles.heroVisual}>
            <div className={styles.floatingGrid}>
              
              {/* Column 1 */}
              <div className={styles.gridColumn} style={{ animationDelay: '0s' }}>
                 <Card variant="tinted" data-color="neutral" className={styles.visualCard}>
                   <CardBlock>
                     <Heading level={3} data-size="xs">Profil</Heading>
                     <div className={styles.cardRow}>
                       <Avatar aria-label="Avatar" />
                       <div>
                         <div className={styles.cardTextBold}>Navn Navnesen</div>
                         <div className={styles.cardTextSubtle}>Frivillig</div>
                       </div>
                     </div>
                   </CardBlock>
                 </Card>
                 <div className={styles.visualElement}>
                   <Button variant="primary" style={{ width: '100%' }}>Lagre</Button>
                 </div>
                 <div className={styles.visualElement}>
                   <Tag data-color="success" data-size="sm">Godkjent</Tag>
                   <Tag data-color="danger" data-size="sm">Avvist</Tag>
                 </div>
              </div>

              {/* Column 2 (Center Offset) */}
              <div className={`${styles.gridColumn} ${styles.columnOffset}`} style={{ animationDelay: '1.5s' }}>
                <div className={styles.visualElement}>
                   <Switch label="Mørk modus" position="start" data-size="sm" />
                 </div>
                 <Card variant="default" className={styles.visualCard} style={{ borderLeft: 'var(--ds-size-1) solid var(--ds-color-primary-color-red-base-default)' }}>
                   <CardBlock>
                     <Heading level={3} data-size="xs">Viktig melding</Heading>
                     <Paragraph data-size="sm" style={{ marginTop: 'var(--ds-size-2)' }}>Husk å oppdatere retningslinjene...</Paragraph>
                   </CardBlock>
                 </Card>
                 <div className={styles.visualElement}>
                   <div className={styles.cardRow} style={{gap: 'var(--ds-size-2)'}}>
                     <Chip.Radio name="filter-demo" value="all" defaultChecked>Alle</Chip.Radio>
                     <Chip.Radio name="filter-demo" value="active">Aktive</Chip.Radio>
                   </div>
                 </div>
              </div>

               {/* Column 3 */}
               <div className={styles.gridColumn} style={{ animationDelay: '0.8s' }}>
                 <div className={styles.visualElement}>
                   <Badge data-color="primary" count={5} maxCount={9} />
                   <Button variant="tertiary">Varsler</Button>
                 </div>
                 <Card variant="tinted" data-color="primary" className={styles.visualCard}>
                   <CardBlock>
                     <div className={styles.spaceBetween}>
                       <Heading level={3} data-size="xs">Status</Heading>
                       <div className={styles.statusDot}></div>
                     </div>
                     <div className={styles.progressBarBg}>
                       <div className={styles.progressBarFill}></div>
                     </div>
                   </CardBlock>
                 </Card>
              </div>

            </div>
            <div className={styles.gradientOverlay}></div>
          </div>
        </div>
      </section>

      {/* --- BENTO NAVIGATION --- */}
      <section className={styles.section}>
        <div className="container">
          <Heading level={2} className={styles.sectionTitle} data-size="xl">Utforsk systemet</Heading>
          
          <div className={styles.bentoWrapper}>
            {/* Primary Block (Components) - Spans full height on desktop */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setPage('components'); }} 
              className={`${styles.bentoItem} ${styles.bentoPrimary}`}
            >
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconBg}>
                    <span className={styles.iconLarge}>❖</span>
                  </div>
                  <span className={styles.arrowIcon}>→</span>
                </div>
                <div className={styles.bentoText}>
                  <Heading level={3} data-size="md">Komponenter</Heading>
                  <Paragraph className={styles.bentoDesc}>Bibliotek med ferdige React-komponenter.</Paragraph>
                </div>
              </div>
              
              <div className={styles.bentoPreview}>
                 <div className={styles.previewLine}></div>
                 <div className={styles.previewRow}>
                   <div className={styles.previewBtn}></div>
                   <div className={styles.previewBtn}></div>
                 </div>
                 <div className={styles.previewCard}></div>
              </div>
            </a>

            {/* Side Stack (Design & Code) */}
            <div className={styles.bentoSideStack}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setPage('design'); }} 
                className={`${styles.bentoItem} ${styles.bentoSecondary}`}
              >
                <div className={styles.bentoContent}>
                  <div className={styles.bentoHeader}>
                    <div className={styles.bentoIconBg}>
                      <span className={styles.iconLarge}>🎨</span>
                    </div>
                    <span className={styles.arrowIcon}>→</span>
                  </div>
                  <div className={styles.bentoText}>
                    <Heading level={3} data-size="md">Design</Heading>
                    <Paragraph className={styles.bentoDesc}>Farger, typografi og prinsipper.</Paragraph>
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/norwegianredcross/DesignSystem" 
                target="_blank" 
                rel="noreferrer" 
                className={`${styles.bentoItem} ${styles.bentoSecondary}`}
              >
                 <div className={styles.bentoContent}>
                  <div className={styles.bentoHeader}>
                    <div className={styles.bentoIconBg}>
                      <span className={styles.iconLarge}>code</span>
                    </div>
                    <span className={styles.arrowIcon}>↗</span>
                  </div>
                  <div className={styles.bentoText}>
                    <Heading level={3} data-size="md">Kode</Heading>
                    <Paragraph className={styles.bentoDesc}>GitHub, oppsett og bidrag.</Paragraph>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className={styles.sectionValues}>
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                 <span className={styles.iconXLarge}>♿️</span>
              </div>
              <Heading level={3} data-size="sm" className={styles.valueTitle}>Universell utforming</Heading>
              <Paragraph data-size="sm" className={styles.valueText}>
                Innebygd tilgjengelighet som standard. Vi følger WCAG 2.1-kravene strengt.
              </Paragraph>
               <Link href="#" onClick={(e) => { e.preventDefault(); setPage('design'); }} className={styles.valueLink}>Les retningslinjene</Link>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                 <span className={styles.iconXLarge}>🔴</span>
              </div>
              <Heading level={3} data-size="sm" className={styles.valueTitle}>Konsistent merkevare</Heading>
              <Paragraph data-size="sm" className={styles.valueText}>
                Design tokens sikrer at Røde Kors sin visuelle profil ivaretas på alle flater.
              </Paragraph>
               <Link href="#" onClick={(e) => { e.preventDefault(); setPage('design'); }} className={styles.valueLink}>Se farger</Link>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                 <span className={styles.iconXLarge}>⚡️</span>
              </div>
              <Heading level={3} data-size="sm" className={styles.valueTitle}>Effektiv utvikling</Heading>
              <Paragraph data-size="sm" className={styles.valueText}>
                Spar tid med ferdige komponenter. Fokuser på funksjonalitet, ikke CSS.
              </Paragraph>
              <Link href="#" onClick={(e) => { e.preventDefault(); setPage('components'); }} className={styles.valueLink}>Utforsk komponenter</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};