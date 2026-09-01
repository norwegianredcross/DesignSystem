import{r as U,j as e}from"./iframe-CrVlHkTt.js";import{T as a}from"./index-WYy27zo8.js";import{B as X}from"./tooltip-p-1HgFld.js";import{S as Y,a as q,b as G}from"./Newspaper-jO6wb0Y2.js";const{expect:t,within:x,userEvent:J,waitFor:i,fn:Q,fireEvent:u}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Tabs allow users to navigate between related sections of content, displaying one section at a time."}},layout:"padded"},argTypes:{defaultValue:{control:"text",description:"Default selected tab value (uncontrolled mode)."},value:{control:"text",description:"Selected tab value (controlled mode).",table:{disable:!0}},onChange:{action:"changed",description:"Callback with selected Tab value.",table:{disable:!0}},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1}}},b={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"}},v={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1","aria-label":"Airplane",children:e.jsx(Y,{"aria-hidden":!0})}),e.jsx(a.Tab,{value:"value2","aria-label":"Newspaper",children:e.jsx(q,{"aria-hidden":!0})}),e.jsx(a.Tab,{value:"value3","aria-label":"Dog",children:e.jsx(G,{"aria-hidden":!0})})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Airplane"}),e.jsx(a.Panel,{value:"value2",children:"Content for Newspaper"}),e.jsx(a.Panel,{value:"value3",children:"Content for Dog"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"primary-color-red"},name:"Icons Only"},d={render:n=>{const[r,s]=U.useState("value1");return e.jsxs(e.Fragment,{children:[e.jsx(X,{"data-size":"sm",onClick:()=>s("value3"),style:{marginBottom:"1rem"},children:"Choose Tab 3"}),e.jsxs(a,{...n,value:r,onChange:s,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1 (Controlled)"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2 (Controlled)"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3 (Controlled)"})]})]})},args:{"data-size":"md","data-color":"secondary-color-rust"}},T={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Large Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Large Tab 2"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Large Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Large Tab 2"})]}),args:{defaultValue:"value1","data-size":"lg","data-color":"neutral"},name:"Large Size"},m={render:n=>e.jsxs(a,{...n,children:[e.jsxs(a.List,{children:[e.jsxs(a.Tab,{value:"value1",children:[e.jsx(Y,{"aria-hidden":!0,style:{marginRight:6}}),"Fly"]}),e.jsxs(a.Tab,{value:"value2",children:[e.jsx(q,{"aria-hidden":!0,style:{marginRight:6}}),"Nyheter"]}),e.jsxs(a.Tab,{value:"value3",children:[e.jsx(G,{"aria-hidden":!0,style:{marginRight:6}}),"Hund"]})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Fly"}),e.jsx(a.Panel,{value:"value2",children:"Content for Nyheter"}),e.jsx(a.Panel,{value:"value3",children:"Content for Hund"})]}),args:{defaultValue:"value1","data-size":"md","data-color":"neutral"},name:"Icons with Text"},g={name:"Test: Interaction",render:()=>e.jsxs(a,{defaultValue:"value1",children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"value1",children:"Tab 1"}),e.jsx(a.Tab,{value:"value2",children:"Tab 2"}),e.jsx(a.Tab,{value:"value3",children:"Tab 3"})]}),e.jsx(a.Panel,{value:"value1",children:"Content for Tab 1"}),e.jsx(a.Panel,{value:"value2",children:"Content for Tab 2"}),e.jsx(a.Panel,{value:"value3",children:"Content for Tab 3"})]}),play:async({canvasElement:n})=>{const r=x(n);t(r.getByText("Content for Tab 1")).toBeVisible();const s=r.getByRole("tab",{name:/tab 1/i});t(s).toHaveAttribute("aria-selected","true");const l=r.getByRole("tab",{name:/tab 2/i});await J.click(l),await i(()=>{t(l).toHaveAttribute("aria-selected","true")}),t(s).toHaveAttribute("aria-selected","false"),t(r.getByText("Content for Tab 2")).toBeVisible()}},h={name:"Test: Aria Wiring And Keyboard Navigation",render:n=>e.jsxs(a,{...n,defaultValue:"overview",children:[e.jsxs(a.List,{"aria-label":"Saksinformasjon",children:[e.jsx(a.Tab,{value:"overview",children:"Oversikt"}),e.jsx(a.Tab,{value:"activity",children:"Aktivitet"}),e.jsx(a.Tab,{value:"documents",children:"Dokumenter"})]}),e.jsx(a.Panel,{value:"overview",children:"Innhold: oversikt"}),e.jsx(a.Panel,{value:"activity",children:"Innhold: aktivitet"}),e.jsx(a.Panel,{value:"documents",children:"Innhold: dokumenter"})]}),args:{onChange:Q()},play:async({canvasElement:n,args:r})=>{const s=x(n);t(s.getByRole("tablist",{name:"Saksinformasjon"})).toBeInTheDocument();const l=s.getByRole("tab",{name:"Oversikt"}),o=s.getByRole("tab",{name:"Aktivitet"}),c=s.getByRole("tab",{name:"Dokumenter"}),y=s.getByRole("tabpanel",{name:"Oversikt"});t(l).toHaveAttribute("aria-controls",y.id),t(y).toHaveAttribute("aria-labelledby",l.id),t(l).toHaveAttribute("aria-selected","true"),l.focus(),await u.keyDown(l,{key:"ArrowRight"}),await i(()=>{t(o).toHaveFocus()}),t(l).toHaveAttribute("aria-selected","true"),t(r.onChange).not.toHaveBeenCalled(),await u.keyDown(o,{key:"Enter"}),await i(()=>t(o).toHaveAttribute("aria-selected","true")),t(r.onChange).toHaveBeenLastCalledWith("activity"),t(s.getByRole("tabpanel",{name:"Aktivitet"})).toBeVisible(),await u.keyDown(o,{key:"End"}),await i(()=>t(c).toHaveFocus()),t(o).toHaveAttribute("aria-selected","true"),await u.keyDown(c,{key:" "}),await i(()=>t(c).toHaveAttribute("aria-selected","true")),t(r.onChange).toHaveBeenLastCalledWith("documents"),await u.keyDown(c,{key:"ArrowRight"}),await i(()=>t(l).toHaveFocus()),t(c).toHaveAttribute("aria-selected","true"),await u.keyDown(l,{key:"Enter"}),await i(()=>t(l).toHaveAttribute("aria-selected","true")),t(r.onChange).toHaveBeenCalledTimes(3)}},p={name:"Test: Controlled Selection",render:n=>{const[r,s]=U.useState("one");return e.jsxs(a,{...n,value:r,onChange:l=>{var o;(o=n.onChange)==null||o.call(n,l),s(l)},children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"one",children:"Ett"}),e.jsx(a.Tab,{value:"two",children:"To"})]}),e.jsx(a.Panel,{value:"one",children:"Første panel"}),e.jsx(a.Panel,{value:"two",children:"Andre panel"})]})},args:{onChange:Q()},play:async({canvasElement:n,args:r})=>{const s=x(n),l=s.getByRole("tab",{name:"To"});await J.click(l),await i(()=>{t(l).toHaveAttribute("aria-selected","true"),t(s.getByText("Andre panel")).toBeVisible()}),t(r.onChange).toHaveBeenCalledTimes(1),t(r.onChange).toHaveBeenCalledWith("two")}};var w,C,f;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(C=b.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,P,k;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value="value1" aria-label="Airplane">
          <AirplaneIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value2" aria-label="Newspaper">
          <NewspaperIcon aria-hidden />
        </Tabs.Tab>
        <Tabs.Tab value="value3" aria-label="Dog">
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
    'data-color': 'primary-color-red'
  },
  name: 'Icons Only'
}`,...(k=(P=v.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var A,B,H;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    'data-color': 'secondary-color-rust'
  }
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,S,D;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(S=T.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var V,R,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,F,z;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Tabs defaultValue="value1">
      <Tabs.List>
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="value1">Content for Tab 1</Tabs.Panel>
      <Tabs.Panel value="value2">Content for Tab 2</Tabs.Panel>
      <Tabs.Panel value="value3">Content for Tab 3</Tabs.Panel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Default tab content should be visible
    expect(canvas.getByText('Content for Tab 1')).toBeVisible();

    // First tab should be selected
    const tab1 = canvas.getByRole('tab', {
      name: /tab 1/i
    });
    expect(tab1).toHaveAttribute('aria-selected', 'true');

    // Click second tab
    const tab2 = canvas.getByRole('tab', {
      name: /tab 2/i
    });
    await userEvent.click(tab2);

    // Second tab should now be selected
    await waitFor(() => {
      expect(tab2).toHaveAttribute('aria-selected', 'true');
    });
    expect(tab1).toHaveAttribute('aria-selected', 'false');

    // Second panel content should be visible
    expect(canvas.getByText('Content for Tab 2')).toBeVisible();
  }
}`,...(z=(F=g.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var O,N,W;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Test: Aria Wiring And Keyboard Navigation',
  render: args => <Tabs {...args} defaultValue="overview">
      <Tabs.List aria-label="Saksinformasjon">
        <Tabs.Tab value="overview">Oversikt</Tabs.Tab>
        <Tabs.Tab value="activity">Aktivitet</Tabs.Tab>
        <Tabs.Tab value="documents">Dokumenter</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Innhold: oversikt</Tabs.Panel>
      <Tabs.Panel value="activity">Innhold: aktivitet</Tabs.Panel>
      <Tabs.Panel value="documents">Innhold: dokumenter</Tabs.Panel>
    </Tabs>,
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('tablist', {
      name: 'Saksinformasjon'
    })).toBeInTheDocument();
    const overview = canvas.getByRole('tab', {
      name: 'Oversikt'
    });
    const activity = canvas.getByRole('tab', {
      name: 'Aktivitet'
    });
    const documents = canvas.getByRole('tab', {
      name: 'Dokumenter'
    });
    const overviewPanel = canvas.getByRole('tabpanel', {
      name: 'Oversikt'
    });
    expect(overview).toHaveAttribute('aria-controls', overviewPanel.id);
    expect(overviewPanel).toHaveAttribute('aria-labelledby', overview.id);
    expect(overview).toHaveAttribute('aria-selected', 'true');
    overview.focus();
    await fireEvent.keyDown(overview, {
      key: 'ArrowRight'
    });
    await waitFor(() => {
      expect(activity).toHaveFocus();
    });
    expect(overview).toHaveAttribute('aria-selected', 'true');
    expect(args.onChange).not.toHaveBeenCalled();
    await fireEvent.keyDown(activity, {
      key: 'Enter'
    });
    await waitFor(() => expect(activity).toHaveAttribute('aria-selected', 'true'));
    expect(args.onChange).toHaveBeenLastCalledWith('activity');
    expect(canvas.getByRole('tabpanel', {
      name: 'Aktivitet'
    })).toBeVisible();
    await fireEvent.keyDown(activity, {
      key: 'End'
    });
    await waitFor(() => expect(documents).toHaveFocus());
    expect(activity).toHaveAttribute('aria-selected', 'true');
    await fireEvent.keyDown(documents, {
      key: ' '
    });
    await waitFor(() => expect(documents).toHaveAttribute('aria-selected', 'true'));
    expect(args.onChange).toHaveBeenLastCalledWith('documents');
    await fireEvent.keyDown(documents, {
      key: 'ArrowRight'
    });
    await waitFor(() => expect(overview).toHaveFocus());
    expect(documents).toHaveAttribute('aria-selected', 'true');
    await fireEvent.keyDown(overview, {
      key: 'Enter'
    });
    await waitFor(() => expect(overview).toHaveAttribute('aria-selected', 'true'));
    expect(args.onChange).toHaveBeenCalledTimes(3);
  }
}`,...(W=(N=h.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,K,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Controlled Selection',
  render: args => {
    const [value, setValue] = useState('one');
    return <Tabs {...args} value={value} onChange={nextValue => {
      args.onChange?.(nextValue);
      setValue(nextValue);
    }}>
        <Tabs.List>
          <Tabs.Tab value="one">Ett</Tabs.Tab>
          <Tabs.Tab value="two">To</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="one">Første panel</Tabs.Panel>
        <Tabs.Panel value="two">Andre panel</Tabs.Panel>
      </Tabs>;
  },
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const second = canvas.getByRole('tab', {
      name: 'To'
    });
    await userEvent.click(second);
    await waitFor(() => {
      expect(second).toHaveAttribute('aria-selected', 'true');
      expect(canvas.getByText('Andre panel')).toBeVisible();
    });
    expect(args.onChange).toHaveBeenCalledTimes(1);
    expect(args.onChange).toHaveBeenCalledWith('two');
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const $=["Default","IconsOnly","Controlled","LargeSize","IconsWithText","TestInteraction","TestAriaWiringAndKeyboardNavigation","TestControlledSelection"],le=Object.freeze(Object.defineProperty({__proto__:null,Controlled:d,Default:b,IconsOnly:v,IconsWithText:m,LargeSize:T,TestAriaWiringAndKeyboardNavigation:h,TestControlledSelection:p,TestInteraction:g,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{d as C,v as I,T as L,le as T};
