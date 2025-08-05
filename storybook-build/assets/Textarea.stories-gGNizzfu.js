import{j as e,r as S}from"./iframe-sfm2iiNv.js";import{T as w}from"./Textarea-Dj7VAftg.js";import{F as t}from"./index-Bpc4Wq8G.js";import{L as l}from"./Label-hKN12Bml.js";import{D}from"./Divider-m4td42Yy.js";import{P as _}from"./Paragraph-r4OMux9D.js";import"./preload-helper-C1FmrZbK.js";import"./lite-DaUVFjkg.js";import"./floating-ui.react-B0KwFFiC.js";import"./index-DNAPc2gN.js";import"./index-jZE8LZbC.js";import"./index-B-pTjrYB.js";const r=w;try{r.displayName="Textarea",r.__docgenInfo={description:"",displayName:"Textarea",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const H={title:"Components/Textarea",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Textarea allows users to input multi-line text. Use Label for accessibility."}},layout:"padded"},argTypes:{disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},cols:{control:"number",description:"Specifies the visible width of a text area."},rows:{control:"number",description:"Specifies the visible number of lines in a text area."},maxLength:{control:"number",description:"Specifies the maximum number of characters allowed."},id:{control:"text",description:"HTML id attribute, important for label association."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},"aria-labelledby":{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},s={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-default-label",htmlFor:"textarea-default",children:"Label"}),e.jsx(r,{id:"textarea-default","aria-labelledby":"textarea-default-label",placeholder:"Skriv en lengre tekst her...",...a})]}),args:{name:"default-textarea",rows:4,"data-size":"md"}},d={render:a=>{const[m,T]=S.useState("Jeg vil ha Pizza");return e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-controlled-label",htmlFor:"textarea-controlled",children:"Kontroller meg!"}),e.jsx(r,{id:"textarea-controlled","aria-labelledby":"textarea-controlled-label",value:m,onChange:V=>T(V.target.value),rows:3,...a}),e.jsx(D,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(_,{style:{margin:"0"},children:["Du har skrevet inn: ",m]})]})},args:{name:"controlled-textarea","data-size":"md"}},i={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-disabled-label",htmlFor:"textarea-disabled",children:"Deaktivert felt"}),e.jsx(r,{id:"textarea-disabled","aria-labelledby":"textarea-disabled-label",...a})]}),args:{name:"disabled-textarea",defaultValue:"Kan ikke redigeres",disabled:!0,rows:3,"data-size":"md"}},o={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-readonly-label",htmlFor:"textarea-readonly",children:"Kun lesbart felt"}),e.jsx(r,{id:"textarea-readonly","aria-labelledby":"textarea-readonly-label",...a})]}),args:{name:"readonly-textarea",defaultValue:"Kan ikke endres, men kan kopieres.",readOnly:!0,rows:3,"data-size":"md"}},n={render:a=>e.jsxs(t,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-maxlength-label",htmlFor:"textarea-maxlength",children:"Beskrivelse (maks 100 tegn)"}),e.jsx(r,{id:"textarea-maxlength","aria-labelledby":"textarea-maxlength-label",placeholder:"Start å skrive...",...a})]}),args:{name:"maxlength-textarea",maxLength:100,rows:4,"data-size":"md"},name:"With MaxLength"};var c,x,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var u,p,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=d.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var y,v,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var L,F,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const I=["Default","Controlled","Disabled","ReadOnly","WithMaxLength"];export{d as Controlled,s as Default,i as Disabled,o as ReadOnly,n as WithMaxLength,I as __namedExportsOrder,H as default};
