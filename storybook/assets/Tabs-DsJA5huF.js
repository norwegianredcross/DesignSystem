import{j as e}from"./iframe-ChvgMmnn.js";import{useMDXComponents as l}from"./index-CFP5PK3R.js";import{M as a,P as t,C as d,a as r,A as o}from"./WithTooltip-SK46ZJ2J-CKv9uv29.js";import{T as h,I as j,C as c,L as x,a as b}from"./Tabs.stories-BQHA3FuE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DeBbXoRN.js";import"./lite-DaUVFjkg.js";import"./roving-focus-item-BaeuttR0.js";import"./index-BmFlSXyS.js";import"./use-merge-refs-2W1vqi6v.js";import"./Newspaper-CIknTHAL.js";import"./useId-cHoRHciD.js";import"./button-BzHjNFPj.js";import"./spinner-C7xudNgn.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.h4,{id:"tabs-lar-brukeren-navigere-mellom-relaterte-deler-av-innhold-der-én-del-vises-om-gangen-dette-hjelper-å-organisere-informasjon-på-samme-side-uten-sideskift",children:[e.jsx(n.code,{children:"Tabs"})," lar brukeren navigere mellom relaterte deler av innhold der én del vises om gangen. Dette hjelper å organisere informasjon på samme side uten sideskift."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from 'rk-designsystem';

<Tabs defaultValue="value1">
  <Tabs.List>
    <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
    <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="value1">content 1</Tabs.Panel>
  <Tabs.Panel value="value2">content 2</Tabs.Panel>
  <Tabs.Panel value="value3">content 3</Tabs.Panel>
</Tabs>
`})}),`
`,e.jsxs(n.p,{children:["Hvis du ikke bruker React, kan du benytte den tilsvarende web‑komponenten (",e.jsx(n.code,{children:"u-tabs"}),") og legge til klassen ",e.jsx(n.code,{children:"ds-tabs"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"kun-ikoner",children:"Kun ikoner"}),`
`,e.jsxs(n.p,{children:["Bruk bare ikoner for et kompakt uttrykk. Sørg for at ikonene er dekorative (",e.jsx(n.code,{children:"aria-hidden"}),") eller at tittelen beskriver innholdet."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"kontrollert",children:"Kontrollert"}),`
`,e.jsxs(n.p,{children:["Styr valgt tab programmatisk via ",e.jsx(n.code,{children:"value"}),"/",e.jsx(n.code,{children:"onChange"}),"."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"størrelser",children:"Størrelser"}),`
`,e.jsxs(n.p,{children:["Endre størrelse med ",e.jsx(n.code,{children:"data-size"}),"."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"tabs-1",children:e.jsx(n.code,{children:"Tabs"})}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"Tabs"})," for å strukturere relatert innhold i tydelige seksjoner uten nytt sideskift."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til å"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"strukturere innhold på samme side"}),`
`,e.jsx(n.li,{children:"gjøre navigasjonen enklere når ikke alt må vises samtidig"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til å"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"gi umiddelbar oversikt (tabs skjuler innhold)"}),`
`,e.jsx(n.li,{children:"sammenligne informasjon på tvers av seksjoner"}),`
`,e.jsx(n.li,{children:"steg‑for‑steg‑prosesser eller hovednavigasjon"}),`
`]}),`
`,e.jsx(n.h3,{id:"beste-praksis",children:"Beste praksis"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Begrens antall tabs."}),`
`,e.jsx(n.li,{children:"Bruk korte, presise navn."}),`
`,e.jsx(n.li,{children:"Plasser det viktigste først."}),`
`,e.jsx(n.li,{children:"Unngå deaktiverte tabs."}),`
`,e.jsx(n.li,{children:"Hold tabs på én linje for god skannbarhet."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tabs"})," støtter tastaturnavigasjon. Hver tab skal ha en unik tittel. Dersom et panel ikke har fokuserbare elementer, får selve panelet fokus."]}),`
`,e.jsx(n.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Tab"})," flytter fokus til neste interaktive element"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"→"})," neste tab"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"←"})," forrige tab"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Home"})," første tab"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"End"})," siste tab"]}),`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Enter"})," eller ",e.jsx("kbd",{children:"Space"})," aktiverer valgt tab"]}),`
`]})]})}function D(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{D as default};
