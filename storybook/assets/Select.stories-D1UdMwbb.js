import{j as e}from"./iframe-sfm2iiNv.js";import{S as L}from"./index-C79QNCdj.js";import{L as r}from"./Label-hKN12Bml.js";import{F as s,V as w}from"./index-Bpc4Wq8G.js";import"./preload-helper-C1FmrZbK.js";import"./lite-DaUVFjkg.js";import"./index-B-pTjrYB.js";import"./floating-ui.react-B0KwFFiC.js";import"./index-DNAPc2gN.js";import"./index-jZE8LZbC.js";import"./Paragraph-r4OMux9D.js";const l=L;try{l.displayName="Select",l.__docgenInfo={description:"",displayName:"Select",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}}}}}catch{}const B={title:"Components/Select",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Select (dropdown list) allows users to choose one option from a static list."}}},argTypes:{"aria-invalid":{control:"boolean",description:"Indicates an error state for accessibility",defaultValue:!1},width:{control:"select",options:["auto","full"],description:"Defines the width of Select",defaultValue:"full"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Defines if the select is readOnly",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text"},defaultValue:{control:"text"},name:{control:"text"},required:{control:"boolean"},id:{control:"text"},"aria-labelledby":{control:"text"},children:{control:!1,description:"Must contain Select.Option or Select.OptGroup elements"}}},E=[{value:"",label:"Velg et fjell …"},{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"store_skagastolstind",label:"Store Skagastølstind"},{value:"gaustatoppen",label:"Gaustatoppen"}],D=[{label:"Norske fjell",options:[{value:"galdhopiggen",label:"Galdhøpiggen"},{value:"glittertind",label:"Glittertind"},{value:"gaustatoppen",label:"Gaustatoppen"}]},{label:"Utenlandske fjell",options:[{value:"everest",label:"Mount Everest"},{value:"k2",label:"K2"},{value:"kilimanjaro",label:"Kilimanjaro"}]}],i={name:"Example Basic",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Velg et fjell"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsx(l,{...a,children:E.map(t=>e.jsx(l.Option,{value:t.value,disabled:t.value==="",children:t.label},t.value))})})]}),args:{name:"default-select","data-size":"md",width:"auto"}},n={name:"Example with Error",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Velg et fjell *"}),e.jsxs(s,{"data-size":a["data-size"],children:[e.jsx(l,{required:!0,"aria-describedby":a["aria-invalid"]?"select-error-message-story":void 0,...a,children:E.map(t=>e.jsx(l.Option,{value:t.value,disabled:t.value==="",children:t.label},t.value))}),a["aria-invalid"]&&e.jsx(w,{id:"select-error-message-story",children:"Du må velge et fjell fra listen."})]})]}),args:{name:"error-select","data-size":"md","aria-invalid":!0,width:"full"}},d={name:"Example with Grouping (Optgroup)",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Velg et fjell"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsxs(l,{...a,children:[e.jsx(l.Option,{value:"",disabled:!0,children:"Velg et fjell …"}),D.map(t=>e.jsx(l.Optgroup,{label:t.label,children:t.options.map(u=>e.jsx(l.Option,{value:u.value,children:u.label},u.value))},t.label))]})})]}),args:{name:"grouped-select","data-size":"md",width:"auto",defaultValue:"everest"}},o={name:"Example Disabled",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Utilgjengelig valg"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsx(l,{...a,children:e.jsx(l.Option,{value:"1",children:"Valgt (Deaktivert)"})})})]}),args:{name:"disabled-select","data-size":"md",disabled:!0,value:"1"}},c={name:"Example ReadOnly",render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Kun lesbart valg"}),e.jsx(s,{"data-size":a["data-size"],children:e.jsx(l,{...a,children:e.jsx(l.Option,{value:"galdhopiggen",children:"Galdhøpiggen"})})})]}),args:{name:"readonly-select","data-size":"md",readOnly:!0,value:"galdhopiggen"}};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,j,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var S,O,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(O=o.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var y,V,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const I=["Default","WithError","WithGrouping","Disabled","ReadOnly"];export{i as Default,o as Disabled,c as ReadOnly,n as WithError,d as WithGrouping,I as __namedExportsOrder,B as default};
