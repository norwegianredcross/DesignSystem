import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./lite-DaUVFjkg.js";import{r as h}from"./index-D4lIrffr.js";const j=h.forwardRef(function({className:u,...f},T){return a.jsx("span",{className:x("ds-tag",u),ref:T,...f})}),r=j,v={title:"Components/Tag",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are static labels used to categorize elements or communicate status, progress, or process."}},layout:"centered"},argTypes:{children:{control:"text",description:"The text content of the tag.",defaultValue:"New"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["neutral","success","warning","danger","info","brand1","brand2","brand3","accent"],description:"Change the color scheme of the tag.",defaultValue:"neutral"}}},s={args:{children:"Beta","data-color":"info","data-size":"md"}},t={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(r,{"data-size":"sm","data-color":e["data-color"],children:"sm"}),a.jsx(r,{"data-size":"md","data-color":e["data-color"],children:"md"}),a.jsx(r,{"data-size":"lg","data-color":e["data-color"],children:"lg"})]}),args:{"data-color":"neutral"},argTypes:{"data-size":{control:!1},children:{control:!1}}},o={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(r,{"data-color":"neutral","data-size":e["data-size"],children:"neutral"}),a.jsx(r,{"data-color":"success","data-size":e["data-size"],children:"success"}),a.jsx(r,{"data-color":"warning","data-size":e["data-size"],children:"warning"}),a.jsx(r,{"data-color":"danger","data-size":e["data-size"],children:"danger"}),a.jsx(r,{"data-color":"info","data-size":e["data-size"],children:"info"}),a.jsx(r,{"data-color":"brand1","data-size":e["data-size"],children:"brand1"}),a.jsx(r,{"data-color":"brand2","data-size":e["data-size"],children:"brand2"}),a.jsx(r,{"data-color":"brand3","data-size":e["data-size"],children:"brand3"}),a.jsx(r,{"data-color":"accent","data-size":e["data-size"],children:"accent"})]}),args:{"data-size":"md"},argTypes:{"data-color":{control:!1},children:{control:!1}}};var d,c,n;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(i=t.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,z,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(z=o.parameters)==null?void 0:z.docs)==null?void 0:m.source}}};const C=["Default","Sizes","Colors"];export{o as Colors,s as Default,t as Sizes,C as __namedExportsOrder,v as default};
