import{j as e}from"./iframe-Bb1XchRN.js";import{w as L,x as k,y as _,z as j}from"./tooltip-DD-oADH_.js";const n=L,m=_,a=j,r=k;try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"'Du er her'"},description:"Sets the screen reader label for the Breadcrumbs area",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="BreadcrumbsList",m.__docgenInfo={description:"",displayName:"BreadcrumbsList",props:{}}}catch{}try{a.displayName="BreadcrumbsItem",a.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{}}}catch{}try{r.displayName="BreadcrumbsLink",r.__docgenInfo={description:"",displayName:"BreadcrumbsLink",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Components/Breadcrumbs",component:n,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"Sets the screen reader label for the Breadcrumbs area",defaultValue:"Du er her"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"}}},t={name:"Example Only Back Button",render:s=>e.jsx(n,{...s,children:e.jsx(r,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"})}),args:{"aria-label":"Du er her:"}},d={name:"Example Only Path",render:s=>e.jsx(n,{...s,children:e.jsxs(m,{children:[e.jsx(a,{children:e.jsx(r,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(a,{children:e.jsx(r,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(a,{children:e.jsx(r,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(a,{children:e.jsx(r,{href:"#",children:"Nivå 4"})})]})}),args:{"aria-label":"Du er her:"}},i={name:"Example Back Button and Path",render:s=>e.jsxs(n,{...s,children:[e.jsx(r,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"}),e.jsxs(m,{children:[e.jsx(a,{children:e.jsx(r,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(a,{children:e.jsx(r,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(a,{children:e.jsx(r,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(a,{children:e.jsx(r,{href:"#",children:"Nivå 4"})})]})]}),args:{"aria-label":"Du er her:"}},c={name:"Example Custom Size and Color",render:s=>e.jsx(n,{...s,children:e.jsxs(m,{children:[e.jsx(a,{children:e.jsx(r,{href:"#",children:"Nivå 1"})}),e.jsx(a,{children:e.jsx(r,{href:"#",children:"Nivå 2"})}),e.jsx(a,{children:e.jsx(r,{href:"#",children:"Nivå 3"})})]})}),args:{"aria-label":"Du er her:","data-size":"lg","data-color":"brand2"}};var o,l,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Example Only Back Button',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var b,h,p;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(h=d.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var B,f,g;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,x,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const I=["OnlyBackButton","OnlyPath","BackAndPath","LargeBrand2"],C=Object.freeze(Object.defineProperty({__proto__:null,BackAndPath:i,LargeBrand2:c,OnlyBackButton:t,OnlyPath:d,__namedExportsOrder:I,default:N},Symbol.toStringTag,{value:"Module"}));export{C as B,c as L,d as O,t as a,i as b};
