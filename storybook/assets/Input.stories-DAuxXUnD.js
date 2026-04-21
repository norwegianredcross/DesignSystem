import{j as e,r as N}from"./iframe-uqdBrel6.js";import{I as t}from"./index-BWDwJ9IQ.js";import{i as l,P as Y}from"./tooltip-C2YX--GY.js";const{expect:y,within:K,userEvent:q}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Input",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Input is a basic form element for collecting user data. Use Label for accessibility."}},layout:"padded"},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Supported input types",defaultValue:"text"},name:{control:"text",description:"Name attribute for the input"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},size:{control:"number",description:"HTML size attribute (input width in characters)."},value:{control:"text"},placeholder:{control:"text"},id:{control:"text"},"aria-labelledby":{control:"text"}}},i={name:"Example Basic",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-default-label",htmlFor:"input-default",children:"Input Label"}),e.jsx(t,{id:"input-default","aria-labelledby":"input-default-label",placeholder:"Type something...",...a})]}),args:{type:"text",name:"default-input","data-size":"md"}},r={name:"Example Email Type",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-email-label",htmlFor:"input-email",children:"Email Address"}),e.jsx(t,{id:"input-email","aria-labelledby":"input-email-label",placeholder:"your.email@example.com",...a})]}),args:{type:"email",name:"email-input","data-size":"md"}},s={name:"Example HTML Size Attribute",render:a=>e.jsxs("div",{children:[e.jsx(l,{id:"input-size-label",htmlFor:"input-size",children:"Input with size=10"}),e.jsx(t,{id:"input-size","aria-labelledby":"input-size-label",...a})]}),args:{type:"text",name:"size-input",size:10,"data-size":"md"}},d={name:"Example Disabled",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-disabled-label",htmlFor:"input-disabled",children:"Disabled Input"}),e.jsx(t,{id:"input-disabled","aria-labelledby":"input-disabled-label",value:"Cannot edit",...a})]}),args:{type:"text",name:"disabled-input",disabled:!0,"data-size":"md"}},o={name:"Example ReadOnly",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-readonly-label",htmlFor:"input-readonly",children:"Read Only Input"}),e.jsx(t,{id:"input-readonly","aria-labelledby":"input-readonly-label",value:"Cannot change, but can copy",...a})]}),args:{type:"text",name:"readonly-input",readOnly:!0,"data-size":"md"}},p={name:"Example Invalid State",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-invalid-label",htmlFor:"input-invalid",children:"Invalid Input"}),e.jsx(t,{id:"input-invalid","aria-labelledby":"input-invalid-label",value:"Incorrect value",...a})]}),args:{type:"text",name:"invalid-input","aria-invalid":!0,"data-size":"md"}},u={name:"Example Controlled",render:a=>{const[b,n]=N.useState("Initial Value");return e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"input-controlled-label",htmlFor:"input-controlled",children:"Kontroller meg!"}),e.jsx(t,{id:"input-controlled","aria-labelledby":"input-controlled-label",value:b,onChange:U=>n(U.target.value),...a}),e.jsxs(Y,{style:{marginTop:"8px"},children:["Du har skrevet inn: ",b]})]})},args:{type:"text",name:"controlled-input","data-size":"md"}},c={name:"Test: Interaction",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"test-input-label",htmlFor:"test-input",children:"Test Input"}),e.jsx(t,{id:"test-input","aria-labelledby":"test-input-label",type:"text",name:"test-input"})]}),play:async({canvasElement:a})=>{const n=K(a).getByRole("textbox",{name:/test input/i});y(n).toBeInTheDocument(),await q.type(n,"Hello World"),y(n).toHaveValue("Hello World")}},m={name:"Test: Disabled State",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"test-input-disabled-label",htmlFor:"test-input-disabled",children:"Disabled Input"}),e.jsx(t,{id:"test-input-disabled","aria-labelledby":"test-input-disabled-label",disabled:!0,value:"Cannot edit"})]}),play:async({canvasElement:a})=>{const n=K(a).getByRole("textbox",{name:/disabled input/i});y(n).toBeDisabled()}};var x,g,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Basic',
  render: args => <>
      <Label id="input-default-label" htmlFor="input-default">Input Label</Label>
      <Input id="input-default" aria-labelledby="input-default-label" placeholder="Type something..." {...args} />
    </>,
  args: {
    type: 'text',
    name: 'default-input',
    'data-size': 'md'
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,I,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example Email Type',
  render: args => <>
      <Label id="input-email-label" htmlFor="input-email">Email Address</Label>
      <Input id="input-email" aria-labelledby="input-email-label" placeholder="your.email@example.com" {...args} />
    </>,
  args: {
    type: 'email',
    name: 'email-input',
    'data-size': 'md'
  }
}`,...(z=(I=r.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var f,j,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example HTML Size Attribute',
  render: args => <div>
        <Label id="input-size-label" htmlFor="input-size">Input with size=10</Label>
        <Input id="input-size" aria-labelledby="input-size-label" {...args} />
      </div>,
  args: {
    type: 'text',
    name: 'size-input',
    size: 10,
    'data-size': 'md'
  }
}`,...(E=(j=s.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var T,S,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Example Disabled',
  render: args => <>
      <Label id="input-disabled-label" htmlFor="input-disabled">Disabled Input</Label>
      <Input id="input-disabled" aria-labelledby="input-disabled-label" value="Cannot edit" {...args} />
    </>,
  args: {
    type: 'text',
    name: 'disabled-input',
    disabled: true,
    'data-size': 'md'
  }
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var L,D,O;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  render: args => <>
      <Label id="input-readonly-label" htmlFor="input-readonly">Read Only Input</Label>
      <Input id="input-readonly" aria-labelledby="input-readonly-label" value="Cannot change, but can copy" {...args} />
    </>,
  args: {
    type: 'text',
    name: 'readonly-input',
    readOnly: true,
    'data-size': 'md'
  }
}`,...(O=(D=o.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,C,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Example Invalid State',
  render: args => <>
      <Label id="input-invalid-label" htmlFor="input-invalid">Invalid Input</Label>
      <Input id="input-invalid" aria-labelledby="input-invalid-label" value="Incorrect value" {...args} />
    </>,
  args: {
    type: 'text',
    name: 'invalid-input',
    'aria-invalid': true,
    'data-size': 'md'
  }
}`,...(H=(C=p.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var R,_,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Example Controlled',
  render: args => {
    const [inputValue, setInputValue] = useState('Initial Value');
    return <>
        <Label id="input-controlled-label" htmlFor="input-controlled">Kontroller meg!</Label>
        <Input id="input-controlled" aria-labelledby="input-controlled-label" value={inputValue} onChange={e => setInputValue(e.target.value)} {...args} />
        <Paragraph style={{
        marginTop: '8px'
      }}>Du har skrevet inn: {inputValue}</Paragraph>
      </>;
  },
  args: {
    type: 'text',
    name: 'controlled-input',
    'data-size': 'md'
  }
}`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var w,M,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <>
      <Label id="test-input-label" htmlFor="test-input">Test Input</Label>
      <Input id="test-input" aria-labelledby="test-input-label" type="text" name="test-input" />
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Input should be accessible
    const input = canvas.getByRole('textbox', {
      name: /test input/i
    });
    expect(input).toBeInTheDocument();

    // Type text
    await userEvent.type(input, 'Hello World');
    expect(input).toHaveValue('Hello World');
  }
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var A,W,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Test: Disabled State',
  render: () => <>
      <Label id="test-input-disabled-label" htmlFor="test-input-disabled">Disabled Input</Label>
      <Input id="test-input-disabled" aria-labelledby="test-input-disabled-label" disabled value="Cannot edit" />
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: /disabled input/i
    });
    expect(input).toBeDisabled();
  }
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const J=["Default","EmailType","HtmlSize","Disabled","ReadOnly","Invalid","Controlled","TestInteraction","TestDisabledState"],$=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:i,Disabled:d,EmailType:r,HtmlSize:s,Invalid:p,ReadOnly:o,TestDisabledState:m,TestInteraction:c,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{u as C,i as D,s as H,$ as I};
