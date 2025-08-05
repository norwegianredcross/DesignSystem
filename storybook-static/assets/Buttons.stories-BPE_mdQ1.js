import{j as r}from"./iframe-BagKezlM.js";import{B as e}from"./index-ClbwpiGB.js";import{T as h}from"./index-VtqcYsPJ.js";import{e as $,g as y,d as rr,S as ar,a as er,f as nr,b as tr,c as sr}from"./Trash-BkGIMj5s.js";import"./preload-helper-C1FmrZbK.js";import"./Button-CaS7JG-o.js";import"./index-UUdmfCXh.js";import"./lite-DaUVFjkg.js";import"./Spinner-DEavn-Na.js";import"./floating-ui.react-KqRGCIp5.js";import"./index-CINeIW-J.js";import"./index-BYMxJ67J.js";import"./floating-ui.dom-D8S3B1vO.js";import"./useId-DxA82c0h.js";const Ir={title:"Components/Buttons",component:e,tags:["autodocs"],argTypes:{children:{control:"text",description:"Button label",defaultValue:"Knapp"},disabled:{control:"boolean",description:"Disable the button",defaultValue:!1},variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant",defaultValue:"primary"},"data-size":{control:"select",options:["sm","md","lg"],description:"Button size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral","danger"],description:"Button color scheme",defaultValue:"accent"},loading:{control:"boolean",description:"Loading state",defaultValue:!1},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},type:{control:"select",options:["button","submit","reset"],description:"Button type",defaultValue:"button"},"aria-label":{control:"text",description:"Aria label (especially if children is empty/icon)"}}},n={args:{children:"Lagre",variant:"primary"}},t={args:{children:"Avbryt",variant:"secondary"}},s={args:{children:"Rediger",variant:"tertiary"}},o={args:{children:"Slett",variant:"primary","data-color":"danger"}},i={args:{children:"Laster...",loading:!0}},l={args:{children:"Videresend","data-size":"lg","data-color":"neutral",variant:"secondary"}},c={render:a=>r.jsx(e,{asChild:!0,...a,children:r.jsx("a",{href:"https://designsystemet.no/",target:"_blank",rel:"noopener noreferrer",children:"Gå til Designsystemet"})}),args:{asChild:!0,variant:"primary"}},d={name:"Example Tertiary with Icon",args:{children:r.jsxs(r.Fragment,{children:[r.jsx($,{"aria-hidden":!0}),"Rediger"]}),variant:"tertiary","data-color":"accent"}},p={name:"Example Danger with Icon",render:a=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsxs(e,{...a,variant:"primary","data-color":"danger",children:[r.jsx(y,{"aria-hidden":!0}),"Slett"]}),r.jsxs(e,{...a,variant:"secondary","data-color":"danger",children:[r.jsx(y,{"aria-hidden":!0}),"Slett"]}),r.jsxs(e,{...a,variant:"tertiary","data-color":"danger",children:[r.jsx(y,{"aria-hidden":!0}),"Slett"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},g={name:"Example As Link with Icon",render:a=>r.jsx(e,{asChild:!0,...a,children:r.jsxs("a",{target:"_blank",rel:"noreferrer",href:"https://www.designsystemet.no",children:["Gå til Designsystemet",r.jsx(rr,{title:"Ekstern lenke",style:{marginLeft:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}})]})}),args:{asChild:!0,variant:"primary"}},m={name:"Example With Icons",render:a=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsxs(e,{...a,variant:"primary","data-color":"neutral",children:["Start utfylling",r.jsx(ar,{"aria-hidden":!0,style:{marginLeft:"var(--ds-spacing-1, 4px)"}})]}),r.jsxs(e,{...a,variant:"secondary","data-color":"neutral",children:[r.jsx(er,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)"}}),"Angre"]})]}),args:{"data-size":"md"},argTypes:{variant:{control:!1},"data-color":{control:!1},children:{control:!1}}},u={name:"Example Icon Only with Tooltip",render:a=>r.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[r.jsx(h,{content:"Legg til ny",children:r.jsx(e,{...a,icon:!0,"aria-label":"Legg til ny",children:r.jsx(nr,{"aria-hidden":!0})})}),r.jsx(h,{content:"Varslinger",children:r.jsx(e,{...a,icon:!0,"aria-label":"Varslinger",children:r.jsx(tr,{"aria-hidden":!0})})}),r.jsx(h,{content:"Instillinger",children:r.jsx(e,{...a,icon:!0,"aria-label":"Innstillinger",children:r.jsx(sr,{"aria-hidden":!0})})})]}),args:{variant:"tertiary","data-color":"neutral","data-size":"md"},argTypes:{variant:{control:!1},children:{control:!1},"aria-label":{control:!1}}};var v,x,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  render: args => <Buttons asChild {...args as any}>\r
      <a href="https://designsystemet.no/" target="_blank" rel="noopener noreferrer">\r
        Gå til Designsystemet\r
      </a>\r
    </Buttons>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var _,O,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Example Tertiary with Icon',
  args: {
    children: <>\r
        <PencilWritingIcon aria-hidden />\r
        Rediger\r
      </>,
    variant: 'tertiary',
    'data-color': 'accent'
  }
}`,...(G=(O=d.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var N,U,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Example Danger with Icon',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <Buttons {...args} variant="primary" data-color="danger">\r
        <TrashIcon aria-hidden />\r
        Slett\r
      </Buttons>\r
      <Buttons {...args} variant="secondary" data-color="danger">\r
        <TrashIcon aria-hidden />\r
        Slett\r
      </Buttons>\r
      <Buttons {...args} variant="tertiary" data-color="danger">\r
        <TrashIcon aria-hidden />\r
        Slett\r
      </Buttons>\r
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
}`,...(F=(U=p.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var K,q,H;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Example As Link with Icon',
  render: args => <Buttons asChild {...args as any}>\r
      <a target="_blank" rel="noreferrer" href="https://www.designsystemet.no">\r
        Gå til Designsystemet\r
        <ExternalLinkIcon title="Ekstern lenke" style={{
        marginLeft: 'var(--ds-spacing-1, 4px)',
        verticalAlign: 'middle'
      }} />\r
      </a>\r
    </Buttons>,
  args: {
    asChild: true,
    variant: 'primary'
  }
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,M,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Example With Icons',
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
        <Buttons {...args} variant='primary' data-color='neutral'>\r
          Start utfylling\r
          <ArrowRightIcon aria-hidden style={{
        marginLeft: 'var(--ds-spacing-1, 4px)'
      }} />\r
        </Buttons>\r
        <Buttons {...args} variant='secondary' data-color='neutral'>\r
          <ArrowUndoIcon aria-hidden style={{
        marginRight: 'var(--ds-spacing-1, 4px)'
      }} />\r
          Angre\r
        </Buttons>\r
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
  }}>\r
       <Tooltip content='Legg til ny'>\r
        <Buttons {...args} icon aria-label='Legg til ny'>\r
          <PlusCircleIcon aria-hidden />\r
        </Buttons>\r
      </Tooltip>\r
      <Tooltip content='Varslinger'>\r
        <Buttons {...args} icon aria-label='Varslinger'>\r
          <BellIcon aria-hidden />\r
        </Buttons>\r
      </Tooltip>\r
      <Tooltip content='Instillinger'>\r
        <Buttons {...args} icon aria-label='Innstillinger'>\r
          <CogIcon aria-hidden />\r
        </Buttons>\r
      </Tooltip>\r
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
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Sr=["Primary","Secondary","Tertiary","Danger","Loading","LargeNeutral","AsLink","TertiaryWithIcon","DangerWithIcon","AsLinkWithIcon","WithIcons","IconOnlyWithTooltip"];export{c as AsLink,g as AsLinkWithIcon,o as Danger,p as DangerWithIcon,u as IconOnlyWithTooltip,l as LargeNeutral,i as Loading,n as Primary,t as Secondary,s as Tertiary,d as TertiaryWithIcon,m as WithIcons,Sr as __namedExportsOrder,Ir as default};
