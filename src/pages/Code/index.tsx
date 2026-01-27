import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout, ArticleImage } from '../../components/ArticleLayout';
import styles from './styles.module.css';

// --- CONTENT COMPONENTS ---

const CodeBlock = ({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) => (
  <pre className={`${styles.codeBlock}${className ? ` ${className}` : ''}`} style={style}>
    <code>{children}</code>
  </pre>
);

const OverviewContent = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.overview.title')} intro={t('code.overview.intro')} category={t('code.sidebar.overview')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.overview.text1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.overview.text2')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.overview.text3')}
      </Paragraph>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ds-size-6)' }}>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">{t('code.overview.getStartedCard')}</Heading>
            <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.overview.getStartedDesc')}</Paragraph>
            <Link href="https://github.com/norwegianredcross/DesignSystem" target="_blank" rel="noopener noreferrer">{t('code.overview.getStartedLink')}</Link>
          </CardBlock>
        </Card>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">{t('code.overview.designTokensCard')}</Heading>
            <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.overview.designTokensDesc')}</Paragraph>
            <Link href="#" onClick={(e) => {e.preventDefault(); setActivePage('design-tokens')}}>{t('code.overview.designTokensLink')}</Link>
          </CardBlock>
        </Card>
        <Card variant="tinted" data-color="neutral">
          <CardBlock>
            <Heading level={3} data-size="sm">{t('code.overview.workflowCard')}</Heading>
            <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.overview.workflowDesc')}</Paragraph>
            <Link href="#" onClick={(e) => {e.preventDefault(); setActivePage('figma-mcp')}}>{t('code.overview.workflowLink')}</Link>
          </CardBlock>
        </Card>
      </div>
    </ArticleLayout>
  );
};

const GettingStartedContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.getStarted.title')} category={t('code.sidebar.overview')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.getStarted.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.getStarted.installationTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.getStarted.installationText')}
      </Paragraph>
      <Link href="https://github.com/norwegianredcross/DesignSystem" target="_blank" rel="noopener noreferrer" style={{ marginBottom: 'var(--ds-size-4)', display: 'inline-block' }}>{t('code.getStarted.githubLink')}</Link>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.npmTitle')}</Heading>
      <CodeBlock>npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.yarnTitle')}</Heading>
      <CodeBlock>yarn add rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.pnpmTitle')}</Heading>
      <CodeBlock>pnpm add rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.getStarted.note')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.getStarted.stylesTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.getStarted.stylesText1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        <strong>{t('code.getStarted.stylesText2').split(':')[0]}:</strong> {t('code.getStarted.stylesText2').split(':').slice(1).join(':').trim()}
      </Paragraph>
      
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.appRouterExample')}</Heading>
    <CodeBlock>
{`import './globals.css'; // Dine egne globale stiler (hvis noen)
import '@digdir/designsystemet-css/index.css'; // Grunnstilark for komponenter
import 'rk-design-tokens/design-tokens-build/theme.css'; // Røde Kors tema

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}`}
    </CodeBlock>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.pagesRouterExample')}</Heading>
    <CodeBlock>
{`import '../styles/globals.css'; // Dine egne globale stiler (hvis noen)
import '@digdir/designsystemet-css/index.css'; // Grunnstilark for komponenter
import 'rk-design-tokens/design-tokens-build/theme.css'; // Røde Kors tema
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;`}
    </CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.getStarted.usageTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.getStarted.usageText')}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.importTitle')}</Heading>
    <CodeBlock>
{`import { Alert } from 'rk-designsystem'; // Importer nødvendige komponenter

function MyComponent() {
  return (
    <>
      <Alert variant="info" onClose={() => console.log('Alert closed!')}>
        Dette er en informasjonsmelding fra Røde Kors Designsystem.
      </Alert>
    </>
  );
}`}
    </CodeBlock>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.getStarted.nextjsExample')}</Heading>
    <CodeBlock>
{`'use client'; // Husk 'use client' for interaktive komponenter i App Router
import React from 'react';
import { Alert } from 'rk-designsystem'; // Importer komponentene du trenger

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Røde Kors Designsystem Eksempel
      </h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Varsler</h2>
        {/* Røde Kors Designsystem Varsler */}
        <Alert variant="success">
          <p>
            Velkommen! Denne meldingen er stylet med det offisielle Røde Kors-temaet.
          </p>
        </Alert>
        <Alert variant="warning" className="mt-4">
          <p>
            Viktig informasjon ved bruk av det offisielle Røde Kors-temaet.
          </p>
        </Alert>
      </section>
      {/* Flere Røde Kors-komponenter kan legges til her etter behov */}
    </div>
  );
}`}
    </CodeBlock>
      <Paragraph>
        {t('code.getStarted.updateText')}
      </Paragraph>
      <CodeBlock>npm update rk-design-tokens</CodeBlock>
    </ArticleLayout>
  );
};

const DesignTokensContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.designTokens.title')} category={t('code.sidebar.overview')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.designTokens.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.designTokens.howToTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.designTokens.howToText')}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.designTokens.installTitle')}</Heading>
      <CodeBlock>npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
      
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.designTokens.importTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.designTokens.importText')}
      </Paragraph>
    <CodeBlock>
{`// src/app/layout.tsx (eller tilsvarende)
import '@digdir/designsystemet-css/index.css';         // 1. Grunnstiler
import 'rk-design-tokens/design-tokens-build/brand-1.css'; // 2. Røde Kors tema

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}`}
    </CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.designTokens.workflowTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.designTokens.workflowText')}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.designTokens.phase1Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.designTokens.phase1Item1').split(':')[0]}:</strong> {t('code.designTokens.phase1Item1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase1Item2').split(':')[0]}:</strong> {t('code.designTokens.phase1Item2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase1Item3').split(':')[0]}:</strong> {t('code.designTokens.phase1Item3').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase1Item4').split(':')[0]}:</strong> {t('code.designTokens.phase1Item4').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase1Item5').split(':')[0]}:</strong> {t('code.designTokens.phase1Item5').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase1Item6').split(':')[0]}:</strong> {t('code.designTokens.phase1Item6').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.designTokens.phase2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        <strong>{t('code.designTokens.phase2Text').split(':')[0]}:</strong> {t('code.designTokens.phase2Text').split(':').slice(1).join(':').trim()}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.designTokens.phase3Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.designTokens.phase3Item1').split(':')[0]}:</strong> {t('code.designTokens.phase3Item1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase3Item2').split(':')[0]}:</strong> {t('code.designTokens.phase3Item2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase3Item3').split(':')[0]}:</strong> {t('code.designTokens.phase3Item3').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.designTokens.phase3Item4').split(':')[0]}:</strong> {t('code.designTokens.phase3Item4').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>
      
    </ArticleLayout>
  );
};

const FontsContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.fonts.title')} category={t('code.sidebar.overview')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.fonts.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.fonts.howToTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.fonts.howToText')}
      </Paragraph>
      <CodeBlock>
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">`}
      </CodeBlock>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.fonts.nextjsTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.fonts.nextjsText')}
      </Paragraph>
      <CodeBlock>
{`// src/app/layout.tsx
import '@digdir/designsystemet-css/index.css';
import 'rk-design-tokens/design-tokens-build/theme.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
      </CodeBlock>

      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.fonts.nextjsPagesText')}
      </Paragraph>
      <CodeBlock>
{`// pages/_app.tsx eller pages/_document.tsx
import '../styles/globals.css';
import '@digdir/designsystemet-css/index.css';
import 'rk-design-tokens/design-tokens-build/theme.css';

// I _document.tsx:
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="no">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}`}
      </CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.fonts.afterLoadTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.fonts.afterLoadText')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.fonts.cssVariablesTitle')}</Heading>
      <Paragraph>
        {t('code.fonts.cssVariablesText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const IconsContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.icons.title')} category={t('code.sidebar.overview')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.icons.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.icons.installTitle')}</Heading>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>npm</Heading>
      <CodeBlock>npm install @navikt/aksel-icons</CodeBlock>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>yarn</Heading>
      <CodeBlock>yarn add @navikt/aksel-icons</CodeBlock>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>pnpm</Heading>
      <CodeBlock>pnpm add @navikt/aksel-icons</CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.icons.importTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.icons.importText')}
      </Paragraph>
    <CodeBlock>
{`import { AirplaneIcon, NewspaperIcon } from '@navikt/aksel-icons';
import { Button, Tag } from 'rk-designsystem';

export function IconsExample() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {/* Ikon + tekst: skjul ikon for skjermlesere */}
      <Button>
        <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
        Fly
      </Button>

      {/* Ikon inni Tag */}
      <Tag data-color="info">
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <NewspaperIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
          Ny
        </span>
      </Tag>
    </div>
  );
}`}
    </CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.icons.accessibilityTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.icons.accessibilityItem1').split(':')[0]}:</strong> {t('code.icons.accessibilityItem1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.icons.accessibilityItem2').split(':')[0]}:</strong> {t('code.icons.accessibilityItem2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.icons.accessibilityItem3').split(':')[0]}:</strong> {t('code.icons.accessibilityItem3').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.icons.accessibilityItem4').split(':')[0]}:</strong> {t('code.icons.accessibilityItem4').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.icons.performanceTitle')}</Heading>
      <Paragraph>
        {t('code.icons.performanceText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const ContributingContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.contributing.title')} category={t('code.sidebar.contribute')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.contributing.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.contributing.getStartedTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.getStartedText')}</Paragraph>
    <CodeBlock>
{`# 1. Installer avhengigheter
pnpm i

