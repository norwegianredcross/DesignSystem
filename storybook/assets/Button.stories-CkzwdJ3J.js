import{j as a}from"./iframe-CfsAtch-.js";import{B as r}from"./index-BO8LnfRZ.js";import{T as f}from"./index-DxlCgVoa.js";import{S as ha,a as S,b as ya,c as va,d as ba,e as xa,f as fa,g as Sa}from"./Trash-D-0zU8XD.js";const{expect:x,within:B,userEvent:Ba}=__STORYBOOK_MODULE_TEST__,Ta={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"Button label",defaultValue:"Knapp"},disabled:{control:"boolean",description:"Disable the button",defaultValue:!1},variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant",defaultValue:"primary"},"data-size":{control:"select",options:["sm","md","lg"],description:"Button size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Button color scheme",defaultValue:"accent"},loading:{control:"boolean",description:"Loading state",defaultValue:!1},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},type:{control:"select",options:["button","submit","reset"],description:"Button type",defaultValue:"button"},"aria-label":{control:"text",description:"Aria label (especially if children is empty/icon)"}}},t={args:{children:"Lagre",variant:"primary"}},s={args:{children:"Avbryt",variant:"secondary"}},o={args:{children:"Rediger",variant:"tertiary"}},i={args:{children:"Slett",variant:"primary","data-color":"danger"}},l={args:{children:"Laster...",loading:!0}},c={args:{children:"Videresend","data-size":"lg","data-color":"neutral",variant:"secondary"}},d={render:e=>a.jsx(r,{asChild:!0,...e,children:a.jsx("a",{href:"https://designsystemet.no/",target:"_blank",rel:"noopener noreferrer",children:"Gå til Designsystemet"})}),args:{asChild:!0,variant:"primary"}},g={name:"Example Tertiary with Icon",args:{children:a.jsxs(a.Fragment,{children:[a.jsx(xa,{"aria-hidden":!0}),"Rediger"]}),variant:"tertiary","data-color":"accent"}},p={name:"Example Danger with Icon",render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsxs(r,{...e,variant:"primary","data-color":"danger",children:[a.jsx(S,{"aria-hidden":!0}),"Slett"]}),a.jsxs(r,{...e,variant:"secondary","data-color":"danger",children:[a.jsx(S,{"aria-hidden":!0}),"Slett"]}),a.jsxs(r,{...e,variant:"tertiary","data-color":"danger",children:[a.jsx(S,{"aria-hidden":!0}),"Slett"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},u={name:"Example As Link with Icon",render:e=>a.jsx(r,{asChild:!0,...e,children:a.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.designsystemet.no",children:["Gå til Designsystemet",a.jsx(ha,{title:"Ekstern lenke",style:{marginLeft:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}})]})}),args:{asChild:!0,variant:"primary"}},m={name:"Example With Icons",render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsxs(r,{...e,variant:"primary","data-color":"neutral",children:["Start utfylling",a.jsx(fa,{"aria-hidden":!0,style:{marginLeft:"var(--ds-spacing-1, 4px)"}})]}),a.jsxs(r,{...e,variant:"secondary","data-color":"neutral",children:[a.jsx(Sa,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)"}}),"Angre"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},h={name:"Example Icon Only with Tooltip",render:e=>a.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[a.jsx(f,{content:"Legg til ny",children:a.jsx(r,{...e,icon:!0,"aria-label":"Legg til ny",children:a.jsx(ya,{"aria-hidden":!0})})}),a.jsx(f,{content:"Varslinger",children:a.jsx(r,{...e,icon:!0,"aria-label":"Varslinger",children:a.jsx(va,{"aria-hidden":!0})})}),a.jsx(f,{content:"Instillinger",children:a.jsx(r,{...e,icon:!0,"aria-label":"Innstillinger",children:a.jsx(ba,{"aria-hidden":!0})})})]}),args:{variant:"tertiary","data-color":"neutral","data-size":"md"},argTypes:{variant:{control:!1},children:{control:!1},"aria-label":{control:!1}}},y={name:"Test: Interaction",args:{children:"Lagre",variant:"primary"},play:async({canvasElement:e})=>{const n=B(e).getByRole("button",{name:/lagre/i});x(n).toBeInTheDocument(),x(n).not.toBeDisabled(),await Ba.click(n)}},v={name:"Test: Disabled State",args:{children:"Deaktivert",variant:"primary",disabled:!0},play:async({canvasElement:e})=>{const n=B(e).getByRole("button",{name:/deaktivert/i});x(n).toBeDisabled()}},b={name:"Test: Loading State",args:{children:"Laster...",loading:!0},play:async({canvasElement:e})=>{const n=B(e).getByRole("button");x(n).toHaveAttribute("aria-busy","true")}};var I,L,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Lagre',
    variant: 'primary'
  }
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var k,w,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Avbryt',
    variant: 'secondary'
  }
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var D,A,R;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Rediger',
    variant: 'tertiary'
  }
}`,...(R=(A=o.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,V,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Slett',
    variant: 'primary',
    'data-color': 'danger'
  }
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var C,z,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Laster...',
    loading: true
  }
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var P,G,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Videresend',
    'data-size': 'lg',
    'data-color': 'neutral',
    variant: 'secondary'
  }
}`,...(U=(G=c.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var H,K,M;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args =>
  // @ts-expect-error Storybook args spread
  <Button asChild {...args as unknown as ButtonProps}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Button>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,F,Y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Example Tertiary with Icon',
  args: {
    children: <>
        <PencilWritingIcon aria-hidden />
        Rediger
      </>,
    variant: 'tertiary',
    'data-color': 'accent'
  }
}`,...(Y=(F=g.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var q,J,Q;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Example Danger with Icon',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Button {...args} variant="primary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Button>
      <Button {...args} variant="secondary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Button>
      <Button {...args} variant="tertiary" data-color="danger">
        <TrashIcon aria-hidden />
        Slett
      </Button>
    </div>,
  args: {
    'data-size': 'md'
  },
  argTypes: {
    variant: {
      control: false
    },
    'data-color': {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Example As Link with Icon',
  render: args =>
  // @ts-expect-error Storybook args spread
  <Button asChild {...args as unknown as ButtonProps}>
      <a target="_blank" rel="noreferrer" href="https://www.designsystemet.no">
        Gå til Designsystemet
        <ExternalLinkIcon title="Ekstern lenke" style={{
        marginLeft: 'var(--ds-spacing-1, 4px)',
        verticalAlign: 'middle'
      }} />
      </a>
    </Button>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var aa,ea,ra;m.parameters={...m.parameters,docs:{...(aa=m.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Example With Icons',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
        <Button {...args} variant='primary' data-color='neutral'>
          Start utfylling
          <ArrowRightIcon aria-hidden style={{
        marginLeft: 'var(--ds-spacing-1, 4px)'
      }} />
        </Button>
        <Button {...args} variant='secondary' data-color='neutral'>
          <ArrowUndoIcon aria-hidden style={{
        marginRight: 'var(--ds-spacing-1, 4px)'
      }} />
          Angre
        </Button>
     </div>,
  args: {
    'data-size': 'md'
  },
  argTypes: {
    variant: {
      control: false
    },
    'data-color': {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(ra=(ea=m.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var na,ta,sa;h.parameters={...h.parameters,docs:{...(na=h.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: 'Example Icon Only with Tooltip',
  render: args => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
       <Tooltip content='Legg til ny'>
        <Button {...args} icon aria-label='Legg til ny'>
          <PlusCircleIcon aria-hidden />
        </Button>
      </Tooltip>
      <Tooltip content='Varslinger'>
        <Button {...args} icon aria-label='Varslinger'>
          <BellIcon aria-hidden />
        </Button>
      </Tooltip>
      <Tooltip content='Instillinger'>
        <Button {...args} icon aria-label='Innstillinger'>
          <CogIcon aria-hidden />
        </Button>
      </Tooltip>
    </div>,
  args: {
    variant: 'tertiary',
    'data-color': 'neutral',
    'data-size': 'md'
  },
  argTypes: {
    variant: {
      control: false
    },
    children: {
      control: false
    },
    'aria-label': {
      control: false
    }
  }
}`,...(sa=(ta=h.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var oa,ia,la;y.parameters={...y.parameters,docs:{...(oa=y.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  args: {
    children: 'Lagre',
    variant: 'primary'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify button renders with correct text
    const button = canvas.getByRole('button', {
      name: /lagre/i
    });
    expect(button).toBeInTheDocument();

    // Button should be clickable (not disabled)
    expect(button).not.toBeDisabled();
    await userEvent.click(button);
  }
}`,...(la=(ia=y.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,da,ga;v.parameters={...v.parameters,docs:{...(ca=v.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: 'Test: Disabled State',
  args: {
    children: 'Deaktivert',
    variant: 'primary',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /deaktivert/i
    });
    expect(button).toBeDisabled();
  }
}`,...(ga=(da=v.parameters)==null?void 0:da.docs)==null?void 0:ga.source}}};var pa,ua,ma;b.parameters={...b.parameters,docs:{...(pa=b.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: 'Test: Loading State',
  args: {
    children: 'Laster...',
    loading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
  }
}`,...(ma=(ua=b.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};const Ia=["Primary","Secondary","Tertiary","Danger","Loading","LargeNeutral","AsLink","TertiaryWithIcon","DangerWithIcon","AsLinkWithIcon","WithIcons","IconOnlyWithTooltip","TestInteraction","TestDisabledState","TestLoadingState"],Ea=Object.freeze(Object.defineProperty({__proto__:null,AsLink:d,AsLinkWithIcon:u,Danger:i,DangerWithIcon:p,IconOnlyWithTooltip:h,LargeNeutral:c,Loading:l,Primary:t,Secondary:s,Tertiary:o,TertiaryWithIcon:g,TestDisabledState:v,TestInteraction:y,TestLoadingState:b,WithIcons:m,__namedExportsOrder:Ia,default:Ta},Symbol.toStringTag,{value:"Module"}));export{d as A,Ea as B,i as D,h as I,l as L,t as P,s as S,o as T,m as W,g as a,p as b,u as c,c as d};
