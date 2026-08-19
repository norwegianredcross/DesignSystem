import type { Language } from '../context/LanguageContext';

export interface SearchItem {
  id: string;
  title: string;
  // Keyed by the UI language code so consumers can index straight into the
  // record with the active language instead of branching on it.
  description?: Record<Language, string>;
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
  { id: 'home', title: 'Hjem', category: 'Page', path: 'home', description: { NO: 'Forsiden', EN: 'The front page' } },
  { id: 'components', title: 'Komponenter', category: 'Page', path: 'components', description: { NO: 'Oversikt over alle komponenter', EN: 'Overview of all components' } },
  { id: 'whats-new', title: 'Hva er nytt', category: 'Page', path: 'whats-new', description: { NO: 'Utgivelser og endringer i designsystemet', EN: 'Releases and changes in the design system' } },
  { id: 'design', title: 'Design', category: 'Page', path: 'design', description: { NO: 'Designretningslinjer og prinsipper', EN: 'Design guidelines and principles' } },
  { id: 'code', title: 'Kode', category: 'Page', path: 'code', description: { NO: 'Utviklerdokumentasjon og oppsett', EN: 'Developer documentation and setup' } },
  { id: 'tokens', title: 'Tokens', category: 'Page', path: 'tokens', description: { NO: 'Design tokens: farger, størrelser og typografi', EN: 'Design tokens: colors, sizes and typography' } },

