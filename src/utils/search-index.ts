export interface SearchItem {
  id: string;
  title: string;
  description?: string;
  category: 'Component' | 'Page' | 'Design' | 'Code';
  path: string; // Page name used in setPage or full URL
}

/**
 * Søkeindeksen for dokumentasjonssiden. Hver path må peke på en side eller
 * artikkel som faktisk finnes — src/utils/search-index.test.ts validerer
 * design/- og code/-stier mot artiklene sidene rendrer, så indeksen ikke
 * kan drifte uten at testen feiler.
 */
export const searchIndex: SearchItem[] = [
  // Pages
  { id: 'home', title: 'Hjem', category: 'Page', path: 'home', description: 'Forsiden' },
  { id: 'components', title: 'Komponenter', category: 'Page', path: 'components', description: 'Oversikt over alle komponenter' },
  { id: 'whats-new', title: 'Hva er nytt', category: 'Page', path: 'whats-new', description: 'Utgivelser og endringer i designsystemet' },
  { id: 'design', title: 'Design', category: 'Page', path: 'design', description: 'Designretningslinjer og prinsipper' },
  { id: 'code', title: 'Kode', category: 'Page', path: 'code', description: 'Utviklerdokumentasjon og oppsett' },
  { id: 'tokens', title: 'Tokens', category: 'Page', path: 'tokens', description: 'Design tokens: farger, størrelser og typografi' },

  // Components (samme utvalg som komponentkatalogen)
  { id: 'alert', title: 'Alert', category: 'Component', path: 'components/alert', description: 'Varselbokser for viktige meldinger' },
  { id: 'avatar', title: 'Avatar', category: 'Component', path: 'components/avatar', description: 'Profilbilder og initialer' },
  { id: 'badge', title: 'Badge', category: 'Component', path: 'components/badge', description: 'Små merker for status eller antall' },
  { id: 'breadcrumbs', title: 'Breadcrumbs', category: 'Component', path: 'components/breadcrumbs', description: 'Brødsmulesti for navigasjon' },
  { id: 'button', title: 'Button', category: 'Component', path: 'components/button', description: 'Knapper for handlinger' },
  { id: 'card', title: 'Card', category: 'Component', path: 'components/card', description: 'Kort for gruppering av innhold' },
  { id: 'carousel', title: 'Carousel', category: 'Component', path: 'components/carousel', description: 'Bildekarusell' },
  { id: 'checkbox', title: 'Checkbox', category: 'Component', path: 'components/checkbox', description: 'Valg av flere alternativer' },
  { id: 'chip', title: 'Chip', category: 'Component', path: 'components/chip', description: 'Filtrering og valg i kompakte merker' },
  { id: 'dateinput', title: 'DateInput', category: 'Component', path: 'components/dateinput', description: 'Tekstfelt for dato (dd.mm.åååå)' },
  { id: 'datepicker', title: 'DatePicker', category: 'Component', path: 'components/datepicker', description: 'Kalender for valg av dato' },
  { id: 'details', title: 'Details', category: 'Component', path: 'components/details', description: 'Ekspanderbare seksjoner' },
  { id: 'dialog', title: 'Dialog', category: 'Component', path: 'components/dialog', description: 'Modale vinduer' },
  { id: 'divider', title: 'Divider', category: 'Component', path: 'components/divider', description: 'Skillelinjer' },
  { id: 'donor', title: 'Donor', category: 'Component', path: 'components/donor', description: 'Donasjonsmodul med beløpsvalg og Vipps' },
  { id: 'dropdown', title: 'Dropdown', category: 'Component', path: 'components/dropdown', description: 'Nedtrekksmenyer' },
  { id: 'errorsummary', title: 'ErrorSummary', category: 'Component', path: 'components/errorsummary', description: 'Oppsummering av skjemafeil' },
  { id: 'field', title: 'Field', category: 'Component', path: 'components/field', description: 'Feltoppsett med etikett og beskrivelse' },
  { id: 'fieldset', title: 'Fieldset', category: 'Component', path: 'components/fieldset', description: 'Gruppering av skjemafelt' },
  { id: 'footer', title: 'Footer', category: 'Component', path: 'components/footer', description: 'Bunntekst med lenker og kontaktinformasjon' },
  { id: 'graphicelement', title: 'GraphicElement', category: 'Component', path: 'components/graphicelement', description: 'Grafiske merkevareelementer fra designretningen' },
  { id: 'header', title: 'Header', category: 'Component', path: 'components/header', description: 'Topptekst og navigasjon' },
  { id: 'heading', title: 'Heading', category: 'Component', path: 'components/heading', description: 'Overskrifter' },
  { id: 'input', title: 'Input', category: 'Component', path: 'components/input', description: 'Tekstfelt for brukerinput' },
  { id: 'label', title: 'Label', category: 'Component', path: 'components/label', description: 'Etiketter for skjemafelt' },
  { id: 'link', title: 'Link', category: 'Component', path: 'components/link', description: 'Lenker til andre sider' },
  { id: 'list', title: 'List', category: 'Component', path: 'components/list', description: 'Ordnede og uordnede lister' },
  { id: 'pagination', title: 'Pagination', category: 'Component', path: 'components/pagination', description: 'Navigasjon mellom sider' },
  { id: 'paragraph', title: 'Paragraph', category: 'Component', path: 'components/paragraph', description: 'Brødtekst' },
  { id: 'popover', title: 'Popover', category: 'Component', path: 'components/popover', description: 'Flytende innholdsbokser' },
  { id: 'radio', title: 'Radio', category: 'Component', path: 'components/radio', description: 'Valg av ett alternativ' },
  { id: 'search', title: 'Search', category: 'Component', path: 'components/search', description: 'Søkefelter' },
  { id: 'select', title: 'Select', category: 'Component', path: 'components/select', description: 'Valgmeny' },
  { id: 'skeletonloader', title: 'SkeletonLoader', category: 'Component', path: 'components/skeletonloader', description: 'Plassholdere under lasting' },
  { id: 'skiplink', title: 'SkipLink', category: 'Component', path: 'components/skiplink', description: 'Hopp til hovedinnhold' },
  { id: 'spinnerloader', title: 'SpinnerLoader', category: 'Component', path: 'components/spinnerloader', description: 'Lasteindikator' },
  { id: 'suggestion', title: 'Suggestion', category: 'Component', path: 'components/suggestion', description: 'Søkefelt med forslag' },
  { id: 'switch', title: 'Switch', category: 'Component', path: 'components/switch', description: 'Av/på bryter' },
  { id: 'table', title: 'Table', category: 'Component', path: 'components/table', description: 'Tabeller for data' },
  { id: 'tabs', title: 'Tabs', category: 'Component', path: 'components/tabs', description: 'Faner for inndeling av innhold' },
  { id: 'tag', title: 'Tag', category: 'Component', path: 'components/tag', description: 'Merkelapper og emneknagger' },
  { id: 'textarea', title: 'Textarea', category: 'Component', path: 'components/textarea', description: 'Flerlinjers tekstfelt' },
  { id: 'textfield', title: 'Textfield', category: 'Component', path: 'components/textfield', description: 'Komplett tekstfelt med etikett' },
  { id: 'togglegroup', title: 'ToggleGroup', category: 'Component', path: 'components/togglegroup', description: 'Grupperte veksleknapper' },
  { id: 'tooltip', title: 'Tooltip', category: 'Component', path: 'components/tooltip', description: 'Hjelpetekster ved hover' },

  { id: 'validationmessage', title: 'ValidationMessage', category: 'Component', path: 'components/validationmessage', description: 'Feilmeldinger for skjemafelt' },

  // Design — For designere
  { id: 'figma-oppkobling', title: 'Figma tilkobling', category: 'Design', path: 'design/figma-oppkobling', description: 'Hvordan koble til Figma-biblioteket' },
  { id: 'oppstart', title: 'Oppstart', category: 'Design', path: 'design/oppstart', description: 'Oppsett av arbeidsområde' },
  { id: 'lage-komponenter', title: 'Lage en ny komponent', category: 'Design', path: 'design/lage-komponenter', description: 'Veileder for komponentbygging' },
  { id: 'praktiske-eksempler', title: 'Praktiske eksempler', category: 'Design', path: 'design/praktiske-eksempler', description: 'Eksempler på bruk av designsystemet' },
  { id: 'token-studio', title: 'Token Studio', category: 'Design', path: 'design/token-studio', description: 'Bruk av Token Studio' },

  // Design — Farger
  { id: 'fargesystem', title: 'Sette opp ditt eget fargesystem', category: 'Design', path: 'design/fargesystem', description: 'Hvordan sette opp farger' },
  { id: 'temabygger', title: 'Temabygger', category: 'Design', path: 'design/temabygger', description: 'Designsystemets temagenerator' },
  { id: 'bruk-farger', title: 'Bruk fargene', category: 'Design', path: 'design/bruk-farger', description: 'Bruk genererte farger' },

  // Design — Guider
  { id: 'vedlikeholde-design-tokens', title: 'Vedlikeholde design tokens', category: 'Design', path: 'design/vedlikeholde-design-tokens', description: 'Endre tokens og publisere ny versjon' },
  { id: 'endre-bygge-tema', title: 'Endre og bygge tema', category: 'Design', path: 'design/endre-bygge-tema', description: 'Temaoppsett og bygging av tokens' },
  { id: 'koble-tokens-til-figma', title: 'Koble tokens til Figma', category: 'Design', path: 'design/koble-tokens-til-figma', description: 'Synkronisere tokens med Figma' },

  // Design — Bidra
  { id: 'foresla-design', title: 'Foreslå nytt design', category: 'Design', path: 'design/foresla-design', description: 'Hvordan bidra med nytt design' },

  // Design — Designelementer
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

  // Code
  { id: 'kom-i-gang', title: 'Kom i gang (Kode)', category: 'Code', path: 'code/kom-i-gang', description: 'Installasjon og oppsett' },
  { id: 'code-design-tokens', title: 'Design tokens (Kode)', category: 'Code', path: 'code/design-tokens', description: 'Bruke tokens i kode' },
  { id: 'fonts', title: 'Fonter', category: 'Code', path: 'code/fonts', description: 'Oppsett av Source Sans 3' },
  { id: 'icons', title: 'Ikoner', category: 'Code', path: 'code/icons', description: 'Ikonbibliotek og bruk' },
  { id: 'contributing', title: 'Bidra med kode', category: 'Code', path: 'code/contributing', description: 'Retningslinjer for bidrag' },
  { id: 'figma-mcp-intro', title: 'Fra Figma til kode (MCP)', category: 'Code', path: 'code/figma-mcp-intro', description: 'Automatisert arbeidsflyt med MCP' },
  { id: 'figma-mcp-cursor', title: 'Figma MCP i Cursor', category: 'Code', path: 'code/figma-mcp-cursor', description: 'Oppsett av MCP i Cursor' },
  { id: 'figma-mcp-claude', title: 'Figma MCP i Claude', category: 'Code', path: 'code/figma-mcp-claude', description: 'Oppsett av MCP i Claude' },
  { id: 'komponent-kreasjon', title: 'Komponentkreasjon', category: 'Code', path: 'code/komponent-kreasjon', description: 'Opprette nye komponenter' },
  { id: 'metadata-files', title: 'Metadata-filer', category: 'Code', path: 'code/metadata-files', description: 'Struktur og bruk av metadata.json' },
];
