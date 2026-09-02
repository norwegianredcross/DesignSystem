import{r as L,j as e}from"./iframe-Cr0d-POo.js";import{z as Y,B as i,P as K}from"./tooltip-DrR4BEE7.js";const t=Y,{expect:n,within:c,userEvent:l,waitFor:p,fn:T}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Popover",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Popover displays information or interactive elements over other content, anchored to a trigger element."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Placement of the popover relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral","danger","info","success","warning"],description:"Changes color scheme of the popover.",defaultValue:"neutral"},id:{control:"text",description:"Required ID when not using Popover.TriggerContext."},open:{control:"boolean",description:"Controls the open/closed state (controlled mode).",table:{disable:!0}},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the popover.",defaultValue:"default"},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:"text",description:"Popover content.",defaultValue:"Popover Content"}}},d={render:o=>e.jsxs(t.TriggerContext,{children:[e.jsx(t.Trigger,{children:"Open Popover"}),e.jsx(t,{...o,children:o.children})]}),args:{children:"This is the default popover content.",placement:"bottom","data-color":"neutral",variant:"default"}},g={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(i,{popovertarget:"my-popover-example-no-context",children:"Open Popover (No Context)"}),e.jsx(t,{...o,children:o.children})]}),args:{id:"my-popover-example-no-context",children:"Content for popover without context.",placement:"right","data-color":"primary-color-red"}},m={render:o=>e.jsxs(t.TriggerContext,{children:[e.jsx(t.Trigger,{children:"Confirm Action"}),e.jsxs(t,{...o,children:[e.jsx(K,{"data-size":"sm",children:"Are you sure you want to proceed?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[e.jsx(i,{"data-size":"sm",variant:"secondary",onClick:()=>alert("Cancelled"),children:"Cancel"}),e.jsx(i,{"data-size":"sm",variant:"primary",onClick:()=>alert("Confirmed"),children:"Confirm"})]})]})]}),args:{children:null,placement:"bottom-end","data-color":"neutral",variant:"tinted"},name:"With Interactive Content"},u={render:o=>e.jsxs(t.TriggerContext,{children:[e.jsx(t.Trigger,{children:"Show Danger Info"}),e.jsx(t,{...o,children:o.children})]}),args:{children:"This action cannot be undone.",placement:"top","data-color":"danger",variant:"tinted"},name:"Danger Tinted"},v={render:o=>{const[s,r]=L.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(a=>!a),children:s?"Close Controlled Popover":"Open Controlled Popover"}),e.jsxs(t,{...o,open:s,onClose:()=>r(!1),children:[e.jsx(K,{"data-size":"sm",children:"This popover is controlled externally."}),e.jsx(i,{"data-size":"sm",onClick:()=>r(!1),style:{marginTop:"8px"},children:"Close Me"})]})]})},args:{children:null,placement:"bottom","data-color":"info"}},h={name:"Test: Interaction",render:()=>e.jsxs(t.TriggerContext,{children:[e.jsx(t.Trigger,{children:"Open Popover"}),e.jsx(t,{placement:"bottom",children:"Popover test content"})]}),play:async({canvasElement:o})=>{const r=c(o).getByRole("button",{name:/open popover/i});await l.click(r);const a=c(document.body);await p(()=>{n(a.getByText("Popover test content")).toBeVisible()}),await l.click(r),await p(()=>{n(a.queryByText("Popover test content")).not.toBeVisible()})}},x={name:"Test: Escape Dismiss And Callbacks",render:o=>e.jsxs(t.TriggerContext,{children:[e.jsx(t.Trigger,{children:"Vis hurtigtaster"}),e.jsx(t,{...o,placement:"bottom",children:e.jsx(i,{type:"button",children:"Utfør handling"})})]}),args:{onOpen:T(),onClose:T()},play:async({canvasElement:o,args:s})=>{const a=c(o).getByRole("button",{name:"Vis hurtigtaster"});a.focus(),await l.keyboard("{Enter}");const y=c(document.body).getByRole("button",{name:"Utfør handling"});await p(()=>{n(y).toBeVisible(),n(s.onOpen).toHaveBeenCalledTimes(1)}),await l.keyboard("{Escape}"),await p(()=>{n(y).not.toBeVisible(),n(s.onClose).toHaveBeenCalledTimes(1),n(a).toHaveFocus()})}},C={name:"Test: Outside Click Dismiss",render:o=>e.jsxs(e.Fragment,{children:[e.jsxs(t.TriggerContext,{children:[e.jsx(t.Trigger,{children:"Åpne valg"}),e.jsx(t,{...o,children:"Valginnhold"})]}),e.jsx(i,{type:"button",children:"Utenfor"})]}),args:{onOpen:T(),onClose:T()},play:async({canvasElement:o,args:s})=>{const r=c(o);await l.click(r.getByRole("button",{name:"Åpne valg"}));const a=c(document.body).getByText("Valginnhold");await p(()=>n(a).toBeVisible()),await l.click(r.getByRole("button",{name:"Utenfor"})),await p(()=>{n(a).not.toBeVisible(),n(s.onOpen).toHaveBeenCalledTimes(1),n(s.onClose).toHaveBeenCalledTimes(1)})}};var b,P,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover {...args}>{args.children}</Popover>
    </Popover.TriggerContext>,
  args: {
    children: 'This is the default popover content.',
    placement: 'bottom',
    'data-color': 'neutral',
    variant: 'default'
  }
}`,...(f=(P=d.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var B,w,j;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <>
      <Button popovertarget="my-popover-example-no-context">
        Open Popover (No Context)
      </Button>
      <Popover {...args}>{args.children}</Popover>
    </>,
  args: {
    id: 'my-popover-example-no-context',
    children: 'Content for popover without context.',
    placement: 'right',
    'data-color': 'primary-color-red'
  }
}`,...(j=(w=g.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,k,V;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Confirm Action</Popover.Trigger>
      <Popover {...args}>
        <Paragraph data-size="sm">Are you sure you want to proceed?</Paragraph>
        <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '8px'
      }}>
          <Button data-size="sm" variant="secondary" onClick={() => alert('Cancelled')}>
            Cancel
          </Button>
          <Button data-size="sm" variant="primary" onClick={() => alert('Confirmed')}>
            Confirm
          </Button>
        </div>
      </Popover>
    </Popover.TriggerContext>,
  args: {
    children: null,
    placement: 'bottom-end',
    'data-color': 'neutral',
    variant: 'tinted'
  },
  name: 'With Interactive Content'
}`,...(V=(k=m.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var E,D,I;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Show Danger Info</Popover.Trigger>
      <Popover {...args}>{args.children}</Popover>
    </Popover.TriggerContext>,
  args: {
    children: 'This action cannot be undone.',
    placement: 'top',
    'data-color': 'danger',
    variant: 'tinted'
  },
  name: 'Danger Tinted'
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var S,z,R;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(o => !o)}>
          {isOpen ? 'Close Controlled Popover' : 'Open Controlled Popover'}
        </Button>
        {/* Pass open and onClose */}
        <Popover {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <Paragraph data-size="sm">This popover is controlled externally.</Paragraph>
          <Button data-size="sm" onClick={() => setIsOpen(false)} style={{
          marginTop: '8px'
        }}>Close Me</Button>
        </Popover>
      </>;
  },
  args: {
    children: null,
    placement: 'bottom',
    'data-color': 'info'
  }
}`,...(R=(z=v.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var F,_,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Popover.TriggerContext>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover placement="bottom">Popover test content</Popover>
    </Popover.TriggerContext>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click trigger to open popover
    const trigger = canvas.getByRole('button', {
      name: /open popover/i
    });
    await userEvent.click(trigger);

    // Popover content should be visible
    const body = within(document.body);
    await waitFor(() => {
      expect(body.getByText('Popover test content')).toBeVisible();
    });

    // Click trigger again to close
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(body.queryByText('Popover test content')).not.toBeVisible();
    });
  }
}`,...(H=(_=h.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var U,A,W;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Test: Escape Dismiss And Callbacks',
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Vis hurtigtaster</Popover.Trigger>
      <Popover {...args} placement="bottom">
        <Button type="button">Utfør handling</Button>
      </Popover>
    </Popover.TriggerContext>,
  args: {
    onOpen: fn(),
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Vis hurtigtaster'
    });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const action = within(document.body).getByRole('button', {
      name: 'Utfør handling'
    });
    await waitFor(() => {
      expect(action).toBeVisible();
      expect(args.onOpen).toHaveBeenCalledTimes(1);
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(action).not.toBeVisible();
      expect(args.onClose).toHaveBeenCalledTimes(1);
      expect(trigger).toHaveFocus();
    });
  }
}`,...(W=(A=x.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var M,q,N;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Test: Outside Click Dismiss',
  render: args => <>
      <Popover.TriggerContext>
        <Popover.Trigger>Åpne valg</Popover.Trigger>
        <Popover {...args}>Valginnhold</Popover>
      </Popover.TriggerContext>
      <Button type="button">Utenfor</Button>
    </>,
  args: {
    onOpen: fn(),
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Åpne valg'
    }));
    const content = within(document.body).getByText('Valginnhold');
    await waitFor(() => expect(content).toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Utenfor'
    }));
    await waitFor(() => {
      expect(content).not.toBeVisible();
      expect(args.onOpen).toHaveBeenCalledTimes(1);
      expect(args.onClose).toHaveBeenCalledTimes(1);
    });
  }
}`,...(N=(q=C.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const J=["Default","WithoutContext","InteractiveContent","DangerTinted","Controlled","TestInteraction","TestEscapeDismissAndCallbacks","TestOutsideClickDismiss"],Z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:v,DangerTinted:u,Default:d,InteractiveContent:m,TestEscapeDismissAndCallbacks:x,TestInteraction:h,TestOutsideClickDismiss:C,WithoutContext:g,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{v as C,u as D,m as I,Z as P,g as W};
