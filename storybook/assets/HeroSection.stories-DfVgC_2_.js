import{g as le,j as a}from"./iframe-Dak2elDt.js";import{H as me}from"./index-BTz1v34-.js";import{P as j}from"./index-DTijnIuT.js";import{B as E}from"./index-BntFlIaX.js";import"./preload-helper-u0ftyAaf.js";import"./tooltip-CV87Ccxb.js";import"./index-jXIZqS4E.js";import"./index-CiAI6dgC.js";const pe="_container_8wf3r_1",ue="_containerSideBySide_8wf3r_15",ge="_containerCards_8wf3r_22",ye="_backgroundImageWrapper_8wf3r_29",he="_backgroundImage_8wf3r_29",Se="_content_8wf3r_43",fe="_contentSideBySide_8wf3r_55",Be="_contentWrapperCards_8wf3r_61",ve="_textContainer_8wf3r_70",be="_textContainerSideBySide_8wf3r_78",Ce="_buttonContainer_8wf3r_82",xe="_buttonContainerSideBySide_8wf3r_89",_e="_bottomImage_8wf3r_93",Te="_sideImage_8wf3r_103",ke="_cardGrid_8wf3r_113",we="_cardImage_8wf3r_139",n={container:pe,containerSideBySide:ue,containerCards:ge,backgroundImageWrapper:ye,backgroundImage:he,content:Se,contentSideBySide:fe,contentWrapperCards:Be,textContainer:ve,textContainerSideBySide:be,buttonContainer:Ce,buttonContainerSideBySide:xe,bottomImage:_e,sideImage:Te,cardGrid:ke,cardImage:we};var T={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var H;function Ae(){return H||(H=1,(function(i){(function(){var r={}.hasOwnProperty;function t(){for(var e="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(e=l(e,d(s)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var s in e)r.call(e,s)&&e[s]&&(o=l(o,s));return o}function l(e,o){return o?e?e+" "+o:e+o:e}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(T)),T.exports}var Ie=Ae();const g=le(Ie),k=({title:i,description:r,primaryButtonText:t,secondaryButtonText:d,onPrimaryClick:l,onSecondaryClick:e,backgroundImage:o,descriptionPosition:s="bottom",image:p,imageAlt:w="",layout:_="centered",cards:A=[]})=>{const m=_==="side-by-side",u=_==="cards";return a.jsxs("section",{className:g(n.container,{[n.containerSideBySide]:m,[n.containerCards]:u}),children:[o&&!m&&!u&&a.jsx("div",{className:n.backgroundImageWrapper,"aria-hidden":"true",children:a.jsx("img",{src:o,alt:"",className:n.backgroundImage})}),a.jsxs("div",{className:g(n.content,{[n.contentSideBySide]:m,[n.contentWrapperCards]:u}),children:[a.jsxs("div",{className:g(n.textContainer,{[n.textContainerSideBySide]:m}),children:[s==="top"&&a.jsx(j,{"data-size":"xl",children:r}),a.jsx(me,{level:2,"data-size":"2xl",children:i}),s==="bottom"&&a.jsx(j,{"data-size":"xl",children:r})]}),a.jsxs("div",{className:g(n.buttonContainer,{[n.buttonContainerSideBySide]:m}),children:[t&&a.jsx(E,{variant:"primary",onClick:l,children:t}),d&&a.jsx(E,{variant:"secondary",onClick:e,children:d})]})]}),p&&_==="bottom-image"&&a.jsx("img",{src:p,alt:w,className:n.bottomImage}),p&&m&&a.jsx("img",{src:p,alt:w,className:n.sideImage}),u&&A.length>0&&a.jsx("div",{className:n.cardGrid,children:A.slice(0,4).map((I,de)=>a.jsx("img",{src:I.imageUrl,alt:I.imageAlt||"",className:n.cardImage},de))})]})};try{k.displayName="HeroSection",k.__docgenInfo={description:"",displayName:"HeroSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"() => void"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"() => void"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},descriptionPosition:{defaultValue:{value:"bottom"},description:"",name:"descriptionPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:""},description:"",name:"imageAlt",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"centered"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"bottom-image"'},{value:'"side-by-side"'},{value:'"cards"'}]}},cards:{defaultValue:{value:"[]"},description:"",name:"cards",required:!1,type:{name:"HeroCard[]"}}}}}catch{}const{expect:c,fn:N,userEvent:U,within:ce}=__STORYBOOK_MODULE_TEST__,De={title:"Components/HeroSection",component:k,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{descriptionPosition:{control:"radio",options:["top","bottom"]},layout:{control:"radio",options:["centered","bottom-image","side-by-side","cards"]}}},y={args:{title:"A bold headline that delivers",description:"Go ahead and say just a little more about what you do.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"centered"}},h={args:{title:"Hero with Background",description:"Eyebrow text to label this content",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",backgroundImage:"/DesignSystem/storybook/herosectionbg.png",descriptionPosition:"top",layout:"centered"}},S={args:{title:"Headline with Eyebrow",description:"This is the eyebrow text appearing above the heading.",primaryButtonText:"Call to action",descriptionPosition:"top",layout:"centered"}},f={args:{title:"Hero with Image Below",description:"This hero section features a prominent image below the call to action buttons.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Team working together",layout:"bottom-image"}},B={args:{title:"Side by Side Layout",description:"This layout places the text content on the left and the image on the right, filling the full height of the container.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",image:"/DesignSystem/storybook/testimg.png",imageAlt:"Side image",layout:"side-by-side"}},v={parameters:{a11y:{test:"todo"}},args:{title:"Hero with Cards",description:"This hero section displays four cards below the main content, creating a grid of visuals.",primaryButtonText:"Call to action",secondaryButtonText:"Secondary",layout:"cards",cards:[{imageUrl:"/DesignSystem/storybook/card1.png",imageAlt:"Card 1"},{imageUrl:"/DesignSystem/storybook/card2.png",imageAlt:"Card 2"},{imageUrl:"/DesignSystem/storybook/card3.png",imageAlt:"Card 3"},{imageUrl:"/DesignSystem/storybook/card4.png",imageAlt:"Card 4"}]}},b={args:{title:"Hero Heading",description:"This is a hero section without buttons.",layout:"centered"}},C={name:"Test: Content And Actions Contract",tags:["!autodocs"],args:{title:"Bli frivillig",description:"Gjør en forskjell der du bor.",descriptionPosition:"top",primaryButtonText:"Finn aktivitet",secondaryButtonText:"Les mer",onPrimaryClick:N(),onSecondaryClick:N(),image:"/DesignSystem/storybook/testimg.png",imageAlt:"Frivillige i aktivitet",layout:"side-by-side"},play:async({canvasElement:i,args:r})=>{const t=ce(i),d=i.querySelector("section"),l=t.getByRole("heading",{level:2,name:"Bli frivillig"}),e=t.getByText("Gjør en forskjell der du bor.");await c(d).toBeInTheDocument(),await c(e.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await c(t.getByRole("img",{name:"Frivillige i aktivitet"})).toBeVisible(),await U.click(t.getByRole("button",{name:"Finn aktivitet"})),await U.click(t.getByRole("button",{name:"Les mer"})),await c(r.onPrimaryClick).toHaveBeenCalledTimes(1),await c(r.onSecondaryClick).toHaveBeenCalledTimes(1)}},x={name:"Test: Cards Are Capped At Four",tags:["!autodocs"],parameters:{a11y:{test:"todo"}},args:{title:"Aktiviteter",description:"Finn noe som passer for deg.",layout:"cards",cards:Array.from({length:5},(i,r)=>({imageUrl:`/DesignSystem/storybook/card${r%4+1}.png`,imageAlt:`Aktivitet ${r+1}`}))},play:async({canvasElement:i})=>{const r=ce(i).getAllByRole("img");await c(r).toHaveLength(4),await c(r.map(t=>t.getAttribute("alt"))).toEqual(["Aktivitet 1","Aktivitet 2","Aktivitet 3","Aktivitet 4"])}};var L,R,$;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(F=S.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,G,z;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Hero with Image Below',
    description: 'This hero section features a prominent image below the call to action buttons.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Team working together',
    layout: 'bottom-image'
  }
}`,...(z=(G=f.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var M,K,Y;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Side by Side Layout',
    description: 'This layout places the text content on the left and the image on the right, filling the full height of the container.',
    primaryButtonText: 'Call to action',
    secondaryButtonText: 'Secondary',
    image: \`\${import.meta.env.BASE_URL}testimg.png\`,
    imageAlt: 'Side image',
    layout: 'side-by-side'
  }
}`,...(Y=(K=B.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Hero Heading',
    description: 'This is a hero section without buttons.',
    layout: 'centered'
  }
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Pe=["Default","WithBackgroundImage","DescriptionTop","WithBottomImage","SideBySide","WithCards","NoButtons","TestContentAndActionsContract","TestCardsAreCappedAtFour"];export{y as Default,S as DescriptionTop,b as NoButtons,B as SideBySide,x as TestCardsAreCappedAtFour,C as TestContentAndActionsContract,h as WithBackgroundImage,f as WithBottomImage,v as WithCards,Pe as __namedExportsOrder,De as default};
