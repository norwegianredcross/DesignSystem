import{r as C,j as e}from"./iframe-DzHbI1Bv.js";import{S as $}from"./index-B-a3BGFc.js";import{c as G}from"./lite-DaUVFjkg.js";import{u as re}from"./use-merge-refs-B76l2vM2.js";import{c as ae}from"./person-BB-gzSJt.js";import{B as y}from"./button-BtbJBmjo.js";import{H as b}from"./heading-5oOxB13O.js";import{a as te,S as se}from"./TrashFill-BcUlBA2X.js";import{F as ne}from"./index-0vAYx6T3.js";import{L as oe}from"./label-nhewozwc.js";import{S as k}from"./index-KlTlU3bB.js";import{T as B}from"./textfield-CgH_iYHw.js";import{P as le}from"./paragraph-DYKqBuhr.js";import"./preload-helper-Dp1pzeXC.js";import"./spinner-C6XrOK33.js";import"./useId-B-vTi9Gd.js";import"./input-y6aCGEdK.js";import"./textarea-DZs6rg1v.js";const de=C.forwardRef(function({asChild:o=!1,variant:l="default",className:d,...i},f){const Q=o?$:"div",j=C.useRef(null),X=re([j,f]);return C.useEffect(()=>{const s=j.current,v=({ctrlKey:Y,metaKey:Z,target:ee})=>{const n=s==null?void 0:s.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!n||n!=null&&n.contains(ee)||(Y||Z?window.open(n.href,"","noreferrer"):n.click())};return s==null||s.addEventListener("click",v),()=>s==null?void 0:s.removeEventListener("click",v)},[]),e.jsx(Q,{className:G("ds-card",d),"data-variant":l,ref:X,...i})}),J=C.forwardRef(function({asChild:o,className:l,...d},i){const f=o?$:"div";return e.jsx(f,{className:G("ds-card__block",l),ref:i,...d})}),K=Object.assign(de,{Block:J});K.Block.displayName="Card.Block";const t=K,a=J;t.displayName="Card";try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the card.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Instances of `Card.Block`, `Divider` or other React nodes",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const we={title:"Components/Card",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","tinted"],description:"Change the background color of the card.",defaultValue:"default"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element (e.g., <a> or <button>)",defaultValue:!1},children:{control:!1,description:"Card content (ReactNode)"}}},c={render:r=>e.jsxs(t,{...r,children:[e.jsxs(a,{children:[e.jsx("h3",{children:"Card Title"}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]}),e.jsx(a,{children:e.jsx("p",{children:"Another block of content."})}),e.jsx(a,{children:e.jsx("small",{children:"Footer text"})})]}),args:{"data-color":"neutral",variant:"default"}},p={render:r=>e.jsx(t,{...r,children:e.jsxs(a,{children:[e.jsx("h3",{children:"Tinted Card"}),e.jsx("p",{children:"This card uses the tinted variant."})]})}),args:{"data-color":"accent",variant:"tinted"}},m={name:"Example with Image",render:r=>e.jsxs(t,{...r,style:{maxWidth:"300px"},children:[e.jsx(a,{children:e.jsx("img",{src:"https://picsum.photos/seed/storybook/300/200",alt:"Random placeholder image",style:{width:"100%",display:"block",aspectRatio:"3 / 2",objectFit:"cover"}})}),e.jsxs(a,{children:[e.jsx("h3",{children:"Card with Image"}),e.jsx("p",{children:"The image uses an online placeholder."})]})]}),args:{"data-color":"neutral"}},h={render:r=>e.jsx(t,{...r,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("a",{href:"https://designsystemet.no/",children:[e.jsx("h3",{children:"Link Card"}),e.jsx("p",{children:"This entire card is a link."})]}),"data-color":"brand1",variant:"tinted"}},u={render:r=>e.jsx(t,{...r,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("button",{type:"button",onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{children:"Button Card"}),e.jsx("p",{children:"This entire card is a button."})]}),"data-color":"brand2"}},g={render:r=>e.jsxs(t,{...r,children:[e.jsxs(a,{children:[e.jsx("h3",{children:"Composed Card"}),e.jsx("p",{children:"This card contains other components."}),e.jsx("div",{style:{marginTop:"var(--ds-spacing-4, 16px)"},children:e.jsx(y,{variant:"primary","data-size":"sm",children:"Action"})})]}),e.jsx(a,{children:e.jsx("small",{children:"Footer with more info"})})]}),args:{"data-color":"neutral",variant:"tinted"}},x={name:"Example Complex Composition",render:r=>{const o=[{value:"leder",label:"Daglig leder"},{value:"medlem",label:"Styremedlem"},{value:"ansatt",label:"Ansatt"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(b,{level:3,"data-size":"xs",children:"Rolle 1"}),e.jsxs(y,{variant:"secondary","data-color":"danger","data-size":"sm",children:[e.jsx(te,{"aria-hidden":!0}),"Fjern"]})]})}),e.jsxs(a,{children:[e.jsxs(ne,{children:[e.jsx(oe,{htmlFor:"rolle-select",children:"Velg rolle"}),e.jsx(k,{id:"rolle-select",children:o.map(({value:l,label:d},i)=>e.jsx(k.Option,{value:l,children:d},i))})]}),e.jsx(B,{label:"Fødsels- eller d-nummer"}),e.jsx(B,{label:"Etternavn"})]}),e.jsx(a,{children:e.jsxs(y,{variant:"secondary","data-color":"accent","data-size":"sm",children:["Legg til rolle",e.jsx(se,{"aria-hidden":!0,style:{marginLeft:"4px"}})]})})]}),e.jsxs(t,{"data-color":"neutral",children:[e.jsx(a,{children:e.jsx("img",{src:ae,alt:"katt",style:{width:"100%",display:"block"}})}),e.jsxs(a,{children:[e.jsx(b,{level:3,"data-size":"sm",children:"Card Neutral"}),e.jsx(le,{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]})]})]})},args:{"data-color":"accent","data-size":"md",variant:"default"},argTypes:{asChild:{control:!1},children:{control:!1}}};var T,S,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Card {...args}>\r
      <CardBlock>\r
        <h3>Card Title</h3>\r
        <p>\r
          Most provide as with carried business are much better more the\r
          perfected designer. Writing slightly explain desk unable at supposedly\r
          about this.\r
        </p>\r
      </CardBlock>\r
      <CardBlock>\r
        <p>Another block of content.</p>\r
      </CardBlock>\r
      <CardBlock>\r
        <small>Footer text</small>\r
      </CardBlock>\r
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'default'
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,F,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Card {...args}>\r
      <CardBlock>\r
        <h3>Tinted Card</h3>\r
        <p>This card uses the tinted variant.</p>\r
      </CardBlock>\r
    </Card>,
  args: {
    'data-color': 'accent',
    variant: 'tinted'
  }
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var L,E,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example with Image',
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }}>\r
        <CardBlock>\r
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
      />\r
        </CardBlock>\r
        <CardBlock>\r
          <h3>Card with Image</h3>\r
          <p>The image uses an online placeholder.</p>\r
        </CardBlock>\r
      </Card>,
  args: {
    'data-color': 'neutral'
  }
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var I,_,A;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }} />,
  args: {
    asChild: true,
    children: <a href="https://designsystemet.no/">\r
        <h3>Link Card</h3>\r
        <p>This entire card is a link.</p>\r
      </a>,
    'data-color': 'brand1',
    variant: 'tinted'
  }
}`,...(A=(_=h.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var D,V,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }} />,
  args: {
    asChild: true,
    children: <button type="button" onClick={() => alert('Card clicked!')}>\r
        <h3>Button Card</h3>\r
        <p>This entire card is a button.</p>\r
      </button>,
    'data-color': 'brand2'
  }
}`,...(N=(V=u.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var q,H,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Card {...args}>\r
      <CardBlock>\r
        <h3>Composed Card</h3>\r
        <p>This card contains other components.</p>\r
        <div style={{
        marginTop: 'var(--ds-spacing-4, 16px)'
      }}>\r
          <Button variant="primary" data-size="sm">\r
            Action\r
          </Button>\r
        </div>\r
      </CardBlock>\r
      <CardBlock>\r
        <small>Footer with more info</small>\r
      </CardBlock>\r
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'tinted'
  }
}`,...(P=(H=g.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var M,O,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    }}>\r
        <Card {...args}>\r
          <CardBlock>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>\r
              <Heading level={3} data-size="xs">Rolle 1</Heading>\r
              <Button variant="secondary" data-color="danger" data-size="sm">\r
                <TrashFillIcon aria-hidden />\r
                Fjern\r
              </Button>\r
            </div>\r
          </CardBlock>\r
          <CardBlock>\r
            <Field>\r
              <Label htmlFor="rolle-select">Velg rolle</Label>\r
              <Select id="rolle-select">\r
                {options.map(({
                value,
                label
              }, index) => <Select.Option key={index} value={value}>\r
                    {label}\r
                  </Select.Option>)}\r
              </Select>\r
            </Field>\r
            <Textfield label="Fødsels- eller d-nummer" />\r
            <Textfield label="Etternavn" />\r
          </CardBlock>\r
          <CardBlock>\r
            <Button variant="secondary" data-color="accent" data-size="sm">\r
              Legg til rolle\r
              <PlusIcon aria-hidden style={{
              marginLeft: '4px'
            }} />\r
            </Button>\r
          </CardBlock>\r
        </Card>\r
\r
        <Card data-color="neutral">\r
          <CardBlock>\r
            <img src={cat1} alt="katt" style={{
            width: '100%',
            display: 'block'
          }} />\r
          </CardBlock>\r
          <CardBlock>\r
            <Heading level={3} data-size="sm">Card Neutral</Heading>\r
            <Paragraph>\r
              Most provide as with carried business are much better more the\r
              perfected designer. Writing slightly explain desk unable at supposedly\r
              about this.\r
            </Paragraph>\r
          </CardBlock>\r
        </Card>\r
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
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ze=["Default","Tinted","WithImage","AsLink","AsButton","ComposedContent","ComplexComposition"];export{u as AsButton,h as AsLink,x as ComplexComposition,g as ComposedContent,c as Default,p as Tinted,m as WithImage,ze as __namedExportsOrder,we as default};
