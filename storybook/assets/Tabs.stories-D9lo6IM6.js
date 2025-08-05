import{r,j as e}from"./iframe-BgQDqsRD.js";import{c as w}from"./lite-DaUVFjkg.js";import{R as N,a as E}from"./RovingFocusItem-CsN7JP89.js";import{u as q}from"./floating-ui.react-CwLPqv5Y.js";import{B}from"./Button-BlzxS4St.js";import"./preload-helper-C1FmrZbK.js";import"./index-CZKmP7yi.js";import"./index-BpTns393.js";import"./index-BW23gSyK.js";import"./Spinner-hp7OaP2G.js";const g=r.createContext({}),O=r.forwardRef(function({value:s,defaultValue:l,className:o,onChange:n,...u},i){const d=s!==void 0,[h,b]=r.useState(l);let c=n;return d||(c=T=>{b(T),n==null||n(T)},s=h),e.jsx(g.Provider,{value:{value:s,defaultValue:l,onChange:c},children:e.jsx("div",{className:w("ds-tabs",o),ref:i,...u})})}),k=r.forwardRef(function({children:s,...l},o){const{value:n}=r.useContext(g);return e.jsx(N,{role:"tablist",activeValue:n,orientation:"ambiguous",ref:o,...l,children:s})}),F=r.forwardRef(function({children:s,value:l,...o},n){const{value:u}=r.useContext(g),i=l===u,[d,h]=r.useState(!1),b=r.useRef(null),c=q([n,b]);return r.useEffect(()=>{if(!b.current)return;const T=b.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');h(T.length>0)},[s]),e.jsx(e.Fragment,{children:i&&e.jsx("div",{ref:c,role:"tabpanel",tabIndex:d?void 0:0,...o,children:s})})}),A=r.forwardRef(function({value:s,id:l,...o},n){const u=r.useContext(g),i=l??`tab-${r.useId()}`;return e.jsx(E,{value:s,...o,asChild:!0,children:e.jsx("button",{...o,"aria-selected":u.value===s,id:i,onClick:()=>{var d;return(d=u.onChange)==null?void 0:d.call(u,s)},ref:n,role:"tab",type:"button"})})}),x=Object.assign(O,{List:k,Tab:A,Panel:F});x.Tab.displayName="Tabs.Tab";x.List.displayName="Tabs.List";x.Panel.displayName="Tabs.Panel";const a=x;try{a.displayName="Tabs",a.__docgenInfo={description:"",displayName:"Tabs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}const Y={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},v={render:t=>e.jsxs(a,{...t,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},m={render:t=>e.jsxs(a,{...t,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1"}),e.jsx(a.Tab,{value:"value2"}),e.jsx(a.Tab,{value:"value3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Airplane"}),e.jsx(a.Panel,{value:"value2",children:"Content for Newspaper"}),e.jsx(a.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},f={render:t=>{const[s,l]=r.useState("value1");return e.jsxs(e.Fragment,{children:[e.jsx(B,{"data-size":"sm",onClick:()=>l("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),e.jsxs(a,{...t,value:s,onChange:l,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},p={render:t=>e.jsxs(a,{...t,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Large Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Large Tab 2"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Large Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"};var C,j,P;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(j=v.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,y,V;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(y=m.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var z,S,R;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(S=f.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var _,D,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Z=["Default","IconsOnly","Controlled","LargeSize"];export{f as Controlled,v as Default,m as IconsOnly,p as LargeSize,Z as __namedExportsOrder,Y as default};
