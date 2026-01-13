import{j as e}from"./iframe-C1QSOCmb.js";import{useMDXComponents as l}from"./index-Dcf3Lmu4.js";import{M as s,P as i,C as a}from"./WithTooltip-SK46ZJ2J-CP6d4W44.js";import{D as d,a as o}from"./DateInput.stories-BbsdOOtE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D0j_awZg.js";import"./index-CKSAbBAG.js";import"./Calendar-CxsJlsGz.js";import"./useId-VhyOdmiG.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"dateinput",children:"DateInput"}),`
`,e.jsxs(n.h4,{id:"dateinput-er-et-tekstfelt-for-datoer-med-norsk-formatering-ddmmåååå-den-kan-brukes-alene-eller-sammen-med-datepicker-for-å-gi-en-komplett-datovelger-opplevelse",children:[e.jsx(n.code,{children:"DateInput"})," er et tekstfelt for datoer, med norsk formatering (",e.jsx(n.code,{children:"dd.mm.åååå"}),"). Den kan brukes alene eller sammen med ",e.jsx(n.code,{children:"DatePicker"})," for å gi en komplett datovelger-opplevelse."]}),`
`,e.jsx(i,{}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`\r
import { DateInput } from '@rk-designsystem';\r
\r
import { useState } from 'react';\r
\r
\r
\r
const MyDateField = () => {\r
\r
  const [value, setValue] = useState('12.05.2023');\r
\r
\r
\r
  return (\r
\r
    <DateInput\r
\r
      label="Startdato"\r
\r
      value={value}\r
\r
      onChange={(e, formattedValue) => setValue(formattedValue)}\r
\r
      suffixIcon={<CalendarIcon />}\r
\r
      onSuffixClick={() => console.log('Åpne kalender')}\r
\r
    />\r
\r
  );\r
\r
}; \`\`\`\r
\r
DateInput håndterer formatering, validering og tilbakesetting av datoer i sanntid. Komponenten støtter både kontrollerte og ukontrollerte verdier.\r
\r
---\r
\r
Kodeeksempler\r
\r
Standard bruk\r
<Canvas of={DateInputStories.Default} />\r
Med beskrivelse\r
<Canvas of={DateInputStories.WithDescription} />\r
Med feilmelding\r
<Canvas of={DateInputStories.WithError} />\r
Med suffiksikon (for eksempel kalenderknapp)\r
<Canvas of={DateInputStories.WithSuffix} />\r
Deaktivert felt\r
<Canvas of={DateInputStories.Disabled} />\r
Egendefinert størrelse / farge\r
<Canvas of={DateInputStories.CustomSizeAndColor} />\r
Kontrollert komponent\r
<Canvas of={DateInputStories.Controlled} />\r
---\r
\r
Props\r
\r
De viktigste prop-ene inkluderer:\r
\r
Prop	Type	Beskrivelse\r
label	React.ReactNode	Etiketten for feltet. Påkrevd for tilgjengelighet (eller bruk aria-label).\r
description	React.ReactNode	Valgfri hjelpetekst som vises under etiketten.\r
error	React.ReactNode	Viser feilmelding og setter aria-invalid.\r
value	string | null	Kontrollert verdi (dd.mm.yyyy).\r
defaultValue	string | null	Ukontrollert startverdi.\r
onChange	(event, formattedValue) => void	Kalles ved endring. Tilbyr formatert verdi.\r
suffixIcon	React.ReactNode	Et ikon (ofte en kalender).\r
onSuffixClick	() => void	Klikkfunksjon for suffix-knapp.\r
data-size	'sm' | 'md' | 'lg'	Visuell størrelse.\r
data-color	'accent' | 'brand1' | 'brand2' | 'brand3' | 'neutral'	Fargetema.\r
\r
---\r
\r
## Mønstre\r
\r
Kombinert med DatePicker\r
\r
Når DateInput brukes sammen med DatePicker, håndteres verdien i state slik at tekstfeltet og kalenderen alltid gjenspeiler samme dato.\r
\r
\`\`\`tsx\r
	const DateInputCombo = () => {\r
	  const [selectedDate, setSelectedDate] = useState<Date | null>(null);\r
	  const [inputValue, setInputValue] = useState('');\r
	\r
	  const handleInputChange = (_e, formatted) => {\r
	    setInputValue(formatted);\r
	    const parsed = parse(formatted, 'dd.MM.yyyy', new Date());\r
	    if (isValid(parsed)) setSelectedDate(parsed);\r
	  };\r
	\r
	  return (\r
	    <>\r
	      <DateInput\r
	        label="Velg dato"\r
	        value={inputValue}\r
	        onChange={handleInputChange}\r
	        suffixIcon={<CalendarIcon />}\r
	      />\r
	      <DatePicker\r
	        selectedDate={selectedDate}\r
	        onDateSelect={setSelectedDate}\r
	      />\r
	    </>\r
	  );\r
	};
`})}),`
`,e.jsx(n.p,{children:"Dette mønsteret er brukt i historien “Example Combined Input + Calendar” i DatePicker-dokumentasjonen."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tilgjengelighet",children:"Tilgjengelighet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"En label, aria-label eller aria-labelledby er nødvendig for å unngå advarsler."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"aria-invalid settes når error-prop er aktiv."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"aria-describedby kobler hjelpetekst (description) og feilmelding til input-elementet."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'role="alert" brukes på feilmelding for skjermlesere.'}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"css--design-tokens",children:"CSS / Design Tokens"}),`
`,e.jsx(n.p,{children:"DateInput bruker CSS-moduler (styles.module.css) som refererer til tokens fra designsystemet."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-color-text-default"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-color-border-default"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-color-danger-border-default"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-color-background-default"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-color-surface-hover"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-opacity-disabled"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-border-radius-md"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-font-size-sm"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"--ds-font-weight-medium, osv."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Dette sikrer visuell konsistens med andre felter i designsystemet."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,e.jsx(n.p,{children:"Gjør dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Bruk DateInput når brukeren skal skrive datoer direkte."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'Bruk placeholder="dd.mm.åååå" som et hjelpetips.'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Gi alltid en label eller aria-label."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Unngå dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ikke bruk DateInput alene i situasjoner der en bruker forventer en visuell kalender – kombiner med DatePicker."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ikke la komponenten være uten onChange i kontrollerte scenarier."}),`
`]}),`
`]})]})}function g(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
