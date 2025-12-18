import{j as e}from"./iframe-DvqyjrsL.js";import{useMDXComponents as t}from"./index-DK7WcoKk.js";import{M as l,P as d,C as o,a as s}from"./WithTooltip-SK46ZJ2J-CeGJoQwv.js";import{L as a,U as h,O as c,W as j,N as m,a as x}from"./List.stories-c3uyDO9t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ci5X03X9.js";import"./index-M5IyoGdF.js";import"./index-4mx1eapd.js";import"./lite-DaUVFjkg.js";import"./heading-CsNW-z6U.js";import"./link-0QDvqX-3.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(r.h1,{id:"list",children:"List"}),`
`,e.jsxs(r.h4,{id:"list-brukes-for-å-strukturere-innhold-som-punktlister-eller-nummererte-steg-slik-at-informasjon-blir-enkel-å-skumme-og-forstå",children:[e.jsx(r.code,{children:"List"})," brukes for å strukturere innhold som punktlister eller nummererte steg, slik at informasjon blir enkel å skumme og forstå."]}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:["Listen kan være usortert eller sortert. Bruk ",e.jsx(r.code,{children:"List.Unordered"})," for kulepunkter og ",e.jsx(r.code,{children:"List.Ordered"})," når rekkefølge betyr noe."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { List } from 'rk-designsystem';

<List.Unordered>
  <List.Item>Første punkt</List.Item>
  <List.Item>Andre punkt</List.Item>
</List.Unordered>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"usortert-liste",children:"Usortert liste"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(r.h3,{id:"sortert-liste",children:"Sortert liste"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(r.h3,{id:"med-overskrift",children:"Med overskrift"}),`
`,e.jsxs(r.p,{children:["En ",e.jsx(r.code,{children:"Heading"})," over en liste kan hjelpe brukeren å forstå hva listen oppsummerer."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(r.h3,{id:"lister-i-lister",children:"Lister i lister"}),`
`,e.jsx(r.p,{children:"Bruk underlister for tilleggsinformasjon som hører til et punkt. Vurder om underpunkter heller bør være egne hovedpunkter før du nøster."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(r.h3,{id:"liste-med-lenker",children:"Liste med lenker"}),`
`,e.jsxs(r.p,{children:["Du kan lage navigasjonslister ved å bruke ",e.jsx(r.code,{children:"Link"})," i ",e.jsx(r.code,{children:"List.Item"}),". I eksemplet er standard listestil fjernet."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(r.p,{children:"Bruk sortert liste når rekkefølge eller prioritet er viktig (for eksempel prosess-steg). Bruk usortert liste når du vil oppsummere punkter uten rangering. Unngå svært lange lister – del heller opp for bedre lesbarhet."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"å gi rask oversikt i lengre tekster"}),`
`,e.jsx(r.li,{children:"å liste kriterier"}),`
`,e.jsx(r.li,{children:"å vise steg i en prosess"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"å presentere lange avsnitt"}),`
`,e.jsx(r.li,{children:"å sammenligne flere datasett (bruk tabell)"}),`
`]}),`
`,e.jsx(r.h3,{id:"liste-eller-tabell",children:"Liste eller tabell?"}),`
`,e.jsx(r.p,{children:"Lister presenterer relaterte punkter. Tabeller lar brukeren sammenligne grupper av informasjon. Velg riktig komponent for tydeligere kommunikasjon."}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(r.h3,{id:"lister-som-navigasjon",children:"Lister som navigasjon"}),`
`,e.jsxs(r.p,{children:["Hvis listen brukes til navigasjon (for eksempel i bunn eller sidemeny), pakk den inn i et ",e.jsx(r.code,{children:'<nav aria-label="...">'})," i stedet for å sette ",e.jsx(r.code,{children:"aria-label"})," direkte på ",e.jsx(r.code,{children:"<ul>"}),"/",e.jsx(r.code,{children:"<ol>"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<nav aria-label="Snarveier">
  <List.Unordered>
    <List.Item>…</List.Item>
  </List.Unordered>
</nav>
`})}),`
`,e.jsxs(r.h3,{id:"menu-i-stedet-for-ul",children:[e.jsx(r.code,{children:"<menu>"})," i stedet for ",e.jsx(r.code,{children:"<ul>"})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"<menu>"})," er et semantisk alternativ til ",e.jsx(r.code,{children:"<ul>"})," for lister av interaktive elementer."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<List.Unordered asChild>
  <menu>
    <List.Item>…</List.Item>
    <List.Item>…</List.Item>
  </menu>
</List.Unordered>
`})})]})}function M(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{M as default};
