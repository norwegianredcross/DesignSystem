import{r as t,j as e}from"./iframe-oM6kkPRq.js";import{c as k}from"./lite-DaUVFjkg.js";import{R as H,a as U}from"./roving-focus-item-BOMwXGcS.js";import{u as M}from"./use-merge-refs-EkTjo_n2.js";import{B as G}from"./button-B0vJVTJ4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ke8tXgG5.js";import"./spinner-D435yQi5.js";const j=t.createContext({}),J=t.forwardRef(function({value:s,defaultValue:n,className:u,onChange:r,...b},o){const i=t.useRef(null),d=s!==void 0,[T,f]=t.useState(n),[c,y]=t.useState(new Map);let m=r;return d||(m=p=>{f(p),r==null||r(p)},s=T),e.jsx(j.Provider,{value:{value:s,defaultValue:n,onChange:m,tablistRef:i,panelButtonMap:c,setPanelButtonMap:y},children:e.jsx("div",{className:k("ds-tabs",u),ref:o,...b})})}),K=t.forwardRef(function({children:s,...n},u){const{value:r,tablistRef:b}=t.useContext(j),o=M([u,b]);return e.jsx(H,{role:"tablist",activeValue:r,orientation:"ambiguous",ref:o,...n,children:s})}),Q=t.forwardRef(function({children:s,value:n,id:u,...r},b){const{value:o,tablistRef:i,setPanelButtonMap:d}=t.useContext(j),T=n===o,f=t.useId(),c=u??`tabpanel-${f}`,[y,m]=t.useState(!1),[p,$]=t.useState(void 0),L=t.useRef(null),A=M([b,L]);return t.useEffect(()=>{if(!L.current)return;const v=L.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');m(v.length>0)},[s]),t.useEffect(()=>{var V;if(!i)return;const v=(V=i.current)==null?void 0:V.querySelector(`[role="tab"][data-value="${n}"]`);$(v?v.id:void 0),v&&(d==null||d(F=>new Map(F).set(v.id,c)))},[i]),e.jsx("div",{ref:A,id:c,role:"tabpanel",tabIndex:y?void 0:0,"aria-labelledby":p,hidden:!T,...r,children:s})}),W=t.forwardRef(function({value:s,id:n,onClick:u,...r},b){var T;const o=t.useContext(j),i=t.useId(),d=n??`tab-${i}`;return e.jsx(U,{value:s,...r,asChild:!0,children:e.jsx("button",{ref:b,id:d,"aria-selected":o.value===s,"data-value":s,role:"tab",type:"button",onClick:f=>{var c;(c=o.onChange)==null||c.call(o,s),u==null||u(f)},"aria-controls":(T=o.panelButtonMap)==null?void 0:T.get(d),...r})})}),P=Object.assign(J,{List:K,Tab:W,Panel:Q});P.Tab.displayName="Tabs.Tab";P.List.displayName="Tabs.List";P.Panel.displayName="Tabs.Panel";const a=P;try{a.displayName="Tabs",a.__docgenInfo={description:"",displayName:"Tabs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},value:{defaultValue:{value:"undefined"},description:"Controlled state for `Tabs` component",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"undefined"},description:"Default selected tab value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"undefined"},description:"Callback with selected `TabItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}const ne={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},g={render:l=>e.jsxs(a,{...l,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},x={render:l=>e.jsxs(a,{...l,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1"}),e.jsx(a.Tab,{value:"value2"}),e.jsx(a.Tab,{value:"value3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Airplane"}),e.jsx(a.Panel,{value:"value2",children:"Content for Newspaper"}),e.jsx(a.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},h={render:l=>{const[s,n]=t.useState("value1");return e.jsxs(e.Fragment,{children:[e.jsx(G,{"data-size":"sm",onClick:()=>n("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),e.jsxs(a,{...l,value:s,onChange:n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},C={render:l=>e.jsxs(a,{...l,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Large Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Large Tab 2"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Large Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"};var z,S,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(S=g.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var I,w,B;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1">
          
        </Tabs.Tab>
        <Tabs.Tab value="value2">
          
        </Tabs.Tab>
        <Tabs.Tab value="value3">
          
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
}`,...(B=(w=x.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var D,_,E;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,q,O;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(q=C.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const re=["Default","IconsOnly","Controlled","LargeSize"];export{h as Controlled,g as Default,x as IconsOnly,C as LargeSize,re as __namedExportsOrder,ne as default};
