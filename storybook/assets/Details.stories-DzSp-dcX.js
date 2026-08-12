import{j as a,r as I}from"./iframe-NT2RgVBA.js";import{E as W}from"./tooltip-CXeYUrH4.js";const n=W;try{n.displayName="Details",n.__docgenInfo={description:"",displayName:"Details",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the details.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},open:{defaultValue:{value:"undefined"},description:`Controls open-state.

Using this removes automatic control of open-state`,name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Defaults the details to open if not controlled",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Callback function when Details toggles due to click on summary or find in page-search",name:"onToggle",required:!1,type:{name:"(((event: Event) => void) & ((event: Event) => void)) | (((event: Event) => void) & ((event: Event) => void))"}},children:{defaultValue:null,description:"Content should be one `<Details.Summary>` and `<Details.Content>`",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const{expect:e,within:y,userEvent:p,waitFor:l,fn:q}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Details",component:n,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},open:{control:"boolean",description:"Controls the open/closed state.",defaultValue:!1},children:{control:!1,description:"Must contain Details.Summary and Details.Content"}}},u={render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hva er Altinn?"}),a.jsx(n.Content,{children:"Altinn er en internettportal for digital dialog mellom næringslivet, privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er utviklet og driftet av Altinn-samarbeidet, som består av flere offentlige etater."})]}),args:{},name:"Default (Closed)"},v={render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hva er formålet med Altinn?"}),a.jsx(n.Content,{children:"Formålet med Altinn er å effektivisere og forenkle rapportering fra næringslivet til det offentlige, samt å gi enklere tilgang til offentlig informasjon og tjenester for både bedrifter og privatpersoner."})]}),args:{open:!0},name:"Default (Open)"},f={render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hvilke tjenester tilbyr Altinn?"}),a.jsx(n.Content,{children:"Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer (som MVA-melding, A-melding), tilgang til meldingsboks fra det offentlige, registertjenester, samtykketjenester og veiledning."})]}),args:{"data-size":"lg","data-color":"brand1",open:!1},name:"Large Size, Brand1 Color"},d={name:"Test: Toggle With Mouse",render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hva gjør Røde Kors i Norge?"}),a.jsx(n.Content,{children:"Røde Kors i Norge driver blant annet besøkstjeneste, leksehjelp, hjelpekorps og aktiviteter for barn og unge over hele landet."})]}),args:{"data-size":"md",onToggle:q()},play:async({canvasElement:t,args:i})=>{const s=y(t),o=s.getByText("Hva gjør Røde Kors i Norge?"),r=o.closest("details"),c=s.getByText(/besøkstjeneste, leksehjelp/);e(r).not.toHaveAttribute("open"),e(c).not.toBeVisible(),await p.click(o),await l(()=>e(r).toHaveAttribute("open")),e(c).toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(1)),await p.click(o),await l(()=>e(r).not.toHaveAttribute("open")),e(c).not.toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(2))}},m={name:"Test: Keyboard Focus And Activation",render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hvordan blir jeg frivillig?"}),a.jsx(n.Content,{children:"Meld deg som frivillig i din lokalforening, så tar vi kontakt om aktuelle aktiviteter i ditt nærmiljø."})]}),args:{"data-size":"md"},play:async({canvasElement:t})=>{const i=y(t),s=i.getByText("Hvordan blir jeg frivillig?"),o=s.closest("details"),r=i.getByText(/Meld deg som frivillig/);e(s.tabIndex).toBe(0),s.focus(),e(s).toHaveFocus(),e(o).not.toHaveAttribute("open"),await p.keyboard("{Enter}"),s.click(),await l(()=>e(o).toHaveAttribute("open")),e(r).toBeVisible(),await p.keyboard(" "),s.click(),await l(()=>e(o).not.toHaveAttribute("open")),e(r).not.toBeVisible(),e(s).toHaveFocus()}},g={name:"Test: Controlled Open Prop",render:t=>{const[i,s]=I.useState(!0);return a.jsxs(n,{...t,open:i,onToggle:o=>{var r;(r=t.onToggle)==null||r.call(t,o),s(c=>!c)},children:[a.jsx(n.Summary,{children:"Hvor går pengene?"}),a.jsx(n.Content,{children:"Gaver går til beredskap, omsorgsaktiviteter og internasjonalt hjelpearbeid i regi av Røde Kors."})]})},args:{"data-size":"md",onToggle:q()},play:async({canvasElement:t,args:i})=>{const s=y(t),o=s.getByText("Hvor går pengene?"),r=o.closest("details"),c=s.getByText(/beredskap, omsorgsaktiviteter/);e(r).toHaveAttribute("open"),e(c).toBeVisible(),await p.click(o),await l(()=>e(r).not.toHaveAttribute("open")),e(c).not.toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(1)),await p.click(o),await l(()=>e(r).toHaveAttribute("open")),e(c).toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(2))}};var b,h,k;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hva er Altinn?</Details.Summary>
      <Details.Content>
        Altinn er en internettportal for digital dialog mellom næringslivet,
        privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er
        utviklet og driftet av Altinn-samarbeidet, som består av flere
        offentlige etater.
      </Details.Content>
    </Details>,
  args: {},
  name: 'Default (Closed)'
}`,...(k=(h=u.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var T,D,x;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hva er formålet med Altinn?</Details.Summary>
      <Details.Content>
        Formålet med Altinn er å effektivisere og forenkle rapportering fra
        næringslivet til det offentlige, samt å gi enklere tilgang til
        offentlig informasjon og tjenester for både bedrifter og privatpersoner.
      </Details.Content>
    </Details>,
  args: {
    open: true
  },
  name: 'Default (Open)'
}`,...(x=(D=v.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var j,w,C;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hvilke tjenester tilbyr Altinn?</Details.Summary>
      <Details.Content>
        Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer
        (som MVA-melding, A-melding), tilgang til meldingsboks fra det
        offentlige, registertjenester, samtykketjenester og veiledning.
      </Details.Content>
    </Details>,
  args: {
    'data-size': 'lg',
    'data-color': 'brand1',
    open: false
  },
  name: 'Large Size, Brand1 Color'
}`,...(C=(w=f.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var H,A,B,S,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Test: Toggle With Mouse',
  render: args => <Details {...args}>
      <Details.Summary>Hva gjør Røde Kors i Norge?</Details.Summary>
      <Details.Content>
        Røde Kors i Norge driver blant annet besøkstjeneste, leksehjelp,
        hjelpekorps og aktiviteter for barn og unge over hele landet.
      </Details.Content>
    </Details>,
  args: {
    'data-size': 'md',
    onToggle: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Hva gjør Røde Kors i Norge?');
    const details = summary.closest('details') as HTMLDetailsElement;
    const content = canvas.getByText(/besøkstjeneste, leksehjelp/);

    // Starts closed: no open attribute, content hidden
    expect(details).not.toHaveAttribute('open');
    expect(content).not.toBeVisible();

    // Click summary -> opens
    await userEvent.click(summary);
    await waitFor(() => expect(details).toHaveAttribute('open'));
    expect(content).toBeVisible();
    // The native toggle event is dispatched asynchronously
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(1));

    // Click summary again -> closes
    await userEvent.click(summary);
    await waitFor(() => expect(details).not.toHaveAttribute('open'));
    expect(content).not.toBeVisible();
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(2));
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:`Tests the core disclosure behavior with the mouse: clicking the summary
opens the details (open attribute set, content visible) and clicking it
again closes it. The onToggle callback fires for each state change.`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var V,O,_,z,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Keyboard Focus And Activation',
  render: args => <Details {...args}>
      <Details.Summary>Hvordan blir jeg frivillig?</Details.Summary>
      <Details.Content>
        Meld deg som frivillig i din lokalforening, så tar vi kontakt om
        aktuelle aktiviteter i ditt nærmiljø.
      </Details.Content>
    </Details>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Hvordan blir jeg frivillig?');
    const details = summary.closest('details') as HTMLDetailsElement;
    const content = canvas.getByText(/Meld deg som frivillig/);

    // The summary participates in the tab order and is focusable
    expect(summary.tabIndex).toBe(0);
    summary.focus();
    expect(summary).toHaveFocus();
    expect(details).not.toHaveAttribute('open');

    // Activation while focused (what Enter produces) opens the disclosure
    await userEvent.keyboard('{Enter}');
    summary.click();
    await waitFor(() => expect(details).toHaveAttribute('open'));
    expect(content).toBeVisible();

    // Activating again (what Space produces) closes it; focus stays put
    await userEvent.keyboard(' ');
    summary.click();
    await waitFor(() => expect(details).not.toHaveAttribute('open'));
    expect(content).not.toBeVisible();
    expect(summary).toHaveFocus();
  }
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:`Tests keyboard operability of the disclosure: the summary sits in the tab
order (native tabIndex 0), takes focus, and toggles via its activation
behavior while focused.

Note: user-event cannot synthesize trusted Enter/Space key activation for
<summary> (untrusted key events have no default action, and user-event has
no summary behavior), so activation is exercised through the activation
click that a real Enter/Space press produces on a focused summary.`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};var M,K,R,N,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Test: Controlled Open Prop',
  render: args => {
    const [open, setOpen] = useState(true);
    return <Details {...args} open={open} onToggle={event => {
      args.onToggle?.(event);
      setOpen(prev => !prev);
    }}>
        <Details.Summary>Hvor går pengene?</Details.Summary>
        <Details.Content>
          Gaver går til beredskap, omsorgsaktiviteter og internasjonalt
          hjelpearbeid i regi av Røde Kors.
        </Details.Content>
      </Details>;
  },
  args: {
    'data-size': 'md',
    onToggle: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Hvor går pengene?');
    const details = summary.closest('details') as HTMLDetailsElement;
    const content = canvas.getByText(/beredskap, omsorgsaktiviteter/);

    // Controlled initial state open=true is reflected in the DOM
    expect(details).toHaveAttribute('open');
    expect(content).toBeVisible();

    // Click -> onToggle fires, external state flips to closed, DOM follows
    await userEvent.click(summary);
    await waitFor(() => expect(details).not.toHaveAttribute('open'));
    expect(content).not.toBeVisible();
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(1));

    // Click -> state flips back to open
    await userEvent.click(summary);
    await waitFor(() => expect(details).toHaveAttribute('open'));
    expect(content).toBeVisible();
    await waitFor(() => expect(args.onToggle).toHaveBeenCalledTimes(2));
  }
}`,...(R=(K=g.parameters)==null?void 0:K.docs)==null?void 0:R.source},description:{story:"Tests the controlled `open` prop: the component mirrors external state in\nboth directions. A click requests a toggle via onToggle, state updates, and\nthe DOM follows; without a state update the details would stay put.",...(L=(N=g.parameters)==null?void 0:N.docs)==null?void 0:L.description}}};const G=["DefaultClosed","DefaultOpen","LargeBrand1","TestToggleWithMouse","TestKeyboardToggle","TestControlledOpen"],J=Object.freeze(Object.defineProperty({__proto__:null,DefaultClosed:u,DefaultOpen:v,LargeBrand1:f,TestControlledOpen:g,TestKeyboardToggle:m,TestToggleWithMouse:d,__namedExportsOrder:G,default:P},Symbol.toStringTag,{value:"Module"}));export{J as D,f as L,u as a,v as b};
