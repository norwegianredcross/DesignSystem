import{j as e,r as B}from"./iframe-BHNwM2Px.js";import{D as T}from"./index-BG4WKSpo.js";import{S as i}from"./Calendar-X1pk9wwA.js";import"./preload-helper-Dp1pzeXC.js";import"./useId-e2BG1_9j.js";const w={title:"Components/DateInput",component:T,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color scheme",defaultValue:"accent"},suffixIcon:{control:!1}}},a={args:{label:"Dato",id:"default-date"}},r={args:{label:"Fødselsdato",id:"desc-date",description:"Vennligst oppgi fødselsdatoen din."}},t={args:{label:"Frist",id:"error-date",description:"Datoen må være i fremtiden.",error:"Datoen du har valgt er ugyldig.",defaultValue:"10.10.2000"}},n={args:{label:"Velg dato",id:"suffix-date",suffixIcon:e.jsx(i,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},o={args:{label:"Startdato",id:"disabled-date",disabled:!0,defaultValue:"24.12.2024",suffixIcon:e.jsx(i,{"aria-hidden":!0})}},s={args:{label:"Stor Brand2 Dato",id:"custom-date","data-size":"lg","data-color":"brand2",defaultValue:"01.01.2025",suffixIcon:e.jsx(i,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},l={render:F=>{const[c,d]=B.useState("12.05.2023");return e.jsxs("div",{children:[e.jsx(T,{...F,value:c,onChange:(G,A)=>d(A)}),e.jsx("button",{onClick:()=>d("01.01.2030"),style:{marginTop:"10px"},children:"Sett til 2030"}),e.jsx("button",{onClick:()=>d(""),style:{marginLeft:"10px"},children:"Tøm"}),e.jsxs("p",{children:["Gjeldende verdi: ",c]})]})},args:{label:"Kontrollert Dato",id:"controlled-date"}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    id: 'default-date'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.'
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,S,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000'
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,h,D;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var V,v,I;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,y,z;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Stor Brand2 Dato',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'brand2',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var K,W,E;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const H=["Default","WithDescription","WithError","WithSuffix","Disabled","CustomSizeAndColor","Controlled"];export{l as Controlled,s as CustomSizeAndColor,a as Default,o as Disabled,r as WithDescription,t as WithError,n as WithSuffix,H as __namedExportsOrder,w as default};
