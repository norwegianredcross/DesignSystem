import{r as n,j as e}from"./iframe-sfm2iiNv.js";import{u as le}from"./floating-ui.react-B0KwFFiC.js";import{S as R}from"./index-B-pTjrYB.js";import{c as $}from"./lite-DaUVFjkg.js";import{B as K}from"./Button-BwQva4Hh.js";import{B as f}from"./index-GV4WznY2.js";import{H as D}from"./Heading-CGCZLqmt.js";import{P as x}from"./Paragraph-r4OMux9D.js";import{T as se}from"./Textfield-Dpo-Ign-.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNAPc2gN.js";import"./index-jZE8LZbC.js";import"./Spinner-CN5uxT_N.js";import"./index-Bpc4Wq8G.js";import"./Label-hKN12Bml.js";import"./Textarea-Dj7VAftg.js";import"./Input-DTmrggwA.js";const w=n.createContext({current:null}),X=({children:a})=>{const t=n.useRef(null);return e.jsx(w.Provider,{value:t,children:a})};X.displayName="DialogTriggerContext";const ie=n.forwardRef(function({asChild:t,children:l,className:m,closeButton:i="Lukk dialogvindu",closedby:c="closerequest",modal:k=!0,onClose:d,open:p,...B},G){const J=n.useContext(w),h=n.useRef(null),Q=t?R:"dialog",Z=le([J,G,h]),ee=k?"showModal":"show";return n.useEffect(()=>{var o;return(o=h.current)==null?void 0:o[p?ee:"close"]()},[p]),n.useEffect(()=>{const o=h.current,g=s=>{var P;const{clientY:E,clientX:L,target:oe}=s;if(s instanceof KeyboardEvent)return c==="none"&&s.key==="Escape"&&s.preventDefault();if(!((P=window.getSelection())!=null&&P.toString())&&o&&oe===o&&c==="any"){const{top:re,left:ae,right:te,bottom:ne}=o.getBoundingClientRect();re<=E&&E<=ne&&ae<=L&&L<=te||o==null||o.close()}},u=()=>{const s=o==null?void 0:o.querySelector("[autofocus]");document.activeElement!==s&&(s==null||s.focus())};return o==null||o.addEventListener("animationend",u),o==null||o.addEventListener("click",g),o==null||o.addEventListener("keydown",g),()=>{o==null||o.removeEventListener("animationend",u),o==null||o.removeEventListener("click",g),o==null||o.removeEventListener("keydown",g)}},[c]),n.useEffect(()=>{var g;const o=u=>d==null?void 0:d(u);return(g=h.current)==null||g.addEventListener("close",o),()=>{var u;return(u=h.current)==null?void 0:u.removeEventListener("close",o)}},[d]),e.jsxs(Q,{className:$("ds-dialog",m),ref:Z,"data-modal":k,...B,children:[i!==!1&&e.jsx("form",{method:"dialog",children:e.jsx(K,{"aria-label":i,autoFocus:!0,"data-color":"neutral",icon:!0,name:"close",type:"submit",variant:"tertiary"})}),l]})}),ce=n.forwardRef(function({asChild:t,className:l,...m},i){const c=t?R:"div";return e.jsx(c,{className:$("ds-dialog__block",l),ref:i,...m})}),de=n.forwardRef(function({asChild:t,...l},m){const i=n.useContext(w),c=t?R:K,k=()=>{var d,p,B;((d=i.current)==null?void 0:d.getAttribute("data-modal"))==="true"?(p=i.current)==null||p.showModal():(B=i.current)==null||B.show()};return e.jsx(c,{"aria-haspopup":"dialog",onClick:k,ref:m,...l})}),T=Object.assign(ie,{Block:ce,TriggerContext:X,Trigger:de});T.Block.displayName="Dialog.Block";T.TriggerContext.displayName="Dialog.TriggerContext";T.Trigger.displayName="Dialog.Trigger";const r=T;try{r.displayName="Dialog",r.__docgenInfo={description:"",displayName:"Dialog",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"string | false"}},closedby:{defaultValue:null,description:"",name:"closedby",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"closerequest"'},{value:'"any"'}]}},modal:{defaultValue:null,description:"",name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ee={title:"Components/Dialog",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},closeButton:{control:"text",description:"Screen reader label of close button. Set false to hide the close button.",defaultValue:"Lukk dialogvindu"},closedby:{control:"select",options:["none","closerequest","any"],description:'Light dismiss behavior, allowing to close on backdrop click by setting closedby="any".',defaultValue:"closerequest"},modal:{control:"boolean",description:"Toggle modal and non-modal dialog.",defaultValue:!0},open:{control:"boolean",description:"Controls the open/closed state (primarily for programmatic control).",table:{disable:!0}},onClose:{action:"closed",description:"Callback that is called when the dialog is closed.",table:{disable:!0}},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Dialog content, often using Dialog.Block"}}},y={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Dialog"}),e.jsxs(r,{...a,children:[e.jsx(r.Block,{children:e.jsx(D,{"data-size":"xs",children:"Dialog Header"})}),e.jsx(r.Block,{children:e.jsx(x,{children:"This is the main content of the dialog."})}),e.jsx(r.Block,{children:e.jsx(f,{variant:"secondary",type:"button",children:"Close"})})]})]}),args:{modal:!0,closedby:"closerequest",closeButton:"Lukk dialogvindu","data-color":"neutral"},name:"Basic (Trigger)"},C={render:a=>{const t=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:()=>{var l;return(l=t.current)==null?void 0:l.showModal()},children:"Open Dialog with ref"}),e.jsxs(r,{ref:t,...a,children:[e.jsx(r.Block,{children:e.jsx(D,{"data-size":"xs",children:"Programmatic Dialog"})}),e.jsxs(r.Block,{children:[e.jsx(x,{children:"This dialog was opened using a ref and showModal()."}),e.jsx(x,{children:"Use the Escape key or the close button (if enabled) to close."})]}),e.jsx(r.Block,{children:e.jsx(f,{variant:"secondary",type:"button",onClick:()=>{var l;return(l=t.current)==null?void 0:l.close()},children:"Close Programmatically"})})]})]})},args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"Programmatic (Ref)"},v={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open (Close on Backdrop)"}),e.jsxs(r,{...a,children:[e.jsx(r.Block,{children:e.jsx(D,{"data-size":"xs",children:"Backdrop Close"})}),e.jsx(r.Block,{children:e.jsx(x,{children:"Click outside this dialog to close it."})})]})]}),args:{modal:!0,closedby:"any",closeButton:"Lukk dialogvindu"},name:"Close on Backdrop"},b={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Non-Modal"}),e.jsxs(r,{...a,children:[e.jsx(r.Block,{children:e.jsx(D,{"data-size":"xs",children:"Non-Modal Dialog"})}),e.jsx(r.Block,{children:e.jsx(x,{children:"You can interact with the page behind this dialog."})})]})]}),args:{modal:!1,closeButton:"Lukk dialogvindu"},name:"Non-Modal"},j={render:a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"Open Form Dialog"}),e.jsx(r,{...a,children:e.jsxs("form",{method:"dialog",onSubmit:t=>{t.preventDefault(),alert("Form submitted!")},children:[e.jsx(r.Block,{children:e.jsx(D,{"data-size":"xs",children:"Enter Details"})}),e.jsx(r.Block,{children:e.jsx(se,{label:"Your Name",name:"your-name",autoFocus:!0})}),e.jsx(r.Block,{children:e.jsxs("div",{style:{display:"flex",gap:"var(--ds-spacing-3)"},children:[e.jsx(f,{variant:"secondary",type:"reset",children:"Cancel"}),e.jsx(f,{variant:"primary",type:"submit",children:"Submit"})]})})]})})]}),args:{modal:!0,closeButton:"Lukk dialogvindu"},name:"With Form"};var N,S,z;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(S=y.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var M,q,H;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    closeButton: 'Lukk dialogvindu'
  },
  name: 'Programmatic (Ref)'
}`,...(H=(q=C.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var O,V,F;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(V=v.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var _,Y,W;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var I,A,U;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(A=j.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const Le=["DefaultTrigger","ProgrammaticRef","CloseOnBackdrop","NonModal","WithForm"];export{v as CloseOnBackdrop,y as DefaultTrigger,b as NonModal,C as ProgrammaticRef,j as WithForm,Le as __namedExportsOrder,Ee as default};
