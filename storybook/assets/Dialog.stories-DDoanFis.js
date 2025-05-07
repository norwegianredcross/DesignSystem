import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-D4lIrffr.js";import{u as ie}from"./floating-ui.react-VFS6-CKd.js";import{S as R}from"./index-Cb-ENzfG.js";import{c as $}from"./lite-DaUVFjkg.js";import{B as K}from"./Button-_80U_wOV.js";import{B as x}from"./index-DyXSSrOW.js";import{H as k}from"./Heading-BGOStg1T.js";import{P as f}from"./Paragraph-CJciD5B6.js";import{T as le}from"./Textfield-BbSKMBlZ.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Spinner-Dj2HLJn9.js";import"./index-CMMlhluM.js";import"./Label-DnboOLtM.js";import"./Textarea-ik62Jeuf.js";import"./Input-FgPaU4ty.js";const w=n.createContext({current:null}),X=({children:a})=>{const t=n.useRef(null);return e.jsx(w.Provider,{value:t,children:a})};X.displayName="DialogTriggerContext";const se=n.forwardRef(function({asChild:t,children:i,className:m,closeButton:s="Lukk dialogvindu",closedby:c="closerequest",modal:D=!0,onClose:d,open:p,...B},G){const J=n.useContext(w),h=n.useRef(null),Q=t?R:"dialog",Z=ie([J,G,h]),ee=D?"showModal":"show";return n.useEffect(()=>{var r;return(r=h.current)==null?void 0:r[p?ee:"close"]()},[p]),n.useEffect(()=>{const r=h.current,g=l=>{var P;const{clientY:E,clientX:L,target:re}=l;if(l instanceof KeyboardEvent)return c==="none"&&l.key==="Escape"&&l.preventDefault();if(!((P=window.getSelection())!=null&&P.toString())&&r&&re===r&&c==="any"){const{top:oe,left:ae,right:te,bottom:ne}=r.getBoundingClientRect();oe<=E&&E<=ne&&ae<=L&&L<=te||r==null||r.close()}},u=()=>{const l=r==null?void 0:r.querySelector("[autofocus]");document.activeElement!==l&&(l==null||l.focus())};return r==null||r.addEventListener("animationend",u),r==null||r.addEventListener("click",g),r==null||r.addEventListener("keydown",g),()=>{r==null||r.removeEventListener("animationend",u),r==null||r.removeEventListener("click",g),r==null||r.removeEventListener("keydown",g)}},[c]),n.useEffect(()=>{var g;const r=u=>d==null?void 0:d(u);return(g=h.current)==null||g.addEventListener("close",r),()=>{var u;return(u=h.current)==null?void 0:u.removeEventListener("close",r)}},[d]),e.jsxs(Q,{className:$("ds-dialog",m),ref:Z,"data-modal":D,...B,children:[s!==!1&&e.jsx("form",{method:"dialog",children:e.jsx(K,{"aria-label":s,autoFocus:!0,"data-color":"neutral",icon:!0,name:"close",type:"submit",variant:"tertiary"})}),i]})}),ce=n.forwardRef(function({asChild:t,className:i,...m},s){const c=t?R:"div";return e.jsx(c,{className:$("ds-dialog__block",i),ref:s,...m})}),de=n.forwardRef(function({asChild:t,...i},m){const s=n.useContext(w),c=t?R:K,D=()=>{var d,p,B;((d=s.current)==null?void 0:d.getAttribute("data-modal"))==="true"?(p=s.current)==null||p.showModal():(B=s.current)==null||B.show()};return e.jsx(c,{"aria-haspopup":"dialog",onClick:D,ref:m,...i})}),v=Object.assign(se,{Block:ce,TriggerContext:X,Trigger:de});v.Block.displayName="Dialog.Block";v.TriggerContext.displayName="Dialog.TriggerContext";v.Trigger.displayName="Dialog.Trigger";const o=v,Ee={title:"Components/Dialog",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},j={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Dialog"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(k,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(o.Block,{children:e.jsx(f,{children:"This is the main content of the dialog."})}),e.jsx(o.Block,{children:e.jsx(x,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},y={render:a=>{const t=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>{var i;return(i=t.current)==null?void 0:i.showModal()},children:"Open Dialog with ref"}),e.jsxs(o,{ref:t,...a,children:[e.jsx(o.Block,{children:e.jsx(k,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(o.Block,{children:[e.jsx(f,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(f,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(o.Block,{children:e.jsx(x,{variant:"secondary",type:"button",onClick:()=>{var i;return(i=t.current)==null?void 0:i.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu","data-color":"accent"},name:"Programmatic (Ref)"},C={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(k,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(o.Block,{children:e.jsx(f,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},b={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Non-Modal"}),e.jsxs(o,{...a,children:[e.jsx(o.Block,{children:e.jsx(k,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(o.Block,{children:e.jsx(f,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},T={render:a=>e.jsxs(o.TriggerContext,{children:[e.jsx(o.Trigger,{children:"Open Form Dialog"}),e.jsx(o,{...a,children:e.jsxs("form",{method:"dialog",onSubmit:t=>{t.preventDefault(),alert("Form submitted!")},children:[e.jsx(o.Block,{children:e.jsx(k,{"data-size":"xs",children:"Enter Details"})}),e.jsx(o.Block,{children:e.jsx(le,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(o.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(x,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(x,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"};var M,N,S;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>\r
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>\r
      <Dialog {...args}>\r
        <Dialog.Block>\r
          <Heading data-size="xs">Dialog Header</Heading>\r
        </Dialog.Block>\r
        <Dialog.Block>\r
          <Paragraph>This is the main content of the dialog.</Paragraph>\r
        </Dialog.Block>\r
        <Dialog.Block>\r
          <Buttons variant="secondary" type="button">\r
            Close\r
          </Buttons>\r
        </Dialog.Block>\r
      </Dialog>\r
    </Dialog.TriggerContext>,
  args: {
    modal: true,
    closedby: 'closerequest',
    closeButton: 'Lukk dialogvindu',
    'data-color': 'neutral'
  },
  name: 'Basic (Trigger)'
}`,...(S=(N=j.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var H,O,F;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    return <>\r
        <Buttons onClick={() => dialogRef.current?.showModal()}>\r
          Open Dialog with ref\r
        </Buttons>\r
        <Dialog ref={dialogRef} {...args}>\r
          <Dialog.Block>\r
            <Heading data-size="xs">Programmatic Dialog</Heading>\r
          </Dialog.Block>\r
          <Dialog.Block>\r
            <Paragraph>\r
              This dialog was opened using a ref and showModal().\r
            </Paragraph>\r
            <Paragraph>\r
              Use the Escape key or the close button (if enabled) to close.\r
            </Paragraph>\r
          </Dialog.Block>\r
          <Dialog.Block>\r
            <Buttons variant="secondary" type="button" onClick={() => dialogRef.current?.close()}>\r
              Close Programmatically\r
            </Buttons>\r
          </Dialog.Block>\r
        </Dialog>\r
      </>;
  },
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu',
    'data-color': 'accent'
  },
  name: 'Programmatic (Ref)'
}`,...(F=(O=y.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var z,q,V;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>\r
      <Dialog.Trigger>Open (Close on Backdrop)</Dialog.Trigger>\r
      <Dialog {...args}>\r
        <Dialog.Block>\r
          <Heading data-size="xs">Backdrop Close</Heading>\r
        </Dialog.Block>\r
        <Dialog.Block>\r
          <Paragraph>Click outside this dialog to close it.</Paragraph>\r
        </Dialog.Block>\r
      </Dialog>\r
    </Dialog.TriggerContext>,
  args: {
    modal: true,
    closedby: 'any',
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Close on Backdrop'
}`,...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var Y,W,_;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>\r
      <Dialog.Trigger>Open Non-Modal</Dialog.Trigger>\r
      <Dialog {...args}>\r
        <Dialog.Block>\r
          <Heading data-size="xs">Non-Modal Dialog</Heading>\r
        </Dialog.Block>\r
        <Dialog.Block>\r
          <Paragraph>\r
            You can interact with the page behind this dialog.\r
          </Paragraph>\r
        </Dialog.Block>\r
      </Dialog>\r
    </Dialog.TriggerContext>,
  args: {
    modal: false,
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Non-Modal'
}`,...(_=(W=b.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var A,I,U;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Dialog.TriggerContext>\r
      <Dialog.Trigger>Open Form Dialog</Dialog.Trigger>\r
      <Dialog {...args}>\r
        <form method="dialog" onSubmit={e => {
        e.preventDefault();
        alert('Form submitted!');
      }}>\r
          <Dialog.Block>\r
            <Heading data-size="xs">Enter Details</Heading>\r
          </Dialog.Block>\r
          <Dialog.Block>\r
            <Textfield label="Your Name" name="your-name" autoFocus />\r
          </Dialog.Block>\r
          <Dialog.Block>\r
            <div style={{
            display: 'flex',
            gap: 'var(--ds-spacing-3)'
          }}>\r
              <Buttons variant="secondary" type="reset"> \r
                Cancel\r
              </Buttons>\r
              <Buttons variant="primary" type="submit">\r
                Submit\r
              </Buttons>\r
            </div>\r
          </Dialog.Block>\r
        </form>\r
      </Dialog>\r
    </Dialog.TriggerContext>,
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu'
  },
  name: 'With Form'
}`,...(U=(I=T.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const Le=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm"];export{C as CloseOnBackdrop,j as DefaultTrigger,b as NonModal,y as ProgrammaticRef,T as WithForm,Le as __namedExportsOrder,Ee as default};
