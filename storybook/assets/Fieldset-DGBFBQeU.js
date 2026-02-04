import{j as e}from"./iframe-C_144XaW.js";import{useMDXComponents as l}from"./index-n13Eqpxp.js";import{M as i,P as t,C as d,a as o}from"./WithTooltip-SK46ZJ2J-Dydl7kUd.js";import{F as h,W as m}from"./Fieldset.stories-DkPbGmSk.js";import"./preload-helper-u0ftyAaf.js";import"./index-Boi6Ucm2.js";import"./index-uCXek-yX.js";import"./lite-DaUVFjkg.js";import"./paragraph-DdRyolLH.js";import"./index-CzYOl_mR.js";import"./label-l-gBj5i5.js";import"./index-BZ7K7H_p.js";import"./index-C8xhgYuO.js";import"./use-merge-refs-DL-a22i3.js";import"./textfield-Cf3tKSyS.js";import"./input-BLDbtWz0.js";import"./textarea-DjaTeyqg.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
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
