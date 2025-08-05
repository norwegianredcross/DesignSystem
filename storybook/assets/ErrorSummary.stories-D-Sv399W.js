import{r as o,j as r}from"./iframe-BgQDqsRD.js";import{S as b}from"./index-CZKmP7yi.js";import{c as H}from"./lite-DaUVFjkg.js";import{H as T}from"./Heading-B8ugYILz.js";import{L as F,a as z}from"./index-DOrL2b0y.js";import{L as C}from"./Link-B2mX9ext.js";import{T as y}from"./Textfield-RISdpEvl.js";import"./preload-helper-C1FmrZbK.js";import"./index-BBuENknQ.js";import"./floating-ui.react-CwLPqv5Y.js";import"./index-BpTns393.js";import"./index-BW23gSyK.js";import"./Paragraph-BKoaE2AV.js";import"./Label-Djmfihb9.js";import"./Textarea-BoklMGwF.js";import"./Input-CaiAUzww.js";const k=o.createContext({headingId:"heading",setHeadingId:()=>{}}),_=o.forwardRef(function({asChild:i,role:a="alert","aria-live":u="polite","aria-relevant":f="all",className:t,...s},L){const v=o.useId(),[c,I]=o.useState(v),j=i?b:"div";return r.jsx(k.Provider,{value:{headingId:c,setHeadingId:I},children:r.jsx(j,{"aria-labelledby":c,"aria-live":u,"aria-relevant":f,className:H("ds-error-summary",t),ref:L,role:a,...s})})}),N=o.forwardRef(function({className:i,id:a,...u},f){const{headingId:t,setHeadingId:s}=o.useContext(k);return o.useEffect(()=>{a&&t!==a&&s(a)},[t,a,s]),r.jsx(T,{id:t,ref:f,...u})}),R=o.forwardRef(function({...i},a){return r.jsx(F,{ref:a,...i})}),w=o.forwardRef(function({...i},a){return r.jsx(C,{ref:a,"data-color":"neutral",...i})}),D=o.forwardRef(function({...i},a){return r.jsx(z.Unordered,{...i,ref:a})}),n=Object.assign(_,{Heading:N,Item:R,List:D,Link:w});n.Item.displayName="ErrorSummary.Item";n.Heading.displayName="ErrorSummary.Heading";n.List.displayName="ErrorSummary.List";n.Link.displayName="ErrorSummary.Link";const e=n;try{e.displayName="ErrorSummary",e.__docgenInfo={description:"",displayName:"ErrorSummary",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"ReactNode"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const Z={title:"Components/ErrorSummary",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"ErrorSummary provides an overview of errors or omissions that need correction on a page or step."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links"},heading:{table:{disable:!0}}}},d={render:m=>r.jsxs(e,{...m,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-3",children:"E-post må være gyldig"})})]})]}),args:{"data-size":"md"}},l={render:m=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(y,{id:"textfield-error-1",label:"Fornavn",error:"Fornavn må være minst 2 tegn","aria-describedby":"errorsummary-heading"}),r.jsx(y,{id:"textfield-error-2",label:"Telefon",error:"Telefonnummer kan kun inneholde siffer","aria-describedby":"errorsummary-heading"}),r.jsxs(e,{...m,children:[r.jsx(e.Heading,{id:"errorsummary-heading",children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]}),args:{"data-size":"md"}};var p,g,E;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var S,h,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const rr=["Default","WithTextFields"];export{d as Default,l as WithTextFields,rr as __namedExportsOrder,Z as default};
