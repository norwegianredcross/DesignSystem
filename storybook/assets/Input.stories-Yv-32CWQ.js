import{j as e,r as R}from"./iframe-sfm2iiNv.js";import{I as q}from"./Input-DTmrggwA.js";import{L as t}from"./Label-hKN12Bml.js";import{P as k}from"./Paragraph-r4OMux9D.js";import"./preload-helper-C1FmrZbK.js";import"./lite-DaUVFjkg.js";import"./index-B-pTjrYB.js";const l=q;try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},type:{defaultValue:{value:"'text'"},description:"Supported `input` types",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"hidden"'},{value:'"color"'},{value:'"search"'},{value:'"checkbox"'},{value:'"radio"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"date"'},{value:'"time"'},{value:'"datetime-local"'},{value:'"file"'},{value:'"month"'},{value:'"password"'},{value:'"week"'}]}},size:{defaultValue:null,description:"Defines the width of `Input` in count of characters.",name:"size",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:`Disables element
@note Avoid using if possible for accessibility purposes`,name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Toggle `readOnly`",name:"readOnly",required:!1,type:{name:"boolean"}},role:{defaultValue:null,description:"Set role, i.e. `switch` when `checkbox` or `radio`",name:"role",required:!1,type:{name:"AriaRole"}}}}}catch{}const U={title:"Components/Input",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Input is a basic form element for collecting user data. Use Label for accessibility."}},layout:"padded"},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Supported input types",defaultValue:"text"},name:{control:"text",description:"Name attribute for the input"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},size:{control:"number",description:"HTML size attribute (input width in characters)."},value:{control:"text"},placeholder:{control:"text"},id:{control:"text"},"aria-labelledby":{control:"text"}}},r={name:"Example Basic",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"input-default-label",htmlFor:"input-default",children:"Input Label"}),e.jsx(l,{id:"input-default","aria-labelledby":"input-default-label",placeholder:"Type something...",...a})]}),args:{type:"text",name:"default-input","data-size":"md"}},n={name:"Example Email Type",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"input-email-label",htmlFor:"input-email",children:"Email Address"}),e.jsx(l,{id:"input-email","aria-labelledby":"input-email-label",placeholder:"your.email@example.com",...a})]}),args:{type:"email",name:"email-input","data-size":"md"}},i={name:"Example HTML Size Attribute",render:a=>e.jsxs("div",{children:[e.jsx(t,{id:"input-size-label",htmlFor:"input-size",children:"Input with size=10"}),e.jsx(l,{id:"input-size","aria-labelledby":"input-size-label",...a})]}),args:{type:"text",name:"size-input",size:10,"data-size":"md"}},d={name:"Example Disabled",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"input-disabled-label",htmlFor:"input-disabled",children:"Disabled Input"}),e.jsx(l,{id:"input-disabled","aria-labelledby":"input-disabled-label",value:"Cannot edit",...a})]}),args:{type:"text",name:"disabled-input",disabled:!0,"data-size":"md"}},s={name:"Example ReadOnly",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"input-readonly-label",htmlFor:"input-readonly",children:"Read Only Input"}),e.jsx(l,{id:"input-readonly","aria-labelledby":"input-readonly-label",value:"Cannot change, but can copy",...a})]}),args:{type:"text",name:"readonly-input",readOnly:!0,"data-size":"md"}},o={name:"Example Invalid State",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"input-invalid-label",htmlFor:"input-invalid",children:"Invalid Input"}),e.jsx(l,{id:"input-invalid","aria-labelledby":"input-invalid-label",value:"Incorrect value",...a})]}),args:{type:"text",name:"invalid-input","aria-invalid":!0,"data-size":"md"}},u={name:"Example Controlled",render:a=>{const[p,w]=R.useState("Initial Value");return e.jsxs(e.Fragment,{children:[e.jsx(t,{id:"input-controlled-label",htmlFor:"input-controlled",children:"Kontroller meg!"}),e.jsx(l,{id:"input-controlled","aria-labelledby":"input-controlled-label",value:p,onChange:_=>w(_.target.value),...a}),e.jsxs(k,{style:{marginTop:"8px"},children:["Du har skrevet inn: ",p]})]})},args:{type:"text",name:"controlled-input","data-size":"md"}};var m,c,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,I,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var E,L,V;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(L=s.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var F,S,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var C,O,T;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const $=["Default","EmailType","HtmlSize","Disabled","ReadOnly","Invalid","Controlled"];export{u as Controlled,r as Default,d as Disabled,n as EmailType,i as HtmlSize,o as Invalid,s as ReadOnly,$ as __namedExportsOrder,U as default};
