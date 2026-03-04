import{j as e}from"./iframe-D2xs-UIl.js";import{useMDXComponents as l}from"./index-Bj3j9nEs.js";import{M as s,P as t,C as d,a as o}from"./blocks-HqUMwLq_.js";import{R as a,D as c}from"./Radio.stories-DmPPQces.js";import"./preload-helper-u0ftyAaf.js";import"./index-dcxs7F6K.js";import"./index-BgI3q9AT.js";import"./index-B04Q2lyP.js";import"./index-Cuay2QMQ.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BNX0PADi.js";import"./paragraph-D-guQq-E.js";import"./input-DwgTLOpX.js";import"./label-KZ-nz01W.js";import"./index-B3cEoTJg.js";function i(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
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
`]})]})}function y(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
