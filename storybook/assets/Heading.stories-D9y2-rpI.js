import{j as e}from"./iframe-Bi7M_svo.js";import{H as a}from"./index-DvR9mC17.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-LmCyz6mm.js";import"./index-CRMQxZxa.js";import"./index-CnBq4m-l.js";const{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Heading",component:a,tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6],description:"Semantic heading level (required)"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl","2xl"],description:"Visual size, independent of semantic level"}}},n={args:{level:2,children:"En overskrift"}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{level:1,"data-size":"xl",children:"Nivå 1"}),e.jsx(a,{level:2,"data-size":"lg",children:"Nivå 2"}),e.jsx(a,{level:3,"data-size":"md",children:"Nivå 3"}),e.jsx(a,{level:4,"data-size":"sm",children:"Nivå 4"}),e.jsx(a,{level:5,"data-size":"xs",children:"Nivå 5"}),e.jsx(a,{level:6,"data-size":"2xs",children:"Nivå 6"})]})},t={name:"Test: Semantic Level",args:{level:2,"data-size":"lg",children:"Semantisk overskrift"},play:async({canvasElement:x})=>{const i=u(x).getByRole("heading",{level:2,name:"Semantisk overskrift"});l(i).toBeInTheDocument(),l(i.tagName).toBe("H2")}};var r,o,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'En overskrift'
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,m,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <>
      <Heading level={1} data-size="xl">Nivå 1</Heading>
      <Heading level={2} data-size="lg">Nivå 2</Heading>
      <Heading level={3} data-size="md">Nivå 3</Heading>
      <Heading level={4} data-size="sm">Nivå 4</Heading>
      <Heading level={5} data-size="xs">Nivå 5</Heading>
      <Heading level={6} data-size="2xs">Nivå 6</Heading>
    </>
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,p,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Test: Semantic Level',
  args: {
    level: 2,
    'data-size': 'lg',
    children: 'Semantisk overskrift'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The visual size must not change the semantic level
    const heading = canvas.getByRole('heading', {
      level: 2,
      name: 'Semantisk overskrift'
    });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const E=["Default","AllLevels","TestSemanticLevel"];export{s as AllLevels,n as Default,t as TestSemanticLevel,E as __namedExportsOrder,j as default};
