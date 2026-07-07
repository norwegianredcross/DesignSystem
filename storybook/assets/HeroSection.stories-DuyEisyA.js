import{g as Y,j as a}from"./iframe-DWi1RkEL.js";import{H as Z}from"./index-B5kzdsoB.js";import{P as k}from"./index-B_zMpZEa.js";import{B as w}from"./index-f_fAF5KS.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-Cc__-FYY.js";import"./index-BH8p-OHL.js";import"./index-uCYguuIh.js";const ee="_container_1s5c0_1",te="_containerSideBySide_1s5c0_15",ae="_containerCards_1s5c0_22",ne="_backgroundImageWrapper_1s5c0_29",oe="_backgroundImage_1s5c0_29",re="_content_1s5c0_43",ie="_contentSideBySide_1s5c0_55",se="_contentWrapperCards_1s5c0_61",ce="_textContainer_1s5c0_70",de="_textContainerSideBySide_1s5c0_78",le="_buttonContainer_1s5c0_82",me="_buttonContainerSideBySide_1s5c0_89",ue="_bottomImage_1s5c0_93",pe="_sideImage_1s5c0_103",ge="_cardGrid_1s5c0_113",ye="_cardImage_1s5c0_139",t={container:ee,containerSideBySide:te,containerCards:ae,backgroundImageWrapper:ne,backgroundImage:oe,content:re,contentSideBySide:ie,contentWrapperCards:se,textContainer:ce,textContainerSideBySide:de,buttonContainer:le,buttonContainerSideBySide:me,bottomImage:ue,sideImage:pe,cardGrid:ge,cardImage:ye};var B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var A;function he(){return A||(A=1,(function(s){(function(){var c={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var o=arguments[n];o&&(e=l(e,d(o)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var o in e)c.call(e,o)&&e[o]&&(n=l(n,o));return n}function l(e,n){return n?e?e+" "+n:e+n:e}s.exports?(r.default=r,s.exports=r):window.classNames=r})()})(B)),B.exports}var Se=he();const p=Y(Se),C=({title:s,description:c,primaryButtonText:r,secondaryButtonText:d,onPrimaryClick:l,onSecondaryClick:e,backgroundImage:n,descriptionPosition:o="bottom",image:m,imageAlt:v="",layout:_="centered",cards:T=[]})=>{const i=_==="side-by-side",u=_==="cards";return a.jsxs("section",{className:p(t.container,{[t.containerSideBySide]:i,[t.containerCards]:u}),children:[n&&!i&&!u&&a.jsx("div",{className:t.backgroundImageWrapper,"aria-hidden":"true",children:a.jsx("img",{src:n,alt:"",className:t.backgroundImage})}),a.jsxs("div",{className:p(t.content,{[t.contentSideBySide]:i,[t.contentWrapperCards]:u}),children:[a.jsxs("div",{className:p(t.textContainer,{[t.textContainerSideBySide]:i}),children:[o==="top"&&a.jsx(k,{"data-size":"xl",children:c}),a.jsx(Z,{level:2,"data-size":"2xl",children:s}),o==="bottom"&&a.jsx(k,{"data-size":"xl",children:c})]}),a.jsxs("div",{className:p(t.buttonContainer,{[t.buttonContainerSideBySide]:i}),children:[r&&a.jsx(w,{variant:"primary",onClick:l,children:r}),d&&a.jsx(w,{variant:"secondary",onClick:e,children:d})]})]}),m&&_==="bottom-image"&&a.jsx("img",{src:m,alt:v,className:t.bottomImage}),m&&i&&a.jsx("img",{src:m,alt:v,className:t.sideImage}),u&&T.length>0&&a.jsx("div",{className:t.cardGrid,children:T.slice(0,4).map((I,X)=>a.jsx("img",{src:I.imageUrl,alt:I.imageAlt||"",className:t.cardImage},X))})]})};try{C.displayName="HeroSection",C.__docgenInfo={description:"",displayName:"HeroSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"centered"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"bottom-image"'},{value:'"side-by-side"'},{value:'"cards"'}]}},cards:{defaultValue:{value:"[]"},description:"",name:"cards",required:!1,type:{name:"HeroCard[]"}}}}}catch{}const Ie={title:"Components/HeroSection",component:C,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]},layout:{control:"radio",options:["centered","bottom-image","side-by-side","cards"]}}},g={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"centered"}},y={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"/DesignSystem/storybook/herosectionbg.png",descriptionPosition:"top",layout:"centered"}},h={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top",layout:"centered"}},S={args:{title:"Hero with Image Below",description:"This hero section features a prominent image below the call to action buttons.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Team working together",layout:"bottom-image"}},b={args:{title:"Side by Side Layout",description:"This layout places the text content on the left and the image on the right, filling the full height of the container.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Side image",layout:"side-by-side"}},f={parameters:{a11y:{test:"todo"}},args:{title:"Hero with Cards",description:"This hero section displays four cards below the main content, creating a grid of visuals.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"cards",cards:[{imageUrl:"/DesignSystem/storybook/card1.png",imageAlt:"Card 1"},{imageUrl:"/DesignSystem/storybook/card2.png",imageAlt:"Card 2"},{imageUrl:"/DesignSystem/storybook/card3.png",imageAlt:"Card 3"},{imageUrl:"/DesignSystem/storybook/card4.png",imageAlt:"Card 4"}]}},x={args:{title:"Hero Heading",description:"This is a hero section without buttons.",layout:"centered"}};var j,H,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'centered'
  }
}`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var U,E,q;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: \`\${import.meta.env.BASE_URL}herosectionbg.png\`,
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(q=(E=y.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var W,$,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(V=($=h.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var D,P,L;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Team working together',
    layout: 'bottom-image'
  }
}`,...(L=(P=S.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,G,O;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Side image',
    layout: 'side-by-side'
  }
}`,...(O=(G=b.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var z,F,J;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  // color-contrast in HeroSection component
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
}`,...(J=(F=f.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,M,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered'
  }
}`,...(Q=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const ke=["Default","WithBackgroundImage","DescriptionTop","WithBottomImage","SideBySide","WithCards","NoButtons"];export{g as Default,h as DescriptionTop,x as NoButtons,b as SideBySide,y as WithBackgroundImage,S as WithBottomImage,f as WithCards,ke as __namedExportsOrder,Ie as default};
