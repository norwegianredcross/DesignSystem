import{r as t,j as e}from"./iframe-DzHbI1Bv.js";import{c as k}from"./lite-DaUVFjkg.js";import{R as H,a as U}from"./roving-focus-item-CBXqMeb5.js";import{u as M}from"./use-merge-refs-B76l2vM2.js";import{B as G}from"./button-BtbJBmjo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-a3BGFc.js";import"./spinner-C6XrOK33.js";const j=t.createContext({}),J=t.forwardRef(function({value:s,defaultValue:l,className:u,onChange:n,...b},o){const i=t.useRef(null),d=s!==void 0,[T,f]=t.useState(l),[c,y]=t.useState(new Map);let m=n;return d||(m=p=>{f(p),n==null||n(p)},s=T),e.jsx(j.Provider,{value:{value:s,defaultValue:l,onChange:m,tablistRef:i,panelButtonMap:c,setPanelButtonMap:y},children:e.jsx("div",{className:k("ds-tabs",u),ref:o,...b})})}),K=t.forwardRef(function({children:s,...l},u){const{value:n,tablistRef:b}=t.useContext(j),o=M([u,b]);return e.jsx(H,{role:"tablist",activeValue:n,orientation:"ambiguous",ref:o,...l,children:s})}),Q=t.forwardRef(function({children:s,value:l,id:u,...n},b){const{value:o,tablistRef:i,setPanelButtonMap:d}=t.useContext(j),T=l===o,f=t.useId(),c=u??`tabpanel-${f}`,[y,m]=t.useState(!1),[p,$]=t.useState(void 0),L=t.useRef(null),A=M([b,L]);return t.useEffect(()=>{if(!L.current)return;const v=L.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');m(v.length>0)},[s]),t.useEffect(()=>{var V;if(!i)return;const v=(V=i.current)==null?void 0:V.querySelector(`[role="tab"][data-value="${l}"]`);$(v?v.id:void 0),v&&(d==null||d(F=>new Map(F).set(v.id,c)))},[i]),e.jsx("div",{ref:A,id:c,role:"tabpanel",tabIndex:y?void 0:0,"aria-labelledby":p,hidden:!T,...n,children:s})}),W=t.forwardRef(function({value:s,id:l,onClick:u,...n},b){var T;const o=t.useContext(j),i=t.useId(),d=l??`tab-${i}`;return e.jsx(U,{value:s,...n,asChild:!0,children:e.jsx("button",{ref:b,id:d,"aria-selected":o.value===s,"data-value":s,role:"tab",type:"button",onClick:f=>{var c;(c=o.onChange)==null||c.call(o,s),u==null||u(f)},"aria-controls":(T=o.panelButtonMap)==null?void 0:T.get(d),...n})})}),P=Object.assign(J,{List:K,Tab:W,Panel:Q});P.Tab.displayName="Tabs.Tab";P.List.displayName="Tabs.List";P.Panel.displayName="Tabs.Panel";const a=P;try{a.displayName="Tabs",a.__docgenInfo={description:"",displayName:"Tabs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},value:{defaultValue:{value:"undefined"},description:"Controlled state for `Tabs` component",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"undefined"},description:"Default selected tab value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"undefined"},description:"Callback with selected `TabItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}const le={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},g={render:r=>e.jsxs(a,{...r,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},x={render:r=>e.jsxs(a,{...r,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1"}),e.jsx(a.Tab,{value:"value2"}),e.jsx(a.Tab,{value:"value3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Airplane"}),e.jsx(a.Panel,{value:"value2",children:"Content for Newspaper"}),e.jsx(a.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},h={render:r=>{const[s,l]=t.useState("value1");return e.jsxs(e.Fragment,{children:[e.jsx(G,{"data-size":"sm",onClick:()=>l("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),e.jsxs(a,{...r,value:s,onChange:l,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},C={render:r=>e.jsxs(a,{...r,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Large Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Large Tab 2"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Large Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"};var z,S,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>\r
      <Tabs.List>\r
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>\r
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>\r
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>\r
      </Tabs.List>\r
      <Tabs.Panel value="value1">Content for Tab 1</Tabs.Panel>\r
      <Tabs.Panel value="value2">Content for Tab 2</Tabs.Panel>\r
      <Tabs.Panel value="value3">Content for Tab 3</Tabs.Panel>\r
    </Tabs>,
  args: {
    defaultValue: 'value1',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(R=(S=g.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var I,w,B;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>\r
      <Tabs.List>\r
        <Tabs.Tab value="value1">\r
          \r
        </Tabs.Tab>\r
        <Tabs.Tab value="value2">\r
          \r
        </Tabs.Tab>\r
        <Tabs.Tab value="value3">\r
          \r
        </Tabs.Tab>\r
      </Tabs.List>\r
      <Tabs.Panel value="value1">Content for Airplane</Tabs.Panel>\r
      <Tabs.Panel value="value2">Content for Newspaper</Tabs.Panel>\r
      <Tabs.Panel value="value3">Content for Dog</Tabs.Panel>\r
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
    return <>\r
        <Button data-size="sm" onClick={() => setValue('value3')} style={{
        marginBottom: '1rem'
      }}>\r
          Choose Tab 3\r
        </Button>\r
        <Tabs {...args} value={value} onChange={setValue}>\r
          <Tabs.List>\r
            <Tabs.Tab value="value1">\r
              \r
              Tab 1\r
            </Tabs.Tab>\r
            <Tabs.Tab value="value2">\r
              \r
              Tab 2\r
            </Tabs.Tab>\r
            <Tabs.Tab value="value3">\r
              \r
              Tab 3\r
            </Tabs.Tab>\r
          </Tabs.List>\r
          <Tabs.Panel value="value1">Content for Tab 1 (Controlled)</Tabs.Panel>\r
          <Tabs.Panel value="value2">Content for Tab 2 (Controlled)</Tabs.Panel>\r
          <Tabs.Panel value="value3">Content for Tab 3 (Controlled)</Tabs.Panel>\r
        </Tabs>\r
      </>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'brand1'
  }
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,q,O;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>\r
      <Tabs.List>\r
        <Tabs.Tab value="value1">Large Tab 1</Tabs.Tab>\r
        <Tabs.Tab value="value2">Large Tab 2</Tabs.Tab>\r
      </Tabs.List>\r
      <Tabs.Panel value="value1">Content for Large Tab 1</Tabs.Panel>\r
      <Tabs.Panel value="value2">Content for Large Tab 2</Tabs.Panel>\r
    </Tabs>,
  args: {
    defaultValue: 'value1',
    'data-size': 'lg',
    'data-color': 'neutral'
  },
  name: 'Large Size'
}`,...(O=(q=C.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const ne=["Default","IconsOnly","Controlled","LargeSize"];export{h as Controlled,g as Default,x as IconsOnly,C as LargeSize,ne as __namedExportsOrder,le as default};
