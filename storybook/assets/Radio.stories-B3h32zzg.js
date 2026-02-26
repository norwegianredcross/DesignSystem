import{j as e}from"./iframe-6RRBSr00.js";import{R as r,F as s}from"./index-EhKUuYym.js";const V={title:"Components/Radio",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Radio presents a set of mutually exclusive options. Use one Radio per option, grouped by the same name."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},disabled:{control:"boolean",description:"Disables the radio",defaultValue:!1},name:{control:"text",description:"Name used to group radios",defaultValue:"alternativ"},value:{control:"text",description:"Value of the option"},label:{control:"text",description:"Label shown next to the radio",defaultValue:"Ja"}}},t={render:a=>e.jsxs(s,{children:[e.jsx(s.Legend,{children:"Er du over 18 år?"}),e.jsx(r,{...a,value:"ja",label:"Ja",name:"alternativ"}),e.jsx(r,{...a,value:"nei",label:"Nei",name:"alternativ"})]}),args:{"data-size":"md","data-color":"neutral"}},o={render:a=>e.jsxs(s,{children:[e.jsx(s.Legend,{children:"Velg et alternativ"}),e.jsx(r,{...a,value:"a","aria-label":"Alternativ A",name:"aria-group"}),e.jsx(r,{...a,value:"b","aria-label":"Alternativ B",name:"aria-group"})]}),args:{"data-size":"md"},name:"With aria-label"},l={render:a=>e.jsxs(s,{children:[e.jsx(s.Legend,{children:"Velg en frukt"}),e.jsx(r,{...a,value:"apple",label:"Eple",name:"frukt"}),e.jsx(r,{...a,value:"banana",label:"Banan",name:"frukt"}),e.jsx(r,{...a,value:"pear",label:"Pære",name:"frukt"})]}),args:{"data-size":"md"}},d={render:a=>e.jsxs(s,{children:[e.jsx(s.Legend,{children:"Velg en farge *"}),e.jsx("p",{id:"radio-error-note",style:{color:"var(--ds-color-danger-500)",marginTop:4,marginBottom:8},children:"Du må velge en farge"}),e.jsx(r,{...a,value:"red",label:"Rød",name:"farge","aria-describedby":"radio-error-note"}),e.jsx(r,{...a,value:"green",label:"Grønn",name:"farge","aria-describedby":"radio-error-note"})]}),args:{"data-size":"md"}},n={render:a=>e.jsxs(s,{children:[e.jsx(s.Legend,{children:"Velg en status"}),e.jsx(r,{...a,value:"on",label:"På",name:"status-ro",readOnly:!0,checked:!0}),e.jsx(r,{...a,value:"off",label:"Av",name:"status-ro",readOnly:!0})]}),args:{"data-size":"md"}},i={render:a=>e.jsxs(s,{children:[e.jsx(s.Legend,{children:"Ja / Nei"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(r,{...a,value:"ja",label:"Ja",name:"inline"}),e.jsx(r,{...a,value:"nei",label:"Nei",name:"inline"})]})]}),args:{"data-size":"md"}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Er du over 18 år?</Fieldset.Legend>
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="ja" label="Ja" name="alternativ" />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="nei" label="Nei" name="alternativ" />
    </Fieldset>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,m,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg et alternativ</Fieldset.Legend>
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="a" aria-label="Alternativ A" name="aria-group" />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="b" aria-label="Alternativ B" name="aria-group" />
    </Fieldset>,
  args: {
    'data-size': 'md'
  },
  name: 'With aria-label'
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,v,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg en frukt</Fieldset.Legend>
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="apple" label="Eple" name="frukt" />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="banana" label="Banan" name="frukt" />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="pear" label="Pære" name="frukt" />
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,j,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg en farge *</Fieldset.Legend>
      <p id="radio-error-note" style={{
      color: 'var(--ds-color-danger-500)',
      marginTop: 4,
      marginBottom: 8
    }}>
        Du må velge en farge
      </p>
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="red" label="Rød" name="farge" aria-describedby="radio-error-note" />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="green" label="Grønn" name="farge" aria-describedby="radio-error-note" />
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(h=(j=d.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var F,R,k;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg en status</Fieldset.Legend>
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="on" label="På" name="status-ro" readOnly checked />
      {/* @ts-expect-error Storybook args spread */}
      <Radio {...args} value="off" label="Av" name="status-ro" readOnly />
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(k=(R=n.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var S,L,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Ja / Nei</Fieldset.Legend>
      <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        {/* @ts-expect-error Storybook args spread */}
        <Radio {...args} value="ja" label="Ja" name="inline" />
        {/* @ts-expect-error Storybook args spread */}
        <Radio {...args} value="nei" label="Nei" name="inline" />
      </div>
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const A=["Default","AriaLabel","Group","WithError","ReadOnly","Inline"],E=Object.freeze(Object.defineProperty({__proto__:null,AriaLabel:o,Default:t,Group:l,Inline:i,ReadOnly:n,WithError:d,__namedExportsOrder:A,default:V},Symbol.toStringTag,{value:"Module"}));export{t as D,E as R};
