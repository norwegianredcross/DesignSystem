import{j as e}from"./iframe-BagKezlM.js";import{a as U}from"./index-BwcMAqHz.js";import{H as z}from"./Heading-vWTeeUdv.js";import{L as o}from"./Link-6MsDn1pe.js";import"./preload-helper-C1FmrZbK.js";import"./index-UUdmfCXh.js";import"./lite-DaUVFjkg.js";const r=U;try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Ordered.displayName="Ordered",Ordered.__docgenInfo={description:"",displayName:"Ordered",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}}}}}catch{}try{Unordered.displayName="Unordered",Unordered.__docgenInfo={description:"",displayName:"Unordered",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Components/List",tags:["autodocs"],parameters:{docs:{description:{component:"Lists structure content sequentially (Ordered) or non-sequentially (Unordered). Use List.Ordered, List.Unordered, and List.Item."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1}}},s={render:t=>e.jsxs(r.Unordered,{...t,children:[e.jsx(r.Item,{children:"et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer"}),e.jsx(r.Item,{children:"balansesum som er 27 millioner kroner eller mer"}),e.jsx(r.Item,{children:"driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer"})]}),args:{"data-size":"md","data-color":"neutral"},name:"Unordered (ul)"},n={render:t=>e.jsxs(r.Ordered,{...t,children:[e.jsx(r.Item,{children:"Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer. Papirbiter i maten er ikke noe særlig."}),e.jsx(r.Item,{children:"Ha salt og pepper på filetene og eventuelt annet krydder for ekstra smak. Hvitløkpepper, paprika eller provence kan gi en god smak!"}),e.jsx(r.Item,{children:"Stek filetene på sterk varme i to minutter på hver side. Sett deretter på lokk og stek videre på svak varme i syv minutter på hver side."})]}),args:{"data-size":"md","data-color":"neutral"},name:"Ordered (ol)"},a={render:t=>e.jsxs("div",{children:[e.jsx(z,{level:3,"data-size":t["data-size"]==="sm"?"xs":t["data-size"]==="lg"?"sm":"xs",children:"Navigasjon"}),e.jsxs(r.Unordered,{...t,children:[e.jsx(r.Item,{children:"Grunnleggende"}),e.jsx(r.Item,{children:"God praksis"}),e.jsx(r.Item,{children:"Mønstre"})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"With Heading"},i={render:t=>e.jsxs(r.Unordered,{...t,children:[e.jsxs(r.Item,{children:["List Item 1",e.jsxs(r.Unordered,{children:[e.jsx(r.Item,{children:"List Item 1.1"}),e.jsx(r.Item,{children:"List Item 1.2"})]})]}),e.jsx(r.Item,{children:"List Item 2"}),e.jsxs(r.Item,{children:["List Item 3",e.jsxs(r.Ordered,{children:[e.jsx(r.Item,{children:"List Item 3.1"}),e.jsx(r.Item,{children:"List Item 3.2"})]})]})]}),args:{"data-size":"md","data-color":"neutral"},name:"Nested Lists"},d={render:t=>e.jsxs(r.Unordered,{...t,style:{listStyle:"none",paddingLeft:0},children:[e.jsx(r.Item,{children:e.jsx(o,{href:"#",children:"Grunnleggende"})}),e.jsx(r.Item,{children:e.jsx(o,{href:"#",children:"God praksis"})}),e.jsx(r.Item,{children:e.jsx(o,{href:"#",children:"Mønstre"})})]}),args:{"data-size":"md","data-color":"accent"},name:"List of Links"};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <List.Unordered {...args}>\r
      <List.Item>\r
        et gjennomsnittlig antall ansatte som tilsvarer ti årsverk eller mer\r
      </List.Item>\r
      <List.Item>balansesum som er 27 millioner kroner eller mer</List.Item>\r
      <List.Item>\r
        driftsinntekter for sin samlede virksomhet på 7 millioner kroner eller mer\r
      </List.Item>\r
    </List.Unordered>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Unordered (ul)'
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <List.Ordered {...args}>\r
      <List.Item>\r
        Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en\r
        finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer.\r
        Papirbiter i maten er ikke noe særlig.\r
      </List.Item>\r
      <List.Item>\r
        Ha salt og pepper på filetene og eventuelt annet krydder for ekstra\r
        smak. Hvitløkpepper, paprika eller provence kan gi en god smak!\r
      </List.Item>\r
      <List.Item>\r
        Stek filetene på sterk varme i to minutter på hver side. Sett deretter\r
        på lokk og stek videre på svak varme i syv minutter på hver side.\r
      </List.Item>\r
    </List.Ordered>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Ordered (ol)'
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var L,k,I;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div>\r
      <Heading level={3} data-size={args['data-size'] === 'sm' ? 'xs' : args['data-size'] === 'lg' ? 'sm' : 'xs'}>\r
        Navigasjon\r
      </Heading>\r
      <List.Unordered {...args}>\r
        <List.Item>Grunnleggende</List.Item>\r
        <List.Item>God praksis</List.Item>\r
        <List.Item>Mønstre</List.Item>\r
      </List.Unordered>\r
    </div>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'With Heading'
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var f,h,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <List.Unordered {...args}>\r
      <List.Item>\r
        List Item 1\r
        <List.Unordered>\r
          <List.Item>List Item 1.1</List.Item>\r
          <List.Item>List Item 1.2</List.Item>\r
        </List.Unordered>\r
      </List.Item>\r
      <List.Item>List Item 2</List.Item>\r
      <List.Item>\r
        List Item 3\r
        <List.Ordered> \r
          <List.Item>List Item 3.1</List.Item>\r
          <List.Item>List Item 3.2</List.Item>\r
        </List.Ordered>\r
      </List.Item>\r
    </List.Unordered>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Nested Lists'
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,j,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <List.Unordered {...args} style={{
    listStyle: 'none',
    paddingLeft: 0
  }}>\r
      <List.Item>\r
        <Link href="#">Grunnleggende</Link>\r
      </List.Item>\r
      <List.Item>\r
        <Link href="#">God praksis</Link>\r
      </List.Item>\r
      <List.Item>\r
        <Link href="#">Mønstre</Link>\r
      </List.Item>\r
    </List.Unordered>,
  args: {
    'data-size': 'md',
    'data-color': 'accent'
  },
  name: 'List of Links'
}`,...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const q=["Unordered","Ordered","WithHeading","Nested","ListOfLinks"];export{d as ListOfLinks,i as Nested,n as Ordered,s as Unordered,a as WithHeading,q as __namedExportsOrder,V as default};
