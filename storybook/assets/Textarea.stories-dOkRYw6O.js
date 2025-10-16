import{j as e,r as V}from"./iframe-NSlXxCFF.js";import{T as w}from"./textarea-BWGgL7DI.js";import{F as r}from"./index-Bw1459GD.js";import{L as l}from"./label-4ZldiIKQ.js";import{D}from"./divider-BN38xh8-.js";import{P as _}from"./paragraph-B3OFID9u.js";import"./preload-helper-Dp1pzeXC.js";import"./lite-DaUVFjkg.js";import"./index-fxYSzXt9.js";import"./use-merge-refs-tYagDv3b.js";const t=w;try{t.displayName="Textarea",t.__docgenInfo={description:"",displayName:"Textarea",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const J={title:"Components/Textarea",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Textarea allows users to input multi-line text. Use Label for accessibility."}},layout:"padded"},argTypes:{disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},cols:{control:"number",description:"Specifies the visible width of a text area."},rows:{control:"number",description:"Specifies the visible number of lines in a text area."},maxLength:{control:"number",description:"Specifies the maximum number of characters allowed."},id:{control:"text",description:"HTML id attribute, important for label association."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},"aria-labelledby":{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},s={render:a=>e.jsxs(r,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-default-label",htmlFor:"textarea-default",children:"Label"}),e.jsx(t,{id:"textarea-default","aria-labelledby":"textarea-default-label",placeholder:"Skriv en lengre tekst her...",...a})]}),args:{name:"default-textarea",rows:4,"data-size":"md"}},d={render:a=>{const[m,T]=V.useState("Jeg vil ha Pizza");return e.jsxs(r,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-controlled-label",htmlFor:"textarea-controlled",children:"Kontroller meg!"}),e.jsx(t,{id:"textarea-controlled","aria-labelledby":"textarea-controlled-label",value:m,onChange:S=>T(S.target.value),rows:3,...a}),e.jsx(D,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(_,{style:{margin:"0"},children:["Du har skrevet inn: ",m]})]})},args:{name:"controlled-textarea","data-size":"md"}},i={render:a=>e.jsxs(r,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-disabled-label",htmlFor:"textarea-disabled",children:"Deaktivert felt"}),e.jsx(t,{id:"textarea-disabled","aria-labelledby":"textarea-disabled-label",...a})]}),args:{name:"disabled-textarea",defaultValue:"Kan ikke redigeres",disabled:!0,rows:3,"data-size":"md"}},o={render:a=>e.jsxs(r,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-readonly-label",htmlFor:"textarea-readonly",children:"Kun lesbart felt"}),e.jsx(t,{id:"textarea-readonly","aria-labelledby":"textarea-readonly-label",...a})]}),args:{name:"readonly-textarea",defaultValue:"Kan ikke endres, men kan kopieres.",readOnly:!0,rows:3,"data-size":"md"}},n={render:a=>e.jsxs(r,{"data-size":a["data-size"],children:[e.jsx(l,{id:"textarea-maxlength-label",htmlFor:"textarea-maxlength",children:"Beskrivelse (maks 100 tegn)"}),e.jsx(t,{id:"textarea-maxlength","aria-labelledby":"textarea-maxlength-label",placeholder:"Start å skrive...",...a})]}),args:{name:"maxlength-textarea",maxLength:100,rows:4,"data-size":"md"},name:"With MaxLength"};var c,x,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var u,p,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=d.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var y,k,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,F,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const N=["Default","Controlled","Disabled","ReadOnly","WithMaxLength"];export{d as Controlled,s as Default,i as Disabled,o as ReadOnly,n as WithMaxLength,N as __namedExportsOrder,J as default};
