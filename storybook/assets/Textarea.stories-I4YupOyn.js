import{r as R,j as e}from"./iframe-CfsAtch-.js";import{j as I,F as l,i as s,t as P,P as W}from"./tooltip-DMtqqJ03.js";const t=I;try{t.displayName="Textarea",t.__docgenInfo={description:"",displayName:"Textarea",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const{expect:u,within:M,userEvent:H}=__STORYBOOK_MODULE_TEST__,q={title:"Components/Textarea",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Textarea allows users to input multi-line text. Use Label for accessibility."}},layout:"padded"},argTypes:{disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},cols:{control:"number",description:"Specifies the visible width of a text area."},rows:{control:"number",description:"Specifies the visible number of lines in a text area."},maxLength:{control:"number",description:"Specifies the maximum number of characters allowed."},id:{control:"text",description:"HTML id attribute, important for label association."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},"aria-labelledby":{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},d={render:a=>e.jsxs(l,{"data-size":a["data-size"],children:[e.jsx(s,{id:"textarea-default-label",htmlFor:"textarea-default",children:"Label"}),e.jsx(t,{id:"textarea-default","aria-labelledby":"textarea-default-label",placeholder:"Skriv en lengre tekst her...",...a})]}),args:{name:"default-textarea",rows:4,"data-size":"md"}},i={render:a=>{const[b,r]=R.useState("Jeg vil ha Pizza");return e.jsxs(l,{"data-size":a["data-size"],children:[e.jsx(s,{id:"textarea-controlled-label",htmlFor:"textarea-controlled",children:"Kontroller meg!"}),e.jsx(t,{id:"textarea-controlled","aria-labelledby":"textarea-controlled-label",value:b,onChange:K=>r(K.target.value),rows:3,...a}),e.jsx(P,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),e.jsxs(W,{style:{margin:"0"},children:["Du har skrevet inn: ",b]})]})},args:{name:"controlled-textarea","data-size":"md"}},n={render:a=>e.jsxs(l,{"data-size":a["data-size"],children:[e.jsx(s,{id:"textarea-disabled-label",htmlFor:"textarea-disabled",children:"Deaktivert felt"}),e.jsx(t,{id:"textarea-disabled","aria-labelledby":"textarea-disabled-label",...a})]}),args:{name:"disabled-textarea",defaultValue:"Kan ikke redigeres",disabled:!0,rows:3,"data-size":"md"}},o={render:a=>e.jsxs(l,{"data-size":a["data-size"],children:[e.jsx(s,{id:"textarea-readonly-label",htmlFor:"textarea-readonly",children:"Kun lesbart felt"}),e.jsx(t,{id:"textarea-readonly","aria-labelledby":"textarea-readonly-label",...a})]}),args:{name:"readonly-textarea",defaultValue:"Kan ikke endres, men kan kopieres.",readOnly:!0,rows:3,"data-size":"md"}},x={render:a=>e.jsxs(l,{"data-size":a["data-size"],children:[e.jsx(s,{id:"textarea-maxlength-label",htmlFor:"textarea-maxlength",children:"Beskrivelse (maks 100 tegn)"}),e.jsx(t,{id:"textarea-maxlength","aria-labelledby":"textarea-maxlength-label",placeholder:"Start å skrive...",...a})]}),args:{name:"maxlength-textarea",maxLength:100,rows:4,"data-size":"md"},name:"With MaxLength"},c={name:"Test: Interaction",render:()=>e.jsxs(l,{children:[e.jsx(s,{id:"test-textarea-label",htmlFor:"test-textarea",children:"Test Textarea"}),e.jsx(t,{id:"test-textarea","aria-labelledby":"test-textarea-label",name:"test-textarea",rows:3})]}),play:async({canvasElement:a})=>{const r=M(a).getByRole("textbox",{name:/test textarea/i});u(r).toBeInTheDocument(),await H.type(r,"Multi-line text"),u(r).toHaveValue("Multi-line text")}},m={name:"Test: Disabled State",render:()=>e.jsxs(l,{children:[e.jsx(s,{id:"test-textarea-disabled-label",htmlFor:"test-textarea-disabled",children:"Disabled Textarea"}),e.jsx(t,{id:"test-textarea-disabled","aria-labelledby":"test-textarea-disabled-label",disabled:!0,defaultValue:"Cannot edit"})]}),play:async({canvasElement:a})=>{const r=M(a).getByRole("textbox",{name:/disabled textarea/i});u(r).toBeDisabled()}};var p,g,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-default-label" htmlFor="textarea-default">
        Label
      </Label>
      <Textarea id="textarea-default" aria-labelledby="textarea-default-label" placeholder="Skriv en lengre tekst her..." {...args} />
    </Field>,
  args: {
    name: 'default-textarea',
    rows: 4,
    'data-size': 'md'
  }
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,f,z;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [textValue, setTextValue] = useState('Jeg vil ha Pizza');
    return <Field data-size={args['data-size']}>
        <Label id="textarea-controlled-label" htmlFor="textarea-controlled">
          Kontroller meg!
        </Label>
        <Textarea id="textarea-controlled" aria-labelledby="textarea-controlled-label" value={textValue} onChange={e => setTextValue(e.target.value)} rows={3} {...args} />
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />
        <Paragraph style={{
        margin: '0'
      }}>
          Du har skrevet inn: {textValue}
        </Paragraph>
      </Field>;
  },
  args: {
    name: 'controlled-textarea',
    'data-size': 'md'
  }
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var v,T,F;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-disabled-label" htmlFor="textarea-disabled">
        Deaktivert felt
      </Label>
      <Textarea id="textarea-disabled" aria-labelledby="textarea-disabled-label" {...args} />
    </Field>,
  args: {
    name: 'disabled-textarea',
    defaultValue: "Kan ikke redigeres",
    disabled: true,
    rows: 3,
    'data-size': 'md'
  }
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var j,L,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-readonly-label" htmlFor="textarea-readonly">
        Kun lesbart felt
      </Label>
      <Textarea id="textarea-readonly" aria-labelledby="textarea-readonly-label" {...args} />
    </Field>,
  args: {
    name: 'readonly-textarea',
    defaultValue: "Kan ikke endres, men kan kopieres.",
    readOnly: true,
    rows: 3,
    'data-size': 'md'
  }
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var k,D,w;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']}>
      <Label id="textarea-maxlength-label" htmlFor="textarea-maxlength">
        Beskrivelse (maks 100 tegn)
      </Label>
      <Textarea id="textarea-maxlength" aria-labelledby="textarea-maxlength-label" placeholder="Start å skrive..." {...args} />
    </Field>,
  args: {
    name: 'maxlength-textarea',
    maxLength: 100,
    rows: 4,
    'data-size': 'md'
  },
  name: 'With MaxLength'
}`,...(w=(D=x.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var V,_,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Field>
      <Label id="test-textarea-label" htmlFor="test-textarea">Test Textarea</Label>
      <Textarea id="test-textarea" aria-labelledby="test-textarea-label" name="test-textarea" rows={3} />
    </Field>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: /test textarea/i
    });
    expect(textarea).toBeInTheDocument();

    // Type text
    await userEvent.type(textarea, 'Multi-line text');
    expect(textarea).toHaveValue('Multi-line text');
  }
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var B,C,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Test: Disabled State',
  render: () => <Field>
      <Label id="test-textarea-disabled-label" htmlFor="test-textarea-disabled">Disabled Textarea</Label>
      <Textarea id="test-textarea-disabled" aria-labelledby="test-textarea-disabled-label" disabled defaultValue="Cannot edit" />
    </Field>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: /disabled textarea/i
    });
    expect(textarea).toBeDisabled();
  }
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const J=["Default","Controlled","Disabled","ReadOnly","WithMaxLength","TestInteraction","TestDisabledState"],Y=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:d,Disabled:n,ReadOnly:o,TestDisabledState:m,TestInteraction:c,WithMaxLength:x,__namedExportsOrder:J,default:q},Symbol.toStringTag,{value:"Module"}));export{i as C,n as D,o as R,Y as T,x as W};
