import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-D4lIrffr.js";import{c as E}from"./lite-DaUVFjkg.js";import{B as L}from"./Button-_80U_wOV.js";import{I as N}from"./Input-FgPaU4ty.js";import{F as R}from"./index-CMMlhluM.js";import{L as $}from"./Label-DnboOLtM.js";import"./index-Cb-ENzfG.js";import"./Spinner-Dj2HLJn9.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Paragraph-CJciD5B6.js";const P=(e,r)=>{const o=e.value;e.value=r;const n=e._valueTracker;typeof n<"u"&&n.setValue(o),e.dispatchEvent(new Event("change",{bubbles:!0}))},_=l.forwardRef(function({"aria-label":r="Tøm",onClick:o,...n},m){const T=S=>{var f;const b=S.target;let s=null;if(b instanceof HTMLElement&&(s=(f=b.closest(".ds-search"))==null?void 0:f.querySelector("input")),!s)throw new Error("Input is missing");if(!(s instanceof HTMLInputElement))throw new Error("Input is not an input element");S.preventDefault(),P(s,""),s.focus(),o==null||o(S)};return a.jsx(L,{ref:m,variant:"tertiary",type:"reset","aria-label":r,onClick:T,icon:!0,...n})}),H=l.forwardRef(function({children:r="Søk",...o},n){return a.jsx(L,{ref:n,type:"submit",...o,children:r})}),J=l.forwardRef(function({...r},o){return a.jsx(N,{ref:o,type:"search",placeholder:"",...r})}),K=l.forwardRef(function({className:r,...o},n){return a.jsx("div",{ref:n,className:E("ds-search",r),...o})}),p=Object.assign(K,{Clear:_,Button:H,Input:J});p.Clear.displayName="Search.Clear";p.Button.displayName="Search.Button";p.Input.displayName="Search.Input";const t=p,re={title:"Components/Search",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},placeholder:{control:"text",description:"Placeholder text for the Search.Input field",defaultValue:"Søk...",table:{category:"Story Controls"}},label:{control:"text",description:"External label text (used with Label component)",table:{category:"Story Controls"}},buttonVariant:{control:"select",options:["primary","secondary","tertiary"],description:"Variant for the Search.Button",defaultValue:"primary",table:{category:"Story Controls"}},showClearButton:{control:"boolean",description:"Show the Search.Clear button",defaultValue:!0,table:{category:"Story Controls"}},showSearchButton:{control:"boolean",description:"Show the Search.Button",defaultValue:!0,table:{category:"Story Controls"}}}},c={render:e=>a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]}),args:{placeholder:"Søk her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},i={render:e=>a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{})]}),args:{placeholder:"Søk med ikon...",showClearButton:!0,showSearchButton:!1,"data-size":"md","data-color":"neutral"},name:"Without Button"},u={render:e=>a.jsxs(R,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx($,{id:"search-with-label-label",htmlFor:"search-with-label",children:e.label}),a.jsxs(t,{children:[a.jsx(t.Input,{id:"search-with-label","aria-labelledby":"search-with-label-label",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]})]}),args:{label:"Søk etter katter",placeholder:"f.eks. Norsk skogkatt",buttonVariant:"secondary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"With Label"},h={render:e=>{const[r,o]=l.useState("Jeg vil ha Pizza");return a.jsxs("div",{style:{width:"300px"},children:[a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Kontrollert søk",placeholder:e.placeholder,value:r,onChange:n=>o(n.target.value)}),e.showClearButton&&a.jsx(t.Clear,{onClick:()=>o("")}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant,onClick:()=>alert(`Searching for: ${r}`)})]}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Du har skrevet inn: ",r]})]})},args:{placeholder:"Skriv her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},d={render:e=>{const[r,o]=l.useState("");return a.jsxs("form",{onSubmit:n=>{n.preventDefault();const m=new FormData(n.currentTarget);o(m.get("search-term"))},style:{width:"300px"},children:[a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Skjemasøk",placeholder:e.placeholder,name:"search-term"}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]}),r&&a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Submitted value: ",r]})]})},args:{placeholder:"Søk i skjema...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"Within Form"};var w,g,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(g=c.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var C,x,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var V,k,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var j,v,I;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(v=h.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var D,F,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const oe=["Default","WithoutButton","WithLabel","Controlled","WithinForm"];export{h as Controlled,c as Default,u as WithLabel,d as WithinForm,i as WithoutButton,oe as __namedExportsOrder,re as default};
