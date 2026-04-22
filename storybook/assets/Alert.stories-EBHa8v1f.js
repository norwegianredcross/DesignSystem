import{r as q,j as c}from"./iframe-CfsAtch-.js";import{A as C}from"./tooltip-DMtqqJ03.js";const i=q.forwardRef((d,U)=>c.jsx(C,{ref:U,...d}));i.displayName="Alert";try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:{value:"'info'"},description:"Sets color and icon.",name:"data-color",required:!1,type:{name:"SeverityColors"}}}}}catch{}const E={title:"Components/Alert",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{"data-color":{control:"select",options:["info","warning","success","danger"],description:"The visual style of the alert.",table:{category:"Appearance"}},"data-size":{control:"select",options:["sm","md","lg"],description:"The size of the alert.",table:{category:"Appearance"}},children:{control:"text",description:"The content of the alert."},title:{control:"text",description:"The title of the alert."}}},e={name:"Informasjon",args:{"data-color":"info",title:"Informasjon",children:"Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen."}},r={name:"Suksess",args:{"data-color":"success",title:"Gratulerer!",children:"Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss."}},t={name:"Advarsel",args:{"data-color":"warning",title:"Vi har tekniske problemer",children:"Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene."}},a={name:"Feilmelding",args:{"data-color":"danger",title:"Det har skjedd en feil",children:"Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere."}},n={name:"Uten Tittel",args:{"data-color":"info",children:"Du har 7 dager igjen på å fullføre søknaden."}},s={name:"Med Lenke",args:{"data-color":"warning",title:"Søknadsfristen går ut om 3 dager"},render:d=>c.jsxs(i,{...d,children:["Fristen for å søke opptak til utdanning er 15. april."," ",c.jsx("a",{href:"#",children:"Søk nå"})]})},o={name:"Liten størrelse",args:{"data-color":"info","data-size":"sm",title:"Liten alert",children:"Dette er en liten alert."}},l={name:"Stor størrelse",args:{"data-color":"info","data-size":"lg",title:"Stor alert",children:"Dette er en stor alert."}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Informasjon',
  args: {
    'data-color': 'info',
    title: 'Informasjon',
    children: 'Har du husket å bestille passtime? Det er lange køer for å bestille pass om dagen.'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Suksess',
  args: {
    'data-color': 'success',
    title: 'Gratulerer!',
    children: 'Du kan nå starte selskapet ditt. Det ser ut til at regnestykket går i pluss.'
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var h,S,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Advarsel',
  args: {
    'data-color': 'warning',
    title: 'Vi har tekniske problemer',
    children: 'Det gjør at du kan bli avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.'
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,y,A;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Feilmelding',
  args: {
    'data-color': 'danger',
    title: 'Det har skjedd en feil',
    children: 'Vi klarer ikke å hente informasjonen du ser etter akkurat nå. Prøv igjen litt senere.'
  }
}`,...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var D,z,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Uten Tittel',
  args: {
    'data-color': 'info',
    children: 'Du har 7 dager igjen på å fullføre søknaden.'
  }
}`,...(_=(z=n.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var v,L,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Med Lenke',
  args: {
    'data-color': 'warning',
    title: 'Søknadsfristen går ut om 3 dager'
  },
  render: args => <Alert {...args}>
      Fristen for å søke opptak til utdanning er 15. april.{' '}
      <a href="#">Søk nå</a>
    </Alert>
}`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var T,V,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Liten størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'sm',
    title: 'Liten alert',
    children: 'Dette er en liten alert.'
  }
}`,...(I=(V=o.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var F,w,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Stor størrelse',
  args: {
    'data-color': 'info',
    'data-size': 'lg',
    title: 'Stor alert',
    children: 'Dette er en stor alert.'
  }
}`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const N=["Info","Suksess","Advarsel","Feilmelding","UtenTittel","MedLenke","SmallSize","LargeSize"],G=Object.freeze(Object.defineProperty({__proto__:null,Advarsel:t,Feilmelding:a,Info:e,LargeSize:l,MedLenke:s,SmallSize:o,Suksess:r,UtenTittel:n,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{G as A,a as F,e as I,l as L,s as M,r as S,n as U,t as a,o as b};
