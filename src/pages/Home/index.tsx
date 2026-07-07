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
  PaletteIcon,
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
      {/* --- HERO: typography-led cream panel ("Millioner av sivile rammet" / tilbud-hero treatment) --- */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroPanel}>
            {/* Notch: white step cut out of the panel's top-left corner ("krysset" cutout).
                Holds the release badge — the system's "stamp" in the brand-mark slot. */}
            <div className={styles.heroNotch}>
              <Tag data-color="main" data-size="sm">v1.2</Tag>
              <span className={styles.notchMeta}>Open Source</span>
            </div>
            <span className={styles.heroKicker}>{t('home.hero.kicker')}</span>
            <Heading level={1} className={styles.heroTitle}>
              {t('home.hero.title')}
            </Heading>
            <Paragraph data-size="lg" className={styles.heroLead}>
              {t('home.hero.lead')}
            </Paragraph>

            <div className={styles.heroActions}>
              <Button onClick={() => setPage('code')} data-size="lg">
                {t('home.hero.primaryCta')}
                <ArrowRightIcon aria-hidden />
              </Button>
              <Button
                variant="secondary"
                data-size="lg"
                onClick={() => setPage('components')}
              >
                {t('home.hero.secondaryCta')}
              </Button>
            </div>

            {/* Specimen shelf: real components from the library on a white plate.
                Decorative — inert keeps them out of the tab order. */}
            <div className={styles.heroSpecimen} aria-hidden="true" inert>
              <Button data-size="sm">{t('home.hero.specimenButton')}</Button>
              <Tag data-color="success" data-size="sm">{t('home.approved')}</Tag>
              <Chip.Radio name="hero-specimen" value="all" defaultChecked>
                {t('home.all')}
              </Chip.Radio>
              <Switch label={t('home.darkModeLabel')} position="start" data-size="sm" />
              <Avatar aria-label="" initials="RK" data-size="sm" />
              <Badge data-color="primary" count={5} maxCount={9} />
              <div className={styles.specimenProgress}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS ROW ("Skala") --- */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <Card variant="default" className={styles.statCard}>
            <CardBlock className={styles.statBlock}>
              <div className={styles.statNumber}>39</div>
              <Paragraph data-size="sm" className={styles.statLabel}>
                {t('header.nav.components')}
              </Paragraph>
            </CardBlock>
          </Card>
          <Card variant="default" className={styles.statCard}>
            <CardBlock className={styles.statBlock}>
              <div className={styles.statNumber}>WCAG 2.1</div>
              <Paragraph data-size="sm" className={styles.statLabel}>
                {t('home.universalDesign')}
              </Paragraph>
            </CardBlock>
          </Card>
          <Card variant="default" className={styles.statCard}>
            <CardBlock className={styles.statBlock}>
              <div className={styles.statNumber}>v1.2</div>
              <Paragraph data-size="sm" className={styles.statLabel}>
                Open Source
              </Paragraph>
            </CardBlock>
          </Card>
        </div>
      </section>

      {/* --- PALETTE STRIP ("Utvidet fargepalett") --- */}
      <section className={styles.paletteSection}>
        <div className="container">
          <div className={styles.paletteHeader}>
            <Heading level={2} className={styles.sectionTitle} data-size="lg">
              {t('home.palette.title')}
            </Heading>
            <Paragraph data-size="lg" className={styles.paletteLead}>
              {t('home.palette.lead')}
            </Paragraph>
          </div>
          <div className={styles.paletteCircles} aria-hidden="true">
            <span className={`${styles.paletteCircle} ${styles.swatchRed}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchMaroon}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchDustyPink}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchPalePink}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchWhite}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchCream}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchPaleGreen}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchGreen}`} />
            <span className={`${styles.paletteCircle} ${styles.swatchPaleBlue}`} />
          </div>
          <button
            type="button"
            className={styles.paletteLink}
            onClick={() => setPage('tokens')}
          >
            {t('home.palette.link')}
            <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
          </button>
        </div>
      </section>

      {/* --- NAVIGATION CARDS --- */}
      <section className={styles.section}>
        <div className="container">
          <Heading level={2} className={styles.sectionTitle} data-size="lg">{t('home.exploreSystem')}</Heading>

          <div className={styles.cardGrid}>
            {/* Components Card */}
            <Card
              variant="default"
              className={styles.navCard}
              onClick={() => setPage('components')}
              role="button"
              tabIndex={0}
            >
              <div className={styles.navCardContent}>
                <div className={`${styles.navCardMedia} ${styles.mediaPink}`}>
                  <ComponentIcon className={styles.iconLarge} aria-hidden />
                </div>
                <div className={styles.navCardText}>
                  <Heading level={3} data-size="md" className={styles.navCardTitle}>{t('header.nav.components')}</Heading>
                  <Paragraph className={styles.navCardDesc}>{t('home.componentsDesc')}</Paragraph>
                </div>
                <span className={styles.navCardLink}>
                  {t('home.openComponents')}
                  <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
                </span>
              </div>
            </Card>

            {/* Design Card */}
            <Card
              variant="default"
              className={styles.navCard}
              onClick={() => setPage('design')}
              role="button"
              tabIndex={0}
            >
              <div className={styles.navCardContent}>
                <div className={`${styles.navCardMedia} ${styles.mediaGreen}`}>
                  <PaletteIcon className={styles.iconLarge} aria-hidden />
                </div>
                <div className={styles.navCardText}>
                  <Heading level={3} data-size="md" className={styles.navCardTitle}>{t('header.nav.design')}</Heading>
                  <Paragraph className={styles.navCardDesc}>{t('home.designDesc')}</Paragraph>
                </div>
                <span className={styles.navCardLink}>
                  {t('home.openDesign')}
                  <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
                </span>
              </div>
            </Card>

            {/* Code Card */}
            <Card
              variant="default"
              className={styles.navCard}
              onClick={() => setPage('code')}
              role="button"
              tabIndex={0}
            >
              <div className={styles.navCardContent}>
                <div className={`${styles.navCardMedia} ${styles.mediaBlue}`}>
                  <CodeIcon className={styles.iconLarge} aria-hidden />
                </div>
                <div className={styles.navCardText}>
                  <Heading level={3} data-size="md" className={styles.navCardTitle}>{t('header.nav.code')}</Heading>
                  <Paragraph className={styles.navCardDesc}>{t('home.codeDesc')}</Paragraph>
                </div>
                <span className={styles.navCardLink}>
                  {t('home.openCode')}
                  <ArrowRightIcon className={styles.arrowIcon} aria-hidden />
                </span>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* --- INTERACTIVE SHOWCASE --- */}
      <section id="showcase" className={styles.showcaseSection}>
        <div className={`container ${styles.showcaseContainer}`}>
          <div className={styles.showcaseIntro}>
            <Heading level={2} data-size="lg" className={styles.sectionTitle}>
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

      {/* --- CONTRIBUTION CTA BANNER (green, replaces the values section) --- */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <Heading level={2} data-size="lg" className={styles.ctaTitle}>
                Vil du bidra til designsystemet?
              </Heading>
              <Paragraph className={styles.ctaBody}>
                Designsystemet er åpen kildekode. Rapporter feil, foreslå forbedringer
                eller bidra med kode og dokumentasjon på GitHub.
              </Paragraph>
            </div>
            <div className={styles.ctaAction}>
              <Button
                variant="secondary"
                data-size="lg"
                onClick={() => window.open('https://github.com/norwegianredcross/DesignSystem', '_blank')}
              >
                GitHub
                <ArrowRightIcon aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
