import{j as e,r as _}from"./iframe-DH--KwFU.js";import{C as B}from"./index-9pY4JUG9.js";const a=B;try{a.displayName="Chip",a.__docgenInfo={description:"Chip-komponent for filtrering, valg eller handlinger.",displayName:"Chip",props:{}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"Chip.Button used for interaction",displayName:"Button",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"Chip.Checkbox used for multiselection",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Chip.Radio used for single selection",displayName:"Radio",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Removable.displayName="Removable",Removable.__docgenInfo={description:"Chip.Removable used for interaction",displayName:"Removable",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),e.jsx(a.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),e.jsx(a.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"brand1",children:"Bokmål (Brand1)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},s={render:()=>{const[r,x]=_.useState(["Norge","Sverige","Danmark"]),y=o=>{x(v=>v.filter(R=>R!==o))};return e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.map(o=>e.jsx(a.Removable,{"aria-label":`Fjern ${o}`,onClick:()=>y(o),"data-color":"neutral","data-size":"md",children:o},o)),r.length===0&&e.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),e.jsx(a.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"brand2",children:"Søk etter bokmål (Brand2)"}),e.jsx(a.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),e.jsx(a.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"};var t,d,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>\r
      <Chip.Radio name="language-radio" value="nynorsk" defaultChecked>\r
        Nynorsk\r
      </Chip.Radio>\r
      <Chip.Radio name="language-radio" value="bokmaal">\r
        Bokmål\r
      </Chip.Radio>\r
      <Chip.Radio name="language-radio" value="engelsk" data-size="lg">\r
        Engelsk (Large)\r
      </Chip.Radio>\r
      <Chip.Radio name="language-radio" value="disabled" disabled>\r
        Disabled\r
      </Chip.Radio>\r
    </div>,
  name: 'Example Radio Variant' // Renamed
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>\r
      <Chip.Checkbox name="filter-checkbox" value="nynorsk" defaultChecked>\r
        Nynorsk\r
      </Chip.Checkbox>\r
      <Chip.Checkbox name="filter-checkbox" value="bokmaal" data-color="brand1">\r
        Bokmål (Brand1)\r
      </Chip.Checkbox>\r
      <Chip.Checkbox name="filter-checkbox" value="engelsk" data-size="sm">\r
        Engelsk (Small)\r
      </Chip.Checkbox>\r
      <Chip.Checkbox name="filter-checkbox" value="disabled" disabled>\r
        Disabled\r
      </Chip.Checkbox>\r
    </div>,
  name: 'Example Checkbox Variant' // Renamed
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,C,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [visibleChips, setVisibleChips] = useState(['Norge', 'Sverige', 'Danmark']);
    const handleRemove = (chipToRemove: string) => {
      setVisibleChips(prev => prev.filter(chip => chip !== chipToRemove));
    };
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>\r
        {visibleChips.map(chip => <Chip.Removable key={chip} aria-label={\`Fjern \${chip}\`} onClick={() => handleRemove(chip)} data-color="neutral" data-size="md">\r
            {chip}\r
          </Chip.Removable>)}\r
        {visibleChips.length === 0 && <p>All chips removed.</p>}\r
      </div>;
  },
  name: 'Example Removable Variant' // Renamed
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,k,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>\r
      <Chip.Button onClick={() => alert('Nynorsk clicked')}>\r
        Søk etter nynorsk\r
      </Chip.Button>\r
      <Chip.Button onClick={() => alert('Bokmål clicked')} data-color="brand2">\r
        Søk etter bokmål (Brand2)\r
      </Chip.Button>\r
      <Chip.Button onClick={() => alert('Engelsk clicked')} data-size="lg">\r
        Søk etter engelsk (Large)\r
      </Chip.Button>\r
      <Chip.Button disabled>Disabled</Chip.Button>\r
    </div>,
  name: 'Example Button Variant' // Renamed
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const z=["Radio","Checkbox","Removable","Button"],N=Object.freeze(Object.defineProperty({__proto__:null,Button:l,Checkbox:i,Radio:n,Removable:s,__namedExportsOrder:z,default:S},Symbol.toStringTag,{value:"Module"}));export{l as B,N as C,n as R,i as a,s as b};
