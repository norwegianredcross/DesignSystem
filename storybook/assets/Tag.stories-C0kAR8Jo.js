import{j as a}from"./iframe-B1MggWi1.js";import{X as x}from"./tooltip-ZwyJGBgd.js";const t=x;try{t.displayName="Tag",t.__docgenInfo={description:"",displayName:"Tag",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:"Change the color scheme of the tag",name:"data-color",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"'default'"},description:"The visual variant of the tag",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'}]}}}}}catch{}const y={title:"Components/Tag",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are static labels used to categorize elements or communicate status, progress, or process."}},layout:"centered"},argTypes:{children:{control:"text",description:"The text content of the tag.",defaultValue:"New"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["neutral","success","warning","danger","info","brand1","brand2","brand3","accent"],description:"Change the color scheme of the tag.",defaultValue:"neutral"}}},r={args:{children:"Beta","data-color":"info","data-size":"md"}},s={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(t,{"data-size":"sm","data-color":e["data-color"],children:"sm"}),a.jsx(t,{"data-size":"md","data-color":e["data-color"],children:"md"}),a.jsx(t,{"data-size":"lg","data-color":e["data-color"],children:"lg"})]}),args:{"data-color":"neutral"},argTypes:{"data-size":{control:!1},children:{control:!1}}},d={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(t,{"data-color":"neutral","data-size":e["data-size"],children:"neutral"}),a.jsx(t,{"data-color":"success","data-size":e["data-size"],children:"success"}),a.jsx(t,{"data-color":"warning","data-size":e["data-size"],children:"warning"}),a.jsx(t,{"data-color":"danger","data-size":e["data-size"],children:"danger"}),a.jsx(t,{"data-color":"info","data-size":e["data-size"],children:"info"}),a.jsx(t,{"data-color":"brand1","data-size":e["data-size"],children:"brand1"}),a.jsx(t,{"data-color":"brand2","data-size":e["data-size"],children:"brand2"}),a.jsx(t,{"data-color":"brand3","data-size":e["data-size"],children:"brand3"}),a.jsx(t,{"data-color":"accent","data-size":e["data-size"],children:"accent"})]}),args:{"data-size":"md"},argTypes:{"data-color":{control:!1},children:{control:!1}}},n={render:e=>a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:a.jsx(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[a.jsx("span",{"aria-hidden":!0,style:{width:6,height:6,borderRadius:"50%",background:"currentColor",marginRight:6}}),a.jsx("span",{children:"Med ikon"})]})})}),args:{"data-size":"md","data-color":"accent"},name:"With Icon"};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,g,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Tag data-size="sm" data-color={args['data-color']}>sm</Tag>
      <Tag data-size="md" data-color={args['data-color']}>md</Tag>
      <Tag data-size="lg" data-color={args['data-color']}>lg</Tag>
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
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,u,z;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Tag data-color="neutral" data-size={args['data-size']}>neutral</Tag>
      <Tag data-color="success" data-size={args['data-size']}>success</Tag>
      <Tag data-color="warning" data-size={args['data-size']}>warning</Tag>
      <Tag data-color="danger" data-size={args['data-size']}>danger</Tag>
      <Tag data-color="info" data-size={args['data-size']}>info</Tag>
      <Tag data-color="brand1" data-size={args['data-size']}>brand1</Tag>
      <Tag data-color="brand2" data-size={args['data-size']}>brand2</Tag>
      <Tag data-color="brand3" data-size={args['data-size']}>brand3</Tag>
      <Tag data-color="accent" data-size={args['data-size']}>accent</Tag>
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
}`,...(z=(u=d.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var h,f,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Tag data-size={args['data-size']} data-color={args['data-color']}>
        <span style={{
        display: 'inline-flex',
        alignItems: 'center'
      }}>
          <span aria-hidden style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'currentColor',
          marginRight: 6
        }} />
          <span>Med ikon</span>
        </span>
      </Tag>
    </div>,
  args: {
    'data-size': 'md',
    'data-color': 'accent'
  },
  name: 'With Icon'
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const b=["Default","Sizes","Colors","WithIcon"],_=Object.freeze(Object.defineProperty({__proto__:null,Colors:d,Default:r,Sizes:s,WithIcon:n,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{d as C,s as S,_ as T};
