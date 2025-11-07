import{r as c,j as s}from"./iframe-BHNwM2Px.js";import{S as V}from"./index-D3MVKXs2.js";import{c as A}from"./lite-DaUVFjkg.js";const C=c.forwardRef(function({"aria-label":l,variant:O="circle",className:q,children:a,initials:_,...I},j){const d=a&&typeof a!="string",E=a&&typeof a=="string",w=d?V:c.Fragment;return s.jsx("span",{ref:j,className:A("ds-avatar",q),"data-variant":O,"data-initials":_,role:"img","aria-label":l,...I,children:s.jsx(w,{...d?{"aria-hidden":!0}:{},children:E?s.jsx("span",{children:a}):a})})}),i=c.forwardRef((o,l)=>s.jsx(C,{ref:l,...o}));i.displayName="Avatar";try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:null,description:"The name of the person the avatar represents.",name:"aria-label",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"The size of the avatar.",name:"data-size",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"'circle'"},description:"The shape of the avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},initials:{defaultValue:null,description:"Initials to display inside the avatar.",name:"initials",required:!1,type:{name:"string"}},children:{defaultValue:null,description:'Image, icon or initials to display inside the avatar.\n\nGets `aria-hidden="true"`',name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const D=""+new URL("person2-CvwgDb6X.jpg",import.meta.url).href,T={title:"Components/Avatar",component:i,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},e={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},r={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},t={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:s.jsx("img",{src:D,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},n={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,N,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const z=["Default","WithInitials","WithImage","Square"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Square:n,WithImage:t,WithInitials:r,__namedExportsOrder:z,default:T},Symbol.toStringTag,{value:"Module"}));export{P as A,e as D,n as S,t as W,r as a};
