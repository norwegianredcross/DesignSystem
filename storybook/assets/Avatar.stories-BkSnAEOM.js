import{j as e}from"./iframe-CNNBmUgz.js";import{A as s,a as P}from"./person2-EcDIyG62.js";const{expect:a,within:g}=__STORYBOOK_MODULE_TEST__,K={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Color variant.",defaultValue:"accent"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},l={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},c={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},d={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:P,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},m={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}},n={name:"Test: Initials, Fallback And Attributes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(s,{"aria-label":"Kari Nordmann",initials:"KN"}),e.jsx(s,{"aria-label":"Ola Nordmann",children:"ON"}),e.jsx(s,{"aria-label":"Per Hansen"}),e.jsx(s,{"aria-label":"Anne Larsen",initials:"AL",variant:"square","data-size":"lg","data-color":"brand1"})]}),play:async({canvasElement:v})=>{const t=g(v),o=t.getByRole("img",{name:"Kari Nordmann"}),r=t.getByRole("img",{name:"Ola Nordmann"}),u=t.getByRole("img",{name:"Per Hansen"}),p=t.getByRole("img",{name:"Anne Larsen"});a(o).toHaveAttribute("data-initials","KN"),a(o).toHaveAttribute("data-variant","circle"),a(g(r).getByText("ON")).toBeVisible(),a(r).not.toHaveAttribute("data-initials"),a(u).not.toHaveAttribute("data-initials"),a(u.textContent).toBe(""),a(p).toHaveAttribute("data-variant","square"),a(p).toHaveAttribute("data-size","lg"),a(p).toHaveAttribute("data-color","brand1"),a(p).toHaveAttribute("data-initials","AL")}},i={name:"Test: Image Mode Accessibility",render:()=>e.jsx(s,{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:P,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),play:async({canvasElement:v})=>{const t=g(v),o=t.getByRole("img",{name:"Ola Nordmann"});a(o.tagName).toBe("SPAN");const r=o.querySelector("img");a(r).toHaveAttribute("aria-hidden","true"),a(r).toHaveAttribute("alt",""),a(r.src).toContain("person2"),a(t.getAllByRole("img")).toHaveLength(1)}};var b,h,A;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(A=(h=l.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var x,y,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var O,S,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(H=(S=d.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var f,T,I;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var B,w,E,j,R;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Test: Initials, Fallback And Attributes',
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Avatar aria-label="Kari Nordmann" initials="KN" />
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
      <Avatar aria-label="Per Hansen" />
      <Avatar aria-label="Anne Larsen" initials="AL" variant="square" data-size="lg" data-color="brand1" />
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
    expect(kari).toHaveAttribute('data-variant', 'circle'); // default shape

    // String children render as visible text inside the avatar
    expect(within(ola).getByText('ON')).toBeVisible();
    expect(ola).not.toHaveAttribute('data-initials');

    // Fallback: no children and no initials still yields a labelled avatar
    expect(per).not.toHaveAttribute('data-initials');
    expect(per.textContent).toBe('');

    // Size, color and shape are reflected as attributes
    expect(anne).toHaveAttribute('data-variant', 'square');
    expect(anne).toHaveAttribute('data-size', 'lg');
    expect(anne).toHaveAttribute('data-color', 'brand1');
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
so the name is not announced twice.`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};const C=["Default","WithInitials","WithImage","Square","TestInitialsAndAttributes","TestImageMode"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Square:m,TestImageMode:i,TestInitialsAndAttributes:n,WithImage:d,WithInitials:c,__namedExportsOrder:C,default:K},Symbol.toStringTag,{value:"Module"}));export{D as A,l as D,m as S,d as W,c as a};
