import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as c}from"./Spinner-Dj2HLJn9.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./lite-DaUVFjkg.js";const e=c,S={title:"Components/Spinner",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Spinner indicates that an action is in progress, like submitting a form."}},layout:"centered"},argTypes:{"aria-label":{control:"text",description:"Accessible label describing the loading state.",defaultValue:"Henter kaffi"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl"],description:"Spinner size",defaultValue:"md"},"aria-hidden":{table:{disable:!0}}}},i={args:{"aria-label":"Laster innhold","data-size":"md","aria-hidden":!0}},t={render:r=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{"aria-label":r["aria-label"],"data-size":"2xs","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"xs","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"sm","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"md","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"lg","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"xl","aria-hidden":!0})]}),args:{"aria-label":"Laster..."},argTypes:{"data-size":{control:!1},"aria-label":{control:"text"}}};var s,l,n;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true
  }
}`,...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,o,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      {/* FIX: Add aria-hidden={true} to all instances */}\r
      <Spinner aria-label={args['aria-label']} data-size="2xs" aria-hidden={true} />\r
      <Spinner aria-label={args['aria-label']} data-size="xs" aria-hidden={true} />\r
      <Spinner aria-label={args['aria-label']} data-size="sm" aria-hidden={true} />\r
      <Spinner aria-label={args['aria-label']} data-size="md" aria-hidden={true} />\r
      <Spinner aria-label={args['aria-label']} data-size="lg" aria-hidden={true} />\r
      <Spinner aria-label={args['aria-label']} data-size="xl" aria-hidden={true} />\r
      {/* --- END FIX --- */}\r
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
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const f=["Default","Sizes"];export{i as Default,t as Sizes,f as __namedExportsOrder,S as default};
