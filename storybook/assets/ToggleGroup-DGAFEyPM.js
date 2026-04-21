import{j as e}from"./iframe-uqdBrel6.js";import{useMDXComponents as s}from"./index-BGg_e8vf.js";import{M as o,P as t,C as d,a as l}from"./blocks-BVIRgAS8.js";import{T as a,I as g,C as h,D as c,L as p}from"./ToggleGroup.stories-Dome24mh.js";import"./preload-helper-u0ftyAaf.js";import"./index-D8tH-85y.js";import"./index-BI-vaiOr.js";import"./tooltip-C2YX--GY.js";import"./index-DevlJrOy.js";import"./Paperplane-C5iGS8TZ.js";import"./useId-HWg_lMOg.js";import"./EnvelopeClosed-DW-vhSvI.js";function i(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(r.h1,{id:"togglegroup",children:"ToggleGroup"}),`
`,e.jsxs(r.h4,{id:"togglegroup-samler-relaterte-valg-i-en-gruppe-knapper-der-kun-ett-valg-kan-være-aktivt-om-gangen",children:[e.jsx(r.code,{children:"ToggleGroup"})," samler relaterte valg i en gruppe knapper der kun ett valg kan være aktivt om gangen."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:["Plasser helst innholdet som styres rett etter ",e.jsx(r.code,{children:"ToggleGroup"})," i DOM-en. Hvis ikke, knytt gruppen til innholdet med ",e.jsx(r.code,{children:"aria-controls"})," på ",e.jsx(r.code,{children:"ToggleGroup"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ToggleGroup } from 'rk-designsystem';

<ToggleGroup defaultValue="value1">
  <ToggleGroup.Item value="value1">Option 1</ToggleGroup.Item>
  <ToggleGroup.Item value="value2">Option 2</ToggleGroup.Item>
  <ToggleGroup.Item value="value3">Option 3</ToggleGroup.Item>
</ToggleGroup>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"kodeeksempler",children:"Kodeeksempler"}),`
`,e.jsx(r.h3,{id:"kun-ikoner",children:"Kun ikoner"}),`
`,e.jsxs(r.p,{children:["Bruk kun ikoner når de er lett forståelige. Forklar gjerne med ",e.jsx(r.a,{href:"/docs/komponenter-tooltip--docs",children:e.jsx(r.code,{children:"Tooltip"})}),"."]}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(r.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsxs(r.p,{children:["Styr valgt verdi via ",e.jsx(r.code,{children:"value"}),"/",e.jsx(r.code,{children:"onChange"})," på ",e.jsx(r.code,{children:"ToggleGroup"}),"."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(r.h3,{id:"standard-og-størrelser",children:"Standard og størrelser"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.code,{children:"ToggleGroup"})," når valget har direkte og synlig effekt i grensesnittet (filter, visningsmodus, hvilke felt som vises). Sørg for at alle valg får plass på én linje også på mobil."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"filtrering i lister/tabeller"}),`
`,e.jsx(r.li,{children:"bytte mellom visninger (f.eks. tabell/graf)"}),`
`,e.jsx(r.li,{children:"innstillinger som påvirker visningen umiddelbart"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"når det er for mange valg til at de får plass i bredden"}),`
`,e.jsxs(r.li,{children:["når valgene har lange tekster (vurder ",e.jsx(r.code,{children:"Tabs"})," eller ",e.jsx(r.code,{children:"Radio"}),")"]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.p,{children:["Gi gruppen en forklarende ledetekst. Skriv korte, tydelige tekster for hvert valg og vær konsistent i språk og form. Ved ikon‑kun, bruk ",e.jsx(r.code,{children:"Tooltip"})," for forklaring."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"ToggleGroup"})," har tydelig fokusindikator og bruker roving tabindex for fokusflyt."]}),`
`,e.jsx(r.h3,{id:"tastaturinteraksjon",children:"Tastaturinteraksjon"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Tab"})," flytter fokus til aktiv knapp"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"})," går ut av gruppen"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"Space"}),"/",e.jsx("kbd",{children:"Enter"})," aktiverer valgt knapp"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"←"}),"/",e.jsx("kbd",{children:"↑"})," forrige knapp"]}),`
`,e.jsxs(r.li,{children:[e.jsx("kbd",{children:"→"}),"/",e.jsx("kbd",{children:"↓"})," neste knapp"]}),`
`]})]})}function I(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{I as default};
