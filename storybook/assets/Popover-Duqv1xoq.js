import{j as e}from"./iframe-BbkjnMVD.js";import{useMDXComponents as s}from"./index-ZvqeOV6O.js";import{M as i,P as l,C as d,a as o}from"./blocks-C92VdVUb.js";import{P as a,I as c,W as h,D as j,C as p}from"./Popover.stories-CNqcBK5h.js";import"./preload-helper-u0ftyAaf.js";import"./index-D-7l7F4b.js";import"./index-RU5L-lpL.js";import"./tooltip-BCPcpl7m.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(n.h4,{id:"popover-vises-over-annet-innhold-og-er-forankret-til-et-utløserelement-bruk-den-til-tilleggsinformasjon-eller-enkle-interaksjoner-uten-å-forlate-siden-når-tooltip-ikke-er-tilstrekkelig-kan-popover-være-et-godt-alternativ",children:[e.jsx(n.code,{children:"Popover"})," vises over annet innhold og er forankret til et utløser‑element. Bruk den til tilleggsinformasjon eller enkle interaksjoner uten å forlate siden. Når ",e.jsx(n.a,{href:"/docs/komponenter-tooltip--docs",children:e.jsx(n.code,{children:"Tooltip"})})," ikke er tilstrekkelig, kan ",e.jsx(n.code,{children:"Popover"})," være et godt alternativ."]}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Popover } from 'rk-designsystem';

// med context
<Popover.TriggerContext>
  <Popover.Trigger>Trigger</Popover.Trigger>
  <Popover>Content</Popover>
</Popover.TriggerContext>

// uten context med egen trigger
<Button popovertarget="my-popover">Trigger</Button>
<Popover id="my-popover">Content</Popover>
`})}),`
`,e.jsxs(n.h3,{id:"react-og-popovertarget",children:["React og ",e.jsx(n.code,{children:"popovertarget"})]}),`
`,e.jsxs(n.p,{children:["Uten ",e.jsx(n.code,{children:"Popover.TriggerContext"})," må du koble trigger og ",e.jsx(n.code,{children:"Popover"})," selv. Bruk ",e.jsx(n.code,{children:"popovertarget"})," i små bokstaver for kompatibilitet i alle React‑versjoner."]}),`
`,e.jsx(n.h3,{id:"polyfill",children:"Polyfill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popover"})," benytter Popover‑attributtet fra HTML. Funksjonen er bredt støttet i moderne nettlesere, men vurder en polyfill dersom du må støtte eldre versjoner."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"interaktive-elementer",children:"Interaktive elementer"}),`
`,e.jsx(n.p,{children:"Popover kan inneholde knapper og andre interaktive elementer."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"uten-context",children:"Uten context"}),`
`,e.jsxs(n.p,{children:["Koble egen trigger via ",e.jsx(n.code,{children:"popovertarget"})," og ",e.jsx(n.code,{children:"id"}),"."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"farger-og-varianter",children:"Farger og varianter"}),`
`,e.jsxs(n.p,{children:["Endre uttrykk med ",e.jsx(n.code,{children:"data-color"})," og ",e.jsx(n.code,{children:"variant"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsxs(n.p,{children:["Styr åpen/lukket tilstand via ",e.jsx(n.code,{children:"open"})," og ",e.jsx(n.code,{children:"onClose"}),"."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Popover"})," for kontekstuell hjelp eller korte handlinger som ikke krever sideskifte. Innholdet bør være kort og relevant."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["utdypende forklaringer som trenger mer plass enn en ",e.jsx(n.code,{children:"Tooltip"})]}),`
`,e.jsx(n.li,{children:"kontekstspesifikk hjelp som åpnes/lukkes ved behov"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["rene beskrivelser av symboler eller snarveier (bruk ",e.jsx(n.code,{children:"Tooltip"}),")"]}),`
`,e.jsxs(n.li,{children:["navigasjon/valg av alternativer (vurder ",e.jsx(n.a,{href:"/docs/komponenter-dropdown--docs",children:e.jsx(n.code,{children:"Dropdown"})}),")"]}),`
`,e.jsxs(n.li,{children:["innhold som skal vises på ",e.jsx(n.code,{children:"hover"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsxs(n.p,{children:["Juster ",e.jsx(n.code,{children:"placement"})," etter behov. Automatisk begrensning innenfor viewport kan slås av med ",e.jsx(n.code,{children:"autoPlacement={false}"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(n.p,{children:"Popover‑API følger åpen/lukket‑tilstand og standard tastaturnavigasjon."}),`
`,e.jsx(n.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," åpner/lukker"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Esc"})," lukker"]}),`
`]})]})}function b(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{b as default};
