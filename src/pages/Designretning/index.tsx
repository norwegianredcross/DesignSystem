import { ReactNode, useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@navikt/aksel-icons';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import { GraphicElement, type GraphicElementShape } from '../../components/GraphicElement';
// The doc layout (sidebar, article typography, figures) is shared with the
// Design page so the doc surfaces stay visually identical.
import layout from '../Design/styles.module.css';
import styles from './styles.module.css';

const p = { marginBottom: 'var(--ds-size-4)' } as const;

type Nav = (id: string) => void;

/**
 * The chapters in reading order. Each carries one of the red-thread shapes
 * derived from the cross — the page decorates itself with the same graphic
 * system it documents (the heart belongs to "Mennesker i fokus").
 */
const CHAPTERS: { id: string; shape: GraphicElementShape; labelKey: string }[] = [
  { id: 'intro', shape: 'angle', labelKey: 'design.sidebar.directionOverview' },
  { id: 'varm', shape: 'square', labelKey: 'design.direction.chapterWarm' },
  { id: 'rod-trad', shape: 'corner', labelKey: 'design.direction.chapterRedThread' },
  { id: 'mennesker-i-fokus', shape: 'heart', labelKey: 'design.direction.chapterPeople' },
  { id: 'sosial-tilstedevaerelse', shape: 'tee', labelKey: 'design.direction.chapterSocial' },
  { id: 'framdrift-og-effekt', shape: 'bar', labelKey: 'design.direction.chapterProgress' },
];

/**
 * Article shell that applies the direction's own principles: a warm tinted
 * hero panel (Varm), a decorative red-thread shape per chapter (Rød tråd —
 * never interactive, per the guideline), and previous/next chapter links in
 * the text-button pattern so reading the direction has visible progression
 * (Framdrift).
 */
const DirectionArticle = ({ chapterId, title, intro, nav, children }: {
  chapterId: string;
  title: string;
  intro: string;
  nav: Nav;
  children: ReactNode;
}) => {
  const { t } = useLanguage();
  const idx = CHAPTERS.findIndex((c) => c.id === chapterId);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : undefined;
  const next = idx >= 0 && idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : undefined;
  const kicker = idx <= 0
    ? t('design.sidebar.designDirection')
    : t('design.direction.chapterLabel').replace('{n}', String(idx)).replace('{total}', String(CHAPTERS.length - 1));
  return (
    <div className="article-max-width animate-fade-in">
      <header className={styles.hero}>
        <div>
          <div className={styles.kicker}>{kicker}</div>
          <Heading level={1} data-size="xl" className={styles.heroTitle}>{title}</Heading>
          <Paragraph data-size="lg" className={styles.heroIntro}>{intro}</Paragraph>
        </div>
        <GraphicElement shape={CHAPTERS[Math.max(idx, 0)].shape} size="lg" aria-hidden className={styles.heroShape} />
      </header>
      {children}
      <nav className={styles.chapterNav} aria-label={t('design.direction.chapterNavLabel')}>
        {prev ? (
          <a href="#" className={layout.textButton} onClick={(e) => { e.preventDefault(); nav(prev.id); }}>
            <ArrowLeftIcon aria-hidden />
            {t(prev.labelKey)}
          </a>
        ) : <span />}
        {next && (
          <a href="#" className={layout.textButton} onClick={(e) => { e.preventDefault(); nav(next.id); }}>
            {t(next.labelKey)}
            <ArrowRightIcon aria-hidden />
          </a>
        )}
      </nav>
    </div>
  );
};

/** Illustration exported from the "Rodekors.no Designretning" deck. */
const Fig = ({ src, alt }: { src: string; alt: string }) => (
  <figure className={styles.illustration}>
    <img src={src} alt={alt} loading="lazy" />
  </figure>
);

const Sub = ({ title, children }: { title?: string; children: ReactNode }) => (
  <div className={styles.subSection}>
    {title && <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-3)' }}>{title}</Heading>}
    {children}
  </div>
);

/** Principles, the six approaches and the stable elements (deck slides 1-6). */
const PrinsipperContent = ({ nav }: { nav: Nav }) => {
  const { t } = useLanguage();
  const principles = [
    { title: t('design.direction.trustworthyTitle'), text: t('design.direction.trustworthyText') },
    { title: t('design.direction.clearTitle'), text: t('design.direction.clearText') },
    { title: t('design.direction.humanTitle'), text: t('design.direction.humanText') },
  ];
  const means = [
    { title: t('design.direction.warmTitle'), text: t('design.direction.warmText'), image: '/DesignretningVarmPalette.png' },
    { title: t('design.direction.scaleTitle'), text: t('design.direction.scaleText'), image: '/DesignretningSkala.png' },
    { title: t('design.direction.redThreadTitle'), text: t('design.direction.redThreadText'), image: '/DesignretningRodTradKors.png' },
    { title: t('design.direction.storytellingTitle'), text: t('design.direction.storytellingText'), image: '/DesignretningMenneskerIFokus.png' },
    { title: t('design.direction.socialTitle'), text: t('design.direction.socialText'), image: '/DesignretningSosial.png' },
    { title: t('design.direction.progressTitle'), text: t('design.direction.progressText'), image: '/DesignretningEffekt.png' },
  ];
  return (
    <DirectionArticle
      chapterId="intro"
      title={t('design.direction.title')}
      intro={t('design.direction.intro')}
      nav={nav}
    >
      <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-8)', color: 'var(--ds-color-neutral-text-subtle)' }}>
        {t('design.direction.approvalNote')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.direction.principlesTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>{t('design.direction.principlesIntro')}</Paragraph>
      <div className={styles.principleGrid}>
        {principles.map((principle) => (
          <Card key={principle.title} variant="tinted" data-color="primary-color-red" className={styles.principleCard}>
            <CardBlock>
              <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{principle.title}</Heading>
              <Paragraph data-size="sm">{principle.text}</Paragraph>
            </CardBlock>
          </Card>
        ))}
      </div>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.direction.feelsTitle')}</Heading>
      <div className={styles.feelsRow}>
        {(['feel1', 'feel2', 'feel3', 'feel4', 'feel5', 'feel6'] as const).map((key) => (
          <span key={key} className={styles.feelPill}>{t(`design.direction.${key}`)}</span>
        ))}
      </div>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-10)' }}>{t('design.direction.meansTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>{t('design.direction.meansIntro')}</Paragraph>
      {means.map((item) => (
        <div key={item.title} className={styles.meansItem}>
          <div>
            <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{item.title}</Heading>
            <Paragraph>{item.text}</Paragraph>
          </div>
          <figure className={styles.meansIllustration}>
            <img src={item.image} alt={item.title} loading="lazy" />
          </figure>
        </div>
      ))}

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-6)' }}>{t('design.direction.stableTitle')}</Heading>
      <Paragraph style={p}>{t('design.direction.stableText1')}</Paragraph>
      <Paragraph style={p}>{t('design.direction.stableText2')}</Paragraph>
      <Fig src="/DesignretningUendredeElementer.png" alt={t('design.direction.stableTitle')} />
    </DirectionArticle>
  );
};

