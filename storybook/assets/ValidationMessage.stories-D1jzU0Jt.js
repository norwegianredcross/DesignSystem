import{r as h,j as v}from"./iframe-Dv40QWHu.js";import{V as y}from"./tooltip-jy6F9jbP.js";import"./preload-helper-u0ftyAaf.js";import"./index-Bwq1UrUV.js";import"./index-DwDbYEVI.js";const t=h.forwardRef((e,n)=>v.jsx(y,{ref:n,...e}));t.displayName="ValidationMessage";try{t.displayName="ValidationMessage",t.__docgenInfo={description:"",displayName:"ValidationMessage",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:{value:"'danger'"},description:"Sets color and icon.",name:"data-color",required:!1,type:{name:"SeverityColors"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:_,within:x}=__STORYBOOK_MODULE_TEST__,S={title:"Components/ValidationMessage",component:t,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Text size"}}},s={args:{children:"Feltet er påkrevd."}},a={args:{children:"E-postadressen er ikke gyldig. Kontroller at adressen er skrevet riktig, for eksempel navn@example.com."}},r={name:"Test: Renders Message",args:{children:"Passordet må være minst 8 tegn."},play:async({canvasElement:e})=>{const f=x(e).getByText("Passordet må være minst 8 tegn.");_(f).toBeInTheDocument()}};var o,i,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Feltet er påkrevd.'
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'E-postadressen er ikke gyldig. Kontroller at adressen er skrevet riktig, for eksempel navn@example.com.'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Test: Renders Message',
  args: {
    children: 'Passordet må være minst 8 tegn.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText('Passordet må være minst 8 tegn.');
    expect(message).toBeInTheDocument();
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const z=["Default","LongMessage","TestRendersMessage"];export{s as Default,a as LongMessage,r as TestRendersMessage,z as __namedExportsOrder,S as default};
