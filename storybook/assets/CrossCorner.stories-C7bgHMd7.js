import{G as u}from"./index-iOUo5o-C.js";import"./iframe-Dak2elDt.js";import"./preload-helper-u0ftyAaf.js";const n=u;try{n.displayName="CrossCorner",n.__docgenInfo={description:`CrossCorner - Deprecated alias for GraphicElement.

Bruk GraphicElement i stedet. CrossCorner er videreført som et alias for
GraphicElement og fjernes i en fremtidig versjon. Merk: den gamle
CrossCorner-formen tilsvarer \`shape="angle"\` i GraphicElement; standard
\`shape="corner"\` er en annen form.`,displayName:"CrossCorner",props:{"data-size":{defaultValue:null,description:"Endrer størrelse for underliggende Designsystemet-komponenter. Velg fra forhåndsdefinerte størrelser.",name:"data-size",required:!1,type:{name:"Size"}},position:{defaultValue:{value:"'top-left'"},description:`Orientation of the shape.
For solid and outline: which corner the graphic points to.
For isometric: selects between standing (top-*) and lying
(bottom-*) orientations for corner and angle, and between
vertical (top-left/bottom-right) and horizontal
(top-right/bottom-left) for bar.`,name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},size:{defaultValue:{value:"'md'"},description:`Size of the graphic (base grid size).
For the corner shape: sm: 48px, md: 68px, lg: 96px.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Color scope from the theme (rk-design-tokens). Available scopes:
'primary-color-red' (the default resolved value when inheriting
from the surrounding scope), 'secondary-color-orange',
'secondary-color-rust', 'secondary-color-pink',
'additional-color-ocean', 'additional-color-jungle' and 'neutral'.`,name:"data-color",required:!1,type:{name:"Color"}},className:{defaultValue:null,description:"Optional CSS class name.",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:`Accessible label for the decorative graphic.
Set to empty string if purely decorative.`,name:"aria-label",required:!1,type:{name:"string"}},"aria-hidden":{defaultValue:{value:"true (decorative by default)"},description:"Whether the graphic is hidden from assistive technologies.",name:"aria-hidden",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'solid'"},description:`Visual style: filled (solid) or thin stroke (outline).
Isometric 3D variant: the shape built from unit cubes with
three token-driven faces. Available for the shapes square,
corner, angle, heart and bar.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'},{value:'"isometric"'}]}},shape:{defaultValue:{value:`'corner'
'corner'`},description:`Which graphic element to render. All shapes are derived from
the same base form: the arms of the cross.
Shapes available in the isometric variant.`,name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"corner"'},{value:'"angle"'},{value:'"heart"'},{value:'"tee"'},{value:'"bar"'},{value:'"cross"'}]}},mirrored:{defaultValue:{value:"false"},description:`Mirrors the heart so the depth faces left instead of right.
Only applies to the isometric heart.`,name:"mirrored",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:a,within:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/CrossCorner (Deprecated)",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Deprecated alias for GraphicElement. Use GraphicElement for new work."}}}},t={args:{shape:"angle",position:"top-right",size:"sm","data-color":"secondary-color-rust","aria-hidden":!1,"aria-label":"Dekorativ vinkel"}},r={name:"Test: Deprecated Alias Contract",tags:["!autodocs"],args:{shape:"angle",variant:"outline",position:"bottom-right",size:"sm","aria-hidden":!1,"aria-label":"Røde Kors-vinkel"},play:async({canvasElement:o})=>{const e=m(o).getByRole("img",{name:"Røde Kors-vinkel"});await a(e.tagName).toBe("svg"),await a(e).toHaveAttribute("data-shape","angle"),await a(e).toHaveAttribute("data-variant","outline"),await a(e).toHaveAttribute("viewBox","0 0 68 68"),await a(e).toHaveAttribute("width","48"),await a(e).toHaveAttribute("height","48"),await a(e.querySelector("path")).toHaveAttribute("d","M0 0H68V68")}};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    shape: 'angle',
    position: 'top-right',
    size: 'sm',
    'data-color': 'secondary-color-rust',
    'aria-hidden': false,
    'aria-label': 'Dekorativ vinkel'
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Test: Deprecated Alias Contract',
  tags: ['!autodocs'],
  args: {
    shape: 'angle',
    variant: 'outline',
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
    await expect(graphic).toHaveAttribute('data-shape', 'angle');
    await expect(graphic).toHaveAttribute('data-variant', 'outline');
    await expect(graphic).toHaveAttribute('viewBox', '0 0 68 68');
    await expect(graphic).toHaveAttribute('width', '48');
    await expect(graphic).toHaveAttribute('height', '48');
    await expect(graphic.querySelector('path')).toHaveAttribute('d', 'M0 0H68V68');
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["LegacyAngle","TestAliasContract"];export{t as LegacyAngle,r as TestAliasContract,b as __namedExportsOrder,f as default};
