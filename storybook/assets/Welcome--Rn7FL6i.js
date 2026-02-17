import{j as e}from"./iframe-hwVlxbHl.js";import{useMDXComponents as t}from"./index-CqHvKiuy.js";import{M as i}from"./WithTooltip-SK46ZJ2J-B2ONJ0tY.js";import"./preload-helper-u0ftyAaf.js";import"./index-Bdu38H9M.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Welcome"}),`
`,e.jsx(n.h1,{id:"røde-kors-design-system",children:"Røde Kors Design System"}),`
`,e.jsx(n.h4,{id:"gjenbrukbare-reactkomponenter-basert-på-digdirs-designsystemet-forhåndskonfigurert-med-røde-kors-sitt-tema-målet-er-enhetlig-uttrykk-høy-tilgjengelighet-og-effektiv-utvikling",children:"Gjenbrukbare React‑komponenter basert på Digdirs Designsystemet, forhåndskonfigurert med Røde Kors sitt tema. Målet er enhetlig uttrykk, høy tilgjengelighet og effektiv utvikling."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kom-i-gang",children:"Kom i gang"}),`
`,e.jsx(n.h3,{id:"1-installasjon",children:"1. Installasjon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install rk-designsystem
`})}),`
`,e.jsx(n.h3,{id:"2-sett-opp-layout-med-font-nextjs",children:"2. Sett opp layout med font (Next.js)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// src/app/layout.tsx
import '@digdir/designsystemet-css/index.css';
import 'rk-design-tokens/design-tokens-build/theme.css';
import { Source_Sans_3 } from 'next/font/google';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={sourceSans3.className}>{children}</body>
    </html>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Viktig:"})," Bruk ",e.jsx(n.code,{children:"className"}),", IKKE ",e.jsx(n.code,{children:"variable"}),". ",e.jsx(n.code,{children:"variable"})," oppretter bare en CSS-variabel uten å faktisk bruke fonten."]}),`
`,e.jsx(n.h3,{id:"3-bruk-komponenter",children:"3. Bruk komponenter"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Alert } from 'rk-designsystem';

export function Example() {
  return (
    <Alert variant="info">
      Dette er et varsel fra Røde Kors Design System.
    </Alert>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"prinsipper",children:"Prinsipper"}),`
`,e.jsx(n.h4,{id:"tilgjengelighet-gjenbruk-og-konsistens-komponentene-følger-semantisk-html-tastaturnavigasjon-og-design-tokens-fra-temaet",children:"Tilgjengelighet, gjenbruk og konsistens. Komponentene følger semantisk HTML, tastaturnavigasjon og design tokens fra temaet."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips",children:"Tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Inkluder alltid base‑CSS før tema‑fila."}),`
`,e.jsxs(n.li,{children:["Bruk ",e.jsx(n.code,{children:"data-size"})," og ",e.jsx(n.code,{children:"data-color"})," for visuelle varianter."]}),`
`,e.jsxs(n.li,{children:["Foretrekk kontrollerte mønstre når du trenger programmatisk styring (",e.jsx(n.code,{children:"value"}),"/",e.jsx(n.code,{children:"onChange"}),")."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ikoner-navaksel",children:"Ikoner (NAV/Aksel)"}),`
`,e.jsx(n.h3,{id:"installasjon",children:"Installasjon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @navikt/aksel-icons
`})}),`
`,e.jsx(n.h3,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { AirplaneIcon } from '@navikt/aksel-icons';
import { Button } from 'rk-designsystem';

<Button>
  <AirplaneIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
  Fly
</Button>
`})}),`
`,e.jsx(n.h4,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ikon + tekst: sett ",e.jsx(n.code,{children:"aria-hidden"})," på ikonet"]}),`
`,e.jsxs(n.li,{children:["Kun ikon: legg ",e.jsx(n.code,{children:"aria-label"})," på triggeren (knappen), og behold ikonet ",e.jsx(n.code,{children:"aria-hidden"})]}),`
`,e.jsxs(n.li,{children:["Størrelse: bruk ",e.jsx(n.code,{children:"fontSize"})," eller ",e.jsx(n.code,{children:"style={{ fontSize: '1.25rem' }}"})]}),`
`]})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
