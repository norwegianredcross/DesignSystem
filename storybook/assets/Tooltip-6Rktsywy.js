import{j as e}from"./iframe-C1QSOCmb.js";import{useMDXComponents as t}from"./index-Dcf3Lmu4.js";import{M as l,P as o,C as d,a as i}from"./WithTooltip-SK46ZJ2J-CP6d4W44.js";import{T as h,D as c,B as p,P as a}from"./Tooltip.stories-DGsFGffR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D0j_awZg.js";import"./index-dFFMiQv6.js";import"./floating-ui.dom-BOb7AeKv.js";import"./index-Cgkyb37z.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BEbRuOgb.js";import"./button-iz7om0PE.js";import"./spinner-Cvq53YgO.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(r.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(r.h4,{id:"tooltip-viser-kort-informasjon-ved-hover-eller-fokus-typisk-for-å-forklare-et-symbol-eller-gi-sekundære-detaljer",children:[e.jsx(r.code,{children:"Tooltip"})," viser kort informasjon ved hover eller fokus, typisk for å forklare et symbol eller gi sekundære detaljer."]}),`
`,e.jsx(o,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:["Du kan sende inn en streng eller et element som trigger. Når du sender inn en streng, blir den wrappet i en ",e.jsx(r.code,{children:"<span>"}),". ",e.jsx(r.code,{children:"Tooltip"})," rendrer en ",e.jsx(r.code,{children:"<span>"})," som standard, og kan ikke brukes direkte inni ",e.jsx(r.code,{children:"<svg>"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Tooltip } from 'rk-designsystem';\r
\r
// streng – rendrer <span>\r
<Tooltip content="Vises i tooltip">\r
  Trigger\r
</Tooltip>\r
\r
// element – rendrer ditt element\r
<Tooltip content="Vises i tooltip">\r
  <Button>Trigger</Button>\r
</Tooltip>
`})}),`
`,e.jsx(r.h3,{id:"polyfill",children:"Polyfill"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Tooltip"})," benytter Popover‑attributtet. For eldre nettlesere kan du vurdere en polyfill dersom støtte kreves."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"med-string",children:"Med string"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(r.h3,{id:"med-knapp",children:"Med knapp"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(r.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.code,{children:"Tooltip"})," til kort, ikke‑kritisk informasjon. Viktig innhold bør stå i brødtekst eller hjelpetekst på siden. Ikke bruk som erstatning for ",e.jsx(r.code,{children:"alt"}),"/",e.jsx(r.code,{children:"title"})," eller for interaktive elementer."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"å forklare symboler"}),`
`,e.jsx(r.li,{children:"å beskrive en knapphandling"}),`
`,e.jsx(r.li,{children:"å vise tastatursnarveier"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"lange forklaringer eller skjult innhold"}),`
`,e.jsx(r.li,{children:"meldinger/advarsler"}),`
`,e.jsx(r.li,{children:"lenker eller interaktive elementer"}),`
`,e.jsx(r.li,{children:"tekst som allerede er synlig"}),`
`]}),`
`,e.jsxs(r.p,{children:["Hvis du trenger rikere innhold (lengre tekster, bilder, knapper), vurder ",e.jsx(r.a,{href:"/docs/komponenter-popover--docs",children:e.jsx(r.code,{children:"Popover"})}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["Tooltip vises ved hover og ved fokus med tastatur. På berøringsenheter kan ",e.jsx(r.code,{children:"Tooltip"})," være mindre egnet; vises ofte kun ved trykk og forsvinner ved trykk utenfor."]})]})}function B(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{B as default};
