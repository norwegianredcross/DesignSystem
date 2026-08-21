import{j as e}from"./iframe-B1NMHN1E.js";import{S as t}from"./index-C1eB1z0V.js";import{B as f}from"./index-DS8zvve3.js";const{expect:r,within:L}=__STORYBOOK_MODULE_TEST__,j={title:"Components/SpinnerLoader",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Spinner indicates that an action is in progress, like submitting a form."}},layout:"centered"},argTypes:{"aria-label":{control:"text",description:"Accessible label describing the loading state.",defaultValue:"Henter kaffi"},"data-size":{control:"select",options:["2xs","xs","sm","md","lg","xl"],description:"Spinner size",defaultValue:"md"},"aria-hidden":{table:{disable:!0}}}},i={args:{"aria-label":"Laster innhold","data-size":"md","aria-hidden":!0}},n={render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{"aria-label":a["aria-label"],"data-size":"2xs","aria-hidden":!0}),e.jsx(t,{"aria-label":a["aria-label"],"data-size":"xs","aria-hidden":!0}),e.jsx(t,{"aria-label":a["aria-label"],"data-size":"sm","aria-hidden":!0}),e.jsx(t,{"aria-label":a["aria-label"],"data-size":"md","aria-hidden":!0}),e.jsx(t,{"aria-label":a["aria-label"],"data-size":"lg","aria-hidden":!0}),e.jsx(t,{"aria-label":a["aria-label"],"data-size":"xl","aria-hidden":!0})]}),args:{"aria-label":"Laster..."},argTypes:{"data-size":{control:!1},"aria-label":{control:"text"}}},s={render:()=>e.jsx(f,{loading:!0,children:"Lagrer…"}),args:{"aria-label":"Laster..."},name:"In Button"},l={name:"Test: Accessible And Decorative Contracts",tags:["!autodocs"],render:()=>e.jsxs("div",{children:[e.jsx(t,{"aria-label":"Henter aktivitetsdata","data-size":"lg"}),e.jsx(f,{loading:!0,children:"Lagrer"})]}),play:async({canvasElement:a})=>{const d=L(a),o=d.getByRole("img",{name:"Henter aktivitetsdata"}),c=d.getByRole("button",{name:/Lagrer/}),B=c.querySelector("svg");await r(o).toHaveAttribute("viewBox","0 0 50 50"),await r(o).toHaveAttribute("data-size","lg"),await r(o.querySelectorAll("circle")).toHaveLength(2),await r(B).toHaveAttribute("aria-hidden","true"),await r(c).toHaveAttribute("aria-busy","true")}};var u,b,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Laster innhold',
    'data-size': 'md',
    'aria-hidden': true
  }
}`,...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,m,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,S,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Button loading>Lagrer…</Button>,
  args: {
    'aria-label': 'Laster...'
  },
  name: 'In Button'
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,z,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Test: Accessible And Decorative Contracts',
  tags: ['!autodocs'],
  render: () => <div>
      <Spinner aria-label="Henter aktivitetsdata" data-size="lg" />
      <Button loading>Lagrer</Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const labelledSpinner = canvas.getByRole('img', {
      name: 'Henter aktivitetsdata'
    });
    const button = canvas.getByRole('button', {
      name: /Lagrer/
    });
    // Button's \`loading\` prop renders Digdir's built-in spinner: decorative
    // (aria-hidden) so the accessible name stays the button text, and the
    // button announces busy state instead of being disabled.
    const decorativeSpinner = button.querySelector('svg');
    await expect(labelledSpinner).toHaveAttribute('viewBox', '0 0 50 50');
    await expect(labelledSpinner).toHaveAttribute('data-size', 'lg');
    await expect(labelledSpinner.querySelectorAll('circle')).toHaveLength(2);
    await expect(decorativeSpinner).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toHaveAttribute('aria-busy', 'true');
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const H=["Default","Sizes","InButton","TestAccessibleAndDecorativeContracts"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InButton:s,Sizes:n,TestAccessibleAndDecorativeContracts:l,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{D as S,n as a};
