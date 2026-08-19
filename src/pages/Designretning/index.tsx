import { ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout } from '../../components/ArticleLayout';
// The article typography (maroon headings, link styling, figures) is shared
// with the Design page so the two doc surfaces stay visually identical.
import layout from '../Design/styles.module.css';
import styles from './styles.module.css';

/** Illustration exported from the "Rodekors.no Designretning" deck. */
const Fig = ({ src, alt }: { src: string; alt: string }) => (
  <figure className={styles.illustration}>
    <img src={src} alt={alt} loading="lazy" />
  </figure>
);

/** Chapter divider mirroring the deck's section slides. */
const Chapter = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className={styles.chapter}>
    <Heading level={2} data-size="lg" className={styles.chapterTitle}>{title}</Heading>
    {children}
  </section>
);

const Sub = ({ title, children }: { title?: string; children: ReactNode }) => (
  <div className={styles.subSection}>
    {title && <Heading level={3} data-size="md" style={{ marginBottom: 'var(--ds-size-3)' }}>{title}</Heading>}
    {children}
  </div>
);

/**
 * The full design direction on one page: every principle, approach and
 * illustration from the approved "Rodekors.no Designretning" deck.
 */
export const DesignretningPage = () => {
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
  const buttons = ['primaryBtn', 'secondaryBtn', 'tertiaryBtn'] as const;
  const p = { marginBottom: 'var(--ds-size-4)' } as const;

  return (
    <main className={`container ${layout.docContent} ${styles.pageContent}`}>
      <ArticleLayout
        title={t('design.direction.title')}
        intro={t('design.direction.intro')}
        category={t('design.sidebar.designDirection')}
      >
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

        <Chapter title={t('design.direction.chapterWarm')}>
          <Sub title={t('design.direction.colorSystemTitle')}>
            <Paragraph style={p}>{t('design.direction.colorSystemText')}</Paragraph>
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
        </Chapter>

        <Chapter title={t('design.direction.chapterRedThread')}>
          <Sub title={t('design.direction.redWhyTitle')}>
            <Paragraph style={p}>{t('design.direction.redWhyText')}</Paragraph>
          </Sub>
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
        </Chapter>

        <Chapter title={t('design.direction.chapterPeople')}>
          <Sub title={t('design.direction.redWhyTitle')}>
            <Paragraph style={p}>{t('design.direction.peopleWhyText')}</Paragraph>
          </Sub>
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
        </Chapter>

        <Chapter title={t('design.direction.chapterSocial')}>
          <Sub title={t('design.direction.redWhyTitle')}>
            <Paragraph style={p}>{t('design.direction.socialWhyText1')}</Paragraph>
            <Paragraph style={p}>{t('design.direction.socialWhyText2')}</Paragraph>
          </Sub>
          <Sub title={t('design.direction.shareTitle')}>
            <Paragraph style={p}>{t('design.direction.shareText')}</Paragraph>
          </Sub>
          <Sub title={t('design.direction.noDuplicateTitle')}>
            <Paragraph style={p}>{t('design.direction.noDuplicateText')}</Paragraph>
          </Sub>
        </Chapter>

        <Chapter title={t('design.direction.chapterProgress')}>
          <Sub title={t('design.direction.redWhyTitle')}>
            <Paragraph style={p}>{t('design.direction.progressWhyText1')}</Paragraph>
            <Paragraph style={p}>{t('design.direction.progressWhyText2')}</Paragraph>
          </Sub>
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
              <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('design.direction.actionOrientedTitle')}</Heading>
              <Paragraph>{t('design.direction.actionOrientedText')}</Paragraph>
            </CardBlock>
          </Card>
        </Chapter>
      </ArticleLayout>
    </main>
  );
};