/** Warm colors and typography (deck slides 7-16). */
const VarmContent = ({ nav }: { nav: Nav }) => {
  const { t } = useLanguage();
  const buttons = ['primaryBtn', 'secondaryBtn', 'tertiaryBtn'] as const;
  return (
    <DirectionArticle
      chapterId="varm"
      title={t('design.direction.chapterWarm')}
      intro={t('design.direction.colorSystemText')}
      nav={nav}
    >
      <Sub>
        <Fig src="/DesignretningVarmAvrunding.png" alt={t('design.direction.warmTitle')} />
      </Sub>
      <Sub title={t('design.direction.colorBalanceTitle')}>
        <Paragraph style={p}>{t('design.direction.colorBalanceText')}</Paragraph>
        <Fig src="/DesignretningFargebalanse.png" alt={t('design.direction.colorBalanceTitle')} />
      </Sub>
      <Sub title={t('design.direction.paletteTitle')}>
        <Paragraph style={p}>{t('design.direction.paletteText')}</Paragraph>
        <Fig src="/DesignretningUtvidetPalett.png" alt={t('design.direction.paletteTitle')} />
      </Sub>
      <Sub title={t('design.direction.hierarchyTitle')}>
        <Paragraph style={p}>{t('design.direction.hierarchyText')}</Paragraph>
        {buttons.map((key) => (
          <Paragraph key={key} style={p}>
            <strong>{t(`design.direction.${key}Title`)}:</strong>{' '}
            {t(`design.direction.${key}Text`)}
          </Paragraph>
        ))}
        <Fig src="/DesignretningFargehierarki1.png" alt={t('design.direction.hierarchyTitle')} />
        <Paragraph style={p}>
          <strong>{t('design.direction.textButtonTitle')}:</strong>{' '}
          {t('design.direction.textButtonText')}
        </Paragraph>
        <Fig src="/DesignretningTextButton.png" alt={t('design.direction.textButtonTitle')} />
        <Paragraph style={p}>
          <strong>{t('design.direction.textLinkTitle')}:</strong>{' '}
          {t('design.direction.textLinkText')}
        </Paragraph>
        <Fig src="/DesignretningTextLink.png" alt={t('design.direction.textLinkTitle')} />
      </Sub>
      <Sub title={t('design.direction.typographyTitle')}>
        <Paragraph style={p}>{t('design.direction.typographyText1')}</Paragraph>
        <Fig src="/DesignretningTypografiSerif.png" alt={t('design.direction.typographyTitle')} />
        <Paragraph style={p}>{t('design.direction.typographyText2')}</Paragraph>
        <Fig src="/DesignretningTypografiSans.png" alt={t('design.direction.typographyTitle')} />
        <Paragraph style={p}>{t('design.direction.typographyText3')}</Paragraph>
      </Sub>
      <Sub title={t('design.direction.adaptTitle')}>
        <Paragraph style={p}>{t('design.direction.adaptText')}</Paragraph>
        <Fig src="/DesignretningTilpasninger.png" alt={t('design.direction.adaptTitle')} />
      </Sub>
    </DirectionArticle>
  );
};

