import{j as e}from"./iframe-UjXQb656.js";import{useMDXComponents as i}from"./index-UEhuM2B-.js";import{M as o,P as t,C as a}from"./WithTooltip-SK46ZJ2J-BIT7CP0s.js";import{H as l}from"./Header.stories-CvFxtSuQ.js";import"./preload-helper-u0ftyAaf.js";import"./index-CLMvBuXk.js";import"./LanguageContext-CgxoyT8I.js";import"./index-C61nAGhV.js";import"./link-kxZQtvfF.js";import"./index-CAPOMrxw.js";import"./lite-DaUVFjkg.js";import"./index-DpIm2vOK.js";import"./button-CQyMHdjj.js";import"./spinner-DSy-IsVB.js";import"./use-merge-refs-Di9_5ljU.js";import"./index-DP7zCRfg.js";import"./index-BaGY-Alq.js";import"./paragraph-0BxmuZW2.js";import"./index-CezEc1Ju.js";import"./input-Ds_xkyRI.js";import"./index-CK5Id0af.js";import"./index-CRtz3Gvq.js";import"./label-BtE3Zz3C.js";import"./index-BRwo18i1.js";import"./index-CpInm1f3.js";import"./popover-trigger-Dzoj1C7R.js";import"./floating-ui.dom-BOb7AeKv.js";import"./heading-Qxes9COS.js";import"./XMark-C8q0uuUf.js";import"./useId-D9-XAI2P.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
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
