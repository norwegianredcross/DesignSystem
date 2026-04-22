import{j as n}from"./iframe-Bb1XchRN.js";import{E as p}from"./tooltip-DD-oADH_.js";const e=p;try{e.displayName="Details",e.__docgenInfo={description:"",displayName:"Details",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the details.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},open:{defaultValue:{value:"undefined"},description:`Controls open-state.

Using this removes automatic control of open-state`,name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"Defaults the details to open if not controlled",name:"defaultOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Callback function when Details toggles due to click on summary or find in page-search",name:"onToggle",required:!1,type:{name:"(((event: Event) => void) & ((event: Event) => void)) | (((event: Event) => void) & ((event: Event) => void))"}},children:{defaultValue:null,description:"Content should be one `<Details.Summary>` and `<Details.Content>`",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const v={title:"Components/Details",component:e,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},open:{control:"boolean",description:"Controls the open/closed state.",defaultValue:!1},children:{control:!1,description:"Must contain Details.Summary and Details.Content"}}},a={render:t=>n.jsxs(e,{...t,children:[n.jsx(e.Summary,{children:"Hva er Altinn?"}),n.jsx(e.Content,{children:"Altinn er en internettportal for digital dialog mellom næringslivet, privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er utviklet og driftet av Altinn-samarbeidet, som består av flere offentlige etater."})]}),args:{},name:"Default (Closed)"},r={render:t=>n.jsxs(e,{...t,children:[n.jsx(e.Summary,{children:"Hva er formålet med Altinn?"}),n.jsx(e.Content,{children:"Formålet med Altinn er å effektivisere og forenkle rapportering fra næringslivet til det offentlige, samt å gi enklere tilgang til offentlig informasjon og tjenester for både bedrifter og privatpersoner."})]}),args:{open:!0},name:"Default (Open)"},o={render:t=>n.jsxs(e,{...t,children:[n.jsx(e.Summary,{children:"Hvilke tjenester tilbyr Altinn?"}),n.jsx(e.Content,{children:"Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer (som MVA-melding, A-melding), tilgang til meldingsboks fra det offentlige, registertjenester, samtykketjenester og veiledning."})]}),args:{"data-size":"lg","data-color":"brand1",open:!1},name:"Large Size, Brand1 Color"};var s,l,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hva er Altinn?</Details.Summary>
      <Details.Content>
        Altinn er en internettportal for digital dialog mellom næringslivet,
        privatpersoner og offentlige etater. Tjenesten ble lansert i 2003 og er
        utviklet og driftet av Altinn-samarbeidet, som består av flere
        offentlige etater.
      </Details.Content>
    </Details>,
  args: {},
  name: 'Default (Closed)'
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hva er formålet med Altinn?</Details.Summary>
      <Details.Content>
        Formålet med Altinn er å effektivisere og forenkle rapportering fra
        næringslivet til det offentlige, samt å gi enklere tilgang til
        offentlig informasjon og tjenester for både bedrifter og privatpersoner.
      </Details.Content>
    </Details>,
  args: {
    open: true
  },
  name: 'Default (Open)'
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,c,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>Hvilke tjenester tilbyr Altinn?</Details.Summary>
      <Details.Content>
        Altinn tilbyr en rekke tjenester, inkludert innsending av skjemaer
        (som MVA-melding, A-melding), tilgang til meldingsboks fra det
        offentlige, registertjenester, samtykketjenester og veiledning.
      </Details.Content>
    </Details>,
  args: {
    'data-size': 'lg',
    'data-color': 'brand1',
    open: false
  },
  name: 'Large Size, Brand1 Color'
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const D=["DefaultClosed","DefaultOpen","LargeBrand1"],j=Object.freeze(Object.defineProperty({__proto__:null,DefaultClosed:a,DefaultOpen:r,LargeBrand1:o,__namedExportsOrder:D,default:v},Symbol.toStringTag,{value:"Module"}));export{j as D,o as L,a,r as b};
