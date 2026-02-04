import{j as e}from"./iframe-BQvb_Lto.js";import{S as D}from"./index-KH9WC8ul.js";import{L as o}from"./label-BLgyycGl.js";import{F as c,V as E}from"./index-B15ewjed.js";const l=D;try{l.displayName="Select",l.__docgenInfo={description:"",displayName:"Select",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},readOnly:{defaultValue:{value:"false"},description:"Defines if the select is readOnly",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"full"},description:'Defines the width of Select, where "auto" matches the content width.',name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}}}}}catch{}const L={title:"Components/Select",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Select (dropdown list) allows users to choose one option from a static list."}}},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},width:{control:"select",options:["auto","full"],description:"Defines the width of Select",defaultValue:"full"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Defines if the select is readOnly",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text"},defaultValue:{control:"text"},name:{control:"text"},required:{control:"boolean"},id:{control:"text"},"aria-labelledby":{control:"text"},children:{control:!1,description:"Must contain Select.Option or Select.OptGroup elements"}}},w=[{value:"",label:"Velg et fjell …"},{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"store_skagastolstind",label:"Store Skagastølstind"},{value:"gaustatoppen",label:"Gaustatoppen"}],_=[{label:"Norske fjell",options:[{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"gaustatoppen",label:"Gaustatoppen"}]},{label:"Utenlandske fjell",options:[{value:"everest",label:"Mount Everest"},{value:"k2",label:"K2"},{value:"kilimanjaro",label:"Kilimanjaro"}]}],s={name:"Example Basic",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Velg et fjell"}),e.jsx(c,{"data-size":a["data-size"],children:e.jsx(l,{...a,children:w.map(t=>e.jsx(l.Option,{value:t.value,disabled:t.value==="",children:t.label},t.value))})})]}),args:{name:"default-select","data-size":"md",width:"auto"}},r={name:"Example with Error",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Velg et fjell *"}),e.jsxs(c,{"data-size":a["data-size"],children:[e.jsx(l,{required:!0,"aria-describedby":a["aria-invalid"]?"select-error-message-story":void 0,...a,children:w.map(t=>e.jsx(l.Option,{value:t.value,disabled:t.value==="",children:t.label},t.value))}),a["aria-invalid"]&&e.jsx(E,{id:"select-error-message-story",children:"Du må velge et fjell fra listen."})]})]}),args:{name:"error-select","data-size":"md","aria-invalid":!0,width:"full"}},i={name:"Example with Grouping (Optgroup)",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Velg et fjell"}),e.jsx(c,{"data-size":a["data-size"],children:e.jsxs(l,{...a,children:[e.jsx(l.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),_.map(t=>e.jsx(l.Optgroup,{label:t.label,children:t.options.map(u=>e.jsx(l.Option,{value:u.value,children:u.label},u.value))},t.label))]})})]}),args:{name:"grouped-select","data-size":"md",width:"auto",defaultValue:"everest"}},n={name:"Example Disabled",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Utilgjengelig valg"}),e.jsx(c,{"data-size":a["data-size"],children:e.jsx(l,{...a,children:e.jsx(l.Option,{value:"1",children:"Valgt (Deaktivert)"})})})]}),args:{name:"disabled-select","data-size":"md",disabled:!0,value:"1"}},d={name:"Example ReadOnly",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Kun lesbart valg"}),e.jsx(c,{"data-size":a["data-size"],children:e.jsx(l,{...a,children:e.jsx(l.Option,{value:"galdhopiggen",children:"Galdhøpiggen"})})})]}),args:{name:"readonly-select","data-size":"md",readOnly:!0,value:"galdhopiggen"}};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Example Basic',
  render: args =>
  // Label outside Field
  <>
      <Label>Velg et fjell</Label>
      <Field data-size={args['data-size']}>
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
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example with Error',
  render: args =>
  // Label outside Field
  <>
      <Label>Velg et fjell *</Label>
      <Field data-size={args['data-size']}>
        <Select required aria-describedby={args['aria-invalid'] ? 'select-error-message-story' : undefined} {...args}>
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
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,j,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example with Grouping (Optgroup)',
  render: args =>
  // Label outside Field
  <>
        <Label>Velg et fjell</Label>
        <Field data-size={args['data-size']}>
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
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var x,O,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Disabled',
  render: args =>
  // Label outside Field
  <>
      <Label>Utilgjengelig valg</Label>
      <Field data-size={args['data-size']}>
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
}`,...(z=(O=n.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var y,V,F;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  render: args =>
  // Label outside Field
  <>
      <Label>Kun lesbart valg</Label>
      <Field data-size={args['data-size']}>
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
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const G=["Default","WithError","WithGrouping","Disabled","ReadOnly"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:n,ReadOnly:d,WithError:r,WithGrouping:i,__namedExportsOrder:G,default:L},Symbol.toStringTag,{value:"Module"}));export{n as D,d as R,C as S,r as W,i as a};
