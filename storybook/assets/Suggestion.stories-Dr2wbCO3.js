import{r as f,j as l}from"./iframe-BHNwM2Px.js";import{c as St}from"./lite-DaUVFjkg.js";import{C as _t}from"./index-D8pe73lh.js";import{u as Et}from"./use-merge-refs-CPe1Q7jZ.js";import{B as wt}from"./button-q3L8iVDM.js";import{I as xt}from"./input-DeNNeell.js";import{a as It,c as Ct}from"./floating-ui.dom-BOb7AeKv.js";import{F as B}from"./index-DfMWfP5Y.js";import{L as Lt}from"./label-e8D1VWny.js";import{S as At}from"./index-1aJhN5by.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D3MVKXs2.js";import"./spinner-C7KuIz7y.js";import"./index-BKj4NTZ2.js";import"./paragraph-B5WHgtx-.js";var Ot=Object.defineProperty,ke=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,$e=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tt=(e,t)=>{for(var n in t||(t={}))kt.call(t,n)&&$e(e,n,t[n]);if(ke)for(var n of ke(t))$t.call(t,n)&&$e(e,n,t[n]);return e},X=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",nt=X&&/android/i.test(navigator.userAgent),jt=X&&/firefox/i.test(navigator.userAgent),Ft=X&&/iPad|iPhone|iPod/.test(navigator.userAgent),Te;X&&/^Mac/i.test(((Te=navigator.userAgentData)==null?void 0:Te.platform)||navigator.platform);var Dt="outline: 1px dotted; outline: 5px auto Highlight; outline: 5px auto -webkit-focus-ring-color",Vt=typeof HTMLElement>"u"?class{}:HTMLElement;function m(e,t,n){return n===void 0?e.getAttribute(t):(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var at=(e,t,n)=>{for(const a of n[0].split(","))n[0]=a,Element.prototype[`${e}EventListener`].apply(t,n)},re=(e,...t)=>at("add",e,t),Nt=(e,...t)=>at("remove",e,t),z=new WeakMap,he=(e,t)=>{if(t===void 0)return z.get(e);try{z.get(e).disconnect(),z.delete(e)}catch{}if(t){const n=new MutationObserver(a=>e.handleEvent({type:"mutation",detail:a}));n.observe(e,t),z.set(e,n)}},Mt=e=>{const t="key"in e&&(e.key===" "||e.key==="Enter");return t&&e.preventDefault(),t&&e.target instanceof HTMLElement&&e.target.click(),t},Pt=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},Rt=0,je=e=>e?(e.id||(e.id=`:${e.nodeName.toLowerCase()}${(++Rt).toString(32)}`),e.id):"",oe=(e,t,n)=>{const a=document.createElement(e);if(t&&(a.textContent=t),n)for(const[o,s]of Object.entries(n))m(a,o,s);return a},Ht={define:(e,t)=>!X||window.customElements.get(e)||window.customElements.define(e,t)},Ut=e=>{var t;const n=m(e,"aria-label")||"";return[...(((t=m(e,"aria-labelledby"))==null?void 0:t.trim().split(/\s+/))||[]).map(o=>document.getElementById(o)),...Array.from(e.labels||[])].reduce((o,s)=>{var i;return o||((i=s==null?void 0:s.innerText)==null?void 0:i.trim())||""},n)},k,Bt=0,Ee=e=>{k||(k=oe("div"),k.style.cssText="position:fixed;overflow:hidden;width:1px;white-space:nowrap",m(k,"aria-live","assertive")),k.isConnected||document.body.append(k),e&&(k.textContent=`${e}${Bt++%2?" ":""}`)},ot=(e,t,n="")=>{var a,o;const s={bubbles:!0,composed:!0,data:t,inputType:n},i=HTMLInputElement.prototype;e.dispatchEvent(new InputEvent("beforeinput",s)),(o=(a=Object.getOwnPropertyDescriptor(i,"value"))==null?void 0:a.set)==null||o.call(e,t),e.dispatchEvent(new InputEvent("input",s)),e.dispatchEvent(new Event("change",{bubbles:!0}))},me=!1,we=e=>((e==null?void 0:e.type)==="mouseup"&&(me=!1),(e==null?void 0:e.type)==="mousedown"&&(me=!0,re(document,"mouseup",we,{once:!0})),me),Xt=`:host(:not([hidden])) { display: block; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) } /* Must be display block in Safari to allow focus inside */
:host(:not([data-multiple])) ::slotted(data),
:host([data-multiple="false"]) ::slotted(data) { display: none } /* Hide data if not multiple */
::slotted(input[inputmode="none"]) { outline: none } /* Hide temporary foucs outline flash */
::slotted(del) { text-decoration: none }
::slotted(data:not([hidden])) { display: inline-block; pointer-events: none }
::slotted(data)::after { content: '\\00D7'; content: '\\00D7' / ''; padding-inline: .5ch; pointer-events: auto; cursor: pointer }
::slotted(data:focus) { ${Dt} }`,Fe="beforeinput,blur,focus,click,input,keydown,mousedown",it={once:!0,passive:!0},Y="false",qt=jt&&!nt,Kt=nt||Ft,De="​".repeat(5),st="deleteContentBackward",Wt="insertText",G={added:"Added",empty:"No selected",found:"Navigate left to find %d selected",invalid:"Invalid value",of:"of",remove:"Press to remove",removed:"Removed"},zt=class extends Vt{constructor(){super(),this._item="",this._speak="",this._texts=Tt({},G),this._value="",this.shadowRoot||this.attachShadow({mode:"open"}).append(oe("slot"),oe("style",Xt))}static get observedAttributes(){return Object.keys(G).map(e=>`data-sr-${e}`)}connectedCallback(){this._root=Pt(this),re(this,Fe,this,!0),he(this,{attributeFilter:["value","id"],attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(ie,0,this),setTimeout(le,0,this)}attributeChangedCallback(e,t,n){const a=e.split("data-sr-")[1];G[a]&&(this._texts[a]=n||G[a])}disconnectedCallback(){he(this,!1),Nt(this,Fe,this,!0),this._items=this._clear=this._focus=this._control=void 0,this._list=this._options=this._root=void 0}handleEvent(e){const t=e.target;xe(this)||(e.type==="beforeinput"&&(this._value=(t==null?void 0:t.value)||""),e.type==="blur"&&Gt(this),e.type==="click"&&Qt(this,e),e.type==="focus"&&Yt(this,e),e.type==="input"&&Zt(this,e),e.type==="keydown"&&en(this,e),e.type==="mousedown"&&we(e),e.type==="mutation"&&ie(this,e))}get multiple(){var e;return((e=m(this,"data-multiple"))!=null?e:Y)!==Y}set multiple(e){m(this,"data-multiple",e?"":null)}get creatable(){var e;return((e=m(this,"data-creatable"))!=null?e:Y)!==Y}set creatable(e){m(this,"data-creatable",e?"":null)}get control(){var e;return(e=this._control)!=null&&e.isConnected||(this._control=this.querySelector("input")),this._control}get list(){var e;return(e=this._list)!=null&&e.isConnected||(this._list=this.querySelector("u-datalist,datalist")),this._list}get clear(){var e;return(e=this._clear)!=null&&e.isConnected||(this._clear=this.querySelector("del")),this._clear}get items(){return this._items||(this._items=this.getElementsByTagName("data")),this._items}get options(){var e,t;if(!this._options){const n=((e=this.list)==null?void 0:e.nodeName)==="U-DATALIST"?"u-option":"option";this._options=(t=this.list)==null?void 0:t.getElementsByTagName(n)}return this._options}get values(){return[...this.items].map(({value:e})=>e)}},T=e=>{var t;return((t=e==null?void 0:e.textContent)==null?void 0:t.trim())||""},ge=e=>e instanceof HTMLDataElement,xe=({control:e})=>(e==null?void 0:e.disabled)||(e==null?void 0:e.readOnly)||!1,ie=(e,t)=>{var n;const{_focus:a,_texts:o,items:s,control:i,list:g,multiple:u}=e;if(!i||!g)return;const d=Ut(i),p=d.endsWith(De)?m(i,"data-label"):d;m(i,"data-label",p);let r=`${p}${u?`, ${s.length?o.found.replace("%d",`${s.length}`):o.empty}`:""}`;const c=[];for(const{addedNodes:E,removedNodes:x}of(t==null?void 0:t.detail)||[]){for(const _ of E)ge(_)&&c.unshift(_);for(const _ of x)ge(_)&&c.push(_)}const h=u?c.length===1:c[0]===a;if(a&&h){const E=m(i,"aria-expanded"),x=m(i,"inputmode"),_=ge(a)?i:a,C=!c[0].isConnected;e._speak=`${o[C?"removed":"added"]} ${T(c[0])}, `,(Kt||a===i)&&Ee(e._speak),i!==_&&(m(i,"aria-expanded",null),m(i,"inputmode","none"),r=" ",i.focus()),setTimeout(()=>{var F;m(i,"aria-expanded",E),m(i,"inputmode",C?"none":x),(F=_==null?void 0:_.focus)==null||F.call(_),m(i,"inputmode",x),e._speak="",qt?re(e,"blur",()=>ie(e),it):setTimeout(ie,100,e)},100)}let S=0;const w=e.querySelector("select"),ce=xe(e)?"":`${o.remove}, `;for(const E of s){const x=w==null?void 0:w.options[S],_=T(E),C=E.value||_,F=`${e._speak}${_}, ${ce}${++S} ${o.of} ${s.length}`;m(E,"role","button"),m(E,"value",C),m(E,"tabindex","-1"),m(E,"aria-label",F),x?Object.assign(x,{textContent:_,value:C}):w==null||w.appendChild(new Option(_,C,!0,!0))}w&&m(w,"multiple",u?"":null);for(const E of[...(w==null?void 0:w.options)||[]].slice(S))E.remove();!u&&S>1&&console.warn("u-combobox: Multiple <data> found in single mode."),m(g,"aria-multiselectable",`${u}`),m(i,"list",je(g)),m(i,"aria-label",`${e._speak}${r}${De}`),g.hasAttribute("popover")&&(m(i,"popovertarget",je(g)),m(g,"popover","manual"));const V=T(s[0]);V!==e._item&&le(e),e._item=V,rt(e),lt(e),(n=he(e))==null||n.takeRecords()},rt=e=>{var t;e.clear&&m(e.clear,"role","button"),e.clear&&(e.clear.hidden=!((t=e.control)!=null&&t.value)||xe(e))},lt=e=>{var t;const{_speak:n,options:a=[],values:o}=e;for(const s of a){const i=(t=m(s,"value"))!=null?t:T(s);m(s,"aria-label",n?`${n}${T(s)}`:null),m(s,"selected",o.includes(i)?"":null)}},le=e=>{const{multiple:t,control:n,items:a}=e,o=T(a[0]);!t&&n&&o!==n.value&&ot(n,o,o?Wt:st)},Ie=(e,t=!0)=>{var n;const{_texts:a,options:o=[],creatable:s,control:i,items:g,multiple:u}=e,d=((n=i==null?void 0:i.value)==null?void 0:n.trim())||"",p=d.toLowerCase()||null;let r=[...o].find(h=>(m(h,"label")||T(h)).trim().toLowerCase()===p);const c={bubbles:!0,cancelable:!0,detail:r};if(e.dispatchEvent(new CustomEvent("comboboxbeforematch",c))||(r=[...o].find(h=>h.selected)),t)return lt(e),r?D(e,r,!1):s&&d?D(e,{value:d},!1):(!u&&!d&&g[0]?D(e,g[0]):le(e),Ee(a.invalid));for(const h of o)h.selected=h===r},D=(e,t,n=!0)=>{const{control:a,items:o,multiple:s}=e,i=oe("data",t.label||t.value,{value:t.value}),g=[...o].find(p=>p.value===t.value),u={bubbles:!0,cancelable:!0,detail:g||i};if(g&&!n)return le(e);if(e.dispatchEvent(new CustomEvent("comboboxbeforeselect",u))){if(!s)for(const p of[...o])p.remove();g?g.remove():a==null||a.insertAdjacentElement("beforebegin",i),e.dispatchEvent(new CustomEvent("comboboxafterselect",u))}},Yt=(e,{target:t})=>{t instanceof HTMLElement&&(e._focus=t),Ee()},Gt=e=>we()||setTimeout(Jt,0,e),Jt=e=>{var t;!e._focus||e.contains((t=e._root)==null?void 0:t.activeElement)||(e.multiple||Ie(e),e._focus=void 0)},Qt=(e,t)=>{const{clientX:n,clientY:a,target:o}=t,{clear:s,control:i,items:g}=e;if(s!=null&&s.contains(o))return i&&ot(i,"",st),i==null?void 0:i.focus();for(const u of g){const{top:d,right:p,bottom:r,left:c}=u.getBoundingClientRect();if(u.contains(o))return D(e,u);if(a>=d&&a<=r&&n>=c&&n<=p)return u.focus()}o===e&&(i==null||i.focus())},Zt=(e,t)=>{var n;const{options:a=[],control:o,multiple:s}=e,i=((n=o==null?void 0:o.value)==null?void 0:n.trim())||"";if(t instanceof InputEvent?!t.inputType||t.inputType==="insertReplacementText":!!i){t.stopImmediatePropagation(),o&&(o.value=e._value);for(const u of a)if(u.value&&u.value===i)return D(e,u,s)}else s||Ie(e,!1);rt(e)},en=(e,t)=>{var n;if(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return;const{clear:a,control:o,items:s}=e,{key:i,repeat:g,target:u}=t,d=o&&o===u,p=d&&(o==null?void 0:o.selectionEnd);let r=d?s.length:[...s].indexOf(u);if(d&&i==="Tab"&&a&&!a.hidden&&(t.preventDefault(),a.tabIndex=0,a.focus(),re(a,"blur",()=>m(a,"tabindex",null),it)),!(!d&&Mt(t)||r===-1)){if(i==="ArrowRight"&&!d)r+=1;else if(i==="ArrowLeft"&&!p)r-=1;else if(i==="Enter"&&d){const c=m(o,"form");return m(o,"form","#"),requestAnimationFrame(()=>m(o,"form",c)),Ie(e)}else if(i==="Backspace"&&!p){if(t.preventDefault(),!g&&s[r])return D(e,s[r]);d&&(r-=1)}else return d||(o==null?void 0:o.focus());t.preventDefault(),(n=s[Math.max(0,r)]||o)==null||n.focus()}};Ht.define("u-combobox",zt);const tn=e=>{var t;return((t=e.textContent)==null?void 0:t.trim())||""},P=(e=[])=>typeof e=="string"?[{label:e,value:e}]:Array.isArray(e)?e.map(t=>typeof t=="string"?{label:t,value:t}:t):[e],nn=(e,t,n)=>{const a={label:tn(e),value:e.value};return n?e.isConnected?P(t).filter(({value:o})=>o!==a.value):[...P(t),a]:e.isConnected?void 0:a},an=({label:e,input:t})=>e.toLowerCase().includes(t.value.trim().toLowerCase()),on=f.forwardRef(function({children:t,className:n,creatable:a=!1,defaultSelected:o,filter:s=!0,multiple:i=!1,name:g,onBeforeMatch:u,onSelectedChange:d,renderSelected:p=({label:S})=>S,selected:r,...c},h){const S=f.useRef(null),w=f.useId(),ce=c.id?`${c.id}-select`:w,V=r!==void 0,E=Et([h,S]),[x,_]=f.useState(!1),[C,F]=f.useState(P(o)),pe=r?P(r):C,K=f.useRef(d);f.useEffect(()=>{K.current=d},[d]),f.useEffect(()=>{const y=S.current,A=O=>{var Oe;O.preventDefault();const W=y==null?void 0:y.multiple,N=O.detail,I=nn(N,pe,W);V?(Oe=K.current)==null||Oe.call(K,I):F(P(I))};return y==null||y.addEventListener("comboboxbeforeselect",A),()=>y==null?void 0:y.removeEventListener("comboboxbeforeselect",A)},[pe,V]),f.useEffect(()=>{const y=S.current,A=O=>u==null?void 0:u(O);return y==null||y.addEventListener("comboboxbeforematch",A),()=>y==null?void 0:y.removeEventListener("comboboxbeforematch",A)},[u]);const yt=f.useCallback(()=>{const{control:y,options:A=[]}=(S==null?void 0:S.current)||{},O=s===!0?an:s;let W=0,N=0;for(const I of A)I.hasAttribute("data-empty")||(O&&y&&(I.disabled=!O({index:N,input:y,label:I.label,optionElement:I,text:I.text,value:I.value})&&!!++W),N++);_(N===W)},[s]);return l.jsx(ue.Provider,{value:{isEmpty:x,handleFilter:yt,uComboboxRef:S},children:l.jsxs("u-combobox",{"data-multiple":i||void 0,"data-creatable":a||void 0,class:St("ds-suggestion",n),ref:E,...c,children:[pe.map(y=>l.jsx(_t.Removable,{value:y.value,asChild:!0,children:l.jsx("data",{children:p(y)})},y.value)),t,!!g&&l.jsx("select",{name:g,multiple:!0,hidden:!0,id:ce})]})})}),ue=f.createContext({handleFilter:()=>{}}),sn=f.forwardRef(function({"aria-label":t="Tøm",onClick:n,...a},o){return l.jsx(wt,{"aria-label":t,asChild:!0,icon:!0,hidden:!0,ref:o,variant:"tertiary",...a,children:l.jsx("del",{})})}),rn=f.forwardRef(function(t,n){const{isEmpty:a}=f.useContext(ue);return a?l.jsx("u-option",{"data-empty":!0,value:"",ref:n,...t}):null}),ln=f.forwardRef(function({value:t,onInput:n,onChange:a,...o},s){const{handleFilter:i}=f.useContext(ue);return f.useEffect(i,[t]),a&&console.warn("SuggestionInput: Avoid using onChange, as Suggestion controls the Input. Use onValueChange on Suggest instead, or onInput if fetching API results"),t&&console.warn("SuggestionInput: Avoid using value, as Suggestion controls the Input. Use value on Suggest instead."),l.jsx(xt,{placeholder:"",ref:s,onInput:g=>{n==null||n(g),i==null||i()},...o})});var un=Object.defineProperty,Ve=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,cn=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pn=(e,t)=>{for(var n in t||(t={}))dn.call(t,n)&&Ne(e,n,t[n]);if(Ve)for(var n of Ve(t))cn.call(t,n)&&Ne(e,n,t[n]);return e},q=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",de=q&&/android/i.test(navigator.userAgent),Ce=q&&/iPad|iPhone|iPod/.test(navigator.userAgent),Me;q&&/^Mac/i.test(((Me=navigator.userAgentData)==null?void 0:Me.platform)||navigator.platform);var mn=`${de?"data":"aria"}-labelledby`,gn=":host(:not([hidden])) { display: block }",fn="outline: 1px dotted; outline: 5px auto Highlight; outline: 5px auto -webkit-focus-ring-color",ut=typeof HTMLElement>"u"?class{}:HTMLElement;function b(e,t,n){return n===void 0?e.getAttribute(t):(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var dt=(e,t,n)=>{for(const a of n[0].split(","))n[0]=a,Element.prototype[`${e}EventListener`].apply(t,n)},R=(e,...t)=>dt("add",e,t),se=(e,...t)=>dt("remove",e,t),vn=(e,t)=>e.shadowRoot||e.attachShadow({mode:"open"}).append(Se("slot"),Se("style",t)),J=new WeakMap,be=(e,t)=>{if(t===void 0)return J.get(e);try{J.get(e).disconnect(),J.delete(e)}catch{}if(t){const n=new MutationObserver(a=>e.handleEvent({type:"mutation",detail:a}));n.observe(e,t),J.set(e,n)}},ct=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},hn=0,ye=e=>e?(e.id||(e.id=`:${e.nodeName.toLowerCase()}${(++hn).toString(32)}`),e.id):"",Se=(e,t,n)=>{const a=document.createElement(e);return t&&(a.textContent=t),a},pt={define:(e,t)=>!q||window.customElements.get(e)||window.customElements.define(e,t)},$,bn=0,mt=e=>{$||($=Se("div"),$.style.cssText="position:fixed;overflow:hidden;width:1px;white-space:nowrap",b($,"aria-live","assertive")),$.isConnected||document.body.append($),e&&($.textContent=`${e}${bn++%2?" ":""}`)},yn=(e,t,n="")=>{var a,o;const s={bubbles:!0,composed:!0,data:t,inputType:n},i=HTMLInputElement.prototype;e.dispatchEvent(new InputEvent("beforeinput",s)),(o=(a=Object.getOwnPropertyDescriptor(i,"value"))==null?void 0:a.set)==null||o.call(e,t),e.dispatchEvent(new InputEvent("input",s)),e.dispatchEvent(new Event("change",{bubbles:!0}))},fe=!1,Le=e=>((e==null?void 0:e.type)==="mouseup"&&(fe=!1),(e==null?void 0:e.type)==="mousedown"&&(fe=!0,R(document,"mouseup",Le,{once:!0})),fe),ve="disabled",M="selected",Sn=class extends ut{static get observedAttributes(){return[ve,M]}connectedCallback(){Ce||(this.tabIndex=-1),this.hasAttribute("role")||b(this,"role","option"),this.attributeChangedCallback()}attributeChangedCallback(){b(this,"aria-disabled",`${this.disabled}`),b(this,"aria-selected",`${this.selected}`)}get defaultSelected(){return this[M]}set defaultSelected(e){this[M]=e}get disabled(){return b(this,ve)!==null}set disabled(e){b(this,ve,e?"":null)}get form(){return this.closest("form")}get index(){var e;return[...((e=this.parentElement)==null?void 0:e.options)||[this]].indexOf(this)}get label(){var e;return(e=b(this,"label"))!=null?e:this.text}set label(e){b(this,"label",e)}get selected(){return b(this,M)!==null}set selected(e){b(this,M,e?"":null)}get text(){var e;return((e=this.textContent)==null?void 0:e.trim())||""}set text(e){this.textContent=e}get value(){var e;return(e=b(this,"value"))!=null?e:this.text}set value(e){b(this,"value",e)}};pt.define("u-option",Sn);var _n=`${gn}
::slotted(u-option) { display: block; cursor: pointer }
::slotted(u-option:focus) { ${fn} }
::slotted(u-option[aria-hidden="true"]),
::slotted(u-option[disabled]),
::slotted(u-option[hidden]) { display: none !important }`,Pe,Re=0,En=Ce||de,gt="click,focusout,input,keydown,mousedown,mouseup",ft="focus,focusin,blur,focusout",Q={singular:"%d hit",plural:"%d hits"},wn=class extends ut{constructor(){super(),this._texts=pn({},Q),this._value="",vn(this,_n)}static get observedAttributes(){return["id",...Object.keys(Q).map(e=>`data-sr-${e}`)]}connectedCallback(){this.hidden=!0,this._root=ct(this),b(this,"role","listbox"),b(this,"tabindex","-1"),R(this._root,"focusin",this),R(this._root,"focus",this,!0),be(this,{attributeFilter:["disabled","hidden","label","value"],attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(()=>this.attributeChangedCallback())}disconnectedCallback(){se(this._root||this,"focus",this,!0),se(this._root||this,"focusin",this),be(this,!1),Ae(this),this._root=void 0}attributeChangedCallback(e,t,n){const a=e==null?void 0:e.split("data-sr-")[1],o=`input[list="${this.id}"]`;if(Q[a])this._texts[a]=n||Q[a];else if(this._root){this._input&&_e(this,this._input);for(const s of this._root.querySelectorAll(o))_e(this,s)}}handleEvent(e){const{target:t,type:n}=e;e.defaultPrevented||(n==="click"&&Cn(this,e),(n==="focus"||n==="focusin")&&xn(this,e),(n==="blur"||n==="focusout")&&In(this,e),n==="keydown"&&Ln(this,e),n==="mousedown"&&this.contains(t)&&Le(e),(n==="mutation"||n==="input")&&(clearTimeout(Re),Re=setTimeout(bt,0,this,e)))}get options(){return this.getElementsByTagName("u-option")}},vt=e=>(e==null?void 0:e.disabled)||(e==null?void 0:e.readOnly)||!1,H=(e,t)=>{var n,a,o;if(e.hidden!==t)return;e.hidden=vt(e==null?void 0:e._input)||!t,(n=be(e))==null||n.takeRecords();const s=e.isConnected&&e.popover&&((a=e._input)==null?void 0:a.isConnected)&&((o=e._input)==null?void 0:o.popoverTargetElement)===e;e._input&&_e(e,e._input,t),s&&b(e,"popover","manual"),s&&e.togglePopover(t),t&&bt(e)},Ae=e=>{e._input&&(se(e._input||e,ft,e),se(e._root||e,gt,e),H(e,!1),e._input=void 0)},_e=(e,t,n=!1)=>{e.popover&&b(t,"popovertarget",ye(e)),R(t,ft,e,!0),b(t,"aria-autocomplete","list"),b(t,"aria-controls",ye(e)),b(t,"aria-expanded",`${!En||n}`),b(t,"autocomplete","off"),b(t,"role",vt(t)?null:"combobox")},xn=(e,t)=>{var n;const a=t.target instanceof HTMLInputElement;a&&t.isTrusted&&t.stopImmediatePropagation(),e._input!==t.target&&a&&t.target.list===e&&(e._input&&Ae(e),e._input=t.target,e._input.dispatchEvent(new FocusEvent("focus")),e._input.dispatchEvent(new FocusEvent("focusin",{bubbles:!0})),b(e,mn,ye((n=e._input.labels)==null?void 0:n[0])),R(e._root||e,gt,e),H(e,b(e._input,"inputmode")!=="none"),mt())},In=(e,t)=>{!de&&!Le()&&e._input&&setTimeout(ht,0,e),t.target===e._input&&t.isTrusted&&t.stopImmediatePropagation()},ht=e=>{var t;const n=((t=e._root)==null?void 0:t.activeElement)||null,a=e._input;a&&a!==n&&!e.contains(n)&&(a.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n})),Ae(e))},Cn=(e,{target:t})=>{var n;if(!e._input||e._input===t)return H(e,!0);for(const a of e.options)if(a.contains(t))return b(e,"aria-multiselectable")!=="true"&&((n=e._input)==null||n.focus(),H(e,!1)),yn(e._input,a.value);de&&ht(e)},Ln=(e,t)=>{var n;const{key:a,target:o,altKey:s,ctrlKey:i,shiftKey:g,metaKey:u}=t,d=a==="Escape"||a==="Esc";if(s||i||u||g||a==="Tab")return;d&&!e.hidden&&(t==null||t.preventDefault()),H(e,!d);const p=[...e.options].filter(h=>b(h,"aria-hidden")!=="true"&&h.offsetHeight),r=p.indexOf(o);let c=-1;if(a==="ArrowDown"&&(c=(r+1)%p.length),a==="ArrowUp"&&(c=(~r?r:p.length)-1),~r&&((a==="Home"||a==="PageUp")&&(c=0),(a==="End"||a==="PageDown")&&(c=p.length-1),a==="Enter"))return p[r].click(),t.preventDefault();if(p[c])for(const h of p)h.tabIndex=-1;p[c]&&t.preventDefault(),(n=p[c]||e._input)==null||n.focus(),!p[c]&&a==="ArrowUp"&&setTimeout(()=>{var h;return(h=e._input)==null?void 0:h.setSelectionRange(999,999)})},bt=(e,t)=>{const{_texts:n,_root:a,_input:o,options:s}=e,i=(o==null?void 0:o.value.toLowerCase().trim())||"",g=!e.hasAttribute("data-nofilter"),u=[],d=[];for(const r of s)(r.disabled||r.hidden||g&&!r.label.toLowerCase().includes(i)?u:d).push(r);for(const r of u)b(r,"aria-hidden","true");for(const r of d)b(r,"aria-hidden","false");const p=d.length;clearTimeout(Pe),(t==null?void 0:t.type)==="input"&&i!==e._value&&(Pe=setTimeout(()=>{const r=`${!p&&e.innerText.trim()||`${n[p===1?"singular":"plural"]}`.replace("%d",`${p}`)}`;!e.hidden&&(a==null?void 0:a.activeElement)===o&&mt(r),e._value=i},1e3)),Ce&&d.map((r,c)=>b(r,"title",`${c+1}/${p}`))};q&&Object.defineProperty(HTMLInputElement.prototype,"list",{configurable:!0,enumerable:!0,get(){return ct(this).getElementById(b(this,"list")||"")}});pt.define("u-datalist",wn);const An=f.forwardRef(function({singular:t="%d forslag",plural:n="%d forslag",className:a,id:o,...s},i){const{handleFilter:g,uComboboxRef:u}=f.useContext(ue);return f.useEffect(g),f.useEffect(()=>{var r,c;const d=(r=u==null?void 0:u.current)==null?void 0:r.control,p=(c=u==null?void 0:u.current)==null?void 0:c.list;if(p&&d)return It(d,p,()=>{Ct(d,p,{placement:"bottom",strategy:"fixed",middleware:[On]}).then(({x:h,y:S})=>{p.style.translate=`${Math.round(h)}px calc(${Math.round(S)}px + var(--dsc-suggestion-list-gap))`})})},[]),l.jsx("u-datalist",{"data-nofilter":!0,"data-sr-singular":t,"data-sr-plural":n,class:a,ref:i,popover:"manual",...s})}),On={name:"TriggerWidth",fn(e){const{elements:t,rects:n}=e;return t.floating.style.width=`${n.reference.width}px`,e}},kn=f.forwardRef(function({className:t,...n},a){return l.jsx("u-option",{class:t,ref:a,...n})}),j=Object.assign(on,{List:An,Input:ln,Empty:rn,Option:kn,Clear:sn});j.displayName="EXPERIMENTAL_Suggestion";j.List.displayName="EXPERIMENTAL_Suggestion.List";j.Input.displayName="EXPERIMENTAL_Suggestion.Input";j.Empty.displayName="EXPERIMENTAL_Suggestion.Empty";j.Option.displayName="EXPERIMENTAL_Suggestion.Option";j.Clear.displayName="EXPERIMENTAL_Suggestion.Clear";const v=j;v.displayName="Suggestion";try{v.displayName="Suggestion",v.__docgenInfo={description:"",displayName:"Suggestion",props:{filter:{defaultValue:{value:"true"},description:`Filter options; boolean or a custom callback.

