import{r as i,j as e}from"./iframe-Dv40QWHu.js";import{U}from"./tooltip-jy6F9jbP.js";import{F as b}from"./index-CMhx53_F.js";import{L as v}from"./index-DNdl3Tfb.js";import{S as H}from"./index-DEMBf8Bi.js";const t=U;t.displayName="Suggestion";try{t.displayName="Suggestion",t.__docgenInfo={description:`Suggestion-komponent for autofullfør/søkeforslag.
Merk: Dette er en eksperimentell komponent fra DigDir.`,displayName:"Suggestion",props:{filter:{defaultValue:{value:"true"},description:`Filter options; boolean or a custom callback.

See {@link Filter} for the callback signature.`,name:"filter",required:!1,type:{name:"boolean | Filter"}},creatable:{defaultValue:{value:"false"},description:"Allows the user to create new items",name:"creatable",required:!1,type:{name:"boolean"}},onBeforeMatch:{defaultValue:null,description:"Callback when matching input value against options",name:"onBeforeMatch",required:!1,type:{name:"(event: EventBeforeMatch) => void"}},name:{defaultValue:{value:"undefined"},description:"The name of the associated form control",name:"name",required:!1,type:{name:"string"}},renderSelected:{defaultValue:{value:"({ label }) => label"},description:"Change how the selected options are rendered inside the `Chip`.",name:"renderSelected",required:!1,type:{name:"(args: { label: string; value: string; }) => ReactNode"}},multiple:{defaultValue:{value:"false"},description:"Allows the user to select multiple items",name:"multiple",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"The selected item of the Suggestion.\n\nIf `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `SuggestionItem`.\n\nUsing this makes the component controlled and it must be used in combination with `onSelectedChange`.",name:"selected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},defaultSelected:{defaultValue:null,description:"Default selected item when uncontrolled",name:"defaultSelected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},onSelectedChange:{defaultValue:null,description:"Callback when selected items changes",name:"onSelectedChange",required:!1,type:{name:"((value: SuggestionItem) => void) | ((value: SuggestionItem[]) => void)"}}}}}catch{}const P=(s,l)=>{const a=i.useRef(null);return i.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),i.useCallback((...u)=>{a.current&&clearTimeout(a.current),a.current=window.setTimeout(()=>{s(...u)},l)},[s,l])},z={title:"Components/Suggestion",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}},a11y:{test:"todo"}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},h=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],p={render:s=>{const[l,a]=i.useState(void 0);return e.jsxs(b,{children:[e.jsx(v,{children:"Velg en destinasjon"}),e.jsxs(t,{...s,selected:l,onSelectedChange:(n=>{Array.isArray(n)||a(n)}),name:"single-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Ingen treff"}),h.map(n=>e.jsx(t.Option,{label:n.label,value:n.value,children:n.label},n.value))]})]})]})},args:{multiple:!1,creatable:!1}},m={render:s=>{const[l,a]=i.useState([h[1]]);return e.jsxs(b,{children:[e.jsx(v,{children:"Velg destinasjoner"}),e.jsxs(t,{...s,selected:l,onSelectedChange:(n=>{Array.isArray(n)&&a(n)}),name:"multi-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Ingen treff"}),h.map(n=>e.jsx(t.Option,{label:n.label,value:n.value,children:n.label},n.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},S={render:s=>{const[l,a]=i.useState(h),[n,u]=i.useState([]),x=o=>{const I=o.find(g=>g.__new__);if(I){const g={label:I.label,value:I.value};a(C=>[...C,g])}u(o)};return e.jsxs(b,{children:[e.jsx(v,{children:"Velg eller lag destinasjoner"}),e.jsxs(t,{...s,selected:n,onSelectedChange:(o=>{Array.isArray(o)&&x(o)}),name:"creatable-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),l.map(o=>e.jsx(t.Option,{label:o.label,value:o.value,children:o.label},o.value))]})]})]})},args:{multiple:!0,creatable:!0}},f={render:s=>{const[l,a]=i.useState(""),[n,u]=i.useState(null),[x,o]=i.useState(),g=P(async r=>{const c=`https://restcountries.com/v2/name/${r}?fields=name`;try{const d=await fetch(c);if(!d.ok){u([]);return}const j=await d.json();u(Array.isArray(j)?j.map(({name:B})=>B):[])}catch(d){console.error("Failed to fetch countries:",d),u([])}},500),C=r=>{const c=r.target.value;a(c),u(null);const d=c.trim();d&&g(encodeURIComponent(d))},R=r=>{if(!Array.isArray(r)&&r){const c=r;a(c.label),o(c),u(null)}};return e.jsxs(b,{lang:"en",children:[e.jsx(v,{children:"Search for countries (in english)"}),e.jsxs(t,{...s,selected:x,onSelectedChange:R,children:[e.jsx(t.Input,{onInput:C,value:l}),e.jsx(t.Clear,{}),e.jsxs(t.List,{singular:"%d country",plural:"%d countries",children:[l?e.jsx(t.Empty,{children:n?"Ingen treff":e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(H,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,n==null?void 0:n.map(r=>e.jsx(t.Option,{label:r,value:r,children:r},r))]})]})]})},args:{filter:!1},name:"Async Loading"},y={render:s=>{const[l,a]=i.useState(void 0);return e.jsxs(b,{children:[e.jsx(v,{children:"Velg en destinasjon (viser alltid alle)"}),e.jsxs(t,{...s,selected:l,onSelectedChange:(n=>{Array.isArray(n)||a(n)}),name:"no-filter-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Listen er tom"}),h.map(n=>e.jsx(t.Option,{label:n.label,value:n.value,children:n.label},n.value))]})]})]})},args:{filter:!1},name:"No Filter"};var w,F,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var A,L,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem[]>([defaultOptions[1] // Pre-select 'Oslo'
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
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var V,E,_;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(E=S.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var M,T,N;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
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
}`,...(N=(T=f.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var q,D,X;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(D=y.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};const $=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter"],Y=Object.freeze(Object.defineProperty({__proto__:null,AsyncLoading:f,Creatable:S,Default:p,MultiSelect:m,NoFilter:y,__namedExportsOrder:$,default:z},Symbol.toStringTag,{value:"Module"}));export{f as A,S as C,m as M,y as N,Y as S,t as a};
