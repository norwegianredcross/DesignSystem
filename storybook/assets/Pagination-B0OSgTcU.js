import{j as e}from"./iframe-DMOcb_7w.js";import{useMDXComponents as s}from"./index-CvC6Dqfj.js";import{M as o,P as a,C as l,a as r}from"./WithTooltip-SK46ZJ2J-CTKvCGGC.js";import{P as d,D as m,W as h}from"./Pagination.stories-lde_pz8H.js";import"./preload-helper-u0ftyAaf.js";import"./index-D_KcpH9T.js";import"./index-DH9usdEq.js";import"./lite-DaUVFjkg.js";import"./button-BYqa7XVT.js";import"./spinner-hwrvf_Rp.js";import"./use-merge-refs-C_iE-z5m.js";import"./index-CZoYN1sb.js";import"./link-B2HeFzQD.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(n.h4,{id:"pagination-er-en-liste-med-kontroller-som-lar-brukeren-navigere-mellom-flere-sider-med-innhold-for-eksempel-søkeresultater-eller-tabeller",children:[e.jsx(n.code,{children:"Pagination"})," er en liste med kontroller som lar brukeren navigere mellom flere sider med innhold, for eksempel søkeresultater eller tabeller."]}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Pagination"}),` er kontrollert. Det betyr at aktiv side styres utenfra.
For logikk, bruk `,e.jsx(n.code,{children:"usePagination"})," sammen med delkomponentene."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from 'rk-designsystem';

<Pagination aria-label="Sidenavigering">
  <Pagination.List>
    <Pagination.Item>
      <Pagination.Button aria-label="Forrige side">Forrige</Pagination.Button>
    </Pagination.Item>

    <Pagination.Item>
      <Pagination.Button aria-label="Side 1">1</Pagination.Button>
    </Pagination.Item>

    <Pagination.Item /> {/* ellipse */}

    <Pagination.Item>
      <Pagination.Button aria-label="Side 10">10</Pagination.Button>
    </Pagination.Item>

    <Pagination.Item>
      <Pagination.Button aria-label="Neste side">Neste</Pagination.Button>
    </Pagination.Item>
  </Pagination.List>
  </Pagination>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"som-lenker",children:"Som lenker"}),`
`,e.jsxs(n.p,{children:["Knappene er ",e.jsx(n.code,{children:"<button>"})," som standard. Skal du navigere til ny URL, bruk ",e.jsx(n.code,{children:"asChild"})," og rendre ",e.jsx(n.code,{children:"<a>"})," inni ",e.jsx(n.code,{children:"Pagination.Button"}),"."]}),`
`,e.jsx(r,{of:h}),`
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
`,e.jsx(n.p,{children:"Bruk de faste ordene «Forrige» og «Neste». Unngå varianter som «Gå tilbake» eller «Videre»."})]})}function I(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{I as default};
