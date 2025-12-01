import{j as t}from"./iframe-CzoOjVIP.js";import{T as o}from"./index-CE5B6Ijo.js";import{B as n}from"./button-FsYbpJld.js";const h={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Tooltip displays brief information on hover or focus, often explaining icons or providing secondary details."}},layout:"centered"},argTypes:{content:{control:"text",description:"Content displayed inside the tooltip.",defaultValue:"Tooltip text"},placement:{control:"select",options:["top","right","bottom","left"],description:"Placement of the tooltip relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},children:{control:"text",description:"The trigger element (string or React element).",defaultValue:"My trigger (string)"},open:{control:"boolean",description:"Manually controls the open state (overrides internal state).",table:{disable:!0}}}},r={render:e=>t.jsx(o,{...e,children:e.children}),args:{content:"This tooltip explains the trigger text.",children:"Hover or focus me (string)",placement:"top"},name:"String Trigger"},i={render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"My trigger (button)"})}),args:{content:"This tooltip is triggered by the button.",placement:"bottom"},name:"Button Trigger"},s={render:e=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t.jsx(o,{...e,placement:"top",content:"Top Tooltip",children:t.jsx(n,{children:"Top"})}),t.jsx(o,{...e,placement:"bottom",content:"Bottom Tooltip",children:t.jsx(n,{children:"Bottom"})}),t.jsx(o,{...e,placement:"left",content:"Left Tooltip",children:t.jsx(n,{children:"Left"})}),t.jsx(o,{...e,placement:"right",content:"Right Tooltip",children:t.jsx(n,{children:"Right"})})]}),args:{content:"Tooltip content"},argTypes:{placement:{control:!1},children:{control:!1}}};var l,a,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{args.children}</Tooltip>,
  args: {
    content: 'This tooltip explains the trigger text.',
    children: 'Hover or focus me (string)',
    // Children provided via args
    placement: 'top'
  },
  name: 'String Trigger'
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,d,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>My trigger (button)</Button>
    </Tooltip>,
  args: {
    content: 'This tooltip is triggered by the button.',
    placement: 'bottom'
  },
  name: 'Button Trigger'
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,T,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '20px',
    padding: '40px'
  }}>
      {/* Spread args onto each Tooltip */}
      <Tooltip {...args} placement="top" content="Top Tooltip">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip {...args} placement="bottom" content="Bottom Tooltip">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip {...args} placement="left" content="Left Tooltip">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip {...args} placement="right" content="Right Tooltip">
        <Button>Right</Button>
      </Tooltip>
    </div>,
  args: {
    content: 'Tooltip content'
  },
  argTypes: {
    placement: {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(u=(T=s.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};const f=["DefaultStringTrigger","ButtonTrigger","Placements"],b=Object.freeze(Object.defineProperty({__proto__:null,ButtonTrigger:i,DefaultStringTrigger:r,Placements:s,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{i as B,r as D,s as P,b as T};
