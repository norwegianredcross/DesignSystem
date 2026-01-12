import{j as e}from"./iframe-yuJj-q-m.js";import{useMDXComponents as s}from"./index-BENPqNmu.js";import{M as t,P as o,C as l}from"./WithTooltip-SK46ZJ2J-2bbRu1qe.js";import{C as a}from"./Carousel.stories-CLoL39DU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-kBCu6VdG.js";import"./index-_ZYWTlG2.js";import"./button-B5DFRZ-D.js";import"./index-DyDqdOhL.js";import"./lite-DaUVFjkg.js";import"./spinner-Dag5YAuz.js";import"./use-merge-refs-BIg4rOM6.js";import"./index-Bnq14uoL.js";import"./ChevronRight-uxAsJitd.js";import"./useId-DtnyQUxK.js";function n(r){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
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
`]})]})}function M(r={}){const{wrapper:i}={...s(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{M as default};
