import{j as e}from"./iframe-CBGaWaW7.js";import{useMDXComponents as i}from"./index-PCYASs7K.js";import{M as s,P as d,C as a,a as l,A as t}from"./WithTooltip-SK46ZJ2J-DcuYUxg2.js";import{D as c,P as k,C as g,a as h,W as m,N as j,b as x}from"./Dialog.stories-DA-nysDg.js";import"./preload-helper-u0ftyAaf.js";import"./index-nTUKsViJ.js";import"./index-CZinNVLW.js";import"./lite-DaUVFjkg.js";import"./button-D8VkXX8s.js";import"./spinner-x1M3DBtB.js";import"./use-merge-refs-SrpU7KdC.js";import"./index-CotA_VjU.js";import"./heading-DKkPspis.js";import"./paragraph-C3CKGnQx.js";import"./textfield-CPPdwlr3.js";import"./index-06_PkbYB.js";import"./input-Hb83ZrL7.js";import"./label-BLjAEBOO.js";import"./textarea-DPyEn-Am.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Dialog"})," lar deg lage modale og ikke-modale dialoger basert på HTML-elementet ",e.jsx(n.code,{children:"dialog"}),"."]}),`
`,e.jsx(d,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
<Dialog.TriggerContext>

  <Dialog.Trigger>Open Dialog</Dialog.Trigger>

  <Dialog>

    <Dialog.Block>

      <Heading data-size="xs">Header</Heading>

    </Dialog.Block>

    <Dialog.Block>Content</Dialog.Block>

    <Dialog.Block>Footer</Dialog.Block>

  </Dialog>

</Dialog.TriggerContext>
`})}),`
`,e.jsxs(n.p,{children:["Dersom du kun trenger å åpne og lukke dialogen gjennom brukerinteraksSjon, kan du bruke ",e.jsx(n.code,{children:"Trigger"}),"-komponenten vår. Om du trenger programmatisk kontroll over åpning og lukking av modalen kan du bruke ",e.jsx(n.code,{children:"open"}),"-propen, eller en ",e.jsx(n.code,{children:"ref"})," som gir tilgang på HTML-elementets ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement#instance_methods",rel:"nofollow",children:"instance-metoder"})," (f.eks. ",e.jsx(n.code,{children:".show()"}),", ",e.jsx(n.code,{children:".showModal()"})," og ",e.jsx(n.code,{children:".close()"}),"). Les mer om ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",rel:"nofollow",children:"Dialog på MDN Docs"}),"."]}),`
`,e.jsxs(n.p,{children:["Du bytter mellom modal og ikke-modal dialog ved å bruke ",e.jsx(n.code,{children:"modal"}),"-propen, som er satt til ",e.jsx(n.code,{children:"true"})," som standard. Vi overstyrer hvordan ",e.jsx(n.code,{children:"open"})," fungerer basert på verdien til ",e.jsx(n.code,{children:"modal"}),"."]}),`
`,e.jsxs(n.p,{children:["En modal ",e.jsx(n.code,{children:"dialog"}),' har innebygd "focus trap", som betyr at brukeren ikke kan navigere med tabulator til annet innhold på siden mens dialogen er åpen.']}),`
`,e.jsx(n.h3,{id:"bruk-med-ekstern-trigger",children:"Bruk med ekstern trigger"}),`
`,e.jsxs(n.p,{children:["Dersom du vil bruke en ekstern trigger, som for eksempel ligger en annen plass i treet, kan du bruke ",e.jsx(n.code,{children:"ref"})," for å åpne dialogen."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const dialogRef = useRef<HTMLDialogElement>(null);

...

<Button onClick={() => dialogRef.current?.showModal()}>Open Dialog</Button>
<Dialog ref={dialogRef}>
  Content
</Dialog>
`})}),`
`,e.jsxs(n.h4,{id:"med-bruk-av-ref",children:["Med bruk av ",e.jsx(n.code,{children:"ref"})]}),`
`,e.jsx(l,{of:k}),`
`,e.jsx(n.h3,{id:"lukk-knapp",children:"Lukk knapp"}),`
`,e.jsxs(n.p,{children:["For å legge til egen lukk knapp, kan du enten bruke ",e.jsx(n.code,{children:"ref"})," og ",e.jsx(n.code,{children:"Dialog.close()"})," på en knapp du lager selv, eller legge på ",e.jsx(n.code,{children:'data-command="close"'}),` på en knapp inni dialogen.
Dersom knappen er tom vil den få et ikon.
Dersom knappen er direkte barn av dialogen og første element, vil den flyte til topp høyre.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"data-command"})," er inspirert av ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API",rel:"nofollow",children:"Invoker Commands (mozilla.org)"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Dialog>
  <Dialog.Block>
    <Heading>Header</Heading>
  </Dialog.Block>
  <Dialog.Block>
    <Button data-command="close">Lukk</Button>
  </Dialog.Block>
</Dialog>
`})}),`
`,e.jsx(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e.jsx(n.h3,{id:"lukk-ved-klikk-utenfor",children:"Lukk ved klikk utenfor"}),`
`,e.jsxs(n.p,{children:["Vi bruker ",e.jsx(n.code,{children:'closedby="any"'}),` for å lukke dialogen når brukeren klikker utenfor.
Dette fungerer kun når `,e.jsx(n.code,{children:"modal={true}"}),", fordi en ikke-modal dialog ikke har noe ",e.jsx(n.code,{children:":backdrop"}),"."]}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(n.h3,{id:"med-inndeling",children:"Med inndeling"}),`
`,e.jsxs(n.p,{children:["Bruk flere ",e.jsx(n.code,{children:"Dialog.Block"})," hvis du vil dele opp dialogen med skillelinjer til for eksempel topp- og bunn-område. Merk at innhold kan ikke plasseres direkte i ",e.jsx(n.code,{children:"Dialog"})," dersom du bruker ",e.jsx(n.code,{children:"Dialog.Block"}),"; da burde alt innholdet være inni en av av dialogens ",e.jsx(n.code,{children:"Dialog.Block"}),"-seksjoner."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"fokus",children:"Fokus"}),`
`,e.jsxs(n.p,{children:["Vi bruker native ",e.jsx(n.code,{children:"autoFocus"})," på ",e.jsx(n.code,{children:"Textfield"})," for å fokusere inputen i skjemaet."]}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h3,{id:"ikke-modal-dialog",children:"Ikke-modal Dialog"}),`
`,e.jsxs(n.p,{children:["Bruk ",e.jsx(n.code,{children:"modal={false}"})," for å lage en ikke-modal dialog."]}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h3,{id:"dialogblock",children:e.jsx(n.code,{children:"Dialog.Block"})}),`
`,e.jsx(t,{of:x.Block}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Dialog"})," kan brukes som både ",e.jsx(n.strong,{children:"(1) modal"})," og ",e.jsx(n.strong,{children:"(2) ikke-modal"}),"."]}),`
`,e.jsx(n.h3,{id:"1-modal-dialog",children:"1 Modal Dialog"}),`
`,e.jsxs(n.p,{children:["En modal ",e.jsx(n.code,{children:"Dialog"})," er et midlertidig vindu som åpnes over resten av innholdet på nettsiden. Modal ",e.jsx(n.code,{children:"Dialog"})," fanger brukerens oppmerksomhet og hindrer interaksjon med annet innhold, samtidig som konteksten til nettsiden beholdes. Bruk av modal ",e.jsx(n.code,{children:"Dialog"})," bør generelt begrenses, men kan være nyttig når brukeren må ta stilling til informasjon, bekrefte en handling eller fokusere på en spesifikk oppgave - uten å navigere bort fra siden."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til å"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"få brukeren til å fokusere på en spesifikk oppgave"}),`
`,e.jsx(n.li,{children:"sikre at brukeren får med seg viktig informasjon"}),`
`,e.jsx(n.li,{children:"gi mer informasjon uten at brukeren må forlate hovedinnholdet"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"omfattende eller komplekst innhold som krever langvarig interaksjon"}),`
`,e.jsxs(n.li,{children:["å gi informasjon uten å avbryte brukerens arbeidsflyt - bruk heller ",e.jsx(n.a,{href:"/docs/komponenter-alert--docs",children:e.jsx(n.code,{children:"Alert"})}),", ",e.jsx(n.a,{href:"/docs/komponenter-popover--docs",children:e.jsx(n.code,{children:"Popover"})}),', eller "ikke-modal" ',e.jsx(n.code,{children:"Dialog"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-ikke-modal-dialog",children:"2 Ikke-modal Dialog"}),`
`,e.jsxs(n.p,{children:['En "ikke-modal" ',e.jsx(n.code,{children:"Dialog"})," lar brukeren fortsatt bruke resten av siden mens dialogen er åpen. Den bør brukes med varsomhet, og passer best når du skal gi støtteinformasjon eller ekstra funksjonalitet som ikke krever full oppmerksomhet."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer til å"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"gi brukeren tilgang til informasjon eller handlinger parallelt med resten av innholdet"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Passer ikke til"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["kritiske valg som brukeren må ta stilling til før de kan fortsette - bruk heller modal ",e.jsx(n.code,{children:"Dialog"})]}),`
`,e.jsxs(n.li,{children:["bekreftelser eller varsler som krever brukerens fulle oppmerksomhet - bruk heller modal ",e.jsx(n.code,{children:"Dialog"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ha en kort og konsis overskrift. Overskriften skal gjøre det tydelig for brukeren at konteksten er endret."}),`
`,e.jsx(n.li,{children:"Unngå mange avsnitt med tekst."}),`
`,e.jsx(n.li,{children:"Sørg for at formålet er tydelig og at all nødvendig informasjon er tilgjelig i modalen."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsx(n.h3,{id:"tastaturnavigasjon",children:"Tastaturnavigasjon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("kbd",{children:"Esc"})," lukker dialogen (fokus returnerer til utløser)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variabler",children:"CSS Variabler"}),`
`]})}function A(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{A as default};
