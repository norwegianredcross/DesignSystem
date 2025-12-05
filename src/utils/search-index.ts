export interface SearchItem {
  id: string;
  title: string;
  description?: string;
  category: 'Component' | 'Page' | 'Design' | 'Code';
  path: string; // Page name used in setPage or full URL
}

export const searchIndex: SearchItem[] = [
  // Pages
  { id: 'home', title: 'Hjem', category: 'Page', path: 'home', description: 'Forsiden' },
  { id: 'components', title: 'Komponenter', category: 'Page', path: 'components', description: 'Oversikt over alle komponenter' },
  { id: 'design', title: 'Design', category: 'Page', path: 'design', description: 'Designretningslinjer og prinsipper' },
  { id: 'code', title: 'Kode', category: 'Page', path: 'code', description: 'Utviklerdokumentasjon og oppsett' },

  // Components
  { id: 'alert', title: 'Alert', category: 'Component', path: 'components', description: 'Varselbokser for viktige meldinger' },
  { id: 'avatar', title: 'Avatar', category: 'Component', path: 'components', description: 'Profilbilder og initialer' },
  { id: 'badge', title: 'Badge', category: 'Component', path: 'components', description: 'Små merker for status eller antall' },
  { id: 'button', title: 'Button', category: 'Component', path: 'components', description: 'Knapper for handlinger' },
  { id: 'card', title: 'Card', category: 'Component', path: 'components', description: 'Kort for gruppering av innhold' },
  { id: 'carousel', title: 'Carousel', category: 'Component', path: 'components', description: 'Bildekarusell' },
  { id: 'checkbox', title: 'Checkbox', category: 'Component', path: 'components', description: 'Valg av flere alternativer' },
  { id: 'dialog', title: 'Dialog', category: 'Component', path: 'components', description: 'Modale vinduer' },
  { id: 'dropdown', title: 'Dropdown', category: 'Component', path: 'components', description: 'Nedtrekksmenyer' },
  { id: 'header', title: 'Header', category: 'Component', path: 'components', description: 'Topptekst og navigasjon' },
  { id: 'herosection', title: 'HeroSection', category: 'Component', path: 'components', description: 'Store introduksjonsseksjoner' },
  { id: 'input', title: 'Input', category: 'Component', path: 'components', description: 'Tekstfelt for brukerinput' },
  { id: 'link', title: 'Link', category: 'Component', path: 'components', description: 'Lenker til andre sider' },
  { id: 'list', title: 'List', category: 'Component', path: 'components', description: 'Ordnede og uordnede lister' },
  { id: 'pagination', title: 'Pagination', category: 'Component', path: 'components', description: 'Navigasjon mellom sider' },
  { id: 'radio', title: 'Radio', category: 'Component', path: 'components', description: 'Valg av ett alternativ' },
  { id: 'search', title: 'Search', category: 'Component', path: 'components', description: 'Søkefelter' },
  { id: 'select', title: 'Select', category: 'Component', path: 'components', description: 'Valgmeny' },
  { id: 'spinner', title: 'Spinner', category: 'Component', path: 'components', description: 'Lasteindikator' },
  { id: 'switch', title: 'Switch', category: 'Component', path: 'components', description: 'Av/på bryter' },
  { id: 'table', title: 'Table', category: 'Component', path: 'components', description: 'Tabeller for data' },
  { id: 'tabs', title: 'Tabs', category: 'Component', path: 'components', description: 'Faner for inndeling av innhold' },
  { id: 'tag', title: 'Tag', category: 'Component', path: 'components', description: 'Merkelapper og emneknagger' },
  { id: 'textarea', title: 'Textarea', category: 'Component', path: 'components', description: 'Flerlinjers tekstfelt' },
  { id: 'tooltip', title: 'Tooltip', category: 'Component', path: 'components', description: 'Hjelpetekster ved hover' },

  // Design Docs - For Designere
  { id: 'figma-oppkobling', title: 'Figma tilkobling', category: 'Design', path: 'design/figma-oppkobling', description: 'Hvordan koble til Figma-biblioteket' },
  { id: 'oppstart', title: 'Oppstart', category: 'Design', path: 'design/oppstart', description: 'Oppsett av arbeidsområde' },
  { id: 'lage-komponenter', title: 'Lage ett nytt komponent', category: 'Design', path: 'design/lage-komponenter', description: 'Veileder for komponentbygging' },
  { id: 'praktiske-eksempler', title: 'Praktiske eksempler', category: 'Design', path: 'design/praktiske-eksempler', description: 'Eksempler på bruk av designsystemet' },
  { id: 'token-studio', title: 'Token Studio', category: 'Design', path: 'design/token-studio', description: 'Bruk av Token Studio' },
  
  // Design Docs - Farger
  { id: 'fargesystem', title: 'Sette opp ditt eget fargesystem', category: 'Design', path: 'design/fargesystem', description: 'Hvordan sette opp farger' },
  { id: 'temabygger', title: 'Temabygger', category: 'Design', path: 'design/temabygger', description: 'Designsystemets temagenerator' },
  { id: 'bruk-farger', title: 'Bruk fargene', category: 'Design', path: 'design/bruk-farger', description: 'Bruk genererte farger' },
  
  // Design Docs - Bidra
  { id: 'foresla-design', title: 'Foreslå nytt design', category: 'Design', path: 'design/foresla-design', description: 'Hvordan bidra med nytt design' },

  // Design Docs - Designelementer
  { id: 'hva-er-design-tokens', title: 'Hva er design tokens', category: 'Design', path: 'design/hva-er-design-tokens', description: 'Introduksjon til design tokens' },
  { id: 'design-tokens-i-figma', title: 'Design tokens i Figma', category: 'Design', path: 'design/design-tokens-i-figma', description: 'Bruke tokens i Figma' },
  { id: 'farger-navnestruktur', title: 'Farger: Navnestruktur', category: 'Design', path: 'design/farger-navnestruktur', description: 'Navngiving av farger' },
  { id: 'farger-oversikt', title: 'Farger: Oversikt', category: 'Design', path: 'design/farger-oversikt', description: 'Oversikt og forklaringer av farger' },
  { id: 'farge-tokens', title: 'Farge-tokens', category: 'Design', path: 'design/farge-tokens', description: 'Tokens for farger' },
  { id: 'skygger-bruk', title: 'Bruk av skygger', category: 'Design', path: 'design/skygger-bruk', description: 'Retningslinjer for skygger' },
  { id: 'skygge-tokens', title: 'Skygge-tokens', category: 'Design', path: 'design/skygge-tokens', description: 'Tokens for skygger' },
  { id: 'komponent-storrelser', title: 'Komponentstørrelser', category: 'Design', path: 'design/komponent-storrelser', description: 'Størrelsesguide for komponenter' },
  { id: 'storrelse-tokens', title: 'Størrelse-tokens', category: 'Design', path: 'design/storrelse-tokens', description: 'Tokens for størrelser' },
  { id: 'font-family', title: 'Typografi: Font-family', category: 'Design', path: 'design/font-family', description: 'Font-familier' },
  { id: 'typografi-tokens', title: 'Typografi-tokens', category: 'Design', path: 'design/typografi-tokens', description: 'Tokens for typografi' },

  // Code Docs
  { id: 'code-intro', title: 'Oversikt (Kode)', category: 'Code', path: 'code/intro', description: 'Startside for kode' },
  { id: 'kom-i-gang', title: 'Kom i gang (Kode)', category: 'Code', path: 'code/kom-i-gang', description: 'Installasjon og oppsett' },
  { id: 'figma-mcp', title: 'Fra Figma til Kode (MCP)', category: 'Code', path: 'code/figma-mcp', description: 'Automatisert arbeidsflyt med MCP' },
  { id: 'komponent-kreasjon', title: 'Komponent Kreasjon', category: 'Code', path: 'code/komponent-kreasjon', description: 'Opprette nye komponenter' },
  { id: 'progression', title: 'Progresjon', category: 'Code', path: 'code/progression', description: 'Fra design til ferdig komponent' },
  { id: 'metadata-files', title: 'Metadata filer', category: 'Code', path: 'code/metadata-files', description: 'Struktur og bruk av metadata.json' },
];
