import{j as e}from"./iframe-uqdBrel6.js";import{useMDXComponents as l}from"./index-BGg_e8vf.js";import{M as i,P as t,C as d,a as o}from"./blocks-BVIRgAS8.js";import{F as h,W as j}from"./Fieldset.stories-BN2PcZZJ.js";import"./preload-helper-u0ftyAaf.js";import"./index-D8tH-85y.js";import"./index-BI-vaiOr.js";import"./tooltip-C2YX--GY.js";import"./index-D8z4U-MS.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(n.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsxs(n.h4,{id:"fieldset-brukes-til-å-gruppere-og-navngi-felt-som-naturlig-hører-sammen-som-for-eksempel-datofelt-eller-adressefelter-dette-gjør-skjemaer-mer-oversiktlige-og-forbedrer-tilgjengeligheten",children:[e.jsx(n.code,{children:"Fieldset"})," brukes til å gruppere og navngi felt som naturlig hører sammen, som for eksempel datofelt eller adressefelter. Dette gjør skjemaer mer oversiktlige og forbedrer tilgjengeligheten."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Fieldset"})," er et semantisk HTML-",e.jsx(n.code,{children:"<fieldset>"})," med praktiske hjelpekomponenter for å strukturere relaterte inndata."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Fieldset, Field, Label, Textfield, Textarea } from 'rk-designsystem';

<form>
  <Fieldset>
    <Fieldset.Legend>Kontaktinformasjon</Fieldset.Legend>
    <Fieldset.Description>Fyll ut feltene under</Fieldset.Description>

    <Field>
      <Label htmlFor="email">E‑post</Label>
      <Textfield id="email" />
    </Field>

    <Field>
      <Label htmlFor="message">Melding</Label>
      <Textarea id="message" rows={3} />
    </Field>
  </Fieldset>
</form>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"med-skjemafelter",children:"Med skjemafelter"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Når du bruker ",e.jsx(n.code,{children:"Fieldset"}),", start med en tydelig ",e.jsx(n.code,{children:"Fieldset.Legend"})," som beskriver hva gruppen inneholder (f.eks. et spørsmål eller en seksjonstittel). Legg gjerne til ",e.jsx(n.code,{children:"Fieldset.Description"})," for kort hjelpetekst."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["å gruppere flere relaterte ",e.jsx(n.code,{children:"Radio"}),"- eller ",e.jsx(n.code,{children:"Checkbox"}),"‑valg"]}),`
`,e.jsx(n.li,{children:"å dele skjema i meningsfulle seksjoner"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"å samle elementer som ikke er del av et skjema"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.p,{children:["Unngå å duplisere samme ordlyd i både ",e.jsx(n.code,{children:"label"})," og ",e.jsx(n.code,{children:"legend"}),". Bruk ",e.jsx(n.code,{children:"Fieldset.Description"})," ved behov for å gjøre utfyllingen enklere. Hold teksten kort og konsis."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.p,{children:["Bruk alltid en ",e.jsx(n.code,{children:"legend"})," for å gi skjermlesere nødvendig kontekst. Hvis ",e.jsx(n.code,{children:"legend"})," kun skal være for skjermleser, kan du skjule den visuelt med en egnet hjelpeklasse (for eksempel ",e.jsx(n.code,{children:"ds-sr-only"}),"), slik at layout ikke påvirkes unødig."]})]})}function F(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{F as default};
