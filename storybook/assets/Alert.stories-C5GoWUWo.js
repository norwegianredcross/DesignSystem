import{r as ee,j as k}from"./iframe--tL_cLjH.js";import{A as te}from"./tooltip-IPEz1hAh.js";import{H as ae}from"./index-ZZWINIQ1.js";const h=ee.forwardRef((t,n)=>{const{title:e,titleLevel:v,children:X,...Z}=t;return k.jsxs(te,{ref:n,...Z,children:[e&&(v?k.jsx(ae,{level:v,"data-size":"2xs",style:{marginBottom:"var(--ds-size-1)"},children:e}):k.jsx("p",{className:"ds-heading","data-size":"2xs",style:{marginBottom:"var(--ds-size-1)"},children:e})),X]})});h.displayName="Alert";const{expect:a,within:f}=__STORYBOOK_MODULE_TEST__,ne={title:"Components/Alert",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{"data-color":{control:"select",options:["info","warning","success","danger"],description:"The visual style of the alert.",table:{category:"Appearance"}},"data-size":{control:"select",options:["sm","md","lg"],description:"The size of the alert.",table:{category:"Appearance"}},children:{control:"text",description:"The content of the alert."},title:{control:"text",description:"Synlig tittel øverst i varselet."},titleLevel:{control:"select",options:[void 0,2,3,4,5,6],description:"Semantisk overskriftsnivå for tittelen. Uten nivå rendres tittelen som fremhevet tekst uten overskriftssemantikk."}}},r={name:"Informasjon",args:{"data-color":"info",title:"Informasjon",children:"Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen."}},s={name:"Suksess",args:{"data-color":"success",title:"Gratulerer!",children:"Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss."}},o={name:"Advarsel",args:{"data-color":"warning",title:"Vi har tekniske problemer",children:"Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene."}},i={name:"Feilmelding",args:{"data-color":"danger",title:"Det har skjedd en feil",children:"Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere."}},l={name:"Uten Tittel",args:{"data-color":"info",children:"Du har 7 dager igjen på å fullføre søknaden."}},c={name:"Med Lenke",args:{"data-color":"warning",title:"Søknadsfristen går ut om 3 dager"},render:t=>k.jsxs(h,{...t,children:["Fristen for å søke opptak til utdanning er 15. april."," ",k.jsx("a",{href:"#",children:"Søk nå"})]})},d={name:"Liten størrelse",args:{"data-color":"info","data-size":"sm",title:"Liten alert",children:"Dette er en liten alert."}},m={name:"Stor størrelse",args:{"data-color":"info","data-size":"lg",title:"Stor alert",children:"Dette er en stor alert."}},g={name:"Test: Title Rendering",tags:["!autodocs"],args:{"data-color":"info",title:"Viktig informasjon",children:"Selve meldingen."},play:async({canvasElement:t})=>{const n=f(t),e=n.getByText("Viktig informasjon");await a(e).toBeVisible(),await a(n.queryByRole("heading")).not.toBeInTheDocument();const v=t.querySelector(".ds-alert");await a(v).not.toHaveAttribute("title")}},p={name:"Test: Title Heading Level",tags:["!autodocs"],args:{"data-color":"warning",title:"Frist nærmer seg",titleLevel:3,children:"Søknadsfristen er 15. april."},play:async({canvasElement:t})=>{const e=f(t).getByRole("heading",{level:3,name:"Frist nærmer seg"});await a(e).toBeVisible()}},u={name:"Test: Static Contract",tags:["!autodocs"],args:{"data-color":"danger","data-size":"lg",children:"Kunne ikke lagre endringene."},play:async({canvasElement:t})=>{const e=f(t).getByText("Kunne ikke lagre endringene.");await a(e).toHaveClass("ds-alert"),await a(e).toHaveAttribute("data-color","danger"),await a(e).toHaveAttribute("data-size","lg")}},re=["Info","Suksess","Advarsel","Feilmelding","UtenTittel","MedLenke","SmallSize","LargeSize","TestTitleRendering","TestTitleHeadingLevel","TestStaticContract"];var x,S,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Informasjon',
  args: {
    'data-color': 'info',
    title: 'Informasjon',
    children: 'Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen.'
  }
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,b,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Suksess',
  args: {
    'data-color': 'success',
    title: 'Gratulerer!',
    children: 'Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss.'
  }
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var E,w,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Advarsel',
  args: {
    'data-color': 'warning',
    title: 'Vi har tekniske problemer',
    children: 'Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.'
  }
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var A,L,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Feilmelding',
  args: {
    'data-color': 'danger',
    title: 'Det har skjedd en feil',
    children: 'Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere.'
  }
}`,...(z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var D,B,H;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Uten Tittel',
  args: {
    'data-color': 'info',
    children: 'Du har 7 dager igjen på å fullføre søknaden.'
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var R,V,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Med Lenke',
  args: {
    'data-color': 'warning',
    title: 'Søknadsfristen går ut om 3 dager'
  },
  render: args => <Alert {...args}>
      Fristen for å søke opptak til utdanning er 15. april.{' '}
      <a href="#">Søk nå</a>
    </Alert>
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var I,C,K;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Liten størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'sm',
    title: 'Liten alert',
    children: 'Dette er en liten alert.'
  }
}`,...(K=(C=d.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var M,O,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Stor størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'lg',
    title: 'Stor alert',
    children: 'Dette er en stor alert.'
  }
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var q,P,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var N,Y,$;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,Q,W;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(W=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const le=Object.freeze(Object.defineProperty({__proto__:null,Advarsel:o,Feilmelding:i,Info:r,LargeSize:m,MedLenke:c,SmallSize:d,Suksess:s,TestStaticContract:u,TestTitleHeadingLevel:p,TestTitleRendering:g,UtenTittel:l,__namedExportsOrder:re,default:ne},Symbol.toStringTag,{value:"Module"}));export{le as A,i as F,r as I,m as L,c as M,s as S,l as U,o as a,d as b};
