import{j as e}from"./iframe-BLVfJeVr.js";import{a as z}from"./index-Chpa4jzh.js";import{H as U}from"./heading-DwqgTGUW.js";import{L as o}from"./link-CKtqm4FH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wq-Lg38G.js";import"./lite-DaUVFjkg.js";const r=z;try{Item.displayName="Item",Item.__docgenInfo={description:"Component that provides a list item.",displayName:"Item",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Ordered.displayName="Ordered",Ordered.__docgenInfo={description:"List.Ordered component, used to display a list of items.\nRenders a native `ol` element.",displayName:"Ordered",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}try{Unordered.displayName="Unordered",Unordered.__docgenInfo={description:"List.Unordered component, used to display a list of items.\nRenders a native `ul` element.",displayName:"Unordered",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const V={title:"Components/List",tags:["autodocs"],parameters:{docs:{description:{component:"Lists structure content sequentially (Ordered) or non-sequentially (Unordered). Use List.Ordered, List.Unordered, and List.Item."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1}}},s={render:t=>e.jsxs(r.Unordered,{...t,children:[e.jsx(r.Item,{children:"et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer"}),e.jsx(r.Item,{children:"balansesum som er 27 millioner kroner eller mer"}),e.jsx(r.Item,{children:"driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer"})]}),args:{"data-size":"md","data-color":"neutral"},name:"Unordered (ul)"},n={render:t=>e.jsxs(r.Ordered,{...t,children:[e.jsx(r.Item,{children:"Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer. Papirbiter i maten er ikke noe særlig."}),e.jsx(r.Item,{children:"Ha salt og pepper på filetene og eventuelt annet krydder for ekstra smak. Hvitløkpepper, paprika eller provence kan gi en god smak!"}),e.jsx(r.Item,{children:"Stek filetene på sterk varme i to minutter på hver side. Sett deretter på lokk og stek videre på svak varme i syv minutter på hver side."})]}),args:{"data-size":"md","data-color":"neutral"},name:"Ordered (ol)"},a={render:t=>e.jsxs("div",{children:[e.jsx(U,{level:3,"data-size":t["data-size"]==="sm"?"xs":t["data-size"]==="lg"?"sm":"xs",children:"Navigasjon"}),e.jsxs(r.Unordered,{...t,children:[e.jsx(r.Item,{children:"Grunnleggende"}),e.jsx(r.Item,{children:"God praksis"}),e.jsx(r.Item,{children:"Mønstre"})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"With Heading"},d={render:t=>e.jsxs(r.Unordered,{...t,children:[e.jsxs(r.Item,{children:["List Item 1",e.jsxs(r.Unordered,{children:[e.jsx(r.Item,{children:"List Item 1.1"}),e.jsx(r.Item,{children:"List Item 1.2"})]})]}),e.jsx(r.Item,{children:"List Item 2"}),e.jsxs(r.Item,{children:["List Item 3",e.jsxs(r.Ordered,{children:[e.jsx(r.Item,{children:"List Item 3.1"}),e.jsx(r.Item,{children:"List Item 3.2"})]})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"Nested Lists"},i={render:t=>e.jsxs(r.Unordered,{...t,style:{listStyle:"none",paddingLeft:0},children:[e.jsx(r.Item,{children:e.jsx(o,{href:"#",children:"Grunnleggende"})}),e.jsx(r.Item,{children:e.jsx(o,{href:"#",children:"God praksis"})}),e.jsx(r.Item,{children:e.jsx(o,{href:"#",children:"Mønstre"})})]}),args:{"data-size":"md","data-color":"accent"},name:"List of Links"};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,L;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(g=n.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var u,h,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,I,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(I=d.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var y,j,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const q=["Unordered","Ordered","WithHeading","Nested","ListOfLinks"];export{i as ListOfLinks,d as Nested,n as Ordered,s as Unordered,a as WithHeading,q as __namedExportsOrder,V as default};
