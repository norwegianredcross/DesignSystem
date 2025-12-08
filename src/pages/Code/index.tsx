import { useState } from 'react';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout, ArticleImage } from '../../components/ArticleLayout';
import styles from './styles.module.css';

// --- CONTENT COMPONENTS ---

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className={styles.codeBlock}>
    <code>{children}</code>
  </pre>
);

const OverviewContent = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <ArticleLayout title="Røde Kors Designsystem" intro="Velkommen til Røde Kors Designsystem! Dette repositoriet inneholder et bibliotek med gjenbrukbare UI-komponenter bygget med React, skreddersydd for Norges Røde Kors sine digitale prosjekter." category="Oversikt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Det er utviklet ved å utnytte grunnkomponentene fra Digdirs Designsystemet. Denne tilnærmingen sikrer en helhetlig og gjenkjennelig visuell identitet på tvers av alle applikasjoner for Røde Kors. Systemet er forhåndskonfigurert med det offisielle Røde Kors-temaet, som leveres via en dedikert designtoken-pakke.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Hovedmålet er å sikre merkevarekonsistens, forbedre utviklingseffektiviteten og opprettholde høye standarder for tilgjengelighet i alle Røde Kors-applikasjoner.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Storybook fungerer som den interaktive dokumentasjonen og utviklingsmiljøet for å vise og teste disse komponentene.
    </Paragraph>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ds-size-6)' }}>
      <Card variant="tinted" data-color="neutral">
        <CardBlock>
          <Heading level={3} data-size="sm">Kom i gang</Heading>
          <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Installasjon, oppsett og retningslinjer for utviklere.</Paragraph>
          <Link href="#" onClick={(e) => {e.preventDefault(); setActivePage('kom-i-gang')}}>Kom i gang</Link>
        </CardBlock>
      </Card>
      <Card variant="tinted" data-color="neutral">
        <CardBlock>
          <Heading level={3} data-size="sm">Designtokens</Heading>
          <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Lær hvordan du bruker designtokens og fonter.</Paragraph>
          <Link href="#" onClick={(e) => {e.preventDefault(); setActivePage('design-tokens')}}>Les mer</Link>
        </CardBlock>
      </Card>
      <Card variant="tinted" data-color="neutral">
        <CardBlock>
          <Heading level={3} data-size="sm">Arbeidsflyt</Heading>
          <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Lær hvordan du bruker MCP-verktøy for å hente komponenter direkte fra Figma.</Paragraph>
          <Link href="#" onClick={(e) => {e.preventDefault(); setActivePage('figma-mcp')}}>Les guide</Link>
        </CardBlock>
      </Card>
    </div>
  </ArticleLayout>
);

const GettingStartedContent = () => (
  <ArticleLayout title="Kom i gang" category="Oversikt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      For å ta i bruk Røde Kors Designsystem i din Next.js (eller annen React) applikasjon:
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>1. Installasjon</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Installer de nødvendige npm-pakkene for prosjektet ditt. Du trenger tre pakker: selve komponentbiblioteket (rk-designsystem), grunnstilene fra Digdir, og Røde Kors-temapakken (rk-design-tokens).
    </Paragraph>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>npm</Heading>
    <CodeBlock>npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>yarn</Heading>
    <CodeBlock>yarn add rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>pnpm</Heading>
    <CodeBlock>pnpm add rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Merk: Du trenger ikke å installere @digdir/designsystemet-react separat, da alle nødvendige komponenter er inkludert i rk-designsystem-pakken.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>2. Inkludering av stiler (CSS)</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      For at komponentene skal styles riktig, må du importere stilarkene på øverste nivå i applikasjonen din, for eksempel i layout.tsx (for Next.js App Router) eller _app.tsx (for Next.js Pages Router).
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      <strong>Viktig rekkefølge:</strong> Det er avgjørende at grunnstilarket (@digdir/designsystemet-css) lastes før Røde Kors-temafilen (rk-design-tokens). Dette sikrer at vårt temas tokens overstyrer standardverdiene korrekt.
    </Paragraph>
    
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Eksempel for Next.js (App Router - src/app/layout.tsx):</Heading>
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

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Eksempel for Next.js (Pages Router - pages/_app.tsx):</Heading>
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

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>3. Bruk av komponenter</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Når stilarkene er inkludert, kan du begynne å importere og bruke komponenter i prosjektet ditt. Alle komponenter du trenger er tilgjengelige direkte fra rk-designsystem-pakken.
    </Paragraph>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>3.1 Importer og bruk Røde Kors Designsystem-komponenter</Heading>
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

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>3.2 Eksempel på bruk i en Next.js-side</Heading>
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
        Utseendet til alle komponenter styres fullt ut av pakken rk-design-tokens. For å motta visuelle oppdateringer til merkevaretemaet (som en ny primærfarge), oppdaterer du ganske enkelt pakken til siste versjon:
    </Paragraph>
    <CodeBlock>npm update rk-design-tokens</CodeBlock>
  </ArticleLayout>
);

