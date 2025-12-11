import{j as e}from"./iframe-aXUmzy60.js";import{useMDXComponents as i}from"./index-DXoWCW-X.js";import{M as l,P as o,C as a,a as d}from"./WithTooltip-SK46ZJ2J-Ky19TZjL.js";import{D as c,a as s,C as h,b as j,c as x}from"./DatePicker.stories-0aPrS77O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGrIEJBK.js";import"./button-BKcakLtY.js";import"./index-D9xmsD-Z.js";import"./lite-DaUVFjkg.js";import"./spinner-yt6rj0sH.js";import"./use-merge-refs-BMylqfJX.js";import"./index-u4mKz2yf.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"datepicker-calendar",children:"DatePicker (Calendar)"}),`
`,e.jsxs(n.h4,{id:"datepicker-er-den-visuelle-kalenderkomponenten-som-lar-en-bruker-velge-en-dato-den-er-designet-for-å-brukes-alene-eller-i-kombinasjon-med-dateinput",children:[e.jsx(n.code,{children:"DatePicker"})," er den visuelle kalenderkomponenten som lar en bruker velge en dato. Den er designet for å brukes alene eller i kombinasjon med ",e.jsx(n.code,{children:"DateInput"}),"."]}),`
`,e.jsx(o,{}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DatePicker } from '@rk-designsystem';
import { useState } from 'react';

// For å bruke kalenderen, må du håndtere state selv.
const MyCalendar = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selectedDate={selected}
      onDateSelect={setSelected}
      initialDate={new Date()}
    />
  );
}
`})}),`
`,e.jsxs(n.h4,{id:"komponenten-er-en-kontrollert-kalendervisning-du-må-tilby-en-selecteddate-den-valgte-datoen-og-en-ondateselect-funksjon-for-å-fange-opp-når-brukeren-velger-en-ny-dato",children:["Komponenten er en kontrollert kalendervisning. Du må tilby en ",e.jsx(n.code,{children:"selectedDate"})," (den valgte datoen) og en ",e.jsx(n.code,{children:"onDateSelect"}),"-funksjon for å fange opp når brukeren velger en ny dato."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"standardkalender",children:"Standardkalender"}),`
`,e.jsxs(n.h4,{id:"en-interaktiv-kalender-initialdate-bestemmer-hvilken-måned-som-vises-først-og-selecteddate-bestemmer-hvilken-dag-som-er-markert",children:["En interaktiv kalender. ",e.jsx(n.code,{children:"initialDate"})," bestemmer hvilken måned som vises først, og ",e.jsx(n.code,{children:"selectedDate"})," bestemmer hvilken dag som er markert."]}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h3,{id:"med-en-valgt-dato",children:"Med en valgt dato"}),`
`,e.jsxs(n.h4,{id:"her-er-kalenderen-rendret-med-en-selecteddate-prop-som-er-forhåndsinnstilt",children:["Her er kalenderen rendret med en ",e.jsx(n.code,{children:"selectedDate"}),"-prop som er forhåndsinnstilt."]}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h3,{id:"farge-og-størrelse",children:"Farge og størrelse"}),`
`,e.jsxs(n.h4,{id:"siden-komponenten-nå-aksepterer-data-color-og-data-size-kan-den-styles-for-å-passe-inn-i-ulike-layouter",children:["Siden komponenten nå aksepterer ",e.jsx(n.code,{children:"data-color"})," og ",e.jsx(n.code,{children:"data-size"}),", kan den styles for å passe inn i ulike layouter."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"mønstre",children:"Mønstre"}),`
`,e.jsxs(n.h3,{id:"kombinert-med-dateinput",children:["Kombinert med ",e.jsx(n.code,{children:"DateInput"})]}),`
`,e.jsxs(n.h4,{id:"dette-er-det-vanligste-bruksmønsteret-datepicker-vises-under-eller-ved-siden-av-en-dateinput-og-de-to-komponentene-synkroniserer-sin-state",children:["Dette er det vanligste bruksmønsteret. ",e.jsx(n.code,{children:"DatePicker"})," vises under eller ved siden av en ",e.jsx(n.code,{children:"DateInput"}),", og de to komponentene synkroniserer sin state."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.h4,{id:"bruk-datepicker-når-brukere-trenger-en-visuell-måte-å-velge-en-dato-på-i-stedet-for-å-skrive-den-manuelt",children:["Bruk ",e.jsx(n.code,{children:"DatePicker"})," når brukere trenger en visuell måte å velge en dato på, i stedet for å skrive den manuelt."]}),`
`,e.jsx(n.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Synkroniser state:"})," Sørg for at ",e.jsx(n.code,{children:"DateInput"}),"-verdien og ",e.jsx(n.code,{children:"DatePicker"}),"-valget er synkronisert."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Bruk ",e.jsx(n.code,{children:"initialDate"}),":"]})," Sett ",e.jsx(n.code,{children:"initialDate"})," til den valgte datoen (hvis den finnes) slik at kalenderen åpnes på riktig måned."]}),`
`]}),`
`,e.jsx(n.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for tid:"})," Denne komponenten er kun for å velge dato (dag, måned, år)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Ikke uten ",e.jsx(n.code,{children:"onDateSelect"}),":"]})," Komponenten er ubrukelig med mindre du lytter til ",e.jsx(n.code,{children:"onDateSelect"}),"-hendelsen for å lagre brukerens valg."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Knapp-roller:"})," Hver dato i kalenderen er en ",e.jsx(n.code,{children:"<div>"})," med ",e.jsx(n.code,{children:'role="button"'})," og ",e.jsx(n.code,{children:"tabIndex={0}"})," for å være tastatur-navigerbar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Aria-attributter:"})," ",e.jsx(n.code,{children:"aria-pressed"})," brukes for den valgte datoen, og ",e.jsx(n.code,{children:"aria-label"}),' gir en fullstendig, lesbar dato (f.eks. "5. november 2025").']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigasjon:"})," Månedsvelgerne er knapper med ",e.jsx(n.code,{children:"aria-label"}),' (f.eks. "Forrige måned").']}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variabler-fra-stylesmodulecss",children:"CSS-variabler (fra styles.module.css)"}),`
`,e.jsx(n.h4,{id:"denne-komponenten-er-stylet-med-css-moduler-og-henter-verdier-fra-design-tokenene",children:"Denne komponenten er stylet med CSS-moduler og henter verdier fra design-tokenene."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--ds-size-1"}),", ",e.jsx(n.code,{children:"--ds-size-2"}),", ",e.jsx(n.code,{children:"--ds-size-3"}),", ",e.jsx(n.code,{children:"--ds-size-5"}),", ",e.jsx(n.code,{children:"--ds-size-8"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-neutral-border-subtle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-border-radius-md"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-neutral-background-default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-font-family"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-neutral-text-default"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--ds-heading-sm-font-size"}),", ",e.jsx(n.code,{children:"--ds-heading-sm-font-weight"}),", etc."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-opacity-disabled"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--ds-body-xs-font-size"}),", ",e.jsx(n.code,{children:"--ds-body-xs-font-weight"}),", etc."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-neutral-text-subtle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-neutral-surface-tinted"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-neutral-surface-hover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-primary-brand-base-active"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--ds-color-primary-brand-base-contrast-default"})}),`
`]})]})}function z(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{z as default};
