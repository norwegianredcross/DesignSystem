import{r as m,j as e}from"./iframe-CuaNajnk.js";import{c as P}from"./lite-DaUVFjkg.js";import{L as R}from"./link-BI1c6Yb9.js";import{u as V}from"./use-merge-refs-_lGrydW6.js";const q=m.forwardRef(({"aria-label":r="Du er her:",className:d,...t},c)=>e.jsx("nav",{"aria-label":r,className:P("ds-breadcrumbs",d),ref:c,...t})),D=m.forwardRef(function({className:d,...t},c){return e.jsx("li",{ref:c,...t})}),C=m.forwardRef(function(d,t){return e.jsx(R,{ref:t,...d})}),O=m.forwardRef(function(d,t){const c=m.useRef(null),E=V([c,t]);return m.useEffect(()=>{var f;const h=((f=c.current)==null?void 0:f.querySelectorAll(":scope > * > *"))||[],i=h[(h==null?void 0:h.length)-1];return i==null||i.setAttribute("aria-current","page"),()=>i==null?void 0:i.removeAttribute("aria-current")}),e.jsx("ol",{ref:E,...d})}),B=Object.assign(q,{List:O,Item:D,Link:C});B.List.displayName="Breadcrumbs.List";B.Item.displayName="Breadcrumbs.Item";B.Link.displayName="Breadcrumbs.Link";const n=B,p=O,s=D,a=C;try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"'Du er her'"},description:"Sets the screen reader label for the Breadcrumbs area",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="BreadcrumbsList",p.__docgenInfo={description:"",displayName:"BreadcrumbsList",props:{}}}catch{}try{s.displayName="BreadcrumbsItem",s.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{}}}catch{}try{a.displayName="BreadcrumbsLink",a.__docgenInfo={description:"",displayName:"BreadcrumbsLink",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/Breadcrumbs",component:n,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"Sets the screen reader label for the Breadcrumbs area",defaultValue:"Du er her"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"}}},o={name:"Example Only Back Button",render:r=>e.jsx(n,{...r,children:e.jsx(a,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"})}),args:{"aria-label":"Du er her:"}},l={name:"Example Only Path",render:r=>e.jsx(n,{...r,children:e.jsxs(p,{children:[e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 4"})})]})}),args:{"aria-label":"Du er her:"}},u={name:"Example Back Button and Path",render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"}),e.jsxs(p,{children:[e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 4"})})]})]}),args:{"aria-label":"Du er her:"}},b={name:"Example Custom Size and Color",render:r=>e.jsx(n,{...r,children:e.jsxs(p,{children:[e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 1"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 2"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 3"})})]})}),args:{"aria-label":"Du er her:","data-size":"lg","data-color":"brand2"}};var g,y,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Example Only Back Button',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var L,v,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example Only Path',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var j,N,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example Back Button and Path',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,S,z;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Example Custom Size and Color',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:',
    'data-size': 'lg',
    'data-color': 'brand2'
  }
}`,...(z=(S=b.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const A=["OnlyBackButton","OnlyPath","BackAndPath","LargeBrand2"],G=Object.freeze(Object.defineProperty({__proto__:null,BackAndPath:u,LargeBrand2:b,OnlyBackButton:o,OnlyPath:l,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{G as B,b as L,l as O,o as a,u as b};
