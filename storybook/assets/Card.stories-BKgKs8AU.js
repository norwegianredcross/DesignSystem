import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as re}from"./floating-ui.react-VFS6-CKd.js";import{S as q}from"./index-Cb-ENzfG.js";import{c as G}from"./lite-DaUVFjkg.js";import{r as C}from"./index-D4lIrffr.js";import{B as ae}from"./index-DyXSSrOW.js";import{c as te}from"./person-B5yfi1K0.js";import{H as k}from"./Heading-BGOStg1T.js";import{B as v}from"./Button-_80U_wOV.js";import{S as se,a as oe}from"./TrashFill-CMVb-cjX.js";import{F as le}from"./index-CMMlhluM.js";import{L as ne}from"./Label-DnboOLtM.js";import{S as y}from"./index-BFhcAb3Y.js";import{T as B}from"./Textfield-BbSKMBlZ.js";import{P as de}from"./Paragraph-CJciD5B6.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Spinner-Dj2HLJn9.js";import"./useId-Dtjwz75n.js";import"./Textarea-ik62Jeuf.js";import"./Input-FgPaU4ty.js";const ie=C.forwardRef(function({asChild:l=!1,variant:n="default",className:d,...i},f){const Q=l?q:"div",j=C.useRef(null),X=re([j,f]);return C.useEffect(()=>{const s=j.current,b=({ctrlKey:Y,metaKey:Z,target:ee})=>{const o=s==null?void 0:s.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!o||o!=null&&o.contains(ee)||(Y||Z?window.open(o.href,"","noreferrer"):o.click())};return s==null||s.addEventListener("click",b),()=>s==null?void 0:s.removeEventListener("click",b)},[]),e.jsx(Q,{className:G("ds-card",d),"data-variant":n,ref:X,...i})}),J=C.forwardRef(function({asChild:l,className:n,...d},i){const f=l?q:"div";return e.jsx(f,{className:G("ds-card__block",n),ref:i,...d})}),K=Object.assign(ie,{Block:J});K.Block.displayName="Card.Block";const t=K,a=J;t.displayName="Card";const ze={title:"Components/Card",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","tinted"],description:"Change the background color of the card.",defaultValue:"default"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element (e.g., <a> or <button>)",defaultValue:!1},children:{control:!1,description:"Card content (ReactNode)"}}},c={render:r=>e.jsxs(t,{...r,children:[e.jsxs(a,{children:[e.jsx("h3",{children:"Card Title"}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]}),e.jsx(a,{children:e.jsx("p",{children:"Another block of content."})}),e.jsx(a,{children:e.jsx("small",{children:"Footer text"})})]}),args:{"data-color":"neutral",variant:"default"}},p={render:r=>e.jsx(t,{...r,children:e.jsxs(a,{children:[e.jsx("h3",{children:"Tinted Card"}),e.jsx("p",{children:"This card uses the tinted variant."})]})}),args:{"data-color":"accent",variant:"tinted"}},m={name:"Example with Image",render:r=>e.jsxs(t,{...r,style:{maxWidth:"300px"},children:[e.jsx(a,{children:e.jsx("img",{src:"https://picsum.photos/seed/storybook/300/200",alt:"Random placeholder image",style:{width:"100%",display:"block",aspectRatio:"3 / 2",objectFit:"cover"}})}),e.jsxs(a,{children:[e.jsx("h3",{children:"Card with Image"}),e.jsx("p",{children:"The image uses an online placeholder."})]})]}),args:{"data-color":"neutral"}},h={render:r=>e.jsx(t,{...r,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("a",{href:"https://designsystemet.no/",children:[e.jsx("h3",{children:"Link Card"}),e.jsx("p",{children:"This entire card is a link."})]}),"data-color":"brand1",variant:"tinted"}},u={render:r=>e.jsx(t,{...r,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("button",{type:"button",onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{children:"Button Card"}),e.jsx("p",{children:"This entire card is a button."})]}),"data-color":"brand2"}},x={render:r=>e.jsxs(t,{...r,children:[e.jsxs(a,{children:[e.jsx("h3",{children:"Composed Card"}),e.jsx("p",{children:"This card contains other components."}),e.jsx("div",{style:{marginTop:"var(--ds-spacing-4, 16px)"},children:e.jsx(ae,{variant:"primary","data-size":"sm",children:"Action"})})]}),e.jsx(a,{children:e.jsx("small",{children:"Footer with more info"})})]}),args:{"data-color":"neutral",variant:"tinted"}},g={name:"Example Complex Composition",render:r=>{const l=[{value:"leder",label:"Daglig leder"},{value:"medlem",label:"Styremedlem"},{value:"ansatt",label:"Ansatt"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsxs(t,{...r,children:[e.jsx(a,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(k,{level:3,"data-size":"xs",children:"Rolle 1"}),e.jsxs(v,{variant:"secondary","data-color":"danger","data-size":"sm",children:[e.jsx(se,{"aria-hidden":!0}),"Fjern"]})]})}),e.jsxs(a,{children:[e.jsxs(le,{children:[e.jsx(ne,{htmlFor:"rolle-select",children:"Velg rolle"}),e.jsx(y,{id:"rolle-select",children:l.map(({value:n,label:d},i)=>e.jsx(y.Option,{value:n,children:d},i))})]}),e.jsx(B,{label:"Fødsels- eller d-nummer"}),e.jsx(B,{label:"Etternavn"})]}),e.jsx(a,{children:e.jsxs(v,{variant:"secondary","data-color":"accent","data-size":"sm",children:["Legg til rolle",e.jsx(oe,{"aria-hidden":!0,style:{marginLeft:"4px"}})]})})]}),e.jsxs(t,{"data-color":"neutral",children:[e.jsx(a,{children:e.jsx("img",{src:te,alt:"katt",style:{width:"100%",display:"block"}})}),e.jsxs(a,{children:[e.jsx(k,{level:3,"data-size":"sm",children:"Card Neutral"}),e.jsx(de,{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]})]})]})},args:{"data-color":"accent","data-size":"md",variant:"default"},argTypes:{asChild:{control:!1},children:{control:!1}}};var T,S,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var F,R,L;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,E,W;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var A,I,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(I=h.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var N,H,P;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var V,M,O;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Card {...args}>\r
      <CardBlock>\r
        <h3>Composed Card</h3>\r
        <p>This card contains other components.</p>\r
        <div style={{
        marginTop: 'var(--ds-spacing-4, 16px)'
      }}>\r
          <Buttons variant="primary" data-size="sm">\r
            Action\r
          </Buttons>\r
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
}`,...(O=(M=x.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var _,U,$;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const Ee=["Default","Tinted","WithImage","AsLink","AsButton","ComposedContent","ComplexComposition"];export{u as AsButton,h as AsLink,g as ComplexComposition,x as ComposedContent,c as Default,p as Tinted,m as WithImage,Ee as __namedExportsOrder,ze as default};
