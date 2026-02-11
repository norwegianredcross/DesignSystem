import{j as o,r as B}from"./iframe-D4YUl7yB.js";import{D as e}from"./index-u0CVPCAK.js";import{B as I}from"./index-0RgaXo82.js";import{P as f}from"./paragraph-D3MDluRW.js";const O={title:"Components/Dropdown",component:e,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},n={render:t=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open Dropdown"}),o.jsxs(e,{...t,children:[o.jsx(e.Heading,{children:"Options"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},r={render:t=>o.jsxs(o.Fragment,{children:[o.jsx(I,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),o.jsxs(e,{...t,children:[o.jsx(e.Heading,{children:"Menu"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Action 1"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},d={render:t=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open (Top)"}),o.jsx(e,{...t,children:o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Item A"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},s={render:t=>{const[l,a]=B.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(I,{onClick:()=>a(b=>!b),children:l?"Close Controlled":"Open Controlled"}),o.jsx(e,{...t,open:l,onClose:()=>a(!1),children:o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>a(!1),children:"Close Me"})}),o.jsx(e.Item,{children:o.jsx(f,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}};var p,c,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,w,D;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(D=(w=r.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var u,g,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,C,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const T=["Default","WithoutContext","TopPlacement","Controlled"],v=Object.freeze(Object.defineProperty({__proto__:null,Controlled:s,Default:n,TopPlacement:d,WithoutContext:r,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{s as C,v as D,d as T,r as W,n as a};