/** The derived cross-form graphic system (deck slides 17-21). */
const RodTradContent = ({ nav }: { nav: Nav }) => {
  const { t } = useLanguage();
  return (
    <DirectionArticle
      chapterId="rod-trad"
      title={t('design.direction.chapterRedThread')}
      intro={t('design.direction.redWhyText')}
      nav={nav}
    >
      <Sub title={t('design.direction.redExplainTitle')}>
        <Paragraph style={p}>{t('design.direction.redExplainText')}</Paragraph>
        <Fig src="/DesignretningRodTradForklaring.png" alt={t('design.direction.redExplainTitle')} />
      </Sub>
      <Sub title={t('design.direction.redElementsTitle')}>
        <Paragraph style={p}>{t('design.direction.redElementsText')}</Paragraph>
        <Fig src="/DesignretningGrafiskeElementer.png" alt={t('design.direction.redElementsTitle')} />
      </Sub>
      <Sub title={t('design.direction.redImportantTitle')}>
        <Paragraph style={p}>{t('design.direction.redImportantText')}</Paragraph>
        <Fig src="/DesignretningRodTradViktig.png" alt={t('design.direction.redImportantTitle')} />
      </Sub>
    </DirectionArticle>
  );
};

/** Real people and stories as a load-bearing element (deck slides 22-26). */
const MenneskerContent = ({ nav }: { nav: Nav }) => {
  const { t } = useLanguage();
  return (
    <DirectionArticle
      chapterId="mennesker-i-fokus"
      title={t('design.direction.chapterPeople')}
      intro={t('design.direction.peopleWhyText')}
      nav={nav}
    >
      <Sub title={t('design.direction.realPeopleTitle')}>
        <Paragraph style={p}>{t('design.direction.realPeopleText')}</Paragraph>
        <Fig src="/DesignretningEkteMennesker.png" alt={t('design.direction.realPeopleTitle')} />
      </Sub>
      <Sub title={t('design.direction.quoteExampleTitle')}>
        <Paragraph style={p}>{t('design.direction.quoteExampleText')}</Paragraph>
        <Fig src="/DesignretningSitatkort.png" alt={t('design.direction.quoteExampleTitle')} />
      </Sub>
      <Sub title={t('design.direction.articleExampleTitle')}>
        <Paragraph style={p}>{t('design.direction.articleExampleText')}</Paragraph>
        <Fig src="/DesignretningArtikkelEksempel.png" alt={t('design.direction.articleExampleTitle')} />
      </Sub>
    </DirectionArticle>
  );
};

/** Social-media principles inside the site (deck slides 27-30). */
const SosialContent = ({ nav }: { nav: Nav }) => {
  const { t } = useLanguage();
  return (
    <DirectionArticle
      chapterId="sosial-tilstedevaerelse"
      title={t('design.direction.chapterSocial')}
      intro={t('design.direction.socialWhyText1')}
      nav={nav}
    >
      <Paragraph style={p}>{t('design.direction.socialWhyText2')}</Paragraph>
      <Sub title={t('design.direction.shareTitle')}>
        <Paragraph style={p}>{t('design.direction.shareText')}</Paragraph>
        <Fig src="/DesignretningSosial.png" alt={t('design.direction.shareTitle')} />
      </Sub>
      <Sub title={t('design.direction.noDuplicateTitle')}>
        <Paragraph style={p}>{t('design.direction.noDuplicateText')}</Paragraph>
        <Fig src="/DesignretningDistribusjon.png" alt={t('design.direction.noDuplicateTitle')} />
      </Sub>
    </DirectionArticle>
  );
};

