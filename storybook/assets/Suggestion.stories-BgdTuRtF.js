import{r as g,j as s}from"./iframe-ChmhbHcN.js";import{X as x}from"./tooltip-Dtx4fO_9.js";import{F as E}from"./index-aM8t6nlI.js";import{L as T}from"./index-C6SNf_9w.js";import{S as at}from"./index-DtGaZtS8.js";function st(t){const a=t.ownerDocument.defaultView;let n;const e=()=>{const u=t.getAttribute("data-multiple");return u!==null&&u!=="false"},o=u=>{if(!a||!e()||!(u instanceof a.InputEvent)||u.isTrusted||u.isComposing||u.inputType!==""||u.data===null)return;const p=t.querySelector("input");if(!p||p.parentElement!==t||u.target!==p)return;const y={input:p,query:p.value,value:u.data};n=y,queueMicrotask(()=>{n===y&&(n=void 0)})},c=u=>{if(!a||!n||!e()||u.target!==t||!(u instanceof a.CustomEvent))return;const p=n;n=void 0;const y=u.detail;!(y instanceof a.HTMLDataElement)||y.value!==p.value||t.querySelector("input")!==p.input||p.input.parentElement!==t||p.input.value!==p.value||p.input.value!==p.query&&(p.input.value=p.query)};return t.addEventListener("beforeinput",o,!0),t.addEventListener("comboboxbeforeselect",c,!0),()=>{n=void 0,t.removeEventListener("beforeinput",o,!0),t.removeEventListener("comboboxbeforeselect",c,!0)}}const ot=g.forwardRef(function(a,n){const e=g.useCallback(o=>{const c=o?st(o):void 0,u=typeof n=="function"?n(o):void 0;return n&&typeof n!="function"&&(n.current=o),()=>{c==null||c(),typeof u=="function"?u():typeof n=="function"?n(null):n&&(n.current=null)}},[n]);return s.jsx(x,{...a,ref:e})}),l=Object.assign(ot,{Input:x.Input,List:x.List,Option:x.Option,Empty:x.Empty,Clear:x.Clear,Toggle:x.Toggle});l.displayName="Suggestion";const{expect:i,within:S,userEvent:r,waitFor:d,fn:b}=__STORYBOOK_MODULE_TEST__,it=(t,a)=>{const n=g.useRef(null);return g.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]),g.useCallback((...o)=>{n.current&&clearTimeout(n.current),n.current=window.setTimeout(()=>{t(...o)},a)},[t,a])},lt={title:"Components/Suggestion",component:l,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}},a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1},{id:"aria-required-parent",enabled:!1},{id:"aria-valid-attr-value",enabled:!1}]}}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},v=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],R={render:t=>{const[a,n]=g.useState(void 0);return s.jsxs(E,{children:[s.jsx(T,{children:"Velg en destinasjon"}),s.jsxs(l,{...t,selected:a,onSelectedChange:e=>{Array.isArray(e)||n(e)},name:"single-destination",children:[s.jsx(l.Input,{}),s.jsx(l.Clear,{}),s.jsxs(l.List,{children:[s.jsx(l.Empty,{children:"Ingen treff"}),v.map(e=>s.jsx(l.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!1,creatable:!1}},M={render:t=>{const[a,n]=g.useState([v[1]]);return s.jsxs(E,{children:[s.jsx(T,{children:"Velg destinasjoner"}),s.jsxs(l,{...t,selected:a,onSelectedChange:e=>{Array.isArray(e)&&n(e)},name:"multi-destination",children:[s.jsx(l.Input,{}),s.jsx(l.Clear,{}),s.jsxs(l.List,{children:[s.jsx(l.Empty,{children:"Ingen treff"}),v.map(e=>s.jsx(l.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},D={render:t=>{const[a,n]=g.useState(v),[e,o]=g.useState([]),c=u=>{const p=u.find(y=>y.__new__);if(p){const y={label:p.label,value:p.value};n(P=>[...P,y])}o(u)};return s.jsxs(E,{children:[s.jsx(T,{children:"Velg eller lag destinasjoner"}),s.jsxs(l,{...t,selected:e,onSelectedChange:u=>{Array.isArray(u)&&c(u)},name:"creatable-destination",children:[s.jsx(l.Input,{}),s.jsx(l.Clear,{}),s.jsxs(l.List,{children:[s.jsx(l.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),a.map(u=>s.jsx(l.Option,{label:u.label,value:u.value,children:u.label},u.value))]})]})]})},args:{multiple:!0,creatable:!0}},W={render:t=>{const[a,n]=g.useState(""),[e,o]=g.useState(null),[c,u]=g.useState(),y=it(async m=>{const w=`https://restcountries.com/v2/name/${m}?fields=name`;try{const f=await fetch(w);if(!f.ok){o([]);return}const U=await f.json();o(Array.isArray(U)?U.map(({name:nt})=>nt):[])}catch(f){console.error("Failed to fetch countries:",f),o([])}},500),P=m=>{const w=m.currentTarget.value;n(w),o(null);const f=w.trim();f&&y(encodeURIComponent(f))},tt=m=>{if(!Array.isArray(m)&&m){const w=m;n(w.label),u(w),o(null)}};return s.jsxs(E,{lang:"en",children:[s.jsx(T,{children:"Search for countries (in english)"}),s.jsxs(l,{...t,selected:c,onSelectedChange:tt,children:[s.jsx(l.Input,{onInput:P,value:a}),s.jsx(l.Clear,{}),s.jsxs(l.List,{singular:"%d country",plural:"%d countries",children:[a?s.jsx(l.Empty,{children:e?"Ingen treff":s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx(at,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,e==null?void 0:e.map(m=>s.jsx(l.Option,{label:m,value:m,children:m},m))]})]})]})},args:{filter:!1},name:"Async Loading"},_={render:t=>{const[a,n]=g.useState(void 0);return s.jsxs(E,{children:[s.jsx(T,{children:"Velg en destinasjon (viser alltid alle)"}),s.jsxs(l,{...t,selected:a,onSelectedChange:e=>{Array.isArray(e)||n(e)},name:"no-filter-destination",children:[s.jsx(l.Input,{}),s.jsx(l.Clear,{}),s.jsxs(l.List,{children:[s.jsx(l.Empty,{children:"Listen er tom"}),v.map(e=>s.jsx(l.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})},args:{filter:!1},name:"No Filter"},K="Fjern valgt destinasjon",et=({label:t,value:a})=>s.jsx("span",{"data-testid":"selected-destination","data-value":a,children:t}),k=t=>{const[a,n]=g.useState(null);return s.jsx("form",{onSubmit:e=>e.preventDefault(),children:s.jsxs(E,{children:[s.jsx(T,{children:"Velg en destinasjon"}),s.jsxs(l,{...t,selected:a,renderSelected:et,"data-sr-clear":K,onSelectedChange:e=>{var o;(o=t.onSelectedChange)==null||o.call(t,e),Array.isArray(e)||n(e)},name:"test-destination",children:[s.jsx(l.Input,{}),s.jsx(l.Clear,{"aria-label":K}),s.jsxs(l.List,{children:[s.jsx(l.Empty,{children:"Ingen treff"}),v.map(e=>s.jsx(l.Option,{label:e.label,value:e.value,children:e.label},e.value))]})]})]})})},X=({controlled:t=!0,...a})=>{const[n,e]=g.useState([]);return s.jsx("form",{onSubmit:o=>o.preventDefault(),children:s.jsxs(E,{children:[s.jsx(T,{children:"Velg destinasjoner"}),s.jsxs(l,{...a,multiple:!0,defaultSelected:void 0,selected:t?n:void 0,renderSelected:et,"data-sr-clear":K,onSelectedChange:o=>{var c;(c=a.onSelectedChange)==null||c.call(a,o),t&&e(o)},name:"test-multi-destination",children:[s.jsx(l.Input,{}),s.jsx(l.Clear,{"aria-label":K}),s.jsxs(l.List,{children:[s.jsx(l.Empty,{children:"Ingen treff"}),v.map(o=>s.jsx(l.Option,{label:o.label,value:o.value,children:o.label},o.value))]})]})]})})},C=async(t,a)=>await d(()=>{const n=S(t).getByRole("option",{name:a});return i(n).toBeVisible(),i(n).not.toHaveAttribute("aria-disabled","true"),n}),h=(t,a,n)=>{const e=S(t).queryAllByTestId("selected-destination").map(c=>c.getAttribute("data-value"));i(e).toEqual(n);const o=t.querySelector("form");i(o).not.toBeNull(),i(new FormData(o).getAll(a)).toEqual(n)},B=async t=>await d(()=>t.getByRole("combobox",{name:"Velg en destinasjon"})),I={name:"Test: Combobox Aria Attributes",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t})=>{const a=S(t),n=await B(a),e=await a.findByRole("listbox",{hidden:!0}),o=r;await o.click(n),await o.keyboard("{ArrowDown}"),await d(()=>{i(n).toHaveAttribute("aria-controls",e.id),i(n).toHaveAttribute("aria-expanded","true"),i(e).toBeVisible()},{timeout:4e3})}},O={name:"Test: Typing Filters Options",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t})=>{const a=S(t),n=await B(a);await r.click(n),await d(()=>{i(a.getAllByRole("option")).toHaveLength(v.length);for(const{label:e}of v)i(a.getByRole("option",{name:e})).toBeVisible()}),await r.type(n,"berg"),await d(()=>{i(a.getAllByRole("option")).toHaveLength(1),i(a.getByRole("option",{name:"Bergen"})).toBeVisible(),i(a.queryByRole("option",{name:"Oslo"})).not.toBeInTheDocument()})}},j={name:"Test: Keyboard Selection",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await B(n);await r.click(e),await r.type(e,"osl"),await r.keyboard("{ArrowDown}"),await d(()=>{const o=e.getAttribute("aria-activedescendant");i(o).toBeTruthy();const c=t.ownerDocument.getElementById(o??"");i(c).toHaveAttribute("role","option"),i(c==null?void 0:c.textContent).toBe("Oslo")}),await r.keyboard("{Enter}"),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith({label:"Oslo",value:"oslo"}),i(e).toHaveValue("Oslo")})}},A={name:"Test: Mouse Selection",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await B(n),o=await n.findByRole("listbox",{hidden:!0});await r.click(e),await r.type(e,"trond");const c=await C(t,"Trondheim");await r.click(c),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith({label:"Trondheim",value:"trondheim"}),i(e).toHaveValue("Trondheim"),i(o).not.toBeVisible()})}},V={name:"Test: Escape Closes List",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await B(n),o=await n.findByRole("listbox",{hidden:!0});await r.click(e),await r.keyboard("{ArrowDown}"),await d(()=>{i(o).toBeVisible()}),await r.keyboard("{Escape}"),await d(()=>{i(o).not.toBeVisible()}),i(a.onSelectedChange).not.toHaveBeenCalled(),i(e).toHaveValue("")}},L={name:"Test: Empty State",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t})=>{const a=S(t),n=await B(a);await r.click(n),await r.type(n,"finnes-ikke");const e=await d(()=>a.getByText("Ingen treff"));i(e).toBeVisible(),await d(()=>{for(const{label:o}of v)i(a.queryByRole("option",{name:o})).not.toBeInTheDocument()})}},F={name:"Test: Clear Selection",render:k,args:{onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await B(n);await r.click(e),await r.type(e,"sogn");const o=await C(t,"Sogndal");await r.click(o),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith({label:"Sogndal",value:"sogndal"}),i(e).toHaveValue("Sogndal"),h(t,"test-destination",["sogndal"])});const c=await n.findByRole("button",{name:K});await r.click(c),await d(()=>{i(e).toHaveValue("")}),i(e).toHaveFocus(),await r.tab(),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith(null),i(e).toHaveValue(""),h(t,"test-destination",[])}),await r.click(e),await d(()=>{i(e).toHaveValue(""),h(t,"test-destination",[])})}},H={name:"Test: Multi-Select Interaction",render:t=>s.jsx(X,{...t}),args:{multiple:!0,onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await d(()=>n.getByRole("combobox",{name:"Velg destinasjoner"})),o=async c=>{await r.click(e),await r.click(await C(t,c))};await o("Oslo"),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"}]),i(e).toHaveValue(""),h(t,"test-multi-destination",["oslo"])}),await o("Bergen"),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"}]),i(e).toHaveValue(""),h(t,"test-multi-destination",["oslo","bergen"])})}},q={name:"Test: Multi-Select Preserves Typed Query",render:t=>s.jsx(X,{...t}),args:{multiple:!0,onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await d(()=>n.getByRole("combobox",{name:"Velg destinasjoner"}));await r.click(e),await r.type(e,"o"),await r.click(await C(t,"Oslo")),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"}]),i(e).toHaveValue("o"),h(t,"test-multi-destination",["oslo"])}),await r.click(e),await r.click(await C(t,"Trondheim")),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"},{label:"Trondheim",value:"trondheim"}]),i(e).toHaveValue("o"),h(t,"test-multi-destination",["oslo","trondheim"])})}},N={name:"Test: Uncontrolled Multi-Select Mouse and Keyboard",render:t=>s.jsx(X,{...t,controlled:!1}),args:{multiple:!0,onSelectedChange:b()},play:async({canvasElement:t,args:a})=>{const n=S(t),e=await d(()=>n.getByRole("combobox",{name:"Velg destinasjoner"}));await r.click(e),await r.click(await C(t,"Oslo")),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"}]),i(e).toHaveValue(""),h(t,"test-multi-destination",["oslo"])}),await r.type(e,"berg"),await C(t,"Bergen"),await r.keyboard("{ArrowDown}"),await d(()=>{const o=e.getAttribute("aria-activedescendant");i(o).toBeTruthy();const c=t.ownerDocument.getElementById(o??"");i(c).toHaveAttribute("role","option"),i(c==null?void 0:c.textContent).toBe("Bergen")}),await r.keyboard("{Enter}"),await d(()=>{i(a.onSelectedChange).toHaveBeenLastCalledWith([{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"}]),i(e).toHaveValue("berg"),h(t,"test-multi-destination",["oslo","bergen"])})}},rt=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter","TestComboboxAria","TestFilterOnTyping","TestKeyboardSelection","TestMouseSelection","TestEscapeClosesList","TestEmptyState","TestClearSelection","TestMultiSelect","TestMultiSelectPreservesQuery","TestUncontrolledMultiSelect"];var Q,z,$;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(z=R.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var Y,G,J;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(G=M.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;W.parameters={...W.parameters,docs:{...(ne=W.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,le;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,ce,ue,de,pe;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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

    // Native popover state needs real focus/key events in the browser test.
    // Keep the story playable in Storybook, where Vitest's provider is absent.
    const interactions = import.meta.env.MODE === 'test' ? (await import('@vitest/browser/context')).userEvent : userEvent;
    await interactions.click(input);
    await interactions.keyboard('{ArrowDown}');
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
}`,...(ue=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:`Tests combobox ARIA wiring on the input: role, aria-autocomplete,
aria-controls pointing at the listbox, and expanded state when opened.`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ge,me,Se,ye,ve;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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

    // Check what users can reach, independent of the tags or hiding attributes.
    await waitFor(() => {
      expect(canvas.getAllByRole('option')).toHaveLength(defaultOptions.length);
      for (const {
        label
      } of defaultOptions) {
        expect(canvas.getByRole('option', {
          name: label
        })).toBeVisible();
      }
    });

    // Typing narrows the list down to the single match ("Bergen")
    await userEvent.type(input, 'berg');
    await waitFor(() => {
      expect(canvas.getAllByRole('option')).toHaveLength(1);
      expect(canvas.getByRole('option', {
        name: 'Bergen'
      })).toBeVisible();
      expect(canvas.queryByRole('option', {
        name: 'Oslo'
      })).not.toBeInTheDocument();
    });
  }
}`,...(Se=(me=O.parameters)==null?void 0:me.docs)==null?void 0:Se.source},description:{story:"Tests that typing filters the option list to matching entries.",...(ve=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};var be,he,we,fe,xe;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(he=j.parameters)==null?void 0:he.docs)==null?void 0:we.source},description:{story:`Tests full keyboard flow: type to filter, ArrowDown to move focus into the
list, Enter to select. Selection fills the input and fires the callback.`,...(xe=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:xe.description}}};var Ce,Ee,Te,ke,Be;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
    const list = await canvas.findByRole('listbox', {
      hidden: true
    });
    await userEvent.click(input);
    await userEvent.type(input, 'trond');
    const trondheim = await findVisibleSuggestionOption(canvasElement, 'Trondheim');
    await userEvent.click(trondheim);
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Trondheim',
        value: 'trondheim'
      });
      expect(input).toHaveValue('Trondheim');
      expect(list).not.toBeVisible();
    });
  }
}`,...(Te=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source},description:{story:`Tests selection with the mouse: clicking an option fills the input,
fires the callback, and closes the list.`,...(Be=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Be.description}}};var Ie,Oe,je,Ae,Ve;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
    const list = await canvas.findByRole('listbox', {
      hidden: true
    });
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(list).toBeVisible();
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(list).not.toBeVisible();
    });
    // Known issue #24: aria-expanded stays "true" on desktop even when the
    // list is closed (upstream u-datalist behavior).
    expect(args.onSelectedChange).not.toHaveBeenCalled();
    expect(input).toHaveValue('');
  }
}`,...(je=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:je.source},description:{story:"Tests that Escape closes the suggestion list without selecting anything.",...(Ve=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.description}}};var Le,Fe,He,Re,Me;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
      for (const {
        label
      } of defaultOptions) {
        expect(canvas.queryByRole('option', {
          name: label
        })).not.toBeInTheDocument();
      }
    });
  }
}`,...(He=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:He.source},description:{story:"Negative test: input with no matches shows the empty state option.",...(Me=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Me.description}}};var De,We,_e,qe,Ne;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    const sogndal = await findVisibleSuggestionOption(canvasElement, 'Sogndal');
    await userEvent.click(sogndal);
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith({
        label: 'Sogndal',
        value: 'sogndal'
      });
      expect(input).toHaveValue('Sogndal');
      expectSuggestionSelection(canvasElement, 'test-destination', ['sogndal']);
    });

    // Find the clear control by its accessible name.
    const clearButton = await canvas.findByRole('button', {
      name: clearSelectionLabel
    });
    await userEvent.click(clearButton);

    // The input is emptied and refocused immediately...
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
    expect(input).toHaveFocus();

    // Deselection is committed on blur, not per keystroke.
    await userEvent.tab();
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith(null);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-destination', []);
    });
    await userEvent.click(input);
    await waitFor(() => {
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-destination', []);
    });
  }
}`,...(_e=(We=F.parameters)==null?void 0:We.docs)==null?void 0:_e.source},description:{story:`Tests the clear button: after a selection it empties the input,
deselects the item (callback receives null), and refocuses the input.`,...(Ne=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:Ne.description}}};var Ke,Pe,Xe,Ue,Qe;H.parameters={...H.parameters,docs:{...(Ke=H.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Test: Multi-Select Interaction',
  render: args => <MultiSelectTestRender {...args} />,
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
      await userEvent.click(await findVisibleSuggestionOption(canvasElement, label));
    };
    await clickOption('Oslo');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }]);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo']);
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
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo', 'bergen']);
    });
  }
}`,...(Xe=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Xe.source},description:{story:"Verify accumulated selections, chips, and submitted values.",...(Qe=(Ue=H.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.description}}};var ze,$e,Ye;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Test: Multi-Select Preserves Typed Query',
  render: args => <MultiSelectTestRender {...args} />,
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
    await userEvent.click(input);
    await userEvent.type(input, 'o');
    await userEvent.click(await findVisibleSuggestionOption(canvasElement, 'Oslo'));
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }]);
      expect(input).toHaveValue('o');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo']);
    });

    // Preserve the query, not the chosen option's value; another match stays usable.
    await userEvent.click(input);
    await userEvent.click(await findVisibleSuggestionOption(canvasElement, 'Trondheim'));
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }, {
        label: 'Trondheim',
        value: 'trondheim'
      }]);
      expect(input).toHaveValue('o');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo', 'trondheim']);
    });
  }
}`,...(Ye=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};var Ge,Je,Ze;N.parameters={...N.parameters,docs:{...(Ge=N.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Test: Uncontrolled Multi-Select Mouse and Keyboard',
  render: args => <MultiSelectTestRender {...args} controlled={false} />,
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
    await userEvent.click(input);
    await userEvent.click(await findVisibleSuggestionOption(canvasElement, 'Oslo'));
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }]);
      expect(input).toHaveValue('');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo']);
    });
    await userEvent.type(input, 'berg');
    await findVisibleSuggestionOption(canvasElement, 'Bergen');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      const activeId = input.getAttribute('aria-activedescendant');
      expect(activeId).toBeTruthy();
      const active = canvasElement.ownerDocument.getElementById(activeId ?? '');
      expect(active).toHaveAttribute('role', 'option');
      expect(active?.textContent).toBe('Bergen');
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelectedChange).toHaveBeenLastCalledWith([{
        label: 'Oslo',
        value: 'oslo'
      }, {
        label: 'Bergen',
        value: 'bergen'
      }]);
      expect(input).toHaveValue('berg');
      expectSuggestionSelection(canvasElement, 'test-multi-destination', ['oslo', 'bergen']);
    });
  }
}`,...(Ze=(Je=N.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};const mt=Object.freeze(Object.defineProperty({__proto__:null,AsyncLoading:W,Creatable:D,Default:R,MultiSelect:M,NoFilter:_,TestClearSelection:F,TestComboboxAria:I,TestEmptyState:L,TestEscapeClosesList:V,TestFilterOnTyping:O,TestKeyboardSelection:j,TestMouseSelection:A,TestMultiSelect:H,TestMultiSelectPreservesQuery:q,TestUncontrolledMultiSelect:N,__namedExportsOrder:rt,default:lt},Symbol.toStringTag,{value:"Module"}));export{W as A,D as C,M,_ as N,mt as S,l as a};
