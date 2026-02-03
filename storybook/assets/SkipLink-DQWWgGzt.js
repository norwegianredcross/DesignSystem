import{j as e}from"./iframe-CyRwQgzu.js";import{useMDXComponents as t}from"./index-BFU6nSJF.js";import{M as s,P as o,C as l}from"./WithTooltip-SK46ZJ2J-DWLKNZfP.js";import{S as d}from"./SkipLink.stories-DQT5dMfv.js";import"./preload-helper-u0ftyAaf.js";import"./index-CkJmxMVK.js";import"./lite-DaUVFjkg.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"skiplink",children:"SkipLink"}),`
`,e.jsxs(n.h4,{id:"skiplink-hjelper-tastaturbrukere-å-hoppe-direkte-til-hovedinnholdet-og-forbi-repeterende-elementer",children:[e.jsx(n.code,{children:"SkipLink"})," hjelper tastaturbrukere å hoppe direkte til hovedinnholdet og forbi repeterende elementer."]}),`
`,e.jsx(o,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SkipLink"})," bør være blant de første tabbable elementene på siden."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SkipLink } from 'rk-designsystem';

<SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>

<main id="main-content" tabIndex={-1}>
  Region som kan motta fokus fra skiplink.
  {/* Sett fokus hit når linken følges */}
  {/* Sørg for outline/fokusstil ved fokus */}
</main>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Når man navigerer med tastatur, skal det være mulig å hoppe forbi navigasjon og toppinnhold. Plasser ",e.jsx(n.code,{children:"SkipLink"})," som første fokuserbare element (etter eventuelle cookie-varsler). Den bør skille seg visuelt ut når den er i fokus."]}),`
`,e.jsxs(n.p,{children:["Unngå ",e.jsx(n.code,{children:"SkipLink"})," hvis det kun er få tab-stopp til hovedinnholdet – da kan det skape mer støy enn nytte."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(n.p,{children:"Bruk en tydelig og enkel tekst, som «Hopp til hovedinnhold»."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SkipLink"})," er vanligvis skjult frem til den får fokus via Tab. Noen automatiske a11y-tester kan feilaktig varsle om at ",e.jsx(n.code,{children:"SkipLink"})," mangler landemerke; dette er normalt for denne komponenten."]})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{x as default};
