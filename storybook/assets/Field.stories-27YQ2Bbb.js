import{j as e}from"./iframe-BHNwM2Px.js";import{F as i,a as D,b as j}from"./index-DfMWfP5Y.js";import{L as l}from"./label-e8D1VWny.js";import{T as t}from"./textfield-CQyI41jI.js";import{V as y,F as a}from"./index-BKj4NTZ2.js";import{T as u}from"./textarea-C6ilVDsf.js";import{S as d}from"./index-BF4MVDaD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D3MVKXs2.js";import"./lite-DaUVFjkg.js";import"./input-DeNNeell.js";import"./use-merge-refs-CPe1Q7jZ.js";import"./paragraph-B5WHgtx-.js";const V={title:"Components/Field",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Field is used to structure form elements with labels, descriptions, errors, prefixes, suffixes, and counters."}}},argTypes:{position:{control:"select",options:["start","end"],description:"Position of toggle inputs (radio, checkbox, switch)",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Field content, typically Label, Textfield, FieldDescription, etc."}}},s={name:"Example Basic",render:r=>e.jsxs(i,{...r,children:[e.jsx(l,{id:"textfield-default-label",htmlFor:"textfield-default",children:"Label"}),e.jsx(D,{children:"Short description for the field"}),e.jsx(t,{id:"textfield-default",placeholder:"Enter text...","aria-labelledby":"textfield-default-label"}),e.jsx(y,{children:"Error message"})]}),args:{"data-size":"md","data-color":"neutral"}},x={name:"Example with Counter",render:r=>e.jsxs(i,{...r,children:[e.jsx(l,{id:"textarea-counter-label",htmlFor:"textarea-counter",children:"Legg til en beskrivelse"}),e.jsx(u,{id:"textarea-counter",maxLength:50,rows:3,"aria-labelledby":"textarea-counter-label"}),e.jsx(j,{limit:50})]}),args:{"data-size":"md"}},f={name:"Example Affixes",render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},"data-color":r["data-color"],children:[e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example1-label",htmlFor:"affix-example1",children:"Hvor mange kroner koster det per måned?"}),e.jsx(i,{"data-size":r["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsx(t,{id:"affix-example1",type:"number","aria-labelledby":"affix-example1-label"}),e.jsx(a.Affix,{children:"pr. mnd."})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example2-label",htmlFor:"affix-example2",children:"Hvor mange kilo veier eplene du har valgt?"}),e.jsx(i,{"data-size":r["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(u,{id:"affix-example2",rows:2,"aria-labelledby":"affix-example2-label"}),e.jsx(a.Affix,{children:"KG"})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example3-label",htmlFor:"affix-example3",children:"Hvor mange kroner koster det?"}),e.jsx(i,{"data-size":r["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsxs(d,{id:"affix-example3","aria-labelledby":"affix-example3-label",children:[e.jsx(d.Option,{value:"-1",children:"Velg …"}),e.jsx(d.Option,{value:"10",children:"10"}),e.jsx(d.Option,{value:"20",children:"20"}),e.jsx(d.Option,{value:"30",children:"30"})]})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example4-label",htmlFor:"affix-example4",children:"No affix"}),e.jsx(i,{"data-size":r["data-size"],children:e.jsx(t,{id:"affix-example4","aria-labelledby":"affix-example4-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example5-label",htmlFor:"affix-example5",children:"No affix and small size"}),e.jsx(i,{"data-size":"sm",children:e.jsx(t,{id:"affix-example5","aria-labelledby":"affix-example5-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example6-label",htmlFor:"affix-example6",children:"No affix and large size"}),e.jsx(i,{"data-size":"lg",children:e.jsx(t,{id:"affix-example6","aria-labelledby":"affix-example6-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example7-label",htmlFor:"affix-example7",children:"Affix and small size"}),e.jsx(i,{"data-size":"sm",style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsx(t,{id:"affix-example7","aria-labelledby":"affix-example7-label"}),e.jsx(a.Affix,{children:"pr. mnd."})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"affix-example8-label",htmlFor:"affix-example8",children:"Affix and large size"}),e.jsx(i,{"data-size":"lg",style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsx(t,{id:"affix-example8","aria-labelledby":"affix-example8-label"}),e.jsx(a.Affix,{children:"pr. mnd."})]})})]})]}),args:{"data-size":"md","data-color":"neutral"},argTypes:{position:{control:!1}}};var n,o,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Example Basic',
  render: args => <Field {...args}>
      <Label id="textfield-default-label" htmlFor="textfield-default">
        Label
      </Label>
      <FieldDescription>Short description for the field</FieldDescription>
      <Textfield id="textfield-default" placeholder="Enter text..." aria-labelledby="textfield-default-label" />
      <ValidationMessage>Error message</ValidationMessage>
    </Field>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,c,b;x.parameters={...x.parameters,docs:{...(p=x.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Example with Counter',
  render: args => <Field {...args}>
      <Label id="textarea-counter-label" htmlFor="textarea-counter">
        Legg til en beskrivelse
      </Label>
      <Textarea id="textarea-counter" maxLength={50} rows={3} aria-labelledby="textarea-counter-label" />
      <FieldCounter limit={50} />
    </Field>,
  args: {
    'data-size': 'md'
  }
}`,...(b=(c=x.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var h,g,F;f.parameters={...f.parameters,docs:{...(h=f.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example Affixes',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }} data-color={args['data-color']}>
      <>
        <Label id="affix-example1-label" htmlFor="affix-example1">
          Hvor mange kroner koster det per måned?
        </Label>
        <Field data-size={args['data-size']} style={{
        display: 'inline-block',
        width: 'max-content'
      }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example1" type="number" aria-labelledby="affix-example1-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example2-label" htmlFor="affix-example2">
          Hvor mange kilo veier eplene du har valgt?
        </Label>
        <Field data-size={args['data-size']} style={{
        display: 'inline-block',
        width: 'max-content'
      }}>
          <DigDirField.Affixes>
            <Textarea id="affix-example2" rows={2} aria-labelledby="affix-example2-label" />
            <DigDirField.Affix>KG</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example3-label" htmlFor="affix-example3">
          Hvor mange kroner koster det?
        </Label>
        <Field data-size={args['data-size']} style={{
        display: 'inline-block',
        width: 'max-content'
      }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Select id="affix-example3" aria-labelledby="affix-example3-label">
              <Select.Option value="-1">Velg &hellip;</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="20">20</Select.Option>
              <Select.Option value="30">30</Select.Option>
            </Select>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example4-label" htmlFor="affix-example4">
          No affix
        </Label>
        <Field data-size={args['data-size']}>
          <Textfield id="affix-example4" aria-labelledby="affix-example4-label" />
        </Field>
      </>

      <>
        <Label id="affix-example5-label" htmlFor="affix-example5">
          No affix and small size
        </Label>
        <Field data-size="sm">
          <Textfield id="affix-example5" aria-labelledby="affix-example5-label" />
        </Field>
      </>

      <>
        <Label id="affix-example6-label" htmlFor="affix-example6">
          No affix and large size
        </Label>
        <Field data-size="lg">
          <Textfield id="affix-example6" aria-labelledby="affix-example6-label" />
        </Field>
      </>

      <>
        <Label id="affix-example7-label" htmlFor="affix-example7">
          Affix and small size
        </Label>
        <Field data-size="sm" style={{
        display: 'inline-block',
        width: 'max-content'
      }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example7" aria-labelledby="affix-example7-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>

      <>
        <Label id="affix-example8-label" htmlFor="affix-example8">
          Affix and large size
        </Label>
        <Field data-size="lg" style={{
        display: 'inline-block',
        width: 'max-content'
      }}>
          <DigDirField.Affixes>
            <DigDirField.Affix>NOK</DigDirField.Affix>
            <Textfield id="affix-example8" aria-labelledby="affix-example8-label" />
            <DigDirField.Affix>pr. mnd.</DigDirField.Affix>
          </DigDirField.Affixes>
        </Field>
      </>
    </div>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  argTypes: {
    position: {
      control: false
    }
  }
}`,...(F=(g=f.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const H=["DefaultTextfield","WithCounter","AffixExamples"];export{f as AffixExamples,s as DefaultTextfield,x as WithCounter,H as __namedExportsOrder,V as default};
