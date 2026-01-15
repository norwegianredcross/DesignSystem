import{j as a}from"./iframe-CYBanx37.js";import{S as e}from"./index-CSBHtw4T.js";const g={title:"Components/Spinner",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Spinner indicates that an action is in progress, like submitting a form."}},layout:"centered"},argTypes:{"aria-label":{control:"text",description:"Accessible label describing the loading state.",defaultValue:"Henter kaffi"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl"],description:"Spinner size",defaultValue:"md"},"aria-hidden":{table:{disable:!0}}}},i={args:{"aria-label":"Laster innhold","data-size":"md","aria-hidden":!0}},t={render:r=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{"aria-label":r["aria-label"],"data-size":"2xs","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"xs","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"sm","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"md","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"lg","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"xl","aria-hidden":!0})]}),args:{"aria-label":"Laster..."},argTypes:{"data-size":{control:!1},"aria-label":{control:"text"}}},s={render:r=>a.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 12px"},"aria-live":"polite",children:[a.jsx(e,{"aria-hidden":!0,"data-size":"sm"}),"Lagrer..."]}),args:{"aria-label":"Laster..."},name:"In Button"};var l,n,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true
  }
}`,...(d=(n=i.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,p,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      {/* FIX: Add aria-hidden={true} to all instances */}
      <Spinner aria-label={args['aria-label']} data-size="2xs" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="xs" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="sm" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="md" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="lg" aria-hidden={true} />
      <Spinner aria-label={args['aria-label']} data-size="xl" aria-hidden={true} />
      {/* --- END FIX --- */}
    </div>,
  args: {
    'aria-label': 'Laster...'
  },
  argTypes: {
    'data-size': {
      control: false
    },
    'aria-label': {
      control: 'text'
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,b,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <button type="button" style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px'
  }} aria-live="polite">
      <Spinner aria-hidden={true} data-size="sm" />
      Lagrer...
    </button>,
  args: {
    'aria-label': 'Laster...'
  },
  name: 'In Button'
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const x=["Default","Sizes","InButton"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InButton:s,Sizes:t,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{S,t as a};
