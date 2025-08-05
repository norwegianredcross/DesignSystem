import{j as e,r as I}from"./iframe-BagKezlM.js";import{P as w}from"./index-DbIw0Ded.js";import{B as t}from"./Button-CaS7JG-o.js";import{P as V}from"./Paragraph-D6aNOb5O.js";import"./preload-helper-C1FmrZbK.js";import"./floating-ui.dom-D8S3B1vO.js";import"./floating-ui.react-KqRGCIp5.js";import"./index-CINeIW-J.js";import"./index-BYMxJ67J.js";import"./index-UUdmfCXh.js";import"./lite-DaUVFjkg.js";import"./Spinner-DEavn-Na.js";const r=w;try{r.displayName="Popover",r.__docgenInfo={description:"",displayName:"Popover",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"tinted"'},{value:'"default"'}]}},"data-color":{defaultValue:null,description:"",name:"data-color",required:!1,type:{name:"string"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},autoPlacement:{defaultValue:null,description:"",name:"autoPlacement",required:!1,type:{name:"boolean"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const M={title:"Components/Popover",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Popover displays information or interactive elements over other content, anchored to a trigger element."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Placement of the popover relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Changes color scheme of the popover.",defaultValue:"neutral"},id:{control:"text",description:"Required ID when not using Popover.TriggerContext."},open:{control:"boolean",description:"Controls the open/closed state (controlled mode).",table:{disable:!0}},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the popover.",defaultValue:"default"},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:"text",description:"Popover content.",defaultValue:"Popover Content"}}},n={render:o=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Popover"}),e.jsx(r,{...o,children:o.children})]}),args:{children:"This is the default popover content.",placement:"bottom","data-color":"neutral",variant:"default"}},a={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(t,{popovertarget:"my-popover-example-no-context",children:"Open Popover (No Context)"}),e.jsx(r,{...o,children:o.children})]}),args:{id:"my-popover-example-no-context",children:"Content for popover without context.",placement:"right","data-color":"accent"}},l={render:o=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Confirm Action"}),e.jsxs(r,{...o,children:[e.jsx(V,{"data-size":"sm",children:"Are you sure you want to proceed?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[e.jsx(t,{"data-size":"sm",variant:"secondary",onClick:()=>alert("Cancelled"),children:"Cancel"}),e.jsx(t,{"data-size":"sm",variant:"primary",onClick:()=>alert("Confirmed"),children:"Confirm"})]})]})]}),args:{children:null,placement:"bottom-end","data-color":"neutral",variant:"tinted"},name:"With Interactive Content"},s={render:o=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Show Danger Info"}),e.jsx(r,{...o,children:o.children})]}),args:{children:"This action cannot be undone.",placement:"top","data-color":"danger",variant:"tinted"},name:"Danger Tinted"},i={render:o=>{const[p,d]=I.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>d(z=>!z),children:p?"Close Controlled Popover":"Open Controlled Popover"}),e.jsxs(r,{...o,open:p,onClose:()=>d(!1),children:[e.jsx(V,{"data-size":"sm",children:"This popover is controlled externally."}),e.jsx(t,{"data-size":"sm",onClick:()=>d(!1),style:{marginTop:"8px"},children:"Close Me"})]})]})},args:{children:null,placement:"bottom","data-color":"info"}};var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,C,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var P,y,T;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var b,j,O;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const $=["Default","WithoutContext","InteractiveContent","DangerTinted","Controlled"];export{i as Controlled,s as DangerTinted,n as Default,l as InteractiveContent,a as WithoutContext,$ as __namedExportsOrder,M as default};
