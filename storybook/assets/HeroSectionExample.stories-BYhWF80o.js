import{j as e}from"./iframe-D8k-pviV.js";import{B as u}from"./index-fECx9Q35.js";import"./preload-helper-Dp1pzeXC.js";import"./button-C6eSOc-h.js";import"./index-C5ntc-SB.js";import"./lite-DaUVFjkg.js";import"./spinner-B4sn5JhY.js";import"./use-merge-refs-DP5LOLAn.js";const T="_container_1yhy1_1",v="_backgroundImageWrapper_1yhy1_18",j="_backgroundImage_1yhy1_18",I="_content_1yhy1_33",S="_textContainer_1yhy1_43",w="_heading_1yhy1_53",N="_description_1yhy1_63",E="_buttonContainer_1yhy1_73",t={container:T,backgroundImageWrapper:v,backgroundImage:j,content:I,textContainer:S,heading:w,description:N,buttonContainer:E},r=({title:i,description:s,primaryButtonText:c,secondaryButtonText:d,onPrimaryClick:C,onSecondaryClick:B,backgroundImage:l,descriptionPosition:p="bottom"})=>e.jsxs("section",{className:t.container,children:[l&&e.jsx("div",{className:t.backgroundImageWrapper,"aria-hidden":"true",children:e.jsx("img",{src:l,alt:"",className:t.backgroundImage})}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t.textContainer,children:[p==="top"&&e.jsx("p",{className:t.description,children:s}),e.jsx("h2",{className:t.heading,children:i}),p==="bottom"&&e.jsx("p",{className:t.description,children:s})]}),e.jsxs("div",{className:t.buttonContainer,children:[c&&e.jsx(u,{variant:"primary",onClick:C,children:c}),d&&e.jsx(u,{variant:"secondary",onClick:B,children:d})]})]})]});try{r.displayName="HeroSectionExample",r.__docgenInfo={description:"",displayName:"HeroSectionExample",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const O={title:"Components/HeroSectionExample",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]}}},n={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary"}},o={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"/herosectionbg.png.png",descriptionPosition:"top"}},a={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top"}};var m,y,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary'
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: '/herosectionbg.png.png',
    descriptionPosition: 'top'
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var _,f,k;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top'
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const R=["Default","WithBackgroundImage","DescriptionTop"];export{n as Default,a as DescriptionTop,o as WithBackgroundImage,R as __namedExportsOrder,O as default};
