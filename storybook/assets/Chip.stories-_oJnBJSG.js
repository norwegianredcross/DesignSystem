import{r as l,j as e}from"./iframe-DzHbI1Bv.js";import{S as z,a as I}from"./index-B-a3BGFc.js";import{c as j}from"./lite-DaUVFjkg.js";import{I as $}from"./input-y6aCGEdK.js";import"./preload-helper-Dp1pzeXC.js";const V=l.forwardRef(function({asChild:r,className:i,...n},s){const t=r?z:"button";return e.jsx(t,{className:j("ds-chip",i),type:r?void 0:"button",ref:s,...n})}),w=l.forwardRef(function(r,i){return e.jsx(V,{"data-removable":!0,ref:i,...r})}),N=l.forwardRef(function({asChild:r,children:i,className:n,"data-size":s,"data-color":t,...u},E){const D=u.type??"checkbox",q=r?z:"label";return e.jsxs(q,{className:j("ds-chip",n),"data-size":s,"data-color":t,ref:E,children:[e.jsx($,{...u,type:D}),e.jsx(I,{children:i})]})}),L=l.forwardRef(function(r,i){return e.jsx(N,{ref:i,type:"radio",...r})}),d={Button:V,Checkbox:N,Radio:L,Removable:w};d.Button.displayName="Chip.Button";d.Checkbox.displayName="Chip.Checkbox";d.Radio.displayName="Chip.Radio";d.Removable.displayName="Chip.Removable";const a=d;try{Button.displayName="Button",Button.__docgenInfo={description:"Chip.Button used for interaction",displayName:"Button",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"Chip.Checkbox used for multiselection",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Chip.Radio used for single selection",displayName:"Radio",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Removable.displayName="Removable",Removable.__docgenInfo={description:"Chip.Removable used for interaction",displayName:"Removable",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),e.jsx(a.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),e.jsx(a.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"brand1",children:"Bokmål (Brand1)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},m={render:()=>{const[o,r]=l.useState(["Norge","Sverige","Danmark"]),i=n=>{r(s=>s.filter(t=>t!==n))};return e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.map(n=>e.jsx(a.Removable,{"aria-label":`Fjern ${n}`,onClick:()=>i(n),"data-color":"neutral","data-size":"md",children:n},n)),o.length===0&&e.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),e.jsx(a.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"brand2",children:"Søk etter bokmål (Brand2)"}),e.jsx(a.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),e.jsx(a.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"};var C,f,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,k,x;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(k=p.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,v,R;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var B,_,S;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(_=h.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const H=["Radio","Checkbox","Removable","Button"];export{h as Button,p as Checkbox,c as Radio,m as Removable,H as __namedExportsOrder,G as default};
