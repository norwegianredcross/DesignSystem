import { useState } from 'react';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { List } from '../../components/List';
import { Link } from '../../components/Link';
import { Card, CardBlock } from '../../components/Card';
import { ArticleLayout, ArticleImage } from '../../components/ArticleLayout';
import styles from './styles.module.css';

// --- CONTENT COMPONENTS ---

const IntroContent = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <ArticleLayout title="Kode og utvikling" intro="Hvordan vi oversetter design til kode effektivt." category="Intro">
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
          <Heading level={3} data-size="sm">Figma til Kode</Heading>
          <Paragraph data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>Lær hvordan du bruker MCP-verktøy for å hente komponenter direkte fra Figma.</Paragraph>
          <Link href="#" onClick={(e) => {e.preventDefault(); setActivePage('figma-mcp')}}>Les guide</Link>
        </CardBlock>
      </Card>
    </div>
  </ArticleLayout>
);

const KomIGangContent = ({ setPage }: { setPage?: (page: string) => void }) => (
  <ArticleLayout title="Kom i gang med kode" category="Oversikt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-4)' }}>
      I vår <Link href="https://github.com/norwegianredcross/DesignSystem" target="_blank" rel="noreferrer">README på GitHub</Link> finner du alt du trenger for å komme i gang med Designsystemet som utvikler - inkludert installasjon, eksempler og retningslinjer for å bidra.
    </Paragraph>
    <Paragraph>
      For å forstå hvordan farger, spacing og typografi håndteres i kode, anbefaler vi også å lese om <Link href="#" onClick={(e) => { e.preventDefault(); if (setPage) setPage('design'); }}>designtokens</Link>.
    </Paragraph>
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
        <ArticleImage src="/screenshot.png" alt="Copy link from Figma" caption="Høyreklikk på en node i Figma og velg 'Copy link' for å få en direkte lenke." />
      </List.Item>
      <List.Item>
        <strong>Gi kontekst og lenke:</strong> Det anbefales å legge ved <Link href="https://norwegianredcross.github.io/design-tokens/theme.css" target="_blank" rel="noreferrer">theme.css</Link> (for tokens) og <Link href="https://norwegianredcross.github.io/DesignSystem/storybook/metadata.json" target="_blank" rel="noreferrer">metadata.json</Link> (for komponenter) som kontekst i chatten. Lim deretter inn Figma-lenken.
        <ArticleImage src="/screenshot2.png" alt="Give context with theme.css and metadata.json" caption="Legg ved theme.css og metadata.json for bedre resultat." />
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

const ProgressionContent = () => (
  <ArticleLayout title="Progresjon: Fra Design til Ferdig Komponent" category="Arbeidsflyt">
    <Paragraph style={{ marginBottom: 'var(--ds-size-6)' }}>
      Her er den anbefalte arbeidsflyten for å ta en komponent fra Figma og inn i kodebasen.
    </Paragraph>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-8)' }}>
      
      <div>
        <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>1. Analyse</Heading>
        <Paragraph>
          Studer Figma-skissen. Identifiser hvilke eksisterende atomer (knapper, typografi, ikoner) som brukes. Sjekk autolayout-innstillinger for padding og gap.
        </Paragraph>
      </div>

      <div>
        <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>2. Henting av data</Heading>
        <Paragraph>
          Bruk MCP-verktøyet for å hente ut JSON-strukturen og kodeforslag for komponenten.
        </Paragraph>
      </div>

      <div>
        <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>3. Opprettelse</Heading>
        <Paragraph>
          Lag mappestrukturen `src/components/Navn/`. Opprett `index.tsx`, `styles.module.css` og `Navn.stories.tsx`.
        </Paragraph>
      </div>

      <div>
        <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>4. Implementasjon</Heading>
        <Paragraph>
          Lim inn den genererte koden og tilpass. Bytt ut hardkodede verdier med design tokens (`var(--ds-size-...)`, `var(--ds-color-...)`). Sørg for at den bruker felleskomponenter der det er mulig.
        </Paragraph>
      </div>

      <div>
        <Heading level={3} data-size="sm" style={{ marginBottom: 'var(--ds-size-2)' }}>5. Dokumentasjon</Heading>
        <Paragraph>
          Lag stories i Storybook som viser alle varianter. Oppdater metadata.
        </Paragraph>
      </div>

    </div>
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
}

export const CodePage = ({ setPage }: CodePageProps) => {
  const [activeCodePage, setActiveCodePage] = useState('intro');

  // Menu Data Structure
  const menuItems: { title: string; items: MenuItem[] }[] = [
    {
      title: 'Oversikt',
      items: [
        { label: 'Startside', id: 'intro' },
        { label: 'Kom i gang', id: 'kom-i-gang' },
      ]
    },
    {
      title: 'Arbeidsflyt',
      items: [
        { label: 'Fra Figma til Kode (MCP)', id: 'figma-mcp' },
        { label: 'Komponent Kreasjon', id: 'komponent-kreasjon' },
        { label: 'Progresjon', id: 'progression' },
      ]
    },
    {
      title: 'Struktur',
      items: [
        { label: 'Metadata filer', id: 'metadata-files' },
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
                           <span style={{ fontSize: '0.7em', marginLeft: 'auto' }}>▼</span>
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
        {activeCodePage === 'intro' ? <IntroContent setActivePage={setActiveCodePage} /> :
         activeCodePage === 'kom-i-gang' ? <KomIGangContent setPage={setPage} /> :
         activeCodePage === 'figma-mcp' ? <FigmaMcpContent /> :
         activeCodePage === 'komponent-kreasjon' ? <KomponentKreasjonContent /> :
         activeCodePage === 'progression' ? <ProgressionContent /> :
         activeCodePage === 'metadata-files' ? <MetadataFilesContent /> :
         <IntroContent setActivePage={setActiveCodePage} />
        }
      </div>
    </main>
  );
};
