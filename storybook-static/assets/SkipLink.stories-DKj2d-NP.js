import{r as p,j as e}from"./iframe-BagKezlM.js";import{c as m}from"./lite-DaUVFjkg.js";import"./preload-helper-C1FmrZbK.js";const u=p.forwardRef(function({children:t,className:d,...l},c){return e.jsx("a",{className:m("ds-skiplink",d),...l,ref:c,children:t})}),s=u;try{s.displayName="SkipLink",s.__docgenInfo={description:"",displayName:"SkipLink",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},children:{defaultValue:null,description:"The content to display inside the skiplink.",name:"children",required:!0,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Href of an element in the DOM the skiplink should skip to. E.g #main-content",name:"href",required:!0,type:{name:"string"}}}}}catch{}const g={title:"Components/SkipLink",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"SkipLink allows keyboard users to bypass navigation and jump directly to the main content."}},notes:"To see the SkipLink, click inside the Story canvas and press the Tab key.",layout:"padded"},argTypes:{children:{control:"text",description:"The content to display inside the skiplink.",defaultValue:"Hopp til hovedinnhold"},href:{control:"text",description:"Href of the element ID to skip to (e.g., #main-content).",defaultValue:"#main-content-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"}}},r={render:n=>{var t;return e.jsxs(e.Fragment,{children:[e.jsx(s,{...n}),e.jsxs("main",{id:(t=n.href)==null?void 0:t.substring(1),tabIndex:-1,style:{padding:"2rem",marginTop:"1rem",border:"1px dashed #ccc",outline:"none"},children:["Region som kan motta fokus fra skiplink. (ID: ",n.href,")",e.jsx("br",{}),"(Click here and press Tab to see the SkipLink)"]})]})},args:{children:"Hopp til hovedinnhold",href:"#main-content-story","data-size":"md","data-color":"accent"}};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <>\r
      <SkipLink {...args} />\r
      <main id={args.href?.substring(1)} tabIndex={-1} style={{
      padding: '2rem',
      marginTop: '1rem',
      border: '1px dashed #ccc',
      outline: 'none'
    }}>\r
        Region som kan motta fokus fra skiplink. (ID: {args.href})\r
        <br />\r
        (Click here and press Tab to see the SkipLink)\r
      </main>\r
    </>,
  args: {
    children: 'Hopp til hovedinnhold',
    href: '#main-content-story',
    'data-size': 'md',
    'data-color': 'accent'
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,g as default};
