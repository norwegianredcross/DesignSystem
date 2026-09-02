import{j as e,r as ee}from"./iframe-BYyDdLVI.js";import{v as oe,H as u,P as m,b as C}from"./tooltip-D949qbH_.js";import{B as g}from"./index-DaXIzoNU.js";const o=oe,{expect:a,within:s,userEvent:d,waitFor:c,fn:$}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Dialog",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},h={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{...t,children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(o.Block,{children:e.jsx(m,{children:"This is the main content of the dialog."})}),e.jsx(o.Block,{children:e.jsx(g,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},k={render:t=>{const i=ee.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>{var r;return(r=i.current)==null?void 0:r.showModal()},children:"Open Dialog with ref"}),e.jsxs(o,{ref:i,...t,children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(o.Block,{children:[e.jsx(m,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(m,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(o.Block,{children:e.jsx(g,{variant:"secondary",type:"button",onClick:()=>{var r;return(r=i.current)==null?void 0:r.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},B={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(o,{...t,children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(o.Block,{children:e.jsx(m,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},x={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Non-Modal"}),e.jsxs(o,{...t,children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(o.Block,{children:e.jsx(m,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},D={render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Form Dialog"}),e.jsx(o,{...t,children:e.jsxs("form",{method:"dialog",onSubmit:i=>{i.preventDefault(),alert("Form submitted!")},children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Enter Details"})}),e.jsx(o.Block,{children:e.jsx(C,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(o.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-3)"},children:[e.jsx(g,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(g,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"},y={name:"Test: Interaction",render:()=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{modal:!0,closeButton:"Lukk dialogvindu",children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Test Dialog"})}),e.jsx(o.Block,{children:e.jsx(m,{children:"Dialog content for testing."})})]})]}),play:async({canvasElement:t})=>{const r=s(t).getByRole("button",{name:/open dialog/i});await d.click(r);const l=s(document.body);await c(()=>{a(l.getByRole("dialog")).toBeInTheDocument()});const n=l.getByRole("dialog"),f=s(n).getByRole("button",{name:/lukk/i});a(f).toBeInTheDocument(),await d.click(f),await c(()=>{a(n).not.toHaveAttribute("open")})}},b={name:"Test: Keyboard Close And Focus Return",render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne registrering"}),e.jsxs(o,{...t,modal:!0,closeButton:"Lukk registrering",children:[e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Registrer navn"})}),e.jsxs(o.Block,{children:[e.jsx(C,{label:"Navn",autoFocus:!0}),e.jsx(g,{type:"button",children:"Lagre"})]})]})]}),args:{onClose:$()},play:async({canvasElement:t,args:i})=>{const l=s(t).getByRole("button",{name:"Åpne registrering"});l.focus(),await d.keyboard("{Enter}");const n=await s(document.body).findByRole("dialog");a(s(n).getByRole("textbox",{name:"Navn"})).toBeInTheDocument(),await c(()=>{a(n).toHaveAttribute("open"),a(n).toContainElement(document.activeElement)});const p=s(n).getByRole("button",{name:"Lukk registrering"});a(p).toHaveFocus(),await d.keyboard("{Enter}"),await c(()=>{a(n).not.toHaveAttribute("open"),a(i.onClose).toHaveBeenCalledTimes(1),a(l).toHaveFocus()})}},v={name:"Test: Light Dismiss (Backdrop And Close Request)",render:t=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne dialog"}),e.jsx(o,{...t,modal:!0,closeButton:"Lukk",children:e.jsx(o.Block,{children:e.jsx(u,{"data-size":"xs",children:"Lukk meg"})})})]}),args:{closedby:"any",onClose:$()},play:async({canvasElement:t,args:i})=>{const l=s(t).getByRole("button",{name:"Åpne dialog"});await d.click(l);const n=await s(document.body).findByRole("dialog");await c(()=>a(n).toHaveAttribute("open")),a(n).toHaveAttribute("closedby","any");const p=n.getBoundingClientRect();await d.pointer({keys:"[MouseLeft]",target:n,coords:{x:p.left-40,y:p.top-40}}),await c(()=>{a(n).not.toHaveAttribute("open"),a(i.onClose).toHaveBeenCalledTimes(1)}),await d.click(l),await c(()=>a(n).toHaveAttribute("open")),n.requestClose(),await c(()=>{a(n).not.toHaveAttribute("open"),a(i.onClose).toHaveBeenCalledTimes(2)})}},T={name:"Test: Modal Contains Tab Focus",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"button",children:"Før dialogen"}),e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne fokusdialog"}),e.jsx(o,{modal:!0,closeButton:"Lukk fokusdialog",children:e.jsxs(o.Block,{children:[e.jsx(C,{label:"Fornavn",autoFocus:!0}),e.jsx(g,{type:"button",children:"Bekreft"})]})})]}),e.jsx(g,{type:"button",children:"Etter dialogen"})]}),play:async({canvasElement:t})=>{const i=s(t);await d.click(i.getByRole("button",{name:"Åpne fokusdialog"}));const r=await s(document.body).findByRole("dialog");await c(()=>a(r).toContainElement(document.activeElement));for(let l=0;l<5;l+=1)await d.tab(),a(r).toContainElement(document.activeElement);a(i.getByRole("button",{name:"Etter dialogen"})).not.toHaveFocus()}};var w,j,E;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(j=h.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var H,R,F;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(R=k.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var L,M,S;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(M=B.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var O,P,z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(P=x.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,N,q;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
            gap: 'var(--ds-size-3)'
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
}`,...(q=(N=D.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var _,I,V;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(I=y.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var W,K,U;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Test: Keyboard Close And Focus Return',
  render: args => <Dialog.TriggerContext>
      <Dialog.Trigger>Åpne registrering</Dialog.Trigger>
      <Dialog {...args} modal closeButton="Lukk registrering">
        <Dialog.Block>
          <Heading data-size="xs">Registrer navn</Heading>
        </Dialog.Block>
        <Dialog.Block>
          <Textfield label="Navn" autoFocus />
          <Button type="button">Lagre</Button>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>,
  args: {
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Åpne registrering'
    });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const dialog = await within(document.body).findByRole('dialog');
    expect(within(dialog).getByRole('textbox', {
      name: 'Navn'
    })).toBeInTheDocument();
    await waitFor(() => {
      expect(dialog).toHaveAttribute('open');
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    });
    const closeButton = within(dialog).getByRole('button', {
      name: 'Lukk registrering'
    });
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('open');
      expect(args.onClose).toHaveBeenCalledTimes(1);
      expect(trigger).toHaveFocus();
    });
  }
}`,...(U=(K=b.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,G,J;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Test: Light Dismiss (Backdrop And Close Request)',
  render: args => <Dialog.TriggerContext>
      <Dialog.Trigger>Åpne dialog</Dialog.Trigger>
      <Dialog {...args} modal closeButton="Lukk">
        <Dialog.Block>
          <Heading data-size="xs">Lukk meg</Heading>
        </Dialog.Block>
      </Dialog>
    </Dialog.TriggerContext>,
  args: {
    closedby: 'any',
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Åpne dialog'
    });

    // closedby="any" must reach the native attribute: the BROWSER handles
    // Escape (close request) from it, and Digdir's own listener handles
    // backdrop clicks from it.
    await userEvent.click(trigger);
    const dialog = await within(document.body).findByRole('dialog');
    await waitFor(() => expect(dialog).toHaveAttribute('open'));
    expect(dialog).toHaveAttribute('closedby', 'any');

    // 1. Backdrop click. The ::backdrop pseudo-element cannot be targeted,
    // but Digdir tracks pointerdown coordinates against the dialog's box:
    // a press+click landing on the <dialog> element OUTSIDE its content
    // rect counts as a backdrop press and closes it. Synthetic pointer
    // events drive that listener directly.
    const rect = dialog.getBoundingClientRect();
    await userEvent.pointer({
      keys: '[MouseLeft]',
      target: dialog,
      coords: {
        x: rect.left - 40,
        y: rect.top - 40
      }
    });
    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('open');
      expect(args.onClose).toHaveBeenCalledTimes(1);
    });

    // 2. Close request - the code path Escape triggers in a real browser.
    // Native Escape handling only reacts to TRUSTED key events, which a
    // test cannot synthesize, so we invoke requestClose(): it dispatches
    // 'cancel' and closes unless prevented, exactly like Escape does.
    await userEvent.click(trigger);
    await waitFor(() => expect(dialog).toHaveAttribute('open'));
    // requestClose is newer than TypeScript's DOM lib; Digdir polyfills it
    // where the browser lacks it.
    (dialog as HTMLDialogElement & {
      requestClose: () => void;
    }).requestClose();
    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('open');
      expect(args.onClose).toHaveBeenCalledTimes(2);
    });
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Test: Modal Contains Tab Focus',
  render: () => <>
      <Button type="button">Før dialogen</Button>
      <Dialog.TriggerContext>
        <Dialog.Trigger>Åpne fokusdialog</Dialog.Trigger>
        <Dialog modal closeButton="Lukk fokusdialog">
          <Dialog.Block>
            <Textfield label="Fornavn" autoFocus />
            <Button type="button">Bekreft</Button>
          </Dialog.Block>
        </Dialog>
      </Dialog.TriggerContext>
      <Button type="button">Etter dialogen</Button>
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Åpne fokusdialog'
    }));
    const dialog = await within(document.body).findByRole('dialog');
    await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));
    for (let step = 0; step < 5; step += 1) {
      await userEvent.tab();
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    }
    expect(canvas.getByRole('button', {
      name: 'Etter dialogen'
    })).not.toHaveFocus();
  }
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ae=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm","TestInteraction","TestKeyboardDismissAndFocusReturn","TestLightDismiss","TestModalContainsTabFocus"],le=Object.freeze(Object.defineProperty({__proto__:null,CloseOnBackdrop:B,DefaultTrigger:h,NonModal:x,ProgrammaticRef:k,TestInteraction:y,TestKeyboardDismissAndFocusReturn:b,TestLightDismiss:v,TestModalContainsTabFocus:T,WithForm:D,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{B as C,le as D,x as N,k as P,D as W,h as a,o as b};
