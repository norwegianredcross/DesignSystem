import{j as e}from"./iframe-6flTlFEl.js";import{S as a}from"./index-DzgwNGNi.js";const{expect:r,within:L}=__STORYBOOK_MODULE_TEST__,j={title:"Components/SpinnerLoader",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Spinner indicates that an action is in progress, like submitting a form."}},layout:"centered"},argTypes:{"aria-label":{control:"text",description:"Accessible label describing the loading state.",defaultValue:"Henter kaffi"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl"],description:"Spinner size",defaultValue:"md"},"aria-hidden":{table:{disable:!0}}}},i={args:{"aria-label":"Laster innhold","data-size":"md","aria-hidden":!0}},n={render:t=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{"aria-label":t["aria-label"],"data-size":"2xs","aria-hidden":!0}),e.jsx(a,{"aria-label":t["aria-label"],"data-size":"xs","aria-hidden":!0}),e.jsx(a,{"aria-label":t["aria-label"],"data-size":"sm","aria-hidden":!0}),e.jsx(a,{"aria-label":t["aria-label"],"data-size":"md","aria-hidden":!0}),e.jsx(a,{"aria-label":t["aria-label"],"data-size":"lg","aria-hidden":!0}),e.jsx(a,{"aria-label":t["aria-label"],"data-size":"xl","aria-hidden":!0})]}),args:{"aria-label":"Laster..."},argTypes:{"data-size":{control:!1},"aria-label":{control:"text"}}},s={render:()=>e.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 12px"},"aria-live":"polite",children:[e.jsx(a,{"aria-hidden":!0,"data-size":"sm"}),"Lagrer..."]}),args:{"aria-label":"Laster..."},name:"In Button"},l={name:"Test: Accessible And Decorative Contracts",tags:["!autodocs"],render:()=>e.jsxs("div",{children:[e.jsx(a,{"aria-label":"Henter aktivitetsdata","data-size":"lg"}),e.jsxs("button",{type:"button",children:[e.jsx(a,{"aria-hidden":"true","data-size":"sm"}),"Lagrer"]})]}),play:async({canvasElement:t})=>{const o=L(t),d=o.getByRole("img",{name:"Henter aktivitetsdata"}),c=o.getByRole("button",{name:"Lagrer"}),f=c.querySelector("svg");await r(d).toHaveAttribute("viewBox","0 0 50 50"),await r(d).toHaveAttribute("data-size","lg"),await r(d.querySelectorAll("circle")).toHaveLength(2),await r(f).toHaveAttribute("aria-hidden","true"),await r(c).toHaveAccessibleName("Lagrer")}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,g,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,S,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <button type="button" style={{
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
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,z,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Test: Accessible And Decorative Contracts',
  tags: ['!autodocs'],
  render: () => <div>
      <Spinner aria-label="Henter aktivitetsdata" data-size="lg" />
      <button type="button">
        <Spinner aria-hidden="true" data-size="sm" />
        Lagrer
      </button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const labelledSpinner = canvas.getByRole('img', {
      name: 'Henter aktivitetsdata'
    });
    const button = canvas.getByRole('button', {
      name: 'Lagrer'
    });
    const decorativeSpinner = button.querySelector('svg');
    await expect(labelledSpinner).toHaveAttribute('viewBox', '0 0 50 50');
    await expect(labelledSpinner).toHaveAttribute('data-size', 'lg');
    await expect(labelledSpinner.querySelectorAll('circle')).toHaveLength(2);
    await expect(decorativeSpinner).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toHaveAccessibleName('Lagrer');
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const H=["Default","Sizes","InButton","TestAccessibleAndDecorativeContracts"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InButton:s,Sizes:n,TestAccessibleAndDecorativeContracts:l,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{B as S,n as a};
