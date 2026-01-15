import{j as e}from"./iframe-VwrtBq5x.js";import{useMDXComponents as l}from"./index-CBa56hPX.js";import{M as s,P as o,C as d,a as r}from"./WithTooltip-SK46ZJ2J-CSjfwBge.js";import{C as a,D as k,T as h,W as c,a as m,A as j,b as g,c as p}from"./Card.stories-BGk3CRNO.js";import"./preload-helper-B7SxNM_P.js";import"./index-DjbhXIRD.js";import"./index-Cy7JlE1E.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs--O4RqpJI.js";import"./button-BQ8mtKCj.js";import"./spinner-Kdw5CaJW.js";import"./heading-CaNAPYTs.js";import"./TrashFill-CpkfJ2iq.js";import"./useId-D2LAH4IO.js";import"./index-BQHvOGpB.js";import"./paragraph-BRJaWrrt.js";import"./label-DIwS_Lsj.js";import"./index-ZyRJUKra.js";import"./textfield-DeKylyyv.js";import"./input-B1CYDhaX.js";import"./textarea-CCB68c6z.js";function i(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsxs(n.h4,{id:"card-er-en-fleksibel-overflate-komponent-som-grupperer-relatert-innhold-og-handlinger-den-brukes-til-å-fremheve-informasjon-i-en-avgrenset-boks",children:[e.jsx(n.code,{children:"Card"})," er en fleksibel overflate-komponent som grupperer relatert innhold og handlinger. Den brukes til å fremheve informasjon i en avgrenset boks."]}),`
`,e.jsx(o,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Card, CardBlock } from '@rk-designsystem';

// Standard kort med inndelinger
<Card>
  <CardBlock>
    <h3>Korttittel</h3>
  </CardBlock>
  <CardBlock>
    <p>Dette er innholdet i kortet, plassert i en egen CardBlock.</p>
  </CardBlock>
  <CardBlock>
    <small>Fotnote</small>
  </CardBlock>
</Card>

// Interaktivt kort (som en lenke)
<Card asChild>
  <a href="/sti/til/side">
    <CardBlock>
      <h3>Klikkbar tittel</h3>
      <p>Hele dette kortet er en lenke.</p>
    </CardBlock>
  </a>
</Card>
`})}),`
`,e.jsxs(n.h4,{id:"card-komponenten-fungerer-som-en-container-for-å-strukturere-innhold-internt-bruk-cardblock-komponenten-dette-sikrer-riktig-spacing-og-valgfrie-skillelinjer-mellom-seksjoner",children:[e.jsx(n.code,{children:"Card"}),"-komponenten fungerer som en container. For å strukturere innhold internt, bruk ",e.jsx(n.code,{children:"CardBlock"}),"-komponenten. Dette sikrer riktig spacing og valgfrie skillelinjer mellom seksjoner."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"standardkort",children:"Standardkort"}),`
`,e.jsxs(n.h4,{id:"standardkortet-har-en-nøytral-bakgrunn-og-er-den-vanligste-varianten-innholdet-er-delt-inn-med-cardblock",children:["Standardkortet har en nøytral bakgrunn og er den vanligste varianten. Innholdet er delt inn med ",e.jsx(n.code,{children:"CardBlock"}),"."]}),`
`,e.jsx(r,{of:k}),`
`,e.jsx(n.h3,{id:"farget-variant",children:"Farget variant"}),`
`,e.jsxs(n.h4,{id:"ved-å-sette-varianttinted-får-kortet-en-svak-bakgrunnsfarge-basert-på-data-color-dette-kan-brukes-for-å-gi-kortet-en-myk-visuell-prioritet",children:["Ved å sette ",e.jsx(n.code,{children:'variant="tinted"'})," får kortet en svak bakgrunnsfarge basert på ",e.jsx(n.code,{children:"data-color"}),". Dette kan brukes for å gi kortet en myk visuell prioritet."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"med-bilde",children:"Med bilde"}),`
`,e.jsxs(n.h4,{id:"cardblock-kan-brukes-til-å-vise-et-bilde-som-fyller-hele-bredden-av-kortet-uten-intern-padding",children:[e.jsx(n.code,{children:"CardBlock"})," kan brukes til å vise et bilde som fyller hele bredden av kortet uten intern padding."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"med-sammensatt-innhold",children:"Med sammensatt innhold"}),`
`,e.jsxs(n.h4,{id:"kort-er-ment-for-komposisjon-du-kan-enkelt-plassere-andre-komponenter-som-knapper-og-tekst-inni-cardblock",children:["Kort er ment for komposisjon. Du kan enkelt plassere andre komponenter, som knapper og tekst, inni ",e.jsx(n.code,{children:"CardBlock"}),"."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ulike-mønstre",children:"Ulike mønstre"}),`
`,e.jsx(n.h3,{id:"som-lenke",children:"Som lenke"}),`
`,e.jsxs(n.h4,{id:"ved-å-bruke-aschild-propen-kan-hele-kortet-gjøres-om-til-ett-enkelt-klikkbart-element-som-en-a-tag-dette-er-ideelt-for-teaser-kort-som-lenker-til-en-annen-side",children:["Ved å bruke ",e.jsx(n.code,{children:"asChild"}),"-propen kan hele kortet gjøres om til ett enkelt klikkbart element, som en ",e.jsx(n.code,{children:"<a>"}),'-tag. Dette er ideelt for "teaser"-kort som lenker til en annen side.']}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"som-knapp",children:"Som knapp"}),`
`,e.jsxs(n.h4,{id:"aschild-kan-også-brukes-til-å-gjøre-kortet-om-til-en-button-dette-er-nyttig-for-å-utløse-en-handling-som-å-åpne-en-modal-eller-legge-til-et-nytt-element",children:[e.jsx(n.code,{children:"asChild"})," kan også brukes til å gjøre kortet om til en ",e.jsx(n.code,{children:"<button>"}),". Dette er nyttig for å utløse en handling, som å åpne en modal eller legge til et nytt element."]}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"kompleks-komposisjon",children:"Kompleks komposisjon"}),`
`,e.jsx(n.h4,{id:"her-er-et-eksempel-på-et-kort-som-brukes-i-en-applikasjon-og-kombinerer-skjemafelter-titler-og-knapper-i-et-komplekst-men-ryddig-oppsett",children:"Her er et eksempel på et kort som brukes i en applikasjon, og kombinerer skjemafelter, titler og knapper i et komplekst, men ryddig oppsett."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.h4,{id:"bruk-card-for-å-gruppere-innhold-som-hører-logisk-sammen-og-skille-det-fra-annet-innhold-på-siden",children:["Bruk ",e.jsx(n.code,{children:"Card"})," for å gruppere innhold som hører logisk sammen, og skille det fra annet innhold på siden."]}),`
`,e.jsx(n.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grupper relatert innhold:"})," Bruk kort til å samle tekst, bilder og handlinger som omhandler ett enkelt emne."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Bruk ",e.jsx(n.code,{children:"CardBlock"}),":"]})," Bruk ",e.jsx(n.code,{children:"CardBlock"})," for å dele opp innhold internt i kortet. Dette gir riktig spacing og skillelinjer."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Bruk ",e.jsx(n.code,{children:"asChild"})," for interaktivitet:"]})," Hvis ",e.jsx(n.em,{children:"hele"})," kortet skal være klikkbart, bruk ",e.jsx(n.code,{children:"asChild"})," for å gjøre det om til en lenke eller knapp."]}),`
`]}),`
`,e.jsx(n.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for alt:"})," Ikke plasser alt innhold på siden i kort. En side med bare kort kan virke rotete og tung."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Ikke glem ",e.jsx(n.code,{children:"asChild"}),":"]})," Ikke plasser en lenke inni et kort hvis du forventer at hele kortet skal være klikkbart. Bruk ",e.jsx(n.code,{children:"asChild"})," for å sikre at hele flaten er én lenke."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for varsler:"})," Ikke bruk ",e.jsx(n.code,{children:"Card"})," for å vise viktige systemmeldinger eller feil. Bruk ",e.jsx(n.code,{children:"Alert"}),"-komponenten til det."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.p,{children:["Når et kort gjøres klikkbart med ",e.jsx(n.code,{children:"asChild"}),", er det viktig å sikre at det er tilgjengelig."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kort som lenke:"})," Når kortet er en ",e.jsx(n.code,{children:"<a>"}),"-tag, vil skjermlesere lese opp alt innholdet i kortet som en del av lenketeksten. Sørg for at denne teksten er konsis og beskrivende."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kort som knapp:"})," Når kortet er en ",e.jsx(n.code,{children:"<button>"}),", bør det ha en tydelig ",e.jsx(n.code,{children:"aria-label"})," som beskriver handlingen, spesielt hvis innholdet er komplekst."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bilder:"})," Hvis et bilde i et klikkbart kort er rent dekorativt, bruk ",e.jsx(n.code,{children:'alt=""'}),". Hvis det er en del av innholdet, gi det en meningsfylt ",e.jsx(n.code,{children:"alt"}),"-tekst."]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(n.h4,{id:"her-er-tilgjengelige-css-variabler-for-card",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(n.code,{children:"Card"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--card-background-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--card-border-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--card-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--card-padding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--card-block-border-color"})}),`
`]})]})}function L(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{L as default};
