import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { Switch } from '../../components/Switch';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Chip } from '../../components/Chip';
import { DesignAnimation } from '../../animations/DesignAnimation';
import { CodeAnimation } from '../../animations/CodeAnimation';
import {
  WheelchairIcon,
  PaletteIcon,
  LightningIcon,
  ComponentIcon,
  CodeIcon,
  ArrowRightIcon
} from '@navikt/aksel-icons';
import { useLanguage } from '../../context/LanguageContext';
import styles from './styles.module.css';

interface HomePageProps {
  setPage: (page: string) => void;
}

export const HomePage = ({ setPage }: HomePageProps) => {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.splitLayout} ${styles.heroContainer}`}>
          
          {/* Content Side */}
          <div className={styles.splitContent}>
            <Tag data-color="neutral" data-size="sm" className={styles.versionBadge}>
              v1.1 · Open Source
            </Tag>
            <Heading level={1} className={styles.heroTitle}>
              {t('home.heroTitle')}
            </Heading>
            
            <Paragraph className={styles.heroLead} data-size="lg">
              {t('home.heroLead')}
            </Paragraph>
            
            <div className={styles.heroActions}>
              <Button onClick={() => setPage('components')} data-size="lg">
                {t('home.searchComponents')}
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
                     <Heading level={3} data-size="xs">{t('home.profile')}</Heading>
                     <div className={styles.cardRow}>
                       <Avatar aria-label="Avatar" initials="MH" />
                       <div>
                         <div className={styles.cardTextBold}>{t('home.name')}</div>
                         <div className={styles.cardTextSubtle}>{t('home.volunteer')}</div>
                       </div>
                     </div>
                   </CardBlock>
                 </Card>
                 <Card variant="default" className={styles.visualElement}>
                   <Button variant="primary" style={{ width: '100%' }}>{t('home.save')}</Button>
                 </Card>
                 <Card variant="default" className={styles.visualElement}>
                   <Tag data-color="success" data-size="sm">{t('home.approved')}</Tag>
                   <Tag data-color="danger" data-size="sm">{t('home.rejected')}</Tag>
                 </Card>
              </div>

              {/* Column 2 (Center Offset) */}
              <div className={`${styles.gridColumn} ${styles.columnOffset}`} style={{ animationDelay: '1.5s' }}>
                <Card variant="default" className={styles.visualElement}>
                   <Switch label={t('home.darkModeLabel')} position="start" data-size="sm" />
                 </Card>
                 <Card variant="default" className={styles.visualCard} style={{ borderLeft: 'var(--ds-size-1) solid var(--ds-color-primary-color-red-base-default)' }}>
                   <CardBlock>
                     <Heading level={3} data-size="xs">{t('home.importantMessage')}</Heading>
                     <Paragraph data-size="sm" style={{ marginTop: 'var(--ds-size-2)' }}>{t('home.updateGuidelines')}</Paragraph>
                   </CardBlock>
                 </Card>
                 <Card variant="default" className={styles.visualElement}>
                   <div className={styles.cardRow} style={{gap: 'var(--ds-size-2)'}}>
                     <Chip.Radio name="filter-demo" value="all" defaultChecked>{t('home.all')}</Chip.Radio>
                     <Chip.Radio name="filter-demo" value="active">{t('home.active')}</Chip.Radio>
                   </div>
                 </Card>
              </div>

               {/* Column 3 */}
               <div className={styles.gridColumn} style={{ animationDelay: '0.8s' }}>
                 <Card variant="default" className={styles.visualElement}>
                   <Badge data-color="primary" count={5} maxCount={9} />
                   <Button variant="tertiary">{t('home.alerts')}</Button>
                 </Card>
                 <Card variant="tinted" data-color="primary" className={styles.visualCard}>
                   <CardBlock>
                     <div className={styles.spaceBetween}>
                       <Heading level={3} data-size="xs">{t('home.status')}</Heading>
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
          <Heading level={2} className={styles.sectionTitle} data-size="xl">{t('home.exploreSystem')}</Heading>
          
          <div className={styles.bentoWrapper}>
            {/* Components Card */}
            <Card
              variant="default"
              className={styles.bentoItem}
              onClick={() => setPage('components')}
              role="link"
              tabIndex={0}
            >
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconBg}>
                    <ComponentIcon className={styles.iconLarge} aria-hidden />
                  </div>
                  <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
                </div>
                <div className={styles.bentoText}>
                  <Heading level={3} data-size="md">{t('header.nav.components')}</Heading>
                  <Paragraph className={styles.bentoDesc}>{t('home.componentsDesc')}</Paragraph>
                </div>
              </div>
            </Card>

            {/* Design Card */}
            <Card
              variant="default"
              className={styles.bentoItem}
              onClick={() => setPage('design')}
              role="link"
              tabIndex={0}
            >
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconBg}>
                    <PaletteIcon className={styles.iconLarge} aria-hidden />
                  </div>
                  <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
                </div>
                <div className={styles.bentoText}>
                  <Heading level={3} data-size="md">{t('header.nav.design')}</Heading>
                  <Paragraph className={styles.bentoDesc}>{t('home.designDesc')}</Paragraph>
                </div>
              </div>
            </Card>

            {/* Code Card */}
            <Card
              variant="default"
              className={styles.bentoItem}
              onClick={() => setPage('code')}
              role="link"
              tabIndex={0}
            >
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconBg}>
                    <CodeIcon className={styles.iconLarge} aria-hidden />
                  </div>
                  <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
                </div>
                <div className={styles.bentoText}>
                  <Heading level={3} data-size="md">{t('header.nav.code')}</Heading>
                  <Paragraph className={styles.bentoDesc}>{t('home.codeDesc')}</Paragraph>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* --- INTERACTIVE SHOWCASE --- */}
      <section id="showcase" className={styles.showcaseSection}>
        <div className={`container ${styles.showcaseContainer}`}>
          <div className={styles.showcaseIntro}>
            <Heading level={2} data-size="xl" className={styles.sectionTitle}>
              {t('home.showcase.title')}
            </Heading>
            <Paragraph data-size="lg" className={styles.showcaseLead}>
              {t('home.showcase.lead')}
            </Paragraph>
          </div>

          <div className={styles.showcaseRows}>
            {/* Row 1 — Design (animation left, text right) */}
            <div className={`${styles.showcaseRow} ${styles.showcaseRowLeft}`}>
              <div className={styles.showcaseAnimation}>
                <DesignAnimation
                  labels={{
                    avatar: t('home.showcase.palette.avatar'),
                    heading: t('home.showcase.palette.heading'),
                    button: t('home.showcase.palette.button'),
                    tag: t('home.showcase.palette.tag'),
                    name: t('home.name'),
                    role: t('home.volunteer'),
                    cta: t('home.showcase.labels.save'),
                    paletteTitle: t('home.showcase.palette.title'),
                    canvasTitle: t('home.showcase.canvasTitle'),
                  }}
                />
              </div>
              <div className={styles.showcaseCopy}>
                <div className={styles.showcaseKicker}>{t('home.showcase.designRow.kicker')}</div>
                <Heading level={3} data-size="lg" className={styles.showcaseCopyTitle}>
                  {t('home.showcase.designRow.heading')}
                </Heading>
                <Paragraph className={styles.showcaseCopyBody}>
                  {t('home.showcase.designRow.body')}
                </Paragraph>
              </div>
            </div>

            {/* Row 2 — Code (text left, animation right) */}
            <div className={`${styles.showcaseRow} ${styles.showcaseRowRight}`}>
              <div className={styles.showcaseCopy}>
                <div className={styles.showcaseKicker}>{t('home.showcase.codeRow.kicker')}</div>
                <Heading level={3} data-size="lg" className={styles.showcaseCopyTitle}>
                  {t('home.showcase.codeRow.heading')}
                </Heading>
                <Paragraph className={styles.showcaseCopyBody}>
                  {t('home.showcase.codeRow.body')}
                </Paragraph>
              </div>
              <div className={styles.showcaseAnimation}>
                <CodeAnimation
                  labels={{
                    name: t('home.name'),
                    role: t('home.volunteer'),
                    cta: t('home.showcase.labels.save'),
                    fileName: t('home.showcase.fileName'),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className={styles.sectionValues} data-color-scheme="dark">
        <div className="container">
          <div className={styles.valuesGrid}>
            <Card variant="default" className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <WheelchairIcon className={styles.iconXLarge} aria-hidden />
              </div>
              <Heading level={3} data-size="sm" className={styles.valueTitle}>{t('home.universalDesign')}</Heading>
              <Paragraph data-size="sm" className={styles.valueText}>
                {t('home.universalDesignText')}
              </Paragraph>
              <Button
                variant="tertiary"
                data-color="primary"
                data-size="sm"
                onClick={() => setPage('design')}
                className={styles.valueButton}
              >
                {t('home.readGuidelines')}
                <ArrowRightIcon aria-hidden />
              </Button>
            </Card>

            <Card variant="default" className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <PaletteIcon className={styles.iconXLarge} aria-hidden />
              </div>
              <Heading level={3} data-size="sm" className={styles.valueTitle}>{t('home.consistentBrand')}</Heading>
              <Paragraph data-size="sm" className={styles.valueText}>
                {t('home.consistentBrandText')}
              </Paragraph>
              <Button
                variant="tertiary"
                data-color="primary"
                data-size="sm"
                onClick={() => setPage('design')}
                className={styles.valueButton}
              >
                {t('home.seeColors')}
                <ArrowRightIcon aria-hidden />
              </Button>
            </Card>

            <Card variant="default" className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <LightningIcon className={styles.iconXLarge} aria-hidden />
              </div>
              <Heading level={3} data-size="sm" className={styles.valueTitle}>{t('home.efficientDev')}</Heading>
              <Paragraph data-size="sm" className={styles.valueText}>
                {t('home.efficientDevText')}
              </Paragraph>
              <Button
                variant="tertiary"
                data-color="primary"
                data-size="sm"
                onClick={() => setPage('components')}
                className={styles.valueButton}
              >
                {t('home.exploreComponents')}
                <ArrowRightIcon aria-hidden />
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};