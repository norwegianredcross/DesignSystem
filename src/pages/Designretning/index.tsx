import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout } from '../../components/ArticleLayout';
// The doc layout (sidebar, article typography, figures) is shared with the
// Design page so the two doc sections stay visually identical.
import layout from '../Design/styles.module.css';
import styles from './styles.module.css';

/**
 * Overview article: the three principles and the six approaches from the
 * approved "Rodekors.no Designretning" deck, using the deck's own
 * illustrations. Each approach gets its own in-depth article in this section
 * as they are written.
 */
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
      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.direction.principlesTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>{t('design.direction.principlesIntro')}</Paragraph>
      <div className={styles.principleGrid} style={{ marginBottom: 'var(--ds-size-10)' }}>
        {principles.map((principle) => (
          <Card key={principle.title} variant="tinted" data-color="primary-color-red" className={styles.principleCard}>
            <CardBlock>
              <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{principle.title}</Heading>
              <Paragraph data-size="sm">{principle.text}</Paragraph>
            </CardBlock>
          </Card>
        ))}
      </div>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.direction.meansTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>{t('design.direction.meansIntro')}</Paragraph>
      {means.map((item) => (
        <div key={item.title} className={styles.meansItem}>
          <div>
            <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{item.title}</Heading>
            <Paragraph>{item.text}</Paragraph>
          </div>
          <figure className={styles.meansIllustration}>
            <img src={item.image} alt={item.title} />
          </figure>
        </div>
      ))}

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-6)' }}>{t('design.direction.stableTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.direction.stableText1')}</Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>{t('design.direction.stableText2')}</Paragraph>
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

  // Grows one entry per approach as the in-depth articles are written.
  const menuItems: { label: string; id: string }[] = [
    { label: t('design.sidebar.directionOverview'), id: 'intro' },
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
         <PrinsipperContent />
        }
      </div>
    </main>
  );
};
