import{j as t}from"./iframe-TM5PO6Gt.js";import{T as o}from"./index-CU716MQH.js";import{B as a}from"./tooltip-nTTVuOqD.js";const{expect:r,within:A,userEvent:d}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Tooltip displays brief information on hover or focus, often explaining icons or providing secondary details."}},layout:"centered"},argTypes:{content:{control:"text",description:"Content displayed inside the tooltip.",defaultValue:"Tooltip text"},placement:{control:"select",options:["top","right","bottom","left"],description:"Placement of the tooltip relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},children:{control:"text",description:"The trigger element (string or React element).",defaultValue:"My trigger (string)"},open:{control:"boolean",description:"Manually controls the open state (overrides internal state).",table:{disable:!0}}}},i={render:e=>t.jsx(o,{...e,children:e.children}),args:{content:"This tooltip explains the trigger text.",children:"Hover or focus me (string)",placement:"top"},name:"String Trigger"},s={render:e=>t.jsx(o,{...e,children:t.jsx(a,{children:"My trigger (button)"})}),args:{content:"This tooltip is triggered by the button.",placement:"bottom"},name:"Button Trigger"},c={render:e=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t.jsx(o,{...e,placement:"top",content:"Top Tooltip",children:t.jsx(a,{children:"Top"})}),t.jsx(o,{...e,placement:"bottom",content:"Bottom Tooltip",children:t.jsx(a,{children:"Bottom"})}),t.jsx(o,{...e,placement:"left",content:"Left Tooltip",children:t.jsx(a,{children:"Left"})}),t.jsx(o,{...e,placement:"right",content:"Right Tooltip",children:t.jsx(a,{children:"Right"})})]}),args:{content:"Tooltip content"},argTypes:{placement:{control:!1},children:{control:!1}}},l={name:"Test: Interaction",render:()=>t.jsx(o,{content:"Tooltip message",children:t.jsx(a,{children:"Hover me"})}),play:async({canvasElement:e})=>{const n=A(e).getByRole("button",{name:"Hover me"});r(n).toHaveAccessibleDescription("Tooltip message"),r(n).toHaveAttribute("data-tooltip","Tooltip message")}},p={name:"Test: Keyboard Focus Contract",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{children:"Før"}),t.jsx(o,{content:"Forklaring av lagring",placement:"bottom",autoPlacement:!1,children:t.jsx(a,{children:"Lagre"})})]}),play:async({canvasElement:e})=>{const g=A(e),n=g.getByRole("button",{name:"Lagre"});await d.tab(),r(g.getByRole("button",{name:"Før"})).toHaveFocus(),await d.tab(),r(n).toHaveFocus(),r(n).toHaveAccessibleDescription("Forklaring av lagring"),r(n).toHaveAttribute("data-tooltip","Forklaring av lagring"),r(n).toHaveAttribute("data-placement","bottom"),r(n).toHaveAttribute("data-autoplacement","false")}};var m,u,T;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{args.children}</Tooltip>,
  args: {
    content: 'This tooltip explains the trigger text.',
    children: 'Hover or focus me (string)',
    // Children provided via args
    placement: 'top'
  },
  name: 'String Trigger'
}`,...(T=(u=i.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var h,v,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>My trigger (button)</Button>
    </Tooltip>,
  args: {
    content: 'This tooltip is triggered by the button.',
    placement: 'bottom'
  },
  name: 'Button Trigger'
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,y,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,j,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Tooltip content="Tooltip message">
      <Button>Hover me</Button>
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The trigger keeps its own accessible NAME; the tooltip text is its
    // accessible DESCRIPTION (aria-description). Digdir <1.21 overwrote the
    // name with aria-label, which the old assertion encoded.
    const trigger = canvas.getByRole('button', {
      name: 'Hover me'
    });
    expect(trigger).toHaveAccessibleDescription('Tooltip message');

    // Tooltip content is rendered via CSS (data-tooltip attribute + pseudo-elements)
    expect(trigger).toHaveAttribute('data-tooltip', 'Tooltip message');
  }
}`,...(H=(j=l.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var F,S,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      name: 'Lagre'
    });
    await userEvent.tab();
    expect(canvas.getByRole('button', {
      name: 'Før'
    })).toHaveFocus();
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAccessibleDescription('Forklaring av lagring');
    expect(trigger).toHaveAttribute('data-tooltip', 'Forklaring av lagring');
    expect(trigger).toHaveAttribute('data-placement', 'bottom');
    expect(trigger).toHaveAttribute('data-autoplacement', 'false');
  }
}`,...(R=(S=p.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const _=["DefaultStringTrigger","ButtonTrigger","Placements","TestInteraction","TestKeyboardFocusContract"],L=Object.freeze(Object.defineProperty({__proto__:null,ButtonTrigger:s,DefaultStringTrigger:i,Placements:c,TestInteraction:l,TestKeyboardFocusContract:p,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{s as B,i as D,c as P,L as T};
