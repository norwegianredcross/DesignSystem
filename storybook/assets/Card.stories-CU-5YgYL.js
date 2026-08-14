import{j as e}from"./iframe-o4TkDCSi.js";import{_ as de,$ as ce,H as B,B as y,F as pe,i as me,k as j,b as T,P as ie}from"./tooltip-C0wIq3ZF.js";import{S as he,a as ue}from"./TrashFill-Cg5knILj.js";const o=de,n=ce;o.displayName="Card";try{o.displayName="Card",o.__docgenInfo={description:"",displayName:"Card",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},variant:{defaultValue:{value:"'default'"},description:"Change the background color of the card.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tinted"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Instances of `Card.Block`, `Divider` or other React nodes",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const ge="/DesignSystem/storybook/assets/person-DWvtQrl6.png",{expect:t,within:f,userEvent:i,waitFor:Ce,fn:b}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/Card",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","tinted"],description:"Change the background color of the card.",defaultValue:"default"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element (e.g., <a> or <button>)",defaultValue:!1},children:{control:!1,description:"Card content (ReactNode)"}}},h={render:a=>e.jsxs(o,{...a,children:[e.jsxs(n,{children:[e.jsx("h3",{children:"Card Title"}),e.jsx("p",{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]}),e.jsx(n,{children:e.jsx("p",{children:"Another block of content."})}),e.jsx(n,{children:e.jsx("small",{children:"Footer text"})})]}),args:{"data-color":"neutral",variant:"default"}},u={render:a=>e.jsx(o,{...a,children:e.jsxs(n,{children:[e.jsx("h3",{children:"Tinted Card"}),e.jsx("p",{children:"This card uses the tinted variant."})]})}),args:{"data-color":"primary-color-red",variant:"tinted"}},g={name:"Example with Image",render:a=>e.jsxs(o,{...a,style:{maxWidth:"300px"},children:[e.jsx(n,{children:e.jsx("img",{src:"https://picsum.photos/seed/storybook/300/200",alt:"Random placeholder image",style:{width:"100%",display:"block",aspectRatio:"3 / 2",objectFit:"cover"}})}),e.jsxs(n,{children:[e.jsx("h3",{children:"Card with Image"}),e.jsx("p",{children:"The image uses an online placeholder."})]})]}),args:{"data-color":"neutral"}},C={render:a=>e.jsx(o,{...a,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("a",{href:"https://designsystemet.no/",children:[e.jsx("h3",{children:"Link Card"}),e.jsx("p",{children:"This entire card is a link."})]}),"data-color":"secondary-color-rust",variant:"tinted"}},v={render:a=>e.jsx(o,{...a,style:{maxWidth:"300px"}}),args:{asChild:!0,children:e.jsxs("button",{type:"button",onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{children:"Button Card"}),e.jsx("p",{children:"This entire card is a button."})]}),"data-color":"additional-color-ocean"}},x={render:a=>e.jsxs(o,{...a,children:[e.jsxs(n,{children:[e.jsx("h3",{children:"Composed Card"}),e.jsx("p",{children:"This card contains other components."}),e.jsx("div",{style:{marginTop:"var(--ds-size-4, 16px)"},children:e.jsx(y,{variant:"primary","data-size":"sm",children:"Action"})})]}),e.jsx(n,{children:e.jsx("small",{children:"Footer with more info"})})]}),args:{"data-color":"neutral",variant:"tinted"}},k={name:"Example Complex Composition",render:a=>{const r=[{value:"leder",label:"Daglig leder"},{value:"medlem",label:"Styremedlem"},{value:"ansatt",label:"Ansatt"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[e.jsxs(o,{...a,children:[e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(B,{level:3,"data-size":"xs",children:"Rolle 1"}),e.jsxs(y,{variant:"secondary","data-color":"danger","data-size":"sm",children:[e.jsx(he,{"aria-hidden":!0}),"Fjern"]})]})}),e.jsxs(n,{children:[e.jsxs(pe,{children:[e.jsx(me,{htmlFor:"rolle-select",children:"Velg rolle"}),e.jsx(j,{id:"rolle-select",children:r.map(({value:s,label:l},m)=>e.jsx(j.Option,{value:s,children:l},m))})]}),e.jsx(T,{label:"Fødsels- eller d-nummer"}),e.jsx(T,{label:"Etternavn"})]}),e.jsx(n,{children:e.jsxs(y,{variant:"secondary","data-color":"primary-color-red","data-size":"sm",children:["Legg til rolle",e.jsx(ue,{"aria-hidden":!0,style:{marginLeft:"4px"}})]})})]}),e.jsxs(o,{"data-color":"neutral",children:[e.jsx(n,{children:e.jsx("img",{src:ge,alt:"katt",style:{width:"100%",display:"block"}})}),e.jsxs(n,{children:[e.jsx(B,{level:3,"data-size":"sm",children:"Card Neutral"}),e.jsx(ie,{children:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."})]})]})]})},args:{"data-color":"primary-color-red","data-size":"md",variant:"default"},argTypes:{asChild:{control:!1},children:{control:!1}}},d={name:"Test: Card As Button Keyboard Operable",render:a=>e.jsx(o,{...a,style:{maxWidth:"320px"},children:e.jsxs("button",{type:"button",children:[e.jsx("h3",{children:"Meld deg som frivillig"}),e.jsx("p",{children:"Bli med på en aktivitet i din lokalforening."})]})}),args:{asChild:!0,"data-color":"additional-color-ocean",onClick:b()},play:async({canvasElement:a,args:r})=>{const l=f(a).getByRole("button",{name:/Meld deg som frivillig/});t(l).toHaveClass("ds-card"),t(l.tagName).toBe("BUTTON"),await i.tab(),t(l).toHaveFocus(),await i.keyboard("{Enter}"),t(r.onClick).toHaveBeenCalledTimes(1),await i.keyboard(" "),t(r.onClick).toHaveBeenCalledTimes(2),await i.click(l),t(r.onClick).toHaveBeenCalledTimes(3)}},c={name:"Test: Card Click Delegates To Heading Link",render:a=>e.jsxs(o,{style:{maxWidth:"320px"},"data-color":"neutral",children:[e.jsxs(n,{children:[e.jsx("h3",{children:e.jsx("a",{href:"#gi-et-bidrag",onClick:r=>{var s;r.preventDefault(),(s=a.onNavigate)==null||s.call(a)},children:"Gi et bidrag"})}),e.jsx(ie,{children:"Din støtte gjør at vi kan hjelpe flere mennesker i nød."})]}),e.jsx(n,{children:e.jsx(y,{variant:"secondary","data-size":"sm",onClick:()=>{var r;return(r=a.onReadMore)==null?void 0:r.call(a)},children:"Les mer"})})]}),args:{onNavigate:b(),onReadMore:b()},play:async({canvasElement:a,args:r})=>{const s=f(a),l=a.querySelector(".ds-card"),m=s.getByRole("link",{name:"Gi et bidrag"});await Ce(()=>{t(m).toHaveAttribute("id"),t(l).toHaveAttribute("data-clickdelegatefor",m.id)}),await i.click(s.getByText(/Din støtte gjør at vi kan hjelpe/)),t(r.onNavigate).toHaveBeenCalledTimes(1),t(r.onReadMore).not.toHaveBeenCalled(),await i.click(s.getByRole("button",{name:"Les mer"})),t(r.onReadMore).toHaveBeenCalledTimes(1),t(r.onNavigate).toHaveBeenCalledTimes(1),await i.click(m),t(r.onNavigate).toHaveBeenCalledTimes(2)}},p={name:"Test: Static Card Structure",render:a=>e.jsxs(o,{...a,style:{maxWidth:"320px"},children:[e.jsxs(n,{children:[e.jsx("h3",{children:"Om Røde Kors"}),e.jsx("p",{children:"Røde Kors er en frivillig, medlemsstyrt organisasjon."})]}),e.jsx(n,{children:e.jsx("p",{children:"Vi er til stede i lokalsamfunn over hele landet."})}),e.jsx(n,{children:e.jsx("small",{children:"Sist oppdatert 2026"})})]}),args:{"data-color":"neutral",variant:"tinted"},play:async({canvasElement:a})=>{const r=f(a),s=a.querySelector(".ds-card");t(s).not.toHaveAttribute("tabindex"),t(s).not.toHaveAttribute("role"),t(s).not.toHaveAttribute("data-clickdelegatefor"),await i.tab(),t(s).not.toHaveFocus(),t(s.contains(document.activeElement)).toBe(!1);const l=s.querySelectorAll(":scope > .ds-card__block");t(l).toHaveLength(3),t(r.getByRole("heading",{level:3,name:"Om Røde Kors"})).toBeVisible(),t(r.getByText(/til stede i lokalsamfunn/)).toBeVisible(),t(r.getByText("Sist oppdatert 2026")).toBeVisible()}};var w,S,H;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardBlock>
        <h3>Card Title</h3>
        <p>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this.
        </p>
      </CardBlock>
      <CardBlock>
        <p>Another block of content.</p>
      </CardBlock>
      <CardBlock>
        <small>Footer text</small>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'default'
  }
}`,...(H=(S=h.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var E,R,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardBlock>
        <h3>Tinted Card</h3>
        <p>This card uses the tinted variant.</p>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'primary-color-red',
    variant: 'tinted'
  }
}`,...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,_,z;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Example with Image',
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }}>
        <CardBlock>
          <img
      // --- Use a placeholder image URL ---
      src="https://picsum.photos/seed/storybook/300/200" // Example: 300x200 placeholder
      // --- End Change ---
      alt="Random placeholder image" // Update alt text
      style={{
        width: '100%',
        display: 'block',
        aspectRatio: '3 / 2',
        objectFit: 'cover'
      }} // Adjusted aspect ratio
      />
        </CardBlock>
        <CardBlock>
          <h3>Card with Image</h3>
          <p>The image uses an online placeholder.</p>
        </CardBlock>
      </Card>,
  args: {
    'data-color': 'neutral'
  }
}`,...(z=(_=g.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,N,L;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }} />,
  args: {
    asChild: true,
    children: <a href="https://designsystemet.no/">
        <h3>Link Card</h3>
        <p>This entire card is a link.</p>
      </a>,
    'data-color': 'secondary-color-rust',
    variant: 'tinted'
  }
}`,...(L=(N=C.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var W,M,O;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: '300px'
  }} />,
  args: {
    asChild: true,
    children: <button type="button" onClick={() => alert('Card clicked!')}>
        <h3>Button Card</h3>
        <p>This entire card is a button.</p>
      </button>,
    'data-color': 'additional-color-ocean'
  }
}`,...(O=(M=v.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var V,I,q;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardBlock>
        <h3>Composed Card</h3>
        <p>This card contains other components.</p>
        <div style={{
        marginTop: 'var(--ds-size-4, 16px)'
      }}>
          <Button variant="primary" data-size="sm">
            Action
          </Button>
        </div>
      </CardBlock>
      <CardBlock>
        <small>Footer with more info</small>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'tinted'
  }
}`,...(q=(I=x.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var K,P,U;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Example Complex Composition',
  render: args => {
    const options = [{
      value: 'leder',
      label: 'Daglig leder'
    }, {
      value: 'medlem',
      label: 'Styremedlem'
    }, {
      value: 'ansatt',
      label: 'Ansatt'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px'
    }}>
        <Card {...args}>
          <CardBlock>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
              <Heading level={3} data-size="xs">Rolle 1</Heading>
              <Button variant="secondary" data-color="danger" data-size="sm">
                <TrashFillIcon aria-hidden />
                Fjern
              </Button>
            </div>
          </CardBlock>
          <CardBlock>
            <Field>
              <Label htmlFor="rolle-select">Velg rolle</Label>
              <Select id="rolle-select">
                {options.map(({
                value,
                label
              }, index) => <Select.Option key={index} value={value}>
                    {label}
                  </Select.Option>)}
              </Select>
            </Field>
            <Textfield label="Fødsels- eller d-nummer" />
            <Textfield label="Etternavn" />
          </CardBlock>
          <CardBlock>
            <Button variant="secondary" data-color="primary-color-red" data-size="sm">
              Legg til rolle
              <PlusIcon aria-hidden style={{
              marginLeft: '4px'
            }} />
            </Button>
          </CardBlock>
        </Card>

        <Card data-color="neutral">
          <CardBlock>
            <img src={cat1} alt="katt" style={{
            width: '100%',
            display: 'block'
          }} />
          </CardBlock>
          <CardBlock>
            <Heading level={3} data-size="sm">Card Neutral</Heading>
            <Paragraph>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at supposedly
              about this.
            </Paragraph>
          </CardBlock>
        </Card>
      </div>;
  },
  args: {
    'data-color': 'primary-color-red',
    'data-size': 'md',
    variant: 'default'
  },
  argTypes: {
    asChild: {
      control: false
    },
    children: {
      control: false
    }
  }
}`,...(U=(P=k.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var G,$,Q,Y,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Test: Card As Button Keyboard Operable',
  render: args => <Card {...args} style={{
    maxWidth: '320px'
  }}>
      <button type="button">
        <h3>Meld deg som frivillig</h3>
        <p>Bli med på en aktivitet i din lokalforening.</p>
      </button>
    </Card>,
  args: {
    asChild: true,
    'data-color': 'additional-color-ocean',
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // asChild merges the Card onto the button: one element with both roles
    const cardButton = canvas.getByRole('button', {
      name: /Meld deg som frivillig/
    });
    expect(cardButton).toHaveClass('ds-card');
    expect(cardButton.tagName).toBe('BUTTON');

    // Keyboard-reachable via Tab
    await userEvent.tab();
    expect(cardButton).toHaveFocus();

    // Enter and Space activate the card
    await userEvent.keyboard('{Enter}');
    expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard(' ');
    expect(args.onClick).toHaveBeenCalledTimes(2);

    // Mouse click works too
    await userEvent.click(cardButton);
    expect(args.onClick).toHaveBeenCalledTimes(3);
  }
}`,...(Q=($=d.parameters)==null?void 0:$.docs)==null?void 0:Q.source},description:{story:`Tests the clickable card rendered as a button via asChild: the card element
IS the button (role button, ds-card styling), it is reachable with Tab, and
Enter, Space and mouse click all fire the click handler.`,...(J=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var X,Z,ee,ae,te;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Test: Card Click Delegates To Heading Link',
  render: args => <Card style={{
    maxWidth: '320px'
  }} data-color="neutral">
      <CardBlock>
        <h3>
          <a href="#gi-et-bidrag" onClick={event => {
          event.preventDefault();
          args.onNavigate?.();
        }}>
            Gi et bidrag
          </a>
        </h3>
        <Paragraph>Din støtte gjør at vi kan hjelpe flere mennesker i nød.</Paragraph>
      </CardBlock>
      <CardBlock>
        <Button variant="secondary" data-size="sm" onClick={() => args.onReadMore?.()}>
          Les mer
        </Button>
      </CardBlock>
    </Card>,
  args: {
    onNavigate: fn(),
    onReadMore: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const card = canvasElement.querySelector('.ds-card') as HTMLElement;
    const link = canvas.getByRole('link', {
      name: 'Gi et bidrag'
    });

    // The card wires itself to the heading link
    await waitFor(() => {
      expect(link).toHaveAttribute('id');
      expect(card).toHaveAttribute('data-clickdelegatefor', link.id);
    });

    // Clicking non-interactive content anywhere in the card activates the link
    await userEvent.click(canvas.getByText(/Din støtte gjør at vi kan hjelpe/));
    expect(args.onNavigate).toHaveBeenCalledTimes(1);
    expect(args.onReadMore).not.toHaveBeenCalled();

    // Clicking a nested interactive element is NOT delegated to the link
    await userEvent.click(canvas.getByRole('button', {
      name: 'Les mer'
    }));
    expect(args.onReadMore).toHaveBeenCalledTimes(1);
    expect(args.onNavigate).toHaveBeenCalledTimes(1);

    // Clicking the link itself still works normally
    await userEvent.click(link);
    expect(args.onNavigate).toHaveBeenCalledTimes(2);
  }
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`Tests the click-delegation behavior for cards with a heading link: the card
marks itself with data-clickdelegatefor pointing at the heading link, a
click anywhere on non-interactive card content forwards to the link, while
clicks on nested interactive elements (a button) are NOT delegated.`,...(te=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var re,ne,se,oe,le;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Test: Static Card Structure',
  render: args => <Card {...args} style={{
    maxWidth: '320px'
  }}>
      <CardBlock>
        <h3>Om Røde Kors</h3>
        <p>Røde Kors er en frivillig, medlemsstyrt organisasjon.</p>
      </CardBlock>
      <CardBlock>
        <p>Vi er til stede i lokalsamfunn over hele landet.</p>
      </CardBlock>
      <CardBlock>
        <small>Sist oppdatert 2026</small>
      </CardBlock>
    </Card>,
  args: {
    'data-color': 'neutral',
    variant: 'tinted'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvasElement.querySelector('.ds-card') as HTMLElement;

    // A static card has no interactive semantics
    expect(card).not.toHaveAttribute('tabindex');
    expect(card).not.toHaveAttribute('role');
    // No heading link -> no click delegation either
    expect(card).not.toHaveAttribute('data-clickdelegatefor');

    // Tab does not land on the card (nothing in it is focusable)
    await userEvent.tab();
    expect(card).not.toHaveFocus();
    expect(card.contains(document.activeElement)).toBe(false);

    // CardBlock composition: three separate blocks with their content
    const blocks = card.querySelectorAll(':scope > .ds-card__block');
    expect(blocks).toHaveLength(3);
    expect(canvas.getByRole('heading', {
      level: 3,
      name: 'Om Røde Kors'
    })).toBeVisible();
    expect(canvas.getByText(/til stede i lokalsamfunn/)).toBeVisible();
    expect(canvas.getByText('Sist oppdatert 2026')).toBeVisible();
  }
}`,...(se=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:se.source},description:{story:`Tests that a static (non-interactive) card stays non-focusable and role-less
while its CardBlock composition renders as separate blocks with the content
intact.`,...(le=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};const xe=["Default","Tinted","WithImage","AsLink","AsButton","ComposedContent","ComplexComposition","TestCardAsButton","TestCardClickDelegation","TestStaticCardStructure"],fe=Object.freeze(Object.defineProperty({__proto__:null,AsButton:v,AsLink:C,ComplexComposition:k,ComposedContent:x,Default:h,TestCardAsButton:d,TestCardClickDelegation:c,TestStaticCardStructure:p,Tinted:u,WithImage:g,__namedExportsOrder:xe,default:ve},Symbol.toStringTag,{value:"Module"}));export{C as A,fe as C,h as D,u as T,g as W,x as a,v as b,k as c};
