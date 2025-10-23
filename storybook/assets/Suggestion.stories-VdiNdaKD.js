import{r as v,j as l}from"./iframe-RR3Ys70d.js";import{c as ht}from"./lite-DaUVFjkg.js";import{C as bt}from"./index-v7joLbMq.js";import{u as yt}from"./use-merge-refs-kmg543EP.js";import{B as St}from"./button-BkDZYmD7.js";import{I as _t}from"./input-CwOSMLBg.js";import{a as Et,c as wt}from"./floating-ui.dom-BOb7AeKv.js";import{F as U}from"./index-CP4Whwlp.js";import{L as xt}from"./label-__H73i_w.js";import{S as It}from"./index-DLiporrp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bn4qVjig.js";import"./spinner-CXe5OqXC.js";import"./index-COJfOMfa.js";import"./paragraph-DlZ1YNE8.js";var Ct=Object.defineProperty,Oe=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable,Ae=(e,t,n)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,At=(e,t)=>{for(var n in t||(t={}))Lt.call(t,n)&&Ae(e,n,t[n]);if(Oe)for(var n of Oe(t))Ot.call(t,n)&&Ae(e,n,t[n]);return e},X=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",et=X&&/android/i.test(navigator.userAgent),kt=X&&/firefox/i.test(navigator.userAgent),$t=X&&/iPad|iPhone|iPod/.test(navigator.userAgent),ke;X&&/^Mac/i.test(((ke=navigator.userAgentData)==null?void 0:ke.platform)||navigator.platform);var Tt="outline: 1px dotted; outline: 5px auto Highlight; outline: 5px auto -webkit-focus-ring-color",jt=typeof HTMLElement>"u"?class{}:HTMLElement;function m(e,t,n){return n===void 0?e.getAttribute(t):(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var tt=(e,t,n)=>{for(const a of n[0].split(","))n[0]=a,Element.prototype[`${e}EventListener`].apply(t,n)},se=(e,...t)=>tt("add",e,t),Ft=(e,...t)=>tt("remove",e,t),W=new WeakMap,ve=(e,t)=>{if(t===void 0)return W.get(e);try{W.get(e).disconnect(),W.delete(e)}catch{}if(t){const n=new MutationObserver(a=>e.handleEvent({type:"mutation",detail:a}));n.observe(e,t),W.set(e,n)}},Dt=e=>{const t="key"in e&&(e.key===" "||e.key==="Enter");return t&&e.preventDefault(),t&&e.target instanceof HTMLElement&&e.target.click(),t},Vt=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},Nt=0,$e=e=>e?(e.id||(e.id=`:${e.nodeName.toLowerCase()}${(++Nt).toString(32)}`),e.id):"",ae=(e,t,n)=>{const a=document.createElement(e);if(t&&(a.textContent=t),n)for(const[o,s]of Object.entries(n))m(a,o,s);return a},Pt={define:(e,t)=>!X||window.customElements.get(e)||window.customElements.define(e,t)},Rt=e=>{var t;const n=m(e,"aria-label")||"";return[...(((t=m(e,"aria-labelledby"))==null?void 0:t.trim().split(/\s+/))||[]).map(o=>document.getElementById(o)),...Array.from(e.labels||[])].reduce((o,s)=>{var i;return o||((i=s==null?void 0:s.innerText)==null?void 0:i.trim())||""},n)},k,Mt=0,_e=e=>{k||(k=ae("div"),k.style.cssText="position:fixed;overflow:hidden;width:1px;white-space:nowrap",m(k,"aria-live","assertive")),k.isConnected||document.body.append(k),e&&(k.textContent=`${e}${Mt++%2?" ":""}`)},nt=(e,t,n="")=>{var a,o;const s={bubbles:!0,composed:!0,data:t,inputType:n},i=HTMLInputElement.prototype;e.dispatchEvent(new InputEvent("beforeinput",s)),(o=(a=Object.getOwnPropertyDescriptor(i,"value"))==null?void 0:a.set)==null||o.call(e,t),e.dispatchEvent(new InputEvent("input",s)),e.dispatchEvent(new Event("change",{bubbles:!0}))},pe=!1,Ee=e=>((e==null?void 0:e.type)==="mouseup"&&(pe=!1),(e==null?void 0:e.type)==="mousedown"&&(pe=!0,se(document,"mouseup",Ee,{once:!0})),pe),Ht=`:host(:not([hidden])) { display: block; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) } /* Must be display block in Safari to allow focus inside */
:host(:not([data-multiple])) ::slotted(data),
:host([data-multiple="false"]) ::slotted(data) { display: none } /* Hide data if not multiple */
::slotted(input[inputmode="none"]) { outline: none } /* Hide temporary foucs outline flash */
::slotted(del) { text-decoration: none }
::slotted(data:not([hidden])) { display: inline-block; pointer-events: none }
::slotted(data)::after { content: '\\00D7'; content: '\\00D7' / ''; padding-inline: .5ch; pointer-events: auto; cursor: pointer }
::slotted(data:focus) { ${Tt} }`,Te="beforeinput,blur,focus,click,input,keydown,mousedown",at={once:!0,passive:!0},Bt=kt&&!et,Ut=et||$t,je="​".repeat(5),z="false",Y={added:"Added",empty:"No selected",found:"Navigate left to find %d selected",invalid:"Invalid value",of:"of",remove:"Press to remove",removed:"Removed"},Xt=class extends jt{constructor(){super(),this._item="",this._speak="",this._texts=At({},Y),this._value="",this.shadowRoot||this.attachShadow({mode:"open"}).append(ae("slot"),ae("style",Ht))}static get observedAttributes(){return Object.keys(Y).map(e=>`data-sr-${e}`)}connectedCallback(){this._root=Vt(this),se(this,Te,this,!0),ve(this,{attributeFilter:["value","id"],attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(oe,0,this),setTimeout(re,0,this)}attributeChangedCallback(e,t,n){const a=e.split("data-sr-")[1];Y[a]&&(this._texts[a]=n||Y[a])}disconnectedCallback(){ve(this,!1),Ft(this,Te,this,!0),this._items=this._clear=this._focus=this._control=void 0,this._list=this._options=this._root=void 0}handleEvent(e){const t=e.target;we(this)||(e.type==="beforeinput"&&(this._value=(t==null?void 0:t.value)||""),e.type==="blur"&&Kt(this),e.type==="click"&&zt(this,e),e.type==="focus"&&qt(this,e),e.type==="input"&&Yt(this,e),e.type==="keydown"&&Gt(this,e),e.type==="mousedown"&&Ee(e),e.type==="mutation"&&oe(this,e))}get multiple(){var e;return((e=m(this,"data-multiple"))!=null?e:z)!==z}set multiple(e){m(this,"data-multiple",e?"":null)}get creatable(){var e;return((e=m(this,"data-creatable"))!=null?e:z)!==z}set creatable(e){m(this,"data-creatable",e?"":null)}get control(){var e;return(e=this._control)!=null&&e.isConnected||(this._control=this.querySelector("input")),this._control}get list(){var e;return(e=this._list)!=null&&e.isConnected||(this._list=this.querySelector("u-datalist,datalist")),this._list}get clear(){var e;return(e=this._clear)!=null&&e.isConnected||(this._clear=this.querySelector("del")),this._clear}get items(){return this._items||(this._items=this.getElementsByTagName("data")),this._items}get options(){var e,t;if(!this._options){const n=((e=this.list)==null?void 0:e.nodeName)==="U-DATALIST"?"u-option":"option";this._options=(t=this.list)==null?void 0:t.getElementsByTagName(n)}return this._options}get values(){return[...this.items].map(({value:e})=>e)}},T=e=>{var t;return((t=e==null?void 0:e.textContent)==null?void 0:t.trim())||""},me=e=>e instanceof HTMLDataElement,we=({control:e})=>(e==null?void 0:e.disabled)||(e==null?void 0:e.readOnly)||!1,oe=(e,t)=>{var n;const{_focus:a,_texts:o,items:s,control:i,list:g,multiple:u}=e;if(!i||!g)return;const d=Rt(i),p=d.endsWith(je)?m(i,"data-label"):d;m(i,"data-label",p);let r=`${p}${u?`, ${s.length?o.found.replace("%d",`${s.length}`):o.empty}`:""}`;const c=[];for(const{addedNodes:E,removedNodes:x}of(t==null?void 0:t.detail)||[]){for(const _ of E)me(_)&&c.unshift(_);for(const _ of x)me(_)&&c.push(_)}const h=u?c.length===1:c[0]===a;if(a&&h){const E=m(i,"aria-expanded"),x=m(i,"inputmode"),_=me(a)?i:a,C=!c[0].isConnected;e._speak=`${o[C?"removed":"added"]} ${T(c[0])}, `,(Ut||a===i)&&_e(e._speak),i!==_&&(m(i,"aria-expanded",null),m(i,"inputmode","none"),r=" ",i.focus()),setTimeout(()=>{var F;m(i,"aria-expanded",E),m(i,"inputmode",C?"none":x),(F=_==null?void 0:_.focus)==null||F.call(_),m(i,"inputmode",x),e._speak="",Bt?se(e,"blur",()=>oe(e),at):setTimeout(oe,100,e)},100)}let S=0;const w=e.querySelector("select"),de=we(e)?"":`${o.remove}, `;for(const E of s){const x=w==null?void 0:w.options[S],_=T(E),C=E.value||_,F=`${e._speak}${_}, ${de}${++S} ${o.of} ${s.length}`;m(E,"role","button"),m(E,"value",C),m(E,"tabindex","-1"),m(E,"aria-label",F),x?Object.assign(x,{textContent:_,value:C}):w==null||w.appendChild(new Option(_,C,!0,!0))}w&&m(w,"multiple",u?"":null);for(const E of[...(w==null?void 0:w.options)||[]].slice(S))E.remove();!u&&S>1&&console.warn("u-combobox: Multiple <data> found in single mode."),m(g,"aria-multiselectable",`${u}`),m(i,"list",$e(g)),m(i,"aria-label",`${e._speak}${r}${je}`),g.hasAttribute("popover")&&(m(i,"popovertarget",$e(g)),m(g,"popover","manual"));const V=T(s[0]);V!==e._item&&re(e),e._item=V,ot(e),it(e),(n=ve(e))==null||n.takeRecords()},ot=e=>{var t;e.clear&&m(e.clear,"role","button"),e.clear&&(e.clear.hidden=!((t=e.control)!=null&&t.value)||we(e))},it=e=>{var t;const{_speak:n,options:a=[],values:o}=e;for(const s of a){const i=(t=m(s,"value"))!=null?t:T(s);m(s,"aria-label",n?`${n}${T(s)}`:null),m(s,"selected",o.includes(i)?"":null)}},re=e=>{const{multiple:t,control:n,items:a}=e,o=T(a[0]);!t&&n&&o!==n.value&&nt(n,o,o?"insertText":"deleteContent")},xe=(e,t=!0)=>{var n;const{_texts:a,options:o=[],creatable:s,control:i,items:g,multiple:u}=e,d=((n=i==null?void 0:i.value)==null?void 0:n.trim())||"",p=d.toLowerCase()||null;let r=[...o].find(h=>(m(h,"label")||T(h)).trim().toLowerCase()===p);const c={bubbles:!0,cancelable:!0,detail:r};if(e.dispatchEvent(new CustomEvent("comboboxbeforematch",c))||(r=[...o].find(h=>h.selected)),t)return it(e),r?D(e,r,!1):s&&d?D(e,{value:d},!1):(!u&&!d&&g[0]?D(e,g[0]):re(e),_e(a.invalid));for(const h of o)h.selected=h===r},D=(e,t,n=!0)=>{const{control:a,items:o,multiple:s}=e,i=ae("data",t.label||t.value,{value:t.value}),g=[...o].find(p=>p.value===t.value),u={bubbles:!0,cancelable:!0,detail:g||i};if(g&&!n)return re(e);if(e.dispatchEvent(new CustomEvent("comboboxbeforeselect",u))){if(!s)for(const p of[...o])p.remove();g?g.remove():a==null||a.insertAdjacentElement("beforebegin",i),e.dispatchEvent(new CustomEvent("comboboxafterselect",u))}},qt=(e,{target:t})=>{t instanceof HTMLElement&&(e._focus=t),_e()},Kt=e=>Ee()||setTimeout(Wt,0,e),Wt=e=>{var t;!e._focus||e.contains((t=e._root)==null?void 0:t.activeElement)||(e.multiple||xe(e),e._focus=void 0)},zt=(e,t)=>{const{clientX:n,clientY:a,target:o}=t,{clear:s,control:i,items:g}=e;if(s!=null&&s.contains(o))return i&&nt(i,"","deleteContentBackward"),i==null?void 0:i.focus();for(const u of g){const{top:d,right:p,bottom:r,left:c}=u.getBoundingClientRect();if(u.contains(o))return D(e,u);if(a>=d&&a<=r&&n>=c&&n<=p)return u.focus()}o===e&&(i==null||i.focus())},Yt=(e,t)=>{var n;const{options:a=[],control:o,multiple:s}=e,i=((n=o==null?void 0:o.value)==null?void 0:n.trim())||"";if(t instanceof InputEvent?!t.inputType||t.inputType==="insertReplacementText":!!i){t.stopImmediatePropagation(),o&&(o.value=e._value);for(const u of a)if(u.value&&u.value===i)return D(e,u,s)}else s||xe(e,!1);ot(e)},Gt=(e,t)=>{var n;if(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return;const{clear:a,control:o,items:s}=e,{key:i,repeat:g,target:u}=t,d=o&&o===u,p=d&&(o==null?void 0:o.selectionEnd);let r=d?s.length:[...s].indexOf(u);if(d&&i==="Tab"&&a&&!a.hidden&&(t.preventDefault(),a.tabIndex=-1,a.focus(),se(a,"blur",()=>m(a,"tabindex",null),at)),!(!d&&Dt(t)||r===-1)){if(i==="ArrowRight"&&!d)r+=1;else if(i==="ArrowLeft"&&!p)r-=1;else if(i==="Enter"&&d){const c=m(o,"form");return m(o,"form","#"),requestAnimationFrame(()=>m(o,"form",c)),xe(e)}else if((i==="Backspace"||i==="Delete")&&!p){if(t.preventDefault(),!g&&s[r])return D(e,s[r]);d&&(r-=1)}else return d||(o==null?void 0:o.focus());t.preventDefault(),(n=s[Math.max(0,r)]||o)==null||n.focus()}};Pt.define("u-combobox",Xt);const le=v.createContext({handleFilter:()=>{}}),Jt=e=>{var t;return((t=e.textContent)==null?void 0:t.trim())||""},R=(e=[])=>typeof e=="string"?[{label:e,value:e}]:Array.isArray(e)?e.map(t=>typeof t=="string"?{label:t,value:t}:t):[e],Qt=(e,t,n)=>{const a={label:Jt(e),value:e.value};return n?e.isConnected?R(t).filter(({value:o})=>o!==a.value):[...R(t),a]:e.isConnected?void 0:a},Zt=({label:e,input:t})=>e.toLowerCase().includes(t.value.trim().toLowerCase()),en=v.forwardRef(function({children:t,className:n,creatable:a=!1,defaultSelected:o,filter:s=!0,multiple:i=!1,name:g,onBeforeMatch:u,onSelectedChange:d,renderSelected:p=({label:S})=>S,selected:r,...c},h){const S=v.useRef(null),w=v.useId(),de=c.id?`${c.id}-select`:w,V=r!==void 0,E=yt([h,S]),[x,_]=v.useState(!1),[C,F]=v.useState(R(o)),ce=r?R(r):C;v.useEffect(()=>{const y=S.current,O=A=>{A.preventDefault();const K=y==null?void 0:y.multiple,N=A.detail,I=Qt(N,ce,K);V?d==null||d(I):F(R(I))};return y==null||y.addEventListener("comboboxbeforeselect",O),()=>y==null?void 0:y.removeEventListener("comboboxbeforeselect",O)},[ce,V]),v.useEffect(()=>{const y=S.current,O=A=>u==null?void 0:u(A);return y==null||y.addEventListener("comboboxbeforematch",O),()=>y==null?void 0:y.removeEventListener("comboboxbeforematch",O)},[u]);const vt=v.useCallback(()=>{const{control:y,options:O=[]}=(S==null?void 0:S.current)||{},A=s===!0?Zt:s;let K=0,N=0;for(const I of O)I.hasAttribute("data-empty")||(A&&y&&(I.disabled=!A({index:N,input:y,label:I.label,optionElement:I,text:I.text,value:I.value})&&!!++K),N++);_(N===K)},[s]);return l.jsx(le.Provider,{value:{isEmpty:x,handleFilter:vt,uComboboxRef:S},children:l.jsxs("u-combobox",{"data-multiple":i||void 0,"data-creatable":a||void 0,class:ht("ds-suggestion",n),ref:E,...c,children:[ce.map(y=>l.jsx(bt.Removable,{value:y.value,asChild:!0,children:l.jsx("data",{children:p(y)})},y.value)),t,!!g&&l.jsx("select",{name:g,multiple:!0,hidden:!0,id:de})]})})}),tn=v.forwardRef(function({"aria-label":t="Tøm",onClick:n,...a},o){return l.jsx(St,{"aria-label":t,asChild:!0,icon:!0,hidden:!0,ref:o,variant:"tertiary",...a,children:l.jsx("del",{})})}),nn=v.forwardRef(function(t,n){const{isEmpty:a}=v.useContext(le);return a?l.jsx("u-option",{"data-empty":!0,value:"",ref:n,...t}):null}),an=v.forwardRef(function({value:t,onInput:n,onChange:a,...o},s){const{handleFilter:i}=v.useContext(le);return v.useEffect(i,[t]),a&&console.warn("SuggestionInput: Avoid using onChange, as Suggestion controls the Input. Use onValueChange on Suggest instead, or onInput if fetching API results"),t&&console.warn("SuggestionInput: Avoid using value, as Suggestion controls the Input. Use value on Suggest instead."),l.jsx(_t,{placeholder:"",ref:s,onInput:g=>{n==null||n(g),i==null||i()},...o})});var on=Object.defineProperty,Fe=Object.getOwnPropertySymbols,sn=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable,De=(e,t,n)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ln=(e,t)=>{for(var n in t||(t={}))sn.call(t,n)&&De(e,n,t[n]);if(Fe)for(var n of Fe(t))rn.call(t,n)&&De(e,n,t[n]);return e},q=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",ue=q&&/android/i.test(navigator.userAgent),Ie=q&&/iPad|iPhone|iPod/.test(navigator.userAgent),Ve;q&&/^Mac/i.test(((Ve=navigator.userAgentData)==null?void 0:Ve.platform)||navigator.platform);var un=`${ue?"data":"aria"}-labelledby`,dn=":host(:not([hidden])) { display: block }",cn="outline: 1px dotted; outline: 5px auto Highlight; outline: 5px auto -webkit-focus-ring-color",st=typeof HTMLElement>"u"?class{}:HTMLElement;function b(e,t,n){return n===void 0?e.getAttribute(t):(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var rt=(e,t,n)=>{for(const a of n[0].split(","))n[0]=a,Element.prototype[`${e}EventListener`].apply(t,n)},M=(e,...t)=>rt("add",e,t),ie=(e,...t)=>rt("remove",e,t),pn=(e,t)=>e.shadowRoot||e.attachShadow({mode:"open"}).append(ye("slot"),ye("style",t)),G=new WeakMap,he=(e,t)=>{if(t===void 0)return G.get(e);try{G.get(e).disconnect(),G.delete(e)}catch{}if(t){const n=new MutationObserver(a=>e.handleEvent({type:"mutation",detail:a}));n.observe(e,t),G.set(e,n)}},lt=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},mn=0,be=e=>e?(e.id||(e.id=`:${e.nodeName.toLowerCase()}${(++mn).toString(32)}`),e.id):"",ye=(e,t,n)=>{const a=document.createElement(e);return t&&(a.textContent=t),a},ut={define:(e,t)=>!q||window.customElements.get(e)||window.customElements.define(e,t)},$,gn=0,dt=e=>{$||($=ye("div"),$.style.cssText="position:fixed;overflow:hidden;width:1px;white-space:nowrap",b($,"aria-live","assertive")),$.isConnected||document.body.append($),e&&($.textContent=`${e}${gn++%2?" ":""}`)},fn=(e,t,n="")=>{var a,o;const s={bubbles:!0,composed:!0,data:t,inputType:n},i=HTMLInputElement.prototype;e.dispatchEvent(new InputEvent("beforeinput",s)),(o=(a=Object.getOwnPropertyDescriptor(i,"value"))==null?void 0:a.set)==null||o.call(e,t),e.dispatchEvent(new InputEvent("input",s)),e.dispatchEvent(new Event("change",{bubbles:!0}))},ge=!1,Ce=e=>((e==null?void 0:e.type)==="mouseup"&&(ge=!1),(e==null?void 0:e.type)==="mousedown"&&(ge=!0,M(document,"mouseup",Ce,{once:!0})),ge),fe="disabled",P="selected",vn=class extends st{static get observedAttributes(){return[fe,P]}connectedCallback(){Ie||(this.tabIndex=-1),this.hasAttribute("role")||b(this,"role","option"),this.attributeChangedCallback()}attributeChangedCallback(){b(this,"aria-disabled",`${this.disabled}`),b(this,"aria-selected",`${this.selected}`)}get defaultSelected(){return this[P]}set defaultSelected(e){this[P]=e}get disabled(){return b(this,fe)!==null}set disabled(e){b(this,fe,e?"":null)}get form(){return this.closest("form")}get index(){var e;return[...((e=this.parentElement)==null?void 0:e.options)||[this]].indexOf(this)}get label(){var e;return(e=b(this,"label"))!=null?e:this.text}set label(e){b(this,"label",e)}get selected(){return b(this,P)!==null}set selected(e){b(this,P,e?"":null)}get text(){var e;return((e=this.textContent)==null?void 0:e.trim())||""}set text(e){this.textContent=e}get value(){var e;return(e=b(this,"value"))!=null?e:this.text}set value(e){b(this,"value",e)}};ut.define("u-option",vn);var hn=`${dn}
::slotted(u-option) { display: block; cursor: pointer }
::slotted(u-option:focus) { ${cn} }
::slotted(u-option[aria-hidden="true"]),
::slotted(u-option[disabled]),
::slotted(u-option[hidden]) { display: none !important }`,Ne,Pe=0,bn=Ie||ue,ct="click,focusout,input,keydown,mousedown,mouseup",pt="focus,focusin,blur,focusout",J={singular:"%d hit",plural:"%d hits"},yn=class extends st{constructor(){super(),this._texts=ln({},J),this._value="",pn(this,hn)}static get observedAttributes(){return["id",...Object.keys(J).map(e=>`data-sr-${e}`)]}connectedCallback(){this.hidden=!0,this._root=lt(this),b(this,"role","listbox"),b(this,"tabindex","-1"),M(this._root,"focusin",this),M(this._root,"focus",this,!0),he(this,{attributeFilter:["disabled","hidden","label","value"],attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(()=>this.attributeChangedCallback())}disconnectedCallback(){ie(this._root||this,"focus",this,!0),ie(this._root||this,"focusin",this),he(this,!1),Le(this),this._root=void 0}attributeChangedCallback(e,t,n){const a=e==null?void 0:e.split("data-sr-")[1],o=`input[list="${this.id}"]`;if(J[a])this._texts[a]=n||J[a];else if(this._root){this._input&&Se(this,this._input);for(const s of this._root.querySelectorAll(o))Se(this,s)}}handleEvent(e){const{target:t,type:n}=e;e.defaultPrevented||(n==="click"&&En(this,e),(n==="focus"||n==="focusin")&&Sn(this,e),(n==="blur"||n==="focusout")&&_n(this,e),n==="keydown"&&wn(this,e),n==="mousedown"&&this.contains(t)&&Ce(e),(n==="mutation"||n==="input")&&(clearTimeout(Pe),Pe=setTimeout(ft,0,this,e)))}get options(){return this.getElementsByTagName("u-option")}},mt=e=>(e==null?void 0:e.disabled)||(e==null?void 0:e.readOnly)||!1,H=(e,t)=>{var n,a,o;if(e.hidden!==t)return;e.hidden=mt(e==null?void 0:e._input)||!t,(n=he(e))==null||n.takeRecords();const s=e.isConnected&&e.popover&&((a=e._input)==null?void 0:a.isConnected)&&((o=e._input)==null?void 0:o.popoverTargetElement)===e;e._input&&Se(e,e._input,t),s&&b(e,"popover","manual"),s&&e.togglePopover(t),t&&ft(e)},Le=e=>{e._input&&(ie(e._input||e,pt,e),ie(e._root||e,ct,e),H(e,!1),e._input=void 0)},Se=(e,t,n=!1)=>{e.popover&&b(t,"popovertarget",be(e)),M(t,pt,e,!0),b(t,"aria-autocomplete","list"),b(t,"aria-controls",be(e)),b(t,"aria-expanded",`${!bn||n}`),b(t,"autocomplete","off"),b(t,"role",mt(t)?null:"combobox")},Sn=(e,t)=>{var n;const a=t.target instanceof HTMLInputElement;a&&t.isTrusted&&t.stopImmediatePropagation(),e._input!==t.target&&a&&t.target.list===e&&(e._input&&Le(e),e._input=t.target,e._input.dispatchEvent(new FocusEvent("focus")),e._input.dispatchEvent(new FocusEvent("focusin",{bubbles:!0})),b(e,un,be((n=e._input.labels)==null?void 0:n[0])),M(e._root||e,ct,e),H(e,b(e._input,"inputmode")!=="none"),dt())},_n=(e,t)=>{!ue&&!Ce()&&e._input&&setTimeout(gt,0,e),t.target===e._input&&t.isTrusted&&t.stopImmediatePropagation()},gt=e=>{var t;const n=((t=e._root)==null?void 0:t.activeElement)||null,a=e._input;a&&a!==n&&!e.contains(n)&&(a.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n})),Le(e))},En=(e,{target:t})=>{var n;if(!e._input||e._input===t)return H(e,!0);for(const a of e.options)if(a.contains(t))return b(e,"aria-multiselectable")!=="true"&&((n=e._input)==null||n.focus(),H(e,!1)),fn(e._input,a.value);ue&&gt(e)},wn=(e,t)=>{var n;const{key:a,target:o,altKey:s,ctrlKey:i,shiftKey:g,metaKey:u}=t,d=a==="Escape"||a==="Esc";if(s||i||u||g||a==="Tab")return;d&&!e.hidden&&(t==null||t.preventDefault()),H(e,!d);const p=[...e.options].filter(h=>b(h,"aria-hidden")!=="true"&&h.offsetHeight),r=p.indexOf(o);let c=-1;if(a==="ArrowDown"&&(c=(r+1)%p.length),a==="ArrowUp"&&(c=(~r?r:p.length)-1),~r&&((a==="Home"||a==="PageUp")&&(c=0),(a==="End"||a==="PageDown")&&(c=p.length-1),a==="Enter"))return p[r].click(),t.preventDefault();if(p[c])for(const h of p)h.tabIndex=-1;p[c]&&t.preventDefault(),(n=p[c]||e._input)==null||n.focus(),!p[c]&&a==="ArrowUp"&&setTimeout(()=>{var h;return(h=e._input)==null?void 0:h.setSelectionRange(999,999)})},ft=(e,t)=>{const{_texts:n,_root:a,_input:o,options:s}=e,i=(o==null?void 0:o.value.toLowerCase().trim())||"",g=!e.hasAttribute("data-nofilter"),u=[],d=[];for(const r of s)(r.disabled||r.hidden||g&&!r.label.toLowerCase().includes(i)?u:d).push(r);for(const r of u)b(r,"aria-hidden","true");for(const r of d)b(r,"aria-hidden","false");const p=d.length;clearTimeout(Ne),(t==null?void 0:t.type)==="input"&&i!==e._value&&(Ne=setTimeout(()=>{const r=`${!p&&e.innerText.trim()||`${n[p===1?"singular":"plural"]}`.replace("%d",`${p}`)}`;!e.hidden&&(a==null?void 0:a.activeElement)===o&&dt(r),e._value=i},1e3)),Ie&&d.map((r,c)=>b(r,"title",`${c+1}/${p}`))};q&&Object.defineProperty(HTMLInputElement.prototype,"list",{configurable:!0,enumerable:!0,get(){return lt(this).getElementById(b(this,"list")||"")}});ut.define("u-datalist",yn);const xn=v.forwardRef(function({singular:t="%d forslag",plural:n="%d forslag",className:a,id:o,...s},i){const{handleFilter:g,uComboboxRef:u}=v.useContext(le);return v.useEffect(g),v.useEffect(()=>{var r,c;const d=(r=u==null?void 0:u.current)==null?void 0:r.control,p=(c=u==null?void 0:u.current)==null?void 0:c.list;if(p&&d)return Et(d,p,()=>{wt(d,p,{placement:"bottom",strategy:"fixed",middleware:[In]}).then(({x:h,y:S})=>{p.style.translate=`${h}px calc(${S}px + var(--dsc-suggestion-list-gap))`})})},[]),l.jsx("u-datalist",{"data-nofilter":!0,"data-sr-singular":t,"data-sr-plural":n,class:a,ref:i,popover:"manual",...s})}),In={name:"TriggerWidth",fn(e){const{elements:t,rects:n}=e;return t.floating.style.width=`${n.reference.width}px`,e}},Cn=v.forwardRef(function({className:t,...n},a){return l.jsx("u-option",{class:t,ref:a,...n})}),j=Object.assign(en,{List:xn,Input:an,Empty:nn,Option:Cn,Clear:tn});j.displayName="EXPERIMENTAL_Suggestion";j.List.displayName="EXPERIMENTAL_Suggestion.List";j.Input.displayName="EXPERIMENTAL_Suggestion.Input";j.Empty.displayName="EXPERIMENTAL_Suggestion.Empty";j.Option.displayName="EXPERIMENTAL_Suggestion.Option";j.Clear.displayName="EXPERIMENTAL_Suggestion.Clear";const f=j;f.displayName="Suggestion";try{f.displayName="Suggestion",f.__docgenInfo={description:"",displayName:"Suggestion",props:{filter:{defaultValue:{value:"true"},description:`Filter options; boolean or a custom callback.