  // Components (samme utvalg som komponentkatalogen)
  { id: 'alert', title: 'Alert', category: 'Component', path: 'components/alert', description: { NO: 'Varselbokser for viktige meldinger', EN: 'Alert boxes for important messages' } },
  { id: 'avatar', title: 'Avatar', category: 'Component', path: 'components/avatar', description: { NO: 'Profilbilder og initialer', EN: 'Profile pictures and initials' } },
  { id: 'badge', title: 'Badge', category: 'Component', path: 'components/badge', description: { NO: 'Små merker for status eller antall', EN: 'Small badges for status or counts' } },
  { id: 'breadcrumbs', title: 'Breadcrumbs', category: 'Component', path: 'components/breadcrumbs', description: { NO: 'Brødsmulesti for navigasjon', EN: 'Breadcrumb trail for navigation' } },
  { id: 'button', title: 'Button', category: 'Component', path: 'components/button', description: { NO: 'Knapper for handlinger', EN: 'Buttons for actions' } },
  { id: 'card', title: 'Card', category: 'Component', path: 'components/card', description: { NO: 'Kort for gruppering av innhold', EN: 'Cards for grouping content' } },
  { id: 'carousel', title: 'Carousel', category: 'Component', path: 'components/carousel', description: { NO: 'Bildekarusell', EN: 'Image carousel' } },
  { id: 'checkbox', title: 'Checkbox', category: 'Component', path: 'components/checkbox', description: { NO: 'Valg av flere alternativer', EN: 'Selecting multiple options' } },
  { id: 'chip', title: 'Chip', category: 'Component', path: 'components/chip', description: { NO: 'Filtrering og valg i kompakte merker', EN: 'Filtering and selection in compact badges' } },
  { id: 'dateinput', title: 'DateInput', category: 'Component', path: 'components/dateinput', description: { NO: 'Tekstfelt for dato (dd.mm.åååå)', EN: 'Text field for dates (dd.mm.yyyy)' } },
  { id: 'datepicker', title: 'DatePicker', category: 'Component', path: 'components/datepicker', description: { NO: 'Kalender for valg av dato', EN: 'Calendar for picking a date' } },
  { id: 'details', title: 'Details', category: 'Component', path: 'components/details', description: { NO: 'Ekspanderbare seksjoner', EN: 'Expandable sections' } },
  { id: 'dialog', title: 'Dialog', category: 'Component', path: 'components/dialog', description: { NO: 'Modale vinduer', EN: 'Modal windows' } },
  { id: 'divider', title: 'Divider', category: 'Component', path: 'components/divider', description: { NO: 'Skillelinjer', EN: 'Divider lines' } },
  { id: 'donor', title: 'Donor', category: 'Component', path: 'components/donor', description: { NO: 'Donasjonsmodul med beløpsvalg og Vipps', EN: 'Donation module with amount selection and Vipps' } },
  { id: 'dropdown', title: 'Dropdown', category: 'Component', path: 'components/dropdown', description: { NO: 'Nedtrekksmenyer', EN: 'Dropdown menus' } },
  { id: 'errorsummary', title: 'ErrorSummary', category: 'Component', path: 'components/errorsummary', description: { NO: 'Oppsummering av skjemafeil', EN: 'Summary of form errors' } },
  { id: 'field', title: 'Field', category: 'Component', path: 'components/field', description: { NO: 'Feltoppsett med etikett og beskrivelse', EN: 'Field layout with label and description' } },
  { id: 'fieldset', title: 'Fieldset', category: 'Component', path: 'components/fieldset', description: { NO: 'Gruppering av skjemafelt', EN: 'Grouping of form fields' } },
  { id: 'footer', title: 'Footer', category: 'Component', path: 'components/footer', description: { NO: 'Bunntekst med lenker og kontaktinformasjon', EN: 'Footer with links and contact information' } },
  { id: 'graphicelement', title: 'GraphicElement', category: 'Component', path: 'components/graphicelement', description: { NO: 'Grafiske merkevareelementer fra designretningen', EN: 'Graphic brand elements from the visual direction' } },
  { id: 'header', title: 'Header', category: 'Component', path: 'components/header', description: { NO: 'Topptekst og navigasjon', EN: 'Header and navigation' } },
  { id: 'heading', title: 'Heading', category: 'Component', path: 'components/heading', description: { NO: 'Overskrifter', EN: 'Headings' } },
  { id: 'input', title: 'Input', category: 'Component', path: 'components/input', description: { NO: 'Tekstfelt for brukerinput', EN: 'Text field for user input' } },
  { id: 'label', title: 'Label', category: 'Component', path: 'components/label', description: { NO: 'Etiketter for skjemafelt', EN: 'Labels for form fields' } },
  { id: 'link', title: 'Link', category: 'Component', path: 'components/link', description: { NO: 'Lenker til andre sider', EN: 'Links to other pages' } },
  { id: 'list', title: 'List', category: 'Component', path: 'components/list', description: { NO: 'Ordnede og uordnede lister', EN: 'Ordered and unordered lists' } },
  { id: 'pagination', title: 'Pagination', category: 'Component', path: 'components/pagination', description: { NO: 'Navigasjon mellom sider', EN: 'Navigation between pages' } },
  { id: 'paragraph', title: 'Paragraph', category: 'Component', path: 'components/paragraph', description: { NO: 'Brødtekst', EN: 'Body text' } },
  { id: 'popover', title: 'Popover', category: 'Component', path: 'components/popover', description: { NO: 'Flytende innholdsbokser', EN: 'Floating content boxes' } },
  { id: 'radio', title: 'Radio', category: 'Component', path: 'components/radio', description: { NO: 'Valg av ett alternativ', EN: 'Selecting a single option' } },
  { id: 'search', title: 'Search', category: 'Component', path: 'components/search', description: { NO: 'Søkefelter', EN: 'Search fields' } },
  { id: 'select', title: 'Select', category: 'Component', path: 'components/select', description: { NO: 'Valgmeny', EN: 'Select menu' } },
  { id: 'skeletonloader', title: 'SkeletonLoader', category: 'Component', path: 'components/skeletonloader', description: { NO: 'Plassholdere under lasting', EN: 'Placeholders while loading' } },
  { id: 'skiplink', title: 'SkipLink', category: 'Component', path: 'components/skiplink', description: { NO: 'Hopp til hovedinnhold', EN: 'Skip to main content' } },
  { id: 'spinnerloader', title: 'SpinnerLoader', category: 'Component', path: 'components/spinnerloader', description: { NO: 'Lasteindikator', EN: 'Loading indicator' } },
  { id: 'suggestion', title: 'Suggestion', category: 'Component', path: 'components/suggestion', description: { NO: 'Søkefelt med forslag', EN: 'Search field with suggestions' } },
  { id: 'switch', title: 'Switch', category: 'Component', path: 'components/switch', description: { NO: 'Av/på bryter', EN: 'On/off toggle' } },
  { id: 'table', title: 'Table', category: 'Component', path: 'components/table', description: { NO: 'Tabeller for data', EN: 'Tables for data' } },
  { id: 'tabs', title: 'Tabs', category: 'Component', path: 'components/tabs', description: { NO: 'Faner for inndeling av innhold', EN: 'Tabs for dividing content' } },
  { id: 'tag', title: 'Tag', category: 'Component', path: 'components/tag', description: { NO: 'Merkelapper og emneknagger', EN: 'Labels and hashtags' } },
  { id: 'textarea', title: 'Textarea', category: 'Component', path: 'components/textarea', description: { NO: 'Flerlinjers tekstfelt', EN: 'Multi-line text field' } },
  { id: 'textfield', title: 'Textfield', category: 'Component', path: 'components/textfield', description: { NO: 'Komplett tekstfelt med etikett', EN: 'Complete text field with label' } },
  { id: 'togglegroup', title: 'ToggleGroup', category: 'Component', path: 'components/togglegroup', description: { NO: 'Grupperte veksleknapper', EN: 'Grouped toggle buttons' } },
  { id: 'tooltip', title: 'Tooltip', category: 'Component', path: 'components/tooltip', description: { NO: 'Hjelpetekster ved hover', EN: 'Help text on hover' } },

