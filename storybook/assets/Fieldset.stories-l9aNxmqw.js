import{j as e}from"./iframe-C1QSOCmb.js";import{F as u}from"./index-C_dspG02.js";import{F as d}from"./index-CDm9bOTW.js";import{L as i}from"./label-DuBUHYAg.js";import{T as n}from"./textfield-DqCsVOm1.js";import{T as y}from"./textarea-B4Y-ozv0.js";const r=u;try{r.displayName="Fieldset",r.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const F={title:"Components/Fieldset",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Fieldset groups related form controls, often with a legend."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls."},legend:{table:{disable:!0}},description:{table:{disable:!0}},error:{table:{disable:!0}}}},l={render:s=>e.jsx("form",{children:e.jsxs(r,{...s,children:[e.jsx(r.Legend,{children:"Skriv inn dine svar"}),e.jsx(r.Description,{children:"Gi en kort beskrivelse i begge feltene"}),e.jsxs(d,{children:[e.jsx(i,{id:"short-desc-label",htmlFor:"short-desc",children:"Kort beskrivelse"}),e.jsx(n,{id:"short-desc","aria-labelledby":"short-desc-label"})]}),e.jsxs(d,{children:[e.jsx(i,{id:"long-desc-label",htmlFor:"long-desc",children:"Lang beskrivelse"}),e.jsx(y,{id:"long-desc","aria-labelledby":"long-desc-label"})]})]})}),args:{"data-size":"md","data-color":"brand1"},name:"With Textfields"},a={render:s=>e.jsx("form",{children:e.jsxs(r,{...s,children:[e.jsx(r.Legend,{children:"Hvilke nyhetsbrev ønsker du?"}),e.jsx(r.Description,{children:"Velg ett eller flere alternativer"}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Produktnyheter"]}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Blogginnlegg"]}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Invitasjoner til webinar"]})]})}),args:{"data-size":"md","data-color":"neutral"},name:"With Checkbox"},t={render:s=>e.jsx("form",{children:e.jsxs(r,{...s,children:[e.jsx(r.Legend,{asChild:!0,children:e.jsx("h3",{style:{margin:0},children:"Hvor bor du nå?"})}),e.jsxs(d,{children:[e.jsx(i,{id:"address-line1-label",htmlFor:"address-line1",children:"Adresse"}),e.jsx(n,{id:"address-line1","aria-labelledby":"address-line1-label"})]}),e.jsxs(d,{children:[e.jsx(i,{id:"zip-label",htmlFor:"zip",children:"Postnummer"}),e.jsx(n,{id:"zip","aria-labelledby":"zip-label",size:6})]})]})}),args:{"data-size":"md"},name:"Legend as Heading"};var o,c,p;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <form>\r
      <Fieldset {...args}>\r
        <Fieldset.Legend>Skriv inn dine svar</Fieldset.Legend>\r
        <Fieldset.Description>\r
          Gi en kort beskrivelse i begge feltene\r
        </Fieldset.Description>\r
\r
        <Field>\r
          <Label id="short-desc-label" htmlFor="short-desc">\r
            Kort beskrivelse\r
          </Label>\r
          <Textfield id="short-desc" aria-labelledby="short-desc-label" />\r
        </Field>\r
\r
        <Field>\r
          <Label id="long-desc-label" htmlFor="long-desc">\r
            Lang beskrivelse\r
          </Label>\r
          <Textarea id="long-desc" aria-labelledby="long-desc-label" />\r
        </Field>\r
      </Fieldset>\r
    </form>,
  args: {
    'data-size': 'md',
    'data-color': 'brand1'
  },
  name: 'With Textfields'
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <form>\r
      <Fieldset {...args}>\r
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>\r
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>\r
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>\r
          <input type="checkbox" /> Produktnyheter\r
        </label>\r
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>\r
          <input type="checkbox" /> Blogginnlegg\r
        </label>\r
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>\r
          <input type="checkbox" /> Invitasjoner til webinar\r
        </label>\r
      </Fieldset>\r
    </form>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'With Checkbox'
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <form>\r
      <Fieldset {...args}>\r
        <Fieldset.Legend asChild>\r
          <h3 style={{
          margin: 0
        }}>Hvor bor du nå?</h3>\r
        </Fieldset.Legend>\r
        <Field>\r
          <Label id="address-line1-label" htmlFor="address-line1">Adresse</Label>\r
          <Textfield id="address-line1" aria-labelledby="address-line1-label" />\r
        </Field>\r
        <Field>\r
          <Label id="zip-label" htmlFor="zip">Postnummer</Label>\r
          <Textfield id="zip" aria-labelledby="zip-label" size={6} />\r
        </Field>\r
      </Fieldset>\r
    </form>,
  args: {
    'data-size': 'md'
  },
  name: 'Legend as Heading'
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const j=["WithTextfields","WithCheckbox","LegendAsHeading"],C=Object.freeze(Object.defineProperty({__proto__:null,LegendAsHeading:t,WithCheckbox:a,WithTextfields:l,__namedExportsOrder:j,default:F},Symbol.toStringTag,{value:"Module"}));export{C as F,l as W};
