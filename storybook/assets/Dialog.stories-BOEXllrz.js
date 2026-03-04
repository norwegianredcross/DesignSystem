import{r as l,j as e}from"./iframe-Bp0vmf9v.js";import{S as L}from"./index-KYxKNRDd.js";import{c as te}from"./lite-DaUVFjkg.js";import{B as re}from"./button-DASMQkNv.js";import{u as pe}from"./use-merge-refs-Dd1qN_34.js";import{B as v}from"./index-CgUpkcFn.js";import{H as h}from"./heading-BGjSgETk.js";import{P as p}from"./paragraph-ZDVt_YqD.js";import{T as he}from"./textfield-Dbar5OQQ.js";const P=l.createContext({current:null}),ne=({children:t})=>{const r=l.useRef(null);return e.jsx(P.Provider,{value:r,children:t})};ne.displayName="DialogTriggerContext";const fe=l.forwardRef(function({asChild:r,children:n,className:d,closeButton:i="Lukk dialogvindu",closedby:g="closerequest",modal:u=!0,onClose:m,open:f,...C},le){const ie=l.useContext(P),T=l.useRef(null),se=r?L:"dialog",ce=pe([ie,le,T]),de=u?"showModal":"show";return l.useEffect(()=>{var o;return(o=T.current)==null?void 0:o[f?de:"close"]()},[f]),l.useEffect(()=>{const o=T.current,s=c=>{var z;if(c.defaultPrevented)return;const{clientY:_,clientX:O,target:E}=c;if(c instanceof KeyboardEvent)return g==="none"&&c.key==="Escape"&&c.preventDefault();if(E instanceof Element&&E.closest('[data-command="close"]'))return o==null?void 0:o.close();if(!((z=window.getSelection())!=null&&z.toString())&&o&&E===o&&g==="any"){const{top:H,left:ge,right:ue,bottom:me}=o.getBoundingClientRect();H<=_&&_<=me&&ge<=O&&O<=ue||o==null||o.close()}},j=()=>{const c=o==null?void 0:o.querySelector("[autofocus]");document.activeElement!==c&&(c==null||c.focus())};return o==null||o.addEventListener("animationend",j),o==null||o.addEventListener("click",s),o==null||o.addEventListener("keydown",s),()=>{o==null||o.removeEventListener("animationend",j),o==null||o.removeEventListener("click",s),o==null||o.removeEventListener("keydown",s)}},[g]),l.useEffect(()=>{const o=j=>m==null?void 0:m(j),s=T.current;return s==null||s.addEventListener("close",o),()=>s==null?void 0:s.removeEventListener("close",o)},[m]),e.jsxs(se,{className:te("ds-dialog",d),ref:ce,"data-modal":u,...C,children:[i!==!1&&e.jsx(re,{"aria-label":i,"data-color":"neutral",icon:!0,variant:"tertiary","data-command":"close"}),n]})}),De=l.forwardRef(function({asChild:r,className:n,...d},i){const g=r?L:"div";return e.jsx(g,{className:te("ds-dialog__block",n),ref:i,...d})}),ke=l.forwardRef(function({asChild:r,...n},d){const i=l.useContext(P),g=r?L:re,u=()=>{var m,f,C;((m=i.current)==null?void 0:m.getAttribute("data-modal"))==="true"?(f=i.current)==null||f.showModal():(C=i.current)==null||C.show()};return e.jsx(g,{"aria-haspopup":"dialog",onClick:u,ref:d,...n})}),w=Object.assign(fe,{Block:De,TriggerContext:ne,Trigger:ke});w.Block.displayName="Dialog.Block";w.TriggerContext.displayName="Dialog.TriggerContext";w.Trigger.displayName="Dialog.Trigger";const a=w;try{a.displayName="Dialog",a.__docgenInfo={description:"",displayName:"Dialog",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},closeButton:{defaultValue:{value:"'Lukk dialogvindu'"},description:"Screen reader label of close button. Set false to hide the close button.",name:"closeButton",required:!1,type:{name:"string | false"}},closedby:{defaultValue:{value:"'closerequest'"},description:'Light dismiss behavior, allowing to close on backdrop click  by setting `closedby="any"`.',name:"closedby",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"closerequest"'},{value:'"any"'}]}},modal:{defaultValue:{value:"true"},description:`Toogle modal and non-modal dialog.
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#creating_a_modal_dialog`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"@note Unlike standard html, where the open attribute always opens a non-modal dialog, Dialog's open prop uses the `modal` prop to determine whether the Dialog is modal or non-modal",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is called when the dialog is closed.",name:"onClose",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated Will be removed in the next major version. Should always be a `<dialog>` element",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:R,within:S,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,xe={title:"Components/Dialog",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},D={render:t=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Dialog"}),e.jsxs(a,{...t,children:[e.jsx(a.Block,{children:e.jsx(h,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(a.Block,{children:e.jsx(p,{children:"This is the main content of the dialog."})}),e.jsx(a.Block,{children:e.jsx(v,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},k={render:t=>{const r=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:()=>{var n;return(n=r.current)==null?void 0:n.showModal()},children:"Open Dialog with ref"}),e.jsxs(a,{ref:r,...t,children:[e.jsx(a.Block,{children:e.jsx(h,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(a.Block,{children:[e.jsx(p,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(p,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(a.Block,{children:e.jsx(v,{variant:"secondary",type:"button",onClick:()=>{var n;return(n=r.current)==null?void 0:n.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},x={render:t=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(a,{...t,children:[e.jsx(a.Block,{children:e.jsx(h,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(a.Block,{children:e.jsx(p,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},B={render:t=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Non-Modal"}),e.jsxs(a,{...t,children:[e.jsx(a.Block,{children:e.jsx(h,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(a.Block,{children:e.jsx(p,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},y={render:t=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Form Dialog"}),e.jsx(a,{...t,children:e.jsxs("form",{method:"dialog",onSubmit:r=>{r.preventDefault(),alert("Form submitted!")},children:[e.jsx(a.Block,{children:e.jsx(h,{"data-size":"xs",children:"Enter Details"})}),e.jsx(a.Block,{children:e.jsx(he,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(a.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(v,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(v,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"},b={name:"Test: Interaction",render:()=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Dialog"}),e.jsxs(a,{modal:!0,closeButton:"Lukk dialogvindu",children:[e.jsx(a.Block,{children:e.jsx(h,{"data-size":"xs",children:"Test Dialog"})}),e.jsx(a.Block,{children:e.jsx(p,{children:"Dialog content for testing."})})]})]}),play:async({canvasElement:t})=>{const n=S(t).getByRole("button",{name:/open dialog/i});await M.click(n);const d=S(document.body);await N(()=>{R(d.getByRole("dialog")).toBeInTheDocument()});const i=d.getByRole("dialog"),u=S(i).getByRole("button",{name:/lukk/i});R(u).toBeInTheDocument(),await M.click(u),await N(()=>{R(i).not.toHaveAttribute("open")})}};var q,F,V;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(F=D.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var I,W,Y;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(Y=(W=k.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var U,A,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(A=x.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var $,X,G;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(X=B.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,oe,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const Be=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm","TestInteraction"],Le=Object.freeze(Object.defineProperty({__proto__:null,CloseOnBackdrop:x,DefaultTrigger:D,NonModal:B,ProgrammaticRef:k,TestInteraction:b,WithForm:y,__namedExportsOrder:Be,default:xe},Symbol.toStringTag,{value:"Module"}));export{x as C,Le as D,B as N,k as P,y as W,D as a,a as b};
