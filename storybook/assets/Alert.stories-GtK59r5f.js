import{r as ee,j as k}from"./iframe-COoSIA-W.js";import{A as te}from"./tooltip-DwzjEC5Q.js";import{H as ae}from"./index-CRlO5AD7.js";const v=ee.forwardRef((e,n)=>{const{title:t,titleLevel:f,children:X,...Z}=e;return k.jsxs(te,{ref:n,...Z,children:[t&&(f?k.jsx(ae,{level:f,"data-size":"2xs",style:{marginBottom:"var(--ds-size-1)"},children:t}):k.jsx("p",{className:"ds-heading","data-size":"2xs",style:{marginBottom:"var(--ds-size-1)"},children:t})),X]})});v.displayName="Alert";try{v.displayName="Alert",v.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"Synlig tittel øverst i varselet. Uten `titleLevel` rendres den som\nvisuelt fremhevet tekst (ikke en overskrift), slik at dokumentets\noverskriftsrekkefølge ikke brytes.",name:"title",required:!1,type:{name:"string"}},titleLevel:{defaultValue:null,description:`Semantisk overskriftsnivå (2–6) for tittelen. Angi nivået som passer
inn i sidens overskriftshierarki der varselet vises.`,name:"titleLevel",required:!1,type:{name:"enum",value:[{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:{value:"'info'"},description:"Sets color and icon.",name:"data-color",required:!1,type:{name:"SeverityColors"}}}}}catch{}const{expect:a,within:h}=__STORYBOOK_MODULE_TEST__,ne={title:"Components/Alert",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{"data-color":{control:"select",options:["info","warning","success","danger"],description:"The visual style of the alert.",table:{category:"Appearance"}},"data-size":{control:"select",options:["sm","md","lg"],description:"The size of the alert.",table:{category:"Appearance"}},children:{control:"text",description:"The content of the alert."},title:{control:"text",description:"Synlig tittel øverst i varselet."},titleLevel:{control:"select",options:[void 0,2,3,4,5,6],description:"Semantisk overskriftsnivå for tittelen. Uten nivå rendres tittelen som fremhevet tekst uten overskriftssemantikk."}}},r={name:"Informasjon",args:{"data-color":"info",title:"Informasjon",children:"Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen."}},s={name:"Suksess",args:{"data-color":"success",title:"Gratulerer!",children:"Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss."}},i={name:"Advarsel",args:{"data-color":"warning",title:"Vi har tekniske problemer",children:"Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene."}},o={name:"Feilmelding",args:{"data-color":"danger",title:"Det har skjedd en feil",children:"Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere."}},l={name:"Uten Tittel",args:{"data-color":"info",children:"Du har 7 dager igjen på å fullføre søknaden."}},c={name:"Med Lenke",args:{"data-color":"warning",title:"Søknadsfristen går ut om 3 dager"},render:e=>k.jsxs(v,{...e,children:["Fristen for å søke opptak til utdanning er 15. april."," ",k.jsx("a",{href:"#",children:"Søk nå"})]})},d={name:"Liten størrelse",args:{"data-color":"info","data-size":"sm",title:"Liten alert",children:"Dette er en liten alert."}},m={name:"Stor størrelse",args:{"data-color":"info","data-size":"lg",title:"Stor alert",children:"Dette er en stor alert."}},g={name:"Test: Title Rendering",tags:["!autodocs"],args:{"data-color":"info",title:"Viktig informasjon",children:"Selve meldingen."},play:async({canvasElement:e})=>{const n=h(e),t=n.getByText("Viktig informasjon");await a(t).toBeVisible(),await a(n.queryByRole("heading")).not.toBeInTheDocument();const f=e.querySelector(".ds-alert");await a(f).not.toHaveAttribute("title")}},u={name:"Test: Title Heading Level",tags:["!autodocs"],args:{"data-color":"warning",title:"Frist nærmer seg",titleLevel:3,children:"Søknadsfristen er 15. april."},play:async({canvasElement:e})=>{const t=h(e).getByRole("heading",{level:3,name:"Frist nærmer seg"});await a(t).toBeVisible()}},p={name:"Test: Static Contract",tags:["!autodocs"],args:{"data-color":"danger","data-size":"lg",children:"Kunne ikke lagre endringene."},play:async({canvasElement:e})=>{const t=h(e).getByText("Kunne ikke lagre endringene.");await a(t).toHaveClass("ds-alert"),await a(t).toHaveAttribute("data-color","danger"),await a(t).toHaveAttribute("data-size","lg")}};var S,y,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Informasjon',
  args: {
    'data-color': 'info',
    title: 'Informasjon',
    children: 'Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen.'
  }
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var b,j,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Suksess',
  args: {
    'data-color': 'success',
    title: 'Gratulerer!',
    children: 'Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss.'
  }
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var x,z,A;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Advarsel',
  args: {
    'data-color': 'warning',
    title: 'Vi har tekniske problemer',
    children: 'Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.'
  }
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var L,D,_;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Feilmelding',
  args: {
    'data-color': 'danger',
    title: 'Det har skjedd en feil',
    children: 'Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere.'
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var V,B,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Uten Tittel',
  args: {
    'data-color': 'info',
    children: 'Du har 7 dager igjen på å fullføre søknaden.'
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var E,R,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Med Lenke',
  args: {
    'data-color': 'warning',
    title: 'Søknadsfristen går ut om 3 dager'
  },
  render: args => <Alert {...args}>
      Fristen for å søke opptak til utdanning er 15. april.{' '}
      <a href="#">Søk nå</a>
    </Alert>
}`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var I,C,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Liten størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'sm',
    title: 'Liten alert',
    children: 'Dette er en liten alert.'
  }
}`,...(q=(C=d.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var U,K,M;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Stor størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'lg',
    title: 'Stor alert',
    children: 'Dette er en stor alert.'
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var O,N,P;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Test: Title Rendering',
  tags: ['!autodocs'],
  args: {
    'data-color': 'info',
    title: 'Viktig informasjon',
    children: 'Selve meldingen.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Tittelen er synlig tekst, men IKKE en overskrift uten titleLevel
    const title = canvas.getByText('Viktig informasjon');
    await expect(title).toBeVisible();
    await expect(canvas.queryByRole('heading')).not.toBeInTheDocument();

    // Tittelen skal ikke lenger lekke som native title-tooltip på rota
    const alertRoot = canvasElement.querySelector('.ds-alert');
    await expect(alertRoot).not.toHaveAttribute('title');
  }
}`,...(P=(N=g.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var G,Y,$;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Test: Title Heading Level',
  tags: ['!autodocs'],
  args: {
    'data-color': 'warning',
    title: 'Frist nærmer seg',
    titleLevel: 3,
    children: 'Søknadsfristen er 15. april.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', {
      level: 3,
      name: 'Frist nærmer seg'
    });
    await expect(heading).toBeVisible();
  }
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,Q,W;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Test: Static Contract',
  tags: ['!autodocs'],
  args: {
    'data-color': 'danger',
    'data-size': 'lg',
    children: 'Kunne ikke lagre endringene.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText('Kunne ikke lagre endringene.');
    await expect(message).toHaveClass('ds-alert');
    await expect(message).toHaveAttribute('data-color', 'danger');
    await expect(message).toHaveAttribute('data-size', 'lg');
  }
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const re=["Info","Suksess","Advarsel","Feilmelding","UtenTittel","MedLenke","SmallSize","LargeSize","TestTitleRendering","TestTitleHeadingLevel","TestStaticContract"],le=Object.freeze(Object.defineProperty({__proto__:null,Advarsel:i,Feilmelding:o,Info:r,LargeSize:m,MedLenke:c,SmallSize:d,Suksess:s,TestStaticContract:p,TestTitleHeadingLevel:u,TestTitleRendering:g,UtenTittel:l,__namedExportsOrder:re,default:ne},Symbol.toStringTag,{value:"Module"}));export{le as A,o as F,r as I,m as L,c as M,s as S,l as U,i as a,d as b};