const DesignTokensContent = () => (
  <ArticleLayout title="Røde Kors Designtokens" category="Oversikt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Dette repositoriet er den sentrale kilden for alle designtokens (farger, typografi, avstander osv.) for Norges Røde Kors sine digitale produkter. Det fungerer som en sannhetskilde (single source of truth) som automatisk distribuerer stilendringer til alle tilkoblede prosjekter.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Hvordan ta i bruk tokens</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      For å bruke designtokens i ditt prosjekt, må du installere og konfigurere temapakken.
    </Paragraph>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>1. Installasjon</Heading>
    <CodeBlock>npm install rk-designsystem @digdir/designsystemet-css rk-design-tokens</CodeBlock>
    
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>2. Importer CSS</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      I din applikasjons rot-layout (f.eks. layout.tsx), importer grunnstilarket før Røde Kors-temafilen.
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

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Hvordan legge til fonten</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Røde Kors Designsystem bruker fonten <strong>Source Sans 3</strong>. For at typografien skal vises korrekt i applikasjonen din, må denne fonten lastes inn.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        Du kan inkludere fonten ved å legge til følgende linjer i <code>&lt;head&gt;</code>-elementet i din HTML eller i rot-layouten din:
    </Paragraph>
    <CodeBlock>
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">`}
    </CodeBlock>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
      Når fonten er lastet, vil CSS-variablene fra <code>rk-design-tokens</code> automatisk ta den i bruk (<code>--ds-font-family</code>).
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Automatisert arbeidsflyt for Designtokens (End-to-End)</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Denne arbeidsflyten etablerer en helautomatisert pipeline som kobler designprosessen vår direkte til live produksjonsapplikasjoner. Når en designer oppdaterer stilen i Figma, bygger, versjonerer og publiserer dette systemet automatisk en ny stilpakke til npm. Deretter varsles Vercel-prosjektene våre, som oppdaterer seg selv og redeployer med de nye stilene.
    </Paragraph>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Fase 1: En Designer gjør en endring (Publisist)</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Design i Figma:</strong> En designer gjør en endring på en farge, font eller annen designtoken.</List.Item>
      <List.Item><strong>Push til GitHub:</strong> Ved bruk av Token Studio-pluginet pusher designeren endringene. Dette committer automatisk de oppdaterte JSON-filene til main-branchen.</List.Item>
      <List.Item><strong>Trigge Publisher Workflow:</strong> Denne pushen trigger umiddelbart GitHub Action definert i .github/workflows/publish.yml.</List.Item>
      <List.Item><strong>Bygg & Commit Artefakter:</strong> Workflowen kjører npm run build for å generere CSS fra JSON-filene og committer resultatene.</List.Item>
      <List.Item><strong>Versjonering & Release:</strong> Workflowen kjører npm version patch for å øke versjonsnummeret, lage en release-commit, og tagge den.</List.Item>
      <List.Item><strong>Publiser til npm:</strong> Til slutt publiserer workflowen den nye versjonen av pakken til npm-registeret.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Fase 2: Varsling av applikasjoner (Signalet)</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      <strong>Send et Dispatch-signal:</strong> Etter en vellykket publisering, sender workflowen et repository_dispatch-signal til konsumentprosjekter som rk-designsystem for å varsle om den nye versjonen.
    </Paragraph>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Fase 3: Automatisk oppdatering og redeploy (Konsumentene)</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Trigge Consumer Workflow:</strong> Dispatch-signalet starter en "Update"-workflow i konsumentprosjektene.</List.Item>
      <List.Item><strong>Oppdater Avhengigheter:</strong> Workflowen kjører npm update rk-design-tokens for å hente den siste versjonen.</List.Item>
      <List.Item><strong>Commit & Push Oppdateringen:</strong> Workflowen committer den oppdaterte package-lock.json-filen.</List.Item>
      <List.Item><strong>Vercel Auto-Deploys:</strong> Vercels Git-integrasjon oppdager den nye commiten og starter automatisk en ny deployment.</List.Item>
    </List.Unordered>
    
  </ArticleLayout>
);

