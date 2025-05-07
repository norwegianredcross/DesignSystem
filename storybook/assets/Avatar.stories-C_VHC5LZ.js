import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-D4lIrffr.js";import{S as L}from"./index-Cb-ENzfG.js";import{c as V}from"./lite-DaUVFjkg.js";import{c as W}from"./person-B5yfi1K0.js";const _=l.forwardRef(function({"aria-label":s,variant:y="circle",className:q,children:i,initials:A,...D},z){const m=i&&typeof i!="string",B=m?L:l.Fragment;return o.jsx("span",{ref:z,className:V("ds-avatar",q),"data-variant":y,"data-initials":A,role:"img","aria-label":s,...D,children:o.jsx(B,{...m?{"aria-hidden":!0}:{},children:i})})}),c=l.forwardRef((d,s)=>o.jsx(_,{ref:s,...d}));c.displayName="Avatar";c.__docgenInfo={description:"",methods:[],displayName:"Avatar",composes:["DigDirAvatarProps"]};const $={title:"Components/Avatar",component:c,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},a={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},r={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},e={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:o.jsx("img",{src:W,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},t={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}},n={name:"Example Brand2 Large",args:{"aria-label":"Ola Nordmann","data-color":"brand2","data-size":"lg",children:"ON"}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,b,N;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(N=(b=e.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var O,E,S;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(S=(E=t.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var I,j,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Example Brand2 Large',
  args: {
    'aria-label': 'Ola Nordmann',
    'data-color': 'brand2',
    'data-size': 'lg',
    children: 'ON'
  }
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const k=["Default","WithInitials","WithImage","Square","Brand2Large"];export{n as Brand2Large,a as Default,t as Square,e as WithImage,r as WithInitials,k as __namedExportsOrder,$ as default};