See {@link Filter} for the callback signature.`,name:"filter",required:!1,type:{name:"boolean | Filter"}},creatable:{defaultValue:{value:"false"},description:"Allows the user to create new items",name:"creatable",required:!1,type:{name:"boolean"}},onBeforeMatch:{defaultValue:null,description:"Callback when matching input value against options",name:"onBeforeMatch",required:!1,type:{name:"(event: EventBeforeMatch) => void"}},name:{defaultValue:{value:"undefined"},description:"The name of the associated form control",name:"name",required:!1,type:{name:"string"}},renderSelected:{defaultValue:{value:"({ label }) => label"},description:"Change how the selected options are rendered inside the `Chip`.",name:"renderSelected",required:!1,type:{name:"(args: { label: string; value: string; }) => ReactNode"}},multiple:{defaultValue:{value:"false"},description:"Allows the user to select multiple items",name:"multiple",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"The selected item of the Suggestion.\n\nIf `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `SuggestionItem`.\n\nUsing this makes the component controlled and it must be used in combination with `onSelectedChange`.",name:"selected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},defaultSelected:{defaultValue:null,description:"Default selected item when uncontrolled",name:"defaultSelected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},onSelectedChange:{defaultValue:null,description:"Callback when selected items changes",name:"onSelectedChange",required:!1,type:{name:"((value: SuggestionItem) => void) | ((value: SuggestionItem[]) => void)"}}}}}catch{}const L=v.forwardRef((e,t)=>l.jsx(xt,{ref:t,...e}));L.displayName="Label";try{L.displayName="Label",L.__docgenInfo={description:"",displayName:"Label",props:{weight:{defaultValue:{value:"'medium'"},description:"Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const Ln=(e,t)=>{const n=v.useRef(null);return v.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]),v.useCallback((...o)=>{n.current&&clearTimeout(n.current),n.current=window.setTimeout(()=>{e(...o)},t)},[e,t])},Un={title:"Components/Suggestion",component:f,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},B=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],Q={render:e=>{const[t,n]=v.useState(void 0);return l.jsxs(U,{children:[l.jsx(L,{children:"Velg en destinasjon"}),l.jsxs(f,{...e,selected:t,onSelectedChange:(a=>{Array.isArray(a)||n(a)}),name:"single-destination",children:[l.jsx(f.Input,{}),l.jsx(f.Clear,{}),l.jsxs(f.List,{children:[l.jsx(f.Empty,{children:"Ingen treff"}),B.map(a=>l.jsx(f.Option,{label:a.label,value:a.value,children:a.label},a.value))]})]})]})},args:{multiple:!1,creatable:!1}},Z={render:e=>{const[t,n]=v.useState([B[1]]);return l.jsxs(U,{children:[l.jsx(L,{children:"Velg destinasjoner"}),l.jsxs(f,{...e,selected:t,onSelectedChange:(a=>{Array.isArray(a)&&n(a)}),name:"multi-destination",children:[l.jsx(f.Input,{}),l.jsx(f.Clear,{}),l.jsxs(f.List,{children:[l.jsx(f.Empty,{children:"Ingen treff"}),B.map(a=>l.jsx(f.Option,{label:a.label,value:a.value,children:a.label},a.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},ee={render:e=>{const[t,n]=v.useState(B),[a,o]=v.useState([]),s=i=>{const g=i.find(u=>u.__new__);if(g){const u={label:g.label,value:g.value};n(d=>[...d,u])}o(i)};return l.jsxs(U,{children:[l.jsx(L,{children:"Velg eller lag destinasjoner"}),l.jsxs(f,{...e,selected:a,onSelectedChange:(i=>{Array.isArray(i)&&s(i)}),name:"creatable-destination",children:[l.jsx(f.Input,{}),l.jsx(f.Clear,{}),l.jsxs(f.List,{children:[l.jsx(f.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),t.map(i=>l.jsx(f.Option,{label:i.label,value:i.value,children:i.label},i.value))]})]})]})},args:{multiple:!0,creatable:!0}},te={render:e=>{const[t,n]=v.useState(""),[a,o]=v.useState(null),[s,i]=v.useState(),u=Ln(async r=>{const c=`https://restcountries.com/v2/name/${r}?fields=name`;try{const h=await fetch(c);if(!h.ok){o([]);return}const S=await h.json();o(Array.isArray(S)?S.map(({name:w})=>w):[])}catch(h){console.error("Failed to fetch countries:",h),o([])}},500),d=r=>{const c=r.target.value;n(c),o(null);const h=c.trim();h&&u(encodeURIComponent(h))},p=r=>{if(!Array.isArray(r)&&r){const c=r;n(c.label),i(c),o(null)}};return l.jsxs(U,{lang:"en",children:[l.jsx(L,{children:"Search for countries (in english)"}),l.jsxs(f,{...e,selected:s,onSelectedChange:p,children:[l.jsx(f.Input,{onInput:d,value:t}),l.jsx(f.Clear,{}),l.jsxs(f.List,{singular:"%d country",plural:"%d countries",children:[t?l.jsx(f.Empty,{children:a?"Ingen treff":l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx(It,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,a==null?void 0:a.map(r=>l.jsx(f.Option,{label:r,value:r,children:r},r))]})]})]})},args:{filter:!1},name:"Async Loading"},ne={render:e=>{const[t,n]=v.useState(void 0);return l.jsxs(U,{children:[l.jsx(L,{children:"Velg en destinasjon (viser alltid alle)"}),l.jsxs(f,{...e,selected:t,onSelectedChange:(a=>{Array.isArray(a)||n(a)}),name:"no-filter-destination",children:[l.jsx(f.Input,{}),l.jsx(f.Clear,{}),l.jsxs(f.List,{children:[l.jsx(f.Empty,{children:"Listen er tom"}),B.map(a=>l.jsx(f.Option,{label:a.label,value:a.value,children:a.label},a.value))]})]})]})},args:{filter:!1},name:"No Filter"};var Re,Me,He;Q.parameters={...Q.parameters,docs:{...(Re=Q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>(undefined);
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg en destinasjon</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
        // Fix: Add type guard and cast handler to 'any'
        onSelectedChange={((item: unknown) => {
          if (!Array.isArray(item)) {
            setSelected(item as StorySuggestionItem);
          }
        }) as any} name="single-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
            label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: false,
    creatable: false
  }
}`,...(He=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var Be,Ue,Xe;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem[]>([defaultOptions[1] // Pre-select 'Oslo'
    ]);
    return <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
      // Fix: Add type guard and cast handler to 'any'
      onSelectedChange={((items: unknown) => {
        if (Array.isArray(items)) {
          setSelected(items as StorySuggestionItem[]);
        }
      }) as any} name="multi-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
          label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>;
  },
  args: {
    multiple: true
  },
  name: 'Multi-Select'
}`,...(Xe=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var qe,Ke,We;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: args => {
    const [options, setOptions] = useState<StorySuggestionItem[]>(defaultOptions);
    const [selected, setSelected] = useState<StorySuggestionItem[]>([]);
    const handleSelectedChange = (items: StorySuggestionItem[]) => {
      // Check if a new item was created
      const newItem = items.find(item => (item as any).__new__);
      if (newItem) {
        // Add the new item to the available options list
        const newOption = {
          label: newItem.label,
          value: newItem.value
        };
        setOptions(prev => [...prev, newOption]);
      }
      setSelected(items);
    };
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg eller lag destinasjoner</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
        // Fix: Add type guard and cast handler to 'any'
        onSelectedChange={((items: unknown) => {
          if (Array.isArray(items)) {
            handleSelectedChange(items as StorySuggestionItem[]);
          }
        }) as any} name="creatable-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>
              Ingen treff (trykk Enter for å lage ny)
            </Suggestion.Empty>
            {options.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
            label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    multiple: true,
    creatable: true
  }
}`,...(We=(Ke=ee.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var ze,Ye,Ge;te.parameters={...te.parameters,docs:{...(ze=te.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<string[] | null>(null);
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>();
    const apiCall = async (value: string) => {
      const api = \`https://restcountries.com/v2/name/\${value}?fields=name\`;
      try {
        const response = await fetch(api);
        if (!response.ok) {
          setOptions([]); // Handle HTTP errors
          return;
        }
        const countries = await response.json();
        setOptions(Array.isArray(countries) ? countries.map(({
          name
        }) => name) : []);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
        setOptions([]); // Handle fetch errors
      }
    };
    const debounced = useDebounceCallback(apiCall, 500);
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setValue(inputValue);
      setOptions(null); // Clear options on new input
      const trimmedValue = inputValue.trim();
      if (!trimmedValue) return;
      debounced(encodeURIComponent(trimmedValue));
    };

    // FIX: Added handler to make component controlled
    const handleSelectedChange = (item: unknown) => {
      if (!Array.isArray(item) && item) {
        const selectedItem = item as StorySuggestionItem;
        setValue(selectedItem.label); // Set input value to the selected item
        setSelected(selectedItem); // Set selected state
        setOptions(null); // Clear options list
      }
    };
    return <Field lang="en">
        <Label>Search for countries (in english)</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
      onSelectedChange={handleSelectedChange as any} // FIX: Cast handler to 'any'
      >
          <Suggestion.Input onInput={handleInput} value={value} />
          <Suggestion.Clear />
          <Suggestion.List singular="%d country" plural="%d countries">
            {value ? <Suggestion.Empty>
                {options ? 'Ingen treff' : <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
                    <Spinner aria-hidden="true" data-size="sm" /> Laster...
                  </span>}
              </Suggestion.Empty> : null}
            {options?.map(option => <Suggestion.Option key={option} label={option} value={option}>
                {option}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>;
  },
  args: {
    // We set filter to false because we are providing our own list of options
    filter: false
  },
  name: 'Async Loading'
}`,...(Ge=(Ye=te.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Je,Qe,Ze;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<StorySuggestionItem | undefined>(undefined);
    return (
      // Fix: <Field> expects <Label> as a child, not a 'label' prop
      <Field>
        <Label>Velg en destinasjon (viser alltid alle)</Label>
        <Suggestion {...args} selected={selected as any} // FIX: Cast to 'any' to bypass broken types
        // Fix: Add type guard and cast handler to 'any'
        onSelectedChange={((item: unknown) => {
          if (!Array.isArray(item)) {
            setSelected(item as StorySuggestionItem);
          }
        }) as any} name="no-filter-destination">
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Listen er tom</Suggestion.Empty>
            {defaultOptions.map(opt => <Suggestion.Option key={opt.value} // Fix: 'key' is now correctly typed as string
            label={opt.label} value={opt.value}>
                {opt.label}
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
    );
  },
  args: {
    filter: false
  },
  name: 'No Filter'
}`,...(Ze=(Qe=ne.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};const Xn=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter"];export{te as AsyncLoading,ee as Creatable,Q as Default,Z as MultiSelect,ne as NoFilter,Xn as __namedExportsOrder,Un as default};
