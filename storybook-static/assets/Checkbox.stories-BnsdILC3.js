import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-D4lIrffr.js";import{C as le}from"./Checkbox-Ea4y-weY.js";import{F as se}from"./index-DkoJrbVQ.js";import{V as ne}from"./index-CMMlhluM.js";import"./Input-FgPaU4ty.js";import"./lite-DaUVFjkg.js";import"./Label-DnboOLtM.js";import"./index-Cb-ENzfG.js";import"./Paragraph-CJciD5B6.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const M=(e,o)=>{const i=e(),t=!!o(!0).length,l=!!o(!1).length;for(const s of i)s.indeterminate=l&&t,s.checked=!l&&t};function de(e){const{error:o,name:i,onChange:t,value:l=[],disabled:s,readOnly:Y,required:Z}=e||{},[b,I]=c.useState(l),ee=c.useId(),F=c.useId(),D=c.useRef(new Set),z=c.useRef(new Set),h=c.useRef(new Map),g=f=>Array.from(D.current.values()).filter(R=>R.checked===f),S=()=>Array.from(z.current.values());return c.useEffect(()=>{M(S,g)},[b]),{value:b,setValue:I,getCheckboxProps:f=>{const R=typeof f=="string"?{value:f}:f||{},{allowIndeterminate:E=!1,ref:x=void 0,value:p="",...d}=R,ae=a=>{if(a)(E?z:D).current.add(a),h.current.set(p,a),S().length&&M(S,g);else{const n=h.current.get(p);n&&(D.current.delete(n),z.current.delete(n),h.current.delete(p))}x&&(typeof x=="function"?x(a):x.current=a)},te=()=>{const a=Array.from(g(!0),({value:n})=>n);I(a),t==null||t(a,b)},re=()=>{const a=h.current.get(p);if(!a)return;const n=!!a.checked;for(const oe of g(!n))oe.click()};return{...d,"aria-describedby":`${o?F:""} ${d["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!o||d["aria-invalid"],checked:E?void 0:b.includes(p),name:d.name||i||ee,onChange:a=>{var n;(n=d.onChange)==null||n.call(d,a),!a.defaultPrevented&&(E&&re(),te())},ref:ae,value:p,disabled:s||d.disabled,readOnly:Y||d.readOnly,required:Z||d.required}},validationMessageProps:{children:o,hidden:!o,id:F}}}const u=le,m=se,X=de;u.displayName="Checkbox";m.displayName="Fieldset";const ve={title:"Components/Checkbox",component:u,tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label",defaultValue:"Checkbox label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},error:{control:"text",description:"Error message for field (often used with Fieldset)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1}}},k={name:"Example Default",args:{label:"Default Checkbox",value:"default"}},y={name:"Example with Description",args:{label:"Checkbox with Description",description:"This explains the checkbox choice.",value:"description"}},C={name:"Example Disabled",args:{label:"Disabled Checkbox",disabled:!0,value:"disabled",checked:!0}},v={name:"Example ReadOnly",args:{label:"Read Only Checkbox",readOnly:!0,value:"readonly",checked:!0}},V={name:"Example Group",render:e=>{const[o,i]=c.useState(["email"]),t=e.error?"Du må velge minst ett alternativ":void 0,{getCheckboxProps:l,validationMessageProps:s}=X({name:"contact-preference",value:o,onChange:i,error:t});return r.jsxs(m,{children:[r.jsx(m.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),r.jsx(m.Description,{children:"Velg alle alternativene som er relevante for deg."}),r.jsx(u,{label:"E-post",...l("email"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),r.jsx(u,{label:"Telefon",...l("phone"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),r.jsx(u,{label:"SMS",...l("sms"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t&&r.jsx(ne,{...s,children:t})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["accent","neutral"]}},args:{error:!1,disabled:!1,readOnly:!1,"data-size":"md","data-color":"accent"}},O={name:"Example Indeterminate",render:e=>{const[o,i]=c.useState(["content1","content3"]),t=["content1","content2","content3","content4"],{getCheckboxProps:l}=X({name:"indeterminate-group",value:o,onChange:i});return r.jsxs(m,{children:[r.jsx(m.Legend,{children:"Select Items"}),r.jsx(u,{label:"Select All",...l({allowIndeterminate:!0}),"data-size":e["data-size"],"data-color":e["data-color"]}),r.jsx("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:t.map(s=>r.jsx(u,{label:s.charAt(0).toUpperCase()+s.slice(1),...l(s),"data-size":e["data-size"],"data-color":e["data-color"]},s))})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:!1},readOnly:{control:!1}},args:{"data-size":"md","data-color":"accent"}};var P,j,w;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Example Default',
  // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default'
  }
}`,...(w=(j=k.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var G,T,L;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Example with Description',
  // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description'
  }
}`,...(L=(T=y.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var A,$,q;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Example Disabled',
  // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true
  }
}`,...(q=($=C.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var N,H,U;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true
  }
}`,...(U=(H=v.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var W,_,B;V.parameters={...V.parameters,docs:{...(W=V.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    return <Fieldset>\r
        <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>\r
        <Fieldset.Description>\r
          Velg alle alternativene som er relevante for deg.\r
        </Fieldset.Description>\r
        <Checkbox label="E-post" {...getCheckboxProps('email')} data-size={args['data-size']} data-color={args['data-color']} disabled={args.disabled} readOnly={args.readOnly} />\r
        <Checkbox label="Telefon" {...getCheckboxProps('phone')} data-size={args['data-size']} data-color={args['data-color']} disabled={args.disabled} readOnly={args.readOnly} />\r
        <Checkbox label="SMS" {...getCheckboxProps('sms')} data-size={args['data-size']} data-color={args['data-color']} disabled={args.disabled} readOnly={args.readOnly} />\r
        {errorMessage && <ValidationMessage {...validationMessageProps}>\r
            {errorMessage}\r
          </ValidationMessage>}\r
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
}`,...(B=(_=V.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var J,K,Q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    return <Fieldset>\r
        <Fieldset.Legend>Select Items</Fieldset.Legend>\r
        <Checkbox label="Select All" {...getCheckboxProps({
        allowIndeterminate: true
      })} data-size={args['data-size']} data-color={args['data-color']} />\r
        <div style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>\r
          {allValues.map(val => <Checkbox key={val} label={val.charAt(0).toUpperCase() + val.slice(1)} {...getCheckboxProps(val)} data-size={args['data-size']} data-color={args['data-color']} />)}\r
        </div>\r
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
}`,...(Q=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ve=["Default","WithDescription","Disabled","ReadOnly","CheckboxGroup","Indeterminate"];export{V as CheckboxGroup,k as Default,C as Disabled,O as Indeterminate,v as ReadOnly,y as WithDescription,Ve as __namedExportsOrder,ve as default};
