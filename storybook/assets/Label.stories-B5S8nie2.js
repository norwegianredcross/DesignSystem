import{j as e}from"./iframe-CAry5O3X.js";import{L as n}from"./index-C4SgbFHV.js";import{I as h}from"./index-BqpwxJ6F.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-8T-0JSHw.js";import"./index-Bezu-X34.js";import"./index-DVmG-NEF.js";import"./XMark-Ddh0hKfx.js";import"./useId-AzXIgKfk.js";const{expect:o,within:y}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Label",component:n,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg","xl"],description:"Text size"},weight:{control:"select",options:["regular","medium","semibold"],description:"Font weight"}}},t={args:{children:"Fullt navn"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)"},children:[e.jsx(n,{htmlFor:"label-demo-input",children:"E-postadresse"}),e.jsx(h,{id:"label-demo-input",type:"email"})]})},a={name:"Test: Labels Input",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)"},children:[e.jsx(n,{htmlFor:"label-test-input",children:"Telefonnummer"}),e.jsx(h,{id:"label-test-input",type:"tel"})]}),play:async({canvasElement:g})=>{const r=y(g).getByLabelText("Telefonnummer");o(r).toBeInTheDocument(),o(r.tagName).toBe("INPUT")}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Fullt navn'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ds-size-2)'
  }}>
      <Label htmlFor="label-demo-input">E-postadresse</Label>
      <Input id="label-demo-input" type="email" />
    </div>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,x,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const z=["Default","WithInput","TestLabelsInput"];export{t as Default,a as TestLabelsInput,s as WithInput,z as __namedExportsOrder,F as default};
