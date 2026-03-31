import{r as i,j as e}from"./iframe-BOOWQYM0.js";import{a4 as B,i as U}from"./tooltip-jKJDwqdV.js";import{F as v}from"./index-BilXmDbV.js";import{S as H}from"./index-BdJ93vuM.js";const t=B;t.displayName="Suggestion";try{t.displayName="Suggestion",t.__docgenInfo={description:`Suggestion-komponent for autofullfør/søkeforslag.
Merk: Dette er en eksperimentell komponent fra DigDir.`,displayName:"Suggestion",props:{filter:{defaultValue:{value:"true"},description:`Filter options; boolean or a custom callback.

See {@link Filter} for the callback signature.`,name:"filter",required:!1,type:{name:"boolean | Filter"}},creatable:{defaultValue:{value:"false"},description:"Allows the user to create new items",name:"creatable",required:!1,type:{name:"boolean"}},onBeforeMatch:{defaultValue:null,description:"Callback when matching input value against options",name:"onBeforeMatch",required:!1,type:{name:"(event: EventBeforeMatch) => void"}},name:{defaultValue:{value:"undefined"},description:"The name of the associated form control",name:"name",required:!1,type:{name:"string"}},renderSelected:{defaultValue:{value:"({ label }) => label"},description:"Change how the selected options are rendered inside the `Chip`.",name:"renderSelected",required:!1,type:{name:"(args: { label: string; value: string; }) => ReactNode"}},multiple:{defaultValue:{value:"false"},description:"Allows the user to select multiple items",name:"multiple",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"The selected item of the Suggestion.\n\nIf `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `SuggestionItem`.\n\nUsing this makes the component controlled and it must be used in combination with `onSelectedChange`.",name:"selected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},defaultSelected:{defaultValue:null,description:"Default selected item when uncontrolled",name:"defaultSelected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},onSelectedChange:{defaultValue:null,description:"Callback when selected items changes",name:"onSelectedChange",required:!1,type:{name:"((value: SuggestionItem) => void) | ((value: SuggestionItem[]) => void)"}}}}}catch{}const d=i.forwardRef((a,l)=>e.jsx(U,{ref:l,...a}));d.displayName="Label";try{d.displayName="Label",d.__docgenInfo={description:"",displayName:"Label",props:{weight:{defaultValue:{value:"'medium'"},description:"Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const P=(a,l)=>{const s=i.useRef(null);return i.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),i.useCallback((...u)=>{s.current&&clearTimeout(s.current),s.current=window.setTimeout(()=>{a(...u)},l)},[a,l])},$={title:"Components/Suggestion",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}},a11y:{test:"todo"}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},b=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],m={render:a=>{const[l,s]=i.useState(void 0);return e.jsxs(v,{children:[e.jsx(d,{children:"Velg en destinasjon"}),e.jsxs(t,{...a,selected:l,onSelectedChange:(n=>{Array.isArray(n)||s(n)}),name:"single-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Ingen treff"}),b.map(n=>e.jsx(t.Option,{label:n.label,value:n.value,children:n.label},n.value))]})]})]})},args:{multiple:!1,creatable:!1}},S={render:a=>{const[l,s]=i.useState([b[1]]);return e.jsxs(v,{children:[e.jsx(d,{children:"Velg destinasjoner"}),e.jsxs(t,{...a,selected:l,onSelectedChange:(n=>{Array.isArray(n)&&s(n)}),name:"multi-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Ingen treff"}),b.map(n=>e.jsx(t.Option,{label:n.label,value:n.value,children:n.label},n.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},f={render:a=>{const[l,s]=i.useState(b),[n,u]=i.useState([]),x=r=>{const I=r.find(p=>p.__new__);if(I){const p={label:I.label,value:I.value};s(C=>[...C,p])}u(r)};return e.jsxs(v,{children:[e.jsx(d,{children:"Velg eller lag destinasjoner"}),e.jsxs(t,{...a,selected:n,onSelectedChange:(r=>{Array.isArray(r)&&x(r)}),name:"creatable-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),l.map(r=>e.jsx(t.Option,{label:r.label,value:r.value,children:r.label},r.value))]})]})]})},args:{multiple:!0,creatable:!0}},y={render:a=>{const[l,s]=i.useState(""),[n,u]=i.useState(null),[x,r]=i.useState(),p=P(async o=>{const c=`https://restcountries.com/v2/name/${o}?fields=name`;try{const g=await fetch(c);if(!g.ok){u([]);return}const j=await g.json();u(Array.isArray(j)?j.map(({name:X})=>X):[])}catch(g){console.error("Failed to fetch countries:",g),u([])}},500),C=o=>{const c=o.target.value;s(c),u(null);const g=c.trim();g&&p(encodeURIComponent(g))},R=o=>{if(!Array.isArray(o)&&o){const c=o;s(c.label),r(c),u(null)}};return e.jsxs(v,{lang:"en",children:[e.jsx(d,{children:"Search for countries (in english)"}),e.jsxs(t,{...a,selected:x,onSelectedChange:R,children:[e.jsx(t.Input,{onInput:C,value:l}),e.jsx(t.Clear,{}),e.jsxs(t.List,{singular:"%d country",plural:"%d countries",children:[l?e.jsx(t.Empty,{children:n?"Ingen treff":e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(H,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,n==null?void 0:n.map(o=>e.jsx(t.Option,{label:o,value:o,children:o},o))]})]})]})},args:{filter:!1},name:"Async Loading"},h={render:a=>{const[l,s]=i.useState(void 0);return e.jsxs(v,{children:[e.jsx(d,{children:"Velg en destinasjon (viser alltid alle)"}),e.jsxs(t,{...a,selected:l,onSelectedChange:(n=>{Array.isArray(n)||s(n)}),name:"no-filter-destination",children:[e.jsx(t.Input,{}),e.jsx(t.Clear,{}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"Listen er tom"}),b.map(n=>e.jsx(t.Option,{label:n.label,value:n.value,children:n.label},n.value))]})]})]})},args:{filter:!1},name:"No Filter"};var w,F,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(F=m.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var A,L,O;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(L=S.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var V,_,E;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(_=f.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var q,M,N;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(M=y.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var T,D,z;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(D=h.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const W=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter"],Y=Object.freeze(Object.defineProperty({__proto__:null,AsyncLoading:y,Creatable:f,Default:m,MultiSelect:S,NoFilter:h,__namedExportsOrder:W,default:$},Symbol.toStringTag,{value:"Module"}));export{y as A,f as C,S as M,h as N,Y as S,t as a};
