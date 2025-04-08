import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as A}from"./lite-DaUVFjkg.js";import{r as i}from"./index-BKyFwriW.js";import{L as M}from"./Link-CSqylbm3.js";import{u as P}from"./floating-ui.react-CvBcK_lS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C4xiViop.js";import"./index-C6uLyQP3.js";import"./index-DQw2Bw4b.js";const _=i.forwardRef(({"aria-label":c="Du er her:",className:n,...s},a)=>e.jsx("nav",{"aria-label":c,className:A("ds-breadcrumbs",n),ref:a,...s})),q=i.forwardRef(function({className:n,...s},a){return e.jsx("li",{ref:a,...s})}),C=i.forwardRef(function(n,s){return e.jsx(M,{ref:s,...n})}),F=i.forwardRef(function(n,s){const a=i.useRef(null),V=P([a,s]);return i.useEffect(()=>{var f;const m=((f=a.current)==null?void 0:f.querySelectorAll(":scope > * > *"))||[],t=m[(m==null?void 0:m.length)-1];return t==null||t.setAttribute("aria-current","page"),()=>t==null?void 0:t.removeAttribute("aria-current")}),e.jsx("ol",{ref:V,...n})}),r=Object.assign(_,{List:F,Item:q,Link:C});r.List.displayName="Breadcrumbs.List";r.Item.displayName="Breadcrumbs.Item";r.Link.displayName="Breadcrumbs.Link";const X={title:"Components/Breadcrumbs",component:r,tags:["autodocs"],args:{children:e.jsx(e.Fragment,{children:e.jsxs(r,{"aria-label":"Du er her:",children:[e.jsx(r.Link,{"aria-label":"Tilbake til Nivå 3",href:"#",children:"Nivå 3"}),e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 1"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 2"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 3"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 4"})})]})]})})},argTypes:{children:{control:!1}}},o={},d={},l={args:{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 1"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 2"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 3"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Nivå 4"})})]})}},u={args:{children:e.jsx(r.Link,{"aria-label":"Tilbake til Nivå 3",href:"#",children:"Nivå 3"})}},b={args:{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Dette er et veldig langt element som går over flere linjer"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Dette er et annet veldig langt element som går over flere linjer"})})]})}},h={parameters:{viewport:{defaultViewport:"mobile1"}}};var p,L,B;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(B=(L=o.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var j,x,g;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,v,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
  }
}`,...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var N,w,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <Breadcrumbs.Link aria-label="Tilbake til Nivå 3" href="#">
        Nivå 3
      </Breadcrumbs.Link>
  }
}`,...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var R,D,S;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">
            Dette er et veldig langt element som går over flere linjer
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">
            Dette er et annet veldig langt element som går over flere linjer
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
  }
}`,...(S=(D=b.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var O,E,T;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1' // Use Storybook's mobile viewport preset
    }
  }
}`,...(T=(E=h.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const Y=["Default","Preview","ListOnly","BackOnly","LongItems","MobileViewport"];export{u as BackOnly,o as Default,l as ListOnly,b as LongItems,h as MobileViewport,d as Preview,Y as __namedExportsOrder,X as default};
