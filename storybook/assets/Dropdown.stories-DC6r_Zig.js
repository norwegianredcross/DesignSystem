import{r as d,j as e}from"./iframe-BdlBVaMh.js";import{c as T}from"./lite-DaUVFjkg.js";import{P as O,a as k,b as L}from"./popover-trigger-9Kyj896d.js";import{B as P}from"./button-CgDlDh-U.js";import{H as N}from"./heading-DstplfmI.js";import{B as I}from"./index-CwQn3zYp.js";import{P as H}from"./paragraph-Cyb83jPL.js";const V=d.forwardRef(function({placement:a="bottom-end",className:t,...n},B){return e.jsx(O,{className:T("ds-dropdown",t),placement:a,ref:B,...n})}),_=d.forwardRef(function({...a},t){return e.jsx(P,{ref:t,variant:"tertiary",...a})}),S=d.forwardRef(function({className:a,...t},n){return e.jsx(N,{ref:n,...t})}),q=d.forwardRef(function({className:a,...t},n){return e.jsx("li",{ref:n,...t})}),z=d.forwardRef(function({className:a,...t},n){return e.jsx("ul",{ref:n,...t})}),R=d.forwardRef(function({asChild:a,...t},n){return e.jsx(k,{ref:n,...t})}),v=({children:r})=>e.jsx(L,{children:r});v.displayName="DropdownTriggerContext";const s=Object.assign(V,{TriggerContext:v,Heading:S,List:z,Item:q,Button:_,Trigger:R});s.TriggerContext.displayName="Dropdown.TriggerContext";s.List.displayName="Dropdown.List";s.Heading.displayName="Dropdown.Heading";s.Item.displayName="Dropdown.Item";s.Button.displayName="Dropdown.Button";s.Trigger.displayName="Dropdown.Trigger";const o=s;try{o.displayName="Dropdown",o.__docgenInfo={description:"",displayName:"Dropdown",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"undefined"},description:"When a boolean is provided, the popover will be controlled.",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when the popover wants to close.",name:"onClose",required:!1,type:{name:"() => void"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"any"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.
Change the color scheme of the popover`,name:"data-color",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"id to connect the trigger with the popover - required when not using Popover.Context.",name:"id",required:!1,type:{name:"string"}},onOpen:{defaultValue:null,description:"Callback when the popover wants to open.",name:"onOpen",required:!1,type:{name:"() => void"}},autoPlacement:{defaultValue:{value:"true"},description:"Whether to enable auto placement.",name:"autoPlacement",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom-end"},description:"The placement of the dropdown",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left-start"'}]}}}}}catch{}const E={title:"Components/Dropdown",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"The placement of the dropdown",defaultValue:"bottom-start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},id:{control:"text",description:"id to connect the trigger with the popover - required when not using Popover.Context."},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},open:{control:"boolean",description:"When a boolean is provided, the popover will be controlled.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},children:{control:!1,description:"Dropdown content, typically Dropdown.Heading, Dropdown.List, etc."}}},l={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dropdown"}),e.jsxs(o,{...r,children:[e.jsx(o.Heading,{children:"Options"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Edit clicked"),children:"Edit"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Copy clicked"),children:"Copy"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>alert("Delete clicked"),"data-color":"danger",children:"Delete"})})]})]})]}),args:{placement:"bottom-start","data-color":"neutral"}},p={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(I,{popovertarget:"my-dropdown-example",children:"Open Dropdown (No Context)"}),e.jsxs(o,{...r,children:[e.jsx(o.Heading,{children:"Menu"}),e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Action 1"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Action 2"})})]})]})]}),args:{id:"my-dropdown-example","data-color":"brand1"}},i={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Top)"}),e.jsx(o,{...r,children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Item A"})}),e.jsx(o.Item,{children:e.jsx(o.Button,{children:"Item B"})})]})})]}),args:{placement:"top-start","data-color":"brand2"}},c={render:r=>{const[a,t]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(I,{onClick:()=>t(n=>!n),children:a?"Close Controlled":"Open Controlled"}),e.jsx(o,{...r,open:a,onClose:()=>t(!1),children:e.jsxs(o.List,{children:[e.jsx(o.Item,{children:e.jsx(o.Button,{onClick:()=>t(!1),children:"Close Me"})}),e.jsx(o.Item,{children:e.jsx(H,{"data-size":"sm",children:"State is controlled externally."})})]})})]})},args:{placement:"bottom","data-color":"accent"}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,D,h;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(D=p.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var f,x,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var b,j,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const W=["Default","WithoutContext","TopPlacement","Controlled"],Q=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:l,TopPlacement:i,WithoutContext:p,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{c as C,Q as D,i as T,p as W,l as a,o as b};
