import{j as e}from"./iframe--tL_cLjH.js";import{L as a}from"./index-D8Xuu8Xi.js";import{I as h}from"./index-cI-2MJ9j.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-IPEz1hAh.js";import"./XMark-Diq6-63M.js";import"./useId-DbbkGEiv.js";import"./index-BRlJKmD4.js";import"./index-BUPFcsRO.js";const{expect:o,within:y}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Label",component:a,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg","xl"],description:"Text size"},weight:{control:"select",options:["regular","medium","semibold"],description:"Font weight"}}},t={args:{children:"Fullt navn"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)"},children:[e.jsx(a,{htmlFor:"label-demo-input",children:"E-postadresse"}),e.jsx(h,{id:"label-demo-input",type:"email"})]})},s={name:"Test: Labels Input",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)"},children:[e.jsx(a,{htmlFor:"label-test-input",children:"Telefonnummer"}),e.jsx(h,{id:"label-test-input",type:"tel"})]}),play:async({canvasElement:g})=>{const r=y(g).getByLabelText("Telefonnummer");o(r).toBeInTheDocument(),o(r.tagName).toBe("INPUT")}},z=["Default","WithInput","TestLabelsInput"];var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Fullt navn'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ds-size-2)'
  }}>
      <Label htmlFor="label-demo-input">E-postadresse</Label>
      <Input id="label-demo-input" type="email" />
    </div>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,x,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};export{t as Default,s as TestLabelsInput,n as WithInput,z as __namedExportsOrder,F as default};
