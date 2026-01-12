import{j as e}from"./iframe-Ds727h2y.js";import{useMDXComponents as s}from"./index-D1vG0lWE.js";import{M as o,P as a,C as l,a as i}from"./WithTooltip-SK46ZJ2J-B6fSzeu8.js";import{P as d,D as m,W as h}from"./Pagination.stories-C78ihrL6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BNc4ISRt.js";import"./index-omwQ3x7D.js";import"./lite-DaUVFjkg.js";import"./button-CCC1An7f.js";import"./spinner-DR1XsjEu.js";import"./use-merge-refs-BG8HluL4.js";import"./index-BuyEQviZ.js";import"./link-O6jDCabE.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(n.h4,{id:"pagination-er-en-liste-med-kontroller-som-lar-brukeren-navigere-mellom-flere-sider-med-innhold-for-eksempel-søkeresultater-eller-tabeller",children:[e.jsx(n.code,{children:"Pagination"})," er en liste med kontroller som lar brukeren navigere mellom flere sider med innhold, for eksempel søkeresultater eller tabeller."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Pagination"}),` er kontrollert. Det betyr at aktiv side styres utenfra.\r
For logikk, bruk `,e.jsx(n.code,{children:"usePagination"})," sammen med delkomponentene."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from 'rk-designsystem';\r
\r
<Pagination aria-label="Sidenavigering">\r
  <Pagination.List>\r
    <Pagination.Item>\r
      <Pagination.Button aria-label="Forrige side">Forrige</Pagination.Button>\r
    </Pagination.Item>\r
\r
    <Pagination.Item>\r
      <Pagination.Button aria-label="Side 1">1</Pagination.Button>\r
    </Pagination.Item>\r
\r
    <Pagination.Item /> {/* ellipse */}\r
\r
    <Pagination.Item>\r
      <Pagination.Button aria-label="Side 10">10</Pagination.Button>\r
    </Pagination.Item>\r
\r
    <Pagination.Item>\r
      <Pagination.Button aria-label="Neste side">Neste</Pagination.Button>\r
    </Pagination.Item>\r
  </Pagination.List>\r
  </Pagination>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"som-lenker",children:"Som lenker"}),`
`,e.jsxs(n.p,{children:["Knappene er ",e.jsx(n.code,{children:"<button>"})," som standard. Skal du navigere til ny URL, bruk ",e.jsx(n.code,{children:"asChild"})," og rendre ",e.jsx(n.code,{children:"<a>"})," inni ",e.jsx(n.code,{children:"Pagination.Button"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Pagination"})," når innhold må deles opp i sider og brukeren trenger å flytte seg mellom resultatsett. Del kun opp når det gir bedre ytelse eller forståelse."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"å navigere mellom relaterte innholdssider"}),`
`,e.jsx(n.li,{children:"å dele store datamengder i håndterbare sider (for eksempel tabeller)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"stegvis utfylling av skjema (bruk stegindikator)"}),`
`,e.jsx(n.li,{children:"å vise fremdrift"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(n.p,{children:"Bruk de faste ordene «Forrige» og «Neste». Unngå varianter som «Gå tilbake» eller «Videre»."})]})}function I(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{I as default};
