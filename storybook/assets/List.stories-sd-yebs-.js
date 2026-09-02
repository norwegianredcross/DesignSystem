import{j as e}from"./iframe-BYyDdLVI.js";import{y as N,L,H as R}from"./tooltip-D949qbH_.js";const t=N,{expect:s,within:p}=__STORYBOOK_MODULE_TEST__,T={title:"Components/List",tags:["autodocs"],parameters:{docs:{description:{component:"Lists structure content sequentially (Ordered) or non-sequentially (Unordered). Use List.Ordered, List.Unordered, and List.Item."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1}}},n={render:r=>e.jsxs(t.Unordered,{...r,children:[e.jsx(t.Item,{children:"et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer"}),e.jsx(t.Item,{children:"balansesum som er 27 millioner kroner eller mer"}),e.jsx(t.Item,{children:"driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer"})]}),args:{"data-size":"md","data-color":"neutral"},name:"Unordered (ul)"},a={render:r=>e.jsxs(t.Ordered,{...r,children:[e.jsx(t.Item,{children:"Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer. Papirbiter i maten er ikke noe særlig."}),e.jsx(t.Item,{children:"Ha salt og pepper på filetene og eventuelt annet krydder for ekstra smak. Hvitløkpepper, paprika eller provence kan gi en god smak!"}),e.jsx(t.Item,{children:"Stek filetene på sterk varme i to minutter på hver side. Sett deretter på lokk og stek videre på svak varme i syv minutter på hver side."})]}),args:{"data-size":"md","data-color":"neutral"},name:"Ordered (ol)"},i={render:r=>e.jsxs("div",{children:[e.jsx(R,{level:3,"data-size":r["data-size"]==="sm"?"xs":r["data-size"]==="lg"?"sm":"xs",children:"Navigasjon"}),e.jsxs(t.Unordered,{...r,children:[e.jsx(t.Item,{children:"Grunnleggende"}),e.jsx(t.Item,{children:"God praksis"}),e.jsx(t.Item,{children:"Mønstre"})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"With Heading"},d={render:r=>e.jsxs(t.Unordered,{...r,children:[e.jsxs(t.Item,{children:["List Item 1",e.jsxs(t.Unordered,{children:[e.jsx(t.Item,{children:"List Item 1.1"}),e.jsx(t.Item,{children:"List Item 1.2"})]})]}),e.jsx(t.Item,{children:"List Item 2"}),e.jsxs(t.Item,{children:["List Item 3",e.jsxs(t.Ordered,{children:[e.jsx(t.Item,{children:"List Item 3.1"}),e.jsx(t.Item,{children:"List Item 3.2"})]})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"Nested Lists"},o={render:r=>e.jsxs(t.Unordered,{...r,style:{listStyle:"none",paddingLeft:0},children:[e.jsx(t.Item,{children:e.jsx(L,{href:"#",children:"Grunnleggende"})}),e.jsx(t.Item,{children:e.jsx(L,{href:"#",children:"God praksis"})}),e.jsx(t.Item,{children:e.jsx(L,{href:"#",children:"Mønstre"})})]}),args:{"data-size":"md","data-color":"primary-color-red"},name:"List of Links"},l={name:"Test: List Semantics",tags:["!autodocs"],render:()=>e.jsxs("div",{children:[e.jsxs(t.Unordered,{"aria-label":"Pakkeliste","data-size":"sm",children:[e.jsx(t.Item,{children:"Førstehjelpsutstyr"}),e.jsx(t.Item,{children:"Vann"})]}),e.jsxs(t.Ordered,{"aria-label":"Fremgangsmåte","data-color":"secondary-color-rust",children:[e.jsx(t.Item,{children:"Varsle"}),e.jsx(t.Item,{children:"Hjelp"})]})]}),play:async({canvasElement:r})=>{const g=p(r),m=g.getByRole("list",{name:"Pakkeliste"}),c=g.getByRole("list",{name:"Fremgangsmåte"});await s(m.tagName).toBe("UL"),await s(c.tagName).toBe("OL"),await s(p(m).getAllByRole("listitem")).toHaveLength(2),await s(p(c).getAllByRole("listitem")).toHaveLength(2),await s(m).toHaveAttribute("data-size","sm"),await s(c).toHaveAttribute("data-color","secondary-color-rust")}};var k,I,u;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(u=(I=n.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};var h,j,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var x,y,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var U,O,z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(O=d.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var H,S,b;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    'data-color': 'primary-color-red'
  },
  name: 'List of Links'
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,B,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Test: List Semantics',
  tags: ['!autodocs'],
  render: () => <div>
      <List.Unordered aria-label="Pakkeliste" data-size="sm">
        <List.Item>Førstehjelpsutstyr</List.Item>
        <List.Item>Vann</List.Item>
      </List.Unordered>
      <List.Ordered aria-label="Fremgangsmåte" data-color="secondary-color-rust">
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
    await expect(ordered).toHaveAttribute('data-color', 'secondary-color-rust');
  }
}`,...(_=(B=l.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const A=["Unordered","Ordered","WithHeading","Nested","ListOfLinks","TestListSemantics"],V=Object.freeze(Object.defineProperty({__proto__:null,ListOfLinks:o,Nested:d,Ordered:a,TestListSemantics:l,Unordered:n,WithHeading:i,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{V as L,d as N,a as O,n as U,i as W,o as a};
