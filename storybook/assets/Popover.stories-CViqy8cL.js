import{r as L,j as e}from"./iframe-YaqNcUeM.js";import{O as Y,B as i,P as K}from"./tooltip-CYWxuQjs.js";const o=Y;try{o.displayName="Popover",o.__docgenInfo={description:"",displayName:"Popover",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},id:{defaultValue:null,description:"id to connect the trigger with the popover - required when not using Popover.Context.",name:"id",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"'top'"},description:"Placement of the popover on the trigger.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:{value:"undefined"},description:"When a boolean is provided, the popover will be controlled.",name:"open",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the popover.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the popover",name:"data-color",required:!1,type:{name:"any"}},onOpen:{defaultValue:null,description:"Callback when the popover wants to open.",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback when the popover wants to close.",name:"onClose",required:!1,type:{name:"() => void"}},autoPlacement:{defaultValue:{value:"true"},description:"Whether to enable auto placement.",name:"autoPlacement",required:!1,type:{name:"boolean"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:n,within:l,userEvent:c,waitFor:p,fn:f}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Popover",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Popover displays information or interactive elements over other content, anchored to a trigger element."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Placement of the popover relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Changes color scheme of the popover.",defaultValue:"neutral"},id:{control:"text",description:"Required ID when not using Popover.TriggerContext."},open:{control:"boolean",description:"Controls the open/closed state (controlled mode).",table:{disable:!0}},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the popover.",defaultValue:"default"},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:"text",description:"Popover content.",defaultValue:"Popover Content"}}},d={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Popover"}),e.jsx(o,{...t,children:t.children})]}),args:{children:"This is the default popover content.",placement:"bottom","data-color":"neutral",variant:"default"}},g={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(i,{popovertarget:"my-popover-example-no-context",children:"Open Popover (No Context)"}),e.jsx(o,{...t,children:t.children})]}),args:{id:"my-popover-example-no-context",children:"Content for popover without context.",placement:"right","data-color":"accent"}},u={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Confirm Action"}),e.jsxs(o,{...t,children:[e.jsx(K,{"data-size":"sm",children:"Are you sure you want to proceed?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[e.jsx(i,{"data-size":"sm",variant:"secondary",onClick:()=>alert("Cancelled"),children:"Cancel"}),e.jsx(i,{"data-size":"sm",variant:"primary",onClick:()=>alert("Confirmed"),children:"Confirm"})]})]})]}),args:{children:null,placement:"bottom-end","data-color":"neutral",variant:"tinted"},name:"With Interactive Content"},m={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Show Danger Info"}),e.jsx(o,{...t,children:t.children})]}),args:{children:"This action cannot be undone.",placement:"top","data-color":"danger",variant:"tinted"},name:"Danger Tinted"},v={render:t=>{const[s,r]=L.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(a=>!a),children:s?"Close Controlled Popover":"Open Controlled Popover"}),e.jsxs(o,{...t,open:s,onClose:()=>r(!1),children:[e.jsx(K,{"data-size":"sm",children:"This popover is controlled externally."}),e.jsx(i,{"data-size":"sm",onClick:()=>r(!1),style:{marginTop:"8px"},children:"Close Me"})]})]})},args:{children:null,placement:"bottom","data-color":"info"}},h={name:"Test: Interaction",render:()=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Popover"}),e.jsx(o,{placement:"bottom",children:"Popover test content"})]}),play:async({canvasElement:t})=>{const r=l(t).getByRole("button",{name:/open popover/i});await c.click(r);const a=l(document.body);await p(()=>{n(a.getByText("Popover test content")).toBeVisible()}),await c.click(r),await p(()=>{n(a.queryByText("Popover test content")).not.toBeVisible()})}},C={name:"Test: Escape Dismiss And Callbacks",render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Vis hurtigtaster"}),e.jsx(o,{...t,placement:"bottom",children:e.jsx(i,{type:"button",children:"Utfør handling"})})]}),args:{onOpen:f(),onClose:f()},play:async({canvasElement:t,args:s})=>{const a=l(t).getByRole("button",{name:"Vis hurtigtaster"});a.focus(),await c.keyboard("{Enter}");const b=l(document.body).getByRole("button",{name:"Utfør handling"});await p(()=>{n(b).toBeVisible(),n(s.onOpen).toHaveBeenCalledTimes(1)}),await c.keyboard("{Escape}"),await p(()=>{n(b).not.toBeVisible(),n(s.onClose).toHaveBeenCalledTimes(1),n(a).toHaveFocus()})}},x={name:"Test: Outside Click Dismiss",render:t=>e.jsxs(e.Fragment,{children:[e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne valg"}),e.jsx(o,{...t,children:"Valginnhold"})]}),e.jsx(i,{type:"button",children:"Utenfor"})]}),args:{onOpen:f(),onClose:f()},play:async({canvasElement:t,args:s})=>{const r=l(t);await c.click(r.getByRole("button",{name:"Åpne valg"}));const a=l(document.body).getByText("Valginnhold");await p(()=>n(a).toBeVisible()),await c.click(r.getByRole("button",{name:"Utenfor"})),await p(()=>{n(a).not.toBeVisible(),n(s.onOpen).toHaveBeenCalledTimes(1),n(s.onClose).toHaveBeenCalledTimes(1)})}};var y,P,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var w,B,O;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    'data-color': 'accent'
  }
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var j,V,k;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(V=u.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var E,D,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var S,z,I;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(z=v.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var q,R,F;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(R=h.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var H,U,A;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(U=C.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var W,M,N;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const J=["Default","WithoutContext","InteractiveContent","DangerTinted","Controlled","TestInteraction","TestEscapeDismissAndCallbacks","TestOutsideClickDismiss"],Z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:v,DangerTinted:m,Default:d,InteractiveContent:u,TestEscapeDismissAndCallbacks:C,TestInteraction:h,TestOutsideClickDismiss:x,WithoutContext:g,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{v as C,m as D,u as I,Z as P,g as W};
