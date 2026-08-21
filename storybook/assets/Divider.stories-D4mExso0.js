import{j as e}from"./iframe-B1NMHN1E.js";import{t as f,P as t,H as l}from"./tooltip-Dd6wzD4u.js";const r=f;try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{}}}catch{}const{expect:o}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Divider",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Divider is used to create a visual separation between content. It renders a simple horizontal line."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size of the divider",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes the color of the divider",defaultValue:"neutral"}}},s={render:a=>e.jsxs("div",{children:[e.jsx(l,{level:3,"data-size":"xs",children:"Section 1 Title"}),e.jsx(t,{children:"This is the first section of content. Dividers help visually separate distinct blocks of information, improving readability and structure."}),e.jsx(r,{...a}),e.jsx(l,{level:3,"data-size":"xs",children:"Section 2 Title"}),e.jsx(t,{children:"This is the second section, clearly separated from the first by the divider line above. It uses predefined CSS variables for styling."}),e.jsx(r,{...a}),e.jsx(t,{children:"More content can follow."})]}),args:{"data-color":"neutral","data-size":"md"}},d={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx(t,{children:'Dette er en "secondary-color-rust" skillelinje.'}),e.jsx(r,{...a})]}),e.jsxs("div",{children:[e.jsx(t,{children:'Dette er en "additional-color-ocean" skillelinje.'}),e.jsx(r,{...a,"data-color":"additional-color-ocean"})]}),e.jsxs("div",{children:[e.jsx(t,{children:'Dette er en "lg" skillelinje.'}),e.jsx(r,{...a,"data-color":a["data-color"],"data-size":"lg"})]})]}),args:{"data-color":"secondary-color-rust","data-size":"md"}},n={name:"Test: Static Contract",tags:["!autodocs"],render:a=>e.jsx(r,{...a}),args:{"data-color":"secondary-color-rust","data-size":"lg"},play:async({canvasElement:a})=>{const i=a.querySelector("hr");await o(i).toBeInTheDocument(),await o(i).toHaveClass("ds-divider"),await o(i).toHaveAttribute("aria-hidden","true"),await o(i).toHaveAttribute("data-color","secondary-color-rust"),await o(i).toHaveAttribute("data-size","lg")}};var c,p,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div>
      <Heading level={3} data-size="xs">
        Section 1 Title
      </Heading>
      <Paragraph>
        This is the first section of content. Dividers help visually separate
        distinct blocks of information, improving readability and structure.
      </Paragraph>

      <Divider {...args} /> 

      <Heading level={3} data-size="xs">
        Section 2 Title
      </Heading>
      <Paragraph>
        This is the second section, clearly separated from the first by the
        divider line above. It uses predefined CSS variables for styling.
      </Paragraph>

      <Divider {...args} /> 

      <Paragraph>More content can follow.</Paragraph>
    </div>,
  args: {
    'data-color': 'neutral',
    'data-size': 'md'
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var u,g,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div>
        <Paragraph>Dette er en "secondary-color-rust" skillelinje.</Paragraph>
        <Divider {...args} />
      </div>
      <div>
        <Paragraph>Dette er en "additional-color-ocean" skillelinje.</Paragraph>
        <Divider {...args} data-color="additional-color-ocean" />
      </div>
      <div>
        <Paragraph>Dette er en "lg" skillelinje.</Paragraph>
        <Divider {...args} data-color={args['data-color']} data-size="lg" />
      </div>
    </div>,
  args: {
    'data-color': 'secondary-color-rust',
    'data-size': 'md'
  }
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,y,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Test: Static Contract',
  tags: ['!autodocs'],
  render: args => <Divider {...args} />,
  args: {
    'data-color': 'secondary-color-rust',
    'data-size': 'lg'
  },
  play: async ({
    canvasElement
  }) => {
    const divider = canvasElement.querySelector('hr');
    await expect(divider).toBeInTheDocument();
    await expect(divider).toHaveClass('ds-divider');
    await expect(divider).toHaveAttribute('aria-hidden', 'true');
    await expect(divider).toHaveAttribute('data-color', 'secondary-color-rust');
    await expect(divider).toHaveAttribute('data-size', 'lg');
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const D=["Default","Colored","TestStaticContract"],_=Object.freeze(Object.defineProperty({__proto__:null,Colored:d,Default:s,TestStaticContract:n,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{d as C,_ as D,s as a};
