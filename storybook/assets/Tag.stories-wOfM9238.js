import{r as B,j as a}from"./iframe-BxgOaCj_.js";import{X as D}from"./tooltip-ChKEZu46.js";const e=B.forwardRef(function({shape:c,style:g,...V},k){const l={};c==="rounded"&&(l.borderRadius="var(--ds-border-radius-xl)");const A=Object.keys(l).length===0&&!g?void 0:{...l,...g},p={};return c==="rounded"&&(p["data-shape"]="rounded"),a.jsx(D,{ref:k,...V,...p,style:A})});e.displayName="Tag";try{e.displayName="Tag",e.__docgenInfo={description:"",displayName:"Tag",props:{"data-color":{defaultValue:null,description:"Color scheme. Follows Digdir's `data-color` cascade.",name:"data-color",required:!1,type:{name:"any"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"'default'"},description:"Visual variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'}]}},shape:{defaultValue:{value:"'squared'"},description:"Geometry. `'rounded'` uses `--ds-border-radius-xl` (12px), matching the\nActivity-Card style in Figma. `'squared'` keeps Digdir's default radius-sm.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"squared"'},{value:'"rounded"'}]}}}}}catch{}const W={title:"Components/Tag",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are static labels used to categorize elements or communicate status, progress, or process."}},layout:"centered"},argTypes:{children:{control:"text",description:"The text content of the tag.",defaultValue:"New"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["neutral","success","warning","danger","info","brand1","brand2","brand3","accent","main"],description:"Change the color scheme of the tag.",defaultValue:"neutral"},shape:{control:"radio",options:["squared","rounded"],description:'"rounded" uses --ds-border-radius-xl (12px), matching the Activity-Card style in Figma.',defaultValue:"squared"}}},s={args:{children:"Beta","data-color":"info","data-size":"md"}},t={render:r=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{"data-size":"sm","data-color":r["data-color"],children:"sm"}),a.jsx(e,{"data-size":"md","data-color":r["data-color"],children:"md"}),a.jsx(e,{"data-size":"lg","data-color":r["data-color"],children:"lg"})]}),args:{"data-color":"neutral"},argTypes:{"data-size":{control:!1},children:{control:!1}}},d={render:r=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(e,{"data-color":"neutral","data-size":r["data-size"],children:"neutral"}),a.jsx(e,{"data-color":"success","data-size":r["data-size"],children:"success"}),a.jsx(e,{"data-color":"warning","data-size":r["data-size"],children:"warning"}),a.jsx(e,{"data-color":"danger","data-size":r["data-size"],children:"danger"}),a.jsx(e,{"data-color":"info","data-size":r["data-size"],children:"info"}),a.jsx(e,{"data-color":"brand1","data-size":r["data-size"],children:"brand1"}),a.jsx(e,{"data-color":"brand2","data-size":r["data-size"],children:"brand2"}),a.jsx(e,{"data-color":"brand3","data-size":r["data-size"],children:"brand3"}),a.jsx(e,{"data-color":"accent","data-size":r["data-size"],children:"accent"})]}),args:{"data-size":"md"},argTypes:{"data-color":{control:!1},children:{control:!1}}},o={args:{children:"Behov","data-color":"main",shape:"rounded"},parameters:{docs:{description:{story:'Tinted-pink rounded tag used inside the Figma Activity Card (node 231:4732). `shape="rounded"` sets border-radius to `--ds-border-radius-xl` (12px); `data-color="main"` resolves the tinted surface to the red ramp.'}}}},n={name:"Activity card tags",render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{shape:"rounded","data-color":"info",children:"Behov"}),a.jsx(e,{shape:"rounded","data-color":"main",children:"Categori"})]}),argTypes:{"data-color":{control:!1},"data-size":{control:!1},shape:{control:!1},children:{control:!1}}},i={render:r=>a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:a.jsx(e,{"data-size":r["data-size"],"data-color":r["data-color"],children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[a.jsx("span",{"aria-hidden":!0,style:{width:6,height:6,borderRadius:"50%",background:"currentColor",marginRight:6}}),a.jsx("span",{children:"Med ikon"})]})})}),args:{"data-size":"md","data-color":"accent"},name:"With Icon"};var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,z,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(z=t.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var y,T,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var b,j,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Behov',
    'data-color': 'main',
    shape: 'rounded'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tinted-pink rounded tag used inside the Figma Activity Card (node 231:4732). \`shape="rounded"\` sets border-radius to \`--ds-border-radius-xl\` (12px); \`data-color="main"\` resolves the tinted surface to the red ramp.'
      }
    }
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var I,_,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Activity card tags',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Tag shape="rounded" data-color="info">Behov</Tag>
      <Tag shape="rounded" data-color="main">Categori</Tag>
    </div>,
  argTypes: {
    'data-color': {
      control: false
    },
    'data-size': {
      control: false
    },
    shape: {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var w,q,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(q=i.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const F=["Default","Sizes","Colors","Rounded","ActivityCardTags","WithIcon"],E=Object.freeze(Object.defineProperty({__proto__:null,ActivityCardTags:n,Colors:d,Default:s,Rounded:o,Sizes:t,WithIcon:i,__namedExportsOrder:F,default:W},Symbol.toStringTag,{value:"Module"}));export{d as C,t as S,E as T};
