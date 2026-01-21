import{r as c,j as l}from"./iframe-J8gyvohF.js";import{C as re}from"./checkbox-BNHHK4XZ.js";import{F as ne}from"./index-2KYUinkv.js";import{V as se}from"./index-CXVMa6Vj.js";const F=(e,o)=>{const p=e(),t=!!o(!0).length,r=!!o(!1).length;for(const n of p)n.indeterminate=r&&t,n.checked=!r&&t};function de(e){const{error:o,name:p,onChange:t,value:r=[],disabled:n,readOnly:Y,required:Z}=e||{},[C,E]=c.useState(r),ee=c.useId(),I=c.useId(),D=c.useRef(new Set),O=c.useRef(new Set),v=c.useRef(new Map),V=f=>Array.from(D.current.values()).filter(R=>R.checked===f),S=()=>Array.from(O.current.values());return c.useEffect(()=>{F(S,V)},[C]),{value:C,setValue:E,getCheckboxProps:f=>{const R=typeof f=="string"?{value:f}:f||{},{allowIndeterminate:_=!1,ref:z=void 0,value:m="",...d}=R,ae=a=>{if(a)(_?O:D).current.add(a),v.current.set(m,a),S().length&&F(S,V);else{const s=v.current.get(m);s&&(D.current.delete(s),O.current.delete(s),v.current.delete(m))}z&&(typeof z=="function"?z(a):z.current=a)},te=()=>{const a=Array.from(V(!0),({value:s})=>s);E(a),t==null||t(a,C)},le=()=>{const a=v.current.get(m);if(!a)return;const s=!!a.checked;for(const oe of V(!s))oe.click()};return{...d,"aria-describedby":`${o?I:""} ${d["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!o||d["aria-invalid"],checked:_?void 0:C.includes(m),name:d.name||p||ee,onChange:a=>{var s;(s=d.onChange)==null||s.call(d,a),!a.defaultPrevented&&(_&&le(),te())},ref:ae,value:m,disabled:n||d.disabled,readOnly:Y||d.readOnly,required:Z||d.required}},validationMessageProps:{children:o,hidden:!o,id:I}}}const i=re,u=ne,X=de;i.displayName="Checkbox";u.displayName="Fieldset";try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:`Disables element
@note Avoid using if possible for accessibility purposes`,name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Toggle `readOnly`",name:"readOnly",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Optional aria-label",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description for field",name:"description",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Value of the `input` element",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},error:{defaultValue:null,description:"Error message for field",name:"error",required:!1,type:{name:"ReactNode"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="Fieldset",u.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const ce={title:"Components/Checkbox",component:i,tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label",defaultValue:"Checkbox label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},error:{control:"text",description:"Error message for field (often used with Fieldset)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1}}},b={name:"Example Default",args:{label:"Default Checkbox",value:"default"}},g={name:"Example with Description",args:{label:"Checkbox with Description",description:"This explains the checkbox choice.",value:"description"}},h={name:"Example Disabled",args:{label:"Disabled Checkbox",disabled:!0,value:"disabled",checked:!0}},y={name:"Example ReadOnly",args:{label:"Read Only Checkbox",readOnly:!0,value:"readonly",checked:!0}},x={name:"Example Group",render:e=>{const[o,p]=c.useState(["email"]),t=e.error?"Du må velge minst ett alternativ":void 0,{getCheckboxProps:r,validationMessageProps:n}=X({name:"contact-preference",value:o,onChange:p,error:t});return l.jsxs(u,{children:[l.jsx(u.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),l.jsx(u.Description,{children:"Velg alle alternativene som er relevante for deg."}),l.jsx(i,{label:"E-post",...r("email"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),l.jsx(i,{label:"Telefon",...r("phone"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),l.jsx(i,{label:"SMS",...r("sms"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t&&l.jsx(se,{...n,children:t})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["accent","neutral"]}},args:{error:!1,disabled:!1,readOnly:!1,"data-size":"md","data-color":"accent"}},k={name:"Example Indeterminate",render:e=>{const[o,p]=c.useState(["content1","content3"]),t=["content1","content2","content3","content4"],{getCheckboxProps:r}=X({name:"indeterminate-group",value:o,onChange:p});return l.jsxs(u,{children:[l.jsx(u.Legend,{children:"Select Items"}),l.jsx(i,{label:"Select All",...r({allowIndeterminate:!0}),"data-size":e["data-size"],"data-color":e["data-color"]}),l.jsx("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:t.map(n=>l.jsx(i,{label:n.charAt(0).toUpperCase()+n.slice(1),...r(n),"data-size":e["data-size"],"data-color":e["data-color"]},n))})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:!1},readOnly:{control:!1}},args:{"data-size":"md","data-color":"accent"}};var j,M,P;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example Default',
  // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default'
  }
}`,...(P=(M=b.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,w,T;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Example with Description',
  // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description'
  }
}`,...(T=(w=g.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var G,N,A;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Example Disabled',
  // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true
  }
}`,...(A=(N=h.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var L,$,W;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true
  }
}`,...(W=($=y.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var H,U,B;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(U=x.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ie=["Default","WithDescription","Disabled","ReadOnly","CheckboxGroup","Indeterminate"],be=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroup:x,Default:b,Disabled:h,Indeterminate:k,ReadOnly:y,WithDescription:g,__namedExportsOrder:ie,default:ce},Symbol.toStringTag,{value:"Module"}));export{be as C,h as D,k as I,y as R,g as W,x as a};
