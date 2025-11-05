import{r as d,j as e}from"./iframe-BC5HkS_i.js";import{c as T}from"./lite-DaUVFjkg.js";import{P as O,a as k,b as L}from"./popover-trigger-CqrGUImp.js";import{B as N}from"./button-DbHsZBiM.js";import{H as P}from"./heading-CSxZ9tU1.js";import{B as I}from"./index-HCp_cehE.js";import{P as H}from"./paragraph-r4sOLw4F.js";import"./preload-helper-Dp1pzeXC.js";import"./floating-ui.dom-BOb7AeKv.js";import"./index-DWKGY2hz.js";import"./use-merge-refs-BkbeGo7a.js";import"./spinner-kEjbZ4J0.js";const V=d.forwardRef(function({placement:a="bottom-end",className:n,...r},B){return e.jsx(O,{className:T("ds-dropdown",n),placement:a,ref:B,...r})}),q=d.forwardRef(function({...a},n){return e.jsx(N,{ref:n,variant:"tertiary",...a})}),S=d.forwardRef(function({className:a,...n},r){return e.jsx(P,{ref:r,...n})}),_=d.forwardRef(function({className:a,...n},r){return e.jsx("li",{ref:r,...n})}),z=d.forwardRef(function({className:a,...n},r){return e.jsx("ul",{ref:r,...n})}),R=d.forwardRef(function({asChild:a,...n},r){return e.jsx(k,{ref:r,...n})}),v=({children:t})=>e.jsx(L,{children:t});v.displayName="DropdownTriggerContext";const s=Object.assign(V,{TriggerContext:v,Heading:S,List:z,Item:_,Button:q,Trigger:R});s.TriggerContext.displayName="Dropdown.TriggerContext";s.List.displayName="Dropdown.List";s.Heading.displayName="Dropdown.Heading";s.Item.displayName="Dropdown.Item";s.Button.displayName="Dropdown.Button";s.Trigger.displayName="Dropdown.Trigger";const o=s;try{o.displayName="Dropdown",o.__docgenInfo={description:"",displayName:"Dropdown",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.
Change the color scheme of the popover`,name:"data-color",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"id to connect the trigger with the popover - required when not using Popover.Context.",name:"id",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"undefined"},description:"When a boolean is provided, the popover will be controlled.",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"Callback when the popover wants to open.",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback when the popover wants to close.",name:"onClose",required:!1,type:{name:"() => void"}},autoPlacement:{defaultValue:{value:"true"},description:"Whether to enable auto placement.",name:"autoPlacement",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom-end"},description:"The placement of the dropdown",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}}}}}catch{}const Y={title:"Components/Dropdown",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},l={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dropdown"}),e.jsxs(o,{...t,children:[e.jsx(o.Heading,{children:"Options"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},p={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(I,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),e.jsxs(o,{...t,children:[e.jsx(o.Heading,{children:"Menu"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Action 1"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},i={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Top)"}),e.jsx(o,{...t,children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Item A"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},c={render:t=>{const[a,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{onClick:()=>n(r=>!r),children:a?"Close Controlled":"Open Controlled"}),e.jsx(o,{...t,open:a,onClose:()=>n(!1),children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>n(!1),children:"Close Me"})}),e.jsx(o.Item,{children:e.jsx(H,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,D,h;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(D=p.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var f,x,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,b,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const Z=["Default","WithoutContext","TopPlacement","Controlled"];export{c as Controlled,l as Default,i as TopPlacement,p as WithoutContext,Z as __namedExportsOrder,Y as default};
