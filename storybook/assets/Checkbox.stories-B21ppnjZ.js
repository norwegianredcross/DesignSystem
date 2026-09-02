import{r as u,j as t}from"./iframe-Cr0d-POo.js";import{x as ue,m as pe,V as be}from"./tooltip-DrR4BEE7.js";const M=(e,o)=>{const s=e(),a=!!o(!0).length,r=!!o(!1).length;for(const n of s)n.indeterminate=r&&a,n.checked=!r&&a};function me(e){const{error:o,name:s,onChange:a,value:r=[],disabled:n,readOnly:le,required:re}=e||{},[O,j]=u.useState(r),se=u.useId(),w=u.useId(),z=u.useRef(new Set),R=u.useRef(new Set),D=u.useRef(new Map),V=h=>Array.from(z.current.values()).filter(B=>B.checked===h),E=()=>Array.from(R.current.values());return u.useEffect(()=>{M(E,V)},[O]),{value:O,setValue:j,getCheckboxProps:h=>{const B=typeof h=="string"?{value:h}:h||{},{allowIndeterminate:I=!1,ref:S=void 0,value:b="",...d}=B,ne=l=>{if(l)(I?R:z).current.add(l),D.current.set(b,l),E().length&&M(E,V);else{const c=D.current.get(b);c&&(z.current.delete(c),R.current.delete(c),D.current.delete(b))}S&&(typeof S=="function"?S(l):S.current=l)},ce=()=>{const l=Array.from(V(!0),({value:c})=>c);j(l),a==null||a(l,O)},de=()=>{const l=D.current.get(b);if(!l)return;const c=!!l.checked;for(const ie of V(!c))ie.click()};return{...d,"aria-describedby":`${o?w:""} ${d["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!o||d["aria-invalid"],checked:I?void 0:O.includes(b),name:d.name||s||se,onChange:l=>{var c;(c=d.onChange)==null||c.call(d,l),!l.defaultPrevented&&(I&&de(),ce())},ref:ne,value:b,disabled:n||d.disabled,readOnly:le||d.readOnly,required:re||d.required}},validationMessageProps:{children:o,hidden:!o,id:w}}}const i=ue,p=pe,oe=me;i.displayName="Checkbox";p.displayName="Fieldset";const{expect:m,within:he,userEvent:T}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/Checkbox",component:i,tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label",defaultValue:"Checkbox label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"primary-color-red"},error:{control:"text",description:"Error message for field (often used with Fieldset)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1}}},f={name:"Example Default",args:{label:"Default Checkbox",value:"default"}},x={name:"Example with Description",args:{label:"Checkbox with Description",description:"This explains the checkbox choice.",value:"description"}},k={name:"Example Disabled",args:{label:"Disabled Checkbox",disabled:!0,value:"disabled",checked:!0}},g={name:"Example ReadOnly",args:{label:"Read Only Checkbox",readOnly:!0,value:"readonly",checked:!0}},y={name:"Example Group",render:e=>{const[o,s]=u.useState(["email"]),a=e.error?"Du må velge minst ett alternativ":void 0,{getCheckboxProps:r,validationMessageProps:n}=oe({name:"contact-preference",value:o,onChange:s,error:a});return t.jsxs(p,{children:[t.jsx(p.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),t.jsx(p.Description,{children:"Velg alle alternativene som er relevante for deg."}),t.jsx(i,{label:"E-post",...r("email"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t.jsx(i,{label:"Telefon",...r("phone"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t.jsx(i,{label:"SMS",...r("sms"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),a&&t.jsx(be,{...n,children:a})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["primary-color-red","neutral"]}},args:{error:!1,disabled:!1,readOnly:!1,"data-size":"md","data-color":"primary-color-red"}},C={name:"Example Indeterminate",render:e=>{const[o,s]=u.useState(["content1","content3"]),a=["content1","content2","content3","content4"],{getCheckboxProps:r}=oe({name:"indeterminate-group",value:o,onChange:s});return t.jsxs(p,{children:[t.jsx(p.Legend,{children:"Select Items"}),t.jsx(i,{label:"Select All",...r({allowIndeterminate:!0}),"data-size":e["data-size"],"data-color":e["data-color"]}),t.jsx("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:a.map(n=>t.jsx(i,{label:n.charAt(0).toUpperCase()+n.slice(1),...r(n),"data-size":e["data-size"],"data-color":e["data-color"]},n))})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:!1},readOnly:{control:!1}},args:{"data-size":"md","data-color":"primary-color-red"}},v={name:"Test: Interaction",render:()=>t.jsxs(p,{children:[t.jsx(i,{label:"Option A",value:"a",name:"test-checkbox"}),t.jsx(i,{label:"Option B",value:"b",name:"test-checkbox"}),t.jsx(i,{label:"Disabled",value:"c",name:"test-checkbox",disabled:!0})]}),play:async({canvasElement:e})=>{const o=he(e),s=o.getByRole("checkbox",{name:/option a/i}),a=o.getByRole("checkbox",{name:/option b/i}),r=o.getByRole("checkbox",{name:/disabled/i});m(s).not.toBeChecked(),m(a).not.toBeChecked(),await T.click(s),m(s).toBeChecked(),await T.click(a),m(s).toBeChecked(),m(a).toBeChecked(),m(r).toBeDisabled()}};var F,P,A;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Example Default',
  // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default'
  }
}`,...(A=(P=f.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,G,L;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Example with Description',
  // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description'
  }
}`,...(L=(G=x.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var $,q,N;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Example Disabled',
  // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true
  }
}`,...(N=(q=k.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var U,W,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true
  }
}`,...(H=(W=g.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var K,Y,J;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    'data-color': 'primary-color-red'
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
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const xe=["Default","WithDescription","Disabled","ReadOnly","CheckboxGroup","Indeterminate","TestInteraction"],ye=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:y,Default:f,Disabled:k,Indeterminate:C,ReadOnly:g,TestInteraction:v,WithDescription:x,__namedExportsOrder:xe,default:fe},Symbol.toStringTag,{value:"Module"}));export{ye as C,k as D,C as I,g as R,x as W,y as a};
