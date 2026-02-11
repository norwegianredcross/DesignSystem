import{j as e}from"./iframe-DyGNEWpQ.js";import{C as t}from"./index-CzSGQbtK.js";import"./preload-helper-u0ftyAaf.js";const G={title:"Components/CrossCorner",component:t,tags:["autodocs"],argTypes:{position:{control:"select",options:["top-left","top-right","bottom-left","bottom-right"],description:"Which corner the graphic points to.",table:{defaultValue:{summary:"top-left"}}},size:{control:"select",options:["sm","md","lg"],description:"Size of the graphic. sm: 48px, md: 68px, lg: 96px.",table:{defaultValue:{summary:"md"}}},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant using design system tokens.",table:{defaultValue:{summary:"accent (Røde Kors red)"}}},"aria-hidden":{control:"boolean",description:"Whether the graphic is hidden from assistive technologies.",table:{defaultValue:{summary:"true"}}},"aria-label":{control:"text",description:"Accessible label for the graphic (if not purely decorative)."},className:{control:"text",description:"Optional CSS class name."}},parameters:{docs:{description:{component:"Decorative L-shaped brand graphic element used as a visual accent across Røde Kors web projects. The shape forms part of the cross pattern and can be positioned in any corner orientation."}}}},o={name:"Default",args:{position:"top-left",size:"md"}},s={name:"All Positions",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{position:"top-left"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"top-left"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{position:"top-right"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"top-right"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{position:"bottom-right"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"bottom-right"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{position:"bottom-left"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"bottom-left"})]})]})},r={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-end"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{size:"sm"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"sm (48px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{size:"md"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"md (68px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{size:"lg"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"lg (96px)"})]})]})},i={name:"Color Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{"data-color":"accent"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"accent"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{"data-color":"brand1"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"brand1"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{"data-color":"brand2"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"brand2"})]}),e.jsxs("div",{style:{textAlign:"center",backgroundColor:"#1E2B3C",padding:"16px",borderRadius:"8px"},children:[e.jsx(t,{"data-color":"brand3"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px",color:"#fff"},children:"brand3"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{"data-color":"neutral"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"neutral"})]})]})},n={name:"Usage: Corner Accents",render:()=>e.jsxs("div",{style:{position:"relative",width:"400px",height:"250px",backgroundColor:"#f5f5f5",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0},children:e.jsx(t,{position:"top-left",size:"sm"})}),e.jsx("div",{style:{position:"absolute",top:0,right:0},children:e.jsx(t,{position:"top-right",size:"sm"})}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0},children:e.jsx(t,{position:"bottom-left",size:"sm"})}),e.jsx("div",{style:{position:"absolute",bottom:0,right:0},children:e.jsx(t,{position:"bottom-right",size:"sm"})}),e.jsx("p",{style:{color:"#666"},children:"Content with corner accents"})]})},a={name:"Size: Small",args:{size:"sm"}},l={name:"Size: Large",args:{size:"lg"}},p={name:"Position: Top Right",args:{position:"top-right"}},d={name:"Position: Bottom Left",args:{position:"bottom-left"}},c={name:"Position: Bottom Right",args:{position:"bottom-right"}};var m,x,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    position: 'top-left',
    size: 'md'
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'All Positions',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner position="top-left" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>top-left</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner position="top-right" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>top-right</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner position="bottom-right" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>bottom-right</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner position="bottom-left" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>bottom-left</p>
      </div>
    </div>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var u,v,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-end'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner size="sm" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>sm (48px)</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner size="md" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>md (68px)</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner size="lg" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>lg (96px)</p>
      </div>
    </div>
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,j,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner data-color="accent" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>accent</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner data-color="brand1" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>brand1</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner data-color="brand2" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>brand2</p>
      </div>
      <div style={{
      textAlign: 'center',
      backgroundColor: '#1E2B3C',
      padding: '16px',
      borderRadius: '8px'
    }}>
        <CrossCorner data-color="brand3" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px',
        color: '#fff'
      }}>brand3</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <CrossCorner data-color="neutral" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>neutral</p>
      </div>
    </div>
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var S,A,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Usage: Corner Accents',
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '250px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <div style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}>
        <CrossCorner position="top-left" size="sm" />
      </div>
      <div style={{
      position: 'absolute',
      top: 0,
      right: 0
    }}>
        <CrossCorner position="top-right" size="sm" />
      </div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0
    }}>
        <CrossCorner position="bottom-left" size="sm" />
      </div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      right: 0
    }}>
        <CrossCorner position="bottom-right" size="sm" />
      </div>
      <p style={{
      color: '#666'
    }}>Content with corner accents</p>
    </div>
}`,...(T=(A=n.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var R,B,P;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    size: 'sm'
  }
}`,...(P=(B=a.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var L,I,V;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    size: 'lg'
  }
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var k,w,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Position: Top Right',
  args: {
    position: 'top-right'
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,K,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Position: Bottom Left',
  args: {
    position: 'bottom-left'
  }
}`,...(O=(K=d.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var U,W,_;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Position: Bottom Right',
  args: {
    position: 'bottom-right'
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const H=["Default","AllPositions","AllSizes","ColorVariants","CornerAccents","Small","Large","TopRight","BottomLeft","BottomRight"];export{s as AllPositions,r as AllSizes,d as BottomLeft,c as BottomRight,i as ColorVariants,n as CornerAccents,o as Default,l as Large,a as Small,p as TopRight,H as __namedExportsOrder,G as default};
