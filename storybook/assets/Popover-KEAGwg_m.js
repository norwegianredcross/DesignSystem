import{j as e}from"./iframe-BYxwGohZ.js";import{useMDXComponents as i}from"./index-CtVuIbBp.js";import{M as s,P as l,C as d,a as o}from"./WithTooltip-SK46ZJ2J-BDj68sQK.js";import{P as a,I as c,W as h,D as p,C as j}from"./Popover.stories-Br_eRy-v.js";import"./preload-helper-Dp1pzeXC.js";import"./index-yjQJYNap.js";import"./popover-trigger-DtQs7xNB.js";import"./floating-ui.dom-BOb7AeKv.js";import"./index-CMhwa6Pi.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-Dsmo10LB.js";import"./button-6Gc7hkeU.js";import"./spinner-r2Y_tzWW.js";import"./paragraph-3ke5wr6w.js";function t(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(r.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(r.h4,{id:"popover-vises-over-annet-innhold-og-er-forankret-til-et-utløserelement-bruk-den-til-tilleggsinformasjon-eller-enkle-interaksjoner-uten-å-forlate-siden-når-tooltip-ikke-er-tilstrekkelig-kan-popover-være-et-godt-alternativ",children:[e.jsx(r.code,{children:"Popover"})," vises over annet innhold og er forankret til et utløser‑element. Bruk den til tilleggsinformasjon eller enkle interaksjoner uten å forlate siden. Når ",e.jsx(r.a,{href:"/docs/komponenter-tooltip--docs",children:e.jsx(r.code,{children:"Tooltip"})})," ikke er tilstrekkelig, kan ",e.jsx(r.code,{children:"Popover"})," være et godt alternativ."]}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Popover } from 'rk-designsystem';

// med context
<Popover.TriggerContext>
  <Popover.Trigger>Trigger</Popover.Trigger>
  <Popover>Content</Popover>
</Popover.TriggerContext>

// uten context med egen trigger
<Button popovertarget="my-popover">Trigger</Button>
<Popover id="my-popover">Content</Popover>
`})}),`
`,e.jsxs(r.h3,{id:"react-og-popovertarget",children:["React og ",e.jsx(r.code,{children:"popovertarget"})]}),`
`,e.jsxs(r.p,{children:["Uten ",e.jsx(r.code,{children:"Popover.TriggerContext"})," må du koble trigger og ",e.jsx(r.code,{children:"Popover"})," selv. Bruk ",e.jsx(r.code,{children:"popovertarget"})," i små bokstaver for kompatibilitet i alle React‑versjoner."]}),`
`,e.jsx(r.h3,{id:"polyfill",children:"Polyfill"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Popover"})," benytter Popover‑attributtet fra HTML. Funksjonen er bredt støttet i moderne nettlesere, men vurder en polyfill dersom du må støtte eldre versjoner."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"interaktive-elementer",children:"Interaktive elementer"}),`
`,e.jsx(r.p,{children:"Popover kan inneholde knapper og andre interaktive elementer."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(r.h3,{id:"uten-context",children:"Uten context"}),`
`,e.jsxs(r.p,{children:["Koble egen trigger via ",e.jsx(r.code,{children:"popovertarget"})," og ",e.jsx(r.code,{children:"id"}),"."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(r.h3,{id:"farger-og-varianter",children:"Farger og varianter"}),`
`,e.jsxs(r.p,{children:["Endre uttrykk med ",e.jsx(r.code,{children:"data-color"})," og ",e.jsx(r.code,{children:"variant"}),"."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(r.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsxs(r.p,{children:["Styr åpen/lukket tilstand via ",e.jsx(r.code,{children:"open"})," og ",e.jsx(r.code,{children:"onClose"}),"."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.code,{children:"Popover"})," for kontekstuell hjelp eller korte handlinger som ikke krever sideskifte. Innholdet bør være kort og relevant."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["utdypende forklaringer som trenger mer plass enn en ",e.jsx(r.code,{children:"Tooltip"})]}),`
`,e.jsx(r.li,{children:"kontekstspesifikk hjelp som åpnes/lukkes ved behov"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["rene beskrivelser av symboler eller snarveier (bruk ",e.jsx(r.code,{children:"Tooltip"}),")"]}),`
`,e.jsxs(r.li,{children:["navigasjon/valg av alternativer (vurder ",e.jsx(r.a,{href:"/docs/komponenter-dropdown--docs",children:e.jsx(r.code,{children:"Dropdown"})}),")"]}),`
`,e.jsxs(r.li,{children:["innhold som skal vises på ",e.jsx(r.code,{children:"hover"})]}),`
`]}),`
`,e.jsx(r.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsxs(r.p,{children:["Juster ",e.jsx(r.code,{children:"placement"})," etter behov. Automatisk begrensning innenfor viewport kan slås av med ",e.jsx(r.code,{children:"autoPlacement={false}"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(r.p,{children:"Popover‑API følger åpen/lukket‑tilstand og standard tastaturnavigasjon."}),`
`,e.jsx(r.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Enter"})," / ",e.jsx("kbd",{children:"Space"})," åpner/lukker"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Esc"})," lukker"]}),`
`]})]})}function D(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{D as default};
