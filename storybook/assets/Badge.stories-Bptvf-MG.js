import{r as v,j as e}from"./iframe-Csk3W67z.js";import{c as U}from"./lite-DaUVFjkg.js";import{B as b}from"./button-Bd7lj-RC.js";import{b as J,S as K,c as Q,a as i}from"./Video-DxdjObNx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfHxkNiw.js";import"./spinner-DRWNP2Tu.js";import"./use-merge-refs-CSCaPARn.js";import"./useId-DUMseIPd.js";const X=v.forwardRef(function({className:r,count:n,maxCount:s,variant:f="base",...x},H){return e.jsx("span",{className:U("ds-badge",r),"data-count":n&&s&&n>s?`${s}+`:n,"data-variant":f,ref:H,...x})}),A=v.forwardRef(function({className:r,overlap:n="rectangle",placement:s="top-right",...f},x){return e.jsx("span",{className:U("ds-badge--position",r),"data-overlap":n,"data-placement":s,ref:x,...f})}),G=Object.assign(X,{Position:A});G.Position.displayName="Badge.Position";const t=v.forwardRef((a,r)=>e.jsx(G,{ref:r,...a}));t.displayName="Badge";const o=A;try{t.displayName="Badge",t.__docgenInfo={description:"",displayName:"Badge",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},count:{defaultValue:null,description:"The number to display in the badge",name:"count",required:!1,type:{name:"number"}},maxCount:{defaultValue:null,description:"The maximum number to display in the badge, when the count exceeds this number, the badge will display `{max}+`",name:"maxCount",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'base'"},description:"Change the background color of the badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"tinted"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the badge",name:"data-color",required:!1,type:{name:"any"}}}}}catch{}try{o.displayName="BadgePosition",o.__docgenInfo={description:"",displayName:"BadgePosition",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},placement:{defaultValue:{value:"top-right"},description:"The placement of the badge",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},overlap:{defaultValue:{value:"rectangle"},description:"Use when badge is floating to change the position of the badge",name:"overlap",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}}}}}catch{}const ie={title:"Components/Badge",component:t,tags:["autodocs"],argTypes:{count:{control:"number",description:"The number to display in the badge"},maxCount:{control:"number",description:'Maximum count before showing "+"'},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},variant:{control:"select",options:["base","tinted"],description:"Background color style",defaultValue:"base"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Color scheme",defaultValue:"accent"}}},d={name:"Example Default (Status)",args:{"data-color":"danger"}},l={name:"Example with Count",args:{count:7,"data-color":"accent"}},c={name:"Example with Max Count",args:{count:150,maxCount:99,"data-color":"neutral"}},m={name:"Example Large Danger Tinted",args:{count:99,"data-size":"lg","data-color":"danger",variant:"tinted"}},g={name:"Example Status Only",args:{"data-color":"success"}},p={name:"Example Floating Over Element",render:a=>e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{count:a.count,maxCount:a.maxCount,"data-size":a["data-size"],variant:a.variant,"data-color":a["data-color"]}),e.jsx("span",{style:{display:"inline-block",width:40,height:40,background:"#eee",borderRadius:"50%",marginLeft:16,marginRight:16,marginTop:16,marginBottom:16}})]}),args:{count:3,"data-color":"info","data-size":"md"}},u={name:"Example On Icon Buttons",render:a=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(b,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,count:1e3,maxCount:99,"data-color":"danger"}),e.jsx(J,{title:"Innboks",fontSize:"1.5rem"})]})}),e.jsx(b,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,count:10,"data-color":"danger"}),e.jsx(K,{title:"Meldinger",fontSize:"1.5rem"})]})}),e.jsx(b,{icon:!0,variant:"tertiary",children:e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a,"data-color":"danger"}),e.jsx(Q,{title:"Skru på video",fontSize:"1.5rem"})]})})]}),args:{"data-size":"md",variant:"base"},argTypes:{count:{control:!1},maxCount:{control:!1},"data-color":{control:!1}}},h={name:"Example Placements",render:a=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsxs(o,{placement:"top-right",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"top-left",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"bottom-right",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(o,{placement:"bottom-left",children:[e.jsx(t,{...a}),e.jsx(i,{title:"Meldinger",fontSize:"2rem"})]}),e.jsx("div",{style:{width:"100%",height:"1rem"}}),e.jsxs(o,{placement:"top-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"top-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"bottom-right",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(o,{placement:"bottom-left",overlap:"circle",children:[e.jsx(t,{...a}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]})]}),args:{"data-color":"accent","data-size":"md"},argTypes:{count:{control:!1},maxCount:{control:!1}}};var y,B,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger'
  }
}`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var C,S,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'accent'
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var P,E,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(M=g.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var O,V,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,F,N;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var L,W,$;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const de=["Default","WithCount","WithMaxCount","LargeDangerTinted","StatusOnly","FloatingOverElement","OnIconButtons","Placements"];export{d as Default,p as FloatingOverElement,m as LargeDangerTinted,u as OnIconButtons,h as Placements,g as StatusOnly,l as WithCount,c as WithMaxCount,de as __namedExportsOrder,ie as default};
