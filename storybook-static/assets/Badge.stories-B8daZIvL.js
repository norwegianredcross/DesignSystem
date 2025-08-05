import{r as b,j as e}from"./iframe-BagKezlM.js";import{c as U}from"./lite-DaUVFjkg.js";import{B as v}from"./Button-CaS7JG-o.js";import{b as J,S as K,c as Q,a as i}from"./Video-C4JlxTzj.js";import"./preload-helper-C1FmrZbK.js";import"./index-UUdmfCXh.js";import"./Spinner-DEavn-Na.js";import"./floating-ui.react-KqRGCIp5.js";import"./index-CINeIW-J.js";import"./index-BYMxJ67J.js";import"./useId-DxA82c0h.js";const X=b.forwardRef(function({className:o,count:n,maxCount:s,variant:f="base",...x},H){return e.jsx("span",{className:U("ds-badge",o),"data-count":n&&s&&n>s?`${s}+`:n,"data-variant":f,ref:H,...x})}),A=b.forwardRef(function({className:o,overlap:n="rectangle",placement:s="top-right",...f},x){return e.jsx("span",{className:U("ds-badge--position",o),"data-overlap":n,"data-placement":s,ref:x,...f})}),G=Object.assign(X,{Position:A});G.Position.displayName="Badge.Position";const t=b.forwardRef((a,o)=>e.jsx(G,{ref:o,...a}));t.displayName="Badge";const r=A;try{t.displayName="Badge",t.__docgenInfo={description:"",displayName:"Badge",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},count:{defaultValue:null,description:"The number to display in the badge",name:"count",required:!1,type:{name:"number"}},maxCount:{defaultValue:null,description:"The maximum number to display in the badge, when the count exceeds this number, the badge will display `{max}+`",name:"maxCount",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'base'"},description:"Change the background color of the badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"tinted"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the badge",name:"data-color",required:!1,type:{name:"any"}}}}}catch{}try{r.displayName="BadgePosition",r.__docgenInfo={description:"",displayName:"BadgePosition",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},placement:{defaultValue:{value:"top-right"},description:"The placement of the badge",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},overlap:{defaultValue:{value:"rectangle"},description:"Use when badge is floating to change the position of the badge",name:"overlap",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}}}}}catch{}const de={title:"Components/Badge",component:t,tags:["autodocs"],argTypes:{count:{control:"number",description:"The number to display in the badge"},maxCount:{control:"number",description:'Maximum count before showing "+"'},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},variant:{control:"select",options:["base","tinted"],description:"Background color style",defaultValue:"base"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Color scheme",defaultValue:"accent"}}},l={name:"Example Default (Status)",args:{"data-color":"danger"}},d={name:"Example with Count",args:{count:7,"data-color":"accent"}},c={name:"Example with Max Count",args:{count:150,maxCount:99,"data-color":"neutral"}},m={name:"Example Large Danger Tinted",args:{count:99,"data-size":"lg","data-color":"danger",variant:"tinted"}},g={name:"Example Status Only",args:{"data-color":"success"}},u={name:"Example Floating Over Element",render:a=>e.jsxs(r,{placement:"top-right",children:[e.jsx(t,{count:a.count,maxCount:a.maxCount,"data-size":a["data-size"],variant:a.variant,"data-color":a["data-color"]}),e.jsx("span",{style:{display:"inline-block",width:40,height:40,background:"#eee",borderRadius:"50%",marginLeft:16,marginRight:16,marginTop:16,marginBottom:16}})]}),args:{count:3,"data-color":"info","data-size":"md"}},p={name:"Example On Icon Buttons",render:a=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(v,{icon:!0,variant:"tertiary",children:e.jsxs(r,{placement:"top-right",children:[e.jsx(t,{...a,count:1e3,maxCount:99,"data-color":"danger"}),e.jsx(J,{title:"Innboks",fontSize:"1.5rem"})]})}),e.jsx(v,{icon:!0,variant:"tertiary",children:e.jsxs(r,{placement:"top-right",children:[e.jsx(t,{...a,count:10,"data-color":"danger"}),e.jsx(K,{title:"Meldinger",fontSize:"1.5rem"})]})}),e.jsx(v,{icon:!0,variant:"tertiary",children:e.jsxs(r,{placement:"top-right",children:[e.jsx(t,{...a,"data-color":"danger"}),e.jsx(Q,{title:"Skru på video",fontSize:"1.5rem"})]})})]}),args:{"data-size":"md",variant:"base"},argTypes:{count:{control:!1},maxCount:{control:!1},"data-color":{control:!1}}},h={name:"Example Placements",render:a=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsxs(r,{placement:"top-right",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(r,{placement:"top-left",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(r,{placement:"bottom-right",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(r,{placement:"bottom-left",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsx("div",{style:{width:"100%",height:"1rem"}}),e.jsxs(r,{placement:"top-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(r,{placement:"top-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(r,{placement:"bottom-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(r,{placement:"bottom-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]})]}),args:{"data-color":"accent","data-size":"md"},argTypes:{count:{control:!1},maxCount:{control:!1}}};var y,B,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger'
  }
}`,...(j=(B=l.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var C,S,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'accent'
  }
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var P,E,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Example with Max Count',
  args: {
    count: 150,
    maxCount: 99,
    'data-color': 'neutral'
  }
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var I,k,_;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Example Large Danger Tinted',
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted'
  }
}`,...(_=(k=m.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var R,M,T;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Example Status Only',
  args: {
    'data-color': 'success'
  }
}`,...(T=(M=g.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var O,V,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(V=u.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,F,N;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var L,W,$;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const ce=["Default","WithCount","WithMaxCount","LargeDangerTinted","StatusOnly","FloatingOverElement","OnIconButtons","Placements"];export{l as Default,u as FloatingOverElement,m as LargeDangerTinted,p as OnIconButtons,h as Placements,g as StatusOnly,d as WithCount,c as WithMaxCount,ce as __namedExportsOrder,de as default};
