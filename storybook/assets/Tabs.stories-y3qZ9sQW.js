import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{c as E}from"./lite-DaUVFjkg.js";import{R as B,a as N}from"./RovingFocusItem-CQ3tg9z1.js";import{u as O}from"./floating-ui.react-VFS6-CKd.js";import{B as k}from"./Button-_80U_wOV.js";import"./index-Cb-ENzfG.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Spinner-Dj2HLJn9.js";const g=s.createContext({}),F=s.forwardRef(function({value:r,defaultValue:l,className:o,onChange:n,...u},c){const b=r!==void 0,[C,d]=s.useState(l);let i=n;return b||(i=T=>{d(T),n==null||n(T)},r=C),a.jsx(g.Provider,{value:{value:r,defaultValue:l,onChange:i},children:a.jsx("div",{className:E("ds-tabs",o),ref:c,...u})})}),A=s.forwardRef(function({children:r,...l},o){const{value:n}=s.useContext(g);return a.jsx(B,{role:"tablist",activeValue:n,orientation:"ambiguous",ref:o,...l,children:r})}),$=s.forwardRef(function({children:r,value:l,...o},n){const{value:u}=s.useContext(g),c=l===u,[b,C]=s.useState(!1),d=s.useRef(null),i=O([n,d]);return s.useEffect(()=>{if(!d.current)return;const T=d.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');C(T.length>0)},[r]),a.jsx(a.Fragment,{children:c&&a.jsx("div",{ref:i,role:"tabpanel",tabIndex:b?void 0:0,...o,children:r})})}),_=s.forwardRef(function({value:r,id:l,...o},n){const u=s.useContext(g),c=l??`tab-${s.useId()}`;return a.jsx(N,{value:r,...o,asChild:!0,children:a.jsx("button",{...o,"aria-selected":u.value===r,id:c,onClick:()=>{var b;return(b=u.onChange)==null?void 0:b.call(u,r)},ref:n,role:"tab",type:"button"})})}),x=Object.assign(F,{List:A,Tab:_,Panel:$});x.Tab.displayName="Tabs.Tab";x.List.displayName="Tabs.List";x.Panel.displayName="Tabs.Panel";const e=x,Y={title:"Components/Tabs",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},v={render:t=>a.jsxs(e,{...t,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},m={render:t=>a.jsxs(e,{...t,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1"}),a.jsx(e.Tab,{value:"value2"}),a.jsx(e.Tab,{value:"value3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Airplane"}),a.jsx(e.Panel,{value:"value2",children:"Content for Newspaper"}),a.jsx(e.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},f={render:t=>{const[r,l]=s.useState("value1");return a.jsxs(a.Fragment,{children:[a.jsx(k,{"data-size":"sm",onClick:()=>l("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),a.jsxs(e,{...t,value:r,onChange:l,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Tab 2"}),a.jsx(e.Tab,{value:"value3",children:"Tab 3"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),a.jsx(e.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),a.jsx(e.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},p={render:t=>a.jsxs(e,{...t,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{value:"value1",children:"Large Tab 1"}),a.jsx(e.Tab,{value:"value2",children:"Large Tab 2"})]}),a.jsx(e.Panel,{value:"value1",children:"Content for Large Tab 1"}),a.jsx(e.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"};var h,j,P;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(P=(j=v.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,y,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(y=m.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var V,S,R;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(S=f.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var w,I,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Z=["Default","IconsOnly","Controlled","LargeSize"];export{f as Controlled,v as Default,m as IconsOnly,p as LargeSize,Z as __namedExportsOrder,Y as default};
