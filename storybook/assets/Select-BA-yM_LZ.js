import{j as e}from"./iframe-CUzXZGM0.js";import{useMDXComponents as i}from"./index-B0oEy-Jb.js";import{M as t,P as d,C as o,a as l}from"./WithTooltip-SK46ZJ2J-CXcxSPiG.js";import{S as c,W as a,a as h,R as g,D as j}from"./Select.stories-DwWMIl7f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cxz-yJBV.js";import"./index-BWkBoCpH.js";import"./lite-DaUVFjkg.js";import"./index-C_ySVgsb.js";import"./label-C61_xyo1.js";import"./index-BDxL1wb9.js";import"./use-merge-refs-BhHCP1pe.js";import"./paragraph-gFURL330.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.h4,{id:"select-er-en-nedtrekksliste-for-å-velge-ett-alternativ-fra-en-statisk-liste-den-bygger-på-html-select-og-følger-nettleserens-innebygde-mønstre-som-gir-god-tilgjengelighet-og-forutsigbarhet--men-begrenser-styling-av-innholdet",children:[e.jsx(n.code,{children:"Select"})," er en nedtrekksliste for å velge ett alternativ fra en statisk liste. Den bygger på HTML ",e.jsx(n.code,{children:"<select>"})," og følger nettleserens innebygde mønstre, som gir god tilgjengelighet og forutsigbarhet – men begrenser styling av innholdet."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Select, Field, Label } from 'rk-designsystem';

<Field>
  <Label>Ta et valg</Label>
  <Select>
    <Select.Option value="1">Alternativ 1</Select.Option>
    <Select.Option value="2">Alternativ 2</Select.Option>
    <Select.Option value="3">Alternativ 3</Select.Option>
  </Select>
</Field>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"med-feil",children:"Med feil"}),`
`,e.jsx(n.p,{children:"Vis feilmelding og merk feltet som ugyldig når påkrevd valg mangler."}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h3,{id:"med-gruppering",children:"Med gruppering"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Select.Optgroup"})," for å samle alternativer i kategorier."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"readonly",children:"ReadOnly"}),`
`,e.jsx(n.p,{children:"Vis en verdi uten at brukeren kan endre den."}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"Vis en utilgjengelig select når valget ikke kan endres."}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"select"})," når det er mange (omtrent 7 eller flere) alternativer. Ved færre valg er ",e.jsx(n.code,{children:"Radio"})," ofte enklere for brukeren. ",e.jsx(n.code,{children:"Select"})," fungerer godt på mobil og følger plattformens mønstre. Hvis det trengs flervalg eller filtrering, vurder ",e.jsx(n.code,{children:"Suggestion"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"å velge ett alternativ"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"navigasjon mellom sider eller seksjoner"}),`
`,e.jsxs(n.li,{children:["å velge flere alternativer – HTML ",e.jsx(n.code,{children:"multiple"})," er lite brukervennlig, vurder ",e.jsx(n.code,{children:"Checkbox"})," eller ",e.jsx(n.code,{children:"Suggestion"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Noen retningslinjer, som hos GOV.UK, anbefaler å unngå ",e.jsx(n.code,{children:"select"})," i offentlige tjenester når det finnes bedre alternativer (færre og mer målrettede spørsmål eller ",e.jsx(n.code,{children:"Radio"}),")."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Select"})," skal alltid ha en tydelig ledetekst. Plasser ledetekst og beskrivelse over feltet. Hvis ",e.jsx(n.code,{children:"select"})," ligger i en tabell og får ledetekst fra tabelloverskrift, kan ledeteksten skjules visuelt – men den må fortsatt være meningsfull for skjermlesere."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(n.p,{children:"Det finnes kjente begrensninger, som VoiceOver i Chrome på Mac."}),`
`,e.jsx(n.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Space"})," åpner listen (og kan velge på Mac)"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," velger (og åpner på Windows)"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"↓"}),"/",e.jsx("kbd",{children:"↑"})," markerer neste/forrige"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Home"}),"/",e.jsx("kbd",{children:"End"})," første/siste"]}),`
`,e.jsx(n.li,{children:"Bokstaver/tegn hopper til første matchende alternativ"}),`
`]})]})}function D(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{D as default};
