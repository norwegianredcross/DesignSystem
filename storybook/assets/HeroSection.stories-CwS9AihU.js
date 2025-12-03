import{r as Z,j as a,h as ee}from"./iframe-BdlBVaMh.js";import{H as te}from"./heading-DstplfmI.js";import{P as w}from"./index-D-BKqzwW.js";import{B as A}from"./index-CwQn3zYp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B0SzS9-D.js";import"./lite-DaUVFjkg.js";import"./paragraph-Cyb83jPL.js";import"./button-CgDlDh-U.js";import"./spinner-BnHiu9Ma.js";import"./use-merge-refs-CuM6pwJa.js";const _=Z.forwardRef((o,s)=>a.jsx(te,{ref:s,...o}));_.displayName="Heading";try{_.displayName="Heading",_.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"2"},description:"Heading level. This will translate into any h1-6 level unless `asChild` is `true`",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},"data-size":{defaultValue:{value:"'md'"},description:"Changes text sizing",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"2xs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ae="_container_j6stv_1",ne="_containerSideBySide_j6stv_15",re="_containerCards_j6stv_22",oe="_backgroundImageWrapper_j6stv_29",ie="_backgroundImage_j6stv_29",se="_content_j6stv_43",de="_contentSideBySide_j6stv_55",ce="_contentWrapperCards_j6stv_61",le="_textContainer_j6stv_70",me="_textContainerSideBySide_j6stv_78",ue="_buttonContainer_j6stv_82",pe="_buttonContainerSideBySide_j6stv_89",ge="_bottomImage_j6stv_93",ye="_sideImage_j6stv_103",he="_cardGrid_j6stv_113",ve="_cardImage_j6stv_135",t={container:ae,containerSideBySide:ne,containerCards:re,backgroundImageWrapper:oe,backgroundImage:ie,content:se,contentSideBySide:de,contentWrapperCards:ce,textContainer:le,textContainerSideBySide:me,buttonContainer:ue,buttonContainerSideBySide:pe,bottomImage:ge,sideImage:ye,cardGrid:he,cardImage:ve};var C={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var H;function fe(){return H||(H=1,(function(o){(function(){var s={}.hasOwnProperty;function i(){for(var e="",n=0;n<arguments.length;n++){var r=arguments[n];r&&(e=l(e,c(r)))}return e}function c(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var r in e)s.call(e,r)&&e[r]&&(n=l(n,r));return n}function l(e,n){return n?e?e+" "+n:e+n:e}o.exports?(i.default=i,o.exports=i):window.classNames=i})()})(C)),C.exports}var Se=fe();const p=ee(Se),B=({title:o,description:s,primaryButtonText:i,secondaryButtonText:c,onPrimaryClick:l,onSecondaryClick:e,backgroundImage:n,descriptionPosition:r="bottom",image:m,imageAlt:T="",layout:b="centered",cards:j=[]})=>{const d=b==="side-by-side",u=b==="cards";return a.jsxs("section",{className:p(t.container,{[t.containerSideBySide]:d,[t.containerCards]:u}),children:[n&&!d&&!u&&a.jsx("div",{className:t.backgroundImageWrapper,"aria-hidden":"true",children:a.jsx("img",{src:n,alt:"",className:t.backgroundImage})}),a.jsxs("div",{className:p(t.content,{[t.contentSideBySide]:d,[t.contentWrapperCards]:u}),children:[a.jsxs("div",{className:p(t.textContainer,{[t.textContainerSideBySide]:d}),children:[r==="top"&&a.jsx(w,{"data-size":"xl",children:s}),a.jsx(_,{level:2,"data-size":"2xl",children:o}),r==="bottom"&&a.jsx(w,{"data-size":"xl",children:s})]}),a.jsxs("div",{className:p(t.buttonContainer,{[t.buttonContainerSideBySide]:d}),children:[i&&a.jsx(A,{variant:"primary",onClick:l,children:i}),c&&a.jsx(A,{variant:"secondary",onClick:e,children:c})]})]}),m&&b==="bottom-image"&&a.jsx("img",{src:m,alt:T,className:t.bottomImage}),m&&d&&a.jsx("img",{src:m,alt:T,className:t.sideImage}),u&&j.length>0&&a.jsx("div",{className:t.cardGrid,children:j.slice(0,4).map((I,Y)=>a.jsx("img",{src:I.imageUrl,alt:I.imageAlt||"",className:t.cardImage},Y))})]})};try{B.displayName="HeroSection",B.__docgenInfo={description:"",displayName:"HeroSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"centered"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"bottom-image"'},{value:'"side-by-side"'},{value:'"cards"'}]}},cards:{defaultValue:{value:"[]"},description:"",name:"cards",required:!1,type:{name:"HeroCard[]"}}}}}catch{}const ke={title:"Components/HeroSection",component:B,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]},layout:{control:"radio",options:["centered","bottom-image","side-by-side","cards"]}}},g={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"centered"}},y={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"./herosectionbg.png",descriptionPosition:"top",layout:"centered"}},h={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top",layout:"centered"}},v={args:{title:"Hero with Image Below",description:"This hero section features a prominent image below the call to action buttons.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"./testimg.png",imageAlt:"Team working together",layout:"bottom-image"}},f={args:{title:"Side by Side Layout",description:"This layout places the text content on the left and the image on the right, filling the full height of the container.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"./testimg.png",imageAlt:"Side image",layout:"side-by-side"}},S={args:{title:"Hero with Cards",description:"This hero section displays four cards below the main content, creating a grid of visuals.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"cards",cards:[{imageUrl:"./card1.png",imageAlt:"Card 1"},{imageUrl:"./card2.png",imageAlt:"Card 2"},{imageUrl:"./card3.png",imageAlt:"Card 3"},{imageUrl:"./card4.png",imageAlt:"Card 4"}]}},x={args:{title:"Hero Heading",description:"This is a hero section without buttons.",layout:"centered"}};var k,N,q;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var $,W,P;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(P=(W=h.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var R,L,z;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Team working together',
    layout: 'bottom-image'
  }
}`,...(z=(L=v.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var G,D,O;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Side image',
    layout: 'side-by-side'
  }
}`,...(O=(D=f.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var F,J,K;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,X;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered'
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ne=["Default","WithBackgroundImage","DescriptionTop","WithBottomImage","SideBySide","WithCards","NoButtons"];export{g as Default,h as DescriptionTop,x as NoButtons,f as SideBySide,y as WithBackgroundImage,v as WithBottomImage,S as WithCards,Ne as __namedExportsOrder,ke as default};
