import{r as c,j as e}from"./iframe-Csk3W67z.js";import{S as A}from"./index-CfHxkNiw.js";import{c as C}from"./lite-DaUVFjkg.js";import{c as D}from"./person-BB-gzSJt.js";import"./preload-helper-Dp1pzeXC.js";const V=c.forwardRef(function({"aria-label":l,variant:S="circle",className:E,children:a,initials:I,..._},j){const m=a&&typeof a!="string",w=a&&typeof a=="string",q=m?A:c.Fragment;return e.jsx("span",{ref:j,className:C("ds-avatar",E),"data-variant":S,"data-initials":I,role:"img","aria-label":l,..._,children:e.jsx(q,{...m?{"aria-hidden":!0}:{},children:w?e.jsx("span",{children:a}):a})})}),o=c.forwardRef((i,l)=>e.jsx(V,{ref:l,...i}));o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{}}}catch{}const P={title:"Components/Avatar",component:o,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},r={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},t={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},s={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:D,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},n={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,v,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var b,O,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(y=(O=n.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const $=["Default","WithInitials","WithImage","Square"];export{r as Default,n as Square,s as WithImage,t as WithInitials,$ as __namedExportsOrder,P as default};
