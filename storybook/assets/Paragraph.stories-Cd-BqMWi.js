import{j as e}from"./iframe-Dv40QWHu.js";import{P as a}from"./index-BDqWWZL_.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-jy6F9jbP.js";import"./index-Bwq1UrUV.js";import"./index-DwDbYEVI.js";const{expect:o,within:k}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Paragraph",component:a,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg","xl"],description:"Text size"},variant:{control:"select",options:["default","long"],description:"Variant tuned for short or long-form text"}}},t={args:{children:"Røde Kors hjelper mennesker i sårbare livssituasjoner — lokalt, nasjonalt og internasjonalt."}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{"data-size":"xs",children:"Ekstra liten tekst"}),e.jsx(a,{"data-size":"sm",children:"Liten tekst"}),e.jsx(a,{"data-size":"md",children:"Medium tekst"}),e.jsx(a,{"data-size":"lg",children:"Stor tekst"})]})},r={name:"Test: Renders Text",args:{children:"Avsnittstekst","data-size":"md"},play:async({canvasElement:u})=>{const n=k(u).getByText("Avsnittstekst");o(n).toBeInTheDocument(),o(n.tagName).toBe("P")}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Røde Kors hjelper mennesker i sårbare livssituasjoner — lokalt, nasjonalt og internasjonalt.'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph data-size="xs">Ekstra liten tekst</Paragraph>
      <Paragraph data-size="sm">Liten tekst</Paragraph>
      <Paragraph data-size="md">Medium tekst</Paragraph>
      <Paragraph data-size="lg">Stor tekst</Paragraph>
    </>
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Test: Renders Text',
  args: {
    children: 'Avsnittstekst',
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText('Avsnittstekst');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const R=["Default","Sizes","TestRendersText"];export{t as Default,s as Sizes,r as TestRendersText,R as __namedExportsOrder,E as default};
