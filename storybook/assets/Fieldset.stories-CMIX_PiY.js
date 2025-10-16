import{j as e}from"./iframe-Cm-BopP0.js";import{F as n}from"./index-y1gslStL.js";import{F as o}from"./index-BWqHd_eY.js";import{L as l}from"./label-BGG1GFhh.js";import{T as c}from"./textfield-DTNUHOyP.js";import{T as m}from"./textarea-BhLp7MZT.js";import"./preload-helper-Dp1pzeXC.js";import"./lite-DaUVFjkg.js";import"./paragraph-CsQ9r47F.js";import"./index-Wix542Se.js";import"./index-BkzMAr22.js";import"./use-merge-refs-BtC4cnvX.js";import"./input-08mk3PE9.js";const s=n;try{s.displayName="Fieldset",s.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const v={title:"Components/Fieldset",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Fieldset groups related form controls, often with a legend."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls."},legend:{table:{disable:!0}},description:{table:{disable:!0}},error:{table:{disable:!0}}}},t={render:r=>e.jsx("form",{children:e.jsxs(s,{...r,children:[e.jsx(s.Legend,{children:"Skriv inn dine svar"}),e.jsx(s.Description,{children:"Gi en kort beskrivelse i begge feltene"}),e.jsxs(o,{children:[e.jsx(l,{id:"short-desc-label",htmlFor:"short-desc",children:"Kort beskrivelse"}),e.jsx(c,{id:"short-desc","aria-labelledby":"short-desc-label"})]}),e.jsxs(o,{children:[e.jsx(l,{id:"long-desc-label",htmlFor:"long-desc",children:"Lang beskrivelse"}),e.jsx(m,{id:"long-desc","aria-labelledby":"long-desc-label"})]})]})}),args:{"data-size":"md","data-color":"brand1"},name:"With Textfields"};var d,i,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const _=["WithTextfields"];export{t as WithTextfields,_ as __namedExportsOrder,v as default};
