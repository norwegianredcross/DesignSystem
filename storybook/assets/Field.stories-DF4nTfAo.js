import{j as e}from"./iframe-D1TSNH-h.js";import{F as l,a as W,b as R}from"./index-DKljbtG_.js";import{i as n,F as t,b as d,j as h,k as p,V as I,I as G}from"./tooltip-nkyDKwLW.js";const{expect:i,within:q,userEvent:g,waitFor:o}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Field",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Field is used to structure form elements with labels, descriptions, errors, prefixes, suffixes, and counters."}}},argTypes:{position:{control:"select",options:["start","end"],description:"Position of toggle inputs (radio, checkbox, switch)",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Field content, typically Label, Textfield, FieldDescription, etc."}}},m={name:"Example Basic",render:a=>e.jsxs(l,{...a,children:[e.jsx(n,{id:"textfield-default-label",htmlFor:"textfield-default",children:"Label"}),e.jsx(W,{children:"Short description for the field"}),e.jsx(d,{id:"textfield-default",placeholder:"Enter text...","aria-labelledby":"textfield-default-label"}),e.jsx(I,{children:"Error message"})]}),args:{"data-size":"md","data-color":"neutral"}},b={name:"Example with Counter",render:a=>e.jsxs(l,{...a,children:[e.jsx(n,{id:"textarea-counter-label",htmlFor:"textarea-counter",children:"Legg til en beskrivelse"}),e.jsx(h,{id:"textarea-counter",maxLength:50,rows:3,"aria-labelledby":"textarea-counter-label"}),e.jsx(R,{limit:50})]}),args:{"data-size":"md"}},u={name:"Example Affixes",render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},"data-color":a["data-color"],children:[e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example1-label",htmlFor:"affix-example1",children:"Hvor mange kroner koster det per måned?"}),e.jsx(l,{"data-size":a["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(t.Affixes,{children:[e.jsx(t.Affix,{children:"NOK"}),e.jsx(d,{id:"affix-example1",type:"number","aria-labelledby":"affix-example1-label"}),e.jsx(t.Affix,{children:"pr. mnd."})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example2-label",htmlFor:"affix-example2",children:"Hvor mange kilo veier eplene du har valgt?"}),e.jsx(l,{"data-size":a["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(t.Affixes,{children:[e.jsx(h,{id:"affix-example2",rows:2,"aria-labelledby":"affix-example2-label"}),e.jsx(t.Affix,{children:"KG"})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example3-label",htmlFor:"affix-example3",children:"Hvor mange kroner koster det?"}),e.jsx(l,{"data-size":a["data-size"],style:{display:"inline-block",width:"max-content"},children:e.jsxs(t.Affixes,{children:[e.jsx(t.Affix,{children:"NOK"}),e.jsxs(p,{id:"affix-example3","aria-labelledby":"affix-example3-label",children:[e.jsx(p.Option,{value:"-1",children:"Velg …"}),e.jsx(p.Option,{value:"10",children:"10"}),e.jsx(p.Option,{value:"20",children:"20"}),e.jsx(p.Option,{value:"30",children:"30"})]})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example4-label",htmlFor:"affix-example4",children:"No affix"}),e.jsx(l,{"data-size":a["data-size"],children:e.jsx(d,{id:"affix-example4","aria-labelledby":"affix-example4-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example5-label",htmlFor:"affix-example5",children:"No affix and small size"}),e.jsx(l,{"data-size":"sm",children:e.jsx(d,{id:"affix-example5","aria-labelledby":"affix-example5-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example6-label",htmlFor:"affix-example6",children:"No affix and large size"}),e.jsx(l,{"data-size":"lg",children:e.jsx(d,{id:"affix-example6","aria-labelledby":"affix-example6-label"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example7-label",htmlFor:"affix-example7",children:"Affix and small size"}),e.jsx(l,{"data-size":"sm",style:{display:"inline-block",width:"max-content"},children:e.jsxs(t.Affixes,{children:[e.jsx(t.Affix,{children:"NOK"}),e.jsx(d,{id:"affix-example7","aria-labelledby":"affix-example7-label"}),e.jsx(t.Affix,{children:"pr. mnd."})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"affix-example8-label",htmlFor:"affix-example8",children:"Affix and large size"}),e.jsx(l,{"data-size":"lg",style:{display:"inline-block",width:"max-content"},children:e.jsxs(t.Affixes,{children:[e.jsx(t.Affix,{children:"NOK"}),e.jsx(d,{id:"affix-example8","aria-labelledby":"affix-example8-label"}),e.jsx(t.Affix,{children:"pr. mnd."})]})})]})]}),args:{"data-size":"md","data-color":"neutral"},argTypes:{position:{control:!1}}},f={name:"Test: Label, Description And Validation Wiring",render:a=>e.jsxs(l,{...a,children:[e.jsx(n,{children:"Fullt navn"}),e.jsx(W,{children:"Skriv både fornavn og etternavn"}),e.jsx(G,{}),e.jsx(I,{children:"Du må fylle ut navn"})]}),args:{"data-size":"md"},play:async({canvasElement:a})=>{const x=q(a),r=await o(()=>x.getByLabelText("Fullt navn")),s=x.getByText("Fullt navn");i(r).toHaveAttribute("id"),i(s).toHaveAttribute("for",r.id);const F=x.getByText("Skriv både fornavn og etternavn"),v=x.getByText("Du må fylle ut navn");await o(()=>{i(F).toHaveAttribute("id"),i(v).toHaveAttribute("id");const y=r.getAttribute("aria-describedby")??"";i(y).toContain(F.id),i(y).toContain(v.id)}),await o(()=>{i(r).toHaveAttribute("aria-invalid","true")}),await g.click(s),i(r).toHaveFocus(),await g.type(r,"Frodo Baggins"),i(r).toHaveValue("Frodo Baggins")}},c={name:"Test: Counter Counts Down While Typing",render:a=>e.jsxs(l,{...a,children:[e.jsx(n,{children:"Kort melding"}),e.jsx(h,{rows:3}),e.jsx(R,{limit:25})]}),args:{"data-size":"md"},play:async({canvasElement:a})=>{const x=q(a),r=await o(()=>x.getByLabelText("Kort melding")),s=a.querySelector('[data-field="counter"]');i(s).not.toBeNull(),await o(()=>{i(s).toHaveAttribute("data-label","25 tegn igjen"),i(s).toHaveAttribute("data-state","under")}),await g.type(r,"Røde Kors"),await o(()=>{i(s).toHaveAttribute("data-label","16 tegn igjen")}),await g.type(r," i hele Norge, hver eneste dag"),await o(()=>{i(s).toHaveAttribute("data-label","14 tegn for mye"),i(s).toHaveAttribute("data-state","over")})}};var D,j,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var w,T,z;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(T=b.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var L,k,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var H,C,O,E,B;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Test: Label, Description And Validation Wiring',
  render: args => <Field {...args}>
      <Label>Fullt navn</Label>
      <FieldDescription>Skriv både fornavn og etternavn</FieldDescription>
      <Input />
      <ValidationMessage>Du må fylle ut navn</ValidationMessage>
    </Field>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // ds-field wires the (id-less) label to the input asynchronously
    const input = await waitFor(() => canvas.getByLabelText('Fullt navn'));
    const label = canvas.getByText('Fullt navn');
    expect(input).toHaveAttribute('id');
    expect(label).toHaveAttribute('for', input.id);

    // Description and validation message are both announced via aria-describedby
    const description = canvas.getByText('Skriv både fornavn og etternavn');
    const validation = canvas.getByText('Du må fylle ut navn');
    await waitFor(() => {
      expect(description).toHaveAttribute('id');
      expect(validation).toHaveAttribute('id');
      const describedBy = input.getAttribute('aria-describedby') ?? '';
      expect(describedBy).toContain(description.id);
      expect(describedBy).toContain(validation.id);
    });

    // The presence of a ValidationMessage marks the input as invalid
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    // Native label/id association: clicking the label focuses the input
    await userEvent.click(label);
    expect(input).toHaveFocus();

    // The field remains editable
    await userEvent.type(input, 'Frodo Baggins');
    expect(input).toHaveValue('Frodo Baggins');
  }
}`,...(O=(C=f.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:`Tests the core composition wiring of Field: without any explicit ids,
the underlying ds-field element associates the Label (for/id), the
FieldDescription and the ValidationMessage (aria-describedby) with the
input, and sets aria-invalid when a validation message is present.`,...(B=(E=f.parameters)==null?void 0:E.docs)==null?void 0:B.description}}};var N,K,V,_,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Test: Counter Counts Down While Typing',
  render: args => <Field {...args}>
      <Label>Kort melding</Label>
      <Textarea rows={3} />
      <FieldCounter limit={25} />
    </Field>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = await waitFor(() => canvas.getByLabelText('Kort melding'));

    // The ds-field element renders the counter text via the data-label
    // attribute (displayed with CSS), so we assert on that attribute
    const counter = canvasElement.querySelector('[data-field="counter"]');
    expect(counter).not.toBeNull();

    // Initial state announces the full limit
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '25 tegn igjen');
      expect(counter).toHaveAttribute('data-state', 'under');
    });

    // Counter counts down as the user types ("Røde Kors" = 9 characters)
    await userEvent.type(textarea, 'Røde Kors');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '16 tegn igjen');
    });

    // Negative case: exceeding the limit switches to the "for mye" message
    await userEvent.type(textarea, ' i hele Norge, hver eneste dag');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '14 tegn for mye');
      expect(counter).toHaveAttribute('data-state', 'over');
    });
  }
}`,...(V=(K=c.parameters)==null?void 0:K.docs)==null?void 0:V.source},description:{story:`Tests that FieldCounter counts down as the user types, and flips to an
"over the limit" message when the text gets too long (negative case —
no maxLength is set, so overtyping is possible).`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};const U=["DefaultTextfield","WithCounter","AffixExamples","TestCompositionWiring","TestCounterCountsDown"],X=Object.freeze(Object.defineProperty({__proto__:null,AffixExamples:u,DefaultTextfield:m,TestCompositionWiring:f,TestCounterCountsDown:c,WithCounter:b,__namedExportsOrder:U,default:P},Symbol.toStringTag,{value:"Module"}));export{u as A,m as D,X as F,b as W};
