import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{c as O}from"./lite-DaUVFjkg.js";import{P as k,a as L,b as H}from"./index-C_4LK0DB.js";import{B as N}from"./Button-_80U_wOV.js";import{H as v}from"./Heading-BGOStg1T.js";import{B as b}from"./index-DyXSSrOW.js";import{P}from"./Paragraph-CJciD5B6.js";import"./floating-ui.dom-D8S3B1vO.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-Cb-ENzfG.js";import"./Spinner-Dj2HLJn9.js";const R=s.forwardRef(function({placement:d="bottom-end",className:t,...n},y){return o.jsx(k,{className:O("ds-dropdown",t),placement:d,ref:y,...n})}),S=s.forwardRef(function({...d},t){return o.jsx(N,{ref:t,variant:"tertiary",...d})}),E=s.forwardRef(function({className:d,...t},n){return o.jsx(v,{ref:n,...t})}),A=s.forwardRef(function({className:d,...t},n){return o.jsx("li",{ref:n,...t})}),V=s.forwardRef(function({className:d,...t},n){return o.jsx("ul",{ref:n,...t})}),z=s.forwardRef(function({asChild:d,...t},n){return o.jsx(L,{ref:n,...t})}),T=({children:e})=>o.jsx(H,{children:e});T.displayName="DropdownTriggerContext";const a=Object.assign(R,{TriggerContext:T,Heading:E,List:V,Item:A,Button:S,Trigger:z});a.TriggerContext.displayName="Dropdown.TriggerContext";a.List.displayName="Dropdown.List";a.Heading.displayName="Dropdown.Heading";a.Item.displayName="Dropdown.Item";a.Button.displayName="Dropdown.Button";a.Trigger.displayName="Dropdown.Trigger";const r=a,oo={title:"Components/Dropdown",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},p={render:e=>o.jsxs(r.TriggerContext,{children:[o.jsx(r.Trigger,{children:"Open Dropdown"}),o.jsxs(r,{...e,children:[o.jsx(r.Heading,{children:"Options"}),o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},i={render:e=>o.jsxs(o.Fragment,{children:[o.jsx(b,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),o.jsxs(r,{...e,children:[o.jsx(r.Heading,{children:"Menu"}),o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Action 1"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},l={render:e=>o.jsxs(r.TriggerContext,{children:[o.jsx(r.Trigger,{children:"Open (Top)"}),o.jsx(r,{...e,children:o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Item A"})}),o.jsx(r.Item,{children:o.jsx(r.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},c={render:e=>{const[d,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(b,{onClick:()=>t(n=>!n),children:d?"Close Controlled":"Open Controlled"}),o.jsx(r,{...e,open:d,onClose:()=>t(!1),children:o.jsxs(r.List,{children:[o.jsx(r.Item,{children:o.jsx(r.Button,{onClick:()=>t(!1),children:"Close Me"})}),o.jsx(r.Item,{children:o.jsx(P,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}};var m,w,g;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(w=p.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var D,u,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <>\r
      <Buttons popovertarget="my-dropdown-example">Open Dropdown (No Context)</Buttons>\r
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
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var j,I,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Buttons onClick={() => setIsOpen(o => !o)}>\r
          {isOpen ? 'Close Controlled' : 'Open Controlled'}\r
        </Buttons>\r
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
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const ro=["Default","WithoutContext","TopPlacement","Controlled"];export{c as Controlled,p as Default,l as TopPlacement,i as WithoutContext,ro as __namedExportsOrder,oo as default};
