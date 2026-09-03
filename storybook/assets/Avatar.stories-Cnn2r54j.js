import{j as e}from"./iframe-TM5PO6Gt.js";import{A as o,a as P}from"./person2-C_rUYKbJ.js";const{expect:a,within:g}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Avatar",component:o,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Color variant.",defaultValue:"primary-color-red"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},s={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},l={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},c={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:P,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},d={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}},n={name:"Test: Initials, Fallback And Attributes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{"aria-label":"Kari Nordmann",initials:"KN"}),e.jsx(o,{"aria-label":"Ola Nordmann",children:"ON"}),e.jsx(o,{"aria-label":"Per Hansen"}),e.jsx(o,{"aria-label":"Anne Larsen",initials:"AL",variant:"square","data-size":"lg","data-color":"secondary-color-rust"})]}),play:async({canvasElement:u})=>{const t=g(u),m=t.getByRole("img",{name:"Kari Nordmann"}),r=t.getByRole("img",{name:"Ola Nordmann"}),v=t.getByRole("img",{name:"Per Hansen"}),p=t.getByRole("img",{name:"Anne Larsen"});a(m).toHaveAttribute("data-initials","KN"),a(g(r).getByText("ON")).toBeVisible(),a(r).not.toHaveAttribute("data-initials"),a(v).not.toHaveAttribute("data-initials"),a(v.textContent).toBe(""),a(p).toHaveAttribute("data-variant","square"),a(p).toHaveAttribute("data-size","lg"),a(p).toHaveAttribute("data-color","secondary-color-rust"),a(p).toHaveAttribute("data-initials","AL")}},i={name:"Test: Image Mode Accessibility",render:()=>e.jsx(o,{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:P,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),play:async({canvasElement:u})=>{const t=g(u),m=t.getByRole("img",{name:"Ola Nordmann"});a(m.tagName).toBe("SPAN");const r=m.querySelector("img");a(r).toHaveAttribute("aria-hidden","true"),a(r).toHaveAttribute("alt",""),a(r.src).toContain("person2"),a(t.getAllByRole("img")).toHaveLength(1)}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,x,N;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var O,S,f;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var H,T,I;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var B,w,E,j,R;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Test: Initials, Fallback And Attributes',
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Avatar aria-label="Kari Nordmann" initials="KN" />
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
      <Avatar aria-label="Per Hansen" />
      <Avatar aria-label="Anne Larsen" initials="AL" variant="square" data-size="lg" data-color="secondary-color-rust" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Every avatar is an img labelled with the person's name
    const kari = canvas.getByRole('img', {
      name: 'Kari Nordmann'
    });
    const ola = canvas.getByRole('img', {
      name: 'Ola Nordmann'
    });
    const per = canvas.getByRole('img', {
      name: 'Per Hansen'
    });
    const anne = canvas.getByRole('img', {
      name: 'Anne Larsen'
    });

    // Initials are exposed on data-initials (visualized by CSS)
    expect(kari).toHaveAttribute('data-initials', 'KN');
    // The default (circle) shape is CSS, not an attribute - only an explicit
    // variant is reflected (see anne below).

    // String children render as visible text inside the avatar
    expect(within(ola).getByText('ON')).toBeVisible();
    expect(ola).not.toHaveAttribute('data-initials');

    // Fallback: no children and no initials still yields a labelled avatar
    expect(per).not.toHaveAttribute('data-initials');
    expect(per.textContent).toBe('');

    // Size, color and shape are reflected as attributes
    expect(anne).toHaveAttribute('data-variant', 'square');
    expect(anne).toHaveAttribute('data-size', 'lg');
    expect(anne).toHaveAttribute('data-color', 'secondary-color-rust');
    expect(anne).toHaveAttribute('data-initials', 'AL');
  }
}`,...(E=(w=n.parameters)==null?void 0:w.docs)==null?void 0:E.source},description:{story:`Tests the text modes of the Avatar: it is exposed as role="img" named via
aria-label; the initials prop is carried on data-initials (rendered by
CSS), string children render as visible text, and an avatar without
children or initials still works as a labelled fallback. Size, color and
variant are reflected as data attributes.`,...(R=(j=n.parameters)==null?void 0:j.docs)==null?void 0:R.description}}};var q,L,_,k,z;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Test: Image Mode Accessibility',
  render: () => <Avatar aria-label="Ola Nordmann">
      <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
    </Avatar>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The avatar wrapper is the accessible img, named by aria-label
    const avatar = canvas.getByRole('img', {
      name: 'Ola Nordmann'
    });
    expect(avatar.tagName).toBe('SPAN');

    // The actual photo is decorative: hidden from AT by the component
    const photo = avatar.querySelector('img') as HTMLImageElement;
    expect(photo).toHaveAttribute('aria-hidden', 'true');
    expect(photo).toHaveAttribute('alt', '');
    expect(photo.src).toContain('person2');

    // Exactly one accessible img is exposed (no double announcement)
    expect(canvas.getAllByRole('img')).toHaveLength(1);
  }
}`,...(_=(L=i.parameters)==null?void 0:L.docs)==null?void 0:_.source},description:{story:`Tests image mode: the avatar wrapper keeps the accessible name while the
inner img is automatically hidden from assistive technology (aria-hidden)
so the name is not announced twice.`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};const K=["Default","WithInitials","WithImage","Square","TestInitialsAndAttributes","TestImageMode"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Square:d,TestImageMode:i,TestInitialsAndAttributes:n,WithImage:c,WithInitials:l,__namedExportsOrder:K,default:C},Symbol.toStringTag,{value:"Module"}));export{D as A,s as D,d as S,c as W,l as a};
