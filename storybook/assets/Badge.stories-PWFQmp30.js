import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-D4lIrffr.js";import{c as A}from"./lite-DaUVFjkg.js";import{B as b}from"./Button-_80U_wOV.js";import{S as K,a as Q,b as U,c as i}from"./Video-Cjx3w1ZP.js";import"./index-Cb-ENzfG.js";import"./Spinner-Dj2HLJn9.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./useId-Dtjwz75n.js";const X=v.forwardRef(function({className:o,count:n,maxCount:s,variant:h="base",...f},J){return e.jsx("span",{className:A("ds-badge",o),"data-count":n&&s&&n>s?`${s}+`:n,"data-variant":h,ref:J,...f})}),G=v.forwardRef(function({className:o,overlap:n="rectangle",placement:s="top-right",...h},f){return e.jsx("span",{className:A("ds-badge--position",o),"data-overlap":n,"data-placement":s,ref:f,...h})}),H=Object.assign(X,{Position:G});H.Position.displayName="Badge.Position";const r=v.forwardRef((a,o)=>e.jsx(H,{ref:o,...a}));r.displayName="Badge";const t=G;r.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["DigDirBadgeProps"]};const le={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{count:{control:"number",description:"The number to display in the badge"},maxCount:{control:"number",description:'Maximum count before showing "+"'},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},variant:{control:"select",options:["base","tinted"],description:"Background color style",defaultValue:"base"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Color scheme",defaultValue:"accent"}}},d={name:"Example Default (Status)",args:{"data-color":"danger"}},l={name:"Example with Count",args:{count:7,"data-color":"accent"}},c={name:"Example with Max Count",args:{count:150,maxCount:99,"data-color":"neutral"}},m={name:"Example Large Danger Tinted",args:{count:99,"data-size":"lg","data-color":"danger",variant:"tinted"}},g={name:"Example Status Only",args:{"data-color":"success"}},p={name:"Example Floating Over Element",render:a=>e.jsxs(t,{placement:"top-right",children:[e.jsx(r,{count:a.count,maxCount:a.maxCount,"data-size":a["data-size"],variant:a.variant,"data-color":a["data-color"]}),e.jsx("span",{style:{display:"inline-block",width:40,height:40,background:"#eee",borderRadius:"50%",marginLeft:16,marginRight:16,marginTop:16,marginBottom:16}})]}),args:{count:3,"data-color":"info","data-size":"md"}},u={name:"Example On Icon Buttons",render:a=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(b,{icon:!0,variant:"tertiary",children:e.jsxs(t,{placement:"top-right",children:[e.jsx(r,{...a,count:1e3,maxCount:99,"data-color":"danger"}),e.jsx(K,{title:"Innboks",fontSize:"1.5rem"})]})}),e.jsx(b,{icon:!0,variant:"tertiary",children:e.jsxs(t,{placement:"top-right",children:[e.jsx(r,{...a,count:10,"data-color":"danger"}),e.jsx(Q,{title:"Meldinger",fontSize:"1.5rem"})]})}),e.jsx(b,{icon:!0,variant:"tertiary",children:e.jsxs(t,{placement:"top-right",children:[e.jsx(r,{...a,"data-color":"danger"}),e.jsx(U,{title:"Skru på video",fontSize:"1.5rem"})]})})]}),args:{"data-size":"md",variant:"base"},argTypes:{count:{control:!1},maxCount:{control:!1},"data-color":{control:!1}}},x={name:"Example Placements",render:a=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsxs(t,{placement:"top-right",children:[e.jsx(r,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(t,{placement:"top-left",children:[e.jsx(r,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(t,{placement:"bottom-right",children:[e.jsx(r,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(t,{placement:"bottom-left",children:[e.jsx(r,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsx("div",{style:{width:"100%",height:"1rem"}}),e.jsxs(t,{placement:"top-right",overlap:"circle",children:[e.jsx(r,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(t,{placement:"top-left",overlap:"circle",children:[e.jsx(r,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(t,{placement:"bottom-right",overlap:"circle",children:[e.jsx(r,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(t,{placement:"bottom-left",overlap:"circle",children:[e.jsx(r,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]})]}),args:{"data-color":"accent","data-size":"md"},argTypes:{count:{control:!1},maxCount:{control:!1}}};var B,j,y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger'
  }
}`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,P,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'accent'
  }
}`,...(S=(P=l.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var z,E,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Example with Max Count',
  args: {
    count: 150,
    maxCount: 99,
    'data-color': 'neutral'
  }
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var I,k,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Example Large Danger Tinted',
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted'
  }
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var M,O,T;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Example Status Only',
  args: {
    'data-color': 'success'
  }
}`,...(T=(O=g.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var D,F,L;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Example Floating Over Element',
  render: args => <BadgePosition placement="top-right">\r
      <Badge count={args.count} maxCount={args.maxCount} data-size={args['data-size']} variant={args.variant} data-color={args['data-color']} />\r
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
    }} />\r
    </BadgePosition>,
  args: {
    count: 3,
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var W,N,V;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Example On Icon Buttons',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button icon variant="tertiary">\r
        <BadgePosition placement="top-right">\r
          <Badge {...args} count={1000} maxCount={99} data-color="danger" />\r
          <InboxIcon title="Innboks" fontSize="1.5rem" />\r
        </BadgePosition>\r
      </Button>\r
      <Button icon variant="tertiary">\r
        <BadgePosition placement="top-right">\r
           <Badge {...args} count={10} data-color="danger" />\r
          <ChatIcon title="Meldinger" fontSize="1.5rem" />\r
        </BadgePosition>\r
      </Button>\r
      <Button icon variant="tertiary">\r
        <BadgePosition placement="top-right">\r
           <Badge {...args} data-color="danger" />\r
          <VideoIcon title="Skru på video" fontSize="1.5rem" />\r
        </BadgePosition>\r
      </Button>\r
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
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,$,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Example Placements',
  render: args => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    padding: '2rem'
  }}>\r
      <BadgePosition placement="top-right">\r
        <Badge {...args} />\r
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />\r
      </BadgePosition>\r
      <BadgePosition placement="top-left">\r
        <Badge {...args} />\r
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />\r
      </BadgePosition>\r
      <BadgePosition placement="bottom-right">\r
        <Badge {...args} />\r
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />\r
      </BadgePosition>\r
      <BadgePosition placement="bottom-left">\r
        <Badge {...args} />\r
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />\r
      </BadgePosition>\r
\r
      <div style={{
      width: '100%',
      height: '1rem'
    }}></div>\r
\r
      <BadgePosition placement="top-right" overlap="circle">\r
        <Badge {...args} />\r
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />\r
      </BadgePosition>\r
      <BadgePosition placement="top-left" overlap="circle">\r
        <Badge {...args} />\r
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />\r
      </BadgePosition>\r
      <BadgePosition placement="bottom-right" overlap="circle">\r
        <Badge {...args} />\r
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />\r
      </BadgePosition>\r
      <BadgePosition placement="bottom-left" overlap="circle">\r
        <Badge {...args} />\r
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />\r
      </BadgePosition>\r
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
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const ce=["Default","WithCount","WithMaxCount","LargeDangerTinted","StatusOnly","FloatingOverElement","OnIconButtons","Placements"];export{d as Default,p as FloatingOverElement,m as LargeDangerTinted,u as OnIconButtons,x as Placements,g as StatusOnly,l as WithCount,c as WithMaxCount,ce as __namedExportsOrder,le as default};
