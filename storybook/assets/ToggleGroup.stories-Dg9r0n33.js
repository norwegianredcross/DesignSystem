import{r as i,j as e}from"./iframe-Bp0vmf9v.js";import{c as W}from"./lite-DaUVFjkg.js";import{R as $,a as K}from"./roving-focus-item-TJ86fzPt.js";import{B as L}from"./button-DASMQkNv.js";import{T as I}from"./index-BIB63nIt.js";import{S as Y,a as J,b as Q,c as X,d as Z,e as ee}from"./Paperplane-RJzwF6DL.js";import{S as te}from"./EnvelopeClosed-DVC03Ou8.js";import{D as oe}from"./divider-B6ZlALGq.js";import{P as ae}from"./paragraph-ZDVt_YqD.js";const P=i.createContext({}),re=i.forwardRef(function({children:r,variant:n="primary",value:o,defaultValue:l,onChange:s,name:d,className:f,...h},U){const q=i.useId(),M=o!==void 0,[N,H]=i.useState(l);let k=s;return M||(k=T=>{H(T),s==null||s(T)},o=N),e.jsx(P.Provider,{value:{variant:n,value:o,defaultValue:l,name:d??`togglegroup-name-${q}`,onChange:k},children:e.jsx($,{asChild:!0,activeValue:o,orientation:"ambiguous",children:e.jsxs("div",{className:W("ds-toggle-group",f),role:"radiogroup","data-variant":n,ref:U,...h,children:[d&&e.jsx("input",{type:"hidden",name:d,value:o}),r]})})})}),ne=a=>{const{...r}=a,n=i.useId(),o=i.useContext(P),l=a.value??n,s=o.value===l,d=o.variant,f=`togglegroup-item-${i.useId()}`;return{...r,active:s,value:l,variant:d,buttonProps:{id:f,"aria-checked":s,"aria-current":s,role:"radio",name:o.name,onClick:()=>{var h;(h=o.onChange)==null||h.call(o,l)}}}},le=i.forwardRef(function(r,n){const{active:o,buttonProps:l,value:s,variant:d}=ne(r);return e.jsx(K,{asChild:!0,value:s,children:e.jsx(L,{variant:o?d:"tertiary",ref:n,...r,...l})})}),F=Object.assign(re,{Item:le});F.Item.displayName="ToggleGroup.Item";const t=F;try{t.displayName="ToggleGroup",t.__docgenInfo={description:"",displayName:"ToggleGroup",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},value:{defaultValue:null,description:"Controlled state for `ToggleGroup` component.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value.",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback with selected `ToggleGroupItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}},name:{defaultValue:null,description:"Form element name",name:"name",required:!1,type:{name:"string"}}}}}catch{}const{expect:c,within:se,userEvent:x,waitFor:y}=__STORYBOOK_MODULE_TEST__,ie={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},u={name:"Example Default",render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-size":"md","data-color":"neutral"}},g={name:"Example Icon Only with Tooltip",render:a=>e.jsxs(t,{...a,children:[e.jsx(I,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",children:e.jsx(Y,{title:"Venstrestilt",fontSize:"1.5rem"})})}),e.jsx(I,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",children:e.jsx(J,{title:"Midtstilt",fontSize:"1.5rem"})})}),e.jsx(I,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",children:e.jsx(Q,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-size":"md","data-color":"accent"}},m={name:"Example Controlled with Icons",render:a=>{const[r,n]=i.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...a,value:r,onChange:n,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(te,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(X,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(Z,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx(ee,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(oe,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(ae,{children:["Du har valgt: ",r]}),e.jsx(L,{"data-size":"sm",onClick:()=>n("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-size":"md","data-color":"brand1"}},p={name:"Example Large Size",render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-size":"lg","data-color":"neutral"}},v={name:"Test: Interaction",render:()=>e.jsxs(t,{defaultValue:"innboks",name:"test-toggle",children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"})]}),play:async({canvasElement:a})=>{const r=se(a),n=r.getByRole("radio",{name:/innboks/i});c(n).toBeChecked();const o=r.getByRole("radio",{name:/utkast/i});await x.click(o),await y(()=>{c(o).toBeChecked()}),c(n).not.toBeChecked();const l=r.getByRole("radio",{name:/arkiv/i});await x.click(l),await y(()=>{c(l).toBeChecked()}),c(o).not.toBeChecked()}};var G,S,j;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(j=(S=u.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,z,C;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(z=g.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var R,V,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(V=m.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var E,B,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var _,A,O;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <ToggleGroup defaultValue="innboks" name="test-toggle">
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
    </ToggleGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Default item should be selected
    const innboksRadio = canvas.getByRole('radio', {
      name: /innboks/i
    });
    expect(innboksRadio).toBeChecked();

    // Click another item
    const utkastRadio = canvas.getByRole('radio', {
      name: /utkast/i
    });
    await userEvent.click(utkastRadio);

    // New item selected, previous deselected
    await waitFor(() => {
      expect(utkastRadio).toBeChecked();
    });
    expect(innboksRadio).not.toBeChecked();

    // Click third item
    const arkivRadio = canvas.getByRole('radio', {
      name: /arkiv/i
    });
    await userEvent.click(arkivRadio);
    await waitFor(() => {
      expect(arkivRadio).toBeChecked();
    });
    expect(utkastRadio).not.toBeChecked();
  }
}`,...(O=(A=v.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const de=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize","TestInteraction"],ke=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithIcons:m,Default:u,IconOnlyWithTooltip:g,LargeSize:p,TestInteraction:v,__namedExportsOrder:de,default:ie},Symbol.toStringTag,{value:"Module"}));export{m as C,u as D,g as I,p as L,ke as T};
