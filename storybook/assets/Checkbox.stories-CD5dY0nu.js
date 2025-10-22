import{r as c,j as l}from"./iframe-BOPNQRcS.js";import{C as oe}from"./checkbox-CDP8q2DU.js";import{F as ne}from"./index-IoOU__L7.js";import{V as se}from"./index-BRMaQx2L.js";import"./preload-helper-Dp1pzeXC.js";import"./input-DdoI0z8I.js";import"./lite-DaUVFjkg.js";import"./label-CTFrPS6l.js";import"./index-6VuQ_pOC.js";import"./paragraph-BvS0rGNr.js";import"./use-merge-refs-C-_QIizQ.js";const F=(e,r)=>{const p=e(),t=!!r(!0).length,o=!!r(!1).length;for(const n of p)n.indeterminate=o&&t,n.checked=!o&&t};function de(e){const{error:r,name:p,onChange:t,value:o=[],disabled:n,readOnly:Y,required:Z}=e||{},[b,I]=c.useState(o),ee=c.useId(),_=c.useId(),D=c.useRef(new Set),O=c.useRef(new Set),g=c.useRef(new Map),h=f=>Array.from(D.current.values()).filter(R=>R.checked===f),S=()=>Array.from(O.current.values());return c.useEffect(()=>{F(S,h)},[b]),{value:b,setValue:I,getCheckboxProps:f=>{const R=typeof f=="string"?{value:f}:f||{},{allowIndeterminate:E=!1,ref:y=void 0,value:m="",...d}=R,ae=a=>{if(a)(E?O:D).current.add(a),g.current.set(m,a),S().length&&F(S,h);else{const s=g.current.get(m);s&&(D.current.delete(s),O.current.delete(s),g.current.delete(m))}y&&(typeof y=="function"?y(a):y.current=a)},te=()=>{const a=Array.from(h(!0),({value:s})=>s);I(a),t==null||t(a,b)},le=()=>{const a=g.current.get(m);if(!a)return;const s=!!a.checked;for(const re of h(!s))re.click()};return{...d,"aria-describedby":`${r?_:""} ${d["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!r||d["aria-invalid"],checked:E?void 0:b.includes(m),name:d.name||p||ee,onChange:a=>{var s;(s=d.onChange)==null||s.call(d,a),!a.defaultPrevented&&(E&&le(),te())},ref:ae,value:m,disabled:n||d.disabled,readOnly:Y||d.readOnly,required:Z||d.required}},validationMessageProps:{children:r,hidden:!r,id:_}}}const i=oe,u=ne,X=de;i.displayName="Checkbox";u.displayName="Fieldset";try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:`Disables element
@note Avoid using if possible for accessibility purposes`,name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Toggle `readOnly`",name:"readOnly",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Optional aria-label",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Checkbox label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description for field",name:"description",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Value of the `input` element",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},error:{defaultValue:null,description:"Error message for field",name:"error",required:!1,type:{name:"ReactNode"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="Fieldset",u.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const ke={title:"Components/Checkbox",component:i,tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label",defaultValue:"Checkbox label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},value:{control:"text",description:"Value of the input element"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},error:{control:"text",description:"Error message for field (often used with Fieldset)"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},checked:{control:!1},defaultChecked:{control:!1}}},x={name:"Example Default",args:{label:"Default Checkbox",value:"default"}},k={name:"Example with Description",args:{label:"Checkbox with Description",description:"This explains the checkbox choice.",value:"description"}},C={name:"Example Disabled",args:{label:"Disabled Checkbox",disabled:!0,value:"disabled",checked:!0}},v={name:"Example ReadOnly",args:{label:"Read Only Checkbox",readOnly:!0,value:"readonly",checked:!0}},V={name:"Example Group",render:e=>{const[r,p]=c.useState(["email"]),t=e.error?"Du må velge minst ett alternativ":void 0,{getCheckboxProps:o,validationMessageProps:n}=X({name:"contact-preference",value:r,onChange:p,error:t});return l.jsxs(u,{children:[l.jsx(u.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),l.jsx(u.Description,{children:"Velg alle alternativene som er relevante for deg."}),l.jsx(i,{label:"E-post",...o("email"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),l.jsx(i,{label:"Telefon",...o("phone"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),l.jsx(i,{label:"SMS",...o("sms"),"data-size":e["data-size"],"data-color":e["data-color"],disabled:e.disabled,readOnly:e.readOnly}),t&&l.jsx(se,{...n,children:t})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"]},"data-color":{control:"select",options:["accent","neutral"]}},args:{error:!1,disabled:!1,readOnly:!1,"data-size":"md","data-color":"accent"}},z={name:"Example Indeterminate",render:e=>{const[r,p]=c.useState(["content1","content3"]),t=["content1","content2","content3","content4"],{getCheckboxProps:o}=X({name:"indeterminate-group",value:r,onChange:p});return l.jsxs(u,{children:[l.jsx(u.Legend,{children:"Select Items"}),l.jsx(i,{label:"Select All",...o({allowIndeterminate:!0}),"data-size":e["data-size"],"data-color":e["data-color"]}),l.jsx("div",{style:{marginLeft:"20px",display:"flex",flexDirection:"column"},children:t.map(n=>l.jsx(i,{label:n.charAt(0).toUpperCase()+n.slice(1),...o(n),"data-size":e["data-size"],"data-color":e["data-color"]},n))})]})},argTypes:{label:{control:!1},description:{control:!1},value:{control:!1},checked:{control:!1},defaultChecked:{control:!1},error:{control:!1},disabled:{control:!1},readOnly:{control:!1}},args:{"data-size":"md","data-color":"accent"}};var q,M,P;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Example Default',
  // Renamed
  args: {
    label: 'Default Checkbox',
    value: 'default'
  }
}`,...(P=(M=x.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,w,T;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example with Description',
  // Renamed
  args: {
    label: 'Checkbox with Description',
    description: 'This explains the checkbox choice.',
    value: 'description'
  }
}`,...(T=(w=k.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var G,N,A;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Example Disabled',
  // Renamed
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    value: 'disabled',
    checked: true
  }
}`,...(A=(N=C.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var L,$,H;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example ReadOnly',
  // Renamed
  args: {
    label: 'Read Only Checkbox',
    readOnly: true,
    value: 'readonly',
    checked: true
  }
}`,...(H=($=v.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var U,W,B;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(W=V.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var J,K,Q;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ce=["Default","WithDescription","Disabled","ReadOnly","CheckboxGroup","Indeterminate"];export{V as CheckboxGroup,x as Default,C as Disabled,z as Indeterminate,v as ReadOnly,k as WithDescription,Ce as __namedExportsOrder,ke as default};
