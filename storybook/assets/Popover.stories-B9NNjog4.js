import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./index-D4lIrffr.js";import{P as I}from"./index-C_4LK0DB.js";import{B as t}from"./Button-_80U_wOV.js";import{P as w}from"./Paragraph-CJciD5B6.js";import"./floating-ui.dom-D8S3B1vO.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-Cb-ENzfG.js";import"./lite-DaUVFjkg.js";import"./Spinner-Dj2HLJn9.js";const o=I,q={title:"Components/Popover",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Popover displays information or interactive elements over other content, anchored to a trigger element."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Placement of the popover relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Changes color scheme of the popover.",defaultValue:"neutral"},id:{control:"text",description:"Required ID when not using Popover.TriggerContext."},open:{control:"boolean",description:"Controls the open/closed state (controlled mode).",table:{disable:!0}},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the popover.",defaultValue:"default"},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:"text",description:"Popover content.",defaultValue:"Popover Content"}}},n={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Popover"}),e.jsx(o,{...r,children:r.children})]}),args:{children:"This is the default popover content.",placement:"bottom","data-color":"neutral",variant:"default"}},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{popovertarget:"my-popover-example-no-context",children:"Open Popover (No Context)"}),e.jsx(o,{...r,children:r.children})]}),args:{id:"my-popover-example-no-context",children:"Content for popover without context.",placement:"right","data-color":"accent"}},s={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Confirm Action"}),e.jsxs(o,{...r,children:[e.jsx(w,{"data-size":"sm",children:"Are you sure you want to proceed?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[e.jsx(t,{"data-size":"sm",variant:"secondary",onClick:()=>alert("Cancelled"),children:"Cancel"}),e.jsx(t,{"data-size":"sm",variant:"primary",onClick:()=>alert("Confirmed"),children:"Confirm"})]})]})]}),args:{children:null,placement:"bottom-end","data-color":"neutral",variant:"tinted"},name:"With Interactive Content"},i={render:r=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Show Danger Info"}),e.jsx(o,{...r,children:r.children})]}),args:{children:"This action cannot be undone.",placement:"top","data-color":"danger",variant:"tinted"},name:"Danger Tinted"},l={render:r=>{const[c,p]=B.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>p(z=>!z),children:c?"Close Controlled Popover":"Open Controlled Popover"}),e.jsxs(o,{...r,open:c,onClose:()=>p(!1),children:[e.jsx(w,{"data-size":"sm",children:"This popover is controlled externally."}),e.jsx(t,{"data-size":"sm",onClick:()=>p(!1),style:{marginTop:"8px"},children:"Close Me"})]})]})},args:{children:null,placement:"bottom","data-color":"info"}};var d,m,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,C,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var P,T,b;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var y,j,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(j=l.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const $=["Default","WithoutContext","InteractiveContent","DangerTinted","Controlled"];export{l as Controlled,i as DangerTinted,n as Default,s as InteractiveContent,a as WithoutContext,$ as __namedExportsOrder,q as default};
