import{j as r}from"./iframe-Ds727h2y.js";import{useMDXComponents as l}from"./index-D1vG0lWE.js";import{M as o,P as t,C as d,a as i,A as m}from"./WithTooltip-SK46ZJ2J-B6fSzeu8.js";import{E as a,D as h,W as c,a as j}from"./ErrorSummary.stories-CZ5_-_Cx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BNc4ISRt.js";import"./index-omwQ3x7D.js";import"./lite-DaUVFjkg.js";import"./heading-CfhRSTe8.js";import"./index-BUb5T08L.js";import"./link-O6jDCabE.js";import"./textfield-DUuZX5Ox.js";import"./index-BC_Ev9yB.js";import"./use-merge-refs-BG8HluL4.js";import"./paragraph-DilLULtj.js";import"./input-BYQMHXOW.js";import"./label-BdnDbDR9.js";import"./textarea-CQhUy7jh.js";function s(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(o,{of:a}),`
`,r.jsx(e.h1,{id:"errorsummary",children:"ErrorSummary"}),`
`,r.jsxs(e.h4,{id:"errorsummary-gir-en-kort-samlet-oversikt-over-feil-som-må-rettes-før-brukeren-kan-gå-videre",children:[r.jsx(e.code,{children:"ErrorSummary"})," gir en kort, samlet oversikt over feil som må rettes før brukeren kan gå videre."]}),`
`,r.jsx(e.h4,{id:"den-hjelper-brukeren-å-forstå-hva-som-mangler-og-hvor-det-kan-rettes",children:"Den hjelper brukeren å forstå hva som mangler og hvor det kan rettes."}),`
`,r.jsx(t,{}),`
`,r.jsx(d,{}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"bruk",children:"Bruk"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"ErrorSummary"}),` settes vanligvis under hovedinnholdet og nær handlingsknapper (f.eks. “Send inn”).\r
Den består av følgende deler:`]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"ErrorSummary.Heading"})," for overskrift"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"ErrorSummary.List"})," som inneholder ",r.jsx(e.code,{children:"ErrorSummary.Item"})]}),`
`,r.jsxs(e.li,{children:["Hver ",r.jsx(e.code,{children:"ErrorSummary.Item"})," inneholder en ",r.jsx(e.code,{children:"ErrorSummary.Link"})," med ",r.jsx(e.code,{children:"href"})," som peker til et felt-id"]}),`
`]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { ErrorSummary } from 'rk-designsystem';\r
\r
<ErrorSummary>\r
  <ErrorSummary.Heading>\r
    For å gå videre må du rette opp følgende feil:\r
  </ErrorSummary.Heading>\r
  <ErrorSummary.List>\r
    <ErrorSummary.Item>\r
      <ErrorSummary.Link href="#some-field-id">Feilmelding</ErrorSummary.Link>\r
    </ErrorSummary.Item>\r
  </ErrorSummary.List>\r
</ErrorSummary>
`})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"eksempler",children:"Eksempler"}),`
`,r.jsx(e.h3,{id:"standard",children:"Standard"}),`
`,r.jsx(i,{of:h}),`
`,r.jsx(e.h3,{id:"bruk-sammen-med-skjemafelt",children:"Bruk sammen med skjemafelt"}),`
`,r.jsx(e.p,{children:"Vis lenker som peker direkte til relevante felt-id-er."}),`
`,r.jsx(i,{of:c}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r.jsxs(e.p,{children:["Bruk ",r.jsx(e.code,{children:"ErrorSummary"})," når du vil presentere en oversikt over feil som hindrer innsending."]}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"Passer til"})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"å gi en tydelig liste over feil som må rettes før innsending"}),`
`,r.jsx(e.li,{children:"skjema med mange felt der det er lett å miste oversikten"}),`
`]}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"Passer ikke til"})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["systemvarsler – bruk ",r.jsx(e.a,{href:"/docs/komponenter-alert--docs",children:r.jsx(e.code,{children:"Alert"})})]}),`
`,r.jsx(e.li,{children:"informasjonsmeldinger som ikke blokkerer innsending"}),`
`]}),`
`,r.jsx(e.h3,{id:"plassering",children:"Plassering"}),`
`,r.jsxs(e.p,{children:["Vi anbefaler å vise ",r.jsx(e.code,{children:"ErrorSummary"})," like over Neste/Send inn-knappen, slik at sammenhengen mellom feil og handling blir tydelig. I noen tilfeller kan det være bedre å plassere den i toppen."]}),`
`,r.jsx(e.h3,{id:"synlighet",children:"Synlighet"}),`
`,r.jsxs(e.p,{children:["Oppsummeringen bør først vises etter at brukeren har forsøkt å sende inn, eller når det ellers er klart at feilene må rettes for å komme videre. Når den dukker opp, bør fokus flyttes til ",r.jsx(e.code,{children:"ErrorSummary"}),"."]}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,r.jsxs(e.p,{children:["Når ",r.jsx(e.code,{children:"ErrorSummary"})," blir synlig anbefales det å flytte fokus til oppsummeringen, slik at skjermlesere leser den og brukeren kan navigere videre til hvert feilfelt via lenkene. Unngå å bruke live region for hele oppsummeringen da dette ofte blir for omfattende å høre på og vanskelig å navigere i."]}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"errorsummaryitem",children:r.jsx(e.code,{children:"ErrorSummary.Item"})}),`
`,r.jsx(m,{of:j.Item}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,r.jsxs(e.p,{children:["Ingen dedikerte CSS-variabler er dokumentert for ",r.jsx(e.code,{children:"ErrorSummary"})," i denne demoen."]})]})}function H(n={}){const{wrapper:e}={...l(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}export{H as default};
