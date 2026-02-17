import{j as a,r as I}from"./iframe-hwVlxbHl.js";import{T as e}from"./index-FrnfKsl2.js";import{S as L,a as y,b as z}from"./Newspaper-D-kd2-Iu.js";import{B as V}from"./button-Djbm8O4N.js";const w={title:"Components/Tabs",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},s={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},r={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:a.jsx(L,{"aria-hidden":!0})}),a.jsx(e.Tab,{value:"value2",children:a.jsx(y,{"aria-hidden":!0})}),a.jsx(e.Tab,{value:"value3",children:a.jsx(z,{"aria-hidden":!0})})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Airplane"}),a.jsx(e.Panel,{value:"value2",children:"Content for Newspaper"}),a.jsx(e.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},n={render:l=>{const[S,u]=I.useState("value1");return a.jsxs(a.Fragment,{children:[a.jsx(V,{"data-size":"sm",onClick:()=>u("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),a.jsxs(e,{...l,value:S,onChange:u,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},t={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Large Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Large Tab 2"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Large Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"},o={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsxs(e.Tab,{value:"value1",children:[a.jsx(L,{"aria-hidden":!0,style:{marginRight:6}}),"Fly"]}),a.jsxs(e.Tab,{value:"value2",children:[a.jsx(y,{"aria-hidden":!0,style:{marginRight:6}}),"Nyheter"]}),a.jsxs(e.Tab,{value:"value3",children:[a.jsx(z,{"aria-hidden":!0,style:{marginRight:6}}),"Hund"]})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Fly"}),a.jsx(e.Panel,{value:"value2",children:"Content for Nyheter"}),a.jsx(e.Panel,{value:"value3",children:"Content for Hund"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"},name:"Icons with Text"};var d,b,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Tab 1</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Tab 2</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Tab 3</Tabs.Panel>
    </Tabs>,
  args: {
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(i=(b=s.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};var T,c,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">
          <AirplaneIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value2">
          <NewspaperIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value3">
          <DogIcon aria-hidden />
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Airplane</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Newspaper</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Dog</Tabs.Panel>
    </Tabs>,
  args: {
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'accent'
  },
  name: 'Icons Only'
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var g,h,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('value1');
    return <>
        <Button data-size="sm" onClick={() => setValue('value3')} style={{
        marginBottom: '1rem'
      }}>
          Choose Tab 3
        </Button>
        <Tabs {...args} value={value} onChange={setValue}>
          <Tabs.List>
            <Tabs.Tab value="value1">
              
              Tab 1
            </Tabs.Tab>
            <Tabs.Tab value="value2">
              
              Tab 2
            </Tabs.Tab>
            <Tabs.Tab value="value3">
              
              Tab 3
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="value1">Content for Tab 1 (Controlled)</Tabs.Panel>
          <Tabs.Panel value="value2">Content for Tab 2 (Controlled)</Tabs.Panel>
          <Tabs.Panel value="value3">Content for Tab 3 (Controlled)</Tabs.Panel>
        </Tabs>
      </>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'brand1'
  }
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,x,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">Large Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Large Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Large Tab 1</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Large Tab 2</Tabs.Panel>
    </Tabs>,
  args: {
    defaultValue: 'value1',
    'data-size': 'lg',
    'data-color': 'neutral'
  },
  name: 'Large Size'
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,C,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">
          <AirplaneIcon aria-hidden style={{
          marginRight: 6
        }} />
          Fly
        </Tabs.Tab>
        <Tabs.Tab value="value2">
          <NewspaperIcon aria-hidden style={{
          marginRight: 6
        }} />
          Nyheter
        </Tabs.Tab>
        <Tabs.Tab value="value3">
          <DogIcon aria-hidden style={{
          marginRight: 6
        }} />
          Hund
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Fly</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Nyheter</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Hund</Tabs.Panel>
    </Tabs>,
  args: {
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Icons with Text'
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const D=["Default","IconsOnly","Controlled","LargeSize","IconsWithText"],_=Object.freeze(Object.defineProperty({__proto__:null,Controlled:n,Default:s,IconsOnly:r,IconsWithText:o,LargeSize:t,__namedExportsOrder:D,default:w},Symbol.toStringTag,{value:"Module"}));export{n as C,r as I,t as L,_ as T};
