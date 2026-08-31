import{j as e}from"./iframe-BtWbltxT.js";import{useMDXComponents as s}from"./index-BBErk6aI.js";import{M as i,P as t,C as o}from"./blocks-ks0SQ5P6.js";import{D as a}from"./Donor.stories-FEngzbAK.js";import"./preload-helper-u0ftyAaf.js";import"./index-KcV78_Qh.js";import"./index-B1F2MRad.js";import"./index-CIywhfPL.js";import"./tooltip-CHhSwgSy.js";import"./index-lP_CV3fV.js";import"./index-BlCg1ZVW.js";import"./index-CL0EQd2l.js";import"./index-C9--E0XA.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"donor",children:"Donor"}),`
`,e.jsx(n.h4,{id:"donasjonsmodul-for-røde-kors-flater-beløpsvalg-faste-beløp-eller-valgfritt-frekvens-én-gang--månedlig-vipps-knapp-og-avtalegiro-lenke",children:"Donasjonsmodul for Røde Kors-flater: beløpsvalg (faste beløp eller valgfritt), frekvens (én gang / månedlig), Vipps-knapp og AvtaleGiro-lenke."}),`
`,e.jsx(t,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.p,{children:`Donor er en selvstendig modul som eier hele beløps- og frekvensvalget. Appen
trenger bare å reagere på callbacks — komponenten garanterer at beløpet aldri
er 0 når en callback fyres.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Donor } from 'rk-designsystem';

const DonationSection = () => (
  <Donor
    amounts={[
      { value: 220, label: '220 kr' },
      { value: 345, label: '345 kr' },
      { value: 660, label: '660 kr' },
    ]}
    defaultAmount={345}
    impactMessage="En gave på {amount} bidrar til at Røde Kors kan hjelpe mennesker i nød"
    onVippsClick={(amount, frequency) => startVippsPayment(amount, frequency)}
    onAmountChange={(amount, frequency) => trackSelection(amount, frequency)}
  />
);
`})}),`
`,e.jsx(n.h3,{id:"beløp-og-frekvens",children:"Beløp og frekvens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Faste beløp"})," (",e.jsx(n.code,{children:"amounts"}),`) rendres som knapper; valgt beløp er markert med
`,e.jsx(n.code,{children:"aria-pressed"})," og ",e.jsx(n.code,{children:"defaultAmount"})," styrer startvalget."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Valgfritt beløp"}),` overstyrer det faste valget så lenge feltet har en
gyldig verdi; tømmes feltet, faller valget tilbake til forrige faste beløp.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onAmountChange(amount, frequency)"}),` fyres ved hvert gyldige valg —
`,e.jsx(n.code,{children:"frequency"})," er ",e.jsx(n.code,{children:"'one-time'"})," eller ",e.jsx(n.code,{children:"'monthly'"}),` (fanene «En gang» / «Hver
måned»).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"impactMessage"})," interpolerer ",e.jsx(n.code,{children:"{amount}"}),` med gjeldende beløp og oppdateres
ved hvert valg.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"vipps-og-avtalegiro",children:"Vipps og AvtaleGiro"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onVippsClick(amount, frequency)"}),` fyres kun med et beløp større enn 0 —
komponenten starter ikke betalingen selv.`]}),`
`,e.jsxs(n.li,{children:[`Vipps-knappen bruker Vipps' offisielle oransje. Fargen er et bevisst
merkevareunntak fra kontrastkravet (markert
`,e.jsx(n.code,{children:'data-brand-exception="vipps"'}),`, dokumentert i TESTING.md) — ikke overstyr
den.`]}),`
`,e.jsxs(n.li,{children:["AvtaleGiro-lenken (",e.jsx(n.code,{children:"avtalegiroHref"}),"/",e.jsx(n.code,{children:"onAvtalegiroClick"}),`) kan skjules med
`,e.jsx(n.code,{children:"showAvtalegiroLink={false}"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"tema",children:"Tema"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"data-color"}),` tar et reelt temaskop fra designtokens og setter fargeskopet for
hele modulen:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Donor data-color="primary-color-red" />   {/* standard */}
<Donor data-color="neutral" />
<Donor data-color="additional-color-ocean" />
`})}),`
`,e.jsxs(n.p,{children:["Den gamle verdien ",e.jsx(n.code,{children:"'primary'"}),` er et utfaset alias for
`,e.jsx(n.code,{children:"'primary-color-red'"})," og fjernes i en senere minor."]}),`
`,e.jsx(n.h2,{id:"gjør--ikke-gjør",children:"Gjør / ikke gjør"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gjør:"})," la ",e.jsx(n.code,{children:"impactMessage"}),` beskrive konkret effekt av beløpet — det er
modulens viktigste motivasjonstekst.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gjør:"})," send brukeren rett til betaling i ",e.jsx(n.code,{children:"onVippsClick"}),`; komponenten har
allerede validert beløpet.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke gjør:"}),` ikke legg egne beløpsknapper eller egne valideringslag rundt
modulen — bruk `,e.jsx(n.code,{children:"amounts"})," og callbacks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ikke gjør:"})," ikke endre Vipps-knappens farger eller tekstlogo."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Frekvensvalget er ekte faner (Digdir Tabs) der begge panelene finnes i
DOM-en — `,e.jsx(n.code,{children:"aria-controls"})," peker alltid på et eksisterende panel."]}),`
`,e.jsxs(n.li,{children:["Beløpsgruppen er koblet til ledeteksten (",e.jsx(n.code,{children:"amountLabel"}),`) med
`,e.jsx(n.code,{children:"aria-labelledby"}),", og valgt beløp annonseres via ",e.jsx(n.code,{children:"aria-pressed"}),"."]}),`
`,e.jsx(n.li,{children:`Hele modulen er dekket av axe-gaten i testsuiten (med Vipps-unntaket
over som eneste presise unntak).`}),`
`]})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{y as default};
