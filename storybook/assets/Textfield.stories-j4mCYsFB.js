import{r as Ie,j as i}from"./iframe-BuitaOvu.js";import{T as D}from"./index-DAm4oF7i.js";import{t as Ye,P as Ue,B as Je}from"./tooltip-CjsTJ2Sq.js";const{expect:t,within:l,userEvent:o,waitFor:s,fn:H}=__STORYBOOK_MODULE_TEST__,Ge={title:"Components/Textfield",component:D,tags:["autodocs"],parameters:{docs:{description:{component:"Textfield is a composed component for text input or textarea, including label, description, validation, affixes, and counter."}},layout:"padded"},argTypes:{label:{control:"text",description:"Label for the textfield (use this OR aria-label)",defaultValue:"Label"},disabled:{control:"boolean",description:"Disables the textfield",defaultValue:!1},readOnly:{control:"boolean",description:"Makes the textfield read-only",defaultValue:!1},multiline:{control:"boolean",description:"Renders a Textarea instead of Input",defaultValue:!1},description:{control:"text",description:"Description displayed below the label"},error:{control:"text",description:"Error message displayed below the input"},counter:{control:"number",description:"Enables character counter with optional limit"},prefix:{control:"text",description:"Prefix displayed before the input"},suffix:{control:"text",description:"Suffix displayed after the input"},"aria-label":{control:"text",if:{arg:"label",exists:!1}},"aria-labelledby":{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","datetime-local","month","week","time","color","file","hidden"],description:"Input type (ignored if multiline is true)",defaultValue:"text",if:{arg:"multiline",eq:!1}},size:{control:"number",description:"HTML size attribute (input width in characters)",if:{arg:"multiline",eq:!1}},rows:{control:"number",description:"HTML rows attribute (textarea height in lines)",if:{arg:"multiline",eq:!0}},value:{control:"text",table:{disable:!0}},defaultValue:{control:"text"},name:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},maxLength:{control:"number"},id:{control:"text"},"aria-invalid":{control:"boolean"},"aria-describedby":{control:"text"}}},f={args:{label:"Navn",name:"name-default",placeholder:"Skriv inn navnet ditt"}},y={args:{label:"Beskrivelse",name:"description-multiline",multiline:!0,rows:4,placeholder:"Skriv en lengre beskrivelse..."}},h={args:{label:"Hvor mange kroner koster det per måned?",name:"cost-affix",prefix:"NOK",suffix:"pr. mnd",type:"number"},name:"With Prefix/Suffix"},x={args:{label:"Melding (maks 100 tegn)",name:"message-counter",multiline:!0,rows:3,counter:100,maxLength:100},name:"With Character Counter"},T={args:{label:"E-post",name:"email-desc",description:"Vi sender en bekreftelse til denne adressen.",type:"email"}},k={args:{label:"Telefonnummer *",name:"phone-error",error:"Telefonnummer kan kun inneholde siffer.",required:!0,type:"tel","aria-invalid":!0},name:"With Error"},w={args:{label:"Deaktivert felt",name:"disabled-field",disabled:!0,defaultValue:"Kan ikke endres"}},C={args:{label:"Kun lesbart felt",name:"readonly-field",readOnly:!0,defaultValue:"Denne verdien er satt."}},B={render:r=>{const[n,a]=Ie.useState(""),{label:e,value:E,onChange:V,...K}=r;return i.jsxs(i.Fragment,{children:[i.jsx(D,{label:"Kontroller meg!",value:n,onChange:S=>a(S.target.value),...K}),i.jsx(Ye,{style:{margin:"var(--ds-size-4) 0 var(--ds-size-2) 0"}}),i.jsxs(Ue,{style:{margin:"0"},children:["Du har skrevet inn: ",n||"(ingenting)"]}),i.jsx(Je,{onClick:()=>a("Kake"),style:{marginTop:"var(--ds-size-2)"},children:"Jeg vil ha Kake"})]})},args:{name:"controlled-field",placeholder:"Skriv noe...","data-size":"md"}},c={name:"Test: Typing Updates Value",args:{label:"Fornavn",name:"test-typing",onChange:H()},play:async({canvasElement:r,args:n})=>{const a=l(r),e=await s(()=>a.getByLabelText("Fornavn"));await o.type(e,"Frodo Baggins"),t(e).toHaveValue("Frodo Baggins"),t(n.onChange).toHaveBeenCalledTimes(13);const E=a.getByText("Fornavn");await s(()=>{t(E).toHaveAttribute("for",e.id)})}},d={name:"Test: Controlled Value",render:r=>{const[n,a]=Ie.useState(""),{label:e,value:E,onChange:V,...K}=r;return i.jsxs(i.Fragment,{children:[i.jsx(D,{label:"Kontrollert felt",value:n,onChange:S=>{a(S.target.value),V==null||V(S)},...K}),i.jsxs(Ue,{"data-testid":"mirror",children:["Verdi: ",n||"(ingenting)"]}),i.jsx(Je,{onClick:()=>a("Kake"),children:"Sett til Kake"})]})},args:{name:"test-controlled",onChange:H()},play:async({canvasElement:r,args:n})=>{const a=l(r),e=await s(()=>a.getByLabelText("Kontrollert felt"));await o.type(e,"Bergen"),t(e).toHaveValue("Bergen"),t(a.getByTestId("mirror")).toHaveTextContent("Verdi: Bergen"),t(n.onChange).toHaveBeenCalled(),await o.click(a.getByRole("button",{name:"Sett til Kake"})),t(e).toHaveValue("Kake"),t(a.getByTestId("mirror")).toHaveTextContent("Verdi: Kake")}},u={name:"Test: Description Association",args:{label:"E-post",name:"test-description",description:"Vi sender en bekreftelse til denne adressen.",type:"email"},play:async({canvasElement:r})=>{const n=l(r),a=await s(()=>n.getByLabelText("E-post")),e=n.getByText("Vi sender en bekreftelse til denne adressen.");await s(()=>{t(e).toHaveAttribute("id"),t(a.getAttribute("aria-describedby")).toContain(e.id)})}},p={name:"Test: Error State",args:{label:"Telefonnummer",name:"test-error",type:"tel",required:!0,error:"Telefonnummer kan kun inneholde siffer."},play:async({canvasElement:r})=>{const n=l(r),a=await s(()=>n.getByLabelText(/Telefonnummer/));t(a).toHaveAttribute("aria-invalid","true"),t(a).toBeRequired();const e=n.getByText("Telefonnummer kan kun inneholde siffer.");t(e).toBeVisible(),await s(()=>{t(e).toHaveAttribute("id"),t(a.getAttribute("aria-describedby")).toContain(e.id)})}},m={name:"Test: Disabled State",args:{label:"Deaktivert felt",name:"test-disabled",disabled:!0,defaultValue:"Kan ikke endres",onChange:H()},play:async({canvasElement:r,args:n})=>{const a=l(r),e=await s(()=>a.getByLabelText("Deaktivert felt"));t(e).toBeDisabled(),t(e).toHaveValue("Kan ikke endres"),await o.type(e,"ny tekst"),t(e).toHaveValue("Kan ikke endres"),t(n.onChange).not.toHaveBeenCalled()}},g={name:"Test: ReadOnly State",args:{label:"Kun lesbart felt",name:"test-readonly",readOnly:!0,defaultValue:"Denne verdien er satt.",onChange:H()},play:async({canvasElement:r,args:n})=>{const a=l(r),e=await s(()=>a.getByLabelText("Kun lesbart felt"));t(e).toHaveAttribute("readonly"),await o.click(e),t(e).toHaveFocus(),await o.keyboard("ny tekst"),t(e).toHaveValue("Denne verdien er satt."),t(n.onChange).not.toHaveBeenCalled()}},b={name:"Test: Prefix And Suffix",args:{label:"Hvor mange kroner koster det per måned?",name:"test-affixes",prefix:"NOK",suffix:"pr. mnd",multiline:!1,type:"number"},play:async({canvasElement:r})=>{const n=l(r),a=await s(()=>n.getByLabelText("Hvor mange kroner koster det per måned?"));t(n.getByText("NOK")).toBeVisible(),t(n.getByText("pr. mnd")).toBeVisible(),await o.type(a,"150"),t(a).toHaveValue(150)}},v={name:"Test: Character Counter",args:{label:"Melding",name:"test-counter",multiline:!0,rows:3,counter:40},play:async({canvasElement:r})=>{const n=l(r),a=await s(()=>n.getByLabelText("Melding")),e=r.querySelector('[data-field="counter"]');t(e).not.toBeNull(),await s(()=>{t(e).toHaveAttribute("data-label","40 tegn igjen")}),await o.type(a,"Røde Kors"),await s(()=>{t(e).toHaveAttribute("data-label","31 tegn igjen")}),await o.type(a," hjelper mennesker i nød i hele Norge idag"),await s(()=>{t(e).toHaveAttribute("data-label","11 tegn for mye"),t(e).toHaveAttribute("data-state","over")})}};var A,F,L;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Navn',
    name: 'name-default',
    placeholder: 'Skriv inn navnet ditt'
  }
}`,...(L=(F=f.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,R,M;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Beskrivelse',
    name: 'description-multiline',
    multiline: true,
    rows: 4,
    placeholder: 'Skriv en lengre beskrivelse...'
  }
}`,...(M=(R=y.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var _,j,W;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'cost-affix',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    type: 'number'
  },
  name: 'With Prefix/Suffix'
}`,...(W=(j=h.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var z,N,q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Melding (maks 100 tegn)',
    name: 'message-counter',
    multiline: true,
    rows: 3,
    counter: 100,
    maxLength: 100
  },
  name: 'With Character Counter'
}`,...(q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var P,I,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'E-post',
    name: 'email-desc',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email'
  }
}`,...(U=(I=T.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var J,Y,G;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Telefonnummer *',
    name: 'phone-error',
    error: 'Telefonnummer kan kun inneholde siffer.',
    required: true,
    type: 'tel',
    'aria-invalid': true
  },
  name: 'With Error'
}`,...(G=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,X,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Deaktivert felt',
    name: 'disabled-field',
    disabled: true,
    defaultValue: 'Kan ikke endres'
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Kun lesbart felt',
    name: 'readonly-field',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.'
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>('');
    // Destructure relevant props from args instead of spreading all
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      label: _label,
      value: _value,
      onChange: _onChange,
      ...rest
    } = args;
    return <>
        <Textfield label="Kontroller meg!" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)} {...rest as Record<string, unknown>} />
        <Divider style={{
        margin: 'var(--ds-size-4) 0 var(--ds-size-2) 0'
      }} />
        <Paragraph style={{
        margin: '0'
      }}>
          Du har skrevet inn: {value || '(ingenting)'}
        </Paragraph>
        <Button onClick={() => setValue('Kake')} style={{
        marginTop: 'var(--ds-size-2)'
      }}>
          Jeg vil ha Kake
        </Button>
      </>;
  },
  args: {
    name: 'controlled-field',
    placeholder: 'Skriv noe...',
    // label, value, onChange are handled in render
    // Set other defaults for controllable props if desired
    'data-size': 'md'
  }
}`,...(re=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,oe,le,ce;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Test: Typing Updates Value',
  args: {
    label: 'Fornavn',
    name: 'test-typing',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Label association is wired up by the ds-field custom element
    const input = await waitFor(() => canvas.getByLabelText('Fornavn'));
    await userEvent.type(input, 'Frodo Baggins');
    expect(input).toHaveValue('Frodo Baggins');
    expect(args.onChange).toHaveBeenCalledTimes('Frodo Baggins'.length);

    // Clicking the label focuses the input (native for/id association)
    const label = canvas.getByText('Fornavn');
    await waitFor(() => {
      expect(label).toHaveAttribute('for', input.id);
    });
  }
}`,...(oe=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:`Tests uncontrolled typing: the value updates per keystroke and onChange
fires once per character. Also verifies the label is programmatically
associated with the input (the underlying ds-field element wires
label/input asynchronously, hence the waitFor).`,...(ce=(le=c.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var de,ue,pe,me,ge;d.parameters={...d.parameters,docs:{...(de=d.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Test: Controlled Value',
  render: args => {
    const [value, setValue] = useState<string>('');
    // Destructure to avoid label/value/onChange arg conflicts (see Controlled)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      label: _label,
      value: _value,
      onChange,
      ...rest
    } = args;
    return <>
        <Textfield label="Kontrollert felt" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
        (onChange as ((event: unknown) => void) | undefined)?.(e);
      }} {...rest as Record<string, unknown>} />
        <Paragraph data-testid="mirror">Verdi: {value || '(ingenting)'}</Paragraph>
        <Button onClick={() => setValue('Kake')}>Sett til Kake</Button>
      </>;
  },
  args: {
    name: 'test-controlled',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Kontrollert felt'));

    // Typing round-trips through React state back into the input
    await userEvent.type(input, 'Bergen');
    expect(input).toHaveValue('Bergen');
    expect(canvas.getByTestId('mirror')).toHaveTextContent('Verdi: Bergen');
    expect(args.onChange).toHaveBeenCalled();

    // External state updates are reflected in the controlled input
    await userEvent.click(canvas.getByRole('button', {
      name: 'Sett til Kake'
    }));
    expect(input).toHaveValue('Kake');
    expect(canvas.getByTestId('mirror')).toHaveTextContent('Verdi: Kake');
  }
}`,...(pe=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:`Tests controlled mode: the input mirrors external state and external
updates (button click) are reflected in the input.`,...(ge=(me=d.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var be,ve,fe,ye,he;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Test: Description Association',
  args: {
    label: 'E-post',
    name: 'test-description',
    description: 'Vi sender en bekreftelse til denne adressen.',
    type: 'email'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('E-post'));
    const description = canvas.getByText('Vi sender en bekreftelse til denne adressen.');

    // ds-field assigns ids and wires aria-describedby asynchronously
    await waitFor(() => {
      expect(description).toHaveAttribute('id');
      expect(input.getAttribute('aria-describedby')).toContain(description.id);
    });
  }
}`,...(fe=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Tests that the description is linked to the input via aria-describedby.",...(he=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:he.description}}};var xe,Te,ke,we,Ce;p.parameters={...p.parameters,docs:{...(xe=p.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Test: Error State',
  args: {
    label: 'Telefonnummer',
    name: 'test-error',
    type: 'tel',
    required: true,
    error: 'Telefonnummer kan kun inneholde siffer.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText(/Telefonnummer/));
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toBeRequired();
    const errorMessage = canvas.getByText('Telefonnummer kan kun inneholde siffer.');
    expect(errorMessage).toBeVisible();

    // Error message is announced for the field via aria-describedby
    await waitFor(() => {
      expect(errorMessage).toHaveAttribute('id');
      expect(input.getAttribute('aria-describedby')).toContain(errorMessage.id);
    });
  }
}`,...(ke=(Te=p.parameters)==null?void 0:Te.docs)==null?void 0:ke.source},description:{story:`Tests the error state: aria-invalid is set, the error message renders,
and the message is linked to the input via aria-describedby.`,...(Ce=(we=p.parameters)==null?void 0:we.docs)==null?void 0:Ce.description}}};var Be,Ve,Se,He,Ee;m.parameters={...m.parameters,docs:{...(Be=m.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Test: Disabled State',
  args: {
    label: 'Deaktivert felt',
    name: 'test-disabled',
    disabled: true,
    defaultValue: 'Kan ikke endres',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Deaktivert felt'));
    expect(input).toBeDisabled();
    expect(input).toHaveValue('Kan ikke endres');

    // Typing into a disabled input must be a no-op
    await userEvent.type(input, 'ny tekst');
    expect(input).toHaveValue('Kan ikke endres');
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...(Se=(Ve=m.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source},description:{story:"Tests that a disabled field cannot be edited and fires no change events.",...(Ee=(He=m.parameters)==null?void 0:He.docs)==null?void 0:Ee.description}}};var Ke,De,Ae,Fe,Le;g.parameters={...g.parameters,docs:{...(Ke=g.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Test: ReadOnly State',
  args: {
    label: 'Kun lesbart felt',
    name: 'test-readonly',
    readOnly: true,
    defaultValue: 'Denne verdien er satt.',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Kun lesbart felt'));
    expect(input).toHaveAttribute('readonly');

    // Readonly fields remain focusable for screen reader users
    await userEvent.click(input);
    expect(input).toHaveFocus();

    // ...but typing must not modify the value
    await userEvent.keyboard('ny tekst');
    expect(input).toHaveValue('Denne verdien er satt.');
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...(Ae=(De=g.parameters)==null?void 0:De.docs)==null?void 0:Ae.source},description:{story:`Tests that a readonly field keeps its value, cannot be edited,
but is still focusable (unlike disabled).`,...(Le=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:Le.description}}};var Oe,Re,Me,_e,je;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Test: Prefix And Suffix',
  args: {
    label: 'Hvor mange kroner koster det per måned?',
    name: 'test-affixes',
    prefix: 'NOK',
    suffix: 'pr. mnd',
    // multiline must be set explicitly: the 'type' argType is conditional on
    // it, and Storybook drops args whose condition is not met
    multiline: false,
    type: 'number'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await waitFor(() => canvas.getByLabelText('Hvor mange kroner koster det per måned?'));
    expect(canvas.getByText('NOK')).toBeVisible();
    expect(canvas.getByText('pr. mnd')).toBeVisible();
    await userEvent.type(input, '150');
    expect(input).toHaveValue(150);
  }
}`,...(Me=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:Me.source},description:{story:`Tests prefix/suffix affixes: both render visibly and the input itself
stays fully editable.`,...(je=(_e=b.parameters)==null?void 0:_e.docs)==null?void 0:je.description}}};var We,ze,Ne,qe,Pe;v.parameters={...v.parameters,docs:{...(We=v.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Test: Character Counter',
  args: {
    label: 'Melding',
    name: 'test-counter',
    multiline: true,
    rows: 3,
    counter: 40
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = await waitFor(() => canvas.getByLabelText('Melding'));

    // The ds-field element renders the counter text via the data-label
    // attribute (displayed with CSS), so we assert on that attribute
    const counter = canvasElement.querySelector('[data-field="counter"]');
    expect(counter).not.toBeNull();

    // Initial counter shows the full limit
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '40 tegn igjen');
    });

    // Counter counts down as the user types ("Røde Kors" = 9 characters)
    await userEvent.type(textarea, 'Røde Kors');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '31 tegn igjen');
    });

    // Negative case: exceeding the limit flips the counter to "for mye"
    // (no maxLength is set, so typing past the limit is possible)
    await userEvent.type(textarea, ' hjelper mennesker i nød i hele Norge idag');
    await waitFor(() => {
      expect(counter).toHaveAttribute('data-label', '11 tegn for mye');
      expect(counter).toHaveAttribute('data-state', 'over');
    });
  }
}`,...(Ne=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source},description:{story:`Tests the character counter: it counts down while typing and switches to
an "over the limit" message when the text is too long (negative case).`,...(Pe=(qe=v.parameters)==null?void 0:qe.docs)==null?void 0:Pe.description}}};const Qe=["Default","Multiline","WithAffixes","WithCounter","WithDescription","WithError","Disabled","ReadOnly","Controlled","TestTypingUpdatesValue","TestControlledValue","TestDescriptionAssociation","TestErrorState","TestDisabledState","TestReadOnlyState","TestAffixes","TestCharacterCounter"],et=Object.freeze(Object.defineProperty({__proto__:null,Controlled:B,Default:f,Disabled:w,Multiline:y,ReadOnly:C,TestAffixes:b,TestCharacterCounter:v,TestControlledValue:d,TestDescriptionAssociation:u,TestDisabledState:m,TestErrorState:p,TestReadOnlyState:g,TestTypingUpdatesValue:c,WithAffixes:h,WithCounter:x,WithDescription:T,WithError:k,__namedExportsOrder:Qe,default:Ge},Symbol.toStringTag,{value:"Module"}));export{B as C,w as D,y as M,C as R,et as T,h as W,x as a,T as b,k as c};
