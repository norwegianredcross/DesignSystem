import{j as c}from"./iframe-5cevemDy.js";import{L as d}from"./index-DT9ayRUH.js";import{P as T}from"./tooltip-zeEIoU85.js";import{S as C}from"./EnvelopeClosed-DkBslIji.js";const{expect:n,within:H}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Link",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Link is a clickable text or graphic for navigation, based on the anchor tag."}}},argTypes:{children:{control:"text",description:"The content to display inside the link.",defaultValue:"Gå til designsystemet"},href:{control:"text",description:"The URL the link points to.",defaultValue:"https://designsystemet.no/"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},target:{control:"text"},rel:{control:"text"}}},a={name:"Example Default",args:{children:"Gå til designsystemet",href:"https://designsystemet.no/"}},r={name:"Example Link within Text",render:e=>c.jsxs(T,{"data-size":e["data-size"],"data-color":e["data-color"],children:["Vi bruker komponenter fra et"," ",c.jsx(d,{...e,children:"fantastisk designsystem"}),"."]}),args:{children:"fantastisk designsystem",href:"https://designsystemet.no/","data-size":"md","data-color":"neutral"}},s={name:"Example Link with Icon",render:e=>c.jsxs(d,{...e,children:[c.jsx(C,{"aria-hidden":!0,style:{marginRight:"var(--ds-size-1, 4px)",verticalAlign:"middle"}}),e.children," "]}),args:{children:"Kontakt oss",href:"mailto:designsystem@digdir.no","data-size":"md","data-color":"accent"}},o={name:"Example Large Neutral",args:{children:"Stor nøytral lenke",href:"#","data-size":"lg","data-color":"neutral"}},i={name:"Example External Link",args:{children:"Ekstern Lenke (Ny Fane)",href:"https://www.digdir.no/",target:"_blank",rel:"noopener noreferrer"}},l={name:"Test: Anchor Contract",tags:["!autodocs"],args:{children:"Åpne ekstern ressurs",href:"https://www.digdir.no/",target:"_blank",rel:"noopener noreferrer","data-color":"accent","data-size":"lg"},play:async({canvasElement:e})=>{const t=H(e).getByRole("link",{name:"Åpne ekstern ressurs"});await n(t).toHaveAttribute("href","https://www.digdir.no/"),await n(t).toHaveAttribute("target","_blank"),await n(t).toHaveAttribute("rel","noopener noreferrer"),await n(t).toHaveAttribute("data-color","accent"),await n(t).toHaveAttribute("data-size","lg")}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    children: 'Gå til designsystemet',
    href: 'https://designsystemet.no/'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(u=r.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var f,x,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    'data-color': 'accent'
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,b,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Example Large Neutral',
  args: {
    children: 'Stor nøytral lenke',
    href: '#',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var L,v,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    'data-color': 'accent',
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
    await expect(link).toHaveAttribute('data-color', 'accent');
    await expect(link).toHaveAttribute('data-size', 'lg');
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const I=["Default","InText","WithIcon","LargeNeutral","External","TestAnchorContract"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,External:i,InText:r,LargeNeutral:o,TestAnchorContract:l,WithIcon:s,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{i as E,r as I,N as L,s as W,o as a};
