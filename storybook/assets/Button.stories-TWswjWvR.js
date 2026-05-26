import{j as a,r as Aa}from"./iframe-_4Br446N.js";import{B as r}from"./index-Djik7tWO.js";import{T as I}from"./index-DqrXibms.js";import{S as Ca,a as j,b as Va,c as Ra,d as Wa,e as _a,f as Oa,g as Pa}from"./Trash-I_k0_9oM.js";const{expect:B,within:L,userEvent:za}=__STORYBOOK_MODULE_TEST__,Ma={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"Button label",defaultValue:"Knapp"},disabled:{control:"boolean",description:"Disable the button",defaultValue:!1},variant:{control:"select",options:["primary","secondary","tertiary","soft"],description:'Color treatment. "soft" is an rk-designsystem extension: tinted surface, no border; color follows the active data-color cascade.',defaultValue:"primary"},shape:{control:"radio",options:["squared","pill"],description:'Geometry. "pill" fully rounds both ends. Orthogonal to variant.',defaultValue:"squared"},"data-size":{control:"select",options:["sm","md","lg"],description:"Button size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Button color scheme",defaultValue:"accent"},loading:{control:"boolean",description:"Loading state",defaultValue:!1},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},type:{control:"select",options:["button","submit","reset"],description:"Button type",defaultValue:"button"},"aria-label":{control:"text",description:"Aria label (especially if children is empty/icon)"}}},t={args:{children:"Lagre",variant:"primary"}},s={args:{children:"Avbryt",variant:"secondary"}},o={args:{children:"Rediger",variant:"tertiary"}},i={args:{children:"Slett",variant:"primary","data-color":"danger"}},l={args:{children:"Laster...",loading:!0}},c={args:{children:"Videresend","data-size":"lg","data-color":"neutral",variant:"secondary"}},d={args:{children:"Meny",variant:"soft","data-color":"neutral"},parameters:{docs:{description:{story:"Tinted surface, no border. The active `data-color` cascade picks the ramp (here: neutral)."}}}},p={args:{children:"Søk",variant:"secondary",shape:"pill"},parameters:{docs:{description:{story:'`shape="pill"` fully rounds the button. Orthogonal to `variant`.'}}}},m={args:{children:"Meny",variant:"soft",shape:"pill","data-color":"main"},parameters:{docs:{description:{story:'Combine the two axes. With `data-color="main"` the soft tint resolves to the brand-red surface ramp — same look as the Header soft variant.'}}}},g={name:"Matrix: variant × shape",render:()=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(2, 1fr)",gap:"1rem",alignItems:"center"},children:[a.jsx("span",{}),a.jsx("strong",{children:"squared"}),a.jsx("strong",{children:"pill"}),["primary","secondary","tertiary","soft"].map(e=>a.jsxs(Aa.Fragment,{children:[a.jsx("strong",{children:e}),a.jsx(r,{variant:e,children:"Knapp"}),a.jsx(r,{variant:e,shape:"pill",children:"Knapp"})]},e))]}),argTypes:{variant:{control:!1},shape:{control:!1},children:{control:!1},"data-color":{control:!1}}},u={render:e=>a.jsx(r,{asChild:!0,...e,children:a.jsx("a",{href:"https://designsystemet.no/",target:"_blank",rel:"noopener noreferrer",children:"Gå til Designsystemet"})}),args:{asChild:!0,variant:"primary"}},h={name:"Example Tertiary with Icon",args:{children:a.jsxs(a.Fragment,{children:[a.jsx(_a,{"aria-hidden":!0}),"Rediger"]}),variant:"tertiary","data-color":"accent"}},y={name:"Example Danger with Icon",render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsxs(r,{...e,variant:"primary","data-color":"danger",children:[a.jsx(j,{"aria-hidden":!0}),"Slett"]}),a.jsxs(r,{...e,variant:"secondary","data-color":"danger",children:[a.jsx(j,{"aria-hidden":!0}),"Slett"]}),a.jsxs(r,{...e,variant:"tertiary","data-color":"danger",children:[a.jsx(j,{"aria-hidden":!0}),"Slett"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},v={name:"Example As Link with Icon",render:e=>a.jsx(r,{asChild:!0,...e,children:a.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.designsystemet.no",children:["Gå til Designsystemet",a.jsx(Ca,{title:"Ekstern lenke",style:{marginLeft:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}})]})}),args:{asChild:!0,variant:"primary"}},f={name:"Example With Icons",render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsxs(r,{...e,variant:"primary","data-color":"neutral",children:["Start utfylling",a.jsx(Oa,{"aria-hidden":!0,style:{marginLeft:"var(--ds-spacing-1, 4px)"}})]}),a.jsxs(r,{...e,variant:"secondary","data-color":"neutral",children:[a.jsx(Pa,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)"}}),"Angre"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},x={name:"Example Icon Only with Tooltip",render:e=>a.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[a.jsx(I,{content:"Legg til ny",children:a.jsx(r,{...e,icon:!0,"aria-label":"Legg til ny",children:a.jsx(Va,{"aria-hidden":!0})})}),a.jsx(I,{content:"Varslinger",children:a.jsx(r,{...e,icon:!0,"aria-label":"Varslinger",children:a.jsx(Ra,{"aria-hidden":!0})})}),a.jsx(I,{content:"Instillinger",children:a.jsx(r,{...e,icon:!0,"aria-label":"Innstillinger",children:a.jsx(Wa,{"aria-hidden":!0})})})]}),args:{variant:"tertiary","data-color":"neutral","data-size":"md"},argTypes:{variant:{control:!1},children:{control:!1},"aria-label":{control:!1}}},b={name:"Test: Interaction",args:{children:"Lagre",variant:"primary"},play:async({canvasElement:e})=>{const n=L(e).getByRole("button",{name:/lagre/i});B(n).toBeInTheDocument(),B(n).not.toBeDisabled(),await za.click(n)}},S={name:"Test: Disabled State",args:{children:"Deaktivert",variant:"primary",disabled:!0},play:async({canvasElement:e})=>{const n=L(e).getByRole("button",{name:/deaktivert/i});B(n).toBeDisabled()}},T={name:"Test: Loading State",args:{children:"Laster...",loading:!0},play:async({canvasElement:e})=>{const n=L(e).getByRole("button");B(n).toHaveAttribute("aria-busy","true")}};var w,E,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Lagre',
    variant: 'primary'
  }
}`,...(D=(E=t.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var A,C,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Avbryt',
    variant: 'secondary'
  }
}`,...(V=(C=s.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var R,W,_;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Rediger',
    variant: 'tertiary'
  }
}`,...(_=(W=o.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,P,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Slett',
    variant: 'primary',
    'data-color': 'danger'
  }
}`,...(z=(P=i.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var M,K,G;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Laster...',
    loading: true
  }
}`,...(G=(K=l.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var q,F,H;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Videresend',
    'data-size': 'lg',
    'data-color': 'neutral',
    variant: 'secondary'
  }
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var U,N,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Meny',
    variant: 'soft',
    'data-color': 'neutral'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tinted surface, no border. The active \`data-color\` cascade picks the ramp (here: neutral).'
      }
    }
  }
}`,...(Y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'Søk',
    variant: 'secondary',
    shape: 'pill'
  },
  parameters: {
    docs: {
      description: {
        story: '\`shape="pill"\` fully rounds the button. Orthogonal to \`variant\`.'
      }
    }
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,aa;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Meny',
    variant: 'soft',
    shape: 'pill',
    'data-color': 'main'
  },
  parameters: {
    docs: {
      description: {
        story: 'Combine the two axes. With \`data-color="main"\` the soft tint resolves to the brand-red surface ramp — same look as the Header soft variant.'
      }
    }
  }
}`,...(aa=($=m.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ea,ra,na;g.parameters={...g.parameters,docs:{...(ea=g.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Matrix: variant × shape',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(2, 1fr)',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <span />
      <strong>squared</strong>
      <strong>pill</strong>
      {(['primary', 'secondary', 'tertiary', 'soft'] as const).map(v => <Fragment key={v}>
          <strong>{v}</strong>
          <Button variant={v}>Knapp</Button>
          <Button variant={v} shape="pill">Knapp</Button>
        </Fragment>)}
    </div>,
  argTypes: {
    variant: {
      control: false
    },
    shape: {
      control: false
    },
    children: {
      control: false
    },
    'data-color': {
      control: false
    }
  }
}`,...(na=(ra=g.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};var ta,sa,oa;u.parameters={...u.parameters,docs:{...(ta=u.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: args => <Button asChild {...args as unknown as ButtonProps}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Button>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...(oa=(sa=u.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,la,ca;h.parameters={...h.parameters,docs:{...(ia=h.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: 'Example Tertiary with Icon',
  args: {
    children: <>
        <PencilWritingIcon aria-hidden />
        Rediger
      </>,
    variant: 'tertiary',
    'data-color': 'accent'
  }
}`,...(ca=(la=h.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var da,pa,ma;y.parameters={...y.parameters,docs:{...(da=y.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(pa=y.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ga,ua,ha;v.parameters={...v.parameters,docs:{...(ga=v.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(ha=(ua=v.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};var ya,va,fa;f.parameters={...f.parameters,docs:{...(ya=f.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(fa=(va=f.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};var xa,ba,Sa;x.parameters={...x.parameters,docs:{...(xa=x.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Sa=(ba=x.parameters)==null?void 0:ba.docs)==null?void 0:Sa.source}}};var Ta,Ba,Ia;b.parameters={...b.parameters,docs:{...(Ta=b.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ia=(Ba=b.parameters)==null?void 0:Ba.docs)==null?void 0:Ia.source}}};var ja,La,ka;S.parameters={...S.parameters,docs:{...(ja=S.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(ka=(La=S.parameters)==null?void 0:La.docs)==null?void 0:ka.source}}};var wa,Ea,Da;T.parameters={...T.parameters,docs:{...(wa=T.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(Da=(Ea=T.parameters)==null?void 0:Ea.docs)==null?void 0:Da.source}}};const Ka=["Primary","Secondary","Tertiary","Danger","Loading","LargeNeutral","Soft","Pill","SoftPill","VariantShapeMatrix","AsLink","TertiaryWithIcon","DangerWithIcon","AsLinkWithIcon","WithIcons","IconOnlyWithTooltip","TestInteraction","TestDisabledState","TestLoadingState"],Ua=Object.freeze(Object.defineProperty({__proto__:null,AsLink:u,AsLinkWithIcon:v,Danger:i,DangerWithIcon:y,IconOnlyWithTooltip:x,LargeNeutral:c,Loading:l,Pill:p,Primary:t,Secondary:s,Soft:d,SoftPill:m,Tertiary:o,TertiaryWithIcon:h,TestDisabledState:S,TestInteraction:b,TestLoadingState:T,VariantShapeMatrix:g,WithIcons:f,__namedExportsOrder:Ka,default:Ma},Symbol.toStringTag,{value:"Module"}));export{u as A,Ua as B,i as D,x as I,l as L,t as P,s as S,o as T,f as W,h as a,y as b,v as c,c as d};
