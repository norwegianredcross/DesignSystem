import{j as e}from"./iframe-DtUUsz2V.js";import{F as l,a as j,b as D}from"./index-CFDcu70a.js";import{L as i}from"./label-jqM0uZS0.js";import{T as r}from"./textfield-B49wAVKc.js";import{V as y,F as a}from"./index-BEGtHwHu.js";import{T as u}from"./textarea-lzQprwjP.js";import{S as d}from"./index-nej4_ohR.js";const A={title:"Components/Field",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Field is used to structure form elements with labels, descriptions, errors, prefixes, suffixes, and counters."}}},argTypes:{position:{control:"select",options:["start","end"],description:"Position of toggle inputs (radio, checkbox, switch)",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Field content, typically Label, Textfield, FieldDescription, etc."}}},s={name:"Example Basic",render:t=>e.jsxs(l,{...t,children:[e.jsx(i,{id:"textfield-default-label",htmlFor:"textfield-default",children:"Label"}),e.jsx(j,{children:"Short description for the field"}),e.jsx(r,{id:"textfield-default",placeholder:"Enter text...","aria-labelledby":"textfield-default-label"}),e.jsx(y,{children:"Error message"})]}),args:{"data-size":"md","data-color":"neutral"}},x={name:"Example with Counter",render:t=>e.jsxs(l,{...t,children:[e.jsx(i,{id:"textarea-counter-label",htmlFor:"textarea-counter",children:"Legg til en beskrivelse"}),e.jsx(u,{id:"textarea-counter",maxLength:50,rows:3,"aria-labelledby":"textarea-counter-label"}),e.jsx(D,{limit:50})]}),args:{"data-size":"md"}},f={name:"Example Affixes",render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},"data-color":t["data-color"],children:[e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example1-label",htmlFor:"affix-example1",children:"Hvor mange kroner koster det per måned?"}),e.jsx(l,{"data-size":t["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsx(r,{id:"affix-example1",type:"number","aria-labelledby":"affix-example1-label"}),e.jsx(a.Affix,{children:"pr. mnd."})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example2-label",htmlFor:"affix-example2",children:"Hvor mange kilo veier eplene du har valgt?"}),e.jsx(l,{"data-size":t["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(u,{id:"affix-example2",rows:2,"aria-labelledby":"affix-example2-label"}),e.jsx(a.Affix,{children:"KG"})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example3-label",htmlFor:"affix-example3",children:"Hvor mange kroner koster det?"}),e.jsx(l,{"data-size":t["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsxs(d,{id:"affix-example3","aria-labelledby":"affix-example3-label",children:[e.jsx(d.Option,{value:"-1",children:"Velg …"}),e.jsx(d.Option,{value:"10",children:"10"}),e.jsx(d.Option,{value:"20",children:"20"}),e.jsx(d.Option,{value:"30",children:"30"})]})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example4-label",htmlFor:"affix-example4",children:"No affix"}),e.jsx(l,{"data-size":t["data-size"],children:e.jsx(r,{id:"affix-example4","aria-labelledby":"affix-example4-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example5-label",htmlFor:"affix-example5",children:"No affix and small size"}),e.jsx(l,{"data-size":"sm",children:e.jsx(r,{id:"affix-example5","aria-labelledby":"affix-example5-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example6-label",htmlFor:"affix-example6",children:"No affix and large size"}),e.jsx(l,{"data-size":"lg",children:e.jsx(r,{id:"affix-example6","aria-labelledby":"affix-example6-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example7-label",htmlFor:"affix-example7",children:"Affix and small size"}),e.jsx(l,{"data-size":"sm",style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsx(r,{id:"affix-example7","aria-labelledby":"affix-example7-label"}),e.jsx(a.Affix,{children:"pr. mnd."})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"affix-example8-label",htmlFor:"affix-example8",children:"Affix and large size"}),e.jsx(l,{"data-size":"lg",style:{display:"inline-block",width:"max-content"},children:e.jsxs(a.Affixes,{children:[e.jsx(a.Affix,{children:"NOK"}),e.jsx(r,{id:"affix-example8","aria-labelledby":"affix-example8-label"}),e.jsx(a.Affix,{children:"pr. mnd."})]})})]})]}),args:{"data-size":"md","data-color":"neutral"},argTypes:{position:{control:!1}}};var n,o,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,p,b;x.parameters={...x.parameters,docs:{...(c=x.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(p=x.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,F;f.parameters={...f.parameters,docs:{...(h=f.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(g=f.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const z=["DefaultTextfield","WithCounter","AffixExamples"],E=Object.freeze(Object.defineProperty({__proto__:null,AffixExamples:f,DefaultTextfield:s,WithCounter:x,__namedExportsOrder:z,default:A},Symbol.toStringTag,{value:"Module"}));export{f as A,s as D,E as F,x as W};
