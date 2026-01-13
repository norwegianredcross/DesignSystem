import{j as e}from"./iframe-Crp232av.js";import{useMDXComponents as i}from"./index-SCFeb69e.js";import{M as d,P as o,C as a,a as r}from"./WithTooltip-SK46ZJ2J-D7k7PNyo.js";import{B as c,W as h,a as k,S as j,L as t,F as m,O as g,P as x}from"./Badge.stories-DxDrLbPA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1EAb3Di.js";import"./lite-DaUVFjkg.js";import"./button-CPJg3ZUK.js";import"./index-D28QpGnk.js";import"./spinner-BsofJ5Ip.js";import"./use-merge-refs-CotTE9p-.js";import"./Video-CE03Tiha.js";import"./useId-d2IV3qM8.js";function l(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsxs(n.h4,{id:"badge-er-en-ikke-interaktiv-komponent-som-brukes-for-å-vise-status-eller-antall-feks-uleste-varsler-den-er-designet-for-å-trekke-oppmerksomhet-til-et-element-uten-å-være-forstyrrende",children:[e.jsx(n.code,{children:"Badge"})," er en ikke-interaktiv komponent som brukes for å vise status eller antall (f.eks. uleste varsler). Den er designet for å trekke oppmerksomhet til et element uten å være forstyrrende."]}),`
`,e.jsx(o,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`\r
import { Badge, BadgePosition } from from 'rk-designsystem';\r
\r
\r
\r
// Standard badge med tall\r
\r
<Badge count={5} />\r
\r
\r
\r
// Badge brukt som status-prikk\r
\r
<Badge data-color="success" />\r
\r
\r
\r
// Flytende over et annet element\r
\r
<BadgePosition placement="top-right">\r
\r
<Badge count={3} data-color="danger" />\r
\r
<InboxIcon />\r
\r
</BadgePosition>
`})}),`
`,e.jsxs(n.h4,{id:"badge-brukes-til-å-kommunisere-status-eller-antall-badgeposition-er-en-hjelpekomponent-som-brukes-for-å-plassere-en-badge-flytende-over-et-annet-element-typisk-et-ikon-eller-en-knapp",children:[e.jsx(n.code,{children:"Badge"})," brukes til å kommunisere status eller antall. ",e.jsx(n.code,{children:"BadgePosition"})," er en hjelpekomponent som brukes for å plassere en ",e.jsx(n.code,{children:"Badge"})," flytende over et annet element, typisk et ikon eller en knapp."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(n.h3,{id:"med-tall",children:"Med tall"}),`
`,e.jsxs(n.h4,{id:"bruk-count-propen-for-å-vise-et-tall-dette-er-vanlig-for-å-vise-antall-uleste-meldinger-varsler-eller-oppgaver",children:["Bruk ",e.jsx(n.code,{children:"count"})," propen for å vise et tall. Dette er vanlig for å vise antall uleste meldinger, varsler eller oppgaver."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"med-maks-antall",children:"Med maks antall"}),`
`,e.jsxs(n.h4,{id:"bruk-maxcount-for-å-sette-et-tak-på-tallet-som-vises-tall-over-dette-vil-vises-som-maxcount",children:["Bruk ",e.jsx(n.code,{children:"maxCount"})," for å sette et tak på tallet som vises. Tall over dette vil vises som ",e.jsx(n.code,{children:"maxCount+"}),"."]}),`
`,e.jsx(r,{of:k}),`
`,e.jsx(n.h3,{id:"kun-status",children:"Kun status"}),`
`,e.jsxs(n.h4,{id:"uten-count-propen-vil-komponenten-vises-som-en-liten-prikk-dette-er-nyttig-for-å-indikere-status-som-online-suksess-eller-feil-danger",children:["Uten ",e.jsx(n.code,{children:"count"}),' propen vil komponenten vises som en liten prikk. Dette er nyttig for å indikere status, som "online" (suksess) eller "feil" (danger).']}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"farger-og-varianter",children:"Farger og varianter"}),`
`,e.jsxs(n.h4,{id:"badge-støtter-data-color-for-å-endre-farge-og-variant-base-eller-tinted-for-å-endre-bakgrunnsstil",children:[e.jsx(n.code,{children:"Badge"})," støtter ",e.jsx(n.code,{children:"data-color"})," for å endre farge og ",e.jsx(n.code,{children:"variant"})," ('base' eller 'tinted') for å endre bakgrunnsstil."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ulike-mønstre",children:"Ulike mønstre"}),`
`,e.jsx(n.h3,{id:"flytende-over-element",children:"Flytende over element"}),`
`,e.jsxs(n.h4,{id:"ved-å-wrappe-badge-og-elementet-den-skal-festes-til-i-en-badgeposition-kan-du-plassere-den-i-et-hjørne",children:["Ved å wrappe ",e.jsx(n.code,{children:"Badge"})," og elementet den skal festes til i en ",e.jsx(n.code,{children:"BadgePosition"}),", kan du plassere den i et hjørne."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"på-ikoner",children:"På ikoner"}),`
`,e.jsx(n.h4,{id:"et-svært-vanlig-bruksområde-er-å-plassere-en-badge-på-en-ikon-knapp-for-å-vise-varsler",children:"Et svært vanlig bruksområde er å plassere en badge på en ikon-knapp for å vise varsler."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"plasseringer",children:"Plasseringer"}),`
`,e.jsxs(n.h4,{id:"badgeposition-lar-deg-kontrollere-plasseringen-med-placement-propen-du-kan-velge-top-right-top-left-bottom-right-eller-bottom-left",children:[e.jsx(n.code,{children:"BadgePosition"})," lar deg kontrollere plasseringen med ",e.jsx(n.code,{children:"placement"})," propen. Du kan velge ",e.jsx(n.code,{children:"top-right"}),", ",e.jsx(n.code,{children:"top-left"}),", ",e.jsx(n.code,{children:"bottom-right"}),", eller ",e.jsx(n.code,{children:"bottom-left"}),"."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"størrelser",children:"Størrelser"}),`
`,e.jsxs(n.h4,{id:"badge-kommer-i-forskjellige-størrelser-sm-md-lg-som-styres-med-data-size-standardstørrelsen-er-md",children:["Badge kommer i forskjellige størrelser (",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),") som styres med ",e.jsx(n.code,{children:"data-size"}),". Standardstørrelsen er ",e.jsx(n.code,{children:"md"}),"."]}),`
`,e.jsx(n.h3,{id:"stor-størrelse",children:"Stor størrelse"}),`
`,e.jsxs(n.h4,{id:"her-er-et-eksempel-på-data-sizelg",children:["Her er et eksempel på ",e.jsx(n.code,{children:'data-size="lg"'}),"."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.h4,{id:"bruk-badge-for-å-trekke-oppmerksomhet-mot-status-varsler-eller-tall",children:["Bruk ",e.jsx(n.code,{children:"Badge"})," for å trekke oppmerksomhet mot status, varsler eller tall."]}),`
`,e.jsx(n.h4,{id:"gjør-dette",children:"Gjør dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bruk for tall som viser antall nye meldinger, varsler eller oppgaver."}),`
`,e.jsx(n.li,{children:"Bruk som små statusindikatorer (uten tall) for å vise status (f.eks. aktiv, borte, feil)."}),`
`,e.jsxs(n.li,{children:["Hold det enkelt. ",e.jsx(n.code,{children:"Badge"})," skal være en rask, visuell indikator."]}),`
`]}),`
`,e.jsx(n.h4,{id:"unngå-dette",children:"Unngå dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bruk for tekster. Bruk ",e.jsx(n.code,{children:"Tag"})," i stedet."]}),`
`,e.jsxs(n.li,{children:["Bruk for interaktive handlinger. Bruk ",e.jsx(n.code,{children:"Chip"})," eller ",e.jsx(n.code,{children:"Button"})," i stedet."]}),`
`,e.jsx(n.li,{children:"Overdreven bruk. For mange badges på én side kan virke rotete og miste sin effekt."}),`
`]}),`
`,e.jsx(n.h3,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.h4,{id:"denne-komponenten-er-ikke-ment-for-tekst-hvis-du-trenger-å-vise-ord-eller-korte-fraser-bør-du-bruke-tag-komponenten-i-stedet",children:["Denne komponenten er ikke ment for tekst. Hvis du trenger å vise ord eller korte fraser, bør du bruke ",e.jsx(n.code,{children:"Tag"}),"-komponenten i stedet."]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(n.p,{children:"Når en badge brukes til å kommunisere informasjon, må den informasjonen også være tilgjengelig for skjermlesere."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Når den viser antall:"})," Elementet badgen er festet til bør inkludere antallet i sin tilgjengelige tekst.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Eksempel:"}),' En knapp med en badge som viser "3" bør ha ',e.jsx(n.code,{children:'aria-label="Innboks (3 nye meldinger)"'}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Når den viser status:"})," Badgen bør ha en skjult tekst eller ",e.jsx(n.code,{children:"aria-label"})," som beskriver statusen.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Eksempel:"})," En status-prikk bør ha en ",e.jsx(n.code,{children:"span"})," inni seg med ",e.jsx(n.code,{children:'className="sr-only"'}),' (screenreader-only) som sier "Status: Aktiv".']}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(n.h4,{id:"her-er-tilgjengelige-css-variabler-for-badge-slik-at-du-kan-tilpasse-utseendet-ved-behov",children:["Her er tilgjengelige CSS-variabler for ",e.jsx(n.code,{children:"Badge"}),", slik at du kan tilpasse utseendet ved behov."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-background-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-text-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-font-size"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-size"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-padding-inline"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"--badge-position-translate"})}),`
`]})]})}function F(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{F as default};