See {@link Filter} for the callback signature.`,name:"filter",required:!1,type:{name:"boolean | Filter"}},creatable:{defaultValue:{value:"false"},description:"Allows the user to create new items",name:"creatable",required:!1,type:{name:"boolean"}},onBeforeMatch:{defaultValue:null,description:"Callback when matching input value against options",name:"onBeforeMatch",required:!1,type:{name:"(event: EventBeforeMatch) => void"}},name:{defaultValue:{value:"undefined"},description:"The name of the associated form control",name:"name",required:!1,type:{name:"string"}},renderSelected:{defaultValue:{value:"({ label }) => label"},description:"Change how the selected options are rendered inside the `Chip`.",name:"renderSelected",required:!1,type:{name:"(args: { label: string; value: string; }) => ReactNode"}},multiple:{defaultValue:{value:"false"},description:"Allows the user to select multiple items",name:"multiple",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"The selected item of the Suggestion.\n\nIf `label` and `value` are the same, each item can be a `string`. Otherwise, each item must be a `SuggestionItem`.\n\nUsing this makes the component controlled and it must be used in combination with `onSelectedChange`.",name:"selected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},defaultSelected:{defaultValue:null,description:"Default selected item when uncontrolled",name:"defaultSelected",required:!1,type:{name:"string | SuggestionItem | (string | SuggestionItem)[]"}},onSelectedChange:{defaultValue:null,description:"Callback when selected items changes",name:"onSelectedChange",required:!1,type:{name:"((value: SuggestionItem) => void) | ((value: SuggestionItem[]) => void)"}}}}}catch{}const L=f.forwardRef((e,t)=>l.jsx(Lt,{ref:t,...e}));L.displayName="Label";try{L.displayName="Label",L.__docgenInfo={description:"",displayName:"Label",props:{weight:{defaultValue:{value:"'medium'"},description:"Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const $n=(e,t)=>{const n=f.useRef(null);return f.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]),f.useCallback((...o)=>{n.current&&clearTimeout(n.current),n.current=window.setTimeout(()=>{e(...o)},t)},[e,t])},Wn={title:"Components/Suggestion",component:v,tags:["autodocs"],parameters:{docs:{description:{component:'A searchable "select" component, with support for single or multiple selections. Use when a standard <Select> is not sufficient.'}}},argTypes:{multiple:{control:"boolean",description:"Allows the user to select multiple items",defaultValue:!1},creatable:{control:"boolean",description:"Allows the user to create new items",defaultValue:!1},filter:{control:"boolean",description:"Filter options based on input (set to false to show all). A custom filter function can also be provided.",defaultValue:!0},name:{control:"text",description:"The name of the associated form control"},selected:{table:{disable:!0}},defaultSelected:{table:{disable:!0}},onSelectedChange:{table:{disable:!0}},onBeforeMatch:{table:{disable:!0}},renderSelected:{table:{disable:!0}},children:{table:{disable:!0}}}},U=[{label:"Sogndal",value:"sogndal"},{label:"Oslo",value:"oslo"},{label:"Bergen",value:"bergen"},{label:"Trondheim",value:"trondheim"},{label:"Stavanger",value:"stavanger"}],Z={render:e=>{const[t,n]=f.useState(void 0);return l.jsxs(B,{children:[l.jsx(L,{children:"Velg en destinasjon"}),l.jsxs(v,{...e,selected:t,onSelectedChange:(a=>{Array.isArray(a)||n(a)}),name:"single-destination",children:[l.jsx(v.Input,{}),l.jsx(v.Clear,{}),l.jsxs(v.List,{children:[l.jsx(v.Empty,{children:"Ingen treff"}),U.map(a=>l.jsx(v.Option,{label:a.label,value:a.value,children:a.label},a.value))]})]})]})},args:{multiple:!1,creatable:!1}},ee={render:e=>{const[t,n]=f.useState([U[1]]);return l.jsxs(B,{children:[l.jsx(L,{children:"Velg destinasjoner"}),l.jsxs(v,{...e,selected:t,onSelectedChange:(a=>{Array.isArray(a)&&n(a)}),name:"multi-destination",children:[l.jsx(v.Input,{}),l.jsx(v.Clear,{}),l.jsxs(v.List,{children:[l.jsx(v.Empty,{children:"Ingen treff"}),U.map(a=>l.jsx(v.Option,{label:a.label,value:a.value,children:a.label},a.value))]})]})]})},args:{multiple:!0},name:"Multi-Select"},te={render:e=>{const[t,n]=f.useState(U),[a,o]=f.useState([]),s=i=>{const g=i.find(u=>u.__new__);if(g){const u={label:g.label,value:g.value};n(d=>[...d,u])}o(i)};return l.jsxs(B,{children:[l.jsx(L,{children:"Velg eller lag destinasjoner"}),l.jsxs(v,{...e,selected:a,onSelectedChange:(i=>{Array.isArray(i)&&s(i)}),name:"creatable-destination",children:[l.jsx(v.Input,{}),l.jsx(v.Clear,{}),l.jsxs(v.List,{children:[l.jsx(v.Empty,{children:"Ingen treff (trykk Enter for å lage ny)"}),t.map(i=>l.jsx(v.Option,{label:i.label,value:i.value,children:i.label},i.value))]})]})]})},args:{multiple:!0,creatable:!0}},ne={render:e=>{const[t,n]=f.useState(""),[a,o]=f.useState(null),[s,i]=f.useState(),u=$n(async r=>{const c=`https://restcountries.com/v2/name/${r}?fields=name`;try{const h=await fetch(c);if(!h.ok){o([]);return}const S=await h.json();o(Array.isArray(S)?S.map(({name:w})=>w):[])}catch(h){console.error("Failed to fetch countries:",h),o([])}},500),d=r=>{const c=r.target.value;n(c),o(null);const h=c.trim();h&&u(encodeURIComponent(h))},p=r=>{if(!Array.isArray(r)&&r){const c=r;n(c.label),i(c),o(null)}};return l.jsxs(B,{lang:"en",children:[l.jsx(L,{children:"Search for countries (in english)"}),l.jsxs(v,{...e,selected:s,onSelectedChange:p,children:[l.jsx(v.Input,{onInput:d,value:t}),l.jsx(v.Clear,{}),l.jsxs(v.List,{singular:"%d country",plural:"%d countries",children:[t?l.jsx(v.Empty,{children:a?"Ingen treff":l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx(At,{"aria-hidden":"true","data-size":"sm"})," Laster..."]})}):null,a==null?void 0:a.map(r=>l.jsx(v.Option,{label:r,value:r,children:r},r))]})]})]})},args:{filter:!1},name:"Async Loading"},ae={render:e=>{const[t,n]=f.useState(void 0);return l.jsxs(B,{children:[l.jsx(L,{children:"Velg en destinasjon (viser alltid alle)"}),l.jsxs(v,{...e,selected:t,onSelectedChange:(a=>{Array.isArray(a)||n(a)}),name:"no-filter-destination",children:[l.jsx(v.Input,{}),l.jsx(v.Clear,{}),l.jsxs(v.List,{children:[l.jsx(v.Empty,{children:"Listen er tom"}),U.map(a=>l.jsx(v.Option,{label:a.label,value:a.value,children:a.label},a.value))]})]})]})},args:{filter:!1},name:"No Filter"};var He,Ue,Be;Z.parameters={...Z.parameters,docs:{...(He=Z.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Be=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Be.source}}};var Xe,qe,Ke;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var We,ze,Ye;te.parameters={...te.parameters,docs:{...(We=te.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=te.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ge,Je,Qe;ne.parameters={...ne.parameters,docs:{...(Ge=ne.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=ne.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;ae.parameters={...ae.parameters,docs:{...(Ze=ae.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ae.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const zn=["Default","MultiSelect","Creatable","AsyncLoading","NoFilter"];export{ne as AsyncLoading,te as Creatable,Z as Default,ee as MultiSelect,ae as NoFilter,zn as __namedExportsOrder,Wn as default};
