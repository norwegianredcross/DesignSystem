import{g as le,j as a}from"./iframe-DPeXHJ7_.js";import{H as me}from"./index-CcHxwXgc.js";import{P as j}from"./index-DtdZMQCZ.js";import{B as E}from"./index-B110wVXu.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-BL62d-nP.js";import"./index-YMkpjAe8.js";import"./index-BnOp7Ter.js";const pe="_container_1s5c0_1",ue="_containerSideBySide_1s5c0_15",ge="_containerCards_1s5c0_22",ye="_backgroundImageWrapper_1s5c0_29",he="_backgroundImage_1s5c0_29",Se="_content_1s5c0_43",Be="_contentSideBySide_1s5c0_55",ve="_contentWrapperCards_1s5c0_61",be="_textContainer_1s5c0_70",Ce="_textContainerSideBySide_1s5c0_78",fe="_buttonContainer_1s5c0_82",xe="_buttonContainerSideBySide_1s5c0_89",_e="_bottomImage_1s5c0_93",Te="_sideImage_1s5c0_103",ke="_cardGrid_1s5c0_113",Ae="_cardImage_1s5c0_139",n={container:pe,containerSideBySide:ue,containerCards:ge,backgroundImageWrapper:ye,backgroundImage:he,content:Se,contentSideBySide:Be,contentWrapperCards:ve,textContainer:be,textContainerSideBySide:Ce,buttonContainer:fe,buttonContainerSideBySide:xe,bottomImage:_e,sideImage:Te,cardGrid:ke,cardImage:Ae};var T={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var H;function we(){return H||(H=1,(function(r){(function(){var i={}.hasOwnProperty;function t(){for(var e="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(e=l(e,d(s)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var s in e)i.call(e,s)&&e[s]&&(o=l(o,s));return o}function l(e,o){return o?e?e+" "+o:e+o:e}r.exports?(t.default=t,r.exports=t):window.classNames=t})()})(T)),T.exports}var Ie=we();const g=le(Ie),k=({title:r,description:i,primaryButtonText:t,secondaryButtonText:d,onPrimaryClick:l,onSecondaryClick:e,backgroundImage:o,descriptionPosition:s="bottom",image:p,imageAlt:A="",layout:_="centered",cards:w=[]})=>{const m=_==="side-by-side",u=_==="cards";return a.jsxs("section",{className:g(n.container,{[n.containerSideBySide]:m,[n.containerCards]:u}),children:[o&&!m&&!u&&a.jsx("div",{className:n.backgroundImageWrapper,"aria-hidden":"true",children:a.jsx("img",{src:o,alt:"",className:n.backgroundImage})}),a.jsxs("div",{className:g(n.content,{[n.contentSideBySide]:m,[n.contentWrapperCards]:u}),children:[a.jsxs("div",{className:g(n.textContainer,{[n.textContainerSideBySide]:m}),children:[s==="top"&&a.jsx(j,{"data-size":"xl",children:i}),a.jsx(me,{level:2,"data-size":"2xl",children:r}),s==="bottom"&&a.jsx(j,{"data-size":"xl",children:i})]}),a.jsxs("div",{className:g(n.buttonContainer,{[n.buttonContainerSideBySide]:m}),children:[t&&a.jsx(E,{variant:"primary",onClick:l,children:t}),d&&a.jsx(E,{variant:"secondary",onClick:e,children:d})]})]}),p&&_==="bottom-image"&&a.jsx("img",{src:p,alt:A,className:n.bottomImage}),p&&m&&a.jsx("img",{src:p,alt:A,className:n.sideImage}),u&&w.length>0&&a.jsx("div",{className:n.cardGrid,children:w.slice(0,4).map((I,de)=>a.jsx("img",{src:I.imageUrl,alt:I.imageAlt||"",className:n.cardImage},de))})]})};try{k.displayName="HeroSection",k.__docgenInfo={description:"",displayName:"HeroSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"centered"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"bottom-image"'},{value:'"side-by-side"'},{value:'"cards"'}]}},cards:{defaultValue:{value:"[]"},description:"",name:"cards",required:!1,type:{name:"HeroCard[]"}}}}}catch{}const{expect:c,fn:N,userEvent:U,within:ce}=__STORYBOOK_MODULE_TEST__,De={title:"Components/HeroSection",component:k,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]},layout:{control:"radio",options:["centered","bottom-image","side-by-side","cards"]}}},y={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"centered"}},h={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"/DesignSystem/storybook/herosectionbg.png",descriptionPosition:"top",layout:"centered"}},S={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top",layout:"centered"}},B={args:{title:"Hero with Image Below",description:"This hero section features a prominent image below the call to action buttons.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Team working together",layout:"bottom-image"}},v={args:{title:"Side by Side Layout",description:"This layout places the text content on the left and the image on the right, filling the full height of the container.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Side image",layout:"side-by-side"}},b={parameters:{a11y:{test:"todo"}},args:{title:"Hero with Cards",description:"This hero section displays four cards below the main content, creating a grid of visuals.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"cards",cards:[{imageUrl:"/DesignSystem/storybook/card1.png",imageAlt:"Card 1"},{imageUrl:"/DesignSystem/storybook/card2.png",imageAlt:"Card 2"},{imageUrl:"/DesignSystem/storybook/card3.png",imageAlt:"Card 3"},{imageUrl:"/DesignSystem/storybook/card4.png",imageAlt:"Card 4"}]}},C={args:{title:"Hero Heading",description:"This is a hero section without buttons.",layout:"centered"}},f={name:"Test: Content And Actions Contract",tags:["!autodocs"],args:{title:"Bli frivillig",description:"Gjør en forskjell der du bor.",descriptionPosition:"top",primaryButtonText:"Finn aktivitet",secondaryButtonText:"Les mer",onPrimaryClick:N(),onSecondaryClick:N(),image:"/DesignSystem/storybook/testimg.png",imageAlt:"Frivillige i aktivitet",layout:"side-by-side"},play:async({canvasElement:r,args:i})=>{const t=ce(r),d=r.querySelector("section"),l=t.getByRole("heading",{level:2,name:"Bli frivillig"}),e=t.getByText("Gjør en forskjell der du bor.");await c(d).toBeInTheDocument(),await c(e.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await c(t.getByRole("img",{name:"Frivillige i aktivitet"})).toBeVisible(),await U.click(t.getByRole("button",{name:"Finn aktivitet"})),await U.click(t.getByRole("button",{name:"Les mer"})),await c(i.onPrimaryClick).toHaveBeenCalledTimes(1),await c(i.onSecondaryClick).toHaveBeenCalledTimes(1)}},x={name:"Test: Cards Are Capped At Four",tags:["!autodocs"],parameters:{a11y:{test:"todo"}},args:{title:"Aktiviteter",description:"Finn noe som passer for deg.",layout:"cards",cards:Array.from({length:5},(r,i)=>({imageUrl:`/DesignSystem/storybook/card${i%4+1}.png`,imageAlt:`Aktivitet ${i+1}`}))},play:async({canvasElement:r})=>{const i=ce(r).getAllByRole("img");await c(i).toHaveLength(4),await c(i.map(t=>t.getAttribute("alt"))).toEqual(["Aktivitet 1","Aktivitet 2","Aktivitet 3","Aktivitet 4"])}};var L,R,$;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'A bold headline that delivers',
    description: 'Go ahead and say just a little more about what you do.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    layout: 'centered'
  }
}`,...($=(R=y.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var D,P,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Background',
    description: 'Eyebrow text to label this content',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    backgroundImage: \`\${import.meta.env.BASE_URL}herosectionbg.png\`,
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var O,F,W;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Headline with Eyebrow',
    description: 'This is the eyebrow text appearing above the heading.',
    primaryButtonText: 'Call to action',
    descriptionPosition: 'top',
    layout: 'centered'
  }
}`,...(W=(F=S.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,G,z;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Team working together',
    layout: 'bottom-image'
  }
}`,...(z=(G=B.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var M,K,Y;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Side image',
    layout: 'side-by-side'
  }
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered'
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Test: Content And Actions Contract',
  tags: ['!autodocs'],
  args: {
    title: 'Bli frivillig',
    description: 'Gjør en forskjell der du bor.',
    descriptionPosition: 'top',
    primaryButtonText: 'Finn aktivitet',
    secondaryButtonText: 'Les mer',
    onPrimaryClick: fn(),
    onSecondaryClick: fn(),
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Frivillige i aktivitet',
    layout: 'side-by-side'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const section = canvasElement.querySelector('section');
    const heading = canvas.getByRole('heading', {
      level: 2,
      name: 'Bli frivillig'
    });
    const description = canvas.getByText('Gjør en forskjell der du bor.');
    await expect(section).toBeInTheDocument();
    await expect(description.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await expect(canvas.getByRole('img', {
      name: 'Frivillige i aktivitet'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Finn aktivitet'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Les mer'
    }));
    await expect(args.onPrimaryClick).toHaveBeenCalledTimes(1);
    await expect(args.onSecondaryClick).toHaveBeenCalledTimes(1);
  }
}`,...(oe=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,re,se;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Test: Cards Are Capped At Four',
  tags: ['!autodocs'],
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  args: {
    title: 'Aktiviteter',
    description: 'Finn noe som passer for deg.',
    layout: 'cards',
    cards: Array.from({
      length: 5
    }, (_, index) => ({
      imageUrl: \`\${import.meta.env.BASE_URL}card\${index % 4 + 1}.png\`,
      imageAlt: \`Aktivitet \${index + 1}\`
    }))
  },
  play: async ({
    canvasElement
  }) => {
    const images = within(canvasElement).getAllByRole('img');
    await expect(images).toHaveLength(4);
    await expect(images.map(image => image.getAttribute('alt'))).toEqual(['Aktivitet 1', 'Aktivitet 2', 'Aktivitet 3', 'Aktivitet 4']);
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Pe=["Default","WithBackgroundImage","DescriptionTop","WithBottomImage","SideBySide","WithCards","NoButtons","TestContentAndActionsContract","TestCardsAreCappedAtFour"];export{y as Default,S as DescriptionTop,C as NoButtons,v as SideBySide,x as TestCardsAreCappedAtFour,f as TestContentAndActionsContract,h as WithBackgroundImage,B as WithBottomImage,b as WithCards,Pe as __namedExportsOrder,De as default};
