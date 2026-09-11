import{r as v,j as E}from"./iframe--tL_cLjH.js";import{V as T}from"./tooltip-IPEz1hAh.js";import"./preload-helper-u0ftyAaf.js";import"./XMark-Diq6-63M.js";import"./useId-DbbkGEiv.js";import"./index-BRlJKmD4.js";import"./index-BUPFcsRO.js";const x=v.forwardRef((a,t)=>E.jsx(T,{ref:t,...a}));x.displayName="ValidationMessage";const{expect:k,within:M}=__STORYBOOK_MODULE_TEST__,O={title:"Components/ValidationMessage",component:x,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Text size"}}},e={args:{children:"Feltet er påkrevd."}},s={args:{children:"E-postadressen er ikke gyldig. Kontroller at adressen er skrevet riktig, for eksempel navn@example.com."}},r={name:"Test: Renders Message",args:{children:"Passordet må være minst 8 tegn."},play:async({canvasElement:a})=>{const u=M(a).getByText("Passordet må være minst 8 tegn.");k(u).toBeInTheDocument()}},S=["Default","LongMessage","TestRendersMessage"];var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Feltet er påkrevd.'
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,i,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'E-postadressen er ikke gyldig. Kontroller at adressen er skrevet riktig, for eksempel navn@example.com.'
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,g,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Test: Renders Message',
  args: {
    children: 'Passordet må være minst 8 tegn.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText('Passordet må være minst 8 tegn.');
    expect(message).toBeInTheDocument();
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};export{e as Default,s as LongMessage,r as TestRendersMessage,S as __namedExportsOrder,O as default};
