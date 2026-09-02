import{j as a,r as I}from"./iframe-BYyDdLVI.js";import{u as P}from"./tooltip-D949qbH_.js";const n=P,{expect:e,within:f,userEvent:p,waitFor:l,fn:W}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Details",component:n,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},open:{control:"boolean",description:"Controls the open/closed state.",defaultValue:!1},children:{control:!1,description:"Must contain Details.Summary and Details.Content"}}},u={render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hva er Altinn?"}),a.jsx(n.Content,{children:"Altinn er en internettportal for digital dialog mellom næringslivet, privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er utviklet og driftet av Altinn-samarbeidet, som består av flere offentlige etater."})]}),args:{},name:"Default (Closed)"},v={render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hva er formålet med Altinn?"}),a.jsx(n.Content,{children:"Formålet med Altinn er å effektivisere og forenkle rapportering fra næringslivet til det offentlige, samt å gi enklere tilgang til offentlig informasjon og tjenester for både bedrifter og privatpersoner."})]}),args:{open:!0},name:"Default (Open)"},y={render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hvilke tjenester tilbyr Altinn?"}),a.jsx(n.Content,{children:"Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer (som MVA-melding, A-melding), tilgang til meldingsboks fra det offentlige, registertjenester, samtykketjenester og veiledning."})]}),args:{"data-size":"lg","data-color":"secondary-color-rust",open:!1},name:"Large Size, Brand1 Color"},d={name:"Test: Toggle With Mouse",render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hva gjør Røde Kors i Norge?"}),a.jsx(n.Content,{children:"Røde Kors i Norge driver blant annet besøkstjeneste, leksehjelp, hjelpekorps og aktiviteter for barn og unge over hele landet."})]}),args:{"data-size":"md",onToggle:W()},play:async({canvasElement:t,args:i})=>{const o=f(t),s=o.getByText("Hva gjør Røde Kors i Norge?"),r=s.closest("details"),c=o.getByText(/besøkstjeneste, leksehjelp/);e(r).not.toHaveAttribute("open"),e(c).not.toBeVisible(),await p.click(s),await l(()=>e(r).toHaveAttribute("open")),e(c).toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(1)),await p.click(s),await l(()=>e(r).not.toHaveAttribute("open")),e(c).not.toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(2))}},g={name:"Test: Keyboard Focus And Activation",render:t=>a.jsxs(n,{...t,children:[a.jsx(n.Summary,{children:"Hvordan blir jeg frivillig?"}),a.jsx(n.Content,{children:"Meld deg som frivillig i din lokalforening, så tar vi kontakt om aktuelle aktiviteter i ditt nærmiljø."})]}),args:{"data-size":"md"},play:async({canvasElement:t})=>{const i=f(t),o=i.getByText("Hvordan blir jeg frivillig?"),s=o.closest("details"),r=i.getByText(/Meld deg som frivillig/);e(o.tabIndex).toBe(0),o.focus(),e(o).toHaveFocus(),e(s).not.toHaveAttribute("open"),await p.keyboard("{Enter}"),o.click(),await l(()=>e(s).toHaveAttribute("open")),e(r).toBeVisible(),await p.keyboard(" "),o.click(),await l(()=>e(s).not.toHaveAttribute("open")),e(r).not.toBeVisible(),e(o).toHaveFocus()}},m={name:"Test: Controlled Open Prop",render:t=>{const[i,o]=I.useState(!0);return a.jsxs(n,{...t,open:i,onToggle:s=>{var r;(r=t.onToggle)==null||r.call(t,s),o(c=>!c)},children:[a.jsx(n.Summary,{children:"Hvor går pengene?"}),a.jsx(n.Content,{children:"Gaver går til beredskap, omsorgsaktiviteter og internasjonalt hjelpearbeid i regi av Røde Kors."})]})},args:{"data-size":"md",onToggle:W()},play:async({canvasElement:t,args:i})=>{const o=f(t),s=o.getByText("Hvor går pengene?"),r=s.closest("details"),c=o.getByText(/beredskap, omsorgsaktiviteter/);e(r).toHaveAttribute("open"),e(c).toBeVisible(),await p.click(s),await l(()=>e(r).not.toHaveAttribute("open")),e(c).not.toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(1)),await p.click(s),await l(()=>e(r).toHaveAttribute("open")),e(c).toBeVisible(),await l(()=>e(i.onToggle).toHaveBeenCalledTimes(2))}};var b,k,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(k=u.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var T,x,j;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(x=v.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var D,w,H;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    'data-color': 'secondary-color-rust',
    open: false
  },
  name: 'Large Size, Brand1 Color'
}`,...(H=(w=y.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var C,A,B,S,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
again closes it. The onToggle callback fires for each state change.`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var O,V,F,M,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(V=g.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:`Tests keyboard operability of the disclosure: the summary sits in the tab
order (native tabIndex 0), takes focus, and toggles via its activation
behavior while focused.

Note: user-event cannot synthesize trusted Enter/Space key activation for
<summary> (untrusted key events have no default action, and user-event has
no summary behavior), so activation is exercised through the activation
click that a real Enter/Space press produces on a focused summary.`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.description}}};var K,_,R,L,N;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source},description:{story:"Tests the controlled `open` prop: the component mirrors external state in\nboth directions. A click requests a toggle via onToggle, state updates, and\nthe DOM follows; without a state update the details would stay put.",...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};const q=["DefaultClosed","DefaultOpen","LargeBrand1","TestToggleWithMouse","TestKeyboardToggle","TestControlledOpen"],J=Object.freeze(Object.defineProperty({__proto__:null,DefaultClosed:u,DefaultOpen:v,LargeBrand1:y,TestControlledOpen:m,TestKeyboardToggle:g,TestToggleWithMouse:d,__namedExportsOrder:q,default:G},Symbol.toStringTag,{value:"Module"}));export{J as D,y as L,u as a,v as b};
