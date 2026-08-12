import{j as e}from"./iframe-DRIzCs1n.js";import{N as w,L as p,H as V}from"./tooltip-B_Re0zNu.js";const t=w;try{t.displayName="List",t.__docgenInfo={description:"List-komponent for punktlister (ul) og nummererte lister (ol).",displayName:"List",props:{}}}catch{}try{Item.displayName="Item",Item.__docgenInfo={description:"Component that provides a list item.",displayName:"Item",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Ordered.displayName="Ordered",Ordered.__docgenInfo={description:"List.Ordered component, used to display a list of items.\nRenders a native `ol` element.",displayName:"Ordered",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}try{Unordered.displayName="Unordered",Unordered.__docgenInfo={description:"List.Unordered component, used to display a list of items.\nRenders a native `ul` element.",displayName:"Unordered",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const{expect:s,within:g}=__STORYBOOK_MODULE_TEST__,B={title:"Components/List",tags:["autodocs"],parameters:{docs:{description:{component:"Lists structure content sequentially (Ordered) or non-sequentially (Unordered). Use List.Ordered, List.Unordered, and List.Item."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1}}},n={render:r=>e.jsxs(t.Unordered,{...r,children:[e.jsx(t.Item,{children:"et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer"}),e.jsx(t.Item,{children:"balansesum som er 27 millioner kroner eller mer"}),e.jsx(t.Item,{children:"driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer"})]}),args:{"data-size":"md","data-color":"neutral"},name:"Unordered (ul)"},a={render:r=>e.jsxs(t.Ordered,{...r,children:[e.jsx(t.Item,{children:"Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer. Papirbiter i maten er ikke noe særlig."}),e.jsx(t.Item,{children:"Ha salt og pepper på filetene og eventuelt annet krydder for ekstra smak. Hvitløkpepper, paprika eller provence kan gi en god smak!"}),e.jsx(t.Item,{children:"Stek filetene på sterk varme i to minutter på hver side. Sett deretter på lokk og stek videre på svak varme i syv minutter på hver side."})]}),args:{"data-size":"md","data-color":"neutral"},name:"Ordered (ol)"},i={render:r=>e.jsxs("div",{children:[e.jsx(V,{level:3,"data-size":r["data-size"]==="sm"?"xs":r["data-size"]==="lg"?"sm":"xs",children:"Navigasjon"}),e.jsxs(t.Unordered,{...r,children:[e.jsx(t.Item,{children:"Grunnleggende"}),e.jsx(t.Item,{children:"God praksis"}),e.jsx(t.Item,{children:"Mønstre"})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"With Heading"},d={render:r=>e.jsxs(t.Unordered,{...r,children:[e.jsxs(t.Item,{children:["List Item 1",e.jsxs(t.Unordered,{children:[e.jsx(t.Item,{children:"List Item 1.1"}),e.jsx(t.Item,{children:"List Item 1.2"})]})]}),e.jsx(t.Item,{children:"List Item 2"}),e.jsxs(t.Item,{children:["List Item 3",e.jsxs(t.Ordered,{children:[e.jsx(t.Item,{children:"List Item 3.1"}),e.jsx(t.Item,{children:"List Item 3.2"})]})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"Nested Lists"},o={render:r=>e.jsxs(t.Unordered,{...r,style:{listStyle:"none",paddingLeft:0},children:[e.jsx(t.Item,{children:e.jsx(p,{href:"#",children:"Grunnleggende"})}),e.jsx(t.Item,{children:e.jsx(p,{href:"#",children:"God praksis"})}),e.jsx(t.Item,{children:e.jsx(p,{href:"#",children:"Mønstre"})})]}),args:{"data-size":"md","data-color":"accent"},name:"List of Links"},l={name:"Test: List Semantics",tags:["!autodocs"],render:()=>e.jsxs("div",{children:[e.jsxs(t.Unordered,{"aria-label":"Pakkeliste","data-size":"sm",children:[e.jsx(t.Item,{children:"Førstehjelpsutstyr"}),e.jsx(t.Item,{children:"Vann"})]}),e.jsxs(t.Ordered,{"aria-label":"Fremgangsmåte","data-color":"brand1",children:[e.jsx(t.Item,{children:"Varsle"}),e.jsx(t.Item,{children:"Hjelp"})]})]}),play:async({canvasElement:r})=>{const L=g(r),m=L.getByRole("list",{name:"Pakkeliste"}),c=L.getByRole("list",{name:"Fremgangsmåte"});await s(m.tagName).toBe("UL"),await s(c.tagName).toBe("OL"),await s(g(m).getAllByRole("listitem")).toHaveLength(2),await s(g(c).getAllByRole("listitem")).toHaveLength(2),await s(m).toHaveAttribute("data-size","sm"),await s(c).toHaveAttribute("data-color","brand1")}};var u,h,I;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <List.Unordered {...args}>
      <List.Item>
        et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer
      </List.Item>
      <List.Item>balansesum som er 27 millioner kroner eller mer</List.Item>
      <List.Item>
        driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer
      </List.Item>
    </List.Unordered>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Unordered (ul)'
}`,...(I=(h=n.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var k,f,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <List.Ordered {...args}>
      <List.Item>
        Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en
        finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer.
        Papirbiter i maten er ikke noe særlig.
      </List.Item>
      <List.Item>
        Ha salt og pepper på filetene og eventuelt annet krydder for ekstra
        smak. Hvitløkpepper, paprika eller provence kan gi en god smak!
      </List.Item>
      <List.Item>
        Stek filetene på sterk varme i to minutter på hver side. Sett deretter
        på lokk og stek videre på svak varme i syv minutter på hver side.
      </List.Item>
    </List.Ordered>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Ordered (ol)'
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,j,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div>
      <Heading level={3} data-size={args['data-size'] === 'sm' ? 'xs' : args['data-size'] === 'lg' ? 'sm' : 'xs'}>
        Navigasjon
      </Heading>
      <List.Unordered {...args}>
        <List.Item>Grunnleggende</List.Item>
        <List.Item>God praksis</List.Item>
        <List.Item>Mønstre</List.Item>
      </List.Unordered>
    </div>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'With Heading'
}`,...(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var _,U,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <List.Unordered {...args}>
      <List.Item>
        List Item 1
        <List.Unordered>
          <List.Item>List Item 1.1</List.Item>
          <List.Item>List Item 1.2</List.Item>
        </List.Unordered>
      </List.Item>
      <List.Item>List Item 2</List.Item>
      <List.Item>
        List Item 3
        <List.Ordered> 
          <List.Item>List Item 3.1</List.Item>
          <List.Item>List Item 3.2</List.Item>
        </List.Ordered>
      </List.Item>
    </List.Unordered>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Nested Lists'
}`,...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var O,b,S;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <List.Unordered {...args} style={{
    listStyle: 'none',
    paddingLeft: 0
  }}>
      <List.Item>
        <Link href="#">Grunnleggende</Link>
      </List.Item>
      <List.Item>
        <Link href="#">God praksis</Link>
      </List.Item>
      <List.Item>
        <Link href="#">Mønstre</Link>
      </List.Item>
    </List.Unordered>,
  args: {
    'data-size': 'md',
    'data-color': 'accent'
  },
  name: 'List of Links'
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var H,C,N;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Test: List Semantics',
  tags: ['!autodocs'],
  render: () => <div>
      <List.Unordered aria-label="Pakkeliste" data-size="sm">
        <List.Item>Førstehjelpsutstyr</List.Item>
        <List.Item>Vann</List.Item>
      </List.Unordered>
      <List.Ordered aria-label="Fremgangsmåte" data-color="brand1">
        <List.Item>Varsle</List.Item>
        <List.Item>Hjelp</List.Item>
      </List.Ordered>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const unordered = canvas.getByRole('list', {
      name: 'Pakkeliste'
    });
    const ordered = canvas.getByRole('list', {
      name: 'Fremgangsmåte'
    });
    await expect(unordered.tagName).toBe('UL');
    await expect(ordered.tagName).toBe('OL');
    await expect(within(unordered).getAllByRole('listitem')).toHaveLength(2);
    await expect(within(ordered).getAllByRole('listitem')).toHaveLength(2);
    await expect(unordered).toHaveAttribute('data-size', 'sm');
    await expect(ordered).toHaveAttribute('data-color', 'brand1');
  }
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const R=["Unordered","Ordered","WithHeading","Nested","ListOfLinks","TestListSemantics"],D=Object.freeze(Object.defineProperty({__proto__:null,ListOfLinks:o,Nested:d,Ordered:a,TestListSemantics:l,Unordered:n,WithHeading:i,__namedExportsOrder:R,default:B},Symbol.toStringTag,{value:"Module"}));export{D as L,d as N,a as O,n as U,i as W,o as a};
