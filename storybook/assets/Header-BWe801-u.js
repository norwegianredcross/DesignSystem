import{j as e}from"./iframe-DH--KwFU.js";import{useMDXComponents as i}from"./index-Czi0VaFo.js";import{M as o,P as t,C as a}from"./WithTooltip-SK46ZJ2J-BpojxnS4.js";import{H as l}from"./Header.stories-BdFS9tTS.js";import"./preload-helper-B7SxNM_P.js";import"./index-BF8_i3JQ.js";import"./index-BfDT2IuS.js";import"./link-BqURI_ml.js";import"./index-btNrtOm9.js";import"./lite-DaUVFjkg.js";import"./index-DoEoL5jd.js";import"./button-C3zV2Mkq.js";import"./spinner-CTsUTjgn.js";import"./use-merge-refs-DwYw0Sqe.js";import"./index-CjVlzKLZ.js";import"./index-D-jzLRdc.js";import"./paragraph-DGFrPJCW.js";import"./index-CGhwgV_G.js";import"./input-BW1xetph.js";import"./index-9Yyjbxml.js";import"./index-BymwWgzS.js";import"./label-DJ3cOfhb.js";import"./index-C9sMphIB.js";import"./index-BFsuD_2J.js";import"./popover-trigger-DEOLllzJ.js";import"./floating-ui.dom-BOb7AeKv.js";import"./heading-5BhhQ2zn.js";import"./XMark-CBB8T1H8.js";import"./useId-Cp4ARpOD.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsx(n.h4,{id:"den-globale-toppteksten-for-applikasjonen-header-håndterer-navigasjon-brukersesjon-søk-og-menyer",children:"Den globale toppteksten for applikasjonen. Header håndterer navigasjon, brukersesjon, søk og menyer."}),`
`,e.jsx(t,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.p,{children:"Header-komponenten er ment å ligge øverst i applikasjonen og være vedvarende på tvers av sider. Den tilpasser seg automatisk mobil og desktop."}),`
`,e.jsx(n.h3,{id:"grunnleggende-oppsett",children:"Grunnleggende oppsett"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header } from 'rk-designsystem';\r
\r
const MyApp = () => {\r
  const [page, setPage] = useState('home');\r
\r
  return (\r
    <div>\r
      <Header \r
        activePage={page} \r
        setPage={setPage} \r
        showUser={true} \r
        showSearch={true} \r
        showLogin={false}\r
      >\r
        {/* Innholdet i den utvidbare menyen */}\r
        <nav>\r
          <a href="#" onClick={() => setPage('home')}>Hjem</a>\r
          <a href="#" onClick={() => setPage('about')}>Om oss</a>\r
        </nav>\r
      </Header>\r
      \r
      <main>\r
        {/* Sideinnhold */}\r
      </main>\r
    </div>\r
  );\r
};
`})}),`
`,e.jsx(n.h3,{id:"varianter",children:"Varianter"}),`
`,e.jsx(n.h4,{id:"gjest-ikke-innlogget",children:"Gjest (Ikke innlogget)"}),`
`,e.jsx(n.p,{children:'Viser "Logg inn" i stedet for brukerprofil.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header showUser={false} showLogin={true} />
`})}),`
`,e.jsx(n.h4,{id:"uten-søk",children:"Uten søk"}),`
`,e.jsx(n.p,{children:"Skjuler søkeknappen hvis applikasjonen ikke har globalt søk."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header showSearch={false} />
`})}),`
`,e.jsx(n.h4,{id:"sekundær-logo",children:"Sekundær logo"}),`
`,e.jsx(n.p,{children:"Viser en ekstra logo ved siden av hovedlogoen (f.eks. for samarbeidspartnere eller underavdelinger)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header \r
  secondaryLogo={true}\r
  secondaryLogoSrc="https://..."\r
  secondaryLogoAlt="Partner Logo"\r
/>
`})}),`
`,e.jsx(n.h3,{id:"meny-innhold-slots",children:"Meny-innhold (Slots)"}),`
`,e.jsxs(n.p,{children:["Headeren har en ",e.jsx(n.code,{children:"children"}),"-prop som rendres inne i den utvidbare menyen (burgermenyen). Du står fritt til å legge inn navigasjonslenker, lister eller annen informasjon her."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header>\r
  <div style={{ padding: '2rem' }}>\r
    <h2>Min Meny</h2>\r
    <ul>\r
      <li>Lenke 1</li>\r
      <li>Lenke 2</li>\r
    </ul>\r
  </div>\r
</Header>
`})}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-a11y",children:"Tilgjengelighet (A11y)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA-labels:"})," Alle knapper har beskrivende ",e.jsx(n.code,{children:"aria-label"})," attributter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tastaturnavigasjon:"})," Menyer og søk kan åpnes og lukkes med tastatur."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fokus-styring:"}),' Fokus holdes innenfor menyen når den er åpen (krever ekstern implementasjon for full "focus trap", men komponentet støtter naturlig tab-rekkefølge).']}),`
`]})]})}function G(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{G as default};
