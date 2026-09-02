import{j as e}from"./iframe-CAry5O3X.js";import{useMDXComponents as o}from"./index-BJLcDVDp.js";import{M as i,P as t,C as l}from"./blocks-bewly8ed.js";import{F as d}from"./Footer.stories-DNoZCibd.js";import"./preload-helper-u0ftyAaf.js";import"./index-Bezu-X34.js";import"./index-DVmG-NEF.js";import"./index-g_KumDi0.js";import"./tooltip-8T-0JSHw.js";import"./XMark-Ddh0hKfx.js";import"./useId-AzXIgKfk.js";import"./index-DwMJlaxN.js";import"./index-BqpwxJ6F.js";import"./index-DrKQEfZq.js";import"./RedCrossLogo-DwAZjQp8.js";import"./LanguageContext-B2oFFd8q.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h1,{id:"footer",children:"Footer"}),`
`,e.jsxs(n.h4,{id:"global-bunntekst-i-tre-varianter-default-nyhetsbrev--lenker--kontakt-contact-sosiale-medier--kontaktpersoner-og-columns-navigasjonskolonner--organisasjonsinfo",children:["Global bunntekst i tre varianter: ",e.jsx(n.code,{children:"default"})," (nyhetsbrev + lenker + kontakt), ",e.jsx(n.code,{children:"contact"})," (sosiale medier + kontaktpersoner) og ",e.jsx(n.code,{children:"columns"})," (navigasjonskolonner + organisasjonsinfo)."]}),`
`,e.jsx(t,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Footer } from 'rk-designsystem';

const AppFooter = () => (
  <Footer
    variant="columns"
    data-color="primary-color-red"
    columns={[
      { title: 'Snarveier', links: [{ label: 'Design', href: '#design' }] },
      { title: 'Lenker', links: [{ label: 'GitHub', href: 'https://github.com/…' }] },
    ]}
    onNewsletterSubmit={(email) => subscribe(email)}
  />
);
`})}),`
`,e.jsx(n.h3,{id:"varianter",children:"Varianter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"default"})}),": nyhetsbrevpåmelding (med ",e.jsx(n.code,{children:"onNewsletterSubmit"}),`), lenkekolonner
(`,e.jsx(n.code,{children:"shortcutsLinks"}),"/",e.jsx(n.code,{children:"linksLinks"}),") og kontaktinfo (",e.jsx(n.code,{children:"visitingAddress"}),`,
`,e.jsx(n.code,{children:"organizationNumber"}),", ",e.jsx(n.code,{children:"email"}),`). Nyhetsbrevet kan skjules med
`,e.jsx(n.code,{children:"hideNewsletter"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"contact"})}),": sosiale medier (",e.jsx(n.code,{children:"socialLinks"}),` med ikon + tekst),
kontaktpersonkort (`,e.jsx(n.code,{children:"contactPersons"}),") og juridiske lenker (",e.jsx(n.code,{children:"legalLinks"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"columns"})}),": N navigasjonskolonner (",e.jsx(n.code,{children:"columns"}),`), organisasjonsinfo og
copyright-linje. Egnet som applikasjonsfooter.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"den-hvite-logoseksjonen",children:"Den hvite logoseksjonen"}),`
`,e.jsxs(n.p,{children:["Alle varianter avsluttes med en ",e.jsx(n.strong,{children:"hvit stripe med Røde Kors-logoen"}),` nederst.
Den er en del av merkevaresignaturen og skal alltid være med — den kan ikke
skrus av, men innholdet ved siden av logoen kan tilpasses med
`,e.jsx(n.code,{children:"whiteSectionSlot"}),", og logoen kan byttes med ",e.jsx(n.code,{children:"primaryLogoSrc"}),` (behold
`,e.jsx(n.code,{children:"primaryLogoAlt"}),")."]}),`
`,e.jsx(n.h3,{id:"tema-og-fargeskjema",children:"Tema og fargeskjema"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"data-color"}),` tar et reelt temaskop og styrer hovedseksjonens bakgrunn (skopets
tintede bakgrunnstoken):`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Footer data-color="neutral" />                 {/* standard */}
<Footer data-color="primary-color-red" />
<Footer data-color="additional-color-ocean" />
`})}),`
`,e.jsxs(n.p,{children:["De gamle verdiene ",e.jsx(n.code,{children:"'primary'"})," og ",e.jsx(n.code,{children:"'additional'"}),` er utfasede aliaser for
henholdsvis `,e.jsx(n.code,{children:"'primary-color-red'"})," og ",e.jsx(n.code,{children:"'additional-color-ocean'"}),` og fjernes i
en senere minor.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'colorScheme="dark"'}),` tvinger mørkt fargeskjema på footeren uavhengig av
resten av siden (den hvite logoseksjonen forblir lys — det er meningen).`]}),`
`,e.jsx(n.h2,{id:"gjør--ikke-gjør",children:"Gjør / ikke gjør"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gjør:"})," bruk ",e.jsx(n.code,{children:"columns"}),`-varianten som standard applikasjonsfooter og
gjenbruk navigasjonsstrukturen fra headeren.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gjør:"})," send inn faktiske organisasjonsdata (",e.jsx(n.code,{children:"organizationNumber"}),`,
`,e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"visitingAddress"}),") — standardverdiene er plassholdere."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke gjør:"}),` ikke bygg egen bunnseksjon under footeren — den hvite
logostripen skal være sidens siste element.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke gjør:"})," ikke legg lange lenkelister i ",e.jsx(n.code,{children:"default"}),`-varianten; bytt til
`,e.jsx(n.code,{children:"columns"})," når du har mer enn to grupper."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Footeren er et ",e.jsx(n.code,{children:"<footer>"}),`-landmark; lenkegrupper har overskrifter som gir
struktur for skjermlesere.`]}),`
`,e.jsxs(n.li,{children:[`Nyhetsbrevskjemaet har koblet ledetekst og sender kun ved gyldig e-post;
samtykketekst settes med `,e.jsx(n.code,{children:"newsletterConsentText"}),"."]}),`
`,e.jsx(n.li,{children:`Kontrast er testet i alle tre temaer (lys, mørk, sekundærskop) av
axe-gaten i testsuiten.`}),`
`]})]})}function L(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{L as default};
