import{j as e,r as m}from"./iframe-Ddg3SACN.js";import{S as t}from"./index-yh9oxY1I.js";import{F as P,i as R}from"./tooltip-D-Mh9bHZ.js";const{expect:p,within:q,userEvent:S,waitFor:H}=__STORYBOOK_MODULE_TEST__,K={title:"Components/Search",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},placeholder:{control:"text",description:"Placeholder text for the Search.Input field",defaultValue:"Søk...",table:{category:"Story Controls"}},label:{control:"text",description:"External label text (used with Label component)",table:{category:"Story Controls"}},buttonVariant:{control:"select",options:["primary","secondary","tertiary"],description:"Variant for the Search.Button",defaultValue:"primary",table:{category:"Story Controls"}},showClearButton:{control:"boolean",description:"Show the Search.Clear button",defaultValue:!0,table:{category:"Story Controls"}},showSearchButton:{control:"boolean",description:"Show the Search.Button",defaultValue:!0,table:{category:"Story Controls"}}}},n={render:a=>e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Søk",placeholder:a.placeholder}),a.showClearButton&&e.jsx(t.Clear,{}),a.showSearchButton&&e.jsx(t.Button,{variant:a.buttonVariant})]}),args:{placeholder:"Søk her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},s={render:a=>e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Søk",placeholder:a.placeholder}),a.showClearButton&&e.jsx(t.Clear,{})]}),args:{placeholder:"Søk med ikon...",showClearButton:!0,showSearchButton:!1,"data-size":"md","data-color":"neutral"},name:"Without Button"},c={render:a=>e.jsxs(P,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(R,{id:"search-with-label-label",htmlFor:"search-with-label",children:a.label}),e.jsxs(t,{children:[e.jsx(t.Input,{id:"search-with-label","aria-labelledby":"search-with-label-label",placeholder:a.placeholder}),a.showClearButton&&e.jsx(t.Clear,{}),a.showSearchButton&&e.jsx(t.Button,{variant:a.buttonVariant})]})]}),args:{label:"Søk etter katter",placeholder:"f.eks. Norsk skogkatt",buttonVariant:"secondary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"With Label"},i={render:a=>{const[r,o]=m.useState("Jeg vil ha Pizza");return e.jsxs("div",{style:{width:"300px"},children:[e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Kontrollert søk",placeholder:a.placeholder,value:r,onChange:l=>o(l.target.value)}),a.showClearButton&&e.jsx(t.Clear,{onClick:()=>o("")}),a.showSearchButton&&e.jsx(t.Button,{variant:a.buttonVariant,onClick:()=>alert(`Searching for: ${r}`)})]}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Du har skrevet inn: ",r]})]})},args:{placeholder:"Skriv her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},d={render:a=>{const[r,o]=m.useState("");return e.jsxs("form",{onSubmit:l=>{l.preventDefault();const O=new FormData(l.currentTarget);o(O.get("search-term"))},style:{width:"300px"},children:[e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Skjemasøk",placeholder:a.placeholder,name:"search-term"}),a.showClearButton&&e.jsx(t.Clear,{}),a.showSearchButton&&e.jsx(t.Button,{variant:a.buttonVariant})]}),r&&e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Submitted value: ",r]})]})},args:{placeholder:"Søk i skjema...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"Within Form"},u={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:320},children:[e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Søk",placeholder:"Primær knapp"}),e.jsx(t.Clear,{}),e.jsx(t.Button,{variant:"primary"})]}),e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Søk",placeholder:"Sekundær knapp"}),e.jsx(t.Clear,{}),e.jsx(t.Button,{variant:"secondary"})]}),e.jsxs(t,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(t.Input,{"aria-label":"Søk",placeholder:"Tertiær knapp"}),e.jsx(t.Clear,{}),e.jsx(t.Button,{variant:"tertiary"})]})]}),args:{"data-size":"md","data-color":"neutral"}},h={name:"Test: Interaction",render:()=>{const[a,r]=m.useState("");return e.jsxs(t,{"data-size":"md",children:[e.jsx(t.Input,{"aria-label":"Søk",placeholder:"Søk her...",value:a,onChange:o=>r(o.target.value)}),e.jsx(t.Clear,{onClick:()=>r("")}),e.jsx(t.Button,{variant:"primary"})]})},play:async({canvasElement:a})=>{const r=q(a),o=r.getByRole("searchbox",{name:/søk/i});p(o).toBeInTheDocument(),await S.type(o,"test query"),p(o).toHaveValue("test query");const l=r.getByRole("button",{name:/tøm/i});await S.click(l),await H(()=>{p(o).toHaveValue("")})}};var b,g,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Search data-size={args['data-size']} data-color={args['data-color']}>
      <Search.Input aria-label="Søk" placeholder={args.placeholder} />
      {/* Use boolean flags for conditional rendering */}
      {args.showClearButton && <Search.Clear />}
      {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}
    </Search>,
  args: {
    placeholder: 'Søk her...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,B,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Search data-size={args['data-size']} data-color={args['data-color']}>
      <Search.Input aria-label="Søk" placeholder={args.placeholder} />
      {args.showClearButton && <Search.Clear />}
    </Search>,
  args: {
    placeholder: 'Søk med ikon...',
    showClearButton: true,
    showSearchButton: false,
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Without Button'
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var y,C,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']} data-color={args['data-color']}>
      <Label id="search-with-label-label" htmlFor="search-with-label">{args.label}</Label>
      <Search>
        <Search.Input id="search-with-label" aria-labelledby="search-with-label-label" placeholder={args.placeholder} />
        {args.showClearButton && <Search.Clear />}
        {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}
      </Search>
    </Field>,
  args: {
    label: 'Søk etter katter',
    placeholder: 'f.eks. Norsk skogkatt',
    buttonVariant: 'secondary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'With Label'
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var z,j,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [searchValue, setSearchValue] = useState('Jeg vil ha Pizza');
    return <div style={{
      width: '300px'
    }}>
        <Search data-size={args['data-size']} data-color={args['data-color']}>
          <Search.Input aria-label="Kontrollert søk" placeholder={args.placeholder} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          {args.showClearButton && <Search.Clear onClick={() => setSearchValue('')} />}
          {args.showSearchButton && <Search.Button variant={args.buttonVariant} onClick={() => alert(\`Searching for: \${searchValue}\`)} />}
        </Search>
        <p style={{
        marginTop: '8px',
        fontSize: '0.8em'
      }}>
          Du har skrevet inn: {searchValue}
        </p>
      </div>;
  },
  args: {
    placeholder: 'Skriv her...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(V=(j=i.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var f,I,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [submittedValue, setSubmittedValue] = useState('');
    return <form onSubmit={e => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      setSubmittedValue(formData.get('search-term') as string);
    }} style={{
      width: '300px'
    }}>
        <Search data-size={args['data-size']} data-color={args['data-color']}>
          <Search.Input aria-label="Skjemasøk" placeholder={args.placeholder} name="search-term" />
          {args.showClearButton && <Search.Clear />}
          {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}
        </Search>
        {submittedValue && <p style={{
        marginTop: '8px',
        fontSize: '0.8em'
      }}>
            Submitted value: {submittedValue}
          </p>}
      </form>;
  },
  args: {
    placeholder: 'Søk i skjema...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Within Form'
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,F,W;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: 320
  }}>
      <Search data-size={args['data-size']} data-color={args['data-color']}>
        <Search.Input aria-label="Søk" placeholder="Primær knapp" />
        <Search.Clear />
        <Search.Button variant="primary" />
      </Search>
      <Search data-size={args['data-size']} data-color={args['data-color']}>
        <Search.Input aria-label="Søk" placeholder="Sekundær knapp" />
        <Search.Clear />
        <Search.Button variant="secondary" />
      </Search>
      <Search data-size={args['data-size']} data-color={args['data-color']}>
        <Search.Input aria-label="Søk" placeholder="Tertiær knapp" />
        <Search.Clear />
        <Search.Button variant="tertiary" />
      </Search>
    </div>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var _,E,L;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => {
    const [value, setValue] = useState('');
    return <Search data-size="md">
        <Search.Input aria-label="Søk" placeholder="Søk her..." value={value} onChange={e => setValue(e.target.value)} />
        <Search.Clear onClick={() => setValue('')} />
        <Search.Button variant="primary" />
      </Search>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Type in search input
    const input = canvas.getByRole('searchbox', {
      name: /søk/i
    });
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test query');
    expect(input).toHaveValue('test query');

    // Clear button should reset value
    const clearButton = canvas.getByRole('button', {
      name: /tøm/i
    });
    await userEvent.click(clearButton);
    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  }
}`,...(L=(E=h.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const J=["Default","WithoutButton","WithLabel","Controlled","WithinForm","Variants","TestInteraction"],$=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:n,TestInteraction:h,Variants:u,WithLabel:c,WithinForm:d,WithoutButton:s,__namedExportsOrder:J,default:K},Symbol.toStringTag,{value:"Module"}));export{i as C,n as D,$ as S,s as W,c as a,d as b};
