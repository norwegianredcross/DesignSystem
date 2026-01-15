import{r as o,j as r}from"./iframe-CQzEePbx.js";import{S as I}from"./index-BcJIqTYo.js";import{c as j}from"./lite-DaUVFjkg.js";import{H as v}from"./heading-DW71HPrp.js";import{a as b,L as H}from"./index-CBxhKnZ4.js";import{L as T}from"./link-CmBWPaiV.js";import{T as c}from"./textfield-31Mpsx07.js";const h=o.createContext({headingId:"heading",setHeadingId:()=>{}}),F=o.forwardRef(function({asChild:m,className:a,...u},f){const t=o.useId(),[i,k]=o.useState(t),L=m?I:"div";return r.jsx(h.Provider,{value:{headingId:i,setHeadingId:k},children:r.jsx(L,{tabIndex:-1,"aria-labelledby":i,className:j("ds-error-summary",a),ref:f,...u})})}),_=o.forwardRef(function({className:m,id:a,...u},f){const{headingId:t,setHeadingId:i}=o.useContext(h);return o.useEffect(()=>{a&&t!==a&&i(a)},[t,a,i]),r.jsx(v,{id:t,ref:f,...u})}),z=o.forwardRef(function({...m},a){return r.jsx(b,{ref:a,...m})}),C=o.forwardRef(function({...m},a){return r.jsx(T,{ref:a,"data-color":"neutral",...m})}),N=o.forwardRef(function({...m},a){return r.jsx(H.Unordered,{...m,ref:a})}),l=Object.assign(F,{Heading:_,Item:z,List:N,Link:C});l.Item.displayName="ErrorSummary.Item";l.Heading.displayName="ErrorSummary.Heading";l.List.displayName="ErrorSummary.List";l.Link.displayName="ErrorSummary.Link";const e=l;try{e.displayName="ErrorSummary",e.__docgenInfo={description:"",displayName:"ErrorSummary",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"ReactNode"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const R={title:"Components/ErrorSummary",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"ErrorSummary provides an overview of errors or omissions that need correction on a page or step."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links"},heading:{table:{disable:!0}}}},s={render:n=>r.jsxs(e,{...n,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-3",children:"E-post må være gyldig"})})]})]}),args:{"data-size":"md"}},d={render:n=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(c,{id:"textfield-error-1",label:"Fornavn",error:"Fornavn må være minst 2 tegn","aria-describedby":"errorsummary-heading"}),r.jsx(c,{id:"textfield-error-2",label:"Telefon",error:"Telefonnummer kan kun inneholde siffer","aria-describedby":"errorsummary-heading"}),r.jsxs(e,{...n,children:[r.jsx(e.Heading,{id:"errorsummary-heading",children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]}),args:{"data-size":"md"}};var y,p,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ErrorSummary {...args}>
      <ErrorSummary.Heading>
        For å gå videre må du rette opp følgende feil:
      </ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-1">
            Fødselsdato kan ikke være etter år 2005
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-2">
            Telefonnummer kan kun inneholde siffer
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-3">
            E-post må være gyldig
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>,
  args: {
    'data-size': 'md'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,E,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Textfield id="textfield-error-1" label="Fornavn" error="Fornavn må være minst 2 tegn" aria-describedby="errorsummary-heading" />
      <Textfield id="textfield-error-2" label="Telefon" error="Telefonnummer kan kun inneholde siffer" aria-describedby="errorsummary-heading" />
      <ErrorSummary {...args}>
        <ErrorSummary.Heading id="errorsummary-heading">
          For å gå videre må du rette opp følgende feil:
        </ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#textfield-error-1">
              Fornavn må være minst 2 tegn
            </ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#textfield-error-2">
              Telefonnummer kan kun inneholde siffer
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary>
    </div>,
  args: {
    'data-size': 'md'
  }
}`,...(x=(E=d.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const w=["Default","WithTextFields"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithTextFields:d,__namedExportsOrder:w,default:R},Symbol.toStringTag,{value:"Module"}));export{s as D,U as E,d as W,e as a};