  { id: 'validationmessage', title: 'ValidationMessage', category: 'Component', path: 'components/validationmessage', description: { NO: 'Feilmeldinger for skjemafelt', EN: 'Error messages for form fields' } },

  // Design — Designretning
  { id: 'designretning', title: 'Designretning', category: 'Design', path: 'design/designretning', description: { NO: 'Prinsipper og virkemidler for digitale flater', EN: 'Principles and approaches for digital surfaces' } },

  // Design — For designere
  { id: 'figma-oppkobling', title: 'Figma tilkobling', category: 'Design', path: 'design/figma-oppkobling', description: { NO: 'Hvordan koble til Figma-biblioteket', EN: 'How to connect to the Figma library' } },
  { id: 'oppstart', title: 'Oppstart', category: 'Design', path: 'design/oppstart', description: { NO: 'Oppsett av arbeidsområde', EN: 'Setting up your workspace' } },
  { id: 'lage-komponenter', title: 'Lage en ny komponent', category: 'Design', path: 'design/lage-komponenter', description: { NO: 'Veileder for komponentbygging', EN: 'Guide to building components' } },
  { id: 'praktiske-eksempler', title: 'Praktiske eksempler', category: 'Design', path: 'design/praktiske-eksempler', description: { NO: 'Eksempler på bruk av designsystemet', EN: 'Examples of using the design system' } },
  { id: 'token-studio', title: 'Token Studio', category: 'Design', path: 'design/token-studio', description: { NO: 'Bruk av Token Studio', EN: 'Using Token Studio' } },

  // Design — Farger
  { id: 'fargesystem', title: 'Sette opp ditt eget fargesystem', category: 'Design', path: 'design/fargesystem', description: { NO: 'Hvordan sette opp farger', EN: 'How to set up colors' } },
  { id: 'temabygger', title: 'Temabygger', category: 'Design', path: 'design/temabygger', description: { NO: 'Designsystemets temagenerator', EN: "The design system's theme generator" } },
  { id: 'bruk-farger', title: 'Bruk fargene', category: 'Design', path: 'design/bruk-farger', description: { NO: 'Bruk genererte farger', EN: 'Using the generated colors' } },

  // Design — Guider
  { id: 'vedlikeholde-design-tokens', title: 'Vedlikeholde design tokens', category: 'Design', path: 'design/vedlikeholde-design-tokens', description: { NO: 'Endre tokens og publisere ny versjon', EN: 'Changing tokens and publishing a new version' } },
  { id: 'endre-bygge-tema', title: 'Endre og bygge tema', category: 'Design', path: 'design/endre-bygge-tema', description: { NO: 'Temaoppsett og bygging av tokens', EN: 'Theme setup and building tokens' } },
  { id: 'koble-tokens-til-figma', title: 'Koble tokens til Figma', category: 'Design', path: 'design/koble-tokens-til-figma', description: { NO: 'Synkronisere tokens med Figma', EN: 'Synchronizing tokens with Figma' } },

  // Design — Bidra
  { id: 'foresla-design', title: 'Foreslå nytt design', category: 'Design', path: 'design/foresla-design', description: { NO: 'Hvordan bidra med nytt design', EN: 'How to contribute new design' } },

