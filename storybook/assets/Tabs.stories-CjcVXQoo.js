import{j as a,r as R}from"./iframe-Ddg3SACN.js";import{T as e}from"./index-1PQN7STK.js";import{B as _}from"./tooltip-D-Mh9bHZ.js";import{S as I,a as D,b as A}from"./Newspaper-BRJWr1_Z.js";const{expect:n,within:N,userEvent:O,waitFor:H}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Tabs",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},r={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},o={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1","aria-label":"Airplane",children:a.jsx(I,{"aria-hidden":!0})}),a.jsx(e.Tab,{value:"value2","aria-label":"Newspaper",children:a.jsx(D,{"aria-hidden":!0})}),a.jsx(e.Tab,{value:"value3","aria-label":"Dog",children:a.jsx(A,{"aria-hidden":!0})})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Airplane"}),a.jsx(e.Panel,{value:"value2",children:"Content for Newspaper"}),a.jsx(e.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},u={render:l=>{const[t,s]=R.useState("value1");return a.jsxs(a.Fragment,{children:[a.jsx(_,{"data-size":"sm",onClick:()=>s("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),a.jsxs(e,{...l,value:t,onChange:s,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},b={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Large Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Large Tab 2"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Large Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"},i={render:l=>a.jsxs(e,{...l,children:[a.jsxs(e.List,{children:[a.jsxs(e.Tab,{value:"value1",children:[a.jsx(I,{"aria-hidden":!0,style:{marginRight:6}}),"Fly"]}),a.jsxs(e.Tab,{value:"value2",children:[a.jsx(D,{"aria-hidden":!0,style:{marginRight:6}}),"Nyheter"]}),a.jsxs(e.Tab,{value:"value3",children:[a.jsx(A,{"aria-hidden":!0,style:{marginRight:6}}),"Hund"]})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Fly"}),a.jsx(e.Panel,{value:"value2",children:"Content for Nyheter"}),a.jsx(e.Panel,{value:"value3",children:"Content for Hund"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"},name:"Icons with Text"},T={name:"Test: Interaction",render:()=>a.jsxs(e,{defaultValue:"value1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3"})]}),play:async({canvasElement:l})=>{const t=N(l);n(t.getByText("Content for Tab 1")).toBeVisible();const s=t.getByRole("tab",{name:/tab 1/i});n(s).toHaveAttribute("aria-selected","true");const d=t.getByRole("tab",{name:/tab 2/i});await O.click(d),await H(()=>{n(d).toHaveAttribute("aria-selected","true")}),n(s).toHaveAttribute("aria-selected","false"),n(t.getByText("Content for Tab 2")).toBeVisible()}};var c,v,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,m,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1" aria-label="Airplane">
          <AirplaneIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value2" aria-label="Newspaper">
          <NewspaperIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value3" aria-label="Dog">
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,f,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(f=u.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var j,P,y;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(P=b.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var L,S,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var V,z,B;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Tabs defaultValue="value1">
      <Tabs.List>
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Tab 1</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Tab 2</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Tab 3</Tabs.Panel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Default tab content should be visible
    expect(canvas.getByText('Content for Tab 1')).toBeVisible();

    // First tab should be selected
    const tab1 = canvas.getByRole('tab', {
      name: /tab 1/i
    });
    expect(tab1).toHaveAttribute('aria-selected', 'true');

    // Click second tab
    const tab2 = canvas.getByRole('tab', {
      name: /tab 2/i
    });
    await userEvent.click(tab2);

    // Second tab should now be selected
    await waitFor(() => {
      expect(tab2).toHaveAttribute('aria-selected', 'true');
    });
    expect(tab1).toHaveAttribute('aria-selected', 'false');

    // Second panel content should be visible
    expect(canvas.getByText('Content for Tab 2')).toBeVisible();
  }
}`,...(B=(z=T.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const F=["Default","IconsOnly","Controlled","LargeSize","IconsWithText","TestInteraction"],U=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:r,IconsOnly:o,IconsWithText:i,LargeSize:b,TestInteraction:T,__namedExportsOrder:F,default:E},Symbol.toStringTag,{value:"Module"}));export{u as C,o as I,b as L,U as T};
