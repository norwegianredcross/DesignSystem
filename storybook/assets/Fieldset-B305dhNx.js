import{j as e}from"./iframe-C1fdovZ4.js";import{useMDXComponents as l}from"./index-DRY1Dm-W.js";import{M as i,P as t,C as d,a as o}from"./WithTooltip-SK46ZJ2J-GSF-Dvdm.js";import{F as h,W as m}from"./Fieldset.stories-BDqKr4vv.js";import"./preload-helper-u0ftyAaf.js";import"./index-Cs_wwL5H.js";import"./index-BzWPzAc2.js";import"./lite-DaUVFjkg.js";import"./paragraph-Dw9ZN-SE.js";import"./index-gXw-3szL.js";import"./label-BAy_haK_.js";import"./index-Bl8fvAWe.js";import"./index-Dq6pKD6v.js";import"./use-merge-refs-Ofxx9rqz.js";import"./textfield-mLOuS2DF.js";import"./input-CukIBFSh.js";import"./textarea-D3SkxOX8.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(r.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsxs(r.h4,{id:"fieldset-brukes-til-å-gruppere-og-navngi-felt-som-naturlig-hører-sammen-som-for-eksempel-datofelt-eller-adressefelter-dette-gjør-skjemaer-mer-oversiktlige-og-forbedrer-tilgjengeligheten",children:[e.jsx(r.code,{children:"Fieldset"})," brukes til å gruppere og navngi felt som naturlig hører sammen, som for eksempel datofelt eller adressefelter. Dette gjør skjemaer mer oversiktlige og forbedrer tilgjengeligheten."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Fieldset"})," er et semantisk HTML-",e.jsx(r.code,{children:"<fieldset>"})," med praktiske hjelpekomponenter for å strukturere relaterte inndata."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Fieldset, Field, Label, Textfield, Textarea } from 'rk-designsystem';

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
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(r.h3,{id:"med-skjemafelter",children:"Med skjemafelter"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.p,{children:["Når du bruker ",e.jsx(r.code,{children:"Fieldset"}),", start med en tydelig ",e.jsx(r.code,{children:"Fieldset.Legend"})," som beskriver hva gruppen inneholder (f.eks. et spørsmål eller en seksjonstittel). Legg gjerne til ",e.jsx(r.code,{children:"Fieldset.Description"})," for kort hjelpetekst."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["å gruppere flere relaterte ",e.jsx(r.code,{children:"Radio"}),"- eller ",e.jsx(r.code,{children:"Checkbox"}),"‑valg"]}),`
`,e.jsx(r.li,{children:"å dele skjema i meningsfulle seksjoner"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"å samle elementer som ikke er del av et skjema"}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(r.p,{children:["Unngå å duplisere samme ordlyd i både ",e.jsx(r.code,{children:"label"})," og ",e.jsx(r.code,{children:"legend"}),". Bruk ",e.jsx(r.code,{children:"Fieldset.Description"})," ved behov for å gjøre utfyllingen enklere. Hold teksten kort og konsis."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["Bruk alltid en ",e.jsx(r.code,{children:"legend"})," for å gi skjermlesere nødvendig kontekst. Hvis ",e.jsx(r.code,{children:"legend"})," kun skal være for skjermleser, kan du skjule den visuelt med en egnet hjelpeklasse (for eksempel ",e.jsx(r.code,{children:"ds-sr-only"}),"), slik at layout ikke påvirkes unødig."]})]})}function C(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{C as default};