# 2. Bygg alle pakker
pnpm build

# 3. Start den lokale Storybook-serveren
pnpm storybook`}
    </CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.contributing.principlesTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.principlesText')}</Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.contributing.principlesA11y').split(':')[0]}:</strong> {t('code.contributing.principlesA11y').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.principlesReuse').split(':')[0]}:</strong> {t('code.contributing.principlesReuse').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.principlesConsistency').split(':')[0]}:</strong> {t('code.contributing.principlesConsistency').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.principlesDocs').split(':')[0]}:</strong> {t('code.contributing.principlesDocs').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.contributing.whenTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.contributing.whenText')}
      </Paragraph>
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.wrappedSimpleTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.contributing.wrappedSimpleWhat').split(':')[0]}:</strong> {t('code.contributing.wrappedSimpleWhat').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.wrappedSimpleWhen').split(':')[0]}:</strong> {t('code.contributing.wrappedSimpleWhen').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.wrappedSimpleExample').split(':')[0]}:</strong> {t('code.contributing.wrappedSimpleExample').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.wrappedStyledTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.contributing.wrappedStyledWhat').split(':')[0]}:</strong> {t('code.contributing.wrappedStyledWhat').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.wrappedStyledWhen').split(':')[0]}:</strong> {t('code.contributing.wrappedStyledWhen').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.wrappedStyledExample').split(':')[0]}:</strong> {t('code.contributing.wrappedStyledExample').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.customTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.contributing.customWhat').split(':')[0]}:</strong> {t('code.contributing.customWhat').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.customWhen').split(':')[0]}:</strong> {t('code.contributing.customWhen').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.customExample').split(':')[0]}:</strong> {t('code.contributing.customExample').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.contributing.fileStructureTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.contributing.fileStructureText')}
      </Paragraph>
    <CodeBlock>
{`src/
└── components/
    └── MyNewComponent/
        ├── index.ts                 // Public API - eksporterer komponenten og props
        ├── MyNewComponent.tsx       // React komponentlogikk og JSX
        ├── MyNewComponent.stories.tsx // Storybook stories for dokumentasjon
        ├── styles.module.css        // Scoped CSS (kun for custom components)
        └── MyNewComponent.test.tsx  // (Valgfritt men anbefalt) Unit-tester`}
    </CodeBlock>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.contributing.codingGuidelinesTitle')}</Heading>
      
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.componentLogicTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.contributing.logicTypeScript').split(':')[0]}:</strong> {t('code.contributing.logicTypeScript').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.logicForwardRef').split(':')[0]}:</strong> {t('code.contributing.logicForwardRef').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.logicA11y')}</strong>
            <ul style={{ marginTop: 'var(--ds-size-2)', paddingLeft: 'var(--ds-size-4)' }}>
                <li>{t('code.contributing.logicA11yItem1')}</li>
                <li>{t('code.contributing.logicA11yItem2')}</li>
                <li>{t('code.contributing.logicA11yItem3')}</li>
                <li>{t('code.contributing.logicA11yItem4')}</li>
            </ul>
        </List.Item>
        <List.Item><strong>{t('code.contributing.logicControlled').split(':')[0]}:</strong> {t('code.contributing.logicControlled').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.logicProps').split(':')[0]}:</strong> {t('code.contributing.logicProps').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.stylingTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.contributing.stylingModules').split(':')[0]}:</strong> {t('code.contributing.stylingModules').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.stylingTokens').split(':')[0]}:</strong> {t('code.contributing.stylingTokens').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.stylingOverride').split(':')[0]}:</strong> {t('code.contributing.stylingOverride').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.contributing.documentationTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.contributing.docsStorybook')}</List.Item>
        <List.Item><strong>{t('code.contributing.docsMeta').split(':')[0]}:</strong> {t('code.contributing.docsMeta').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.docsArgTypes').split(':')[0]}:</strong> {t('code.contributing.docsArgTypes').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.contributing.docsStories').split(':')[0]}:</strong> {t('code.contributing.docsStories').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.contributing.processTitle')}</Heading>
      <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.contributing.processPRTitle')}</strong>
            <ul style={{ marginTop: 'var(--ds-size-2)', paddingLeft: 'var(--ds-size-4)' }}>
                <li><strong>{t('code.contributing.processBranch').split(':')[0]}:</strong> {t('code.contributing.processBranch').split(':').slice(1).join(':').trim()}</li>
                <li><strong>{t('code.contributing.processDraft').split(':')[0]}:</strong> {t('code.contributing.processDraft').split(':').slice(1).join(':').trim()}</li>
                <li><strong>{t('code.contributing.processCommit').split(':')[0]}:</strong> {t('code.contributing.processCommit').split(':').slice(1).join(':').trim()}</li>
                <li><strong>{t('code.contributing.processReview').split(':')[0]}:</strong> {t('code.contributing.processReview').split(':').slice(1).join(':').trim()}</li>
            </ul>
        </List.Item>
      </List.Ordered>
    </ArticleLayout>
  );
};

const FigmaMcpIntroContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.figmaMcp.introTitle')} category={t('code.sidebar.workflow')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.whatIsMcpTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.whatIsMcpText1')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.whatIsMcpText2')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.whatIsMcpItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.whatIsMcpItem2')}</List.Item>
        <List.Item>{t('code.figmaMcp.whatIsMcpItem3')}</List.Item>
        <List.Item>{t('code.figmaMcp.whatIsMcpItem4')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.whyUseMcpTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.whyUseMcpText1')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.figmaMcp.whyUseMcpItem1Title')}</strong> {t('code.figmaMcp.whyUseMcpItem1Text')}</List.Item>
        <List.Item><strong>{t('code.figmaMcp.whyUseMcpItem2Title')}</strong> {t('code.figmaMcp.whyUseMcpItem2Text')}</List.Item>
        <List.Item><strong>{t('code.figmaMcp.whyUseMcpItem3Title')}</strong> {t('code.figmaMcp.whyUseMcpItem3Text')}</List.Item>
        <List.Item><strong>{t('code.figmaMcp.whyUseMcpItem4Title')}</strong> {t('code.figmaMcp.whyUseMcpItem4Text')}</List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.howItWorksTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.howItWorksIntro')}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-3)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.stepByStepTitle')}</Heading>
      
      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.stepByStep1Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.stepByStep1Text')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.stepByStep2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.stepByStep2Text')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.stepByStep3Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.stepByStep3Text')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.stepByStep4Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.stepByStep4Text')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.stepByStep5Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.stepByStep5Text')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.nextStepsTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.nextStepsText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.nextStepsItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.nextStepsItem2')}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

const FigmaMcpCursorContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.figmaMcp.cursorWorkflowTitle')} category={t('code.sidebar.workflow')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.cursorWorkflowIntro')}
      </Paragraph>

      {/* Cursor: Part 1: Setup */}
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.part1Title')} (Cursor)</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.part1Intro')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.part1Description')}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-3)' }}>{t('code.figmaMcp.setupStep1Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.setupStep1Item1')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item2')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item3')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item4')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item5')}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-3)' }}>{t('code.figmaMcp.setupStep2Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.setupStep2Item1')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep2Item2')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep2Item3')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep2Item4')}</List.Item>
        <List.Unordered style={{ marginLeft: 'var(--ds-size-6)', marginTop: 'var(--ds-size-2)' }}>
          <List.Item>{t('code.figmaMcp.setupStep2Item5')}</List.Item>
          <List.Item>{t('code.figmaMcp.setupStep2Item6')}</List.Item>
          <List.Item>{t('code.figmaMcp.setupStep2Item7')}</List.Item>
        </List.Unordered>
        <List.Item>{t('code.figmaMcp.setupStep2Item8')}</List.Item>
        <List.Unordered style={{ marginLeft: 'var(--ds-size-6)', marginTop: 'var(--ds-size-2)' }}>
          <List.Item>{t('code.figmaMcp.setupStep2Item9')}</List.Item>
          <List.Item>{t('code.figmaMcp.setupStep2Item10')}</List.Item>
        </List.Unordered>
        <List.Item>{t('code.figmaMcp.setupStep2Item11')}</List.Item>
      </List.Unordered>

      {/* Cursor: Part 2: Daily Workflow */}
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.part2Title')} (Cursor)</Heading>

      {/* Cursor: Step 0.5: Fetch AI Guide */}
      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step0_5Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5Description')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5CursorTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5CursorIntro')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5CursorMethod1Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step0_5CursorMethod1Step1')}</List.Item>
        <List.Item>
          {t('code.figmaMcp.step0_5CursorMethod1Step2')}
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5CursorMethod1Command')}
          </CodeBlock>
        </List.Item>
      </List.Unordered>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5CursorMethod2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.step0_5CursorMethod2Text')}
      </Paragraph>
      <CodeBlock style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.step0_5CursorMethod2Example')}
      </CodeBlock>
      <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-4)', fontStyle: 'italic' }}>
        {t('code.figmaMcp.step0_5CursorMethod2Note')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5CursorMethod3Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.step0_5CursorMethod3Text')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5CursorUsageTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.step0_5CursorUsageText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5CursorUsageExample1')}
          </CodeBlock>
        </List.Item>
        <List.Item>
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5CursorUsageExample2')}
          </CodeBlock>
        </List.Item>
      </List.Unordered>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.step0_5WhyCurlTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5WhyCurlText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.step0_5WhyCurlItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyCurlItem2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyCurlItem3')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyCurlItem4')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyCurlItem5')}</List.Item>
      </List.Unordered>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.step0_5WhyTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5WhyText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-8)' }}>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem3')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem4')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem5')}</List.Item>
      </List.Unordered>

      {/* Cursor: Step 1-4: Daily Workflow */}
      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step1Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step1Description')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step1Item1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step1Item2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step1Item3')}</List.Item>
      </List.Unordered>
      <ArticleImage src="/screenshot.png" alt={t('code.figmaMcp.step1Title')} caption={t('code.figmaMcp.step1ImageCaption')} />

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.step2Description')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.figmaMcp.step2AltATitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step2AltADescription')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>
          {t('code.figmaMcp.step2AltAItem1')}
          <List.Unordered style={{ marginLeft: 'var(--ds-size-6)', marginTop: 'var(--ds-size-2)' }}>
            <List.Item>{t('code.figmaMcp.step2AltAItem1Sub1')}</List.Item>
            <List.Item>{t('code.figmaMcp.step2AltAItem1Sub2')}</List.Item>
          </List.Unordered>
        </List.Item>
        <List.Item>{t('code.figmaMcp.step2AltAItem2')}</List.Item>
        <List.Item>
          <strong>{t('code.figmaMcp.step2AltAItem3')}</strong>
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step2AltAItem3Command')}
          </CodeBlock>
          <Paragraph data-size="sm" style={{ marginTop: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step2AltAItem3Note')}
          </Paragraph>
        </List.Item>
      </List.Unordered>
      <ArticleImage src="/screenshot2.png" alt={t('code.figmaMcp.step2AltATitle')} caption={t('code.figmaMcp.step2AltAImageCaption')} />

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.step2AltBTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step2AltBDescription')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        <strong>{t('code.figmaMcp.step2AltBSetupTitle')}</strong> {t('code.figmaMcp.step2AltBSetupText')}
      </Paragraph>
      <CodeBlock>{t('code.figmaMcp.step2AltBCodeBlock')}</CodeBlock>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)', marginTop: 'var(--ds-size-4)' }}>
        <strong>{t('code.figmaMcp.step2AltBUsageTitle')}</strong> {t('code.figmaMcp.step2AltBUsageText')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step3Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step3Description')}
      </Paragraph>
      <CodeBlock>{t('code.figmaMcp.step3Prompt')}</CodeBlock>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step4Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step4Item1')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        <strong>{t('code.figmaMcp.step4ReviewTitle')}</strong>
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)', marginLeft: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.step4ReviewItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step4ReviewItem2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step4ReviewItem3')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.step4Apply')}
      </Paragraph>

      {/* Cursor: Pro Tips */}
      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.proTipsTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-8)' }}>
        <List.Item>{t('code.figmaMcp.proTip1')}</List.Item>
        <List.Item>{t('code.figmaMcp.proTip2')}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

const FigmaMcpClaudeContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.figmaMcp.claudeWorkflowTitle')} category={t('code.sidebar.workflow')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.claudeWorkflowIntro')}
      </Paragraph>

      {/* Claude: Part 1: Setup */}
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.part1Title')} (Claude Code)</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.part1Description')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.setupStep1Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.setupStep1Item1')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item2')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item3')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item4')}</List.Item>
        <List.Item>{t('code.figmaMcp.setupStep1Item5')}</List.Item>
      </List.Unordered>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5ClaudeMcpTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5ClaudeMcpIntro')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeMcpStep1')}</List.Item>
        <List.Item>
          {t('code.figmaMcp.step0_5ClaudeMcpStep2')}
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5ClaudeMcpCommand')}
          </CodeBlock>
        </List.Item>
        <List.Item>
          {t('code.figmaMcp.step0_5ClaudeMcpStep3')}
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5ClaudeMcpServerCommand')}
          </CodeBlock>
        </List.Item>
        <List.Item>
          {t('code.figmaMcp.step0_5ClaudeMcpStep4')}
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5ClaudeMcpEnvVar')}
          </CodeBlock>
        </List.Item>
      </List.Unordered>
      <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-6)', fontStyle: 'italic' }}>
        {t('code.figmaMcp.step0_5ClaudeMcpNote')}
      </Paragraph>

      {/* Claude: Part 2: Daily Workflow */}
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.part2Title')} (Claude Code)</Heading>

      {/* Claude: Step 0.5: Fetch AI Guide */}
      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step0_5Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5Description')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5ClaudeTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5ClaudeIntro')}
      </Paragraph>

      <Heading level={6} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5ClaudeMethod1Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeMethod1Step1')}</List.Item>
        <List.Item>
          {t('code.figmaMcp.step0_5ClaudeMethod1Step2')}
          <CodeBlock style={{ marginTop: 'var(--ds-size-2)', marginBottom: 'var(--ds-size-2)' }}>
            {t('code.figmaMcp.step0_5ClaudeMethod1Command')}
          </CodeBlock>
        </List.Item>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeMethod1Step3')}</List.Item>
      </List.Unordered>

      <Heading level={6} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5ClaudeMethod2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.step0_5ClaudeMethod2Text')}
      </Paragraph>
      <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-4)', fontStyle: 'italic' }}>
        {t('code.figmaMcp.step0_5ClaudeMethod2Note')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step0_5ClaudeSetupTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.figmaMcp.step0_5ClaudeSetupIntro')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeSetupStep1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeSetupStep2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeSetupStep3')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeSetupStep4')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5ClaudeSetupStep5')}</List.Item>
      </List.Unordered>
      
      <Heading level={6} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5ClaudeSetupPromptTitle')}</Heading>
      <CodeBlock style={{ marginBottom: 'var(--ds-size-4)', whiteSpace: 'pre-wrap' }}>
        {t('code.figmaMcp.step0_5ClaudeSetupPrompt')}
      </CodeBlock>
      
      <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-6)', fontStyle: 'italic' }}>
        {t('code.figmaMcp.step0_5ClaudeSetupNote')}
      </Paragraph>

      <Heading level={5} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-4)' }}>{t('code.figmaMcp.step0_5ClaudeUsageTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.step0_5ClaudeUsageText')}
      </Paragraph>
      <CodeBlock style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.step0_5ClaudeUsageExample')}
      </CodeBlock>

      {/* Claude: Step 1-4: Daily Workflow */}
      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step1Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step1Description')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.step1Item1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step1Item2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step1Item3')}</List.Item>
      </List.Unordered>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step2Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step2Description')}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        <strong>{t('code.figmaMcp.step2AltAItem3')}</strong>
      </Paragraph>
      <CodeBlock style={{ marginBottom: 'var(--ds-size-2)' }}>
        {t('code.figmaMcp.step2AltAItem3Command')}
      </CodeBlock>
      <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.step2AltAItem3Note')}
      </Paragraph>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step3Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step3Description')}
      </Paragraph>
      <CodeBlock style={{ marginBottom: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step3Prompt')}</CodeBlock>

      <Heading level={4} data-size="xs" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-6)' }}>{t('code.figmaMcp.step4Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.figmaMcp.step4Item1')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        <strong>{t('code.figmaMcp.step4ReviewTitle')}</strong>
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)', marginLeft: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.step4ReviewItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step4ReviewItem2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step4ReviewItem3')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.figmaMcp.step4Apply')}
      </Paragraph>

      {/* Shared: Why Guide Section */}
      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)', marginTop: 'var(--ds-size-8)' }}>{t('code.figmaMcp.step0_5WhyTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-3)' }}>
        {t('code.figmaMcp.step0_5WhyText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem1')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem2')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem3')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem4')}</List.Item>
        <List.Item>{t('code.figmaMcp.step0_5WhyItem5')}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

const MetadataFilesContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.metadataFiles.title')} category={t('code.sidebar.structure')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.metadataFiles.intro')}
      </Paragraph>
      
      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.metadataFiles.whatTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.metadataFiles.whatText')}
      </Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.metadataFiles.whatItem1').split(':')[0]}:</strong> {t('code.metadataFiles.whatItem1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.metadataFiles.whatItem2').split(':')[0]}:</strong> {t('code.metadataFiles.whatItem2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.metadataFiles.whatItem3').split(':')[0]}:</strong> {t('code.metadataFiles.whatItem3').split(':').slice(1).join(':').trim()}
          <ul style={{ marginTop: 'var(--ds-size-2)', paddingLeft: 'var(--ds-size-4)' }}>
            <li><code>{t('code.metadataFiles.whatItem3Sub1').split(':')[0]}</code>: {t('code.metadataFiles.whatItem3Sub1').split(':').slice(1).join(':').trim()}</li>
            <li><code>{t('code.metadataFiles.whatItem3Sub2').split(':')[0]}</code>: {t('code.metadataFiles.whatItem3Sub2').split(':').slice(1).join(':').trim()}</li>
            <li><code>{t('code.metadataFiles.whatItem3Sub3').split(':')[0]}</code>: {t('code.metadataFiles.whatItem3Sub3').split(':').slice(1).join(':').trim()}</li>
            <li><code>{t('code.metadataFiles.whatItem3Sub4').split(':')[0]}</code>: {t('code.metadataFiles.whatItem3Sub4').split(':').slice(1).join(':').trim()}</li>
            <li><code>{t('code.metadataFiles.whatItem3Sub5').split(':')[0]}</code>: {t('code.metadataFiles.whatItem3Sub5').split(':').slice(1).join(':').trim()}</li>
          </ul>
        </List.Item>
      </List.Unordered>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.metadataFiles.howTitle')}</Heading>
      <Paragraph>
        {t('code.metadataFiles.howText')}
      </Paragraph>
    </ArticleLayout>
  );
};

const KomponentKreasjonContent = () => {
  const { t } = useLanguage();
  return (
    <ArticleLayout title={t('code.componentCreation.title')} category={t('code.sidebar.workflow')}>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.componentCreation.intro')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.componentCreation.processTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.componentCreation.processText')}
      </Paragraph>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.componentCreation.step1Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.componentCreation.step1Item1').split(':')[0]}:</strong> {t('code.componentCreation.step1Item1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step1Item2').split(':')[0]}:</strong> {t('code.componentCreation.step1Item2').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.componentCreation.step2Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.componentCreation.step2Item1').split(':')[0]}:</strong> {t('code.componentCreation.step2Item1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step2Item2').split(':')[0]}:</strong> {t('code.componentCreation.step2Item2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step2Item3').split(':')[0]}:</strong> {t('code.componentCreation.step2Item3').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step2Item4').split(':')[0]}:</strong> {t('code.componentCreation.step2Item4').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.componentCreation.step3Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.componentCreation.step3Item1').split(':')[0]}:</strong> {t('code.componentCreation.step3Item1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step3Item2').split(':')[0]}:</strong> {t('code.componentCreation.step3Item2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item>{t('code.componentCreation.step3Item3')}</List.Item>
        <List.Item>{t('code.componentCreation.step3Item4')}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step3Item5').split(':')[0]}:</strong> {t('code.componentCreation.step3Item5').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.componentCreation.step4Title')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>{t('code.componentCreation.step4Item1').split(':')[0]}:</strong> {t('code.componentCreation.step4Item1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step4Item2').split(':')[0]}:</strong> {t('code.componentCreation.step4Item2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.step4Item3').split(':')[0]}:</strong> {t('code.componentCreation.step4Item3').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>

      <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.componentCreation.step5Title')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>{t('code.componentCreation.step5Text')}</Paragraph>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>{t('code.componentCreation.step5Item1')}</List.Item>
        <List.Item>{t('code.componentCreation.step5Item2')}</List.Item>
        <List.Item>{t('code.componentCreation.step5Item3')}</List.Item>
        <List.Item>{t('code.componentCreation.step5Item4')}</List.Item>
      </List.Unordered>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        <strong>{t('code.componentCreation.step5Variant').split(':')[0]}:</strong> {t('code.componentCreation.step5Variant').split(':').slice(1).join(':').trim()}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.componentCreation.automationTitle')}</Heading>
      <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        {t('code.componentCreation.automationText1').split('ikke')[0]}<strong>ikke</strong>{t('code.componentCreation.automationText1').split('ikke')[1]}
      </Paragraph>
      <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
        {t('code.componentCreation.automationText2')}
      </Paragraph>

      <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>{t('code.componentCreation.benefitsTitle')}</Heading>
      <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>{t('code.componentCreation.benefit1').split(':')[0]}:</strong> {t('code.componentCreation.benefit1').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.benefit2').split(':')[0]}:</strong> {t('code.componentCreation.benefit2').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.benefit3').split(':')[0]}:</strong> {t('code.componentCreation.benefit3').split(':').slice(1).join(':').trim()}</List.Item>
        <List.Item><strong>{t('code.componentCreation.benefit4').split(':')[0]}:</strong> {t('code.componentCreation.benefit4').split(':').slice(1).join(':').trim()}</List.Item>
      </List.Unordered>
    </ArticleLayout>
  );
};

