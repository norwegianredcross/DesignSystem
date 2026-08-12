import{r as B,j as p}from"./iframe-CvWPpj0n.js";import{A as N}from"./tooltip-ByKeD8DJ.js";const d=B.forwardRef((e,u)=>p.jsx(N,{ref:u,...e}));d.displayName="Alert";try{d.displayName="Alert",d.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:{value:"'info'"},description:"Sets color and icon.",name:"data-color",required:!1,type:{name:"SeverityColors"}}}}}catch{}const{expect:g,within:P}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Alert",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{"data-color":{control:"select",options:["info","warning","success","danger"],description:"The visual style of the alert.",table:{category:"Appearance"}},"data-size":{control:"select",options:["sm","md","lg"],description:"The size of the alert.",table:{category:"Appearance"}},children:{control:"text",description:"The content of the alert."},title:{control:"text",description:"The title of the alert."}}},a={name:"Informasjon",args:{"data-color":"info",title:"Informasjon",children:"Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen."}},t={name:"Suksess",args:{"data-color":"success",title:"Gratulerer!",children:"Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss."}},r={name:"Advarsel",args:{"data-color":"warning",title:"Vi har tekniske problemer",children:"Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene."}},n={name:"Feilmelding",args:{"data-color":"danger",title:"Det har skjedd en feil",children:"Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere."}},s={name:"Uten Tittel",args:{"data-color":"info",children:"Du har 7 dager igjen på å fullføre søknaden."}},o={name:"Med Lenke",args:{"data-color":"warning",title:"Søknadsfristen går ut om 3 dager"},render:e=>p.jsxs(d,{...e,children:["Fristen for å søke opptak til utdanning er 15. april."," ",p.jsx("a",{href:"#",children:"Søk nå"})]})},l={name:"Liten størrelse",args:{"data-color":"info","data-size":"sm",title:"Liten alert",children:"Dette er en liten alert."}},i={name:"Stor størrelse",args:{"data-color":"info","data-size":"lg",title:"Stor alert",children:"Dette er en stor alert."}},c={name:"Test: Static Contract",tags:["!autodocs"],args:{"data-color":"danger","data-size":"lg",children:"Kunne ikke lagre endringene."},play:async({canvasElement:e})=>{const m=P(e).getByText("Kunne ikke lagre endringene.");await g(m).toHaveClass("ds-alert"),await g(m).toHaveAttribute("data-color","danger"),await g(m).toHaveAttribute("data-size","lg")}};var k,f,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Informasjon',
  args: {
    'data-color': 'info',
    title: 'Informasjon',
    children: 'Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen.'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,y,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Suksess',
  args: {
    'data-color': 'success',
    title: 'Gratulerer!',
    children: 'Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss.'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,v,A;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Advarsel',
  args: {
    'data-color': 'warning',
    title: 'Vi har tekniske problemer',
    children: 'Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.'
  }
}`,...(A=(v=r.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var z,_,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Feilmelding',
  args: {
    'data-color': 'danger',
    title: 'Det har skjedd en feil',
    children: 'Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere.'
  }
}`,...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var D,x,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Uten Tittel',
  args: {
    'data-color': 'info',
    children: 'Du har 7 dager igjen på å fullføre søknaden.'
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var L,C,V;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Med Lenke',
  args: {
    'data-color': 'warning',
    title: 'Søknadsfristen går ut om 3 dager'
  },
  render: args => <Alert {...args}>
      Fristen for å søke opptak til utdanning er 15. april.{' '}
      <a href="#">Søk nå</a>
    </Alert>
}`,...(V=(C=o.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var H,I,E;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Liten størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'sm',
    title: 'Liten alert',
    children: 'Dette er en liten alert.'
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var F,M,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Stor størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'lg',
    title: 'Stor alert',
    children: 'Dette er en stor alert.'
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var U,K,q;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const G=["Info","Suksess","Advarsel","Feilmelding","UtenTittel","MedLenke","SmallSize","LargeSize","TestStaticContract"],J=Object.freeze(Object.defineProperty({__proto__:null,Advarsel:r,Feilmelding:n,Info:a,LargeSize:i,MedLenke:o,SmallSize:l,Suksess:t,TestStaticContract:c,UtenTittel:s,__namedExportsOrder:G,default:R},Symbol.toStringTag,{value:"Module"}));export{J as A,n as F,a as I,i as L,o as M,t as S,s as U,r as a,l as b};
