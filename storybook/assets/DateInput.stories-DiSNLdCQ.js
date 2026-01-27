import{j as n,r as B}from"./iframe-Ls3G3PtQ.js";import{D as k}from"./index-DH_nGYtd.js";import{S}from"./Calendar-B4XzGgVh.js";const{expect:r,within:i,userEvent:l,fn:D}=__STORYBOOK_MODULE_TEST__,Oe={title:"Components/DateInput",component:k,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color scheme",defaultValue:"accent"},suffixIcon:{control:!1}}},y={args:{label:"Dato",id:"default-date"}},x={args:{label:"Fødselsdato",id:"desc-date",description:"Vennligst oppgi fødselsdatoen din."}},b={args:{label:"Frist",id:"error-date",description:"Datoen må være i fremtiden.",error:"Datoen du har valgt er ugyldig.",defaultValue:"10.10.2000"}},h={args:{label:"Velg dato",id:"suffix-date",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},T={args:{label:"Startdato",id:"disabled-date",disabled:!0,defaultValue:"24.12.2024",suffixIcon:n.jsx(S,{"aria-hidden":!0})}},V={args:{label:"Stor Brand2 Dato",id:"custom-date","data-size":"lg","data-color":"brand2",defaultValue:"01.01.2025",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},C={render:t=>{const[a,e]=B.useState("12.05.2023");return n.jsxs("div",{children:[n.jsx(k,{...t,value:a,onChange:(s,o)=>e(o)}),n.jsx("button",{onClick:()=>e("01.01.2030"),style:{marginTop:"10px"},children:"Sett til 2030"}),n.jsx("button",{onClick:()=>e(""),style:{marginLeft:"10px"},children:"Tøm"}),n.jsxs("p",{children:["Gjeldende verdi: ",a]})]})},args:{label:"Kontrollert Dato",id:"controlled-date"}},c={name:"Test: Auto Formatting",args:{label:"Test dato",id:"test-format"},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await l.clear(e),await l.type(e,"15062025"),r(e).toHaveValue("15.06.2025")}},d={name:"Test: Day Validation (max 31)",args:{label:"Test dag",id:"test-day"},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await l.clear(e),await l.type(e,"45"),r(e).toHaveValue("31")}},u={name:"Test: Month Validation (max 12)",args:{label:"Test måned",id:"test-month"},play:async({canvasElement:t})=>{const e=i(t).getByRole("textbox");await l.clear(e),await l.type(e,"1599"),r(e).toHaveValue("15.12")}},p={name:"Test: onChange Callback",render:t=>{const[a,e]=B.useState("");return n.jsxs("div",{children:[n.jsx(k,{...t,onChange:(s,o)=>{var w;e(o),(w=t.onChange)==null||w.call(t,s,o)}}),n.jsxs("p",{"data-testid":"last-value",children:["Siste verdi: ",a]})]})},args:{label:"Test callback",id:"test-callback",onChange:D()},play:async({canvasElement:t,args:a})=>{const e=i(t),s=e.getByRole("textbox");await l.clear(s),await l.type(s,"01012025"),r(a.onChange).toHaveBeenCalled();const o=e.getByTestId("last-value");r(o).toHaveTextContent("01.01.2025")}},m={name:"Test: Error State",args:{label:"Test feil",id:"test-error",error:"Ugyldig dato",defaultValue:"99.99.9999"},play:async({canvasElement:t})=>{const a=i(t),e=a.getByRole("textbox");r(e).toHaveAttribute("aria-invalid","true");const s=a.getByRole("alert");r(s).toHaveTextContent("Ugyldig dato")}},g={name:"Test: Disabled State",args:{label:"Test deaktivert",id:"test-disabled",disabled:!0,defaultValue:"24.12.2024",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:D()},play:async({canvasElement:t,args:a})=>{const e=i(t),s=e.getByRole("textbox");r(s).toBeDisabled(),r(s).toHaveValue("24.12.2024");const o=e.getByRole("button");r(o).toBeDisabled()}},f={name:"Test: Suffix Button Click",args:{label:"Test knapp",id:"test-suffix",suffixIcon:n.jsx(S,{"aria-hidden":!0}),onSuffixClick:D()},play:async({canvasElement:t,args:a})=>{const s=i(t).getByRole("button");await l.click(s),r(a.onSuffixClick).toHaveBeenCalled()}},v={name:"Test: Controlled Mode",render:t=>{const[a,e]=B.useState("01.01.2020");return n.jsxs("div",{children:[n.jsx(k,{...t,value:a,onChange:(s,o)=>e(o)}),n.jsx("button",{"data-testid":"set-date-btn",onClick:()=>e("25.12.2025"),style:{marginTop:"10px"},children:"Sett til jul 2025"})]})},args:{label:"Kontrollert test",id:"test-controlled"},play:async({canvasElement:t})=>{const a=i(t),e=a.getByRole("textbox");r(e).toHaveValue("01.01.2020");const s=a.getByTestId("set-date-btn");await l.click(s),r(e).toHaveValue("25.12.2025")}};var E,I,j;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    id: 'default-date'
  }
}`,...(j=(I=y.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var H,R,M;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.'
  }
}`,...(M=(R=x.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var _,O,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000'
  }
}`,...(K=(O=b.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var A,F,z;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(z=(F=h.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var L,W,U;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />
  }
}`,...(U=(W=T.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var G,P,Y;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Stor Brand2 Dato',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'brand2',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(Y=(P=V.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var q,J,N;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | null>('12.05.2023');
    return <div>
        <DateInput {...args} value={value} onChange={(e, formattedValue) => setValue(formattedValue)} />
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
}`,...(N=(J=C.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,X,Z,$,ee;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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

    // Type digits without dots
    await userEvent.type(input, '15062025');

    // Verify the value is formatted with dots
    expect(input).toHaveValue('15.06.2025');
  }
}`,...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Tests that input is automatically formatted with dots (dd.mm.yyyy).",...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,ae,ne,se,re;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
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

    // Type a day value greater than 31
    await userEvent.type(input, '45');

    // Verify the day is capped at 31
    expect(input).toHaveValue('31');
  }
}`,...(ne=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Tests that day values are capped at 31.",...(re=(se=d.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var oe,le,ie,ce,de;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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

    // Type a valid day followed by an invalid month
    await userEvent.type(input, '1599'); // Day 15, month 99

    // Verify the month is capped at 12
    expect(input).toHaveValue('15.12');
  }
}`,...(ie=(le=u.parameters)==null?void 0:le.docs)==null?void 0:ie.source},description:{story:"Tests that month values are capped at 12.",...(de=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,pe,me,ge,fe;p.parameters={...p.parameters,docs:{...(ue=p.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    const lastValueDisplay = canvas.getByTestId('last-value');
    expect(lastValueDisplay).toHaveTextContent('01.01.2025');
  }
}`,...(me=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Tests that onChange is called with the formatted value.",...(fe=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:fe.description}}};var ve,ye,xe,be,he;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:xe.source},description:{story:"Tests that error state is properly displayed and aria-invalid is set.",...(he=(be=m.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};var Te,Ve,Ce,Se,ke;g.parameters={...g.parameters,docs:{...(Te=g.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
    canvasElement,
    args
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
}`,...(Ce=(Ve=g.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source},description:{story:"Tests that disabled state prevents interaction.",...(ke=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:ke.description}}};var Be,De,we,Ee,Ie;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(we=(De=f.parameters)==null?void 0:De.docs)==null?void 0:we.source},description:{story:"Tests suffix button click functionality.",...(Ie=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.description}}};var je,He,Re,Me,_e;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Test: Controlled Mode',
  render: args => {
    const [value, setValue] = useState<string>('01.01.2020');
    return <div>
        <DateInput {...args} value={value} onChange={(e, formattedValue) => setValue(formattedValue)} />
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
}`,...(Re=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Re.source},description:{story:"Tests that controlled value updates correctly from external changes.",...(_e=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:_e.description}}};const Ke=["Default","WithDescription","WithError","WithSuffix","Disabled","CustomSizeAndColor","Controlled","TestAutoFormatting","TestDayValidation","TestMonthValidation","TestOnChangeCallback","TestErrorState","TestDisabledState","TestSuffixClick","TestControlledMode"],Le=Object.freeze(Object.defineProperty({__proto__:null,Controlled:C,CustomSizeAndColor:V,Default:y,Disabled:T,TestAutoFormatting:c,TestControlledMode:v,TestDayValidation:d,TestDisabledState:g,TestErrorState:m,TestMonthValidation:u,TestOnChangeCallback:p,TestSuffixClick:f,WithDescription:x,WithError:b,WithSuffix:h,__namedExportsOrder:Ke,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Le as D,y as a};
