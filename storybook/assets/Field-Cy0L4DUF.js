import{j as e}from"./iframe-6kzTZlGf.js";import{useMDXComponents as s}from"./index-DvLDY7KI.js";import{M as d,P as t,C as o,a as r}from"./WithTooltip-SK46ZJ2J-Cq2ElYRE.js";import{F as a,D as c,A as h,W as j}from"./Field.stories-B7GNOPY2.js";import"./preload-helper-u0ftyAaf.js";import"./index-DKvVLHyO.js";import"./index-DEsHt4Pg.js";import"./index-Dmq48JZY.js";import"./index-Du6rWHfi.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-CGbHumyz.js";import"./paragraph-CXGp_IzF.js";import"./label-D5JUUmxY.js";import"./textfield-COmA1TVq.js";import"./input-VoATFI7-.js";import"./textarea-D1D83uji.js";import"./index-D4s8kKpW.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"field",children:"Field"}),`
`,e.jsxs(n.h4,{id:"field-hjelper-deg-å-strukturere-skjemainnhold-ved-å-koble-sammen-ledetekst-beskrivelse-feil-og-teller-på-en-konsistent-og-tilgjengelig-måte-bruk-field-sammen-med-input-textarea-eller-select-merk-at-textfield-allerede-inkluderer-tilsvarende-struktur-og-skal-ikke-ligge-inni-field",children:[e.jsx(n.code,{children:"Field"})," hjelper deg å strukturere skjemainnhold ved å koble sammen ledetekst, beskrivelse, feil og teller på en konsistent og tilgjengelig måte. Bruk ",e.jsx(n.code,{children:"Field"})," sammen med ",e.jsx(n.code,{children:"Input"}),", ",e.jsx(n.code,{children:"Textarea"})," eller ",e.jsx(n.code,{children:"Select"}),". Merk at ",e.jsx(n.code,{children:"Textfield"})," allerede inkluderer tilsvarende struktur, og skal ikke ligge inni ",e.jsx(n.code,{children:"Field"}),"."]}),`
`,e.jsx(t,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Field, Label, Input, ValidationMessage } from 'rk-designsystem';

<Field>
  <Label>Kort beskrivelse</Label>
  <Field.Description>Beskrivende hjelptekst</Field.Description>
  <Input />
  <ValidationMessage>Feilmelding</ValidationMessage>
</Field>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"grunnleggende",children:"Grunnleggende"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"prefixsuffix-affixes",children:"Prefix/Suffix (Affixes)"}),`
`,e.jsxs(n.p,{children:["Prefiks og suffiks er nyttig for enheter, valuta og lignende. Ikke stol på disse alene – samme informasjon bør også fremgå i ",e.jsx(n.code,{children:"Label"}),"."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"antall-tegn",children:"Antall tegn"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Field.Counter"})," for å vise tilgjengelige/brukte tegn."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Field"})," kobler automatisk sammen ",e.jsx(n.code,{children:"Label"}),", ",e.jsx(n.code,{children:"Field.Description"}),", ",e.jsx(n.code,{children:"ValidationMessage"})," og ",e.jsx(n.code,{children:"Field.Counter"})," med feltet via riktige ARIA-attributter."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"å sikre at beskrivelse, feilmelding og teller er riktig koblet til et felt"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["å gruppere flere felt semantisk – bruk heller ",e.jsx(n.a,{href:"/docs/komponenter-fieldset--docs",children:e.jsx(n.code,{children:"Fieldset"})})]}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsxs(n.p,{children:["For innstillinger og brytere kan du bruke ",e.jsx(n.code,{children:'position="end"'})," slik at handlingen plasseres visuelt til høyre for ",e.jsx(n.code,{children:"Label"}),"."]}),`
`,e.jsx(n.h3,{id:"påkrevde-og-valgfrie-felt",children:"Påkrevde og valgfrie felt"}),`
`,e.jsxs(n.p,{children:["Marker felt som påkrevde/valgfrie i henhold til retningslinjene. Hvis du plasserer en ",e.jsx(n.code,{children:"Tag"})," inne i ",e.jsx(n.code,{children:"<label>"}),", bruk gjerne ",e.jsx(n.code,{children:"margin-inline-start: var(--ds-size-2)"})," for mellomrom."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kjente-mangler",children:"Kjente mangler"}),`
`,e.jsxs(n.p,{children:["VoiceOver kan i enkelte tilfeller lese ",e.jsx(n.code,{children:"Field.Counter"})," to ganger når komponenten rendres i en iframe. Se relatert diskusjon hos Apple support."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(n.p,{children:["Ingen dedikerte CSS-variabler er dokumentert for ",e.jsx(n.code,{children:"Field"})," i denne demoen."]})]})}function y(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{y as default};
