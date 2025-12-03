import{j as e}from"./iframe-D8k-pviV.js";import{B as t,a as o}from"./index-DLhd_tt3.js";import{B as p}from"./button-C6eSOc-h.js";import{S as W,a as _,b as V,c as g}from"./Video-IXH3m3vD.js";const q={title:"Components/Badge",component:t,tags:["autodocs"],argTypes:{count:{control:"number",description:"The number to display in the badge"},maxCount:{control:"number",description:'Maximum count before showing "+"'},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},variant:{control:"select",options:["base","tinted"],description:"Background color style",defaultValue:"base"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Color scheme",defaultValue:"accent"}}},r={name:"Example Default (Status)",args:{"data-color":"danger"}},n={name:"Example with Count",args:{count:7,"data-color":"accent"}},s={name:"Example with Max Count",args:{count:150,maxCount:99,"data-color":"neutral"}},i={name:"Example Large Danger Tinted",args:{count:99,"data-size":"lg","data-color":"danger",variant:"tinted"}},l={name:"Example Status Only",args:{"data-color":"success"}},d={name:"Example Floating Over Element",render:a=>e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{count:a.count,maxCount:a.maxCount,"data-size":a["data-size"],variant:a.variant,"data-color":a["data-color"]}),e.jsx("span",{style:{display:"inline-block",width:40,height:40,background:"#eee",borderRadius:"50%",marginLeft:16,marginRight:16,marginTop:16,marginBottom:16}})]}),args:{count:3,"data-color":"info","data-size":"md"}},c={name:"Example On Icon Buttons",render:a=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(p,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,count:1e3,maxCount:99,"data-color":"danger"}),e.jsx(W,{title:"Innboks",fontSize:"1.5rem"})]})}),e.jsx(p,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,count:10,"data-color":"danger"}),e.jsx(_,{title:"Meldinger",fontSize:"1.5rem"})]})}),e.jsx(p,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,"data-color":"danger"}),e.jsx(V,{title:"Skru på video",fontSize:"1.5rem"})]})})]}),args:{"data-size":"md",variant:"base"},argTypes:{count:{control:!1},maxCount:{control:!1},"data-color":{control:!1}}},m={name:"Example Placements",render:a=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"top-left",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"bottom-right",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"bottom-left",children:[e.jsx(t,{...a}),e.jsx(g,{title:"Meldinger",fontSize:"2rem"})]}),e.jsx("div",{style:{width:"100%",height:"1rem"}}),e.jsxs(o,{placement:"top-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"top-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"bottom-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"bottom-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]})]}),args:{"data-color":"accent","data-size":"md"},argTypes:{count:{control:!1},maxCount:{control:!1}}};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger'
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,f,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'accent'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var B,j,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Example with Max Count',
  args: {
    count: 150,
    maxCount: 99,
    'data-color': 'neutral'
  }
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,S,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example Large Danger Tinted',
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted'
  }
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var z,E,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Example Status Only',
  args: {
    'data-color': 'success'
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var k,I,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,R,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var F,D,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const A=["Default","WithCount","WithMaxCount","LargeDangerTinted","StatusOnly","FloatingOverElement","OnIconButtons","Placements"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FloatingOverElement:d,LargeDangerTinted:i,OnIconButtons:c,Placements:m,StatusOnly:l,WithCount:n,WithMaxCount:s,__namedExportsOrder:A,default:q},Symbol.toStringTag,{value:"Module"}));export{N as B,d as F,i as L,c as O,m as P,l as S,n as W,s as a};
