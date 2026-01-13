import{j as o}from"./iframe-C1QSOCmb.js";import{L as i}from"./index-C5QIHUkn.js";import{P as z}from"./paragraph-F1LdzfTX.js";import{S}from"./EnvelopeClosed-B42luvbY.js";const w={title:"Components/Link",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Link is a clickable text or graphic for navigation, based on the anchor tag."}}},argTypes:{children:{control:"text",description:"The content to display inside the link.",defaultValue:"Gå til designsystemet"},href:{control:"text",description:"The URL the link points to.",defaultValue:"https://designsystemet.no/"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},target:{control:"text"},rel:{control:"text"}}},n={name:"Example Default",args:{children:"Gå til designsystemet",href:"https://designsystemet.no/"}},a={name:"Example Link within Text",render:e=>o.jsxs(z,{"data-size":e["data-size"],"data-color":e["data-color"],children:["Vi bruker komponenter fra et"," ",o.jsx(i,{...e,children:"fantastisk designsystem"}),"."]}),args:{children:"fantastisk designsystem",href:"https://designsystemet.no/","data-size":"md","data-color":"neutral"}},r={name:"Example Link with Icon",render:e=>o.jsxs(i,{...e,children:[o.jsx(S,{"aria-hidden":!0,style:{marginRight:"var(--ds-spacing-1, 4px)",verticalAlign:"middle"}}),e.children," "]}),args:{children:"Kontakt oss",href:"mailto:designsystem@digdir.no","data-size":"md","data-color":"accent"}},t={name:"Example Large Neutral",args:{children:"Stor nøytral lenke",href:"#","data-size":"lg","data-color":"neutral"}},s={name:"Example External Link",args:{children:"Ekstern Lenke (Ny Fane)",href:"https://www.digdir.no/",target:"_blank",rel:"noopener noreferrer"}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    children: 'Gå til designsystemet',
    href: 'https://designsystemet.no/'
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Example Link within Text',
  render: args => <Paragraph data-size={args['data-size']} data-color={args['data-color']}>\r
      Vi bruker komponenter fra et{' '}\r
      <Link {...args}>fantastisk designsystem</Link>.\r
    </Paragraph>,
  args: {
    children: 'fantastisk designsystem',
    href: 'https://designsystemet.no/',
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example Link with Icon',
  render: args => <Link {...args}>\r
      {/* Add icon before text */}\r
      <EnvelopeClosedIcon aria-hidden style={{
      marginRight: 'var(--ds-spacing-1, 4px)',
      verticalAlign: 'middle'
    }} />\r
      {args.children} {/* Use children from args */}\r
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
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var L,E,b;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example External Link',
  args: {
    children: 'Ekstern Lenke (Ny Fane)',
    href: 'https://www.digdir.no/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const v=["Default","InText","WithIcon","LargeNeutral","External"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:n,External:s,InText:a,LargeNeutral:t,WithIcon:r,__namedExportsOrder:v,default:w},Symbol.toStringTag,{value:"Module"}));export{s as E,a as I,V as L,r as W,t as a};
