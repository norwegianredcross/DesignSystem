import{r as l,j as e}from"./iframe-NSlXxCFF.js";import{S as E}from"./index-fxYSzXt9.js";import{c as X}from"./lite-DaUVFjkg.js";import{B as G}from"./button-B40UWaKO.js";import{u as ne}from"./use-merge-refs-tYagDv3b.js";import{B as p}from"./index-DPo3DEdX.js";import{H as f}from"./heading-QUuM38Kb.js";import{P as h}from"./paragraph-B3OFID9u.js";import{T as ie}from"./textfield-xM3nNgfm.js";import"./preload-helper-Dp1pzeXC.js";import"./spinner-D40xMekF.js";import"./index-Bw1459GD.js";import"./input-DVBchnN_.js";import"./label-4ZldiIKQ.js";import"./textarea-BWGgL7DI.js";const L=l.createContext({current:null}),J=({children:r})=>{const t=l.useRef(null);return e.jsx(L.Provider,{value:t,children:r})};J.displayName="DialogTriggerContext";const se=l.forwardRef(function({asChild:t,children:n,className:u,closeButton:c="Lukk dialogvindu",closedby:d="closerequest",modal:k=!0,onClose:g,open:m,...D},Q){const Z=l.useContext(L),x=l.useRef(null),ee=t?E:"dialog",oe=ne([Z,Q,x]),ae=k?"showModal":"show";return l.useEffect(()=>{var o;return(o=x.current)==null?void 0:o[m?ae:"close"]()},[m]),l.useEffect(()=>{const o=x.current,i=s=>{var R;if(s.defaultPrevented)return;const{clientY:P,clientX:S,target:w}=s;if(s instanceof KeyboardEvent)return d==="none"&&s.key==="Escape"&&s.preventDefault();if(w instanceof Element&&w.closest('[data-command="close"]'))return o==null?void 0:o.close();if(!((R=window.getSelection())!=null&&R.toString())&&o&&w===o&&d==="any"){const{top:z,left:re,right:te,bottom:le}=o.getBoundingClientRect();z<=P&&P<=le&&re<=S&&S<=te||o==null||o.close()}},B=()=>{const s=o==null?void 0:o.querySelector("[autofocus]");document.activeElement!==s&&(s==null||s.focus())};return o==null||o.addEventListener("animationend",B),o==null||o.addEventListener("click",i),o==null||o.addEventListener("keydown",i),()=>{o==null||o.removeEventListener("animationend",B),o==null||o.removeEventListener("click",i),o==null||o.removeEventListener("keydown",i)}},[d]),l.useEffect(()=>{const o=B=>g==null?void 0:g(B),i=x.current;return i==null||i.addEventListener("close",o),()=>i==null?void 0:i.removeEventListener("close",o)},[g]),e.jsxs(ee,{className:X("ds-dialog",u),ref:oe,"data-modal":k,...D,children:[c!==!1&&e.jsx(G,{"aria-label":c,autoFocus:!0,"data-color":"neutral",icon:!0,variant:"tertiary","data-command":"close"}),n]})}),ce=l.forwardRef(function({asChild:t,className:n,...u},c){const d=t?E:"div";return e.jsx(d,{className:X("ds-dialog__block",n),ref:c,...u})}),de=l.forwardRef(function({asChild:t,...n},u){const c=l.useContext(L),d=t?E:G,k=()=>{var g,m,D;((g=c.current)==null?void 0:g.getAttribute("data-modal"))==="true"?(m=c.current)==null||m.showModal():(D=c.current)==null||D.show()};return e.jsx(d,{"aria-haspopup":"dialog",onClick:k,ref:u,...n})}),T=Object.assign(se,{Block:ce,TriggerContext:J,Trigger:de});T.Block.displayName="Dialog.Block";T.TriggerContext.displayName="Dialog.TriggerContext";T.Trigger.displayName="Dialog.Trigger";const a=T;try{a.displayName="Dialog",a.__docgenInfo={description:"",displayName:"Dialog",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},closeButton:{defaultValue:{value:"'Lukk dialogvindu'"},description:"Screen reader label of close button. Set false to hide the close button.",name:"closeButton",required:!1,type:{name:"string | false"}},closedby:{defaultValue:{value:"'closerequest'"},description:'Light dismiss behavior, allowing to close on backdrop click  by setting `closedby="any"`.',name:"closedby",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"closerequest"'},{value:'"any"'}]}},modal:{defaultValue:{value:"true"},description:`Toogle modal and non-modal dialog.
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#creating_a_modal_dialog`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"@note Unlike standard html, where the open attribute always opens a non-modal dialog, Dialog's open prop uses the `modal` prop to determine whether the Dialog is modal or non-modal",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is called when the dialog is closed.",name:"onClose",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated Will be removed in the next major version. Should always be a `<dialog>` element",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const we={title:"Components/Dialog",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},y={render:r=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Dialog"}),e.jsxs(a,{...r,children:[e.jsx(a.Block,{children:e.jsx(f,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(a.Block,{children:e.jsx(h,{children:"This is the main content of the dialog."})}),e.jsx(a.Block,{children:e.jsx(p,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},b={render:r=>{const t=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Open Dialog with ref"}),e.jsxs(a,{ref:t,...r,children:[e.jsx(a.Block,{children:e.jsx(f,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(a.Block,{children:[e.jsx(h,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(h,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(a.Block,{children:e.jsx(p,{variant:"secondary",type:"button",onClick:()=>{var n;return(n=t.current)==null?void 0:n.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},v={render:r=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(a,{...r,children:[e.jsx(a.Block,{children:e.jsx(f,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(a.Block,{children:e.jsx(h,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},C={render:r=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Non-Modal"}),e.jsxs(a,{...r,children:[e.jsx(a.Block,{children:e.jsx(f,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(a.Block,{children:e.jsx(h,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},j={render:r=>e.jsxs(a.TriggerContext,{children:[e.jsx(a.Trigger,{children:"Open Form Dialog"}),e.jsx(a,{...r,children:e.jsxs("form",{method:"dialog",onSubmit:t=>{t.preventDefault(),alert("Form submitted!")},children:[e.jsx(a.Block,{children:e.jsx(f,{"data-size":"xs",children:"Enter Details"})}),e.jsx(a.Block,{children:e.jsx(ie,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(a.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(p,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(p,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"};var N,M,q;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var H,_,O;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var V,F,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(F=v.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var Y,U,I;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(I=(U=C.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var A,$,K;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=($=j.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const Ee=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm"];export{v as CloseOnBackdrop,y as DefaultTrigger,C as NonModal,b as ProgrammaticRef,j as WithForm,Ee as __namedExportsOrder,we as default};
