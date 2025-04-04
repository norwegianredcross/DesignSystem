import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as Z,S as O,a as rr}from"./floating-ui.react-BdrTvBHV.js";import{c as B}from"./lite-DaUVFjkg.js";import{r as h}from"./index-BKyFwriW.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";const ar=typeof window<"u"?h.useLayoutEffect:h.useEffect;function S(s){const n=h.useRef(null);return ar(()=>{const i=document.getAnimations().filter(e=>"animationName"in e&&e.animationName===s),a=i.find(e=>"animationName"in e&&e.animationName===s),t=i.find(e=>{var d;return((d=e.effect)==null?void 0:d.target)===n.current});return t&&t===a&&(t.currentTime=0),t&&(a!=null&&a.currentTime)&&t!==a&&(t.currentTime=a.currentTime),()=>{t&&(a!=null&&a.currentTime)&&(t.currentTime=a.currentTime)}},[s]),n}const er=h.forwardRef(function({"aria-label":n,className:i,...a},t){const e=S("ds-spinner-rotate-animation"),d=S("ds-spinner-stroke-animation"),x=Z([e,t]);return r.jsxs("svg",{"aria-label":n,className:B("ds-spinner",i),ref:x,role:"img",viewBox:"0 0 50 50",...a,children:[r.jsx("circle",{className:B("ds-spinner__background"),cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),r.jsx("circle",{className:B("ds-spinner__circle"),cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5",ref:d})]})}),o=h.forwardRef(function({asChild:n,className:i,children:a,icon:t=!1,loading:e=!1,variant:d="primary",...x},X){const Y=n?O:"button";return r.jsxs(Y,{"aria-busy":!!e||void 0,"aria-disabled":!!e||void 0,className:B("ds-button",i),"data-icon":t||void 0,"data-variant":d,ref:X,type:n?void 0:"button",...x,children:[e===!0?r.jsx(er,{"aria-hidden":"true"}):e,r.jsx(rr,{children:a})]})}),cr={title:"Components/Button",component:o,parameters:{docs:{description:{component:"Buttons are used to trigger actions or events."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","neutral","danger"],description:"The variant of the button."},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the button."},disabled:{control:"boolean",description:"Disables the button."},loading:{control:"boolean",description:"Shows a loading state for the button."},children:{control:"text",description:"The content of the button."}}},l=s=>r.jsx(o,{...s,style:{backgroundColor:`var(--ds-color-${s.variant}-base-default)`,color:`var(--ds-color-${s.variant}-base-contrast-default)`},children:s.children}),c=l.bind({});c.args={variant:"primary",size:"md",disabled:!1,loading:!1,children:"Primary Button"};const u=l.bind({});u.args={variant:"secondary",size:"md",disabled:!1,loading:!1,children:"Secondary Button"};const m=l.bind({});m.args={variant:"tertiary",size:"md",disabled:!1,loading:!1,children:"Tertiary Button"};const g=l.bind({});g.args={variant:"danger",size:"md",disabled:!1,loading:!1,children:"Danger Button"};const f=l.bind({});f.args={variant:"primary",size:"md",disabled:!0,loading:!1,children:"Disabled Button"};const p=l.bind({});p.args={variant:"primary",size:"md",disabled:!1,loading:!0,children:"Loading..."};const y=()=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(o,{size:"sm",style:{fontSize:"var(--ds-font-size-2)"},children:"Small"}),r.jsx(o,{size:"md",style:{fontSize:"var(--ds-font-size-4)"},children:"Medium"}),r.jsx(o,{size:"lg",style:{fontSize:"var(--ds-font-size-6)"},children:"Large"})]}),v=()=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(o,{variant:"primary",style:{backgroundColor:"var(--ds-color-primary-base-default)"},children:"Primary"}),r.jsx(o,{variant:"secondary",style:{backgroundColor:"var(--ds-color-secondary-hav-base-default)"},children:"Secondary"}),r.jsx(o,{variant:"tertiary",style:{backgroundColor:"var(--ds-color-neutral-base-default)"},children:"Tertiary"}),r.jsx(o,{variant:"neutral",style:{backgroundColor:"var(--ds-color-neutral-base-default)"},children:"Neutral"}),r.jsx(o,{variant:"danger",style:{backgroundColor:"var(--ds-color-danger-base-default)"},children:"Danger"})]}),b=()=>r.jsx(o,{style:{width:"100%",backgroundColor:"var(--ds-color-primary-base-default)"},variant:"primary",children:"Full Width Button"});y.__docgenInfo={description:"",methods:[],displayName:"Sizes"};v.__docgenInfo={description:"",methods:[],displayName:"Variants"};b.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var z,k,j;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:"args => <Button {...args} style={{\n  backgroundColor: `var(--ds-color-${args.variant}-base-default)`,\n  color: `var(--ds-color-${args.variant}-base-contrast-default)`\n}}>\n    {args.children}\n  </Button>",...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,T,$;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Button {...args} style={{\n  backgroundColor: `var(--ds-color-${args.variant}-base-default)`,\n  color: `var(--ds-color-${args.variant}-base-contrast-default)`\n}}>\n    {args.children}\n  </Button>",...($=(T=u.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var _,N,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"args => <Button {...args} style={{\n  backgroundColor: `var(--ds-color-${args.variant}-base-default)`,\n  color: `var(--ds-color-${args.variant}-base-contrast-default)`\n}}>\n    {args.children}\n  </Button>",...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var w,R,L;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Button {...args} style={{\n  backgroundColor: `var(--ds-color-${args.variant}-base-default)`,\n  color: `var(--ds-color-${args.variant}-base-contrast-default)`\n}}>\n    {args.children}\n  </Button>",...(L=(R=g.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var W,E,F;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Button {...args} style={{\n  backgroundColor: `var(--ds-color-${args.variant}-base-default)`,\n  color: `var(--ds-color-${args.variant}-base-contrast-default)`\n}}>\n    {args.children}\n  </Button>",...(F=(E=f.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,I,A;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Button {...args} style={{\n  backgroundColor: `var(--ds-color-${args.variant}-base-default)`,\n  color: `var(--ds-color-${args.variant}-base-contrast-default)`\n}}>\n    {args.children}\n  </Button>",...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,V,q;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '1rem'
}}>
    <Button size="sm" style={{
    fontSize: 'var(--ds-font-size-2)'
  }}>
      Small
    </Button>
    <Button size="md" style={{
    fontSize: 'var(--ds-font-size-4)'
  }}>
      Medium
    </Button>
    <Button size="lg" style={{
    fontSize: 'var(--ds-font-size-6)'
  }}>
      Large
    </Button>
  </div>`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '1rem'
}}>
    <Button variant="primary" style={{
    backgroundColor: 'var(--ds-color-primary-base-default)'
  }}>
      Primary
    </Button>
    <Button variant="secondary" style={{
    backgroundColor: 'var(--ds-color-secondary-hav-base-default)'
  }}>
      Secondary
    </Button>
    <Button variant="tertiary" style={{
    backgroundColor: 'var(--ds-color-neutral-base-default)'
  }}>
      Tertiary
    </Button>
    <Button variant="neutral" style={{
    backgroundColor: 'var(--ds-color-neutral-base-default)'
  }}>
      Neutral
    </Button>
    <Button variant="danger" style={{
    backgroundColor: 'var(--ds-color-danger-base-default)'
  }}>
      Danger
    </Button>
  </div>`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => <Button style={{
  width: '100%',
  backgroundColor: 'var(--ds-color-primary-base-default)'
}} variant="primary">
    Full Width Button
  </Button>`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ur=["Primary","Secondary","Tertiary","Danger","Disabled","Loading","Sizes","Variants","FullWidth"];export{g as Danger,f as Disabled,b as FullWidth,p as Loading,c as Primary,u as Secondary,y as Sizes,m as Tertiary,v as Variants,ur as __namedExportsOrder,cr as default};
