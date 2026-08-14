import{j as d}from"./iframe-ChOOMmW6.js";import{L as c}from"./index-B0DEZ_s0.js";import{P as T}from"./tooltip-ad4DlScQ.js";import{S as C}from"./EnvelopeClosed-DySr6Qyd.js";const{expect:t,within:H}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Link",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Link is a clickable text or graphic for navigation, based on the anchor tag."}}},argTypes:{children:{control:"text",description:"The content to display inside the link.",defaultValue:"Gå til designsystemet"},href:{control:"text",description:"The URL the link points to.",defaultValue:"https://designsystemet.no/"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"primary-color-red"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},target:{control:"text"},rel:{control:"text"}}},a={name:"Example Default",args:{children:"Gå til designsystemet",href:"https://designsystemet.no/"}},n={name:"Example Link within Text",render:e=>d.jsxs(T,{"data-size":e["data-size"],"data-color":e["data-color"],children:["Vi bruker komponenter fra et"," ",d.jsx(c,{...e,children:"fantastisk designsystem"}),"."]}),args:{children:"fantastisk designsystem",href:"https://designsystemet.no/","data-size":"md","data-color":"neutral"}},o={name:"Example Link with Icon",render:e=>d.jsxs(c,{...e,children:[d.jsx(C,{"aria-hidden":!0,style:{marginRight:"var(--ds-size-1, 4px)",verticalAlign:"middle"}}),e.children," "]}),args:{children:"Kontakt oss",href:"mailto:designsystem@digdir.no","data-size":"md","data-color":"primary-color-red"}},s={name:"Example Large Neutral",args:{children:"Stor nøytral lenke",href:"#","data-size":"lg","data-color":"neutral"}},i={name:"Example External Link",args:{children:"Ekstern Lenke (Ny Fane)",href:"https://www.digdir.no/",target:"_blank",rel:"noopener noreferrer"}},l={name:"Test: Anchor Contract",tags:["!autodocs"],args:{children:"Åpne ekstern ressurs",href:"https://www.digdir.no/",target:"_blank",rel:"noopener noreferrer","data-color":"primary-color-red","data-size":"lg"},play:async({canvasElement:e})=>{const r=H(e).getByRole("link",{name:"Åpne ekstern ressurs"});await t(r).toHaveAttribute("href","https://www.digdir.no/"),await t(r).toHaveAttribute("target","_blank"),await t(r).toHaveAttribute("rel","noopener noreferrer"),await t(r).toHaveAttribute("data-color","primary-color-red"),await t(r).toHaveAttribute("data-size","lg")}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    children: 'Gå til designsystemet',
    href: 'https://designsystemet.no/'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example Link within Text',
  render: args => <Paragraph data-size={args['data-size']} data-color={args['data-color']}>
      Vi bruker komponenter fra et{' '}
      <Link {...args}>fantastisk designsystem</Link>.
    </Paragraph>,
  args: {
    children: 'fantastisk designsystem',
    href: 'https://designsystemet.no/',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var f,y,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example Link with Icon',
  render: args => <Link {...args}>
      {/* Add icon before text */}
      <EnvelopeClosedIcon aria-hidden style={{
      marginRight: 'var(--ds-size-1, 4px)',
      verticalAlign: 'middle'
    }} />
      {args.children} {/* Use children from args */}
    </Link>,
  args: {
    children: 'Kontakt oss',
    href: 'mailto:designsystem@digdir.no',
    // Use mailto link
    'data-size': 'md',
    'data-color': 'primary-color-red'
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,b,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Example Large Neutral',
  args: {
    children: 'Stor nøytral lenke',
    href: '#',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var L,v,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example External Link',
  args: {
    children: 'Ekstern Lenke (Ny Fane)',
    href: 'https://www.digdir.no/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var _,A,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Anchor Contract',
  tags: ['!autodocs'],
  args: {
    children: 'Åpne ekstern ressurs',
    href: 'https://www.digdir.no/',
    target: '_blank',
    rel: 'noopener noreferrer',
    'data-color': 'primary-color-red',
    'data-size': 'lg'
  },
  play: async ({
    canvasElement
  }) => {
    const link = within(canvasElement).getByRole('link', {
      name: 'Åpne ekstern ressurs'
    });
    await expect(link).toHaveAttribute('href', 'https://www.digdir.no/');
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(link).toHaveAttribute('data-color', 'primary-color-red');
    await expect(link).toHaveAttribute('data-size', 'lg');
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const I=["Default","InText","WithIcon","LargeNeutral","External","TestAnchorContract"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,External:i,InText:n,LargeNeutral:s,TestAnchorContract:l,WithIcon:o,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{i as E,n as I,N as L,o as W,s as a};
