import{j as e}from"./iframe-B6DWdKdG.js";import{useMDXComponents as s}from"./index-hRgdMkoN.js";import{M as o,P as d,C as h,a as i}from"./WithTooltip-SK46ZJ2J-Cu3EieA6.js";import{C as t,R as c,a,b as k,B as j}from"./Chip.stories-CEM-pXFb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C9Ba5pFl.js";import"./index-D0NIp4CM.js";import"./index-Di8-QnK0.js";import"./lite-DaUVFjkg.js";import"./input-CnoAfBcd.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(n.h1,{id:"chip",children:"Chip"}),`
`,e.jsxs(n.h4,{id:"chip-er-en-liten-interaktiv-komponent-som-brukes-for-valg-filtrering-eller-fjerning-av-elementer-den-kommer-i-flere-varianter-for-ulike-handlinger",children:[e.jsx(n.code,{children:"Chip"})," er en liten, interaktiv komponent som brukes for valg, filtrering eller fjerning av elementer. Den kommer i flere varianter for ulike handlinger."]}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
import { Chip } from '@rk-designsystem';

// Som radiovalg (enkeltvalg)
<Chip.Radio name="my-radio" value="1" defaultChecked>
  Valg 1
</Chip.Radio>
<Chip.Radio name="my-radio" value="2">
  Valg 2
</Chip.Radio>

// Som avkrysningsboks (flervalg)
<Chip.Checkbox name="my-checkbox" value="a" defaultChecked>
  Filter A
</Chip.Checkbox>
<Chip.Checkbox name="my-checkbox" value="b">
  Filter B
</Chip.Checkbox>

// Som fjernbar
<Chip.Removable aria-label="Fjern Nynorsk" onClick={() => {}}>
  Nynorsk
</Chip.Removable>

// Som knapp
<Chip.Button onClick={() => {}}>
  Tøm filtre
</Chip.Button>

`})}),`
`,e.jsxs(n.h4,{id:"komponenten-er-bygget-som-et-sammensatt-compound-komponent-du-importerer-chip-og-bruker-den-varianten-du-trenger-chipradio-chipcheckbox-chipremovable-eller-chipbutton",children:["Komponenten er bygget som et sammensatt (compound) komponent. Du importerer ",e.jsx(n.code,{children:"Chip"})," og bruker den varianten du trenger: ",e.jsx(n.code,{children:"Chip.Radio"}),", ",e.jsx(n.code,{children:"Chip.Checkbox"}),", ",e.jsx(n.code,{children:"Chip.Removable"}),", eller ",e.jsx(n.code,{children:"Chip.Button"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"radiovalg",children:"Radiovalg"}),`
`,e.jsxs(n.h4,{id:"chipradio-fungerer-som-en-radio-knapp-bruk-denne-når-brukeren-kun-skal-kunne-velge-ett-alternativ-fra-en-gruppe-alle-i-gruppen-må-dele-samme-name",children:[e.jsx(n.code,{children:"Chip.Radio"})," fungerer som en ",e.jsx(n.code,{children:"Radio"}),"-knapp. Bruk denne når brukeren kun skal kunne velge ett alternativ fra en gruppe. Alle i gruppen må dele samme ",e.jsx(n.code,{children:"name"}),"."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"avkrysningsboks",children:"Avkrysningsboks"}),`
`,e.jsxs(n.h4,{id:"chipcheckbox-fungerer-som-en-checkbox-bruk-denne-når-brukeren-skal-kunne-velge-null-ett-eller-flere-alternativer",children:[e.jsx(n.code,{children:"Chip.Checkbox"})," fungerer som en ",e.jsx(n.code,{children:"Checkbox"}),". Bruk denne når brukeren skal kunne velge null, ett eller flere alternativer."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"fjernbar-removable",children:"Fjernbar (Removable)"}),`
`,e.jsxs(n.h4,{id:"chipremovable-brukes-for-å-vise-et-aktivt-filter-eller-valg-som-brukeren-kan-fjerne-den-har-en-innebygd-lukkeknapp",children:[e.jsx(n.code,{children:"Chip.Removable"})," brukes for å vise et aktivt filter eller valg som brukeren kan fjerne. Den har en innebygd lukkeknapp."]}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(n.h3,{id:"knapp",children:"Knapp"}),`
`,e.jsxs(n.h4,{id:"chipbutton-fungerer-som-en-standard-knapp-men-med-chip-utseendet-bruk-denne-for-handlinger-som-å-utløse-et-søk-eller-tømme-filtre",children:[e.jsx(n.code,{children:"Chip.Button"})," fungerer som en standard knapp, men med ",e.jsx(n.code,{children:"Chip"}),"-utseendet. Bruk denne for handlinger, som å utløse et søk eller tømme filtre."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.h4,{id:"bruk-chip-for-å-la-brukere-filtrere-innhold-eller-gjøre-valg-på-en-kompakt-måte",children:["Bruk ",e.jsx(n.code,{children:"Chip"})," for å la brukere filtrere innhold eller gjøre valg på en kompakt måte."]}),`
`,e.jsx(n.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Filtrering:"})," Bruk for å filtrere lister eller tabeller (f.eks. ",e.jsx(n.code,{children:"Chip.Checkbox"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enkeltvalg:"})," Bruk for å bytte mellom visninger (f.eks. ",e.jsx(n.code,{children:"Chip.Radio"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Aktive filtre:"})," Bruk ",e.jsx(n.code,{children:"Chip.Removable"})," for å vise aktive filtre som kan fjernes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Plassering:"})," Plasser chips horisontalt. De kan brytes over flere linjer hvis det er mange."]}),`
`]}),`
`,e.jsx(n.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for status:"})," Ikke bruk for status eller antall. Bruk ",e.jsx(n.code,{children:"Badge"})," i stedet."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for statisk info:"})," Ikke bruk for ikke-interaktive merkelapper. Bruk ",e.jsx(n.code,{children:"Tag"})," i stedet."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke for navigasjon:"})," Ikke bruk for menyer eller sidet navigasjon."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke vertikalt:"})," Ikke stable chips vertikalt. Bruk ",e.jsx(n.code,{children:"Checkbox"})," eller ",e.jsx(n.code,{children:"Radio"})," i stedet."]}),`
`]}),`
`,e.jsx(n.h3,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.h4,{id:"teksten-i-en-chip-bør-være-så-kort-som-mulig-helst-bare-ett-eller-to-ord-feks-nynorsk-slett-filter",children:["Teksten i en ",e.jsx(n.code,{children:"Chip"}),' bør være så kort som mulig, helst bare ett eller to ord (f.eks. "Nynorsk", "Slett filter").']}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Chip.Radio"})," / ",e.jsx(n.code,{children:"Chip.Checkbox"}),":"]})," Disse fungerer som standard skjemafelt og bør grupperes i et ",e.jsx(n.code,{children:"Fieldset"})," (som ",e.jsx(n.code,{children:"Checkbox"})," og ",e.jsx(n.code,{children:"Radio"}),") hvis konteksten ikke er åpenbar."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Chip.Removable"}),":"]})," Denne knappen ",e.jsx(n.strong,{children:"må"})," ha et godt ",e.jsx(n.code,{children:"aria-label"}),'. For eksempel, en chip med teksten "Norge" bør ha ',e.jsx(n.code,{children:'aria-label="Fjern Norge"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Chip.Button"}),":"]})," Må ha en tydelig tekst som beskriver handlingen."]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(n.h4,{id:"her-er-tilgjengelige-css-variabler-for-chip",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(n.code,{children:"Chip"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-background-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-background-color-hover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-background-color-active"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-text-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-border-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-padding-inline"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-padding-block"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-font-size"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--chip-icon-spacing"})}),`
`]})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{y as default};
