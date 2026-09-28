import{r as _,j as e}from"./iframe-7Vj8Ip6r.js";import{N as K,n as P,P as U,B as N}from"./tooltip-CAaktooi.js";import{S as W}from"./EnvelopeClosed-aZEbaxsk.js";import{S as Y,a as q,b as J,c as Q,d as X,e as Z}from"./Paperplane-Z9OyPS_1.js";const t=K,{expect:a,within:d,userEvent:l,waitFor:s,fn:$}=__STORYBOOK_MODULE_TEST__,ee={title:"Components/ToggleGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"ToggleGroup allows users to select one option from a set of connected buttons."}},layout:"centered"},argTypes:{defaultValue:{control:"text",description:"Default selected item value (uncontrolled mode)."},name:{control:"text",description:"Form element name for the group.",defaultValue:"toggle-group-story"},"aria-label":{control:"text",description:"Accessible name of the group (the data-toggle-group attribute is deprecated since Digdir 1.21)."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},value:{control:"text",description:"Selected item value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected ToggleGroup.Item value.",table:{disable:!0}},children:{control:!1}}},m={name:"Example Default",render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]}),args:{defaultValue:"innboks",name:"folder-toggle","aria-label":"Mapper","data-size":"md","data-color":"neutral"}},p={name:"Example Icon Only",render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{value:"option-1",children:e.jsx(Q,{title:"Venstrestilt",fontSize:"1.5rem"})}),e.jsx(t.Item,{value:"option-2",children:e.jsx(X,{title:"Midtstilt",fontSize:"1.5rem"})}),e.jsx(t.Item,{value:"option-3",children:e.jsx(Z,{title:"Høyrestilt",fontSize:"1.5rem"})})]}),args:{defaultValue:"option-1",name:"alignment-icon-toggle","aria-label":"Tekstjustering","data-size":"md","data-color":"primary-color-red"}},v={name:"Example Controlled with Icons",render:o=>{const[n,i]=_.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{...o,value:n,onChange:i,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(W,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(Y,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(q,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx(J,{"aria-hidden":!0,fontSize:"1.5rem",style:{marginRight:"4px"}}),"Sendt"]})]}),e.jsx(P,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(U,{children:["Du har valgt: ",n]}),e.jsx(N,{"data-size":"sm",onClick:()=>i("arkiv"),style:{marginTop:"var(--ds-size-2)"},children:"Velg Arkiv"})]})},args:{name:"controlled-folder-toggle-icons","aria-label":"Mapper","data-size":"md","data-color":"secondary-color-rust"}},h={name:"Example Large Size",render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{value:"large1",children:"Large Option 1"}),e.jsx(t.Item,{value:"large2",children:"Large Option 2"})]}),args:{defaultValue:"large1",name:"large-toggle","aria-label":"Størrelse","data-size":"lg","data-color":"neutral"}},k={name:"Test: Interaction",render:()=>e.jsxs(t,{defaultValue:"innboks",name:"test-toggle","aria-label":"Mapper",children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"})]}),play:async({canvasElement:o})=>{const n=d(o),i=n.getByRole("radio",{name:/innboks/i});a(i).toBeChecked();const c=n.getByText("Utkast");await l.click(c);const r=n.getByRole("radio",{name:/utkast/i});await s(()=>{a(r).toBeChecked()}),a(i).not.toBeChecked();const g=n.getByText("Arkiv");await l.click(g);const u=n.getByRole("radio",{name:/arkiv/i});await s(()=>{a(u).toBeChecked()}),a(r).not.toBeChecked()}},x={name:"Test: Keyboard Navigation And Callback",render:({onChange:o})=>e.jsxs(t,{onChange:o,defaultValue:"left",name:"alignment-test","aria-label":"Tekstjustering",children:[e.jsx(t.Item,{value:"left",children:"Venstre"}),e.jsx(t.Item,{value:"center",children:"Midten"}),e.jsx(t.Item,{value:"right",children:"Høyre"})]}),args:{onChange:$()},play:async({canvasElement:o,args:n})=>{const c=d(o).getByRole("group",{name:"Tekstjustering"}),r=d(c).getByRole("radio",{name:"Venstre"}),g=d(c).getByRole("radio",{name:"Midten"}),u=d(c).getByRole("radio",{name:"Høyre"});a(r).toBeChecked(),a(r).toHaveAttribute("name","alignment-test"),a(g).toHaveAttribute("name","alignment-test"),a(u).toHaveAttribute("name","alignment-test"),r.focus(),await l.keyboard("{ArrowRight}"),await s(()=>a(g).toHaveFocus()),a(r).toBeChecked(),a(n.onChange).not.toHaveBeenCalled(),await l.keyboard("{Enter}"),await s(()=>a(g).toBeChecked()),a(n.onChange).toHaveBeenLastCalledWith("center"),await l.keyboard("{ArrowLeft}"),await s(()=>a(r).toHaveFocus()),a(g).toBeChecked(),await l.keyboard("{Enter}"),await s(()=>a(r).toBeChecked()),a(n.onChange).toHaveBeenLastCalledWith("left"),await l.keyboard("{ArrowLeft}"),await s(()=>a(u).toHaveFocus()),a(r).toBeChecked(),await l.keyboard("{Enter}"),await s(()=>a(u).toBeChecked()),a(n.onChange).toHaveBeenCalledTimes(3)}},b={name:"Test: Disabled Item Is Skipped",render:()=>e.jsxs(t,{defaultValue:"first",name:"disabled-test","aria-label":"Visning",children:[e.jsx(t.Item,{value:"first",children:"Liste"}),e.jsx(t.Item,{value:"second",disabled:!0,children:"Detaljer"}),e.jsx(t.Item,{value:"third",children:"Kort"})]}),play:async({canvasElement:o})=>{const n=d(o),i=n.getByRole("radio",{name:"Liste"}),c=n.getByRole("radio",{name:"Detaljer"}),r=n.getByRole("radio",{name:"Kort"});a(c).toBeDisabled(),i.focus(),await l.keyboard("{ArrowRight}"),await s(()=>a(r).toHaveFocus()),a(i).toBeChecked(),a(c).not.toBeChecked(),await l.keyboard("{Enter}"),await s(()=>a(r).toBeChecked())}},te=["Default","IconOnly","ControlledWithIcons","LargeSize","TestInteraction","TestKeyboardNavigationAndCallback","TestDisabledItemIsSkipped"];var I,y,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    'aria-label': 'Mapper',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(T=(y=m.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,C,w;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example Icon Only',
  render: args => <ToggleGroup {...args}>
      <ToggleGroup.Item value="option-1">
        <AlignLeftIcon title="Venstrestilt" fontSize="1.5rem" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="option-2">
        <AlignCenterIcon title="Midtstilt" fontSize="1.5rem" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="option-3">
        <AlignRightIcon title="Høyrestilt" fontSize="1.5rem" />
      </ToggleGroup.Item>
    </ToggleGroup>,
  args: {
    defaultValue: 'option-1',
    name: 'alignment-icon-toggle',
    'aria-label': 'Tekstjustering',
    'data-size': 'md',
    // Example size
    'data-color': 'primary-color-red' // Example color
  }
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var B,G,j;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    'aria-label': 'Mapper',
    'data-size': 'md',
    'data-color': 'secondary-color-rust'
  }
}`,...(j=(G=v.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var S,R,E;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Example Large Size',
  render: args => <ToggleGroup {...args}>
      <ToggleGroup.Item value="large1">Large Option 1</ToggleGroup.Item>
      <ToggleGroup.Item value="large2">Large Option 2</ToggleGroup.Item>
    </ToggleGroup>,
  args: {
    defaultValue: 'large1',
    name: 'large-toggle',
    'aria-label': 'Størrelse',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var z,A,L;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <ToggleGroup defaultValue="innboks" name="test-toggle" aria-label="Mapper">
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
}`,...(L=(A=k.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var V,D,H;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Keyboard Navigation And Callback',
  // Only the callback comes from args: spreading the whole (three-way
  // labelled) props union next to an explicit aria-label is not assignable
  // since Digdir 1.21 made the label variants mutually exclusive.
  render: ({
    onChange
  }) => <ToggleGroup onChange={onChange} defaultValue="left" name="alignment-test" aria-label="Tekstjustering">
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
}`,...(H=(D=x.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var F,O,M;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Test: Disabled Item Is Skipped',
  render: () => <ToggleGroup defaultValue="first" name="disabled-test" aria-label="Visning">
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
}`,...(M=(O=b.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const le=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithIcons:v,Default:m,IconOnly:p,LargeSize:h,TestDisabledItemIsSkipped:b,TestInteraction:k,TestKeyboardNavigationAndCallback:x,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{v as C,m as D,h as L,le as T};
