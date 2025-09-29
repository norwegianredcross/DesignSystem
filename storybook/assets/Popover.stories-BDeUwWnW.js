import{j as e,r as k}from"./iframe-DzHbI1Bv.js";import{P as I,a as q,b as B}from"./popover-trigger-CKx_tuZQ.js";import{B as t}from"./button-BtbJBmjo.js";import{P as z}from"./paragraph-DYKqBuhr.js";import"./preload-helper-Dp1pzeXC.js";import"./floating-ui.dom-BOb7AeKv.js";import"./index-B-a3BGFc.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-B76l2vM2.js";import"./spinner-C6XrOK33.js";const d=Object.assign(I,{TriggerContext:B,Trigger:q});d.TriggerContext.displayName="Popover.TriggerContext";d.Trigger.displayName="Popover.Trigger";const o=d;try{o.displayName="Popover",o.__docgenInfo={description:"",displayName:"Popover",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},id:{defaultValue:null,description:"id to connect the trigger with the popover - required when not using Popover.Context.",name:"id",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"'top'"},description:"Placement of the popover on the trigger.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:{value:"undefined"},description:"When a boolean is provided, the popover will be controlled.",name:"open",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the popover.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the popover",name:"data-color",required:!1,type:{name:"any"}},onOpen:{defaultValue:null,description:"Callback when the popover wants to open.",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback when the popover wants to close.",name:"onClose",required:!1,type:{name:"() => void"}},autoPlacement:{defaultValue:{value:"true"},description:"Whether to enable auto placement.",name:"autoPlacement",required:!1,type:{name:"boolean"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/Popover",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Popover displays information or interactive elements over other content, anchored to a trigger element."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Placement of the popover relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Changes color scheme of the popover.",defaultValue:"neutral"},id:{control:"text",description:"Required ID when not using Popover.TriggerContext."},open:{control:"boolean",description:"Controls the open/closed state (controlled mode).",table:{disable:!0}},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the popover.",defaultValue:"default"},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:"text",description:"Popover content.",defaultValue:"Popover Content"}}},n={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Popover"}),e.jsx(o,{...r,children:r.children})]}),args:{children:"This is the default popover content.",placement:"bottom","data-color":"neutral",variant:"default"}},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{popovertarget:"my-popover-example-no-context",children:"Open Popover (No Context)"}),e.jsx(o,{...r,children:r.children})]}),args:{id:"my-popover-example-no-context",children:"Content for popover without context.",placement:"right","data-color":"accent"}},l={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Confirm Action"}),e.jsxs(o,{...r,children:[e.jsx(z,{"data-size":"sm",children:"Are you sure you want to proceed?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[e.jsx(t,{"data-size":"sm",variant:"secondary",onClick:()=>alert("Cancelled"),children:"Cancel"}),e.jsx(t,{"data-size":"sm",variant:"primary",onClick:()=>alert("Confirmed"),children:"Confirm"})]})]})]}),args:{children:null,placement:"bottom-end","data-color":"neutral",variant:"tinted"},name:"With Interactive Content"},s={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Show Danger Info"}),e.jsx(o,{...r,children:r.children})]}),args:{children:"This action cannot be undone.",placement:"top","data-color":"danger",variant:"tinted"},name:"Danger Tinted"},i={render:r=>{const[c,p]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>p(V=>!V),children:c?"Close Controlled Popover":"Open Controlled Popover"}),e.jsxs(o,{...r,open:c,onClose:()=>p(!1),children:[e.jsx(z,{"data-size":"sm",children:"This popover is controlled externally."}),e.jsx(t,{"data-size":"sm",onClick:()=>p(!1),style:{marginTop:"8px"},children:"Close Me"})]})]})},args:{children:null,placement:"bottom","data-color":"info"}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>\r
      <Popover.Trigger>Open Popover</Popover.Trigger>\r
      <Popover {...args}>{args.children}</Popover>\r
    </Popover.TriggerContext>,
  args: {
    children: 'This is the default popover content.',
    placement: 'bottom',
    'data-color': 'neutral',
    variant: 'default'
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,v,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>\r
      <Button popovertarget="my-popover-example-no-context">\r
        Open Popover (No Context)\r
      </Button>\r
      <Popover {...args}>{args.children}</Popover>\r
    </>,
  args: {
    id: 'my-popover-example-no-context',
    children: 'Content for popover without context.',
    placement: 'right',
    'data-color': 'accent'
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,x,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>\r
      <Popover.Trigger>Confirm Action</Popover.Trigger>\r
      <Popover {...args}>\r
        <Paragraph data-size="sm">Are you sure you want to proceed?</Paragraph>\r
        <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '8px'
      }}>\r
          <Button data-size="sm" variant="secondary" onClick={() => alert('Cancelled')}>\r
            Cancel\r
          </Button>\r
          <Button data-size="sm" variant="primary" onClick={() => alert('Confirmed')}>\r
            Confirm\r
          </Button>\r
        </div>\r
      </Popover>\r
    </Popover.TriggerContext>,
  args: {
    children: null,
    placement: 'bottom-end',
    'data-color': 'neutral',
    variant: 'tinted'
  },
  name: 'With Interactive Content'
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var b,y,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>\r
      <Popover.Trigger>Show Danger Info</Popover.Trigger>\r
      <Popover {...args}>{args.children}</Popover>\r
    </Popover.TriggerContext>,
  args: {
    children: 'This action cannot be undone.',
    placement: 'top',
    'data-color': 'danger',
    variant: 'tinted'
  },
  name: 'Danger Tinted'
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,O,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(o => !o)}>\r
          {isOpen ? 'Close Controlled Popover' : 'Open Controlled Popover'}\r
        </Button>\r
        {/* Pass open and onClose */}\r
        <Popover {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
          <Paragraph data-size="sm">This popover is controlled externally.</Paragraph>\r
          <Button data-size="sm" onClick={() => setIsOpen(false)} style={{
          marginTop: '8px'
        }}>Close Me</Button>\r
        </Popover>\r
      </>;
  },
  args: {
    children: null,
    placement: 'bottom',
    'data-color': 'info'
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const G=["Default","WithoutContext","InteractiveContent","DangerTinted","Controlled"];export{i as Controlled,s as DangerTinted,n as Default,l as InteractiveContent,a as WithoutContext,G as __namedExportsOrder,$ as default};
