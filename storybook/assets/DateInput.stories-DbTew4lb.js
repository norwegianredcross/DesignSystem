import{r as R,j as o}from"./iframe-MYEwgWj1.js";import{D as H}from"./index-T2Auoi7t.js";import{S as D}from"./Calendar-Cp7ftcJq.js";const{expect:s,within:l,userEvent:r,fn:T,waitFor:c}=__STORYBOOK_MODULE_TEST__,at={title:"Components/DateInput",component:H,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Fargepalett"},suffixIcon:{control:!1}}},k={args:{label:"Dato",id:"default-date"}},w={args:{label:"Fødselsdato",id:"desc-date",description:"Vennligst oppgi fødselsdatoen din."}},B={args:{label:"Frist",id:"error-date",description:"Datoen må være i fremtiden.",error:"Datoen du har valgt er ugyldig.",defaultValue:"10.10.2000"}},V={args:{label:"Velg dato",id:"suffix-date",suffixIcon:o.jsx(D,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},S={args:{label:"Startdato",id:"disabled-date",disabled:!0,defaultValue:"24.12.2024",suffixIcon:o.jsx(D,{"aria-hidden":!0})}},E={args:{label:"Stor dato i rust",id:"custom-date","data-size":"lg","data-color":"secondary-color-rust",defaultValue:"01.01.2025",suffixIcon:o.jsx(D,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},I={render:t=>{const[n,a]=R.useState("12.05.2023");return o.jsxs("div",{children:[o.jsx(H,{...t,value:n,onChange:(e,i)=>a(i)}),o.jsx("button",{onClick:()=>a("01.01.2030"),style:{marginTop:"10px"},children:"Sett til 2030"}),o.jsx("button",{onClick:()=>a(""),style:{marginLeft:"10px"},children:"Tøm"}),o.jsxs("p",{children:["Gjeldende verdi: ",n]})]})},args:{label:"Kontrollert Dato",id:"controlled-date"}},u={name:"Test: Auto Formatting",args:{label:"Test dato",id:"test-format"},play:async({canvasElement:t})=>{const a=l(t).getByRole("textbox");await r.clear(a),await r.type(a,"15062025"),await c(()=>{s(a).toHaveValue("15.06.2025")})}},p={name:"Test: Preserves Input, Reports Validity",args:{label:"Test bevaring",id:"test-preserve",onValidationChange:T()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("textbox");await r.clear(e),await r.type(e,"45"),s(e).toHaveValue("45"),await r.clear(e),await r.type(e,"1599"),s(e).toHaveValue("15.99"),await r.tab(),await c(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!1,"15.99")})}},g={name:"Test: Calendar Validation",args:{label:"Test kalender",id:"test-calendar",onValidationChange:T()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("textbox");await r.clear(e),await r.type(e,"31022024"),s(e).toHaveValue("31.02.2024"),await c(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!1,"31.02.2024")}),await r.clear(e),await r.type(e,"29022024"),await c(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!0,"29.02.2024")}),await r.clear(e),await r.type(e,"29022023"),await c(()=>{s(n.onValidationChange).toHaveBeenLastCalledWith(!1,"29.02.2023")})}},v={name:"Test: Event Target Integrity",args:{label:"Test hendelse",id:"test-event-target",name:"fodselsdato",onChange:T()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("textbox");await r.clear(e),await r.type(e,"01"),await c(()=>{s(n.onChange).toHaveBeenCalled()});const i=n.onChange,[d,tt]=i.mock.lastCall;s(tt).toBe("01"),s(d.target).toBeInstanceOf(HTMLInputElement),s(d.target.name).toBe("fodselsdato"),s(d.target.id).toBe("test-event-target"),s(d.target.value).toBe("01")}},m={name:"Test: External aria-labelledby",render:t=>o.jsxs("div",{children:[o.jsx("h3",{id:"ekstern-overskrift",children:"Når reiser du?"}),o.jsx(H,{...t})]}),args:{"aria-labelledby":"ekstern-overskrift",id:"test-external-label"},play:async({canvasElement:t})=>{const a=l(t).getByRole("textbox",{name:"Når reiser du?"});s(a).toHaveAttribute("aria-labelledby","ekstern-overskrift");const e=t.querySelector("#ekstern-overskrift");s(e==null?void 0:e.tagName).toBe("H3")}},y={name:"Test: Auto-generated Ids",args:{label:"Uten id",description:"Ingen id-prop er satt."},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox",{name:"Uten id"});s(a.id).toBeTruthy(),s(a.id).not.toContain("undefined");const e=t.querySelector("label");s(e).toHaveAttribute("for",a.id);const i=a.getAttribute("aria-describedby")??"";s(i).not.toContain("undefined"),s(n.getByText("Ingen id-prop er satt.").id).toBe(i)}},f={name:"Test: onChange Callback",render:t=>{const[n,a]=R.useState("");return o.jsxs("div",{children:[o.jsx(H,{...t,onChange:(e,i)=>{var d;a(i),(d=t.onChange)==null||d.call(t,e,i)}}),o.jsxs("p",{"data-testid":"last-value",children:["Siste verdi: ",n]})]})},args:{label:"Test callback",id:"test-callback",onChange:T()},play:async({canvasElement:t,args:n})=>{const a=l(t),e=a.getByRole("textbox");await r.clear(e),await r.type(e,"01012025"),s(n.onChange).toHaveBeenCalled(),await c(()=>{const i=a.getByTestId("last-value");s(i).toHaveTextContent("01.01.2025")})}},b={name:"Test: Error State",args:{label:"Test feil",id:"test-error",error:"Ugyldig dato",defaultValue:"99.99.9999"},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox");s(a).toHaveAttribute("aria-invalid","true");const e=n.getByRole("alert");s(e).toHaveTextContent("Ugyldig dato")}},x={name:"Test: Disabled State",args:{label:"Test deaktivert",id:"test-disabled",disabled:!0,defaultValue:"24.12.2024",suffixIcon:o.jsx(D,{"aria-hidden":!0}),onSuffixClick:T()},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox");s(a).toBeDisabled(),s(a).toHaveValue("24.12.2024");const e=n.getByRole("button");s(e).toBeDisabled()}},h={name:"Test: Suffix Button Click",args:{label:"Test knapp",id:"test-suffix",suffixIcon:o.jsx(D,{"aria-hidden":!0}),onSuffixClick:T()},play:async({canvasElement:t,args:n})=>{const e=l(t).getByRole("button");await r.click(e),s(n.onSuffixClick).toHaveBeenCalled()}},C={name:"Test: Controlled Mode",render:t=>{const[n,a]=R.useState("01.01.2020");return o.jsxs("div",{children:[o.jsx(H,{...t,value:n,onChange:(e,i)=>a(i)}),o.jsx("button",{"data-testid":"set-date-btn",onClick:()=>a("25.12.2025"),style:{marginTop:"10px"},children:"Sett til jul 2025"})]})},args:{label:"Kontrollert test",id:"test-controlled"},play:async({canvasElement:t})=>{const n=l(t),a=n.getByRole("textbox");s(a).toHaveValue("01.01.2020");const e=n.getByTestId("set-date-btn");await r.click(e),s(a).toHaveValue("25.12.2025")}};var j,A,L;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    id: 'default-date'
  }
}`,...(L=(A=k.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var F,_,W;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.'
  }
}`,...(W=(_=w.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var M,O,K;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000'
  }
}`,...(K=(O=B.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var U,z,N;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(N=(z=V.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,q,G;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />
  }
}`,...(G=(q=S.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Y,J,Q;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Stor dato i rust',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'secondary-color-rust',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae,ne,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Tests that input is automatically formatted with dots (dd.mm.yyyy).",...(se=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var re,oe,ie,le,de;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:`Typed input is preserved as-is (no silent clamping); validity is reported
through onValidationChange instead.`,...(de=(le=p.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var ce,ue,pe,ge,ve;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:`Complete dates are validated against the real calendar: impossible dates
(31.02) and non-leap-year 29.02 are invalid; leap-day 29.02.2024 is valid.`,...(ve=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:ve.description}}};var me,ye,fe,be,xe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:fe.source},description:{story:`The event passed to onChange keeps the real input element as target, so
standard form patterns (e.target.name, .id, .focus()) work.`,...(xe=(be=v.parameters)==null?void 0:be.docs)==null?void 0:xe.description}}};var he,Ce,Te,ke,we;m.parameters={...m.parameters,docs:{...(he=m.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(Ce=m.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source},description:{story:`External aria-labelledby is honored: the input gets its accessible name
from the referenced element, and that element keeps its own id.`,...(we=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:we.description}}};var Be,Ve,Se,Ee,Ie;y.parameters={...y.parameters,docs:{...(Be=y.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Se=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source},description:{story:`Without an id prop the component generates stable ids — never the literal
"undefined-label"/"undefined-desc" — and label/description stay linked.`,...(Ie=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.description}}};var He,De,Re,je,Ae;f.parameters={...f.parameters,docs:{...(He=f.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Re=(De=f.parameters)==null?void 0:De.docs)==null?void 0:Re.source},description:{story:"Tests that onChange is called with the formatted value.",...(Ae=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Ae.description}}};var Le,Fe,_e,We,Me;b.parameters={...b.parameters,docs:{...(Le=b.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(_e=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source},description:{story:"Tests that error state is properly displayed and aria-invalid is set.",...(Me=(We=b.parameters)==null?void 0:We.docs)==null?void 0:Me.description}}};var Oe,Ke,Ue,ze,Ne;x.parameters={...x.parameters,docs:{...(Oe=x.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ue=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source},description:{story:"Tests that disabled state prevents interaction.",...(Ne=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:Ne.description}}};var Pe,qe,Ge,Ye,Je;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ge=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source},description:{story:"Tests suffix button click functionality.",...(Je=(Ye=h.parameters)==null?void 0:Ye.docs)==null?void 0:Je.description}}};var Qe,Xe,Ze,$e,et;C.parameters={...C.parameters,docs:{...(Qe=C.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=C.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source},description:{story:"Tests that controlled value updates correctly from external changes.",...(et=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:et.description}}};const nt=["Default","WithDescription","WithError","WithSuffix","Disabled","CustomSizeAndColor","Controlled","TestAutoFormatting","TestPreservesInput","TestCalendarValidation","TestEventTargetIntegrity","TestExternalAriaLabelledby","TestAutoGeneratedIds","TestOnChangeCallback","TestErrorState","TestDisabledState","TestSuffixClick","TestControlledMode"],it=Object.freeze(Object.defineProperty({__proto__:null,Controlled:I,CustomSizeAndColor:E,Default:k,Disabled:S,TestAutoFormatting:u,TestAutoGeneratedIds:y,TestCalendarValidation:g,TestControlledMode:C,TestDisabledState:x,TestErrorState:b,TestEventTargetIntegrity:v,TestExternalAriaLabelledby:m,TestOnChangeCallback:f,TestPreservesInput:p,TestSuffixClick:h,WithDescription:w,WithError:B,WithSuffix:V,__namedExportsOrder:nt,default:at},Symbol.toStringTag,{value:"Module"}));export{it as D,k as a};
