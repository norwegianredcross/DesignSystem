import{j as e}from"./iframe-Br9Et5Zo.js";import{useMDXComponents as t}from"./index-LBsQ3c2_.js";import{M as l,P as o,C as d,a as i}from"./blocks-DODQuv9U.js";import{T as h,D as c,B as a,P as j}from"./Tooltip.stories-DadEaheh.js";import"./preload-helper-u0ftyAaf.js";import"./index-DaQG6EXG.js";import"./index-B2BjBtEZ.js";import"./index-E0YtOW5y.js";import"./tooltip-ClCjO86Y.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(n.h4,{id:"tooltip-viser-kort-informasjon-ved-hover-eller-fokus-typisk-for-å-forklare-et-symbol-eller-gi-sekundære-detaljer",children:[e.jsx(n.code,{children:"Tooltip"})," viser kort informasjon ved hover eller fokus, typisk for å forklare et symbol eller gi sekundære detaljer."]}),`
`,e.jsx(o,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:["Du kan sende inn en streng eller et element som trigger. Når du sender inn en streng, blir den wrappet i en ",e.jsx(n.code,{children:"<span>"}),". ",e.jsx(n.code,{children:"Tooltip"})," rendrer en ",e.jsx(n.code,{children:"<span>"})," som standard, og kan ikke brukes direkte inni ",e.jsx(n.code,{children:"<svg>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tooltip } from 'rk-designsystem';

// streng – rendrer <span>
<Tooltip content="Vises i tooltip">
  Trigger
</Tooltip>

// element – rendrer ditt element
<Tooltip content="Vises i tooltip">
  <Button>Trigger</Button>
</Tooltip>
`})}),`
`,e.jsx(n.h3,{id:"polyfill",children:"Polyfill"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tooltip"})," benytter Popover‑attributtet. For eldre nettlesere kan du vurdere en polyfill dersom støtte kreves."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"med-string",children:"Med string"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"med-knapp",children:"Med knapp"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Tooltip"})," til kort, ikke‑kritisk informasjon. Viktig innhold bør stå i brødtekst eller hjelpetekst på siden. Ikke bruk som erstatning for ",e.jsx(n.code,{children:"alt"}),"/",e.jsx(n.code,{children:"title"})," eller for interaktive elementer."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"å forklare symboler"}),`
`,e.jsx(n.li,{children:"å beskrive en knapphandling"}),`
`,e.jsx(n.li,{children:"å vise tastatursnarveier"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"lange forklaringer eller skjult innhold"}),`
`,e.jsx(n.li,{children:"meldinger/advarsler"}),`
`,e.jsx(n.li,{children:"lenker eller interaktive elementer"}),`
`,e.jsx(n.li,{children:"tekst som allerede er synlig"}),`
`]}),`
`,e.jsxs(n.p,{children:["Hvis du trenger rikere innhold (lengre tekster, bilder, knapper), vurder ",e.jsx(n.a,{href:"/docs/komponenter-popover--docs",children:e.jsx(n.code,{children:"Popover"})}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.p,{children:["Tooltip vises ved hover og ved fokus med tastatur. På berøringsenheter kan ",e.jsx(n.code,{children:"Tooltip"})," være mindre egnet; vises ofte kun ved trykk og forsvinner ved trykk utenfor."]})]})}function y(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{y as default};
