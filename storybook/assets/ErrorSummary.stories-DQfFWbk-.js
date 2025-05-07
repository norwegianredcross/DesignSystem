import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./index-Cb-ENzfG.js";import{c as H}from"./lite-DaUVFjkg.js";import{r as o}from"./index-D4lIrffr.js";import{H as T}from"./Heading-BGOStg1T.js";import{a as F,L as w}from"./index-DhyOHtFc.js";import{L as C}from"./Link-0v2GXfqz.js";import{T as y}from"./Textfield-BbSKMBlZ.js";import"./index-CMMlhluM.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Paragraph-CJciD5B6.js";import"./Label-DnboOLtM.js";import"./Textarea-ik62Jeuf.js";import"./Input-FgPaU4ty.js";const k=o.createContext({headingId:"heading",setHeadingId:()=>{}}),R=o.forwardRef(function({asChild:i,role:a="alert","aria-live":u="polite","aria-relevant":f="all",className:t,...s},L){const v=o.useId(),[c,I]=o.useState(v),j=i?b:"div";return r.jsx(k.Provider,{value:{headingId:c,setHeadingId:I},children:r.jsx(j,{"aria-labelledby":c,"aria-live":u,"aria-relevant":f,className:H("ds-error-summary",t),ref:L,role:a,...s})})}),z=o.forwardRef(function({className:i,id:a,...u},f){const{headingId:t,setHeadingId:s}=o.useContext(k);return o.useEffect(()=>{a&&t!==a&&s(a)},[t,a,s]),r.jsx(T,{id:t,ref:f,...u})}),N=o.forwardRef(function({...i},a){return r.jsx(F,{ref:a,...i})}),D=o.forwardRef(function({...i},a){return r.jsx(C,{ref:a,"data-color":"neutral",...i})}),O=o.forwardRef(function({...i},a){return r.jsx(w.Unordered,{...i,ref:a})}),n=Object.assign(R,{Heading:z,Item:N,List:O,Link:D});n.Item.displayName="ErrorSummary.Item";n.Heading.displayName="ErrorSummary.Heading";n.List.displayName="ErrorSummary.List";n.Link.displayName="ErrorSummary.Link";const e=n,Z={title:"Components/ErrorSummary",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"ErrorSummary provides an overview of errors or omissions that need correction on a page or step."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links"},heading:{table:{disable:!0}}}},d={render:m=>r.jsxs(e,{...m,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-3",children:"E-post må være gyldig"})})]})]}),args:{"data-size":"md"}},l={render:m=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(y,{id:"textfield-error-1",label:"Fornavn",error:"Fornavn må være minst 2 tegn","aria-describedby":"errorsummary-heading"}),r.jsx(y,{id:"textfield-error-2",label:"Telefon",error:"Telefonnummer kan kun inneholde siffer","aria-describedby":"errorsummary-heading"}),r.jsxs(e,{...m,children:[r.jsx(e.Heading,{id:"errorsummary-heading",children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]}),args:{"data-size":"md"}};var g,p,E;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ErrorSummary {...args}>\r
      <ErrorSummary.Heading>\r
        For å gå videre må du rette opp følgende feil:\r
      </ErrorSummary.Heading>\r
      <ErrorSummary.List>\r
        <ErrorSummary.Item>\r
          <ErrorSummary.Link href="#textfield-error-1">\r
            Fødselsdato kan ikke være etter år 2005\r
          </ErrorSummary.Link>\r
        </ErrorSummary.Item>\r
        <ErrorSummary.Item>\r
          <ErrorSummary.Link href="#textfield-error-2">\r
            Telefonnummer kan kun inneholde siffer\r
          </ErrorSummary.Link>\r
        </ErrorSummary.Item>\r
        <ErrorSummary.Item>\r
          <ErrorSummary.Link href="#textfield-error-3">\r
            E-post må være gyldig\r
          </ErrorSummary.Link>\r
        </ErrorSummary.Item>\r
      </ErrorSummary.List>\r
    </ErrorSummary>,
  args: {
    'data-size': 'md'
  }
}`,...(E=(p=d.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};var S,x,h;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <Textfield id="textfield-error-1" label="Fornavn" error="Fornavn må være minst 2 tegn" aria-describedby="errorsummary-heading" />\r
      <Textfield id="textfield-error-2" label="Telefon" error="Telefonnummer kan kun inneholde siffer" aria-describedby="errorsummary-heading" />\r
      <ErrorSummary {...args}>\r
        <ErrorSummary.Heading id="errorsummary-heading">\r
          For å gå videre må du rette opp følgende feil:\r
        </ErrorSummary.Heading>\r
        <ErrorSummary.List>\r
          <ErrorSummary.Item>\r
            <ErrorSummary.Link href="#textfield-error-1">\r
              Fornavn må være minst 2 tegn\r
            </ErrorSummary.Link>\r
          </ErrorSummary.Item>\r
          <ErrorSummary.Item>\r
            <ErrorSummary.Link href="#textfield-error-2">\r
              Telefonnummer kan kun inneholde siffer\r
            </ErrorSummary.Link>\r
          </ErrorSummary.Item>\r
        </ErrorSummary.List>\r
      </ErrorSummary>\r
    </div>,
  args: {
    'data-size': 'md'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const rr=["Default","WithTextFields"];export{d as Default,l as WithTextFields,rr as __namedExportsOrder,Z as default};
