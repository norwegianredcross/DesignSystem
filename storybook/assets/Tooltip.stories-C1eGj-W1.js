import{j as t}from"./iframe-Bp0vmf9v.js";import{T as o}from"./index-BIB63nIt.js";import{B as n}from"./button-DASMQkNv.js";const{expect:c,within:p,userEvent:g,waitFor:w}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Tooltip displays brief information on hover or focus, often explaining icons or providing secondary details."}},layout:"centered"},argTypes:{content:{control:"text",description:"Content displayed inside the tooltip.",defaultValue:"Tooltip text"},placement:{control:"select",options:["top","right","bottom","left"],description:"Placement of the tooltip relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},children:{control:"text",description:"The trigger element (string or React element).",defaultValue:"My trigger (string)"},open:{control:"boolean",description:"Manually controls the open state (overrides internal state).",table:{disable:!0}}}},r={render:e=>t.jsx(o,{...e,children:e.children}),args:{content:"This tooltip explains the trigger text.",children:"Hover or focus me (string)",placement:"top"},name:"String Trigger"},i={render:e=>t.jsx(o,{...e,children:t.jsx(n,{children:"My trigger (button)"})}),args:{content:"This tooltip is triggered by the button.",placement:"bottom"},name:"Button Trigger"},a={render:e=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t.jsx(o,{...e,placement:"top",content:"Top Tooltip",children:t.jsx(n,{children:"Top"})}),t.jsx(o,{...e,placement:"bottom",content:"Bottom Tooltip",children:t.jsx(n,{children:"Bottom"})}),t.jsx(o,{...e,placement:"left",content:"Left Tooltip",children:t.jsx(n,{children:"Left"})}),t.jsx(o,{...e,placement:"right",content:"Right Tooltip",children:t.jsx(n,{children:"Right"})})]}),args:{content:"Tooltip content"},argTypes:{placement:{control:!1},children:{control:!1}}},s={name:"Test: Interaction",render:()=>t.jsx(o,{content:"Tooltip message",children:t.jsx(n,{children:"Hover me"})}),play:async({canvasElement:e})=>{const l=p(e).getByRole("button",{name:/hover me/i});c(l).toBeInTheDocument(),await g.hover(l);const S=p(document.body);await w(()=>{c(S.getByText("Tooltip message")).toBeInTheDocument()}),await g.unhover(l)}};var d,m,T;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{args.children}</Tooltip>,
  args: {
    content: 'This tooltip explains the trigger text.',
    children: 'Hover or focus me (string)',
    // Children provided via args
    placement: 'top'
  },
  name: 'String Trigger'
}`,...(T=(m=r.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var u,h,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>My trigger (button)</Button>
    </Tooltip>,
  args: {
    content: 'This tooltip is triggered by the button.',
    placement: 'bottom'
  },
  name: 'Button Trigger'
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,y,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,b,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Tooltip content="Tooltip message">
      <Button>Hover me</Button>
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Trigger button should exist
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    expect(trigger).toBeInTheDocument();

    // Hover to show tooltip
    await userEvent.hover(trigger);

    // Tooltip text should appear in DOM
    const body = within(document.body);
    await waitFor(() => {
      expect(body.getByText('Tooltip message')).toBeInTheDocument();
    });

    // Unhover
    await userEvent.unhover(trigger);
  }
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const D=["DefaultStringTrigger","ButtonTrigger","Placements","TestInteraction"],M=Object.freeze(Object.defineProperty({__proto__:null,ButtonTrigger:i,DefaultStringTrigger:r,Placements:a,TestInteraction:s,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{i as B,r as D,a as P,M as T};
