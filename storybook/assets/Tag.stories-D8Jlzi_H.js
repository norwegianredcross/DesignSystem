import{r as E,j as a}from"./iframe-Bl4L-R2G.js";import{Y as P}from"./tooltip-cnUYpbgN.js";const t=E.forwardRef(function({shape:r,style:p,...N},O){const u={};r==="rounded"&&(u.borderRadius="var(--ds-border-radius-xl)");const D=Object.keys(u).length===0&&!p?void 0:{...u,...p},m={};return r==="rounded"&&(m["data-shape"]="rounded"),a.jsx(P,{ref:O,...N,...m,style:D})});t.displayName="Tag";try{t.displayName="Tag",t.__docgenInfo={description:"",displayName:"Tag",props:{"data-color":{defaultValue:null,description:"Color scheme. Follows Digdir's `data-color` cascade.",name:"data-color",required:!1,type:{name:"any"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"'default'"},description:"Visual variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'}]}},shape:{defaultValue:{value:"'squared'"},description:"Geometry. `'rounded'` uses `--ds-border-radius-xl` (12px), matching the\nActivity-Card style in Figma. `'squared'` keeps Digdir's default radius-sm.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"squared"'},{value:'"rounded"'}]}}}}}catch{}const{expect:s,within:W}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Tag",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are static labels used to categorize elements or communicate status, progress, or process."}},layout:"centered"},argTypes:{children:{control:"text",description:"The text content of the tag.",defaultValue:"New"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["neutral","success","warning","danger","info","brand1","brand2","brand3","accent","main"],description:"Change the color scheme of the tag.",defaultValue:"neutral"},shape:{control:"radio",options:["squared","rounded"],description:'"rounded" uses --ds-border-radius-xl (12px), matching the Activity-Card style in Figma.',defaultValue:"squared"}}},d={args:{children:"Beta","data-color":"info","data-size":"md"}},o={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(t,{"data-size":"sm","data-color":e["data-color"],children:"sm"}),a.jsx(t,{"data-size":"md","data-color":e["data-color"],children:"md"}),a.jsx(t,{"data-size":"lg","data-color":e["data-color"],children:"lg"})]}),args:{"data-color":"neutral"},argTypes:{"data-size":{control:!1},children:{control:!1}}},n={render:e=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(t,{"data-color":"neutral","data-size":e["data-size"],children:"neutral"}),a.jsx(t,{"data-color":"success","data-size":e["data-size"],children:"success"}),a.jsx(t,{"data-color":"warning","data-size":e["data-size"],children:"warning"}),a.jsx(t,{"data-color":"danger","data-size":e["data-size"],children:"danger"}),a.jsx(t,{"data-color":"info","data-size":e["data-size"],children:"info"}),a.jsx(t,{"data-color":"brand1","data-size":e["data-size"],children:"brand1"}),a.jsx(t,{"data-color":"brand2","data-size":e["data-size"],children:"brand2"}),a.jsx(t,{"data-color":"brand3","data-size":e["data-size"],children:"brand3"}),a.jsx(t,{"data-color":"accent","data-size":e["data-size"],children:"accent"})]}),args:{"data-size":"md"},argTypes:{"data-color":{control:!1},children:{control:!1}}},i={args:{children:"Behov","data-color":"main",shape:"rounded"},parameters:{docs:{description:{story:'Tinted-pink rounded tag used inside the Figma Activity Card (node 231:4732). `shape="rounded"` sets border-radius to `--ds-border-radius-xl` (12px); `data-color="main"` resolves the tinted surface to the red ramp.'}}}},c={name:"Activity card tags",render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(t,{shape:"rounded","data-color":"info",children:"Behov"}),a.jsx(t,{shape:"rounded","data-color":"main",children:"Categori"})]}),argTypes:{"data-color":{control:!1},"data-size":{control:!1},shape:{control:!1},children:{control:!1}}},l={render:e=>a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:a.jsx(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:[a.jsx("span",{"aria-hidden":!0,style:{width:6,height:6,borderRadius:"50%",background:"currentColor",marginRight:6}}),a.jsx("span",{children:"Med ikon"})]})})}),args:{"data-size":"md","data-color":"accent"},name:"With Icon"},g={name:"Test: Static Contract",tags:["!autodocs"],args:{children:"Pågående","data-color":"warning","data-size":"sm",variant:"outline",shape:"rounded"},play:async({canvasElement:e})=>{const r=W(e).getByText("Pågående");await s(r.tagName).toBe("SPAN"),await s(r).toHaveAttribute("data-color","warning"),await s(r).toHaveAttribute("data-size","sm"),await s(r).toHaveAttribute("data-variant","outline"),await s(r).toHaveAttribute("data-shape","rounded"),await s(r.style.borderRadius).toBe("var(--ds-border-radius-xl)")}};var h,f,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Beta',
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var z,y,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var v,b,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var j,C,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,A,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var B,R,q;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var V,k,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Static Contract',
  tags: ['!autodocs'],
  args: {
    children: 'Pågående',
    'data-color': 'warning',
    'data-size': 'sm',
    variant: 'outline',
    shape: 'rounded'
  },
  play: async ({
    canvasElement
  }) => {
    const tag = within(canvasElement).getByText('Pågående');
    await expect(tag.tagName).toBe('SPAN');
    await expect(tag).toHaveAttribute('data-color', 'warning');
    await expect(tag).toHaveAttribute('data-size', 'sm');
    await expect(tag).toHaveAttribute('data-variant', 'outline');
    await expect(tag).toHaveAttribute('data-shape', 'rounded');
    await expect(tag.style.borderRadius).toBe('var(--ds-border-radius-xl)');
  }
}`,...(H=(k=g.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const M=["Default","Sizes","Colors","Rounded","ActivityCardTags","WithIcon","TestStaticContract"],K=Object.freeze(Object.defineProperty({__proto__:null,ActivityCardTags:c,Colors:n,Default:d,Rounded:i,Sizes:o,TestStaticContract:g,WithIcon:l,__namedExportsOrder:M,default:F},Symbol.toStringTag,{value:"Module"}));export{n as C,o as S,K as T};
