import{r as re,j as e}from"./iframe-Cm-BopP0.js";import{T as ae}from"./textfield-DTNUHOyP.js";import{D as te}from"./divider-BEbcHmNw.js";import{P as ne}from"./paragraph-CsQ9r47F.js";import{B as le}from"./button-CA3x7g8R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BkzMAr22.js";import"./index-Wix542Se.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BtC4cnvX.js";import"./input-08mk3PE9.js";import"./label-BGG1GFhh.js";import"./textarea-BhLp7MZT.js";import"./spinner-U8TzU1jX.js";const u=ae;try{u.displayName="Textfield",u.__docgenInfo={description:"",displayName:"Textfield",props:{className:{defaultValue:null,description:"Classname on the wrapper element `Field`",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"undefined"},description:"Style on the wrapper element `Field`",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description",name:"description",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Prefix",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Suffix",name:"suffix",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for field",name:"error",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"Uses `Field.Counter` to display a character counter\nPass a number to set a limit, or an object to configure the counter",name:"counter",required:!1,type:{name:"number | FieldCounterProps"}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:`Identifies the element (or elements) that labels the current element.
@see aria-describedby.`,name:"aria-labelledby",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},multiline:{defaultValue:null,description:"Use to render a `Textarea` instead of `Input` for multiline support",name:"multiline",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'text'"},description:"Supported `input` types",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"hidden"'},{value:'"color"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"date"'},{value:'"time"'},{value:'"datetime-local"'},{value:'"file"'},{value:'"month"'},{value:'"password"'},{value:'"week"'}]}},size:{defaultValue:null,description:"Defines the width of `Input` in count of characters.",name:"size",required:!1,type:{name:"number"}}}}}catch{}const ve={title:"Components/Textfield",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Textfield is a composed component for text input or textarea, including label, description, validation, affixes, and counter."}},layout:"padded"},argTypes:{label:{control:"text",description:"Label for the textfield (use this OR aria-label)",defaultValue:"Label"},disabled:{control:"boolean",description:"Disables the textfield",defaultValue:!1},readOnly:{control:"boolean",description:"Makes the textfield read-only",defaultValue:!1},multiline:{control:"boolean",description:"Renders a Textarea instead of Input",defaultValue:!1},description:{control:"text",description:"Description displayed below the label"},error:{control:"text",description:"Error message displayed below the input"},counter:{control:"number",description:"Enables character counter with optional limit"},prefix:{control:"text",description:"Prefix displayed before the input"},suffix:{control:"text",description:"Suffix displayed after the input"},"aria-label":{control:"text",if:{arg:"label",exists:!1}},"aria-labelledby":{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Input type (ignored if multiline is true)",defaultValue:"text",if:{arg:"multiline",eq:!1}},size:{control:"number",description:"HTML size attribute (input width in characters)",if:{arg:"multiline",eq:!1}},rows:{control:"number",description:"HTML rows attribute (textarea height in lines)",if:{arg:"multiline",eq:!0}},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},maxLength:{control:"number"},id:{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},r={args:{label:"Navn",name:"name-default",placeholder:"Skriv inn navnet ditt"}},a={args:{label:"Beskrivelse",name:"description-multiline",multiline:!0,rows:4,placeholder:"Skriv en lengre beskrivelse..."}},t={args:{label:"Hvor mange kroner koster det per måned?",name:"cost-affix",prefix:"NOK",suffix:"pr. mnd",type:"number"},name:"With Prefix/Suffix"},n={args:{label:"Melding (maks 100 tegn)",name:"message-counter",multiline:!0,rows:3,counter:100,maxLength:100},name:"With Character Counter"},l={args:{label:"E-post",name:"email-desc",description:"Vi sender en bekreftelse til denne adressen.",type:"email"}},i={args:{label:"Telefonnummer *",name:"phone-error",error:"Telefonnummer kan kun inneholde siffer.",required:!0,type:"tel","aria-invalid":!0},name:"With Error"},s={args:{label:"Deaktivert felt",name:"disabled-field",disabled:!0,defaultValue:"Kan ikke endres"}},o={args:{label:"Kun lesbart felt",name:"readonly-field",readOnly:!0,defaultValue:"Denne verdien er satt."}},d={render:c=>{const[m,p]=re.useState(""),{name:j,"data-size":B,placeholder:H,required:F,disabled:A,readOnly:J,multiline:U,maxLength:$,counter:G,prefix:Q,suffix:X,error:Y,description:Z}=c;return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Kontroller meg!",value:m,onChange:ee=>p(ee.target.value),name:j,"data-size":B,placeholder:H,required:F,disabled:A,readOnly:J,multiline:U,maxLength:$,counter:G,prefix:Q,suffix:X,error:Y,description:Z}),e.jsx(te,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(ne,{style:{margin:"0"},children:["Du har skrevet inn: ",m||"(ingenting)"]}),e.jsx(le,{onClick:()=>p("Kake"),style:{marginTop:"var(--ds-size-2)"},children:"Jeg vil ha Kake"})]})},args:{name:"controlled-field",placeholder:"Skriv noe...","data-size":"md"}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Navn',
    name: 'name-default',
    placeholder: 'Skriv inn navnet ditt'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,x,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Beskrivelse',
    name: 'description-multiline',
    multiline: true,
    rows: 4,
    placeholder: 'Skriv en lengre beskrivelse...'
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,k,V;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'cost-affix',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    type: 'number'
  },
  name: 'With Prefix/Suffix'
}`,...(V=(k=t.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var S,z,q;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Melding (maks 100 tegn)',
    name: 'message-counter',
    multiline: true,
    rows: 3,
    counter: 100,
    maxLength: 100
  },
  name: 'With Character Counter'
}`,...(q=(z=n.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var D,C,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'E-post',
    name: 'email-desc',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email'
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,w,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Telefonnummer *',
    name: 'phone-error',
    error: 'Telefonnummer kan kun inneholde siffer.',
    required: true,
    type: 'tel',
    'aria-invalid': true
  },
  name: 'With Error'
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,P,W;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Deaktivert felt',
    name: 'disabled-field',
    disabled: true,
    defaultValue: 'Kan ikke endres'
  }
}`,...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var K,N,_;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Kun lesbart felt',
    name: 'readonly-field',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.'
  }
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,M,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    return <>
        {/* Pass props explicitly */}
        <Textfield label="Kontroller meg!" // Explicit label
      value={value} // Explicit value from state
      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)} // Explicit onChange
      // Pass other relevant props explicitly
      name={name} data-size={dataSize} // Pass data-color if needed
      placeholder={placeholder} required={required} disabled={disabled} readOnly={readOnly} multiline={multiline} maxLength={maxLength} counter={counter} prefix={prefix} suffix={suffix} error={error} description={description}
      // Do NOT spread {...args} here
      />
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
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const ke=["Default","Multiline","WithAffixes","WithCounter","WithDescription","WithError","Disabled","ReadOnly","Controlled"];export{d as Controlled,r as Default,s as Disabled,a as Multiline,o as ReadOnly,t as WithAffixes,n as WithCounter,l as WithDescription,i as WithError,ke as __namedExportsOrder,ve as default};
