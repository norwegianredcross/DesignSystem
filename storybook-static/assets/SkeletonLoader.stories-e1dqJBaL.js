import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as F}from"./floating-ui.react-VFS6-CKd.js";import{S as G}from"./index-Cb-ENzfG.js";import{c as J}from"./lite-DaUVFjkg.js";import{r as Q}from"./index-D4lIrffr.js";import{u as U}from"./Spinner-Dj2HLJn9.js";import{P as t}from"./Paragraph-CJciD5B6.js";import{H as p}from"./Heading-BGOStg1T.js";import{B as X}from"./Button-_80U_wOV.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const Y=Q.forwardRef(function({asChild:h,className:x,height:D,style:m,variant:g="rectangle",width:v,...K},N){const O=h?G:"span",u=g==="text",_=U("ds-skeleton-opacity-fade"),q=F([_,N]);return e.jsx(O,{"aria-hidden":"true",className:J("ds-skeleton",x),"data-text":u?"-".repeat(Number(v)||1):void 0,"data-variant":g,ref:q,style:u?m:{width:v,height:D,...m},...K})}),r=Y,ce={title:"Components/Skeleton",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Skeleton indicates loading content, mimicking the shape of the content."}}},argTypes:{width:{control:"text",description:'The width of the component (e.g., "100px", "50%", 200)'},height:{control:"text",description:'The height of the component (e.g., "100px", "2em", 100)'},variant:{control:"select",options:["rectangle","circle","text"],description:"The shape variant",defaultValue:"rectangle"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},characters:{control:"number",description:"Sets width based on character count (for text variant)",if:{arg:"variant",eq:"text"}},children:{control:!1,description:"Optional children for sizing or composition"}}},n={name:"Basic Rectangle",args:{variant:"rectangle",width:200,height:100}},s={name:"Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(r,{variant:"circle",width:"50px",height:"50px"}),e.jsx(r,{variant:"rectangle",width:"100px",height:"50px"}),e.jsx(t,{children:e.jsx(r,{variant:"text",characters:10})})]})},i={name:"Composed Layout",render:()=>e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx(r,{height:"150px"}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"5px 0 5px 0"},children:[e.jsx(r,{variant:"circle",width:"30px",height:"30px"}),e.jsx(p,{level:3,"data-size":"md",children:e.jsx(r,{variant:"text",width:"80%"})})]}),e.jsx(r,{variant:"text",characters:140})]})},o={name:"Sized By Children",render:a=>{const{variant:h,asChild:x}=a;return e.jsxs(r,{variant:h,asChild:x,children:[e.jsx(t,{children:"Her er en tekst som blir sendt inn som barn av en Skeleton."}),e.jsx(t,{children:"Se hvordan Skeleton da dekker den samlede bredden og høyden til barna."}),e.jsx(X,{children:"Knapp"})]})},args:{variant:"rectangle"}},d={name:"Mimicking Text Content",render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(p,{level:4,children:"En tittel"}),e.jsx(t,{"data-size":"sm",children:"Her er en paragraf som går over flere linjer"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(p,{level:4,children:e.jsx(r,{variant:"text",width:"60%"})}),e.jsx(t,{"data-size":"sm",children:e.jsx(r,{variant:"text",characters:40})})]})]})},c={name:"Text (Characters Prop)",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{children:"Mimicking text lines using `characters` prop:"}),e.jsx(r,{...a,variant:"text",characters:a.characters||20}),e.jsx(r,{...a,variant:"text",characters:a.characters?a.characters+15:35}),e.jsx(r,{...a,variant:"text",characters:a.characters?a.characters+10:30})]}),args:{variant:"text",characters:25}},l={render:a=>e.jsx(r,{...a,children:e.jsx(p,{level:2,"data-size":"lg",children:"Placeholder Heading"})}),args:{asChild:!0},name:"As Child (Heading)"};var f,S,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Basic Rectangle',
  args: {
    variant: 'rectangle',
    width: 200,
    height: 100
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var j,y,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var H,L,P;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var z,w,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var b,B,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var M,V,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var E,I,W;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <SkeletonLoader {...args}>\r
      <Heading level={2} data-size="lg">Placeholder Heading</Heading>\r
    </SkeletonLoader>,
  args: {
    asChild: true
  },
  name: 'As Child (Heading)'
}`,...(W=(I=l.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const le=["BasicRectangle","Variants","ComposedLayout","SizedByChildren","MimickingText","TextWithCharacters","AsChildHeading"];export{l as AsChildHeading,n as BasicRectangle,i as ComposedLayout,d as MimickingText,o as SizedByChildren,c as TextWithCharacters,s as Variants,le as __namedExportsOrder,ce as default};
