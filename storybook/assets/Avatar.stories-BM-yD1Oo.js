import{r as c,j as e}from"./iframe-BOPNQRcS.js";import{S as A}from"./index-6VuQ_pOC.js";import{c as V}from"./lite-DaUVFjkg.js";import{c as C}from"./person-BB-gzSJt.js";import"./preload-helper-Dp1pzeXC.js";const D=c.forwardRef(function({"aria-label":l,variant:I="circle",className:S,children:a,initials:q,...E},_){const d=a&&typeof a!="string",j=a&&typeof a=="string",w=d?A:c.Fragment;return e.jsx("span",{ref:_,className:V("ds-avatar",S),"data-variant":I,"data-initials":q,role:"img","aria-label":l,...E,children:e.jsx(w,{...d?{"aria-hidden":!0}:{},children:j?e.jsx("span",{children:a}):a})})}),s=c.forwardRef((o,l)=>e.jsx(D,{ref:l,...o}));s.displayName="Avatar";try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{children:{defaultValue:null,description:'Image, icon or initials to display inside the avatar.\n\nGets `aria-hidden="true"`',name:"children",required:!1,type:{name:"ReactNode"}},initials:{defaultValue:null,description:"Initials to display inside the avatar.",name:"initials",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"The shape of the avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}}}}}catch{}const G={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},r={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},t={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},n={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:C,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},i={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,x,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var y,b,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(O=(b=i.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const P=["Default","WithInitials","WithImage","Square"];export{r as Default,i as Square,n as WithImage,t as WithInitials,P as __namedExportsOrder,G as default};
