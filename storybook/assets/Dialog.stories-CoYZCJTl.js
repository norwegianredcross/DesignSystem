import{j as e,r as V}from"./iframe-Kn0zEmSf.js";import{G as F,H as n,P as r,b as N}from"./tooltip-DgdeE8KI.js";import{B as m}from"./index-Byeydsn9.js";const o=F;try{o.displayName="Dialog",o.__docgenInfo={description:"",displayName:"Dialog",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},closeButton:{defaultValue:{value:"'Lukk dialogvindu'"},description:"Screen reader label of close button. Set false to hide the close button.",name:"closeButton",required:!1,type:{name:"string | false"}},closedby:{defaultValue:{value:"'closerequest'"},description:'Light dismiss behavior, allowing to close on backdrop click  by setting `closedby="any"`.\n@see [mdn closedBy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy)',name:"closedby",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"closerequest"'},{value:'"any"'}]}},placement:{defaultValue:{value:"'center'"},description:'When not center, displays dialog as a "drawer" from the specified side.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},modal:{defaultValue:{value:"true"},description:`Toogle modal and non-modal dialog.
@see [mdn modal dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#creating_a_modal_dialog)`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"@note Unlike standard html, where the open attribute always opens a non-modal dialog, Dialog's open prop uses the `modal` prop to determine whether the Dialog is modal or non-modal",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is called when the dialog is closed.",name:"onClose",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated Will be removed in the next major version. Should always be a `<dialog>` element",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:p,within:h,userEvent:x,waitFor:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Dialog",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},i={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(n,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(o.Block,{children:e.jsx(r,{children:"This is the main content of the dialog."})}),e.jsx(o.Block,{children:e.jsx(m,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},s={render:a=>{const t=V.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>{var l;return(l=t.current)==null?void 0:l.showModal()},children:"Open Dialog with ref"}),e.jsxs(o,{ref:t,...a,children:[e.jsx(o.Block,{children:e.jsx(n,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(o.Block,{children:[e.jsx(r,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(r,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(o.Block,{children:e.jsx(m,{variant:"secondary",type:"button",onClick:()=>{var l;return(l=t.current)==null?void 0:l.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},d={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(n,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(o.Block,{children:e.jsx(r,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},c={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Non-Modal"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(n,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(o.Block,{children:e.jsx(r,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},g={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Form Dialog"}),e.jsx(o,{...a,children:e.jsxs("form",{method:"dialog",onSubmit:t=>{t.preventDefault(),alert("Form submitted!")},children:[e.jsx(o.Block,{children:e.jsx(n,{"data-size":"xs",children:"Enter Details"})}),e.jsx(o.Block,{children:e.jsx(N,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(o.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(m,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(m,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"},u={name:"Test: Interaction",render:()=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{modal:!0,closeButton:"Lukk dialogvindu",children:[e.jsx(o.Block,{children:e.jsx(n,{"data-size":"xs",children:"Test Dialog"})}),e.jsx(o.Block,{children:e.jsx(r,{children:"Dialog content for testing."})})]})]}),play:async({canvasElement:a})=>{const l=h(a).getByRole("button",{name:/open dialog/i});await x.click(l);const D=h(document.body);await f(()=>{p(D.getByRole("dialog")).toBeInTheDocument()});const k=D.getByRole("dialog"),B=h(k).getByRole("button",{name:/lukk/i});p(B).toBeInTheDocument(),await x.click(B),await f(()=>{p(k).not.toHaveAttribute("open")})}};var y,b,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog {...args}>
        <Dialog.Block>
          <Heading data-size="xs">Dialog Header</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>This is the main content of the dialog.</Paragraph>
        </Dialog.Block>
        <Dialog.Block>
          <Button variant="secondary" type="button">
            Close
          </Button>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>,
  args: {
    modal: true,
    closedby: 'closerequest',
    closeButton: 'Lukk dialogvindu',
    'data-color': 'neutral'
  },
  name: 'Basic (Trigger)'
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,C,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    return <>
        <Button onClick={() => dialogRef.current?.showModal()}>
          Open Dialog with ref
        </Button>
        <Dialog ref={dialogRef} {...args}>
          <Dialog.Block>
            <Heading data-size="xs">Programmatic Dialog</Heading>
          </Dialog.Block>
          <Dialog.Block>
            <Paragraph>
              This dialog was opened using a ref and showModal().
            </Paragraph>
            <Paragraph>
              Use the Escape key or the close button (if enabled) to close.
            </Paragraph>
          </Dialog.Block>
          <Dialog.Block>
            <Button variant="secondary" type="button" onClick={() => dialogRef.current?.close()}>
              Close Programmatically
            </Button>
          </Dialog.Block>
        </Dialog>
      </>;
  },
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Programmatic (Ref)'
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var w,P,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>
      <Dialog.Trigger>Open (Close on Backdrop)</Dialog.Trigger>
      <Dialog {...args}>
        <Dialog.Block>
          <Heading data-size="xs">Backdrop Close</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>Click outside this dialog to close it.</Paragraph>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>,
  args: {
    modal: true,
    closedby: 'any',
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Close on Backdrop'
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var _,z,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>
      <Dialog.Trigger>Open Non-Modal</Dialog.Trigger>
      <Dialog {...args}>
        <Dialog.Block>
          <Heading data-size="xs">Non-Modal Dialog</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>
            You can interact with the page behind this dialog.
          </Paragraph>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>,
  args: {
    modal: false,
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Non-Modal'
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var H,O,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>
      <Dialog.Trigger>Open Form Dialog</Dialog.Trigger>
      <Dialog {...args}>
        <form method="dialog" onSubmit={e => {
        e.preventDefault();
        alert('Form submitted!');
      }}>
          <Dialog.Block>
            <Heading data-size="xs">Enter Details</Heading>
          </Dialog.Block>
          <Dialog.Block>
            <Textfield label="Your Name" name="your-name" autoFocus />
          </Dialog.Block>
          <Dialog.Block>
            <div style={{
            display: 'flex',
            gap: 'var(--ds-spacing-3)'
          }}>
              <Button variant="secondary" type="reset"> 
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Dialog.Block>
        </form>
      </Dialog>
    </Dialog.TriggerContext>,
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu'
  },
  name: 'With Form'
}`,...(L=(O=g.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var E,M,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => <Dialog.TriggerContext>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog modal={true} closeButton="Lukk dialogvindu">
        <Dialog.Block>
          <Heading data-size="xs">Test Dialog</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Paragraph>Dialog content for testing.</Paragraph>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click trigger to open dialog
    const trigger = canvas.getByRole('button', {
      name: /open dialog/i
    });
    await userEvent.click(trigger);

    // Dialog should be visible
    const body = within(document.body);
    await waitFor(() => {
      expect(body.getByRole('dialog')).toBeInTheDocument();
    });

    // Close button should be present and work
    const dialog = body.getByRole('dialog');
    const dialogCanvas = within(dialog);
    const closeButton = dialogCanvas.getByRole('button', {
      name: /lukk/i
    });
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);

    // Dialog should close
    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('open');
    });
  }
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const W=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm","TestInteraction"],K=Object.freeze(Object.defineProperty({__proto__:null,CloseOnBackdrop:d,DefaultTrigger:i,NonModal:c,ProgrammaticRef:s,TestInteraction:u,WithForm:g,__namedExportsOrder:W,default:I},Symbol.toStringTag,{value:"Module"}));export{d as C,K as D,c as N,s as P,g as W,i as a,o as b};
