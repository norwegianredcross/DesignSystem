import{j as e}from"./iframe-CQzEePbx.js";import{useMDXComponents as d}from"./index-BibrtqmF.js";import{M as l,P as t,C as a,a as s}from"./WithTooltip-SK46ZJ2J-CMLdc3oz.js";import{B as o,O as c,a as m,b as k,L as h}from"./Breadcrumbs.stories-DfIIxOht.js";import"./preload-helper-B7SxNM_P.js";import"./index-Cv-uNccM.js";import"./lite-DaUVFjkg.js";import"./link-CmBWPaiV.js";import"./index-BcJIqTYo.js";import"./use-merge-refs-DclI3-N7.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(r.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsxs(r.h4,{id:"breadcrumbs-er-en-navigasjonskomponent-som-viser-brukerens-posisjon-i-et-nettstedshierarki-den-hjelper-brukeren-å-forstå-hvor-de-er-og-å-navigere-tilbake-til-foreldresider",children:[e.jsx(r.code,{children:"Breadcrumbs"})," er en navigasjonskomponent som viser brukerens posisjon i et nettstedshierarki. Den hjelper brukeren å forstå hvor de er og å navigere tilbake til foreldresider."]}),`
`,e.jsx(t,{}),`
`,e.jsx(a,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
} from '@rk-designsystem';

// Kun sti
<Breadcrumbs aria-label="Du er her:">
  <BreadcrumbsList>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="#">Nivå 3</BreadcrumbsLink>
    </BreadcrumbsItem>
  </BreadcrumbsList>
</Breadcrumbs>

// Kun tilbake-knapp
<Breadcrumbs>
  <BreadcrumbsLink aria-label="Tilbake til nivå 2" href="/niva-2">
    Nivå 2
  </BreadcrumbsLink>
</Breadcrumbs>

// Responsiv (begge deler)
<Breadcrumbs aria-label="Du er her:">
  <BreadcrumbsLink aria-label="Tilbake til nivå 2" href="/niva-2">
    Nivå 2
  </BreadcrumbsLink>
  <BreadcrumbsList>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="#">Nivå 3</BreadcrumbsLink>
    </BreadcrumbsItem>
  </BreadcrumbsList>
</Breadcrumbs>
`})}),`
`,e.jsxs(r.h4,{id:"komponenten-består-av-en-breadcrumbs-container-som-kan-holde-en-breadcrumbslist-for-en-full-sti-eller-en-enkel-breadcrumbslink-for-en-tilbake-knapp-den-kan-også-håndtere-begge-deler-for-responsiv-oppførsel-hvor-tilbake-knappen-vises-på-mobil-og-den-fulle-stien-på-større-skjermer",children:["Komponenten består av en ",e.jsx(r.code,{children:"Breadcrumbs"}),"-container som kan holde en ",e.jsx(r.code,{children:"BreadcrumbsList"})," (for en full sti) eller en enkel ",e.jsx(r.code,{children:"BreadcrumbsLink"}),' (for en "tilbake"-knapp). Den kan også håndtere begge deler for responsiv oppførsel, hvor "tilbake"-knappen vises på mobil og den fulle stien på større skjermer.']}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"kun-sti",children:"Kun sti"}),`
`,e.jsx(r.h4,{id:"viser-en-fullstendig-hierarkisk-sti-dette-er-standardmønsteret-for-desktop",children:"Viser en fullstendig hierarkisk sti. Dette er standardmønsteret for desktop."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(r.h3,{id:"kun-tilbake-knapp",children:"Kun tilbake-knapp"}),`
`,e.jsx(r.h4,{id:"viser-en-enkel-tilbake-lenke-dette-mønsteret-kan-brukes-alene-i-enkle-flyter-eller-som-mobil-fallback",children:'Viser en enkel "tilbake"-lenke. Dette mønsteret kan brukes alene i enkle flyter eller som mobil-fallback.'}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(r.h3,{id:"sti-og-tilbake-knapp-responsiv",children:"Sti og tilbake-knapp (Responsiv)"}),`
`,e.jsxs(r.h4,{id:"denne-varianten-kombinerer-de-to-breadcrumbs-komponenten-vil-typisk-håndtere-logikken-for-å-vise-tilbake-knappen-på-smale-skjermer-og-stien-på-brede-skjermer",children:["Denne varianten kombinerer de to. ",e.jsx(r.code,{children:"Breadcrumbs"}),'-komponenten vil typisk håndtere logikken for å vise "tilbake"-knappen på smale skjermer og stien på brede skjermer.']}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"størrelser-og-farger",children:"Størrelser og Farger"}),`
`,e.jsxs(r.h4,{id:"komponenten-støtter-data-size-og-data-color-props-for-å-justere-utseendet-og-tilpasse-den-til-omgivende-innhold",children:["Komponenten støtter ",e.jsx(r.code,{children:"data-size"})," og ",e.jsx(r.code,{children:"data-color"})," props for å justere utseendet og tilpasse den til omgivende innhold."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.h4,{id:"breadcrumbs-bør-brukes-når-det-er-tre-eller-flere-nivåer-i-et-hierarki-for-å-hjelpe-brukeren-med-å-orientere-seg",children:[e.jsx(r.code,{children:"Breadcrumbs"})," bør brukes når det er tre eller flere nivåer i et hierarki for å hjelpe brukeren med å orientere seg."]}),`
`,e.jsx(r.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Plassering:"})," Plasser komponenten øverst på siden, under hovednavigasjonen, men over sidetittelen."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Korte titler:"})," Bruk korte og tydelige titler som samsvarer med sidenavnene eller meny-titlene."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gjeldende side:"})," Sørg for at den siste lenken representerer den nåværende siden. Denne er vanligvis ikke klikkbar."]}),`
`]}),`
`,e.jsx(r.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke for lineære flyter:"})," Ikke bruk ",e.jsx(r.code,{children:"Breadcrumbs"}),' for lineær navigasjon (f.eks. en "stepper" i et flertrinnsskjema).']}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke på toppnivå:"})," Ikke bruk den på sider som er på toppnivå (f.eks. forsiden)."]}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["En ",e.jsx(r.code,{children:"Breadcrumbs"}),"-komponent er wrappet i et ",e.jsx(r.code,{children:"<nav>"}),"-element og må ha et ",e.jsx(r.code,{children:"aria-label"}),' (f.eks. "Du er her") for å identifisere den som en navigasjons-region for skjermlesere.']}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gjeldende side:"})," Det siste elementet i stien representerer den nåværende siden. Hvis det er en lenke (som i våre eksempler), er det god praksis å legge til ",e.jsx(r.code,{children:'aria-current="page"'})," for å tydelig indikere dette for hjelpeteknologi."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Tastaturnavigasjon:"})," Alle klikkbare lenker i stien må være fullt navigerbare og klikkbare med tastatur."]}),`
`]}),`
`,e.jsx(r.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(r.h4,{id:"her-er-tilgjengelige-css-variabler-for-breadcrumbs",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(r.code,{children:"Breadcrumbs"}),"."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--breadcrumbs-spacing"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--breadcrumbs-separator-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--breadcrumbs-link-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--breadcrumbs-link-text-decoration"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--breadcrumbs-link-color-hover"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--breadcrumbs-current-page-color"})}),`
`]})]})}function I(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{I as default};
