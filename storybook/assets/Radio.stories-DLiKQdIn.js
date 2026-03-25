import{j as e}from"./iframe-BkO_4YuB.js";import{R as r,F as t}from"./index-BoMtujAp.js";const{expect:o,within:D,userEvent:b}=__STORYBOOK_MODULE_TEST__,J={title:"Components/Radio",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Radio presents a set of mutually exclusive options. Use one Radio per option, grouped by the same name."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},disabled:{control:"boolean",description:"Disables the radio",defaultValue:!1},name:{control:"text",description:"Name used to group radios",defaultValue:"alternativ"},value:{control:"text",description:"Value of the option"},label:{control:"text",description:"Label shown next to the radio",defaultValue:"Ja"}}},s={render:a=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Er du over 18 år?"}),e.jsx(r,{...a,value:"ja",label:"Ja",name:"alternativ"}),e.jsx(r,{...a,value:"nei",label:"Nei",name:"alternativ"})]}),args:{"data-size":"md","data-color":"neutral"}},n={render:a=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Velg et alternativ"}),e.jsx(r,{...a,value:"a","aria-label":"Alternativ A",name:"aria-group"}),e.jsx(r,{...a,value:"b","aria-label":"Alternativ B",name:"aria-group"})]}),args:{"data-size":"md"},name:"With aria-label"},d={render:a=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Velg en frukt"}),e.jsx(r,{...a,value:"apple",label:"Eple",name:"frukt"}),e.jsx(r,{...a,value:"banana",label:"Banan",name:"frukt"}),e.jsx(r,{...a,value:"pear",label:"Pære",name:"frukt"})]}),args:{"data-size":"md"}},l={render:a=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Velg en farge *"}),e.jsx("p",{id:"radio-error-note",style:{color:"var(--ds-color-danger-500)",marginTop:4,marginBottom:8},children:"Du må velge en farge"}),e.jsx(r,{...a,value:"red",label:"Rød",name:"farge","aria-describedby":"radio-error-note"}),e.jsx(r,{...a,value:"green",label:"Grønn",name:"farge","aria-describedby":"radio-error-note"})]}),args:{"data-size":"md"}},i={render:a=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Velg en status"}),e.jsx(r,{...a,value:"on",label:"På",name:"status-ro",readOnly:!0,checked:!0}),e.jsx(r,{...a,value:"off",label:"Av",name:"status-ro",readOnly:!0})]}),args:{"data-size":"md"}},c={render:a=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Ja / Nei"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(r,{...a,value:"ja",label:"Ja",name:"inline"}),e.jsx(r,{...a,value:"nei",label:"Nei",name:"inline"})]})]}),args:{"data-size":"md"}},p={name:"Test: Interaction",render:()=>e.jsxs(t,{children:[e.jsx(t.Legend,{children:"Velg et alternativ"}),e.jsx(r,{value:"yes",label:"Ja",name:"test-radio"}),e.jsx(r,{value:"no",label:"Nei",name:"test-radio"}),e.jsx(r,{value:"maybe",label:"Kanskje",name:"test-radio"})]}),play:async({canvasElement:a})=>{const u=D(a),m=u.getByRole("radio",{name:/ja/i}),g=u.getByRole("radio",{name:/nei/i}),v=u.getByRole("radio",{name:/kanskje/i});o(m).not.toBeChecked(),o(g).not.toBeChecked(),await b.click(m),o(m).toBeChecked(),await b.click(g),o(g).toBeChecked(),o(m).not.toBeChecked(),await b.click(v),o(v).toBeChecked(),o(g).not.toBeChecked()}};var x,y,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var h,j,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var R,F,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(F=d.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var S,L,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var E,N,V;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(N=i.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var z,O,_;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var T,w,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Fieldset>
      <Fieldset.Legend>Velg et alternativ</Fieldset.Legend>
      <Radio value="yes" label="Ja" name="test-radio" />
      <Radio value="no" label="Nei" name="test-radio" />
      <Radio value="maybe" label="Kanskje" name="test-radio" />
    </Fieldset>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioYes = canvas.getByRole('radio', {
      name: /ja/i
    });
    const radioNo = canvas.getByRole('radio', {
      name: /nei/i
    });
    const radioMaybe = canvas.getByRole('radio', {
      name: /kanskje/i
    });

    // None selected initially
    expect(radioYes).not.toBeChecked();
    expect(radioNo).not.toBeChecked();

    // Click selects radio
    await userEvent.click(radioYes);
    expect(radioYes).toBeChecked();

    // Only one selected at a time
    await userEvent.click(radioNo);
    expect(radioNo).toBeChecked();
    expect(radioYes).not.toBeChecked();

    // Switching to third option
    await userEvent.click(radioMaybe);
    expect(radioMaybe).toBeChecked();
    expect(radioNo).not.toBeChecked();
  }
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Y=["Default","AriaLabel","Group","WithError","ReadOnly","Inline","TestInteraction"],P=Object.freeze(Object.defineProperty({__proto__:null,AriaLabel:n,Default:s,Group:d,Inline:c,ReadOnly:i,TestInteraction:p,WithError:l,__namedExportsOrder:Y,default:J},Symbol.toStringTag,{value:"Module"}));export{s as D,P as R};
