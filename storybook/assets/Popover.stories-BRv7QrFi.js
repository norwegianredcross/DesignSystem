import{r as E,j as e}from"./iframe-CfsAtch-.js";import{N as W,B as p,P as D}from"./tooltip-DMtqqJ03.js";const o=W;try{o.displayName="Popover",o.__docgenInfo={description:"",displayName:"Popover",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},id:{defaultValue:null,description:"id to connect the trigger with the popover - required when not using Popover.Context.",name:"id",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"'top'"},description:"Placement of the popover on the trigger.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},open:{defaultValue:{value:"undefined"},description:"When a boolean is provided, the popover will be controlled.",name:"open",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the popover.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},"data-color":{defaultValue:null,description:"Change the color scheme of the popover",name:"data-color",required:!1,type:{name:"any"}},onOpen:{defaultValue:null,description:"Callback when the popover wants to open.",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback when the popover wants to close.",name:"onClose",required:!1,type:{name:"() => void"}},autoPlacement:{defaultValue:{value:"true"},description:"Whether to enable auto placement.",name:"autoPlacement",required:!1,type:{name:"boolean"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:m,within:g,userEvent:v,waitFor:h}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Popover",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Popover displays information or interactive elements over other content, anchored to a trigger element."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],description:"Placement of the popover relative to the trigger.",defaultValue:"top"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Changes color scheme of the popover.",defaultValue:"neutral"},id:{control:"text",description:"Required ID when not using Popover.TriggerContext."},open:{control:"boolean",description:"Controls the open/closed state (controlled mode).",table:{disable:!0}},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the popover.",defaultValue:"default"},onOpen:{action:"opened",description:"Callback when the popover wants to open.",table:{disable:!0}},onClose:{action:"closed",description:"Callback when the popover wants to close.",table:{disable:!0}},autoPlacement:{control:"boolean",description:"Whether to enable auto placement.",defaultValue:!0},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:"text",description:"Popover content.",defaultValue:"Popover Content"}}},n={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Popover"}),e.jsx(o,{...t,children:t.children})]}),args:{children:"This is the default popover content.",placement:"bottom","data-color":"neutral",variant:"default"}},a={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(p,{popovertarget:"my-popover-example-no-context",children:"Open Popover (No Context)"}),e.jsx(o,{...t,children:t.children})]}),args:{id:"my-popover-example-no-context",children:"Content for popover without context.",placement:"right","data-color":"accent"}},s={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Confirm Action"}),e.jsxs(o,{...t,children:[e.jsx(D,{"data-size":"sm",children:"Are you sure you want to proceed?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[e.jsx(p,{"data-size":"sm",variant:"secondary",onClick:()=>alert("Cancelled"),children:"Cancel"}),e.jsx(p,{"data-size":"sm",variant:"primary",onClick:()=>alert("Confirmed"),children:"Confirm"})]})]})]}),args:{children:null,placement:"bottom-end","data-color":"neutral",variant:"tinted"},name:"With Interactive Content"},l={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Show Danger Info"}),e.jsx(o,{...t,children:t.children})]}),args:{children:"This action cannot be undone.",placement:"top","data-color":"danger",variant:"tinted"},name:"Danger Tinted"},i={render:t=>{const[u,r]=E.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(d=>!d),children:u?"Close Controlled Popover":"Open Controlled Popover"}),e.jsxs(o,{...t,open:u,onClose:()=>r(!1),children:[e.jsx(D,{"data-size":"sm",children:"This popover is controlled externally."}),e.jsx(p,{"data-size":"sm",onClick:()=>r(!1),style:{marginTop:"8px"},children:"Close Me"})]})]})},args:{children:null,placement:"bottom","data-color":"info"}},c={name:"Test: Interaction",render:()=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Popover"}),e.jsx(o,{placement:"bottom",children:"Popover test content"})]}),play:async({canvasElement:t})=>{const r=g(t).getByRole("button",{name:/open popover/i});await v.click(r);const d=g(document.body);await h(()=>{m(d.getByText("Popover test content")).toBeVisible()}),await v.click(r),await h(()=>{m(d.queryByText("Popover test content")).not.toBeVisible()})}};var f,C,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover {...args}>{args.children}</Popover>
    </Popover.TriggerContext>,
  args: {
    children: 'This is the default popover content.',
    placement: 'bottom',
    'data-color': 'neutral',
    variant: 'default'
  }
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var P,y,b;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <>
      <Button popovertarget="my-popover-example-no-context">
        Open Popover (No Context)
      </Button>
      <Popover {...args}>{args.children}</Popover>
    </>,
  args: {
    id: 'my-popover-example-no-context',
    children: 'Content for popover without context.',
    placement: 'right',
    'data-color': 'accent'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,w,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Confirm Action</Popover.Trigger>
      <Popover {...args}>
        <Paragraph data-size="sm">Are you sure you want to proceed?</Paragraph>
        <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '8px'
      }}>
          <Button data-size="sm" variant="secondary" onClick={() => alert('Cancelled')}>
            Cancel
          </Button>
          <Button data-size="sm" variant="primary" onClick={() => alert('Confirmed')}>
            Confirm
          </Button>
        </div>
      </Popover>
    </Popover.TriggerContext>,
  args: {
    children: null,
    placement: 'bottom-end',
    'data-color': 'neutral',
    variant: 'tinted'
  },
  name: 'With Interactive Content'
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,B,V;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Popover.TriggerContext>
      <Popover.Trigger>Show Danger Info</Popover.Trigger>
      <Popover {...args}>{args.children}</Popover>
    </Popover.TriggerContext>,
  args: {
    children: 'This action cannot be undone.',
    placement: 'top',
    'data-color': 'danger',
    variant: 'tinted'
  },
  name: 'Danger Tinted'
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var k,_,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(o => !o)}>
          {isOpen ? 'Close Controlled Popover' : 'Open Controlled Popover'}
        </Button>
        {/* Pass open and onClose */}
        <Popover {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <Paragraph data-size="sm">This popover is controlled externally.</Paragraph>
          <Button data-size="sm" onClick={() => setIsOpen(false)} style={{
          marginTop: '8px'
        }}>Close Me</Button>
        </Popover>
      </>;
  },
  args: {
    children: null,
    placement: 'bottom',
    'data-color': 'info'
  }
}`,...(z=(_=i.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var I,S,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Popover.TriggerContext>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover placement="bottom">Popover test content</Popover>
    </Popover.TriggerContext>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click trigger to open popover
    const trigger = canvas.getByRole('button', {
      name: /open popover/i
    });
    await userEvent.click(trigger);

    // Popover content should be visible
    const body = within(document.body);
    await waitFor(() => {
      expect(body.getByText('Popover test content')).toBeVisible();
    });

    // Click trigger again to close
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(body.queryByText('Popover test content')).not.toBeVisible();
    });
  }
}`,...(q=(S=c.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const F=["Default","WithoutContext","InteractiveContent","DangerTinted","Controlled","TestInteraction"],M=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,DangerTinted:l,Default:n,InteractiveContent:s,TestInteraction:c,WithoutContext:a,__namedExportsOrder:F,default:R},Symbol.toStringTag,{value:"Module"}));export{i as C,l as D,s as I,M as P,a as W};
