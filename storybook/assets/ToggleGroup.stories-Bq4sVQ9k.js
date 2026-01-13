import{r as s,j as e}from"./iframe-C1QSOCmb.js";import{c as q}from"./lite-DaUVFjkg.js";import{R as F,a as M}from"./roving-focus-item-gjXkPX6S.js";import{B as R}from"./button-iz7om0PE.js";import{T as f}from"./index-dFFMiQv6.js";import{S as U,a as B,b as H,c as N,d as W,e as $}from"./Paperplane-Cy7anB0R.js";import{S as J}from"./EnvelopeClosed-B42luvbY.js";import{D as K}from"./divider-CAlm6Cl2.js";import{P as Q}from"./paragraph-F1LdzfTX.js";const E=s.createContext({}),X=s.forwardRef(function({children:n,variant:l="primary",value:r,defaultValue:i,onChange:a,name:g,className:v,...p},_){const O=s.useId(),P=r!==void 0,[L,w]=s.useState(i);let h=a;return P||(h=I=>{w(I),a==null||a(I)},r=L),e.jsx(E.Provider,{value:{variant:l,value:r,defaultValue:i,name:g??`togglegroup-name-${O}`,onChange:h},children:e.jsx(F,{asChild:!0,activeValue:r,orientation:"ambiguous",children:e.jsxs("div",{className:q("ds-toggle-group",v),role:"radiogroup","data-variant":l,ref:_,...p,children:[g&&e.jsx("input",{type:"hidden",name:g,value:r}),n]})})})}),Y=o=>{const{...n}=o,l=s.useId(),r=s.useContext(E),i=o.value??l,a=r.value===i,g=r.variant,v=`togglegroup-item-${s.useId()}`;return{...n,active:a,value:i,variant:g,buttonProps:{id:v,"aria-checked":a,"aria-current":a,role:"radio",name:r.name,onClick:()=>{var p;(p=r.onChange)==null||p.call(r,i)}}}},Z=s.forwardRef(function(n,l){const{active:r,buttonProps:i,value:a,variant:g}=Y(n);return e.jsx(M,{asChild:!0,value:a,children:e.jsx(R,{variant:r?g:"tertiary",ref:l,...n,...i})})}),A=Object.assign(X,{Item:Z});A.Item.displayName="ToggleGroup.Item";const t=A;try{t.displayName="ToggleGroup",t.__docgenInfo={description:"",displayName:"ToggleGroup",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},value:{defaultValue:null,description:"Controlled state for `ToggleGroup` component.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value.",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback with selected `ToggleGroupItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}},name:{defaultValue:null,description:"Form element name",name:"name",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},d={name:"Example Default",render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-size":"md","data-color":"neutral"}},u={name:"Example Icon Only with Tooltip",render:o=>e.jsxs(t,{...o,children:[e.jsx(f,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",children:e.jsx(U,{title:"Venstrestilt",fontSize:"1.5rem"})})}),e.jsx(f,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",children:e.jsx(B,{title:"Midtstilt",fontSize:"1.5rem"})})}),e.jsx(f,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",children:e.jsx(H,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-size":"md","data-color":"accent"}},c={name:"Example Controlled with Icons",render:o=>{const[n,l]=s.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...o,value:n,onChange:l,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(J,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(N,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(W,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx($,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(K,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(Q,{children:["Du har valgt: ",n]}),e.jsx(R,{"data-size":"sm",onClick:()=>l("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-size":"md","data-color":"brand1"}},m={name:"Example Large Size",render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-size":"lg","data-color":"neutral"}};var T,x,G;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(G=(x=d.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var y,S,z;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(S=u.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var j,k,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var b,C,D;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const te=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize"],ue=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithIcons:c,Default:d,IconOnlyWithTooltip:u,LargeSize:m,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{c as C,d as D,u as I,m as L,ue as T};
