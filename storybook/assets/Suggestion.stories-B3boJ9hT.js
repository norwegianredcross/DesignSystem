import{r as p,j as t}from"./iframe-Cr0d-POo.js";import{K as Xe}from"./tooltip-DrR4BEE7.js";import{F as w}from"./index-ZflDukOO.js";import{L as x}from"./index-CWSEySOX.js";import{S as Ke}from"./index-B9QOepfP.js";const n=Xe;n.displayName="Suggestion";const{expect:o,within:y,userEvent:u,waitFor:c,fn:h}=__STORYBOOK_MODULE_TEST__,Pe=(a,r)=>{const s=p.useRef(null);return p.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),p.useCallback((...i)=>{s.current&&clearTimeout(s.current),s.current=window.setTimeout(()=>{a(...i)},r)},[a,r])},Ue={title:"Components/Suggestion",component:n,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}},a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1},{id:"aria-required-parent",enabled:!1},{id:"aria-valid-attr-value",enabled:!1}]}}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},S=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],O={render:a=>{const[r,s]=p.useState(void 0);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg en destinasjon"}),t.jsxs(n,{...a,selected:r,onSelectedChange:(e=>{Array.isArray(e)||s(e)}),name:"single-destination",children:[t.jsx(n.Input,{}),t.jsx(n.Clear,{}),t.jsxs(n.List,{children:[t.jsx(n.Empty,{children:"Ingen treff"}),S.map(e=>t.jsx(n.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!1,creatable:!1}},V={render:a=>{const[r,s]=p.useState([S[1]]);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg destinasjoner"}),t.jsxs(n,{...a,selected:r,onSelectedChange:(e=>{Array.isArray(e)&&s(e)}),name:"multi-destination",children:[t.jsx(n.Input,{}),t.jsx(n.Clear,{}),t.jsxs(n.List,{children:[t.jsx(n.Empty,{children:"Ingen treff"}),S.map(e=>t.jsx(n.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},B={render:a=>{const[r,s]=p.useState(S),[e,i]=p.useState([]),d=l=>{const m=l.find(b=>b.__new__);if(m){const b={label:m.label,value:m.value};s(_=>[..._,b])}i(l)};return t.jsxs(w,{children:[t.jsx(x,{children:"Velg eller lag destinasjoner"}),t.jsxs(n,{...a,selected:e,onSelectedChange:(l=>{Array.isArray(l)&&d(l)}),name:"creatable-destination",children:[t.jsx(n.Input,{}),t.jsx(n.Clear,{}),t.jsxs(n.List,{children:[t.jsx(n.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),r.map(l=>t.jsx(n.Option,{label:l.label,value:l.value,children:l.label},l.value))]})]})]})},args:{multiple:!0,creatable:!0}},M={render:a=>{const[r,s]=p.useState(""),[e,i]=p.useState(null),[d,l]=p.useState(),b=Pe(async g=>{const v=`https://restcountries.com/v2/name/${g}?fields=name`;try{const f=await fetch(v);if(!f.ok){i([]);return}const R=await f.json();i(Array.isArray(R)?R.map(({name:Ne})=>Ne):[])}catch(f){console.error("Failed to fetch countries:",f),i([])}},500),_=g=>{const v=g.currentTarget.value;s(v),i(null);const f=v.trim();f&&b(encodeURIComponent(f))},We=g=>{if(!Array.isArray(g)&&g){const v=g;s(v.label),l(v),i(null)}};return t.jsxs(w,{lang:"en",children:[t.jsx(x,{children:"Search for countries (in english)"}),t.jsxs(n,{...a,selected:d,onSelectedChange:We,children:[t.jsx(n.Input,{onInput:_,value:r}),t.jsx(n.Clear,{}),t.jsxs(n.List,{singular:"%d country",plural:"%d countries",children:[r?t.jsx(n.Empty,{children:e?"Ingen treff":t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ke,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,e==null?void 0:e.map(g=>t.jsx(n.Option,{label:g,value:g,children:g},g))]})]})]})},args:{filter:!1},name:"Async Loading"},q={render:a=>{const[r,s]=p.useState(void 0);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg en destinasjon (viser alltid alle)"}),t.jsxs(n,{...a,selected:r,onSelectedChange:(e=>{Array.isArray(e)||s(e)}),name:"no-filter-destination",children:[t.jsx(n.Input,{}),t.jsx(n.Clear,{}),t.jsxs(n.List,{children:[t.jsx(n.Empty,{children:"Listen er tom"}),S.map(e=>t.jsx(n.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{filter:!1},name:"No Filter"},C=a=>{const[r,s]=p.useState(void 0);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg en destinasjon"}),t.jsxs(n,{...a,selected:r,onSelectedChange:(e=>{var i;(i=a.onSelectedChange)==null||i.call(a,e),Array.isArray(e)||s(e??void 0)}),name:"test-destination",children:[t.jsx(n.Input,{}),t.jsx(n.Clear,{}),t.jsxs(n.List,{children:[t.jsx(n.Empty,{children:"Ingen treff"}),S.map(e=>t.jsx(n.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},A=async a=>await c(()=>a.getByLabelText("Velg en destinasjon")),E={name:"Test: Combobox Aria Attributes",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a})=>{const r=y(a),s=await A(r),e=a.querySelector("u-datalist");await c(()=>{o(s).toHaveAttribute("role","combobox"),o(s).toHaveAttribute("aria-autocomplete","list"),o(e).toHaveAttribute("id"),o(s).toHaveAttribute("aria-controls",e==null?void 0:e.id)}),o(e).toHaveAttribute("role","listbox"),await u.click(s),await c(()=>{o(e).not.toHaveAttribute("hidden")}),o(s).toHaveAttribute("aria-expanded","true")}},T={name:"Test: Typing Filters Options",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a})=>{const r=y(a),s=await A(r);await u.click(s);const e=Array.from(a.querySelectorAll("u-option:not([data-empty])"));o(e).toHaveLength(S.length),await c(()=>{for(const i of e)o(i).toHaveAttribute("aria-hidden","false")}),await u.type(s,"berg"),await c(()=>{const i=e.find(l=>l.textContent==="Bergen"),d=e.find(l=>l.textContent==="Oslo");o(i).toHaveAttribute("aria-hidden","false"),o(i).not.toHaveAttribute("disabled"),o(d).toHaveAttribute("aria-hidden","true"),o(d).toHaveAttribute("disabled")})}},k={name:"Test: Keyboard Selection",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a,args:r})=>{const s=y(a),e=await A(s);await u.click(e),await u.type(e,"osl"),await u.keyboard("{ArrowDown}"),await c(()=>{const i=a.ownerDocument.activeElement;o(i==null?void 0:i.textContent).toBe("Oslo"),o(i).toHaveAttribute("role","option")}),await u.keyboard("{Enter}"),await c(()=>{o(r.onSelectedChange).toHaveBeenLastCalledWith({label:"Oslo",value:"oslo"}),o(e).toHaveValue("Oslo")})}},H={name:"Test: Mouse Selection",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a,args:r})=>{const s=y(a),e=await A(s),i=a.querySelector("u-datalist");await u.click(e),await u.type(e,"trond");const d=await c(()=>{const l=Array.from(a.querySelectorAll("u-option:not([data-empty])")).find(m=>m.textContent==="Trondheim");return o(l).toHaveAttribute("aria-hidden","false"),l});await u.click(d),await c(()=>{o(r.onSelectedChange).toHaveBeenLastCalledWith({label:"Trondheim",value:"trondheim"}),o(e).toHaveValue("Trondheim"),o(i).toHaveAttribute("hidden")})}},I={name:"Test: Escape Closes List",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a,args:r})=>{const s=y(a),e=await A(s),i=a.querySelector("u-datalist");await u.click(e),await c(()=>{o(i).not.toHaveAttribute("hidden")}),await u.keyboard("{Escape}"),await c(()=>{o(i).toHaveAttribute("hidden")}),o(r.onSelectedChange).not.toHaveBeenCalled(),o(e).toHaveValue("")}},j={name:"Test: Empty State",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a})=>{const r=y(a),s=await A(r);await u.click(s),await u.type(s,"finnes-ikke");const e=await c(()=>r.getByText("Ingen treff"));o(e).toBeVisible(),await c(()=>{for(const i of a.querySelectorAll("u-option:not([data-empty])"))o(i).toHaveAttribute("aria-hidden","true")})}},F={name:"Test: Clear Selection",render:C,args:{onSelectedChange:h()},play:async({canvasElement:a,args:r})=>{const s=y(a),e=await A(s);await u.click(e),await u.type(e,"sogn");const i=await c(()=>{const l=Array.from(a.querySelectorAll("u-option:not([data-empty])")).find(m=>m.textContent==="Sogndal");return o(l).toHaveAttribute("aria-hidden","false"),l});await u.click(i),await c(()=>{o(e).toHaveValue("Sogndal")});const d=await c(()=>{const l=a.querySelector('del[aria-label="Tøm"]');return o(l).toBeTruthy(),l});await u.click(d),await c(()=>{o(e).toHaveValue("")}),o(e).toHaveFocus(),await u.tab(),await c(()=>{o(r.onSelectedChange).toHaveBeenLastCalledWith(null),o(e).toHaveValue("")})}},L={name:"Test: Multi-Select Interaction",render:a=>{const[r,s]=p.useState([]);return t.jsxs(w,{children:[t.jsx(x,{children:"Velg destinasjoner"}),t.jsxs(n,{...a,selected:r,onSelectedChange:(e=>{var i;(i=a.onSelectedChange)==null||i.call(a,e),Array.isArray(e)&&s(e)}),name:"test-multi-destination",children:[t.jsx(n.Input,{}),t.jsx(n.Clear,{}),t.jsxs(n.List,{children:[t.jsx(n.Empty,{children:"Ingen treff"}),S.map(e=>t.jsx(n.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!0,onSelectedChange:h()},play:async({canvasElement:a,args:r})=>{const s=y(a),e=await c(()=>s.getByLabelText("Velg destinasjoner")),i=async d=>{await u.click(e);const l=await c(()=>{const m=Array.from(a.querySelectorAll("u-option:not([data-empty])")).find(b=>b.textContent===d);return o(m).toHaveAttribute("aria-hidden","false"),m});await u.click(l)};await i("Oslo"),await c(()=>{o(r.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"}])}),await i("Bergen"),await c(()=>{o(r.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"}])}),await c(()=>{const d=a.querySelectorAll('data[aria-selected="true"]');o(d).toHaveLength(2)})}};var D,W,N;O.parameters={...O.parameters,docs:{...(D=O.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(W=O.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var X,K,P;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(z=B.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var Y,G,J;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(G=M.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;q.parameters={...q.parameters,docs:{...(Q=q.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne,se,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Test: Combobox Aria Attributes',
  render: SingleSelectTestRender,
  args: {
    onSelectedChange: fn() as any
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await findSuggestionInput(canvas);
    const list = canvasElement.querySelector('u-datalist');

    // The u-combobox/u-datalist elements upgrade the plain input to a combobox
    await waitFor(() => {
      expect(input).toHaveAttribute('role', 'combobox');
      expect(input).toHaveAttribute('aria-autocomplete', 'list');
      expect(list).toHaveAttribute('id');
      expect(input).toHaveAttribute('aria-controls', list?.id);
    });
    expect(list).toHaveAttribute('role', 'listbox');

    // Focusing the input opens the suggestion list
    await userEvent.click(input);
    await waitFor(() => {
      expect(list).not.toHaveAttribute('hidden');
    });
    expect(input).toHaveAttribute('aria-expanded', 'true');
  }
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:`Tests combobox ARIA wiring on the input: role, aria-autocomplete,
aria-controls pointing at the listbox, and expanded state on focus.`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};var ie,re,le,ce,ue;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=T.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"Tests that typing filters the option list to matching entries.",...(ue=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ue.description}}};var de,pe,ge,me,Se;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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

    // ArrowDown moves focus to the first visible option
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      const focused = canvasElement.ownerDocument.activeElement;
      expect(focused?.textContent).toBe('Oslo');
      expect(focused).toHaveAttribute('role', 'option');
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
}`,...(ge=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:`Tests full keyboard flow: type to filter, ArrowDown to move focus into the
list, Enter to select. Selection fills the input and fires the callback.`,...(Se=(me=k.parameters)==null?void 0:me.docs)==null?void 0:Se.description}}};var ye,he,be,ve,fe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(he=H.parameters)==null?void 0:he.docs)==null?void 0:be.source},description:{story:`Tests selection with the mouse: clicking an option fills the input,
fires the callback, and closes the list.`,...(fe=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var we,xe,Ce,Ae,Ee;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ce=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source},description:{story:"Tests that Escape closes the suggestion list without selecting anything.",...(Ee=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.description}}};var Te,ke,He,Ie,je;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(He=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:He.source},description:{story:"Negative test: input with no matches shows the empty state option.",...(je=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:je.description}}};var Fe,Le,Oe,Ve,Be;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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

    // Clear the selection via the clear button
    const clearButton = await waitFor(() => {
      const el = canvasElement.querySelector<HTMLElement>('del[aria-label="Tøm"]');
      expect(el).toBeTruthy();
      return el as HTMLElement;
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
}`,...(Oe=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source},description:{story:`Tests the clear button: after a selection it empties the input,
deselects the item (callback receives null), and refocuses the input.`,...(Be=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:Be.description}}};var Me,qe,_e,Re,De;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
    const input = await waitFor(() => canvas.getByLabelText('Velg destinasjoner'));
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

    // Selected items are rendered as chips (data elements marked selected)
    await waitFor(() => {
      const chips = canvasElement.querySelectorAll('data[aria-selected="true"]');
      expect(chips).toHaveLength(2);
    });
  }
}`,...(_e=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:_e.source},description:{story:`Tests multi-select: each chosen option is added to the selection,
the callback receives the accumulated array, and selected items are
rendered as removable chips.`,...(De=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:De.description}}};const ze=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter","TestComboboxAria","TestFilterOnTyping","TestKeyboardSelection","TestMouseSelection","TestEscapeClosesList","TestEmptyState","TestClearSelection","TestMultiSelect"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AsyncLoading:M,Creatable:B,Default:O,MultiSelect:V,NoFilter:q,TestClearSelection:F,TestComboboxAria:E,TestEmptyState:j,TestEscapeClosesList:I,TestFilterOnTyping:T,TestKeyboardSelection:k,TestMouseSelection:H,TestMultiSelect:L,__namedExportsOrder:ze,default:Ue},Symbol.toStringTag,{value:"Module"}));export{M as A,B as C,V as M,q as N,Ze as S,n as a};
