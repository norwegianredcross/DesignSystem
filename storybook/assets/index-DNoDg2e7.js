import{r as d,R as ie,j as u}from"./iframe-UjXQb656.js";import{u as le}from"./LanguageContext-CgxoyT8I.js";const se="_fieldset_16fx7_2",de="_description_16fx7_14",ue="_error_16fx7_21",ce="_inputWrapper_16fx7_30",fe="_inputWrapperError_16fx7_42",pe="_suffixButton_16fx7_80",me="_suffixButtonInteractive_16fx7_100",i={fieldset:se,description:de,error:ue,inputWrapper:ce,inputWrapperError:fe,suffixButton:pe,suffixButtonInteractive:me},R=e=>{const t=e.slice(0,2),a=e.slice(2,4),n=e.slice(4,8);return e.length>4?`${t}.${a}.${n}`:e.length>2?`${t}.${a}`:e.length>0?t:""},j=e=>(e||"").replace(/\D/g,""),q=e=>{let t=e;if(t.length>=2){const a=parseInt(t.substring(0,2),10);!isNaN(a)&&a>31&&(t="31"+t.substring(2))}if(t.length>=4){const a=parseInt(t.substring(2,4),10);!isNaN(a)&&a>12&&(t=t.substring(0,2)+"12"+t.substring(4))}return t.slice(0,8)},N=d.forwardRef((e,t)=>{const{t:a}=le();d.useEffect(()=>{const r="rk-dateinput-inline-styles";if(typeof document>"u"||document.getElementById(r))return;const c=be(i),l=document.createElement("style");l.id=r,l.textContent=c,document.head.appendChild(l)},[]);const{label:n,suffixIcon:V,onSuffixClick:p,className:W,inputWrapperClassName:F,inputClassName:S,value:x,defaultValue:L,onChange:C,readOnly:H,placeholder:M="dd.mm.åååå",id:m,name:P,required:A,disabled:y,onClick:O,onFocus:T,onBlur:G,autoComplete:J="off","aria-label":k,"aria-labelledby":B,description:_,error:b,"data-color":K,"data-size":Q,...U}=e,h=x!==void 0,o=d.useRef(null);ie.useImperativeHandle(t,()=>o.current);const I=d.useCallback(r=>{const c=j(r),l=q(c);return R(l)},[]),[g,E]=d.useState(()=>I(x??L));d.useEffect(()=>{if(h){const r=I(x);r!==g&&(E(r),o.current&&o.current.value!==r&&(o.current.value=r))}},[x,h,g,I]);const X=d.useCallback(r=>{const c=r.target,l=c.value,ae=g,ne=j(l).slice(0,8),z=q(ne),f=R(z);let s=0;const v=z.length;v<=2?s=v:v<=4?s=v+1:s=v+2,s=Math.min(s,f.length),requestAnimationFrame(()=>{if(o.current&&(E(f),o.current.value=f,o.current.setSelectionRange(s,s),(f!==ae||h)&&C)){const oe={...r,target:{...c,value:f}};C(oe,f)}})},[g,h,C,I]),Y=[i.fieldset,W].filter(Boolean).join(" "),Z=[i.inputWrapper,F,b?i.inputWrapperError:""].filter(Boolean).join(" "),ee=[S].filter(Boolean).join(" "),te=[i.suffixButton,p?i.suffixButtonInteractive:""].filter(Boolean).join(" ");!n&&!k&&!B&&console.warn("Advarsel: DateInput-komponenten bør ha label, aria-label, eller aria-labelledby for tilgjengelighet.");const $=n&&typeof n=="string"?B||`${m}-label`:void 0,D=_?`${m}-desc`:void 0,w=b?`${m}-err`:void 0,re=[D,w].filter(Boolean).join(" ")||void 0;return u.jsxs("div",{className:Y,"data-color":K,"data-size":Q,children:[n&&typeof n=="string"?u.jsx("label",{id:$,htmlFor:m,children:n}):n,_&&u.jsx("p",{id:D,className:i.description,children:_}),u.jsxs("div",{className:Z,children:[u.jsx("input",{ref:o,type:"text",inputMode:"numeric",pattern:"\\d{2}\\.\\d{2}\\.\\d{4}",maxLength:10,value:g,readOnly:H,placeholder:M,id:m,name:P,required:A,disabled:y,onClick:O,onChange:X,onFocus:T,onBlur:G,autoComplete:J,"aria-label":k,"aria-labelledby":$,"aria-describedby":re,"aria-invalid":!!b,className:ee,...U}),V&&u.jsx("button",{type:"button",className:te,onClick:y?void 0:p,tabIndex:p&&!y?0:-1,"aria-hidden":!p,disabled:y,"aria-label":p?a("dateInput.openDatePicker"):void 0,children:V})]}),b&&u.jsx("p",{id:w,className:i.error,role:"alert",children:b})]})});N.displayName="DateInput";function be(e){return`
.${e.fieldset} {
  margin-bottom: var(--ds-spacing-4, 16px);
}
.${e.fieldset} label {
  display: block;
  margin-bottom: var(--ds-spacing-1, 4px);
  font-weight: var(--ds-font-weight-medium, 500);
  color: var(--ds-color-text-default, #2b2b2b);
}
.${e.description} {
  font-size: var(--ds-font-size-sm, 14px);
  color: var(--ds-color-text-subtle, #5d5d5d);
  margin-top: var(--ds-spacing-1, 4px);
  margin-bottom: var(--ds-spacing-2, 8px);
}
.${e.error} {
  font-size: var(--ds-font-size-sm, 14px);
  color: var(--ds-color-danger-text-default, #c30000);
  margin-top: var(--ds-spacing-1, 4px);
}
.${e.inputWrapper} {
  display: flex;
  align-items: stretch;
  width: 100%;
  position: relative;
  border: var(--ds-border-width-default, 1px) solid var(--ds-color-border-default, #797979);
  border-radius: var(--ds-border-radius-md, 4px);
  overflow: hidden;
  transition: border-color 0.1s ease-out, outline 0.1s ease-out;
}
.${e.inputWrapperError} {
  border-color: var(--ds-color-danger-border-default, #c30000);
}
.${e.inputWrapper}:focus-within {
  outline: var(--ds-border-width-focus, 3px) solid var(--ds-color-focus-outer, #2B2B2B);
  outline-offset: var(--ds-focus-outline-offset, 2px);
}
.${e.inputWrapper} input {
  box-sizing: border-box;
  flex-grow: 1;
  width: auto;
  min-width: 0;
  background-color: var(--ds-color-background-default, #fff);
  color: var(--ds-color-text-default, #2b2b2b);
  border: none;
  border-radius: 0;
  outline: none;
  padding: var(--ds-size-2, 8px) var(--ds-size-3, 12px);
  font-family: inherit;
  font-size: inherit;
  appearance: none;
  -webkit-appearance: none;
}
.${e.inputWrapper} input:disabled {
  opacity: var(--ds-opacity-disabled, 0.5);
  cursor: not-allowed;
  background-color: var(--ds-color-neutral-surface-subtle, #f0f0f0);
  color: var(--ds-color-neutral-text-subtle, #5d5d5d);
}
.${e.suffixButton} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 var(--ds-size-3, 12px);
  margin: 0;
  border: none;
  border-radius: 0;
  border-left: var(--ds-border-width-default, 1px) solid var(--ds-color-border-default, #797979);
  background-color: var(--ds-color-surface-tinted, #e8e8e8);
  color: var(--ds-color-text-subtle, #5d5d5d);
  font-size: 1.25rem;
  box-sizing: border-box;
  cursor: default;
  transition: background-color 0.15s ease-out, border-color 0.15s ease-out, color 0.15s ease-out;
}
.${e.suffixButtonInteractive} {
  cursor: pointer;
}
.${e.suffixButtonInteractive}:hover:not(:disabled) {
  color: var(--ds-color-text-default, #2b2b2b);
  background-color: var(--ds-color-surface-hover, #dadada);
}
.${e.suffixButton}:disabled {
  opacity: var(--ds-opacity-disabled, 0.3);
  cursor: not-allowed;
  background-color: var(--ds-color-neutral-surface-tinted, #e8e8e8);
  border-left-color: var(--ds-color-neutral-border-default, #797979);
}
`}try{N.displayName="DateInput",N.__docgenInfo={description:`DateInput-komponent for inntasting av datoer i norsk format (dd.mm.åååå).
Håndterer automatisk formatering og validering av datoer.`,displayName:"DateInput",props:{"data-size":{defaultValue:null,description:"Endrer størrelse for underliggende Designsystemet-komponenter. Velg fra forhåndsdefinerte størrelser.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Endrer farge for underliggende Designsystemet-komponenter.
Velg fra forhåndsdefinerte farger og farger definert med theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"React.ReactNode"}},onSuffixClick:{defaultValue:null,description:"",name:"onSuffixClick",required:!1,type:{name:"React.MouseEventHandler<HTMLButtonElement>"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},inputClassName:{defaultValue:null,description:"",name:"inputClassName",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"React.ReactNode"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"React.ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.ChangeEvent<HTMLInputElement>, formattedValue: string) => void"}}}}}catch{}export{N as D};
