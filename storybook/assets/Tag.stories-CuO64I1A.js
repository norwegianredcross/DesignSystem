import{r as h,j as e}from"./iframe-BgQDqsRD.js";import{c as x}from"./lite-DaUVFjkg.js";import"./preload-helper-C1FmrZbK.js";const y=h.forwardRef(function({className:u,...f},T){return e.jsx("span",{className:x("ds-tag",u),ref:T,...f})}),r=y;try{r.displayName="Tag",r.__docgenInfo={description:"",displayName:"Tag",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the tag",name:"data-color",required:!1,type:{name:"any"}}}}}catch{}const _={title:"Components/Tag",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are static labels used to categorize elements or communicate status, progress, or process."}},layout:"centered"},argTypes:{children:{control:"text",description:"The text content of the tag.",defaultValue:"New"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["neutral","success","warning","danger","info","brand1","brand2","brand3","accent"],description:"Change the color scheme of the tag.",defaultValue:"neutral"}}},t={args:{children:"Beta","data-color":"info","data-size":"md"}},s={render:a=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(r,{"data-size":"sm","data-color":a["data-color"],children:"sm"}),e.jsx(r,{"data-size":"md","data-color":a["data-color"],children:"md"}),e.jsx(r,{"data-size":"lg","data-color":a["data-color"],children:"lg"})]}),args:{"data-color":"neutral"},argTypes:{"data-size":{control:!1},children:{control:!1}}},d={render:a=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{"data-color":"neutral","data-size":a["data-size"],children:"neutral"}),e.jsx(r,{"data-color":"success","data-size":a["data-size"],children:"success"}),e.jsx(r,{"data-color":"warning","data-size":a["data-size"],children:"warning"}),e.jsx(r,{"data-color":"danger","data-size":a["data-size"],children:"danger"}),e.jsx(r,{"data-color":"info","data-size":a["data-size"],children:"info"}),e.jsx(r,{"data-color":"brand1","data-size":a["data-size"],children:"brand1"}),e.jsx(r,{"data-color":"brand2","data-size":a["data-size"],children:"brand2"}),e.jsx(r,{"data-color":"brand3","data-size":a["data-size"],children:"brand3"}),e.jsx(r,{"data-color":"accent","data-size":a["data-size"],children:"accent"})]}),args:{"data-size":"md"},argTypes:{"data-color":{control:!1},children:{control:!1}}};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,i,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>\r
      <Tag data-size="sm" data-color={args['data-color']}>sm</Tag>\r
      <Tag data-size="md" data-color={args['data-color']}>md</Tag>\r
      <Tag data-size="lg" data-color={args['data-color']}>lg</Tag>\r
    </div>,
  args: {
    'data-color': 'neutral'
  },
  argTypes: {
    'data-size': {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,m,z;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>\r
      <Tag data-color="neutral" data-size={args['data-size']}>neutral</Tag>\r
      <Tag data-color="success" data-size={args['data-size']}>success</Tag>\r
      <Tag data-color="warning" data-size={args['data-size']}>warning</Tag>\r
      <Tag data-color="danger" data-size={args['data-size']}>danger</Tag>\r
      <Tag data-color="info" data-size={args['data-size']}>info</Tag>\r
      <Tag data-color="brand1" data-size={args['data-size']}>brand1</Tag>\r
      <Tag data-color="brand2" data-size={args['data-size']}>brand2</Tag>\r
      <Tag data-color="brand3" data-size={args['data-size']}>brand3</Tag>\r
      <Tag data-color="accent" data-size={args['data-size']}>accent</Tag>\r
    </div>,
  args: {
    'data-size': 'md'
  },
  argTypes: {
    'data-color': {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(z=(m=d.parameters)==null?void 0:m.docs)==null?void 0:z.source}}};const w=["Default","Sizes","Colors"];export{d as Colors,t as Default,s as Sizes,w as __namedExportsOrder,_ as default};
