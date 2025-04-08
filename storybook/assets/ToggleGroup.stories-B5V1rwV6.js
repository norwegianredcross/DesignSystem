import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{c as Y}from"./lite-DaUVFjkg.js";import{u as J}from"./floating-ui.react-CvBcK_lS.js";import{S as Q}from"./index-C4xiViop.js";import{B as Z}from"./Button-BjYRPWCX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C6uLyQP3.js";import"./index-DQw2Bw4b.js";const W=i.createContext({elements:{current:new Map},getOrderedItems:()=>[],setFocusableValue:()=>{},onShiftTab:()=>{},focusableValue:null,orientation:"horizontal"}),B=i.forwardRef(({activeValue:t,asChild:s,orientation:e="horizontal",onBlur:r,onFocus:o,...n},g)=>{const a=s?Q:"div",[l,m]=i.useState(null),[y,d]=i.useState(!1),u=i.useRef(new Map),c=i.useRef(null),x=J([g,c]),k=()=>{if(!c.current)return[];const p=Array.from(c.current.querySelectorAll("[data-roving-tabindex-item]"));return Array.from(u.current).sort((h,v)=>p.indexOf(h[1])-p.indexOf(v[1])).map(([h,v])=>({value:h,element:v}))};return i.useEffect(()=>{m(t??null)},[t]),f.jsx(W.Provider,{value:{elements:u,getOrderedItems:k,focusableValue:l,setFocusableValue:m,onShiftTab:()=>{d(!0)},orientation:e},children:f.jsx(a,{...n,tabIndex:y?-1:0,onBlur:p=>{r==null||r(p),d(!1),m(t??null)},onFocus:p=>{var v,O,A;if(o==null||o(p),p.target!==p.currentTarget)return;const h=k();h.length!==0&&(l!=null?(v=u.current.get(l))==null||v.focus():t!=null?(O=u.current.get(t))==null||O.focus():(A=h.at(0))==null||A.element.focus())},ref:x})})}),ee=t=>{const{elements:s,getOrderedItems:e,setFocusableValue:r,focusableValue:o,onShiftTab:n,orientation:g}=i.useContext(W);return{getOrderedItems:e,isFocusable:o===t,orientation:g,getRovingProps:a=>({...a,ref:l=>{l?s.current.set(t,l):s.current.delete(t)},onKeyDown:l=>{var m;if((m=a==null?void 0:a.onKeyDown)==null||m.call(a,l),l.shiftKey&&l.key==="Tab"){n();return}},onFocus:l=>{var m;(m=a==null?void 0:a.onFocus)==null||m.call(a,l),r(t)},"data-roving-tabindex-item":!0,tabIndex:o===t?0:-1})}};function C(t,s){const e=t.findIndex(r=>r.value===s);return t.at(e===t.length-1?0:e+1)}function z(t,s){const e=t.findIndex(r=>r.value===s);return t.at(e===0?-1:e-1)}const te=i.forwardRef(({value:t,asChild:s,...e},r)=>{const o=s?Q:"div",n=t??(typeof e.children=="string"?e.children:""),{getOrderedItems:g,getRovingProps:a,orientation:l}=ee(n),m=a({onKeyDown:d=>{var x;(x=e==null?void 0:e.onKeyDown)==null||x.call(e,d);const u=g();let c;switch(l){case"horizontal":d.key==="ArrowRight"&&(c=C(u,n)),d.key==="ArrowLeft"&&(c=z(u,n));break;case"vertical":d.key==="ArrowDown"&&(c=C(u,n)),d.key==="ArrowUp"&&(c=z(u,n));break;case"ambiguous":["ArrowRight","ArrowDown"].includes(d.key)&&(c=C(u,n)),["ArrowLeft","ArrowUp"].includes(d.key)&&(c=z(u,n))}d.key==="Home"&&(c=u[0]),d.key==="End"&&(c=u[u.length-1]),c&&(d.preventDefault(),c.element.focus())}}),y=J([r,m.ref]);return f.jsx(o,{...e,...m,ref:y,children:e.children})}),X=i.createContext({}),re=i.forwardRef(function({children:s,value:e,defaultValue:r,onChange:o,name:n,className:g,...a},l){const m=i.useId(),y=e!==void 0,[d,u]=i.useState(r);let c=o;return y||(c=x=>{u(x),o==null||o(x)},e=d),f.jsx(X.Provider,{value:{value:e,defaultValue:r,name:n??`togglegroup-name-${m}`,onChange:c},children:f.jsx(B,{asChild:!0,activeValue:e,orientation:"ambiguous",children:f.jsxs("div",{className:Y("ds-togglegroup",g),role:"radiogroup",ref:l,...a,children:[n&&f.jsx("input",{type:"hidden",name:n,value:e}),s]})})})}),ne=t=>{const{...s}=t,e=i.useId(),r=i.useContext(X),o=t.value??e,n=r.value===o,g=`togglegroup-item-${i.useId()}`;return{...s,active:n,value:o,buttonProps:{id:g,"aria-checked":n,"aria-current":n,role:"radio",name:r.name,onClick:()=>{var a;(a=r.onChange)==null||a.call(r,o)}}}},oe=i.forwardRef(function(s,e){const{active:r,buttonProps:o,value:n}=ne(s);return f.jsx(te,{asChild:!0,value:n,children:f.jsx(Z,{variant:r?"primary":"tertiary",ref:e,...s,...o})})}),b=Object.assign(re,{Item:oe});b.Item.displayName="ToggleGroup.Item";const ge={title:"Components/ToggleGroup",component:b,argTypes:{variant:{control:"select",options:["default","neutral","primary"]},size:{control:"select",options:["sm","md","lg"]},onChange:{action:"changed"}}},I=t=>{const[s,e]=i.useState(null),r=o=>{var n;e(o),(n=t.onChange)==null||n.call(t,o)};return f.jsxs(b,{...t,value:s,onChange:r,children:[f.jsx(b.Item,{value:"option1",children:"Option 1 - Sample Text"}),f.jsx(b.Item,{value:"option2",children:"Option 2 - Sample Text"}),f.jsx(b.Item,{value:"option3",children:"Option 3 - Sample Text"})]})},T={render:I,args:{variant:"default",size:"md"}},S={render:I,args:{variant:"neutral",size:"md"}},w={render:I,args:{variant:"primary",size:"md"}},R={render:I,args:{variant:"default",size:"sm"}},j={render:I,args:{variant:"default",size:"lg"}};var D,F,P;T.parameters={...T.parameters,docs:{...(D=T.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    size: 'md'
  }
}`,...(P=(F=T.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var G,V,E;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'neutral',
    size: 'md'
  }
}`,...(E=(V=S.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var K,N,L;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(L=(N=w.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var M,U,$;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    size: 'sm'
  }
}`,...($=(U=R.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var _,q,H;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    size: 'lg'
  }
}`,...(H=(q=j.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const pe=["Default","Neutral","Primary","Small","Large"];export{T as Default,j as Large,S as Neutral,w as Primary,R as Small,pe as __namedExportsOrder,ge as default};
