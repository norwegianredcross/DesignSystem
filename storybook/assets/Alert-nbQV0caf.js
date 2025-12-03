import{j as e}from"./iframe-03EQUTJ1.js";import{useMDXComponents as i}from"./index-mVNz5Rtx.js";import{M as t,P as o,C as d,a as n}from"./WithTooltip-SK46ZJ2J-CiJFuvA6.js";import{A as a,I as k,S as h,a as g,F as j,U as m,M as c,b as u,L as x}from"./Alert.stories--zSw-CJw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cee1HQT0.js";import"./lite-DaUVFjkg.js";function l(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(r.h1,{id:"alert",children:"Alert"}),`
`,e.jsxs(r.h4,{id:"alert-brukes-for-å-vise-viktig-informasjon-som-du-ønsker-at-brukeren-skal-legge-ekstra-merke-til-komponenten-er-visuelt-tydelig-og-designet-for-å-trekke-oppmerksomhet-uten-å-være-forstyrrende-teksten-i-varselet-bør-være-kort-konsis-og-tydelig",children:[e.jsx(r.code,{children:"Alert"})," brukes for å vise viktig informasjon som du ønsker at brukeren skal legge ekstra merke til. Komponenten er visuelt tydelig og designet for å trekke oppmerksomhet uten å være forstyrrende. Teksten i varselet bør være kort, konsis og tydelig."]}),`
`,e.jsx(o,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Alert } from 'rk-designsystem';

<Alert data-color="info">
  Dette er et varsel som vises for å gi brukeren viktig informasjon.
</Alert>;
`})}),`
`,e.jsxs(r.h4,{id:"alert-brukes-til-å-kommunisere-status-advarsler-eller-viktige-hendelser-i-grensesnittet-uten-at-brukeren-nødvendigvis-må-gjøre-noe-forskjellen-på-variantene-ligger-primært-i-fargen-og-det-visuelle-uttrykket",children:[e.jsx(r.code,{children:"Alert"})," brukes til å kommunisere status, advarsler eller viktige hendelser i grensesnittet, uten at brukeren nødvendigvis må gjøre noe. Forskjellen på variantene ligger primært i fargen og det visuelle uttrykket."]}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"informasjon",children:"Informasjon"}),`
`,e.jsx(r.h4,{id:"bruk-info-når-du-ønsker-å-formidle-nøytral-og-nyttig-informasjon",children:"Bruk info når du ønsker å formidle nøytral og nyttig informasjon."}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(r.h3,{id:"suksess",children:"Suksess"}),`
`,e.jsx(r.h4,{id:"bruk-success-for-å-bekrefte-at-brukeren-har-fullført-en-oppgave-eller-at-noe-gikk-som-forventet",children:"Bruk success for å bekrefte at brukeren har fullført en oppgave eller at noe gikk som forventet."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.h3,{id:"advarsel",children:"Advarsel"}),`
`,e.jsx(r.h4,{id:"bruk-warning-for-å-varsle-brukeren-om-et-potensielt-problem-eller-behov-for-handling",children:"Bruk warning for å varsle brukeren om et potensielt problem eller behov for handling."}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"feilmelding",children:"Feilmelding"}),`
`,e.jsx(r.h4,{id:"bruk-danger-for-å-informere-brukeren-om-en-alvorlig-feil-eller-hindring",children:"Bruk danger for å informere brukeren om en alvorlig feil eller hindring."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"ulike-mønstre",children:"Ulike mønstre"}),`
`,e.jsx(r.h3,{id:"uten-tittel",children:"Uten tittel"}),`
`,e.jsxs(r.h4,{id:"hvis-meldingen-er-kort-og-kun-består-av-én-setning-er-det-ofte-bedre-å-ikke-inkludere-titleprop",children:["Hvis meldingen er kort og kun består av én setning, er det ofte bedre å ikke inkludere ",e.jsx(r.code,{children:"title"}),"‑prop."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h3,{id:"med-lenke",children:"Med lenke"}),`
`,e.jsx(r.h4,{id:"varsler-kan-også-inneholde-lenker-dersom-det-hjelper-brukeren-med-å-løse-en-oppgave-unngå-lenker-som-tar-brukeren-ut-av-konteksten-med-mindre-det-er-nødvendig",children:"Varsler kan også inneholde lenker dersom det hjelper brukeren med å løse en oppgave. Unngå lenker som tar brukeren ut av konteksten med mindre det er nødvendig."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"størrelser",children:"Størrelser"}),`
`,e.jsx(r.h4,{id:"alert-kommer-i-forskjellige-størrelser-tilpasset-ulike-flater",children:"Alert kommer i forskjellige størrelser tilpasset ulike flater."}),`
`,e.jsx(r.h3,{id:"liten-størrelse",children:"Liten størrelse"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(r.h3,{id:"stor-størrelse",children:"Stor størrelse"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(r.h4,{id:"bruk-alert-med-omtanke--for-mange-varsler-kan-føre-til-at-brukeren-slutter-å-merke-seg-dem-et-varsel-bør-alltid-ha-en-klar-hensikt-og-et-tydelig-språk",children:"Bruk Alert med omtanke – for mange varsler kan føre til at brukeren slutter å merke seg dem. Et varsel bør alltid ha en klar hensikt og et tydelig språk."}),`
`,e.jsx(r.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Formidl kun viktig informasjon."}),`
`,e.jsx(r.li,{children:"Bruk korte, forståelige setninger."}),`
`,e.jsx(r.li,{children:"Sørg for god kontrast mellom tekst og bakgrunn."}),`
`]}),`
`,e.jsx(r.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Flere varsler etter hverandre."}),`
`,e.jsx(r.li,{children:"Varsler som erstatter vanlig sideinnhold."}),`
`,e.jsx(r.li,{children:"Varsler for skjemavalidering – bruk komponentens feilmeldingsfelt isteden."}),`
`]}),`
`,e.jsx(r.h3,{id:"tekst",children:"Tekst"}),`
`,e.jsx(r.h4,{id:"en-god-alerttekst-bør",children:"En god alert‑tekst bør:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Fortelle hva som skjedde. - “Kunne ikke koble til konto.”"}),`
`,e.jsx(r.li,{children:"Forklare hvorfor det skjedde. - “På grunn av tekniske problemer.”"}),`
`,e.jsx(r.li,{children:"Foreslå løsning. - “Prøv igjen senere.”"}),`
`]}),`
`,e.jsx(r.h5,{id:"vær-tydelig-og-bevisst-på-tone-og-språk-unngå-tekniske-detaljer-brukeren-ikke-trenger",children:"Vær tydelig og bevisst på tone og språk. Unngå tekniske detaljer brukeren ikke trenger."}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["Varsler som oppstår dynamisk må håndteres riktig slik at skjermlesere kan fange dem opp. Dette gjøres ved å bruke live regions med ",e.jsx(r.code,{children:'role="alert"'})," eller ",e.jsx(r.code,{children:'role="status"'}),"."]}),`
`,e.jsx(r.p,{children:"For statiske varsler trengs ingen ARIA‑attributter."}),`
`,e.jsxs(r.p,{children:["For dynamiske varsler skal ",e.jsx(r.code,{children:'role="alert"'})," ligge på containere som omslutter Alert, ikke på selve komponenten."]}),`
`,e.jsx(r.h2,{id:"cssvariabler",children:"CSS‑variabler"}),`
`,e.jsx(r.h4,{id:"her-er-tilgjengelige-cssvariabler-for-alert-slik-at-du-kan-tilpasse-farger-og-spacing-ved-behov",children:"Her er tilgjengelige CSS‑variabler for Alert, slik at du kan tilpasse farger og spacing ved behov."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--alert-background-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--alert-border-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--alert-text-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--alert-spacing"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--alert-border-radius"})}),`
`]})]})}function F(s={}){const{wrapper:r}={...i(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(l,{...s})}):l(s)}export{F as default};
