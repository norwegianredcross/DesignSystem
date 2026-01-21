import{j as e}from"./iframe-C_1wQq6v.js";import{useMDXComponents as s}from"./index-CX9mov3n.js";import{M as t,P as o,C as l}from"./WithTooltip-SK46ZJ2J-CamqlUTv.js";import{C as a}from"./Carousel.stories-BNalrdVI.js";import"./preload-helper-u0ftyAaf.js";import"./index-C3sQ6fFN.js";import"./index-NlqqmV6q.js";import"./button-Erx_TICn.js";import"./index-DR3tD1cd.js";import"./lite-DaUVFjkg.js";import"./spinner-vbUNcU5D.js";import"./use-merge-refs-BxugeeBP.js";import"./index-DmxNS0gD.js";import"./LanguageContext-SA7SwO02.js";import"./ChevronRight-CEluqYPQ.js";import"./useId-C4amxCNp.js";function n(r){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
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
`]})]})}function S(r={}){const{wrapper:i}={...s(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{S as default};
