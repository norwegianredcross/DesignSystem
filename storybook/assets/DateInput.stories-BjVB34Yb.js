import{j as n,r as B}from"./iframe-uqdBrel6.js";import{D as k}from"./index-B_LNG9zu.js";import{S}from"./Calendar-AggboZ7k.js";const{expect:o,within:i,userEvent:l,fn:E,waitFor:w}=__STORYBOOK_MODULE_TEST__,Oe={title:"Components/DateInput",component:k,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color scheme",defaultValue:"accent"},suffixIcon:{control:!1}}},y={args:{label:"Dato",id:"default-date"}},x={args:{label:"Fødselsdato",id:"desc-date",description:"Vennligst oppgi fødselsdatoen din."}},b={args:{label:"Frist",id:"error-date",description:"Datoen må være i fremtiden.",error:"Datoen du har valgt er ugyldig.",defaultValue:"10.10.2000"}},h={args:{label:"Velg dato",id:"suffix-date",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},T={args:{label:"Startdato",id:"disabled-date",disabled:!0,defaultValue:"24.12.2024",suffixIcon:n.jsx(S,{"aria-hidden":!0})}},V={args:{label:"Stor Brand2 Dato",id:"custom-date","data-size":"lg","data-color":"brand2",defaultValue:"01.01.2025",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},C={render:t=>{const[a,e]=B.useState("12.05.2023");return n.jsxs("div",{children:[n.jsx(k,{...t,value:a,onChange:(s,r)=>e(r)}),n.jsx("button",{onClick:()=>e("01.01.2030"),style:{marginTop:"10px"},children:"Sett til 2030"}),n.jsx("button",{onClick:()=>e(""),style:{marginLeft:"10px"},children:"Tøm"}),n.jsxs("p",{children:["Gjeldende verdi: ",a]})]})},args:{label:"Kontrollert Dato",id:"controlled-date"}};function Ke(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>t())})})}async function D(t,a){for(const e of a)await l.type(t,e),await Ke()}const c={name:"Test: Auto Formatting",args:{label:"Test dato",id:"test-format"},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await l.clear(e),await D(e,"15062025"),await w(()=>{o(e).toHaveValue("15.06.2025")})}},d={name:"Test: Day Validation (max 31)",args:{label:"Test dag",id:"test-day"},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await l.clear(e),await D(e,"45"),await w(()=>{o(e).toHaveValue("31")})}},u={name:"Test: Month Validation (max 12)",args:{label:"Test måned",id:"test-month"},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await l.clear(e),await D(e,"1599"),await w(()=>{o(e).toHaveValue("15.12")})}},p={name:"Test: onChange Callback",render:t=>{const[a,e]=B.useState("");return n.jsxs("div",{children:[n.jsx(k,{...t,onChange:(s,r)=>{var I;e(r),(I=t.onChange)==null||I.call(t,s,r)}}),n.jsxs("p",{"data-testid":"last-value",children:["Siste verdi: ",a]})]})},args:{label:"Test callback",id:"test-callback",onChange:E()},play:async({canvasElement:t,args:a})=>{const e=i(t),s=e.getByRole("textbox");await l.clear(s),await D(s,"01012025"),o(a.onChange).toHaveBeenCalled(),await w(()=>{const r=e.getByTestId("last-value");o(r).toHaveTextContent("01.01.2025")})}},m={name:"Test: Error State",args:{label:"Test feil",id:"test-error",error:"Ugyldig dato",defaultValue:"99.99.9999"},play:async({canvasElement:t})=>{const a=i(t),e=a.getByRole("textbox");o(e).toHaveAttribute("aria-invalid","true");const s=a.getByRole("alert");o(s).toHaveTextContent("Ugyldig dato")}},g={name:"Test: Disabled State",args:{label:"Test deaktivert",id:"test-disabled",disabled:!0,defaultValue:"24.12.2024",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:E()},play:async({canvasElement:t})=>{const a=i(t),e=a.getByRole("textbox");o(e).toBeDisabled(),o(e).toHaveValue("24.12.2024");const s=a.getByRole("button");o(s).toBeDisabled()}},f={name:"Test: Suffix Button Click",args:{label:"Test knapp",id:"test-suffix",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:E()},play:async({canvasElement:t,args:a})=>{const s=i(t).getByRole("button");await l.click(s),o(a.onSuffixClick).toHaveBeenCalled()}},v={name:"Test: Controlled Mode",render:t=>{const[a,e]=B.useState("01.01.2020");return n.jsxs("div",{children:[n.jsx(k,{...t,value:a,onChange:(s,r)=>e(r)}),n.jsx("button",{"data-testid":"set-date-btn",onClick:()=>e("25.12.2025"),style:{marginTop:"10px"},children:"Sett til jul 2025"})]})},args:{label:"Kontrollert test",id:"test-controlled"},play:async({canvasElement:t})=>{const a=i(t),e=a.getByRole("textbox");o(e).toHaveValue("01.01.2020");const s=a.getByTestId("set-date-btn");await l.click(s),o(e).toHaveValue("25.12.2025")}};var j,R,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    id: 'default-date'
  }
}`,...(H=(R=y.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var F,_,M;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.'
  }
}`,...(M=(_=x.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var A,O,K;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000'
  }
}`,...(K=(O=b.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var z,L,W;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,q,G;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />
  }
}`,...(G=(q=T.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var P,Y,J;V.parameters={...V.parameters,docs:{...(P=V.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Stor Brand2 Dato',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'brand2',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(J=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var N,Q,X;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee,te,ae;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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

    // Clear any existing value
    await userEvent.clear(input);

    // Type digits one at a time to allow requestAnimationFrame to process
    await typeDateDigits(input, '15062025');

    // Verify the value is formatted with dots
    await waitFor(() => {
      expect(input).toHaveValue('15.06.2025');
    });
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Tests that input is automatically formatted with dots (dd.mm.yyyy).",...(ae=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var ne,se,oe,re,ie;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Test: Day Validation (max 31)',
  args: {
    label: 'Test dag',
    id: 'test-day'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);

    // Type a day value greater than 31, one digit at a time
    await typeDateDigits(input, '45');

    // Verify the day is capped at 31
    await waitFor(() => {
      expect(input).toHaveValue('31');
    });
  }
}`,...(oe=(se=d.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"Tests that day values are capped at 31.",...(ie=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ie.description}}};var le,ce,de,ue,pe;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Test: Month Validation (max 12)',
  args: {
    label: 'Test måned',
    id: 'test-month'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.clear(input);

    // Type a valid day followed by an invalid month, one digit at a time
    await typeDateDigits(input, '1599');

    // Verify the month is capped at 12
    await waitFor(() => {
      expect(input).toHaveValue('15.12');
    });
  }
}`,...(de=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Tests that month values are capped at 12.",...(pe=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:pe.description}}};var me,ge,fe,ve,ye;p.parameters={...p.parameters,docs:{...(me=p.parameters)==null?void 0:me.docs,source:{originalSource:`{
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

    // Type digits one at a time to allow requestAnimationFrame to process
    await typeDateDigits(input, '01012025');

    // Verify onChange was called
    expect(args.onChange).toHaveBeenCalled();

    // Verify the displayed value shows the formatted date
    await waitFor(() => {
      const lastValueDisplay = canvas.getByTestId('last-value');
      expect(lastValueDisplay).toHaveTextContent('01.01.2025');
    });
  }
}`,...(fe=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:"Tests that onChange is called with the formatted value.",...(ye=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var xe,be,he,Te,Ve;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(be=m.parameters)==null?void 0:be.docs)==null?void 0:he.source},description:{story:"Tests that error state is properly displayed and aria-invalid is set.",...(Ve=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:Ve.description}}};var Ce,Se,ke,we,De;g.parameters={...g.parameters,docs:{...(Ce=g.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:ke.source},description:{story:"Tests that disabled state prevents interaction.",...(De=(we=g.parameters)==null?void 0:we.docs)==null?void 0:De.description}}};var Be,Ee,Ie,je,Re;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ie=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source},description:{story:"Tests suffix button click functionality.",...(Re=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Re.description}}};var He,Fe,_e,Me,Ae;v.parameters={...v.parameters,docs:{...(He=v.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(_e=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source},description:{story:"Tests that controlled value updates correctly from external changes.",...(Ae=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Ae.description}}};const ze=["Default","WithDescription","WithError","WithSuffix","Disabled","CustomSizeAndColor","Controlled","TestAutoFormatting","TestDayValidation","TestMonthValidation","TestOnChangeCallback","TestErrorState","TestDisabledState","TestSuffixClick","TestControlledMode"],qe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:C,CustomSizeAndColor:V,Default:y,Disabled:T,TestAutoFormatting:c,TestControlledMode:v,TestDayValidation:d,TestDisabledState:g,TestErrorState:m,TestMonthValidation:u,TestOnChangeCallback:p,TestSuffixClick:f,WithDescription:x,WithError:b,WithSuffix:h,__namedExportsOrder:ze,default:Oe},Symbol.toStringTag,{value:"Module"}));export{qe as D,y as a};
