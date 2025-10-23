import{j as o}from"./iframe-CIZAg-D5.js";import{L as i}from"./index-tJNKOLGQ.js";import{P as b}from"./paragraph-DztYfKgI.js";import{S as w}from"./EnvelopeClosed-CngYtAzf.js";import"./preload-helper-Dp1pzeXC.js";import"./link-Dzf4IhOG.js";import"./index-BoF7h9_D.js";import"./lite-DaUVFjkg.js";import"./useId-bpFEiQ5U.js";const R={title:"Components/Link",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Link is a clickable text or graphic for navigation, based on the anchor tag."}}},argTypes:{children:{control:"text",description:"The content to display inside the link.",defaultValue:"Gå til designsystemet"},href:{control:"text",description:"The URL the link points to.",defaultValue:"https://designsystemet.no/"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},target:{control:"text"},rel:{control:"text"}}},n={name:"Example Default",args:{children:"Gå til designsystemet",href:"https://designsystemet.no/"}},a={name:"Example Link within Text",render:e=>o.jsxs(b,{"data-size":e["data-size"],"data-color":e["data-color"],children:["Vi bruker komponenter fra et"," ",o.jsx(i,{...e,children:"fantastisk designsystem"}),"."]}),args:{children:"fantastisk designsystem",href:"https://designsystemet.no/","data-size":"md","data-color":"neutral"}},r={name:"Example Link with Icon",render:e=>o.jsxs(i,{...e,children:[o.jsx(w,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}}),e.children," "]}),args:{children:"Kontakt oss",href:"mailto:designsystem@digdir.no","data-size":"md","data-color":"accent"}},t={name:"Example Large Neutral",args:{children:"Stor nøytral lenke",href:"#","data-size":"lg","data-color":"neutral"}},s={name:"Example External Link",args:{children:"Ekstern Lenke (Ny Fane)",href:"https://www.digdir.no/",target:"_blank",rel:"noopener noreferrer"}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    children: 'Gå til designsystemet',
    href: 'https://designsystemet.no/'
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example Link with Icon',
  render: args => <Link {...args}>
      {/* Add icon before text */}
      <EnvelopeClosedIcon aria-hidden style={{
      marginRight: 'var(--ds-spacing-1, 4px)',
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
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var k,x,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Example Large Neutral',
  args: {
    children: 'Stor nøytral lenke',
    href: '#',
    'data-size': 'lg',
    'data-color': 'neutral'
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var L,E,z;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example External Link',
  args: {
    children: 'Ekstern Lenke (Ny Fane)',
    href: 'https://www.digdir.no/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(z=(E=s.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const P=["Default","InText","WithIcon","LargeNeutral","External"];export{n as Default,s as External,a as InText,t as LargeNeutral,r as WithIcon,P as __namedExportsOrder,R as default};
