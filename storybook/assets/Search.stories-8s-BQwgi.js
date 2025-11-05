import{r as s,j as a}from"./iframe-BC5HkS_i.js";import{c as _}from"./lite-DaUVFjkg.js";import{B as L}from"./button-DbHsZBiM.js";import{I as E}from"./input-HJlDc8Ix.js";import{F as N}from"./index-D7O8d6Fz.js";import{L as R}from"./label-ArLoDn1M.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWKGY2hz.js";import"./spinner-kEjbZ4J0.js";import"./use-merge-refs-BkbeGo7a.js";import"./paragraph-r4sOLw4F.js";const q=(e,r)=>{const o=e.value;e.value=r;const n=e._valueTracker;typeof n<"u"&&n.setValue(o),e.dispatchEvent(new Event("change",{bubbles:!0}))},P=s.forwardRef(function({className:r,...o},n){return a.jsx("div",{ref:n,className:_("ds-search",r),...o})}),$=s.forwardRef(function({children:r="Søk",...o},n){return a.jsx(L,{ref:n,type:"submit",...o,children:r})}),H=s.forwardRef(function({"aria-label":r="Tøm",onClick:o,...n},m){const T=S=>{var f;const b=S.target;let l=null;if(b instanceof HTMLElement&&(l=(f=b.closest(".ds-search"))==null?void 0:f.querySelector("input")),!l)throw new Error("Input is missing");if(!(l instanceof HTMLInputElement))throw new Error("Input is not an input element");S.preventDefault(),q(l,""),l.focus(),o==null||o(S)};return a.jsx(L,{ref:m,variant:"tertiary",type:"reset","aria-label":r,onClick:T,icon:!0,...n})}),J=s.forwardRef(function({...r},o){return a.jsx(E,{ref:o,type:"search",placeholder:"",...r})}),p=Object.assign(P,{Clear:H,Button:$,Input:J});p.Clear.displayName="Search.Clear";p.Button.displayName="Search.Button";p.Input.displayName="Search.Input";const t=p;try{t.displayName="Search",t.__docgenInfo={description:"",displayName:"Search",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const ae={title:"Components/Search",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Search allows users to find content using keywords. It consists of an input field, optionally with clear and search buttons."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},placeholder:{control:"text",description:"Placeholder text for the Search.Input field",defaultValue:"Søk...",table:{category:"Story Controls"}},label:{control:"text",description:"External label text (used with Label component)",table:{category:"Story Controls"}},buttonVariant:{control:"select",options:["primary","secondary","tertiary"],description:"Variant for the Search.Button",defaultValue:"primary",table:{category:"Story Controls"}},showClearButton:{control:"boolean",description:"Show the Search.Clear button",defaultValue:!0,table:{category:"Story Controls"}},showSearchButton:{control:"boolean",description:"Show the Search.Button",defaultValue:!0,table:{category:"Story Controls"}}}},c={render:e=>a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]}),args:{placeholder:"Søk her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},i={render:e=>a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Søk",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{})]}),args:{placeholder:"Søk med ikon...",showClearButton:!0,showSearchButton:!1,"data-size":"md","data-color":"neutral"},name:"Without Button"},d={render:e=>a.jsxs(N,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(R,{id:"search-with-label-label",htmlFor:"search-with-label",children:e.label}),a.jsxs(t,{children:[a.jsx(t.Input,{id:"search-with-label","aria-labelledby":"search-with-label-label",placeholder:e.placeholder}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]})]}),args:{label:"Søk etter katter",placeholder:"f.eks. Norsk skogkatt",buttonVariant:"secondary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"With Label"},u={render:e=>{const[r,o]=s.useState("Jeg vil ha Pizza");return a.jsxs("div",{style:{width:"300px"},children:[a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Kontrollert søk",placeholder:e.placeholder,value:r,onChange:n=>o(n.target.value)}),e.showClearButton&&a.jsx(t.Clear,{onClick:()=>o("")}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant,onClick:()=>alert(`Searching for: ${r}`)})]}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Du har skrevet inn: ",r]})]})},args:{placeholder:"Skriv her...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"}},h={render:e=>{const[r,o]=s.useState("");return a.jsxs("form",{onSubmit:n=>{n.preventDefault();const m=new FormData(n.currentTarget);o(m.get("search-term"))},style:{width:"300px"},children:[a.jsxs(t,{"data-size":e["data-size"],"data-color":e["data-color"],children:[a.jsx(t.Input,{"aria-label":"Skjemasøk",placeholder:e.placeholder,name:"search-term"}),e.showClearButton&&a.jsx(t.Clear,{}),e.showSearchButton&&a.jsx(t.Button,{variant:e.buttonVariant})]}),r&&a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.8em"},children:["Submitted value: ",r]})]})},args:{placeholder:"Søk i skjema...",buttonVariant:"primary",showClearButton:!0,showSearchButton:!0,"data-size":"md","data-color":"neutral"},name:"Within Form"};var g,w,B;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,y,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var z,V,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(k=(V=d.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var j,v,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(v=u.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var D,F,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(F=h.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const te=["Default","WithoutButton","WithLabel","Controlled","WithinForm"];export{u as Controlled,c as Default,d as WithLabel,h as WithinForm,i as WithoutButton,te as __namedExportsOrder,ae as default};
