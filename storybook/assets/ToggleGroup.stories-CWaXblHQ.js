import{r as E,j as e}from"./iframe-CfsAtch-.js";import{Y as _,t as D,P as A,B as L}from"./tooltip-DMtqqJ03.js";import{T as c}from"./index-DxlCgVoa.js";import{S as O}from"./EnvelopeClosed-CVZ5t2V-.js";import{S as P,a as U,b as q,c as F,d as M,e as H}from"./Paperplane-DdgBvjPh.js";const t=_;try{t.displayName="ToggleGroup",t.__docgenInfo={description:"",displayName:"ToggleGroup",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},value:{defaultValue:null,description:"Controlled state for `ToggleGroup` component.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value.",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback with selected `ToggleGroupItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}},name:{defaultValue:null,description:"Form element name",name:"name",required:!1,type:{name:"string"}},"data-toggle-group":{defaultValue:null,description:"Toggle group label for accessibility",name:"data-toggle-group",required:!1,type:{name:"string"}}}}}catch{}const{expect:n,within:W,userEvent:m,waitFor:p}=__STORYBOOK_MODULE_TEST__,N={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},l={name:"Example Default",render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-size":"md","data-color":"neutral"}},s={name:"Example Icon Only with Tooltip",render:a=>e.jsxs(t,{...a,children:[e.jsx(c,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",children:e.jsx(F,{title:"Venstrestilt",fontSize:"1.5rem"})})}),e.jsx(c,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",children:e.jsx(M,{title:"Midtstilt",fontSize:"1.5rem"})})}),e.jsx(c,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",children:e.jsx(H,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-size":"md","data-color":"accent"}},i={name:"Example Controlled with Icons",render:a=>{const[o,r]=E.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...a,value:o,onChange:r,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(O,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(P,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(U,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx(q,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(D,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(A,{children:["Du har valgt: ",o]}),e.jsx(L,{"data-size":"sm",onClick:()=>r("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-size":"md","data-color":"brand1"}},d={name:"Example Large Size",render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-size":"lg","data-color":"neutral"}},g={name:"Test: Interaction",render:()=>e.jsxs(t,{defaultValue:"innboks",name:"test-toggle",children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"})]}),play:async({canvasElement:a})=>{const o=W(a),r=o.getByRole("radio",{name:/innboks/i});n(r).toBeChecked();const R=o.getByText("Utkast");await m.click(R);const u=o.getByRole("radio",{name:/utkast/i});await p(()=>{n(u).toBeChecked()}),n(r).not.toBeChecked();const B=o.getByText("Arkiv");await m.click(B);const w=o.getByRole("radio",{name:/arkiv/i});await p(()=>{n(w).toBeChecked()}),n(u).not.toBeChecked()}};var v,h,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,T,I;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var x,y,G;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(G=(y=i.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var b,S,z;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var j,C,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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

    // Click another item via its label
    const utkastLabel = canvas.getByText('Utkast');
    await userEvent.click(utkastLabel);

    // New item selected, previous deselected
    const utkastRadio = canvas.getByRole('radio', {
      name: /utkast/i
    });
    await waitFor(() => {
      expect(utkastRadio).toBeChecked();
    });
    expect(innboksRadio).not.toBeChecked();

    // Click third item via its label
    const arkivLabel = canvas.getByText('Arkiv');
    await userEvent.click(arkivLabel);
    const arkivRadio = canvas.getByRole('radio', {
      name: /arkiv/i
    });
    await waitFor(() => {
      expect(arkivRadio).toBeChecked();
    });
    expect(utkastRadio).not.toBeChecked();
  }
}`,...(V=(C=g.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const Y=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize","TestInteraction"],$=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithIcons:i,Default:l,IconOnlyWithTooltip:s,LargeSize:d,TestInteraction:g,__namedExportsOrder:Y,default:N},Symbol.toStringTag,{value:"Module"}));export{i as C,l as D,s as I,d as L,$ as T};
