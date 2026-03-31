import{r as q,j as e}from"./iframe-BbkjnMVD.js";import{v as L,w as W,B as u}from"./tooltip-BCPcpl7m.js";import{S as N,a as $,b as U,c as g}from"./Video-DKplrQFZ.js";const t=q.forwardRef((a,F)=>e.jsx(L,{ref:F,...a}));t.displayName="Badge";const o=W;try{t.displayName="Badge",t.__docgenInfo={description:"",displayName:"Badge",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},count:{defaultValue:null,description:"The number to display in the badge",name:"count",required:!1,type:{name:"number"}},maxCount:{defaultValue:null,description:"The maximum number to display in the badge, when the count exceeds this number, the badge will display `{max}+`",name:"maxCount",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'base'"},description:"Change the background color of the badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"tinted"'},{value:'"base"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the badge",name:"data-color",required:!1,type:{name:"any"}}}}}catch{}try{o.displayName="BadgePosition",o.__docgenInfo={description:"",displayName:"BadgePosition",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},placement:{defaultValue:{value:"top-right"},description:"The placement of the badge",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},overlap:{defaultValue:{value:"rectangle"},description:"Use when badge is floating to change the position of the badge",name:"overlap",required:!1,type:{name:"enum",value:[{value:'"rectangle"'},{value:'"circle"'}]}}}}}catch{}const A={title:"Components/Badge",component:t,tags:["autodocs"],argTypes:{count:{control:"number",description:"The number to display in the badge"},maxCount:{control:"number",description:'Maximum count before showing "+"'},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},variant:{control:"select",options:["base","tinted"],description:"Background color style",defaultValue:"base"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Color scheme",defaultValue:"accent"}}},r={name:"Example Default (Status)",args:{"data-color":"danger"}},n={name:"Example with Count",args:{count:7,"data-color":"accent"}},s={name:"Example with Max Count",args:{count:150,maxCount:99,"data-color":"neutral"}},i={name:"Example Large Danger Tinted",args:{count:99,"data-size":"lg","data-color":"danger",variant:"tinted"}},l={name:"Example Status Only",args:{"data-color":"success"}},d={name:"Example Floating Over Element",render:a=>e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{count:a.count,maxCount:a.maxCount,"data-size":a["data-size"],variant:a.variant,"data-color":a["data-color"]}),e.jsx("span",{style:{display:"inline-block",width:40,height:40,background:"#eee",borderRadius:"50%",marginLeft:16,marginRight:16,marginTop:16,marginBottom:16}})]}),args:{count:3,"data-color":"info","data-size":"md"}},c={name:"Example On Icon Buttons",render:a=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(u,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,count:1e3,maxCount:99,"data-color":"danger"}),e.jsx(N,{title:"Innboks",fontSize:"1.5rem"})]})}),e.jsx(u,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,count:10,"data-color":"danger"}),e.jsx($,{title:"Meldinger",fontSize:"1.5rem"})]})}),e.jsx(u,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,"data-color":"danger"}),e.jsx(U,{title:"Skru på video",fontSize:"1.5rem"})]})})]}),args:{"data-size":"md",variant:"base"},argTypes:{count:{control:!1},maxCount:{control:!1},"data-color":{control:!1}}},m={name:"Example Placements",render:a=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"top-left",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"bottom-right",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"bottom-left",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsx("div",{style:{width:"100%",height:"1rem"}}),e.jsxs(o,{placement:"top-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"top-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"bottom-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"bottom-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]})]}),args:{"data-color":"accent","data-size":"md"},argTypes:{count:{control:!1},maxCount:{control:!1}}};var p,h,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,b,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'accent'
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,B,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example with Max Count',
  args: {
    count: 150,
    maxCount: 99,
    'data-color': 'neutral'
  }
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var C,S,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example Large Danger Tinted',
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted'
  }
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var P,E,w;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Example Status Only',
  args: {
    'data-color': 'success'
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var _,I,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Example Floating Over Element',
  render: args => <BadgePosition placement="top-right">
      <Badge count={args.count} maxCount={args.maxCount} data-size={args['data-size']} variant={args.variant} data-color={args['data-color']} />
      <span style={{
      display: 'inline-block',
      width: 40,
      height: 40,
      background: '#eee',
      borderRadius: '50%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
      marginBottom: 16
    }} />
    </BadgePosition>,
  args: {
    count: 3,
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var M,O,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Example On Icon Buttons',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
          <Badge {...args} count={1000} maxCount={99} data-color="danger" />
          <InboxIcon title="Innboks" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
           <Badge {...args} count={10} data-color="danger" />
          <ChatIcon title="Meldinger" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
           <Badge {...args} data-color="danger" />
          <VideoIcon title="Skru på video" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
    </div>,
  args: {
    'data-size': 'md',
    variant: 'base'
  },
  argTypes: {
    count: {
      control: false
    },
    maxCount: {
      control: false
    },
    'data-color': {
      control: false
    }
    // placement and overlap removed from meta, so no need to disable here
  }
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var R,V,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Example Placements',
  render: args => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    padding: '2rem'
  }}>
      <BadgePosition placement="top-right">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="top-left">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="bottom-right">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="bottom-left">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>

      <div style={{
      width: '100%',
      height: '1rem'
    }}></div>

      <BadgePosition placement="top-right" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
      <BadgePosition placement="top-left" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
      <BadgePosition placement="bottom-right" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
      <BadgePosition placement="bottom-left" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
    </div>,
  args: {
    'data-color': 'accent',
    'data-size': 'md'
  },
  argTypes: {
    count: {
      control: false
    },
    maxCount: {
      control: false
    }
  }
}`,...(D=(V=m.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const G=["Default","WithCount","WithMaxCount","LargeDangerTinted","StatusOnly","FloatingOverElement","OnIconButtons","Placements"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FloatingOverElement:d,LargeDangerTinted:i,OnIconButtons:c,Placements:m,StatusOnly:l,WithCount:n,WithMaxCount:s,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{Q as B,d as F,i as L,c as O,m as P,l as S,n as W,s as a};
