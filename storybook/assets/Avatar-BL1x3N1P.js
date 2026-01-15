import{j as e}from"./iframe-BWHY8fa5.js";import{useMDXComponents as l}from"./index-BS2-1Ca-.js";import{M as a,P as t,C as d,a as i}from"./WithTooltip-SK46ZJ2J-BMgs5SnU.js";import{A as o,W as c,a as h,D as j,S as g}from"./Avatar.stories-BH_gCob4.js";import"./preload-helper-B7SxNM_P.js";import"./index-CY2xGzMW.js";import"./index-Da_GjnX2.js";import"./index-CQMnhTDY.js";import"./lite-DaUVFjkg.js";function s(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o}),`
`,e.jsx(r.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(r.h4,{id:"avatar-brukes-for-å-representere-en-bruker-eller-en-enhet-den-kan-vise-et-bilde-initialer-eller-et-standard-ikon-som-en-fallback",children:[e.jsx(r.code,{children:"Avatar"})," brukes for å representere en bruker eller en enhet. Den kan vise et bilde, initialer, eller et standard-ikon som en fallback."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`
import { Avatar } from 'rk-designsystem';



// Med bilde

<Avatar aria-label="Kari Nordmann">

<img src="/sti/til/bilde.png" alt="" />

</Avatar>



// Med initialer

<Avatar aria-label="Ola Nordmann">ON</Avatar>



// Standard (fallback)

<Avatar aria-label="Ukjent Bruker" />
`})}),`
`,e.jsxs(r.h4,{id:"komponenten-er-designet-for-å-være-fleksibel-den-prioriterer-children-bilde-eller-initialer-og-faller-tilbake-til-et-standard-person-ikon-hvis-ingenting-er-oppgitt",children:["Komponenten er designet for å være fleksibel. Den prioriterer ",e.jsx(r.code,{children:"children"})," (bilde eller initialer) og faller tilbake til et standard person-ikon hvis ingenting er oppgitt."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"innholdstyper",children:"Innholdstyper"}),`
`,e.jsxs(r.h4,{id:"avatar-kan-fylles-på-tre-måter-avhengig-av-hvilken-informasjon-som-er-tilgjengelig",children:[e.jsx(r.code,{children:"Avatar"})," kan fylles på tre måter, avhengig av hvilken informasjon som er tilgjengelig."]}),`
`,e.jsx(r.h3,{id:"med-bilde",children:"Med bilde"}),`
`,e.jsxs(r.h4,{id:"dette-er-den-foretrukne-varianten-et-img-element-sendes-inn-som-children-for-å-vise-brukerens-bilde",children:["Dette er den foretrukne varianten. Et ",e.jsx(r.code,{children:"<img>"}),"-element sendes inn som ",e.jsx(r.code,{children:"children"})," for å vise brukerens bilde."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(r.h3,{id:"med-initialer",children:"Med initialer"}),`
`,e.jsxs(r.h4,{id:"hvis-et-bilde-ikke-er-tilgjengelig-kan-initialer-sendes-som-tekst-children-dette-er-en-god-fallback-for-å-fortsatt-identifisere-brukeren",children:["Hvis et bilde ikke er tilgjengelig, kan initialer sendes som tekst-",e.jsx(r.code,{children:"children"}),". Dette er en god fallback for å fortsatt identifisere brukeren."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(r.h3,{id:"standard-fallback",children:"Standard (Fallback)"}),`
`,e.jsx(r.h4,{id:"hvis-verken-bilde-eller-initialer-er-oppgitt-vil-komponenten-vise-et-standard-person-ikon",children:"Hvis verken bilde eller initialer er oppgitt, vil komponenten vise et standard person-ikon."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"varianter",children:"Varianter"}),`
`,e.jsx(r.h3,{id:"form",children:"Form"}),`
`,e.jsxs(r.h4,{id:"komponenten-er-sirkulær-som-standard-den-kan-også-gjøres-firkantet-ved-å-sette-variantsquare",children:["Komponenten er sirkulær som standard. Den kan også gjøres firkantet ved å sette ",e.jsx(r.code,{children:'variant="square"'}),"."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(r.h3,{id:"størrelser-og-farger",children:"Størrelser og farger"}),`
`,e.jsxs(r.h4,{id:"avatar-kommer-i-flere-størrelser-xs-til-lg-og-farger-disse-styres-av-data-size-og-data-color-props-prøv-dem-i-controls-panelet-over",children:[e.jsx(r.code,{children:"Avatar"})," kommer i flere størrelser (",e.jsx(r.code,{children:"xs"})," til ",e.jsx(r.code,{children:"lg"}),") og farger. Disse styres av ",e.jsx(r.code,{children:"data-size"})," og ",e.jsx(r.code,{children:"data-color"})," props. Prøv dem i Controls-panelet over."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.h4,{id:"bruk-avatar-for-å-bygge-gjenkjennelse-og-personliggjøre-et-grensesnitt",children:["Bruk ",e.jsx(r.code,{children:"Avatar"})," for å bygge gjenkjennelse og personliggjøre et grensesnitt."]}),`
`,e.jsx(r.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Bruk ",e.jsx(r.code,{children:"aria-label"}),":"]})," Sørg for at alle avatarer har et ",e.jsx(r.code,{children:"aria-label"}),' som identifiserer personen (f.eks. "Ola Nordmann").']}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Bruk tom ",e.jsx(r.code,{children:"alt"}),":"]})," Når du bruker et ",e.jsx(r.code,{children:"<img>"})," inni Avataren, skal det ha ",e.jsx(r.code,{children:'alt=""'}),". Skjermleseren får navnet fra ",e.jsx(r.code,{children:"aria-label"})," på selve Avataren."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Bruk initialer:"})," Bruk initialer som en god, identifiserbar fallback når bilder mangler."]}),`
`]}),`
`,e.jsx(r.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke bruk for ikoner:"})," Ikke bruk ",e.jsx(r.code,{children:"Avatar"})," for å vise generelle ikoner som ikke representerer en person eller enhet."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke bruk interaktive elementer:"})," En ",e.jsx(r.code,{children:"Avatar"})," skal ikke være klikkbar i seg selv. Hvis den skal trigge en handling (som å åpne en profil), plasser den inni en ",e.jsx(r.code,{children:"Button"})," eller en lenke."]}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["Tilgjengelighet er kritisk for ",e.jsx(r.code,{children:"Avatar"})," siden den representerer informasjon visuelt."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Alltid ",e.jsx(r.code,{children:"aria-label"}),":"]})," En ",e.jsx(r.code,{children:"Avatar"})," må ",e.jsx(r.em,{children:"alltid"})," ha et ",e.jsx(r.code,{children:"aria-label"})," som beskriver hvem den representerer (f.eks. ",e.jsx(r.code,{children:'aria-label="Kari Nordmann"'}),")."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Tom ",e.jsx(r.code,{children:"alt"}),"-attributt:"]})," Når et ",e.jsx(r.code,{children:"<img>"}),"-element brukes som ",e.jsx(r.code,{children:"children"}),", ",e.jsx(r.strong,{children:"må"})," det ha en tom ",e.jsx(r.code,{children:'alt=""'}),". Dette forhindrer at skjermlesere leser innholdet to ganger (én gang fra ",e.jsx(r.code,{children:"alt"}),"-teksten og én gang fra ",e.jsx(r.code,{children:"aria-label"}),")."]}),`
`]}),`
`,e.jsx(r.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(r.h4,{id:"her-er-tilgjengelige-css-variabler-for-avatar-slik-at-du-kan-tilpasse-farger-og-størrelser-ved-behov",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(r.code,{children:"Avatar"}),", slik at du kan tilpasse farger og størrelser ved behov."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--avatar-background-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--avatar-text-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--avatar-size"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--avatar-font-size"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--avatar-border-radius"})}),`
`]})]})}function D(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{D as default};
