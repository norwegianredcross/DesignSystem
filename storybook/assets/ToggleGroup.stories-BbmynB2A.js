import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-D4lIrffr.js";import{c as U}from"./lite-DaUVFjkg.js";import{R as B,a as F}from"./RovingFocusItem-CQ3tg9z1.js";import{B as R}from"./Button-_80U_wOV.js";import{T as v}from"./index-tKn8NwD3.js";import{S as H,a as M,b as W,c as $,d as N,e as _}from"./Paperplane-CO_wNrI8.js";import{S as q}from"./EnvelopeClosed-BjY-vqgD.js";import{D as J}from"./Divider-ZGno9OH3.js";import{P as K}from"./Paragraph-CJciD5B6.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-Cb-ENzfG.js";import"./Spinner-Dj2HLJn9.js";import"./floating-ui.dom-D8S3B1vO.js";import"./useId-Dtjwz75n.js";const E=i.createContext({}),Q=i.forwardRef(function({children:l,value:o,defaultValue:a,onChange:n,name:s,className:p,...g},D){const P=i.useId(),L=o!==void 0,[O,w]=i.useState(a);let h=n;return L||(h=I=>{w(I),n==null||n(I)},o=O),e.jsx(E.Provider,{value:{value:o,defaultValue:a,name:s??`togglegroup-name-${P}`,onChange:h},children:e.jsx(B,{asChild:!0,activeValue:o,orientation:"ambiguous",children:e.jsxs("div",{className:U("ds-togglegroup",p),role:"radiogroup",ref:D,...g,children:[s&&e.jsx("input",{type:"hidden",name:s,value:o}),l]})})})}),X=r=>{const{...l}=r,o=i.useId(),a=i.useContext(E),n=r.value??o,s=a.value===n,p=`togglegroup-item-${i.useId()}`;return{...l,active:s,value:n,buttonProps:{id:p,"aria-checked":s,"aria-current":s,role:"radio",name:a.name,onClick:()=>{var g;(g=a.onChange)==null||g.call(a,n)}}}},Y=i.forwardRef(function(l,o){const{active:a,buttonProps:n,value:s}=X(l);return e.jsx(F,{asChild:!0,value:s,children:e.jsx(R,{variant:a?"primary":"tertiary",ref:o,...l,...n})})}),A=Object.assign(Q,{Item:Y});A.Item.displayName="ToggleGroup.Item";const t=A,he={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},d={name:"Example Default",render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-size":"md","data-color":"neutral"}},u={name:"Example Icon Only with Tooltip",render:r=>e.jsxs(t,{...r,children:[e.jsx(v,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",children:e.jsx(H,{title:"Venstrestilt",fontSize:"1.5rem"})})}),e.jsx(v,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",children:e.jsx(M,{title:"Midtstilt",fontSize:"1.5rem"})})}),e.jsx(v,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",children:e.jsx(W,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-size":"md","data-color":"accent"}},m={name:"Example Controlled with Icons",render:r=>{const[l,o]=i.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...r,value:l,onChange:o,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(q,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx($,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(N,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx(_,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(J,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(K,{children:["Du har valgt: ",l]}),e.jsx(R,{"data-size":"sm",onClick:()=>o("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-size":"md","data-color":"brand1"}},c={name:"Example Large Size",render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-size":"lg","data-color":"neutral"}};var x,f,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Default',
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>\r
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>\r
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>\r
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>\r
    </ToggleGroup>,
  args: {
    defaultValue: 'innboks',
    name: 'folder-toggle',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var G,j,S;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Example Icon Only with Tooltip',
  render: args => <ToggleGroup {...args}>\r
      <Tooltip content="Venstrestilt">\r
        <ToggleGroup.Item value="option-1">\r
          <AlignLeftIcon title="Venstrestilt" fontSize="1.5rem" />\r
        </ToggleGroup.Item>\r
      </Tooltip>\r
      <Tooltip content="Midtstilt">\r
        <ToggleGroup.Item value="option-2">\r
          <AlignCenterIcon title="Midtstilt" fontSize="1.5rem" />\r
        </ToggleGroup.Item>\r
      </Tooltip>\r
      <Tooltip content="Høyrestilt">\r
        <ToggleGroup.Item value="option-3">\r
          <AlignRightIcon title="Høyrestilt" fontSize="1.5rem" />\r
        </ToggleGroup.Item>\r
      </Tooltip>\r
    </ToggleGroup>,
  args: {
    defaultValue: 'option-1',
    name: 'alignment-icon-toggle',
    'data-size': 'md',
    // Example size
    'data-color': 'accent' // Example color
  }
}`,...(S=(j=u.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,z,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Example Controlled with Icons',
  render: args => {
    const [value, setValue] = useState<string>('utkast');
    return <>\r
        <ToggleGroup {...args} value={value} onChange={setValue}>\r
          <ToggleGroup.Item value="innboks">\r
            <EnvelopeClosedIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Innboks\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="utkast">\r
            <DocPencilIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Utkast\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="arkiv">\r
            <ArchiveIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Arkiv\r
          </ToggleGroup.Item>\r
          <ToggleGroup.Item value="sendt">\r
            <PaperplaneIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />\r
            Sendt\r
          </ToggleGroup.Item>\r
        </ToggleGroup>\r
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />\r
        <Paragraph>Du har valgt: {value}</Paragraph>\r
        <Button data-size="sm" onClick={() => setValue('arkiv')} style={{
        marginTop: 'var(--ds-size-2)'
      }}>\r
          Velg Arkiv\r
        </Button>\r
      </>;
  },
  args: {
    name: 'controlled-folder-toggle-icons',
    'data-size': 'md',
    'data-color': 'brand1'
  }
}`,...(y=(z=m.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var b,V,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Large Size',
  render: args => <ToggleGroup {...args}>\r
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>\r
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>\r
    </ToggleGroup>,
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(C=(V=c.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const Ie=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize"];export{m as ControlledWithIcons,d as Default,u as IconOnlyWithTooltip,c as LargeSize,Ie as __namedExportsOrder,he as default};
