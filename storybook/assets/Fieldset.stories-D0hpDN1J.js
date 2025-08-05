import{j as e}from"./iframe-sfm2iiNv.js";import{F as n}from"./index-DoEYRIas.js";import{F as l}from"./index-DCrjCZJM.js";import{L as o}from"./Label-hKN12Bml.js";import{T as c}from"./Textfield-Dpo-Ign-.js";import{T as m}from"./Textarea-Dj7VAftg.js";import"./preload-helper-C1FmrZbK.js";import"./lite-DaUVFjkg.js";import"./Paragraph-r4OMux9D.js";import"./index-B-pTjrYB.js";import"./index-Bpc4Wq8G.js";import"./floating-ui.react-B0KwFFiC.js";import"./index-DNAPc2gN.js";import"./index-jZE8LZbC.js";import"./Input-DTmrggwA.js";const r=n;try{r.displayName="Fieldset",r.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Components/Fieldset",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Fieldset groups related form controls, often with a legend."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls."},legend:{table:{disable:!0}},description:{table:{disable:!0}},error:{table:{disable:!0}}}},s={render:t=>e.jsx("form",{children:e.jsxs(r,{...t,children:[e.jsx(r.Legend,{children:"Skriv inn dine svar"}),e.jsx(r.Description,{children:"Gi en kort beskrivelse i begge feltene"}),e.jsxs(l,{children:[e.jsx(o,{id:"short-desc-label",htmlFor:"short-desc",children:"Kort beskrivelse"}),e.jsx(c,{id:"short-desc","aria-labelledby":"short-desc-label"})]}),e.jsxs(l,{children:[e.jsx(o,{id:"long-desc-label",htmlFor:"long-desc",children:"Lang beskrivelse"}),e.jsx(m,{id:"long-desc","aria-labelledby":"long-desc-label"})]})]})}),args:{"data-size":"md","data-color":"brand1"},name:"With Textfields"};var d,i,a;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const D=["WithTextfields"];export{s as WithTextfields,D as __namedExportsOrder,z as default};
