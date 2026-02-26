import{r as A,j as e}from"./iframe-DH11Z3_n.js";import{T as q}from"./index-DegjZlZR.js";import{D as I}from"./divider-BK3nFdEM.js";import{P as J}from"./paragraph-BDXgqREN.js";import{B as F}from"./button-DoBzlCbO.js";const G={title:"Components/Textfield",component:q,tags:["autodocs"],parameters:{docs:{description:{component:"Textfield is a composed component for text input or textarea, including label, description, validation, affixes, and counter."}},layout:"padded"},argTypes:{label:{control:"text",description:"Label for the textfield (use this OR aria-label)",defaultValue:"Label"},disabled:{control:"boolean",description:"Disables the textfield",defaultValue:!1},readOnly:{control:"boolean",description:"Makes the textfield read-only",defaultValue:!1},multiline:{control:"boolean",description:"Renders a Textarea instead of Input",defaultValue:!1},description:{control:"text",description:"Description displayed below the label"},error:{control:"text",description:"Error message displayed below the input"},counter:{control:"number",description:"Enables character counter with optional limit"},prefix:{control:"text",description:"Prefix displayed before the input"},suffix:{control:"text",description:"Suffix displayed after the input"},"aria-label":{control:"text",if:{arg:"label",exists:!1}},"aria-labelledby":{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Input type (ignored if multiline is true)",defaultValue:"text",if:{arg:"multiline",eq:!1}},size:{control:"number",description:"HTML size attribute (input width in characters)",if:{arg:"multiline",eq:!1}},rows:{control:"number",description:"HTML rows attribute (textarea height in lines)",if:{arg:"multiline",eq:!0}},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},maxLength:{control:"number"},id:{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},r={args:{label:"Navn",name:"name-default",placeholder:"Skriv inn navnet ditt"}},a={args:{label:"Beskrivelse",name:"description-multiline",multiline:!0,rows:4,placeholder:"Skriv en lengre beskrivelse..."}},t={args:{label:"Hvor mange kroner koster det per måned?",name:"cost-affix",prefix:"NOK",suffix:"pr. mnd",type:"number"},name:"With Prefix/Suffix"},n={args:{label:"Melding (maks 100 tegn)",name:"message-counter",multiline:!0,rows:3,counter:100,maxLength:100},name:"With Character Counter"},s={args:{label:"E-post",name:"email-desc",description:"Vi sender en bekreftelse til denne adressen.",type:"email"}},l={args:{label:"Telefonnummer *",name:"phone-error",error:"Telefonnummer kan kun inneholde siffer.",required:!0,type:"tel","aria-invalid":!0},name:"With Error"},o={args:{label:"Deaktivert felt",name:"disabled-field",disabled:!0,defaultValue:"Kan ikke endres"}},i={args:{label:"Kun lesbart felt",name:"readonly-field",readOnly:!0,defaultValue:"Denne verdien er satt."}},d={render:B=>{const[c,u]=A.useState(""),{label:U,value:X,onChange:Y,...H}=B;return e.jsxs(e.Fragment,{children:[e.jsx(q,{label:"Kontroller meg!",value:c,onChange:N=>u(N.target.value),...H}),e.jsx(I,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(J,{style:{margin:"0"},children:["Du har skrevet inn: ",c||"(ingenting)"]}),e.jsx(F,{onClick:()=>u("Kake"),style:{marginTop:"var(--ds-size-2)"},children:"Jeg vil ha Kake"})]})},args:{name:"controlled-field",placeholder:"Skriv noe...","data-size":"md"}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Navn',
    name: 'name-default',
    placeholder: 'Skriv inn navnet ditt'
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Beskrivelse',
    name: 'description-multiline',
    multiline: true,
    rows: 4,
    placeholder: 'Skriv en lengre beskrivelse...'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,v,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'cost-affix',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    type: 'number'
  },
  name: 'With Prefix/Suffix'
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,S,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Melding (maks 100 tegn)',
    name: 'message-counter',
    multiline: true,
    rows: 3,
    counter: 100,
    maxLength: 100
  },
  name: 'With Character Counter'
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,D,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'E-post',
    name: 'email-desc',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email'
  }
}`,...(V=(D=s.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,E,w;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Telefonnummer *',
    name: 'phone-error',
    error: 'Telefonnummer kan kun inneholde siffer.',
    required: true,
    type: 'tel',
    'aria-invalid': true
  },
  name: 'With Error'
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var z,K,_;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Deaktivert felt',
    name: 'disabled-field',
    disabled: true,
    defaultValue: 'Kan ikke endres'
  }
}`,...(_=(K=o.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var M,O,j;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Kun lesbart felt',
    name: 'readonly-field',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.'
  }
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var L,P,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>('');
    // Destructure relevant props from args instead of spreading all
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      label: _label,
      value: _value,
      onChange: _onChange,
      ...rest
    } = args;
    return <>
        <Textfield label="Kontroller meg!" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)} {...rest as Record<string, unknown>} />
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />
        <Paragraph style={{
        margin: '0'
      }}>
          Du har skrevet inn: {value || '(ingenting)'}
        </Paragraph>
        <Button onClick={() => setValue('Kake')} style={{
        marginTop: 'var(--ds-size-2)'
      }}>
          Jeg vil ha Kake
        </Button>
      </>;
  },
  args: {
    name: 'controlled-field',
    placeholder: 'Skriv noe...',
    // label, value, onChange are handled in render
    // Set other defaults for controllable props if desired
    'data-size': 'md'
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const Q=["Default","Multiline","WithAffixes","WithCounter","WithDescription","WithError","Disabled","ReadOnly","Controlled"],te=Object.freeze(Object.defineProperty({__proto__:null,Controlled:d,Default:r,Disabled:o,Multiline:a,ReadOnly:i,WithAffixes:t,WithCounter:n,WithDescription:s,WithError:l,__namedExportsOrder:Q,default:G},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D,a as M,i as R,te as T,t as W,n as a,s as b,l as c};
