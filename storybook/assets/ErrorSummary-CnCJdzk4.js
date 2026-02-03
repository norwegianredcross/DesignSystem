import{j as e}from"./iframe-BfQiCNJv.js";import{useMDXComponents as l}from"./index-nA-wEA8z.js";import{M as o,P as t,C as d,a as i,A as m}from"./WithTooltip-SK46ZJ2J-C5IVWGF_.js";import{E as a,D as h,W as c,a as j}from"./ErrorSummary.stories-DZM4QwjH.js";import"./preload-helper-u0ftyAaf.js";import"./index-CDotbFv_.js";import"./index-B5drpwmP.js";import"./lite-DaUVFjkg.js";import"./heading-BCAQiqvx.js";import"./index-CrRCDzGP.js";import"./link-DX6kMly9.js";import"./textfield-ylpf_uMG.js";import"./index-DbVF7zUi.js";import"./use-merge-refs-DzAbbEXj.js";import"./paragraph-cS1fkdNe.js";import"./input-Kb41YZJa.js";import"./label-4f-Bb1jh.js";import"./textarea-CceaRdGe.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(r.h1,{id:"errorsummary",children:"ErrorSummary"}),`
`,e.jsxs(r.h4,{id:"errorsummary-gir-en-kort-samlet-oversikt-over-feil-som-må-rettes-før-brukeren-kan-gå-videre",children:[e.jsx(r.code,{children:"ErrorSummary"})," gir en kort, samlet oversikt over feil som må rettes før brukeren kan gå videre."]}),`
`,e.jsx(r.h4,{id:"den-hjelper-brukeren-å-forstå-hva-som-mangler-og-hvor-det-kan-rettes",children:"Den hjelper brukeren å forstå hva som mangler og hvor det kan rettes."}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"ErrorSummary"}),` settes vanligvis under hovedinnholdet og nær handlingsknapper (f.eks. “Send inn”).
Den består av følgende deler:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ErrorSummary.Heading"})," for overskrift"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ErrorSummary.List"})," som inneholder ",e.jsx(r.code,{children:"ErrorSummary.Item"})]}),`
`,e.jsxs(r.li,{children:["Hver ",e.jsx(r.code,{children:"ErrorSummary.Item"})," inneholder en ",e.jsx(r.code,{children:"ErrorSummary.Link"})," med ",e.jsx(r.code,{children:"href"})," som peker til et felt-id"]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ErrorSummary } from 'rk-designsystem';

<ErrorSummary>
  <ErrorSummary.Heading>
    For å gå videre må du rette opp følgende feil:
  </ErrorSummary.Heading>
  <ErrorSummary.List>
    <ErrorSummary.Item>
      <ErrorSummary.Link href="#some-field-id">Feilmelding</ErrorSummary.Link>
    </ErrorSummary.Item>
  </ErrorSummary.List>
</ErrorSummary>
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(r.h3,{id:"standard",children:"Standard"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(r.h3,{id:"bruk-sammen-med-skjemafelt",children:"Bruk sammen med skjemafelt"}),`
`,e.jsx(r.p,{children:"Vis lenker som peker direkte til relevante felt-id-er."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(r.p,{children:["Bruk ",e.jsx(r.code,{children:"ErrorSummary"})," når du vil presentere en oversikt over feil som hindrer innsending."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"å gi en tydelig liste over feil som må rettes før innsending"}),`
`,e.jsx(r.li,{children:"skjema med mange felt der det er lett å miste oversikten"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["systemvarsler – bruk ",e.jsx(r.a,{href:"/docs/komponenter-alert--docs",children:e.jsx(r.code,{children:"Alert"})})]}),`
`,e.jsx(r.li,{children:"informasjonsmeldinger som ikke blokkerer innsending"}),`
`]}),`
`,e.jsx(r.h3,{id:"plassering",children:"Plassering"}),`
`,e.jsxs(r.p,{children:["Vi anbefaler å vise ",e.jsx(r.code,{children:"ErrorSummary"})," like over Neste/Send inn-knappen, slik at sammenhengen mellom feil og handling blir tydelig. I noen tilfeller kan det være bedre å plassere den i toppen."]}),`
`,e.jsx(r.h3,{id:"synlighet",children:"Synlighet"}),`
`,e.jsxs(r.p,{children:["Oppsummeringen bør først vises etter at brukeren har forsøkt å sende inn, eller når det ellers er klart at feilene må rettes for å komme videre. Når den dukker opp, bør fokus flyttes til ",e.jsx(r.code,{children:"ErrorSummary"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(r.p,{children:["Når ",e.jsx(r.code,{children:"ErrorSummary"})," blir synlig anbefales det å flytte fokus til oppsummeringen, slik at skjermlesere leser den og brukeren kan navigere videre til hvert feilfelt via lenkene. Unngå å bruke live region for hele oppsummeringen da dette ofte blir for omfattende å høre på og vanskelig å navigere i."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"errorsummaryitem",children:e.jsx(r.code,{children:"ErrorSummary.Item"})}),`
`,e.jsx(m,{of:j.Item}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"css-variabler",children:"CSS-variabler"}),`
`,e.jsxs(r.p,{children:["Ingen dedikerte CSS-variabler er dokumentert for ",e.jsx(r.code,{children:"ErrorSummary"})," i denne demoen."]})]})}function H(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{H as default};
