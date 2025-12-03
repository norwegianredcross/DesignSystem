import{r as l,j as a}from"./iframe-BdlBVaMh.js";import{c as R}from"./lite-DaUVFjkg.js";import{B as N}from"./button-CgDlDh-U.js";import{I as O}from"./input-JUpqDO89.js";import{F as q}from"./index-DFE7n1CE.js";import{L as M}from"./label-mrELLPrt.js";const $=(e,t)=>{const o=e.value;e.value=t;const n=e._valueTracker;typeof n<"u"&&n.setValue(o),e.dispatchEvent(new Event("change",{bubbles:!0}))},H=l.forwardRef(function({className:t,...o},n){return a.jsx("div",{ref:n,className:R("ds-search",t),...o})}),J=l.forwardRef(function({children:t="Søk",...o},n){return a.jsx(N,{ref:n,type:"submit",...o,children:t})}),K=l.forwardRef(function({"aria-label":t="Tøm",onClick:o,...n},S){const P=b=>{var g;const f=b.target;let s=null;if(f instanceof HTMLElement&&(s=(g=f.closest(".ds-search"))==null?void 0:g.querySelector("input")),!s)throw new Error("Input is missing");if(!(s instanceof HTMLInputElement))throw new Error("Input is not an input element");b.preventDefault(),$(s,""),s.focus(),o==null||o(b)};return a.jsx(N,{ref:S,variant:"tertiary",type:"reset","aria-label":t,onClick:P,icon:!0,...n})}),U=l.forwardRef(function({...t},o){return a.jsx(O,{ref:o,type:"search",placeholder:"",...t})}),m=Object.assign(H,{Clear:K,Button:J,Input:U});m.Clear.displayName="Search.Clear";m.Button.displayName="Search.Button";m.Input.displayName="Search.Input";const r=m;try{r.displayName="Search",r.__docgenInfo={description:"",displayName:"Search",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const A={title:"Components/Search",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},placeholder:{control:"text",description:"Placeholder text for the Search.Input field",defaultValue:"Søk...",table:{category:"Story Controls"}},label:{control:"text",description:"External label text (used with Label component)",table:{category:"Story Controls"}},buttonVariant:{control:"select",options:["primary","secondary","tertiary"],description:"Variant for the Search.Button",defaultValue:"primary",table:{category:"Story Controls"}},showClearButton:{control:"boolean",description:"Show the Search.Clear button",defaultValue:!0,table:{category:"Story Controls"}},showSearchButton:{control:"boolean",description:"Show the Search.Button",defaultValue:!0,table:{category:"Story Controls"}}}},c={render:e=>a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(r.Clear,{}),e.showSearchButton&&a.jsx(r.Button,{variant:e.buttonVariant})]}),args:{placeholder:"Søk her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},i={render:e=>a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(r.Clear,{})]}),args:{placeholder:"Søk med ikon...",showClearButton:!0,showSearchButton:!1,"data-size":"md","data-color":"neutral"},name:"Without Button"},d={render:e=>a.jsxs(q,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(M,{id:"search-with-label-label",htmlFor:"search-with-label",children:e.label}),a.jsxs(r,{children:[a.jsx(r.Input,{id:"search-with-label","aria-labelledby":"search-with-label-label",placeholder:e.placeholder}),e.showClearButton&&a.jsx(r.Clear,{}),e.showSearchButton&&a.jsx(r.Button,{variant:e.buttonVariant})]})]}),args:{label:"Søk etter katter",placeholder:"f.eks. Norsk skogkatt",buttonVariant:"secondary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"With Label"},u={render:e=>{const[t,o]=l.useState("Jeg vil ha Pizza");return a.jsxs("div",{style:{width:"300px"},children:[a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Kontrollert søk",placeholder:e.placeholder,value:t,onChange:n=>o(n.target.value)}),e.showClearButton&&a.jsx(r.Clear,{onClick:()=>o("")}),e.showSearchButton&&a.jsx(r.Button,{variant:e.buttonVariant,onClick:()=>alert(`Searching for: ${t}`)})]}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Du har skrevet inn: ",t]})]})},args:{placeholder:"Skriv her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},h={render:e=>{const[t,o]=l.useState("");return a.jsxs("form",{onSubmit:n=>{n.preventDefault();const S=new FormData(n.currentTarget);o(S.get("search-term"))},style:{width:"300px"},children:[a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Skjemasøk",placeholder:e.placeholder,name:"search-term"}),e.showClearButton&&a.jsx(r.Clear,{}),e.showSearchButton&&a.jsx(r.Button,{variant:e.buttonVariant})]}),t&&a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Submitted value: ",t]})]})},args:{placeholder:"Søk i skjema...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"Within Form"},p={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:320},children:[a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Søk",placeholder:"Primær knapp"}),a.jsx(r.Clear,{}),a.jsx(r.Button,{variant:"primary"})]}),a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Søk",placeholder:"Sekundær knapp"}),a.jsx(r.Clear,{}),a.jsx(r.Button,{variant:"secondary"})]}),a.jsxs(r,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(r.Input,{"aria-label":"Søk",placeholder:"Tertiær knapp"}),a.jsx(r.Clear,{}),a.jsx(r.Button,{variant:"tertiary"})]})]}),args:{"data-size":"md","data-color":"neutral"}};var w,x,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,C,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,j,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(j=d.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var v,I,D;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var _,T,W;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(T=h.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var F,L,E;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const G=["Default","WithoutButton","WithLabel","Controlled","WithinForm","Variants"],re=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:c,Variants:p,WithLabel:d,WithinForm:h,WithoutButton:i,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{u as C,c as D,re as S,i as W,d as a,h as b};
