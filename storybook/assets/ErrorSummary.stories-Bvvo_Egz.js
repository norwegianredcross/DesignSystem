import{j as r}from"./iframe-BkO_4YuB.js";import{K as f,b as i}from"./tooltip-C5ViwYPG.js";const e=f;try{e.displayName="ErrorSummary",e.__docgenInfo={description:"",displayName:"ErrorSummary",props:{asChild:{defaultValue:null,description:"@deprecated This is not supported anymore, as the element needs to be `ds-error-summary`",name:"asChild",required:!1,type:{name:"ReactNode"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const c={title:"Components/ErrorSummary",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"ErrorSummary provides an overview of errors or omissions that need correction on a page or step."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links"},heading:{table:{disable:!0}}}},a={render:n=>r.jsxs(e,{...n,children:[r.jsx(e.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fødselsdato kan ikke være etter år 2005"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-3",children:"E-post må være gyldig"})})]})]}),args:{"data-size":"md"}},o={render:n=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(i,{id:"textfield-error-1",label:"Fornavn",error:"Fornavn må være minst 2 tegn","aria-describedby":"errorsummary-heading"}),r.jsx(i,{id:"textfield-error-2",label:"Telefon",error:"Telefonnummer kan kun inneholde siffer","aria-describedby":"errorsummary-heading"}),r.jsxs(e,{...n,children:[r.jsx(e.Heading,{id:"errorsummary-heading",children:"For å gå videre må du rette opp følgende feil:"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-1",children:"Fornavn må være minst 2 tegn"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]}),args:{"data-size":"md"}};var m,t,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const y=["Default","WithTextFields"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithTextFields:o,__namedExportsOrder:y,default:c},Symbol.toStringTag,{value:"Module"}));export{a as D,h as E,o as W,e as a};
