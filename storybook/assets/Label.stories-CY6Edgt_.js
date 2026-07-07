import{j as e}from"./iframe-Bi7M_svo.js";import{L as n}from"./index-I5uVrfa-.js";import{I as h}from"./index-CfAxlDBb.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-LmCyz6mm.js";import"./index-CRMQxZxa.js";import"./index-CnBq4m-l.js";const{expect:l,within:y}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Label",component:n,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg","xl"],description:"Text size"},weight:{control:"select",options:["regular","medium","semibold"],description:"Font weight"}}},t={args:{children:"Fullt navn"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)"},children:[e.jsx(n,{htmlFor:"label-demo-input",children:"E-postadresse"}),e.jsx(h,{id:"label-demo-input",type:"email"})]})},a={name:"Test: Labels Input",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)"},children:[e.jsx(n,{htmlFor:"label-test-input",children:"Telefonnummer"}),e.jsx(h,{id:"label-test-input",type:"tel"})]}),play:async({canvasElement:g})=>{const r=y(g).getByLabelText("Telefonnummer");l(r).toBeInTheDocument(),l(r.tagName).toBe("INPUT")}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Fullt navn'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ds-size-2)'
  }}>
      <Label htmlFor="label-demo-input">E-postadresse</Label>
      <Input id="label-demo-input" type="email" />
    </div>
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,x,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Test: Labels Input',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ds-size-2)'
  }}>
      <Label htmlFor="label-test-input">Telefonnummer</Label>
      <Input id="label-test-input" type="tel" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The label must be programmatically associated with the input
    const input = canvas.getByLabelText('Telefonnummer');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const B=["Default","WithInput","TestLabelsInput"];export{t as Default,a as TestLabelsInput,s as WithInput,B as __namedExportsOrder,_ as default};
