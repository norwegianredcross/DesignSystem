import{r as c,j as e}from"./iframe-DzHbI1Bv.js";import{S as w}from"./index-B-a3BGFc.js";import{c as A}from"./lite-DaUVFjkg.js";import{c as C}from"./person-BB-gzSJt.js";import"./preload-helper-Dp1pzeXC.js";const T=c.forwardRef(function({"aria-label":l,variant:O="circle",className:I,children:a,initials:S,...E},V){const d=a&&typeof a!="string",_=a&&typeof a=="string",j=d?w:c.Fragment;return e.jsx("span",{ref:V,className:A("ds-avatar",I),"data-variant":O,"data-initials":S,role:"img","aria-label":l,...E,children:e.jsx(j,{...d?{"aria-hidden":!0}:{},children:_?e.jsx("span",{children:a}):a})})}),i=c.forwardRef((o,l)=>e.jsx(T,{ref:l,...o}));i.displayName="Avatar";try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:null,description:"The name of the person the avatar represents.",name:"aria-label",required:!0,type:{name:"string"}},"data-size":{defaultValue:null,description:"The size of the avatar.",name:"data-size",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"'circle'"},description:"The shape of the avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},initials:{defaultValue:null,description:"Initials to display inside the avatar.",name:"initials",required:!1,type:{name:"string"}},children:{defaultValue:null,description:'Image, icon or initials to display inside the avatar.\n\nGets `aria-hidden="true"`',name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const G={title:"Components/Avatar",component:i,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},r={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},t={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},n={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:C,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},s={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,N,q;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(q=(N=s.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const P=["Default","WithInitials","WithImage","Square"];export{r as Default,s as Square,n as WithImage,t as WithInitials,P as __namedExportsOrder,G as default};
