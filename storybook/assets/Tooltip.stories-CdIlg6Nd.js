import{j as t}from"./iframe-DjwCKkPa.js";import{T as o}from"./index-BefX-99k.js";import{B as a}from"./tooltip-DmwsnR3H.js";const{expect:r,within:_,userEvent:d}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Tooltip displays brief information on hover or focus, often explaining icons or providing secondary details."}},layout:"centered"},argTypes:{content:{control:"text",description:"Content displayed inside the tooltip.",defaultValue:"Tooltip text"},placement:{control:"select",options:["top","right","bottom","left"],description:"Placement of the tooltip relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},children:{control:"text",description:"The trigger element (string or React element).",defaultValue:"My trigger (string)"},open:{control:"boolean",description:"Manually controls the open state (overrides internal state).",table:{disable:!0}}}},i={render:e=>t.jsx(o,{...e,children:e.children}),args:{content:"This tooltip explains the trigger text.",children:"Hover or focus me (string)",placement:"top"},name:"String Trigger"},s={render:e=>t.jsx(o,{...e,children:t.jsx(a,{children:"My trigger (button)"})}),args:{content:"This tooltip is triggered by the button.",placement:"bottom"},name:"Button Trigger"},l={render:e=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t.jsx(o,{...e,placement:"top",content:"Top Tooltip",children:t.jsx(a,{children:"Top"})}),t.jsx(o,{...e,placement:"bottom",content:"Bottom Tooltip",children:t.jsx(a,{children:"Bottom"})}),t.jsx(o,{...e,placement:"left",content:"Left Tooltip",children:t.jsx(a,{children:"Left"})}),t.jsx(o,{...e,placement:"right",content:"Right Tooltip",children:t.jsx(a,{children:"Right"})})]}),args:{content:"Tooltip content"},argTypes:{placement:{control:!1},children:{control:!1}}},c={name:"Test: Interaction",render:()=>t.jsx(o,{content:"Tooltip message",children:t.jsx(a,{children:"Hover me"})}),play:async({canvasElement:e})=>{const n=_(e).getByRole("button",{name:/tooltip message/i});r(n).toBeInTheDocument(),r(n).toHaveAttribute("data-tooltip","Tooltip message")}},p={name:"Test: Keyboard Focus Contract",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{children:"Før"}),t.jsx(o,{content:"Forklaring av lagring",placement:"bottom",autoPlacement:!1,children:t.jsx(a,{children:"Lagre"})})]}),play:async({canvasElement:e})=>{const g=_(e),n=g.getByRole("button",{name:"Forklaring av lagring"});await d.tab(),r(g.getByRole("button",{name:"Før"})).toHaveFocus(),await d.tab(),r(n).toHaveFocus(),r(n).toHaveAttribute("aria-label","Forklaring av lagring"),r(n).toHaveAttribute("data-tooltip","Forklaring av lagring"),r(n).toHaveAttribute("data-placement","bottom"),r(n).toHaveAttribute("data-autoplacement","false")}};var m,u,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{args.children}</Tooltip>,
  args: {
    content: 'This tooltip explains the trigger text.',
    children: 'Hover or focus me (string)',
    // Children provided via args
    placement: 'top'
  },
  name: 'String Trigger'
}`,...(T=(u=i.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>My trigger (button)</Button>
    </Tooltip>,
  args: {
    content: 'This tooltip is triggered by the button.',
    placement: 'bottom'
  },
  name: 'Button Trigger'
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,y,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,j,F;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var H,S,R;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Test: Keyboard Focus Contract',
  render: () => <>
      <Button>Før</Button>
      <Tooltip content="Forklaring av lagring" placement="bottom" autoPlacement={false}>
        <Button>Lagre</Button>
      </Tooltip>
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Forklaring av lagring'
    });
    await userEvent.tab();
    expect(canvas.getByRole('button', {
      name: 'Før'
    })).toHaveFocus();
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute('aria-label', 'Forklaring av lagring');
    expect(trigger).toHaveAttribute('data-tooltip', 'Forklaring av lagring');
    expect(trigger).toHaveAttribute('data-placement', 'bottom');
    expect(trigger).toHaveAttribute('data-autoplacement', 'false');
  }
}`,...(R=(S=p.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const A=["DefaultStringTrigger","ButtonTrigger","Placements","TestInteraction","TestKeyboardFocusContract"],D=Object.freeze(Object.defineProperty({__proto__:null,ButtonTrigger:s,DefaultStringTrigger:i,Placements:l,TestInteraction:c,TestKeyboardFocusContract:p,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{s as B,i as D,l as P,D as T};
