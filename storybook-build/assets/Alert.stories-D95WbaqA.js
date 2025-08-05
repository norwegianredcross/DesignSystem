import{r as T,j as _}from"./iframe-sfm2iiNv.js";import{c as P}from"./lite-DaUVFjkg.js";import"./preload-helper-C1FmrZbK.js";const W=T.forwardRef(function({"data-color":c="info",className:w,...N},I){return _.jsx("div",{className:P("ds-alert",w),"data-color":c,ref:I,...N})}),t=T.forwardRef((s,c)=>_.jsx(W,{ref:c,...s}));t.displayName="Alert";try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:{value:"'info'"},description:"Sets color and icon.",name:"data-color",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const O={title:"Components/Alert",component:t,tags:["autodocs"],parameters:{},argTypes:{"data-color":{control:"select",options:["info","warning","success","danger"],description:"The visual style of the alert.",table:{category:"Appearance"}},children:{control:"text",description:"The content of the alert."},title:{control:"text",description:"The title of the alert."}}},e={name:"Example Info",args:{"data-color":"info",children:"This is an informational alert.",title:"Information"}},r={name:"Example Warning",args:{"data-color":"warning",children:"Proceed with caution.",title:"Warning"}},a={name:"Example Success",args:{"data-color":"success",children:"Operation completed successfully.",title:"Success"}},n={name:"Example Danger",args:{"data-color":"danger",children:"An error occurred.",title:"Error"}},o={name:"Example No Title",args:{"data-color":"info",children:"This alert has no title."}};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,A,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Danger',
  args: {
    'data-color': 'danger',
    children: 'An error occurred.',
    title: 'Error'
  } as AlertProps
}`,...(E=(A=n.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var y,S,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example No Title',
  args: {
    'data-color': 'info',
    children: 'This alert has no title.'
  } as AlertProps
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const R=["Info","Warning","Success","Danger","NoTitle"];export{n as Danger,e as Info,o as NoTitle,a as Success,r as Warning,R as __namedExportsOrder,O as default};
