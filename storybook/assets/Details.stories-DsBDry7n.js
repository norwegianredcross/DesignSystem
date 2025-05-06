import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{u as I}from"./floating-ui.react-VFS6-CKd.js";import{c as q}from"./lite-DaUVFjkg.js";import{r as d}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";var O=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",C;O&&/^Mac/i.test(((C=navigator.userAgentData)==null?void 0:C.platform)||navigator.platform);var F=":host(:not([hidden])) { display: block }",T=typeof HTMLElement>"u"?class{}:HTMLElement;function c(e,t,n){var r;return n===void 0?(r=e.getAttribute(t))!=null?r:null:(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var $=(e,t,n)=>{for(const r of n[0].split(","))n[0]=r,Element.prototype[`${e}EventListener`].apply(t,n)},j=(e,...t)=>$("add",e,t),S=(e,...t)=>$("remove",e,t),P=e=>{const t="key"in e&&(e.key===" "||e.key==="Enter");return t&&e.preventDefault(),t&&e.target instanceof HTMLElement&&e.target.click(),t},Y=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},y=(e,t,n)=>{const r=document.createElement(e);if(t&&(r.textContent=t),n)for(const[l,i]of Object.entries(n))c(r,l,i);return r},B={define:(e,t)=>!O||window.customElements.get(e)||window.customElements.define(e,t)},K=class extends T{constructor(){super(),this._content=null,this.attachShadow({mode:"open"}).append(y("slot",null,{name:"summary"}),y("slot",null,{part:"details-content"}),y("style",`${F}
        ::slotted(u-summary) { cursor: pointer; display: block }
				::slotted(u-summary)::before { content: ''; display: inline-block; vertical-align: middle; margin-inline: .05em .3125em; border-block: .3125em solid transparent; border-inline-start: .5em solid }
				::slotted(u-summary[aria-expanded="true"])::before { rotate: 90deg }
				:host > [part="details-content"]:not([hidden=""]) { display: block }`))}static get observedAttributes(){return["open"]}connectedCallback(){var e;this._content=(e=this.shadowRoot)==null?void 0:e.children[1],j(this._content,"beforematch",this),j(this,"click,keydown",this),this.attributeChangedCallback()}disconnectedCallback(){this._content&&S(this._content,"beforematch",this),S(this,"click,keydown",this),this._content=null}attributeChangedCallback(e,t,n){const r="onbeforematch"in this?"until-found":!0,l=this.open;for(const i of this.children)i.nodeName==="U-SUMMARY"&&c(i,"aria-expanded",`${l}`);if(this._content&&(c(this._content,"aria-hidden",`${!l}`),this._content.hidden=l?!1:r),l&&this.name){const i=Y(this).querySelectorAll(`${this.nodeName}[name="${this.name}"]`);for(const m of i)m!==this&&(m.open=!1)}e==="open"&&t===null!=(n===null)&&this.dispatchEvent(new Event("toggle"))}handleEvent(e){const t=this.querySelector(":scope > u-summary"),n=t==null?void 0:t.contains(e.target);e.defaultPrevented||(e.type==="beforematch"&&(this.open=!0),n&&e.type==="keydown"&&P(e),n&&e.type==="click"&&(this.open=!this.open))}get open(){return this.hasAttribute("open")}set open(e){c(this,"open",e?"":null)}get name(){return c(this,"name")||""}set name(e){c(this,"name",e)}},W=class extends T{connectedCallback(){c(this,"role","button"),this.slot="summary",this.tabIndex=0}};B.define("u-details",K);B.define("u-summary",W);const G=d.forwardRef(function({className:t,open:n,defaultOpen:r=!1,variant:l="default",onToggle:i,...m},z){const b=d.useRef(null),N=d.useRef(r),U=I([b,z]),u=d.useRef(i),f=d.useRef(n);return u.current=i,f.current=n,d.useEffect(()=>{const s=b.current,D=V=>{var k;!s||(s==null?void 0:s.open)===f.current||((k=u.current)==null||k.call(u,V),f.current!==void 0&&(s.open=f.current))};return s==null||s.addEventListener("toggle",D,!0),()=>s==null?void 0:s.removeEventListener("toggle",D,!0)},[]),a.jsx("u-details",{class:q("ds-details",t),open:(n??N.current)||void 0,"data-variant":l,ref:U,...m})}),J=d.forwardRef(function(t,n){return a.jsx("div",{ref:n,...t})}),Q=d.forwardRef(function({className:t,...n},r){return a.jsx("u-summary",{ref:r,class:t,...n})}),v=Object.assign(G,{Summary:Q,Content:J});v.Summary.displayName="Details.Summary";v.Content.displayName="Details.Content";const o=v,ae={title:"Components/Details",component:o,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},open:{control:"boolean",description:"Controls the open/closed state.",defaultValue:!1},children:{control:!1,description:"Must contain Details.Summary and Details.Content"}}},g={render:e=>a.jsxs(o,{...e,children:[a.jsx(o.Summary,{children:"Hva er Altinn?"}),a.jsx(o.Content,{children:"Altinn er en internettportal for digital dialog mellom næringslivet, privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er utviklet og driftet av Altinn-samarbeidet, som består av flere offentlige etater."})]}),args:{},name:"Default (Closed)"},p={render:e=>a.jsxs(o,{...e,children:[a.jsx(o.Summary,{children:"Hva er formålet med Altinn?"}),a.jsx(o.Content,{children:"Formålet med Altinn er å effektivisere og forenkle rapportering fra næringslivet til det offentlige, samt å gi enklere tilgang til offentlig informasjon og tjenester for både bedrifter og privatpersoner."})]}),args:{open:!0},name:"Default (Open)"},h={render:e=>a.jsxs(o,{...e,children:[a.jsx(o.Summary,{children:"Hvilke tjenester tilbyr Altinn?"}),a.jsx(o.Content,{children:"Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer (som MVA-melding, A-melding), tilgang til meldingsboks fra det offentlige, registertjenester, samtykketjenester og veiledning."})]}),args:{"data-size":"lg","data-color":"brand1",open:!1},name:"Large Size, Brand1 Color"};var A,E,x;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Details {...args}>\r
      <Details.Summary>Hva er Altinn?</Details.Summary>\r
      <Details.Content>\r
        Altinn er en internettportal for digital dialog mellom næringslivet,\r
        privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er\r
        utviklet og driftet av Altinn-samarbeidet, som består av flere\r
        offentlige etater.\r
      </Details.Content>\r
    </Details>,
  args: {},
  name: 'Default (Closed)'
}`,...(x=(E=g.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var w,R,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Details {...args}>\r
      <Details.Summary>Hva er formålet med Altinn?</Details.Summary>\r
      <Details.Content>\r
        Formålet med Altinn er å effektivisere og forenkle rapportering fra\r
        næringslivet til det offentlige, samt å gi enklere tilgang til\r
        offentlig informasjon og tjenester for både bedrifter og privatpersoner.\r
      </Details.Content>\r
    </Details>,
  args: {
    open: true
  },
  name: 'Default (Open)'
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var L,M,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Details {...args}>\r
      <Details.Summary>Hvilke tjenester tilbyr Altinn?</Details.Summary>\r
      <Details.Content>\r
        Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer\r
        (som MVA-melding, A-melding), tilgang til meldingsboks fra det\r
        offentlige, registertjenester, samtykketjenester og veiledning.\r
      </Details.Content>\r
    </Details>,
  args: {
    'data-size': 'lg',
    'data-color': 'brand1',
    open: false
  },
  name: 'Large Size, Brand1 Color'
}`,...(H=(M=h.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const se=["DefaultClosed","DefaultOpen","LargeBrand1"];export{g as DefaultClosed,p as DefaultOpen,h as LargeBrand1,se as __namedExportsOrder,ae as default};
