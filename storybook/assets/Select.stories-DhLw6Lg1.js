import{j as e}from"./iframe--tL_cLjH.js";import{e as U,F as p,c as s,V as C}from"./tooltip-IPEz1hAh.js";const t=U,{expect:m,within:I,userEvent:b}=__STORYBOOK_MODULE_TEST__,K={title:"Components/Select",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Select (dropdown list) allows users to choose one option from a static list."}}},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},width:{control:"select",options:["auto","full"],description:"Defines the width of Select",defaultValue:"full"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Defines if the select is readOnly",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text"},defaultValue:{control:"text"},name:{control:"text"},required:{control:"boolean"},id:{control:"text"},"aria-labelledby":{control:"text"},children:{control:!1,description:"Must contain Select.Option or Select.OptGroup elements"}}},M=[{value:"",label:"Velg et fjell …"},{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"store_skagastolstind",label:"Store Skagastølstind"},{value:"gaustatoppen",label:"Gaustatoppen"}],W=[{label:"Norske fjell",options:[{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"gaustatoppen",label:"Gaustatoppen"}]},{label:"Utenlandske fjell",options:[{value:"everest",label:"Mount Everest"},{value:"k2",label:"K2"},{value:"kilimanjaro",label:"Kilimanjaro"}]}],i={name:"Example Basic",render:a=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":a["data-size"],children:[e.jsx(s,{children:"Velg et fjell"}),e.jsx(t,{...a,children:M.map(l=>e.jsx(t.Option,{value:l.value,disabled:l.value==="",children:l.label},l.value))})]})}),args:{name:"default-select","data-size":"md",width:"auto"}},r={name:"Example with Error",render:a=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":a["data-size"],children:[e.jsx(s,{children:"Velg et fjell *"}),e.jsx(t,{required:!0,...a,children:M.map(l=>e.jsx(t.Option,{value:l.value,disabled:l.value==="",children:l.label},l.value))}),a["aria-invalid"]&&e.jsx(C,{id:"select-error-message-story",children:"Du må velge et fjell fra listen."})]})}),args:{name:"error-select","data-size":"md","aria-invalid":!0,width:"full"}},o={name:"Example with Grouping (Optgroup)",render:a=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":a["data-size"],children:[e.jsx(s,{children:"Velg et fjell"}),e.jsxs(t,{...a,children:[e.jsx(t.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),W.map(l=>e.jsx(t.Optgroup,{label:l.label,children:l.options.map(n=>e.jsx(t.Option,{value:n.value,children:n.label},n.value))},l.label))]})]})}),args:{name:"grouped-select","data-size":"md",width:"auto",defaultValue:"everest"}},d={name:"Example Disabled",render:a=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":a["data-size"],children:[e.jsx(s,{children:"Utilgjengelig valg"}),e.jsx(t,{...a,children:e.jsx(t.Option,{value:"1",children:"Valgt (Deaktivert)"})})]})}),args:{name:"disabled-select","data-size":"md",disabled:!0,value:"1"}},c={name:"Example ReadOnly",render:a=>e.jsx(e.Fragment,{children:e.jsxs(p,{"data-size":a["data-size"],children:[e.jsx(s,{children:"Kun lesbart valg"}),e.jsx(t,{...a,children:e.jsx(t.Option,{value:"galdhopiggen",children:"Galdhøpiggen"})})]})}),args:{name:"readonly-select","data-size":"md",readOnly:!0,value:"galdhopiggen"}},g={name:"Test: Interaction",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{htmlFor:"test-select",children:"Velg et fjell"}),e.jsxs(t,{id:"test-select",name:"test-select",defaultValue:"",children:[e.jsx(t.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),e.jsx(t.Option,{value:"galdhopiggen",children:"Galdhøpiggen"}),e.jsx(t.Option,{value:"glittertind",children:"Glittertind"})]})]}),play:async({canvasElement:a})=>{const n=I(a).getByRole("combobox",{name:/velg et fjell/i});m(n).toBeInTheDocument(),await b.selectOptions(n,"galdhopiggen"),m(n).toHaveValue("galdhopiggen"),await b.selectOptions(n,"glittertind"),m(n).toHaveValue("glittertind")}},u={name:"Test: Disabled State",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{htmlFor:"test-select-disabled",children:"Utilgjengelig valg"}),e.jsx(t,{id:"test-select-disabled",name:"test-select-disabled",disabled:!0,value:"1",children:e.jsx(t.Option,{value:"1",children:"Valgt (Deaktivert)"})})]}),play:async({canvasElement:a})=>{const n=I(a).getByRole("combobox",{name:/utilgjengelig/i});m(n).toBeDisabled()}},H=["Default","WithError","WithGrouping","Disabled","ReadOnly","TestInteraction","TestDisabledState"];var v,h,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,S,f;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var O,y,V;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(y=o.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var z,E,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var D,w,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var L,G,T;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(G=g.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var _,B,R;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const P=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:d,ReadOnly:c,TestDisabledState:u,TestInteraction:g,WithError:r,WithGrouping:o,__namedExportsOrder:H,default:K},Symbol.toStringTag,{value:"Module"}));export{d as D,c as R,P as S,r as W,o as a};
