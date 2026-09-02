import{r as j,j as r}from"./iframe-BLTMx4DD.js";import{D as H}from"./index-D7Nnt46f.js";import{S as R}from"./Calendar-Y4Zz3tzk.js";const{expect:s,within:l,userEvent:o,fn:k,waitFor:d}=__STORYBOOK_MODULE_TEST__,lt={title:"Components/DateInput",component:H,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Fargepalett"},suffixIcon:{control:!1}}},w={args:{label:"Dato",id:"default-date"}},B={args:{label:"Fødselsdato",id:"desc-date",description:"Vennligst oppgi fødselsdatoen din."}},V={args:{label:"Frist",id:"error-date",description:"Datoen må være i fremtiden.",error:"Datoen du har valgt er ugyldig.",defaultValue:"10.10.2000"}},S={args:{label:"Velg dato",id:"suffix-date",suffixIcon:r.jsx(R,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},E={args:{label:"Startdato",id:"disabled-date",disabled:!0,defaultValue:"24.12.2024",suffixIcon:r.jsx(R,{"aria-hidden":!0})}},I={args:{label:"Stor dato i rust",id:"custom-date","data-size":"lg","data-color":"secondary-color-rust",defaultValue:"01.01.2025",suffixIcon:r.jsx(R,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},D={render:t=>{const[n,a]=j.useState("12.05.2023");return r.jsxs("div",{children:[r.jsx(H,{...t,value:n,onChange:(e,i)=>a(i)}),r.jsx("button",{onClick:()=>a("01.01.2030"),style:{marginTop:"10px"},children:"Sett til 2030"}),r.jsx("button",{onClick:()=>a(""),style:{marginLeft:"10px"},children:"Tøm"}),r.jsxs("p",{children:["Gjeldende verdi: ",n]})]})},args:{label:"Kontrollert Dato",id:"controlled-date"}},u={name:"Test: Auto Formatting",args:{label:"Test dato",id:"test-format"},play:async({canvasElement:t})=>{const a=l(t).getByRole("textbox");await o.clear(a),await o.type(a,"15062025"),await d(()=>{s(a).toHaveValue("15.06.2025")})}},p={name:"Test: Preserves Input, Reports Validity",args:{label:"Test bevaring",id:"test-preserve",onValidationChange:k()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("textbox");await o.clear(e),await o.type(e,"45"),s(e).toHaveValue("45"),await o.clear(e),await o.type(e,"1599"),s(e).toHaveValue("15.99"),await o.tab(),await d(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!1,"15.99")})}},g={name:"Test: Calendar Validation",args:{label:"Test kalender",id:"test-calendar",onValidationChange:k()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("textbox");await o.clear(e),await o.type(e,"31022024"),s(e).toHaveValue("31.02.2024"),await d(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!1,"31.02.2024")}),await o.clear(e),await o.type(e,"29022024"),await d(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!0,"29.02.2024")}),await o.clear(e),await o.type(e,"29022023"),await d(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!1,"29.02.2023")})}},m={name:"Test: Event Target Integrity",args:{label:"Test hendelse",id:"test-event-target",name:"fodselsdato",onChange:k()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("textbox");await o.clear(e),await o.type(e,"01"),await d(()=>{s(n.onChange).toHaveBeenCalled()});const i=n.onChange,[c,it]=i.mock.lastCall;s(it).toBe("01"),s(c.target).toBeInstanceOf(HTMLInputElement),s(c.target.name).toBe("fodselsdato"),s(c.target.id).toBe("test-event-target"),s(c.target.value).toBe("01")}},v={name:"Test: External aria-labelledby",render:t=>r.jsxs("div",{children:[r.jsx("h3",{id:"ekstern-overskrift",children:"Når reiser du?"}),r.jsx(H,{...t})]}),args:{"aria-labelledby":"ekstern-overskrift",id:"test-external-label"},play:async({canvasElement:t})=>{const a=l(t).getByRole("textbox",{name:"Når reiser du?"});s(a).toHaveAttribute("aria-labelledby","ekstern-overskrift");const e=t.querySelector("#ekstern-overskrift");s(e==null?void 0:e.tagName).toBe("H3")}},y={name:"Test: Auto-generated Ids",args:{label:"Uten id",description:"Ingen id-prop er satt."},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox",{name:"Uten id"});s(a.id).toBeTruthy(),s(a.id).not.toContain("undefined");const e=t.querySelector("label");s(e).toHaveAttribute("for",a.id);const i=a.getAttribute("aria-describedby")??"";s(i).not.toContain("undefined"),s(n.getByText("Ingen id-prop er satt.").id).toBe(i)}},f={name:"Test: onChange Callback",render:t=>{const[n,a]=j.useState("");return r.jsxs("div",{children:[r.jsx(H,{...t,onChange:(e,i)=>{var c;a(i),(c=t.onChange)==null||c.call(t,e,i)}}),r.jsxs("p",{"data-testid":"last-value",children:["Siste verdi: ",n]})]})},args:{label:"Test callback",id:"test-callback",onChange:k()},play:async({canvasElement:t,args:n})=>{const a=l(t),e=a.getByRole("textbox");await o.clear(e),await o.type(e,"01012025"),s(n.onChange).toHaveBeenCalled(),await d(()=>{const i=a.getByTestId("last-value");s(i).toHaveTextContent("01.01.2025")})}},b={name:"Test: Error State",args:{label:"Test feil",id:"test-error",error:"Ugyldig dato",defaultValue:"99.99.9999"},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox");s(a).toHaveAttribute("aria-invalid","true");const e=n.getByRole("alert");s(e).toHaveTextContent("Ugyldig dato")}},x={name:"Test: Disabled State",args:{label:"Test deaktivert",id:"test-disabled",disabled:!0,defaultValue:"24.12.2024",suffixIcon:r.jsx(R,{"aria-hidden":!0}),onSuffixClick:k()},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox");s(a).toBeDisabled(),s(a).toHaveValue("24.12.2024");const e=n.getByRole("button");s(e).toBeDisabled()}},h={name:"Test: Suffix Button Click",args:{label:"Test knapp",id:"test-suffix",suffixIcon:r.jsx(R,{"aria-hidden":!0}),onSuffixClick:k()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("button");await o.click(e),s(n.onSuffixClick).toHaveBeenCalled()}},C={name:"Test: Controlled Mode",render:t=>{const[n,a]=j.useState("01.01.2020");return r.jsxs("div",{children:[r.jsx(H,{...t,value:n,onChange:(e,i)=>a(i)}),r.jsx("button",{"data-testid":"set-date-btn",onClick:()=>a("25.12.2025"),style:{marginTop:"10px"},children:"Sett til jul 2025"})]})},args:{label:"Kontrollert test",id:"test-controlled"},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox");s(a).toHaveValue("01.01.2020");const e=n.getByTestId("set-date-btn");await o.click(e),s(a).toHaveValue("25.12.2025")}},T={name:"Test: Rich Label Is Associated",args:{label:r.jsxs("span",{children:["Dato ",r.jsx("em",{children:"(valgfritt)"})]})},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox",{name:"Dato (valgfritt)"});s(a).toHaveAccessibleName("Dato (valgfritt)"),await o.click(n.getByText("(valgfritt)")),s(t.ownerDocument.activeElement).toBe(a)}};var A,L,F;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    id: 'default-date'
  }
}`,...(F=(L=w.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var _,W,O;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.'
  }
}`,...(O=(W=B.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var M,N,K;V.parameters={...V.parameters,docs:{...(M=V.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000'
  }
}`,...(K=(N=V.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var U,z,P;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(P=(z=S.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var q,G,Y;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />
  }
}`,...(Y=(G=E.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var J,Q,X;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Stor dato i rust',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'secondary-color-rust',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('12.05.2023');
    return <div>
        <DateInput {...args} value={value} onChange={(_e, formattedValue) => setValue(formattedValue)} />
        <button onClick={() => setValue('01.01.2030')} style={{
        marginTop: '10px'
      }}>
          Sett til 2030
        </button>
        <button onClick={() => setValue('')} style={{
        marginLeft: '10px'
      }}>
          Tøm
        </button>
        <p>Gjeldende verdi: {value}</p>
      </div>;
  },
  args: {
    label: 'Kontrollert Dato',
    id: 'controlled-date'
  }
}`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne,se,re;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Test: Auto Formatting',
  args: {
    label: 'Test dato',
    id: 'test-format'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '15062025');
    await waitFor(() => {
      expect(input).toHaveValue('15.06.2025');
    });
  }
}`,...(ne=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Tests that input is automatically formatted with dots (dd.mm.yyyy).",...(re=(se=u.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var oe,ie,le,ce,de;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Test: Preserves Input, Reports Validity',
  args: {
    label: 'Test bevaring',
    id: 'test-preserve',
    onValidationChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Day 45 is kept, not rewritten to 31
    await userEvent.clear(input);
    await userEvent.type(input, '45');
    expect(input).toHaveValue('45');

    // Month 99 is kept, not rewritten to 12
    await userEvent.clear(input);
    await userEvent.type(input, '1599');
    expect(input).toHaveValue('15.99');

    // Incomplete date on blur reports invalid
    await userEvent.tab();
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '15.99');
    });
  }
}`,...(le=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:`Typed input is preserved as-is (no silent clamping); validity is reported
through onValidationChange instead.`,...(de=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,pe,ge,me,ve;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Test: Calendar Validation',
  args: {
    label: 'Test kalender',
    id: 'test-calendar',
    onValidationChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '31022024');
    expect(input).toHaveValue('31.02.2024');
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '31.02.2024');
    });
    await userEvent.clear(input);
    await userEvent.type(input, '29022024');
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(true, '29.02.2024');
    });
    await userEvent.clear(input);
    await userEvent.type(input, '29022023');
    await waitFor(() => {
      expect(args.onValidationChange).toHaveBeenLastCalledWith(false, '29.02.2023');
    });
  }
}`,...(ge=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:`Complete dates are validated against the real calendar: impossible dates
(31.02) and non-leap-year 29.02 are invalid; leap-day 29.02.2024 is valid.`,...(ve=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ve.description}}};var ye,fe,be,xe,he;m.parameters={...m.parameters,docs:{...(ye=m.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Test: Event Target Integrity',
  args: {
    label: 'Test hendelse',
    id: 'test-event-target',
    name: 'fodselsdato',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '01');
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalled();
    });
    const mock = args.onChange as ReturnType<typeof fn>;
    const [event, formatted] = mock.mock.lastCall!;
    expect(formatted).toBe('01');
    expect(event.target).toBeInstanceOf(HTMLInputElement);
    expect(event.target.name).toBe('fodselsdato');
    expect(event.target.id).toBe('test-event-target');
    expect(event.target.value).toBe('01');
  }
}`,...(be=(fe=m.parameters)==null?void 0:fe.docs)==null?void 0:be.source},description:{story:`The event passed to onChange keeps the real input element as target, so
standard form patterns (e.target.name, .id, .focus()) work.`,...(he=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:he.description}}};var Ce,Te,ke,we,Be;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Test: External aria-labelledby',
  render: args => <div>
      <h3 id="ekstern-overskrift">Når reiser du?</h3>
      <DateInput {...args} />
    </div>,
  args: {
    'aria-labelledby': 'ekstern-overskrift',
    id: 'test-external-label'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Når reiser du?'
    });
    expect(input).toHaveAttribute('aria-labelledby', 'ekstern-overskrift');
    const heading = canvasElement.querySelector('#ekstern-overskrift');
    expect(heading?.tagName).toBe('H3');
  }
}`,...(ke=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:ke.source},description:{story:`External aria-labelledby is honored: the input gets its accessible name
from the referenced element, and that element keeps its own id.`,...(Be=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Be.description}}};var Ve,Se,Ee,Ie,De;y.parameters={...y.parameters,docs:{...(Ve=y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Test: Auto-generated Ids',
  args: {
    label: 'Uten id',
    description: 'Ingen id-prop er satt.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Uten id'
    });
    expect(input.id).toBeTruthy();
    expect(input.id).not.toContain('undefined');
    const label = canvasElement.querySelector('label');
    expect(label).toHaveAttribute('for', input.id);
    const describedBy = input.getAttribute('aria-describedby') ?? '';
    expect(describedBy).not.toContain('undefined');
    expect(canvas.getByText('Ingen id-prop er satt.').id).toBe(describedBy);
  }
}`,...(Ee=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:`Without an id prop the component generates stable ids — never the literal
"undefined-label"/"undefined-desc" — and label/description stay linked.`,...(De=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:De.description}}};var He,Re,je,Ae,Le;f.parameters={...f.parameters,docs:{...(He=f.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Test: onChange Callback',
  render: args => {
    const [lastValue, setLastValue] = useState<string>('');
    return <div>
        <DateInput {...args} onChange={(e, formattedValue) => {
        setLastValue(formattedValue);
        args.onChange?.(e, formattedValue);
      }} />
        <p data-testid="last-value">Siste verdi: {lastValue}</p>
      </div>;
  },
  args: {
    label: 'Test callback',
    id: 'test-callback',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '01012025');

    // Verify onChange was called
    expect(args.onChange).toHaveBeenCalled();

    // Verify the displayed value shows the formatted date
    await waitFor(() => {
      const lastValueDisplay = canvas.getByTestId('last-value');
      expect(lastValueDisplay).toHaveTextContent('01.01.2025');
    });
  }
}`,...(je=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:je.source},description:{story:"Tests that onChange is called with the formatted value.",...(Le=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:Le.description}}};var Fe,_e,We,Oe,Me;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Test: Error State',
  args: {
    label: 'Test feil',
    id: 'test-error',
    error: 'Ugyldig dato',
    defaultValue: '99.99.9999'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify aria-invalid is set
    expect(input).toHaveAttribute('aria-invalid', 'true');

    // Verify error message is displayed
    const errorMessage = canvas.getByRole('alert');
    expect(errorMessage).toHaveTextContent('Ugyldig dato');
  }
}`,...(We=(_e=b.parameters)==null?void 0:_e.docs)==null?void 0:We.source},description:{story:"Tests that error state is properly displayed and aria-invalid is set.",...(Me=(Oe=b.parameters)==null?void 0:Oe.docs)==null?void 0:Me.description}}};var Ne,Ke,Ue,ze,Pe;x.parameters={...x.parameters,docs:{...(Ne=x.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Test: Disabled State',
  args: {
    label: 'Test deaktivert',
    id: 'test-disabled',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify input is disabled
    expect(input).toBeDisabled();

    // Verify value is preserved
    expect(input).toHaveValue('24.12.2024');

    // Try to find and click the suffix button - it should be disabled
    const suffixButton = canvas.getByRole('button');
    expect(suffixButton).toBeDisabled();
  }
}`,...(Ue=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source},description:{story:"Tests that disabled state prevents interaction.",...(Pe=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:Pe.description}}};var qe,Ge,Ye,Je,Qe;h.parameters={...h.parameters,docs:{...(qe=h.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Test: Suffix Button Click',
  args: {
    label: 'Test knapp',
    id: 'test-suffix',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const suffixButton = canvas.getByRole('button');
    await userEvent.click(suffixButton);

    // Verify the callback was called
    expect(args.onSuffixClick).toHaveBeenCalled();
  }
}`,...(Ye=(Ge=h.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source},description:{story:"Tests suffix button click functionality.",...(Qe=(Je=h.parameters)==null?void 0:Je.docs)==null?void 0:Qe.description}}};var Xe,Ze,$e,et,tt;C.parameters={...C.parameters,docs:{...(Xe=C.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'Test: Controlled Mode',
  render: args => {
    const [value, setValue] = useState<string>('01.01.2020');
    return <div>
        <DateInput {...args} value={value} onChange={(_e, formattedValue) => setValue(formattedValue)} />
        <button data-testid="set-date-btn" onClick={() => setValue('25.12.2025')} style={{
        marginTop: '10px'
      }}>
          Sett til jul 2025
        </button>
      </div>;
  },
  args: {
    label: 'Kontrollert test',
    id: 'test-controlled'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify initial value
    expect(input).toHaveValue('01.01.2020');

    // Click the button to change value externally
    const setDateBtn = canvas.getByTestId('set-date-btn');
    await userEvent.click(setDateBtn);

    // Verify the input updated to the new value
    expect(input).toHaveValue('25.12.2025');
  }
}`,...($e=(Ze=C.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source},description:{story:"Tests that controlled value updates correctly from external changes.",...(tt=(et=C.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,nt,st,rt,ot;T.parameters={...T.parameters,docs:{...(at=T.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Test: Rich Label Is Associated',
  args: {
    label: <span>
        Dato <em>(valgfritt)</em>
      </span>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Dato (valgfritt)'
    });
    expect(input).toHaveAccessibleName('Dato (valgfritt)');
    // Clicking the label text focuses the field, proving the htmlFor link
    await userEvent.click(canvas.getByText('(valgfritt)'));
    expect(canvasElement.ownerDocument.activeElement).toBe(input);
  }
}`,...(st=(nt=T.parameters)==null?void 0:nt.docs)==null?void 0:st.source},description:{story:`A ReactNode label is label CONTENT and gets the same <label>/htmlFor
association as a string. It used to render bare, so an input labelled
with rich text had no accessible name.`,...(ot=(rt=T.parameters)==null?void 0:rt.docs)==null?void 0:ot.description}}};const ct=["Default","WithDescription","WithError","WithSuffix","Disabled","CustomSizeAndColor","Controlled","TestAutoFormatting","TestPreservesInput","TestCalendarValidation","TestEventTargetIntegrity","TestExternalAriaLabelledby","TestAutoGeneratedIds","TestOnChangeCallback","TestErrorState","TestDisabledState","TestSuffixClick","TestControlledMode","TestRichLabelIsAssociated"],gt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:D,CustomSizeAndColor:I,Default:w,Disabled:E,TestAutoFormatting:u,TestAutoGeneratedIds:y,TestCalendarValidation:g,TestControlledMode:C,TestDisabledState:x,TestErrorState:b,TestEventTargetIntegrity:m,TestExternalAriaLabelledby:v,TestOnChangeCallback:f,TestPreservesInput:p,TestRichLabelIsAssociated:T,TestSuffixClick:h,WithDescription:B,WithError:V,WithSuffix:S,__namedExportsOrder:ct,default:lt},Symbol.toStringTag,{value:"Module"}));export{gt as D,w as a};
