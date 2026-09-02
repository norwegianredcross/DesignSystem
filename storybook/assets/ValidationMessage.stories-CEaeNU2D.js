import{r as x,j as T}from"./iframe-Cr0d-POo.js";import{V as k}from"./tooltip-DrR4BEE7.js";import"./preload-helper-u0ftyAaf.js";import"./index-Dfs891qq.js";import"./index-BD-e-fDv.js";import"./XMark-B_cDtZUn.js";import"./useId-B4xEuOvB.js";const u=x.forwardRef((a,t)=>T.jsx(k,{ref:t,...a}));u.displayName="ValidationMessage";const{expect:M,within:h}=__STORYBOOK_MODULE_TEST__,O={title:"Components/ValidationMessage",component:u,tags:["autodocs"],argTypes:{"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Text size"}}},e={args:{children:"Feltet er påkrevd."}},s={args:{children:"E-postadressen er ikke gyldig. Kontroller at adressen er skrevet riktig, for eksempel navn@example.com."}},r={name:"Test: Renders Message",args:{children:"Passordet må være minst 8 tegn."},play:async({canvasElement:a})=>{const v=h(a).getByText("Passordet må være minst 8 tegn.");M(v).toBeInTheDocument()}};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const S=["Default","LongMessage","TestRendersMessage"];export{e as Default,s as LongMessage,r as TestRendersMessage,S as __namedExportsOrder,O as default};
