import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{S as E,a as T}from"./index-Cb-ENzfG.js";import{c as N}from"./lite-DaUVFjkg.js";import{I as $}from"./Input-FgPaU4ty.js";const V=s.forwardRef(function({asChild:r,className:i,...o},t){const n=r?E:"button";return e.jsx(n,{className:N("ds-chip",i),type:r?void 0:"button",ref:t,...o})}),A=s.forwardRef(function(r,i){return e.jsx(V,{"data-removable":!0,ref:i,...r})}),z=s.forwardRef(function({asChild:r,children:i,className:o,"data-size":t,"data-color":n,...k},D){const w=k.type??"checkbox",L=r?E:"label";return e.jsxs(L,{className:N("ds-chip",o),"data-size":t,"data-color":n,ref:D,children:[e.jsx($,{...k,type:w}),e.jsx(T,{children:i})]})}),F=s.forwardRef(function(r,i){return e.jsx(z,{ref:i,type:"radio",...r})}),d={Button:V,Checkbox:z,Radio:F,Removable:A};d.Button.displayName="Chip.Button";d.Checkbox.displayName="Chip.Checkbox";d.Radio.displayName="Chip.Radio";d.Removable.displayName="Chip.Removable";const a=d,G={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{description:{component:"Chip has several variants used for selection or removal. Use Chip.Radio, Chip.Checkbox, Chip.Removable, or Chip.Button."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Radio,{name:"language-radio",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Radio,{name:"language-radio",value:"bokmaal",children:"Bokmål"}),e.jsx(a.Radio,{name:"language-radio",value:"engelsk","data-size":"lg",children:"Engelsk (Large)"}),e.jsx(a.Radio,{name:"language-radio",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Radio Variant"},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Checkbox,{name:"filter-checkbox",value:"nynorsk",defaultChecked:!0,children:"Nynorsk"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"bokmaal","data-color":"brand1",children:"Bokmål (Brand1)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"engelsk","data-size":"sm",children:"Engelsk (Small)"}),e.jsx(a.Checkbox,{name:"filter-checkbox",value:"disabled",disabled:!0,children:"Disabled"})]}),name:"Example Checkbox Variant"},h={render:()=>{const[l,r]=s.useState(["Norge","Sverige","Danmark"]),i=o=>{r(t=>t.filter(n=>n!==o))};return e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.map(o=>e.jsx(a.Removable,{"aria-label":`Fjern ${o}`,onClick:()=>i(o),"data-color":"neutral","data-size":"md",children:o},o)),l.length===0&&e.jsx("p",{children:"All chips removed."})]})},name:"Example Removable Variant"},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(a.Button,{onClick:()=>alert("Nynorsk clicked"),children:"Søk etter nynorsk"}),e.jsx(a.Button,{onClick:()=>alert("Bokmål clicked"),"data-color":"brand2",children:"Søk etter bokmål (Brand2)"}),e.jsx(a.Button,{onClick:()=>alert("Engelsk clicked"),"data-size":"lg",children:"Søk etter engelsk (Large)"}),e.jsx(a.Button,{disabled:!0,children:"Disabled"})]}),name:"Example Button Variant"};var u,C,x;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var b,v,g;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(v=p.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var R,f,y;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(y=(f=h.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,j,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const H=["Radio","Checkbox","Removable","Button"];export{m as Button,p as Checkbox,c as Radio,h as Removable,H as __namedExportsOrder,G as default};
