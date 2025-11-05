import{j as a}from"./iframe-BC5HkS_i.js";import{S as e}from"./index-hfQEH-pg.js";import"./preload-helper-Dp1pzeXC.js";import"./spinner-kEjbZ4J0.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BkbeGo7a.js";const h={title:"Components/Spinner",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Spinner indicates that an action is in progress, like submitting a form."}},layout:"centered"},argTypes:{"aria-label":{control:"text",description:"Accessible label describing the loading state.",defaultValue:"Henter kaffi"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl"],description:"Spinner size",defaultValue:"md"},"aria-hidden":{table:{disable:!0}}}},i={args:{"aria-label":"Laster innhold","data-size":"md","aria-hidden":!0}},t={render:r=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{"aria-label":r["aria-label"],"data-size":"2xs","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"xs","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"sm","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"md","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"lg","aria-hidden":!0}),a.jsx(e,{"aria-label":r["aria-label"],"data-size":"xl","aria-hidden":!0})]}),args:{"aria-label":"Laster..."},argTypes:{"data-size":{control:!1},"aria-label":{control:"text"}}};var l,s,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var n,o,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const z=["Default","Sizes"];export{i as Default,t as Sizes,z as __namedExportsOrder,h as default};
