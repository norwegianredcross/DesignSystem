import{r as l,j as e}from"./iframe-Cm-BopP0.js";import{S as z,a as I}from"./index-Wix542Se.js";import{c as j}from"./lite-DaUVFjkg.js";import{I as $}from"./input-08mk3PE9.js";import"./preload-helper-Dp1pzeXC.js";const V=l.forwardRef(function({asChild:n,className:r,...i},s){const t=n?z:"button";return e.jsx(t,{className:j("ds-chip",r),type:n?void 0:"button",ref:s,...i})}),w=l.forwardRef(function(n,r){return e.jsx(V,{"data-removable":!0,ref:r,...n})}),N=l.forwardRef(function({asChild:n,children:r,className:i,"data-size":s,"data-color":t,...u},E){const D=u.type??"checkbox",q=n?z:"label";return e.jsxs(q,{className:j("ds-chip",i),"data-size":s,"data-color":t,ref:E,children:[e.jsx($,{...u,type:D}),e.jsx(I,{children:r})]})}),L=l.forwardRef(function(n,r){return e.jsx(N,{ref:r,type:"radio",...n})}),d={Button:V,Checkbox:N,Radio:L,Removable:w};d.Button.displayName="Chip.Button";d.Checkbox.displayName="Chip.Checkbox";d.Radio.displayName="Chip.Radio";d.Removable.displayName="Chip.Removable";const a=d;try{Button.displayName="Button",Button.__docgenInfo={description:"Chip.Button used for interaction",displayName:"Button",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"Chip.Checkbox used for multiselection",displayName:"Checkbox",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"Chip.Radio used for single selection",displayName:"Radio",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Removable.displayName="Removable",Removable.__docgenInfo={description:"Chip.Removable used for interaction",displayName:"Removable",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),e.jsx(a.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),e.jsx(a.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"brand1",children:"Bokmål (Brand1)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},m={render:()=>{const[o,n]=l.useState(["Norge","Sverige","Danmark"]),r=i=>{n(s=>s.filter(t=>t!==i))};return e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.map(i=>e.jsx(a.Removable,{"aria-label":`Fjern ${i}`,onClick:()=>r(i),"data-color":"neutral","data-size":"md",children:i},i)),o.length===0&&e.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),e.jsx(a.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"brand2",children:"Søk etter bokmål (Brand2)"}),e.jsx(a.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),e.jsx(a.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"};var C,f,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Radio name="language-radio" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="bokmaal">
        Bokmål
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="engelsk" data-size="lg">
        Engelsk (Large)
      </Chip.Radio>
      <Chip.Radio name="language-radio" value="disabled" disabled>
        Disabled
      </Chip.Radio>
    </div>,
  name: 'Example Radio Variant' // Renamed
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,k,x;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Checkbox name="filter-checkbox" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="bokmaal" data-color="brand1">
        Bokmål (Brand1)
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="engelsk" data-size="sm">
        Engelsk (Small)
      </Chip.Checkbox>
      <Chip.Checkbox name="filter-checkbox" value="disabled" disabled>
        Disabled
      </Chip.Checkbox>
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
    }}>
        {visibleChips.map(chip => <Chip.Removable key={chip} aria-label={\`Fjern \${chip}\`} onClick={() => handleRemove(chip)} data-color="neutral" data-size="md">
            {chip}
          </Chip.Removable>)}
        {visibleChips.length === 0 && <p>All chips removed.</p>}
      </div>;
  },
  name: 'Example Removable Variant' // Renamed
}`,...(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var B,_,S;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip.Button onClick={() => alert('Nynorsk clicked')}>
        Søk etter nynorsk
      </Chip.Button>
      <Chip.Button onClick={() => alert('Bokmål clicked')} data-color="brand2">
        Søk etter bokmål (Brand2)
      </Chip.Button>
      <Chip.Button onClick={() => alert('Engelsk clicked')} data-size="lg">
        Søk etter engelsk (Large)
      </Chip.Button>
      <Chip.Button disabled>Disabled</Chip.Button>
    </div>,
  name: 'Example Button Variant' // Renamed
}`,...(S=(_=h.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const H=["Radio","Checkbox","Removable","Button"];export{h as Button,p as Checkbox,c as Radio,m as Removable,H as __namedExportsOrder,G as default};
