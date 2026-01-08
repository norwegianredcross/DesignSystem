import{j as e,r as O}from"./iframe-Blww-BXJ.js";import{D as _}from"./index-HEUozgq9.js";import{S as i}from"./Calendar-DfjMG_3d.js";const A={title:"Components/DateInput",component:_,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},"data-size":{control:"select",options:["sm","md","lg"],description:"Component size",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color scheme",defaultValue:"accent"},suffixIcon:{control:!1}}},a={args:{label:"Dato",id:"default-date"}},r={args:{label:"Fødselsdato",id:"desc-date",description:"Vennligst oppgi fødselsdatoen din."}},t={args:{label:"Frist",id:"error-date",description:"Datoen må være i fremtiden.",error:"Datoen du har valgt er ugyldig.",defaultValue:"10.10.2000"}},n={args:{label:"Velg dato",id:"suffix-date",suffixIcon:e.jsx(i,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},o={args:{label:"Startdato",id:"disabled-date",disabled:!0,defaultValue:"24.12.2024",suffixIcon:e.jsx(i,{"aria-hidden":!0})}},s={args:{label:"Stor Brand2 Dato",id:"custom-date","data-size":"lg","data-color":"brand2",defaultValue:"01.01.2025",suffixIcon:e.jsx(i,{"aria-hidden":!0}),onSuffixClick:()=>alert("Kalender-knapp klikket!")}},l={render:E=>{const[c,d]=O.useState("12.05.2023");return e.jsxs("div",{children:[e.jsx(_,{...E,value:c,onChange:(G,F)=>d(F)}),e.jsx("button",{onClick:()=>d("01.01.2030"),style:{marginTop:"10px"},children:"Sett til 2030"}),e.jsx("button",{onClick:()=>d(""),style:{marginLeft:"10px"},children:"Tøm"}),e.jsxs("p",{children:["Gjeldende verdi: ",c]})]})},args:{label:"Kontrollert Dato",id:"controlled-date"}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    id: 'default-date'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Fødselsdato',
    id: 'desc-date',
    description: 'Vennligst oppgi fødselsdatoen din.'
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,S,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Frist',
    id: 'error-date',
    description: 'Datoen må være i fremtiden.',
    error: 'Datoen du har valgt er ugyldig.',
    defaultValue: '10.10.2000'
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,D,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Velg dato',
    id: 'suffix-date',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(h=(D=n.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var V,v,j;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Startdato',
    id: 'disabled-date',
    disabled: true,
    defaultValue: '24.12.2024',
    suffixIcon: <CalendarIcon aria-hidden />
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,y,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Stor Brand2 Dato',
    id: 'custom-date',
    'data-size': 'lg',
    'data-color': 'brand2',
    defaultValue: '01.01.2025',
    suffixIcon: <CalendarIcon aria-hidden />,
    onSuffixClick: () => alert('Kalender-knapp klikket!')
  }
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var K,T,W;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const B=["Default","WithDescription","WithError","WithSuffix","Disabled","CustomSizeAndColor","Controlled"],R=Object.freeze(Object.defineProperty({__proto__:null,Controlled:l,CustomSizeAndColor:s,Default:a,Disabled:o,WithDescription:r,WithError:t,WithSuffix:n,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{R as D,a};
