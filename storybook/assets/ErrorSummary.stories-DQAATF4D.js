import{r as o,j as r}from"./iframe-BLVfJeVr.js";import{S as I}from"./index-wq-Lg38G.js";import{c as j}from"./lite-DaUVFjkg.js";import{H as v}from"./heading-DwqgTGUW.js";import{L as b,a as H}from"./index-Chpa4jzh.js";import{L as T}from"./link-CKtqm4FH.js";import{T as c}from"./textfield-DyPgGfEc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bo5gsf2X.js";import"./use-merge-refs-D9wxmgb7.js";import"./paragraph-DonUECAD.js";import"./input-CbRltkxl.js";import"./label-CgdpTkn_.js";import"./textarea-DwQWAvnh.js";const h=o.createContext({headingId:"heading",setHeadingId:()=>{}}),F=o.forwardRef(function({asChild:n,className:a,...u},f){const t=o.useId(),[i,k]=o.useState(t),L=n?I:"div";return r.jsx(h.Provider,{value:{headingId:i,setHeadingId:k},children:r.jsx(L,{tabIndex:-1,"aria-labelledby":i,className:j("ds-error-summary",a),ref:f,...u})})}),C=o.forwardRef(function({className:n,id:a,...u},f){const{headingId:t,setHeadingId:i}=o.useContext(h);return o.useEffect(()=>{a&&t!==a&&i(a)},[t,a,i]),r.jsx(v,{id:t,ref:f,...u})}),z=o.forwardRef(function({...n},a){return r.jsx(b,{ref:a,...n})}),_=o.forwardRef(function({...n},a){return r.jsx(T,{ref:a,"data-color":"neutral",...n})}),N=o.forwardRef(function({...n},a){return r.jsx(H.Unordered,{...n,ref:a})}),s=Object.assign(F,{Heading:C,Item:z,List:N,Link:_});s.Item.displayName="ErrorSummary.Item";s.Heading.displayName="ErrorSummary.Heading";s.List.displayName="ErrorSummary.List";s.Link.displayName="ErrorSummary.Link";const e=s;try{e.displayName="ErrorSummary",e.__docgenInfo={description:"",displayName:"ErrorSummary",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"ReactNode"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const J={title:"Components/ErrorSummary",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"ErrorSummary provides an overview of errors or omissions that need correction on a page or step."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links"},heading:{table:{disable:!0}}}},d={render:m=>r.jsxs(e,{...m,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-3",children:"E-post må være gyldig"})})]})]}),args:{"data-size":"md"}},l={render:m=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(c,{id:"textfield-error-1",label:"Fornavn",error:"Fornavn må være minst 2 tegn","aria-describedby":"errorsummary-heading"}),r.jsx(c,{id:"textfield-error-2",label:"Telefon",error:"Telefonnummer kan kun inneholde siffer","aria-describedby":"errorsummary-heading"}),r.jsxs(e,{...m,children:[r.jsx(e.Heading,{id:"errorsummary-heading",children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]}),args:{"data-size":"md"}};var y,p,g;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(p=d.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,E,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const K=["Default","WithTextFields"];export{d as Default,l as WithTextFields,K as __namedExportsOrder,J as default};
