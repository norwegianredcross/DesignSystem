import{j as r}from"./iframe-oM6kkPRq.js";import{S as c}from"./spinner-D435yQi5.js";import"./preload-helper-Dp1pzeXC.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-EkTjo_n2.js";const a=c;try{a.displayName="Spinner",a.__docgenInfo={description:"",displayName:"Spinner",props:{"aria-label":{defaultValue:null,description:`Accessibile label
Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Spinner size",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"2xs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const h={title:"Components/Spinner",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Spinner indicates that an action is in progress, like submitting a form."}},layout:"centered"},argTypes:{"aria-label":{control:"text",description:"Accessible label describing the loading state.",defaultValue:"Henter kaffi"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl"],description:"Spinner size",defaultValue:"md"},"aria-hidden":{table:{disable:!0}}}},i={args:{"aria-label":"Laster innhold","data-size":"md","aria-hidden":!0}},l={render:e=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(a,{"aria-label":e["aria-label"],"data-size":"2xs","aria-hidden":!0}),r.jsx(a,{"aria-label":e["aria-label"],"data-size":"xs","aria-hidden":!0}),r.jsx(a,{"aria-label":e["aria-label"],"data-size":"sm","aria-hidden":!0}),r.jsx(a,{"aria-label":e["aria-label"],"data-size":"md","aria-hidden":!0}),r.jsx(a,{"aria-label":e["aria-label"],"data-size":"lg","aria-hidden":!0}),r.jsx(a,{"aria-label":e["aria-label"],"data-size":"xl","aria-hidden":!0})]}),args:{"aria-label":"Laster..."},argTypes:{"data-size":{control:!1},"aria-label":{control:"text"}}};var t,s,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,o,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(o=l.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const z=["Default","Sizes"];export{i as Default,l as Sizes,z as __namedExportsOrder,h as default};
