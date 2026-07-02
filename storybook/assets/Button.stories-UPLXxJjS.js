import{j as a,r as ba}from"./iframe-BzFClqZ6.js";import{B as r}from"./index-CGSGoqW8.js";import{T}from"./index-DASipRmL.js";import{S as fa,a as S,b as Ta,c as Sa,d as Ba,e as Ia,f as ja,g as La}from"./Trash-CnpTTLFq.js";const{expect:f,within:B,userEvent:wa}=__STORYBOOK_MODULE_TEST__,Ea={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"Button label",defaultValue:"Knapp"},disabled:{control:"boolean",description:"Disable the button",defaultValue:!1},variant:{control:"select",options:["primary","secondary","tertiary"],description:"Color treatment.",defaultValue:"primary"},"data-size":{control:"select",options:["sm","md","lg"],description:"Button size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Button color scheme",defaultValue:"accent"},loading:{control:"boolean",description:"Loading state",defaultValue:!1},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},type:{control:"select",options:["button","submit","reset"],description:"Button type",defaultValue:"button"},"aria-label":{control:"text",description:"Aria label (especially if children is empty/icon)"}}},t={args:{children:"Lagre",variant:"primary"}},s={args:{children:"Avbryt",variant:"secondary"}},o={args:{children:"Rediger",variant:"tertiary"}},i={args:{children:"Slett",variant:"primary","data-color":"danger"}},l={args:{children:"Laster...",loading:!0}},c={args:{children:"Videresend","data-size":"lg","data-color":"neutral",variant:"secondary"}},d={name:"Overview: variants",render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"1rem",alignItems:"center"},children:["primary","secondary","tertiary"].map(e=>a.jsxs(ba.Fragment,{children:[a.jsx("strong",{children:e}),a.jsx(r,{variant:e,children:"Knapp"})]},e))}),argTypes:{variant:{control:!1},children:{control:!1},"data-color":{control:!1}}},g={render:e=>a.jsx(r,{asChild:!0,...e,children:a.jsx("a",{href:"https://designsystemet.no/",target:"_blank",rel:"noopener noreferrer",children:"Gå til Designsystemet"})}),args:{asChild:!0,variant:"primary"}},p={name:"Example Tertiary with Icon",args:{children:a.jsxs(a.Fragment,{children:[a.jsx(Ia,{"aria-hidden":!0}),"Rediger"]}),variant:"tertiary","data-color":"accent"}},m={name:"Example Danger with Icon",render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsxs(r,{...e,variant:"primary","data-color":"danger",children:[a.jsx(S,{"aria-hidden":!0}),"Slett"]}),a.jsxs(r,{...e,variant:"secondary","data-color":"danger",children:[a.jsx(S,{"aria-hidden":!0}),"Slett"]}),a.jsxs(r,{...e,variant:"tertiary","data-color":"danger",children:[a.jsx(S,{"aria-hidden":!0}),"Slett"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},u={name:"Example As Link with Icon",render:e=>a.jsx(r,{asChild:!0,...e,children:a.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.designsystemet.no",children:["Gå til Designsystemet",a.jsx(fa,{title:"Ekstern lenke",style:{marginLeft:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}})]})}),args:{asChild:!0,variant:"primary"}},y={name:"Example With Icons",render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsxs(r,{...e,variant:"primary","data-color":"neutral",children:["Start utfylling",a.jsx(ja,{"aria-hidden":!0,style:{marginLeft:"var(--ds-spacing-1, 4px)"}})]}),a.jsxs(r,{...e,variant:"secondary","data-color":"neutral",children:[a.jsx(La,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)"}}),"Angre"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},h={name:"Example Icon Only with Tooltip",render:e=>a.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[a.jsx(T,{content:"Legg til ny",children:a.jsx(r,{...e,icon:!0,"aria-label":"Legg til ny",children:a.jsx(Ta,{"aria-hidden":!0})})}),a.jsx(T,{content:"Varslinger",children:a.jsx(r,{...e,icon:!0,"aria-label":"Varslinger",children:a.jsx(Sa,{"aria-hidden":!0})})}),a.jsx(T,{content:"Instillinger",children:a.jsx(r,{...e,icon:!0,"aria-label":"Innstillinger",children:a.jsx(Ba,{"aria-hidden":!0})})})]}),args:{variant:"tertiary","data-color":"neutral","data-size":"md"},argTypes:{variant:{control:!1},children:{control:!1},"aria-label":{control:!1}}},v={name:"Test: Interaction",args:{children:"Lagre",variant:"primary"},play:async({canvasElement:e})=>{const n=B(e).getByRole("button",{name:/lagre/i});f(n).toBeInTheDocument(),f(n).not.toBeDisabled(),await wa.click(n)}},x={name:"Test: Disabled State",args:{children:"Deaktivert",variant:"primary",disabled:!0},play:async({canvasElement:e})=>{const n=B(e).getByRole("button",{name:/deaktivert/i});f(n).toBeDisabled()}},b={name:"Test: Loading State",args:{children:"Laster...",loading:!0},play:async({canvasElement:e})=>{const n=B(e).getByRole("button");f(n).toHaveAttribute("aria-busy","true")}};var j,L,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Lagre',
    variant: 'primary'
  }
}`,...(w=(L=t.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var E,k,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Avbryt',
    variant: 'secondary'
  }
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var A,C,R;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Rediger',
    variant: 'tertiary'
  }
}`,...(R=(C=o.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var V,_,O;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Slett',
    variant: 'primary',
    'data-color': 'danger'
  }
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var W,z,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Laster...',
    loading: true
  }
}`,...(P=(z=l.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var F,G,K;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Videresend',
    'data-size': 'lg',
    'data-color': 'neutral',
    variant: 'secondary'
  }
}`,...(K=(G=c.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,H,M;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Overview: variants',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '1rem',
    alignItems: 'center'
  }}>
      {(['primary', 'secondary', 'tertiary'] as const).map(v => <Fragment key={v}>
          <strong>{v}</strong>
          <Button variant={v}>Knapp</Button>
        </Fragment>)}
    </div>,
  argTypes: {
    variant: {
      control: false
    },
    children: {
      control: false
    },
    'data-color': {
      control: false
    }
  }
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,Y,q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Button asChild {...args as unknown as ButtonProps}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Button>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...(q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Example Tertiary with Icon',
  args: {
    children: <>
        <PencilWritingIcon aria-hidden />
        Rediger
      </>,
    variant: 'tertiary',
    'data-color': 'accent'
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,aa;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(aa=($=m.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ea,ra,na;u.parameters={...u.parameters,docs:{...(ea=u.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Example As Link with Icon',
  render: args => <Button asChild {...args as unknown as ButtonProps}>
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
}`,...(na=(ra=u.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};var ta,sa,oa;y.parameters={...y.parameters,docs:{...(ta=y.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(sa=y.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,la,ca;h.parameters={...h.parameters,docs:{...(ia=h.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ca=(la=h.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var da,ga,pa;v.parameters={...v.parameters,docs:{...(da=v.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(pa=(ga=v.parameters)==null?void 0:ga.docs)==null?void 0:pa.source}}};var ma,ua,ya;x.parameters={...x.parameters,docs:{...(ma=x.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(ya=(ua=x.parameters)==null?void 0:ua.docs)==null?void 0:ya.source}}};var ha,va,xa;b.parameters={...b.parameters,docs:{...(ha=b.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(xa=(va=b.parameters)==null?void 0:va.docs)==null?void 0:xa.source}}};const ka=["Primary","Secondary","Tertiary","Danger","Loading","LargeNeutral","VariantOverview","AsLink","TertiaryWithIcon","DangerWithIcon","AsLinkWithIcon","WithIcons","IconOnlyWithTooltip","TestInteraction","TestDisabledState","TestLoadingState"],Va=Object.freeze(Object.defineProperty({__proto__:null,AsLink:g,AsLinkWithIcon:u,Danger:i,DangerWithIcon:m,IconOnlyWithTooltip:h,LargeNeutral:c,Loading:l,Primary:t,Secondary:s,Tertiary:o,TertiaryWithIcon:p,TestDisabledState:x,TestInteraction:v,TestLoadingState:b,VariantOverview:d,WithIcons:y,__namedExportsOrder:ka,default:Ea},Symbol.toStringTag,{value:"Module"}));export{g as A,Va as B,i as D,h as I,l as L,t as P,s as S,o as T,y as W,p as a,m as b,u as c,c as d};
