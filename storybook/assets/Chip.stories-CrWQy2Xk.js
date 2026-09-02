import{j as t,r as ae}from"./iframe-BYyDdLVI.js";import{C as ne}from"./tooltip-D949qbH_.js";const r=ne,{expect:a,within:u,userEvent:c,waitFor:B,fn:b}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},k={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),t.jsx(r.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),t.jsx(r.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),t.jsx(r.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},v={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),t.jsx(r.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"secondary-color-rust",children:"Bokmål (Brand1)"}),t.jsx(r.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),t.jsx(r.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},C={render:()=>{const[n,e]=ae.useState(["Norge","Sverige","Danmark"]),o=i=>{e(s=>s.filter(l=>l!==i))};return t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.map(i=>t.jsx(r.Removable,{"aria-label":`Fjern ${i}`,onClick:()=>o(i),"data-color":"neutral","data-size":"md",children:i},i)),n.length===0&&t.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},g={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),t.jsx(r.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"additional-color-ocean",children:"Søk etter bokmål (Brand2)"}),t.jsx(r.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),t.jsx(r.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"},d={name:"Test: Removable Chip",render:n=>{const[e,o]=ae.useState(["Norge","Sverige","Danmark"]),i=s=>{var l;(l=n.onRemove)==null||l.call(n,s),o(x=>x.filter(y=>y!==s))};return t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.map(s=>t.jsx(r.Removable,{"aria-label":`Fjern ${s}`,onClick:()=>i(s),children:s},s)),e.length===0&&t.jsx("p",{children:"Alle valg er fjernet."})]})},args:{onRemove:b()},play:async({canvasElement:n,args:e})=>{const o=u(n),i=o.getByRole("button",{name:"Fjern Sverige"});a(i).toHaveAttribute("data-removable"),a(i).toHaveTextContent("Sverige"),await c.click(i),a(e.onRemove).toHaveBeenCalledTimes(1),a(e.onRemove).toHaveBeenLastCalledWith("Sverige"),await B(()=>a(o.queryByRole("button",{name:"Fjern Sverige"})).not.toBeInTheDocument()),a(o.getByRole("button",{name:"Fjern Norge"})).toBeInTheDocument(),a(o.getByRole("button",{name:"Fjern Danmark"})).toBeInTheDocument(),o.getByRole("button",{name:"Fjern Norge"}).focus(),await c.keyboard("{Enter}"),a(e.onRemove).toHaveBeenLastCalledWith("Norge"),await B(()=>a(o.queryByRole("button",{name:"Fjern Norge"})).not.toBeInTheDocument()),a(e.onRemove).toHaveBeenCalledTimes(2)}},h={name:"Test: Radio Chips Selection",render:n=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Radio,{name:"test-language",value:"nynorsk",defaultChecked:!0,onChange:()=>{var e;return(e=n.onChange)==null?void 0:e.call(n,"nynorsk")},children:"Nynorsk"}),t.jsx(r.Radio,{name:"test-language",value:"bokmaal",onChange:()=>{var e;return(e=n.onChange)==null?void 0:e.call(n,"bokmaal")},children:"Bokmål"}),t.jsx(r.Radio,{name:"test-language",value:"engelsk",onChange:()=>{var e;return(e=n.onChange)==null?void 0:e.call(n,"engelsk")},children:"Engelsk"})]}),args:{onChange:b()},play:async({canvasElement:n,args:e})=>{const o=u(n),i=o.getByRole("radio",{name:"Nynorsk"}),s=o.getByRole("radio",{name:"Bokmål"}),l=o.getByRole("radio",{name:"Engelsk"});a(i).toBeChecked(),a(s).not.toBeChecked(),await c.click(o.getByText("Bokmål")),a(s).toBeChecked(),a(i).not.toBeChecked(),a(l).not.toBeChecked(),a(e.onChange).toHaveBeenCalledTimes(1),a(e.onChange).toHaveBeenLastCalledWith("bokmaal"),a(s).toHaveFocus(),await c.keyboard("{ArrowRight}"),a(l).toHaveFocus(),a(l).toBeChecked(),a(s).not.toBeChecked(),a(e.onChange).toHaveBeenLastCalledWith("engelsk"),await c.keyboard("{ArrowLeft}"),a(s).toHaveFocus(),a(s).toBeChecked(),a(l).not.toBeChecked();const x=[i,s,l].filter(y=>y.checked);a(x).toHaveLength(1)}},p={name:"Test: Checkbox Chips Multi-Selection",render:n=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Checkbox,{name:"test-filter",value:"norge",onChange:()=>{var e;return(e=n.onChange)==null?void 0:e.call(n,"norge")},children:"Norge"}),t.jsx(r.Checkbox,{name:"test-filter",value:"sverige",onChange:()=>{var e;return(e=n.onChange)==null?void 0:e.call(n,"sverige")},children:"Sverige"}),t.jsx(r.Checkbox,{name:"test-filter",value:"danmark",disabled:!0,onChange:()=>{var e;return(e=n.onChange)==null?void 0:e.call(n,"danmark")},children:"Danmark"})]}),args:{onChange:b()},play:async({canvasElement:n,args:e})=>{const o=u(n),i=o.getByRole("checkbox",{name:"Norge"}),s=o.getByRole("checkbox",{name:"Sverige"}),l=o.getByRole("checkbox",{name:"Danmark"});await c.click(o.getByText("Norge")),a(i).toBeChecked(),a(s).not.toBeChecked(),await c.click(o.getByText("Sverige")),a(s).toBeChecked(),a(i).toBeChecked(),a(e.onChange).toHaveBeenCalledTimes(2),i.focus(),await c.keyboard(" "),a(i).not.toBeChecked(),a(s).toBeChecked(),a(e.onChange).toHaveBeenCalledTimes(3),a(l).toBeDisabled(),await c.click(o.getByText("Danmark")),a(l).not.toBeChecked(),a(e.onChange).toHaveBeenCalledTimes(3)}},m={name:"Test: Button Chip Activation",render:n=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(r.Button,{onClick:()=>{var e;return(e=n.onSearch)==null?void 0:e.call(n,"nynorsk")},children:"Søk etter nynorsk"}),t.jsx(r.Button,{disabled:!0,onClick:()=>{var e;return(e=n.onSearch)==null?void 0:e.call(n,"deaktivert")},children:"Deaktivert"})]}),args:{onSearch:b()},play:async({canvasElement:n,args:e})=>{const o=u(n),i=o.getByRole("button",{name:"Søk etter nynorsk"});a(i).toHaveAttribute("type","button"),await c.click(i),a(e.onSearch).toHaveBeenCalledTimes(1),a(e.onSearch).toHaveBeenLastCalledWith("nynorsk"),i.focus(),await c.keyboard("{Enter}"),await c.keyboard(" "),a(e.onSearch).toHaveBeenCalledTimes(3);const s=o.getByRole("button",{name:"Deaktivert"});a(s).toBeDisabled(),await c.click(s),a(e.onSearch).toHaveBeenCalledTimes(3)}};var R,f,S;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(S=(f=k.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,j,E;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Checkbox name="filter-checkbox" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="bokmaal" data-color="secondary-color-rust">
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
}`,...(E=(j=v.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var w,H,D;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(H=C.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var N,F,L;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Button onClick={() => alert('Nynorsk clicked')}>
        Søk etter nynorsk
      </Chip.Button>
      <Chip.Button onClick={() => alert('Bokmål clicked')} data-color="additional-color-ocean">
        Søk etter bokmål (Brand2)
      </Chip.Button>
      <Chip.Button onClick={() => alert('Engelsk clicked')} data-size="lg">
        Søk etter engelsk (Large)
      </Chip.Button>
      <Chip.Button disabled>Disabled</Chip.Button>
    </div>,
  name: 'Example Button Variant' // Renamed
}`,...(L=(F=g.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var A,V,_,I,W;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source},description:{story:`Tests Chip.Removable: each chip is a button whose accessible name comes from
its aria-label ("Fjern <navn>"), it carries the data-removable marker, and
activating it (mouse or keyboard) fires the removal callback and removes the
chip from the list.`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var z,M,O,q,K;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:`Tests Chip.Radio: chips in the same name-group behave as radios with
single-selection semantics. Clicking moves the selection, and arrow keys
move both focus and selection within the group.`,...(K=(q=h.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};var $,U,P,Y,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
mouse and keyboard, and a disabled chip button ignores activation.`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const oe=["Radio","Checkbox","Removable","Button","TestRemovableChip","TestRadioChips","TestCheckboxChips","TestButtonChip"],re=Object.freeze(Object.defineProperty({__proto__:null,Button:g,Checkbox:v,Radio:k,Removable:C,TestButtonChip:m,TestCheckboxChips:p,TestRadioChips:h,TestRemovableChip:d,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{g as B,re as C,k as R,v as a,C as b};
