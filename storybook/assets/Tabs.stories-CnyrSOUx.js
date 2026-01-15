import{r as s,j as e}from"./iframe-C2ydNHeg.js";import{c as Q}from"./lite-DaUVFjkg.js";import{R as X,a as Y}from"./roving-focus-item-BNkD8E-i.js";import{u as $}from"./use-merge-refs-BaIN6LO6.js";import{S as W,a as k,b as U}from"./Newspaper-Bn7Vp3wh.js";import{B as Z}from"./button-Da4Zlyb9.js";const P=s.createContext({}),ee=s.forwardRef(function({value:t,defaultValue:l,className:u,onChange:r,...i},o){const b=s.useRef(null),d=t!==void 0,[T,f]=s.useState(l),[c,L]=s.useState(new Map);let C=r;return d||(C=j=>{f(j),r==null||r(j)},t=T),e.jsx(P.Provider,{value:{value:t,defaultValue:l,onChange:C,tablistRef:b,panelButtonMap:c,setPanelButtonMap:L},children:e.jsx("div",{className:Q("ds-tabs",u),ref:o,...i})})}),ae=s.forwardRef(function({children:t,...l},u){const{value:r,tablistRef:i}=s.useContext(P),o=$([u,i]);return e.jsx(X,{role:"tablist",activeValue:r,orientation:"ambiguous",ref:o,...l,children:t})}),se=s.forwardRef(function({children:t,value:l,id:u,...r},i){const{value:o,tablistRef:b,setPanelButtonMap:d}=s.useContext(P),T=l===o,f=s.useId(),c=u??`tabpanel-${f}`,[L,C]=s.useState(!1),[j,G]=s.useState(void 0),S=s.useRef(null),J=$([i,S]);return s.useEffect(()=>{if(!S.current)return;const v=S.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');C(v.length>0)},[t]),s.useEffect(()=>{var I;if(!b)return;const v=(I=b.current)==null?void 0:I.querySelector(`[role="tab"][data-value="${l}"]`);G(v?v.id:void 0),v&&(d==null||d(K=>new Map(K).set(v.id,c)))},[b]),e.jsx("div",{ref:J,id:c,role:"tabpanel",tabIndex:L?void 0:0,"aria-labelledby":j,hidden:!T,...r,children:t})}),te=s.forwardRef(function({value:t,id:l,onClick:u,...r},i){var T;const o=s.useContext(P),b=s.useId(),d=l??`tab-${b}`;return e.jsx(Y,{value:t,...r,asChild:!0,children:e.jsx("button",{ref:i,id:d,"aria-selected":o.value===t,"data-value":t,role:"tab",type:"button",onClick:f=>{var c;(c=o.onChange)==null||c.call(o,t),u==null||u(f)},"aria-controls":(T=o.panelButtonMap)==null?void 0:T.get(d),...r})})}),y=Object.assign(ee,{List:ae,Tab:te,Panel:se});y.Tab.displayName="Tabs.Tab";y.List.displayName="Tabs.List";y.Panel.displayName="Tabs.Panel";const a=y;try{a.displayName="Tabs",a.__docgenInfo={description:"",displayName:"Tabs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},value:{defaultValue:{value:"undefined"},description:"Controlled state for `Tabs` component",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:{value:"undefined"},description:"Default selected tab value",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"undefined"},description:"Callback with selected `TabItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}const ne={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},m={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},p={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:e.jsx(W,{"aria-hidden":!0})}),e.jsx(a.Tab,{value:"value2",children:e.jsx(k,{"aria-hidden":!0})}),e.jsx(a.Tab,{value:"value3",children:e.jsx(U,{"aria-hidden":!0})})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Airplane"}),e.jsx(a.Panel,{value:"value2",children:"Content for Newspaper"}),e.jsx(a.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"accent"},name:"Icons Only"},g={render:n=>{const[t,l]=s.useState("value1");return e.jsxs(e.Fragment,{children:[e.jsx(Z,{"data-size":"sm",onClick:()=>l("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),e.jsxs(a,{...n,value:t,onChange:l,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"brand1"}},h={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Large Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Large Tab 2"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Large Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"},x={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsxs(a.Tab,{value:"value1",children:[e.jsx(W,{"aria-hidden":!0,style:{marginRight:6}}),"Fly"]}),e.jsxs(a.Tab,{value:"value2",children:[e.jsx(k,{"aria-hidden":!0,style:{marginRight:6}}),"Nyheter"]}),e.jsxs(a.Tab,{value:"value3",children:[e.jsx(U,{"aria-hidden":!0,style:{marginRight:6}}),"Hund"]})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Fly"}),e.jsx(a.Panel,{value:"value2",children:"Content for Nyheter"}),e.jsx(a.Panel,{value:"value3",children:"Content for Hund"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"},name:"Icons with Text"};var V,z,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(z=m.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var w,N,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var D,B,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(B=g.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var O,q,F;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var A,M,H;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(M=x.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const le=["Default","IconsOnly","Controlled","LargeSize","IconsWithText"],ce=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:m,IconsOnly:p,IconsWithText:x,LargeSize:h,__namedExportsOrder:le,default:ne},Symbol.toStringTag,{value:"Module"}));export{g as C,p as I,h as L,ce as T,a};
