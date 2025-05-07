import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-D4lIrffr.js";import{c as W}from"./lite-DaUVFjkg.js";const j=y.forwardRef(function({"data-color":t="info",className:I,...N},D){return w.jsx("div",{className:W("ds-alert",I),"data-color":t,ref:D,...N})}),s=y.forwardRef((c,t)=>w.jsx(j,{ref:t,...c}));s.displayName="Alert";s.__docgenInfo={description:"",methods:[],displayName:"Alert",composes:["DigDirAlertProps"]};const v={title:"Components/Alert",component:s,tags:["autodocs"],parameters:{},argTypes:{"data-color":{control:"select",options:["info","warning","success","danger"],description:"The visual style of the alert.",table:{category:"Appearance"}},children:{control:"text",description:"The content of the alert."},title:{control:"text",description:"The title of the alert."}}},e={name:"Example Info",args:{"data-color":"info",children:"This is an informational alert.",title:"Information"}},r={name:"Example Warning",args:{"data-color":"warning",children:"Proceed with caution.",title:"Warning"}},a={name:"Example Success",args:{"data-color":"success",children:"Operation completed successfully.",title:"Success"}},o={name:"Example Danger",args:{"data-color":"danger",children:"An error occurred.",title:"Error"}},n={name:"Example No Title",args:{"data-color":"info",children:"This alert has no title."}};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Example Info',
  args: {
    'data-color': 'info',
    children: 'This is an informational alert.',
    title: 'Information'
  } as AlertProps
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Warning',
  args: {
    'data-color': 'warning',
    children: 'Proceed with caution.',
    title: 'Warning'
  } as AlertProps
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Example Success',
  args: {
    'data-color': 'success',
    children: 'Operation completed successfully.',
    title: 'Success'
  } as AlertProps
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,A,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Danger',
  args: {
    'data-color': 'danger',
    children: 'An error occurred.',
    title: 'Error'
  } as AlertProps
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var T,S,P;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Example No Title',
  args: {
    'data-color': 'info',
    children: 'This alert has no title.'
  } as AlertProps
}`,...(P=(S=n.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const b=["Info","Warning","Success","Danger","NoTitle"];export{o as Danger,e as Info,n as NoTitle,a as Success,r as Warning,b as __namedExportsOrder,v as default};
