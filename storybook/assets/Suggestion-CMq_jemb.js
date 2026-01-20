import{j as e}from"./iframe-C1fdovZ4.js";import{useMDXComponents as i}from"./index-DRY1Dm-W.js";import{M as o,P as l,C as a,a as t,A as g}from"./WithTooltip-SK46ZJ2J-GSF-Dvdm.js";import{S as d,M as c,N as m,A as p,C as h,a as x}from"./Suggestion.stories-gB_mDZ57.js";import"./preload-helper-u0ftyAaf.js";import"./index-Cs_wwL5H.js";import"./lite-DaUVFjkg.js";import"./index-DsYBc3zr.js";import"./index-gXw-3szL.js";import"./input-CukIBFSh.js";import"./use-merge-refs-Ofxx9rqz.js";import"./button-DLMhCP2x.js";import"./spinner-CzskNPCV.js";import"./floating-ui.dom-BOb7AeKv.js";import"./index-Bl8fvAWe.js";import"./index-Dq6pKD6v.js";import"./paragraph-Dw9ZN-SE.js";import"./label-BAy_haK_.js";import"./index-CjAN9lI0.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
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
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"asynkrone-data",children:"Asynkrone data"}),`
`,e.jsxs(n.p,{children:["Håndter lasting selv ved å vise tilstand i ",e.jsx(n.code,{children:"Suggestion.Empty"})," (for eksempel en spinner) mens du henter eksterne alternativer."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"creatable",children:"Creatable"}),`
`,e.jsx(n.p,{children:"Tillat at brukeren oppretter nye valg når de ikke finnes i listen."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"suggestionlist",children:e.jsx(n.code,{children:"Suggestion.List"})}),`
`,e.jsx(g,{of:x.List}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilleggsinformasjon",children:"Tilleggsinformasjon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Suggestion"})," bygger på u‑elements sin ",e.jsx(n.code,{children:"u-combobox"}),", og er inspirert av Open UI sitt combobox‑mønster."]})]})}function X(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{X as default};