  // Design — Designelementer
  { id: 'hva-er-design-tokens', title: 'Hva er design tokens', category: 'Design', path: 'design/hva-er-design-tokens', description: { NO: 'Introduksjon til design tokens', EN: 'Introduction to design tokens' } },
  { id: 'design-tokens-i-figma', title: 'Design tokens i Figma', category: 'Design', path: 'design/design-tokens-i-figma', description: { NO: 'Bruke tokens i Figma', EN: 'Using tokens in Figma' } },
  { id: 'farger-navnestruktur', title: 'Farger: Navnestruktur', category: 'Design', path: 'design/farger-navnestruktur', description: { NO: 'Navngiving av farger', EN: 'Naming of colors' } },
  { id: 'farger-oversikt', title: 'Farger: Oversikt', category: 'Design', path: 'design/farger-oversikt', description: { NO: 'Oversikt og forklaringer av farger', EN: 'Overview and explanations of the colors' } },
  { id: 'farge-tokens', title: 'Farge-tokens', category: 'Design', path: 'design/farge-tokens', description: { NO: 'Tokens for farger', EN: 'Tokens for colors' } },
  { id: 'skygger-bruk', title: 'Bruk av skygger', category: 'Design', path: 'design/skygger-bruk', description: { NO: 'Retningslinjer for skygger', EN: 'Guidelines for shadows' } },
  { id: 'skygge-tokens', title: 'Skygge-tokens', category: 'Design', path: 'design/skygge-tokens', description: { NO: 'Tokens for skygger', EN: 'Tokens for shadows' } },
  { id: 'komponent-storrelser', title: 'Komponentstørrelser', category: 'Design', path: 'design/komponent-storrelser', description: { NO: 'Størrelsesguide for komponenter', EN: 'Size guide for components' } },
  { id: 'storrelse-tokens', title: 'Størrelse-tokens', category: 'Design', path: 'design/storrelse-tokens', description: { NO: 'Tokens for størrelser', EN: 'Tokens for sizes' } },
  { id: 'font-family', title: 'Typografi: Font-family', category: 'Design', path: 'design/font-family', description: { NO: 'Font-familier', EN: 'Font families' } },
  { id: 'typografi-tokens', title: 'Typografi-tokens', category: 'Design', path: 'design/typografi-tokens', description: { NO: 'Tokens for typografi', EN: 'Tokens for typography' } },

  // Code
  { id: 'kom-i-gang', title: 'Kom i gang (Kode)', category: 'Code', path: 'code/kom-i-gang', description: { NO: 'Installasjon og oppsett', EN: 'Installation and setup' } },
  { id: 'code-design-tokens', title: 'Design tokens (Kode)', category: 'Code', path: 'code/design-tokens', description: { NO: 'Bruke tokens i kode', EN: 'Using tokens in code' } },
  { id: 'fonts', title: 'Fonter', category: 'Code', path: 'code/fonts', description: { NO: 'Oppsett av Source Sans 3', EN: 'Setting up Source Sans 3' } },
  { id: 'icons', title: 'Ikoner', category: 'Code', path: 'code/icons', description: { NO: 'Ikonbibliotek og bruk', EN: 'Icon library and usage' } },
  { id: 'contributing', title: 'Bidra med kode', category: 'Code', path: 'code/contributing', description: { NO: 'Retningslinjer for bidrag', EN: 'Contribution guidelines' } },
  { id: 'figma-mcp-intro', title: 'Fra Figma til kode (MCP)', category: 'Code', path: 'code/figma-mcp-intro', description: { NO: 'Automatisert arbeidsflyt med MCP', EN: 'Automated workflow with MCP' } },
  { id: 'figma-mcp-cursor', title: 'Figma MCP i Cursor', category: 'Code', path: 'code/figma-mcp-cursor', description: { NO: 'Oppsett av MCP i Cursor', EN: 'Setting up MCP in Cursor' } },
  { id: 'figma-mcp-claude', title: 'Figma MCP i Claude', category: 'Code', path: 'code/figma-mcp-claude', description: { NO: 'Oppsett av MCP i Claude', EN: 'Setting up MCP in Claude' } },
  { id: 'komponent-kreasjon', title: 'Komponentkreasjon', category: 'Code', path: 'code/komponent-kreasjon', description: { NO: 'Opprette nye komponenter', EN: 'Creating new components' } },
  { id: 'metadata-files', title: 'Metadata-filer', category: 'Code', path: 'code/metadata-files', description: { NO: 'Struktur og bruk av metadata.json', EN: 'Structure and use of metadata.json' } },
];
