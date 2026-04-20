import{j as t}from"./iframe-B7CwtMXO.js";import{T as o}from"./index-CSCJ67fs.js";import{B as n}from"./tooltip-Bp-gvx6B.js";const{expect:c,within:v}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Tooltip displays brief information on hover or focus, often explaining icons or providing secondary details."}},layout:"centered"},argTypes:{content:{control:"text",description:"Content displayed inside the tooltip.",defaultValue:"Tooltip text"},placement:{control:"select",options:["top","right","bottom","left"],description:"Placement of the tooltip relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},children:{control:"text",description:"The trigger element (string or React element).",defaultValue:"My trigger (string)"},open:{control:"boolean",description:"Manually controls the open state (overrides internal state).",table:{disable:!0}}}},r={render:e=>t.jsx(o,{...e,children:e.children}),args:{content:"This tooltip explains the trigger text.",children:"Hover or focus me (string)",placement:"top"},name:"String Trigger"},i={render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"My trigger (button)"})}),args:{content:"This tooltip is triggered by the button.",placement:"bottom"},name:"Button Trigger"},s={render:e=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t.jsx(o,{...e,placement:"top",content:"Top Tooltip",children:t.jsx(n,{children:"Top"})}),t.jsx(o,{...e,placement:"bottom",content:"Bottom Tooltip",children:t.jsx(n,{children:"Bottom"})}),t.jsx(o,{...e,placement:"left",content:"Left Tooltip",children:t.jsx(n,{children:"Left"})}),t.jsx(o,{...e,placement:"right",content:"Right Tooltip",children:t.jsx(n,{children:"Right"})})]}),args:{content:"Tooltip content"},argTypes:{placement:{control:!1},children:{control:!1}}},a={name:"Test: Interaction",render:()=>t.jsx(o,{content:"Tooltip message",children:t.jsx(n,{children:"Hover me"})}),play:async({canvasElement:e})=>{const l=v(e).getByRole("button",{name:/tooltip message/i});c(l).toBeInTheDocument(),c(l).toHaveAttribute("data-tooltip","Tooltip message")}};var p,g,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{args.children}</Tooltip>,
  args: {
    content: 'This tooltip explains the trigger text.',
    children: 'Hover or focus me (string)',
    // Children provided via args
    placement: 'top'
  },
  name: 'String Trigger'
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,T,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>My trigger (button)</Button>
    </Tooltip>,
  args: {
    content: 'This tooltip is triggered by the button.',
    placement: 'bottom'
  },
  name: 'Button Trigger'
}`,...(u=(T=i.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var h,x,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,B,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Tooltip content="Tooltip message">
      <Button>Hover me</Button>
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Trigger button should exist (aria-label is set to tooltip content by designsystemet)
    const trigger = canvas.getByRole('button', {
      name: /tooltip message/i
    });
    expect(trigger).toBeInTheDocument();

    // Tooltip content is rendered via CSS (data-tooltip attribute + pseudo-elements)
    expect(trigger).toHaveAttribute('data-tooltip', 'Tooltip message');
  }
}`,...(b=(B=a.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const S=["DefaultStringTrigger","ButtonTrigger","Placements","TestInteraction"],E=Object.freeze(Object.defineProperty({__proto__:null,ButtonTrigger:i,DefaultStringTrigger:r,Placements:s,TestInteraction:a,__namedExportsOrder:S,default:j},Symbol.toStringTag,{value:"Module"}));export{i as B,r as D,s as P,E as T};
