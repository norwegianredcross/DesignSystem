import{j as e}from"./iframe-BaeVrwQ8.js";import{u as i,M as o,P as l,C as t}from"./blocks-BN0jihbp.js";import{H as a}from"./Header.stories-Ce8jEAdd.js";import"./preload-helper-u0ftyAaf.js";import"./index-VkFzWqys.js";import"./index-DGzdSmDF.js";import"./RedCrossLogo-DjDkLxE_.js";import"./LanguageContext-osJKMB2F.js";import"./index-C1CS3PsW.js";import"./tooltip-Bj8f17Iw.js";import"./XMark-BrNperLP.js";import"./useId-DWYpK5AU.js";import"./index-CbwkOorc.js";import"./person2-NXcQBUTP.js";import"./index-xeK1kS5n.js";import"./index-QE7CfJbF.js";import"./index-LxFcayoC.js";import"./index-DbvCtqbg.js";import"./MenuHamburger-CEZlT_GV.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsx(n.h4,{id:"den-globale-toppteksten-for-applikasjonen-header-håndterer-navigasjon-brukersesjon-søk-og-menyer",children:"Den globale toppteksten for applikasjonen. Header håndterer navigasjon, brukersesjon, søk og menyer."}),`
`,e.jsx(l,{}),`
`,e.jsx(t,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.p,{children:"Header-komponenten er ment å ligge øverst i applikasjonen og være vedvarende på tvers av sider. Den tilpasser seg automatisk mobil og desktop."}),`
`,e.jsx(n.h3,{id:"grunnleggende-oppsett",children:"Grunnleggende oppsett"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header } from 'rk-designsystem';

const MyApp = () => (
  <Header
    navItems={[
      { label: 'Hjem', href: '/' },
      { label: 'Om oss', href: '/om-oss' },
    ]}
  >
    <nav aria-label="Flere sider">
      <a href="/kontakt">Kontakt oss</a>
    </nav>
  </Header>
);
`})}),`
`,e.jsx(n.h3,{id:"varianter",children:"Varianter"}),`
`,e.jsx(n.h4,{id:"gjest-ikke-innlogget",children:"Gjest (Ikke innlogget)"}),`
`,e.jsx(n.p,{children:'Viser "Logg inn" i stedet for brukerprofil.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Header showUser={false} showLogin={true} loginHref="/logg-inn" />
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
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fokus-styring:"})," Menyen er en native, ikke-modal popover. Nettleseren håndterer åpning, Escape og lukking ved klikk utenfor. Menyen har også en egen lukkeknapp. Tab følger vanlig rekkefølge uten en egendefinert fokusfelle."]}),`
`]}),`
`,e.jsx(n.h2,{id:"bruker-innlogging-og-søk",children:"Bruker, innlogging og søk"}),`
`,e.jsxs(n.p,{children:["Alle tre er av som standard. ",e.jsx(n.code,{children:"showUser"})," viser brukerblokken bare når ",e.jsx(n.code,{children:"userName"})," er satt; ",e.jsx(n.code,{children:"showLogin"})," trenger ",e.jsx(n.code,{children:"loginHref"})," og/eller ",e.jsx(n.code,{children:"onLoginClick"}),"; ",e.jsx(n.code,{children:"showSearch"})," matcher forslag mot ",e.jsx(n.code,{children:"searchItems"})," (",e.jsx(n.code,{children:"{ id, title, path }"}),") og sender ",e.jsx(n.code,{children:"setPage('search/<søk>')"})," ved innsending. Headeren har ingen egen data."]}),`
`,e.jsx(n.h2,{id:"baseline-uten-javascript",children:"Baseline uten JavaScript"}),`
`,e.jsxs(n.p,{children:["Importer ",e.jsx(n.code,{children:"rk-designsystem/styles"}),` for utseendet. Header injiserer ikke CSS ved kjøring.
Navigasjonslenker og menyinnhold rendres på serveren. Menyen bruker Popover API,
og CSS styrer mobil- og desktopvisning. Nettlesere uten Popover API viser menyinnholdet
som vanlig innhold. Uten CSS kan lenkene fortsatt brukes.`]}),`
`,e.jsxs(n.p,{children:["Bruk ekte URL-er i ",e.jsx(n.code,{children:"navItems"})," og i menyinnholdet. ",e.jsx(n.code,{children:"setPage"}),` er en valgfri forbedring.
Søk, språkvalg, temabytte og handlinger som bare har callbacks aktiveres etter
hydrering. Hvis søk er nødvendig uten JavaScript, legg inn en lenke til en søkeside.
Send `,e.jsx(n.code,{children:"colorScheme"}),` fra serveren når riktig tema må gjelde fra første visning.
Header er fortsatt en Client Component i pakken og kan importeres fra en Server
Component med serialiserbare props.`]}),`
`,e.jsxs(n.p,{children:[`Sider og layouts i Next.js kan fortsatt være Server Components: importer Header
med vanlige, serialiserbare props som `,e.jsx(n.code,{children:"navItems"})," og ",e.jsx(n.code,{children:"colorScheme"}),`. Pakken setter
klientgrensen for Header. Callback-props som `,e.jsx(n.code,{children:"setPage"})," og ",e.jsx(n.code,{children:"onCtaClick"}),` må defineres
i en liten Client Component som bruker Header; de krever ikke at hele siden
merkes `,e.jsx(n.code,{children:"use client"}),"."]})]})}function P(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{P as default};
