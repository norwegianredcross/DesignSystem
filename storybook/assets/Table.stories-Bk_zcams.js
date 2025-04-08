import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./lite-DaUVFjkg.js";import{r as t}from"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const B=t.forwardRef(function({zebra:r=!1,stickyHeader:l=!1,border:m=!1,hover:p=!1,className:H,children:S,...v},z){return e.jsx("table",{className:N("ds-table",H),"data-border":m||void 0,"data-hover":p||void 0,"data-sticky-header":l||void 0,"data-zebra":r||void 0,ref:z,...v,children:S})}),F=t.forwardRef(function(r,l){return e.jsx("tbody",{ref:l,...r})}),E=t.forwardRef(function(r,l){return e.jsx("td",{ref:l,...r})}),D=t.forwardRef(function(r,l){return e.jsx("tfoot",{ref:l,...r})}),L=t.forwardRef(function(r,l){return e.jsx("thead",{ref:l,...r})}),O=t.forwardRef(function({sort:r,children:l,...m},p){return e.jsx("th",{"aria-sort":r,ref:p,...m,children:r?e.jsx("button",{type:"button",children:l}):l})}),_=t.forwardRef(function(r,l){return e.jsx("tr",{ref:l,...r})}),a=Object.assign(B,{Head:L,Body:F,Row:_,Cell:E,HeaderCell:O,Foot:D});a.displayName="Table";a.Head.displayName="Table.Head";a.Body.displayName="Table.Body";a.Row.displayName="Table.Row";a.Cell.displayName="Table.Cell";a.HeaderCell.displayName="Table.HeaderCell";a.Foot.displayName="Table.Foot";const G={title:"Components/Table",component:a,argTypes:{variant:{control:"select",options:["default","striped"]},size:{control:"select",options:["sm","md","lg"]}}},c=s=>e.jsxs(a,{...s,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"Header 1"}),e.jsx(a.HeaderCell,{children:"Header 2"}),e.jsx(a.HeaderCell,{children:"Header 3"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Row 1, Cell 1 - Sample Text"}),e.jsx(a.Cell,{children:"Row 1, Cell 2 - Sample Text"}),e.jsx(a.Cell,{children:"Row 1, Cell 3 - Sample Text"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Row 2, Cell 1 - Sample Text"}),e.jsx(a.Cell,{children:"Row 2, Cell 2 - Sample Text"}),e.jsx(a.Cell,{children:"Row 2, Cell 3 - Sample Text"})]})]})]}),n={render:c,args:{variant:"default",size:"md"}},o={render:c,args:{variant:"striped",size:"md"}},d={render:c,args:{variant:"default",size:"sm"}},i={render:c,args:{variant:"default",size:"lg"}};var f,u,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    size: 'md'
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,b,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'striped',
    size: 'md'
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var C,R,h;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    size: 'sm'
  }
}`,...(h=(R=d.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'default',
    size: 'lg'
  }
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const I=["Default","Striped","Small","Large"];export{n as Default,i as Large,d as Small,o as Striped,I as __namedExportsOrder,G as default};
