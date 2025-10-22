import{r as m,j as e}from"./iframe-BOPNQRcS.js";import{c as R}from"./lite-DaUVFjkg.js";import{L as V}from"./link-BC-o7VdX.js";import{u as P}from"./use-merge-refs-C-_QIizQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6VuQ_pOC.js";const q=m.forwardRef(({"aria-label":r="Du er her:",className:d,...t},c)=>e.jsx("nav",{"aria-label":r,className:R("ds-breadcrumbs",d),ref:c,...t})),C=m.forwardRef(function({className:d,...t},c){return e.jsx("li",{ref:c,...t})}),S=m.forwardRef(function(d,t){return e.jsx(V,{ref:t,...d})}),E=m.forwardRef(function(d,t){const c=m.useRef(null),O=P([c,t]);return m.useEffect(()=>{var f;const l=((f=c.current)==null?void 0:f.querySelectorAll(":scope > * > *"))||[],i=l[(l==null?void 0:l.length)-1];return i==null||i.setAttribute("aria-current","page"),()=>i==null?void 0:i.removeAttribute("aria-current")}),e.jsx("ol",{ref:O,...d})}),B=Object.assign(q,{List:E,Item:C,Link:S});B.List.displayName="Breadcrumbs.List";B.Item.displayName="Breadcrumbs.Item";B.Link.displayName="Breadcrumbs.Link";const n=B,o=E,s=C,a=S;try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"'Du er her'"},description:"Sets the screen reader label for the Breadcrumbs area",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{o.displayName="BreadcrumbsList",o.__docgenInfo={description:"",displayName:"BreadcrumbsList",props:{}}}catch{}try{s.displayName="BreadcrumbsItem",s.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{}}}catch{}try{a.displayName="BreadcrumbsLink",a.__docgenInfo={description:"",displayName:"BreadcrumbsLink",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Breadcrumbs",component:n,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"Sets the screen reader label for the Breadcrumbs area",defaultValue:"Du er her"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"}}},u={name:"Example Only Back Button",render:r=>e.jsx(n,{...r,children:e.jsx(a,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"})}),args:{"aria-label":"Du er her:"}},b={name:"Example Only Path",render:r=>e.jsx(n,{...r,children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 4"})})]})}),args:{"aria-label":"Du er her:"}},p={name:"Example Back Button and Path",render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"}),e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(s,{children:e.jsx(a,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 4"})})]})]}),args:{"aria-label":"Du er her:"}},h={name:"Example Custom Size and Color",render:r=>e.jsx(n,{...r,children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 1"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 2"})}),e.jsx(s,{children:e.jsx(a,{href:"#",children:"Nivå 3"})})]})}),args:{"aria-label":"Du er her:","data-size":"lg","data-color":"brand2"}};var g,y,x;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Example Only Back Button',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(x=(y=u.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var L,v,k;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(v=b.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var N,j,I;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var _,D,z;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(D=h.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const H=["OnlyBackButton","OnlyPath","BackAndPath","LargeBrand2"];export{p as BackAndPath,h as LargeBrand2,u as OnlyBackButton,b as OnlyPath,H as __namedExportsOrder,G as default};
