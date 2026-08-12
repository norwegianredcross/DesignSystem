import{j as t,r as ae}from"./iframe-I___ixCb.js";import{C as ne}from"./tooltip-CukUlLeP.js";const r=ne;try{r.displayName="Chip",r.__docgenInfo={description:"Chip-komponent for filtrering, valg eller handlinger.",displayName:"Chip",props:{}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"Chip.Button used for interaction",displayName:"Button",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"Chip.Checkbox used for multiselection",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Chip.Radio used for single selection",displayName:"Radio",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Removable.displayName="Removable",Removable.__docgenInfo={description:"Chip.Removable used for interaction",displayName:"Removable",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:n,within:u,userEvent:c,waitFor:B,fn:b}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},g={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),t.jsx(r.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),t.jsx(r.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),t.jsx(r.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},C={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),t.jsx(r.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"brand1",children:"Bokmål (Brand1)"}),t.jsx(r.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),t.jsx(r.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},k={render:()=>{const[e,a]=ae.useState(["Norge","Sverige","Danmark"]),o=i=>{a(s=>s.filter(l=>l!==i))};return t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.map(i=>t.jsx(r.Removable,{"aria-label":`Fjern ${i}`,onClick:()=>o(i),"data-color":"neutral","data-size":"md",children:i},i)),e.length===0&&t.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},v={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),t.jsx(r.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"brand2",children:"Søk etter bokmål (Brand2)"}),t.jsx(r.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),t.jsx(r.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"},d={name:"Test: Removable Chip",render:e=>{const[a,o]=ae.useState(["Norge","Sverige","Danmark"]),i=s=>{var l;(l=e.onRemove)==null||l.call(e,s),o(y=>y.filter(x=>x!==s))};return t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.map(s=>t.jsx(r.Removable,{"aria-label":`Fjern ${s}`,onClick:()=>i(s),children:s},s)),a.length===0&&t.jsx("p",{children:"Alle valg er fjernet."})]})},args:{onRemove:b()},play:async({canvasElement:e,args:a})=>{const o=u(e),i=o.getByRole("button",{name:"Fjern Sverige"});n(i).toHaveAttribute("data-removable"),n(i).toHaveTextContent("Sverige"),await c.click(i),n(a.onRemove).toHaveBeenCalledTimes(1),n(a.onRemove).toHaveBeenLastCalledWith("Sverige"),await B(()=>n(o.queryByRole("button",{name:"Fjern Sverige"})).not.toBeInTheDocument()),n(o.getByRole("button",{name:"Fjern Norge"})).toBeInTheDocument(),n(o.getByRole("button",{name:"Fjern Danmark"})).toBeInTheDocument(),o.getByRole("button",{name:"Fjern Norge"}).focus(),await c.keyboard("{Enter}"),n(a.onRemove).toHaveBeenLastCalledWith("Norge"),await B(()=>n(o.queryByRole("button",{name:"Fjern Norge"})).not.toBeInTheDocument()),n(a.onRemove).toHaveBeenCalledTimes(2)}},h={name:"Test: Radio Chips Selection",render:e=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Radio,{name:"test-language",value:"nynorsk",defaultChecked:!0,onChange:()=>{var a;return(a=e.onChange)==null?void 0:a.call(e,"nynorsk")},children:"Nynorsk"}),t.jsx(r.Radio,{name:"test-language",value:"bokmaal",onChange:()=>{var a;return(a=e.onChange)==null?void 0:a.call(e,"bokmaal")},children:"Bokmål"}),t.jsx(r.Radio,{name:"test-language",value:"engelsk",onChange:()=>{var a;return(a=e.onChange)==null?void 0:a.call(e,"engelsk")},children:"Engelsk"})]}),args:{onChange:b()},play:async({canvasElement:e,args:a})=>{const o=u(e),i=o.getByRole("radio",{name:"Nynorsk"}),s=o.getByRole("radio",{name:"Bokmål"}),l=o.getByRole("radio",{name:"Engelsk"});n(i).toBeChecked(),n(s).not.toBeChecked(),await c.click(o.getByText("Bokmål")),n(s).toBeChecked(),n(i).not.toBeChecked(),n(l).not.toBeChecked(),n(a.onChange).toHaveBeenCalledTimes(1),n(a.onChange).toHaveBeenLastCalledWith("bokmaal"),n(s).toHaveFocus(),await c.keyboard("{ArrowRight}"),n(l).toHaveFocus(),n(l).toBeChecked(),n(s).not.toBeChecked(),n(a.onChange).toHaveBeenLastCalledWith("engelsk"),await c.keyboard("{ArrowLeft}"),n(s).toHaveFocus(),n(s).toBeChecked(),n(l).not.toBeChecked();const y=[i,s,l].filter(x=>x.checked);n(y).toHaveLength(1)}},p={name:"Test: Checkbox Chips Multi-Selection",render:e=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Checkbox,{name:"test-filter",value:"norge",onChange:()=>{var a;return(a=e.onChange)==null?void 0:a.call(e,"norge")},children:"Norge"}),t.jsx(r.Checkbox,{name:"test-filter",value:"sverige",onChange:()=>{var a;return(a=e.onChange)==null?void 0:a.call(e,"sverige")},children:"Sverige"}),t.jsx(r.Checkbox,{name:"test-filter",value:"danmark",disabled:!0,onChange:()=>{var a;return(a=e.onChange)==null?void 0:a.call(e,"danmark")},children:"Danmark"})]}),args:{onChange:b()},play:async({canvasElement:e,args:a})=>{const o=u(e),i=o.getByRole("checkbox",{name:"Norge"}),s=o.getByRole("checkbox",{name:"Sverige"}),l=o.getByRole("checkbox",{name:"Danmark"});await c.click(o.getByText("Norge")),n(i).toBeChecked(),n(s).not.toBeChecked(),await c.click(o.getByText("Sverige")),n(s).toBeChecked(),n(i).toBeChecked(),n(a.onChange).toHaveBeenCalledTimes(2),i.focus(),await c.keyboard(" "),n(i).not.toBeChecked(),n(s).toBeChecked(),n(a.onChange).toHaveBeenCalledTimes(3),n(l).toBeDisabled(),await c.click(o.getByText("Danmark")),n(l).not.toBeChecked(),n(a.onChange).toHaveBeenCalledTimes(3)}},m={name:"Test: Button Chip Activation",render:e=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Button,{onClick:()=>{var a;return(a=e.onSearch)==null?void 0:a.call(e,"nynorsk")},children:"Søk etter nynorsk"}),t.jsx(r.Button,{disabled:!0,onClick:()=>{var a;return(a=e.onSearch)==null?void 0:a.call(e,"deaktivert")},children:"Deaktivert"})]}),args:{onSearch:b()},play:async({canvasElement:e,args:a})=>{const o=u(e),i=o.getByRole("button",{name:"Søk etter nynorsk"});n(i).toHaveAttribute("type","button"),await c.click(i),n(a.onSearch).toHaveBeenCalledTimes(1),n(a.onSearch).toHaveBeenLastCalledWith("nynorsk"),i.focus(),await c.keyboard("{Enter}"),await c.keyboard(" "),n(a.onSearch).toHaveBeenCalledTimes(3);const s=o.getByRole("button",{name:"Deaktivert"});n(s).toBeDisabled(),await c.click(s),n(a.onSearch).toHaveBeenCalledTimes(3)}};var f,R,S;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Radio name="language-radio" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="bokmaal">
        Bokmål
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="engelsk" data-size="lg">
        Engelsk (Large)
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="disabled" disabled>
        Disabled
      </Chip.Radio>
    </div>,
  name: 'Example Radio Variant' // Renamed
}`,...(S=(R=g.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var T,j,E;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Checkbox name="filter-checkbox" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="bokmaal" data-color="brand1">
        Bokmål (Brand1)
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="engelsk" data-size="sm">
        Engelsk (Small)
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="disabled" disabled>
        Disabled
      </Chip.Checkbox>
    </div>,
  name: 'Example Checkbox Variant' // Renamed
}`,...(E=(j=C.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var w,_,D;k.parameters={...k.parameters,docs:{...(w=k.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [visibleChips, setVisibleChips] = useState(['Norge', 'Sverige', 'Danmark']);
    const handleRemove = (chipToRemove: string) => {
      setVisibleChips(prev => prev.filter(chip => chip !== chipToRemove));
    };
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        {visibleChips.map(chip => <Chip.Removable key={chip} aria-label={\`Fjern \${chip}\`} onClick={() => handleRemove(chip)} data-color="neutral" data-size="md">
            {chip}
          </Chip.Removable>)}
        {visibleChips.length === 0 && <p>All chips removed.</p>}
      </div>;
  },
  name: 'Example Removable Variant' // Renamed
}`,...(D=(_=k.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var H,N,z;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Button onClick={() => alert('Nynorsk clicked')}>
        Søk etter nynorsk
      </Chip.Button>
      <Chip.Button onClick={() => alert('Bokmål clicked')} data-color="brand2">
        Søk etter bokmål (Brand2)
      </Chip.Button>
      <Chip.Button onClick={() => alert('Engelsk clicked')} data-size="lg">
        Søk etter engelsk (Large)
      </Chip.Button>
      <Chip.Button disabled>Disabled</Chip.Button>
    </div>,
  name: 'Example Button Variant' // Renamed
}`,...(z=(N=v.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var F,V,L,q,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Test: Removable Chip',
  render: args => {
    const [visibleChips, setVisibleChips] = useState(['Norge', 'Sverige', 'Danmark']);
    const handleRemove = (chipToRemove: string) => {
      args.onRemove?.(chipToRemove);
      setVisibleChips(prev => prev.filter(chip => chip !== chipToRemove));
    };
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        {visibleChips.map(chip => <Chip.Removable key={chip} aria-label={\`Fjern \${chip}\`} onClick={() => handleRemove(chip)}>
            {chip}
          </Chip.Removable>)}
        {visibleChips.length === 0 && <p>Alle valg er fjernet.</p>}
      </div>;
  },
  args: {
    onRemove: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // The aria-label wins over the visible text as accessible name
    const removeSverige = canvas.getByRole('button', {
      name: 'Fjern Sverige'
    });
    expect(removeSverige).toHaveAttribute('data-removable');
    expect(removeSverige).toHaveTextContent('Sverige');

    // Mouse: clicking fires the removal callback with the right chip,
    // and the chip disappears from the DOM
    await userEvent.click(removeSverige);
    expect(args.onRemove).toHaveBeenCalledTimes(1);
    expect(args.onRemove).toHaveBeenLastCalledWith('Sverige');
    await waitFor(() => expect(canvas.queryByRole('button', {
      name: 'Fjern Sverige'
    })).not.toBeInTheDocument());

    // The other chips are unaffected
    expect(canvas.getByRole('button', {
      name: 'Fjern Norge'
    })).toBeInTheDocument();
    expect(canvas.getByRole('button', {
      name: 'Fjern Danmark'
    })).toBeInTheDocument();

    // Keyboard: focus + Enter removes a chip too
    const removeNorge = canvas.getByRole('button', {
      name: 'Fjern Norge'
    });
    removeNorge.focus();
    await userEvent.keyboard('{Enter}');
    expect(args.onRemove).toHaveBeenLastCalledWith('Norge');
    await waitFor(() => expect(canvas.queryByRole('button', {
      name: 'Fjern Norge'
    })).not.toBeInTheDocument());
    expect(args.onRemove).toHaveBeenCalledTimes(2);
  }
}`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source},description:{story:`Tests Chip.Removable: each chip is a button whose accessible name comes from
its aria-label ("Fjern <navn>"), it carries the data-removable marker, and
activating it (mouse or keyboard) fires the removal callback and removes the
chip from the list.`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};var I,W,M,O,$;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Test: Radio Chips Selection',
  render: args => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Radio name="test-language" value="nynorsk" defaultChecked onChange={() => args.onChange?.('nynorsk')}>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio name="test-language" value="bokmaal" onChange={() => args.onChange?.('bokmaal')}>
        Bokmål
      </Chip.Radio>
      <Chip.Radio name="test-language" value="engelsk" onChange={() => args.onChange?.('engelsk')}>
        Engelsk
      </Chip.Radio>
    </div>,
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // The chips are exposed as radios named by their visible label
    const nynorsk = canvas.getByRole('radio', {
      name: 'Nynorsk'
    });
    const bokmaal = canvas.getByRole('radio', {
      name: 'Bokmål'
    });
    const engelsk = canvas.getByRole('radio', {
      name: 'Engelsk'
    });

    // Initial state from defaultChecked
    expect(nynorsk).toBeChecked();
    expect(bokmaal).not.toBeChecked();

    // Clicking the chip label moves the selection (single-selection semantics)
    await userEvent.click(canvas.getByText('Bokmål'));
    expect(bokmaal).toBeChecked();
    expect(nynorsk).not.toBeChecked();
    expect(engelsk).not.toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(1);
    expect(args.onChange).toHaveBeenLastCalledWith('bokmaal');

    // Arrow keys move selection within the radio group
    expect(bokmaal).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(engelsk).toHaveFocus();
    expect(engelsk).toBeChecked();
    expect(bokmaal).not.toBeChecked();
    expect(args.onChange).toHaveBeenLastCalledWith('engelsk');
    await userEvent.keyboard('{ArrowLeft}');
    expect(bokmaal).toHaveFocus();
    expect(bokmaal).toBeChecked();
    expect(engelsk).not.toBeChecked();

    // Exactly one radio is checked at all times
    const checked = [nynorsk, bokmaal, engelsk].filter(radio => (radio as HTMLInputElement).checked);
    expect(checked).toHaveLength(1);
  }
}`,...(M=(W=h.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:`Tests Chip.Radio: chips in the same name-group behave as radios with
single-selection semantics. Clicking moves the selection, and arrow keys
move both focus and selection within the group.`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.description}}};var K,U,P,Y,G;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Test: Checkbox Chips Multi-Selection',
  render: args => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Checkbox name="test-filter" value="norge" onChange={() => args.onChange?.('norge')}>
        Norge
      </Chip.Checkbox>
      <Chip.Checkbox name="test-filter" value="sverige" onChange={() => args.onChange?.('sverige')}>
        Sverige
      </Chip.Checkbox>
      <Chip.Checkbox name="test-filter" value="danmark" disabled onChange={() => args.onChange?.('danmark')}>
        Danmark
      </Chip.Checkbox>
    </div>,
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const norge = canvas.getByRole('checkbox', {
      name: 'Norge'
    });
    const sverige = canvas.getByRole('checkbox', {
      name: 'Sverige'
    });
    const danmark = canvas.getByRole('checkbox', {
      name: 'Danmark'
    });

    // Mouse: toggling one chip does not affect the others (multi-selection)
    await userEvent.click(canvas.getByText('Norge'));
    expect(norge).toBeChecked();
    expect(sverige).not.toBeChecked();
    await userEvent.click(canvas.getByText('Sverige'));
    expect(sverige).toBeChecked();
    expect(norge).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(2);

    // Keyboard: Space unchecks the focused chip again
    norge.focus();
    await userEvent.keyboard(' ');
    expect(norge).not.toBeChecked();
    expect(sverige).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(3);

    // Disabled chip cannot be toggled
    expect(danmark).toBeDisabled();
    await userEvent.click(canvas.getByText('Danmark'));
    expect(danmark).not.toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(3);
  }
}`,...(P=(U=p.parameters)==null?void 0:U.docs)==null?void 0:P.source},description:{story:`Tests Chip.Checkbox: chips toggle independently (multi-selection), can be
unchecked again, and are operable with the keyboard (Space). A disabled
chip cannot be toggled.`,...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.description}}};var J,Q,X,Z,ee;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Test: Button Chip Activation',
  render: args => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Button onClick={() => args.onSearch?.('nynorsk')}>
        Søk etter nynorsk
      </Chip.Button>
      <Chip.Button disabled onClick={() => args.onSearch?.('deaktivert')}>
        Deaktivert
      </Chip.Button>
    </div>,
  args: {
    onSearch: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const searchChip = canvas.getByRole('button', {
      name: 'Søk etter nynorsk'
    });

    // Renders as a non-submitting button
    expect(searchChip).toHaveAttribute('type', 'button');

    // Mouse click fires the callback
    await userEvent.click(searchChip);
    expect(args.onSearch).toHaveBeenCalledTimes(1);
    expect(args.onSearch).toHaveBeenLastCalledWith('nynorsk');

    // Keyboard: Enter and Space both activate the button
    searchChip.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    expect(args.onSearch).toHaveBeenCalledTimes(3);

    // Disabled chip button ignores clicks
    const disabledChip = canvas.getByRole('button', {
      name: 'Deaktivert'
    });
    expect(disabledChip).toBeDisabled();
    await userEvent.click(disabledChip);
    expect(args.onSearch).toHaveBeenCalledTimes(3);
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`Tests Chip.Button: it is a real button (type="button"), fires onClick with
mouse and keyboard, and a disabled chip button ignores activation.`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const oe=["Radio","Checkbox","Removable","Button","TestRemovableChip","TestRadioChips","TestCheckboxChips","TestButtonChip"],re=Object.freeze(Object.defineProperty({__proto__:null,Button:v,Checkbox:C,Radio:g,Removable:k,TestButtonChip:m,TestCheckboxChips:p,TestRadioChips:h,TestRemovableChip:d,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{v as B,re as C,g as R,C as a,k as b};
