import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as n}from"./index-DkoJrbVQ.js";import{F as t}from"./index-Odar1VmH.js";import{L as l}from"./Label-DnboOLtM.js";import{T as c}from"./Textfield-BbSKMBlZ.js";import{T as m}from"./Textarea-ik62Jeuf.js";import"./lite-DaUVFjkg.js";import"./index-D4lIrffr.js";import"./Paragraph-CJciD5B6.js";import"./index-Cb-ENzfG.js";import"./index-CMMlhluM.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Input-FgPaU4ty.js";const s=n,z={title:"Components/Fieldset",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Fieldset groups related form controls, often with a legend."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls."},legend:{table:{disable:!0}},description:{table:{disable:!0}},error:{table:{disable:!0}}}},r={render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Skriv inn dine svar"}),e.jsx(s.Description,{children:"Gi en kort beskrivelse i begge feltene"}),e.jsxs(t,{children:[e.jsx(l,{id:"short-desc-label",htmlFor:"short-desc",children:"Kort beskrivelse"}),e.jsx(c,{id:"short-desc","aria-labelledby":"short-desc-label"})]}),e.jsxs(t,{children:[e.jsx(l,{id:"long-desc-label",htmlFor:"long-desc",children:"Lang beskrivelse"}),e.jsx(m,{id:"long-desc","aria-labelledby":"long-desc-label"})]})]})}),args:{"data-size":"md","data-color":"brand1"},name:"With Textfields"};var i,o,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const W=["WithTextfields"];export{r as WithTextfields,W as __namedExportsOrder,z as default};
