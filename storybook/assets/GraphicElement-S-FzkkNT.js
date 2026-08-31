import{j as e}from"./iframe-KABEvYGD.js";import{useMDXComponents as s}from"./index-CP2k1BXN.js";import{M as o,P as d,C as l}from"./blocks-CLh1JWkB.js";import{G as t}from"./GraphicElement.stories-ByiS85Ta.js";import"./preload-helper-u0ftyAaf.js";import"./index-Cjawd_US.js";import"./index--qTCUQt1.js";import"./index-D2BPK2J_.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(r.h1,{id:"graphicelement",children:"GraphicElement"}),`
`,e.jsxs(r.h4,{id:"dekorative-merkevareformer-fra-røde-kors-identiteten-kors-hjørne-vinkel-hjerte-mfl-i-tre-stiler-solid-outline-og-isometric",children:["Dekorative merkevareformer fra Røde Kors-identiteten (kors, hjørne, vinkel, hjerte m.fl.) i tre stiler: ",e.jsx(r.code,{children:"solid"}),", ",e.jsx(r.code,{children:"outline"})," og ",e.jsx(r.code,{children:"isometric"}),"."]}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.p,{children:`GraphicElement erstatter tidligere ad hoc-grafikk (inkludert den gamle
CrossCorner-komponenten). Alle former er avledet fra samme grid og skalerer
konsistent.`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { GraphicElement } from 'rk-designsystem';

// Dekorativt hjørne i en seksjon
<GraphicElement shape="angle" position="top-right" size="lg" aria-hidden />

// Korset i merkevarefarge, på egen fargeflate
<GraphicElement shape="cross" data-color="primary-color-red" aria-hidden />
`})}),`
`,e.jsx(r.h3,{id:"form-stil-og-retning",children:"Form, stil og retning"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"shape"}),": ",e.jsx(r.code,{children:"corner"}),", ",e.jsx(r.code,{children:"square"}),", ",e.jsx(r.code,{children:"angle"}),", ",e.jsx(r.code,{children:"heart"}),", ",e.jsx(r.code,{children:"tee"}),", ",e.jsx(r.code,{children:"bar"}),", ",e.jsx(r.code,{children:"cross"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"variant"}),": ",e.jsx(r.code,{children:"solid"})," (fylt), ",e.jsx(r.code,{children:"outline"}),` (tynn strek — åpne kanter, ikke en
lukket kontur) og `,e.jsx(r.code,{children:"isometric"}),` (kun et utvalg former; TypeScript håndhever
gyldige kombinasjoner av `,e.jsx(r.code,{children:"variant"})," + ",e.jsx(r.code,{children:"shape"})," ved kompilering)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"position"}),` styrer hvilket hjørne formen peker mot; for isometriske former
velger den mellom stående/liggende orientering.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"size"}),": ",e.jsx(r.code,{children:"sm"}),"/",e.jsx(r.code,{children:"md"}),"/",e.jsx(r.code,{children:"lg"})," (for ",e.jsx(r.code,{children:"corner"}),": 48/68/96 px)."]}),`
`]}),`
`,e.jsx(r.h3,{id:"farge",children:"Farge"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"data-color"}),` tar et reelt temaskop; uten eksplisitt verdi arver grafikken
skopet fra omgivelsene. Formene bruker skopets basisfarge — de er ment å
ligge på flater der basisfargen gir mening (f.eks. rød på lys bakgrunn).`]}),`
`,e.jsx(r.h2,{id:"gjør--ikke-gjør",children:"Gjør / ikke gjør"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gjør:"}),` bruk formene sparsomt som aksenter i hjørner og kanter — de er
krydder, ikke hovedinnhold.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gjør:"})," sett ",e.jsx(r.code,{children:"aria-hidden"})," (standard) når grafikken er ren dekor."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke gjør:"})," ikke bruk ",e.jsx(r.code,{children:"cross"}),`-formen som erstatning for den offisielle
Røde Kors-logoen — logoen har egne regler og egen komponentplass i
Header/Footer.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke gjør:"}),` ikke roter eller speilvend formene med egen CSS — bruk
`,e.jsx(r.code,{children:"position"}),`, som flytter geometrien i selve SVG-en slik at layoutboksen
forblir korrekt.`]}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`Grafikken er dekorativ og skjult for hjelpemidler som standard
(`,e.jsx(r.code,{children:"aria-hidden={true}"}),")."]}),`
`,e.jsxs(r.li,{children:["Bærer grafikken faktisk mening et sted, sett ",e.jsx(r.code,{children:"aria-hidden={false}"}),` og gi
den en beskrivende `,e.jsx(r.code,{children:"aria-label"}),"."]}),`
`]})]})}function p(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default};
