import{j as e}from"./iframe-B88K40iD.js";import{G as s}from"./index-DuB_2ij4.js";import"./preload-helper-u0ftyAaf.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b=["square","corner","angle","heart","tee","bar","cross"],pe=["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],ve={title:"Components/GraphicElement",component:s,tags:["autodocs"],argTypes:{shape:{control:"select",options:b,description:"Which graphic element to render. All shapes are compositions of the cross arm squares.",table:{defaultValue:{summary:"corner"}}},variant:{control:"select",options:["solid","outline","isometric"],description:"Visuell stil: fylt (solid), tynn strek (outline) eller isometriske 3D-kuber (isometric). isometric er tilgjengelig for formene square, corner, angle, heart og bar.",table:{defaultValue:{summary:"solid"}}},position:{control:"select",options:["top-left","top-right","bottom-left","bottom-right"],description:"Orientering. For solid/outline: hvilket hjørne grafikken peker mot. For isometric: velger mellom stående/liggende (corner, angle) og horisontal/vertikal (bar).",table:{defaultValue:{summary:"top-left"}}},size:{control:"select",options:["sm","md","lg"],description:"Size of the base grid. For the corner shape: sm: 48px, md: 68px, lg: 96px. Larger shapes (tee, bar, cross) scale proportionally so the arm square stays the same size.",table:{defaultValue:{summary:"md"}}},mirrored:{control:"boolean",description:'Speilvender hjertet (dybden vender mot venstre). Gjelder kun variant="isometric" med shape="heart".',table:{defaultValue:{summary:"false"}}},"data-color":{control:"select",options:[...pe],description:"Color scope from the rk-design-tokens theme: primary-color-red, secondary-color-orange, secondary-color-rust, secondary-color-pink, additional-color-ocean, additional-color-jungle or neutral.",table:{defaultValue:{summary:"inherits scope (resolves to primary-color-red)"}}},"aria-hidden":{control:"boolean",description:"Whether the graphic is hidden from assistive technologies.",table:{defaultValue:{summary:"true"}}},"aria-label":{control:"text",description:"Accessible label for the graphic (if not purely decorative)."},className:{control:"text",description:"Optional CSS class name."}},parameters:{docs:{description:{component:'Grafiske elementer fra Røde Kors\' designretning, avledet av korsets grunnform. Korsets fire armer deles opp og brukes som selvstendige grafiske elementer - vinkler, hjørner, hjerter og stolper. Elementene kan fungere som visuelle koblinger på tvers av digitale produkter, i ulike farger, størrelser og komposisjoner. Tre stiler: `solid` (fylt), `outline` (tynn strek) og `isometric` (3D-kuber med tre tokenstyrte flater). `isometric` er tilgjengelig for formene square, corner, angle, heart og bar; `position` velger mellom stående/liggende (corner, angle) og horisontal/vertikal (bar), og `mirrored` speilvender hjertet. Den gamle CrossCorner-formen tilsvarer `shape="angle"`; `CrossCorner` er nå et deprecated alias for GraphicElement.'}}}},o={name:"Default",args:{shape:"corner",variant:"solid",position:"top-left",size:"md"}},n={name:"Gallery: All Shapes and Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[["solid","outline"].map(r=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:r}),e.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"center",flexWrap:"wrap"},children:b.map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{height:"110px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(s,{shape:t,variant:r,position:"top-right"})}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:t})]},t))})]},r)),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"isometric"}),e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"},children:[["square",e.jsx(s,{variant:"isometric",shape:"square"})],["corner stående",e.jsx(s,{variant:"isometric",shape:"corner",position:"top-right"})],["angle stående",e.jsx(s,{variant:"isometric",shape:"angle",position:"top-right"})],["corner liggende",e.jsx(s,{variant:"isometric",shape:"corner",position:"bottom-right"})],["angle liggende",e.jsx(s,{variant:"isometric",shape:"angle",position:"bottom-right"})],["heart",e.jsx(s,{variant:"isometric",shape:"heart"})],["heart speilvendt",e.jsx(s,{variant:"isometric",shape:"heart",mirrored:!0})],["bar horisontal",e.jsx(s,{variant:"isometric",shape:"bar",position:"top-right"})],["bar vertikal",e.jsx(s,{variant:"isometric",shape:"bar",position:"top-left"})]].map(([r,t])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{height:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:t}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:r})]},r))})]})]})},l={name:"All Shapes",render:()=>e.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"center",flexWrap:"wrap"},children:b.map(r=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{height:"110px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(s,{shape:r,position:"top-right"})}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:r})]},r))})},p={name:"Variant: Outline",args:{shape:"corner",variant:"outline"}},c={name:"Variant: Isometric",args:{shape:"corner",variant:"isometric"}},d={name:"All Positions",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{position:"top-left"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"top-left"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{position:"top-right"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"top-right"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{position:"bottom-right"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"bottom-right"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{position:"bottom-left"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"bottom-left"})]})]})},m={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-end"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"sm"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"sm (48px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"md"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"md (68px)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:"lg"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"lg (96px)"})]})]})},h={name:"Color Variants",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"},children:pe.map(r=>e.jsxs("div",{style:{textAlign:"center",width:"150px"},children:[e.jsx(s,{shape:"heart","data-color":r}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:r})]},r))})},g={name:"Usage: Corner Accents",render:()=>e.jsxs("div",{style:{position:"relative",width:"400px",height:"250px",backgroundColor:"#f5f5f5",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0},children:e.jsx(s,{position:"top-left",size:"sm"})}),e.jsx("div",{style:{position:"absolute",top:0,right:0},children:e.jsx(s,{position:"top-right",size:"sm"})}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0},children:e.jsx(s,{position:"bottom-left",size:"sm"})}),e.jsx("div",{style:{position:"absolute",bottom:0,right:0},children:e.jsx(s,{position:"bottom-right",size:"sm"})}),e.jsx("p",{style:{color:"#666"},children:"Content with corner accents"})]})},v={name:"Test: Default Attributes",tags:["!autodocs"],args:{},play:async({canvasElement:r})=>{const t=r.querySelector("svg");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("aria-hidden","true"),await a(t).not.toHaveAttribute("role"),await a(t).toHaveAttribute("data-shape","corner"),await a(t).toHaveAttribute("data-variant","solid"),await a(t).toHaveAttribute("viewBox","0 0 68 68"),await a(t).toHaveAttribute("width","68"),await a(t).toHaveAttribute("height","68");const i=t==null?void 0:t.querySelector("path");await a(i).toHaveAttribute("d","M34 0H68V68H0V34H34V0Z")}},u={name:"Test: Shape and Variant Attributes",tags:["!autodocs"],args:{shape:"cross",variant:"outline",size:"md","data-color":"secondary-color-rust"},play:async({canvasElement:r})=>{const t=r.querySelector("svg");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("data-shape","cross"),await a(t).toHaveAttribute("data-variant","outline"),await a(t).toHaveAttribute("data-color","secondary-color-rust"),await a(t).toHaveAttribute("viewBox","0 0 102 102"),await a(t).toHaveAttribute("width","102"),await a(t).toHaveAttribute("height","102"),await a(t).toHaveAttribute("aria-hidden","true");const i=t==null?void 0:t.querySelector("path");await a(i).toHaveAttribute("d","M51 0V102M0 51H34M68 51H102")}},x={name:"Test: Isometric Faces",tags:["!autodocs"],args:{shape:"square",variant:"isometric"},play:async({canvasElement:r})=>{const t=r.querySelector("svg");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("aria-hidden","true"),await a(t).toHaveAttribute("data-shape","square"),await a(t).toHaveAttribute("data-variant","isometric");const i=Array.from((t==null?void 0:t.querySelectorAll("path"))??[]);await a(i).toHaveLength(3);const ce=i.map(de=>getComputedStyle(de).fill);await a(new Set(ce).size).toBe(3)}},y={name:"Test: Isometric Fallback",tags:["!autodocs"],args:{shape:"cross",variant:"isometric"},play:async({canvasElement:r})=>{const t=r.querySelector("svg");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("data-shape","cross"),await a(t).toHaveAttribute("data-variant","solid");const i=Array.from((t==null?void 0:t.querySelectorAll("path"))??[]);await a(i).toHaveLength(1),await a(i[0]).toHaveAttribute("d","M34 0H68V34H34V0ZM0 34H34V68H0V34ZM68 34H102V68H68V34ZM34 68H68V102H34V68Z")}},f={name:"Test: Isometric Column",tags:["!autodocs"],args:{shape:"bar",variant:"isometric",position:"top-left"},play:async({canvasElement:r})=>{const t=r.querySelector("svg");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("data-variant","isometric"),await a(t).toHaveAttribute("viewBox","0 0 58.89 136"),await a((t==null?void 0:t.style.transform)??"").not.toContain("rotate");const i=Array.from((t==null?void 0:t.querySelectorAll("path"))??[]);await a(i).toHaveLength(7)}};var A,w,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    shape: 'corner',
    variant: 'solid',
    position: 'top-left',
    size: 'md'
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,H,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Gallery: All Shapes and Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {(['solid', 'outline'] as const).map(variant => <div key={variant}>
          <p style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>{variant}</p>
          <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
            {ALL_SHAPES.map(shape => <div key={shape} style={{
          textAlign: 'center'
        }}>
                <div style={{
            height: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                  <GraphicElement shape={shape} variant={variant} position="top-right" />
                </div>
                <p style={{
            marginTop: '8px',
            fontSize: '12px'
          }}>{shape}</p>
              </div>)}
          </div>
        </div>)}
      <div>
        <p style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>
          isometric
        </p>
        <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          {([['square', <GraphicElement variant="isometric" shape="square" />], ['corner stående', <GraphicElement variant="isometric" shape="corner" position="top-right" />], ['angle stående', <GraphicElement variant="isometric" shape="angle" position="top-right" />], ['corner liggende', <GraphicElement variant="isometric" shape="corner" position="bottom-right" />], ['angle liggende', <GraphicElement variant="isometric" shape="angle" position="bottom-right" />], ['heart', <GraphicElement variant="isometric" shape="heart" />], ['heart speilvendt', <GraphicElement variant="isometric" shape="heart" mirrored />], ['bar horisontal', <GraphicElement variant="isometric" shape="bar" position="top-right" />], ['bar vertikal', <GraphicElement variant="isometric" shape="bar" position="top-left" />]] as const).map(([label, element]) => <div key={label} style={{
          textAlign: 'center'
        }}>
              <div style={{
            height: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                {element}
              </div>
              <p style={{
            marginTop: '8px',
            fontSize: '12px'
          }}>{label}</p>
            </div>)}
        </div>
      </div>
    </div>
}`,...(T=(H=n.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var z,V,I;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'All Shapes',
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {ALL_SHAPES.map(shape => <div key={shape} style={{
      textAlign: 'center'
    }}>
          <div style={{
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            <GraphicElement shape={shape} position="top-right" />
          </div>
          <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>{shape}</p>
        </div>)}
    </div>
}`,...(I=(V=l.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var k,E,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Variant: Outline',
  args: {
    shape: 'corner',
    variant: 'outline'
  }
}`,...(C=(E=p.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var q,G,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Variant: Isometric',
  args: {
    shape: 'corner',
    variant: 'isometric'
  }
}`,...(D=(G=c.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var B,L,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'All Positions',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement position="top-left" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>top-left</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement position="top-right" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>top-right</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement position="bottom-right" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>bottom-right</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement position="bottom-left" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>bottom-left</p>
      </div>
    </div>
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,W,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-end'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement size="sm" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>sm (48px)</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement size="md" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>md (68px)</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <GraphicElement size="lg" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>lg (96px)</p>
      </div>
    </div>
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var F,Z,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {ALL_COLORS.map(color => <div key={color} style={{
      textAlign: 'center',
      width: '150px'
    }}>
          <GraphicElement shape="heart" data-color={color} />
          <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>{color}</p>
        </div>)}
    </div>
}`,...(R=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:R.source}}};var P,K,U;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <GraphicElement position="top-left" size="sm" />
      </div>
      <div style={{
      position: 'absolute',
      top: 0,
      right: 0
    }}>
        <GraphicElement position="top-right" size="sm" />
      </div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0
    }}>
        <GraphicElement position="bottom-left" size="sm" />
      </div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      right: 0
    }}>
        <GraphicElement position="bottom-right" size="sm" />
      </div>
      <p style={{
      color: '#666'
    }}>Content with corner accents</p>
    </div>
}`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var J,N,Y;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Test: Default Attributes',
  tags: ['!autodocs'],
  args: {},
  play: async ({
    canvasElement
  }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    // Decorative by default: hidden from assistive technologies
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).not.toHaveAttribute('role');
    // Defaults: corner shape (2x2 grid minus the top-left cell), solid variant
    await expect(svg).toHaveAttribute('data-shape', 'corner');
    await expect(svg).toHaveAttribute('data-variant', 'solid');
    await expect(svg).toHaveAttribute('viewBox', '0 0 68 68');
    await expect(svg).toHaveAttribute('width', '68');
    await expect(svg).toHaveAttribute('height', '68');
    const path = svg?.querySelector('path');
    await expect(path).toHaveAttribute('d', 'M34 0H68V68H0V34H34V0Z');
  }
}`,...(Y=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var Q,X,$;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Test: Shape and Variant Attributes',
  tags: ['!autodocs'],
  args: {
    shape: 'cross',
    variant: 'outline',
    size: 'md',
    'data-color': 'secondary-color-rust'
  },
  play: async ({
    canvasElement
  }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('data-shape', 'cross');
    await expect(svg).toHaveAttribute('data-variant', 'outline');
    await expect(svg).toHaveAttribute('data-color', 'secondary-color-rust');
    // Cross spans 3x3 grid cells: proportionally larger than the 2x2 corner
    await expect(svg).toHaveAttribute('viewBox', '0 0 102 102');
    await expect(svg).toHaveAttribute('width', '102');
    await expect(svg).toHaveAttribute('height', '102');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    // Outline variant renders the open partial-stroke path (gapped cross axes)
    const path = svg?.querySelector('path');
    await expect(path).toHaveAttribute('d', 'M51 0V102M0 51H34M68 51H102');
  }
}`,...($=(X=u.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,te,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Test: Isometric Faces',
  tags: ['!autodocs'],
  args: {
    shape: 'square',
    variant: 'isometric'
  },
  play: async ({
    canvasElement
  }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('data-shape', 'square');
    await expect(svg).toHaveAttribute('data-variant', 'isometric');
    // A single unit cube renders exactly three faces: front, top, right
    const paths = Array.from(svg?.querySelectorAll('path') ?? []);
    await expect(paths).toHaveLength(3);
    // Each face resolves to its own token-driven color
    const fills = paths.map(p => getComputedStyle(p).fill);
    await expect(new Set(fills).size).toBe(3);
  }
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Test: Isometric Fallback',
  tags: ['!autodocs'],
  // Invalid combo forced past the type union, simulating a JS consumer.
  // The component must fall back to solid - never invent geometry.
  args: {
    shape: 'cross',
    variant: 'isometric'
  } as unknown as Story['args'],
  play: async ({
    canvasElement
  }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('data-shape', 'cross');
    // Rendered as solid, with the solid cross geometry
    await expect(svg).toHaveAttribute('data-variant', 'solid');
    const paths = Array.from(svg?.querySelectorAll('path') ?? []);
    await expect(paths).toHaveLength(1);
    await expect(paths[0]).toHaveAttribute('d', 'M34 0H68V34H34V0ZM0 34H34V68H0V34ZM68 34H102V68H68V34ZM34 68H68V102H34V68Z');
  }
}`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ne,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Test: Isometric Column',
  tags: ['!autodocs'],
  args: {
    shape: 'bar',
    variant: 'isometric',
    position: 'top-left'
  },
  play: async ({
    canvasElement
  }) => {
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();
    await expect(svg).toHaveAttribute('data-variant', 'isometric');
    // The column has its own tall geometry...
    await expect(svg).toHaveAttribute('viewBox', '0 0 58.89 136');
    // ...and no CSS rotation
    await expect(svg?.style.transform ?? '').not.toContain('rotate');
    // Three stacked cubes: 3 fronts + 3 rights + 1 top rhombus
    const paths = Array.from(svg?.querySelectorAll('path') ?? []);
    await expect(paths).toHaveLength(7);
  }
}`,...(le=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const ue=["Default","AllShapesAndVariants","AllShapes","Outline","Isometric","AllPositions","AllSizes","ColorVariants","CornerAccents","TestDefaultAttributes","TestShapeAndVariantAttributes","TestIsometricFaces","TestIsometricFallback","TestIsometricColumn"];export{d as AllPositions,l as AllShapes,n as AllShapesAndVariants,m as AllSizes,h as ColorVariants,g as CornerAccents,o as Default,c as Isometric,p as Outline,v as TestDefaultAttributes,f as TestIsometricColumn,x as TestIsometricFaces,y as TestIsometricFallback,u as TestShapeAndVariantAttributes,ue as __namedExportsOrder,ve as default};