const IconsContent = () => (
  <ArticleLayout title="Bruk av Ikoner" category="Ressurser">
     <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Dette biblioteket er designet for å fungere sømløst med det offisielle ikonsettet fra NAV/Aksel.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Installasjon</Heading>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>npm</Heading>
    <CodeBlock>npm install @navikt/aksel-icons</CodeBlock>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>yarn</Heading>
    <CodeBlock>yarn add @navikt/aksel-icons</CodeBlock>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>pnpm</Heading>
    <CodeBlock>pnpm add @navikt/aksel-icons</CodeBlock>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Import og bruk</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        Ikoner eksporteres som navngitte React-komponenter. Importer kun de ikonene du trenger (tree‑shakable):
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

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Tilgjengelighetsguide</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Ikon + synlig tekst:</strong> sett aria-hidden på ikonet slik at skjermlesere ikke leser det opp to ganger.</List.Item>
      <List.Item><strong>Ikon-kun triggere (f.eks. en knapp):</strong> legg til en beskrivende aria-label på triggeren, behold ikonet aria-hidden.</List.Item>
      <List.Item><strong>Farge:</strong> ikoner arver currentColor; bruk komponentens variant/farge for å styre det (f.eks. knappevarianter, tag-farger).</List.Item>
      <List.Item><strong>Størrelse:</strong> sett fontSize (f.eks. fontSize="1.25rem") eller inline style (f.eks. style={"{ fontSize: '1.25rem' }"}).</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Ytelse</Heading>
    <Paragraph>
        Bruk navngitte importer fra @navikt/aksel-icons for å holde pakkestørrelsen nede – ubrukte ikoner fjernes (tree-shaken) av moderne bundlere.
    </Paragraph>
  </ArticleLayout>
);

