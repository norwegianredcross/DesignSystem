import { ReactNode, useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout } from '../../components/ArticleLayout';
// The doc layout (sidebar, article typography, figures) is shared with the
// Design page so the doc surfaces stay visually identical.
import layout from '../Design/styles.module.css';
import styles from './styles.module.css';

const p = { marginBottom: 'var(--ds-size-4)' } as const;

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
const PrinsipperContent = () => {
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
    <ArticleLayout
      title={t('design.direction.title')}
      intro={t('design.direction.intro')}
      category={t('design.sidebar.designDirection')}
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
    </ArticleLayout>
  );
};

/** Warm colors and typography (deck slides 7-16). */
const VarmContent = () => {
  const { t } = useLanguage();
  const buttons = ['primaryBtn', 'secondaryBtn', 'tertiaryBtn'] as const;
  return (
    <ArticleLayout
      title={t('design.direction.chapterWarm')}
      intro={t('design.direction.colorSystemText')}
      category={t('design.sidebar.designDirection')}
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
    </ArticleLayout>
  );
};

/** The derived cross-form graphic system (deck slides 17-21). */
const RodTradContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout
      title={t('design.direction.chapterRedThread')}
      intro={t('design.direction.redWhyText')}
      category={t('design.sidebar.designDirection')}
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
    </ArticleLayout>
  );
};

/** Real people and stories as a load-bearing element (deck slides 22-26). */
const MenneskerContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout
      title={t('design.direction.chapterPeople')}
      intro={t('design.direction.peopleWhyText')}
      category={t('design.sidebar.designDirection')}
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
    </ArticleLayout>
  );
};

/** Social-media principles inside the site (deck slides 27-30). */
const SosialContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout
      title={t('design.direction.chapterSocial')}
      intro={t('design.direction.socialWhyText1')}
      category={t('design.sidebar.designDirection')}
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
    </ArticleLayout>
  );
};

/** Visible progress and impact (deck slides 31-37). */
const FramdriftContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout
      title={t('design.direction.chapterProgress')}
      intro={t('design.direction.progressWhyText1')}
      category={t('design.sidebar.designDirection')}
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
    </ArticleLayout>
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
  };

  const menuItems: { label: string; id: string }[] = [
    { label: t('design.sidebar.directionOverview'), id: 'intro' },
    { label: t('design.direction.chapterWarm'), id: 'varm' },
    { label: t('design.direction.chapterRedThread'), id: 'rod-trad' },
    { label: t('design.direction.chapterPeople'), id: 'mennesker-i-fokus' },
    { label: t('design.direction.chapterSocial'), id: 'sosial-tilstedevaerelse' },
    { label: t('design.direction.chapterProgress'), id: 'framdrift-og-effekt' },
  ];

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
        {activeDirectionPage === 'intro' ? <PrinsipperContent /> :
         activeDirectionPage === 'varm' ? <VarmContent /> :
         activeDirectionPage === 'rod-trad' ? <RodTradContent /> :
         activeDirectionPage === 'mennesker-i-fokus' ? <MenneskerContent /> :
         activeDirectionPage === 'sosial-tilstedevaerelse' ? <SosialContent /> :
         activeDirectionPage === 'framdrift-og-effekt' ? <FramdriftContent /> :
         <PrinsipperContent />
        }
      </div>
    </main>
  );
};
