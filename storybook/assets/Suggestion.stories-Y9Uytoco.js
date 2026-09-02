import{r as p,j as t}from"./iframe-BYyDdLVI.js";import{K as Xe}from"./tooltip-D949qbH_.js";import{F as w}from"./index-CquV7vFF.js";import{L as x}from"./index-Dw-Fh9oS.js";import{S as Ke}from"./index-JXVY5aQ9.js";const a=Xe;a.displayName="Suggestion";const{expect:r,within:h,userEvent:c,waitFor:d,fn:S}=__STORYBOOK_MODULE_TEST__,Pe=(n,o)=>{const s=p.useRef(null);return p.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),p.useCallback((...i)=>{s.current&&clearTimeout(s.current),s.current=window.setTimeout(()=>{n(...i)},o)},[n,o])},Ue={title:"Components/Suggestion",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}},a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1},{id:"aria-required-parent",enabled:!1},{id:"aria-valid-attr-value",enabled:!1}]}}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},y=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],L={render:n=>{const[o,s]=p.useState(void 0);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg en destinasjon"}),t.jsxs(a,{...n,selected:o,onSelectedChange:(e=>{Array.isArray(e)||s(e)}),name:"single-destination",children:[t.jsx(a.Input,{}),t.jsx(a.Clear,{}),t.jsxs(a.List,{children:[t.jsx(a.Empty,{children:"Ingen treff"}),y.map(e=>t.jsx(a.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!1,creatable:!1}},V={render:n=>{const[o,s]=p.useState([y[1]]);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg destinasjoner"}),t.jsxs(a,{...n,selected:o,onSelectedChange:(e=>{Array.isArray(e)&&s(e)}),name:"multi-destination",children:[t.jsx(a.Input,{}),t.jsx(a.Clear,{}),t.jsxs(a.List,{children:[t.jsx(a.Empty,{children:"Ingen treff"}),y.map(e=>t.jsx(a.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},B={render:n=>{const[o,s]=p.useState(y),[e,i]=p.useState([]),u=l=>{const m=l.find(b=>b.__new__);if(m){const b={label:m.label,value:m.value};s(_=>[..._,b])}i(l)};return t.jsxs(w,{children:[t.jsx(x,{children:"Velg eller lag destinasjoner"}),t.jsxs(a,{...n,selected:e,onSelectedChange:(l=>{Array.isArray(l)&&u(l)}),name:"creatable-destination",children:[t.jsx(a.Input,{}),t.jsx(a.Clear,{}),t.jsxs(a.List,{children:[t.jsx(a.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),o.map(l=>t.jsx(a.Option,{label:l.label,value:l.value,children:l.label},l.value))]})]})]})},args:{multiple:!0,creatable:!0}},R={render:n=>{const[o,s]=p.useState(""),[e,i]=p.useState(null),[u,l]=p.useState(),b=Pe(async g=>{const v=`https://restcountries.com/v2/name/${g}?fields=name`;try{const f=await fetch(v);if(!f.ok){i([]);return}const q=await f.json();i(Array.isArray(q)?q.map(({name:Ne})=>Ne):[])}catch(f){console.error("Failed to fetch countries:",f),i([])}},500),_=g=>{const v=g.currentTarget.value;s(v),i(null);const f=v.trim();f&&b(encodeURIComponent(f))},We=g=>{if(!Array.isArray(g)&&g){const v=g;s(v.label),l(v),i(null)}};return t.jsxs(w,{lang:"en",children:[t.jsx(x,{children:"Search for countries (in english)"}),t.jsxs(a,{...n,selected:u,onSelectedChange:We,children:[t.jsx(a.Input,{onInput:_,value:o}),t.jsx(a.Clear,{}),t.jsxs(a.List,{singular:"%d country",plural:"%d countries",children:[o?t.jsx(a.Empty,{children:e?"Ingen treff":t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ke,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,e==null?void 0:e.map(g=>t.jsx(a.Option,{label:g,value:g,children:g},g))]})]})]})},args:{filter:!1},name:"Async Loading"},M={render:n=>{const[o,s]=p.useState(void 0);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg en destinasjon (viser alltid alle)"}),t.jsxs(a,{...n,selected:o,onSelectedChange:(e=>{Array.isArray(e)||s(e)}),name:"no-filter-destination",children:[t.jsx(a.Input,{}),t.jsx(a.Clear,{}),t.jsxs(a.List,{children:[t.jsx(a.Empty,{children:"Listen er tom"}),y.map(e=>t.jsx(a.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{filter:!1},name:"No Filter"},C=n=>{const[o,s]=p.useState(void 0);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg en destinasjon"}),t.jsxs(a,{...n,selected:o,onSelectedChange:(e=>{var i;(i=n.onSelectedChange)==null||i.call(n,e),Array.isArray(e)||s(e??void 0)}),name:"test-destination",children:[t.jsx(a.Input,{}),t.jsx(a.Clear,{}),t.jsxs(a.List,{children:[t.jsx(a.Empty,{children:"Ingen treff"}),y.map(e=>t.jsx(a.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},A=async n=>await d(()=>n.getByRole("combobox",{name:"Velg en destinasjon"})),E={name:"Test: Combobox Aria Attributes",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n})=>{const o=h(n),s=await A(o),e=await o.findByRole("listbox",{hidden:!0});await c.click(s),await c.type(s,"o"),await d(()=>{r(s).toHaveAttribute("aria-controls",e.id),r(s).toHaveAttribute("aria-expanded","true"),r(e).toBeVisible()},{timeout:4e3})}},I={name:"Test: Typing Filters Options",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n})=>{const o=h(n),s=await A(o);await c.click(s);const e=Array.from(n.querySelectorAll("u-option:not([data-empty])"));r(e).toHaveLength(y.length),await d(()=>{for(const i of e)r(i).toHaveAttribute("aria-hidden","false")}),await c.type(s,"berg"),await d(()=>{const i=e.find(l=>l.textContent==="Bergen"),u=e.find(l=>l.textContent==="Oslo");r(i).toHaveAttribute("aria-hidden","false"),r(i).not.toHaveAttribute("disabled"),r(u).toHaveAttribute("aria-hidden","true"),r(u).toHaveAttribute("disabled")})}},T={name:"Test: Keyboard Selection",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n,args:o})=>{const s=h(n),e=await A(s);await c.click(e),await c.type(e,"osl"),await c.keyboard("{ArrowDown}"),await d(()=>{const i=e.getAttribute("aria-activedescendant");r(i).toBeTruthy();const u=n.ownerDocument.getElementById(i??"");r(u).toHaveAttribute("role","option"),r(u==null?void 0:u.textContent).toBe("Oslo")}),await c.keyboard("{Enter}"),await d(()=>{r(o.onSelectedChange).toHaveBeenLastCalledWith({label:"Oslo",value:"oslo"}),r(e).toHaveValue("Oslo")})}},k={name:"Test: Mouse Selection",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n,args:o})=>{const s=h(n),e=await A(s),i=n.querySelector("u-datalist");await c.click(e),await c.type(e,"trond");const u=await d(()=>{const l=Array.from(n.querySelectorAll("u-option:not([data-empty])")).find(m=>m.textContent==="Trondheim");return r(l).toHaveAttribute("aria-hidden","false"),l});await c.click(u),await d(()=>{r(o.onSelectedChange).toHaveBeenLastCalledWith({label:"Trondheim",value:"trondheim"}),r(e).toHaveValue("Trondheim"),r(i).toHaveAttribute("hidden")})}},j={name:"Test: Escape Closes List",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n,args:o})=>{const s=h(n),e=await A(s),i=n.querySelector("u-datalist");await c.click(e),await d(()=>{r(i).not.toHaveAttribute("hidden")}),await c.keyboard("{Escape}"),await d(()=>{r(i).toHaveAttribute("hidden")}),r(o.onSelectedChange).not.toHaveBeenCalled(),r(e).toHaveValue("")}},F={name:"Test: Empty State",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n})=>{const o=h(n),s=await A(o);await c.click(s),await c.type(s,"finnes-ikke");const e=await d(()=>o.getByText("Ingen treff"));r(e).toBeVisible(),await d(()=>{for(const i of n.querySelectorAll("u-option:not([data-empty])"))r(i).toHaveAttribute("aria-hidden","true")})}},O={name:"Test: Clear Selection",render:C,args:{onSelectedChange:S()},play:async({canvasElement:n,args:o})=>{const s=h(n),e=await A(s);await c.click(e),await c.type(e,"sogn");const i=await d(()=>{const l=Array.from(n.querySelectorAll("u-option:not([data-empty])")).find(m=>m.textContent==="Sogndal");return r(l).toHaveAttribute("aria-hidden","false"),l});await c.click(i),await d(()=>{r(e).toHaveValue("Sogndal")});const u=await s.findByRole("button",{name:"Tøm"});await c.click(u),await d(()=>{r(e).toHaveValue("")}),r(e).toHaveFocus(),await c.tab(),await d(()=>{r(o.onSelectedChange).toHaveBeenLastCalledWith(null),r(e).toHaveValue("")})}},H={name:"Test: Multi-Select Interaction",render:n=>{const[o,s]=p.useState([]);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg destinasjoner"}),t.jsxs(a,{...n,selected:o,onSelectedChange:(e=>{var i;(i=n.onSelectedChange)==null||i.call(n,e),Array.isArray(e)&&s(e)}),name:"test-multi-destination",children:[t.jsx(a.Input,{}),t.jsx(a.Clear,{}),t.jsxs(a.List,{children:[t.jsx(a.Empty,{children:"Ingen treff"}),y.map(e=>t.jsx(a.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!0,onSelectedChange:S()},play:async({canvasElement:n,args:o})=>{const s=h(n),e=await d(()=>s.getByRole("combobox",{name:"Velg destinasjoner"})),i=async u=>{await c.click(e);const l=await d(()=>{const m=Array.from(n.querySelectorAll("u-option:not([data-empty])")).find(b=>b.textContent===u);return r(m).toHaveAttribute("aria-hidden","false"),m});await c.click(l)};await i("Oslo"),await d(()=>{r(o.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"}])}),await i("Bergen"),await d(()=>{r(o.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"}])}),await d(()=>{const u=Array.from(n.querySelectorAll("data[value]")).map(l=>l.getAttribute("value"));r(u).toEqual(["oslo","bergen"])})}};var D,W,N;L.parameters={...L.parameters,docs:{...(D=L.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>(undefined);
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg en destinasjon</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
        // Fix: Add type guard and cast handler to 'any'
        onSelectedChange={((item: unknown) => {
          if (!Array.isArray(item)) {
            setSelected(item as StorySuggestionItem);
          }
        }) as any} name="single-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
            label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: false,
    creatable: false
  }
}`,...(N=(W=L.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var X,K,P;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem[]>([defaultOptions[1]! // Pre-select 'Oslo'
    ]);
    return <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
      // Fix: Add type guard and cast handler to 'any'
      onSelectedChange={((items: unknown) => {
        if (Array.isArray(items)) {
          setSelected(items as StorySuggestionItem[]);
        }
      }) as any} name="multi-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
          label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>;
  },
  args: {
    multiple: true
  },
  name: 'Multi-Select'
}`,...(P=(K=V.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var U,z,$;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [options, setOptions] = useState<StorySuggestionItem[]>(defaultOptions);
    const [selected, setSelected] = useState<StorySuggestionItem[]>([]);
    const handleSelectedChange = (items: StorySuggestionItem[]) => {
      // Check if a new item was created
      const newItem = items.find(item => (item as any).__new__);
      if (newItem) {
        // Add the new item to the available options list
        const newOption = {
          label: newItem.label,
          value: newItem.value
        };
        setOptions(prev => [...prev, newOption]);
      }
      setSelected(items);
    };
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg eller lag destinasjoner</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
        // Fix: Add type guard and cast handler to 'any'
        onSelectedChange={((items: unknown) => {
          if (Array.isArray(items)) {
            handleSelectedChange(items as StorySuggestionItem[]);
          }
        }) as any} name="creatable-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>
              Ingen treff (trykk Enter for å lage ny)
            </Suggestion.Empty>
            {options.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
            label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: true,
    creatable: true
  }
}`,...($=(z=B.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var Y,G,J;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<string[] | null>(null);
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>();
    const apiCall = async (value: string) => {
      const api = \`https://restcountries.com/v2/name/\${value}?fields=name\`;
      try {
        const response = await fetch(api);
        if (!response.ok) {
          setOptions([]); // Handle HTTP errors
          return;
        }
        const countries = await response.json();
        setOptions(Array.isArray(countries) ? countries.map(({
          name
        }) => name) : []);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
        setOptions([]); // Handle fetch errors
      }
    };
    const debounced = useDebounceCallback(apiCall, 500);

    // onInput carries a FormEvent (Digdir's InputEventHandler); typing it as a
    // ChangeEvent was wrong and TypeScript 5.9 finally rejects the mismatch.
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
      const inputValue = event.currentTarget.value;
      setValue(inputValue);
      setOptions(null); // Clear options on new input
      const trimmedValue = inputValue.trim();
      if (!trimmedValue) return;
      debounced(encodeURIComponent(trimmedValue));
    };

    // FIX: Added handler to make component controlled
    const handleSelectedChange = (item: unknown) => {
      if (!Array.isArray(item) && item) {
        const selectedItem = item as StorySuggestionItem;
        setValue(selectedItem.label); // Set input value to the selected item
        setSelected(selectedItem); // Set selected state
        setOptions(null); // Clear options list
      }
    };
    return <Field lang="en">
        <Label>Search for countries (in english)</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
      onSelectedChange={handleSelectedChange as any} // FIX: Cast handler to 'any'
      >
          <Suggestion.Input onInput={handleInput} value={value} />
          <Suggestion.Clear />
          <Suggestion.List singular="%d country" plural="%d countries">
            {value ? <Suggestion.Empty>
                {options ? 'Ingen treff' : <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
                    <Spinner aria-hidden="true" data-size="sm" /> Laster...
                  </span>}
              </Suggestion.Empty> : null}
            {options?.map(option => <Suggestion.Option key={option} label={option} value={option}>
                {option}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>;
  },
  args: {
    // We set filter to false because we are providing our own list of options
    filter: false
  },
  name: 'Async Loading'
}`,...(J=(G=R.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>(undefined);
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg en destinasjon (viser alltid alle)</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
        // Fix: Add type guard and cast handler to 'any'
        onSelectedChange={((item: unknown) => {
          if (!Array.isArray(item)) {
            setSelected(item as StorySuggestionItem);
          }
        }) as any} name="no-filter-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Listen er tom</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
            label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    filter: false
  },
  name: 'No Filter'
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae,se,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Test: Combobox Aria Attributes',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Semantics, not Digdir's wiring: the field IS a combobox (that is how
    // findSuggestionInput finds it), it controls a listbox, and opening it
    // is reflected in aria-expanded. Which element carries which attribute,
    // and when the web component upgrades it, is Digdir's business.
    const input = await findSuggestionInput(canvas);
    // Single-select only: in \`multiple\` mode the hidden <select multiple>
    // is a second listbox, so this lookup would be ambiguous there.
    const list = await canvas.findByRole('listbox', {
      hidden: true
    });

    // Opening the field exposes the controlled list: the combobox points at
    // the listbox, reports expanded, and the list shows. Since Digdir 1.21
    // the wiring happens on first interaction and the list opens on input
    // (typing / arrow keys) rather than on bare focus - the standard
    // combobox pattern - so nothing is asserted before the user types.
    await userEvent.click(input);
    await userEvent.type(input, 'o');
    // The web component opens the popover asynchronously; under a full
    // parallel suite run the default 1 s wait is occasionally too short.
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-controls', list.id);
      expect(input).toHaveAttribute('aria-expanded', 'true');
      expect(list).toBeVisible();
    }, {
      timeout: 4000
    });
  }
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:`Tests combobox ARIA wiring on the input: role, aria-autocomplete,
aria-controls pointing at the listbox, and expanded state on focus.`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};var ie,re,le,ce,de;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Test: Typing Filters Options',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    await userEvent.click(input);

    // All five options are available before typing
    const options = Array.from(canvasElement.querySelectorAll('u-option:not([data-empty])'));
    expect(options).toHaveLength(defaultOptions.length);
    await waitFor(() => {
      for (const option of options) {
        expect(option).toHaveAttribute('aria-hidden', 'false');
      }
    });

    // Typing narrows the list down to the single match ("Bergen")
    await userEvent.type(input, 'berg');
    await waitFor(() => {
      const bergen = options.find(o => o.textContent === 'Bergen');
      const oslo = options.find(o => o.textContent === 'Oslo');
      expect(bergen).toHaveAttribute('aria-hidden', 'false');
      expect(bergen).not.toHaveAttribute('disabled');
      expect(oslo).toHaveAttribute('aria-hidden', 'true');
      expect(oslo).toHaveAttribute('disabled');
    });
  }
}`,...(le=(re=I.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"Tests that typing filters the option list to matching entries.",...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,pe,ge,me,ye;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Test: Keyboard Selection',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    await userEvent.click(input);
    await userEvent.type(input, 'osl');

    // ArrowDown makes the first visible option the active descendant. Focus
    // stays in the combobox (the WAI-ARIA combobox pattern); asserting on
    // document.activeElement was asserting Digdir's pre-1.21 internals.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      const activeId = input.getAttribute('aria-activedescendant');
      expect(activeId).toBeTruthy();
      const active = canvasElement.ownerDocument.getElementById(activeId ?? '');
      expect(active).toHaveAttribute('role', 'option');
      expect(active?.textContent).toBe('Oslo');
    });

    // Enter selects the focused option
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Oslo',
        value: 'oslo'
      });
      expect(input).toHaveValue('Oslo');
    });
  }
}`,...(ge=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:`Tests full keyboard flow: type to filter, ArrowDown to move focus into the
list, Enter to select. Selection fills the input and fires the callback.`,...(ye=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ye.description}}};var he,Se,be,ve,fe;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Test: Mouse Selection',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    const list = canvasElement.querySelector('u-datalist');
    await userEvent.click(input);
    await userEvent.type(input, 'trond');
    const trondheim = await waitFor(() => {
      const option = Array.from(canvasElement.querySelectorAll('u-option:not([data-empty])')).find(o => o.textContent === 'Trondheim');
      expect(option).toHaveAttribute('aria-hidden', 'false');
      return option as HTMLElement;
    });
    await userEvent.click(trondheim);
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Trondheim',
        value: 'trondheim'
      });
      expect(input).toHaveValue('Trondheim');
      expect(list).toHaveAttribute('hidden');
    });
  }
}`,...(be=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:be.source},description:{story:`Tests selection with the mouse: clicking an option fills the input,
fires the callback, and closes the list.`,...(fe=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var we,xe,Ce,Ae,Ee;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Test: Escape Closes List',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    const list = canvasElement.querySelector('u-datalist');
    await userEvent.click(input);
    await waitFor(() => {
      expect(list).not.toHaveAttribute('hidden');
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(list).toHaveAttribute('hidden');
    });
    // Known issue #24: aria-expanded stays "true" on desktop even when the
    // list is closed (upstream u-datalist behavior).
    expect(args.onSelectedChange).not.toHaveBeenCalled();
    expect(input).toHaveValue('');
  }
}`,...(Ce=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source},description:{story:"Tests that Escape closes the suggestion list without selecting anything.",...(Ee=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.description}}};var Ie,Te,ke,je,Fe;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Test: Empty State',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    await userEvent.click(input);
    await userEvent.type(input, 'finnes-ikke');

    // All options are filtered out — the Empty option is rendered instead
    const empty = await waitFor(() => canvas.getByText('Ingen treff'));
    expect(empty).toBeVisible();
    await waitFor(() => {
      for (const option of canvasElement.querySelectorAll('u-option:not([data-empty])')) {
        expect(option).toHaveAttribute('aria-hidden', 'true');
      }
    });
  }
}`,...(ke=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:ke.source},description:{story:"Negative test: input with no matches shows the empty state option.",...(Fe=(je=F.parameters)==null?void 0:je.docs)==null?void 0:Fe.description}}};var Oe,He,Le,Ve,Be;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Test: Clear Selection',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);

    // Select "Sogndal" first
    await userEvent.click(input);
    await userEvent.type(input, 'sogn');
    const sogndal = await waitFor(() => {
      const option = Array.from(canvasElement.querySelectorAll('u-option:not([data-empty])')).find(o => o.textContent === 'Sogndal');
      expect(option).toHaveAttribute('aria-hidden', 'false');
      return option as HTMLElement;
    });
    await userEvent.click(sogndal);
    await waitFor(() => {
      expect(input).toHaveValue('Sogndal');
    });

    // Clear the selection via the clear control - found by its accessible
    // name, whatever element Digdir renders it as.
    const clearButton = await canvas.findByRole('button', {
      name: 'Tøm'
    });
    await userEvent.click(clearButton);

    // The input is emptied and refocused immediately...
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
    expect(input).toHaveFocus();

    // ...while the deselection itself is committed when the field is left
    // (u-combobox dispatches the change on blur/Enter, not per keystroke)
    await userEvent.tab();
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith(null);
      expect(input).toHaveValue('');
    });
  }
}`,...(Le=(He=O.parameters)==null?void 0:He.docs)==null?void 0:Le.source},description:{story:`Tests the clear button: after a selection it empties the input,
deselects the item (callback receives null), and refocuses the input.`,...(Be=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:Be.description}}};var Re,Me,_e,qe,De;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Test: Multi-Select Interaction',
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem[]>([]);
    return <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion {...args} selected={selected as any} onSelectedChange={((items: unknown) => {
        (args.onSelectedChange as any)?.(items);
        if (Array.isArray(items)) {
          setSelected(items as StorySuggestionItem[]);
        }
      }) as any} name="test-multi-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>;
  },
  args: {
    multiple: true,
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByRole('combobox', {
      name: 'Velg destinasjoner'
    }));
    const clickOption = async (label: string) => {
      await userEvent.click(input);
      const option = await waitFor(() => {
        const el = Array.from(canvasElement.querySelectorAll('u-option:not([data-empty])')).find(o => o.textContent === label);
        expect(el).toHaveAttribute('aria-hidden', 'false');
        return el as HTMLElement;
      });
      await userEvent.click(option);
    };
    await clickOption('Oslo');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }]);
    });
    await clickOption('Bergen');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }, {
        label: 'Bergen',
        value: 'bergen'
      }]);
    });

    // Selected items are rendered as <data value> elements (the chips); the
    // values, not any state attribute, are the contract.
    await waitFor(() => {
      const values = Array.from(canvasElement.querySelectorAll('data[value]')).map(el => el.getAttribute('value'));
      expect(values).toEqual(['oslo', 'bergen']);
    });
  }
}`,...(_e=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:_e.source},description:{story:`Tests multi-select: each chosen option is added to the selection,
the callback receives the accumulated array, and selected items are
rendered as removable chips.`,...(De=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:De.description}}};const ze=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter","TestComboboxAria","TestFilterOnTyping","TestKeyboardSelection","TestMouseSelection","TestEscapeClosesList","TestEmptyState","TestClearSelection","TestMultiSelect"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AsyncLoading:R,Creatable:B,Default:L,MultiSelect:V,NoFilter:M,TestClearSelection:O,TestComboboxAria:E,TestEmptyState:F,TestEscapeClosesList:j,TestFilterOnTyping:I,TestKeyboardSelection:T,TestMouseSelection:k,TestMultiSelect:H,__namedExportsOrder:ze,default:Ue},Symbol.toStringTag,{value:"Module"}));export{R as A,B as C,V as M,M as N,Ze as S,a};
