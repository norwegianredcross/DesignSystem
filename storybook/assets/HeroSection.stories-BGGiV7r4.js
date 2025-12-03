import{r as Z,j as a,h as ee}from"./iframe-D8k-pviV.js";import{H as te}from"./heading-BU4rbpcS.js";import{P as N}from"./index-DZgusc8s.js";import{B as A}from"./index-fECx9Q35.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C5ntc-SB.js";import"./lite-DaUVFjkg.js";import"./paragraph-B2ojz_tV.js";import"./button-C6eSOc-h.js";import"./spinner-B4sn5JhY.js";import"./use-merge-refs-DP5LOLAn.js";const S=Z.forwardRef((o,s)=>a.jsx(te,{ref:s,...o}));S.displayName="Heading";try{S.displayName="Heading",S.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"2"},description:"Heading level. This will translate into any h1-6 level unless `asChild` is `true`",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},"data-size":{defaultValue:{value:"'md'"},description:"Changes text sizing",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"2xs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const t={};var B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var _;function ae(){return _||(_=1,(function(o){(function(){var s={}.hasOwnProperty;function i(){for(var e="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(e=c(e,d(n)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var n in e)s.call(e,n)&&e[n]&&(r=c(r,n));return r}function c(e,r){return r?e?e+" "+r:e+r:e}o.exports?(i.default=i,o.exports=i):window.classNames=i})()})(B)),B.exports}var re=ae();const p=ee(re),T=({title:o,description:s,primaryButtonText:i,secondaryButtonText:d,onPrimaryClick:c,onSecondaryClick:e,backgroundImage:r,descriptionPosition:n="bottom",image:u,imageAlt:w="",layout:C="centered",cards:H=[]})=>{const l=C==="side-by-side",m=C==="cards";return a.jsxs("section",{className:p(t.container,{[t.containerSideBySide]:l,[t.containerCards]:m}),children:[r&&!l&&!m&&a.jsx("div",{className:t.backgroundImageWrapper,"aria-hidden":"true",children:a.jsx("img",{src:r,alt:"",className:t.backgroundImage})}),a.jsxs("div",{className:p(t.content,{[t.contentSideBySide]:l,[t.contentWrapperCards]:m}),children:[a.jsxs("div",{className:p(t.textContainer,{[t.textContainerSideBySide]:l}),children:[n==="top"&&a.jsx(N,{"data-size":"xl",children:s}),a.jsx(S,{level:2,"data-size":"2xl",children:o}),n==="bottom"&&a.jsx(N,{"data-size":"xl",children:s})]}),a.jsxs("div",{className:p(t.buttonContainer,{[t.buttonContainerSideBySide]:l}),children:[i&&a.jsx(A,{variant:"primary",onClick:c,children:i}),d&&a.jsx(A,{variant:"secondary",onClick:e,children:d})]})]}),u&&C==="bottom-image"&&a.jsx("img",{src:u,alt:w,className:t.bottomImage}),u&&l&&a.jsx("img",{src:u,alt:w,className:t.sideImage}),m&&H.length>0&&a.jsx("div",{className:t.cardGrid,children:H.slice(0,4).map((j,Y)=>a.jsx("img",{src:j.imageUrl,alt:j.imageAlt||"",className:t.cardImage},Y))})]})};try{T.displayName="HeroSection",T.__docgenInfo={description:"",displayName:"HeroSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"centered"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"bottom-image"'},{value:'"side-by-side"'},{value:'"cards"'}]}},cards:{defaultValue:{value:"[]"},description:"",name:"cards",required:!1,type:{name:"HeroCard[]"}}}}}catch{}const ye={title:"Components/HeroSection",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]},layout:{control:"radio",options:["centered","bottom-image","side-by-side","cards"]}}},g={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"centered"}},y={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"/herosectionbg.png.png",descriptionPosition:"top",layout:"centered"}},h={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top",layout:"centered"}},f={args:{title:"Hero with Image Below",description:"This hero section features a prominent image below the call to action buttons.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/testimg.png",imageAlt:"Team working together",layout:"bottom-image"}},x={args:{title:"Side by Side Layout",description:"This layout places the text content on the left and the image on the right, filling the full height of the container.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/testimg.png",imageAlt:"Side image",layout:"side-by-side"}},v={args:{title:"Hero with Cards",description:"This hero section displays four cards below the main content, creating a grid of visuals.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"cards",cards:[{imageUrl:"/card1.png",imageAlt:"Card 1"},{imageUrl:"/card2.png",imageAlt:"Card 2"},{imageUrl:"/card3.png",imageAlt:"Card 3"},{imageUrl:"/card4.png",imageAlt:"Card 4"}]}},b={args:{title:"Hero Heading",description:"This is a hero section without buttons.",layout:"centered"}};var q,I,V;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'centered'
  }
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var k,P,E;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: '/herosectionbg.png.png',
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(E=(P=y.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var U,W,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var D,O,G;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: '/testimg.png',
    imageAlt: 'Team working together',
    layout: 'bottom-image'
  }
}`,...(G=(O=f.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var R,L,F;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: '/testimg.png',
    imageAlt: 'Side image',
    layout: 'side-by-side'
  }
}`,...(F=(L=x.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var $,J,K;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Cards',
    description: 'This hero section displays four cards below the main content, creating a grid of visuals.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'cards',
    cards: [{
      imageUrl: '/card1.png',
      imageAlt: 'Card 1'
    }, {
      imageUrl: '/card2.png',
      imageAlt: 'Card 2'
    }, {
      imageUrl: '/card3.png',
      imageAlt: 'Card 3'
    }, {
      imageUrl: '/card4.png',
      imageAlt: 'Card 4'
    }]
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,X;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered'
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const he=["Default","WithBackgroundImage","DescriptionTop","WithBottomImage","SideBySide","WithCards","NoButtons"];export{g as Default,h as DescriptionTop,b as NoButtons,x as SideBySide,y as WithBackgroundImage,f as WithBottomImage,v as WithCards,he as __namedExportsOrder,ye as default};
