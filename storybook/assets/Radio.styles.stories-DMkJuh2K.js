import{r as u,j as e}from"./iframe-t1xFw9Va.js";import{R as o,u as g,F as l}from"./index-CQvqIp6p.js";import{V as D}from"./tooltip-BmKzlMBV.js";import"./preload-helper-u0ftyAaf.js";import"./index-CAnL2RMp.js";import"./index-C0yb3BZs.js";const J={title:"Components/Radio/Advanced",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Radio buttons allow users to select one option from a set. Use Fieldset for grouping."}}},argTypes:{label:{control:"text",description:"Radio label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"primary-color-red"},error:{control:"text",description:"Error message for field (often used with Fieldset/hook)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1},name:{control:!1}}},n={render:a=>e.jsx(l,{children:e.jsx(o,{...a})}),args:{label:"Enkeltvalg",value:"single_option",name:"single-radio-group"}},i={render:a=>{const[t,s]=u.useState("jordbaer"),{getRadioProps:r}=g({name:"ice-cream-flavor",value:t,onChange:d=>s(d),disabled:a.disabled,readOnly:a.readOnly});return e.jsxs(l,{children:[e.jsx(l.Description,{children:"Velg din favorittsmak blant alternativene."}),e.jsx(o,{label:"Vanilje",...r("vanilje"),"data-size":a["data-size"],"data-color":a["data-color"]}),e.jsx(o,{label:"Jordbær",description:"Jordbær er best",...r("jordbaer"),"data-size":a["data-size"],"data-color":a["data-color"]}),e.jsx(o,{label:"Sjokolade",...r("sjokolade"),"data-size":a["data-size"],"data-color":a["data-color"]}),e.jsx(o,{label:"Jeg spiser ikke iskrem",...r("ingen"),"data-size":a["data-size"],"data-color":a["data-color"]})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["primary-color-red","neutral"]}},args:{disabled:!1,readOnly:!1,"data-size":"md","data-color":"primary-color-red"}},c={render:a=>{const[t,s]=u.useState(""),r=a.error||"Du må velge en smak!",{getRadioProps:d,validationMessageProps:S}=g({name:"ice-cream-error",value:t,onChange:s,error:r});return e.jsxs(l,{children:[e.jsx(l.Description,{children:"Velg din favorittsmak blant alternativene."}),e.jsx(o,{label:"Vanilje",...d("vanilje")}),e.jsx(o,{label:"Jordbær",...d("jordbaer")}),e.jsx(o,{label:"Sjokolade",...d("sjokolade")}),e.jsx(D,{...S,children:r})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},disabled:{control:!1},readOnly:{control:!1},error:{control:"text",defaultValue:"Du må velge en smak!"}},args:{"data-size":"md","data-color":"primary-color-red",error:"Du må velge en smak!"},name:"Group with Error"},p={render:a=>{const[t,s]=u.useState("ja"),{getRadioProps:r}=g({name:"contact-inline",value:t,onChange:s});return e.jsxs(l,{children:[e.jsx(l.Description,{children:"Bekreft om du ønsker å bli kontaktet per e-post."}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{label:"Ja",...r("ja"),"data-size":a["data-size"]}),e.jsx(o,{label:"Nei",...r("nei"),"data-size":a["data-size"]})]})]})},args:{"data-size":"md"}};var m,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Radio {...args} />
    </Fieldset>,
  args: {
    label: 'Enkeltvalg',
    value: 'single_option',
    name: 'single-radio-group'
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,k,V;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>('jordbaer');
    const {
      getRadioProps
    } = useRadioGroup({
      name: 'ice-cream-flavor',
      value: selectedValue,
      onChange: nextValue => setSelectedValue(nextValue),
      disabled: args.disabled,
      readOnly: args.readOnly
    });
    return <Fieldset>
        <Fieldset.Description>
          Velg din favorittsmak blant alternativene.
        </Fieldset.Description>
        <Radio label="Vanilje" {...getRadioProps('vanilje')} data-size={args['data-size']} data-color={args['data-color']} />
        <Radio label="Jordbær" description="Jordbær er best" {...getRadioProps('jordbaer')} data-size={args['data-size']} data-color={args['data-color']} />
        <Radio label="Sjokolade" {...getRadioProps('sjokolade')} data-size={args['data-size']} data-color={args['data-color']} />
        <Radio label="Jeg spiser ikke iskrem" {...getRadioProps('ingen')} data-size={args['data-size']} data-color={args['data-color']} />
      </Fieldset>;
  },
  argTypes: {
    label: {
      control: false
    },
    description: {
      control: false
    },
    value: {
      control: false
    },
    checked: {
      control: false
    },
    defaultChecked: {
      control: false
    },
    error: {
      control: false
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    readOnly: {
      control: 'boolean',
      defaultValue: false
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    'data-color': {
      control: 'select',
      options: ['primary-color-red', 'neutral']
    }
  },
  args: {
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'primary-color-red'
  }
}`,...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var v,R,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const errorMessage = args.error || 'Du må velge en smak!';
    const {
      getRadioProps,
      validationMessageProps
    } = useRadioGroup({
      name: 'ice-cream-error',
      value: selectedValue,
      onChange: setSelectedValue,
      error: errorMessage
    });
    return <Fieldset>
        <Fieldset.Description>
          Velg din favorittsmak blant alternativene.
        </Fieldset.Description>
        <Radio label="Vanilje" {...getRadioProps('vanilje')} />
        <Radio label="Jordbær" {...getRadioProps('jordbaer')} />
        <Radio label="Sjokolade" {...getRadioProps('sjokolade')} />
        {/* Spread props onto ValidationMessage */}
        <ValidationMessage {...validationMessageProps}>
          {errorMessage}
        </ValidationMessage>
      </Fieldset>;
  },
  argTypes: {
    label: {
      control: false
    },
    description: {
      control: false
    },
    value: {
      control: false
    },
    checked: {
      control: false
    },
    defaultChecked: {
      control: false
    },
    disabled: {
      control: false
    },
    readOnly: {
      control: false
    },
    error: {
      control: 'text',
      defaultValue: 'Du må velge en smak!'
    }
  },
  args: {
    'data-size': 'md',
    'data-color': 'primary-color-red',
    error: 'Du må velge en smak!'
  },
  name: 'Group with Error'
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var y,h,z;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>('ja');
    const {
      getRadioProps
    } = useRadioGroup({
      name: 'contact-inline',
      value: selectedValue,
      onChange: setSelectedValue
    });
    return <Fieldset>
        <Fieldset.Description>
          Bekreft om du ønsker å bli kontaktet per e-post.
        </Fieldset.Description>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <Radio label="Ja" {...getRadioProps('ja')} data-size={args['data-size']} />
          <Radio label="Nei" {...getRadioProps('nei')} data-size={args['data-size']} />
        </div>
      </Fieldset>;
  },
  args: {
    'data-size': 'md'
  }
}`,...(z=(h=p.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const G=["Single","RadioGroup","WithError","Inline"];export{p as Inline,i as RadioGroup,n as Single,c as WithError,G as __namedExportsOrder,J as default};
