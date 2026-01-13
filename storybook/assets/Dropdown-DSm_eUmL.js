import{j as e}from"./iframe-C-f8trZc.js";import{useMDXComponents as i}from"./index-DOlcghGr.js";import{M as l,P as p,C as a,a as o,A as d}from"./WithTooltip-SK46ZJ2J-CjcHKAAu.js";import{D as c,a as h,C as g,W as j,T as x}from"./Dropdown.stories-Dfdb-mfu.js";import{D as t}from"./index-B2BRrPR9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DtnBSzEB.js";import"./index--X_PANVH.js";import"./button-s-EFVStT.js";import"./index-C5Gkf7MA.js";import"./lite-DaUVFjkg.js";import"./spinner-D4eXZ9ju.js";import"./use-merge-refs-6K5Hje1K.js";import"./paragraph-DzLOVxhY.js";import"./popover-trigger-D5N_o-8_.js";import"./floating-ui.dom-BOb7AeKv.js";import"./heading-BPJON6T8.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(r.h1,{id:"dropdown",children:"Dropdown"}),`
`,e.jsxs(r.h4,{id:"dropdown-er-en-fleksibel-nedtrekkskomponent-som-bygger-videre-på-nettleserens-popover-mekanisme-den-egner-seg-godt-til-menyer-og-handlingslister",children:[e.jsx(r.code,{children:"Dropdown"})," er en fleksibel nedtrekkskomponent som bygger videre på nettleserens popover-mekanisme. Den egner seg godt til menyer og handlingslister."]}),`
`,e.jsx(p,{}),`
`,e.jsx(a,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Dropdown } from 'rk-designsystem';\r
\r
// med context\r
<Dropdown.TriggerContext>\r
  <Dropdown.Trigger>Trigger</Dropdown.Trigger>\r
  <Dropdown>\r
    <Dropdown.Heading>Heading</Dropdown.Heading>\r
    <Dropdown.List>\r
      <Dropdown.Item>\r
        <Dropdown.Button>Item</Dropdown.Button>\r
      </Dropdown.Item>\r
    </Dropdown.List>\r
  </Dropdown>\r
  </Dropdown.TriggerContext>\r
\r
// uten context\r
<Button popovertarget="my-dropdown">Trigger</Button>\r
<Dropdown id="my-dropdown">\r
  <Dropdown.Heading>Heading</Dropdown.Heading>\r
  <Dropdown.List>\r
    <Dropdown.Item>\r
      <Dropdown.Button>Item</Dropdown.Button>\r
    </Dropdown.Item>\r
  </Dropdown.List>\r
</Dropdown>
`})}),`
`,e.jsxs(r.h3,{id:"react-og-popovertarget",children:["React og ",e.jsx(r.code,{children:"popovertarget"})]}),`
`,e.jsxs(r.p,{children:["Når du ikke bruker ",e.jsx(r.code,{children:"Dropdown.TriggerContext"}),", må du koble sammen utløser og popover selv. Bruk da attributtet ",e.jsx(r.code,{children:"popovertarget"})," i små bokstaver slik at alle React-versjoner gjengir attributtet korrekt."]}),`
`,e.jsx(r.h3,{id:"polyfill",children:"Polyfill"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Dropdown"})," benytter Popover API. Dette er bredt støttet i moderne nettlesere (Baseline ca. april 2024). Dersom du må støtte eldre nettlesere, kan en polyfill være aktuelt: ",e.jsx(r.code,{children:"https://github.com/oddbird/popover-polyfill"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"standard",children:"Standard"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(r.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsxs(r.p,{children:["Hvis du sender inn ",e.jsx(r.code,{children:"open"}),", brukes ",e.jsx(r.code,{children:"Dropdown"})," kontrollert. Du kan lytte på ",e.jsx(r.code,{children:"onClose"})," for å få beskjed når komponenten ber om å lukkes."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsxs(r.h3,{id:"uten-dropdowntrigger",children:["Uten ",e.jsx(r.code,{children:"Dropdown.Trigger"})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Dropdown"})," bygger på Popover API, så du kan bruke den uten ",e.jsx(r.code,{children:"Dropdown.Trigger"}),". Da må du legge på ",e.jsx(r.code,{children:"popovertarget={id}"})," på utløseren, og ",e.jsx(r.code,{children:"id"})," på ",e.jsx(r.code,{children:"Dropdown"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(r.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsxs(r.p,{children:["Endre ",e.jsx(r.code,{children:"placement"})," for å kontrollere hvor menyen åpner seg i forhold til utløseren."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(r.p,{children:"Popover-API-et følger åpen/lukket-tilstand og fungerer med standard tastaturnavigasjon."}),`
`,e.jsx(r.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Enter"})," eller ",e.jsx("kbd",{children:"Space"})," åpner/lukker menyen"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Enter"})," eller ",e.jsx("kbd",{children:"Space"})," aktiverer markert element"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Esc"})," lukker menyen"]}),`
`]}),`
`,e.jsx(r.h3,{id:"tastatur",children:"Tastatur"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Dropdown"})," har ikke innebygd piltast-navigasjon for menyer. For mer avansert mønster kan du supplere med en fokusstyringshjelper (f.eks. roving focus)."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"dropdownlist",children:e.jsx(r.code,{children:"Dropdown.List"})}),`
`,e.jsx(d,{of:t.List}),`
`,e.jsx(r.h2,{id:"dropdowntrigger",children:e.jsx(r.code,{children:"Dropdown.Trigger"})}),`
`,e.jsx(d,{of:t.Trigger}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(r.p,{children:["Ingen dedikerte CSS-variabler er dokumentert for ",e.jsx(r.code,{children:"Dropdown"})," i denne demoen."]})]})}function M(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
