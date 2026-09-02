import{r as oe,j as e}from"./iframe-BYyDdLVI.js";import{o as ne,p as re,B as y}from"./tooltip-D949qbH_.js";import{S as ae,a as se,b as ie,c as v}from"./Video-B9sQQxMW.js";const a=oe.forwardRef((t,h)=>e.jsx(re,{ref:h,...t}));a.displayName="Badge";const n=ne,{expect:o,within:f}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{count:{control:"number",description:"The number to display in the badge"},maxCount:{control:"number",description:'Maximum count before showing "+"'},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},variant:{control:"select",options:["base","tinted"],description:"Background color style",defaultValue:"base"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger","info","success","warning"],description:"Color scheme",defaultValue:"primary-color-red"}}},c={name:"Example Default (Status)",args:{"data-color":"danger"}},l={name:"Example with Count",args:{count:7,"data-color":"primary-color-red"}},m={name:"Example with Max Count",args:{count:150,maxCount:99,"data-color":"neutral"}},g={name:"Example Large Danger Tinted",args:{count:99,"data-size":"lg","data-color":"danger",variant:"tinted"}},u={name:"Example Status Only",args:{"data-color":"success"}},p={name:"Example Floating Over Element",render:t=>e.jsxs(n,{placement:"top-right",children:[e.jsx(a,{count:t.count,maxCount:t.maxCount,"data-size":t["data-size"],variant:t.variant,"data-color":t["data-color"]}),e.jsx("span",{style:{display:"inline-block",width:40,height:40,background:"#eee",borderRadius:"50%",marginLeft:16,marginRight:16,marginTop:16,marginBottom:16}})]}),args:{count:3,"data-color":"info","data-size":"md"}},b={name:"Example On Icon Buttons",render:t=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(y,{icon:!0,variant:"tertiary",children:e.jsxs(n,{placement:"top-right",children:[e.jsx(a,{...t,count:1e3,maxCount:99,"data-color":"danger"}),e.jsx(ae,{title:"Innboks",fontSize:"1.5rem"})]})}),e.jsx(y,{icon:!0,variant:"tertiary",children:e.jsxs(n,{placement:"top-right",children:[e.jsx(a,{...t,count:10,"data-color":"danger"}),e.jsx(se,{title:"Meldinger",fontSize:"1.5rem"})]})}),e.jsx(y,{icon:!0,variant:"tertiary",children:e.jsxs(n,{placement:"top-right",children:[e.jsx(a,{...t,"data-color":"danger"}),e.jsx(ie,{title:"Skru på video",fontSize:"1.5rem"})]})})]}),args:{"data-size":"md",variant:"base"},argTypes:{count:{control:!1},maxCount:{control:!1},"data-color":{control:!1}}},x={name:"Example Placements",render:t=>e.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",padding:"2rem"},children:[e.jsxs(n,{placement:"top-right",children:[e.jsx(a,{...t}),e.jsx(v,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(n,{placement:"top-left",children:[e.jsx(a,{...t}),e.jsx(v,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(n,{placement:"bottom-right",children:[e.jsx(a,{...t}),e.jsx(v,{title:"Meldinger",fontSize:"2rem"})]}),e.jsxs(n,{placement:"bottom-left",children:[e.jsx(a,{...t}),e.jsx(v,{title:"Meldinger",fontSize:"2rem"})]}),e.jsx("div",{style:{width:"100%",height:"1rem"}}),e.jsxs(n,{placement:"top-right",overlap:"circle",children:[e.jsx(a,{...t}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(n,{placement:"top-left",overlap:"circle",children:[e.jsx(a,{...t}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(n,{placement:"bottom-right",overlap:"circle",children:[e.jsx(a,{...t}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]}),e.jsxs(n,{placement:"bottom-left",overlap:"circle",children:[e.jsx(a,{...t}),e.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",backgroundColor:"var(--ds-color-brand2-base-default)"}})]})]}),args:{"data-color":"primary-color-red","data-size":"md"},argTypes:{count:{control:!1},maxCount:{control:!1}}},s={name:"Test: Count And MaxCount Formatting",render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("span",{"data-testid":"badge-count",children:e.jsx(a,{count:7,"data-color":"primary-color-red"})}),e.jsx("span",{"data-testid":"badge-capped",children:e.jsx(a,{count:150,maxCount:99,"data-color":"danger"})}),e.jsx("span",{"data-testid":"badge-at-max",children:e.jsx(a,{count:99,maxCount:99,"data-color":"neutral"})}),e.jsx("span",{"data-testid":"badge-dot",children:e.jsx(a,{"data-color":"success"})})]}),play:async({canvasElement:t})=>{const h=f(t),r=d=>h.getByTestId(d).firstElementChild;o(r("badge-count")).toHaveAttribute("data-count","7"),o(r("badge-capped")).toHaveAttribute("data-count","99+"),o(r("badge-at-max")).toHaveAttribute("data-count","99"),o(r("badge-dot")).not.toHaveAttribute("data-count"),o(r("badge-count").textContent).toBe(""),o(r("badge-count")).not.toHaveAttribute("role"),o(r("badge-count")).not.toHaveAttribute("tabindex")}},i={name:"Test: Positioned Badge Accessibility",render:()=>e.jsx(y,{icon:!0,variant:"tertiary","aria-label":"Innboks, 12 uleste meldinger",children:e.jsxs(n,{placement:"top-right",children:[e.jsx(a,{count:12,maxCount:9,"data-color":"danger"}),e.jsx(ae,{title:"Innboks",fontSize:"1.5rem"})]})}),play:async({canvasElement:t})=>{const r=f(t).getByRole("button",{name:"Innboks, 12 uleste meldinger"});o(f(r).getByRole("img",{name:"Innboks"})).toBeInTheDocument();const d=t.querySelector(".ds-badge--position");o(d).toHaveAttribute("data-placement","top-right"),o(d).not.toHaveAttribute("role"),o(d).not.toHaveAttribute("aria-hidden");const B=t.querySelector(".ds-badge");o(B).toHaveAttribute("data-count","9+"),o(B.textContent).toBe(""),o(B).not.toHaveAttribute("aria-hidden")}};var C,j,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Example Default (Status)',
  args: {
    'data-color': 'danger'
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var E,w,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Example with Count',
  args: {
    count: 7,
    'data-color': 'primary-color-red'
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var P,I,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Example with Max Count',
  args: {
    count: 150,
    maxCount: 99,
    'data-color': 'neutral'
  }
}`,...(k=(I=m.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var z,A,M;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Example Large Danger Tinted',
  args: {
    count: 99,
    'data-size': 'lg',
    'data-color': 'danger',
    variant: 'tinted'
  }
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var H,O,R;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Example Status Only',
  args: {
    'data-color': 'success'
  }
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,F,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Example Floating Over Element',
  render: args => <BadgePosition placement="top-right">
      <Badge count={args.count} maxCount={args.maxCount} data-size={args['data-size']} variant={args.variant} data-color={args['data-color']} />
      <span style={{
      display: 'inline-block',
      width: 40,
      height: 40,
      background: '#eee',
      borderRadius: '50%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
      marginBottom: 16
    }} />
    </BadgePosition>,
  args: {
    count: 3,
    'data-color': 'info',
    'data-size': 'md'
  }
}`,...(_=(F=p.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var L,W,q;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example On Icon Buttons',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
          <Badge {...args} count={1000} maxCount={99} data-color="danger" />
          <InboxIcon title="Innboks" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
           <Badge {...args} count={10} data-color="danger" />
          <ChatIcon title="Meldinger" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
      <Button icon variant="tertiary">
        <BadgePosition placement="top-right">
           <Badge {...args} data-color="danger" />
          <VideoIcon title="Skru på video" fontSize="1.5rem" />
        </BadgePosition>
      </Button>
    </div>,
  args: {
    'data-size': 'md',
    variant: 'base'
  },
  argTypes: {
    count: {
      control: false
    },
    maxCount: {
      control: false
    },
    'data-color': {
      control: false
    }
    // placement and overlap removed from meta, so no need to disable here
  }
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var V,N,$;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Example Placements',
  render: args => <div style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    padding: '2rem'
  }}>
      <BadgePosition placement="top-right">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="top-left">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="bottom-right">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>
      <BadgePosition placement="bottom-left">
        <Badge {...args} />
        <EnvelopeClosedFillIcon title="Meldinger" fontSize="2rem" />
      </BadgePosition>

      <div style={{
      width: '100%',
      height: '1rem'
    }}></div>

      <BadgePosition placement="top-right" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
      <BadgePosition placement="top-left" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
      <BadgePosition placement="bottom-right" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
      <BadgePosition placement="bottom-left" overlap="circle">
        <Badge {...args} />
        <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        backgroundColor: 'var(--ds-color-brand2-base-default)'
      }} />
      </BadgePosition>
    </div>,
  args: {
    'data-color': 'primary-color-red',
    'data-size': 'md'
  },
  argTypes: {
    count: {
      control: false
    },
    maxCount: {
      control: false
    }
  }
}`,...($=(N=x.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var K,U,Y,G,J;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Test: Count And MaxCount Formatting',
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <span data-testid="badge-count">
        <Badge count={7} data-color="primary-color-red" />
      </span>
      <span data-testid="badge-capped">
        <Badge count={150} maxCount={99} data-color="danger" />
      </span>
      <span data-testid="badge-at-max">
        <Badge count={99} maxCount={99} data-color="neutral" />
      </span>
      <span data-testid="badge-dot">
        <Badge data-color="success" />
      </span>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = (testId: string) => canvas.getByTestId(testId).firstElementChild as HTMLElement;

    // Plain count is shown as-is
    expect(badge('badge-count')).toHaveAttribute('data-count', '7');

    // Count above maxCount is capped as "<maxCount>+"
    expect(badge('badge-capped')).toHaveAttribute('data-count', '99+');

    // Count equal to maxCount is NOT capped
    expect(badge('badge-at-max')).toHaveAttribute('data-count', '99');

    // Dot mode: no count -> no data-count attribute at all
    expect(badge('badge-dot')).not.toHaveAttribute('data-count');

    // The count lives in the attribute (CSS-rendered), not as DOM text
    expect(badge('badge-count').textContent).toBe('');

    // The badge itself is a non-interactive status marker
    expect(badge('badge-count')).not.toHaveAttribute('role');
    expect(badge('badge-count')).not.toHaveAttribute('tabindex');
  }
}`,...(Y=(U=s.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:`Tests the count display logic: the number is exposed through the data-count
attribute (rendered visually via CSS), maxCount caps the display as
"<maxCount>+" only when count exceeds it (count === maxCount is NOT
capped), and a badge without count is a pure status dot without data-count.`,...(J=(G=s.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,X,Z,ee,te;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Test: Positioned Badge Accessibility',
  render: () => <Button icon variant="tertiary" aria-label="Innboks, 12 uleste meldinger">
      <BadgePosition placement="top-right">
        <Badge count={12} maxCount={9} data-color="danger" />
        <InboxIcon title="Innboks" fontSize="1.5rem" />
      </BadgePosition>
    </Button>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The host button keeps its explicit accessible name
    const button = canvas.getByRole('button', {
      name: 'Innboks, 12 uleste meldinger'
    });

    // The icon inside the positioning wrapper keeps its own semantics
    expect(within(button).getByRole('img', {
      name: 'Innboks'
    })).toBeInTheDocument();

    // The wrapper is purely presentational positioning
    const wrapper = canvasElement.querySelector('.ds-badge--position') as HTMLElement;
    expect(wrapper).toHaveAttribute('data-placement', 'top-right');
    expect(wrapper).not.toHaveAttribute('role');
    expect(wrapper).not.toHaveAttribute('aria-hidden');

    // The badge shows the capped count and stays silent in the DOM
    const badgeElement = canvasElement.querySelector('.ds-badge') as HTMLElement;
    expect(badgeElement).toHaveAttribute('data-count', '9+');
    expect(badgeElement.textContent).toBe('');
    expect(badgeElement).not.toHaveAttribute('aria-hidden');
  }
}`,...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`Tests that the BadgePosition wrapper positions the badge over a child
without breaking the child's accessibility: the icon keeps its accessible
name, the host button keeps its label, and neither the wrapper nor the
badge injects roles or aria-hidden on the content.`,...(te=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const ce=["Default","WithCount","WithMaxCount","LargeDangerTinted","StatusOnly","FloatingOverElement","OnIconButtons","Placements","TestCountAndMaxCount","TestPositionedBadgeAccessibility"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:c,FloatingOverElement:p,LargeDangerTinted:g,OnIconButtons:b,Placements:x,StatusOnly:u,TestCountAndMaxCount:s,TestPositionedBadgeAccessibility:i,WithCount:l,WithMaxCount:m,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{ue as B,p as F,g as L,b as O,x as P,u as S,l as W,m as a};
