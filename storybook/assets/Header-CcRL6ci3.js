import{j as e}from"./iframe-BfQiCNJv.js";import{useMDXComponents as i}from"./index-nA-wEA8z.js";import{M as o,P as t,C as a}from"./WithTooltip-SK46ZJ2J-C5IVWGF_.js";import{H as l}from"./Header.stories-CjjwS_b5.js";import"./preload-helper-u0ftyAaf.js";import"./index-CDotbFv_.js";import"./LanguageContext-ChNrhTRp.js";import"./index-D1OWfyXK.js";import"./link-DX6kMly9.js";import"./index-B5drpwmP.js";import"./lite-DaUVFjkg.js";import"./index-DTDFoVjv.js";import"./button-yC5Z99Ou.js";import"./spinner-BSdpUzk_.js";import"./use-merge-refs-DzAbbEXj.js";import"./index-Bsdr7lBk.js";import"./index-CYsi8g9F.js";import"./paragraph-cS1fkdNe.js";import"./index-DkH2Bkfs.js";import"./input-Kb41YZJa.js";import"./index-CBtNPQLo.js";import"./index-DbVF7zUi.js";import"./label-4f-Bb1jh.js";import"./index-UJEFQqtG.js";import"./index-PKcu3d4G.js";import"./popover-trigger-SX9-Cmn5.js";import"./floating-ui.dom-BOb7AeKv.js";import"./heading-BCAQiqvx.js";import"./XMark-DF06ZPXP.js";import"./useId-8Jr8Psfi.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsx(n.h4,{id:"den-globale-toppteksten-for-applikasjonen-header-håndterer-navigasjon-brukersesjon-søk-og-menyer",children:"Den globale toppteksten for applikasjonen. Header håndterer navigasjon, brukersesjon, søk og menyer."}),`
`,e.jsx(t,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.p,{children:"Header-komponenten er ment å ligge øverst i applikasjonen og være vedvarende på tvers av sider. Den tilpasser seg automatisk mobil og desktop."}),`
`,e.jsx(n.h3,{id:"grunnleggende-oppsett",children:"Grunnleggende oppsett"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header } from 'rk-designsystem';

const MyApp = () => {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Header 
        activePage={page} 
        setPage={setPage} 
        showUser={true} 
        showSearch={true} 
        showLogin={false}
      >
        {/* Innholdet i den utvidbare menyen */}
        <nav>
          <a href="#" onClick={() => setPage('home')}>Hjem</a>
          <a href="#" onClick={() => setPage('about')}>Om oss</a>
        </nav>
      </Header>
      
      <main>
        {/* Sideinnhold */}
      </main>
    </div>
  );
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header 
  secondaryLogo={true}
  secondaryLogoSrc="https://..."
  secondaryLogoAlt="Partner Logo"
/>
`})}),`
`,e.jsx(n.h3,{id:"meny-innhold-slots",children:"Meny-innhold (Slots)"}),`
`,e.jsxs(n.p,{children:["Headeren har en ",e.jsx(n.code,{children:"children"}),"-prop som rendres inne i den utvidbare menyen (burgermenyen). Du står fritt til å legge inn navigasjonslenker, lister eller annen informasjon her."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header>
  <div style={{ padding: '2rem' }}>
    <h2>Min Meny</h2>
    <ul>
      <li>Lenke 1</li>
      <li>Lenke 2</li>
    </ul>
  </div>
</Header>
`})}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-a11y",children:"Tilgjengelighet (A11y)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA-labels:"})," Alle knapper har beskrivende ",e.jsx(n.code,{children:"aria-label"})," attributter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tastaturnavigasjon:"})," Menyer og søk kan åpnes og lukkes med tastatur."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fokus-styring:"}),' Fokus holdes innenfor menyen når den er åpen (krever ekstern implementasjon for full "focus trap", men komponentet støtter naturlig tab-rekkefølge).']}),`
`]})]})}function R(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{R as default};