// --- MAIN EXPORT ---

type MenuItem = {
  label: string;
  id?: string;
  link?: string;
  children?: MenuItem[];
};

interface CodePageProps {
  setPage?: (page: string) => void;
  section?: string;
}

export const CodePage = ({ setPage, section }: CodePageProps) => {
  const { t } = useLanguage();
  const [activeCodePage, setActiveCodePage] = useState(section || 'intro');

  // Update active page if section prop changes
  if (section && section !== activeCodePage) {
     setActiveCodePage(section);
  }

  // Menu Data Structure
  const menuItems: { title: string; items: MenuItem[] }[] = [
    {
      title: t('code.sidebar.overview'),
      items: [
        { label: t('code.sidebar.home'), id: 'intro' },
        { label: t('code.sidebar.getStarted'), id: 'kom-i-gang' },
        {
          label: t('code.sidebar.styling'),
          children: [
            { label: t('code.sidebar.designTokens'), id: 'design-tokens' },
            { label: t('code.sidebar.fonts'), id: 'fonts' },
            { label: t('code.sidebar.icons'), id: 'icons' },
          ]
        },
      ]
    },
    {
      title: t('code.sidebar.workflow'),
      items: [
        {
          label: t('code.sidebar.figmaMcp'),
          children: [
            { label: t('code.sidebar.introduction'), id: 'figma-mcp-intro' },
            { label: t('code.sidebar.cursor'), id: 'figma-mcp-cursor' },
            { label: t('code.sidebar.claudeCode'), id: 'figma-mcp-claude' },
          ]
        },
        { label: t('code.sidebar.componentCreation'), id: 'komponent-kreasjon' },
      ]
    },
    {
      title: t('code.sidebar.structure'),
      items: [
        { label: t('code.sidebar.metadataFiles'), id: 'metadata-files' },
      ]
    },
    {
      title: t('code.sidebar.contribute'),
      items: [
        { label: t('code.sidebar.developerGuide'), id: 'contributing' },
      ]
    }
  ];

  return (
    <main className={`container ${styles.docLayout}`}>
      
      {/* --- SIDEBAR --- */}
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          {menuItems.map((group, index) => (
            <div key={index} className={styles.group}>
               <div className={styles.groupTitle}>{group.title}</div>
               <ul className={styles.list}>
                 {group.items.map((item, itemIndex) => (
                   <li key={itemIndex} className={styles.listItem}>
                     {item.children ? (
                       // Has children - Sub-menu
                       <details className={styles.details}>
                         <summary className={`${styles.link} ${activeCodePage === item.id ? styles.linkActive : ''}`}>
                           {item.label}
                         </summary>
                         <ul className={styles.nestedList}>
                           {item.children.map((subItem, subIndex) => (
                             <li key={subIndex}>
                               <button 
                                 type="button"
                                 className={`${styles.link} ${styles.nestedLink} ${activeCodePage === subItem.id ? styles.nestedLinkActive : ''}`}
                                 onClick={() => subItem.id && setActiveCodePage(subItem.id)}
                               >
                                 {subItem.label}
                               </button>
                             </li>
                           ))}
                         </ul>
                       </details>
                     ) : (
                       // Single link
                       <button 
                         type="button"
                         className={`${styles.link} ${activeCodePage === item.id ? styles.linkActive : ''}`}
                         onClick={() => {
                            if (item.id) setActiveCodePage(item.id);
                         }}
                       >
                         {item.label}
                       </button>
                     )}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* --- CONTENT --- */}
      <div className={styles.docContent}>
        {activeCodePage === 'intro' ? <OverviewContent setActivePage={setActiveCodePage} /> :
         activeCodePage === 'kom-i-gang' ? <GettingStartedContent /> :
         activeCodePage === 'design-tokens' ? <DesignTokensContent /> :
         activeCodePage === 'fonts' ? <FontsContent /> :
         activeCodePage === 'icons' ? <IconsContent /> :
         activeCodePage === 'contributing' ? <ContributingContent /> :
         activeCodePage === 'figma-mcp-intro' ? <FigmaMcpIntroContent /> :
         activeCodePage === 'figma-mcp-cursor' ? <FigmaMcpCursorContent /> :
         activeCodePage === 'figma-mcp-claude' ? <FigmaMcpClaudeContent /> :
         activeCodePage === 'komponent-kreasjon' ? <KomponentKreasjonContent /> :
         activeCodePage === 'metadata-files' ? <MetadataFilesContent /> :
         <OverviewContent setActivePage={setActiveCodePage} />
        }
      </div>
    </main>
  );
};
