import{r as z,j as e}from"./iframe-YaqNcUeM.js";import{D as o}from"./index-CFlsM3aq.js";import{B}from"./index-DtrLEAbF.js";import{P as U}from"./tooltip-CYWxuQjs.js";const{expect:r,within:i,userEvent:d,waitFor:c,fn:x}=__STORYBOOK_MODULE_TEST__,W={title:"Components/Dropdown",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},l={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dropdown"}),e.jsxs(o,{...t,children:[e.jsx(o.Heading,{children:"Options"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},p={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(B,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),e.jsxs(o,{...t,children:[e.jsx(o.Heading,{children:"Menu"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Action 1"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},m={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Top)"}),e.jsx(o,{...t,children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Item A"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},g={render:t=>{const[s,n]=z.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(B,{onClick:()=>n(a=>!a),children:s?"Close Controlled":"Open Controlled"}),e.jsx(o,{...t,open:s,onClose:()=>n(!1),children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>n(!1),children:"Close Me"})}),e.jsx(o.Item,{children:e.jsx(U,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}},w={name:"Test: Interaction",render:()=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dropdown"}),e.jsxs(o,{placement:"bottom-start",children:[e.jsx(o.Heading,{children:"Options"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Edit"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Copy"})})]})]})]}),play:async({canvasElement:t})=>{const n=i(t).getByRole("button",{name:/open dropdown/i});await d.click(n);const a=i(document.body);await c(()=>{r(a.getByText("Edit")).toBeVisible()});const b=a.getByText("Edit");r(b).toBeInTheDocument(),await d.click(n),await c(()=>{r(a.queryByText("Edit")).not.toBeVisible()})}},u={name:"Test: Keyboard Flow And Dismiss",render:t=>{const[s,n]=z.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Handlinger"}),e.jsxs(o,{...t,placement:"bottom-start",children:[e.jsx(o.Heading,{children:"Dokumenthandlinger"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>n("Rediger valgt"),children:"Rediger"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Kopier"})})]})]})]}),s&&e.jsx("p",{role:"status",children:s})]})},args:{onOpen:x(),onClose:x()},play:async({canvasElement:t,args:s})=>{const n=i(t),a=n.getByRole("button",{name:"Handlinger"});a.focus(),await d.keyboard("{Enter}");const h=i(document.body).getByRole("button",{name:"Rediger"});await c(()=>r(h).toBeVisible()),await d.tab(),r(h).toHaveFocus(),await d.keyboard("{Enter}"),r(n.getByRole("status")).toHaveTextContent("Rediger valgt"),r(s.onOpen).toHaveBeenCalledTimes(1),await d.keyboard("{Escape}"),await c(()=>{r(h).not.toBeVisible(),r(s.onClose).toHaveBeenCalledTimes(1),r(a).toHaveFocus()})}},D={name:"Test: Outside Click Dismiss",render:t=>e.jsxs(e.Fragment,{children:[e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne meny"}),e.jsx(o,{...t,children:e.jsx(o.List,{children:e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Last ned"})})})})]}),e.jsx(B,{type:"button",children:"Utenfor menyen"})]}),args:{onOpen:x(),onClose:x()},play:async({canvasElement:t,args:s})=>{const n=i(t);await d.click(n.getByRole("button",{name:"Åpne meny"}));const a=i(document.body).getByRole("button",{name:"Last ned"});await c(()=>r(a).toBeVisible()),await d.click(n.getByRole("button",{name:"Utenfor menyen"})),await c(()=>{r(a).not.toBeVisible(),r(s.onOpen).toHaveBeenCalledTimes(1),r(s.onClose).toHaveBeenCalledTimes(1)})}};var y,C,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Dropdown.TriggerContext>
      <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.Heading>Options</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => alert('Edit clicked')}>
              Edit
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => alert('Copy clicked')}>
              Copy
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => alert('Delete clicked')} data-color="danger">
              Delete
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>,
  args: {
    placement: 'bottom-start',
    'data-color': 'neutral'
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,I,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <>
      <Button popovertarget="my-dropdown-example">Open Dropdown (No Context)</Button>
      <Dropdown {...args}>
        <Dropdown.Heading>Menu</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Action 1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Action 2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>,
  args: {
    id: 'my-dropdown-example',
    'data-color': 'brand1'
  }
}`,...(v=(I=p.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var k,O,f;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Dropdown.TriggerContext>
      <Dropdown.Trigger>Open (Top)</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item A</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Item B</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>,
  args: {
    placement: 'top-start',
    'data-color': 'brand2'
  }
}`,...(f=(O=m.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var E,H,L;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(o => !o)}>
          {isOpen ? 'Close Controlled' : 'Open Controlled'}
        </Button>
        <Dropdown {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button onClick={() => setIsOpen(false)}>
                Close Me
              </Dropdown.Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Paragraph data-size="sm">State is controlled externally.</Paragraph>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </>;
  },
  args: {
    placement: 'bottom',
    'data-color': 'accent'
  }
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,F,S;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Dropdown.TriggerContext>
      <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
      <Dropdown placement="bottom-start">
        <Dropdown.Heading>Options</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Edit</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Copy</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click trigger to open dropdown
    const trigger = canvas.getByRole('button', {
      name: /open dropdown/i
    });
    await userEvent.click(trigger);

    // Dropdown items should be visible
    const body = within(document.body);
    await waitFor(() => {
      expect(body.getByText('Edit')).toBeVisible();
    });

    // Click a menu item
    const editButton = body.getByText('Edit');
    expect(editButton).toBeInTheDocument();

    // Close by clicking trigger again
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(body.queryByText('Edit')).not.toBeVisible();
    });
  }
}`,...(S=(F=w.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var V,A,_;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Keyboard Flow And Dismiss',
  render: args => {
    const [action, setAction] = useState('');
    return <>
        <Dropdown.TriggerContext>
          <Dropdown.Trigger>Handlinger</Dropdown.Trigger>
          <Dropdown {...args} placement="bottom-start">
            <Dropdown.Heading>Dokumenthandlinger</Dropdown.Heading>
            <Dropdown.List>
              <Dropdown.Item>
                <Dropdown.Button onClick={() => setAction('Rediger valgt')}>
                  Rediger
                </Dropdown.Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.Button>Kopier</Dropdown.Button>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Dropdown.TriggerContext>
        {action && <p role="status">{action}</p>}
      </>;
  },
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
      name: 'Handlinger'
    });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const body = within(document.body);
    const edit = body.getByRole('button', {
      name: 'Rediger'
    });
    await waitFor(() => expect(edit).toBeVisible());
    await userEvent.tab();
    expect(edit).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(canvas.getByRole('status')).toHaveTextContent('Rediger valgt');
    expect(args.onOpen).toHaveBeenCalledTimes(1);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(edit).not.toBeVisible();
      expect(args.onClose).toHaveBeenCalledTimes(1);
      expect(trigger).toHaveFocus();
    });
  }
}`,...(_=(A=u.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var P,K,M;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Test: Outside Click Dismiss',
  render: args => <>
      <Dropdown.TriggerContext>
        <Dropdown.Trigger>Åpne meny</Dropdown.Trigger>
        <Dropdown {...args}>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button>Last ned</Dropdown.Button>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
      <Button type="button">Utenfor menyen</Button>
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
      name: 'Åpne meny'
    }));
    const item = within(document.body).getByRole('button', {
      name: 'Last ned'
    });
    await waitFor(() => expect(item).toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Utenfor menyen'
    }));
    await waitFor(() => {
      expect(item).not.toBeVisible();
      expect(args.onOpen).toHaveBeenCalledTimes(1);
      expect(args.onClose).toHaveBeenCalledTimes(1);
    });
  }
}`,...(M=(K=D.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const q=["Default","WithoutContext","TopPlacement","Controlled","TestInteraction","TestKeyboardFlowAndDismiss","TestOutsideClickDismiss"],Q=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:l,TestInteraction:w,TestKeyboardFlowAndDismiss:u,TestOutsideClickDismiss:D,TopPlacement:m,WithoutContext:p,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{g as C,Q as D,m as T,p as W,l as a};
