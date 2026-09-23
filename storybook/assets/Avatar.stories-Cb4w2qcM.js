import{j as e}from"./iframe-ChmhbHcN.js";import{A as i,a as g}from"./person2-w0GBodGl.js";const{expect:a,within:u}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Avatar",component:i,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"The name of the person the avatar represents.",defaultValue:"Ola Nordmann"},variant:{control:"select",options:["circle","square"],description:"The shape of the avatar.",defaultValue:"circle"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Color variant.",defaultValue:"primary-color-red"},"data-size":{control:"select",options:["xs","sm","md","lg"],description:"Size of the avatar.",defaultValue:"md"},initials:{control:"text",description:"Initials to display inside the avatar."},children:{control:"text",description:"Image, icon or initials to display inside the avatar."}}},o={name:"Example Default",args:{"aria-label":"Ola Nordmann"}},l={name:"Example with Initials",args:{"aria-label":"Ola Nordmann",children:"ON"}},c={name:"Example with Image",args:{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:g,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}},d={name:"Example Square",args:{"aria-label":"Ola Nordmann",variant:"square",children:"ON"}},n={name:"Test: Initials, Fallback And Attributes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(i,{"aria-label":"Kari Nordmann",initials:"KN"}),e.jsx(i,{"aria-label":"Ola Nordmann",children:"ON"}),e.jsx(i,{"aria-label":"Per Hansen"}),e.jsx(i,{"aria-label":"Anne Larsen",initials:"AL",variant:"square","data-size":"lg","data-color":"secondary-color-rust"})]}),play:async({canvasElement:v})=>{const t=u(v),m=t.getByRole("img",{name:"Kari Nordmann"}),s=t.getByRole("img",{name:"Ola Nordmann"}),b=t.getByRole("img",{name:"Per Hansen"}),p=t.getByRole("img",{name:"Anne Larsen"});a(m).toHaveAttribute("data-initials","KN"),a(u(s).getByText("ON")).toBeVisible(),a(s).not.toHaveAttribute("data-initials"),a(b).not.toHaveAttribute("data-initials"),a(b.textContent).toBe(""),a(p).toHaveAttribute("data-variant","square"),a(p).toHaveAttribute("data-size","lg"),a(p).toHaveAttribute("data-color","secondary-color-rust"),a(p).toHaveAttribute("data-initials","AL")}},r={name:"Test: Image Mode Accessibility",render:()=>e.jsx(i,{"aria-label":"Ola Nordmann",children:e.jsx("img",{src:g,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})}),play:async({canvasElement:v})=>{const t=u(v),m=t.getByRole("img",{name:"Ola Nordmann"});a(m).toBeVisible();const s=u(m).getByAltText("");a(s).toHaveAttribute("alt",""),a(s).toHaveAttribute("src",g),a(t.getAllByRole("img")).toHaveLength(1)}},V=["Default","WithInitials","WithImage","Square","TestInitialsAndAttributes","TestImageMode"];var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Example Default',
  args: {
    'aria-label': 'Ola Nordmann'
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var A,N,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Example with Initials',
  args: {
    'aria-label': 'Ola Nordmann',
    children: 'ON'
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var f,S,H;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Example with Image',
  args: {
    'aria-label': 'Ola Nordmann',
    children: <img src={avatarPlaceholder} alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
  }
}`,...(H=(S=c.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var B,T,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Example Square',
  args: {
    'aria-label': 'Ola Nordmann',
    variant: 'square',
    children: 'ON'
  }
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,E,j,R,q;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(E=n.parameters)==null?void 0:E.docs)==null?void 0:j.source},description:{story:`Tests the text modes of the Avatar: it is exposed as role="img" named via
aria-label; the initials prop is carried on data-initials (rendered by
CSS), string children render as visible text, and an avatar without
children or initials still works as a labelled fallback. Size, color and
variant are reflected as data attributes.`,...(q=(R=n.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var _,k,L,z,K;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    expect(avatar).toBeVisible();

    // Empty alt makes our photo decorative; no specific wrapper tag or
    // redundant aria-hidden attribute is required for that accessible result.
    const photo = within(avatar).getByAltText('');
    expect(photo).toHaveAttribute('alt', '');
    expect(photo).toHaveAttribute('src', avatarPlaceholder);

    // Exactly one accessible img is exposed (no double announcement)
    expect(canvas.getAllByRole('img')).toHaveLength(1);
  }
}`,...(L=(k=r.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:`Tests image mode: the avatar wrapper keeps the accessible name while the
inner img is decorative so the name is not announced twice.`,...(K=(z=r.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};const D=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Square:d,TestImageMode:r,TestInitialsAndAttributes:n,WithImage:c,WithInitials:l,__namedExportsOrder:V,default:P},Symbol.toStringTag,{value:"Module"}));export{D as A,o as D,d as S,c as W,l as a};
