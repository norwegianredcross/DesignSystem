import{r as c,j as n}from"./iframe-sfm2iiNv.js";import{S as j}from"./index-B-pTjrYB.js";import{c as w}from"./lite-DaUVFjkg.js";import{c as A}from"./person-BB-gzSJt.js";import"./preload-helper-C1FmrZbK.js";const T=c.forwardRef(function({"aria-label":l,variant:O="circle",className:I,children:o,initials:S,...E},V){const d=o&&typeof o!="string",_=d?j:c.Fragment;return n.jsx("span",{ref:V,className:w("ds-avatar",I),"data-variant":O,"data-initials":S,role:"img","aria-label":l,...E,children:n.jsx(_,{...d?{"aria-hidden":!0}:{},children:o})})}),i=c.forwardRef((s,l)=>n.jsx(T,{ref:l,...s}));i.displayName="Avatar";try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"The name of the person the avatar represents.",name:"aria-label",required:!0,type:{name:"string"}},"data-size":{defaultValue:null,description:"The size of the avatar.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"'circle'"},description:"The shape of the avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},initials:{defaultValue:null,description:"Initials to display inside the avatar.",name:"initials",required:!1,type:{name:"string"}},children:{defaultValue:null,description:'Image, icon or initials to display inside the avatar.\n\nGets `aria-hidden="true"`',name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const F={title:"Components/Avatar",component:i,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},a={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},e={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},r={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:n.jsx("img",{src:A,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},t={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,x,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,N,q;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(q=(N=t.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const G=["Default","WithInitials","WithImage","Square"];export{a as Default,t as Square,r as WithImage,e as WithInitials,G as __namedExportsOrder,F as default};
