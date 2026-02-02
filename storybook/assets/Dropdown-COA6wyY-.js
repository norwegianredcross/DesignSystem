import{j as e}from"./iframe-IHJmHc8I.js";import{useMDXComponents as i}from"./index-iXFj5LOT.js";import{M as l,P as p,C as a,a as o,A as d}from"./WithTooltip-SK46ZJ2J-I20OBjih.js";import{D as c,a as h,C as g,W as j,T as x}from"./Dropdown.stories-CDpET5gv.js";import{D as t}from"./index-DWaZpgF9.js";import"./preload-helper-u0ftyAaf.js";import"./index-nKKaeTUp.js";import"./index-Bi42Kbpk.js";import"./button-14GpHzfp.js";import"./index-CRUMHOiV.js";import"./lite-DaUVFjkg.js";import"./spinner-CokI4PIN.js";import"./use-merge-refs-Bh3yHG4k.js";import"./paragraph-xDJFh0Yk.js";import"./popover-trigger-DyRWYoKd.js";import"./floating-ui.dom-BOb7AeKv.js";import"./heading-Cca_h9C6.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"dropdown",children:"Dropdown"}),`
`,e.jsxs(n.h4,{id:"dropdown-er-en-fleksibel-nedtrekkskomponent-som-bygger-videre-på-nettleserens-popover-mekanisme-den-egner-seg-godt-til-menyer-og-handlingslister",children:[e.jsx(n.code,{children:"Dropdown"})," er en fleksibel nedtrekkskomponent som bygger videre på nettleserens popover-mekanisme. Den egner seg godt til menyer og handlingslister."]}),`
`,e.jsx(p,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Dropdown } from 'rk-designsystem';

// med context
<Dropdown.TriggerContext>
  <Dropdown.Trigger>Trigger</Dropdown.Trigger>
  <Dropdown>
    <Dropdown.Heading>Heading</Dropdown.Heading>
    <Dropdown.List>
      <Dropdown.Item>
        <Dropdown.Button>Item</Dropdown.Button>
      </Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
  </Dropdown.TriggerContext>

// uten context
<Button popovertarget="my-dropdown">Trigger</Button>
<Dropdown id="my-dropdown">
  <Dropdown.Heading>Heading</Dropdown.Heading>
  <Dropdown.List>
    <Dropdown.Item>
      <Dropdown.Button>Item</Dropdown.Button>
    </Dropdown.Item>
  </Dropdown.List>
</Dropdown>
`})}),`
`,e.jsxs(n.h3,{id:"react-og-popovertarget",children:["React og ",e.jsx(n.code,{children:"popovertarget"})]}),`
`,e.jsxs(n.p,{children:["Når du ikke bruker ",e.jsx(n.code,{children:"Dropdown.TriggerContext"}),", må du koble sammen utløser og popover selv. Bruk da attributtet ",e.jsx(n.code,{children:"popovertarget"})," i små bokstaver slik at alle React-versjoner gjengir attributtet korrekt."]}),`
`,e.jsx(n.h3,{id:"polyfill",children:"Polyfill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Dropdown"})," benytter Popover API. Dette er bredt støttet i moderne nettlesere (Baseline ca. april 2024). Dersom du må støtte eldre nettlesere, kan en polyfill være aktuelt: ",e.jsx(n.code,{children:"https://github.com/oddbird/popover-polyfill"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"standard",children:"Standard"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsxs(n.p,{children:["Hvis du sender inn ",e.jsx(n.code,{children:"open"}),", brukes ",e.jsx(n.code,{children:"Dropdown"})," kontrollert. Du kan lytte på ",e.jsx(n.code,{children:"onClose"})," for å få beskjed når komponenten ber om å lukkes."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsxs(n.h3,{id:"uten-dropdowntrigger",children:["Uten ",e.jsx(n.code,{children:"Dropdown.Trigger"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Dropdown"})," bygger på Popover API, så du kan bruke den uten ",e.jsx(n.code,{children:"Dropdown.Trigger"}),". Da må du legge på ",e.jsx(n.code,{children:"popovertarget={id}"})," på utløseren, og ",e.jsx(n.code,{children:"id"})," på ",e.jsx(n.code,{children:"Dropdown"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsxs(n.p,{children:["Endre ",e.jsx(n.code,{children:"placement"})," for å kontrollere hvor menyen åpner seg i forhold til utløseren."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(n.p,{children:"Popover-API-et følger åpen/lukket-tilstand og fungerer med standard tastaturnavigasjon."}),`
`,e.jsx(n.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," eller ",e.jsx("kbd",{children:"Space"})," åpner/lukker menyen"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," eller ",e.jsx("kbd",{children:"Space"})," aktiverer markert element"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Esc"})," lukker menyen"]}),`
`]}),`
`,e.jsx(n.h3,{id:"tastatur",children:"Tastatur"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Dropdown"})," har ikke innebygd piltast-navigasjon for menyer. For mer avansert mønster kan du supplere med en fokusstyringshjelper (f.eks. roving focus)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dropdownlist",children:e.jsx(n.code,{children:"Dropdown.List"})}),`
`,e.jsx(d,{of:t.List}),`
`,e.jsx(n.h2,{id:"dropdowntrigger",children:e.jsx(n.code,{children:"Dropdown.Trigger"})}),`
`,e.jsx(d,{of:t.Trigger}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(n.p,{children:["Ingen dedikerte CSS-variabler er dokumentert for ",e.jsx(n.code,{children:"Dropdown"})," i denne demoen."]})]})}function M(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{M as default};
