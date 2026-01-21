import{j as e}from"./iframe-C_1wQq6v.js";import{useMDXComponents as l}from"./index-CX9mov3n.js";import{M as t,P as d,C as o,a as s}from"./WithTooltip-SK46ZJ2J-CamqlUTv.js";import{D as a,a as h,b as c,L as j}from"./Details.stories-DpmqSlOD.js";import"./preload-helper-u0ftyAaf.js";import"./index-C3sQ6fFN.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BxugeeBP.js";function i(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"details",children:"Details"}),`
`,e.jsxs(n.h4,{id:"details-lar-brukeren-utvide-og-skjule-innhold-i-en-oversiktlig-rad-den-er-nyttig-for-å-samle-informasjon-som-ikke-trenger-å-vises-hele-tiden-og-hjelper-med-å-holde-grensesnittet-ryddig",children:[e.jsx(n.code,{children:"Details"})," lar brukeren utvide og skjule innhold i en oversiktlig rad. Den er nyttig for å samle informasjon som ikke trenger å vises hele tiden, og hjelper med å holde grensesnittet ryddig."]}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
import { Details } from '@digdir/designsystemet-react';

// Grunnleggende bruk


<Details>
  <Details.Summary>Tittel for seksjonen</Details.Summary>
  <Details.Content>Dette er innholdet som kan utvides.</Details.Content>
</Details>

// Med ramme (i et kort)

import { Details, Card } from '@digdir/designsystemet-react';

<Card>
  <Details>
    <Details.Summary>Detaljer med ramme</Details.Summary>
    <Details.Content>Innholdet vises her når du åpner detaljer.</Details.Content>
  </Details>
</Card>
`})}),`
`,e.jsxs(n.h4,{id:"details-fungerer-som-et-sammenleggbart-område-du-kan-bruke-den-alene-eller-inni-andre-komponenter-som-card-for-å-organisere-innhold-visuelt",children:[e.jsx(n.code,{children:"Details"})," fungerer som et sammenleggbart område. Du kan bruke den alene eller inni andre komponenter som ",e.jsx(n.code,{children:"Card"})," for å organisere innhold visuelt."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"standard",children:"Standard"}),`
`,e.jsxs(n.h4,{id:"dette-er-grunnvarianten-av-details-der-brukeren-kan-klikke-på-overskriften-for-å-vise-innholdet",children:["Dette er grunnvarianten av ",e.jsx(n.code,{children:"Details"}),", der brukeren kan klikke på overskriften for å vise innholdet."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"åpen-som-standard",children:"Åpen som standard"}),`
`,e.jsxs(n.h4,{id:"du-kan-starte-details-i-åpen-tilstand-ved-å-sette-open-true",children:["Du kan starte ",e.jsx(n.code,{children:"Details"})," i åpen tilstand ved å sette ",e.jsx(n.code,{children:"open: true"}),"."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"med-størrelse-og-farge",children:"Med størrelse og farge"}),`
`,e.jsxs(n.h4,{id:"bruk-data-size-og-data-color-for-å-tilpasse-stil-etter-temaet-ditt",children:["Bruk ",e.jsx(n.code,{children:"data-size"})," og ",e.jsx(n.code,{children:"data-color"})," for å tilpasse stil etter temaet ditt."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.h4,{id:"bruk-details-til-å-skjule-valgfrie-eller-utfyllende-opplysninger",children:["Bruk ",e.jsx(n.code,{children:"Details"})," til å skjule valgfrie eller utfyllende opplysninger."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Gjør dette"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Bruk ",e.jsx(n.code,{children:"Details"})," for sekundært innhold:"]})," Ideelt for informasjon som er nyttig, men ikke kritisk."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hold overskriften tydelig:"})," Den skal beskrive hva som skjules bak."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bruk i kontekst:"})," Legg gjerne inn ",e.jsx(n.code,{children:"Details"})," i komponenter som ",e.jsx(n.code,{children:"Card"})," når du vil gruppere flere seksjoner."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Unngå dette"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Skjul aldri hovedinnhold:"})," Viktige meldinger eller primærinformasjon bør være synlig."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ingen nøsting:"})," Ikke legg en ",e.jsx(n.code,{children:"Details"})," inni en annen. Det kan skape forvirring for tastaturnavigasjon og skjermlesere."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unngå vage titler:"})," «Les mer» eller «Vis mer» gir lite mening uten kontekst."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.h4,{id:"details-er-bygd-med-fokus-på-tilgjengelighet-og-følger-html-details--og-summary-mønsteret",children:[e.jsx(n.code,{children:"Details"})," er bygd med fokus på tilgjengelighet og følger HTML ",e.jsx(n.code,{children:"<details>"}),"- og ",e.jsx(n.code,{children:"<summary>"}),"-mønsteret."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tastaturnavigasjon:"})," Bruk ",e.jsx("kbd",{children:"Space"})," eller ",e.jsx("kbd",{children:"Enter"})," for å åpne og lukke komponenten."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visuell indikator:"})," Chevron-ikonet står til venstre for å være lettere å se for brukere med begrenset synsfelt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interaktivitet:"})," Ikke legg andre interaktive elementer i ",e.jsx(n.code,{children:"Details.Summary"}),". Hele raden skal være klikkbar."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Safari og Firefox støtter per i dag ikke animert åpning/lukking.",e.jsx(n.br,{}),`
`,"Se ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size",rel:"nofollow",children:"interpolate-size"})," for mer informasjon."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsx(n.h4,{id:"følgende-variabler-kan-brukes-for-å-justere-stil-på-komponenten",children:"Følgende variabler kan brukes for å justere stil på komponenten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--details-background-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--details-border-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--details-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--details-padding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--details-summary-color"})}),`
`]})]})}function D(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
