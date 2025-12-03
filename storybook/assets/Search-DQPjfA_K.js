import{j as e}from"./iframe-BdlBVaMh.js";import{useMDXComponents as i}from"./index-D2UT7g-g.js";import{M as t,P as d,C as o,a as s}from"./WithTooltip-SK46ZJ2J-LQWALc6D.js";import{S as h,C as a,D as c,W as j,a as x,b as k}from"./Search.stories-V2zPLN54.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ckx3ZWNZ.js";import"./lite-DaUVFjkg.js";import"./button-CgDlDh-U.js";import"./index-B0SzS9-D.js";import"./spinner-BnHiu9Ma.js";import"./use-merge-refs-CuM6pwJa.js";import"./input-JUpqDO89.js";import"./index-DFE7n1CE.js";import"./paragraph-Cyb83jPL.js";import"./label-mrELLPrt.js";function l(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h}),`
`,e.jsx(r.h1,{id:"search",children:"Search"}),`
`,e.jsxs(r.h4,{id:"search-lar-brukere-finne-innhold-raskt-gjennom-et-søkefelt--med-eller-uten-knapp",children:[e.jsx(r.code,{children:"Search"})," lar brukere finne innhold raskt gjennom et søkefelt – med eller uten knapp."]}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.code,{children:"Search.Clear"})," og ",e.jsx(r.code,{children:"Search.Button"})," etter behov. Vi anbefaler å vise ",e.jsx(r.code,{children:"Search.Clear"}),` slik at brukeren enkelt kan tømme feltet.\r
Hvis du ikke bruker `,e.jsx(r.code,{children:"Search.Button"}),", vises et søkeikon i inputen."]}),`
`,e.jsxs(r.p,{children:["Husk ",e.jsx(r.code,{children:"aria-label"})," eller ",e.jsx(r.code,{children:"aria-labelledby"})," dersom du ikke kobler ",e.jsx(r.code,{children:"Search.Input"})," til en ",e.jsx(r.code,{children:"Label"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Search } from 'rk-designsystem';\r
\r
<Search>\r
  <Search.Input aria-label="Søk" />\r
  <Search.Clear />\r
  <Search.Button />\r
</Search>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(r.h3,{id:"varianter",children:"Varianter"}),`
`,e.jsxs(r.p,{children:["Endre ",e.jsx(r.code,{children:"variant"})," på ",e.jsx(r.code,{children:"Search.Button"}),", eller fjern knappen helt for kun ikon i input."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(r.h3,{id:"med-label",children:"Med Label"}),`
`,e.jsxs(r.p,{children:["Koble ",e.jsx(r.code,{children:"Label"})," til ",e.jsx(r.code,{children:"Search.Input"})," (gjerne via ",e.jsx(r.code,{children:"Field"}),")."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(r.h3,{id:"i-skjema",children:"I skjema"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Search.Button"})," har ",e.jsx(r.code,{children:'type="submit"'})," og sender inn skjemaet."]}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(r.p,{children:"Velg bredde på søkefeltet ut fra typiske søk. Et hovedsøkefelt kan gjerne være bredt, mens felter for korte verdier (som personnummer) bør matche forventet lengde. Unngå søkefelt som er så smale at innhold må scrolles horisontalt."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Å hjelpe brukere å finne relevant informasjon raskt."}),`
`,e.jsx(r.li,{children:"Når brukerne skriver nøkkelord eller setninger."}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke til:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Når innholdet er lett å navigere uten søk."}),`
`,e.jsx(r.li,{children:"Som erstatning for god navigasjon – søk er et supplement."}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.p,{children:["Bruk placeholder med varsomhet. Den forsvinner ved input, må oppfylle kontrastkrav, og håndteres ulikt av skjermlesere. Gi heller beskrivelse via ",e.jsx(r.code,{children:"Label"})," eller hjelpetekst."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(r.h3,{id:"tastaturinteraksjon",children:"Tastaturinteraksjon"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Esc"})," tømmer feltet (for enhetlig opplevelse)."]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Tab"})," navigerer mellom input, clear og knapp."]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Enter"})," sender inn når fokus er i input."]}),`
`]}),`
`,e.jsx(r.h3,{id:"skjermleserstøtte",children:"Skjermleserstøtte"}),`
`,e.jsxs(r.p,{children:["Ikke bruk placeholder som eneste beskrivelse. Bruk ",e.jsx(r.code,{children:"Label"})," eller beskrivende attributter."]})]})}function I(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(l,{...n})}):l(n)}export{I as default};