const ContributingContent = () => (
  <ArticleLayout title="Bidra til Biblioteket" category="Bidra">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Denne guiden gir et sett med standarder og beste praksis for å lage nye komponenter. Å følge disse retningslinjene sikrer at komponentbiblioteket vårt forblir konsistent, tilgjengelig og enkelt å vedlikeholde.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Kom i gang (for bidragsytere)</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Følg disse stegene for å kjøre det lokale utviklingsmiljøet. Alle kommandoer skal kjøres fra roten av prosjektet.</Paragraph>
    <CodeBlock>
{`# 1. Installer avhengigheter
pnpm i

# 2. Bygg alle pakker
pnpm build

# 3. Start den lokale Storybook-serveren
pnpm storybook`}
    </CodeBlock>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Kjerneprinsipper</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Hver komponent vi bygger bør følge disse kjerneprinsippene:</Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Tilgjengelighet (A11y):</strong> Komponenter må kunne brukes av alle, inkludert personer med nedsatt funksjonsevne. Dette betyr korrekte ARIA-attributter, tastaturnavigasjon og semantisk HTML.</List.Item>
        <List.Item><strong>Gjenbrukbarhet:</strong> Komponenter bør være generiske nok til å brukes i flere kontekster uten modifikasjon.</List.Item>
        <List.Item><strong>Konsistens:</strong> Komponenter skal følge våre etablerte designtokens (farger, avstander, typografi) og ha et konsistent API og struktur.</List.Item>
        <List.Item><strong>Dokumentasjon:</strong> Hver komponent må dokumenteres i Storybook for å gjøre den oppdagbar og enkel å bruke for andre utviklere.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Når skal man lage en ny komponent</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
        Før du begynner å kode, avgjør hvilken type komponent du trenger. De fleste av våre behov faller inn i en av tre kategorier:
    </Paragraph>
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Wrapped Component (Enkel):</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>Hva det er:</strong> En komponent som direkte wrapper og re-eksporterer en komponent fra @digdir/designsystemet-react uten modifikasjoner.</List.Item>
        <List.Item><strong>Når den skal brukes:</strong> Når den grunnleggende Digdir-komponenten dekker behovene våre perfekt, men vi ønsker å inkludere den i vårt eget bibliotek for en konsistent importkilde.</List.Item>
        <List.Item><strong>Eksempel:</strong> Buttons-komponenten er et perfekt eksempel på dette.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Wrapped Component (med stiloverstyringer):</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>Hva det er:</strong> En wrappet Digdir-komponent hvor vi bruker tilpasset CSS for å justere utseendet slik at det passer bedre til Røde Kors sitt spesifikke designspråk.</List.Item>
        <List.Item><strong>Når den skal brukes:</strong> Når en Digdir-komponent er funksjonelt korrekt, men trenger visuelle justeringer (f.eks. andre ikoner, border-radius, padding).</List.Item>
        <List.Item><strong>Eksempel:</strong> Alert-komponenten, som bruker composes i CSS for å arve grunnstiler og deretter påføre egne overstyringer.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Custom Component (fra bunnen):</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>Hva det er:</strong> En helt ny komponent bygget når ingen eksisterende Digdir-komponent dekker kravene våre.</List.Item>
        <List.Item><strong>Når den skal brukes:</strong> For unike UI-mønstre eller funksjonalitet som ikke dekkes av grunnbiblioteket.</List.Item>
        <List.Item><strong>Eksempel:</strong> DateInput-komponenten er en tilpasset komponent med egen tilstand, logikk og styling.</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Filstruktur for komponenter</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
        For å opprettholde konsistens, bør hver ny komponent følge denne filstrukturen. Lag en ny mappe under src/components/ med komponentens PascalCase-navn.
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

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Retningslinjer for koding</Heading>
    
    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>1. Komponentlogikk (MyNewComponent.tsx)</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>TypeScript først:</strong> Alle komponenter må skrives i TypeScript. Definer et Props-interface for komponenten din, som utvider fra grunnleggende HTML-element eller Digdir-komponentprops hvis aktuelt.</List.Item>
        <List.Item><strong>Forward Refs:</strong> Bruk alltid React.forwardRef for å tillate foreldrekomponenter å få en ref til det underliggende DOM-elementet.</List.Item>
        <List.Item><strong>Tilgjengelighet er obligatorisk:</strong>
            <ul style={{ marginTop: 'var(--ds-size-2)', paddingLeft: 'var(--ds-size-4)' }}>
                <li>Bruk semantisk HTML (&lt;button&gt;, &lt;label&gt;, &lt;nav&gt;).</li>
                <li>Sørg for at alle interaktive elementer kan fokuseres og betjenes med tastatur.</li>
                <li>Gi aria-label for knapper som kun har ikon eller elementer hvor tekstetiketten ikke er synlig.</li>
                <li>Bruk aria-invalid, aria-describedby, osv., for å kommunisere tilstand til hjelpemidler.</li>
            </ul>
        </List.Item>
        <List.Item><strong>Controlled vs. Uncontrolled:</strong> Hvis komponenten din har tilstand (som en input), bør den støtte både kontrollerte (value + onChange) og ukontrollerte (defaultValue) mønstre.</List.Item>
        <List.Item><strong>Props-navngiving:</strong> Bruk data-* attributter for stylingvarianter (f.eks. data-size, data-color) for å samkjøre med mønstrene i våre eksisterende komponenter.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>2. Styling (styles.module.css)</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item><strong>CSS Modules:</strong> For tilpassede komponenter må alle stiler plasseres i en styles.module.css-fil. Dette scoper klassenavn lokalt og forhindrer globale stilkonflikter.</List.Item>
        <List.Item><strong>Designtokens:</strong> Bruk alltid våre designtokens (var(--ds-...)) for farger, avstander, fonter, osv. Ikke bruk hardkodede verdier (f.eks. #FFF, 16px).</List.Item>
        <List.Item><strong>Overstyring av Wrapped Components:</strong> For wrapped components, bruk en standard CSS-fil. Bruk @layer og composes nøkkelord for å utvide grunnleggende Digdir-stiler uten å øke CSS-spesifisiteten unødvendig.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>3. Dokumentasjon (MyNewComponent.stories.tsx)</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
        <List.Item>Din Storybook-fil er den offisielle dokumentasjonen. Den må være tydelig og omfattende.</List.Item>
        <List.Item><strong>meta Object:</strong> Definer komponentens tittel, komponentreferanse, og tags: ['autodocs'] for å aktivere automatisk dokumentasjon.</List.Item>
        <List.Item><strong>argTypes:</strong> Dokumenter hver enkelt prop. Gi en beskrivelse, kontrolltype (f.eks. select, boolean, text), og alternativer hvis aktuelt. Dette driver de interaktive kontrollene i Storybook.</List.Item>
        <List.Item><strong>Lag flere Stories:</strong> Lag en egen story for hver nøkkeltilstand og variant av komponenten din (f.eks. Default, Disabled, WithError, WithIcon).</List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Bidragsprosess</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
        <List.Item><strong>Opprett en Pull Request (PR):</strong>
            <ul style={{ marginTop: 'var(--ds-size-2)', paddingLeft: 'var(--ds-size-4)' }}>
                <li><strong>Opprett en Branch:</strong> Pull de siste endringene fra main-branchen og opprett en ny feature-branch: <code>git checkout -b feat/min-nye-komponent</code>.</li>
                <li><strong>Åpne en Draft PR:</strong> Så snart du starter, åpne en draft pull request på GitHub. Dette forhindrer dobbeltarbeid og lar andre se hva du jobber med.</li>
                <li><strong>Commit endringene dine:</strong> Mens du jobber, lag små, logiske commits.</li>
                <li><strong>Klar for gjennomgang:</strong> Når utviklingen er ferdig og alle automatiserte sjekker passerer, merk PR-en som "Ready for review" og be om en gjennomgang fra designsystem-forvalterne.</li>
            </ul>
        </List.Item>
    </List.Ordered>
  </ArticleLayout>
);

const FigmaMcpContent = () => (
  <ArticleLayout title="Fra Figma til Kode med MCP" category="Arbeidsflyt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Vi bruker Model Context Protocol (MCP) for å koble Figma direkte til utviklingsmiljøet. Dette gjør det mulig å hente ut designspesifikasjoner, tokens og kodestrukturer automatisk.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Prosess</Heading>
    <List.Ordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>
        <strong>Identifiser komponenten i Figma:</strong> Finn `node-id` til komponenten eller seksjonen du vil implementere.
      </List.Item>
      <List.Item>
        <strong>Kopier lenke:</strong> Høyreklikk på noden i Figma, velg "Copy link" for å få en URL som inneholder både fil-nøkkel og node-ID.
        <ArticleImage src="/screenshot.png" alt="Kopier lenke fra Figma" caption="Høyreklikk på en node i Figma og velg 'Copy link' for å få en direkte lenke." />
      </List.Item>
      <List.Item>
        <strong>Gi kontekst og lenke:</strong> Det anbefales å legge ved <Link href="https://norwegianredcross.github.io/design-tokens/theme.css" target="_blank" rel="noreferrer">theme.css</Link> (for tokens) og <Link href="https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json" target="_blank" rel="noreferrer">metadata.json</Link> (for komponenter) som kontekst i chatten. Lim deretter inn Figma-lenken.
        <ArticleImage src="/screenshot2.png" alt="Gi kontekst med theme.css og metadata.json" caption="Legg ved theme.css og metadata.json for bedre resultat." />
      </List.Item>
      <List.Item>
        <strong>Motta kodeforslag:</strong> Verktøyet genererer React-kode basert på designet, inkludert bruk av våre eksisterende komponenter (som Heading, Button, Paragraph).
      </List.Item>
      <List.Item>
        <strong>Tilpass og implementer:</strong> Juster koden til å passe inn i prosjektstrukturen, og verifiser mot design-tokens.
      </List.Item>
    </List.Ordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Fordeler</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item>Raskere implementasjon av nye komponenter.</List.Item>
      <List.Item>Sikrer at riktige tokens blir brukt automatisk.</List.Item>
      <List.Item>Reduserer avstand mellom design og kode.</List.Item>
    </List.Unordered>
  </ArticleLayout>
);

const MetadataFilesContent = () => (
  <ArticleLayout title="Metadata-filer" category="Struktur">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      For å holde oversikt over komponentene og deres kobling til Figma, bruker vi metadata-filer.
    </Paragraph>
    
    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Hva inneholder de?</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Metadata-filene (som `metadata.json`) er ryggraden i dokumentasjonen vår. De definerer nøyaktig hvilke props hver komponent støtter, datatyper, standardverdier og beskrivelser. Dette gjør at vi kan generere dokumentasjon automatisk og sikre konsistens mellom design og kode.
    </Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>componentName:</strong> Navnet på komponenten (f.eks. "Button").</List.Item>
      <List.Item><strong>importPath:</strong> Hvor komponenten importeres fra (f.eks. "rk-designsystem").</List.Item>
      <List.Item><strong>props:</strong> En liste over alle tilgjengelige props, inkludert:
        <ul style={{ marginTop: 'var(--ds-size-2)', paddingLeft: 'var(--ds-size-4)' }}>
          <li><code>name</code>: Navnet på proppen (f.eks. "variant", "disabled").</li>
          <li><code>type</code>: Datatypen (f.eks. "boolean", "enum", "string").</li>
          <li><code>description</code>: Forklaring av hva proppen gjør.</li>
          <li><code>defaultValue</code>: Standardverdien hvis proppen ikke settes.</li>
          <li><code>required</code>: Om proppen er påkrevd eller valgfri.</li>
        </ul>
      </List.Item>
    </List.Unordered>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Hvordan bruke dem?</Heading>
    <Paragraph>
      Når du oppretter en ny komponent, bør du også oppdatere metadata-filen slik at automatiske verktøy og dokumentasjonssider (som denne) kan finne og vise riktig informasjon.
    </Paragraph>
  </ArticleLayout>
);

const KomponentKreasjonContent = () => (
  <ArticleLayout title="Komponent Kreasjon med MCP og Design Tokens" category="Arbeidsflyt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Vi bruker Model Context Protocol (MCP) og AI-assistanse for å oversette Figma-design direkte til produksjonsklare React-komponenter. Denne flyten sikrer at nye komponenter følger designsystemet, bruker CSS Modules, og gjenbruker eksisterende kode.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Prosess</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Når du sender en prompt (f.eks. "make a version where you can have 4 cards below [url]"), håndterer Figma MCP følgende steg automatisk i bakgrunnen:
    </Paragraph>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>1. Identifisering og Metadata</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Identifiser kilden:</strong> MCP leser URL-en og finner Node-ID for komponenten i Figma (f.eks. 1:3539 for "Hero 3").</List.Item>
      <List.Item><strong>Hent dimensjoner:</strong> MCP henter automatisk informasjon om nodens størrelse, struktur og posisjonering for å sette rammeverket for layouten.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>2. Henting av Design Context og Kodeutkast</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Generer utkast:</strong> MCP analyserer Figma-noden og genererer et førsteutkast til React-kode.</List.Item>
      <List.Item><strong>Automatisk gjenkjenning:</strong> Verktøyet identifiserer om designet inneholder elementer som allerede finnes i biblioteket vårt.</List.Item>
      <List.Item><strong>Eksempel:</strong> Hvis Figma-noden inneholder en knapp, vil MCP foreslå `import Button from "src/components/Button.tsx"` i stedet for å generere ny HTML for knappen.</List.Item>
      <List.Item><strong>Rensing:</strong> Systemet filtrerer bort unødvendige wrappers og absolutte stier før koden presenteres.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>3. Token-Mapping og Variabel-definisjoner</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Analyser tokens:</strong> MCP analyserer automatisk hvilke design-tokens som er brukt i Figma-filen (via `get_variable_defs` logikk i bakgrunnen).</List.Item>
      <List.Item><strong>Mapping til CSS:</strong> Den oversetter Figma-verdier til våre definerte CSS-variabler.</List.Item>
      <List.Item>Figma: `"color/main/base-default": "#d52b1e"`</List.Item>
      <List.Item>CSS: Mappes til `var(--ds-color-primary-color-red-base-default)` (eller tilsvarende fra theme.css).</List.Item>
      <List.Item><strong>Typografi:</strong> Font-definisjoner oversettes automatisk til korrekte typografi-klasser.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>4. Automatisk Kobling mot Eksisterende Komponenter</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item><strong>Verifisering:</strong> Figma MCP sjekker designet opp mot metadata.json og repositoryet vårt (via `get_code_connect_map` logikk i bakgrunnen).</List.Item>
      <List.Item><strong>Implementasjon:</strong> Dette sikrer at koden som genereres automatisk tar i bruk rk-designsystem sine komponenter der det er mulig.</List.Item>
      <List.Item><strong>Eksempel:</strong> Den ser at et element i Figma tilsvarer `src/components/Button.tsx` og genererer koden med korrekt komponent-import.</List.Item>
    </List.Unordered>

    <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>5. Struktur og Ferdigstilling</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>Resultat: Basert på analysen over, produserer AI-en de ferdige filene du trenger:</Paragraph>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-4)' }}>
      <List.Item>`index.ts` (Eksport)</List.Item>
      <List.Item>`[KomponentNavn].tsx` (Logikk, prop-definisjoner fra metadata.json)</List.Item>
      <List.Item>`[KomponentNavn].module.css` (Styling basert på tokens)</List.Item>
      <List.Item>`[KomponentNavn].stories.tsx` (Dokumentasjon og varianter)</List.Item>
    </List.Unordered>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      <strong>Variant-håndtering:</strong> Logikk for varianter (f.eks. "stacked" vs "side-by-side") implementeres basert på din prompt og Figma-layouten.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Automatisering vs. Manuell Kvalitetssikring</Heading>
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      Selv om MCP-verktøyene automatiserer mye av kodingen ved å hente strukturer og tokens direkte fra Figma, er det <strong>ikke</strong> en 100% sømløs overføring. Den genererte koden fungerer som et solid fundament, men en utvikler må alltid se over, kvalitetssikre og tilpasse logikken.
    </Paragraph>
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Verktøyene fjerner det repetitive manuelle arbeidet med oppsett og styling, slik at utvikleren kan fokusere på funksjonalitet, tilgjengelighet og edge-cases. Det er en effektiviseringsprosess, ikke en erstatning for utviklerkompetanse.
    </Paragraph>

    <Heading level={2} data-size="md" style={{ marginBottom: 'var(--ds-size-4)' }}>Fordeler med denne flyten</Heading>
    <List.Unordered style={{ marginBottom: 'var(--ds-size-6)' }}>
      <List.Item><strong>Presisjon:</strong> Automatisk uthenting av variabler forhindrer "magiske tall" og hardkodede hex-koder.</List.Item>
      <List.Item><strong>Gjenbruk:</strong> Automatisk sjekk mot eksisterende komponenter hindrer duplisering av kode.</List.Item>
      <List.Item><strong>Effektivitet:</strong> Du trenger kun å gi en URL og en intensjon; MCP håndterer de tekniske oppslagene.</List.Item>
      <List.Item><strong>Vedlikehold:</strong> Koblingen mot `theme.css` og `metadata.json` gjør at komponentene tåler oppdateringer i designsystemet.</List.Item>
    </List.Unordered>
  </ArticleLayout>
);

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
  const [activeCodePage, setActiveCodePage] = useState(section || 'intro');

  // Update active page if section prop changes
  if (section && section !== activeCodePage) {
     setActiveCodePage(section);
  }

  // Menu Data Structure
  const menuItems: { title: string; items: MenuItem[] }[] = [
    {
      title: 'Oversikt',
      items: [
        { label: 'Startside', id: 'intro' },
        { label: 'Kom i gang', id: 'kom-i-gang' },
        { label: 'Designtokens', id: 'design-tokens' },
        { label: 'Bruk av ikoner', id: 'icons' },
      ]
    },
    {
      title: 'Arbeidsflyt',
      items: [
        { label: 'Fra Figma til Kode (MCP)', id: 'figma-mcp' },
        { label: 'Komponent Kreasjon', id: 'komponent-kreasjon' },
      ]
    },
    {
      title: 'Struktur',
      items: [
        { label: 'Metadata filer', id: 'metadata-files' },
      ]
    },
    {
      title: 'Bidra',
      items: [
        { label: 'Utviklerguide', id: 'contributing' },
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
                       <details open className={styles.details}>
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
         activeCodePage === 'icons' ? <IconsContent /> :
         activeCodePage === 'contributing' ? <ContributingContent /> :
         activeCodePage === 'figma-mcp' ? <FigmaMcpContent /> :
         activeCodePage === 'komponent-kreasjon' ? <KomponentKreasjonContent /> :
         activeCodePage === 'metadata-files' ? <MetadataFilesContent /> :
         <OverviewContent setActivePage={setActiveCodePage} />
        }
      </div>
    </main>
  );
};
