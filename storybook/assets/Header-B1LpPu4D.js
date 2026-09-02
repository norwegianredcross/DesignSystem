import{j as e}from"./iframe-t1xFw9Va.js";import{useMDXComponents as o}from"./index-C0RCdVwE.js";import{M as i,P as a,C as t}from"./blocks-BmRc2yzK.js";import{H as l}from"./Header.stories-CJWb61y0.js";import"./preload-helper-u0ftyAaf.js";import"./index-CAnL2RMp.js";import"./index-C0yb3BZs.js";import"./RedCrossLogo-54I0bwj1.js";import"./LanguageContext-CV5gL91E.js";import"./index-y1aTzgO6.js";import"./tooltip-BmKzlMBV.js";import"./index-C-AXyby4.js";import"./person2-Dq4XkTel.js";import"./index-BnIZLC_K.js";import"./index-DeEVm0qs.js";import"./index-DKpU16fK.js";import"./index-BMJ1BMdp.js";import"./XMark-BycwwPxc.js";import"./useId-CHkasb2L.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsx(n.h4,{id:"den-globale-toppteksten-for-applikasjonen-header-håndterer-navigasjon-brukersesjon-søk-og-menyer",children:"Den globale toppteksten for applikasjonen. Header håndterer navigasjon, brukersesjon, søk og menyer."}),`
`,e.jsx(a,{}),`
`,e.jsx(t,{}),`
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
        userName="Kari Nordmann"
        showSearch={true}
        searchItems={mySearchItems}
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
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fokus-styring:"})," På mobil, der menyen dekker hele skjermen, sykler Tab/Shift+Tab mellom menyknappen og menyens egne kontroller (fokusfelle). På desktop er menyen et panel under toppraden, og toppradens kontroller forblir tilgjengelige. Escape lukker og returnerer fokus til knappen som åpnet; lukkes menyen på annen måte, hentes fokus tilbake til menyknappen."]}),`
`]}),`
`,e.jsx(n.h2,{id:"bruker-innlogging-og-søk",children:"Bruker, innlogging og søk"}),`
`,e.jsxs(n.p,{children:["Alle tre er av som standard. ",e.jsx(n.code,{children:"showUser"})," viser brukerblokken bare når ",e.jsx(n.code,{children:"userName"})," er satt; ",e.jsx(n.code,{children:"showLogin"})," trenger ",e.jsx(n.code,{children:"loginHref"})," og/eller ",e.jsx(n.code,{children:"onLoginClick"}),"; ",e.jsx(n.code,{children:"showSearch"})," matcher forslag mot ",e.jsx(n.code,{children:"searchItems"})," (",e.jsx(n.code,{children:"{ id, title, path }"}),") og sender ",e.jsx(n.code,{children:"setPage('search/<søk>')"})," ved innsending. Headeren har ingen egen data."]})]})}function w(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{w as default};
