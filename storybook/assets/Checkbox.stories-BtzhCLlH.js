import{r as u,j as n}from"./iframe--tL_cLjH.js";import{x as ue,m as be,V as pe}from"./tooltip-IPEz1hAh.js";const T=(e,t)=>{const r=e(),a=!!t(!0).length,l=!!t(!1).length;for(const s of r)s.indeterminate=l&&a,s.checked=!l&&a};function me(e){const{error:t,name:r,onChange:a,value:l=[],disabled:s,readOnly:le,required:re}=e||{},[O,w]=u.useState(l),se=u.useId(),M=u.useId(),R=u.useRef(new Set),E=u.useRef(new Set),D=u.useRef(new Map),V=h=>Array.from(R.current.values()).filter(S=>S.checked===h),B=()=>Array.from(E.current.values());return u.useEffect(()=>{T(B,V)},[O]),{value:O,setValue:w,getCheckboxProps:h=>{let S;if(e){const{onChange:o,error:c,...j}=e;S=j}const{allowIndeterminate:I=!1,ref:z=void 0,value:p="",...d}=typeof h=="string"?{value:h}:h||{},ce=o=>{if(o)(I?E:R).current.add(o),D.current.set(p,o),B().length&&T(B,V);else{const c=D.current.get(p);c&&(R.current.delete(c),E.current.delete(c),D.current.delete(p))}z&&(typeof z=="function"?z(o):z.current=o)},de=()=>{const o=Array.from(V(!0),({value:c})=>c);w(o),a==null||a(o,O)},ie=()=>{const o=D.current.get(p);if(!o)return;const c=!!o.checked;for(const j of V(!c))j.click()};return{...S,...d,"aria-describedby":`${t?M:""} ${d["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!t||d["aria-invalid"],checked:I?void 0:O.includes(p),name:d.name||r||se,onChange:o=>{var c;(c=d.onChange)==null||c.call(d,o),!o.defaultPrevented&&(I&&ie(),de())},ref:ce,value:p,disabled:s||d.disabled,readOnly:le||d.readOnly,required:re||d.required}},validationMessageProps:{children:t,hidden:!t,id:M}}}const i=ue,b=be,oe=me;i.displayName="Checkbox";b.displayName="Fieldset";const{expect:m,within:he,userEvent:P}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/Checkbox",component:i,tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label",defaultValue:"Checkbox label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"primary-color-red"},error:{control:"text",description:"Error message for field (often used with Fieldset)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1}}},f={name:"Example Default",args:{label:"Default Checkbox",value:"default"}},x={name:"Example with Description",args:{label:"Checkbox with Description",description:"This explains the checkbox choice.",value:"description"}},k={name:"Example Disabled",args:{label:"Disabled Checkbox",disabled:!0,value:"disabled",checked:!0}},g={name:"Example ReadOnly",args:{label:"Read Only Checkbox",readOnly:!0,value:"readonly",checked:!0}},y={name:"Example Group",render:e=>{const[t,r]=u.useState(["email"]),a=e.error?"Du må velge minst ett alternativ":void 0,{getCheckboxProps:l,validationMessageProps:s}=oe({name:"contact-preference",value:t,onChange:r,error:a});return n.jsxs(b,{children:[n.jsx(b.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),n.jsx(b.Description,{children:"Velg alle alternativene som er relevante for deg."}),n.jsx(i,{label:"E-post",...l("email"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),n.jsx(i,{label:"Telefon",...l("phone"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),n.jsx(i,{label:"SMS",...l("sms"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),a&&n.jsx(pe,{...s,children:a})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["primary-color-red","neutral"]}},args:{error:!1,disabled:!1,readOnly:!1,"data-size":"md","data-color":"primary-color-red"}},v={name:"Example Indeterminate",render:e=>{const[t,r]=u.useState(["content1","content3"]),a=["content1","content2","content3","content4"],{getCheckboxProps:l}=oe({name:"indeterminate-group",value:t,onChange:r});return n.jsxs(b,{children:[n.jsx(b.Legend,{children:"Select Items"}),n.jsx(i,{label:"Select All",...l({allowIndeterminate:!0}),"data-size":e["data-size"],"data-color":e["data-color"]}),n.jsx("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:a.map(s=>n.jsx(i,{label:s.charAt(0).toUpperCase()+s.slice(1),...l(s),"data-size":e["data-size"],"data-color":e["data-color"]},s))})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:!1},readOnly:{control:!1}},args:{"data-size":"md","data-color":"primary-color-red"}},C={name:"Test: Interaction",render:()=>n.jsxs(b,{children:[n.jsx(i,{label:"Option A",value:"a",name:"test-checkbox"}),n.jsx(i,{label:"Option B",value:"b",name:"test-checkbox"}),n.jsx(i,{label:"Disabled",value:"c",name:"test-checkbox",disabled:!0})]}),play:async({canvasElement:e})=>{const t=he(e),r=t.getByRole("checkbox",{name:/option a/i}),a=t.getByRole("checkbox",{name:/option b/i}),l=t.getByRole("checkbox",{name:/disabled/i});m(r).not.toBeChecked(),m(a).not.toBeChecked(),await P.click(r),m(r).toBeChecked(),await P.click(a),m(r).toBeChecked(),m(a).toBeChecked(),m(l).toBeDisabled()}},xe=["Default","WithDescription","Disabled","ReadOnly","CheckboxGroup","Indeterminate","TestInteraction"];var F,A,_;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Example Default',
  // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default'
  }
}`,...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var G,L,$;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Example with Description',
  // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description'
  }
}`,...($=(L=x.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var q,N,U;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Example Disabled',
  // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true
  }
}`,...(U=(N=k.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var W,H,K;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true
  }
}`,...(K=(H=g.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Y,J,Q;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      options: ['primary-color-red', 'neutral']
    }
  },
  args: {
    error: false,
    disabled: false,
    readOnly: false,
    'data-size': 'md',
    'data-color': 'primary-color-red'
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    'data-color': 'primary-color-red'
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ye=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:y,Default:f,Disabled:k,Indeterminate:v,ReadOnly:g,TestInteraction:C,WithDescription:x,__namedExportsOrder:xe,default:fe},Symbol.toStringTag,{value:"Module"}));export{ye as C,k as D,v as I,g as R,x as W,y as a};
