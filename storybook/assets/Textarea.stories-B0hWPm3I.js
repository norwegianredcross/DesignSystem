import{j as e,r as V}from"./iframe-CEOBMeFO.js";import{T as D}from"./textarea-DDaTo1i5.js";import{F as o}from"./index-BODP4TE6.js";import{L as n}from"./label-CR_EsEAm.js";import{D as w}from"./divider-I3AmGnd3.js";import{P as _}from"./paragraph-KjeHPeT4.js";const t=D;try{t.displayName="Textarea",t.__docgenInfo={description:"",displayName:"Textarea",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const C={title:"Components/Textarea",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Textarea allows users to input multi-line text. Use Label for accessibility."}},layout:"padded"},argTypes:{disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},cols:{control:"number",description:"Specifies the visible width of a text area."},rows:{control:"number",description:"Specifies the visible number of lines in a text area."},maxLength:{control:"number",description:"Specifies the maximum number of characters allowed."},id:{control:"text",description:"HTML id attribute, important for label association."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},"aria-labelledby":{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},r={render:a=>e.jsxs(o,{"data-size":a["data-size"],children:[e.jsx(n,{id:"textarea-default-label",htmlFor:"textarea-default",children:"Label"}),e.jsx(t,{id:"textarea-default","aria-labelledby":"textarea-default-label",placeholder:"Skriv en lengre tekst her...",...a})]}),args:{name:"default-textarea",rows:4,"data-size":"md"}},l={render:a=>{const[c,T]=V.useState("Jeg vil ha Pizza");return e.jsxs(o,{"data-size":a["data-size"],children:[e.jsx(n,{id:"textarea-controlled-label",htmlFor:"textarea-controlled",children:"Kontroller meg!"}),e.jsx(t,{id:"textarea-controlled","aria-labelledby":"textarea-controlled-label",value:c,onChange:S=>T(S.target.value),rows:3,...a}),e.jsx(w,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(_,{style:{margin:"0"},children:["Du har skrevet inn: ",c]})]})},args:{name:"controlled-textarea","data-size":"md"}},s={render:a=>e.jsxs(o,{"data-size":a["data-size"],children:[e.jsx(n,{id:"textarea-disabled-label",htmlFor:"textarea-disabled",children:"Deaktivert felt"}),e.jsx(t,{id:"textarea-disabled","aria-labelledby":"textarea-disabled-label",...a})]}),args:{name:"disabled-textarea",defaultValue:"Kan ikke redigeres",disabled:!0,rows:3,"data-size":"md"}},d={render:a=>e.jsxs(o,{"data-size":a["data-size"],children:[e.jsx(n,{id:"textarea-readonly-label",htmlFor:"textarea-readonly",children:"Kun lesbart felt"}),e.jsx(t,{id:"textarea-readonly","aria-labelledby":"textarea-readonly-label",...a})]}),args:{name:"readonly-textarea",defaultValue:"Kan ikke endres, men kan kopieres.",readOnly:!0,rows:3,"data-size":"md"}},i={render:a=>e.jsxs(o,{"data-size":a["data-size"],children:[e.jsx(n,{id:"textarea-maxlength-label",htmlFor:"textarea-maxlength",children:"Beskrivelse (maks 100 tegn)"}),e.jsx(t,{id:"textarea-maxlength","aria-labelledby":"textarea-maxlength-label",placeholder:"Start å skrive...",...a})]}),args:{name:"maxlength-textarea",maxLength:100,rows:4,"data-size":"md"},name:"With MaxLength"};var m,x,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-default-label" htmlFor="textarea-default">
        Label
      </Label>
      <Textarea id="textarea-default" aria-labelledby="textarea-default-label" placeholder="Skriv en lengre tekst her..." {...args} />
    </Field>,
  args: {
    name: 'default-textarea',
    rows: 4,
    'data-size': 'md'
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var u,g,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [textValue, setTextValue] = useState('Jeg vil ha Pizza');
    return <Field data-size={args['data-size']}>
        <Label id="textarea-controlled-label" htmlFor="textarea-controlled">
          Kontroller meg!
        </Label>
        <Textarea id="textarea-controlled" aria-labelledby="textarea-controlled-label" value={textValue} onChange={e => setTextValue(e.target.value)} rows={3} {...args} />
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />
        <Paragraph style={{
        margin: '0'
      }}>
          Du har skrevet inn: {textValue}
        </Paragraph>
      </Field>;
  },
  args: {
    name: 'controlled-textarea',
    'data-size': 'md'
  }
}`,...(p=(g=l.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-disabled-label" htmlFor="textarea-disabled">
        Deaktivert felt
      </Label>
      <Textarea id="textarea-disabled" aria-labelledby="textarea-disabled-label" {...args} />
    </Field>,
  args: {
    name: 'disabled-textarea',
    defaultValue: "Kan ikke redigeres",
    disabled: true,
    rows: 3,
    'data-size': 'md'
  }
}`,...(z=(f=s.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var y,v,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-readonly-label" htmlFor="textarea-readonly">
        Kun lesbart felt
      </Label>
      <Textarea id="textarea-readonly" aria-labelledby="textarea-readonly-label" {...args} />
    </Field>,
  args: {
    name: 'readonly-textarea',
    defaultValue: "Kan ikke endres, men kan kopieres.",
    readOnly: true,
    rows: 3,
    'data-size': 'md'
  }
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var L,F,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-maxlength-label" htmlFor="textarea-maxlength">
        Beskrivelse (maks 100 tegn)
      </Label>
      <Textarea id="textarea-maxlength" aria-labelledby="textarea-maxlength-label" placeholder="Start å skrive..." {...args} />
    </Field>,
  args: {
    name: 'maxlength-textarea',
    maxLength: 100,
    rows: 4,
    'data-size': 'md'
  },
  name: 'With MaxLength'
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const O=["Default","Controlled","Disabled","ReadOnly","WithMaxLength"],q=Object.freeze(Object.defineProperty({__proto__:null,Controlled:l,Default:r,Disabled:s,ReadOnly:d,WithMaxLength:i,__namedExportsOrder:O,default:C},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,d as R,q as T,i as W};
