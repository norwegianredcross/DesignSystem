import{r as U,j as e}from"./iframe-CjNER_0n.js";import{S as F}from"./index-tMCjHYmG.js";import{c as G}from"./lite-DaUVFjkg.js";import{u as J}from"./spinner-DC_pCBMq.js";import{u as Q}from"./use-merge-refs-Bz1jlVhA.js";import{P as t}from"./paragraph-B_owJGcf.js";import{H as p}from"./heading-CfYS9OvC.js";import{B as X}from"./button-Oj-X5mN4.js";import"./preload-helper-Dp1pzeXC.js";const Y=U.forwardRef(function({asChild:h,className:m,height:I,style:g,variant:x="rectangle",width:u,...N},W){const D=h?F:"span",v=x==="text",K=J("ds-skeleton-opacity-fade"),O=Q([K,W]);return e.jsx(D,{"aria-hidden":"true",className:G("ds-skeleton",m),"data-text":v?"-".repeat(Number(u)||1):void 0,"data-variant":x,ref:O,style:v?g:{width:u,height:I,...g},...N})}),a=Y;try{a.displayName="SkeletonLoader",a.__docgenInfo={description:"",displayName:"SkeletonLoader",props:{width:{defaultValue:null,description:"The width of the component",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"The height of the component",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"'rectangle'"},description:"The shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circle"'},{value:'"rectangle"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},characters:{defaultValue:null,description:"@deprecated This prop has no effect. Use `width` or supply text as children instead",name:"characters",required:!1,type:{name:"number"}}}}}catch{}const de={title:"Components/Skeleton",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Skeleton indicates loading content, mimicking the shape of the content."}}},argTypes:{width:{control:"text",description:'The width of the component (e.g., "100px", "50%", 200)'},height:{control:"text",description:'The height of the component (e.g., "100px", "2em", 100)'},variant:{control:"select",options:["rectangle","circle","text"],description:"The shape variant",defaultValue:"rectangle"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},characters:{control:"number",description:"Sets width based on character count (for text variant)",if:{arg:"variant",eq:"text"}},children:{control:!1,description:"Optional children for sizing or composition"}}},n={name:"Basic Rectangle",args:{variant:"rectangle",width:200,height:100}},s={name:"Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(a,{variant:"circle",width:"50px",height:"50px"}),e.jsx(a,{variant:"rectangle",width:"100px",height:"50px"}),e.jsx(t,{children:e.jsx(a,{variant:"text",characters:10})})]})},i={name:"Composed Layout",render:()=>e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx(a,{height:"150px"}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"5px 0 5px 0"},children:[e.jsx(a,{variant:"circle",width:"30px",height:"30px"}),e.jsx(p,{level:3,"data-size":"md",children:e.jsx(a,{variant:"text",width:"80%"})})]}),e.jsx(a,{variant:"text",characters:140})]})},d={name:"Sized By Children",render:r=>{const{variant:h,asChild:m}=r;return e.jsxs(a,{variant:h,asChild:m,children:[e.jsx(t,{children:"Her er en tekst som blir sendt inn som barn av en Skeleton."}),e.jsx(t,{children:"Se hvordan Skeleton da dekker den samlede bredden og høyden til barna."}),e.jsx(X,{children:"Knapp"})]})},args:{variant:"rectangle"}},o={name:"Mimicking Text Content",render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(p,{level:4,children:"En tittel"}),e.jsx(t,{"data-size":"sm",children:"Her er en paragraf som går over flere linjer"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(p,{level:4,children:e.jsx(a,{variant:"text",width:"60%"})}),e.jsx(t,{"data-size":"sm",children:e.jsx(a,{variant:"text",characters:40})})]})]})},c={name:"Text (Characters Prop)",render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{children:"Mimicking text lines using `characters` prop:"}),e.jsx(a,{...r,variant:"text",characters:r.characters||20}),e.jsx(a,{...r,variant:"text",characters:r.characters?r.characters+15:35}),e.jsx(a,{...r,variant:"text",characters:r.characters?r.characters+10:30})]}),args:{variant:"text",characters:25}},l={render:r=>e.jsx(a,{...r,children:e.jsx(p,{level:2,"data-size":"lg",children:"Placeholder Heading"})}),args:{asChild:!0},name:"As Child (Heading)"};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Basic Rectangle',
  args: {
    variant: 'rectangle',
    width: 200,
    height: 100
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,j,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <SkeletonLoader variant="circle" width="50px" height="50px" />
      <SkeletonLoader variant="rectangle" width="100px" height="50px" />
      <Paragraph>
        <SkeletonLoader variant="text" characters={10} />
      </Paragraph>
    </div>
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,H,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Composed Layout',
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <SkeletonLoader height="150px" /> 
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      padding: '5px 0 5px 0'
    }}>
        <SkeletonLoader variant="circle" width="30px" height="30px" />
        <Heading level={3} data-size="md"> 
          <SkeletonLoader variant="text" width="80%" /> 
        </Heading>
      </div>
      <SkeletonLoader variant="text" characters={140} /> 
    </div>
}`,...(w=(H=i.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var P,b,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sized By Children',
  render: args => {
    const {
      variant,
      asChild
    } = args;
    return <SkeletonLoader variant={variant} asChild={asChild}>
        {/* Content inside determines size */}
        <Paragraph>
          Her er en tekst som blir sendt inn som barn av en Skeleton.
        </Paragraph>
        <Paragraph>
          Se hvordan Skeleton da dekker den samlede bredden og høyden til barna.
        </Paragraph>
        <Button>Knapp</Button>
      </SkeletonLoader>;
  },
  args: {
    variant: 'rectangle'
  }
}`,...(T=(b=d.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var z,B,V;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Mimicking Text Content',
  render: () => <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      <div style={{
      flex: '1 1 200px'
    }}>
        <Heading level={4}>En tittel</Heading>
        <Paragraph data-size="sm">
          Her er en paragraf som går over flere linjer
        </Paragraph>
      </div>
      <div style={{
      flex: '1 1 200px'
    }}>
        {/* Mimic Heading size */}
        <Heading level={4}>
          <SkeletonLoader variant="text" width="60%" />
        </Heading>
        <Paragraph data-size="sm">
          <SkeletonLoader variant="text" characters={40} />
        </Paragraph>
      </div>
    </div>
}`,...(V=(B=o.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var R,_,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Text (Characters Prop)',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Paragraph>Mimicking text lines using \`characters\` prop:</Paragraph>
      <SkeletonLoader {...args} variant="text" characters={args.characters || 20} />
      <SkeletonLoader {...args} variant="text" characters={args.characters ? args.characters + 15 : 35} />
      <SkeletonLoader {...args} variant="text" characters={args.characters ? args.characters + 10 : 30} />
    </div>,
  args: {
    variant: 'text',
    characters: 25
  }
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var q,A,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <SkeletonLoader {...args}>
      <Heading level={2} data-size="lg">Placeholder Heading</Heading>
    </SkeletonLoader>,
  args: {
    asChild: true
  },
  name: 'As Child (Heading)'
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const oe=["BasicRectangle","Variants","ComposedLayout","SizedByChildren","MimickingText","TextWithCharacters","AsChildHeading"];export{l as AsChildHeading,n as BasicRectangle,i as ComposedLayout,o as MimickingText,d as SizedByChildren,c as TextWithCharacters,s as Variants,oe as __namedExportsOrder,de as default};
