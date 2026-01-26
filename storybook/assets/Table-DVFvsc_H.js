import{j as e}from"./iframe-XXZ3xh4m.js";import{useMDXComponents as t}from"./index-DmLRcAIq.js";import{M as a,P as o,C as d,a as l}from"./WithTooltip-SK46ZJ2J-DpltlcDP.js";import{T as c,W as h,S as j,a as x,Z as b,D as s}from"./Table.stories-Aw8MmZbR.js";import"./preload-helper-u0ftyAaf.js";import"./index-DcgusGMM.js";import"./lite-DaUVFjkg.js";import"./checkbox-Cka-8wi9.js";import"./index-BVuVs5AS.js";import"./index-BuT6q1J_.js";import"./use-merge-refs-CReA629Q.js";import"./paragraph-C--nic_5.js";import"./input-lZdveZ7-.js";import"./label-DualRzSO.js";import"./textfield-DZG8pM4L.js";import"./textarea-DCjTtesC.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.h4,{id:"table-viser-strukturert-informasjon-i-rader-og-kolonner-og-gjør-det-enklere-å-skanne-og-sammenligne-data",children:[e.jsx(n.code,{children:"Table"})," viser strukturert informasjon i rader og kolonner, og gjør det enklere å skanne og sammenligne data."]}),`
`,e.jsx(o,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from 'rk-designsystem';

<Table>
  <caption>Table caption</caption>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Header 1</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell 1</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Foot>
    <Table.Row>
      <Table.HeaderCell>Footer 1</Table.HeaderCell>
    </Table.Row>
  </Table.Foot>
</Table>
`})}),`
`,e.jsx(n.h3,{id:"tabelltittel",children:"Tabelltittel"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"caption"})," til å beskrive tabellen kort. Dette hjelper brukere å finne og forstå innholdet."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table>
  <caption>Her er tittelen på tabellen</caption>
  …
</Table>
`})}),`
`,e.jsx(n.h3,{id:"celleoverskrifter",children:"Celle‑overskrifter"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Table.HeaderCell"})," for rad/kolonneoverskrifter. Sett ",e.jsx(n.code,{children:'scope="col"'})," eller ",e.jsx(n.code,{children:'scope="row"'})," for bedre skjermleserstøtte."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Table>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell 1</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"med-skjemaelementer",children:"Med skjemaelementer"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"sticky-header",children:"Sticky header"}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h3,{id:"sortering",children:"Sortering"}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"zebrastriper",children:"Zebra‑striper"}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"fast-kolonnebredde",children:"Fast kolonnebredde"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"table-layout: fixed"})," for stabile kolonnebredder ved dynamiske oppdateringer."]}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h3,{id:"med-border",children:"Med border"}),`
`,e.jsx(n.p,{children:"Gi tabellen en tydelig kant ved behov."}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h3,{id:"tall-i-tabell",children:"Tall i tabell"}),`
`,e.jsx(n.p,{children:"Høyrejuster tall for enklere sammenligning."}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Table"})," for strukturert data som skal sammenlignes raskt."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Gjør dette"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Venstrejuster tekst; høyrejuster tall."}),`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"Table.HeaderCell"})," i overskriftceller."]}),`
`,e.jsx(n.li,{children:"Vurder meny for sekundære radhandlinger."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Unngå dette"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vise store datamengder på mobil uten tilpasning."}),`
`,e.jsx(n.li,{children:"Bruke tabell til layout."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(n.p,{children:"Hold celleinnhold kort og konsist. På smale flater bør innhold som hovedregel være toppjustert."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"Table.HeaderCell"})," med korrekt ",e.jsx(n.code,{children:"scope"}),"."]}),`
`,e.jsxs(n.li,{children:["Legg alltid til ",e.jsx(n.code,{children:"caption"}),"."]}),`
`,e.jsx(n.li,{children:"Unngå sammenslåtte celler og flere interaktive elementer i samme celle."}),`
`,e.jsx(n.li,{children:"Test tastaturnavigasjon for sortering og fokus."}),`
`]})]})}function D(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
