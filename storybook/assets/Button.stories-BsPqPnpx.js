import{j as r}from"./iframe-CDFAJ_Fh.js";import{B as e}from"./index-DQpgyAJR.js";import{T as h}from"./index-3Au7Fkhu.js";import{e as $,g as y,d as rr,S as ar,a as er,f as nr,b as tr,c as sr}from"./Trash-BKF11yil.js";import"./preload-helper-Dp1pzeXC.js";import"./button-BW5FGdeT.js";import"./index-DYxErLs_.js";import"./lite-DaUVFjkg.js";import"./spinner-BJZoTRgL.js";import"./use-merge-refs-CwQk-qeo.js";import"./floating-ui.dom-BOb7AeKv.js";import"./useId-BjA0csno.js";const xr={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{children:{control:"text",description:"Button label",defaultValue:"Knapp"},disabled:{control:"boolean",description:"Disable the button",defaultValue:!1},variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant",defaultValue:"primary"},"data-size":{control:"select",options:["sm","md","lg"],description:"Button size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Button color scheme",defaultValue:"accent"},loading:{control:"boolean",description:"Loading state",defaultValue:!1},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},type:{control:"select",options:["button","submit","reset"],description:"Button type",defaultValue:"button"},"aria-label":{control:"text",description:"Aria label (especially if children is empty/icon)"}}},n={args:{children:"Lagre",variant:"primary"}},t={args:{children:"Avbryt",variant:"secondary"}},s={args:{children:"Rediger",variant:"tertiary"}},o={args:{children:"Slett",variant:"primary","data-color":"danger"}},i={args:{children:"Laster...",loading:!0}},l={args:{children:"Videresend","data-size":"lg","data-color":"neutral",variant:"secondary"}},c={render:a=>r.jsx(e,{asChild:!0,...a,children:r.jsx("a",{href:"https://designsystemet.no/",target:"_blank",rel:"noopener noreferrer",children:"Gå til Designsystemet"})}),args:{asChild:!0,variant:"primary"}},d={name:"Example Tertiary with Icon",args:{children:r.jsxs(r.Fragment,{children:[r.jsx($,{"aria-hidden":!0}),"Rediger"]}),variant:"tertiary","data-color":"accent"}},g={name:"Example Danger with Icon",render:a=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsxs(e,{...a,variant:"primary","data-color":"danger",children:[r.jsx(y,{"aria-hidden":!0}),"Slett"]}),r.jsxs(e,{...a,variant:"secondary","data-color":"danger",children:[r.jsx(y,{"aria-hidden":!0}),"Slett"]}),r.jsxs(e,{...a,variant:"tertiary","data-color":"danger",children:[r.jsx(y,{"aria-hidden":!0}),"Slett"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},p={name:"Example As Link with Icon",render:a=>r.jsx(e,{asChild:!0,...a,children:r.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.designsystemet.no",children:["Gå til Designsystemet",r.jsx(rr,{title:"Ekstern lenke",style:{marginLeft:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}})]})}),args:{asChild:!0,variant:"primary"}},m={name:"Example With Icons",render:a=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsxs(e,{...a,variant:"primary","data-color":"neutral",children:["Start utfylling",r.jsx(ar,{"aria-hidden":!0,style:{marginLeft:"var(--ds-spacing-1, 4px)"}})]}),r.jsxs(e,{...a,variant:"secondary","data-color":"neutral",children:[r.jsx(er,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)"}}),"Angre"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},u={name:"Example Icon Only with Tooltip",render:a=>r.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[r.jsx(h,{content:"Legg til ny",children:r.jsx(e,{...a,icon:!0,"aria-label":"Legg til ny",children:r.jsx(nr,{"aria-hidden":!0})})}),r.jsx(h,{content:"Varslinger",children:r.jsx(e,{...a,icon:!0,"aria-label":"Varslinger",children:r.jsx(tr,{"aria-hidden":!0})})}),r.jsx(h,{content:"Instillinger",children:r.jsx(e,{...a,icon:!0,"aria-label":"Innstillinger",children:r.jsx(sr,{"aria-hidden":!0})})})]}),args:{variant:"tertiary","data-color":"neutral","data-size":"md"},argTypes:{variant:{control:!1},children:{control:!1},"aria-label":{control:!1}}};var v,x,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Lagre',
    variant: 'primary'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,S,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Avbryt',
    variant: 'secondary'
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,B,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Rediger',
    variant: 'tertiary'
  }
}`,...(T=(B=s.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var L,w,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Slett',
    variant: 'primary',
    'data-color': 'danger'
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,E,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Laster...',
    loading: true
  }
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var V,W,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Videresend',
    'data-size': 'lg',
    'data-color': 'neutral',
    variant: 'secondary'
  }
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var z,R,P;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Button asChild {...args as any}>
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">
        Gå til Designsystemet
      </a>
    </Button>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var _,O,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Example Tertiary with Icon',
  args: {
    children: <>
        <PencilWritingIcon aria-hidden />
        Rediger
      </>,
    variant: 'tertiary',
    'data-color': 'accent'
  }
}`,...(G=(O=d.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var N,U,F;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(U=g.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var K,q,H;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Example As Link with Icon',
  render: args => <Button asChild {...args as any}>
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
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,M,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const fr=["Primary","Secondary","Tertiary","Danger","Loading","LargeNeutral","AsLink","TertiaryWithIcon","DangerWithIcon","AsLinkWithIcon","WithIcons","IconOnlyWithTooltip"];export{c as AsLink,p as AsLinkWithIcon,o as Danger,g as DangerWithIcon,u as IconOnlyWithTooltip,l as LargeNeutral,i as Loading,n as Primary,t as Secondary,s as Tertiary,d as TertiaryWithIcon,m as WithIcons,fr as __namedExportsOrder,xr as default};
