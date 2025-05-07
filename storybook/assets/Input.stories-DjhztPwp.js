import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./index-D4lIrffr.js";import{I as A}from"./Input-FgPaU4ty.js";import{L as l}from"./Label-DnboOLtM.js";import{P}from"./Paragraph-CJciD5B6.js";import"./lite-DaUVFjkg.js";import"./index-Cb-ENzfG.js";const t=A,$={title:"Components/Input",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Input is a basic form element for collecting user data. Use Label for accessibility."}},layout:"padded"},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Supported input types",defaultValue:"text"},name:{control:"text",description:"Name attribute for the input"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},size:{control:"number",description:"HTML size attribute (input width in characters)."},value:{control:"text"},placeholder:{control:"text"},id:{control:"text"},"aria-labelledby":{control:"text"}}},r={name:"Example Basic",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-default-label",htmlFor:"input-default",children:"Input Label"}),e.jsx(t,{id:"input-default","aria-labelledby":"input-default-label",placeholder:"Type something...",...a})]}),args:{type:"text",name:"default-input","data-size":"md"}},i={name:"Example Email Type",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-email-label",htmlFor:"input-email",children:"Email Address"}),e.jsx(t,{id:"input-email","aria-labelledby":"input-email-label",placeholder:"your.email@example.com",...a})]}),args:{type:"email",name:"email-input","data-size":"md"}},n={name:"Example HTML Size Attribute",render:a=>e.jsxs("div",{children:[e.jsx(l,{id:"input-size-label",htmlFor:"input-size",children:"Input with size=10"}),e.jsx(t,{id:"input-size","aria-labelledby":"input-size-label",...a})]}),args:{type:"text",name:"size-input",size:10,"data-size":"md"}},d={name:"Example Disabled",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-disabled-label",htmlFor:"input-disabled",children:"Disabled Input"}),e.jsx(t,{id:"input-disabled","aria-labelledby":"input-disabled-label",value:"Cannot edit",...a})]}),args:{type:"text",name:"disabled-input",disabled:!0,"data-size":"md"}},s={name:"Example ReadOnly",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-readonly-label",htmlFor:"input-readonly",children:"Read Only Input"}),e.jsx(t,{id:"input-readonly","aria-labelledby":"input-readonly-label",value:"Cannot change, but can copy",...a})]}),args:{type:"text",name:"readonly-input",readOnly:!0,"data-size":"md"}},o={name:"Example Invalid State",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-invalid-label",htmlFor:"input-invalid",children:"Invalid Input"}),e.jsx(t,{id:"input-invalid","aria-labelledby":"input-invalid-label",value:"Incorrect value",...a})]}),args:{type:"text",name:"invalid-input","aria-invalid":!0,"data-size":"md"}},p={name:"Example Controlled",render:a=>{const[u,R]=H.useState("Initial Value");return e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-controlled-label",htmlFor:"input-controlled",children:"Kontroller meg!"}),e.jsx(t,{id:"input-controlled","aria-labelledby":"input-controlled-label",value:u,onChange:w=>R(w.target.value),...a}),e.jsxs(P,{style:{marginTop:"8px"},children:["Du har skrevet inn: ",u]})]})},args:{type:"text",name:"controlled-input","data-size":"md"}};var m,c,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Basic',
  render: args => <>\r
      <Label id="input-default-label" htmlFor="input-default">Input Label</Label>\r
      <Input id="input-default" aria-labelledby="input-default-label" placeholder="Type something..." {...args} />\r
    </>,
  args: {
    type: 'text',
    name: 'default-input',
    'data-size': 'md'
  }
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var y,g,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example Email Type',
  render: args => <>\r
      <Label id="input-email-label" htmlFor="input-email">Email Address</Label>\r
      <Input id="input-email" aria-labelledby="input-email-label" placeholder="your.email@example.com" {...args} />\r
    </>,
  args: {
    type: 'email',
    name: 'email-input',
    'data-size': 'md'
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,v,z;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example HTML Size Attribute',
  render: args => <div>\r
        <Label id="input-size-label" htmlFor="input-size">Input with size=10</Label>\r
        <Input id="input-size" aria-labelledby="input-size-label" {...args} />\r
      </div>,
  args: {
    type: 'text',
    name: 'size-input',
    size: 10,
    'data-size': 'md'
  }
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var I,f,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Example Disabled',
  render: args => <>\r
      <Label id="input-disabled-label" htmlFor="input-disabled">Disabled Input</Label>\r
      <Input id="input-disabled" aria-labelledby="input-disabled-label" value="Cannot edit" {...args} />\r
    </>,
  args: {
    type: 'text',
    name: 'disabled-input',
    disabled: true,
    'data-size': 'md'
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var E,L,F;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  render: args => <>\r
      <Label id="input-readonly-label" htmlFor="input-readonly">Read Only Input</Label>\r
      <Input id="input-readonly" aria-labelledby="input-readonly-label" value="Cannot change, but can copy" {...args} />\r
    </>,
  args: {
    type: 'text',
    name: 'readonly-input',
    readOnly: true,
    'data-size': 'md'
  }
}`,...(F=(L=s.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var S,V,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Example Invalid State',
  render: args => <>\r
      <Label id="input-invalid-label" htmlFor="input-invalid">Invalid Input</Label>\r
      <Input id="input-invalid" aria-labelledby="input-invalid-label" value="Incorrect value" {...args} />\r
    </>,
  args: {
    type: 'text',
    name: 'invalid-input',
    'aria-invalid': true,
    'data-size': 'md'
  }
}`,...(C=(V=o.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var D,T,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Example Controlled',
  render: args => {
    const [inputValue, setInputValue] = useState('Initial Value');
    return <>\r
        <Label id="input-controlled-label" htmlFor="input-controlled">Kontroller meg!</Label>\r
        <Input id="input-controlled" aria-labelledby="input-controlled-label" value={inputValue} onChange={e => setInputValue(e.target.value)} {...args} />\r
        <Paragraph style={{
        marginTop: '8px'
      }}>Du har skrevet inn: {inputValue}</Paragraph>\r
      </>;
  },
  args: {
    type: 'text',
    name: 'controlled-input',
    'data-size': 'md'
  }
}`,...(O=(T=p.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const q=["Default","EmailType","HtmlSize","Disabled","ReadOnly","Invalid","Controlled"];export{p as Controlled,r as Default,d as Disabled,i as EmailType,n as HtmlSize,o as Invalid,s as ReadOnly,q as __namedExportsOrder,$ as default};
