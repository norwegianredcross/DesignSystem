import{j as e}from"./iframe-TM5PO6Gt.js";import{u as l,M as i,P as t,C as d,a as o}from"./blocks-X1LDVh_c.js";import{F as h,W as a}from"./Fieldset.stories-Bh8Gq-jx.js";import"./preload-helper-u0ftyAaf.js";import"./index-Bi56GQhn.js";import"./index-DXLo-Ueb.js";import"./tooltip-nTTVuOqD.js";import"./XMark-DumP7KPU.js";import"./useId-D-KO70k1.js";import"./index-Dhglbull.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(s.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsxs(s.h4,{id:"fieldset-brukes-til-å-gruppere-og-navngi-felt-som-naturlig-hører-sammen-som-for-eksempel-datofelt-eller-adressefelter-dette-gjør-skjemaer-mer-oversiktlige-og-forbedrer-tilgjengeligheten",children:[e.jsx(s.code,{children:"Fieldset"})," brukes til å gruppere og navngi felt som naturlig hører sammen, som for eksempel datofelt eller adressefelter. Dette gjør skjemaer mer oversiktlige og forbedrer tilgjengeligheten."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Fieldset"})," er et semantisk HTML-",e.jsx(s.code,{children:"<fieldset>"})," med praktiske hjelpekomponenter for å strukturere relaterte inndata."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Fieldset, Field, Label, Textfield, Textarea } from 'rk-designsystem';

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
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(s.h3,{id:"med-skjemafelter",children:"Med skjemafelter"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(s.p,{children:["Når du bruker ",e.jsx(s.code,{children:"Fieldset"}),", start med en tydelig ",e.jsx(s.code,{children:"Fieldset.Legend"})," som beskriver hva gruppen inneholder (f.eks. et spørsmål eller en seksjonstittel). Legg gjerne til ",e.jsx(s.code,{children:"Fieldset.Description"})," for kort hjelpetekst."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Passer til"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["å gruppere flere relaterte ",e.jsx(s.code,{children:"Radio"}),"- eller ",e.jsx(s.code,{children:"Checkbox"}),"‑valg"]}),`
`,e.jsx(s.li,{children:"å dele skjema i meningsfulle seksjoner"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"å samle elementer som ikke er del av et skjema"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(s.p,{children:["Unngå å duplisere samme ordlyd i både ",e.jsx(s.code,{children:"label"})," og ",e.jsx(s.code,{children:"legend"}),". Bruk ",e.jsx(s.code,{children:"Fieldset.Description"})," ved behov for å gjøre utfyllingen enklere. Hold teksten kort og konsis."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(s.p,{children:["Bruk alltid en ",e.jsx(s.code,{children:"legend"})," for å gi skjermlesere nødvendig kontekst. Hvis ",e.jsx(s.code,{children:"legend"})," kun skal være for skjermleser, kan du skjule den visuelt med en egnet hjelpeklasse (for eksempel ",e.jsx(s.code,{children:"ds-sr-only"}),"), slik at layout ikke påvirkes unødig."]})]})}function b(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default};
