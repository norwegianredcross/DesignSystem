import{r as C,j as e}from"./iframe-DMOcb_7w.js";import{S as $}from"./index-DH9usdEq.js";import{c as Q}from"./lite-DaUVFjkg.js";import{u as ae}from"./use-merge-refs-C_iE-z5m.js";import{B as y}from"./button-BYqa7XVT.js";import{H as v}from"./heading-B6YHz9T1.js";import{S as re,a as te}from"./TrashFill-DLpT-62P.js";import{F as se}from"./index-Dig5DJn1.js";import{L as ne}from"./label-CGEr6EKl.js";import{S as k}from"./index-DiJe4Yka.js";import{T as B}from"./textfield-9QCzZhAs.js";import{P as oe}from"./paragraph-DQu5urHe.js";const le=C.forwardRef(function({asChild:o=!1,variant:l="default",className:d,...i},f){const K=o?$:"div",j=C.useRef(null),X=ae([j,f]);return C.useEffect(()=>{const s=j.current,b=({ctrlKey:Y,metaKey:Z,target:ee})=>{const n=s==null?void 0:s.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!n||n!=null&&n.contains(ee)||(Y||Z?window.open(n.href,"","noreferrer"):n.click())};return s==null||s.addEventListener("click",b),()=>s==null?void 0:s.removeEventListener("click",b)},[]),e.jsx(K,{className:Q("ds-card",d),"data-variant":l,ref:X,...i})}),G=C.forwardRef(function({asChild:o,className:l,...d},i){const f=o?$:"div";return e.jsx(f,{className:Q("ds-card__block",l),ref:i,...d})}),J=Object.assign(le,{Block:G});J.Block.displayName="Card.Block";const t=J,r=G;t.displayName="Card";try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the card.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Instances of `Card.Block`, `Divider` or other React nodes",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const de="/DesignSystem/storybook/assets/person-DWvtQrl6.png",ie={title:"Components/Card",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","tinted"],description:"Change the background color of the card.",defaultValue:"default"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element (e.g., <a> or <button>)",defaultValue:!1},children:{control:!1,description:"Card content (ReactNode)"}}},c={render:a=>e.jsxs(t,{...a,children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Card Title"}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]}),e.jsx(r,{children:e.jsx("p",{children:"Another block of content."})}),e.jsx(r,{children:e.jsx("small",{children:"Footer text"})})]}),args:{"data-color":"neutral",variant:"default"}},p={render:a=>e.jsx(t,{...a,children:e.jsxs(r,{children:[e.jsx("h3",{children:"Tinted Card"}),e.jsx("p",{children:"This card uses the tinted variant."})]})}),args:{"data-color":"accent",variant:"tinted"}},m={name:"Example with Image",render:a=>e.jsxs(t,{...a,style:{maxWidth:"300px"},children:[e.jsx(r,{children:e.jsx("img",{src:"https://picsum.photos/seed/storybook/300/200",alt:"Random placeholder image",style:{width:"100%",display:"block",aspectRatio:"3 / 2",objectFit:"cover"}})}),e.jsxs(r,{children:[e.jsx("h3",{children:"Card with Image"}),e.jsx("p",{children:"The image uses an online placeholder."})]})]}),args:{"data-color":"neutral"}},h={render:a=>e.jsx(t,{...a,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("a",{href:"https://designsystemet.no/",children:[e.jsx("h3",{children:"Link Card"}),e.jsx("p",{children:"This entire card is a link."})]}),"data-color":"brand1",variant:"tinted"}},u={render:a=>e.jsx(t,{...a,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("button",{type:"button",onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{children:"Button Card"}),e.jsx("p",{children:"This entire card is a button."})]}),"data-color":"brand2"}},g={render:a=>e.jsxs(t,{...a,children:[e.jsxs(r,{children:[e.jsx("h3",{children:"Composed Card"}),e.jsx("p",{children:"This card contains other components."}),e.jsx("div",{style:{marginTop:"var(--ds-spacing-4, 16px)"},children:e.jsx(y,{variant:"primary","data-size":"sm",children:"Action"})})]}),e.jsx(r,{children:e.jsx("small",{children:"Footer with more info"})})]}),args:{"data-color":"neutral",variant:"tinted"}},x={name:"Example Complex Composition",render:a=>{const o=[{value:"leder",label:"Daglig leder"},{value:"medlem",label:"Styremedlem"},{value:"ansatt",label:"Ansatt"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsxs(t,{...a,children:[e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(v,{level:3,"data-size":"xs",children:"Rolle 1"}),e.jsxs(y,{variant:"secondary","data-color":"danger","data-size":"sm",children:[e.jsx(re,{"aria-hidden":!0}),"Fjern"]})]})}),e.jsxs(r,{children:[e.jsxs(se,{children:[e.jsx(ne,{htmlFor:"rolle-select",children:"Velg rolle"}),e.jsx(k,{id:"rolle-select",children:o.map(({value:l,label:d},i)=>e.jsx(k.Option,{value:l,children:d},i))})]}),e.jsx(B,{label:"Fødsels- eller d-nummer"}),e.jsx(B,{label:"Etternavn"})]}),e.jsx(r,{children:e.jsxs(y,{variant:"secondary","data-color":"accent","data-size":"sm",children:["Legg til rolle",e.jsx(te,{"aria-hidden":!0,style:{marginLeft:"4px"}})]})})]}),e.jsxs(t,{"data-color":"neutral",children:[e.jsx(r,{children:e.jsx("img",{src:de,alt:"katt",style:{width:"100%",display:"block"}})}),e.jsxs(r,{children:[e.jsx(v,{level:3,"data-size":"sm",children:"Card Neutral"}),e.jsx(oe,{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]})]})]})},args:{"data-color":"accent","data-size":"md",variant:"default"},argTypes:{asChild:{control:!1},children:{control:!1}}};var T,S,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,F,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var W,_,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var D,E,A;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var I,V,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(V=u.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var O,P,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var H,M,U;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(M=x.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const ce=["Default","Tinted","WithImage","AsLink","AsButton","ComposedContent","ComplexComposition"],ke=Object.freeze(Object.defineProperty({__proto__:null,AsButton:u,AsLink:h,ComplexComposition:x,ComposedContent:g,Default:c,Tinted:p,WithImage:m,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{h as A,ke as C,c as D,p as T,m as W,g as a,u as b,x as c};
