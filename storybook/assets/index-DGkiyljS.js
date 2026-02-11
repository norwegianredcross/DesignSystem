import{r as i,j as d}from"./iframe-D4YUl7yB.js";const b="_crossCorner_1caiu_1",C="_shape_1caiu_6",a={crossCorner:b,shape:C};function y(e){return`
.${e.crossCorner} {
  display: inline-block;
  flex-shrink: 0;
}
.${e.shape} {
  fill: var(--ds-color-base-default, #DA4236);
}
/* Color variants via data-color attribute */
.${e.crossCorner}[data-color="accent"] .${e.shape} {
  fill: var(--ds-color-accent-base-default, #DA4236);
}
.${e.crossCorner}[data-color="brand1"] .${e.shape} {
  fill: var(--ds-color-brand1-base-default, #DA4236);
}
.${e.crossCorner}[data-color="brand2"] .${e.shape} {
  fill: var(--ds-color-brand2-base-default, #1E2B3C);
}
.${e.crossCorner}[data-color="brand3"] .${e.shape} {
  fill: var(--ds-color-brand3-base-default, #F5F5F5);
}
.${e.crossCorner}[data-color="neutral"] .${e.shape} {
  fill: var(--ds-color-neutral-base-default, #5D5D5D);
}
`}const _={sm:48,md:68,lg:96},$={"top-left":270,"top-right":0,"bottom-right":90,"bottom-left":180},t=i.forwardRef(({position:e="top-left",size:c="md",className:u,"aria-label":p,"aria-hidden":o=!0,"data-color":f,"data-size":m,...h},g)=>{i.useEffect(()=>{const l="rk-crosscorner-inline-styles";if(typeof document>"u"||document.getElementById(l))return;const v=y(a),r=document.createElement("style");r.id=l,r.textContent=v,document.head.appendChild(r)},[]);const s=_[c],n=$[e];return d.jsx("svg",{ref:g,className:`${a.crossCorner} ${u||""}`,width:s,height:s,viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":p,"aria-hidden":o,role:o?void 0:"img","data-color":f,"data-size":m,style:{transform:n?`rotate(${n}deg)`:void 0},...h,children:d.jsx("path",{d:"M68 0V33.8203H67.998V68H34.1777V33.8203H0V0H68Z",className:a.shape})})});t.displayName="CrossCorner";try{t.displayName="CrossCorner",t.__docgenInfo={description:`CrossCorner - Decorative L-shaped brand graphic element.

Used as a visual accent across Røde Kors web projects.
The shape forms part of the cross pattern and can be positioned
in any corner orientation.`,displayName:"CrossCorner",props:{"data-size":{defaultValue:null,description:"Endrer størrelse for underliggende Designsystemet-komponenter. Velg fra forhåndsdefinerte størrelser.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Endrer farge for underliggende Designsystemet-komponenter.
Velg fra forhåndsdefinerte farger og farger definert med theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},position:{defaultValue:{value:"top-left"},description:"Which corner the graphic points to.",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},size:{defaultValue:{value:"md"},description:`Size of the graphic.
sm: 48px, md: 68px, lg: 96px`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"Optional CSS class name.",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:`Accessible label for the decorative graphic.
Set to empty string if purely decorative.`,name:"aria-label",required:!1,type:{name:"string"}},"aria-hidden":{defaultValue:{value:"true"},description:"Whether the graphic is hidden from assistive technologies.",name:"aria-hidden",required:!1,type:{name:"boolean"}}}}}catch{}export{t as C};
