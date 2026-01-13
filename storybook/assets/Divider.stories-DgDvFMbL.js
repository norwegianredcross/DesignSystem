import{j as e}from"./iframe-DMYzDG4n.js";import{D as h}from"./divider-C9jP8JDi.js";import{H as d}from"./heading-wcdicOCk.js";import{P as i}from"./paragraph-BNBCp-Ys.js";const a=h;try{a.displayName="Divider",a.__docgenInfo={description:"",displayName:"Divider",props:{}}}catch{}const v={title:"Components/Divider",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Divider is used to create a visual separation between content. It renders a simple horizontal line."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size of the divider",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes the color of the divider",defaultValue:"neutral"}}},t={render:r=>e.jsxs("div",{children:[e.jsx(d,{level:3,"data-size":"xs",children:"Section 1 Title"}),e.jsx(i,{children:"This is the first section of content. Dividers help visually separate distinct blocks of information, improving readability and structure."}),e.jsx(a,{...r}),e.jsx(d,{level:3,"data-size":"xs",children:"Section 2 Title"}),e.jsx(i,{children:"This is the second section, clearly separated from the first by the divider line above. It uses predefined CSS variables for styling."}),e.jsx(a,{...r}),e.jsx(i,{children:"More content can follow."})]}),args:{"data-color":"neutral","data-size":"md"}},s={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx(i,{children:'Dette er en "brand1" skillelinje.'}),e.jsx(a,{...r})]}),e.jsxs("div",{children:[e.jsx(i,{children:'Dette er en "brand2" skillelinje.'}),e.jsx(a,{...r,"data-color":"brand2"})]}),e.jsxs("div",{children:[e.jsx(i,{children:'Dette er en "lg" skillelinje.'}),e.jsx(a,{...r,"data-color":r["data-color"],"data-size":"lg"})]})]}),args:{"data-color":"brand1","data-size":"md"}};var o,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,p,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div>
        <Paragraph>Dette er en "brand1" skillelinje.</Paragraph>
        <Divider {...args} />
      </div>
      <div>
        <Paragraph>Dette er en "brand2" skillelinje.</Paragraph>
        <Divider {...args} data-color="brand2" />
      </div>
      <div>
        <Paragraph>Dette er en "lg" skillelinje.</Paragraph>
        <Divider {...args} data-color={args['data-color']} data-size="lg" />
      </div>
    </div>,
  args: {
    'data-color': 'brand1',
    'data-size': 'md'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const m=["Default","Colored"],D=Object.freeze(Object.defineProperty({__proto__:null,Colored:s,Default:t,__namedExportsOrder:m,default:v},Symbol.toStringTag,{value:"Module"}));export{s as C,D,t as a};
