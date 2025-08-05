import{r as d,j as a}from"./iframe-BgQDqsRD.js";import{u as U}from"./floating-ui.react-CwLPqv5Y.js";import{c as I}from"./lite-DaUVFjkg.js";import"./preload-helper-C1FmrZbK.js";import"./index-BpTns393.js";import"./index-BW23gSyK.js";var O=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",C;O&&/^Mac/i.test(((C=navigator.userAgentData)==null?void 0:C.platform)||navigator.platform);var F=":host(:not([hidden])) { display: block }",V=typeof HTMLElement>"u"?class{}:HTMLElement;function c(e,t,n){var r;return n===void 0?(r=e.getAttribute(t))!=null?r:null:(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var z=(e,t,n)=>{for(const r of n[0].split(","))n[0]=r,Element.prototype[`${e}EventListener`].apply(t,n)},S=(e,...t)=>z("add",e,t),j=(e,...t)=>z("remove",e,t),P=e=>{const t="key"in e&&(e.key===" "||e.key==="Enter");return t&&e.preventDefault(),t&&e.target instanceof HTMLElement&&e.target.click(),t},Y=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},v=(e,t,n)=>{const r=document.createElement(e);if(t&&(r.textContent=t),n)for(const[l,i]of Object.entries(n))c(r,l,i);return r},T={define:(e,t)=>!O||window.customElements.get(e)||window.customElements.define(e,t)},K=class extends V{constructor(){super(),this._content=null,this.attachShadow({mode:"open"}).append(v("slot",null,{name:"summary"}),v("slot",null,{part:"details-content"}),v("style",`${F}
        ::slotted(u-summary) { cursor: pointer; display: block }
				::slotted(u-summary)::before { content: ''; display: inline-block; vertical-align: middle; margin-inline: .05em .3125em; border-block: .3125em solid transparent; border-inline-start: .5em solid }
				::slotted(u-summary[aria-expanded="true"])::before { rotate: 90deg }
				:host > [part="details-content"]:not([hidden=""]) { display: block }`))}static get observedAttributes(){return["open"]}connectedCallback(){var e;this._content=(e=this.shadowRoot)==null?void 0:e.children[1],S(this._content,"beforematch",this),S(this,"click,keydown",this),this.attributeChangedCallback()}disconnectedCallback(){this._content&&j(this._content,"beforematch",this),j(this,"click,keydown",this),this._content=null}attributeChangedCallback(e,t,n){const r="onbeforematch"in this?"until-found":!0,l=this.open;for(const i of this.children)i.nodeName==="U-SUMMARY"&&c(i,"aria-expanded",`${l}`);if(this._content&&(c(this._content,"aria-hidden",`${!l}`),this._content.hidden=l?!1:r),l&&this.name){const i=Y(this).querySelectorAll(`${this.nodeName}[name="${this.name}"]`);for(const u of i)u!==this&&(u.open=!1)}e==="open"&&t===null!=(n===null)&&this.dispatchEvent(new Event("toggle"))}handleEvent(e){const t=this.querySelector(":scope > u-summary"),n=t==null?void 0:t.contains(e.target);e.defaultPrevented||(e.type==="beforematch"&&(this.open=!0),n&&e.type==="keydown"&&P(e),n&&e.type==="click"&&(this.open=!this.open))}get open(){return this.hasAttribute("open")}set open(e){c(this,"open",e?"":null)}get name(){return c(this,"name")||""}set name(e){c(this,"name",e)}},W=class extends V{connectedCallback(){c(this,"role","button"),this.slot="summary",this.tabIndex=0}};T.define("u-details",K);T.define("u-summary",W);const G=d.forwardRef(function({className:t,open:n,defaultOpen:r=!1,variant:l="default",onToggle:i,...u},q){const b=d.useRef(null),N=d.useRef(r),$=U([b,q]),m=d.useRef(i),f=d.useRef(n);return m.current=i,f.current=n,d.useEffect(()=>{const s=b.current,D=B=>{var k;!s||(s==null?void 0:s.open)===f.current||((k=m.current)==null||k.call(m,B),f.current!==void 0&&(s.open=f.current))};return s==null||s.addEventListener("toggle",D,!0),()=>s==null?void 0:s.removeEventListener("toggle",D,!0)},[]),a.jsx("u-details",{class:I("ds-details",t),open:(n??N.current)||void 0,"data-variant":l,ref:$,...u})}),J=d.forwardRef(function(t,n){return a.jsx("div",{ref:n,...t})}),Q=d.forwardRef(function({className:t,...n},r){return a.jsx("u-summary",{ref:r,class:t,...n})}),y=Object.assign(G,{Summary:Q,Content:J});y.Summary.displayName="Details.Summary";y.Content.displayName="Details.Content";const o=y;try{o.displayName="Details",o.__docgenInfo={description:"",displayName:"Details",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the details.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"tinted"'},{value:'"default"'}]}},open:{defaultValue:{value:"undefined"},description:`Controls open-state.

Using this removes automatic control of open-state`,name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Defaults the details to open if not controlled",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Callback function when Details toggles due to click on summary or find in page-search",name:"onToggle",required:!1,type:{name:"(((event: Event) => void) & ((event: Event) => void)) | (((event: Event) => void) & ((event: Event) => void))"}},children:{defaultValue:null,description:"Content should be one `<Details.Summary>` and `<Details.Content>`",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ae={title:"Components/Details",component:o,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},open:{control:"boolean",description:"Controls the open/closed state.",defaultValue:!1},children:{control:!1,description:"Must contain Details.Summary and Details.Content"}}},p={render:e=>a.jsxs(o,{...e,children:[a.jsx(o.Summary,{children:"Hva er Altinn?"}),a.jsx(o.Content,{children:"Altinn er en internettportal for digital dialog mellom næringslivet, privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er utviklet og driftet av Altinn-samarbeidet, som består av flere offentlige etater."})]}),args:{},name:"Default (Closed)"},g={render:e=>a.jsxs(o,{...e,children:[a.jsx(o.Summary,{children:"Hva er formålet med Altinn?"}),a.jsx(o.Content,{children:"Formålet med Altinn er å effektivisere og forenkle rapportering fra næringslivet til det offentlige, samt å gi enklere tilgang til offentlig informasjon og tjenester for både bedrifter og privatpersoner."})]}),args:{open:!0},name:"Default (Open)"},h={render:e=>a.jsxs(o,{...e,children:[a.jsx(o.Summary,{children:"Hvilke tjenester tilbyr Altinn?"}),a.jsx(o.Content,{children:"Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer (som MVA-melding, A-melding), tilgang til meldingsboks fra det offentlige, registertjenester, samtykketjenester og veiledning."})]}),args:{"data-size":"lg","data-color":"brand1",open:!1},name:"Large Size, Brand1 Color"};var A,E,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var x,w,R;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(w=g.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,M,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(M=h.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const oe=["DefaultClosed","DefaultOpen","LargeBrand1"];export{p as DefaultClosed,g as DefaultOpen,h as LargeBrand1,oe as __namedExportsOrder,ae as default};
