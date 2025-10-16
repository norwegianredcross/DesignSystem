import{r as c,j as r}from"./iframe-CjNER_0n.js";import{c as $}from"./lite-DaUVFjkg.js";import{u as I}from"./use-merge-refs-Bz1jlVhA.js";import"./preload-helper-Dp1pzeXC.js";var O=typeof window<"u"&&typeof window.document<"u"&&typeof window.navigator<"u",C;O&&/^Mac/i.test(((C=navigator.userAgentData)==null?void 0:C.platform)||navigator.platform);var F=":host(:not([hidden])) { display: block }",V=typeof HTMLElement>"u"?class{}:HTMLElement;function d(e,t,n){return n===void 0?e.getAttribute(t):(n===null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n),null)}var z=(e,t,n)=>{for(const o of n[0].split(","))n[0]=o,Element.prototype[`${e}EventListener`].apply(t,n)},S=(e,...t)=>z("add",e,t),j=(e,...t)=>z("remove",e,t),P=e=>{const t="key"in e&&(e.key===" "||e.key==="Enter");return t&&e.preventDefault(),t&&e.target instanceof HTMLElement&&e.target.click(),t},Y=e=>{var t;const n=((t=e.getRootNode)==null?void 0:t.call(e))||e.ownerDocument;return n instanceof Document||n instanceof ShadowRoot?n:document},y=(e,t,n)=>{const o=document.createElement(e);if(t&&(o.textContent=t),n)for(const[i,l]of Object.entries(n))d(o,i,l);return o},T={define:(e,t)=>!O||window.customElements.get(e)||window.customElements.define(e,t)},K=`${F}
::slotted(u-summary) { cursor: pointer; display: block }
::slotted(u-summary)::before { content: ''; display: inline-block; vertical-align: middle; margin-inline: .05em .3125em; border-block: .3125em solid transparent; border-inline-start: .5em solid }
::slotted(u-summary[aria-expanded="true"])::before { rotate: 90deg }
:host > [part="details-content"]:not([hidden=""]) { display: block }`,W=class extends V{constructor(){super(),this._content=null,this.shadowRoot||this.attachShadow({mode:"open"}).append(y("slot",null,{name:"summary"}),y("slot",null,{part:"details-content"}),y("style",K))}static get observedAttributes(){return["open"]}connectedCallback(){var e;this._content=(e=this.shadowRoot)==null?void 0:e.children[1],d(this,"role","group"),S(this._content,"beforematch",this),S(this,"click,keydown",this),this.attributeChangedCallback()}disconnectedCallback(){this._content&&j(this._content,"beforematch",this),j(this,"click,keydown",this),this._content=null}attributeChangedCallback(e,t,n){const o="onbeforematch"in this?"until-found":!0,i=this.open;for(const l of this.children)l.nodeName==="U-SUMMARY"&&d(l,"aria-expanded",`${i}`);if(this._content&&(d(this._content,"aria-hidden",`${!i}`),d(this._content,"tabindex",i?null:"-1"),this._content.hidden=i?!1:o),i&&this.name){const l=Y(this).querySelectorAll(`${this.nodeName}[name="${this.name}"]`);for(const u of l)u!==this&&(u.open=!1)}e==="open"&&t===null!=(n===null)&&this.dispatchEvent(new Event("toggle"))}handleEvent(e){const t=this.querySelector(":scope > u-summary"),n=t==null?void 0:t.contains(e.target);e.defaultPrevented||(e.type==="beforematch"&&(this.open=!0),n&&e.type==="keydown"&&P(e),n&&e.type==="click"&&(this.open=!this.open))}get open(){return this.hasAttribute("open")}set open(e){d(this,"open",e?"":null)}get name(){return d(this,"name")||""}set name(e){d(this,"name",e)}},G=class extends V{connectedCallback(){d(this,"role","button"),this.slot="summary",this.tabIndex=0}};T.define("u-details",W);T.define("u-summary",G);const J=c.forwardRef(function({className:t,open:n,defaultOpen:o=!1,variant:i="default",onToggle:l,...u},q){const b=c.useRef(null),N=c.useRef(o),B=I([b,q]),m=c.useRef(l),f=c.useRef(n);return m.current=l,f.current=n,c.useEffect(()=>{const s=b.current,D=U=>{var k;!s||(s==null?void 0:s.open)===f.current||((k=m.current)==null||k.call(m,U),f.current!==void 0&&(s.open=f.current))};return s==null||s.addEventListener("toggle",D,!0),()=>s==null?void 0:s.removeEventListener("toggle",D,!0)},[]),r.jsx("u-details",{class:$("ds-details",t),open:(n??N.current)||void 0,"data-variant":i,ref:B,...u})}),Q=c.forwardRef(function(t,n){return r.jsx("div",{ref:n,...t})}),X=c.forwardRef(function({className:t,...n},o){return r.jsx("u-summary",{ref:o,class:t,...n})}),v=Object.assign(J,{Summary:X,Content:Q});v.Summary.displayName="Details.Summary";v.Content.displayName="Details.Content";const a=v;try{a.displayName="Details",a.__docgenInfo={description:"",displayName:"Details",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the details.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},open:{defaultValue:{value:"undefined"},description:`Controls open-state.

Using this removes automatic control of open-state`,name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Defaults the details to open if not controlled",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Callback function when Details toggles due to click on summary or find in page-search",name:"onToggle",required:!1,type:{name:"(((event: Event) => void) & ((event: Event) => void)) | (((event: Event) => void) & ((event: Event) => void))"}},children:{defaultValue:null,description:"Content should be one `<Details.Summary>` and `<Details.Content>`",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const re={title:"Components/Details",component:a,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},open:{control:"boolean",description:"Controls the open/closed state.",defaultValue:!1},children:{control:!1,description:"Must contain Details.Summary and Details.Content"}}},p={render:e=>r.jsxs(a,{...e,children:[r.jsx(a.Summary,{children:"Hva er Altinn?"}),r.jsx(a.Content,{children:"Altinn er en internettportal for digital dialog mellom næringslivet, privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er utviklet og driftet av Altinn-samarbeidet, som består av flere offentlige etater."})]}),args:{},name:"Default (Closed)"},g={render:e=>r.jsxs(a,{...e,children:[r.jsx(a.Summary,{children:"Hva er formålet med Altinn?"}),r.jsx(a.Content,{children:"Formålet med Altinn er å effektivisere og forenkle rapportering fra næringslivet til det offentlige, samt å gi enklere tilgang til offentlig informasjon og tjenester for både bedrifter og privatpersoner."})]}),args:{open:!0},name:"Default (Open)"},h={render:e=>r.jsxs(a,{...e,children:[r.jsx(a.Summary,{children:"Hvilke tjenester tilbyr Altinn?"}),r.jsx(a.Content,{children:"Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer (som MVA-melding, A-melding), tilgang til meldingsboks fra det offentlige, registertjenester, samtykketjenester og veiledning."})]}),args:{"data-size":"lg","data-color":"brand1",open:!1},name:"Large Size, Brand1 Color"};var A,E,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hva er Altinn?</Details.Summary>
      <Details.Content>
        Altinn er en internettportal for digital dialog mellom næringslivet,
        privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er
        utviklet og driftet av Altinn-samarbeidet, som består av flere
        offentlige etater.
      </Details.Content>
    </Details>,
  args: {},
  name: 'Default (Closed)'
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var x,w,R;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hva er formålet med Altinn?</Details.Summary>
      <Details.Content>
        Formålet med Altinn er å effektivisere og forenkle rapportering fra
        næringslivet til det offentlige, samt å gi enklere tilgang til
        offentlig informasjon og tjenester for både bedrifter og privatpersoner.
      </Details.Content>
    </Details>,
  args: {
    open: true
  },
  name: 'Default (Open)'
}`,...(R=(w=g.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,M,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hvilke tjenester tilbyr Altinn?</Details.Summary>
      <Details.Content>
        Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer
        (som MVA-melding, A-melding), tilgang til meldingsboks fra det
        offentlige, registertjenester, samtykketjenester og veiledning.
      </Details.Content>
    </Details>,
  args: {
    'data-size': 'lg',
    'data-color': 'brand1',
    open: false
  },
  name: 'Large Size, Brand1 Color'
}`,...(H=(M=h.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const ae=["DefaultClosed","DefaultOpen","LargeBrand1"];export{p as DefaultClosed,g as DefaultOpen,h as LargeBrand1,ae as __namedExportsOrder,re as default};
