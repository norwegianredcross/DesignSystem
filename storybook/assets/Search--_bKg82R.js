import{j as e}from"./iframe-CYitWwxf.js";import{useMDXComponents as i}from"./index-BJ8ed4lP.js";import{M as t,P as d,C as o,a as s}from"./WithTooltip-SK46ZJ2J-B6zfdSg2.js";import{S as h,C as a,D as c,W as j,a as x,b as k}from"./Search.stories-B1vY2te7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFyHLDNM.js";import"./index-5axuqye_.js";import"./lite-DaUVFjkg.js";import"./button-DLsIgNaD.js";import"./index-DsDLXizo.js";import"./spinner-CfnAC2X-.js";import"./use-merge-refs-BDSP67zQ.js";import"./input-oCvNu6DA.js";import"./index-CwIkLDzn.js";import"./paragraph-BaOS7FTG.js";import"./label-BHuOnr8e.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h}),`
`,e.jsx(n.h1,{id:"search",children:"Search"}),`
`,e.jsxs(n.h4,{id:"search-lar-brukere-finne-innhold-raskt-gjennom-et-søkefelt--med-eller-uten-knapp",children:[e.jsx(n.code,{children:"Search"})," lar brukere finne innhold raskt gjennom et søkefelt – med eller uten knapp."]}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Search.Clear"})," og ",e.jsx(n.code,{children:"Search.Button"})," etter behov. Vi anbefaler å vise ",e.jsx(n.code,{children:"Search.Clear"}),` slik at brukeren enkelt kan tømme feltet.
Hvis du ikke bruker `,e.jsx(n.code,{children:"Search.Button"}),", vises et søkeikon i inputen."]}),`
`,e.jsxs(n.p,{children:["Husk ",e.jsx(n.code,{children:"aria-label"})," eller ",e.jsx(n.code,{children:"aria-labelledby"})," dersom du ikke kobler ",e.jsx(n.code,{children:"Search.Input"})," til en ",e.jsx(n.code,{children:"Label"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Search } from 'rk-designsystem';

<Search>
  <Search.Input aria-label="Søk" />
  <Search.Clear />
  <Search.Button />
</Search>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"varianter",children:"Varianter"}),`
`,e.jsxs(n.p,{children:["Endre ",e.jsx(n.code,{children:"variant"})," på ",e.jsx(n.code,{children:"Search.Button"}),", eller fjern knappen helt for kun ikon i input."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"med-label",children:"Med Label"}),`
`,e.jsxs(n.p,{children:["Koble ",e.jsx(n.code,{children:"Label"})," til ",e.jsx(n.code,{children:"Search.Input"})," (gjerne via ",e.jsx(n.code,{children:"Field"}),")."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"i-skjema",children:"I skjema"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Search.Button"})," har ",e.jsx(n.code,{children:'type="submit"'})," og sender inn skjemaet."]}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(n.p,{children:"Velg bredde på søkefeltet ut fra typiske søk. Et hovedsøkefelt kan gjerne være bredt, mens felter for korte verdier (som personnummer) bør matche forventet lengde. Unngå søkefelt som er så smale at innhold må scrolles horisontalt."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Å hjelpe brukere å finne relevant informasjon raskt."}),`
`,e.jsx(n.li,{children:"Når brukerne skriver nøkkelord eller setninger."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Når innholdet er lett å navigere uten søk."}),`
`,e.jsx(n.li,{children:"Som erstatning for god navigasjon – søk er et supplement."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.p,{children:["Bruk placeholder med varsomhet. Den forsvinner ved input, må oppfylle kontrastkrav, og håndteres ulikt av skjermlesere. Gi heller beskrivelse via ",e.jsx(n.code,{children:"Label"})," eller hjelpetekst."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(n.h3,{id:"tastaturinteraksjon",children:"Tastaturinteraksjon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Esc"})," tømmer feltet (for enhetlig opplevelse)."]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Tab"})," navigerer mellom input, clear og knapp."]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," sender inn når fokus er i input."]}),`
`]}),`
`,e.jsx(n.h3,{id:"skjermleserstøtte",children:"Skjermleserstøtte"}),`
`,e.jsxs(n.p,{children:["Ikke bruk placeholder som eneste beskrivelse. Bruk ",e.jsx(n.code,{children:"Label"})," eller beskrivende attributter."]})]})}function P(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{P as default};
