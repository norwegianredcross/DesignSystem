import{j as o,r as B}from"./iframe-BBw4IsXL.js";import{D as e}from"./index-DGSyCb9n.js";import{B as I}from"./index-CsdkJbyY.js";import{P as f}from"./paragraph-w2CQBfBi.js";const O={title:"Components/Dropdown",component:e,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},t={render:r=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open Dropdown"}),o.jsxs(e,{...r,children:[o.jsx(e.Heading,{children:"Options"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},n={render:r=>o.jsxs(o.Fragment,{children:[o.jsx(I,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),o.jsxs(e,{...r,children:[o.jsx(e.Heading,{children:"Menu"}),o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Action 1"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},d={render:r=>o.jsxs(e.TriggerContext,{children:[o.jsx(e.Trigger,{children:"Open (Top)"}),o.jsx(e,{...r,children:o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Item A"})}),o.jsx(e.Item,{children:o.jsx(e.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},s={render:r=>{const[l,a]=B.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(I,{onClick:()=>a(b=>!b),children:l?"Close Controlled":"Open Controlled"}),o.jsx(e,{...r,open:l,onClose:()=>a(!1),children:o.jsxs(e.List,{children:[o.jsx(e.Item,{children:o.jsx(e.Button,{onClick:()=>a(!1),children:"Close Me"})}),o.jsx(e.Item,{children:o.jsx(f,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}};var p,c,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Dropdown.TriggerContext>\r
      <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>\r
      <Dropdown {...args}>\r
        <Dropdown.Heading>Options</Dropdown.Heading>\r
        <Dropdown.List>\r
          <Dropdown.Item>\r
            <Dropdown.Button onClick={() => alert('Edit clicked')}>\r
              Edit\r
            </Dropdown.Button>\r
          </Dropdown.Item>\r
          <Dropdown.Item>\r
            <Dropdown.Button onClick={() => alert('Copy clicked')}>\r
              Copy\r
            </Dropdown.Button>\r
          </Dropdown.Item>\r
          <Dropdown.Item>\r
            <Dropdown.Button onClick={() => alert('Delete clicked')} data-color="danger">\r
              Delete\r
            </Dropdown.Button>\r
          </Dropdown.Item>\r
        </Dropdown.List>\r
      </Dropdown>\r
    </Dropdown.TriggerContext>,
  args: {
    placement: 'bottom-start',
    'data-color': 'neutral'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,w,D;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <>\r
      <Button popovertarget="my-dropdown-example">Open Dropdown (No Context)</Button>\r
      <Dropdown {...args}>\r
        <Dropdown.Heading>Menu</Dropdown.Heading>\r
        <Dropdown.List>\r
          <Dropdown.Item>\r
            <Dropdown.Button>Action 1</Dropdown.Button>\r
          </Dropdown.Item>\r
          <Dropdown.Item>\r
            <Dropdown.Button>Action 2</Dropdown.Button>\r
          </Dropdown.Item>\r
        </Dropdown.List>\r
      </Dropdown>\r
    </>,
  args: {
    id: 'my-dropdown-example',
    'data-color': 'brand1'
  }
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var u,g,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Dropdown.TriggerContext>\r
      <Dropdown.Trigger>Open (Top)</Dropdown.Trigger>\r
      <Dropdown {...args}>\r
        <Dropdown.List>\r
          <Dropdown.Item>\r
            <Dropdown.Button>Item A</Dropdown.Button>\r
          </Dropdown.Item>\r
          <Dropdown.Item>\r
            <Dropdown.Button>Item B</Dropdown.Button>\r
          </Dropdown.Item>\r
        </Dropdown.List>\r
      </Dropdown>\r
    </Dropdown.TriggerContext>,
  args: {
    placement: 'top-start',
    'data-color': 'brand2'
  }
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,C,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(o => !o)}>\r
          {isOpen ? 'Close Controlled' : 'Open Controlled'}\r
        </Button>\r
        <Dropdown {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
          <Dropdown.List>\r
            <Dropdown.Item>\r
              <Dropdown.Button onClick={() => setIsOpen(false)}>\r
                Close Me\r
              </Dropdown.Button>\r
            </Dropdown.Item>\r
            <Dropdown.Item>\r
              <Paragraph data-size="sm">State is controlled externally.</Paragraph>\r
            </Dropdown.Item>\r
          </Dropdown.List>\r
        </Dropdown>\r
      </>;
  },
  args: {
    placement: 'bottom',
    'data-color': 'accent'
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const T=["Default","WithoutContext","TopPlacement","Controlled"],v=Object.freeze(Object.defineProperty({__proto__:null,Controlled:s,Default:t,TopPlacement:d,WithoutContext:n,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{s as C,v as D,d as T,n as W,t as a};
