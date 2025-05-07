import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./lite-DaUVFjkg.js";import{r as m}from"./index-D4lIrffr.js";const k=m.forwardRef(function({children:t,className:d,...c},p){return e.jsx("a",{className:l("ds-skiplink",d),...c,ref:p,children:t})}),i=k,g={title:"Components/SkipLink",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"SkipLink allows keyboard users to bypass navigation and jump directly to the main content."}},notes:"To see the SkipLink, click inside the Story canvas and press the Tab key.",layout:"padded"},argTypes:{children:{control:"text",description:"The content to display inside the skiplink.",defaultValue:"Hopp til hovedinnhold"},href:{control:"text",description:"Href of the element ID to skip to (e.g., #main-content).",defaultValue:"#main-content-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"}}},o={render:n=>{var t;return e.jsxs(e.Fragment,{children:[e.jsx(i,{...n}),e.jsxs("main",{id:(t=n.href)==null?void 0:t.substring(1),tabIndex:-1,style:{padding:"2rem",marginTop:"1rem",border:"1px dashed #ccc",outline:"none"},children:["Region som kan motta fokus fra skiplink. (ID: ",n.href,")",e.jsx("br",{}),"(Click here and press Tab to see the SkipLink)"]})]})},args:{children:"Hopp til hovedinnhold",href:"#main-content-story","data-size":"md","data-color":"accent"}};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,g as default};