/** Visible progress and impact (deck slides 31-37). */
const FramdriftContent = ({ nav }: { nav: Nav }) => {
  const { t } = useLanguage();
  return (
    <DirectionArticle
      chapterId="framdrift-og-effekt"
      title={t('design.direction.chapterProgress')}
      intro={t('design.direction.progressWhyText1')}
      nav={nav}
    >
      <Paragraph style={p}>{t('design.direction.progressWhyText2')}</Paragraph>
      <Sub title={t('design.direction.campaignTitle')}>
        <Paragraph style={p}>{t('design.direction.campaignText')}</Paragraph>
        <Fig src="/DesignretningFramdrift.png" alt={t('design.direction.campaignTitle')} />
      </Sub>
      <Sub title={t('design.direction.thanksTitle')}>
        <Paragraph style={p}>{t('design.direction.thanksText')}</Paragraph>
        <Fig src="/DesignretningTakk.png" alt={t('design.direction.thanksTitle')} />
      </Sub>
      <Sub title={t('design.direction.activityTitle')}>
        <Paragraph style={p}>{t('design.direction.activityText')}</Paragraph>
        <Fig src="/DesignretningAktivitetssider.png" alt={t('design.direction.activityTitle')} />
      </Sub>
      <Sub title={t('design.direction.localTitle')}>
        <Paragraph style={p}>{t('design.direction.localText')}</Paragraph>
        <Fig src="/DesignretningLokaleResultater.png" alt={t('design.direction.localTitle')} />
      </Sub>
      <Card variant="tinted" data-color="primary-color-red" className={styles.principleCard}>
        <CardBlock>
          <Heading level={2} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.direction.actionOrientedTitle')}</Heading>
          <Paragraph>{t('design.direction.actionOrientedText')}</Paragraph>
        </CardBlock>
      </Card>
    </DirectionArticle>
  );
};

interface DesignretningPageProps {
  section?: string;
  setPage?: (page: string) => void;
}

export const DesignretningPage = ({ section, setPage }: DesignretningPageProps) => {
  const { t } = useLanguage();
  const [activeDirectionPage, setActiveDirectionPage] = useState(section || 'intro');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // The URL hash is the source of the active article: prop changes
  // (deep links, back/forward) are synced here in an effect — never during
  // render, which locked all page navigation after a deep link.
  useEffect(() => {
    setActiveDirectionPage(section || 'intro');
  }, [section]);

  // Sidebar navigation writes the hash (designretning/<article>) so links can
  // be shared and the back button works; without setPage we fall back to
  // plain local state.
  const navigate = (id: string) => {
    if (setPage) {
      setPage(id === 'intro' ? 'designretning' : `designretning/${id}`);
    } else {
      setActiveDirectionPage(id);
    }
    // The chapter nav sits at the bottom of each article, so a chapter
    // switch must bring the reader back to the top of the new one.
    window.scrollTo({ top: 0 });
  };

  const menuItems = CHAPTERS.map((chapter) => ({ label: t(chapter.labelKey), id: chapter.id }));

  return (
    <main className={`container ${layout.docLayout}`}>
      <button
        className={layout.sidebarToggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-expanded={sidebarOpen}
      >
        {t('design.sidebar.designDirection')}
      </button>

      <aside className={`${layout.sidebar} ${!sidebarOpen ? layout.sidebarCollapsed : ''}`}>
        <nav className={layout.nav}>
          <div className={layout.group}>
            <div className={layout.groupTitle}>{t('design.sidebar.designDirection')}</div>
            <ul className={layout.list}>
              {menuItems.map((item) => (
                <li key={item.id} className={layout.listItem}>
                  <button
                    type="button"
                    className={`${layout.link} ${activeDirectionPage === item.id ? layout.linkActive : ''}`}
                    onClick={() => navigate(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <div className={layout.docContent}>
        {activeDirectionPage === 'intro' ? <PrinsipperContent nav={navigate} /> :
         activeDirectionPage === 'varm' ? <VarmContent nav={navigate} /> :
         activeDirectionPage === 'rod-trad' ? <RodTradContent nav={navigate} /> :
         activeDirectionPage === 'mennesker-i-fokus' ? <MenneskerContent nav={navigate} /> :
         activeDirectionPage === 'sosial-tilstedevaerelse' ? <SosialContent nav={navigate} /> :
         activeDirectionPage === 'framdrift-og-effekt' ? <FramdriftContent nav={navigate} /> :
         <PrinsipperContent nav={navigate} />
        }
      </div>
    </main>
  );
};
