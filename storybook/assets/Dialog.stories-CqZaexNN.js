import{j as e,r as J}from"./iframe-BPIKHopb.js";import{G as Q,H as d,P as g,b as v}from"./tooltip-BtbUdoEQ.js";import{B as i}from"./index-BWvFjvgm.js";const o=Q;try{o.displayName="Dialog",o.__docgenInfo={description:"",displayName:"Dialog",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},closeButton:{defaultValue:{value:"'Lukk dialogvindu'"},description:"Screen reader label of close button. Set false to hide the close button.",name:"closeButton",required:!1,type:{name:"string | false"}},closedby:{defaultValue:{value:"'closerequest'"},description:'Light dismiss behavior, allowing to close on backdrop click  by setting `closedby="any"`.\n@see [mdn closedBy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy)',name:"closedby",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"closerequest"'},{value:'"any"'}]}},placement:{defaultValue:{value:"'center'"},description:'When not center, displays dialog as a "drawer" from the specified side.',name:"placement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},modal:{defaultValue:{value:"true"},description:`Toogle modal and non-modal dialog.
@see [mdn modal dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#creating_a_modal_dialog)`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"@note Unlike standard html, where the open attribute always opens a non-modal dialog, Dialog's open prop uses the `modal` prop to determine whether the Dialog is modal or non-modal",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is called when the dialog is closed.",name:"onClose",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated Will be removed in the next major version. Should always be a `<dialog>` element",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:t,within:r,userEvent:u,waitFor:b,fn:X}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Dialog",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},m={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(o.Block,{children:e.jsx(g,{children:"This is the main content of the dialog."})}),e.jsx(o.Block,{children:e.jsx(i,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},p={render:a=>{const n=J.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>{var l;return(l=n.current)==null?void 0:l.showModal()},children:"Open Dialog with ref"}),e.jsxs(o,{ref:n,...a,children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(o.Block,{children:[e.jsx(g,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(g,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(o.Block,{children:e.jsx(i,{variant:"secondary",type:"button",onClick:()=>{var l;return(l=n.current)==null?void 0:l.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},h={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(o.Block,{children:e.jsx(g,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},B={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Non-Modal"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(o.Block,{children:e.jsx(g,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},k={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Form Dialog"}),e.jsx(o,{...a,children:e.jsxs("form",{method:"dialog",onSubmit:n=>{n.preventDefault(),alert("Form submitted!")},children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Enter Details"})}),e.jsx(o.Block,{children:e.jsx(v,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(o.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(i,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(i,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"},x={name:"Test: Interaction",render:()=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{modal:!0,closeButton:"Lukk dialogvindu",children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Test Dialog"})}),e.jsx(o.Block,{children:e.jsx(g,{children:"Dialog content for testing."})})]})]}),play:async({canvasElement:a})=>{const l=r(a).getByRole("button",{name:/open dialog/i});await u.click(l);const s=r(document.body);await b(()=>{t(s.getByRole("dialog")).toBeInTheDocument()});const c=s.getByRole("dialog"),T=r(c).getByRole("button",{name:/lukk/i});t(T).toBeInTheDocument(),await u.click(T),await b(()=>{t(c).not.toHaveAttribute("open")})}},D={name:"Test: Keyboard Close And Focus Return",render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne registrering"}),e.jsxs(o,{...a,modal:!0,closeButton:"Lukk registrering",children:[e.jsx(o.Block,{children:e.jsx(d,{"data-size":"xs",children:"Registrer navn"})}),e.jsxs(o.Block,{children:[e.jsx(v,{label:"Navn",autoFocus:!0}),e.jsx(i,{type:"button",children:"Lagre"})]})]})]}),args:{onClose:X()},play:async({canvasElement:a,args:n})=>{const s=r(a).getByRole("button",{name:"Åpne registrering"});s.focus(),await u.keyboard("{Enter}");const c=await r(document.body).findByRole("dialog");t(r(c).getByRole("textbox",{name:"Navn"})).toBeInTheDocument(),await b(()=>{t(c).toHaveAttribute("open"),t(c).toContainElement(document.activeElement)});const f=r(c).getByRole("button",{name:"Lukk registrering"});t(f).toHaveFocus(),await u.keyboard("{Enter}"),await b(()=>{t(c).not.toHaveAttribute("open"),t(n.onClose).toHaveBeenCalledTimes(1),t(s).toHaveFocus()})}},y={name:"Test: Modal Contains Tab Focus",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{type:"button",children:"Før dialogen"}),e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Åpne fokusdialog"}),e.jsx(o,{modal:!0,closeButton:"Lukk fokusdialog",children:e.jsxs(o.Block,{children:[e.jsx(v,{label:"Fornavn",autoFocus:!0}),e.jsx(i,{type:"button",children:"Bekreft"})]})})]}),e.jsx(i,{type:"button",children:"Etter dialogen"})]}),play:async({canvasElement:a})=>{const n=r(a);await u.click(n.getByRole("button",{name:"Åpne fokusdialog"}));const l=await r(document.body).findByRole("dialog");await b(()=>t(l).toContainElement(document.activeElement));for(let s=0;s<5;s+=1)await u.tab(),t(l).toContainElement(document.activeElement);t(n.getByRole("button",{name:"Etter dialogen"})).not.toHaveFocus()}};var C,j,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var E,R,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var H,L,S;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(S=(L=h.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var P,z,M;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(z=B.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var _,O,N;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(O=k.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var q,V,I;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(V=x.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var A,W,U;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(W=D.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var K,Y,G;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};const $=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm","TestInteraction","TestKeyboardDismissAndFocusReturn","TestModalContainsTabFocus"],te=Object.freeze(Object.defineProperty({__proto__:null,CloseOnBackdrop:h,DefaultTrigger:m,NonModal:B,ProgrammaticRef:p,TestInteraction:x,TestKeyboardDismissAndFocusReturn:D,TestModalContainsTabFocus:y,WithForm:k,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{h as C,te as D,B as N,p as P,k as W,m as a,o as b};
