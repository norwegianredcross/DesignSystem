import{j as e}from"./iframe-DXL6wxnn.js";import{useMDXComponents as i}from"./index-CWvymt90.js";import{M as o,P as l,C as a,a as t,A as g}from"./blocks-Dv8bs0Nz.js";import{S as d,M as c,N as h,A as m,C as p,a as x}from"./Suggestion.stories-Cf5MLb9O.js";import"./index-DSYD7PjM.js";import"./lite-DaUVFjkg.js";import"./index-Jj_wknfm.js";import"./index-C3v5PFwk.js";import"./input-DLWgtxfN.js";import"./use-merge-refs-a0h496de.js";import"./button-D1XpUp4o.js";import"./spinner-LQIT-Big.js";import"./floating-ui.dom-BOb7AeKv.js";import"./index-DTXAkO9W.js";import"./index-CUYyNmQA.js";import"./paragraph-CbBeL6mn.js";import"./label-DgGu26Ir.js";import"./index-CHAS0UV_.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"suggestion",children:"Suggestion"}),`
`,e.jsxs(n.h4,{id:"søkbar-select-med-støtte-for-enkeltvalg-og-flervalg-bruk-når-select-ikke-strekker-til",children:["Søkbar “select” med støtte for enkeltvalg og flervalg. Bruk når ",e.jsx(n.code,{children:"Select"})," ikke strekker til."]}),`
`,e.jsx(l,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Suggestion } from 'rk-designsystem';

<Suggestion>
  <Suggestion.Input />
  <Suggestion.Clear />
  <Suggestion.List>
    <Suggestion.Empty>Tomt</Suggestion.Empty>
    <Suggestion.Option label="Sogndal" value="sogndal">Sogndal</Suggestion.Option>
    <Suggestion.Option label="Oslo" value="oslo">Oslo</Suggestion.Option>
  </Suggestion.List>
</Suggestion>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"flervalg",children:"Flervalg"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"multiple"})," for å tillate flere valg. Du kan tilpasse visningen av valgte elementer med ",e.jsx(n.code,{children:"renderSelected"}),"."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"filter",children:"Filter"}),`
`,e.jsxs(n.p,{children:["Filter er på som standard og matcher på input‑tekst. Send en funksjon til ",e.jsx(n.code,{children:"filter"})," for egendefinert filtrering, eller sett ",e.jsx(n.code,{children:"filter={false}"})," for å vise alle."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"asynkrone-data",children:"Asynkrone data"}),`
`,e.jsxs(n.p,{children:["Håndter lasting selv ved å vise tilstand i ",e.jsx(n.code,{children:"Suggestion.Empty"})," (for eksempel en spinner) mens du henter eksterne alternativer."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"creatable",children:"Creatable"}),`
`,e.jsx(n.p,{children:"Tillat at brukeren oppretter nye valg når de ikke finnes i listen."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"suggestionlist",children:e.jsx(n.code,{children:"Suggestion.List"})}),`
`,e.jsx(g,{of:x.List}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilleggsinformasjon",children:"Tilleggsinformasjon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Suggestion"})," bygger på u‑elements sin ",e.jsx(n.code,{children:"u-combobox"}),", og er inspirert av Open UI sitt combobox‑mønster."]})]})}function N(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{N as default};
