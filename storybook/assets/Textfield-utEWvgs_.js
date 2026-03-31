import{j as e}from"./iframe-BOOWQYM0.js";import{useMDXComponents as l}from"./index-BSCMBXf6.js";import{M as t,P as d,C as o,a as r}from"./blocks-65Yfxw3N.js";import{T as h,M as c,W as x,a,b as j,c as f,D as k,R as m,C as p}from"./Textfield.stories-Oklfnix6.js";import"./preload-helper-u0ftyAaf.js";import"./index-z9dL5CPh.js";import"./index-CAh4ME0N.js";import"./index-CFaZiAIr.js";import"./tooltip-jKJDwqdV.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h}),`
`,e.jsx(n.h1,{id:"textfield",children:"Textfield"}),`
`,e.jsxs(n.h4,{id:"textfield-gir-brukere-muligheten-til-å-skrive-fritekst-eller-tall",children:[e.jsx(n.code,{children:"Textfield"})," gir brukere muligheten til å skrive fritekst eller tall."]}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Textfield"})," er bygd på ",e.jsx(n.a,{href:"/docs/komponenter-field--docs",children:e.jsx(n.code,{children:"Field"})})," og kan rendre som ",e.jsx(n.code,{children:"Input"})," eller ",e.jsx(n.code,{children:"Textarea"})," via ",e.jsx(n.code,{children:"multiline"}),". Ikke pakk ",e.jsx(n.code,{children:"Textfield"})," inn i ",e.jsx(n.code,{children:"Field"})," – det er allerede inkludert."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Textfield } from 'rk-designsystem';

<Textfield label="Navn" />
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"multiline",children:"Multiline"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"multiline"})," for å bytte til tekstområde."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"prefixsuffix",children:"Prefix/Suffix"}),`
`,e.jsx(n.p,{children:"Vis enheter eller ekstra informasjon. Ikke bruk uten label – skjermlesere leser dem ikke."}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"antall-tegn",children:"Antall tegn"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"counter"})," for å vise og begrense tegn."]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h3,{id:"beskrivelse-og-feil",children:"Beskrivelse og feil"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"tilstander",children:"Tilstander"}),`
`,e.jsx(r,{of:k}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Input"})," for korte svar og ",e.jsx(n.code,{children:"Textarea"})," for lengre fritekst. Unngå ",e.jsx(n.code,{children:"placeholder"})," som instruks – den forsvinner ved skriving og må møte kontrastkrav. Tilpass bredde etter forventet innhold. Tillat kopier/lim inn."]}),`
`,e.jsx(n.h3,{id:"inndata",children:"Inndata"}),`
`,e.jsxs(n.p,{children:["Velg passende ",e.jsx(n.code,{children:"type"})," og bruk ",e.jsx(n.code,{children:"autocomplete"})," der formål finnes i WCAG‑listen. For rene tallfelt, foretrekk ",e.jsx(n.code,{children:'type="text"'})," med ",e.jsx(n.code,{children:'inputmode="numeric"'})," over ",e.jsx(n.code,{children:'type="number"'})," for bedre robusthet."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(n.p,{children:"Alltid label. Hold den kort (helst én linje), og unngå kolon."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.p,{children:["Unngå deaktivert (",e.jsx(n.code,{children:"disabled"}),") der det er mulig; vis heller tekst eller bruk ",e.jsx(n.code,{children:"readOnly"}),". Prefiks/suffiks er dekorative og må suppleres av en beskrivende label."]})]})}function W(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{W as default};
