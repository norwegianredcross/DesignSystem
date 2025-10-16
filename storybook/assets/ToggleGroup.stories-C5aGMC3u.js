import{r as s,j as e}from"./iframe-CDFAJ_Fh.js";import{c as q}from"./lite-DaUVFjkg.js";import{R as F,a as U}from"./roving-focus-item-Xij2x8C8.js";import{B as R}from"./button-BW5FGdeT.js";import{T as f}from"./index-3Au7Fkhu.js";import{a as B,S as H,b as M,d as N,c as W,e as $}from"./Paperplane-CfGhMux4.js";import{S as J}from"./EnvelopeClosed-ChhUoqVC.js";import{D as K}from"./divider-VV_7xdc8.js";import{P as Q}from"./paragraph-BbdkP82M.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYxErLs_.js";import"./use-merge-refs-CwQk-qeo.js";import"./spinner-BJZoTRgL.js";import"./floating-ui.dom-BOb7AeKv.js";import"./useId-BjA0csno.js";const E=s.createContext({}),X=s.forwardRef(function({children:n,variant:l="primary",value:o,defaultValue:i,onChange:r,name:d,className:v,...g},P){const L=s.useId(),O=o!==void 0,[_,w]=s.useState(i);let h=r;return O||(h=I=>{w(I),r==null||r(I)},o=_),e.jsx(E.Provider,{value:{variant:l,value:o,defaultValue:i,name:d??`togglegroup-name-${L}`,onChange:h},children:e.jsx(F,{asChild:!0,activeValue:o,orientation:"ambiguous",children:e.jsxs("div",{className:q("ds-toggle-group",v),role:"radiogroup","data-variant":l,ref:P,...g,children:[d&&e.jsx("input",{type:"hidden",name:d,value:o}),n]})})})}),Y=a=>{const{...n}=a,l=s.useId(),o=s.useContext(E),i=a.value??l,r=o.value===i,d=o.variant,v=`togglegroup-item-${s.useId()}`;return{...n,active:r,value:i,variant:d,buttonProps:{id:v,"aria-checked":r,"aria-current":r,role:"radio",name:o.name,onClick:()=>{var g;(g=o.onChange)==null||g.call(o,i)}}}},Z=s.forwardRef(function(n,l){const{active:o,buttonProps:i,value:r,variant:d}=Y(n);return e.jsx(U,{asChild:!0,value:r,children:e.jsx(R,{variant:o?d:"tertiary",ref:l,...n,...i})})}),A=Object.assign(X,{Item:Z});A.Item.displayName="ToggleGroup.Item";const t=A;try{t.displayName="ToggleGroup",t.__docgenInfo={description:"",displayName:"ToggleGroup",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},value:{defaultValue:null,description:"Controlled state for `ToggleGroup` component.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value.",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback with selected `ToggleGroupItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}},name:{defaultValue:null,description:"Form element name",name:"name",required:!1,type:{name:"string"}}}}}catch{}const ve={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},u={name:"Example Default",render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-size":"md","data-color":"neutral"}},m={name:"Example Icon Only with Tooltip",render:a=>e.jsxs(t,{...a,children:[e.jsx(f,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",children:e.jsx(B,{title:"Venstrestilt",fontSize:"1.5rem"})})}),e.jsx(f,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",children:e.jsx(H,{title:"Midtstilt",fontSize:"1.5rem"})})}),e.jsx(f,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",children:e.jsx(M,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-size":"md","data-color":"accent"}},c={name:"Example Controlled with Icons",render:a=>{const[n,l]=s.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...a,value:n,onChange:l,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(J,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(N,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(W,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx($,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(K,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(Q,{children:["Du har valgt: ",n]}),e.jsx(R,{"data-size":"sm",onClick:()=>l("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-size":"md","data-color":"brand1"}},p={name:"Example Large Size",render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-size":"lg","data-color":"neutral"}};var x,T,G;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Default',
  render: args => <ToggleGroup {...args}>
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>
    </ToggleGroup>,
  args: {
    defaultValue: 'innboks',
    name: 'folder-toggle',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(G=(T=u.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var y,S,z;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example Icon Only with Tooltip',
  render: args => <ToggleGroup {...args}>
      <Tooltip content="Venstrestilt">
        <ToggleGroup.Item value="option-1">
          <AlignLeftIcon title="Venstrestilt" fontSize="1.5rem" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Midtstilt">
        <ToggleGroup.Item value="option-2">
          <AlignCenterIcon title="Midtstilt" fontSize="1.5rem" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Høyrestilt">
        <ToggleGroup.Item value="option-3">
          <AlignRightIcon title="Høyrestilt" fontSize="1.5rem" />
        </ToggleGroup.Item>
      </Tooltip>
    </ToggleGroup>,
  args: {
    defaultValue: 'option-1',
    name: 'alignment-icon-toggle',
    'data-size': 'md',
    // Example size
    'data-color': 'accent' // Example color
  }
}`,...(z=(S=m.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var j,k,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example Controlled with Icons',
  render: args => {
    const [value, setValue] = useState<string>('utkast');
    return <>
        <ToggleGroup {...args} value={value} onChange={setValue}>
          <ToggleGroup.Item value="innboks">
            <EnvelopeClosedIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />
            Innboks
          </ToggleGroup.Item>
          <ToggleGroup.Item value="utkast">
            <DocPencilIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />
            Utkast
          </ToggleGroup.Item>
          <ToggleGroup.Item value="arkiv">
            <ArchiveIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />
            Arkiv
          </ToggleGroup.Item>
          <ToggleGroup.Item value="sendt">
            <PaperplaneIcon aria-hidden fontSize="1.5rem" style={{
            marginRight: '4px'
          }} />
            Sendt
          </ToggleGroup.Item>
        </ToggleGroup>
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />
        <Paragraph>Du har valgt: {value}</Paragraph>
        <Button data-size="sm" onClick={() => setValue('arkiv')} style={{
        marginTop: 'var(--ds-size-2)'
      }}>
          Velg Arkiv
        </Button>
      </>;
  },
  args: {
    name: 'controlled-folder-toggle-icons',
    'data-size': 'md',
    'data-color': 'brand1'
  }
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var C,b,D;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example Large Size',
  render: args => <ToggleGroup {...args}>
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>
    </ToggleGroup>,
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(D=(b=p.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const fe=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize"];export{c as ControlledWithIcons,u as Default,m as IconOnlyWithTooltip,p as LargeSize,fe as __namedExportsOrder,ve as default};
