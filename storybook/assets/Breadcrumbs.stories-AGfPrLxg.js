import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as z}from"./lite-DaUVFjkg.js";import{r as d}from"./index-D4lIrffr.js";import{L as A}from"./Link-0v2GXfqz.js";import{u as T}from"./floating-ui.react-VFS6-CKd.js";import"./index-Cb-ENzfG.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const $=d.forwardRef(({"aria-label":s="Du er her:",className:n,...t},c)=>r.jsx("nav",{"aria-label":s,className:z("ds-breadcrumbs",n),ref:c,...t})),R=d.forwardRef(function({className:n,...t},c){return r.jsx("li",{ref:c,...t})}),P=d.forwardRef(function(n,t){return r.jsx(A,{ref:t,...n})}),S=d.forwardRef(function(n,t){const c=d.useRef(null),C=T([c,t]);return d.useEffect(()=>{var f;const u=((f=c.current)==null?void 0:f.querySelectorAll(":scope > * > *"))||[],i=u[(u==null?void 0:u.length)-1];return i==null||i.setAttribute("aria-current","page"),()=>i==null?void 0:i.removeAttribute("aria-current")}),r.jsx("ol",{ref:C,...n})}),h=Object.assign($,{List:S,Item:R,Link:P});h.List.displayName="Breadcrumbs.List";h.Item.displayName="Breadcrumbs.Item";h.Link.displayName="Breadcrumbs.Link";const m=h,p=S,a=R,e=P,J={title:"Components/Breadcrumbs",component:m,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"Sets the screen reader label for the Breadcrumbs area",defaultValue:"Du er her"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"}}},o={name:"Example Only Back Button",render:s=>r.jsx(m,{...s,children:r.jsx(e,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"})}),args:{"aria-label":"Du er her:"}},l={name:"Example Only Path",render:s=>r.jsx(m,{...s,children:r.jsxs(p,{children:[r.jsx(a,{children:r.jsx(e,{href:"https://designsystemet.no/",children:"Nivå 1"})}),r.jsx(a,{children:r.jsx(e,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),r.jsx(a,{children:r.jsx(e,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),r.jsx(a,{children:r.jsx(e,{href:"#",children:"Nivå 4"})})]})}),args:{"aria-label":"Du er her:"}},b={name:"Example Back Button and Path",render:s=>r.jsxs(m,{...s,children:[r.jsx(e,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"}),r.jsxs(p,{children:[r.jsx(a,{children:r.jsx(e,{href:"https://designsystemet.no/",children:"Nivå 1"})}),r.jsx(a,{children:r.jsx(e,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),r.jsx(a,{children:r.jsx(e,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),r.jsx(a,{children:r.jsx(e,{href:"#",children:"Nivå 4"})})]})]}),args:{"aria-label":"Du er her:"}},B={name:"Example Custom Size and Color",render:s=>r.jsx(m,{...s,children:r.jsxs(p,{children:[r.jsx(a,{children:r.jsx(e,{href:"#",children:"Nivå 1"})}),r.jsx(a,{children:r.jsx(e,{href:"#",children:"Nivå 2"})}),r.jsx(a,{children:r.jsx(e,{href:"#",children:"Nivå 3"})})]})}),args:{"aria-label":"Du er her:","data-size":"lg","data-color":"brand2"}};var x,g,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Only Back Button',
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">\r
        Nivå 3\r
      </BreadcrumbsLink>\r
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(L=(g=o.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var v,k,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example Only Path',
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbsList>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
      </BreadcrumbsList>\r
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var N,I,y;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Example Back Button and Path',
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">\r
        Nivå 3\r
      </BreadcrumbsLink>\r
      <BreadcrumbsList>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
      </BreadcrumbsList>\r
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(y=(I=b.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var D,E,O;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Example Custom Size and Color',
  render: args => <Breadcrumbs {...args}>\r
      <BreadcrumbsList>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
        <BreadcrumbsItem>\r
          <BreadcrumbsLink href="#">Nivå 3</BreadcrumbsLink>\r
        </BreadcrumbsItem>\r
      </BreadcrumbsList>\r
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:',
    'data-size': 'lg',
    'data-color': 'brand2'
  }
}`,...(O=(E=B.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const K=["OnlyBackButton","OnlyPath","BackAndPath","LargeBrand2"];export{b as BackAndPath,B as LargeBrand2,o as OnlyBackButton,l as OnlyPath,K as __namedExportsOrder,J as default};
