import{r as t,j as e}from"./iframe-BgQDqsRD.js";import{S,a as $}from"./index-CZKmP7yi.js";import{c as z}from"./lite-DaUVFjkg.js";import{I}from"./Input-CaiAUzww.js";import"./preload-helper-C1FmrZbK.js";const V=t.forwardRef(function({asChild:r,className:s,...n},l){const i=r?S:"button";return e.jsx(i,{className:z("ds-chip",s),type:r?void 0:"button",ref:l,...n})}),w=t.forwardRef(function(r,s){return e.jsx(V,{"data-removable":!0,ref:s,...r})}),N=t.forwardRef(function({asChild:r,children:s,className:n,"data-size":l,"data-color":i,...h},E){const D=h.type??"checkbox",q=r?S:"label";return e.jsxs(q,{className:z("ds-chip",n),"data-size":l,"data-color":i,ref:E,children:[e.jsx(I,{...h,type:D}),e.jsx($,{children:s})]})}),L=t.forwardRef(function(r,s){return e.jsx(N,{ref:s,type:"radio",...r})}),d={Button:V,Checkbox:N,Radio:L,Removable:w};d.Button.displayName="Chip.Button";d.Checkbox.displayName="Chip.Checkbox";d.Radio.displayName="Chip.Radio";d.Removable.displayName="Chip.Removable";const a=d;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Removable.displayName="Removable",Removable.__docgenInfo={description:"",displayName:"Removable",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),e.jsx(a.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),e.jsx(a.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"brand1",children:"Bokmål (Brand1)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},m={render:()=>{const[o,r]=t.useState(["Norge","Sverige","Danmark"]),s=n=>{r(l=>l.filter(i=>i!==n))};return e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.map(n=>e.jsx(a.Removable,{"aria-label":`Fjern ${n}`,onClick:()=>s(n),"data-color":"neutral","data-size":"md",children:n},n)),o.length===0&&e.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),e.jsx(a.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"brand2",children:"Søk etter bokmål (Brand2)"}),e.jsx(a.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),e.jsx(a.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"};var C,f,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,g,x;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,y,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(R=(y=m.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var B,_,j;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const H=["Radio","Checkbox","Removable","Button"];export{u as Button,p as Checkbox,c as Radio,m as Removable,H as __namedExportsOrder,G as default};
