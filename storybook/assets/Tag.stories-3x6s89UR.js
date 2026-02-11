import{r as b,j as a}from"./iframe-D4YUl7yB.js";import{c as _}from"./lite-DaUVFjkg.js";const I=b.forwardRef(function({className:T,...y},j){return a.jsx("span",{className:_("ds-tag",T),ref:j,...y})}),r=I;try{r.displayName="Tag",r.__docgenInfo={description:"",displayName:"Tag",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:"Change the color scheme of the tag",name:"data-color",required:!1,type:{name:"any"}}}}}catch{}const S={title:"Components/Tag",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are static labels used to categorize elements or communicate status, progress, or process."}},layout:"centered"},argTypes:{children:{control:"text",description:"The text content of the tag.",defaultValue:"New"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["neutral","success","warning","danger","info","brand1","brand2","brand3","accent"],description:"Change the color scheme of the tag.",defaultValue:"neutral"}}},t={args:{children:"Beta","data-color":"info","data-size":"md"}},s={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(r,{"data-size":"sm","data-color":e["data-color"],children:"sm"}),a.jsx(r,{"data-size":"md","data-color":e["data-color"],children:"md"}),a.jsx(r,{"data-size":"lg","data-color":e["data-color"],children:"lg"})]}),args:{"data-color":"neutral"},argTypes:{"data-size":{control:!1},children:{control:!1}}},d={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(r,{"data-color":"neutral","data-size":e["data-size"],children:"neutral"}),a.jsx(r,{"data-color":"success","data-size":e["data-size"],children:"success"}),a.jsx(r,{"data-color":"warning","data-size":e["data-size"],children:"warning"}),a.jsx(r,{"data-color":"danger","data-size":e["data-size"],children:"danger"}),a.jsx(r,{"data-color":"info","data-size":e["data-size"],children:"info"}),a.jsx(r,{"data-color":"brand1","data-size":e["data-size"],children:"brand1"}),a.jsx(r,{"data-color":"brand2","data-size":e["data-size"],children:"brand2"}),a.jsx(r,{"data-color":"brand3","data-size":e["data-size"],children:"brand3"}),a.jsx(r,{"data-color":"accent","data-size":e["data-size"],children:"accent"})]}),args:{"data-size":"md"},argTypes:{"data-color":{control:!1},children:{control:!1}}},o={render:e=>a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:a.jsx(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[a.jsx("span",{"aria-hidden":!0,style:{width:6,height:6,borderRadius:"50%",background:"currentColor",marginRight:6}}),a.jsx("span",{children:"Med ikon"})]})})}),args:{"data-size":"md","data-color":"accent"},name:"With Icon"};var n,c,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,g,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,z,u;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(z=d.parameters)==null?void 0:z.docs)==null?void 0:u.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const w=["Default","Sizes","Colors","WithIcon"],R=Object.freeze(Object.defineProperty({__proto__:null,Colors:d,Default:t,Sizes:s,WithIcon:o,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{d as C,s as S,R as T};
