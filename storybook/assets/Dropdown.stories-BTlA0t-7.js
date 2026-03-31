import{j as o,r as S}from"./iframe-Br9Et5Zo.js";import{D as e}from"./index-BZixIdJK.js";import{B as v}from"./index-DIDtgV1A.js";import{P as _}from"./tooltip-ClCjO86Y.js";const{expect:l,within:m,userEvent:w,waitFor:g}=__STORYBOOK_MODULE_TEST__,H={title:"Components/Dropdown",component:e,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},d={render:t=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open Dropdown"}),o.jsxs(e,{...t,children:[o.jsx(e.Heading,{children:"Options"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},s={render:t=>o.jsxs(o.Fragment,{children:[o.jsx(v,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),o.jsxs(e,{...t,children:[o.jsx(e.Heading,{children:"Menu"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Action 1"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},a={render:t=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open (Top)"}),o.jsx(e,{...t,children:o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Item A"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},i={render:t=>{const[c,n]=S.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(v,{onClick:()=>n(r=>!r),children:c?"Close Controlled":"Open Controlled"}),o.jsx(e,{...t,open:c,onClose:()=>n(!1),children:o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>n(!1),children:"Close Me"})}),o.jsx(e.Item,{children:o.jsx(_,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}},p={name:"Test: Interaction",render:()=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open Dropdown"}),o.jsxs(e,{placement:"bottom-start",children:[o.jsx(e.Heading,{children:"Options"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Edit"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Copy"})})]})]})]}),play:async({canvasElement:t})=>{const n=m(t).getByRole("button",{name:/open dropdown/i});await w.click(n);const r=m(document.body);await g(()=>{l(r.getByText("Edit")).toBeVisible()});const L=r.getByText("Edit");l(L).toBeInTheDocument(),await w.click(n),await g(()=>{l(r.queryByText("Edit")).not.toBeVisible()})}};var D,u,x;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(u=d.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,B,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,j,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var y,T,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var f,k,E;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const P=["Default","WithoutContext","TopPlacement","Controlled","TestInteraction"],F=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:d,TestInteraction:p,TopPlacement:a,WithoutContext:s,__namedExportsOrder:P,default:H},Symbol.toStringTag,{value:"Module"}));export{i as C,F as D,a as T,s as W,d as a};
