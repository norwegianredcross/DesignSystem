import{r as M,j as s}from"./iframe-B88K40iD.js";const A="_graphicElement_134cx_1",k="_shape_134cx_12",q="_faceFront_134cx_28",z="_faceTop_134cx_32",I="_faceRight_134cx_36",o={graphicElement:A,shape:k,faceFront:q,faceTop:z,faceRight:I};function $(t){return`
.${t.graphicElement} {
  display: inline-block;
  flex-shrink: 0;
  --graphic-element-color: var(--ds-color-base-default, #DA4236);
  --graphic-element-face-front: var(--ds-color-border-subtle, #EEABA6);
  --graphic-element-face-top: var(--ds-color-surface-active, #E5776F);
}
/* data-color scoping: the theme's [data-color] scopes swap the generic
   --ds-color-* variables, so no per-ramp rules are needed here. */
.${t.shape} {
  fill: var(--graphic-element-color);
}
/* Outline variant: thin stroke, no fill */
.${t.graphicElement}[data-variant="outline"] {
  overflow: visible;
}
.${t.graphicElement}[data-variant="outline"] .${t.shape} {
  fill: none;
  stroke: var(--graphic-element-color);
  stroke-width: 2px;
}
/* Isometric variant: three token-driven cube faces */
.${t.faceFront} {
  fill: var(--graphic-element-face-front);
}
.${t.faceTop} {
  fill: var(--graphic-element-face-top);
}
.${t.faceRight} {
  fill: var(--graphic-element-color);
}
`}const W={sm:24,md:34,lg:48},N={"top-left":270,"top-right":0,"bottom-right":90,"bottom-left":180},T={square:{viewBoxW:34,viewBoxH:34,solid:"M0 0H34V34H0V0Z",outline:"M0 34H34"},corner:{viewBoxW:68,viewBoxH:68,solid:"M34 0H68V68H0V34H34V0Z",outline:"M0 68H68V0"},angle:{viewBoxW:68,viewBoxH:68,solid:"M0 0H68V68H34V34H0V0Z",outline:"M0 0H68V68"},heart:{viewBoxW:96,viewBoxH:72,solid:"M24 0L48 24L72 0L96 24L48 72L0 24L24 0Z",outline:"M0 24L48 72L96 24"},tee:{viewBoxW:102,viewBoxH:68,solid:"M34 0H68V34H102V68H0V34H34V0Z",outline:"M17 68H85M51 34V68"},bar:{viewBoxW:102,viewBoxH:34,solid:"M0 0H102V34H0V0Z",outline:"M0 34H102"},cross:{viewBoxW:102,viewBoxH:102,solid:"M34 0H68V34H34V0ZM0 34H34V68H0V34ZM68 34H102V68H68V34ZM34 68H68V102H34V68Z",outline:"M51 0V102M0 51H34M68 51H102"}},e={cube:{w:58.89,h:68,faces:[{face:"top",d:"M0 17L29.44 0L58.89 17L29.44 34Z"},{face:"right",d:"M29.44 34L58.89 17L58.89 51L29.44 68Z"},{face:"front",d:"M0 17L29.44 34L29.44 68L0 51Z"}]},cornerStanding:{w:88.33,h:102,faces:[{face:"top",d:"M0 34L29.44 17L58.89 34L29.44 51Z"},{face:"front",d:"M0 34L29.44 51L29.44 85L0 68Z"},{face:"right",d:"M58.89 68L88.33 51L88.33 85L58.89 102Z"},{face:"front",d:"M29.44 51L58.89 68L58.89 102L29.44 85Z"},{face:"top",d:"M29.44 17L58.89 0L88.33 17L58.89 34Z"},{face:"right",d:"M58.89 34L88.33 17L88.33 51L58.89 68Z"},{face:"front",d:"M29.44 17L58.89 34L58.89 68L29.44 51Z"}]},cornerLying:{w:117.78,h:85,faces:[{face:"front",d:"M0 17L29.44 34L29.44 68L0 51Z"},{face:"top",d:"M0 17L29.44 34L58.89 17L29.44 0Z"},{face:"right",d:"M88.33 34L117.78 17L117.78 51L88.33 68Z"},{face:"top",d:"M58.89 17L88.33 34L117.78 17L88.33 0Z"},{face:"front",d:"M29.44 34L58.89 51L58.89 85L29.44 68Z"},{face:"right",d:"M58.89 51L88.33 34L88.33 68L58.89 85Z"},{face:"top",d:"M29.44 34L58.89 51L88.33 34L58.89 17Z"}]},angleStanding:{w:88.33,h:119,faces:[{face:"top",d:"M0 17L29.44 0L58.89 17L29.44 34Z"},{face:"front",d:"M0 17L29.44 34L29.44 68L0 51Z"},{face:"right",d:"M58.89 85L88.33 68L88.33 102L58.89 119Z"},{face:"front",d:"M29.44 68L58.89 85L58.89 119L29.44 102Z"},{face:"top",d:"M29.44 34L58.89 17L88.33 34L58.89 51Z"},{face:"right",d:"M58.89 51L88.33 34L88.33 68L58.89 85Z"},{face:"front",d:"M29.44 34L58.89 51L58.89 85L29.44 68Z"}]},angleLying:{w:88.33,h:102,faces:[{face:"right",d:"M58.89 34L88.33 17L88.33 51L58.89 68Z"},{face:"top",d:"M29.44 17L58.89 34L88.33 17L58.89 0Z"},{face:"front",d:"M0 34L29.44 51L29.44 85L0 68Z"},{face:"top",d:"M0 34L29.44 51L58.89 34L29.44 17Z"},{face:"front",d:"M29.44 51L58.89 68L58.89 102L29.44 85Z"},{face:"right",d:"M58.89 68L88.33 51L88.33 85L58.89 102Z"},{face:"top",d:"M29.44 51L58.89 68L88.33 51L58.89 34Z"}]},heart:{w:102,h:88.33,faces:[{face:"front",d:"M17 0L34 29.44L17 58.89L0 29.44Z"},{face:"top",d:"M17 0L51 0L68 29.44L34 29.44Z"},{face:"right",d:"M51 58.89L85 58.89L68 88.33L34 88.33Z"},{face:"front",d:"M34 29.44L51 58.89L34 88.33L17 58.89Z"},{face:"right",d:"M68 29.44L102 29.44L85 58.89L51 58.89Z"},{face:"front",d:"M51 0L68 29.44L51 58.89L34 29.44Z"},{face:"top",d:"M51 0L85 0L102 29.44L68 29.44Z"}]},heartMirrored:{w:102,h:88.33,faces:[{face:"front",d:"M85 0L68 29.44L85 58.89L102 29.44Z"},{face:"top",d:"M85 0L51 0L34 29.44L68 29.44Z"},{face:"right",d:"M51 58.89L17 58.89L34 88.33L68 88.33Z"},{face:"front",d:"M68 29.44L51 58.89L68 88.33L85 58.89Z"},{face:"right",d:"M34 29.44L0 29.44L17 58.89L51 58.89Z"},{face:"front",d:"M51 0L34 29.44L51 58.89L68 29.44Z"},{face:"top",d:"M51 0L17 0L0 29.44L34 29.44Z"}]},barHorizontal:{w:117.78,h:102,faces:[{face:"top",d:"M0 17L29.44 0L58.89 17L29.44 34Z"},{face:"front",d:"M0 17L29.44 34L29.44 68L0 51Z"},{face:"top",d:"M29.44 34L58.89 17L88.33 34L58.89 51Z"},{face:"front",d:"M29.44 34L58.89 51L58.89 85L29.44 68Z"},{face:"top",d:"M58.89 51L88.33 34L117.78 51L88.33 68Z"},{face:"right",d:"M88.33 68L117.78 51L117.78 85L88.33 102Z"},{face:"front",d:"M58.89 51L88.33 68L88.33 102L58.89 85Z"}]},barVertical:{w:58.89,h:136,faces:[{face:"right",d:"M29.44 102L58.89 85L58.89 119L29.44 136Z"},{face:"front",d:"M0 85L29.44 102L29.44 136L0 119Z"},{face:"right",d:"M29.44 68L58.89 51L58.89 85L29.44 102Z"},{face:"front",d:"M0 51L29.44 68L29.44 102L0 85Z"},{face:"top",d:"M0 17L29.44 0L58.89 17L29.44 34Z"},{face:"right",d:"M29.44 34L58.89 17L58.89 51L29.44 68Z"},{face:"front",d:"M0 17L29.44 34L29.44 68L0 51Z"}]}},Z={square:{"top-left":e.cube,"top-right":e.cube,"bottom-left":e.cube,"bottom-right":e.cube},corner:{"top-left":e.cornerStanding,"top-right":e.cornerStanding,"bottom-left":e.cornerLying,"bottom-right":e.cornerLying},angle:{"top-left":e.angleStanding,"top-right":e.angleStanding,"bottom-left":e.angleLying,"bottom-right":e.angleLying},heart:{"top-left":e.heart,"top-right":e.heart,"bottom-left":e.heart,"bottom-right":e.heart},bar:{"top-left":e.barVertical,"top-right":e.barHorizontal,"bottom-left":e.barHorizontal,"bottom-right":e.barVertical}},v=34,F={front:o.faceFront,top:o.faceTop,right:o.faceRight};function O(t){return t in Z}const d=M.forwardRef(({shape:t="corner",variant:i="solid",position:f="top-left",size:b="md",mirrored:w=!1,className:V,"aria-label":H,"aria-hidden":L=!0,"data-color":y,"data-size":x,..._},E)=>{M.useEffect(()=>{const r="rk-graphic-element-inline-styles";if(typeof document>"u"||document.getElementById(r))return;const l=$(o),c=document.createElement("style");c.id=r,c.textContent=l,document.head.appendChild(c)},[]);const h=W[b],n=T[t],a=i==="isometric"&&O(t)?t==="heart"&&w?e.heartMirrored:Z[t][f]:void 0,p=i==="isometric"&&!a?"solid":i,u=a?0:N[f],m=a?a.w:n.viewBoxW,g=a?a.h:n.viewBoxH,B=Math.round(h*m/v),S=Math.round(h*g/v);return s.jsx("svg",{ref:E,className:`${o.graphicElement} ${V||""}`,width:B,height:S,viewBox:`0 0 ${m} ${g}`,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":H,"aria-hidden":L,role:L?void 0:"img","data-shape":t,"data-variant":p,"data-color":y,"data-size":x,style:{transform:u?`rotate(${u}deg)`:void 0},..._,children:a?a.faces.map((r,l)=>s.jsx("path",{d:r.d,className:F[r.face]},l)):s.jsx("path",{d:p==="outline"?n.outline:n.solid,className:o.shape,vectorEffect:"non-scaling-stroke"})})});d.displayName="GraphicElement";try{d.displayName="GraphicElement",d.__docgenInfo={description:`GraphicElement - Decorative brand graphic elements derived from the cross.

The four arms of the cross are split up and used as independent
graphic elements - angles, corners, hearts, bars - all derived from
the same base form. Used as visual accents across Røde Kors web
projects to create recognition, direction and cohesion.`,displayName:"GraphicElement",props:{"data-size":{defaultValue:null,description:"Endrer størrelse for underliggende Designsystemet-komponenter. Velg fra forhåndsdefinerte størrelser.",name:"data-size",required:!1,type:{name:"Size"}},position:{defaultValue:{value:"top-left"},description:`Orientation of the shape.
For solid and outline: which corner the graphic points to.
For isometric: selects between standing (top-*) and lying
(bottom-*) orientations for corner and angle, and between
vertical (top-left/bottom-right) and horizontal
(top-right/bottom-left) for bar.`,name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},size:{defaultValue:{value:"md"},description:`Size of the graphic (base grid size).
For the corner shape: sm: 48px, md: 68px, lg: 96px.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Color scope from the theme (rk-design-tokens). Available scopes:
'primary-color-red' (the default resolved value when inheriting
from the surrounding scope), 'secondary-color-orange',
'secondary-color-rust', 'secondary-color-pink',
'additional-color-ocean', 'additional-color-jungle' and 'neutral'.`,name:"data-color",required:!1,type:{name:"Color"}},className:{defaultValue:null,description:"Optional CSS class name.",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:`Accessible label for the decorative graphic.
Set to empty string if purely decorative.`,name:"aria-label",required:!1,type:{name:"string"}},"aria-hidden":{defaultValue:{value:"true"},description:"Whether the graphic is hidden from assistive technologies.",name:"aria-hidden",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"solid"},description:`Visual style: filled (solid) or thin stroke (outline).
Isometric 3D variant: the shape built from unit cubes with
three token-driven faces. Available for the shapes square,
corner, angle, heart and bar.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"solid"'},{value:'"isometric"'}]}},shape:{defaultValue:{value:"corner"},description:`Which graphic element to render. All shapes are derived from
the same base form: the arms of the cross.
Shapes available in the isometric variant.`,name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"corner"'},{value:'"angle"'},{value:'"heart"'},{value:'"tee"'},{value:'"bar"'},{value:'"cross"'}]}},mirrored:{defaultValue:{value:"false"},description:`Mirrors the heart so the depth faces left instead of right.
Only applies to the isometric heart.`,name:"mirrored",required:!1,type:{name:"boolean"}}}}}catch{}export{d as G};
