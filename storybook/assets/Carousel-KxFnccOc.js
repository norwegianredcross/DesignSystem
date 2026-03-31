import{j as e}from"./iframe-BOOWQYM0.js";import{useMDXComponents as s}from"./index-BSCMBXf6.js";import{M as t,P as o,C as l}from"./blocks-65Yfxw3N.js";import{C as a}from"./Carousel.stories-BPlMpRk0.js";import"./preload-helper-u0ftyAaf.js";import"./index-z9dL5CPh.js";import"./index-CAh4ME0N.js";import"./index-CJSAq8BN.js";import"./tooltip-jKJDwqdV.js";import"./index-BdJ93vuM.js";import"./LanguageContext-CpNJtRiL.js";import"./ChevronRight-G90JyVtd.js";import"./useId-C1OEWwhe.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(i.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsxs(i.h4,{id:"et-fleksibelt-bildegalleri-du-sender-inn-bildene-via-imagespropen-piler-og-prikker-er-innebygd-layout-og-farger-følger-design-tokens",children:["Et fleksibelt bildegalleri. Du sender inn bildene via ",e.jsx(i.code,{children:"images"}),"‑propen. Piler og prikker er innebygd. Layout og farger følger design tokens."]}),`
`,e.jsx(o,{}),`
`,e.jsx(l,{}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Carousel } from 'rk-designsystem';

const images = [
  { src: 'https://.../image-1.jpg', alt: 'Beskrivende alt-tekst 1' },
  { src: 'https://.../image-2.jpg', alt: 'Beskrivende alt-tekst 2' },
  { src: 'https://.../image-3.jpg', alt: 'Beskrivende alt-tekst 3' },
];

// Minimal
<div style={{ width: 900, height: 520 }}>
  <Carousel images={images} />
</div>

// Autoplay
<div style={{ width: 900, height: 520 }}>
  <Carousel images={images} autoPlay autoDelay={4} />
</div>
`})}),`
`,e.jsx(i.h4,{id:"tips",children:"Tips"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Sett eksplisitt bredde/høyde på containeren for å styre aspekt og layout."}),`
`,e.jsxs(i.li,{children:["For piltaster brukes ",e.jsx(i.code,{children:"Button icon"}),"-stil og NAV-ikoner i tråd med øvrige komponenter."]}),`
`,e.jsx(i.li,{children:"Tokens for farger, mellomrom og radii brukes i CSS‑modulen."}),`
`,e.jsxs(i.li,{children:["Vil du lese bilder fra Supabase? Se historien “WithSupabase” – den henter bilder og sender dem inn via ",e.jsx(i.code,{children:"images"}),"."]}),`
`]})]})}function C(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{C as default};
