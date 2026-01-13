import{j as e}from"./iframe-BBw4IsXL.js";import{useMDXComponents as l}from"./index-ovGwFGzX.js";import{M as s,P as o,C as d,a as n}from"./WithTooltip-SK46ZJ2J-CcbMflH1.js";import{C as a,D as k,T as h,W as c,a as m,A as j,b as g,c as p}from"./Card.stories-DsON2bNV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-krPQtVac.js";import"./index-rqGUXbDI.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BAgixlwB.js";import"./button-BHjkWxTQ.js";import"./spinner-CAIbEp-Y.js";import"./heading-CDkVcUor.js";import"./TrashFill-BaluZdTZ.js";import"./useId-CENlSWhJ.js";import"./index-BfvFbusu.js";import"./paragraph-w2CQBfBi.js";import"./label-2GH5bg41.js";import"./index-BN1PwmEU.js";import"./textfield-DKZcTARh.js";import"./input-j9sIaeXh.js";import"./textarea-BZyCPy-0.js";function i(t){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(r.h1,{id:"card",children:"Card"}),`
`,e.jsxs(r.h4,{id:"card-er-en-fleksibel-overflate-komponent-som-grupperer-relatert-innhold-og-handlinger-den-brukes-til-å-fremheve-informasjon-i-en-avgrenset-boks",children:[e.jsx(r.code,{children:"Card"})," er en fleksibel overflate-komponent som grupperer relatert innhold og handlinger. Den brukes til å fremheve informasjon i en avgrenset boks."]}),`
`,e.jsx(o,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Card, CardBlock } from '@rk-designsystem';\r
\r
// Standard kort med inndelinger\r
<Card>\r
  <CardBlock>\r
    <h3>Korttittel</h3>\r
  </CardBlock>\r
  <CardBlock>\r
    <p>Dette er innholdet i kortet, plassert i en egen CardBlock.</p>\r
  </CardBlock>\r
  <CardBlock>\r
    <small>Fotnote</small>\r
  </CardBlock>\r
</Card>\r
\r
// Interaktivt kort (som en lenke)\r
<Card asChild>\r
  <a href="/sti/til/side">\r
    <CardBlock>\r
      <h3>Klikkbar tittel</h3>\r
      <p>Hele dette kortet er en lenke.</p>\r
    </CardBlock>\r
  </a>\r
</Card>
`})}),`
`,e.jsxs(r.h4,{id:"card-komponenten-fungerer-som-en-container-for-å-strukturere-innhold-internt-bruk-cardblock-komponenten-dette-sikrer-riktig-spacing-og-valgfrie-skillelinjer-mellom-seksjoner",children:[e.jsx(r.code,{children:"Card"}),"-komponenten fungerer som en container. For å strukturere innhold internt, bruk ",e.jsx(r.code,{children:"CardBlock"}),"-komponenten. Dette sikrer riktig spacing og valgfrie skillelinjer mellom seksjoner."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"standardkort",children:"Standardkort"}),`
`,e.jsxs(r.h4,{id:"standardkortet-har-en-nøytral-bakgrunn-og-er-den-vanligste-varianten-innholdet-er-delt-inn-med-cardblock",children:["Standardkortet har en nøytral bakgrunn og er den vanligste varianten. Innholdet er delt inn med ",e.jsx(r.code,{children:"CardBlock"}),"."]}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(r.h3,{id:"farget-variant",children:"Farget variant"}),`
`,e.jsxs(r.h4,{id:"ved-å-sette-varianttinted-får-kortet-en-svak-bakgrunnsfarge-basert-på-data-color-dette-kan-brukes-for-å-gi-kortet-en-myk-visuell-prioritet",children:["Ved å sette ",e.jsx(r.code,{children:'variant="tinted"'})," får kortet en svak bakgrunnsfarge basert på ",e.jsx(r.code,{children:"data-color"}),". Dette kan brukes for å gi kortet en myk visuell prioritet."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.h3,{id:"med-bilde",children:"Med bilde"}),`
`,e.jsxs(r.h4,{id:"cardblock-kan-brukes-til-å-vise-et-bilde-som-fyller-hele-bredden-av-kortet-uten-intern-padding",children:[e.jsx(r.code,{children:"CardBlock"})," kan brukes til å vise et bilde som fyller hele bredden av kortet uten intern padding."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(r.h3,{id:"med-sammensatt-innhold",children:"Med sammensatt innhold"}),`
`,e.jsxs(r.h4,{id:"kort-er-ment-for-komposisjon-du-kan-enkelt-plassere-andre-komponenter-som-knapper-og-tekst-inni-cardblock",children:["Kort er ment for komposisjon. Du kan enkelt plassere andre komponenter, som knapper og tekst, inni ",e.jsx(r.code,{children:"CardBlock"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"ulike-mønstre",children:"Ulike mønstre"}),`
`,e.jsx(r.h3,{id:"som-lenke",children:"Som lenke"}),`
`,e.jsxs(r.h4,{id:"ved-å-bruke-aschild-propen-kan-hele-kortet-gjøres-om-til-ett-enkelt-klikkbart-element-som-en-a-tag-dette-er-ideelt-for-teaser-kort-som-lenker-til-en-annen-side",children:["Ved å bruke ",e.jsx(r.code,{children:"asChild"}),"-propen kan hele kortet gjøres om til ett enkelt klikkbart element, som en ",e.jsx(r.code,{children:"<a>"}),'-tag. Dette er ideelt for "teaser"-kort som lenker til en annen side.']}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h3,{id:"som-knapp",children:"Som knapp"}),`
`,e.jsxs(r.h4,{id:"aschild-kan-også-brukes-til-å-gjøre-kortet-om-til-en-button-dette-er-nyttig-for-å-utløse-en-handling-som-å-åpne-en-modal-eller-legge-til-et-nytt-element",children:[e.jsx(r.code,{children:"asChild"})," kan også brukes til å gjøre kortet om til en ",e.jsx(r.code,{children:"<button>"}),". Dette er nyttig for å utløse en handling, som å åpne en modal eller legge til et nytt element."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(r.h3,{id:"kompleks-komposisjon",children:"Kompleks komposisjon"}),`
`,e.jsx(r.h4,{id:"her-er-et-eksempel-på-et-kort-som-brukes-i-en-applikasjon-og-kombinerer-skjemafelter-titler-og-knapper-i-et-komplekst-men-ryddig-oppsett",children:"Her er et eksempel på et kort som brukes i en applikasjon, og kombinerer skjemafelter, titler og knapper i et komplekst, men ryddig oppsett."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.h4,{id:"bruk-card-for-å-gruppere-innhold-som-hører-logisk-sammen-og-skille-det-fra-annet-innhold-på-siden",children:["Bruk ",e.jsx(r.code,{children:"Card"})," for å gruppere innhold som hører logisk sammen, og skille det fra annet innhold på siden."]}),`
`,e.jsx(r.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Grupper relatert innhold:"})," Bruk kort til å samle tekst, bilder og handlinger som omhandler ett enkelt emne."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Bruk ",e.jsx(r.code,{children:"CardBlock"}),":"]})," Bruk ",e.jsx(r.code,{children:"CardBlock"})," for å dele opp innhold internt i kortet. Dette gir riktig spacing og skillelinjer."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Bruk ",e.jsx(r.code,{children:"asChild"})," for interaktivitet:"]})," Hvis ",e.jsx(r.em,{children:"hele"})," kortet skal være klikkbart, bruk ",e.jsx(r.code,{children:"asChild"})," for å gjøre det om til en lenke eller knapp."]}),`
`]}),`
`,e.jsx(r.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke for alt:"})," Ikke plasser alt innhold på siden i kort. En side med bare kort kan virke rotete og tung."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Ikke glem ",e.jsx(r.code,{children:"asChild"}),":"]})," Ikke plasser en lenke inni et kort hvis du forventer at hele kortet skal være klikkbart. Bruk ",e.jsx(r.code,{children:"asChild"})," for å sikre at hele flaten er én lenke."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke for varsler:"})," Ikke bruk ",e.jsx(r.code,{children:"Card"})," for å vise viktige systemmeldinger eller feil. Bruk ",e.jsx(r.code,{children:"Alert"}),"-komponenten til det."]}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["Når et kort gjøres klikkbart med ",e.jsx(r.code,{children:"asChild"}),", er det viktig å sikre at det er tilgjengelig."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Kort som lenke:"})," Når kortet er en ",e.jsx(r.code,{children:"<a>"}),"-tag, vil skjermlesere lese opp alt innholdet i kortet som en del av lenketeksten. Sørg for at denne teksten er konsis og beskrivende."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Kort som knapp:"})," Når kortet er en ",e.jsx(r.code,{children:"<button>"}),", bør det ha en tydelig ",e.jsx(r.code,{children:"aria-label"})," som beskriver handlingen, spesielt hvis innholdet er komplekst."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Bilder:"})," Hvis et bilde i et klikkbart kort er rent dekorativt, bruk ",e.jsx(r.code,{children:'alt=""'}),". Hvis det er en del av innholdet, gi det en meningsfylt ",e.jsx(r.code,{children:"alt"}),"-tekst."]}),`
`]}),`
`,e.jsx(r.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(r.h4,{id:"her-er-tilgjengelige-css-variabler-for-card",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(r.code,{children:"Card"}),"."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--card-background-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--card-border-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--card-border-radius"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--card-padding"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--card-block-border-color"})}),`
`]})]})}function L(t={}){const{wrapper:r}={...l(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(i,{...t})}):i(t)}export{L as default};
