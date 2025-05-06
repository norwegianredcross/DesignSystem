import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as L}from"./index-BFhcAb3Y.js";import{L as r}from"./Label-DnboOLtM.js";import{F as s,V as w}from"./index-CMMlhluM.js";import"./lite-DaUVFjkg.js";import"./index-D4lIrffr.js";import"./index-Cb-ENzfG.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Paragraph-CJciD5B6.js";const t=L,I={title:"Components/Select",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Select (dropdown list) allows users to choose one option from a static list."}}},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},width:{control:"select",options:["auto","full"],description:"Defines the width of Select",defaultValue:"full"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Defines if the select is readOnly",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text"},defaultValue:{control:"text"},name:{control:"text"},required:{control:"boolean"},id:{control:"text"},"aria-labelledby":{control:"text"},children:{control:!1,description:"Must contain Select.Option or Select.OptGroup elements"}}},E=[{value:"",label:"Velg et fjell …"},{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"store_skagastolstind",label:"Store Skagastølstind"},{value:"gaustatoppen",label:"Gaustatoppen"}],D=[{label:"Norske fjell",options:[{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"gaustatoppen",label:"Gaustatoppen"}]},{label:"Utenlandske fjell",options:[{value:"everest",label:"Mount Everest"},{value:"k2",label:"K2"},{value:"kilimanjaro",label:"Kilimanjaro"}]}],i={name:"Example Basic",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Velg et fjell"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsx(t,{...a,children:E.map(l=>e.jsx(t.Option,{value:l.value,disabled:l.value==="",children:l.label},l.value))})})]}),args:{name:"default-select","data-size":"md",width:"auto"}},n={name:"Example with Error",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Velg et fjell *"}),e.jsxs(s,{"data-size":a["data-size"],children:[e.jsx(t,{required:!0,"aria-describedby":a["aria-invalid"]?"select-error-message-story":void 0,...a,children:E.map(l=>e.jsx(t.Option,{value:l.value,disabled:l.value==="",children:l.label},l.value))}),a["aria-invalid"]&&e.jsx(w,{id:"select-error-message-story",children:"Du må velge et fjell fra listen."})]})]}),args:{name:"error-select","data-size":"md","aria-invalid":!0,width:"full"}},o={name:"Example with Grouping (Optgroup)",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Velg et fjell"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsxs(t,{...a,children:[e.jsx(t.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),D.map(l=>e.jsx(t.Optgroup,{label:l.label,children:l.options.map(p=>e.jsx(t.Option,{value:p.value,children:p.label},p.value))},l.label))]})})]}),args:{name:"grouped-select","data-size":"md",width:"auto",defaultValue:"everest"}},d={name:"Example Disabled",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Utilgjengelig valg"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsx(t,{...a,children:e.jsx(t.Option,{value:"1",children:"Valgt (Deaktivert)"})})})]}),args:{name:"disabled-select","data-size":"md",disabled:!0,value:"1"}},c={name:"Example ReadOnly",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Kun lesbart valg"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsx(t,{...a,children:e.jsx(t.Option,{value:"galdhopiggen",children:"Galdhøpiggen"})})})]}),args:{name:"readonly-select","data-size":"md",readOnly:!0,value:"galdhopiggen"}};var u,m,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Example Basic',
  render: args =>
  // Label outside Field
  <>\r
      <Label>Velg et fjell</Label>\r
      <Field data-size={args['data-size']}>\r
        <Select {...args}>\r
          {mountainOptions.map(opt => <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>\r
              {opt.label}\r
            </Select.Option>)}\r
        </Select>\r
      </Field>\r
    </>,
  args: {
    name: 'default-select',
    'data-size': 'md',
    width: 'auto'
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,v,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example with Error',
  render: args =>
  // Label outside Field
  <>\r
      <Label>Velg et fjell *</Label>\r
      <Field data-size={args['data-size']}>\r
        <Select required aria-describedby={args['aria-invalid'] ? 'select-error-message-story' : undefined} {...args}>\r
          {mountainOptions.map(opt => <Select.Option key={opt.value} value={opt.value} disabled={opt.value === ''}>\r
              {opt.label}\r
            </Select.Option>)}\r
        </Select>\r
        {args['aria-invalid'] && <ValidationMessage id="select-error-message-story">\r
            Du må velge et fjell fra listen.\r
          </ValidationMessage>}\r
      </Field>\r
    </>,
  args: {
    name: 'error-select',
    'data-size': 'md',
    'aria-invalid': true,
    width: 'full'
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,j,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example with Grouping (Optgroup)',
  render: args =>
  // Label outside Field
  <>\r
        <Label>Velg et fjell</Label>\r
        <Field data-size={args['data-size']}>\r
          <Select {...args}>\r
            <Select.Option value="" disabled>Velg et fjell …</Select.Option>\r
            {groupedMountainOptions.map(group => <Select.Optgroup key={group.label} label={group.label}>\r
                {group.options.map(opt => <Select.Option key={opt.value} value={opt.value}>\r
                    {opt.label}\r
                  </Select.Option>)}\r
              </Select.Optgroup>)}\r
          </Select>\r
        </Field>\r
      </>,
  args: {
    name: 'grouped-select',
    'data-size': 'md',
    width: 'auto',
    defaultValue: 'everest'
  }
}`,...(x=(j=o.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var O,S,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Example Disabled',
  render: args =>
  // Label outside Field
  <>\r
      <Label>Utilgjengelig valg</Label>\r
      <Field data-size={args['data-size']}>\r
        <Select {...args}>\r
           <Select.Option value="1">Valgt (Deaktivert)</Select.Option>\r
        </Select>\r
      </Field>\r
    </>,
  args: {
    name: 'disabled-select',
    'data-size': 'md',
    disabled: true,
    value: '1'
  }
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var y,V,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  render: args =>
  // Label outside Field
  <>\r
      <Label>Kun lesbart valg</Label>\r
      <Field data-size={args['data-size']}>\r
        <Select {...args}>\r
           <Select.Option value="galdhopiggen">Galdhøpiggen</Select.Option>\r
        </Select>\r
      </Field>\r
    </>,
  args: {
    name: 'readonly-select',
    'data-size': 'md',
    readOnly: true,
    value: 'galdhopiggen'
  }
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const N=["Default","WithError","WithGrouping","Disabled","ReadOnly"];export{i as Default,d as Disabled,c as ReadOnly,n as WithError,o as WithGrouping,N as __namedExportsOrder,I as default};
