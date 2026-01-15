import{j as b}from"./iframe-CQzEePbx.js";import{A as v}from"./index-C75WKG8i.js";const x="/storybook/assets/person2-CvwgDb6X.jpg",f={title:"Components/Avatar",component:v,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},a={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},e={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},r={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:b.jsx("img",{src:x,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},t={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}};var n,o,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const O=["Default","WithInitials","WithImage","Square"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Square:t,WithImage:r,WithInitials:e,__namedExportsOrder:O,default:f},Symbol.toStringTag,{value:"Module"}));export{E as A,a as D,t as S,r as W,e as a};
