import{j as e,r as D}from"./iframe-Crp232av.js";import{S as r}from"./index-BiC41WAS.js";import{F}from"./index-B7vp9Gjo.js";import{L as T}from"./label-C-wo1TYg.js";const L={title:"Components/Search",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},placeholder:{control:"text",description:"Placeholder text for the Search.Input field",defaultValue:"Søk...",table:{category:"Story Controls"}},label:{control:"text",description:"External label text (used with Label component)",table:{category:"Story Controls"}},buttonVariant:{control:"select",options:["primary","secondary","tertiary"],description:"Variant for the Search.Button",defaultValue:"primary",table:{category:"Story Controls"}},showClearButton:{control:"boolean",description:"Show the Search.Clear button",defaultValue:!0,table:{category:"Story Controls"}},showSearchButton:{control:"boolean",description:"Show the Search.Button",defaultValue:!0,table:{category:"Story Controls"}}}},o={render:a=>e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Søk",placeholder:a.placeholder}),a.showClearButton&&e.jsx(r.Clear,{}),a.showSearchButton&&e.jsx(r.Button,{variant:a.buttonVariant})]}),args:{placeholder:"Søk her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},l={render:a=>e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Søk",placeholder:a.placeholder}),a.showClearButton&&e.jsx(r.Clear,{})]}),args:{placeholder:"Søk med ikon...",showClearButton:!0,showSearchButton:!1,"data-size":"md","data-color":"neutral"},name:"Without Button"},s={render:a=>e.jsxs(F,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(T,{id:"search-with-label-label",htmlFor:"search-with-label",children:a.label}),e.jsxs(r,{children:[e.jsx(r.Input,{id:"search-with-label","aria-labelledby":"search-with-label-label",placeholder:a.placeholder}),a.showClearButton&&e.jsx(r.Clear,{}),a.showSearchButton&&e.jsx(r.Button,{variant:a.buttonVariant})]})]}),args:{label:"Søk etter katter",placeholder:"f.eks. Norsk skogkatt",buttonVariant:"secondary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"With Label"},n={render:a=>{const[t,d]=D.useState("Jeg vil ha Pizza");return e.jsxs("div",{style:{width:"300px"},children:[e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Kontrollert søk",placeholder:a.placeholder,value:t,onChange:h=>d(h.target.value)}),a.showClearButton&&e.jsx(r.Clear,{onClick:()=>d("")}),a.showSearchButton&&e.jsx(r.Button,{variant:a.buttonVariant,onClick:()=>alert(`Searching for: ${t}`)})]}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Du har skrevet inn: ",t]})]})},args:{placeholder:"Skriv her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},c={render:a=>{const[t,d]=D.useState("");return e.jsxs("form",{onSubmit:h=>{h.preventDefault();const W=new FormData(h.currentTarget);d(W.get("search-term"))},style:{width:"300px"},children:[e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Skjemasøk",placeholder:a.placeholder,name:"search-term"}),a.showClearButton&&e.jsx(r.Clear,{}),a.showSearchButton&&e.jsx(r.Button,{variant:a.buttonVariant})]}),t&&e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Submitted value: ",t]})]})},args:{placeholder:"Søk i skjema...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"Within Form"},i={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:320},children:[e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Søk",placeholder:"Primær knapp"}),e.jsx(r.Clear,{}),e.jsx(r.Button,{variant:"primary"})]}),e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Søk",placeholder:"Sekundær knapp"}),e.jsx(r.Clear,{}),e.jsx(r.Button,{variant:"secondary"})]}),e.jsxs(r,{"data-size":a["data-size"],"data-color":a["data-color"],children:[e.jsx(r.Input,{"aria-label":"Søk",placeholder:"Tertiær knapp"}),e.jsx(r.Clear,{}),e.jsx(r.Button,{variant:"tertiary"})]})]}),args:{"data-size":"md","data-color":"neutral"}};var u,p,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Search data-size={args['data-size']} data-color={args['data-color']}>\r
      <Search.Input aria-label="Søk" placeholder={args.placeholder} />\r
      {/* Use boolean flags for conditional rendering */}\r
      {args.showClearButton && <Search.Clear />}\r
      {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}\r
    </Search>,
  args: {
    placeholder: 'Søk her...',
    buttonVariant: 'primary',
    showClearButton: true,
    showSearchButton: true,
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(S=(p=o.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var m,b,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Search data-size={args['data-size']} data-color={args['data-color']}>\r
      <Search.Input aria-label="Søk" placeholder={args.placeholder} />\r
      {args.showClearButton && <Search.Clear />}\r
    </Search>,
  args: {
    placeholder: 'Søk med ikon...',
    showClearButton: true,
    showSearchButton: false,
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Without Button'
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,x,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Field data-size={args['data-size']} data-color={args['data-color']}>\r
      <Label id="search-with-label-label" htmlFor="search-with-label">{args.label}</Label>\r
      <Search>\r
        <Search.Input id="search-with-label" aria-labelledby="search-with-label-label" placeholder={args.placeholder} />\r
        {args.showClearButton && <Search.Clear />}\r
        {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}\r
      </Search>\r
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
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var k,C,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [searchValue, setSearchValue] = useState('Jeg vil ha Pizza');
    return <div style={{
      width: '300px'
    }}>\r
        <Search data-size={args['data-size']} data-color={args['data-color']}>\r
          <Search.Input aria-label="Kontrollert søk" placeholder={args.placeholder} value={searchValue} onChange={e => setSearchValue(e.target.value)} />\r
          {args.showClearButton && <Search.Clear onClick={() => setSearchValue('')} />}\r
          {args.showSearchButton && <Search.Button variant={args.buttonVariant} onClick={() => alert(\`Searching for: \${searchValue}\`)} />}\r
        </Search>\r
        <p style={{
        marginTop: '8px',
        fontSize: '0.8em'
      }}>\r
          Du har skrevet inn: {searchValue}\r
        </p>\r
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
}`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var y,f,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [submittedValue, setSubmittedValue] = useState('');
    return <form onSubmit={e => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      setSubmittedValue(formData.get('search-term') as string);
    }} style={{
      width: '300px'
    }}>\r
        <Search data-size={args['data-size']} data-color={args['data-color']}>\r
          <Search.Input aria-label="Skjemasøk" placeholder={args.placeholder} name="search-term" />\r
          {args.showClearButton && <Search.Clear />}\r
          {args.showSearchButton && <Search.Button variant={args.buttonVariant} />}\r
        </Search>\r
        {submittedValue && <p style={{
        marginTop: '8px',
        fontSize: '0.8em'
      }}>\r
            Submitted value: {submittedValue}\r
          </p>}\r
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
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var V,v,I;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: 320
  }}>\r
      <Search data-size={args['data-size']} data-color={args['data-color']}>\r
        <Search.Input aria-label="Søk" placeholder="Primær knapp" />\r
        <Search.Clear />\r
        <Search.Button variant="primary" />\r
      </Search>\r
      <Search data-size={args['data-size']} data-color={args['data-color']}>\r
        <Search.Input aria-label="Søk" placeholder="Sekundær knapp" />\r
        <Search.Clear />\r
        <Search.Button variant="secondary" />\r
      </Search>\r
      <Search data-size={args['data-size']} data-color={args['data-color']}>\r
        <Search.Input aria-label="Søk" placeholder="Tertiær knapp" />\r
        <Search.Clear />\r
        <Search.Button variant="tertiary" />\r
      </Search>\r
    </div>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const P=["Default","WithoutButton","WithLabel","Controlled","WithinForm","Variants"],K=Object.freeze(Object.defineProperty({__proto__:null,Controlled:n,Default:o,Variants:i,WithLabel:s,WithinForm:c,WithoutButton:l,__namedExportsOrder:P,default:L},Symbol.toStringTag,{value:"Module"}));export{n as C,o as D,K as S,l as W,s as a,c as b};
