import{j as e}from"./iframe-DMYzDG4n.js";import{useMDXComponents as i}from"./index-BIrVCv-H.js";import{M as d,P as t,C as o,a as s}from"./WithTooltip-SK46ZJ2J-BA0REh8c.js";import{C as c,W as k,a as h,I as a,D as j,R as x}from"./Checkbox.stories-m6xI0m_i.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BvY2d8aT.js";import"./checkbox-Cj-0ZVdk.js";import"./index-Ce1TuZo_.js";import"./index-BSFfVgKB.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-Brl1xZtY.js";import"./paragraph-BNBCp-Ys.js";import"./input-D9aPrp-7.js";import"./label-DVbxyGFe.js";import"./index-BDSGEydZ.js";function l(n){const r={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(r.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(r.h4,{id:"checkbox-brukes-for-å-la-brukere-velge-ett-eller-flere-uavhengige-alternativer-fra-en-liste-for-å-gruppere-relaterte-sjekkbokser-bruk-fieldset",children:[e.jsx(r.code,{children:"Checkbox"})," brukes for å la brukere velge ett eller flere uavhengige alternativer fra en liste. For å gruppere relaterte sjekkbokser, bruk ",e.jsx(r.code,{children:"Fieldset"}),"."]}),`
`,e.jsx(t,{}),`
`,e.jsx(o,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Checkbox, Fieldset } from '@rk-designsystem';

// Enkel sjekkboks
<Checkbox label="Jeg godtar vilkårene" value="terms" />

// Gruppe med sjekkbokser
<Fieldset>
  <Fieldset.Legend>Velg dine interesser</Fieldset.Legend>
  <Checkbox label="Sport" value="sport" />
  <Checkbox label="Musikk" value="music" />
  <Checkbox label="Teknologi" value="tech" />
</Fieldset>
`})}),`
`,e.jsxs(r.h4,{id:"en-checkbox-kan-stå-alene-for-eksempel-for-å-godta-vilkår-eller-grupperes-i-et-fieldset-usecheckboxgroup-se-example-group-er-en-hook-som-hjelper-med-å-håndtere-state-og-tilgjengelighet-for-en-gruppe",children:["En ",e.jsx(r.code,{children:"Checkbox"})," kan stå alene (for eksempel for å godta vilkår) eller grupperes i et ",e.jsx(r.code,{children:"Fieldset"}),". ",e.jsx(r.code,{children:"useCheckboxGroup"}),' (se "Example Group") er en hook som hjelper med å håndtere state og tilgjengelighet for en gruppe.']}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"med-beskrivelse",children:"Med beskrivelse"}),`
`,e.jsxs(r.h4,{id:"en-sjekkboks-kan-ha-en-tilhørende-description-for-å-gi-mer-kontekst-til-valget",children:["En sjekkboks kan ha en tilhørende ",e.jsx(r.code,{children:"description"})," for å gi mer kontekst til valget."]}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(r.h3,{id:"sjekkboksgruppe",children:"Sjekkboksgruppe"}),`
`,e.jsxs(r.h4,{id:"for-å-gruppere-relaterte-sjekkbokser-bruk-fieldset-med-fieldsetlegend-dette-er-kritisk-for-tilgjengelighet-denne-storyen-bruker-usecheckboxgroup-hooken",children:["For å gruppere relaterte sjekkbokser, bruk ",e.jsx(r.code,{children:"Fieldset"})," med ",e.jsx(r.code,{children:"Fieldset.Legend"}),". Dette er kritisk for tilgjengelighet. Denne storyen bruker ",e.jsx(r.code,{children:"useCheckboxGroup"}),"-hooken."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Tips:"})," Prøv ",e.jsx(r.code,{children:"error"}),"-kontrollen i panelet under for å se feilmeldingstilstanden for gruppen."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(r.h3,{id:"velg-alle-indeterminate",children:'"Velg alle" (Indeterminate)'}),`
`,e.jsxs(r.h4,{id:"en-checkbox-kan-ha-en-indeterminate-ubestemt-tilstand-dette-er-vanlig-i-velg-alle-sjekkbokser-som-styrer-en-liste-hvor-bare-noen-av-elementene-i-listen-er-valgt",children:["En ",e.jsx(r.code,{children:"Checkbox"})," kan ha en ",e.jsx(r.code,{children:"indeterminate"}),' (ubestemt) tilstand. Dette er vanlig i "Velg alle"-sjekkbokser som styrer en liste, hvor bare noen av elementene i listen er valgt.']}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(r.h3,{id:"deaktiverte-stater",children:"Deaktiverte stater"}),`
`,e.jsxs(r.h4,{id:"en-sjekkboks-kan-være-disabled-kan-ikke-interageres-med-eller-readonly-kan-ikke-endres-men-kan-leses-og-sendes-med-skjema",children:["En sjekkboks kan være ",e.jsx(r.code,{children:"disabled"})," (kan ikke interageres med) eller ",e.jsx(r.code,{children:"readOnly"})," (kan ikke endres, men kan leses og sendes med skjema)."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(r.h4,{id:"bruk-sjekkbokser-når-brukere-kan-velge-null-ett-eller-flere-alternativer",children:"Bruk sjekkbokser når brukere kan velge null, ett, eller flere alternativer."}),`
`,e.jsx(r.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Bruk ",e.jsx(r.code,{children:"Fieldset"})," og ",e.jsx(r.code,{children:"Legend"}),":"]})," Alltid grupper relaterte sjekkbokser i et ",e.jsx(r.code,{children:"<Fieldset>"})," med en ",e.jsx(r.code,{children:"<Fieldset.Legend>"}),". Dette knytter spørsmålet til svaralternativene."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Vær tydelig:"})," ",e.jsx(r.code,{children:"label"})," for hver sjekkboks skal være kort og tydelig."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Vertikal plassering:"})," Plasser sjekkbokser vertikalt under hverandre for enklest skanning og lesbarhet."]}),`
`]}),`
`,e.jsx(r.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke for enkeltvalg:"})," Hvis brukeren ",e.jsx(r.em,{children:"kun"})," kan velge ett alternativ, bruk ",e.jsx(r.code,{children:"Radio"}),"-knapper i stedet."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ikke for av/på:"})," Hvis valget er å slå en innstilling av eller på, bruk ",e.jsx(r.code,{children:"Switch"}),"-komponenten i stedet."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:["Ikke bruk ",e.jsx(r.code,{children:"disabled"}),":"]})," Unngå ",e.jsx(r.code,{children:"disabled"})," sjekkbokser hvis mulig. Det er bedre å ikke vise valget i det hele tatt, eller å forklare hvorfor det ikke er tilgjengelig."]}),`
`]}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:[e.jsx(r.code,{children:"Fieldset"})," og ",e.jsx(r.code,{children:"Legend"}),":"]})," For at en gruppe sjekkbokser skal være tilgjengelig, ",e.jsx(r.strong,{children:"må"})," den være omsluttet av ",e.jsx(r.code,{children:"<Fieldset>"}),", og ",e.jsx(r.code,{children:"<Fieldset.Legend>"})," må beskrive spørsmålet eller kategorien."]}),`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:[e.jsx(r.code,{children:"label"}),":"]})," Hver ",e.jsx(r.code,{children:"Checkbox"})," må ha en tilknyttet ",e.jsx(r.code,{children:"label"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Tastaturnavigasjon:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Bruk ",e.jsx("kbd",{children:"Tab"})," for å flytte fokus til en sjekkboks."]}),`
`,e.jsxs(r.li,{children:["Bruk ",e.jsx("kbd",{children:"Space"})," for å velge eller fjerne valget."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(r.h4,{id:"her-er-tilgjengelige-css-variabler-for-checkbox",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(r.code,{children:"Checkbox"}),"."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-size"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-background"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-border-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-border-radius"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-checkmark-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-label-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-description-color"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--checkbox-focus-ring-color"})}),`
`]})]})}function G(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(l,{...n})}):l(n)}export{G as default};
