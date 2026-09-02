import{r as K,j as e}from"./iframe-CAry5O3X.js";import{Z as P,t as U,P as q,B as W}from"./tooltip-8T-0JSHw.js";import{T}from"./index-xQ_JEzMq.js";import{S as N}from"./EnvelopeClosed-B_a99d4X.js";import{S as Y,a as Z,b as J,c as Q,d as X,e as $}from"./Paperplane-B0nn8VNl.js";const t=P;try{t.displayName="ToggleGroup",t.__docgenInfo={description:"",displayName:"ToggleGroup",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},value:{defaultValue:null,description:"Controlled state for `ToggleGroup` component.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default value.",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback with selected `ToggleGroupItem` `value`",name:"onChange",required:!1,type:{name:"(value: string) => void"}},name:{defaultValue:null,description:"Form element name",name:"name",required:!1,type:{name:"string"}},"data-toggle-group":{defaultValue:null,description:"Toggle group label for accessibility",name:"data-toggle-group",required:!1,type:{name:"string"}}}}}catch{}const{expect:a,within:c,userEvent:l,waitFor:s,fn:ee}=__STORYBOOK_MODULE_TEST__,te={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"data-toggle-group":{control:"text",description:"Accessible label used by the keyboard-navigation helper."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},p={name:"Example Default",render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","data-toggle-group":"Mapper","data-size":"md","data-color":"neutral"}},m={name:"Example Icon Only with Tooltip",render:r=>e.jsxs(t,{...r,children:[e.jsx(T,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",children:e.jsx(Q,{title:"Venstrestilt",fontSize:"1.5rem"})})}),e.jsx(T,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",children:e.jsx(X,{title:"Midtstilt",fontSize:"1.5rem"})})}),e.jsx(T,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",children:e.jsx($,{title:"Høyrestilt",fontSize:"1.5rem"})})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","data-toggle-group":"Tekstjustering","data-size":"md","data-color":"primary-color-red"}},v={name:"Example Controlled with Icons",render:r=>{const[o,i]=K.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...r,value:o,onChange:i,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(N,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(Y,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(Z,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx(J,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(U,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(q,{children:["Du har valgt: ",o]}),e.jsx(W,{"data-size":"sm",onClick:()=>i("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","data-toggle-group":"Mapper","data-size":"md","data-color":"secondary-color-rust"}},h={name:"Example Large Size",render:r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","data-toggle-group":"Størrelse","data-size":"lg","data-color":"neutral"}},k={name:"Test: Interaction",render:()=>e.jsxs(t,{defaultValue:"innboks",name:"test-toggle","data-toggle-group":"Mapper",children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"})]}),play:async({canvasElement:r})=>{const o=c(r),i=o.getByRole("radio",{name:/innboks/i});a(i).toBeChecked();const g=o.getByText("Utkast");await l.click(g);const n=o.getByRole("radio",{name:/utkast/i});await s(()=>{a(n).toBeChecked()}),a(i).not.toBeChecked();const d=o.getByText("Arkiv");await l.click(d);const u=o.getByRole("radio",{name:/arkiv/i});await s(()=>{a(u).toBeChecked()}),a(n).not.toBeChecked()}},y={name:"Test: Keyboard Navigation And Callback",render:r=>e.jsxs(t,{...r,defaultValue:"left",name:"alignment-test","aria-label":"Tekstjustering","data-toggle-group":"Tekstjustering",children:[e.jsx(t.Item,{value:"left",children:"Venstre"}),e.jsx(t.Item,{value:"center",children:"Midten"}),e.jsx(t.Item,{value:"right",children:"Høyre"})]}),args:{onChange:ee()},play:async({canvasElement:r,args:o})=>{const g=c(r).getByRole("group",{name:"Tekstjustering"}),n=c(g).getByRole("radio",{name:"Venstre"}),d=c(g).getByRole("radio",{name:"Midten"}),u=c(g).getByRole("radio",{name:"Høyre"});a(n).toBeChecked(),a(n).toHaveAttribute("name","alignment-test"),a(d).toHaveAttribute("name","alignment-test"),a(u).toHaveAttribute("name","alignment-test"),n.focus(),await l.keyboard("{ArrowRight}"),await s(()=>a(d).toHaveFocus()),a(n).toBeChecked(),a(o.onChange).not.toHaveBeenCalled(),await l.keyboard("{Enter}"),await s(()=>a(d).toBeChecked()),a(o.onChange).toHaveBeenLastCalledWith("center"),await l.keyboard("{ArrowLeft}"),await s(()=>a(n).toHaveFocus()),a(d).toBeChecked(),await l.keyboard("{Enter}"),await s(()=>a(n).toBeChecked()),a(o.onChange).toHaveBeenLastCalledWith("left"),await l.keyboard("{ArrowLeft}"),await s(()=>a(u).toHaveFocus()),a(n).toBeChecked(),await l.keyboard("{Enter}"),await s(()=>a(u).toBeChecked()),a(o.onChange).toHaveBeenCalledTimes(3)}},f={name:"Test: Disabled Item Is Skipped",render:()=>e.jsxs(t,{defaultValue:"first",name:"disabled-test","aria-label":"Visning","data-toggle-group":"Visning",children:[e.jsx(t.Item,{value:"first",children:"Liste"}),e.jsx(t.Item,{value:"second",disabled:!0,children:"Detaljer"}),e.jsx(t.Item,{value:"third",children:"Kort"})]}),play:async({canvasElement:r})=>{const o=c(r),i=o.getByRole("radio",{name:"Liste"}),g=o.getByRole("radio",{name:"Detaljer"}),n=o.getByRole("radio",{name:"Kort"});a(g).toBeDisabled(),i.focus(),await l.keyboard("{ArrowRight}"),await s(()=>a(n).toHaveFocus()),a(i).toBeChecked(),a(g).not.toBeChecked(),await l.keyboard("{Enter}"),await s(()=>a(n).toBeChecked())}};var I,x,b;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    'data-toggle-group': 'Mapper',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var C,w,B;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    'data-toggle-group': 'Tekstjustering',
    'data-size': 'md',
    // Example size
    'data-color': 'primary-color-red' // Example color
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var G,j,S;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    'data-toggle-group': 'Mapper',
    'data-size': 'md',
    'data-color': 'secondary-color-rust'
  }
}`,...(S=(j=v.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var R,V,z;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Example Large Size',
  render: args => <ToggleGroup {...args}>
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>
    </ToggleGroup>,
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'data-toggle-group': 'Størrelse',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(z=(V=h.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var E,A,H;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <ToggleGroup defaultValue="innboks" name="test-toggle" data-toggle-group="Mapper">
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
}`,...(H=(A=k.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,D,F;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Test: Keyboard Navigation And Callback',
  render: args => <ToggleGroup {...args} defaultValue="left" name="alignment-test" aria-label="Tekstjustering" data-toggle-group="Tekstjustering">
      <ToggleGroup.Item value="left">Venstre</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Midten</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Høyre</ToggleGroup.Item>
    </ToggleGroup>,
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group', {
      name: 'Tekstjustering'
    });
    const left = within(group).getByRole('radio', {
      name: 'Venstre'
    });
    const center = within(group).getByRole('radio', {
      name: 'Midten'
    });
    const right = within(group).getByRole('radio', {
      name: 'Høyre'
    });
    expect(left).toBeChecked();
    expect(left).toHaveAttribute('name', 'alignment-test');
    expect(center).toHaveAttribute('name', 'alignment-test');
    expect(right).toHaveAttribute('name', 'alignment-test');
    left.focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(center).toHaveFocus());
    expect(left).toBeChecked();
    expect(args.onChange).not.toHaveBeenCalled();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(center).toBeChecked());
    expect(args.onChange).toHaveBeenLastCalledWith('center');
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(left).toHaveFocus());
    expect(center).toBeChecked();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(left).toBeChecked());
    expect(args.onChange).toHaveBeenLastCalledWith('left');
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(right).toHaveFocus());
    expect(left).toBeChecked();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(right).toBeChecked());
    expect(args.onChange).toHaveBeenCalledTimes(3);
  }
}`,...(F=(D=y.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var _,M,O;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Disabled Item Is Skipped',
  render: () => <ToggleGroup defaultValue="first" name="disabled-test" aria-label="Visning" data-toggle-group="Visning">
      <ToggleGroup.Item value="first">Liste</ToggleGroup.Item>
      <ToggleGroup.Item value="second" disabled>Detaljer</ToggleGroup.Item>
      <ToggleGroup.Item value="third">Kort</ToggleGroup.Item>
    </ToggleGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('radio', {
      name: 'Liste'
    });
    const details = canvas.getByRole('radio', {
      name: 'Detaljer'
    });
    const cards = canvas.getByRole('radio', {
      name: 'Kort'
    });
    expect(details).toBeDisabled();
    list.focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(cards).toHaveFocus());
    expect(list).toBeChecked();
    expect(details).not.toBeChecked();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(cards).toBeChecked());
  }
}`,...(O=(M=f.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ae=["Default","IconOnlyWithTooltip","ControlledWithIcons","LargeSize","TestInteraction","TestKeyboardNavigationAndCallback","TestDisabledItemIsSkipped"],ie=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithIcons:v,Default:p,IconOnlyWithTooltip:m,LargeSize:h,TestDisabledItemIsSkipped:f,TestInteraction:k,TestKeyboardNavigationAndCallback:y,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{v as C,p as D,m as I,h as L,ie as T};
