import{j as e}from"./iframe-D3UXmMk6.js";import{useMDXComponents as l}from"./index-B3YtZbdH.js";import{M as s,P as t,C as d,a as o}from"./WithTooltip-SK46ZJ2J-BJHHZGju.js";import{R as a,D as c}from"./Radio.stories-BUKl_kVn.js";import"./preload-helper-u0ftyAaf.js";import"./index-1OULqRJD.js";import"./index-CNbE2nNu.js";import"./index-D-IJNEei.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-B7pPzuIf.js";import"./paragraph-5yUmggLQ.js";import"./input-Dlpk9tn3.js";import"./label-DL8EoMgf.js";import"./index-DiDBLey2.js";function i(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(r.h1,{id:"radio",children:"Radio"}),`
`,e.jsxs(r.h4,{id:"radio-lar-brukeren-velge-ett-av-flere-alternativer-bruk-én-radio-per-valg-og-grupper-dem-med-samme-name",children:[e.jsx(r.code,{children:"Radio"})," lar brukeren velge ett av flere alternativer. Bruk én ",e.jsx(r.code,{children:"Radio"})," per valg, og grupper dem med samme ",e.jsx(r.code,{children:"name"}),"."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.a,{href:"/docs/komponenter-fieldset--docs",children:e.jsx(r.code,{children:"Fieldset"})})," for å gruppere relaterte alternativer, og vurder ",e.jsx(r.a,{href:"/docs/utilities-useradiogroup--docs",children:e.jsx(r.code,{children:"useRadioGroup"})})," for å håndtere verdi og hendelser."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Radio, Fieldset } from 'rk-designsystem';

<Fieldset>
  <Fieldset.Legend>Er du over 18 år?</Fieldset.Legend>
  <Radio value="ja" label="Ja" name="alternativ" />
  <Radio value="nei" label="Nei" name="alternativ" />
</Fieldset>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"grunnleggende",children:"Grunnleggende"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.code,{children:"Radio"})," når brukeren skal velge kun ett alternativ. Trenger de å velge flere, bruk ",e.jsx(r.a,{href:"/docs/komponenter-checkbox--docs",children:e.jsx(r.code,{children:"Checkbox"})}),". Unngå flere enn ~7 alternativer i samme gruppe; vurder ",e.jsx(r.a,{href:"/docs/komponenter-suggestion--docs",children:e.jsx(r.code,{children:"Suggestion"})})," eller ",e.jsx(r.a,{href:"/docs/komponenter-select--docs",children:e.jsx(r.code,{children:"Select"})})," ved mange valg."]}),`
`,e.jsx(r.h3,{id:"sortering-og-plassering",children:"Sortering og plassering"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Sorter som hovedregel alfabetisk for å gjøre det lett å finne riktig alternativ."}),`
`,e.jsx(r.li,{children:"Plasser vanligvis alternativene vertikalt for bedre lesbarhet. Vurder horisontal plassering kun for to korte valg (for eksempel «Ja»/«Nei») eller skalaer der det er naturlig."}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.p,{children:["En gruppe bør ha en tydelig ",e.jsx(r.code,{children:"legend"})," og eventuell hjelpetekst (",e.jsx(r.code,{children:"description"}),"). Hvert alternativ skal ha en kort og konsis ",e.jsx(r.code,{children:"label"}),". Du kan også legge til en ",e.jsx(r.code,{children:"description"})," under et enkelt alternativ ved behov."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(r.p,{children:"Sørg for god avstand mellom alternativene slik at de er enkle å treffe på berøringsskjermer. Unngå unødvendig horisontal plassering. Tastaturnavigasjon følger standard radios:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Piltaster flytter mellom valg"}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Space"})," velger markert alternativ"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Tab"})," flytter fokus til/fra gruppen"]}),`
`]})]})}function S(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{S as default};
