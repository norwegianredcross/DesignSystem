import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as Z}from"./floating-ui.react-CvBcK_lS.js";import{c as ee}from"./lite-DaUVFjkg.js";import{r as c}from"./index-BKyFwriW.js";import{C as te}from"./index-B9ix5UwV.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C4xiViop.js";var z=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",w;z&&/^Mac/i.test(((w=navigator.userAgentData)==null?void 0:w.platform)||navigator.platform);var ne=":host(:not([hidden])) { display: block }",Y=typeof HTMLElement>"u"?class{}:HTMLElement;function d(e,t,s){var r;return s===void 0?(r=e.getAttribute(t))!=null?r:null:(s===null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s),null)}var K=(e,t,s)=>{for(const r of s[0].split(","))s[0]=r,Element.prototype[`${e}EventListener`].apply(t,s)},j=(e,...t)=>K("add",e,t),k=(e,...t)=>K("remove",e,t),se=e=>{const t="key"in e&&(e.key===" "||e.key==="Enter");return t&&e.preventDefault(),t&&e.target instanceof HTMLElement&&e.target.click(),t},ae=e=>{var t;const s=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return s instanceof Document||s instanceof ShadowRoot?s:document},C=(e,t,s)=>{const r=document.createElement(e);if(t&&(r.textContent=t),s)for(const[l,i]of Object.entries(s))d(r,l,i);return r},G={define:(e,t)=>!z||window.customElements.get(e)||window.customElements.define(e,t)},re=class extends Y{constructor(){super(),this._content=null,this.attachShadow({mode:"open"}).append(C("slot",null,{name:"summary"}),C("slot",null,{part:"details-content"}),C("style",`${ne}
        ::slotted(u-summary) { cursor: pointer; display: block }
				::slotted(u-summary)::before { content: ''; display: inline-block; vertical-align: middle; margin-inline: .05em .3125em; border-block: .3125em solid transparent; border-inline-start: .5em solid }
				::slotted(u-summary[aria-expanded="true"])::before { rotate: 90deg }
				:host > [part="details-content"]:not([hidden=""]) { display: block }`))}static get observedAttributes(){return["open"]}connectedCallback(){var e;this._content=(e=this.shadowRoot)==null?void 0:e.children[1],j(this._content,"beforematch",this),j(this,"click,keydown",this),this.attributeChangedCallback()}disconnectedCallback(){this._content&&k(this._content,"beforematch",this),k(this,"click,keydown",this),this._content=null}attributeChangedCallback(e,t,s){const r="onbeforematch"in this?"until-found":!0,l=this.open;for(const i of this.children)i.nodeName==="U-SUMMARY"&&d(i,"aria-expanded",`${l}`);if(this._content&&(d(this._content,"aria-hidden",`${!l}`),this._content.hidden=l?!1:r),l&&this.name){const i=ae(this).querySelectorAll(`${this.nodeName}[name="${this.name}"]`);for(const m of i)m!==this&&(m.open=!1)}e==="open"&&t===null!=(s===null)&&this.dispatchEvent(new Event("toggle"))}handleEvent(e){const t=this.querySelector(":scope > u-summary"),s=t==null?void 0:t.contains(e.target);e.defaultPrevented||(e.type==="beforematch"&&(this.open=!0),s&&e.type==="keydown"&&se(e),s&&e.type==="click"&&(this.open=!this.open))}get open(){return this.hasAttribute("open")}set open(e){d(this,"open",e?"":null)}get name(){return d(this,"name")||""}set name(e){d(this,"name",e)}},oe=class extends Y{connectedCallback(){d(this,"role","button"),this.slot="summary",this.tabIndex=0}};G.define("u-details",re);G.define("u-summary",oe);const ie=c.forwardRef(function({className:t,open:s,defaultOpen:r=!1,variant:l="default",onToggle:i,...m},J){const S=c.useRef(null),Q=c.useRef(r),V=Z([S,J]),u=c.useRef(i),h=c.useRef(s);return u.current=i,h.current=s,c.useEffect(()=>{const o=S.current,b=X=>{var v;!o||(o==null?void 0:o.open)===h.current||((v=u.current)==null||v.call(u,X),h.current!==void 0&&(o.open=h.current))};return o==null||o.addEventListener("toggle",b,!0),()=>o==null?void 0:o.removeEventListener("toggle",b,!0)},[]),n.jsx("u-details",{class:ee("ds-details",t),open:(s??Q.current)||void 0,"data-variant":l,ref:V,...m})}),le=c.forwardRef(function(t,s){return n.jsx("div",{ref:s,...t})}),ce=c.forwardRef(function({className:t,...s},r){return n.jsx("u-summary",{ref:r,class:t,...s})}),a=Object.assign(ie,{Summary:ce,Content:le});a.Summary.displayName="Details.Summary";a.Content.displayName="Details.Content";const xe={title:"Components/Details",component:a,tags:["autodocs"],args:{summary:"Click to expand",children:"This is the detailed content."},argTypes:{summary:{control:"text",description:"The summary text that is always visible."},children:{control:"text",description:"The content that is revealed when the details are expanded."},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components."},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components."},variant:{control:"select",options:["default","tinted"],description:"Change the background color of the details."},open:{control:"boolean",description:"Controls open-state. Removes automatic control of open-state."},defaultOpen:{control:"boolean",description:"Defaults the details to open if not controlled."},onToggle:{action:"toggled",description:"Callback function when Details toggles due to click on summary or find-in-page search."}}},p={args:{summary:"Click to expand",children:n.jsxs(n.Fragment,{children:[n.jsx(a.Summary,{children:"Details heading text"}),n.jsx(a.Content,{children:"Details content"})]})}},f={args:{summary:"Details heading text",children:n.jsx(te,{children:n.jsxs(a,{children:[n.jsx(a.Summary,{children:"Details heading text"}),n.jsx(a.Content,{children:"Details content"})]})})}},y={args:{summary:"Details with colors","data-color":"brand1",children:n.jsxs(n.Fragment,{children:[n.jsx(a.Summary,{children:"Details heading text"}),n.jsx(a.Content,{children:"Details content"})]})}},D={args:{summary:"Controlled Details",open:!0,children:n.jsxs(n.Fragment,{children:[n.jsx(a.Summary,{children:"Details heading text"}),n.jsx(a.Content,{children:"Details content"})]})}},g={args:{summary:"Nested Details",children:n.jsxs(n.Fragment,{children:[n.jsx(a.Summary,{children:"Parent Details"}),n.jsx(a.Content,{children:n.jsxs(a,{summary:"Child Details",children:[n.jsx(a.Summary,{children:"Child Details"}),n.jsx(a.Content,{children:"Child Details content"})]})})]})}},x={args:{summary:"This is a very long summary that spans multiple lines to demonstrate how the component handles long text in the summary.",children:n.jsxs(n.Fragment,{children:[n.jsx(a.Summary,{children:"Details heading text"}),n.jsx(a.Content,{children:"This is a very long content that spans multiple lines to demonstrate how the component handles long text in the content."})]})}};var E,R,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    summary: 'Click to expand',
    children: <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>Details content</Details.Content>
      </>
  }
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var T,L,A;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    summary: 'Details heading text',
    children: <Card>
        <Details>
          <Details.Summary>Details heading text</Details.Summary>
          <Details.Content>Details content</Details.Content>
        </Details>
      </Card>
  }
}`,...(A=(L=f.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var M,N,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    summary: 'Details with colors',
    'data-color': 'brand1',
    children: <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>Details content</Details.Content>
      </>
  }
}`,...(F=(N=y.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var O,W,$;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    summary: 'Controlled Details',
    open: true,
    children: <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>Details content</Details.Content>
      </>
  }
}`,...($=(W=D.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var H,U,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    summary: 'Nested Details',
    children: <>
        <Details.Summary>Parent Details</Details.Summary>
        <Details.Content>
          <Details summary="Child Details">
            <Details.Summary>Child Details</Details.Summary>
            <Details.Content>Child Details content</Details.Content>
          </Details>
        </Details.Content>
      </>
  }
}`,...(P=(U=g.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var B,I,q;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    summary: 'This is a very long summary that spans multiple lines to demonstrate how the component handles long text in the summary.',
    children: <>
        <Details.Summary>Details heading text</Details.Summary>
        <Details.Content>
          This is a very long content that spans multiple lines to demonstrate how the component handles long text in the content.
        </Details.Content>
      </>
  }
}`,...(q=(I=x.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const Ce=["Default","WithFrame","WithColors","Controlled","NestedDetails","WithLongText"];export{D as Controlled,p as Default,g as NestedDetails,y as WithColors,f as WithFrame,x as WithLongText,Ce as __namedExportsOrder,xe as default};
