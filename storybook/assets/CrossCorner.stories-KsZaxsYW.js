import{r as m,j as u}from"./iframe-DRIzCs1n.js";import{G as h}from"./index-B6OrJLLw.js";import"./preload-helper-u0ftyAaf.js";const i=m.forwardRef((t,e)=>u.jsx(h,{ref:e,shape:"angle",...t}));i.displayName="CrossCorner";try{i.displayName="CrossCorner",i.__docgenInfo={description:"CrossCorner — deprecated compatibility wrapper around GraphicElement.",displayName:"CrossCorner",props:{position:{defaultValue:{value:"'top-left'"},description:"Which corner the graphic points to.",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},size:{defaultValue:{value:"'md'"},description:"Size: sm 48px, md 68px, lg 96px.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:"Color scope from the theme (rk-design-tokens).",name:"data-color",required:!1,type:{name:"Color"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-hidden":{defaultValue:{value:"true (decorative)"},description:"",name:"aria-hidden",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:a,within:g}=__STORYBOOK_MODULE_TEST__,b={title:"Components/CrossCorner (Deprecated)",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Deprecated alias for GraphicElement. Use GraphicElement for new work."}}}},r={args:{position:"top-right",size:"sm","data-color":"secondary-color-rust","aria-hidden":!1,"aria-label":"Dekorativ vinkel"}},o={name:"Test: Deprecated Alias Contract",tags:["!autodocs"],args:{position:"bottom-right",size:"sm","aria-hidden":!1,"aria-label":"Røde Kors-vinkel"},play:async({canvasElement:t})=>{const e=g(t).getByRole("img",{name:"Røde Kors-vinkel"});await a(e.tagName).toBe("svg"),await a(e).toHaveAttribute("data-shape","angle"),await a(e).toHaveAttribute("data-variant","solid"),await a(e).toHaveAttribute("viewBox","0 0 68 68"),await a(e).toHaveAttribute("width","48"),await a(e).toHaveAttribute("height","48"),await a(e.querySelector("path")).toHaveAttribute("d","M0 0H68V68H34V34H0V0Z")}};var s,n,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    position: 'top-right',
    size: 'sm',
    'data-color': 'secondary-color-rust',
    'aria-hidden': false,
    'aria-label': 'Dekorativ vinkel'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Test: Deprecated Alias Contract',
  tags: ['!autodocs'],
  args: {
    position: 'bottom-right',
    size: 'sm',
    'aria-hidden': false,
    'aria-label': 'Røde Kors-vinkel'
  },
  play: async ({
    canvasElement
  }) => {
    const graphic = within(canvasElement).getByRole('img', {
      name: 'Røde Kors-vinkel'
    });
    await expect(graphic.tagName).toBe('svg');
    // The core of the compatibility contract: WITHOUT a shape prop the
    // wrapper must render the angle shape (the old CrossCorner), not
    // GraphicElement's default "corner". The solid path is the angle's
    // geometry.
    await expect(graphic).toHaveAttribute('data-shape', 'angle');
    await expect(graphic).toHaveAttribute('data-variant', 'solid');
    await expect(graphic).toHaveAttribute('viewBox', '0 0 68 68');
    await expect(graphic).toHaveAttribute('width', '48');
    await expect(graphic).toHaveAttribute('height', '48');
    await expect(graphic.querySelector('path')).toHaveAttribute('d', 'M0 0H68V68H34V34H0V0Z');
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["LegacyAngle","TestAliasContract"];export{r as LegacyAngle,o as TestAliasContract,w as __namedExportsOrder,b as default};
