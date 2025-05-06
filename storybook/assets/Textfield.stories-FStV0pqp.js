import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./index-D4lIrffr.js";import{T as ae}from"./Textfield-BbSKMBlZ.js";import{D as te}from"./Divider-ZGno9OH3.js";import{P as ne}from"./Paragraph-CJciD5B6.js";import{B as ie}from"./Button-_80U_wOV.js";import"./index-CMMlhluM.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./lite-DaUVFjkg.js";import"./index-Cb-ENzfG.js";import"./Label-DnboOLtM.js";import"./Textarea-ik62Jeuf.js";import"./Input-FgPaU4ty.js";import"./Spinner-Dj2HLJn9.js";const H=ae,Se={title:"Components/Textfield",component:H,tags:["autodocs"],parameters:{docs:{description:{component:"Textfield is a composed component for text input or textarea, including label, description, validation, affixes, and counter."}},layout:"padded"},argTypes:{label:{control:"text",description:"Label for the textfield (use this OR aria-label)",defaultValue:"Label"},disabled:{control:"boolean",description:"Disables the textfield",defaultValue:!1},readOnly:{control:"boolean",description:"Makes the textfield read-only",defaultValue:!1},multiline:{control:"boolean",description:"Renders a Textarea instead of Input",defaultValue:!1},description:{control:"text",description:"Description displayed below the label"},error:{control:"text",description:"Error message displayed below the input"},counter:{control:"number",description:"Enables character counter with optional limit"},prefix:{control:"text",description:"Prefix displayed before the input"},suffix:{control:"text",description:"Suffix displayed after the input"},"aria-label":{control:"text",if:{arg:"label",exists:!1}},"aria-labelledby":{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Input type (ignored if multiline is true)",defaultValue:"text",if:{arg:"multiline",eq:!1}},size:{control:"number",description:"HTML size attribute (input width in characters)",if:{arg:"multiline",eq:!1}},rows:{control:"number",description:"HTML rows attribute (textarea height in lines)",if:{arg:"multiline",eq:!0}},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},maxLength:{control:"number"},id:{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},r={args:{label:"Navn",name:"name-default",placeholder:"Skriv inn navnet ditt"}},a={args:{label:"Beskrivelse",name:"description-multiline",multiline:!0,rows:4,placeholder:"Skriv en lengre beskrivelse..."}},t={args:{label:"Hvor mange kroner koster det per måned?",name:"cost-affix",prefix:"NOK",suffix:"pr. mnd",type:"number"},name:"With Prefix/Suffix"},n={args:{label:"Melding (maks 100 tegn)",name:"message-counter",multiline:!0,rows:3,counter:100,maxLength:100},name:"With Character Counter"},i={args:{label:"E-post",name:"email-desc",description:"Vi sender en bekreftelse til denne adressen.",type:"email"}},l={args:{label:"Telefonnummer *",name:"phone-error",error:"Telefonnummer kan kun inneholde siffer.",required:!0,type:"tel","aria-invalid":!0},name:"With Error"},o={args:{label:"Deaktivert felt",name:"disabled-field",disabled:!0,defaultValue:"Kan ikke endres"}},s={args:{label:"Kun lesbart felt",name:"readonly-field",readOnly:!0,defaultValue:"Denne verdien er satt."}},d={render:R=>{const[c,u]=re.useState(""),{name:I,"data-size":N,placeholder:A,required:J,disabled:_,readOnly:F,multiline:$,maxLength:G,counter:Q,prefix:U,suffix:X,error:Y,description:Z}=R;return e.jsxs(e.Fragment,{children:[e.jsx(H,{label:"Kontroller meg!",value:c,onChange:ee=>u(ee.target.value),name:I,"data-size":N,placeholder:A,required:J,disabled:_,readOnly:F,multiline:$,maxLength:G,counter:Q,prefix:U,suffix:X,error:Y,description:Z}),e.jsx(te,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(ne,{style:{margin:"0"},children:["Du har skrevet inn: ",c||"(ingenting)"]}),e.jsx(ie,{onClick:()=>u("Kake"),style:{marginTop:"var(--ds-size-2)"},children:"Jeg vil ha Kake"})]})},args:{name:"controlled-field",placeholder:"Skriv noe...","data-size":"md"}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Navn',
    name: 'name-default',
    placeholder: 'Skriv inn navnet ditt'
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Beskrivelse',
    name: 'description-multiline',
    multiline: true,
    rows: 4,
    placeholder: 'Skriv en lengre beskrivelse...'
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,v,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'cost-affix',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    type: 'number'
  },
  name: 'With Prefix/Suffix'
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,S,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Melding (maks 100 tegn)',
    name: 'message-counter',
    multiline: true,
    rows: 3,
    counter: 100,
    maxLength: 100
  },
  name: 'With Character Counter'
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,z,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'E-post',
    name: 'email-desc',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email'
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var C,V,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Telefonnummer *',
    name: 'phone-error',
    error: 'Telefonnummer kan kun inneholde siffer.',
    required: true,
    type: 'tel',
    'aria-invalid': true
  },
  name: 'With Error'
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var W,L,w;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Deaktivert felt',
    name: 'disabled-field',
    disabled: true,
    defaultValue: 'Kan ikke endres'
  }
}`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var K,q,P;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Kun lesbart felt',
    name: 'readonly-field',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.'
  }
}`,...(P=(q=s.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var M,j,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>('');
    // Destructure relevant props from args instead of spreading all
    const {
      name,
      'data-size': dataSize,
      // Although not listed as a direct prop, pass it if needed for context
      placeholder,
      required,
      disabled,
      readOnly,
      multiline,
      maxLength,
      counter,
      prefix,
      suffix,
      error,
      // Include error if needed
      description // Include description if needed
      // Exclude label, value, onChange as they are handled explicitly
      // Exclude aria-label/labelledby as label is explicit
    } = args;
    return <>\r
        {/* Pass props explicitly */}\r
        <Textfield label="Kontroller meg!" // Explicit label
      value={value} // Explicit value from state
      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)} // Explicit onChange
      // Pass other relevant props explicitly
      name={name} data-size={dataSize} // Pass data-color if needed
      placeholder={placeholder} required={required} disabled={disabled} readOnly={readOnly} multiline={multiline} maxLength={maxLength} counter={counter} prefix={prefix} suffix={suffix} error={error} description={description}
      // Do NOT spread {...args} here
      />\r
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />\r
        <Paragraph style={{
        margin: '0'
      }}>\r
          Du har skrevet inn: {value || '(ingenting)'}\r
        </Paragraph>\r
        <Button onClick={() => setValue('Kake')} style={{
        marginTop: 'var(--ds-size-2)'
      }}>\r
          Jeg vil ha Kake\r
        </Button>\r
      </>;
  },
  args: {
    name: 'controlled-field',
    placeholder: 'Skriv noe...',
    // label, value, onChange are handled in render
    // Set other defaults for controllable props if desired
    'data-size': 'md'
  }
}`,...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const De=["Default","Multiline","WithAffixes","WithCounter","WithDescription","WithError","Disabled","ReadOnly","Controlled"];export{d as Controlled,r as Default,o as Disabled,a as Multiline,s as ReadOnly,t as WithAffixes,n as WithCounter,i as WithDescription,l as WithError,De as __namedExportsOrder,Se as default};
