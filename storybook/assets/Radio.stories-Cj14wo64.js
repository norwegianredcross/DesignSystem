import{r as h,j as e}from"./iframe-BbbzWVH0.js";import{F as Q,V as X}from"./index-9DJChKiy.js";import{I as Y}from"./input-ClOz1lfy.js";import{L as Z}from"./label-VJekyVLP.js";import{F as ee}from"./index-NNYvVTRs.js";function ae({error:a,readOnly:x,required:R,disabled:j,name:F,onChange:d,value:g=""}={}){const[t,f]=h.useState(g),b=h.useId(),M=h.useId(),_=F||M;return{value:t,setValue:f,getRadioProps:V=>{const U=typeof V=="string"?{value:V}:V,{ref:y=void 0,value:z="",...s}=U,H=n=>{n&&(n.checked=z===t),y&&(typeof y=="function"?y(n):y.current=n)},K=n=>{n.target.name===_&&f(v=>(d==null||d(n.target.value,v),n.target.value))};return{...s,name:_,"aria-describedby":`${a?b:""} ${s["aria-describedby"]||""}`.trim()||void 0,"aria-invalid":!!a||s["aria-invalid"],value:z,ref:H,required:R||s.required,readOnly:x||s.readOnly,disabled:j||s.disabled,onChange:n=>{var v;(v=s.onChange)==null||v.call(s,n),!n.defaultPrevented&&K(n)}}},validationMessageProps:{children:a,hidden:!a,id:b}}}const re=h.forwardRef(function({"data-size":x,className:R,style:j,children:F,label:d,description:g,error:t,...f},b){return e.jsxs(Q,{"data-size":x,className:R,style:j,children:[e.jsx(Y,{type:"radio",ref:b,...f}),!!d&&e.jsx(Z,{weight:"regular",children:d}),!!g&&e.jsx("div",{"data-field":"description",children:g}),!!t&&e.jsx(X,{children:t})]})}),r=re,l=ee,q=ae;try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:`Disables element
@note Avoid using if possible for accessibility purposes`,name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Toggle `readOnly`",name:"readOnly",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"Optional aria-label",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Radio label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description for field",name:"description",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Value of the `input` element",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},error:{defaultValue:null,description:"Error message for field",name:"error",required:!1,type:{name:"ReactNode"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="Fieldset",l.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}try{q.displayName="useRadioGroup",q.__docgenInfo={description:"",displayName:"useRadioGroup",props:{disabled:{defaultValue:null,description:"Set disabled state of all radios",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Shared error message for all radios",name:"error",required:!1,type:{name:"ReactNode"}},name:{defaultValue:{value:"string of auto-generated name"},description:"Name of all radios.",name:"name",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Set read only state of all radios",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Set required state of all radios",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Initial value of the group",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when selected radios changes",name:"onChange",required:!1,type:{name:"(nextValue: string, prevValue: string) => void"}}}}}catch{}const le={title:"Components/Radio",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Radio presents a set of mutually exclusive options. Use one Radio per option, grouped by the same name."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},disabled:{control:"boolean",description:"Disables the radio",defaultValue:!1},name:{control:"text",description:"Name used to group radios",defaultValue:"alternativ"},value:{control:"text",description:"Value of the option"},label:{control:"text",description:"Label shown next to the radio",defaultValue:"Ja"}}},i={render:a=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Er du over 18 år?"}),e.jsx(r,{...a,value:"ja",label:"Ja",name:"alternativ"}),e.jsx(r,{...a,value:"nei",label:"Nei",name:"alternativ"})]}),args:{"data-size":"md","data-color":"neutral"}},o={render:a=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Velg et alternativ"}),e.jsx(r,{...a,value:"a","aria-label":"Alternativ A",name:"aria-group"}),e.jsx(r,{...a,value:"b","aria-label":"Alternativ B",name:"aria-group"})]}),args:{"data-size":"md"},name:"With aria-label"},u={render:a=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Velg en frukt"}),e.jsx(r,{...a,value:"apple",label:"Eple",name:"frukt"}),e.jsx(r,{...a,value:"banana",label:"Banan",name:"frukt"}),e.jsx(r,{...a,value:"pear",label:"Pære",name:"frukt"})]}),args:{"data-size":"md"}},c={render:a=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Velg en farge *"}),e.jsx("p",{id:"radio-error-note",style:{color:"var(--ds-color-danger-500)",marginTop:4,marginBottom:8},children:"Du må velge en farge"}),e.jsx(r,{...a,value:"red",label:"Rød",name:"farge","aria-describedby":"radio-error-note"}),e.jsx(r,{...a,value:"green",label:"Grønn",name:"farge","aria-describedby":"radio-error-note"})]}),args:{"data-size":"md"}},m={render:a=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Velg en status"}),e.jsx(r,{...a,value:"on",label:"På",name:"status-ro",readOnly:!0,checked:!0}),e.jsx(r,{...a,value:"off",label:"Av",name:"status-ro",readOnly:!0})]}),args:{"data-size":"md"}},p={render:a=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Ja / Nei"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(r,{...a,value:"ja",label:"Ja",name:"inline"}),e.jsx(r,{...a,value:"nei",label:"Nei",name:"inline"})]})]}),args:{"data-size":"md"}};var L,N,S;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Er du over 18 år?</Fieldset.Legend>
      <Radio {...args} value="ja" label="Ja" name="alternativ" />
      <Radio {...args} value="nei" label="Nei" name="alternativ" />
    </Fieldset>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var O,D,k;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg et alternativ</Fieldset.Legend>
      <Radio {...args} value="a" aria-label="Alternativ A" name="aria-group" />
      <Radio {...args} value="b" aria-label="Alternativ B" name="aria-group" />
    </Fieldset>,
  args: {
    'data-size': 'md'
  },
  name: 'With aria-label'
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var C,I,A;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg en frukt</Fieldset.Legend>
      <Radio {...args} value="apple" label="Eple" name="frukt" />
      <Radio {...args} value="banana" label="Banan" name="frukt" />
      <Radio {...args} value="pear" label="Pære" name="frukt" />
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var E,G,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg en farge *</Fieldset.Legend>
      <p id="radio-error-note" style={{
      color: 'var(--ds-color-danger-500)',
      marginTop: 4,
      marginBottom: 8
    }}>
        Du må velge en farge
      </p>
      <Radio {...args} value="red" label="Rød" name="farge" aria-describedby="radio-error-note" />
      <Radio {...args} value="green" label="Grønn" name="farge" aria-describedby="radio-error-note" />
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var J,B,w;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Velg en status</Fieldset.Legend>
      <Radio {...args} value="on" label="På" name="status-ro" readOnly checked />
      <Radio {...args} value="off" label="Av" name="status-ro" readOnly />
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...(w=(B=m.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var T,W,$;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Fieldset>
      <Fieldset.Legend>Ja / Nei</Fieldset.Legend>
      <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Radio {...args} value="ja" label="Ja" name="inline" />
        <Radio {...args} value="nei" label="Nei" name="inline" />
      </div>
    </Fieldset>,
  args: {
    'data-size': 'md'
  }
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const ne=["Default","AriaLabel","Group","WithError","ReadOnly","Inline"],ue=Object.freeze(Object.defineProperty({__proto__:null,AriaLabel:o,Default:i,Group:u,Inline:p,ReadOnly:m,WithError:c,__namedExportsOrder:ne,default:le},Symbol.toStringTag,{value:"Module"}));export{i as D,ue as R};
