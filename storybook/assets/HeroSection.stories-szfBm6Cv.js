import{r as Z,j as a,h as ee}from"./iframe-CBGaWaW7.js";import{H as te}from"./heading-DKkPspis.js";import{P as w}from"./index-BUMK5V9N.js";import{B as k}from"./index-CotA_VjU.js";import"./preload-helper-u0ftyAaf.js";import"./index-CZinNVLW.js";import"./lite-DaUVFjkg.js";import"./paragraph-C3CKGnQx.js";import"./button-D8VkXX8s.js";import"./spinner-x1M3DBtB.js";import"./use-merge-refs-SrpU7KdC.js";const b=Z.forwardRef((o,s)=>a.jsx(te,{ref:s,...o}));b.displayName="Heading";try{b.displayName="Heading",b.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:null,description:"Required: Semantic heading level (1-6)",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},"data-size":{defaultValue:{value:"'md'"},description:"Changes text sizing",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"2xs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ae="_container_gsjvx_1",ne="_containerSideBySide_gsjvx_15",re="_containerCards_gsjvx_22",oe="_backgroundImageWrapper_gsjvx_29",ie="_backgroundImage_gsjvx_29",se="_content_gsjvx_43",de="_contentSideBySide_gsjvx_55",ce="_contentWrapperCards_gsjvx_61",le="_textContainer_gsjvx_70",me="_textContainerSideBySide_gsjvx_78",ue="_buttonContainer_gsjvx_82",pe="_buttonContainerSideBySide_gsjvx_89",ge="_bottomImage_gsjvx_93",ye="_sideImage_gsjvx_103",he="_cardGrid_gsjvx_113",xe="_cardImage_gsjvx_139",t={container:ae,containerSideBySide:ne,containerCards:re,backgroundImageWrapper:oe,backgroundImage:ie,content:se,contentSideBySide:de,contentWrapperCards:ce,textContainer:le,textContainerSideBySide:me,buttonContainer:ue,buttonContainerSideBySide:pe,bottomImage:ge,sideImage:ye,cardGrid:he,cardImage:xe};var C={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var A;function Se(){return A||(A=1,(function(o){(function(){var s={}.hasOwnProperty;function i(){for(var e="",n=0;n<arguments.length;n++){var r=arguments[n];r&&(e=l(e,c(r)))}return e}function c(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var r in e)s.call(e,r)&&e[r]&&(n=l(n,r));return n}function l(e,n){return n?e?e+" "+n:e+n:e}o.exports?(i.default=i,o.exports=i):window.classNames=i})()})(C)),C.exports}var fe=Se();const p=ee(fe),B=({title:o,description:s,primaryButtonText:i,secondaryButtonText:c,onPrimaryClick:l,onSecondaryClick:e,backgroundImage:n,descriptionPosition:r="bottom",image:m,imageAlt:j="",layout:_="centered",cards:T=[]})=>{const d=_==="side-by-side",u=_==="cards";return a.jsxs("section",{className:p(t.container,{[t.containerSideBySide]:d,[t.containerCards]:u}),children:[n&&!d&&!u&&a.jsx("div",{className:t.backgroundImageWrapper,"aria-hidden":"true",children:a.jsx("img",{src:n,alt:"",className:t.backgroundImage})}),a.jsxs("div",{className:p(t.content,{[t.contentSideBySide]:d,[t.contentWrapperCards]:u}),children:[a.jsxs("div",{className:p(t.textContainer,{[t.textContainerSideBySide]:d}),children:[r==="top"&&a.jsx(w,{"data-size":"xl",children:s}),a.jsx(b,{level:2,"data-size":"2xl",children:o}),r==="bottom"&&a.jsx(w,{"data-size":"xl",children:s})]}),a.jsxs("div",{className:p(t.buttonContainer,{[t.buttonContainerSideBySide]:d}),children:[i&&a.jsx(k,{variant:"primary",onClick:l,children:i}),c&&a.jsx(k,{variant:"secondary",onClick:e,children:c})]})]}),m&&_==="bottom-image"&&a.jsx("img",{src:m,alt:j,className:t.bottomImage}),m&&d&&a.jsx("img",{src:m,alt:j,className:t.sideImage}),u&&T.length>0&&a.jsx("div",{className:t.cardGrid,children:T.slice(0,4).map((I,Y)=>a.jsx("img",{src:I.imageUrl,alt:I.imageAlt||"",className:t.cardImage},Y))})]})};try{B.displayName="HeroSection",B.__docgenInfo={description:"",displayName:"HeroSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"centered"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"bottom-image"'},{value:'"side-by-side"'},{value:'"cards"'}]}},cards:{defaultValue:{value:"[]"},description:"",name:"cards",required:!1,type:{name:"HeroCard[]"}}}}}catch{}const He={title:"Components/HeroSection",component:B,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]},layout:{control:"radio",options:["centered","bottom-image","side-by-side","cards"]}}},g={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"centered"}},y={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"/DesignSystem/storybook/herosectionbg.png",descriptionPosition:"top",layout:"centered"}},h={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top",layout:"centered"}},x={args:{title:"Hero with Image Below",description:"This hero section features a prominent image below the call to action buttons.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Team working together",layout:"bottom-image"}},S={args:{title:"Side by Side Layout",description:"This layout places the text content on the left and the image on the right, filling the full height of the container.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Side image",layout:"side-by-side"}},f={args:{title:"Hero with Cards",description:"This hero section displays four cards below the main content, creating a grid of visuals.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"cards",cards:[{imageUrl:"/DesignSystem/storybook/card1.png",imageAlt:"Card 1"},{imageUrl:"/DesignSystem/storybook/card2.png",imageAlt:"Card 2"},{imageUrl:"/DesignSystem/storybook/card3.png",imageAlt:"Card 3"},{imageUrl:"/DesignSystem/storybook/card4.png",imageAlt:"Card 4"}]}},v={args:{title:"Hero Heading",description:"This is a hero section without buttons.",layout:"centered"}};var H,N,q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'centered'
  }
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,U,V;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: \`\${import.meta.env.BASE_URL}herosectionbg.png\`,
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var $,W,D;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(D=(W=h.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var P,R,L;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Team working together',
    layout: 'bottom-image'
  }
}`,...(L=(R=x.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,G,O;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Side image',
    layout: 'side-by-side'
  }
}`,...(O=(G=S.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var F,J,K;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Cards',
    description: 'This hero section displays four cards below the main content, creating a grid of visuals.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'cards',
    cards: [{
      imageUrl: \`\${import.meta.env.BASE_URL}card1.png\`,
      imageAlt: 'Card 1'
    }, {
      imageUrl: \`\${import.meta.env.BASE_URL}card2.png\`,
      imageAlt: 'Card 2'
    }, {
      imageUrl: \`\${import.meta.env.BASE_URL}card3.png\`,
      imageAlt: 'Card 3'
    }, {
      imageUrl: \`\${import.meta.env.BASE_URL}card4.png\`,
      imageAlt: 'Card 4'
    }]
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,X;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered'
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ne=["Default","WithBackgroundImage","DescriptionTop","WithBottomImage","SideBySide","WithCards","NoButtons"];export{g as Default,h as DescriptionTop,v as NoButtons,S as SideBySide,y as WithBackgroundImage,x as WithBottomImage,f as WithCards,Ne as __namedExportsOrder,He as default};
