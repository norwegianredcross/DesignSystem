import{r as s,j as a}from"./iframe-sfm2iiNv.js";import{c as _}from"./lite-DaUVFjkg.js";import{B as L}from"./Button-BwQva4Hh.js";import{I as E}from"./Input-DTmrggwA.js";import{F as N}from"./index-Bpc4Wq8G.js";import{L as R}from"./Label-hKN12Bml.js";import"./preload-helper-C1FmrZbK.js";import"./index-B-pTjrYB.js";import"./Spinner-CN5uxT_N.js";import"./floating-ui.react-B0KwFFiC.js";import"./index-DNAPc2gN.js";import"./index-jZE8LZbC.js";import"./Paragraph-r4OMux9D.js";const $=(e,r)=>{const o=e.value;e.value=r;const n=e._valueTracker;typeof n<"u"&&n.setValue(o),e.dispatchEvent(new Event("change",{bubbles:!0}))},q=s.forwardRef(function({"aria-label":r="Tøm",onClick:o,...n},m){const T=S=>{var f;const b=S.target;let l=null;if(b instanceof HTMLElement&&(l=(f=b.closest(".ds-search"))==null?void 0:f.querySelector("input")),!l)throw new Error("Input is missing");if(!(l instanceof HTMLInputElement))throw new Error("Input is not an input element");S.preventDefault(),$(l,""),l.focus(),o==null||o(S)};return a.jsx(L,{ref:m,variant:"tertiary",type:"reset","aria-label":r,onClick:T,icon:!0,...n})}),P=s.forwardRef(function({children:r="Søk",...o},n){return a.jsx(L,{ref:n,type:"submit",...o,children:r})}),H=s.forwardRef(function({...r},o){return a.jsx(E,{ref:o,type:"search",placeholder:"",...r})}),J=s.forwardRef(function({className:r,...o},n){return a.jsx("div",{ref:n,className:_("ds-search",r),...o})}),p=Object.assign(J,{Clear:q,Button:P,Input:H});p.Clear.displayName="Search.Clear";p.Button.displayName="Search.Button";p.Input.displayName="Search.Input";const t=p;try{t.displayName="Search",t.__docgenInfo={description:"",displayName:"Search",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Components/Search",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},placeholder:{control:"text",description:"Placeholder text for the Search.Input field",defaultValue:"Søk...",table:{category:"Story Controls"}},label:{control:"text",description:"External label text (used with Label component)",table:{category:"Story Controls"}},buttonVariant:{control:"select",options:["primary","secondary","tertiary"],description:"Variant for the Search.Button",defaultValue:"primary",table:{category:"Story Controls"}},showClearButton:{control:"boolean",description:"Show the Search.Clear button",defaultValue:!0,table:{category:"Story Controls"}},showSearchButton:{control:"boolean",description:"Show the Search.Button",defaultValue:!0,table:{category:"Story Controls"}}}},c={render:e=>a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]}),args:{placeholder:"Søk her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},i={render:e=>a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{})]}),args:{placeholder:"Søk med ikon...",showClearButton:!0,showSearchButton:!1,"data-size":"md","data-color":"neutral"},name:"Without Button"},u={render:e=>a.jsxs(N,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(R,{id:"search-with-label-label",htmlFor:"search-with-label",children:e.label}),a.jsxs(t,{children:[a.jsx(t.Input,{id:"search-with-label","aria-labelledby":"search-with-label-label",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]})]}),args:{label:"Søk etter katter",placeholder:"f.eks. Norsk skogkatt",buttonVariant:"secondary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"With Label"},d={render:e=>{const[r,o]=s.useState("Jeg vil ha Pizza");return a.jsxs("div",{style:{width:"300px"},children:[a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Kontrollert søk",placeholder:e.placeholder,value:r,onChange:n=>o(n.target.value)}),e.showClearButton&&a.jsx(t.Clear,{onClick:()=>o("")}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant,onClick:()=>alert(`Searching for: ${r}`)})]}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Du har skrevet inn: ",r]})]})},args:{placeholder:"Skriv her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},h={render:e=>{const[r,o]=s.useState("");return a.jsxs("form",{onSubmit:n=>{n.preventDefault();const m=new FormData(n.currentTarget);o(m.get("search-term"))},style:{width:"300px"},children:[a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Skjemasøk",placeholder:e.placeholder,name:"search-term"}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]}),r&&a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Submitted value: ",r]})]})},args:{placeholder:"Søk i skjema...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"Within Form"};var g,w,B;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var y,C,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var V,z,k;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(z=u.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var v,j,I;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var D,F,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(F=h.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const oe=["Default","WithoutButton","WithLabel","Controlled","WithinForm"];export{d as Controlled,c as Default,u as WithLabel,h as WithinForm,i as WithoutButton,oe as __namedExportsOrder,re as default};
