import{j as e}from"./iframe-UWgLZnFo.js";import{F as u}from"./index-Cr7xE7vX.js";import{F as d}from"./index-WDXkIOtF.js";import{L as i}from"./label-D4gXjSCT.js";import{T as n}from"./textfield-Dfi9vuv8.js";import{T as y}from"./textarea-D69VIF0t.js";const s=u;try{s.displayName="Fieldset",s.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const F={title:"Components/Fieldset",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Fieldset groups related form controls, often with a legend."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls."},legend:{table:{disable:!0}},description:{table:{disable:!0}},error:{table:{disable:!0}}}},r={render:l=>e.jsx("form",{children:e.jsxs(s,{...l,children:[e.jsx(s.Legend,{children:"Skriv inn dine svar"}),e.jsx(s.Description,{children:"Gi en kort beskrivelse i begge feltene"}),e.jsxs(d,{children:[e.jsx(i,{id:"short-desc-label",htmlFor:"short-desc",children:"Kort beskrivelse"}),e.jsx(n,{id:"short-desc","aria-labelledby":"short-desc-label"})]}),e.jsxs(d,{children:[e.jsx(i,{id:"long-desc-label",htmlFor:"long-desc",children:"Lang beskrivelse"}),e.jsx(y,{id:"long-desc","aria-labelledby":"long-desc-label"})]})]})}),args:{"data-size":"md","data-color":"brand1"},name:"With Textfields"},a={render:l=>e.jsx("form",{children:e.jsxs(s,{...l,children:[e.jsx(s.Legend,{children:"Hvilke nyhetsbrev ønsker du?"}),e.jsx(s.Description,{children:"Velg ett eller flere alternativer"}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Produktnyheter"]}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Blogginnlegg"]}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Invitasjoner til webinar"]})]})}),args:{"data-size":"md","data-color":"neutral"},name:"With Checkbox"},t={render:l=>e.jsx("form",{children:e.jsxs(s,{...l,children:[e.jsx(s.Legend,{asChild:!0,children:e.jsx("h3",{style:{margin:0},children:"Hvor bor du nå?"})}),e.jsxs(d,{children:[e.jsx(i,{id:"address-line1-label",htmlFor:"address-line1",children:"Adresse"}),e.jsx(n,{id:"address-line1","aria-labelledby":"address-line1-label"})]}),e.jsxs(d,{children:[e.jsx(i,{id:"zip-label",htmlFor:"zip",children:"Postnummer"}),e.jsx(n,{id:"zip","aria-labelledby":"zip-label",size:6})]})]})}),args:{"data-size":"md"},name:"Legend as Heading"};var o,c,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Skriv inn dine svar</Fieldset.Legend>
        <Fieldset.Description>
          Gi en kort beskrivelse i begge feltene
        </Fieldset.Description>

        <Field>
          <Label id="short-desc-label" htmlFor="short-desc">
            Kort beskrivelse
          </Label>
          <Textfield id="short-desc" aria-labelledby="short-desc-label" />
        </Field>

        <Field>
          <Label id="long-desc-label" htmlFor="long-desc">
            Lang beskrivelse
          </Label>
          <Textarea id="long-desc" aria-labelledby="long-desc-label" />
        </Field>
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    'data-color': 'brand1'
  },
  name: 'With Textfields'
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <input type="checkbox" /> Produktnyheter
        </label>
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <input type="checkbox" /> Blogginnlegg
        </label>
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <input type="checkbox" /> Invitasjoner til webinar
        </label>
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'With Checkbox'
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend asChild>
          <h3 style={{
          margin: 0
        }}>Hvor bor du nå?</h3>
        </Fieldset.Legend>
        <Field>
          <Label id="address-line1-label" htmlFor="address-line1">Adresse</Label>
          <Textfield id="address-line1" aria-labelledby="address-line1-label" />
        </Field>
        <Field>
          <Label id="zip-label" htmlFor="zip">Postnummer</Label>
          <Textfield id="zip" aria-labelledby="zip-label" size={6} />
        </Field>
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md'
  },
  name: 'Legend as Heading'
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const j=["WithTextfields","WithCheckbox","LegendAsHeading"],C=Object.freeze(Object.defineProperty({__proto__:null,LegendAsHeading:t,WithCheckbox:a,WithTextfields:r,__namedExportsOrder:j,default:F},Symbol.toStringTag,{value:"Module"}));export{C as F,r as W};
