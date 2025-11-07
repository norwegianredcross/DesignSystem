import{j as e}from"./iframe-BHNwM2Px.js";import{useMDXComponents as t}from"./index-BMNprVOH.js";import{M as d,P as l,C as o,a as r}from"./WithTooltip-SK46ZJ2J-COl1LJsS.js";import{B as a,P as h,S as c,T as k,D as g,a as j,b as p,W as x,I as u,L as m,A as f,c as b,d as v}from"./Button.stories-DQZInEBx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWQGlkjF.js";import"./index-BVhCOGqB.js";import"./button-q3L8iVDM.js";import"./index-D3MVKXs2.js";import"./lite-DaUVFjkg.js";import"./spinner-C7KuIz7y.js";import"./use-merge-refs-CPe1Q7jZ.js";import"./index-BBAMl6pC.js";import"./floating-ui.dom-BOb7AeKv.js";import"./Trash-MWSbEkiw.js";import"./useId-e2BG1_9j.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsxs(n.h4,{id:"button-brukes-for-å-la-brukere-utføre-handlinger-som-å-sende-inn-et-skjema-avbryte-en-prosess-eller-bekrefte-en-handling",children:[e.jsx(n.code,{children:"Button"})," brukes for å la brukere utføre handlinger, som å sende inn et skjema, avbryte en prosess, eller bekrefte en handling."]}),`
`,e.jsx(l,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
import { Button } from 'rk-designsystem';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';



// Standard knapp

<Button variant="primary">Lagre endringer</Button>



// Sekundær knapp

<Button variant="secondary">Avbryt</Button>



// Knapp med ikon

<Button variant="tertiary" data-color="danger">

<TrashIcon aria-hidden />

Slett

</Button>



// Ikon-knapp (krever aria-label)

<Button icon aria-label="Legg til ny">

<PlusCircleIcon aria-hidden />

</Button>
`})}),`
`,e.jsxs(n.h4,{id:"knappen-er-den-mest-grunnleggende-interaktive-komponenten-den-har-flere-varianter-variant-farger-data-color-og-størrelser-data-size-for-å-passe-ulike-kontekster-og-hierarkier",children:["Knappen er den mest grunnleggende interaktive komponenten. Den har flere varianter (",e.jsx(n.code,{children:"variant"}),"), farger (",e.jsx(n.code,{children:"data-color"}),") og størrelser (",e.jsx(n.code,{children:"data-size"}),") for å passe ulike kontekster og hierarkier."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"varianter",children:"Varianter"}),`
`,e.jsxs(n.h4,{id:"bruk-variant-primary-secondary-tertiary-for-å-gi-knappen-riktig-visuelt-hierarki-primary-er-for-den-viktigste-handlingen-mens-tertiary-er-den-mest-nedtonede",children:["Bruk ",e.jsx(n.code,{children:"variant"})," ('primary', 'secondary', 'tertiary') for å gi knappen riktig visuelt hierarki. ",e.jsx(n.code,{children:"primary"})," er for den viktigste handlingen, mens ",e.jsx(n.code,{children:"tertiary"})," er den mest nedtonede."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(r,{of:k}),`
`,e.jsx(n.h3,{id:"farger",children:"Farger"}),`
`,e.jsxs(n.h4,{id:"bruk-data-color-for-å-endre-fargetema-danger-er-reservert-for-destruktive-handlinger-som-brukeren-bør-tenke-seg-om-to-ganger-før-de-utfører",children:["Bruk ",e.jsx(n.code,{children:"data-color"})," for å endre fargetema. ",e.jsx(n.code,{children:"danger"})," er reservert for destruktive handlinger som brukeren bør tenke seg om to ganger før de utfører."]}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"med-ikoner",children:"Med ikoner"}),`
`,e.jsx(n.h4,{id:"knapper-kan-inneholde-ikoner-for-å-gi-visuell-kontekst-ikoner-kan-plasseres-til-venstre-eller-høyre-for-teksten",children:"Knapper kan inneholde ikoner for å gi visuell kontekst. Ikoner kan plasseres til venstre eller høyre for teksten."}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"kun-ikon",children:"Kun ikon"}),`
`,e.jsxs(n.h4,{id:"for-kompakte-grensesnitt-som-i-en-verktøylinje-kan-en-knapp-kun-inneholde-et-ikon-disse-knappene-må-ha-en-aria-label-som-beskriver-handlingen-bruk-gjerne-tooltip-i-tillegg",children:["For kompakte grensesnitt, som i en verktøylinje, kan en knapp kun inneholde et ikon. Disse knappene ",e.jsx(n.strong,{children:"må"})," ha en ",e.jsx(n.code,{children:"aria-label"})," som beskriver handlingen. Bruk gjerne ",e.jsx(n.code,{children:"Tooltip"})," i tillegg."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"laster-loading",children:"Laster (Loading)"}),`
`,e.jsxs(n.h4,{id:"loading-propen-viser-en-spinner-og-deaktiverer-knappen-dette-er-nyttig-for-å-gi-tilbakemelding-til-brukeren-når-en-handling-tar-tid",children:[e.jsx(n.code,{children:"loading"}),"-propen viser en spinner og deaktiverer knappen. Dette er nyttig for å gi tilbakemelding til brukeren når en handling tar tid."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"som-lenke-as-link",children:"Som lenke (As Link)"}),`
`,e.jsxs(n.h4,{id:"ved-å-bruke-aschild-propen-kan-knappen-rendre-som-et-barn-element-for-eksempel-en-a-tag-dette-lar-deg-lage-en-lenke-som-ser-ut-som-en-knapp",children:["Ved å bruke ",e.jsx(n.code,{children:"asChild"}),"-propen kan knappen rendre som et barn-element, for eksempel en ",e.jsx(n.code,{children:"<a>"}),"-tag. Dette lar deg lage en lenke som ser ut som en knapp."]}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"størrelser",children:"Størrelser"}),`
`,e.jsxs(n.h4,{id:"knapper-støtter-data-size-sm-md-lg-for-å-tilpasse-størrelsen-til-ulike-flater-og-kontekster",children:["Knapper støtter ",e.jsx(n.code,{children:"data-size"})," ('sm', 'md', 'lg') for å tilpasse størrelsen til ulike flater og kontekster."]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(n.h4,{id:"knapper-har-en-viktig-funksjon-og-er-direkte-knyttet-til-en-handling",children:"Knapper har en viktig funksjon og er direkte knyttet til en handling."}),`
`,e.jsx(n.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vær handlingsorientert:"}),' Knappeteksten bør være kort og beskrive handlingen (f.eks. "Lagre", "Send inn", "Avbryt").']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prioriter:"})," Bruk ",e.jsx(n.code,{children:"primary"})," kun for den viktigste handlingen på siden. Ha som regel kun én ",e.jsx(n.code,{children:"primary"}),"-knapp synlig om gangen."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Bruk ",e.jsx(n.code,{children:"danger"})," med omhu:"]})," Reserver ",e.jsx(n.code,{children:'data-color="danger"'}),' for destruktive handlinger som "Slett" eller "Avslutt".']}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Bruk ",e.jsx(n.code,{children:"aria-label"}),":"]})," Alle ikon-knapper ",e.jsx(n.strong,{children:"må"})," ha en ",e.jsx(n.code,{children:"aria-label"})," som beskriver handlingen."]}),`
`]}),`
`,e.jsx(n.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for navigasjon:"})," Ikke bruk knapper for ren navigasjon til andre sider. Bruk en standard lenke (",e.jsx(n.code,{children:"<a>"}),") for dette (med mindre du bruker ",e.jsx(n.code,{children:"asChild"})," for å bevisst style en lenke som en knapp)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deaktiverte knapper:"})," Unngå ",e.jsx(n.code,{children:"disabled"}),"-knapper hvis mulig. Det er ofte bedre å la knappen være aktiv og vise en feilmelding dersom brukeren prøver å utføre handlingen uten å ha fylt ut nødvendig informasjon."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lange tekster:"})," Ikke bruk lange setninger i knapper. Hold det til 1-3 ord."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tekst:"})," En knapp må alltid ha en tilgjengelig tekst. Hvis den kun inneholder et ikon, må ",e.jsx(n.code,{children:"aria-label"})," brukes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikoner:"})," Ikoner som brukes ",e.jsx(n.em,{children:"sammen med"})," synlig tekst (f.eks. ",e.jsx(n.code,{children:"<TrashIcon /> Slett"}),") skal ha ",e.jsx(n.code,{children:'aria-hidden="true"'}),' for å unngå at skjermlesere leser "Søppel Slett".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loading:"})," ",e.jsx(n.code,{children:"loading"}),"-propen setter knappen i en ",e.jsx(n.code,{children:"disabled"}),"-tilstand. Dette er en av de få situasjonene hvor ",e.jsx(n.code,{children:"disabled"})," er anbefalt, da handlingen midlertidig er utilgjengelig."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"asChild"}),":"]})," Når du bruker ",e.jsx(n.code,{children:"asChild"})," med en ",e.jsx(n.code,{children:"<a>"}),"-tag, sørg for at den oppfører seg som en lenke (navigerer). Hvis den utfører en handling (som en ",e.jsx(n.code,{children:"<button>"}),"), bør den være en ",e.jsx(n.code,{children:"<button>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(n.h4,{id:"her-er-tilgjengelige-css-variabler-for-button",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-background-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-background-color-hover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-text-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-border-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-border-color-hover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-padding-inline"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-padding-block"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-font-size"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--button-icon-spacing"})}),`
`]})]})}function N(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{N as default};
