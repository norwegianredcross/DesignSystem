import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as ae}from"./floating-ui.react-VFS6-CKd.js";import{S as q}from"./index-Cb-ENzfG.js";import{c as G}from"./lite-DaUVFjkg.js";import{r as d}from"./index-D4lIrffr.js";import{B as te}from"./index-DyXSSrOW.js";import{c as se}from"./person-B5yfi1K0.js";import{H as j}from"./Heading-BGOStg1T.js";import{B as y}from"./Button-_80U_wOV.js";import{u as J}from"./useId-Dtjwz75n.js";import{F as le}from"./index-CMMlhluM.js";import{L as ne}from"./Label-DnboOLtM.js";import{S as k}from"./index-BFhcAb3Y.js";import{T as B}from"./Textfield-BbSKMBlZ.js";import{P as oe}from"./Paragraph-CJciD5B6.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Spinner-Dj2HLJn9.js";import"./Textarea-ik62Jeuf.js";import"./Input-FgPaU4ty.js";const de=d.forwardRef(function({asChild:l=!1,variant:s="default",className:a,...t},n){const X=l?q:"div",v=d.useRef(null),Y=ae([v,n]);return d.useEffect(()=>{const c=v.current,b=({ctrlKey:Z,metaKey:ee,target:re})=>{const p=c==null?void 0:c.querySelector(":is(h1,h2,h3,h4,h5,h6) a");!p||p!=null&&p.contains(re)||(Z||ee?window.open(p.href,"","noreferrer"):p.click())};return c==null||c.addEventListener("click",b),()=>c==null?void 0:c.removeEventListener("click",b)},[]),e.jsx(X,{className:G("ds-card",a),"data-variant":s,ref:Y,...t})}),K=d.forwardRef(function({asChild:l,className:s,...a},t){const n=l?q:"div";return e.jsx(n,{className:G("ds-card__block",s),ref:t,...a})}),Q=Object.assign(de,{Block:K});Q.Block.displayName="Card.Block";var ie=function(r,l){var s={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&l.indexOf(a)<0&&(s[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(r);t<a.length;t++)l.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(r,a[t])&&(s[a[t]]=r[a[t]]);return s};const ce=d.forwardRef((r,l)=>{var{title:s,titleId:a}=r,t=ie(r,["title","titleId"]);let n=J();return n=s?a||"title-"+n:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},t),s?d.createElement("title",{id:n},s):null,d.createElement("path",{fill:"currentColor",d:"M12.75 5.5a.75.75 0 0 0-1.5 0v5.75H5.5a.75.75 0 0 0 0 1.5h5.75v5.75a.75.75 0 0 0 1.5 0v-5.75h5.75a.75.75 0 0 0 0-1.5h-5.75z"}))});var pe=function(r,l){var s={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&l.indexOf(a)<0&&(s[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(r);t<a.length;t++)l.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(r,a[t])&&(s[a[t]]=r[a[t]]);return s};const me=d.forwardRef((r,l)=>{var{title:s,titleId:a}=r,t=pe(r,["title","titleId"]);let n=J();return n=s?a||"title-"+n:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":n},t),s?d.createElement("title",{id:n},s):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))}),i=Q,o=K;i.displayName="Card";const ze={title:"Components/Card",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","tinted"],description:"Change the background color of the card.",defaultValue:"default"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element (e.g., <a> or <button>)",defaultValue:!1},children:{control:!1,description:"Card content (ReactNode)"}}},m={render:r=>e.jsxs(i,{...r,children:[e.jsxs(o,{children:[e.jsx("h3",{children:"Card Title"}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]}),e.jsx(o,{children:e.jsx("p",{children:"Another block of content."})}),e.jsx(o,{children:e.jsx("small",{children:"Footer text"})})]}),args:{"data-color":"neutral",variant:"default"}},h={render:r=>e.jsx(i,{...r,children:e.jsxs(o,{children:[e.jsx("h3",{children:"Tinted Card"}),e.jsx("p",{children:"This card uses the tinted variant."})]})}),args:{"data-color":"accent",variant:"tinted"}},u={name:"Example with Image",render:r=>e.jsxs(i,{...r,style:{maxWidth:"300px"},children:[e.jsx(o,{children:e.jsx("img",{src:"https://picsum.photos/seed/storybook/300/200",alt:"Random placeholder image",style:{width:"100%",display:"block",aspectRatio:"3 / 2",objectFit:"cover"}})}),e.jsxs(o,{children:[e.jsx("h3",{children:"Card with Image"}),e.jsx("p",{children:"The image uses an online placeholder."})]})]}),args:{"data-color":"neutral"}},g={render:r=>e.jsx(i,{...r,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("a",{href:"https://designsystemet.no/",children:[e.jsx("h3",{children:"Link Card"}),e.jsx("p",{children:"This entire card is a link."})]}),"data-color":"brand1",variant:"tinted"}},x={render:r=>e.jsx(i,{...r,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("button",{type:"button",onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{children:"Button Card"}),e.jsx("p",{children:"This entire card is a button."})]}),"data-color":"brand2"}},f={render:r=>e.jsxs(i,{...r,children:[e.jsxs(o,{children:[e.jsx("h3",{children:"Composed Card"}),e.jsx("p",{children:"This card contains other components."}),e.jsx("div",{style:{marginTop:"var(--ds-spacing-4, 16px)"},children:e.jsx(te,{variant:"primary","data-size":"sm",children:"Action"})})]}),e.jsx(o,{children:e.jsx("small",{children:"Footer with more info"})})]}),args:{"data-color":"neutral",variant:"tinted"}},C={name:"Example Complex Composition",render:r=>{const l=[{value:"leder",label:"Daglig leder"},{value:"medlem",label:"Styremedlem"},{value:"ansatt",label:"Ansatt"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsxs(i,{...r,children:[e.jsx(o,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(j,{level:3,"data-size":"xs",children:"Rolle 1"}),e.jsxs(y,{variant:"secondary","data-color":"danger","data-size":"sm",children:[e.jsx(me,{"aria-hidden":!0}),"Fjern"]})]})}),e.jsxs(o,{children:[e.jsxs(le,{children:[e.jsx(ne,{htmlFor:"rolle-select",children:"Velg rolle"}),e.jsx(k,{id:"rolle-select",children:l.map(({value:s,label:a},t)=>e.jsx(k.Option,{value:s,children:a},t))})]}),e.jsx(B,{label:"Fødsels- eller d-nummer"}),e.jsx(B,{label:"Etternavn"})]}),e.jsx(o,{children:e.jsxs(y,{variant:"secondary","data-color":"accent","data-size":"sm",children:["Legg til rolle",e.jsx(ce,{"aria-hidden":!0,style:{marginLeft:"4px"}})]})})]}),e.jsxs(i,{"data-color":"neutral",children:[e.jsx(o,{children:e.jsx("img",{src:se,alt:"katt",style:{width:"100%",display:"block"}})}),e.jsxs(o,{children:[e.jsx(j,{level:3,"data-size":"sm",children:"Card Neutral"}),e.jsx(oe,{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]})]})]})},args:{"data-color":"accent","data-size":"md",variant:"default"},argTypes:{asChild:{control:!1},children:{control:!1}}};var w,T,O;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var S,E,I;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,F,z;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(z=(F=u.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var L,W,A;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(W=g.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var P,_,D;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(_=x.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var H,M,V;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(M=f.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var N,$,U;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const Le=["Default","Tinted","WithImage","AsLink","AsButton","ComposedContent","ComplexComposition"];export{x as AsButton,g as AsLink,C as ComplexComposition,f as ComposedContent,m as Default,h as Tinted,u as WithImage,Le as __namedExportsOrder,ze as default};
