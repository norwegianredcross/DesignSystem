import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-D4lIrffr.js";import{T as S}from"./Textarea-ik62Jeuf.js";import{F as t}from"./index-CMMlhluM.js";import{L as l}from"./Label-DnboOLtM.js";import{D}from"./Divider-ZGno9OH3.js";import{P as K}from"./Paragraph-CJciD5B6.js";import"./lite-DaUVFjkg.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-Cb-ENzfG.js";const r=S,U={title:"Components/Textarea",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Textarea allows users to input multi-line text. Use Label for accessibility."}},layout:"padded"},argTypes:{disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},cols:{control:"number",description:"Specifies the visible width of a text area."},rows:{control:"number",description:"Specifies the visible number of lines in a text area."},maxLength:{control:"number",description:"Specifies the maximum number of characters allowed."},id:{control:"text",description:"HTML id attribute, important for label association."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},"aria-labelledby":{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},s={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-default-label",htmlFor:"textarea-default",children:"Label"}),e.jsx(r,{id:"textarea-default","aria-labelledby":"textarea-default-label",placeholder:"Skriv en lengre tekst her...",...a})]}),args:{name:"default-textarea",rows:4,"data-size":"md"}},d={render:a=>{const[m,T]=w.useState("Jeg vil ha Pizza");return e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-controlled-label",htmlFor:"textarea-controlled",children:"Kontroller meg!"}),e.jsx(r,{id:"textarea-controlled","aria-labelledby":"textarea-controlled-label",value:m,onChange:V=>T(V.target.value),rows:3,...a}),e.jsx(D,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(K,{style:{margin:"0"},children:["Du har skrevet inn: ",m]})]})},args:{name:"controlled-textarea","data-size":"md"}},i={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-disabled-label",htmlFor:"textarea-disabled",children:"Deaktivert felt"}),e.jsx(r,{id:"textarea-disabled","aria-labelledby":"textarea-disabled-label",...a})]}),args:{name:"disabled-textarea",defaultValue:"Kan ikke redigeres",disabled:!0,rows:3,"data-size":"md"}},o={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-readonly-label",htmlFor:"textarea-readonly",children:"Kun lesbart felt"}),e.jsx(r,{id:"textarea-readonly","aria-labelledby":"textarea-readonly-label",...a})]}),args:{name:"readonly-textarea",defaultValue:"Kan ikke endres, men kan kopieres.",readOnly:!0,rows:3,"data-size":"md"}},n={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-maxlength-label",htmlFor:"textarea-maxlength",children:"Beskrivelse (maks 100 tegn)"}),e.jsx(r,{id:"textarea-maxlength","aria-labelledby":"textarea-maxlength-label",placeholder:"Start å skrive...",...a})]}),args:{name:"maxlength-textarea",maxLength:100,rows:4,"data-size":"md"},name:"With MaxLength"};var x,c,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>\r
      <Label id="textarea-default-label" htmlFor="textarea-default">\r
        Label\r
      </Label>\r
      <Textarea id="textarea-default" aria-labelledby="textarea-default-label" placeholder="Skriv en lengre tekst her..." {...args} />\r
    </Field>,
  args: {
    name: 'default-textarea',
    rows: 4,
    'data-size': 'md'
  }
}`,...(b=(c=s.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,g,p;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [textValue, setTextValue] = useState('Jeg vil ha Pizza');
    return <Field data-size={args['data-size']}>\r
        <Label id="textarea-controlled-label" htmlFor="textarea-controlled">\r
          Kontroller meg!\r
        </Label>\r
        <Textarea id="textarea-controlled" aria-labelledby="textarea-controlled-label" value={textValue} onChange={e => setTextValue(e.target.value)} rows={3} {...args} />\r
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />\r
        <Paragraph style={{
        margin: '0'
      }}>\r
          Du har skrevet inn: {textValue}\r
        </Paragraph>\r
      </Field>;
  },
  args: {
    name: 'controlled-textarea',
    'data-size': 'md'
  }
}`,...(p=(g=d.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>\r
      <Label id="textarea-disabled-label" htmlFor="textarea-disabled">\r
        Deaktivert felt\r
      </Label>\r
      <Textarea id="textarea-disabled" aria-labelledby="textarea-disabled-label" {...args} />\r
    </Field>,
  args: {
    name: 'disabled-textarea',
    defaultValue: "Kan ikke redigeres",
    disabled: true,
    rows: 3,
    'data-size': 'md'
  }
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var y,k,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>\r
      <Label id="textarea-readonly-label" htmlFor="textarea-readonly">\r
        Kun lesbart felt\r
      </Label>\r
      <Textarea id="textarea-readonly" aria-labelledby="textarea-readonly-label" {...args} />\r
    </Field>,
  args: {
    name: 'readonly-textarea',
    defaultValue: "Kan ikke endres, men kan kopieres.",
    readOnly: true,
    rows: 3,
    'data-size': 'md'
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,F,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>\r
      <Label id="textarea-maxlength-label" htmlFor="textarea-maxlength">\r
        Beskrivelse (maks 100 tegn)\r
      </Label>\r
      <Textarea id="textarea-maxlength" aria-labelledby="textarea-maxlength-label" placeholder="Start å skrive..." {...args} />\r
    </Field>,
  args: {
    name: 'maxlength-textarea',
    maxLength: 100,
    rows: 4,
    'data-size': 'md'
  },
  name: 'With MaxLength'
}`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const $=["Default","Controlled","Disabled","ReadOnly","WithMaxLength"];export{d as Controlled,s as Default,i as Disabled,o as ReadOnly,n as WithMaxLength,$ as __namedExportsOrder,U as default};
