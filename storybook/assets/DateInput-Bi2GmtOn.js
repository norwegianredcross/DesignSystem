import{j as e}from"./iframe-CEOBMeFO.js";import{useMDXComponents as l}from"./index-DycCdGdS.js";import{M as s,P as i,C as a}from"./WithTooltip-SK46ZJ2J-BIvn9ENY.js";import{D as d,a as o}from"./DateInput.stories-B4SR5fws.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CW1wQvHW.js";import"./index-DZoxv516.js";import"./Calendar-A6cpl5Rt.js";import"./useId-C19BhiJl.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"dateinput",children:"DateInput"}),`
`,e.jsxs(n.h4,{id:"dateinput-er-et-tekstfelt-for-datoer-med-norsk-formatering-ddmmåååå-den-kan-brukes-alene-eller-sammen-med-datepicker-for-å-gi-en-komplett-datovelger-opplevelse",children:[e.jsx(n.code,{children:"DateInput"})," er et tekstfelt for datoer, med norsk formatering (",e.jsx(n.code,{children:"dd.mm.åååå"}),"). Den kan brukes alene eller sammen med ",e.jsx(n.code,{children:"DatePicker"})," for å gi en komplett datovelger-opplevelse."]}),`
`,e.jsx(i,{}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
import { DateInput } from '@rk-designsystem';

import { useState } from 'react';



const MyDateField = () => {

  const [value, setValue] = useState('12.05.2023');



  return (

    <DateInput

      label="Startdato"

      value={value}

      onChange={(e, formattedValue) => setValue(formattedValue)}

      suffixIcon={<CalendarIcon />}

      onSuffixClick={() => console.log('Åpne kalender')}

    />

  );

}; \`\`\`

DateInput håndterer formatering, validering og tilbakesetting av datoer i sanntid. Komponenten støtter både kontrollerte og ukontrollerte verdier.

---

Kodeeksempler

Standard bruk
<Canvas of={DateInputStories.Default} />
Med beskrivelse
<Canvas of={DateInputStories.WithDescription} />
Med feilmelding
<Canvas of={DateInputStories.WithError} />
Med suffiksikon (for eksempel kalenderknapp)
<Canvas of={DateInputStories.WithSuffix} />
Deaktivert felt
<Canvas of={DateInputStories.Disabled} />
Egendefinert størrelse / farge
<Canvas of={DateInputStories.CustomSizeAndColor} />
Kontrollert komponent
<Canvas of={DateInputStories.Controlled} />
---

Props

De viktigste prop-ene inkluderer:

Prop	Type	Beskrivelse
label	React.ReactNode	Etiketten for feltet. Påkrevd for tilgjengelighet (eller bruk aria-label).
description	React.ReactNode	Valgfri hjelpetekst som vises under etiketten.
error	React.ReactNode	Viser feilmelding og setter aria-invalid.
value	string | null	Kontrollert verdi (dd.mm.yyyy).
defaultValue	string | null	Ukontrollert startverdi.
onChange	(event, formattedValue) => void	Kalles ved endring. Tilbyr formatert verdi.
suffixIcon	React.ReactNode	Et ikon (ofte en kalender).
onSuffixClick	() => void	Klikkfunksjon for suffix-knapp.
data-size	'sm' | 'md' | 'lg'	Visuell størrelse.
data-color	'accent' | 'brand1' | 'brand2' | 'brand3' | 'neutral'	Fargetema.

---

## Mønstre

Kombinert med DatePicker

Når DateInput brukes sammen med DatePicker, håndteres verdien i state slik at tekstfeltet og kalenderen alltid gjenspeiler samme dato.

\`\`\`tsx
	const DateInputCombo = () => {
	  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	  const [inputValue, setInputValue] = useState('');
	
	  const handleInputChange = (_e, formatted) => {
	    setInputValue(formatted);
	    const parsed = parse(formatted, 'dd.MM.yyyy', new Date());
	    if (isValid(parsed)) setSelectedDate(parsed);
	  };
	
	  return (
	    <>
	      <DateInput
	        label="Velg dato"
	        value={inputValue}
	        onChange={handleInputChange}
	        suffixIcon={<CalendarIcon />}
	      />
	      <DatePicker
	        selectedDate={selectedDate}
	        onDateSelect={setSelectedDate}
	      />
	    </>
	  );
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
`]})]})}function g(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
