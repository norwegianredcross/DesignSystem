import{j as e}from"./iframe-DBg-kF59.js";import{Q as q,H as m,P as n,B as D}from"./tooltip-DEmLPr5r.js";const t=q;try{t.displayName="SkeletonLoader",t.__docgenInfo={description:"",displayName:"SkeletonLoader",props:{width:{defaultValue:null,description:"The width of the component",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"The height of the component",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"'rectangle'"},description:"The shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circle"'},{value:'"rectangle"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},characters:{defaultValue:null,description:"@deprecated This prop has no effect. Use `width` or supply text as children instead",name:"characters",required:!1,type:{name:"number"}}}}}catch{}const{expect:r,within:K}=__STORYBOOK_MODULE_TEST__,U={title:"Components/Skeleton",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Skeleton indicates loading content, mimicking the shape of the content."}}},argTypes:{width:{control:"text",description:'The width of the component (e.g., "100px", "50%", 200)'},height:{control:"text",description:'The height of the component (e.g., "100px", "2em", 100)'},variant:{control:"select",options:["rectangle","circle","text"],description:"The shape variant",defaultValue:"rectangle"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},characters:{control:!1,description:"Deprecated upstream. Use `width` or text children instead.",table:{category:"Deprecated"}},children:{control:!1,description:"Optional children for sizing or composition"}}},s={name:"Basic Rectangle",args:{variant:"rectangle",width:200,height:100}},d={name:"Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{variant:"circle",width:"50px",height:"50px"}),e.jsx(t,{variant:"rectangle",width:"100px",height:"50px"}),e.jsx(n,{children:e.jsx(t,{variant:"text",width:10})})]})},o={parameters:{a11y:{test:"todo"}},name:"Composed Layout",render:()=>e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx(t,{height:"150px"}),e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"5px 0 5px 0"},children:[e.jsx(t,{variant:"circle",width:"30px",height:"30px"}),e.jsx(m,{level:3,"data-size":"md",children:e.jsx(t,{variant:"text",width:"80%"})})]}),e.jsx(t,{variant:"text",width:140})]})},l={name:"Sized By Children",render:a=>{const{variant:x,asChild:i}=a;return e.jsxs(t,{variant:x,asChild:i,children:[e.jsx(n,{children:"Her er en tekst som blir sendt inn som barn av en Skeleton."}),e.jsx(n,{children:"Se hvordan Skeleton da dekker den samlede bredden og høyden til barna."}),e.jsx(D,{children:"Knapp"})]})},args:{variant:"rectangle"}},c={parameters:{a11y:{test:"todo"}},name:"Mimicking Text Content",render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(m,{level:4,children:"En tittel"}),e.jsx(n,{"data-size":"sm",children:"Her er en paragraf som går over flere linjer"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx(m,{level:4,children:e.jsx(t,{variant:"text",width:"60%"})}),e.jsx(n,{"data-size":"sm",children:e.jsx(t,{variant:"text",width:40})})]})]})},h={name:"Text (Width as Character Count)",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{children:"Mimicking text lines using numeric `width` values:"}),e.jsx(t,{...a,variant:"text",width:20}),e.jsx(t,{...a,variant:"text",width:35}),e.jsx(t,{...a,variant:"text",width:30})]}),args:{variant:"text"}},p={render:a=>e.jsx(t,{...a,children:e.jsx(m,{level:2,"data-size":"lg",children:"Placeholder Heading"})}),args:{asChild:!0},name:"As Child (Heading)"},g={name:"Test: Static Contract",tags:["!autodocs"],render:()=>e.jsxs("div",{children:[e.jsx(t,{"data-testid":"rectangle-skeleton",variant:"rectangle",width:160,height:48}),e.jsx(t,{"data-testid":"text-skeleton",variant:"text",width:6})]}),play:async({canvasElement:a})=>{const x=K(a),i=x.getByTestId("rectangle-skeleton"),v=x.getByTestId("text-skeleton");await r(i).toHaveAttribute("aria-hidden","true"),await r(i).toHaveAttribute("data-variant","rectangle"),await r(i).toHaveStyle({width:"160px",height:"48px"}),await r(v).toHaveAttribute("aria-hidden","true"),await r(v).toHaveAttribute("data-variant","text"),await r(v).toHaveAttribute("data-text","------")}};var u,y,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Basic Rectangle',
  args: {
    variant: 'rectangle',
    width: 200,
    height: 100
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,k,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <SkeletonLoader variant="circle" width="50px" height="50px" />
      <SkeletonLoader variant="rectangle" width="100px" height="50px" />
      <Paragraph>
        <SkeletonLoader variant="text" width={10} />
      </Paragraph>
    </div>
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var j,C,H;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  // heading-order: skeleton placeholder headings
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
      <SkeletonLoader variant="text" width={140} />
    </div>
}`,...(H=(C=o.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var T,b,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var _,B,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  // heading-order: skeleton placeholder headings
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
          <SkeletonLoader variant="text" width={40} />
        </Paragraph>
      </div>
    </div>
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var z,A,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Text (Width as Character Count)',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Paragraph>Mimicking text lines using numeric \`width\` values:</Paragraph>
      <SkeletonLoader {...args} variant="text" width={20} />
      <SkeletonLoader {...args} variant="text" width={35} />
      <SkeletonLoader {...args} variant="text" width={30} />
    </div>,
  args: {
    variant: 'text'
  }
}`,...(V=(A=h.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var M,I,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <SkeletonLoader {...args}>
      <Heading level={2} data-size="lg">Placeholder Heading</Heading>
    </SkeletonLoader>,
  args: {
    asChild: true
  },
  name: 'As Child (Heading)'
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var O,R,W;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Test: Static Contract',
  tags: ['!autodocs'],
  render: () => <div>
      <SkeletonLoader data-testid="rectangle-skeleton" variant="rectangle" width={160} height={48} />
      <SkeletonLoader data-testid="text-skeleton" variant="text" width={6} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rectangle = canvas.getByTestId('rectangle-skeleton');
    const text = canvas.getByTestId('text-skeleton');
    await expect(rectangle).toHaveAttribute('aria-hidden', 'true');
    await expect(rectangle).toHaveAttribute('data-variant', 'rectangle');
    await expect(rectangle).toHaveStyle({
      width: '160px',
      height: '48px'
    });
    await expect(text).toHaveAttribute('aria-hidden', 'true');
    await expect(text).toHaveAttribute('data-variant', 'text');
    await expect(text).toHaveAttribute('data-text', '------');
  }
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const N=["BasicRectangle","Variants","ComposedLayout","SizedByChildren","MimickingText","TextWithCharacters","AsChildHeading","TestStaticContract"],F=Object.freeze(Object.defineProperty({__proto__:null,AsChildHeading:p,BasicRectangle:s,ComposedLayout:o,MimickingText:c,SizedByChildren:l,TestStaticContract:g,TextWithCharacters:h,Variants:d,__namedExportsOrder:N,default:U},Symbol.toStringTag,{value:"Module"}));export{p as A,s as B,o as C,c as M,F as S,h as T,d as V,l as a};
