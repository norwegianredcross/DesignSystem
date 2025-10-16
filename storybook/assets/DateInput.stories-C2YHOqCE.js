import{j as D}from"./iframe-DfSxep4P.js";import{D as I,C as S}from"./CalendarIcon-15u4HIRE.js";import"./preload-helper-Dp1pzeXC.js";const C={title:"Components/DateInput",component:I,tags:["autodocs"],parameters:{},argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},error:{control:"text"},description:{control:"text"}}},e={args:{label:"Select a date",placeholder:"dd.mm.åååå",suffixIcon:D.jsx(S,{})}},a={name:"Example with Value",args:{...e.args,value:"24.12.2023"}},r={name:"Example with Error",args:{...e.args,error:"Invalid date format",value:"Invalid Date"}},t={name:"Example with Disabled State",args:{...e.args,disabled:!0,value:"01.01.2024"}},o={name:"Example without Suffix Icon",args:{label:"Enter your birthday",placeholder:"dd.mm.åååå"}};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select a date',
    placeholder: 'dd.mm.åååå',
    suffixIcon: <CalendarIcon />
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Example with Value',
  args: {
    ...Default.args,
    value: '24.12.2023'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,u,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Example with Error',
  args: {
    ...Default.args,
    error: 'Invalid date format',
    value: 'Invalid Date'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,g,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example with Disabled State',
  args: {
    ...Default.args,
    disabled: true,
    value: '01.01.2024'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example without Suffix Icon',
  args: {
    label: 'Enter your birthday',
    placeholder: 'dd.mm.åååå'
  }
}`,...(b=(E=o.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const V=["Default","WithValue","WithError","Disabled","NoSuffixIcon"];export{e as Default,t as Disabled,o as NoSuffixIcon,r as WithError,a as WithValue,V as __namedExportsOrder,C as default};
