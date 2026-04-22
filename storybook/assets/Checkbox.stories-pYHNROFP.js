import{r as u,j as t}from"./iframe-Bb1XchRN.js";import{W as ue,s as pe,V as me}from"./tooltip-DD-oADH_.js";const w=(e,l)=>{const s=e(),a=!!l(!0).length,n=!!l(!1).length;for(const c of s)c.indeterminate=n&&a,c.checked=!n&&a};function be(e){const{error:l,name:s,onChange:a,value:n=[],disabled:c,readOnly:oe,required:ne}=e||{},[V,I]=u.useState(n),se=u.useId(),j=u.useId(),S=u.useRef(new Set),R=u.useRef(new Set),D=u.useRef(new Map),O=f=>Array.from(S.current.values()).filter(_=>_.checked===f),E=()=>Array.from(R.current.values());return u.useEffect(()=>{w(E,O)},[V]),{value:V,setValue:I,getCheckboxProps:f=>{const _=typeof f=="string"?{value:f}:f||{},{allowIndeterminate:B=!1,ref:z=void 0,value:m="",...i}=_,re=o=>{if(o)(B?R:S).current.add(o),D.current.set(m,o),E().length&&w(E,O);else{const d=D.current.get(m);d&&(S.current.delete(d),R.current.delete(d),D.current.delete(m))}z&&(typeof z=="function"?z(o):z.current=o)},ce=()=>{const o=Array.from(O(!0),({value:d})=>d);I(o),a==null||a(o,V)},de=()=>{const o=D.current.get(m);if(!o)return;const d=!!o.checked;for(const ie of O(!d))ie.click()};return{...i,"aria-describedby":`${l?j:""} ${i["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!l||i["aria-invalid"],checked:B?void 0:V.includes(m),name:i.name||s||se,onChange:o=>{var d;(d=i.onChange)==null||d.call(i,o),!o.defaultPrevented&&(B&&de(),ce())},ref:re,value:m,disabled:c||i.disabled,readOnly:oe||i.readOnly,required:ne||i.required}},validationMessageProps:{children:l,hidden:!l,id:j}}}const r=ue,p=pe,le=be;r.displayName="Checkbox";p.displayName="Fieldset";try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:`Disables element
@note Avoid using if possible for accessibility purposes`,name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Toggle `readOnly`",name:"readOnly",required:!1,type:{name:"boolean"}},"data-indeterminate":{defaultValue:{value:"false"},description:"Indeterminate state for checkbox inputs\nOnly works when used inside `Field` component",name:"data-indeterminate",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Optional aria-label",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description for field",name:"description",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Value of the `input` element",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},error:{defaultValue:null,description:"Error message for field",name:"error",required:!1,type:{name:"ReactNode"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="Fieldset",p.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const{expect:b,within:fe,userEvent:F}=__STORYBOOK_MODULE_TEST__,he={title:"Components/Checkbox",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label",defaultValue:"Checkbox label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},error:{control:"text",description:"Error message for field (often used with Fieldset)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1}}},h={name:"Example Default",args:{label:"Default Checkbox",value:"default"}},g={name:"Example with Description",args:{label:"Checkbox with Description",description:"This explains the checkbox choice.",value:"description"}},x={name:"Example Disabled",args:{label:"Disabled Checkbox",disabled:!0,value:"disabled",checked:!0}},k={name:"Example ReadOnly",args:{label:"Read Only Checkbox",readOnly:!0,value:"readonly",checked:!0}},y={name:"Example Group",render:e=>{const[l,s]=u.useState(["email"]),a=e.error?"Du må velge minst ett alternativ":void 0,{getCheckboxProps:n,validationMessageProps:c}=le({name:"contact-preference",value:l,onChange:s,error:a});return t.jsxs(p,{children:[t.jsx(p.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),t.jsx(p.Description,{children:"Velg alle alternativene som er relevante for deg."}),t.jsx(r,{label:"E-post",...n("email"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t.jsx(r,{label:"Telefon",...n("phone"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t.jsx(r,{label:"SMS",...n("sms"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),a&&t.jsx(me,{...c,children:a})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["accent","neutral"]}},args:{error:!1,disabled:!1,readOnly:!1,"data-size":"md","data-color":"accent"}},C={name:"Example Indeterminate",render:e=>{const[l,s]=u.useState(["content1","content3"]),a=["content1","content2","content3","content4"],{getCheckboxProps:n}=le({name:"indeterminate-group",value:l,onChange:s});return t.jsxs(p,{children:[t.jsx(p.Legend,{children:"Select Items"}),t.jsx(r,{label:"Select All",...n({allowIndeterminate:!0}),"data-size":e["data-size"],"data-color":e["data-color"]}),t.jsx("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:a.map(c=>t.jsx(r,{label:c.charAt(0).toUpperCase()+c.slice(1),...n(c),"data-size":e["data-size"],"data-color":e["data-color"]},c))})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:!1},readOnly:{control:!1}},args:{"data-size":"md","data-color":"accent"}},v={name:"Test: Interaction",render:()=>t.jsxs(p,{children:[t.jsx(r,{label:"Option A",value:"a",name:"test-checkbox"}),t.jsx(r,{label:"Option B",value:"b",name:"test-checkbox"}),t.jsx(r,{label:"Disabled",value:"c",name:"test-checkbox",disabled:!0})]}),play:async({canvasElement:e})=>{const l=fe(e),s=l.getByRole("checkbox",{name:/option a/i}),a=l.getByRole("checkbox",{name:/option b/i}),n=l.getByRole("checkbox",{name:/disabled/i});b(s).not.toBeChecked(),b(a).not.toBeChecked(),await F.click(s),b(s).toBeChecked(),await F.click(a),b(s).toBeChecked(),b(a).toBeChecked(),b(n).toBeDisabled()}};var T,M,q;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Example Default',
  // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default'
  }
}`,...(q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var A,P,G;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Example with Description',
  // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description'
  }
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var N,L,W;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Example Disabled',
  // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true
  }
}`,...(W=(L=x.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,U,H;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true
  }
}`,...(H=(U=k.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var K,Y,J;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Example Group',
  // Renamed
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['email']);
    const errorMessage = args.error ? 'Du må velge minst ett alternativ' : undefined;
    const {
      getCheckboxProps,
      validationMessageProps
    } = useCheckboxGroup({
      name: 'contact-preference',
      value: selectedValues,
      onChange: setSelectedValues,
      error: errorMessage
    });
    return <Fieldset>
        <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
        <Fieldset.Description>
          Velg alle alternativene som er relevante for deg.
        </Fieldset.Description>
        <Checkbox label="E-post" {...getCheckboxProps('email')} data-size={args['data-size']} data-color={args['data-color']} disabled={args.disabled} readOnly={args.readOnly} />
        <Checkbox label="Telefon" {...getCheckboxProps('phone')} data-size={args['data-size']} data-color={args['data-color']} disabled={args.disabled} readOnly={args.readOnly} />
        <Checkbox label="SMS" {...getCheckboxProps('sms')} data-size={args['data-size']} data-color={args['data-color']} disabled={args.disabled} readOnly={args.readOnly} />
        {errorMessage && <ValidationMessage {...validationMessageProps}>
            {errorMessage}
          </ValidationMessage>}
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
      control: 'boolean',
      defaultValue: false
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
    error: false,
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'accent'
  }
}`,...(J=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Example Indeterminate',
  // Renamed
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['content1', 'content3']);
    const allValues = ['content1', 'content2', 'content3', 'content4'];
    const {
      getCheckboxProps
    } = useCheckboxGroup({
      name: 'indeterminate-group',
      value: selectedValues,
      onChange: setSelectedValues
    });
    return <Fieldset>
        <Fieldset.Legend>Select Items</Fieldset.Legend>
        <Checkbox label="Select All" {...getCheckboxProps({
        allowIndeterminate: true
      })} data-size={args['data-size']} data-color={args['data-color']} />
        <div style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
          {allValues.map(val => <Checkbox key={val} label={val.charAt(0).toUpperCase() + val.slice(1)} {...getCheckboxProps(val)} data-size={args['data-size']} data-color={args['data-color']} />)}
        </div>
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
      control: false
    },
    readOnly: {
      control: false
    }
  },
  args: {
    'data-size': 'md',
    'data-color': 'accent'
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Fieldset>
      <Checkbox label="Option A" value="a" name="test-checkbox" />
      <Checkbox label="Option B" value="b" name="test-checkbox" />
      <Checkbox label="Disabled" value="c" name="test-checkbox" disabled />
    </Fieldset>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Get all checkboxes
    const checkboxA = canvas.getByRole('checkbox', {
      name: /option a/i
    });
    const checkboxB = canvas.getByRole('checkbox', {
      name: /option b/i
    });
    const checkboxDisabled = canvas.getByRole('checkbox', {
      name: /disabled/i
    });

    // Initially unchecked
    expect(checkboxA).not.toBeChecked();
    expect(checkboxB).not.toBeChecked();

    // Click toggles checked
    await userEvent.click(checkboxA);
    expect(checkboxA).toBeChecked();

    // Multiple checkboxes can be checked independently
    await userEvent.click(checkboxB);
    expect(checkboxA).toBeChecked();
    expect(checkboxB).toBeChecked();

    // Disabled checkbox should not be clickable
    expect(checkboxDisabled).toBeDisabled();
  }
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const ge=["Default","WithDescription","Disabled","ReadOnly","CheckboxGroup","Indeterminate","TestInteraction"],ye=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:y,Default:h,Disabled:x,Indeterminate:C,ReadOnly:k,TestInteraction:v,WithDescription:g,__namedExportsOrder:ge,default:he},Symbol.toStringTag,{value:"Module"}));export{ye as C,x as D,C as I,k as R,g as W,y as a};
