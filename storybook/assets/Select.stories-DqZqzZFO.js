import{j as e}from"./iframe-MYEwgWj1.js";import{k as U,F as p,i,V as C}from"./tooltip-CZ8FOie_.js";const a=U;try{a.displayName="Select",a.__docgenInfo={description:"",displayName:"Select",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},readOnly:{defaultValue:{value:"false"},description:"Defines if the select is readOnly\n@deprecated Use `aria-readonly` instead.",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"full"},description:'Defines the width of Select, where "auto" matches the content width.',name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}}}}}catch{}const{expect:m,within:R,userEvent:v}=__STORYBOOK_MODULE_TEST__,q={title:"Components/Select",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Select (dropdown list) allows users to choose one option from a static list."}}},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},width:{control:"select",options:["auto","full"],description:"Defines the width of Select",defaultValue:"full"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Defines if the select is readOnly",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text"},defaultValue:{control:"text"},name:{control:"text"},required:{control:"boolean"},id:{control:"text"},"aria-labelledby":{control:"text"},children:{control:!1,description:"Must contain Select.Option or Select.OptGroup elements"}}},M=[{value:"",label:"Velg et fjell …"},{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"store_skagastolstind",label:"Store Skagastølstind"},{value:"gaustatoppen",label:"Gaustatoppen"}],K=[{label:"Norske fjell",options:[{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"gaustatoppen",label:"Gaustatoppen"}]},{label:"Utenlandske fjell",options:[{value:"everest",label:"Mount Everest"},{value:"k2",label:"K2"},{value:"kilimanjaro",label:"Kilimanjaro"}]}],n={name:"Example Basic",render:t=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":t["data-size"],children:[e.jsx(i,{children:"Velg et fjell"}),e.jsx(a,{...t,children:M.map(l=>e.jsx(a.Option,{value:l.value,disabled:l.value==="",children:l.label},l.value))})]})}),args:{name:"default-select","data-size":"md",width:"auto"}},r={name:"Example with Error",render:t=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":t["data-size"],children:[e.jsx(i,{children:"Velg et fjell *"}),e.jsx(a,{required:!0,...t,children:M.map(l=>e.jsx(a.Option,{value:l.value,disabled:l.value==="",children:l.label},l.value))}),t["aria-invalid"]&&e.jsx(C,{id:"select-error-message-story",children:"Du må velge et fjell fra listen."})]})}),args:{name:"error-select","data-size":"md","aria-invalid":!0,width:"full"}},o={name:"Example with Grouping (Optgroup)",render:t=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":t["data-size"],children:[e.jsx(i,{children:"Velg et fjell"}),e.jsxs(a,{...t,children:[e.jsx(a.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),K.map(l=>e.jsx(a.Optgroup,{label:l.label,children:l.options.map(s=>e.jsx(a.Option,{value:s.value,children:s.label},s.value))},l.label))]})]})}),args:{name:"grouped-select","data-size":"md",width:"auto",defaultValue:"everest"}},d={name:"Example Disabled",render:t=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":t["data-size"],children:[e.jsx(i,{children:"Utilgjengelig valg"}),e.jsx(a,{...t,children:e.jsx(a.Option,{value:"1",children:"Valgt (Deaktivert)"})})]})}),args:{name:"disabled-select","data-size":"md",disabled:!0,value:"1"}},c={name:"Example ReadOnly",render:t=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":t["data-size"],children:[e.jsx(i,{children:"Kun lesbart valg"}),e.jsx(a,{...t,children:e.jsx(a.Option,{value:"galdhopiggen",children:"Galdhøpiggen"})})]})}),args:{name:"readonly-select","data-size":"md",readOnly:!0,value:"galdhopiggen"}},u={name:"Test: Interaction",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{htmlFor:"test-select",children:"Velg et fjell"}),e.jsxs(a,{id:"test-select",name:"test-select",defaultValue:"",children:[e.jsx(a.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),e.jsx(a.Option,{value:"galdhopiggen",children:"Galdhøpiggen"}),e.jsx(a.Option,{value:"glittertind",children:"Glittertind"})]})]}),play:async({canvasElement:t})=>{const s=R(t).getByRole("combobox",{name:/velg et fjell/i});m(s).toBeInTheDocument(),await v.selectOptions(s,"galdhopiggen"),m(s).toHaveValue("galdhopiggen"),await v.selectOptions(s,"glittertind"),m(s).toHaveValue("glittertind")}},g={name:"Test: Disabled State",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{htmlFor:"test-select-disabled",children:"Utilgjengelig valg"}),e.jsx(a,{id:"test-select-disabled",name:"test-select-disabled",disabled:!0,value:"1",children:e.jsx(a.Option,{value:"1",children:"Valgt (Deaktivert)"})})]}),play:async({canvasElement:t})=>{const s=R(t).getByRole("combobox",{name:/utilgjengelig/i});m(s).toBeDisabled()}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Basic',
  render: args =>
  // Label må ligge INNI Field: Field skanner sine barn og setter for/id-
  // koblingen mellom Label og skjemafeltet automatisk. Utenfor Field blir
  // det ingen kobling, og <select> står uten tilgjengelig navn
  // (axe-regelen "select-name").
  <>
      <Field data-size={args['data-size']}>
        <Label>Velg et fjell</Label>
        <Select {...args}>
          {mountainOptions.map(opt => <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </Select.Option>)}
        </Select>
      </Field>
    </>,
  args: {
    name: 'default-select',
    'data-size': 'md',
    width: 'auto'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,S,x;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example with Error',
  render: args => <>
      <Field data-size={args['data-size']}>
        <Label>Velg et fjell *</Label>
        {/* Ingen manuell aria-describedby her: Field kobler selv feltet til
            ValidationMessage under. Settes den i tillegg manuelt, får
            select-en samme id to ganger — ugyldig attributtverdi for axe. */}
        <Select required {...args}>
          {mountainOptions.map(opt => <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </Select.Option>)}
        </Select>
        {args['aria-invalid'] && <ValidationMessage id="select-error-message-story">
            Du må velge et fjell fra listen.
          </ValidationMessage>}
      </Field>
    </>,
  args: {
    name: 'error-select',
    'data-size': 'md',
    'aria-invalid': true,
    width: 'full'
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var O,y,V;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Example with Grouping (Optgroup)',
  render: args => <>
        <Field data-size={args['data-size']}>
          <Label>Velg et fjell</Label>
          <Select {...args}>
            <Select.Option value="" disabled>Velg et fjell …</Select.Option>
            {groupedMountainOptions.map(group => <Select.Optgroup key={group.label} label={group.label}>
                {group.options.map(opt => <Select.Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Option>)}
              </Select.Optgroup>)}
          </Select>
        </Field>
      </>,
  args: {
    name: 'grouped-select',
    'data-size': 'md',
    width: 'auto',
    defaultValue: 'everest'
  }
}`,...(V=(y=o.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var z,D,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Example Disabled',
  render: args => <>
      <Field data-size={args['data-size']}>
        <Label>Utilgjengelig valg</Label>
        <Select {...args}>
           <Select.Option value="1">Valgt (Deaktivert)</Select.Option>
        </Select>
      </Field>
    </>,
  args: {
    name: 'disabled-select',
    'data-size': 'md',
    disabled: true,
    value: '1'
  }
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var F,E,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  render: args => <>
      <Field data-size={args['data-size']}>
        <Label>Kun lesbart valg</Label>
        <Select {...args}>
           <Select.Option value="galdhopiggen">Galdhøpiggen</Select.Option>
        </Select>
      </Field>
    </>,
  args: {
    name: 'readonly-select',
    'data-size': 'md',
    readOnly: true,
    value: 'galdhopiggen'
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var _,L,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <>
      <Label htmlFor="test-select">Velg et fjell</Label>
      <Select id="test-select" name="test-select" defaultValue="">
        <Select.Option value="" disabled>Velg et fjell …</Select.Option>
        <Select.Option value="galdhopiggen">Galdhøpiggen</Select.Option>
        <Select.Option value="glittertind">Glittertind</Select.Option>
      </Select>
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Select should render with options
    const select = canvas.getByRole('combobox', {
      name: /velg et fjell/i
    });
    expect(select).toBeInTheDocument();

    // Change selection
    await userEvent.selectOptions(select, 'galdhopiggen');
    expect(select).toHaveValue('galdhopiggen');

    // Change again
    await userEvent.selectOptions(select, 'glittertind');
    expect(select).toHaveValue('glittertind');
  }
}`,...(G=(L=u.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var T,B,I;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Test: Disabled State',
  render: () => <>
      <Label htmlFor="test-select-disabled">Utilgjengelig valg</Label>
      <Select id="test-select-disabled" name="test-select-disabled" disabled value="1">
        <Select.Option value="1">Valgt (Deaktivert)</Select.Option>
      </Select>
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox', {
      name: /utilgjengelig/i
    });
    expect(select).toBeDisabled();
  }
}`,...(I=(B=g.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const N=["Default","WithError","WithGrouping","Disabled","ReadOnly","TestInteraction","TestDisabledState"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:d,ReadOnly:c,TestDisabledState:g,TestInteraction:u,WithError:r,WithGrouping:o,__namedExportsOrder:N,default:q},Symbol.toStringTag,{value:"Module"}));export{d as D,c as R,P as S,r as W,o as a};
