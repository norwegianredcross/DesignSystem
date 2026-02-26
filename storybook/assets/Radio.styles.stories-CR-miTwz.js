import{j as e,r as u}from"./iframe-C-snRe4B.js";import{R as o,F as t,u as g}from"./index-CZUeruFX.js";import{V as D}from"./index-K9xQ8hN0.js";import"./preload-helper-u0ftyAaf.js";import"./input-DpCrMvGS.js";import"./lite-DaUVFjkg.js";import"./label-xmAEJAU8.js";import"./index-DFMzLMFO.js";import"./index-BMyfW9zC.js";import"./paragraph-CjD6bKVL.js";import"./use-merge-refs-BicZE9-V.js";const B={title:"Components/Radio/Advanced",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Radio buttons allow users to select one option from a set. Use Fieldset for grouping."}}},argTypes:{label:{control:"text",description:"Radio label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},error:{control:"text",description:"Error message for field (often used with Fieldset/hook)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1},name:{control:!1}}},n={render:a=>e.jsx(t,{children:e.jsx(o,{...a})}),args:{label:"Enkeltvalg",value:"single_option",name:"single-radio-group"}},i={render:a=>{const[l,s]=u.useState("jordbaer"),{getRadioProps:r}=g({name:"ice-cream-flavor",value:l,onChange:d=>s(d),disabled:a.disabled,readOnly:a.readOnly});return e.jsxs(t,{children:[e.jsx(t.Description,{children:"Velg din favorittsmak blant alternativene."}),e.jsx(o,{label:"Vanilje",...r("vanilje"),"data-size":a["data-size"],"data-color":a["data-color"]}),e.jsx(o,{label:"Jordbær",description:"Jordbær er best",...r("jordbaer"),"data-size":a["data-size"],"data-color":a["data-color"]}),e.jsx(o,{label:"Sjokolade",...r("sjokolade"),"data-size":a["data-size"],"data-color":a["data-color"]}),e.jsx(o,{label:"Jeg spiser ikke iskrem",...r("ingen"),"data-size":a["data-size"],"data-color":a["data-color"]})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["accent","neutral"]}},args:{disabled:!1,readOnly:!1,"data-size":"md","data-color":"accent"}},c={render:a=>{const[l,s]=u.useState(""),r=a.error||"Du må velge en smak!",{getRadioProps:d,validationMessageProps:y}=g({name:"ice-cream-error",value:l,onChange:s,error:r});return e.jsxs(t,{children:[e.jsx(t.Description,{children:"Velg din favorittsmak blant alternativene."}),e.jsx(o,{label:"Vanilje",...d("vanilje")}),e.jsx(o,{label:"Jordbær",...d("jordbaer")}),e.jsx(o,{label:"Sjokolade",...d("sjokolade")}),e.jsx(D,{...y,children:r})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},disabled:{control:!1},readOnly:{control:!1},error:{control:"text",defaultValue:"Du må velge en smak!"}},args:{"data-size":"md","data-color":"accent",error:"Du må velge en smak!"},name:"Group with Error"},p={render:a=>{const[l,s]=u.useState("ja"),{getRadioProps:r}=g({name:"contact-inline",value:l,onChange:s});return e.jsxs(t,{children:[e.jsx(t.Description,{children:"Bekreft om du ønsker å bli kontaktet per e-post."}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{label:"Ja",...r("ja"),"data-size":a["data-size"]}),e.jsx(o,{label:"Nei",...r("nei"),"data-size":a["data-size"]})]})]})},args:{"data-size":"md"}};var m,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      options: ['accent', 'neutral']
    }
  },
  args: {
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'accent'
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
    'data-color': 'accent',
    error: 'Du må velge en smak!'
  },
  name: 'Group with Error'
}`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var h,z,S;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(z=p.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const I=["Single","RadioGroup","WithError","Inline"];export{p as Inline,i as RadioGroup,n as Single,c as WithError,I as __namedExportsOrder,B as default};
