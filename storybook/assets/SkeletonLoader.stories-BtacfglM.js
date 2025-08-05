import{r as F,j as e}from"./iframe-sfm2iiNv.js";import{u as G}from"./floating-ui.react-B0KwFFiC.js";import{S as J}from"./index-B-pTjrYB.js";import{c as Q}from"./lite-DaUVFjkg.js";import{u as U}from"./Spinner-CN5uxT_N.js";import{P as t}from"./Paragraph-r4OMux9D.js";import{H as p}from"./Heading-CGCZLqmt.js";import{B as X}from"./Button-BwQva4Hh.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNAPc2gN.js";import"./index-jZE8LZbC.js";const Y=F.forwardRef(function({asChild:h,className:m,height:I,style:g,variant:x="rectangle",width:u,...N},W){const D=h?J:"span",v=x==="text",K=U("ds-skeleton-opacity-fade"),O=G([K,W]);return e.jsx(D,{"aria-hidden":"true",className:Q("ds-skeleton",m),"data-text":v?"-".repeat(Number(u)||1):void 0,"data-variant":x,ref:O,style:v?g:{width:u,height:I,...g},...N})}),r=Y;try{r.displayName="SkeletonLoader",r.__docgenInfo={description:"",displayName:"SkeletonLoader",props:{width:{defaultValue:null,description:"The width of the component",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"The height of the component",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"'rectangle'"},description:"The shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circle"'},{value:'"rectangle"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},characters:{defaultValue:null,description:"",name:"characters",required:!1,type:{name:"number"}}}}}catch{}const ce={title:"Components/Skeleton",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Skeleton indicates loading content, mimicking the shape of the content."}}},argTypes:{width:{control:"text",description:'The width of the component (e.g., "100px", "50%", 200)'},height:{control:"text",description:'The height of the component (e.g., "100px", "2em", 100)'},variant:{control:"select",options:["rectangle","circle","text"],description:"The shape variant",defaultValue:"rectangle"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},characters:{control:"number",description:"Sets width based on character count (for text variant)",if:{arg:"variant",eq:"text"}},children:{control:!1,description:"Optional children for sizing or composition"}}},n={name:"Basic Rectangle",args:{variant:"rectangle",width:200,height:100}},i={name:"Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(r,{variant:"circle",width:"50px",height:"50px"}),e.jsx(r,{variant:"rectangle",width:"100px",height:"50px"}),e.jsx(t,{children:e.jsx(r,{variant:"text",characters:10})})]})},s={name:"Composed Layout",render:()=>e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx(r,{height:"150px"}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"5px 0 5px 0"},children:[e.jsx(r,{variant:"circle",width:"30px",height:"30px"}),e.jsx(p,{level:3,"data-size":"md",children:e.jsx(r,{variant:"text",width:"80%"})})]}),e.jsx(r,{variant:"text",characters:140})]})},o={name:"Sized By Children",render:a=>{const{variant:h,asChild:m}=a;return e.jsxs(r,{variant:h,asChild:m,children:[e.jsx(t,{children:"Her er en tekst som blir sendt inn som barn av en Skeleton."}),e.jsx(t,{children:"Se hvordan Skeleton da dekker den samlede bredden og høyden til barna."}),e.jsx(X,{children:"Knapp"})]})},args:{variant:"rectangle"}},d={name:"Mimicking Text Content",render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(p,{level:4,children:"En tittel"}),e.jsx(t,{"data-size":"sm",children:"Her er en paragraf som går over flere linjer"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(p,{level:4,children:e.jsx(r,{variant:"text",width:"60%"})}),e.jsx(t,{"data-size":"sm",children:e.jsx(r,{variant:"text",characters:40})})]})]})},c={name:"Text (Characters Prop)",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{children:"Mimicking text lines using `characters` prop:"}),e.jsx(r,{...a,variant:"text",characters:a.characters||20}),e.jsx(r,{...a,variant:"text",characters:a.characters?a.characters+15:35}),e.jsx(r,{...a,variant:"text",characters:a.characters?a.characters+10:30})]}),args:{variant:"text",characters:25}},l={render:a=>e.jsx(r,{...a,children:e.jsx(p,{level:2,"data-size":"lg",children:"Placeholder Heading"})}),args:{asChild:!0},name:"As Child (Heading)"};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Basic Rectangle',
  args: {
    variant: 'rectangle',
    width: 200,
    height: 100
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,j,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>\r
      <SkeletonLoader variant="circle" width="50px" height="50px" />\r
      <SkeletonLoader variant="rectangle" width="100px" height="50px" />\r
      <Paragraph>\r
        <SkeletonLoader variant="text" characters={10} />\r
      </Paragraph>\r
    </div>
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,H,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Composed Layout',
  render: () => <div style={{
    maxWidth: '300px'
  }}>\r
      <SkeletonLoader height="150px" /> \r
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      padding: '5px 0 5px 0'
    }}>\r
        <SkeletonLoader variant="circle" width="30px" height="30px" />\r
        <Heading level={3} data-size="md"> \r
          <SkeletonLoader variant="text" width="80%" /> \r
        </Heading>\r
      </div>\r
      <SkeletonLoader variant="text" characters={140} /> \r
    </div>
}`,...(w=(H=s.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var P,b,z;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sized By Children',
  render: args => {
    const {
      variant,
      asChild
    } = args;
    return <SkeletonLoader variant={variant} asChild={asChild}>\r
        {/* Content inside determines size */}\r
        <Paragraph>\r
          Her er en tekst som blir sendt inn som barn av en Skeleton.\r
        </Paragraph>\r
        <Paragraph>\r
          Se hvordan Skeleton da dekker den samlede bredden og høyden til barna.\r
        </Paragraph>\r
        <Button>Knapp</Button>\r
      </SkeletonLoader>;
  },
  args: {
    variant: 'rectangle'
  }
}`,...(z=(b=o.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var T,B,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Mimicking Text Content',
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>\r
      <div style={{
      flex: '1 1 200px'
    }}>\r
        <Heading level={4}>En tittel</Heading>\r
        <Paragraph data-size="sm">\r
          Her er en paragraf som går over flere linjer\r
        </Paragraph>\r
      </div>\r
      <div style={{
      flex: '1 1 200px'
    }}>\r
        {/* Mimic Heading size */}\r
        <Heading level={4}>\r
          <SkeletonLoader variant="text" width="60%" />\r
        </Heading>\r
        <Paragraph data-size="sm">\r
          <SkeletonLoader variant="text" characters={40} />\r
        </Paragraph>\r
      </div>\r
    </div>
}`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var R,_,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Text (Characters Prop)',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>\r
      <Paragraph>Mimicking text lines using \`characters\` prop:</Paragraph>\r
      <SkeletonLoader {...args} variant="text" characters={args.characters || 20} />\r
      <SkeletonLoader {...args} variant="text" characters={args.characters ? args.characters + 15 : 35} />\r
      <SkeletonLoader {...args} variant="text" characters={args.characters ? args.characters + 10 : 30} />\r
    </div>,
  args: {
    variant: 'text',
    characters: 25
  }
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var q,A,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <SkeletonLoader {...args}>\r
      <Heading level={2} data-size="lg">Placeholder Heading</Heading>\r
    </SkeletonLoader>,
  args: {
    asChild: true
  },
  name: 'As Child (Heading)'
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const le=["BasicRectangle","Variants","ComposedLayout","SizedByChildren","MimickingText","TextWithCharacters","AsChildHeading"];export{l as AsChildHeading,n as BasicRectangle,s as ComposedLayout,d as MimickingText,o as SizedByChildren,c as TextWithCharacters,i as Variants,le as __namedExportsOrder,ce as default};
