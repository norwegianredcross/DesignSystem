import{r as l,j as e}from"./iframe-DzHbI1Bv.js";import{S as E}from"./index-B-a3BGFc.js";import{c as X}from"./lite-DaUVFjkg.js";import{B as G}from"./button-BtbJBmjo.js";import{u as ne}from"./use-merge-refs-B76l2vM2.js";import{B as p}from"./index-CXVUj6jC.js";import{H as f}from"./heading-5oOxB13O.js";import{P as h}from"./paragraph-DYKqBuhr.js";import{T as ie}from"./textfield-CgH_iYHw.js";import"./preload-helper-Dp1pzeXC.js";import"./spinner-C6XrOK33.js";import"./index-0vAYx6T3.js";import"./input-y6aCGEdK.js";import"./label-nhewozwc.js";import"./textarea-DZs6rg1v.js";const L=l.createContext({current:null}),J=({children:a})=>{const t=l.useRef(null);return e.jsx(L.Provider,{value:t,children:a})};J.displayName="DialogTriggerContext";const se=l.forwardRef(function({asChild:t,children:n,className:u,closeButton:c="Lukk dialogvindu",closedby:d="closerequest",modal:k=!0,onClose:g,open:m,...D},Q){const Z=l.useContext(L),x=l.useRef(null),ee=t?E:"dialog",oe=ne([Z,Q,x]),re=k?"showModal":"show";return l.useEffect(()=>{var o;return(o=x.current)==null?void 0:o[m?re:"close"]()},[m]),l.useEffect(()=>{const o=x.current,i=s=>{var R;if(s.defaultPrevented)return;const{clientY:P,clientX:S,target:w}=s;if(s instanceof KeyboardEvent)return d==="none"&&s.key==="Escape"&&s.preventDefault();if(w instanceof Element&&w.closest('[data-command="close"]'))return o==null?void 0:o.close();if(!((R=window.getSelection())!=null&&R.toString())&&o&&w===o&&d==="any"){const{top:z,left:ae,right:te,bottom:le}=o.getBoundingClientRect();z<=P&&P<=le&&ae<=S&&S<=te||o==null||o.close()}},B=()=>{const s=o==null?void 0:o.querySelector("[autofocus]");document.activeElement!==s&&(s==null||s.focus())};return o==null||o.addEventListener("animationend",B),o==null||o.addEventListener("click",i),o==null||o.addEventListener("keydown",i),()=>{o==null||o.removeEventListener("animationend",B),o==null||o.removeEventListener("click",i),o==null||o.removeEventListener("keydown",i)}},[d]),l.useEffect(()=>{const o=B=>g==null?void 0:g(B),i=x.current;return i==null||i.addEventListener("close",o),()=>i==null?void 0:i.removeEventListener("close",o)},[g]),e.jsxs(ee,{className:X("ds-dialog",u),ref:oe,"data-modal":k,...D,children:[c!==!1&&e.jsx(G,{"aria-label":c,autoFocus:!0,"data-color":"neutral",icon:!0,variant:"tertiary","data-command":"close"}),n]})}),ce=l.forwardRef(function({asChild:t,className:n,...u},c){const d=t?E:"div";return e.jsx(d,{className:X("ds-dialog__block",n),ref:c,...u})}),de=l.forwardRef(function({asChild:t,...n},u){const c=l.useContext(L),d=t?E:G,k=()=>{var g,m,D;((g=c.current)==null?void 0:g.getAttribute("data-modal"))==="true"?(m=c.current)==null||m.showModal():(D=c.current)==null||D.show()};return e.jsx(d,{"aria-haspopup":"dialog",onClick:k,ref:u,...n})}),T=Object.assign(se,{Block:ce,TriggerContext:J,Trigger:de});T.Block.displayName="Dialog.Block";T.TriggerContext.displayName="Dialog.TriggerContext";T.Trigger.displayName="Dialog.Trigger";const r=T;try{r.displayName="Dialog",r.__docgenInfo={description:"",displayName:"Dialog",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},closeButton:{defaultValue:{value:"'Lukk dialogvindu'"},description:"Screen reader label of close button. Set false to hide the close button.",name:"closeButton",required:!1,type:{name:"string | false"}},closedby:{defaultValue:{value:"'closerequest'"},description:'Light dismiss behavior, allowing to close on backdrop click  by setting `closedby="any"`.',name:"closedby",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"closerequest"'},{value:'"any"'}]}},modal:{defaultValue:{value:"true"},description:`Toogle modal and non-modal dialog.
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#creating_a_modal_dialog`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"@note Unlike standard html, where the open attribute always opens a non-modal dialog, Dialog's open prop uses the `modal` prop to determine whether the Dialog is modal or non-modal",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is called when the dialog is closed.",name:"onClose",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated Will be removed in the next major version. Should always be a `<dialog>` element",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const we={title:"Components/Dialog",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},y={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Dialog"}),e.jsxs(r,{...a,children:[e.jsx(r.Block,{children:e.jsx(f,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(r.Block,{children:e.jsx(h,{children:"This is the main content of the dialog."})}),e.jsx(r.Block,{children:e.jsx(p,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},b={render:a=>{const t=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Open Dialog with ref"}),e.jsxs(r,{ref:t,...a,children:[e.jsx(r.Block,{children:e.jsx(f,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(r.Block,{children:[e.jsx(h,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(h,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(r.Block,{children:e.jsx(p,{variant:"secondary",type:"button",onClick:()=>{var n;return(n=t.current)==null?void 0:n.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},v={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(r,{...a,children:[e.jsx(r.Block,{children:e.jsx(f,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(r.Block,{children:e.jsx(h,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},C={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Non-Modal"}),e.jsxs(r,{...a,children:[e.jsx(r.Block,{children:e.jsx(f,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(r.Block,{children:e.jsx(h,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},j={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Form Dialog"}),e.jsx(r,{...a,children:e.jsxs("form",{method:"dialog",onSubmit:t=>{t.preventDefault(),alert("Form submitted!")},children:[e.jsx(r.Block,{children:e.jsx(f,{"data-size":"xs",children:"Enter Details"})}),e.jsx(r.Block,{children:e.jsx(ie,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(r.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(p,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(p,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"};var N,M,q;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
          <Button variant="secondary" type="button">\r
            Close\r
          </Button>\r
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
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var H,_,O;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    return <>\r
        <Button onClick={() => dialogRef.current?.showModal()}>\r
          Open Dialog with ref\r
        </Button>\r
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
            <Button variant="secondary" type="button" onClick={() => dialogRef.current?.close()}>\r
              Close Programmatically\r
            </Button>\r
          </Dialog.Block>\r
        </Dialog>\r
      </>;
  },
  args: {
    modal: true,
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Programmatic (Ref)'
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var V,F,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(F=v.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var Y,U,I;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(I=(U=C.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var A,$,K;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
              <Button variant="secondary" type="reset"> \r
                Cancel\r
              </Button>\r
              <Button variant="primary" type="submit">\r
                Submit\r
              </Button>\r
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
}`,...(K=($=j.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const Ee=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm"];export{v as CloseOnBackdrop,y as DefaultTrigger,C as NonModal,b as ProgrammaticRef,j as WithForm,Ee as __namedExportsOrder,we as default};
