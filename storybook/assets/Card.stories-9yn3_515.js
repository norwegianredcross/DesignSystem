import{j as e}from"./iframe-B7CwtMXO.js";import{Z as P,_ as H,B as p,H as h,F as O,i as q,k as m,b as u,P as M}from"./tooltip-Bp-gvx6B.js";import{S as U,a as Q}from"./TrashFill-CzxaVEHV.js";const t=P,r=H;t.displayName="Card";try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the card.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Instances of `Card.Block`, `Divider` or other React nodes",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const Z="/DesignSystem/storybook/assets/person-DWvtQrl6.png",$={title:"Components/Card",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","tinted"],description:"Change the background color of the card.",defaultValue:"default"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element (e.g., <a> or <button>)",defaultValue:!1},children:{control:!1,description:"Card content (ReactNode)"}}},s={render:a=>e.jsxs(t,{...a,children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Card Title"}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]}),e.jsx(r,{children:e.jsx("p",{children:"Another block of content."})}),e.jsx(r,{children:e.jsx("small",{children:"Footer text"})})]}),args:{"data-color":"neutral",variant:"default"}},l={render:a=>e.jsx(t,{...a,children:e.jsxs(r,{children:[e.jsx("h3",{children:"Tinted Card"}),e.jsx("p",{children:"This card uses the tinted variant."})]})}),args:{"data-color":"accent",variant:"tinted"}},n={name:"Example with Image",render:a=>e.jsxs(t,{...a,style:{maxWidth:"300px"},children:[e.jsx(r,{children:e.jsx("img",{src:"https://picsum.photos/seed/storybook/300/200",alt:"Random placeholder image",style:{width:"100%",display:"block",aspectRatio:"3 / 2",objectFit:"cover"}})}),e.jsxs(r,{children:[e.jsx("h3",{children:"Card with Image"}),e.jsx("p",{children:"The image uses an online placeholder."})]})]}),args:{"data-color":"neutral"}},d={render:a=>e.jsx(t,{...a,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("a",{href:"https://designsystemet.no/",children:[e.jsx("h3",{children:"Link Card"}),e.jsx("p",{children:"This entire card is a link."})]}),"data-color":"brand1",variant:"tinted"}},o={render:a=>e.jsx(t,{...a,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("button",{type:"button",onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{children:"Button Card"}),e.jsx("p",{children:"This entire card is a button."})]}),"data-color":"brand2"}},i={render:a=>e.jsxs(t,{...a,children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Composed Card"}),e.jsx("p",{children:"This card contains other components."}),e.jsx("div",{style:{marginTop:"var(--ds-spacing-4, 16px)"},children:e.jsx(p,{variant:"primary","data-size":"sm",children:"Action"})})]}),e.jsx(r,{children:e.jsx("small",{children:"Footer with more info"})})]}),args:{"data-color":"neutral",variant:"tinted"}},c={name:"Example Complex Composition",render:a=>{const R=[{value:"leder",label:"Daglig leder"},{value:"medlem",label:"Styremedlem"},{value:"ansatt",label:"Ansatt"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsxs(t,{...a,children:[e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(h,{level:3,"data-size":"xs",children:"Rolle 1"}),e.jsxs(p,{variant:"secondary","data-color":"danger","data-size":"sm",children:[e.jsx(U,{"aria-hidden":!0}),"Fjern"]})]})}),e.jsxs(r,{children:[e.jsxs(O,{children:[e.jsx(q,{htmlFor:"rolle-select",children:"Velg rolle"}),e.jsx(m,{id:"rolle-select",children:R.map(({value:V,label:E},N)=>e.jsx(m.Option,{value:V,children:E},N))})]}),e.jsx(u,{label:"Fødsels- eller d-nummer"}),e.jsx(u,{label:"Etternavn"})]}),e.jsx(r,{children:e.jsxs(p,{variant:"secondary","data-color":"accent","data-size":"sm",children:["Legg til rolle",e.jsx(Q,{"aria-hidden":!0,style:{marginLeft:"4px"}})]})})]}),e.jsxs(t,{"data-color":"neutral",children:[e.jsx(r,{children:e.jsx("img",{src:Z,alt:"katt",style:{width:"100%",display:"block"}})}),e.jsxs(r,{children:[e.jsx(h,{level:3,"data-size":"sm",children:"Card Neutral"}),e.jsx(M,{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]})]})]})},args:{"data-color":"accent","data-size":"md",variant:"default"},argTypes:{asChild:{control:!1},children:{control:!1}}};var g,x,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardBlock>
        <h3>Card Title</h3>
        <p>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this.
        </p>
      </CardBlock>
      <CardBlock>
        <p>Another block of content.</p>
      </CardBlock>
      <CardBlock>
        <small>Footer text</small>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'default'
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardBlock>
        <h3>Tinted Card</h3>
        <p>This card uses the tinted variant.</p>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'accent',
    variant: 'tinted'
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,v,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Example with Image',
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }}>
        <CardBlock>
          <img
      // --- Use a placeholder image URL ---
      src="https://picsum.photos/seed/storybook/300/200" // Example: 300x200 placeholder
      // --- End Change ---
      alt="Random placeholder image" // Update alt text
      style={{
        width: '100%',
        display: 'block',
        aspectRatio: '3 / 2',
        objectFit: 'cover'
      }} // Adjusted aspect ratio
      />
        </CardBlock>
        <CardBlock>
          <h3>Card with Image</h3>
          <p>The image uses an online placeholder.</p>
        </CardBlock>
      </Card>,
  args: {
    'data-color': 'neutral'
  }
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var B,T,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }} />,
  args: {
    asChild: true,
    children: <a href="https://designsystemet.no/">
        <h3>Link Card</h3>
        <p>This entire card is a link.</p>
      </a>,
    'data-color': 'brand1',
    variant: 'tinted'
  }
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var z,F,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }} />,
  args: {
    asChild: true,
    children: <button type="button" onClick={() => alert('Card clicked!')}>
        <h3>Button Card</h3>
        <p>This entire card is a button.</p>
      </button>,
    'data-color': 'brand2'
  }
}`,...(w=(F=o.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var W,_,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardBlock>
        <h3>Composed Card</h3>
        <p>This card contains other components.</p>
        <div style={{
        marginTop: 'var(--ds-spacing-4, 16px)'
      }}>
          <Button variant="primary" data-size="sm">
            Action
          </Button>
        </div>
      </CardBlock>
      <CardBlock>
        <small>Footer with more info</small>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'tinted'
  }
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var A,I,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Example Complex Composition',
  render: args => {
    const options = [{
      value: 'leder',
      label: 'Daglig leder'
    }, {
      value: 'medlem',
      label: 'Styremedlem'
    }, {
      value: 'ansatt',
      label: 'Ansatt'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px'
    }}>
        <Card {...args}>
          <CardBlock>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
              <Heading level={3} data-size="xs">Rolle 1</Heading>
              <Button variant="secondary" data-color="danger" data-size="sm">
                <TrashFillIcon aria-hidden />
                Fjern
              </Button>
            </div>
          </CardBlock>
          <CardBlock>
            <Field>
              <Label htmlFor="rolle-select">Velg rolle</Label>
              <Select id="rolle-select">
                {options.map(({
                value,
                label
              }, index) => <Select.Option key={index} value={value}>
                    {label}
                  </Select.Option>)}
              </Select>
            </Field>
            <Textfield label="Fødsels- eller d-nummer" />
            <Textfield label="Etternavn" />
          </CardBlock>
          <CardBlock>
            <Button variant="secondary" data-color="accent" data-size="sm">
              Legg til rolle
              <PlusIcon aria-hidden style={{
              marginLeft: '4px'
            }} />
            </Button>
          </CardBlock>
        </Card>

        <Card data-color="neutral">
          <CardBlock>
            <img src={cat1} alt="katt" style={{
            width: '100%',
            display: 'block'
          }} />
          </CardBlock>
          <CardBlock>
            <Heading level={3} data-size="sm">Card Neutral</Heading>
            <Paragraph>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at supposedly
              about this.
            </Paragraph>
          </CardBlock>
        </Card>
      </div>;
  },
  args: {
    'data-color': 'accent',
    'data-size': 'md',
    variant: 'default'
  },
  argTypes: {
    asChild: {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const G=["Default","Tinted","WithImage","AsLink","AsButton","ComposedContent","ComplexComposition"],Y=Object.freeze(Object.defineProperty({__proto__:null,AsButton:o,AsLink:d,ComplexComposition:c,ComposedContent:i,Default:s,Tinted:l,WithImage:n,__namedExportsOrder:G,default:$},Symbol.toStringTag,{value:"Module"}));export{d as A,Y as C,s as D,l as T,n as W,i as a,o as b,c};
