import{j as e}from"./iframe-Bb1XchRN.js";import{Q as d}from"./tooltip-DD-oADH_.js";const o=d;try{o.displayName="SkipLink",o.__docgenInfo={description:"",displayName:"SkipLink",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},children:{defaultValue:null,description:"The content to display inside the skiplink.",name:"children",required:!0,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Href of an element in the DOM the skiplink should skip to. E.g #main-content",name:"href",required:!0,type:{name:"string"}}}}}catch{}const l={title:"Components/SkipLink",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"SkipLink allows keyboard users to bypass navigation and jump directly to the main content."}},notes:"To see the SkipLink, click inside the Story canvas and press the Tab key.",layout:"padded"},argTypes:{children:{control:"text",description:"The content to display inside the skiplink.",defaultValue:"Hopp til hovedinnhold"},href:{control:"text",description:"Href of the element ID to skip to (e.g., #main-content).",defaultValue:"#main-content-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"}}},n={render:t=>{var a;return e.jsxs(e.Fragment,{children:[e.jsx(o,{...t}),e.jsxs("main",{id:(a=t.href)==null?void 0:a.substring(1),tabIndex:-1,style:{padding:"2rem",marginTop:"1rem",border:"1px dashed #ccc",outline:"none"},children:["Region som kan motta fokus fra skiplink. (ID: ",t.href,")",e.jsx("br",{}),"(Click here and press Tab to see the SkipLink)"]})]})},args:{children:"Hopp til hovedinnhold",href:"#main-content-story","data-size":"md","data-color":"accent"}};var s,r,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <>
      <SkipLink {...args} />
      <main id={args.href?.substring(1)} tabIndex={-1} style={{
      padding: '2rem',
      marginTop: '1rem',
      border: '1px dashed #ccc',
      outline: 'none'
    }}>
        Region som kan motta fokus fra skiplink. (ID: {args.href})
        <br />
        (Click here and press Tab to see the SkipLink)
      </main>
    </>,
  args: {
    children: 'Hopp til hovedinnhold',
    href: '#main-content-story',
    'data-size': 'md',
    'data-color': 'accent'
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const c=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{u as S};
